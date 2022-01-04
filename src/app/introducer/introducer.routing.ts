import { Routes, RouterModule } from '@angular/router';
import { IntroducerComponent } from './introducer.component';

const routes: Routes = [
  { path:'',component:IntroducerComponent },
];

export const IntroducerRoutes = RouterModule.forChild(routes);
