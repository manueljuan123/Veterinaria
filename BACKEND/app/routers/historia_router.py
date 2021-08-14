
from app.models.historia_model import HistoriasModel
from marshmallow.exceptions import ValidationError
from peewee import IntegrityError
from app.models.mascota_model import MascotaModel
from flask import Blueprint, request
from app.schemas.historia_schema import historia_schema,historias_schema
from app.schemas.tipo_cita_schema import tipo_cita_schema

HistoriaRouter = Blueprint('historia', __name__, url_prefix='/historia')

@HistoriaRouter.route('/crear', methods=['POST'])
def crear_historia():
    j = request.get_json()
    try:
        schema = historia_schema.load(j)
    except ValidationError as error:
        return {"errors": error.messages}, 422

    try:
        historia = HistoriasModel.create(**schema)

    except IntegrityError as error:
        return {"errors": f'{error}'}, 422

    return historia_schema.dump(historia)


