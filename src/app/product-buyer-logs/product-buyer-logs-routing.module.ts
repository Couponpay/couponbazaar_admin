import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductBuyerLogsComponent } from './product-buyer-logs.component';

const routes: Routes = [
    { path: '', component: ProductBuyerLogsComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductBuyerLogsRoutingModule {}
