import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { PrimeNgModule } from './shared/component/primeng.module';
import { SharedModule } from './shared/component/shared.module';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { TaskComponent } from './task/task.component';
import { WorkOrderComponent } from './workorder/workorder.component';
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
    VendorComponent,
    CrmComponent,
    AccountantComponent
  ],
  imports: [
    PrimeNgModule,
    SharedModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  //Only export when other module need to use it.
  exports:
    [
      RouterModule,
      NavMenuComponent
    ]
})

export class AppRoutingModule { }