import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../services/agenda/agenda.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-veterinario-tabla',
  templateUrl: './veterinario-tabla.component.html',
  styleUrls: ['./veterinario-tabla.component.css']
})
export class VeterinarioTablaComponent implements OnInit {

  form:FormGroup

  constructor(private agendaS:AgendaService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre : new FormControl('', [Validators.required]),
      fecha_inicio : new FormControl('', [Validators.required]),
      fecha_final : new FormControl('', [Validators.required])
      
    })
  }

  async submit(){
    this.agendaS.crear_agenda_post_request(this.form.value)
    .subscribe(
      (res:any) => {
        Swal.fire({
            title: "Tu agenda ha sido creada.",
            text:"Espera por favor a tus clientes.",
            icon: 'success',
            showConfirmButton : false,
            timer: 3000 
            })
        },
        err => {
          Swal.fire({
            icon: 'error',
            title: 'ERROR',
            focusConfirm: false,
            confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Entendido',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            text: JSON.stringify(err)})
          })
        }


}
