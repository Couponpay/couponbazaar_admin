import { Routes, RouterModule } from '@angular/router';
import { Delivery_typeComponent } from './delivery_type.component';


const routes: Routes = [
  { path:'',component:Delivery_typeComponent },
];

export const Delivery_typeRoutes = RouterModule.forChild(routes);
