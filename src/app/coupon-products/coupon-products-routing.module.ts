import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CouponProductsComponent } from './coupon-products.component';

const routes: Routes = [
    { path: '', component: CouponProductsComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CouponProductsRoutingModule {}
