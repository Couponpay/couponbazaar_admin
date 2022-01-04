import { SharedModule } from './../shared.modue';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutes
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
