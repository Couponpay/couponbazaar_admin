import { Routes, RouterModule } from '@angular/router';
import { ShopCartDetailsComponent } from './shop-cart-details.component';

const routes: Routes = [
  { path:'',component:ShopCartDetailsComponent },
];

export const ShopCartDetailsRoutes = RouterModule.forChild(routes);
