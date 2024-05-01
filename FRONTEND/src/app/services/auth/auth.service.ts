import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsuarioI } from 'src/app/models/usuario.interface';
import { Router } from '@angular/router';
import { TokenInterceptorService } from './token-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  BASE_URL = "http://localhost:5000"
  public currentUser:BehaviorSubject<UsuarioI>
  
  
  isLogin = new BehaviorSubject<boolean>(this.checkToken())
  admin = new BehaviorSubject<boolean>(null);
  veterinario = new BehaviorSubject<boolean>(null)
  usuario = new BehaviorSubject<boolean>(null)



  constructor(private http:HttpClient, private router:Router, private interceptor:TokenInterceptorService ) {
    this.currentUser = new BehaviorSubject(
      JSON.parse(localStorage.getItem('token'))
    )
    
   }

  login_user(data:any){
    return this.http.post<any>(this.BASE_URL+'/sesion/login', data)
  }

  register_user(data:any){
    return this.http.post<any>(this.BASE_URL+'/sesion/register', data)
  }

  checkToken() : boolean {
    return !!localStorage.getItem('token');
  }

  loggediIn(): Observable<boolean>{
    return this.isLogin.asObservable();
  }
 
  login(token:string):void{
    localStorage.setItem('token', token);
    this.isLogin.next(true);
  }

  get getUser(): UsuarioI{ 
    return this.currentUser.value
  }

  

  cerrar_sesion(){
    localStorage.removeItem('token');
    this.isLogin.next(null)
    
  }

  getToken(){
    return localStorage.getItem('token')
  }

  getId(){
    return localStorage.getItem('id')
  }

  getEmail(){
    return localStorage.getItem('email')
  }

 // Roles

currentU(): UsuarioI{ 
  return this.currentUser.value
}

 isAdmin() : Observable<boolean> {
  return this.admin.asObservable();
 }

 isVet() : Observable<boolean> {
  return this.veterinario.asObservable();
 }

 isUser() : Observable<boolean> {
  return this.usuario.asObservable();
 }


 postRequestSendForm(route: string, data?:any) {
  let config:any = {
    responseType: "json"
  }
  const token = this.getToken()
  const header = new HttpHeaders().set('Authorization', token);
  config["header"] = header;
  //Notese que como tercer parametro se pasa la configuracion de la request
  return this.http.post(route, data, config);
}

}
