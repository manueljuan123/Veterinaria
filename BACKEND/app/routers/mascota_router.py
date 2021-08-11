from flask.helpers import make_response
from marshmallow.exceptions import ValidationError
from peewee import IntegrityError
from app.schemas.mascota_schema import MascotaSchema
from app.models.mascota_model import MascotaModel
from datetime import datetime
from flask import Blueprint, request

from flask import Blueprint, request, jsonify
from app.schemas.mascota_schema import mascota_schema, mascotas_schema

MascotaRouter = Blueprint('mascota', __name__, url_prefix='/mascota')

@MascotaRouter.route('/crear', methods=['POST'])
def create_mascota():
    j = request.get_json()
    try:
        schema = mascota_schema.load(j)
    except ValidationError as error:
        return {"errors": error.messages}, 422

    try:
        mascota = MascotaModel.create(**schema)
    except IntegrityError as error:
        return {"errors": f'{error}'}, 422


    response = {
        "message":"Mascota creada con éxito",
        "error":False
    }
    return response



@MascotaRouter.route('/actualizar/<int:id>', methods=['PUT'])
def update_mascota(id):
    j = request.get_json()
    try:
        schema = mascota_schema.load(j)
    except ValidationError as error:
        return {"errors": error.messages},422

    try:
        mascota = MascotaModel.update(actualizado=datetime.now(),**schema).where(MascotaModel.id_mascota==id)
    except IntegrityError as error:
        return {"errors": f'{error}'}, 422

    mascota = MascotaModel.get(id_mascota=id)

    return make_response(jsonify(mascota_schema.dump(mascota))), 201



@MascotaRouter.route('/delete/<int:id>', methods=['DELETE'])
def delete_mascota(id):
    mascota = MascotaModel.get_or_none(id_mascota=id)

    if mascota is None:
        return {'errors': 'Mascota no existe'}, 400

    else:
        mascota.delete()
        response = {
        "message":"Mascota eliminada con éxito",
        "error": False
        }
        return response

