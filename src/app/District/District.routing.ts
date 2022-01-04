import { Routes, RouterModule } from '@angular/router';
import { DistrictComponent } from './District.component';

const routes: Routes = [
  {path:'',component:DistrictComponent  },
];

export const DistrictRoutes = RouterModule.forChild(routes);
