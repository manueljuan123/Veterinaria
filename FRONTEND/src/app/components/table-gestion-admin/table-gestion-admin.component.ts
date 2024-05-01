import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioI } from 'src/app/models/usuario.interface';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-table-gestion-admin',
  templateUrl: './table-gestion-admin.component.html',
  styleUrls: ['./table-gestion-admin.component.css']
})
export class TableGestionAdminComponent implements OnInit {

  veterinarios : UsuarioI[]
  
  constructor(private veterinarioService:UsuarioService, private router:Router) { }

  ngOnInit(): void {
    this.veterinarioService.listado_veterinarios_get_request().subscribe(res =>{
      this.veterinarios = res;
    })
  }

}
