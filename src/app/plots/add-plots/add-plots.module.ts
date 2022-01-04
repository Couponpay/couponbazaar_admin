import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPlotsComponent } from './add-plots.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPlotsRoutingModule } from './add-plots.routing';
// import { AgmCoreModule } from '@agm/core';
import { SharedModule } from 'src/app/shared.modue';

@NgModule({
  imports: [
    CommonModule,
    AddPlotsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAXJQ218iBxDg8jQf8iUVnXP95FbfDIzQE'
    // })
  ],
  declarations: [AddPlotsComponent]
})
export class AddPlotsModule { }
