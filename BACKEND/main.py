from flask import g
from flask_cors import CORS


from app.main import create_app
from config.settings import Config
from app.models import database

# ROUTES
# Normal USER
from app.routers.usuario_router import UserRouter
from app.routers.sesion_router import SesionRouter

# Citas
from app.routers.cita_router import CitaRouter

app = create_app(Config)


CORS(app=app, resources={r"*": {"origins": "*"}})

# USER BLUEPRINTS
app.register_blueprint(UserRouter)

# SESSION BLUEPRINTS
app.register_blueprint(SesionRouter)
app.register_blueprint(CitaRouter)



@app.before_request
def before_request():
    g.db = database
    g.db.connect()


@app.after_request
def after_request(response):
    g.db.close()
    return response


if __name__ == '__main__':
    app.run()