
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/models/credentials.models';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  creds: Credentials={
    email: '',
    password: ''
  };
  
  constructor(
    private loginService : LoginServiceService,
    private router: Router,
    
    ){
    }
  
  
  login(form: NgForm){
    console.log('Form value', form.value)
    this.loginService.login(this.creds)
  
    
    .subscribe(
      response => {
     console.log(response);
      this.router.navigate(['/']);
    })
  }


}
