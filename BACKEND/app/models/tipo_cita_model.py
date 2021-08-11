
from peewee import AutoField, CharField
from app.models import BaseModel

class TipoCitaModel(BaseModel):
    id_tipo_cita = AutoField(column_name='id_tipo_cita', primary_key=True)
    nombre = CharField(column_name = 'nombre', max_length=70)


    class Meta:
        table_name = 'tipo_cita'


TipoCitaModel.create_table()