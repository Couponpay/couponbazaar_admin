import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductBuyerLogsComponent } from './product-buyer-logs.component';
import { ProductBuyerLogsRoutingModule } from './product-buyer-logs-routing.module';
import { SharedModule } from '../shared.modue';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProductBuyerLogsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [ProductBuyerLogsComponent]
})
export class ProductBuyerLogsModule { }
