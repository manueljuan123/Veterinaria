import { Component, OnInit } from '@angular/core';
import { AgendaI } from 'src/app/models/agenda';
import { AgendaService } from '../../services/agenda/agenda.service';

@Component({
  selector: 'app-gestion-veterinarios',
  templateUrl: './gestion-veterinarios.component.html',
  styleUrls: ['./gestion-veterinarios.component.css']
})
export class GestionVeterinariosComponent implements OnInit {

  agendas: AgendaI[]

  constructor(private agendaService:AgendaService) { }

  ngOnInit(): void {
    this.agendaService.obtener_agendas_veterinario_get_request().subscribe(res =>
      this.agendas = res)
    }
  }


