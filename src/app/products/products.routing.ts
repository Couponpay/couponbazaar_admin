



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path:'',component:ProductsComponent,children:[
    {path:'add-product',loadChildren:'./add-product/add-product.module#AddProductModule'},
    {path:'view-products',loadChildren:'./view-products/view-products.module#ViewProductsModule'},
    {path:'',redirectTo:'add-product',pathMatch:'prefix'}
  ] },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
