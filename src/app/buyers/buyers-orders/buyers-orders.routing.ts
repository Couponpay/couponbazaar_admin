
import { Routes, RouterModule } from '@angular/router';
import { BuyersOrdersComponent } from './buyers-orders.component';

const routes: Routes = [
  { path:'',component:BuyersOrdersComponent },
];

export const BuyersOrdersRoutes = RouterModule.forChild(routes);
