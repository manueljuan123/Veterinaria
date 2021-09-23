import { Component, OnInit } from '@angular/core';
import { AgendaI } from 'src/app/models/agenda';
import { AgendaService } from '../../services/agenda/agenda.service';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.component.html',
  styleUrls: ['./gestion-citas.component.css']
})
export class GestionCitasComponent implements OnInit {

  agendas : AgendaI[]


  constructor(private agendaS:AgendaService) { }

  ngOnInit(): void {
    this.agendaS.obtener_agendas_get_request().subscribe(res =>{
      this.agendas = res;
    })
  }

}
