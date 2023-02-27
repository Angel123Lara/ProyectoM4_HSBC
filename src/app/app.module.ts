import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalModule } from './componentes/hospital/hospital.module';
import { SpecialityModule } from './componentes/speciality/speciality.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomePageModule } from './componentes/welcome-page/welcome-page.module';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { FormsModule } from '@angular/forms';

import { DoctorModule } from './componentes/doctor/doctor.module';
import { LoginComponent } from './componentes/login/login.component';
import { AuthInterceptor } from './helpers/auth.interceptor';
//import { AddOneDocComponent } from './componentes/doctor/add-oneDoc/add-one.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
   // AddOneDocComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HospitalModule,
    SpecialityModule,
    DoctorModule,
    BrowserAnimationsModule,
    WelcomePageModule
  ],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }  
    ],
  bootstrap: [AppComponent, LoginComponent, DoctorModule]
})
export class AppModule { }
