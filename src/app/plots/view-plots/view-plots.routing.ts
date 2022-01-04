import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewPlotsComponent } from './view-plots.component';

const routes: Routes = [
  { path: '', component: ViewPlotsComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewPlotsRoutingModule {}
