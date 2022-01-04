import { BuyersLogsComponent } from './buyers-logs.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',component:BuyersLogsComponent },
];

export const BuyersLogsRoutes = RouterModule.forChild(routes);
