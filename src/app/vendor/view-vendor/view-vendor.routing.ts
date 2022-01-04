import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewVendorComponent } from './view-vendor.component';

const routes: Routes = [
  { path: '', component: ViewVendorComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewVendorRoutingModule {}
