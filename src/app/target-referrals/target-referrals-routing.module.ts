import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TargetReferralsComponent } from './target-referrals.component';

const routes: Routes = [
    { path: '', component: TargetReferralsComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TargetReferralsRoutingModule {}
