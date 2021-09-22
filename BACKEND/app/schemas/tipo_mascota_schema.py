from app.models.tipo_mascota_model import TipoMascotaModel
from marshmallow import Schema, fields

class TipoMascotaSchema(Schema):
    id_tipo_mascota = fields.Int(load_only=True, dump_only=True)
    tipo_mascota = fields.Str(required=True)

tipo_mascota_schema = TipoMascotaSchema()
tipo_mascotas_schema = TipoMascotaSchema(many=True)