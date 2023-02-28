import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralServiceService } from 'src/app/services/General/General-service.service';

@Component({
  selector: 'app-delete-spec',
  templateUrl: './delete-spec.component.html',
  styleUrls: ['./delete-spec.component.css']
})
export class DeleteSpecComponent {
  public id : any;

  constructor(
    private GeneralService : GeneralServiceService,
    private router : Router,
    private route : ActivatedRoute
  )
  {}

  ngOnInit(): void {
      this.id =  this.route.snapshot.paramMap.get("id")
      console.log(this.id)
      this.GeneralService.deleteItem("MedicalSpeciality/",this.id).subscribe(

        {
          next: (value) => {
            console.log(value)
          },
          error:(error) =>{window.alert(error.message)},
          complete:() =>{
            console.log("complete")
            window.alert("Registro eliminado con éxito")
            this.router.navigate(['speciality'])
            
          
          }

        }
      )
  }
}
