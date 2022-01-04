import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CommonAppSettingsComponent } from './common-app-settings.component';

const routes: Routes = [
    { path: '', component: CommonAppSettingsComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CommonAppSettingsRoutingModule {}
