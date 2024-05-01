import { Component, OnInit } from '@angular/core';
import { MascotaI } from 'src/app/models/mascota.interface';
import { MascotaService } from '../../services/macota/mascota.service';

@Component({
  selector: 'app-tabla-mascota-admin',
  templateUrl: './tabla-mascota-admin.component.html',
  styleUrls: ['./tabla-mascota-admin.component.css']
})
export class TablaMascotaAdminComponent implements OnInit {

  mascotas : MascotaI[];

  constructor(private mascotaService:MascotaService) { }

  ngOnInit(): void {

    this.mascotaService.listado_mascotas_get_request().subscribe(res =>{
      this.mascotas = res;
    })
  }

}
