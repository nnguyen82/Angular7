import { NgModule } from '@angular/core';

import { ButtonModule, GrowlModule, InputTextModule, DropdownModule, CalendarModule, PanelModule, SidebarModule, MenuModule } from 'primeng/primeng';
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
    ChartModule,
    MenuModule
  ],
  exports: [
    ButtonModule,
    GrowlModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    PanelModule,
    SidebarModule,
    ChartModule,
    MenuModule
  ]
})
export class PrimeNgModule { }
