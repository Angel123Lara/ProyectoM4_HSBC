import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoryDoctorComponent } from './directory/directory-doctor.component';
import { MenuMainComponent } from 'src/app/shared/menu-main/menu-main.component';
import { AppModule } from 'src/app/app.module';
import { SharedModule } from 'src/app/shared/shared.module';




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
