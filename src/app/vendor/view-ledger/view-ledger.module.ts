import { SharedModule } from './../../shared.modue';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLedgerComponent } from './view-ledger.component';
import { FormsModule } from '@angular/forms';
import { ViewLedgerRoutes } from './view-ledger.routing';

@NgModule({
  imports: [
    CommonModule,
    ViewLedgerRoutes,
    SharedModule,
    FormsModule
  ],
  declarations: [ViewLedgerComponent]
})
export class ViewLedgerModule { }
