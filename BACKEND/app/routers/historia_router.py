
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

''' PDF '''
import smtplib
import getpass
import time
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter

HistoriaRouter = Blueprint('historia', __name__, url_prefix='/historia')

'''@HistoriaRouter.route('/crear', methods=['POST'])
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

    return make_response(historia_schema.dump(historia)), 201'''

@HistoriaRouter.route('/crear', methods=['POST'])
def crear_historia():
    json = request.get_json()

    observacion = json['observacion']
    medicamentos = json['medicamentos']
    fecha = json['fecha']
    tipo_cita_id = json['tipo_cita_id']
    veterinario_id = json['veterinario_id']
    usuario_id = json['usuario_id']
    mascota_id = json['mascota_id']
    email = json['email']

    c = canvas.Canvas("historia.pdf", pagesize = letter)
    c.setFont("Times-Roman", 12)
    c.setLineWidth(.3)

    c.drawString(30,750, "Historia Clínica Veterinaria Conectada")
    c.drawString(30, 700, "Mascota: "+mascota_id)
    c.drawString(30, 650, "Dueño: "+usuario_id)
    c.drawString(30, 600, "Contacto: "+email)
    c.drawString(30, 550, "Veterinario: "+veterinario_id)
    c.drawString(30, 500, "Tipo Cita: "+tipo_cita_id)
    c.drawString(30, 450, "Observación: "+observacion)
    c.drawString(30, 400, "Medicamentos: "+medicamentos)
    c.drawString(500, 750, fecha)
    c.line(400, 747, 580, 747)

    #c.drawString(275, 725, 'Historia Clínica Veterinaria Conectada')
    #c.drawString(500, 725, "suscriptor")
    
    c.showPage()
    c.save()

    time.sleep(1)
    remitente = "veterinariaconectada@hotmail.com"
    password = "adsi2026943"
    destinatario = email
    asunto = "HISTORIA CLÍNICA"
    cuerpo = "Gracias por visitar nuestros servicios, esta historia es gratuita y no tiene costo alguno. Vuelva pronto."
    ruta_adjunto = "historia.pdf"
    nombre_adjunto = "historia.pdf"

    mensaje = MIMEMultipart()
    mensaje['From'] = remitente
    mensaje['To'] = destinatario
    mensaje['Subject'] = asunto

    mensaje.attach(MIMEText(cuerpo,'plain'))


    archivo_adjunto = open(ruta_adjunto, 'rb')


    adjunto_MIME = MIMEBase('application', 'octet-stream')
    adjunto_MIME.set_payload((archivo_adjunto).read())

    encoders.encode_base64(adjunto_MIME)

    adjunto_MIME.add_header('Content-Disposition', "attachment; filename= %s" % nombre_adjunto)
    mensaje.attach(adjunto_MIME)

    sesion_smtp = smtplib.SMTP('smtp.live.com', 587)
    sesion_smtp.starttls()
    sesion_smtp.login(remitente, password)
    texto = mensaje.as_string()
    sesion_smtp.sendmail(remitente, destinatario, texto)
    sesion_smtp.quit()
    return "ENVIADO CON ÉXITO"
    

# Listado de todas las historias
@HistoriaRouter.route('/listado', methods=['GET'])
def list_historias():
    historias = HistoriasModel.select()
    return historias_schema.dumps(historias),200


