import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinCodeComponent } from './PinCode.component';
import { PinCodeRoutes } from './PinCode.routing';
import { SharedModule } from '../shared.modue';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PinCodeRoutes,
    SharedModule,
    ReactiveFormsModule,
  
  ],
  declarations: [PinCodeComponent]
})
export class PinCodeModule { }
