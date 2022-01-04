import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StateModuleComponent } from './state-module.component';

const routes: Routes = [
    { path: '', component: StateModuleComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StateModuleRoutingModule {}
