import { Component, OnInit } from '@angular/core';
import { CitaI } from '../../models/cita.interface';
import { CitaService } from '../../services/cita/cita.service';
import { AuthService } from '../../services/auth/auth.service';
import { UsuarioI } from '../../models/usuario.interface';

@Component({
  selector: 'app-mis-citas-usu',
  templateUrl: './mis-citas-usu.component.html',
  styleUrls: ['./mis-citas-usu.component.css']
})
export class MisCitasUsuComponent implements OnInit {

  citas : CitaI[];

  constructor(private citaService:CitaService, private auth:AuthService) { }


  ngOnInit(): void {
    this.citaService.obtener_listado_citas_usuario_get_request().subscribe(res =>
      this.citas = res)
      }


}
