import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftMeterComponent } from './gift-meter.component';
import { GiftMeterRoutingModule } from './gift-meter-routing.module';
import { SharedModule } from '../shared.modue';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    GiftMeterRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    ImageCropperModule
  ],
  declarations: [GiftMeterComponent]
})
export class GiftMeterModule { }
