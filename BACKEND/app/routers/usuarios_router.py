
from app.models.mascota_model import MascotaModel
from flask import Blueprint, request
from flask import json
from werkzeug.utils import secure_filename
import os
from flask.json import jsonify
from werkzeug.exceptions import abort
from app.models.rol_model import RolModel
from flask.helpers import make_response, send_file
from peewee import IntegrityError
from flask import Blueprint, request
from datetime import datetime

from app.schemas.usuario_schema import user_schema, users_schema
from app.models.usuario_model import UserModel
from marshmallow.exceptions import ValidationError





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
@UsuarioRouter.route('/actualizar', methods=['PUT'])
def actualizar_usuario():
    j = request.get_json()
    token = request.headers.get('Authorization')
    auth = UserModel.decode_jwt(token[7:])
    user = UserModel.select().where(UserModel.email==auth['payload']).get()
    try:
        schema = user_schema.load(j)
    except ValidationError as error:
        abort(make_response(jsonify(message="Dato inválido", error=True, errors=error.messages), 422))
    try:
        usuario = UserModel.update(actualizado=datetime.now(), **schema).where(UserModel.id==user.id).execute()
    except IntegrityError as err:
        return {"errors": f'{err}'}, 422

    usuario = UserModel.get(id=user.id)
    return user_schema.dump(usuario), 202

# Inhabilitar usuario en específico
@UsuarioRouter.route('/eliminar/<int:id>', methods=['DELETE'])
def eliminar_usuario(id):
    user = UserModel.get_or_none(id=id)
    
    if user is None:
        abort(make_response(jsonify(message="Usuario no existe", error=True), 404))

    user.delete()
    return user_schema.dump(user)


# Obtener usuario en específico
@UsuarioRouter.route('/get', methods=['GET'])
def obtener_usuario():
    token = request.headers.get('Authorization')
    auth = UserModel.decode_jwt(token[7:])
    user_token = UserModel.select().where(UserModel.email==auth['payload']).get()

    user = UserModel.get_or_none(id=user_token.id)
        
    return user_schema.dump(user), 200


# Obtener datos del usuario conectado en específico
@UsuarioRouter.route('/get/<int:id>', methods=['GET'])
def obtener_datos_usuario(id):
    usuario = UserModel.get_or_none(id=id)
    return make_response(jsonify(user_schema.dump(usuario))), 200


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


# Cargar foto usuario o veterinario
@UsuarioRouter.route('/uploader', methods=['POST'])
def subir_imagen_usuario():
      f = request.files['img']
      token = request.headers.get('Authorization')
      auth = UserModel.decode_jwt(token[7:])
      user = UserModel.select().where(UserModel.email==auth['payload']).get()
      currentUser = str(user.id)
      ruta = "BACKEND/imagen/perfil_"+currentUser+"/"+currentUser+".jpg"
      os.mkdir('imagen/'+'perfil_'+currentUser)
      f.save(os.path.join('imagen/'+'perfil_'+currentUser, secure_filename(currentUser+".jpg")))
      return ruta

# Mostrar foto del usuario
@UsuarioRouter.route('/mostrar_foto/<int:id>', methods=["GET"])
def mostrar(id):
    return send_file(f'/home/juan/Escritorio/Veterinaria/BACKEND/imagen/perfil_{id}/{id}.jpg', mimetype='image/jpg')




    
