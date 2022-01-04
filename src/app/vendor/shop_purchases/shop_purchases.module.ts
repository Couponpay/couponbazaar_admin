import { SharedModule } from 'src/app/shared.modue';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shop_purchasesComponent } from './shop_purchases.component';
import { FormsModule } from '@angular/forms';
import { Shop_purchasesRoutes } from './shop_purchases.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    Shop_purchasesRoutes,
    FormsModule
  ],
  declarations: [Shop_purchasesComponent]
})
export class Shop_purchasesModule { }
