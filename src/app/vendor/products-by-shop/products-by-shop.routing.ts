import { Routes, RouterModule } from '@angular/router';
import { ProductsByShopComponent } from './products-by-shop.component';

const routes: Routes = [
  { path:'',component:ProductsByShopComponent },
];

export const ProductsByShopRoutes = RouterModule.forChild(routes);
