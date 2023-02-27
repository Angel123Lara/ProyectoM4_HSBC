import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralServiceService } from 'src/app/services/General/General-service.service';

@Component({
  selector: 'app-delete-hosp',
  templateUrl: './delete-hosp.component.html',
  styleUrls: ['./delete-hosp.component.css']
})
export class DeleteHospComponent implements OnInit {

  public id : any;

  constructor(
    private GeneralService : GeneralServiceService,
    private router : Router,
    private route : ActivatedRoute
  )
  {}  

  ngOnInit(): void {
    this.id  = this.route.snapshot.paramMap.get("id");
    console.log(this.id)
    this.GeneralService.deleteItem("hospitals/",this.id).subscribe(
  
    {
      next: (value) => {
        console.log(value)
      },
      error:(error) =>{window.alert(error.message)},
      complete:() =>{
        console.log("complete")
        this.router.navigate(['hospital'])
        
      
      }
    }
    )
  }

}
