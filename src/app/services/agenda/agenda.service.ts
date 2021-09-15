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

  // Obtener todas las agendas
  obtener_agendas_get_request(): Observable<AgendaI[]>{
    let ruta = this.BASE_URL+"/agenda/listado_agendas"
    return this.http.get<AgendaI[]>(ruta)
  }

  // Obtener las agendas de un veterinario pendientes
  obtener_agendas_veterinario_get_request(id?:any): Observable<AgendaI[]>{
    let ruta = this.BASE_URL+"/agenda/agendas_veterinario/"+id
    return this.http.get<AgendaI[]>(ruta)
  }
}
