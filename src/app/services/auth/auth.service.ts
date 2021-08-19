import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor{


  constructor(private http:HttpClient) { }

  BASE_URL = "http://localhost:5000"


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //Obtenemos el token del sessionStorage
    const token: string = sessionStorage.getItem('token');

    let request = req;
	//Validamos si el token existe
    if (token) {
      //Clonamos el token y lo mandamos en la cabecera de todas las peticiones HTTP
      request = req.clone({
        setHeaders: {
          //Autorizaciòn de tipo Bearer + token
          //El tipo de autorizaciòn depende del back
          authorization: `Bearer ${ token }`
        }
      });
    }
    return next.handle(request);
  }


  // LOGIN
  async send_login_post_request(data:any){
    try
    {const response = await fetch(this.BASE_URL+'/sesion/login',
                      {method:'POST',
                       body: JSON.stringify(data),
                       headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'Bearer' + sessionStorage.getItem('token')}})
                      return await response.json()
    }
                      
    catch(error){
      console.log(error)
    }
    return false

  }

  // REGISTRO
  async send_register_post_request(data:any){
    try
    {const response = await fetch(this.BASE_URL+'/sesion/register',
                              {method:'POST',
                               body: JSON.stringify(data),
                              headers:{
                                'Content-Type':'application/json'}})
                              return await response.json()
    }
    catch(error){
      console.log(error)
    }
    return false

}
}
