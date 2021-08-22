
from peewee import CharField, SmallIntegerField
# importaciones propias
from app.models import BaseModel

class RolModel(BaseModel):
    id = SmallIntegerField(primary_key=True, column_name='id')
    nombre = CharField(column_name='nombre', max_length=20)

    class Meta:
        table_name = 'roles'


RolModel.create_table()