import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})

export class TaskComponent implements OnInit {
  items: MenuItem[];

  constructor() {
  }

  ngOnInit() {
    this.items = [
      { label: 'Task', icon: 'fas fa-tasks' }
    ];
  }
}
