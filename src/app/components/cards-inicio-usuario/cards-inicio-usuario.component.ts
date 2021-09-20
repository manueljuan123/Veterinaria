import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgendaService } from 'src/app/services/agenda/agenda.service';
import { AgendaI } from '../../models/agenda';

@Component({
  selector: 'app-cards-inicio-usuario',
  templateUrl: './cards-inicio-usuario.component.html',
  styleUrls: ['./cards-inicio-usuario.component.css']
})
export class CardsInicioUsuarioComponent implements OnInit {

  agendas : AgendaI[];

  constructor(private agendaService:AgendaService, private router:Router) { }

  ngOnInit(): void {
    this.agendaService.obtener_agendas_get_request().subscribe(res =>{
      this.agendas = res;
    })
  }

  pushAgenda(id:any){
    this.router.navigate(['/vista-agendar-usuario', id])
  }
}
