import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSettingsComponent } from './adminSettings.component';
import { SharedModule } from '../shared.modue';
import { AdminSettingsRoutes } from './adminSettings.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AdminSettingsRoutes
  ],
  declarations: [AdminSettingsComponent]
})
export class AdminSettingsModule { }
