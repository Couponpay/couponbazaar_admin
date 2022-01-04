import { AddProductComponent } from './add-product.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',component:AddProductComponent },
];

export const AddProductRoutes = RouterModule.forChild(routes);
