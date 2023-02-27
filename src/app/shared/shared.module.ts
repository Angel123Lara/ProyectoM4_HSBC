import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { AppRoutingModule } from '../app-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MenuMainComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    MatTabsModule,
    FormsModule
  ],exports:[
    MenuMainComponent,
    MatListModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule

  ]

})
export class SharedModule { }
