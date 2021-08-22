import { Component, OnInit } from '@angular/core';
import { CitaI } from 'src/app/models/cita.interface';
import { CitaService } from '../../services/cita/cita.service';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.component.html',
  styleUrls: ['./gestion-citas.component.css']
})
export class GestionCitasComponent implements OnInit {

  citas : CitaI[]


  constructor(private citaService:CitaService, private router:Router) { }

  ngOnInit(): void {
    this.citaService.obtener_listado_citas_get_request().subscribe(res =>{
      this.citas = res;
    })
  }

}
