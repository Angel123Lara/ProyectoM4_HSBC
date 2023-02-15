import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { AppRoutingModule } from '../app-routing.module';
import { AppModule } from '../app.module';
import { ObjToArrayPipe } from '../objToArray.pipe';



@NgModule({
  declarations: [MenuMainComponent,ObjToArrayPipe],
  imports: [
    AppRoutingModule,
    CommonModule
  ],exports:[
    MenuMainComponent
  ]

})
export class SharedModule { }
