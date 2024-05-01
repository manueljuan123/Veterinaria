
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router, private authService: AuthService){
    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean {
    const currentUser = this.authService.getUser;
    if (currentUser){
      console.log(currentUser)
      return false
    }else{ 
      console.log(currentUser)
      return true
    }   
}
}
