import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http:HttpClient) { }

  BASE_URL = "http://localhost:5000"

  // Consulta de un usuario no registrado
  consultar_post_request(data:any){
    return this.http.post<any>(this.BASE_URL+'/email/recibir_consulta', data)
  }
}
