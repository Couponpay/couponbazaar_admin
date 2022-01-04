import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxAmountSharesComponent } from './box-amount-shares.component';
import { BoxAmountSharesRoutingModule } from './box-amount-shares-routing.module';
import { SharedModule } from '../shared.modue';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    BoxAmountSharesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    ImageCropperModule
  ],
  declarations: [BoxAmountSharesComponent]
})
export class BoxAmountSharesModule { }
