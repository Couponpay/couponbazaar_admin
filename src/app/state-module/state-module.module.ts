import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateModuleComponent } from './state-module.component';
import { StateModuleRoutingModule } from './state-module-routing.module';
import { SharedModule } from '../shared.modue';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    StateModuleRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [StateModuleComponent]
})
export class StateModuleModule { }
