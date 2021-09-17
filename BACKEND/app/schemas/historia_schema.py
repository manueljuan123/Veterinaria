from marshmallow import Schema, fields
from app.schemas.usuario_schema import UserSchema, UserTypeSchema
from app.schemas.mascota_schema import MascotaSchema, MascotaTypeSchema
from app.schemas.tipo_cita_schema import TipoCitaSchema
from marshmallow import Schema, fields

class HistoriasSchema(Schema):
    id_historia = fields.Int(dump_only=True)
    observacion = fields.Str(required=True)
    medicamentos = fields.Str(required=True)
    fecha = fields.Date(required=True)
    tipo_cita = fields.Nested(TipoCitaSchema, dump_only=True)
    tipo_cita_id = fields.Int(required=True, load_only=True)
    veterinario = fields.Nested(UserTypeSchema, dump_only=True)
    veterinario_id = fields.Int(required=True, load_only=True) 
    usuario = fields.Nested(UserTypeSchema, dump_only=True)
    usuario_id = fields.Int(required=True, load_only=True)
    mascota = fields.Nested(MascotaTypeSchema, dump_only=True)
    mascota_id = fields.Int(load_only=True)
    creado = fields.DateTime(dump_only=True)
    actualizado = fields.DateTime(dump_only=True)
    eliminado = fields.DateTime(dump_only=True)

historia_schema = HistoriasSchema()
historias_schema = HistoriasSchema(many=True)

class HistoriaTypeSchema(Schema):
    id_historia = fields.Int(dump_only=True)
    observacion = fields.Str(dump_only=True)
    veterinario = fields.Int(dump_only=True)
    usuario = fields.Int(dump_only=True)
    tipo_cita = fields.Int(dump_only=True)
    mascota = fields.Int(dump_only=True)
    disponible = fields.Bool(dump_only=True)

historia_schema = HistoriasSchema()
historias_schema = HistoriasSchema(many=True)

