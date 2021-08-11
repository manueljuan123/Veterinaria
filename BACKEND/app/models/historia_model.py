from app.models.usuario_model import UserModel
from app.models.mascota_model import MascotaModel
from app.models.tipo_cita_model import TipoCitaModel


from peewee import AutoField, CharField, DateField, ForeignKeyField, TimestampField, DateTimeField
from app.models import BaseModel

class HistoriasModel(BaseModel):
    id_historia = AutoField(column_name='id_historia', primary_key=True)
    observacion = CharField(column_name='observacion', max_length=255)
    fecha = DateField(column_name='fecha')
    tipo_cita = ForeignKeyField(TipoCitaModel)
    mascota = ForeignKeyField(MascotaModel)
    veterinario = ForeignKeyField(UserModel)
    creado = TimestampField(column_name='creado')
    actualizado = TimestampField(column_name='actualizado')
    eliminado = DateTimeField(column_name='eliminado', null=True)

    class Meta:
        table_name = 'historias'


HistoriasModel.create_table()


