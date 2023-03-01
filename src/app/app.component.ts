import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoginServiceService } from './services/login/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'ProyectoM4_Angular';
  constructor(
    
    protected loginService : LoginServiceService
  ){
  }

 
  
  
  
}
