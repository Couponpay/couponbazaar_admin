import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NumberDirective } from './numbers-only.directive';
import { ZeroNumberDirective } from './zeroToNine.directive';

@NgModule({
    declarations: [NumberDirective,ZeroNumberDirective],
    imports: [CommonModule, NgZorroAntdModule],
    exports: [NgZorroAntdModule, NumberDirective,ZeroNumberDirective],
    providers: [],
})
export class SharedModule { }