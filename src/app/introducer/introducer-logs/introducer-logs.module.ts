import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared.modue';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroducerLogsComponent } from './introducer-logs.component';
import { IntroducerLogsRoutes } from './introducer-logs.routing';

@NgModule({
  imports: [
    CommonModule,
    IntroducerLogsRoutes,
    SharedModule,
    FormsModule
  ],
  declarations: [IntroducerLogsComponent]
})
export class IntroducerLogsModule { }
