import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar-usuario',
  templateUrl: './navbar-usuario.component.html',
  styleUrls: ['./navbar-usuario.component.css']
})
export class NavbarUsuarioComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

async logout(){
  this.auth.cerrar_sesion()
}

}
