import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalModule } from './componentes/hospital/hospital.module';
import { SpecialityModule } from './componentes/speciality/speciality.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomePageModule } from './componentes/welcome-page/welcome-page.module';
import { NotFoundComponent } from './componentes/not-found/not-found.component';


import { DoctorModule } from './componentes/doctor/doctor.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent

  ],
  imports: [
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
