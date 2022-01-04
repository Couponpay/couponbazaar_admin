import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared.modue';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsByShopComponent } from './products-by-shop.component';
import { ProductsByShopRoutes } from './products-by-shop.routing';

@NgModule({
  imports: [
    CommonModule,
    ProductsByShopRoutes,
    SharedModule,
    FormsModule
  ],
  declarations: [ProductsByShopComponent]
})
export class ProductsByShopModule { }
