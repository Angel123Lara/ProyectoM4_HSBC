import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorySpecialityComponent } from './directory/directory-speciality.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DirectorySpecialityComponent
  ],
  imports: [
    CommonModule,SharedModule
  ],
  exports: [
    DirectorySpecialityComponent
  ]
})
export class SpecialityModule { }
