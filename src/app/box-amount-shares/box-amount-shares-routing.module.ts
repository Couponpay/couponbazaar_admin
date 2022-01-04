import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BoxAmountSharesComponent } from './box-amount-shares.component';

const routes: Routes = [
    { path: '', component: BoxAmountSharesComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BoxAmountSharesRoutingModule {}
