import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import * as moment from 'moment';
import { TaskService } from '../services/task.service';

@Component({
  templateUrl: './task.component.html',
})

export class TaskComponent implements OnInit {
  items: MenuItem[];
  showDialog: boolean = false;
  data: any;
  cols: any;
  formData: any = null;

  constructor(private taskService: TaskService) { }

  ngOnInit() {

    this.items = [
      { label: 'Task', icon: 'fas fa-tasks' }
    ];

    this.data = [
      { id: '1', name: 'Task 1', owner: 'Nam Nguyen', status: 'Assigned', priority: 'High', dueDate: moment(new Date('2/22/2019')).format('L'), assignedDate: moment(new Date('1/10/2019')).format('L') },
      { id: '2', name: 'Task 2', owner: 'Oanh Nguyen', status: 'Open', priority: 'Low', dueDate: moment(new Date('3/14/2019')).format('L'), assignedDate: moment(new Date('2/13/2019')).format('L') }
    ];

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Task' },
      { field: 'owner', header: 'Owner' },
      { field: 'status', header: 'Status' },
      { field: 'priority', header: 'Priority' },
      { field: 'dueDate', header: 'Due Date' },
      { field: 'assignedDate', header: 'Assigned Date' }
    ];

    this.waitingOnSubmit();
  }

  onNewTask() {
    //this.formData = { taskName: 'Test', dueDate: new Date('2/22/2019'), status: 'Open', priority: 'Medium' };
    this.showDialog = true;
  }

  onSubmit($event) {
    let id = this.data.length + 1;
    let taskName = $event.taskName;
    let dueDate = moment(new Date($event.dueDate)).format('L');
    let status = $event.status;
    let priority = $event.priority;
    let vm = { id: id, name: taskName, owner: 'Nam Nguyen', status: status, priority: priority, dueDate: dueDate, assignedDate: moment(new Date).format('L') };

    //this.SetGrid(vm);
    this.showDialog = false;

    this.taskService.Save(vm).subscribe(() => {
    });
  }

  waitingOnSubmit(): void {
    let intervalId = setInterval(() => {
      if (this.taskService.data !== undefined) {
        let vm = this.taskService.data;
        vm.dueDate = moment(vm.dueDate).format('L');
        vm.assignedDate = moment(vm.assignedDate).format('L');
        this.SetGrid(vm);
        this.taskService.data = undefined;
        //clearInterval(intervalId)
      }
    }, 1000)
  }

  SetGrid(vm): void {
    this.data.push(vm);
  }
}
