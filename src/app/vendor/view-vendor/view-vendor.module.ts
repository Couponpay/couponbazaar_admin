import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewVendorComponent } from './view-vendor.component';
import { SharedModule } from 'src/app/shared.modue';
import { ViewVendorRoutingModule } from './view-vendor.routing';

@NgModule({
  imports: [
    CommonModule,
    ViewVendorRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ViewVendorComponent]
})
export class ViewVendorModule { }
