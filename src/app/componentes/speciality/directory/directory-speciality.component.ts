import { Component, OnInit } from '@angular/core';
import { WelcomePageServiceService } from 'src/app/services/General/General-service.service';

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
  constructor(private WelcomeService : WelcomePageServiceService){}
  ngOnInit(): void {
     
    this.WelcomeService.getHome("MedicalSpeciality").subscribe(
     {
       next: (value) => {this.MessageWelcome = value},
       error:(error) =>{window.alert(error.message)}
       }
         
    )            
 }
 getData() : void{

  this.WelcomeService.getDataAll(this.UrlAll).subscribe(
    {
      next: (value) => {this.infoDataAll = value
      console.log(this.infoDataAll)},
      error:(error) =>{window.alert(error.message)},
      complete:()=>{this.ThereData = true,console.log(this.ThereData)}
    }
  )

}

showImg() : any{
  return this.ThereData ? '' : 'https://www.uv.mx/csalud/files/2013/02/becas-mexico-2019-apoyos-especialidad-medica-conacyt.jpg';
  
 }
}
