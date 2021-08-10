from marshmallow import (Schema, fields, validate)

class CitaSchema(Schema):
    id_cita =  fields.Int(dump_only=True)
    tipo_cita = fields.Str(required=True, validate=[validate.Length(max=60)])
    fecha = fields.DateTime(required=True)
    motivo = fields.Str(required=True, validate=[validate.Length(max=250)])
    precio_cita = fields.Int(required=True)
    #cliente = fields.Int(dump_only=True)
    id_usuario = fields.Int(required=True)    
    id_veterinario = fields.Int(required=True)
    create_at = fields.DateTime(dump_only=True)
    update_at = fields.DateTime(dump_only=True)
    delete_at = fields.DateTime(dump_only=True)


cita_schema = CitaSchema()
citas_schema = CitaSchema(many=True)