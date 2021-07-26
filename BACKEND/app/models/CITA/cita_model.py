from app.models.VETERINARIO.veterinario_model import VeterinarioModel
from app.models.USER.user_model import UserModel
from datetime import datetime

from peewee import AutoField, CharField, DateTimeField, ForeignKeyField, IntegerField, TextField, TimestampField

from app.models import BaseModel

class CitaModel(BaseModel):
    id_cita = AutoField(column_name='codigo_cita')
    tipo_cita = CharField(column_name='tipo_cita')
    fecha = DateTimeField(column_name='fecha', unique=True)
    motivo = CharField(column_name='motivo', max_length=250)
    precio_cita = IntegerField(column_name='precio_cita')
    #cliente = IntegerField(column_name='cliente')
    id_usuario = IntegerField(column_name='id_usuario')
    id_veterinario = IntegerField(column_name='id_veterinario')
    create_at = TimestampField(column_name='create_at')
    update_at = TimestampField(column_name='update_at')
    delete_at = TimestampField(column_name='delete_at')

    # Foreign keys
    id_usuario = ForeignKeyField(UserModel)
    id_veterinario = ForeignKeyField(VeterinarioModel)

    class Meta:
        table_name = 'citas'
        

    def delete(self):
        self.delete_at = None if self.delete_at is not None else datetime.now()
        self.save()


CitaModel.create_table()
