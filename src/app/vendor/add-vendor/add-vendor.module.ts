import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVendorComponent } from './add-vendor.component';
import { SharedModule } from 'src/app/shared.modue';
import { AddVendorRoutingModule } from './add-vendor.routing';

@NgModule({
  imports: [
    CommonModule,
    AddVendorRoutingModule,
    FormsModule,
    SharedModule,ReactiveFormsModule
  ],
  declarations: [AddVendorComponent]
})
export class AddVendorModule { }
