import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketingComponent } from './marketing.component';
import { SharedModule } from '../shared.modue';
import { MarketingRoutes } from './marketing.routing';
import {ImageCropperModule} from 'ng2-img-cropper/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    MarketingRoutes,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule
  ],
  declarations: [MarketingComponent]
})
export class MarketingModule { }
