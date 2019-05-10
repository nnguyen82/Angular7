import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/component/shared.module';
import { TaskModule } from './task/task.module';
import { WorkOrderModule } from './workorder/workorder.module';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { VendorComponent } from './vendor/vendor.component';
import { CrmComponent } from './crm/crm.component';
import { AccountantComponent } from './accountant/accountant.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'vendor', component: VendorComponent },
  { path: 'crm', component: CrmComponent },
  { path: 'accountant', component: AccountantComponent }
];

@NgModule({
  declarations: [
    NavMenuComponent,
    DashBoardComponent,
    VendorComponent,
    CrmComponent,
    AccountantComponent
  ],
  imports: [
    SharedModule,
    WorkOrderModule,
    RouterModule.forRoot(routes),
    TaskModule
  ],
  //Only export when other module need to use it.
  exports:
    [
      NavMenuComponent
    ]
})

export class AppRoutingModule { }
