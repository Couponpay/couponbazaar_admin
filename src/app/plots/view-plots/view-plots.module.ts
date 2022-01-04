import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPlotsComponent } from './view-plots.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewPlotsRoutingModule } from './view-plots.routing';
import { SharedModule } from 'src/app/shared.modue';
// import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    ViewPlotsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAXJQ218iBxDg8jQf8iUVnXP95FbfDIzQE'
    // })
  ],
  declarations: [ViewPlotsComponent]
})
export class ViewPlotsModule { }
