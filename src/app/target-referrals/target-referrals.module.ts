import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetReferralsComponent } from './target-referrals.component';
import { TargetReferralsRoutingModule } from './target-referrals-routing.module';
import { SharedModule } from '../shared.modue';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TargetReferralsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [TargetReferralsComponent]
})
export class TargetReferralsModule { }
