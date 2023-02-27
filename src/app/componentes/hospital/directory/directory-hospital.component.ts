import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/services/General/General-service.service';

@Component({
  selector: 'app-directory-hospital',
  templateUrl: './directory-hospital.component.html',
  styleUrls: ['./directory-hospital.component.css']
})
export class DirectoryHospitalComponent implements OnInit{
  public MessageWelcome : any;
  public infoDataAll : any;
  public UrlAll : String = "hospitals/all"
  public ThereData : boolean = false;


  constructor(
    private GeneralService : GeneralServiceService
    ){}
  
    ngOnInit(): void {
     
    this.GeneralService.getTitle("hospitals").subscribe(
     {
       next: (value) => {this.MessageWelcome = value},
       error:(error) =>{window.alert(error.message)}
       }
         
    )            
 }
 getData() : void{

  this.GeneralService.getDataAll(this.UrlAll).subscribe(
    {
      next: (value) => {this.infoDataAll = value
      console.log(this.infoDataAll)},
      error:(error) =>{window.alert(error.message)},
      complete:() =>{this.ThereData = true, console.log(this.ThereData)}
    }
  )

}

eraseData(): void{
  this.ThereData = false;
  this.infoDataAll = {}
  console.log(this.infoDataAll)
}

showImg() : any{
  return this.ThereData ? "" : "https://gobierno.cdmx.gob.mx/wp-content/uploads/2021/11/iconos-13.png";
}
   

}
