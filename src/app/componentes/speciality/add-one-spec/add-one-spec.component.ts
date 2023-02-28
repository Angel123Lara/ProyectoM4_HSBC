import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SpecialidadData } from 'src/app/models/specialidad.models';
import { GeneralServiceService } from 'src/app/services/General/General-service.service';

@Component({
  selector: 'app-add-one-spec',
  templateUrl: './add-one-spec.component.html',
  styleUrls: ['./add-one-spec.component.css']
})
export class AddOneSpecComponent {
  contenido: SpecialidadData={
    name : '',
    info : '',
    schedule: ''

    
  };


  public existError : boolean = false;
  public errores : any;
  public erroresAux : any;
  public keyError : any;
  public sucessful : boolean = false;
  public idFront : any;
  constructor(
    private GeneralServie : GeneralServiceService,
    //private router: Router,
    
    ){}




    create(form: NgForm){
      this.sucessful= false;
      console.log('Form value', form.value)
      this.GeneralServie.create(this.contenido,"MedicalSpeciality/create")
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
          this.existError = false;
        }
        }
        
      )
    }

}
