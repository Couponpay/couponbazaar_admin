import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroducerComponent } from './introducer.component';
import { SharedModule } from '../shared.modue';
import { IntroducerRoutes } from './introducer.routing';

@NgModule({
  imports: [
    CommonModule,
    IntroducerRoutes,
    SharedModule
  ],
  declarations: [IntroducerComponent]
})
export class IntroducerModule { }
