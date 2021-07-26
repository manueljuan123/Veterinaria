# importaciones principales
from datetime import datetime
# importaciones instaladas o de terceros
from werkzeug.security import generate_password_hash, check_password_hash
from peewee import AutoField, CharField, DateTimeField, IntegerField, TextField, TimestampField, BlobField
# importaciones propias
from app.models import BaseModel

class UserModel(BaseModel):
    id_usuario = AutoField(column_name='id_usuario')
    nombre = CharField(column_name='nombre')
    apellido = CharField(column_name='apellido')
    foto = BlobField(column_name='foto')
    celular = CharField(column_name='celular', max_length=10, unique=True)
    direccion = CharField(column_name='direccion')
    rol = IntegerField(column_name='rol')
    estado = IntegerField(column_name='estado')
    email = CharField(column_name='email', max_length=100, unique=True)
    password = CharField(column_name='password', max_length=150)
    remember_token = TextField(column_name='remember_token')
    created_at = TimestampField(column_name='created_at')
    update_at = TimestampField(column_name='update_at')
    delete_at = DateTimeField(column_name='delete_at', null=True)

    class Meta:
        table_name = 'usuarios'


    def save(self, *args, **kwargs):
        self.make_password()
        super(UserModel, self).save(*args, **kwargs)

    def make_password(self):
        self.password = generate_password_hash(self.password, method='sha256')

    def verify_password(self, password):
        return check_password_hash(self.password, password)

    def delete(self):
        self.delete_at = None if self.delete_at is not None else datetime.now()
        self.save()

    
UserModel.create_table()