import { NgModule } from '@angular/core';

import { ButtonModule, GrowlModule, InputTextModule, DropdownModule, CalendarModule, PanelModule, SidebarModule } from 'primeng/primeng';
import { ChartModule } from 'primeng/chart';

@NgModule({
  imports: [
    ButtonModule,
    GrowlModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    PanelModule,
    SidebarModule,
    ChartModule
  ],
  exports: [
    ButtonModule,
    GrowlModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    PanelModule,
    SidebarModule,
    ChartModule
  ]
})
export class PrimeNgModule { }
