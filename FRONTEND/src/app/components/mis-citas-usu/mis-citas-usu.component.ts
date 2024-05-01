import { Component, OnInit } from '@angular/core';
import { AgendaI } from 'src/app/models/agenda';
import { AgendaService } from 'src/app/services/agenda/agenda.service';

@Component({
  selector: 'app-mis-citas-usu',
  templateUrl: './mis-citas-usu.component.html',
  styleUrls: ['./mis-citas-usu.component.css']
})
export class MisCitasUsuComponent implements OnInit {

  agendas : AgendaI[];

  constructor(private agendaS:AgendaService) { }


  ngOnInit(): void {
    this.agendaS.obtener_agendas_usuario_get_request().subscribe(res =>
      this.agendas = res)
      }


}
