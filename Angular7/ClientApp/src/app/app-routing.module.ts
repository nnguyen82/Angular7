import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimeNgModule } from './primeng.module';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { TaskComponent } from './task/task.component';


const routes: Routes = [
  { path: '', component: DashBoardComponent, pathMatch: 'full' },
   { path: 'task', component: TaskComponent }
];

@NgModule({
  declarations: [
    NavMenuComponent,
    DashBoardComponent,
    TaskComponent
  ],
  imports: [
    PrimeNgModule,
    RouterModule.forRoot(routes)
  ],
  exports:
    [
      RouterModule,
      PrimeNgModule,
      NavMenuComponent,
      DashBoardComponent,
      TaskComponent
    ]
})

export class AppRoutingModule { }
