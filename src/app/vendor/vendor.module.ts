import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorComponent } from './vendor.component';
import { SharedModule } from '../shared.modue';
import { VendorRoutingModule } from './vendor.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    VendorRoutingModule
  ],
  declarations: [VendorComponent]
})
export class VendorModule { }
