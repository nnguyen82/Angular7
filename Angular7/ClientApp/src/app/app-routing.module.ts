/// <reference path="nav-menu/nav-menu.component.ts" />
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { PrimeNgModule } from './primeng.module';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { TaskComponent } from './task/task.component';
import { WorkOrderComponent } from './workorder/workorder.component';
import { StatisticComponent } from './shared/component/statistic/statistic.component';
import { VendorComponent } from './vendor/vendor.component';
import { CrmComponent } from './crm/crm.component';
import { AccountantComponent } from './accountant/accountant.component';


const routes: Routes = [
  { path: '', component: DashBoardComponent, pathMatch: 'full' },
  { path: 'task', component: TaskComponent },
  { path: 'workorder', component: WorkOrderComponent },
  { path: 'vendor', component: VendorComponent },
  { path: 'crm', component: CrmComponent },
  { path: 'accountant', component: AccountantComponent }
];

@NgModule({
  declarations: [
    NavMenuComponent,
    DashBoardComponent,
    TaskComponent,
    WorkOrderComponent,
    StatisticComponent,
    VendorComponent,
    CrmComponent,
    AccountantComponent
  ],
  imports: [
    PrimeNgModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:
    [
      RouterModule,
      HttpClientModule,
      PrimeNgModule,
      NavMenuComponent,
      DashBoardComponent,
      TaskComponent,
      WorkOrderComponent,
      StatisticComponent,
      CommonModule,
      VendorComponent,
      CrmComponent,
      AccountantComponent
    ]
})

export class AppRoutingModule { }
