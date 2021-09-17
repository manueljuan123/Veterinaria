from flask import abort, Blueprint, request
from datetime import datetime

from flask.helpers import make_response
from flask.json import jsonify

from app.schemas.agenda_schema import agenda_schema, agendas_schema
from app.models.agenda_model import AgendaModel
from peewee import IntegrityError
from marshmallow.exceptions import ValidationError

AgendaRouter = Blueprint('agenda', __name__, url_prefix='/agenda')

# Crear agenda
@AgendaRouter.route('/crear', methods=['POST'])
def crear_agenda():
    j = request.get_json()
    try:
        schema = agenda_schema.load(j)
    except:
        abort (make_response(jsonify(message="Dato no válido", error=True), 422))

    try:
        agenda = AgendaModel.create(**schema)
    except:
        abort(make_response(jsonify(message="Dato no válido", error=True), 422))

    return agenda_schema.dump(agenda), 201


# Actualizar agenda
@AgendaRouter.route('/actualizar/<int:id>', methods=['PUT'])
def actualizar_agenda(id):
    j = request.get_json()
    try:
        schema = agenda_schema.load(j)
    except:
        abort(make_response(jsonify(message="Dato no válido", error=True), 404))

    try:
        agenda = AgendaModel.update(actualizado=datetime.now(), **schema).where(AgendaModel.id_agenda==id).execute()
    except:
        abort(make_response(jsonify(message="Dato no válido", error=True), 422))

    agenda = AgendaModel.get(id_agenda=id)
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
def obtener_usuario(id):
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
@AgendaRouter.route('/veterinario/<int:id>', methods=['GET'])
def list_agendas_veterinario(id):
    agendas = AgendaModel.select().where(AgendaModel.veterinario==id) & AgendaModel.select().where(AgendaModel.eliminado.is_null(True))
    return agendas_schema.dumps(agendas),200