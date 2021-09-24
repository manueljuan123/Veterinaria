import { TipoCitaI } from './tipo_cita.interface';

export interface AgendaI {
    fecha_final:  Date;
    usuario:      Usuario;
    creado:       Date;
    actualizado:  Date;
    fecha_inicio: Date;
    motivo:       string;
    tipo_cita:    TipoCitaI; 
    mascota:      Mascota;
    eliminado:    null;
    id_agenda:    number;
    veterinario:  Usuario;
    nombre:       string;
}

interface Mascota {
    edad:         string;
    raza:         string;
    estado_salud: string;
    peso:         string;
    genero:       string;
    id_mascota:   number;
    nombre:       string;
}

interface Usuario {
    id:       number;
    celular:  string;
    nombre:   string;
    apellido: string;
    email:    string;
}

