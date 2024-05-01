import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioI } from '../../models/usuario.interface';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-veterinarios-usuario',
  templateUrl: './veterinarios-usuario.component.html',
  styleUrls: ['./veterinarios-usuario.component.css']
})
export class VeterinariosUsuarioComponent implements OnInit {

  veterinarios : UsuarioI[];
  veterinario : UsuarioI;

  constructor(private activateRoute:ActivatedRoute,private usuarioService:UsuarioService, private route:Router) { }

  ngOnInit(): void {
    this.usuarioService.listado_veterinarios_get_request().subscribe(res =>{
      this.veterinarios = res;
    })

    this.activateRoute.params.subscribe(({id})=>{
      if (id != undefined) {
        this.usuarioService.obtener_datos_usuario(id).subscribe(res =>{
          this.veterinario = res;
        })
      }
    })

  }
  detalles(id:any){
    this.route.navigate(['/vista-detalles-veterinario', id])
  }
}
