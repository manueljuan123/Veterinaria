import { Statement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private authService:AuthService, private router: Router){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot

    ): boolean {
      const currentUser = this.authService.getUser
      if (currentUser){
        return true
      }
      this.router.navigate(['/login'], {
        queryParams : {returnUrl: state.url}
      });
      return false;
      }

    }

