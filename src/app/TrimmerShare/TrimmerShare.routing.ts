import { Routes, RouterModule } from '@angular/router';
import { TrimmerShareComponent } from './TrimmerShare.component';

const routes: Routes = [
  { path:'',component:TrimmerShareComponent },
];

export const TrimmerShareRoutes = RouterModule.forChild(routes);
