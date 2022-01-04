import { Routes, RouterModule } from '@angular/router';
import { ViewProductsComponent } from './view-products.component';

const routes: Routes = [
  { path:'',component:ViewProductsComponent },
];

export const ViewProductsRoutes = RouterModule.forChild(routes);
