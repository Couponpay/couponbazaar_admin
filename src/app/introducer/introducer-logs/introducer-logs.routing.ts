import { Routes, RouterModule } from '@angular/router';
import { IntroducerLogsComponent } from './introducer-logs.component';

const routes: Routes = [
  {path:'',component:IntroducerLogsComponent  },
];

export const IntroducerLogsRoutes = RouterModule.forChild(routes);
