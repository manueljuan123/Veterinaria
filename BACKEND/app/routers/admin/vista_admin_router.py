
from peewee import IntegrityError
from marshmallow.exceptions import ValidationError

from flask import Blueprint, request

from app.models.usuario_model import UserModel
from app.models.cita_model import CitaModel

from app.schemas.usuario_schema import user_schema, users_schema
from app.schemas.cita_schema import cita_schema, citas_schema
from app.schemas.agenda_schema import agenda_schema, agendas_schema



AdminRouter = Blueprint('admin', __name__, url_prefix='/admin')

@AdminRouter.route('/users', methods=['POST'])
def list_users():
    users = UserModel.select()
    return users_schema.dumps(users),200


@AdminRouter.route('/getUsuario/<int:id>', methods=['GET'])
def get_user(id):
    user = UserModel.get_or_none(id=id)
    return user_schema.dump(user), 200


@AdminRouter.route('/getCita/<int:id>', methods=['GET'])
def get_cita(id):
    cita = CitaModel.get_or_none(id_cita=id)
    return cita_schema.dump(cita),200


@AdminRouter.route('/eliminarCita/<int:id>', methods=['DELETE'])
def eliminar_cita(id):
    cita = CitaModel.get_or_none(id_cita=id)
    
    if cita is None:
        return {'errors':'cita no existe'}, 400

    cita.delete()
    return user_schema.dump(cita)


@AdminRouter.route('/citas', methods=['POST'])
def list_citas():
    citas = CitaModel.select()
    return citas_schema.dumps(citas), 200


''' 
@AdminRouter.route('/create_agenda', methods=['POST'])
def create_agenda():
    j = request.get_json()
    try:
        schema = agendas_schema.load(j)
    except ValidationError as error:
        return {"errors": error.messages}, 422

    try:
        agenda = AgendaModel.create(**schema)

    except IntegrityError as error:
        return {"errors": f'{error}'}, 422


    response = {
        "message":"Agenda creada con éxito",
        "error":False
    }
    return agenda_schema.dump(**agenda)

'''

    
