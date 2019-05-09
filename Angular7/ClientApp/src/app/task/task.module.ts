import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/component/shared.module';
import { TaskCalendarComponent } from './calendar/task.calendar.component';
import { TaskComponent } from './task.component';

const taskRoutes: Routes = [
  {
    path: 'task',
    children:
      [
        { path: '', component: TaskComponent },
        { path: 'calendar', component: TaskCalendarComponent }
    ]
  }
];

@NgModule({
  declarations: [
    TaskComponent,
    TaskCalendarComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(taskRoutes)
  ],
  exports:
    [
    ]
})

export class TaskModule { }
