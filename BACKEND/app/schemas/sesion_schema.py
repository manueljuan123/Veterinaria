from marshmallow import Schema, fields, validate

class SesionSchema(Schema):
    email = fields.Email(required=True)
    password = fields.Str(required=True,validate=[validate.Length(min=6, max=36)])

sesion_schema = SesionSchema()