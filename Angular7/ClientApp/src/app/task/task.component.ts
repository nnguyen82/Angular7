import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import * as moment from 'moment';

@Component({
  templateUrl: './task.component.html',
})

export class TaskComponent implements OnInit {
  items: MenuItem[];
  showDialog: boolean = false;
  data: any;
  cols: any;
  formData: any = null;

  constructor() {}

  ngOnInit() {

    this.items = [
      { label: 'Task', icon: 'fas fa-tasks' }
    ];

    this.data = [
      { id: '1', name: 'Task 1', owner: 'Nam Nguyen', status: 'Assigned', priority: 'High', duedate: moment(new Date('2/22/2019')).format('L'), assigneddate: moment(new Date('1/10/2019')).format('L') },
      { id: '2', name: 'Task 2', owner: 'Oanh Nguyen', status: 'Open', priority: 'Low', duedate: moment(new Date('3/14/2019')).format('L'), assigneddate: moment(new Date('2/13/2019')).format('L') }
    ];

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Task' },
      { field: 'owner', header: 'Owner' },
      { field: 'status', header: 'Status' },
      { field: 'priority', header: 'Priority' },
      { field: 'duedate', header: 'Due Date' },
      { field: 'assigneddate', header: 'Assigned Date' }
    ];
  }

  onNewTask() {
    //this.formData = { taskName: 'Test', dueDate: new Date('2/22/2019'), status: 'Open', priority: 'Medium' };
    this.showDialog = true;
  }

  onSubmit($event) {
    let id = this.data.length + 1;
    let taskName = $event.taskName;
    let dueDate = moment($event.dueDate).format('L');
    let status = $event.status;
    let priority = $event.priority;

    this.data.push({ id: id, name: taskName, owner: 'Nam Nguyen', status: status, priority: priority, duedate: dueDate, assigneddate: moment(new Date).format('L') });
    this.showDialog = false;
  }
}
