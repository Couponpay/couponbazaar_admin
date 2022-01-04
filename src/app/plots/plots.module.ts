import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotsComponent } from './plots.component';
import { SharedModule } from '../shared.modue';
import { PlotsRoutingModule } from './plots.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PlotsRoutingModule
  ],
  declarations: [PlotsComponent]
})
export class PlotsModule { }
