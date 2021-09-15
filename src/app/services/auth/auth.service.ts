import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsuarioI } from 'src/app/models/usuario.interface';
import { Router } from '@angular/router';

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



  constructor(private http:HttpClient, private router:Router ) {
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
 
  login(token:string, id):void{
    localStorage.setItem('token', token);
    localStorage.setItem('id', id)
    this.isLogin.next(true);
  }

  get getUser(): UsuarioI{ 
    return this.currentUser.value
  }


  cerrar_sesion(){
    localStorage.removeItem('token');
    localStorage.removeItem('id')
    this.currentUser.next(null)
    
  }

  getToken(){
    return localStorage.getItem('token')
  }

  getId(){
    return localStorage.getItem('id')
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
}
