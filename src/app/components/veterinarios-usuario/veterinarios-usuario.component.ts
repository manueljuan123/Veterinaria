import { Component, OnInit } from '@angular/core';
import { UsuarioI } from '../../models/usuario.interface';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-veterinarios-usuario',
  templateUrl: './veterinarios-usuario.component.html',
  styleUrls: ['./veterinarios-usuario.component.css']
})
export class VeterinariosUsuarioComponent implements OnInit {

  veterinarios : UsuarioI[];

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.listado_veterinarios_get_request().subscribe(res =>{
      this.veterinarios = res;
    })
  }

}
