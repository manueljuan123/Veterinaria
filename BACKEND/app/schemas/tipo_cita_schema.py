from marshmallow import (Schema, fields)

class TipoCitaSchema(Schema):
    id_tipo_cita = fields.Int(dump_only=True)
    nombre = fields.Str(required=True)

tipo_cita_schema = TipoCitaSchema()
tipo_citas_schema = TipoCitaSchema(many=True)