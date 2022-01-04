import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../shared.modue';
import { ProductsRoutingModule } from './products.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ProductsRoutingModule,
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
