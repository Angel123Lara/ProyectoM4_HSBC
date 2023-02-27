import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/services/General/General-service.service';

@Component({
  selector: 'app-directory-speciality',
  templateUrl: './directory-speciality.component.html',
  styleUrls: ['./directory-speciality.component.css']
})
export class DirectorySpecialityComponent implements OnInit{
   
  public MessageWelcome : any;
  public UrlAll: string = "MedicalSpeciality/all";
  public infoDataAll: any;
  public ThereData : boolean = false;
  constructor(
    private GeneralService : GeneralServiceService
    ){}
  
  
    ngOnInit(): void {
     
    this.GeneralService.getTitle("MedicalSpeciality").subscribe(
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
  return this.ThereData ? '' : 'https://www.uv.mx/csalud/files/2013/02/becas-mexico-2019-apoyos-especialidad-medica-conacyt.jpg';
  
 }
}
