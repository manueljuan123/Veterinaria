from app.schemas.usuario_schema import UserSchema
from app.models.agenda_model import AgendaModel
from marshmallow import (Schema, fields)

class AgendaSchema(Schema):
    id_agenda =  fields.Int(dump_only=True)
    fecha = fields.DateTime(required=True)
    disponible = fields.Bool(required=True)
    veterinario = fields.Nested(UserSchema) 
    creado = fields.DateTime(dump_only=True)
    actualizado = fields.DateTime(dump_only=True)
    eliminado = fields.DateTime(dump_only=True)


agenda_schema = AgendaModel()
agendas_schema = AgendaModel(many=True)
