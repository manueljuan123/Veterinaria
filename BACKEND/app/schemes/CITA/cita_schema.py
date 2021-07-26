from marshmallow import (Schema, fields, validate)

class CitaSchema(Schema):
    codigo_cita =  fields.Int(dump_only=True)
    tipo_cita = fields.Str(required=True, validate=[validate.Length(max=60)])
    fecha = fields.DateTime(required=True)
    motivo = fields.Str(required=True, validate=[validate.Length(max=250)])
    precio_cita = fields.Int(dump_only=True)
    #cliente = fields.Int(dump_only=True)
    id_usuario = fields.Int(dump_only=True)    
    cod_veterinario = fields.Int(dump_only=True)
    create_at = fields.DateTime(dump_only=True)
    update_at = fields.DateTime(dump_only=True)
    delete_at = fields.DateTime(dump_only=True)

    


cita_schema = CitaSchema()
citas_schema = CitaSchema(many=True)
