import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyersComponent } from './buyers.component';
import { BuyersRoutes } from './buyers.routing';
import { SharedModule } from '../shared.modue';

@NgModule({
  imports: [
    CommonModule,
    BuyersRoutes,
    SharedModule,
    FormsModule
  ],
  declarations: [BuyersComponent]
})
export class BuyersModule { }
