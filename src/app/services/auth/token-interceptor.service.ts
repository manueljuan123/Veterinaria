import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector, private router: Router) { }

  intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
    const token: string = localStorage.getItem('token');
    let tokenizedReq = req

    if(token){ 

    tokenizedReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${ token }`
      }
    
    });
  }
  return next.handle(tokenizedReq).pipe(
    catchError((err: HttpErrorResponse) => {

      if (err.status === 401){
        this.router.navigateByUrl('/login')
      }

      return throwError( err )
    })
  )


}
}
