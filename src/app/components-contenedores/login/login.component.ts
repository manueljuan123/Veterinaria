import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service'
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup
  id: string;
  response: ''

  constructor(private fb:FormBuilder, private auth: AuthService, private router: RouterModule, private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    this.form = this.fb.group({
    Email:'',
    password:''
  })
  }
  submit(id:number){
    console.log("submitted")
    console.log(this.form.value)

    this.auth.send_login_post_request(this.form.value).subscribe()
    /*if (this.auth) {
      this.router.navigate(['/citas', id])
    }else{
      return "error"
    }
    */
    
  }

}
