from werkzeug.exceptions import abort
from app.models.usuario_model import UserModel
from flask.helpers import make_response
from marshmallow.exceptions import ValidationError
from peewee import IntegrityError
from app.models.mascota_model import MascotaModel
from datetime import datetime
from flask import Blueprint, request

from flask import Blueprint, request, jsonify
from app.schemas.mascota_schema import mascota_schema, mascotas_schema

MascotaRouter = Blueprint('mascota', __name__, url_prefix='/mascota')

# Crear mascota
@MascotaRouter.route('/crear', methods=['POST'])
def create_mascota():
    j = request.get_json()
    token = request.headers.get('Authorization')
    auth = UserModel.decode_jwt(token[7:])
    user = UserModel.select().where(UserModel.email==auth['payload']).get()
    try:
        schema = mascota_schema.load(j)
    except ValidationError as err:
        abort(make_response(jsonify(message="Dato inválido", error=True, errors=err.messages), 422))

    try:
        mascota = MascotaModel.create(usuario_id=user.id, **schema)
    except IntegrityError as err:
        return {"errors": f'{err}'}, 422


    return make_response(mascota_schema.dump(mascota)), 201


# Actualizar mascota
@MascotaRouter.route('/actualizar/<int:id>', methods=['PUT'])
def actualizar_mascota(id):
    j = request.get_json()
    try:
        schema = mascota_schema.load(j)
    except ValidationError as err:
        abort(make_response(jsonify(message="Dato inválido", error=True, errors=err.messages), 422))

    try:
        mascota = MascotaModel.update(actualizado=datetime.now(),**schema).where(MascotaModel.id_mascota==id).execute()
    except IntegrityError as err:
        return {"errors": f'{err}'}, 422

    mascota = MascotaModel.get(id_mascota=id)
    return make_response(jsonify(mascota_schema.dump(mascota))), 201


# Inhabilitar a mascota en específico
@MascotaRouter.route('/delete/<int:id>', methods=['DELETE'])
def delete_mascota(id):
    mascota = MascotaModel.get_or_none(id_mascota=id)

    if mascota is None:
        abort(make_response(jsonify(message="Mascota no existe", error=True), 404))

    mascota.delete()

    return make_response(jsonify(mascota_schema.dump(mascota))), 201


# Listado de todas las mascotas
@MascotaRouter.route('/listado', methods=['GET'])
def list_mascotas():
    mascotas = MascotaModel.select()
    return mascotas_schema.dumps(mascotas), 200


# Obtener mascota en específica
@MascotaRouter.route('/get/<int:id>', methods=['GET'])
def obtener_mascota(id):
    mascota = MascotaModel.get_or_none(id_mascota=id)
    return make_response(jsonify(mascota_schema.dump(mascota))), 200


# Obtener las mascotas del usuario
@MascotaRouter.route('/all', methods=['GET'])
def obtener_mascotas_usuario():
    token = request.headers.get('Authorization')
    auth = UserModel.decode_jwt(token[7:])
    user = UserModel.select().where(UserModel.email==auth['payload']).get()
    mascotasUsuario = MascotaModel.select().where(MascotaModel.usuario_id == user.id).execute()
    return mascotas_schema.dumps(mascotasUsuario), 200








