import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalData } from 'src/app/models/hospital.models';
import { GeneralServiceService } from 'src/app/services/General/General-service.service';
import { DirectoryHospitalComponent } from '../directory/directory-hospital.component';

@Component({
  selector: 'app-update-hosp',
  templateUrl: './update-hosp.component.html',
  styleUrls: ['./update-hosp.component.css']
})
export class UpdateHospComponent {
  contenido : HospitalData = {
    name : '',
    address : '',
    phone : ''
  };
  public existError : boolean = false;
  public errores : any;
  public erroresAux : any;
  public keyError : any;
  public id : any;
  public sucessful : boolean = false;

  constructor(
    private GeneralService : GeneralServiceService,
    private infoService : DirectoryHospitalComponent,
    private router : Router,
    private route : ActivatedRoute
    
    
  ){  }

    ngOnInit(): void {
      
      console.log(this.infoService.elementInfo)
      this.contenido = this.infoService.elementInfo;
    }

    update(form : NgForm){
      this.sucessful = false;
      console.log(this.contenido)
      this.id = this.route.snapshot.paramMap.get("id")
      this.GeneralService.updateItem(this.contenido,"hospital/",this.id)
      .subscribe(

        {
          next: (value) => {
            console.log(value)
          },
          error: (error)=>{
            console.log(error)
            this.existError = true;
            this.errores = error.error;
            this.erroresAux = this.errores.errores;
            this.keyError = Object.keys(this.erroresAux);
          },
          complete:()=>{
            console.log("complete");
            this.existError = false;
            this.sucessful = true;
            
          }
        }

      )






    }

}
