import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WelcomePageServiceService } from 'src/app/services/General/General-service.service';

@Component({
  selector: 'app-directory-doctor',
  templateUrl: './directory-doctor.component.html',
  styleUrls: ['./directory-doctor.component.css']
})
export class DirectoryDoctorComponent implements OnInit {
  public MessageWelcome : any;

  public infoDataAll : any;
  public UrlAll : String = "doctors/all"
  public ThereData : boolean = false;
  
  constructor(private WelcomeService : WelcomePageServiceService){}
  ngOnInit(): void {
     
    this.WelcomeService.getHome("doctors").subscribe(
     {
       next: (value) => {this.MessageWelcome = value},
       error:(error) =>{window.alert(error.message)},
       complete:() => {this.ThereData= true}
       }
         
    )   
    
    
 }

 getData() : void{

    this.WelcomeService.getDataAll(this.UrlAll).subscribe(
      {
        next: (value) => {this.infoDataAll = value
        console.log(value)},
        error:(error) =>{window.alert(error.message)},
        complete:()=>{this.ThereData = true,console.log(this.ThereData)}
      }
    )
 }

showImg() : any{
  return this.ThereData ? '' : 'https://cdn-icons-png.flaticon.com/512/4497/4497898.png';
}
}
