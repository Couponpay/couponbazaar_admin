import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerNetworkComponent } from './buyer-network.component';
import { SharedModule } from '../shared.modue';
import { BuyerNetworkRoutes } from './buyer-network.routing';

@NgModule({
  imports: [
    CommonModule,
    BuyerNetworkRoutes,
    SharedModule,
    FormsModule
  ],
  declarations: [BuyerNetworkComponent]
})
export class BuyerNetworkModule { }
