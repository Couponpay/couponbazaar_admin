import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product.component';
import { AddProductRoutes } from './add-product.routing';
import { SharedModule } from 'src/app/shared.modue';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    AddProductRoutes,
    SharedModule,
    FormsModule,
    ImageCropperModule

  ],
  declarations: [AddProductComponent]
})
export class AddProductModule { }
