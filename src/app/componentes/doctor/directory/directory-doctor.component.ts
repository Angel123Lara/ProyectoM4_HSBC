import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralServiceService } from 'src/app/services/General/General-service.service';

@Component({
  selector: 'app-directory-doctor',
  templateUrl: './directory-doctor.component.html',
  styleUrls: ['./directory-doctor.component.css']
})
export class DirectoryDoctorComponent implements OnInit {
  public MessageWelcome : any;
  public resultado : any[] = [];
  public infoDataAll : any;
  public key : any;
  public values : any;
  public UrlAll : String = "doctors/all"
  public ThereData : boolean = false;
  
  constructor(
    private GeneralService : GeneralServiceService,
    private router: Router
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
        error:(error) =>{
          window.alert(error.message)

        },
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
  this.router.navigate(['doctor/delete/' + element.id]);
  window.alert("¿Desea realmente eliminar el siguiente registro "+ element.name);
  
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
