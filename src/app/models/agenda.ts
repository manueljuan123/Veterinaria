export interface AgendaI {
    eliminado:    null;
    nombre:       string;
    creado:       Date;
    id_agenda:    number;
    disponible:   boolean;
    veterinario:  Usuario;
    actualizado:  Date;
    fecha_inicio: Date;
    fecha_final:  Date;
    usuario:      Usuario;
}

interface Usuario {
    celular:  string;
    apellido: string;
    nombre:   string;
    id:       number;
}
