import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared.modue';
import { LoginRoutes } from './login.routing';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutes,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
