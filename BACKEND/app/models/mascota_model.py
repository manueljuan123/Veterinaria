from app.models.tipo_mascota_model import TipoMascotaModel
from app.models.usuario_model import UserModel
from peewee import AutoField, CharField, ForeignKeyField, IntegerField, TimestampField, DateTimeField
from datetime import datetime
from app.models import BaseModel

class MascotaModel(BaseModel):
    id_mascota = AutoField(column_name='id_mascota', primary_key=True)
    nombre = CharField(column_name='nombre', max_length=45)
    genero = CharField(column_name='genero', max_length=1)
    edad = CharField(column_name='edad')
    raza = CharField(column_name='raza')
    peso = CharField(column_name='peso')
    estado_salud = CharField(column_name='estado_salud', max_length=60)
    tipo_mascota = ForeignKeyField(TipoMascotaModel)
    usuario_id = ForeignKeyField(UserModel)
    creado = TimestampField(column_name='creado')
    actualizado = TimestampField(column_name='actualizado')
    eliminado = DateTimeField(column_name='eliminado', null=True)

    class Meta:
        table_name = 'mascotas'

    def delete(self):
        self.eliminado = None if self.eliminado is not None else datetime.now()
        self.save()

MascotaModel.create_table()