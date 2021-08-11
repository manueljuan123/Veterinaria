
from app.models.usuario_model import UserModel
from peewee import AutoField, BooleanField, DateTimeField, ForeignKeyField, IntegerField, TimestampField
from app.models import BaseModel

class AgendaModel(BaseModel):
    id_agenda = AutoField(column_name='id_agenda', primary_key=True)
    fecha = DateTimeField(column_name='fecha')
    disponible = BooleanField(column_name='disponible')
    veterinario = ForeignKeyField(UserModel)
    creado = TimestampField(column_name='creado')
    actualizado = TimestampField(column_name='actualizado')
    eliminado = DateTimeField(column_name='eliminado', null=True)

    class Meta:
        table_name = 'agenda'


AgendaModel.create_table()