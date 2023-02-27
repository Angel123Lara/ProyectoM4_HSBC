import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoryDoctorComponent } from './directory/directory-doctor.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddOneDocComponent } from './add-oneDoc/add-one.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    DirectoryDoctorComponent, AddOneDocComponent],
  imports: [
    CommonModule,SharedModule
  ],
  exports: [
    DirectoryDoctorComponent
  ]

})
export class DoctorModule { }
