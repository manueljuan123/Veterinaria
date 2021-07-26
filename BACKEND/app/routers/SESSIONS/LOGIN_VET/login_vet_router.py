from flask import Blueprint, request, jsonify, make_response, session

from config.settings import Config

import jwt

from app.models.VETERINARIO.veterinario_model import VeterinarioModel

LoginVeterinarioRouter = Blueprint('loginVet', __name__, url_prefix='/loginVet')

@LoginVeterinarioRouter.route('/', methods=['POST'])
def authentication():
    json_datos = request.get_json()
    email = json_datos['email']
    password = json_datos['password']

    user = VeterinarioModel.get_or_none(VeterinarioModel.email == email)
    if user is None or not user.verify_password(password):
        response = {
            "message" : "Usuario no encontrado",
            "error" : True
        }
         
        return make_response({'WWW-Authenticate' : 'Basic realm: "Authentication Failed!"'})

    else:
        response = {
            "message" : "Usuario encontrado",
            "error" : False 
        }

        session['logged_in'] = True
        token = jwt.encode(
            {"some" : "paylod"},
            "secret", algorithm="HS256"
        )

        return token, response