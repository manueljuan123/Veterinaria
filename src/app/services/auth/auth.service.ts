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

  private checkToken() : boolean {
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
    this.currentUser.next(null)
    
  }

  getToken(){
    return localStorage.getItem('token')
  }


}
