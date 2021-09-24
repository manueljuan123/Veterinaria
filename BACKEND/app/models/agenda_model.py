from app.models.tipo_cita_model import TipoCitaModel
from datetime import datetime
from peewee import AutoField, BooleanField, CharField, DateTimeField, ForeignKeyField, IntegerField, TimestampField, _StringField

from app.models import BaseModel
from app.models.usuario_model import UserModel
from app.models.mascota_model import MascotaModel

class AgendaModel(BaseModel):
    id_agenda = AutoField(column_name='id_agenda', primary_key=True)
    nombre = CharField(column_name='nombre')
    fecha_inicio = DateTimeField(column_name='fecha_inicio', null=True)
    fecha_final = DateTimeField(column_name='fecha_final', null=True)
    motivo = CharField(column_name='motivo', null=True)
    tipo_cita = ForeignKeyField(TipoCitaModel, null=True)
    veterinario = ForeignKeyField(UserModel)
    usuario = ForeignKeyField(UserModel, null=True)
    mascota = ForeignKeyField(MascotaModel, null=True)
    creado = TimestampField(column_name='creado')
    actualizado = TimestampField(column_name='actualizado')
    eliminado = DateTimeField(column_name='eliminado', null=True)

    class Meta:
        table_name = 'agenda'


    def agenda_intervalo(segundos):
        minutos, segundos = divmod(segundos, 60)
        horas, minutos = divmod(minutos, 60)
        dias, horas = divmod(horas, 24)

        return dias, horas, minutos, segundos

    
    def delete(self):
        self.eliminado = None if self.eliminado is not None else datetime.now()
        self.save()


AgendaModel.create_table()