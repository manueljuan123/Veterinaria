from app.schemas.tipo_cita_schema import TipoCitaSchema
from app.models.tipo_cita_model import TipoCitaModel
from app.schemas.usuario_schema import UserSchema, UserTypeSchema
from app.schemas.mascota_schema import MascotaTypeSchema
from marshmallow import (Schema, fields)

class AgendaSchema(Schema):
    id_agenda =  fields.Int(dump_only=True)
    nombre = fields.Str(required=True)
    fecha_inicio = fields.DateTime(null=True)
    fecha_final = fields.DateTime(null=True)
    motivo = fields.Str(null=True)
    tipo_cita = fields.Nested(TipoCitaSchema, dump_only=True)
    tipo_cita_id = fields.Int(load_only=True, null=True)
    veterinario = fields.Nested(UserTypeSchema, dump_only=True)
    veterinario_id = fields.Int(load_only=True, null=True)
    usuario = fields.Nested(UserTypeSchema,null=True, dump_only=True)
    usuario_id = fields.Int(null=True, load_only=True)
    mascota = fields.Nested(MascotaTypeSchema, dump_only=True)
    mascota_id = fields.Int(null=True, load_only=True)
    creado = fields.DateTime(dump_only=True)
    actualizado = fields.DateTime(dump_only=True)
    eliminado = fields.DateTime(dump_only=True)


agenda_schema = AgendaSchema()
agendas_schema = AgendaSchema(many=True)


class AgendaTypeSchema(Schema):
    id_agenda = fields.Int(dump_only=True)
    nombre = fields.Str(dump_only=True)
    veterinario = fields.Int(dump_only=True)
    usuario = fields.Int(dump_only=True)
    fecha_inicio = fields.DateTime(dump_only=True)
    fecha_final = fields.DateTime(dump_only=True)
    disponible = fields.Bool(dump_only=True)

agenda_schema = AgendaSchema()
agendas_schema = AgendaSchema(many=True)
