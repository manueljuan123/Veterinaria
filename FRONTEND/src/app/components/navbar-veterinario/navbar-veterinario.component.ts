import { Component, OnInit } from '@angular/core';
import { UsuarioI } from 'src/app/models/usuario.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-navbar-veterinario',
  templateUrl: './navbar-veterinario.component.html',
  styleUrls: ['./navbar-veterinario.component.css']
})
export class NavbarVeterinarioComponent implements OnInit {

  constructor(private auth:AuthService, private usuario: UsuarioService) { }

  veterinarios: UsuarioI[]

  ngOnInit(): void {
    this.usuario.listado_veterinarios_get_request().subscribe(res=>
      this.veterinarios = res)
  }

  async logout(){
    this.auth.cerrar_sesion()
  }

}
