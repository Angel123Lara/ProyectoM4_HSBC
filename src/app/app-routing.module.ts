import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOneComponent } from './componentes/doctor/add-one/add-one.component';
import { DirectoryDoctorComponent } from './componentes/doctor/directory/directory-doctor.component';
import { DirectoryHospitalComponent } from './componentes/hospital/directory/directory-hospital.component';
import { LoginComponent } from './componentes/login/login.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { DirectorySpecialityComponent } from './componentes/speciality/directory/directory-speciality.component';
import { WelcomePageComponent } from './componentes/welcome-page/directory/welcome-page.component';
import { AuthGuard } from './helpers/auth.guard';


const routes: Routes = [
 
  {path: "welcome",component: WelcomePageComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "doctor",component: DirectoryDoctorComponent,
    children:[
      {path: "add", component: AddOneComponent}
    ]
  },
  {path: "hospital",component: DirectoryHospitalComponent},
  {path: "speciality",component: DirectorySpecialityComponent},
 
  {path: "", redirectTo: "welcome",pathMatch: "full"},
  {path: '**', component: NotFoundComponent} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
