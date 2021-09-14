import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';

import { UsuarioI } from 'src/app/models/usuario.interface'
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {


  usuarios : UsuarioI[];

  
  

  constructor(private usuarioService:UsuarioService, private auth:AuthService, private router:Router) { }
  
  ngOnInit(): void {
    
    this.usuarioService.listado_usuarios_get_request().subscribe(res =>{
      this.usuarios = res;
    })
  
  }

}
