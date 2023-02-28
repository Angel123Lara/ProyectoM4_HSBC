import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorData } from 'src/app/models/doctor.models';
import { GeneralServiceService } from 'src/app/services/General/General-service.service';
import { DirectoryDoctorComponent } from '../directory/directory-doctor.component';

@Component({
  selector: 'app-update-doc',
  templateUrl: './update-doc.component.html',
  styleUrls: ['./update-doc.component.css']
})
export class UpdateDocComponent implements OnInit{
  contenido : DoctorData = {
    name : '',
    cedula : ''
  };
  public existError : boolean = false;
  public errores : any;
  public erroresAux : any;
  public keyError : any;
  public id : any;
  public sucessful : boolean = false;

  constructor(
    private GeneralService : GeneralServiceService,
    private infoService : DirectoryDoctorComponent,
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
      this.GeneralService.updateItem(this.contenido,"doctors/",this.id)
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
