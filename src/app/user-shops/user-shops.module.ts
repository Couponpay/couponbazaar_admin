import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserShopsComponent } from './user-shops.component';
import { UserShopsRoutingModule } from './user-shops-routing.module';
import { SharedModule } from '../shared.modue';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UserShopsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [UserShopsComponent]
})
export class UserShopsModule { }
