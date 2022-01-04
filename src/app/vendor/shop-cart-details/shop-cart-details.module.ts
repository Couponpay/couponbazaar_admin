import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCartDetailsComponent } from './shop-cart-details.component';
import { SharedModule } from 'src/app/shared.modue';
import { ShopCartDetailsRoutes } from './shop-cart-details.routing';

@NgModule({
  imports: [
    CommonModule,
    ShopCartDetailsRoutes,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ShopCartDetailsComponent]
})
export class ShopCartDetailsModule { }
