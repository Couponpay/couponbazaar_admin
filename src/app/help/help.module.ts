import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help.component';
import { HelpRoutes } from './help.routing';
import { SharedModule } from '../shared.modue';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    HelpRoutes,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  declarations: [HelpComponent]
})
export class HelpModule { }
