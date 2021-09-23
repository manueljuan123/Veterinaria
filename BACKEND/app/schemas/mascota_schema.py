from app.schemas.usuario_schema import UserSchema
from app.schemas.usuario_schema import UserTypeSchema
from marshmallow import Schema, fields

class MascotaSchema(Schema):
    id_mascota = fields.Int(dump_only=True)
    nombre = fields.Str(required=True)
    genero = fields.Str(required=True)
    edad = fields.Str(required=True)
    raza = fields.Str(required=True)
    peso = fields.Str(required=True)
    estado_salud = fields.Str(required=True)
    usuario = fields.Nested(UserTypeSchema, dump_only=True)
    tipo_mascota = fields.Str(required=True)
    creado = fields.DateTime(dump_only=True)
    actualizado = fields.DateTime(dump_only=True)
    eliminado = fields.DateTime(dump_only=True)

mascota_schema = MascotaSchema()
mascotas_schema = MascotaSchema(many=True)

class MascotaTypeSchema(Schema):
    id_mascota = fields.Int(dump_only=True)
    usuario = fields.Int(dump_only=True)
    tipo_mascota = fields.Str(dump_only=True)
    nombre = fields.Str(dump_only=True)
    genero = fields.Str(dump_only=True)
    edad = fields.Str(dump_only=True)
    raza = fields.Str(dump_only=True)
    peso = fields.Str(dump_only=True)
    estado_salud = fields.Str(dump_only=True)


