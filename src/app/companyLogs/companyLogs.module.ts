import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyLogsComponent } from './companyLogs.component';
import { SharedModule } from '../shared.modue';
import { CompanyLogsRoutes } from './companyLogs.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CompanyLogsRoutes,
    FormsModule
  ],
  declarations: [CompanyLogsComponent]
})
export class CompanyLogsModule { }
