from app.models.usuario_model import UserModel
from datetime import datetime

from peewee import AutoField, CharField, DateTimeField, ForeignKeyField, IntegerField, TextField, TimestampField

from app.models import BaseModel

class CitaModel(BaseModel):
    id_cita = AutoField(column_name='id_cita')
    tipo_cita = CharField(column_name='tipo_cita')
    fecha = DateTimeField(column_name='fecha', unique=True)
    motivo = CharField(column_name='motivo', max_length=250)
    precio_cita = IntegerField(column_name='precio_cita')
    id_usuario = ForeignKeyField(UserModel)
    creado = TimestampField(column_name='creado')
    actualizado = TimestampField(column_name='actualizado')
    eliminado = DateTimeField(column_name='eliminado', null=True)
    class Meta:
        table_name = 'citas'

    def delete(self):
        self.eliminado = None if self.eliminado is not None else datetime.now()
        self.save()


CitaModel.create_table()