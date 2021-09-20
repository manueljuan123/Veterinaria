import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { UsuarioI } from 'src/app/models/usuario.interface';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  usuario : UsuarioI

  constructor(private auth:AuthService, private usuariosS:UsuarioService) { }

  userId = this.auth.getId()

  ngOnInit(): void {
    this.usuariosS.obtener_usuario_get_request().subscribe(res => {
      this.usuario = res;
    })
  }

}
