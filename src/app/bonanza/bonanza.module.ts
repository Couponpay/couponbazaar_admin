import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonanzaComponent } from './bonanza.component';
import { BonanzaRoutes } from './Bonanza.routing';
import { SharedModule } from '../shared.modue';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    BonanzaRoutes,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [BonanzaComponent]
})
export class BonanzaModule { }
