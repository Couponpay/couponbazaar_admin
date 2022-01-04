import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryRoutes } from './category.routing';
import { SharedModule } from '../shared.modue';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutes,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CategoryComponent]
})
export class CategoryModule { }
