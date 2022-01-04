import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimmerShareComponent } from './TrimmerShare.component';
import { SharedModule } from '../shared.modue';
import { FormsModule } from '@angular/forms';
import { TrimmerShareRoutes } from './TrimmerShare.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    TrimmerShareRoutes
  ],
  declarations: [TrimmerShareComponent]
})
export class TrimmerShareModule { }
