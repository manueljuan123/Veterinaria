from app.schemas.rol_schema import RolSchema
from marshmallow import Schema, fields, validate

class UserSchema(Schema):
    id = fields.Int(dump_only=True)
    nombre = fields.Str(required=True)
    apellido = fields.Str(required=True)
    email = fields.Str(required=True)
    password = fields.Str(load_only=True)
    celular = fields.Str(required=True)
    direccion = fields.Str(required=True)
    remember_token = fields.Str(dump_only=True)
    rol_id = fields.Int(load_only=True)
    rol = fields.Nested(RolSchema, dump_only=True)
    creado = fields.DateTime(dump_only=True)
    actualizado = fields.DateTime(dump_only=True)
    eliminado = fields.DateTime(dump_only=True)

user_schema = UserSchema()
users_schema = UserSchema(many=True)
class UserTypeSchema(Schema):
    id = fields.Int(dump_only=True)
    nombre = fields.Str(dump_only=True)
    apellido = fields.Str(dump_only=True)
    celular = fields.Str(dump_only=True)
    email = fields.Str(dump_only=True)

user_schema = UserSchema()
users_schema = UserSchema(many=True)

