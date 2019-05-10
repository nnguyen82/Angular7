import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/component/shared.module';
import { WorkOrderComponent } from './workorder.component';
import { CreateJobComponent } from './steps/createjob.component';


const taskRoutes: Routes = [
      { path: 'workorder', component: WorkOrderComponent }
];

@NgModule({
  declarations: [
    WorkOrderComponent,
    CreateJobComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(taskRoutes)
  ]
})

export class WorkOrderModule { }
