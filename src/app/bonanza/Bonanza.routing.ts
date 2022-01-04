import { Routes, RouterModule } from '@angular/router';
import { BonanzaComponent } from './bonanza.component';

const routes: Routes = [
  { path: '', component: BonanzaComponent },
];

export const BonanzaRoutes = RouterModule.forChild(routes);
