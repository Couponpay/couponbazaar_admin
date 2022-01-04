import { CompanyLogsComponent } from './companyLogs.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:CompanyLogsComponent  },
];

export const CompanyLogsRoutes = RouterModule.forChild(routes);
