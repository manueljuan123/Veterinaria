import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AgendaI } from '../../models/agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  BASE_URL = "http://localhost:5000"


  constructor(private http:HttpClient) { }

    // Crear cita
  crear_agenda_post_request(data:any){
    return this.http.post<any>(this.BASE_URL+'/agenda/crear', data)
  }

  // Actualizar agenda
  actualizar_agenda_put_request(data:AgendaI): Observable<AgendaI>{
    let ruta = this.BASE_URL+"/agenda/actualizar"
    return this.http.put<any>(ruta, data)
  }

  // Obtener todas las agendas
  obtener_agendas_get_request(): Observable<AgendaI[]>{
    let ruta = this.BASE_URL+"/agenda/listado"
    return this.http.get<AgendaI[]>(ruta)
  }

  // Obtener las agendas de un veterinario pendientes
  obtener_agendas_veterinario_get_request(id?:any): Observable<AgendaI[]>{
    let ruta = this.BASE_URL+"/agenda/veterinario"
    return this.http.get<AgendaI[]>(ruta)
  }

  // Obtener las citas de un usuario pendientes
  obtener_agendas_usuario_get_request(id?:any): Observable<AgendaI[]>{
    let ruta = this.BASE_URL+"/agenda/usuario"
    return this.http.get<AgendaI[]>(ruta)
  }

  // Obtener agenda específica
  obtener_agenda_get_request(id?:any): Observable<AgendaI>{
    let ruta = this.BASE_URL+"/agenda/"+id
    return this.http.get<AgendaI>(ruta)
  }
}
