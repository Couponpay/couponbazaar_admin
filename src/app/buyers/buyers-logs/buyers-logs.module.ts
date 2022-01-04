import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared.modue';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyersLogsComponent } from './buyers-logs.component';
import { BuyersLogsRoutes } from './buyers-logs.routing';

@NgModule({
  imports: [
    CommonModule,
    BuyersLogsRoutes,
    SharedModule,
    FormsModule
  ],
  declarations: [BuyersLogsComponent]
})
export class BuyersLogsModule { }
