import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoryHospitalComponent } from './directory/directory-hospital.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddOneHospComponent } from './add-oneHosp/add-one.component';
import { DeleteHospComponent } from './delete-hosp/delete-hosp.component';
import { UpdateHospComponent } from './update-hosp/update-hosp.component';



@NgModule({
  declarations: [
    DirectoryHospitalComponent,
    AddOneHospComponent,
    DeleteHospComponent,
    UpdateHospComponent
  ],
  imports: [
    CommonModule,SharedModule
  ],
  exports:[
    DirectoryHospitalComponent
  ]
})
export class HospitalModule { }
