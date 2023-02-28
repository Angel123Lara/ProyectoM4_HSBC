import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoryDoctorComponent } from './directory/directory-doctor.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddOneDocComponent } from './add-oneDoc/add-one.component';

import { DeleteDocComponent } from './delete-doc/delete-doc.component';
import { UpdateDocComponent } from './update-doc/update-doc.component';





@NgModule({
  declarations: [
    DirectoryDoctorComponent, AddOneDocComponent, DeleteDocComponent, UpdateDocComponent],
  imports: [
    CommonModule,SharedModule
  ],
  exports: [
    DirectoryDoctorComponent
  ]

})
export class DoctorModule { }
