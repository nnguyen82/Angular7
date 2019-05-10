import { NgModule } from '@angular/core';

import {ButtonModule, GrowlModule, InputTextModule, DropdownModule, CalendarModule, PanelModule,
  SidebarModule, MenuModule, TabMenuModule, CardModule, DialogModule, StepsModule}
  from 'primeng/primeng';

import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { FullCalendarModule } from 'primeng/fullcalendar';

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
    DialogModule,
    FullCalendarModule,
    StepsModule
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
    DialogModule,
    FullCalendarModule,
    StepsModule
  ]
})
export class PrimeNgModule { }
