import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerBillsComponent } from './buyer-bills.component';
import { SharedModule } from 'src/app/shared.modue';
import { BuyerBillsRoutes } from './buyer-bills.routing';

@NgModule({
  imports: [
    CommonModule,
    BuyerBillsRoutes,
    SharedModule
  ],
  declarations: [BuyerBillsComponent]
})
export class BuyerBillsModule { }
