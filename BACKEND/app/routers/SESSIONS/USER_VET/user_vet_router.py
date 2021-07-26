from datetime import datetime

from flask import Blueprint, request
from peewee import IntegrityError
from marshmallow.exceptions import ValidationError

from app.models.VETERINARIO.veterinario_model import VeterinarioModel
from app.schemes.VETERINARIO.veterinario_schema import veterinario_schema, veterinarios_schema

VeterinarioRouter = Blueprint('veterinario', __name__, url_prefix='/veterinario')

@VeterinarioRouter.route('/', methods=['GET'])
def list_vet():
    veterinarios = VeterinarioModel.select()
    return veterinarios_schema.dumps(veterinarios), 200


@VeterinarioRouter.route('/get/<int:id>', methods=['GET'])
def get_vet(id):
    veterinario = VeterinarioModel.get_or_none(id=id)
    return veterinario_schema.dump(veterinario), 200


@VeterinarioRouter.route('/create', methods=['POST'])
def create_vet():
    j = request.get_json()
    try:
        schema = veterinario_schema.load(j)
    except ValidationError as err:
        return {"errors": err.messages}, 422

    try:
        veterinario = VeterinarioModel.create(**schema)
    except IntegrityError as err:
        return {"errors": f'{err}'}, 422

    return veterinario_schema.dump(veterinario)


@VeterinarioRouter.route('/update/<int:id>', methods=['PUT'])
def update_vet(id):
    j = request.get_json()
    try:
        schema = veterinario_schema.load(j)
    except ValidationError as err:
        return {"errors": f'{err}'}, 422

    veterinario = VeterinarioModel.get(id=id)
    return veterinario_schema.dump(veterinario), 202


@VeterinarioRouter.route('/delete/<int:id>', methods=['DELETE'])
def delete_vet(id):
    veterinario = VeterinarioModel.get_or_none(id=id)

    if veterinario is None:
        return {'errors':'veterinario no existe'}, 400

    veterinario.delete()
    return veterinario_schema.dump(veterinario)