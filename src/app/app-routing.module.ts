import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOneDocComponent } from './componentes/doctor/add-oneDoc/add-one.component';
import { DeleteDocComponent } from './componentes/doctor/delete-doc/delete-doc.component';
import { DirectoryDoctorComponent } from './componentes/doctor/directory/directory-doctor.component';
import { UpdateDocComponent } from './componentes/doctor/update-doc/update-doc.component';
import { AddOneHospComponent } from './componentes/hospital/add-oneHosp/add-one.component';
import { DeleteHospComponent } from './componentes/hospital/delete-hosp/delete-hosp.component';
import { DirectoryHospitalComponent } from './componentes/hospital/directory/directory-hospital.component';
import { UpdateHospComponent } from './componentes/hospital/update-hosp/update-hosp.component';
import { LoginComponent } from './componentes/login/login.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { AddOneSpecComponent } from './componentes/speciality/add-one-spec/add-one-spec.component';
import { DeleteSpecComponent } from './componentes/speciality/delete-spec/delete-spec.component';
import { DirectorySpecialityComponent } from './componentes/speciality/directory/directory-speciality.component';
import { UpdateSpecComponent } from './componentes/speciality/update-spec/update-spec.component';
import { WelcomePageComponent } from './componentes/welcome-page/directory/welcome-page.component';
import { AuthGuard } from './helpers/auth.guard';


const routes: Routes = [
 
  {path: "welcome",component: WelcomePageComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "doctor",component: DirectoryDoctorComponent,
    children:[
      {path: "add", component: AddOneDocComponent},
      {path: "delete/:id", component:DeleteDocComponent, canActivate:[AuthGuard]},
      {path: "update/:id", component:UpdateDocComponent, canActivate:[AuthGuard]}
    ]
  },
  {path: "hospital",component: DirectoryHospitalComponent,
  children:[
    {path: "add", component: AddOneHospComponent},
    {path: "delete/:id", component:DeleteHospComponent, canActivate:[AuthGuard]},
    {path: "update/:id", component:UpdateHospComponent, canActivate:[AuthGuard]}
  ]},
  {path: "speciality",component: DirectorySpecialityComponent,
  children:[
    {path: "add", component: AddOneSpecComponent},
    {path: "delete/:id", component: DeleteSpecComponent, canActivate:[AuthGuard]},
    {path: "update/:id", component:UpdateSpecComponent, canActivate:[AuthGuard]}
  ]},
 
  {path: "", redirectTo: "welcome",pathMatch: "full"},
  {path: '**', component: NotFoundComponent} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
