
from flask.helpers import make_response
from flask.json import jsonify
from werkzeug.exceptions import abort
from app.models.historia_model import HistoriasModel
from marshmallow.exceptions import ValidationError
from peewee import IntegrityError
from app.models.mascota_model import MascotaModel
from app.models.usuario_model import UserModel
from flask import Blueprint, request

from app.routers.email_router import envio_historia
from app.schemas.historia_schema import historia_schema,historias_schema
from app.schemas.tipo_cita_schema import tipo_cita_schema

HistoriaRouter = Blueprint('historia', __name__, url_prefix='/historia')

@HistoriaRouter.route('/crear', methods=['POST'])
def crear_historia():
    j = request.get_json()
    token = request.headers.get('Authorization')
    auth = UserModel.decode_jwt(token[7:])
    user = UserModel.select().where(UserModel.email==auth['payload']).get()
    try:
        schema = historia_schema.load(j)
    except ValidationError as err:
        abort(make_response(jsonify(message="Dato inválido", error=True, errors=err.messages), 422))

    try:
        historia = HistoriasModel.create(**schema)
        usuario = HistoriasModel.select(HistoriasModel.usuario)
        envio_historia(usuario.email)

    except IntegrityError as err:
        return {"errors": f'{err}'}, 422

    return make_response(historia_schema.dump(historia)), 201


# Listado de todas las historias
@HistoriaRouter.route('/listado', methods=['GET'])
def list_historias():
    historias = HistoriasModel.select()
    return historias_schema.dumps(historias),200


