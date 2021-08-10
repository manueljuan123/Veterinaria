from flask import Blueprint, request
from marshmallow.fields import Int
from peewee import IntegrityError
from marshmallow.exceptions import ValidationError

from datetime import datetime

from app.models.cita_model import CitaModel
from app.schemas.cita_schema import cita_schema, citas_schema

CitaRouter = Blueprint('cita', __name__, url_prefix='/cita')

@CitaRouter.route('/', methods=['GET'])
def list_citas():
    citas = CitaModel.select()
    return citas_schema.dumps(citas), 200


@CitaRouter.route('/get/<int:id>', methods=['GET'])
def get_citas(id):
    cita = CitaModel.get_or_none(id=id)
    return cita_schema.dump(cita),200


@CitaRouter.route('/create', methods=['POST'])
def create_cita():
    j = request.get_json()
    try:
        schema = cita_schema.load(j)
    except ValidationError as err:
        return {"errors": err.messages}, 422

    try:
        cita = CitaModel.create(**schema)
    except IntegrityError as err:
        return {"errors": f'{err}'}, 422

    return cita_schema.dump(cita), 201


@CitaRouter.route('/update/<int:id>', methods=['PUT'])
def update_cita(id):
    j = request.get_json()
    try:
        schema = cita_schema.load(j)
    except ValidationError as err:
        return {"errors": err.messages}, 422

    try:
        cita = CitaModel.update(update_at=datetime.now(), **schema).where(CitaModel.id_cita == id).execute()
    except IntegrityError as err:
        return {"errors": f'{err}'}, 422

    cita = CitaModel.get(id=id)
    return cita_schema.dump(cita), 202


@CitaRouter.route('/delete/<int:id>', methods=['DELETE'])
def delete_cita(id):
    cita = CitaModel.get_or_none(id=id)

    if cita is None:
        return {'errors':'Cita no existe'}, 400

    cita.delete()
    return cita_schema.dump(cita)