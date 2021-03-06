import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CitaI } from 'src/app/models/cita.interface'

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http:HttpClient) { }

  BASE_URL = "http://localhost:5000"


  // Crear cita
  crear_cita_post_request(data:any){
    return this.http.post<any>(this.BASE_URL+'/cita/crear', data)
  }

  // Actualizar cita
  actualizar_cita_post_request(data:any){
    return this.http.put<any>(this.BASE_URL+'/cita/actualizar/id', data)
  }

  // Eliminar cita
  eliminar_cita_delete_request(data:any){
    return this.http.delete<any>(this.BASE_URL+'/cita/eliminar/id', data)
  }

  // Obtener todas las citas
  obtener_listado_citas_get_request(): Observable<CitaI[]>{
    let ruta = this.BASE_URL+"/cita/listado_citas"
    return this.http.get<CitaI[]>(ruta)
  }

  // Obtener una cita en específico
  obtener_cita_get_request(data:any){
    return this.http.get<any>(this.BASE_URL+"/cita/get/id", data)
  }
}




