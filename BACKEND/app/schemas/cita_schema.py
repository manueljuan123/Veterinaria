from app.schemas.usuario_schema import UserSchema, UserTypeSchema
from peewee import ForeignKeyField

from app.models.mascota_model import MascotaModel
from app.schemas.agenda_schema import AgendaSchema, AgendaTypeSchema
from app.schemas.mascota_schema import MascotaSchema, MascotaTypeSchema
from marshmallow import (Schema, fields, validate)

class CitaSchema(Schema):
    id_cita =  fields.Int(dump_only=True)
    agenda = fields.Nested(AgendaTypeSchema)
    agenda_id = fields.Int(required=True)
    motivo = fields.Str(required=True, validate=[validate.Length(max=250)])
    precio_cita = fields.Int(required=True)
    usuario = fields.Nested(UserTypeSchema)
    usuario_id = fields.Int(required=True) 
    paciente = fields.Nested(MascotaTypeSchema)
    paciente_id = fields.Int(required=True)
    creado = fields.DateTime(dump_only=True)
    actualizado = fields.DateTime(dump_only=True)
    eliminado = fields.DateTime(dump_only=True)


cita_schema = CitaSchema()
citas_schema = CitaSchema(many=True)