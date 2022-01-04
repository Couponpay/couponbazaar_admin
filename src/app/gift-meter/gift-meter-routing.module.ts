import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GiftMeterComponent } from './gift-meter.component';

const routes: Routes = [
    { path: '', component: GiftMeterComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GiftMeterRoutingModule {}
