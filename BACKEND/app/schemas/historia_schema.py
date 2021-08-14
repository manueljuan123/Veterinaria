from marshmallow import Schema, fields
from app.schemas.usuario_schema import UserSchema
from app.schemas.mascota_schema import MascotaSchema
from app.schemas.tipo_cita_schema import TipoCitaSchema
from marshmallow import Schema, fields

class HistoriasSchema(Schema):
    id_historia = fields.Int(dump_only=True)
    observacion = fields.Str(required=True)
    fecha = fields.Date(required=True)
    tipo_cita = fields.Nested(TipoCitaSchema, dump_only=True)
    tipo_cita_id = fields.Int(required=True, load_only=True)
    mascota = fields.Nested(MascotaSchema)
    mascota_id = fields.Int(required=True, load_only=True)
    veterinario = fields.Nested(UserSchema)
    veterinario_id = fields.Int(required=True, load_only=True)
    creado = fields.DateTime(dump_only=True)
    actualizado = fields.DateTime(dump_only=True)
    eliminado = fields.DateTime(dump_only=True)

historia_schema = HistoriasSchema()
historias_schema = HistoriasSchema(many=True)

