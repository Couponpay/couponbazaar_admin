import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WithdrawGiftRequestsComponent } from './withdraw-gift-requests.component';

const routes: Routes = [
    { path: '', component: WithdrawGiftRequestsComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WithdrawGiftRequestsRoutingModule {}
