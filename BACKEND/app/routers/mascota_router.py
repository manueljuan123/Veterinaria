from app.models.usuario_model import UserModel
from app.models.tipo_mascota_model import TipoMascotaModel
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

# Crear mascota
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


    return make_response(mascota_schema.dump(mascota)), 201


# Actualizar mascota
@MascotaRouter.route('/actualizar/<int:id>', methods=['PUT'])
def actualizar_mascota(id):
    j = request.get_json()
    try:
        schema = mascota_schema.load(j)
    except ValidationError as error:
        return {"errors": error.messages},422

    try:
        mascota = MascotaModel.update(actualizado=datetime.now(),**schema).where(MascotaModel.id_mascota==id).execute()
    except IntegrityError as error:
        return {"errors": f'{error}'}, 422

    mascota = MascotaModel.get(id_mascota=id)
    return make_response(jsonify(mascota_schema.dump(mascota))), 201


# Inhabilitar a mascota en específico
@MascotaRouter.route('/delete/<int:id>', methods=['DELETE'])
def delete_mascota(id):
    mascota = MascotaModel.get_or_none(id_mascota=id)

    if mascota is None:
        return {'errors': 'Mascota no existe'}, 400

    mascota.delete()

    return make_response(jsonify(mascota_schema.dump(mascota))), 201


# Listado de todas las mascotas
@MascotaRouter.route('listado_mascotas', methods=['GET'])
def list_mascotas():
    mascotas = MascotaModel.select()
    return mascotas_schema.dumps(mascotas), 200


# Obtener mascota en específica
@MascotaRouter.route('/get/<int:id>', methods=['GET'])
def obtener_mascota(id):
    mascota = MascotaModel.get_or_none(id_mascota=id)
    return make_response(jsonify(mascota_schema.dump(mascota))), 200


# Obtener las mascotas del usuario
@MascotaRouter.route('/all/<int:id>', methods=['GET'])
def obtener_mascotas_usuario(id):
    mascotasUsuario = MascotaModel.select().join(UserModel).where(MascotaModel.usuario_id == id).execute()
    return mascotas_schema.dumps(mascotasUsuario), 200


# Listado por tipo de mascotas
@MascotaRouter.route('listado_tipo/<int:id>', methods=['GET'])
def list_tipo_mascotas(id):
    tipo_mascota = MascotaModel.select().join(TipoMascotaModel).where(MascotaModel.tipo_mascota == id).execute()
    return make_response(jsonify(mascotas_schema.dump(tipo_mascota))), 200








