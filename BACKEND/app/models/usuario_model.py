import jwt
# importaciones principales
from datetime import datetime, timedelta
# importaciones instaladas o de terceros
from flask import request, abort, jsonify, make_response, current_app as app
from marshmallow.fields import Email
from werkzeug.security import generate_password_hash, check_password_hash
from peewee import AutoField, BlobField, CharField, DateTimeField, Delete, ForeignKeyField, TimestampField
# importaciones propias
from app.models import BaseModel
from app.models.rol_model import RolModel

class UserModel(BaseModel):
    id = AutoField(column_name='id', primary_key=True)
    nombre = CharField(column_name='nombre', max_length=60)
    apellido = CharField(column_name='apellido', max_length=60)
    email = CharField(column_name='email', max_length=100, unique=True)
    password = CharField(column_name='password', max_length=150)
    celular = CharField(column_name='celular', max_length=10)
    direccion = CharField(column_name='direccion', max_length=255)
    remember_token = CharField(null=True, max_length=255)
    rol = ForeignKeyField(RolModel)
    creado = TimestampField(column_name='creado')
    actualizado = TimestampField(column_name='actualizado')
    eliminado = DateTimeField(column_name='eliminado', null=True)

    class Meta:
        table_name = 'usuarios'
    
    def save(self, *args, **kwargs):
        super(UserModel, self).save(*args, **kwargs)
    
    def verify_password(self, pwd: str)-> bool:
        return check_password_hash(self.password, pwd)

    def delete(self):
        self.eliminado = None if self.eliminado is not None else datetime.now()
        self.save()

    def create_jwt(self):
        payload = {'payload': self.email, 'exp': datetime.utcnow() + timedelta(hours=1)}
        self.remember_token = jwt.encode(payload=payload, key=app.config.get('SECRET_KEY'), algorithm="HS256")
        self.save()

    @staticmethod
    def decode_jwt(token):
        try:
            payload = jwt.decode(token, key=app.config.get('SECRET_KEY'), algorithms=["HS256"])
            
        except:
            abort(make_response(jsonify(message="No autorizado", error=True)), 401)  
        return payload


    @staticmethod
    def make_password(pwd: str)-> str:
        return generate_password_hash(pwd, method='sha256')

    @classmethod
    def create(cls, **query):
        query['password'] = cls.make_password(query['password'])
        return super().create(**query)

    @classmethod
    def login(cls, **kwargs):
        self: cls = cls.get_or_none(cls.email == kwargs['email'])
        
        if self is None or not self.verify_password(kwargs['password']):
            abort(make_response(jsonify(message='Lo sentimos, sus credenciales no son correctas. Verifique o regístrese antes de volver a intentarlo.', error=True),422))

        return self




UserModel.create_table()