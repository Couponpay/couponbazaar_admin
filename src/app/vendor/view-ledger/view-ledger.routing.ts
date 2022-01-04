import { ViewLedgerComponent } from './view-ledger.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',component:ViewLedgerComponent },
];

export const ViewLedgerRoutes = RouterModule.forChild(routes);
