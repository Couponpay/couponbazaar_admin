import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponCategoryComponent } from './coupon-category.component';
import { CouponCategoryRoutingModule } from './coupon-category-routing.module';
import { SharedModule } from '../shared.modue';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CouponCategoryRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [CouponCategoryComponent]
})
export class CouponCategoryModule { }
