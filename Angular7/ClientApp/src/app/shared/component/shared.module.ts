import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './primeng.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; //When import and export ReactiveFormsModule, you must also do the same for FormsModule. Else error.
import { StatisticComponent } from './statistic/statistic.component';
import { TaskModalComponent } from './modals/task.modal.component';

@NgModule({
  declarations: [
    StatisticComponent,
    TaskModalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeNgModule
  ],
  exports:
    [
      StatisticComponent,
      TaskModalComponent,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      PrimeNgModule
    ]
})

export class SharedModule { }
