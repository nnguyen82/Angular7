import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/component/shared.module';
import { PositionRoutingModule } from '../position/position-routing.module';


@NgModule({
    imports: [
        CommonModule,
        PositionRoutingModule,
        SharedModule
    ],
    declarations: [

    ]
})
export class PositionModule { }
