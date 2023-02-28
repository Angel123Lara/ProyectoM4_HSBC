import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorySpecialityComponent } from './directory/directory-speciality.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddOneSpecComponent } from './add-one-spec/add-one-spec.component';
import { DeleteSpecComponent } from './delete-spec/delete-spec.component';



@NgModule({
  declarations: [
    DirectorySpecialityComponent,
    AddOneSpecComponent,
    DeleteSpecComponent
  ],
  imports: [
    CommonModule,SharedModule
  ],
  exports: [
    DirectorySpecialityComponent
  ]
})
export class SpecialityModule { }
