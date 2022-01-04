import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddPlotsComponent } from './add-plots.component';

const routes: Routes = [
  { path: '', component: AddPlotsComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPlotsRoutingModule {}
