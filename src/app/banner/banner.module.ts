import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { BannerRoutes } from './Banner.routing';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared.modue';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    BannerRoutes,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    ImageCropperModule
  ],
  declarations: [BannerComponent]
})
export class BannerModule { }
