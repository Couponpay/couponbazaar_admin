import { Routes, RouterModule } from '@angular/router';
import { PinCodeComponent } from './PinCode.component';

const routes: Routes = [
  { path:'',component:PinCodeComponent },
];

export const PinCodeRoutes = RouterModule.forChild(routes);
