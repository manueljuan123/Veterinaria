import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../global-auth-styles.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  confirmation: string;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', Validators.required],
      direccion: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.MustMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ MustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  async submit() {
    this.auth.register_user(this.form.value).subscribe(
      (res) => {
        localStorage.setItem('token', res.remember_token);
        this.route.navigate(['/vista-inicio-usuario']);
        Swal.fire({
          title: 'Bienvenid@, ' + res.nombre + ',',
          text: '¡Gracias por registrarte!',
          position: 'top-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 3000,
        });
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.message,
          focusConfirm: false,
          confirmButtonText: '<i class="fa fa-thumbs-up"></i> Entendido',
          confirmButtonAriaLabel: 'Thumbs up, great!',
        });
      }
    );
  }
}
