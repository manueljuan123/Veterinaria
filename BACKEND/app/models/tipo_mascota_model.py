from app.models import BaseModel
from peewee import AutoField, CharField

class TipoMascotaModel(BaseModel):
    id_tipo_mascota = AutoField('id_tipo_mascota')
    tipo_mascota = CharField(column_name='tipo_mascota', max_length=50)

    class Meta:
        table_name = 'tipo_mascota'


TipoMascotaModel.create_table()