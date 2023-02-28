import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  public key : any;
  public values : any;

  public elementInfo : any;

  constructor(
    private GeneralService : GeneralServiceService,
    private router : Router
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
      complete:()=>{
        if(this.infoDataAll.length != 0){
          this.manageDate();
          this.ThereData = true, console.log(this.ThereData)
          }else{
            window.alert("No existe registro")
            this.ThereData = false
          }
        }
    }
  )

}

manageDate() : void{
  this.key = Object.keys(this.infoDataAll[0]).filter(item => item != 'id');
  this.values = Object.values(this.infoDataAll[0]);
 }

 eliminar(element : any){
  this.ThereData = false;
  this.router.navigate(['speciality/delete/' + element.id]);
  window.alert("¿Desea realmente eliminar el siguiente registro "+ element.name);
  
}

update(element: any){
  this.elementInfo = element;
  this.ThereData = true;
  this.infoDataAll = [];
  this.router.navigate(['speciality/update/' + element.id]);
  window.alert("El siguiente registro se editará" + element.name)
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
