export interface UsuarioI {
    id:number;
    nombre: string;
    apellido: string;
    email: string;
    celular: string;
    direccion: string;
    remember_token: string;
    rol: Rol;
    eliminado: string;
}

export interface Rol{
    id:Number;
    nombre:string;
}
