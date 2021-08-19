import jwt
from flask import current_app as app, abort, make_response, jsonify
from functools import wraps

from flask import request
from app.models.usuario_model import UserModel


def vet_middleware(funcion):
    @wraps(funcion)
    def wrappers(*arg, **kwargs):
        token = request.headers.get('Authorization')

        try:
            auth = jwt.decode(token, key=app.config.get('SECRET_KEY'), algorithms=['HS256'])
        except:
            abort(make_response(jsonify(message='No tienes permisos para hacer este tipo de funciones', error=True), 401))
        
        user = UserModel.get_by_id(auth['sub'])
         
        if user.rol == 1:
            return {'msg':'sin permiso'}
        
        return wrappers(*arg, **kwargs)
