import { NgModule } from '@angular/core';

import { ButtonModule, GrowlModule, InputTextModule, DropdownModule, CalendarModule, PanelModule, SidebarModule, MenuModule, TabMenuModule, CardModule, DialogModule } from 'primeng/primeng';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';

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
    MenuModule,
    TableModule,
    TabMenuModule,
    CardModule,
    DialogModule
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
    MenuModule,
    TableModule,
    TabMenuModule,
    CardModule,
    DialogModule
  ]
})
export class PrimeNgModule { }
