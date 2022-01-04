import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponProductsComponent } from './coupon-products.component';
import { CouponProductsRoutingModule } from './coupon-products-routing.module';
import { SharedModule } from '../shared.modue';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    CouponProductsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    ImageCropperModule,
    FormsModule
  ],
  declarations: [CouponProductsComponent]
})
export class CouponProductsModule { }
