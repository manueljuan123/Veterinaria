from app.schemas.usuario_schema import UserSchema
from app.schemas.tipo_mascota_schema import TipoMascotaSchema
from marshmallow import Schema, fields

class MascotaSchema(Schema):
    id_mascota = fields.Int(dump_only=True)
    nombre = fields.Str(required=True)
    genero = fields.Str(required=True)
    edad = fields.Int(required=True)
    raza = fields.Str(required=True)
    peso = fields.Int(required=True)
    estado_salud = fields.Str(required=True)
    tipo_mascota = fields.Nested(TipoMascotaSchema)
    id_usuario = fields.Nested(UserSchema)
    #foto = BlobField(required=False)
    creado = fields.DateTime(dump_only=True)
    actualizado = fields.DateTime(dump_only=True)
    eliminado = fields.DateTime(dump_only=True)

mascota_schema = MascotaSchema()
mascotas_schema = MascotaSchema(many=True)
