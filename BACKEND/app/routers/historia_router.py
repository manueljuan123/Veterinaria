from marshmallow.exceptions import ValidationError
from peewee import IntegrityError
from app.schemas.mascota_schema import MascotaSchema
from app.models.mascota_model import MascotaModel
from datetime import datetime
from flask import Blueprint, request
from app.schemas.historia_schema import historia_clinica_schema
HistoriaRouter = Blueprint('historia', __name__, url_prefix='/historia')

@HistoriaRouter.route('/create', methods=['POST'])
def create_historia():
    j = request.get_json()
    try:
        schema = historia_clinica_schema.load(j)
    except ValidationError as error:
        return {"errors": error.messages}, 422

    try:
        mascota = MascotaModel.create(**schema)
    except IntegrityError as error:
        return {"errors": f'{error}'}, 422


    response = {
        "message":"Historia creada con éxito",
        "error":False
    }
    return response