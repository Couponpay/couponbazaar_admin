import { BuyerNetworkComponent } from './buyer-network.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',component:BuyerNetworkComponent },
];

export const BuyerNetworkRoutes = RouterModule.forChild(routes);
