import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import * as moment from 'moment';

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

  constructor() {
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
    let dueDate = moment($event.dueDate).format('YYYY-MM-DD');

    this.events = [...this.events, {
      id: id,
      title: taskName,
      status: $event.status,
      priority: $event.priority,
      start: dueDate
    }];

    this.data.push({
      id: id,
      title: taskName,
      status: $event.status,
      priority: $event.priority,
      start: dueDate
    });

    this.showDialog = false;
  }

  Search(id: any): any {
    return this.data.find(x => x.id == id);
  }
}
