import { VendorComponent } from './vendor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '', component: VendorComponent, children: [
            { path: 'add-vendor', loadChildren: './add-vendor/add-vendor.module#AddVendorModule' },
            { path: 'view-vednor', loadChildren: './view-vendor/view-vendor.module#ViewVendorModule' },
            { path: 'shoptPurchases', loadChildren: './shop_purchases/shop_purchases.module#Shop_purchasesModule' },
            { path: 'cartdetails/:id', loadChildren: './shop-cart-details/shop-cart-details.module#ShopCartDetailsModule' },
            { path: 'productsbyshop/:id/:Shop_Name', loadChildren: './products-by-shop/products-by-shop.module#ProductsByShopModule' },
            { path: 'viewLledger/:id/:name/:phone/:avilableAmount/:withdrwanAmount/:totalAmount', loadChildren: './view-ledger/view-ledger.module#ViewLedgerModule' },
            { path: '', redirectTo: 'add-vendor', pathMatch: 'prefix' }
        ]
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VendorRoutingModule { }
