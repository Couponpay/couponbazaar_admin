import { BuyerBillsComponent } from './buyer-bills.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',component:BuyerBillsComponent },
];

export const BuyerBillsRoutes = RouterModule.forChild(routes);
