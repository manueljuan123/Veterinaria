import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private authService:AuthService, private router: Router){}
  
  canActivate(

    ): boolean {
      const currentUser = this.authService.getUser
      if (this.authService.loggediIn){
        return true;
      }else{
        this.router.navigate(['/login'])
        return false
      }

    }

  
  
}
