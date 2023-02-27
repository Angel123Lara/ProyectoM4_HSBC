import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoryDoctorComponent } from './directory/directory-doctor.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddOneComponent } from './add-one/add-one.component';





@NgModule({
  declarations: [
    DirectoryDoctorComponent],
  imports: [
    CommonModule,SharedModule
  ],
  exports: [
    DirectoryDoctorComponent
  ]

})
export class DoctorModule { }
