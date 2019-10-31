import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrmComponent } from '../crm/crm.component';
import { CrmChildComponent } from '../crm/crmchild/crm.child.component';


const adminRoutes: Routes = [
    {
        path: 'crm',
        component: CrmComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'crmchild/:id', component: CrmChildComponent }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CrmRoutingModule { }
