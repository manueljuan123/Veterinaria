# importaciones instaladas o de terceros
from marshmallow import Schema, fields, validate, pre_load
from peewee import TextField

class UserSchema(Schema):
    id_usuario = fields.Int(dump_only=True) # dump_only solo sirve para responder, no requiere enviarlo en el json
    nombre = fields.Str(required=True,validate=[validate.Length(min=2, max=36)])
    apellido = fields.Str(required=True, validate=[validate.Length(min=2, max=36)])
    celular = fields.Str(required=True, validate=[validate.Length(min=10, max=10)]) 
    direccion = fields.Str(required=True)
    rol = fields.Int(dump_only=True)
    estado = fields.Int(dump_only=True)
    email = fields.Str(required=True, validate=validate.Email(error="Not a valid email address"))
    password = fields.Str(required=True, validate=[validate.Length(min=6, max=150)], load_only=True) # load_only solo sirve para recibirlo en el json, no lo responde
    remember_token = TextField(null=True) 
    created_at = fields.DateTime(dump_only=True) # dump_only solo sirve para responder, no requiere enviarlo en el json
    update_at = fields.DateTime(dump_only=True) # dump_only solo sirve para responder, no requiere enviarlo en el json
    delete_at = fields.DateTime(dump_only=True) # dump_only solo sirve para responder, no requiere enviarlo en el json

    @pre_load
    def process_data(self, data, **kwargs):
        # convertimos todo a minuscula
        data["email"] = data["email"].lower().strip()
        return data


user_schema = UserSchema()
users_schema = UserSchema(many=True)

