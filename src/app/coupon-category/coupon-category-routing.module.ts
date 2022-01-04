import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CouponCategoryComponent } from './coupon-category.component';

const routes: Routes = [
    { path: '', component: CouponCategoryComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CouponCategoryRoutingModule {}
