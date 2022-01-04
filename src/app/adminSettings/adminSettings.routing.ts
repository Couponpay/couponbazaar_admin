import { AdminSettingsComponent } from './adminSettings.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',component:AdminSettingsComponent },
];

export const AdminSettingsRoutes = RouterModule.forChild(routes);
