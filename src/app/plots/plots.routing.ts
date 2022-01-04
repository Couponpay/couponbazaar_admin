import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PlotsComponent } from './plots.component';

const routes: Routes = [
  {
    path: '', component: PlotsComponent,
    children: [
      {
        path: 'add',
        loadChildren: './add-plots/add-plots.module#AddPlotsModule'
      },
      {
        path: 'view',
        loadChildren: './view-plots/view-plots.module#ViewPlotsModule'
      },
      {
        path: '', redirectTo: 'view', pathMatch: 'prefix'
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlotsRoutingModule { }
