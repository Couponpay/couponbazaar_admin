import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithdrawGiftRequestsComponent } from './withdraw-gift-requests.component';
import { WithdrawGiftRequestsRoutingModule } from './withdraw-gift-requests-routing.module';
import { SharedModule } from '../shared.modue';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    WithdrawGiftRequestsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [WithdrawGiftRequestsComponent]
})
export class WithdrawGiftRequestsModule { }
