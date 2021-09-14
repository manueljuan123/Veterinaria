from flask import Blueprint, request
from peewee import IntegrityError
from marshmallow.exceptions import ValidationError

from datetime import datetime
from app.middlewares.sesion_middleware import sesion_middleware
from app.middlewares.vet_middleware import vet_middleware

from app.models.cita_model import CitaModel
from app.models.usuario_model import UserModel
from app.schemas.cita_schema import cita_schema, citas_schema

CitaRouter = Blueprint('cita', __name__, url_prefix='/cita')


# Obtener todas las citas
@CitaRouter.route('/listado_citas', methods=['GET'])
def list_citas():
    citas = CitaModel.select()
    return citas_schema.dumps(citas), 200

# Obtener una cita en específico
@CitaRouter.route('/get/<int:id>', methods=['GET'])
def get_cita(id):
    cita = CitaModel.get_or_none(id_cita=id)
    return cita_schema.dump(cita),200

# Crear una cita
@CitaRouter.route('/crear', methods=['POST'])
def crear_cita():
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

# Actualizar cita
@CitaRouter.route('/actualizar/<int:id>', methods=['PUT'])
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

# Eliminar cita
@CitaRouter.route('/eliminar/<int:id>', methods=['DELETE'])
def eliminar_cita(id):
    cita = CitaModel.get_or_none(id_cita=id)

    if cita is None:
        return {'errors':'Cita no existe'}, 400

    cita.delete()
    return cita_schema.dump(cita)


# Obtener citas del usuario
@CitaRouter.route('/listado_citas_usuario/<int:id>', methods=['GET'])
def obtener_citas(id):
    citas_usuario = CitaModel.select().join(UserModel).where(CitaModel.usuario_id == id).execute()
    return citas_schema.dumps(citas_usuario)




