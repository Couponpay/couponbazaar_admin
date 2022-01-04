import { Routes, RouterModule } from '@angular/router';
import { NewsItemsComponent } from './NewsItems.component';

const routes: Routes = [
  { path:"",component:NewsItemsComponent },
];

export const NewsItemsRoutes = RouterModule.forChild(routes);
