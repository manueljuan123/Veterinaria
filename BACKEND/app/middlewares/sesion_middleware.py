import jwt
from functools import wraps
from flask import request, current_app as app, abort, make_response, jsonify

def sesion_middleware(funcion):
    @wraps(funcion)
    def wrappers(*args, **kwargs):

        token = request.headers.get('Authorization')
        
        try:
            jwt.decode(token, key=app.config.get('SECRET_KEY'), algorithms=['HS256'])
        except:
            abort(make_response(jsonify(message='La sesión ha caducado', error=True), 401))
        return funcion(*args, **kwargs)

    return wrappers
