import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionFormComponent } from '../position/position-form.component';
import { PositionComponent } from './position.component';
import { PositionFormResolverService } from './position-form.resolver.service';

const adminRoutes: Routes = [
    {
        path: 'position',
        component: PositionComponent,
        children: [
            {
                path: '',
                children: [
                    {
                        path: 'positionform/:id',
                        component: PositionFormComponent,
                        resolve: {
                            position: PositionFormResolverService
                        }
                    }
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
export class PositionRoutingModule { }
