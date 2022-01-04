import { Routes, RouterModule } from '@angular/router';
import { Shop_purchasesComponent } from './shop_purchases.component';
const routes: Routes = [
  { path:'',component:Shop_purchasesComponent },
];

export const Shop_purchasesRoutes = RouterModule.forChild(routes);
