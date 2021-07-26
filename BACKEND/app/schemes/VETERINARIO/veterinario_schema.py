from marshmallow import Schema, fields, validate, pre_load
from peewee import TextField

class VeterinarioSchema(Schema):
    id_veterinario = fields.Int(dump_only=True)
    nombre = fields.Str(required=True, validate=[validate.Length(min=2, max=36)])
    apellido = fields.Str(required=True, validate=[validate.Length(min=2, max=36)])
    celular = fields.Str(required=True, validate=[validate.Length(min=10, max=10)])
    direccion = fields.Str(required=True)
    email = fields.Str(required=True, validate=[validate.Email(error='Not a valid email address')])
    password = fields.Str(required=True, validate=[validate.Length(min=6, max=150)], load_only=True)
    remember_token = TextField(null=True) 
    created_at = fields.DateTime(dump_only=True)
    update_at = fields.DateTime(dump_only=True)
    delete_at = fields.DateTime(dump_only=True)

    @pre_load
    def process_data(self, data, **kwargs):
        data["email"] = data["email"].lower().strip()
        return data

veterinario_schema = VeterinarioSchema()
veterinarios_schema = VeterinarioSchema(many=True)
