import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyersOrdersComponent } from './buyers-orders.component';
import { BuyersOrdersRoutes } from './buyers-orders.routing';
import { SharedModule } from 'src/app/shared.modue';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    BuyersOrdersRoutes,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ],
  declarations: [BuyersOrdersComponent]
})
export class BuyersOrdersModule { }
