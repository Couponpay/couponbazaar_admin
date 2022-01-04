import { BuyersComponent } from './buyers.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',component:BuyersComponent },
];

export const BuyersRoutes = RouterModule.forChild(routes);
