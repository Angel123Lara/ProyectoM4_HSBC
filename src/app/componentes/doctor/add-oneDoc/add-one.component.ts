import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorData } from 'src/app/models/doctor.models';
import { GeneralServiceService } from 'src/app/services/General/General-service.service';

@Component({
  selector: 'app-add-one',
  templateUrl: './add-one.component.html',
  styleUrls: ['./add-one.component.css']
})
export class AddOneDocComponent {
  contenido: DoctorData={
    name: '',
    cedula: ''
  };
  
  public existError : boolean = false;
  public errores : any;
  public erroresAux : any;
  public keyError : any;
  public sucessful : boolean = false;
  constructor(
    private GeneralServie : GeneralServiceService,
    //private router: Router,
    
    ){}

create(form: NgForm){
  console.log('Form value', form.value)
  this.GeneralServie.create(this.contenido,"doctors/create")
  .subscribe(
    {
    next: (value) => {
      console.log(value)},
      error:(error) =>{
        console.log(error)
        this.existError = true;
        this.errores = error.error;
        this.erroresAux = this.errores.errores;
        this.keyError = Object.keys(this.erroresAux);
        
      },
      complete:()=>{console.log("complete");
      this.sucessful= true;
    }
    }
    
  )
}


}
