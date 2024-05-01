import { Component, OnInit } from '@angular/core';
import { UsuarioI } from '../../models/usuario.interface';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-veterinario-usuario',
  templateUrl: './perfil-veterinario-usuario.component.html',
  styleUrls: ['./perfil-veterinario-usuario.component.css']
})
export class PerfilVeterinarioUsuarioComponent implements OnInit {

  veterinario : UsuarioI

  constructor(private activateRoute:ActivatedRoute, private veterinariosS:UsuarioService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({id})=>{
      if (id != undefined) {
        this.veterinariosS.obtener_datos_usuario(id).subscribe(res =>{
          this.veterinario = res;
        })
      }
    })
  }

}
