
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
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
    if (this.authService.loggediIn && currentUser.rol.id === 1){
      this.router.navigate(['/vista-admin-gestion-usuarios'])
      return true;

    }else{
      return false;
    }
  
    if (currentUser && currentUser.rol.nombre === "Veterinario"){
      this.router.navigate(['vista-veterinario-inicio'])
      return true;
    }
  
    else if (currentUser && currentUser.rol.nombre === "Usuario"){
      this.router.navigate(['/usuario'])
      return true;
    }
  
      return false;
    }
  
}
