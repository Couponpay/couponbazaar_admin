import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserShopsComponent } from './user-shops.component';

const routes: Routes = [
    { path: '', component: UserShopsComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserShopsRoutingModule {}
