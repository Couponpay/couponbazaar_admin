import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonAppSettingsComponent } from './common-app-settings.component';
import { CommonAppSettingsRoutingModule } from './common-app-settings-routing.module';
import { SharedModule } from '../shared.modue';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CommonAppSettingsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [CommonAppSettingsComponent]
})
export class CommonAppSettingsModule { }
