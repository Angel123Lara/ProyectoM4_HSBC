import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorySpecialityComponent } from './directory/directory-speciality.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddOneSpecComponent } from './add-one-spec/add-one-spec.component';
import { DeleteSpecComponent } from './delete-spec/delete-spec.component';
import { UpdateSpecComponent } from './update-spec/update-spec.component';



@NgModule({
  declarations: [
    DirectorySpecialityComponent,
    AddOneSpecComponent,
    DeleteSpecComponent,
    UpdateSpecComponent
  ],
  imports: [
    CommonModule,SharedModule
  ],
  exports: [
    DirectorySpecialityComponent
  ]
})
export class SpecialityModule { }
