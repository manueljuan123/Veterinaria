
from peewee import AutoField, CharField
from app.models import BaseModel

class TipoCitaModel(BaseModel):
    tipo_cita = AutoField(column_name='tipo_cita', primary_key=True)
    nombre = CharField(column_name = 'nombre', max_length=70)
    precio = CharField(column_name='precio')


    class Meta:
        table_name = 'tipo_cita'


TipoCitaModel.create_table()