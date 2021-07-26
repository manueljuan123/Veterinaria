from datetime import datetime
from peewee import TextField,AutoField, CharField, DateTimeField, TimestampField, BlobField
from werkzeug.security import check_password_hash, generate_password_hash

from app.models import BaseModel

class VeterinarioModel(BaseModel):
    id_veterinario = AutoField(column_name='id_veterinario')
    nombre = CharField(column_name='nombre')
    apellido = CharField(column_name='apellido')
    foto = BlobField(column_name='foto')
    celular = CharField(column_name='celular')
    direccion = CharField(column_name='direccion')
    email = CharField(column_name='email', max_length=100, unique=True)
    password = CharField(column_name='password', max_length=150)
    remember_token = TextField(column_name='remember_token')
    created_at = TimestampField(column_name='created_at')
    update_at = TimestampField(column_name='update_at')
    delete_at = DateTimeField(column_name='delete_at', null=True)

    class Meta:
        table_name = 'veterinarios'
        

    def save(self, *args, **kwargs):
        self.make_password()
        super(VeterinarioModel, self).save(*args, **kwargs)

    def make_password(self):
        self.password = generate_password_hash(self.password, method='sha256')

    def verify_password(self, password):
        return check_password_hash(self.password, password)

    def delete(self):
        self.delete_at = None if self.delete_at is not None else datetime.now()
        self.save()


VeterinarioModel.create_table()