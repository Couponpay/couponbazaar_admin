import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'login',loadChildren:'./login/login.module#LoginModule'},
  {path:'dashboard',loadChildren:'./dashboard/dashboard.module#DashboardModule'},
  // {path:'',loadChildren:'./'}

  { path: '', redirectTo: 'login', pathMatch: 'full' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
