import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../services/macota/mascota.service';
import { AuthService } from '../../services/auth/auth.service';
import { MascotaI } from 'src/app/models/mascota.interface';

@Component({
  selector: 'app-mis-mascotas-usu',
  templateUrl: './mis-mascotas-usu.component.html',
  styleUrls: ['./mis-mascotas-usu.component.css']
})
export class MisMascotasUsuComponent implements OnInit {

  mascotas : MascotaI[]

  constructor(private mascotaService:MascotaService, private auth:AuthService) { }
  
  userId = this.auth.getId()

  ngOnInit() {
    this.mascotaService.listado_mascotas_usuario_get_request(this.userId).subscribe(res =>
      this.mascotas = res)
  }

}
