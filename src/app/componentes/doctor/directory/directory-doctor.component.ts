import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/services/General/General-service.service';

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
  
  constructor(
    private GeneralService : GeneralServiceService,
    ){}
  ngOnInit(): void {
     
    this.GeneralService.getTitle("doctors").subscribe(
     {
       next: (value) => {this.MessageWelcome = value},
       error:(error) =>{window.alert(error.message)},
    
       }
         
    )   
    
    
 }

 getData() : void{

    this.GeneralService.getDataAll(this.UrlAll).subscribe(
      {
        next: (value) => {this.infoDataAll = value
        console.log(value)},
        error:(error) =>{window.alert("Inicie sesión para consultar esta información")},
        complete:()=>{this.ThereData = true,console.log(this.ThereData)}
      }
    )
 }

eraseData(): void{
  this.ThereData = false;
  this.infoDataAll = {}
  console.log(this.infoDataAll)
}
showImg() : any{
 return this.ThereData ? '' : 'https://cdn-icons-png.flaticon.com/512/4497/4497898.png';
 
}
}
