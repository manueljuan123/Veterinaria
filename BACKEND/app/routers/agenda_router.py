from marshmallow import exceptions
from peewee import IntegrityError
from app.models.usuario_model import UserModel
from flask import abort, Blueprint, request
from datetime import datetime

from flask.helpers import make_response
from flask.json import jsonify

from app.schemas.agenda_schema import agenda_schema, agendas_schema
from app.models.agenda_model import AgendaModel
from marshmallow.exceptions import ValidationError

AgendaRouter = Blueprint('agenda', __name__, url_prefix='/agenda')

# Crear agenda
@AgendaRouter.route('/crear', methods=['POST'])
def crear_agenda():
    j = request.get_json()
    token = request.headers.get('Authorization')
    auth = UserModel.decode_jwt(token[7:])
    user = UserModel.select().where(UserModel.email==auth['payload']).get()
    try:
        schema = agenda_schema.load(j)
    except ValidationError as err:
        abort (make_response(jsonify(message="Dato no válido", error=True, errors=err.messages), 422))
    
    try:
        agenda = AgendaModel.create(veterinario_id=user.id, **schema)
    except IntegrityError as err:
        return {"errors": f'{err}'}, 422

    return agenda_schema.dump(agenda), 201


# Actualizar agenda
@AgendaRouter.route('/actualizar', methods=['PUT'])
def actualizar_agenda():
    j = request.get_json()
    try:
        schema = agenda_schema.load(j)
    except ValidationError as err:
        abort(make_response(jsonify(message="Dato no válido", error=True, errors=err.messages), 404))

    try:
        agenda = AgendaModel.update(actualizado=datetime.now(), **schema)
    except IntegrityError as err:
        abort(make_response(jsonify(message="Dato no válido", error=True, errors=err.messages), 422))

    return agenda_schema.dump(agenda), 202


# Inhabilitar agenda en específico
@AgendaRouter.route('/eliminar/<int:id>', methods=['DELETE'])
def eliminar_agenda(id):
    agenda = AgendaModel.get_or_none(id_agenda=id)
    
    if agenda is None:
        abort(make_response(jsonify(message="Agenda no existe", error=True), 404))


    agenda.delete()
    return agenda_schema.dump(agenda)


# Obtener agenda en específico
@AgendaRouter.route('/<int:id>', methods=['GET'])
def obtener_agenda(id):
    agenda = AgendaModel.get_or_none(id_agenda=id)

    if agenda == None:
        abort(make_response(jsonify(message="Agenda no existe", error=True), 404))

    return agenda_schema.dump(agenda), 200


# Listado de todas las agendas
@AgendaRouter.route('/listado', methods=['GET'])
def list_agendas():
    agendas = AgendaModel.select().where(AgendaModel.eliminado.is_null(True))
    return agendas_schema.dumps(agendas),200


# Listado de todas las agendas de un veterinario en específico
@AgendaRouter.route('/veterinario', methods=['GET'])
def list_agendas_veterinario():
    token = request.headers.get('Authorization')
    auth = UserModel.decode_jwt(token[7:])
    user = UserModel.select().where(UserModel.email==auth['payload']).get()
    agendas = AgendaModel.select().where(AgendaModel.veterinario == user.id, AgendaModel.eliminado.is_null(True))
    return agendas_schema.dumps(agendas),200


# Listado de todas las agendas de un usuario en específico
@AgendaRouter.route('/usuario', methods=['GET'])
def list_agendas_usuario():
    token = request.headers.get('Authorization')
    auth = UserModel.decode_jwt(token[7:])
    user = UserModel.select().where(UserModel.email==auth['payload']).get()
    agendas = AgendaModel.select().where(AgendaModel.usuario == user.id, AgendaModel.eliminado.is_null(True))
    return agendas_schema.dumps(agendas),200

    