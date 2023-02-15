import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoryHospitalComponent } from './directory/directory-hospital.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DirectoryHospitalComponent
  ],
  imports: [
    CommonModule,SharedModule
  ],
  exports:[
    DirectoryHospitalComponent
  ]
})
export class HospitalModule { }
