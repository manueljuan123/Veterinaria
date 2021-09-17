from logging import NullHandler

from flask.json import jsonify
from werkzeug.exceptions import abort
from app.models.rol_model import RolModel
from flask.helpers import make_response
from peewee import IntegrityError
from marshmallow.exceptions import ValidationError
from flask import Blueprint, request
from datetime import datetime

from app.schemas.usuario_schema import user_schema, users_schema
from app.models.usuario_model import UserModel

from app.middlewares.sesion_middleware import sesion_middleware



UsuarioRouter = Blueprint('usuario', __name__, url_prefix='/usuario')

# Crear usuario con rol veterinario
@UsuarioRouter.route('/crear', methods=['POST'])
def crear_usuario():
    data = request.get_json()
    try:
        schema = user_schema.load(data)
    except:
        abort(make_response(jsonify(message="Dato inválido", error=True), 422))
    try:
        user = UserModel.create(rol_id=2, **schema)
    except IntegrityError as err:
        return {"errors": f'{err}'}, 422

    return user_schema.dump(user),201


# Actualizar usuario en específico
@UsuarioRouter.route('/actualizar/<int:id>', methods=['PUT'])
def actualizar_usuario(id):
    j = request.get_json()
    try:
        schema = user_schema.load(j)
    except:
        abort(make_response(jsonify(message="Dato inválido", error=True), 422))
    try:
        user = UserModel.update(actualizado=datetime.now(), **schema).where(UserModel.id==id).execute()
    except IntegrityError as err:
        return {"errors": f'{err}'}, 422

    user = UserModel.get(id=id)
    return user_schema.dump(user), 202

# Inhabilitar usuario en específico
@UsuarioRouter.route('/eliminar/<int:id>', methods=['DELETE'])
def eliminar_usuario(id):
    user = UserModel.get_or_none(id=id)
    
    if user is None:
        abort(make_response(jsonify(message="Usuario no existe", error=True), 404))

    user.delete()
    return user_schema.dump(user)


# Obtener usuario en específico
@UsuarioRouter.route('/get/<int:id>', methods=['GET'])
def obtener_usuario(id):
    user = UserModel.get_or_none(id=id)

    if user == None:
        abort(make_response(jsonify(message="Usuario no existe", error=True), 404))
        
    return user_schema.dump(user), 200


# Listado de todos los usuarios
@UsuarioRouter.route('/listado_usuarios', methods=['GET'])
def list_usuarios():
    users = UserModel.select()
    return users_schema.dumps(users),200

# Listado de todos los usuarios inhabilitados
@UsuarioRouter.route('/usuarios_inhabilitados', methods=['GET'])
def usu_inhabilitados():
    usuarios = UserModel.select().join(RolModel).where(UserModel.eliminado.is_null(False)) 
    return users_schema.dumps(usuarios),200


# Listado de trabajadores
@UsuarioRouter.route('/listado_empleados', methods=['GET'])
def list_empleados():
    usuarios = UserModel.select().join(RolModel).where(UserModel.rol_id!=1)
    return make_response(users_schema.dumps(usuarios)), 200


# Listado de veterinarios
@UsuarioRouter.route('/listado_veterinarios', methods=['GET'])
def list_veterinarios():
    veterinarios = UserModel.select().join(RolModel).where(UserModel.rol_id==2, UserModel.eliminado.is_null(True)) 
    return make_response(users_schema.dumps(veterinarios)), 200


# Listado de clientes
@UsuarioRouter.route('/listado_clientes', methods=['GET'])
def list_clientes():
    duenos = UserModel.select().join(RolModel).where(UserModel.rol_id==1)
    return make_response(users_schema.dumps(duenos)), 200






    
