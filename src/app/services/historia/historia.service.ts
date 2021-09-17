import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistoriaI } from '../../models/historia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {

  constructor(private http:HttpClient) { }

  BASE_URL = "http://localhost:5000"

  // Crear historia
  crear_historia_post_request(email:any, data:any):Observable<HistoriaI[]>{
    return this.http.post<any>(this.BASE_URL+`/historia/crear/${email}`, data )
  }

  // Listado Historias
  listado_historias_get_request():Observable<HistoriaI[]>{
    let ruta = this.BASE_URL+"/historia/listado_historias"
    return this.http.get<HistoriaI[]>(ruta)
  }
}
