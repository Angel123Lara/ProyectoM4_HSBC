import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOneDocComponent } from './componentes/doctor/add-oneDoc/add-one.component';
import { DirectoryDoctorComponent } from './componentes/doctor/directory/directory-doctor.component';
import { AddOneHospComponent } from './componentes/hospital/add-oneHosp/add-one.component';
import { DeleteHospComponent } from './componentes/hospital/delete-hosp/delete-hosp.component';
import { DirectoryHospitalComponent } from './componentes/hospital/directory/directory-hospital.component';
import { LoginComponent } from './componentes/login/login.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { AddOneSpecComponent } from './componentes/speciality/add-one-spec/add-one-spec.component';
import { DirectorySpecialityComponent } from './componentes/speciality/directory/directory-speciality.component';
import { WelcomePageComponent } from './componentes/welcome-page/directory/welcome-page.component';
import { AuthGuard } from './helpers/auth.guard';


const routes: Routes = [
 
  {path: "welcome",component: WelcomePageComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "doctor",component: DirectoryDoctorComponent,
    children:[
      {path: "add", component: AddOneDocComponent}
    ]
  },
  {path: "hospital",component: DirectoryHospitalComponent,
  children:[
    {path: "add", component: AddOneHospComponent},
    {path: "delete/:id", component:DeleteHospComponent, canActivate:[AuthGuard]}
  ]},
  {path: "speciality",component: DirectorySpecialityComponent,
  children:[
    {path: "add", component: AddOneSpecComponent}
  ]},
 
  {path: "", redirectTo: "welcome",pathMatch: "full"},
  {path: '**', component: NotFoundComponent} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
