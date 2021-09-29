import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ConsultaService } from '../../services/email/consulta.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  form: FormGroup

  constructor(private fb:FormBuilder, private consulta:ConsultaService, private route:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      consulta: [''],
  },
)
  }

  limpiarFormulario(){
    this.form.patchValue({
      email:'',
      consulta:''
    })
  }

  async submit(){
    this.consulta.consultar_post_request(this.form.value)
    .subscribe(
      res =>{
        Swal.fire({
          title:"Muchas gracias",
          text:"Estaremos respondiendo prontamente tu consulta.",
          icon: 'success',
          showConfirmButton : false,
          timer: 3000
          }), this.limpiarFormulario()
        
      }
    )

  }
}