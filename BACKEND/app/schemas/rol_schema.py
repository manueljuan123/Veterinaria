from marshmallow import Schema, fields


class RolSchema(Schema):
    id = fields.Int(dump_only=True)
    nombre = fields.Str(required=True)

rol_schema = RolSchema()