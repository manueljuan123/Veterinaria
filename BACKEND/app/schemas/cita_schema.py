from app.models.usuario_model import UserModel
from peewee import ForeignKeyField

from app.models.mascota_model import MascotaModel
from app.schemas.agenda_schema import AgendaSchema
from app.schemas.mascota_schema import MascotaSchema
from marshmallow import (Schema, fields, validate)

class CitaSchema(Schema):
    id_cita =  fields.Int(dump_only=True)
    agenda = fields.Nested(AgendaSchema)
    motivo = fields.Str(required=True, validate=[validate.Length(max=250)])
    precio_cita = fields.Int(required=True)
    id_usuario = fields.Int(required=True) 
    paciente = fields.Nested(MascotaSchema)
    creado = fields.DateTime(dump_only=True)
    actualizado = fields.DateTime(dump_only=True)
    eliminado = fields.DateTime(dump_only=True)


cita_schema = CitaSchema()
citas_schema = CitaSchema(many=True)