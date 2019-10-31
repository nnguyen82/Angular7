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
import { CrmMenuComponent } from './crm/crm.menu.component';
import { RedirectGuard } from './guard/redirect.guard';
import { CRMModule } from './crm/crm.module';
import { PositionModule } from './position/position.module';
import { PositionComponent } from './position/position.component';
import { PositionMenuComponent } from './position/menu/position.menu.component'
import { PositionFormComponent } from './position/position-form.component';


const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashBoardComponent },
    { path: 'vendor', component: VendorComponent },
    { path: 'crm', component: CrmComponent },
    { path: 'accountant', component: AccountantComponent },
    {
        path: 'position',
        component: PositionModule
    },
];

@NgModule({
    declarations: [
        NavMenuComponent,
        DashBoardComponent,
        VendorComponent,
        CrmComponent,
        AccountantComponent,
        CrmMenuComponent,
        PositionComponent,
        PositionMenuComponent,
        PositionFormComponent
    ],
    imports: [
        SharedModule,
        WorkOrderModule,
        RouterModule.forRoot(routes),
        TaskModule,
        CRMModule,
        PositionModule
    ],
    //Only export when other module need to use it.
    exports:
        [
            NavMenuComponent,
            CRMModule
        ]
})

export class AppRoutingModule { }
