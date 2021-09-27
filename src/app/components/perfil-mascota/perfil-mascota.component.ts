import { Component, OnInit } from '@angular/core';
import { MascotaI } from '../../models/mascota.interface';
import { MascotaService } from '../../services/macota/mascota.service';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-perfil-mascota',
  templateUrl: './perfil-mascota.component.html',
  styleUrls: ['./perfil-mascota.component.css']
})
export class PerfilMascotaComponent implements OnInit {

  mascota : MascotaI
  formIMG : FormGroup


  constructor(private auth:AuthService, private fb:FormBuilder, private mascotaS:MascotaService, private activateRoute:ActivatedRoute, private router:Router) { }
   
  form = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    genero: new FormControl('', [Validators.required]),
    edad: new FormControl('', [Validators.required]),
    raza: new FormControl('', [Validators.required]),
    peso: new FormControl('', [Validators.required]),
    estado_salud: new FormControl('', [Validators.required]),
    tipo_mascota: new FormControl('', [Validators.required]),
  })


  ngOnInit(): void {

    this.activateRoute.params.subscribe(({id})=>{
      if(id != undefined){
        this.mascotaS.obtener_mascota_get_request(id).subscribe(res =>{ 
          this.mascota = res;
          this.form.setValue({
            'nombre': this.mascota.nombre,
            'genero': this.mascota.genero,
            'edad': this.mascota.edad,
            'raza': this.mascota.raza,
            'peso': this.mascota.edad,
            'estado_salud': this.mascota.estado_salud,
            'tipo_mascota': this.mascota.tipo_mascota
          })
          
        });
          this.formIMG = this.fb.group({
            img: [null]
          })
      }
    })
  }

  actualizarMascota(){
    this.mascotaS.actualizar_mascota_put_request(this.form.value, this.mascota.id_mascota)
    .subscribe(
      (res:any) => {
        this.router.navigate(['/vista-editar-mi-mascota', this.mascota.id_mascota])
        Swal.fire({
            title: "Actualización exitosa",
            text:"Tu mascota ha sido actualizada",
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
            text: JSON.stringify(err) })
          })
  }

  volver(){
    this.router.navigate(['/vista-mis-mascotas-usuario'])
  }

  upload(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.formIMG.patchValue({
      img: file
    });
    this.formIMG.get('img').updateValueAndValidity()
    }
  
    onSubmit() {
      if (this.formIMG.valid) {
  
        var formData: any = new FormData();
        formData.append("img", this.formIMG.get('img').value);
  
        this.auth.postRequestSendForm('http://localhost:5000/mascota/uploader_mascota/'+this.mascota.id_mascota, formData).subscribe(
          
      (response: any) => {
                
          },
        (error) => {
     
          console.log(error.status);
        })
   
      } else {
        console.log("Form error");
      }
    }

}
