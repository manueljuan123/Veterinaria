import { Component, OnInit } from '@angular/core';
import { UsuarioI } from 'src/app/models/usuario.interface';
import { AuthService } from '../../services/auth/auth.service';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-perfil-veterinario',
  templateUrl: './perfil-veterinario.component.html',
  styleUrls: ['./perfil-veterinario.component.css']
})
export class PerfilVeterinarioComponent implements OnInit {

  veterinario_datos : UsuarioI[];

  constructor(private veterinario:UsuarioService, private auth:AuthService) { }

  ngOnInit(): void {
    let id_vet = this.auth.getUser.id

    this.veterinario.obtener_usuario_get_request(id_vet).subscribe(res =>{
      this.veterinario_datos = res;
  })

 }
}
