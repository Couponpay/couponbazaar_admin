import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProductsComponent } from './view-products.component';
import { SharedModule } from 'src/app/shared.modue';
import { ViewProductsRoutes } from './view-products.routing';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ViewProductsRoutes,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule
  ],
  declarations: [ViewProductsComponent]
})
export class ViewProductsModule { }
