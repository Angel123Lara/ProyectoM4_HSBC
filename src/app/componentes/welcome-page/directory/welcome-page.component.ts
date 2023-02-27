import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/services/General/General-service.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: []
})
export class WelcomePageComponent implements OnInit {

  public MessageWelcome : any;

  constructor(private GeneralService : GeneralServiceService){}
  
  ngOnInit(): void {
     
     this.GeneralService.getHome("Home").subscribe(
      {
        next: (value) => {this.MessageWelcome = value},
        error:(error) =>{window.alert(error.message)}
        }
          
     )            
  }

  getData() : void{

    this.GeneralService.getDataAll("Home").subscribe(
      {
        next: (value) => {
        console.log(value)},
        error:(error) =>{window.alert(error.message)}
      }
    )
 }
  
}
