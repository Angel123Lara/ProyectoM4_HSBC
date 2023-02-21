import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryDoctorComponent } from './componentes/doctor/directory/directory-doctor.component';
import { DirectoryHospitalComponent } from './componentes/hospital/directory/directory-hospital.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { DirectorySpecialityComponent } from './componentes/speciality/directory/directory-speciality.component';
import { WelcomePageComponent } from './componentes/welcome-page/directory/welcome-page.component';


const routes: Routes = [
  {path: "doctor",component: DirectoryDoctorComponent},
  {path: "hospital",component: DirectoryHospitalComponent},
  {path: "speciality",component: DirectorySpecialityComponent},
  {path: "welcome",component: WelcomePageComponent},
  {path: "ProyectoM4_HSBC", redirectTo: "welcome",pathMatch: "full"},
  {path: "", redirectTo: "welcome",pathMatch: "full"},
  {path: '**', component: NotFoundComponent} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
