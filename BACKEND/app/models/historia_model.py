
from app.models.mascota_model import MascotaModel
from app.models.rol_model import RolModel
from peewee import AutoField, CharField, DateField, ForeignKeyField, TimestampField, DateTimeField
from app.models import BaseModel

class HistoriaClinicaModel(BaseModel):
    id_historia = AutoField(column_name='id_historia')
    fecha = DateField(column_name='fecha')
    motivo_consulta = CharField(column_name='motivo_consulta', max_length=255)
    medicamento = CharField(column_name='medicamento', max_length=100)
    alimentos = CharField(column_name='alimentos', max_length=100)
    habitos = CharField(column_name='habitos', max_length=255)
    antecedentes = CharField(column_name='antecedentes', max_length=255)
    id_mascota = ForeignKeyField(MascotaModel)
    id_veterinario = ForeignKeyField(RolModel)
    creado = TimestampField(column_name='creado')
    actualizado = TimestampField(column_name='actualizado')
    eliminado = DateTimeField(column_name='eliminado', null=True)

    class Meta:
        table_name = 'historia_clinica'


HistoriaClinicaModel.create_table()


