import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistrictComponent } from './District.component';
import { DistrictRoutes } from './District.routing';
import { SharedModule } from '../shared.modue';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DistrictRoutes,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [DistrictComponent]
})
export class DistrictModule { }
