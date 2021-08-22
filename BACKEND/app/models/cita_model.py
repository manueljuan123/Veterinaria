from app.models.agenda_model import AgendaModel
from app.models.mascota_model import MascotaModel
from app.models.usuario_model import UserModel
from datetime import datetime

from peewee import AutoField, CharField, DateTimeField, ForeignKeyField, IntegerField, TextField, TimestampField

from app.models import BaseModel

class CitaModel(BaseModel):
    id_cita = AutoField(column_name='id_cita')
    agenda = ForeignKeyField(AgendaModel)
    motivo = CharField(column_name='motivo', max_length=250)
    precio_cita = IntegerField(column_name='precio_cita')
    usuario_id = ForeignKeyField(UserModel)
    paciente = ForeignKeyField(MascotaModel)
    creado = TimestampField(column_name='creado')
    actualizado = TimestampField(column_name='actualizado')
    eliminado = DateTimeField(column_name='eliminado', null=True)
    class Meta:
        table_name = 'citas'

    def delete(self):
        self.eliminado = None if self.eliminado is not None else datetime.now()
        self.save()


CitaModel.create_table()