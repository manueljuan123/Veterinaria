from marshmallow import Schema, fields
from peewee import TimestampField

class HistoriaClinicaSchema(Schema):
    id_historia = fields.Int(dump_only=True)
    fecha = fields.Date(required=True)
    motivo_consulta = fields.Str(required=True)
    medicamento = fields.Str(required=True)
    alimentos = fields.Str(required=True)
    habitos = fields.Str(required=True)
    antecedentes = fields.Str(required=True)
    id_mascota = fields.Int(required=True)
    id_veterinario = fields.Int(required=True)
    creado = fields.DateTime(dump_only=True)
    actualizado = fields.DateTime(dump_only=True)
    eliminado = fields.DateTime(dump_only=True)

historia_clinica_schema = HistoriaClinicaSchema()