export interface CitaI {
    eliminado:   null;
    motivo:      string;
    creado:      Date;
    paciente:    Paciente;
    id_cita:     number;
    paciente_id: number;
    actualizado: Date;
    agenda:      Agenda;
    precio_cita: number;
}

interface Agenda {
    eliminado:    null;
    creado:       Date;
    id_agenda:    number;
    disponible:   boolean;
    veterinario:  Usuario;
    actualizado:  Date;
    fecha_inicio: Date;
    fecha_final:  Date;
    usuario:      Usuario;
}

interface Paciente {
    raza:         string;
    edad:         number;
    genero:       string;
    estado_salud: string;
    id_mascota:   number;
    peso:         number;
    nombre:       string;
}

interface Usuario {
    id: number;
    nombre: string;
    apellido: string;
}
