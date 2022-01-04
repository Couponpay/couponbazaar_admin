import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Delivery_typeComponent } from './delivery_type.component';
import { Delivery_typeRoutes } from './delivery_type.routing';
import { SharedModule } from '../shared.modue';

@NgModule({
  imports: [
    CommonModule,
    Delivery_typeRoutes,
    SharedModule
  ],
  declarations: [Delivery_typeComponent]
})
export class Delivery_typeModule { }
