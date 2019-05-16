import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import * as moment from 'moment';
import { TaskService } from '../../services/task.service';

@Component({
  templateUrl: './task.calendar.component.html',
})

export class TaskCalendarComponent implements OnInit {
  items: MenuItem[];
  events: any[];
  options: any;
  showDialog: boolean = false;
  formData: any = null;
  data: any;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.items = [
      { label: 'Task Calendar', icon: 'fas fa-calendar' }
    ];

    this.data = [
      {
        id: 1,
        title: "All Day Event",
        status: 'Open',
        priority: 'High',
        start: "2019-05-01"
      },
      {
        id: 2,
        title: "Long Event",
        start: "2019-05-07",
        status: 'Open',
        priority: 'High'
      },
      {
        id: 3,
        title: "Repeating Event",
        status: 'Open',
        priority: 'High',
        start: "2019-05-09T16:00:00"
      },
      {
        id: 4,
        title: "Repeating Event",
        status: 'Open',
        priority: 'High',
        start: "2019-05-16T16:00:00"
      },
      {
        id: 5,
        title: "Conference",
        status: 'Open',
        priority: 'High',
        start: "2019-05-11"
      }
    ];

    this.events = this.data

    this.options = {
      height: 800,
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      eventClick: (e) => {
        this.EventClick(e);
      },
      dateClick: (e) => {
        this.DateClick(e);
      }
    };

    this.waitingOnSubmit();
  }

  EventClick(info: any): void {
    let query = this.Search(info.event.id);

    this.formData = { taskName: query.title, dueDate: new Date(moment(query.start).format('L')), status: query.status, priority: query.priority };
    this.showDialog = true;
  }

  DateClick(info: any): void {
    let dateClick = new Date(moment(info.dateStr).format('L'));
    this.formData = { taskName: '', dueDate: dateClick, status: null, priority: null };
    this.showDialog = true;
  }

  onSubmit($event): void {
    let id = this.events.length + 1;
    let taskName = $event.taskName;
    let dueDate = moment(new Date($event.dueDate)).format('YYYY-MM-DD');

    let vm = { id: id, name: taskName, owner: 'Nam Nguyen', status: $event.status, priority: $event.priority, dueDate: dueDate, assignedDate: moment(new Date).format('L') };

    this.taskService.Save(vm).subscribe(() => {
    });

    this.showDialog = false;
  }

  Search(id: any): any {
    return this.data.find(x => x.id == id);
  }

  waitingOnSubmit(): void {
    let callOnetime = true;

    let intervalId = setInterval(() => {
      if (this.taskService.data !== undefined && callOnetime) {
        callOnetime = false;

        let vm = this.taskService.data;
        vm.dueDate = moment(new Date(vm.dueDate)).format('YYYY-MM-DD');
        vm.assignedDate = moment(new Date(vm.assignedDate)).format('YYYY-MM-DD');

        this.SetGrid(vm);

        //There a lag time when pushing data out so I pause for 2 second before setting taskService.data to undefined. This is a singleton
        setTimeout(() => {
          this.taskService.data = undefined;
          callOnetime = true;
        }, 2000);
        //clearInterval(intervalId)
      }
    }, 1000)
  }

  SetGrid(vm): void {
    this.events = [...this.events, {
      id: vm.id,
      title: vm.name,
      status: vm.status,
      priority: vm.priority,
      start: vm.dueDate
    }];

    this.data.push({
      id: vm.id,
      title: vm.name,
      status: vm.status,
      priority: vm.priority,
      start: vm.dueDate
    });
  }

}
