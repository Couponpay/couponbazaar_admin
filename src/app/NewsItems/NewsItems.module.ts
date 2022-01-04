import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsItemsComponent } from './NewsItems.component';
import { NewsItemsRoutes } from './NewsItems.routing';
import { SharedModule } from '../shared.modue';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NewsItemsRoutes,
    SharedModule,
    FormsModule,
   
    ReactiveFormsModule
  ],
  declarations: [NewsItemsComponent]
})
export class NewsItemsModule { }
