from flask import g
from flask_cors import CORS

from app.main import create_app
from config.settings import Config
from app.models import database

# ROUTES
# Usuario
from app.routers.sesion_router import SesionRouter
from app.routers.mascota_router import MascotaRouter
from app.routers.usuarios_router import UsuarioRouter
from app.routers.agenda_router import AgendaRouter

# Citas
from app.routers.historia_router import HistoriaRouter

# EMAIL
from app.routers.email_router import EmailRouter


app = create_app(Config)

CORS(app=app, resources={r"*": {"origins": "*"}})

# USER BLUEPRINTS
app.register_blueprint(MascotaRouter)
app.register_blueprint(UsuarioRouter)
app.register_blueprint(HistoriaRouter)
app.register_blueprint(AgendaRouter)
app.register_blueprint(EmailRouter)

# SESSION BLUEPRINTS
app.register_blueprint(SesionRouter)



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