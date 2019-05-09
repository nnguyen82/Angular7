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

  constructor() {
  }

  ngOnInit() {
    this.items = [
      { label: 'Task Calendar', icon: 'fas fa-calendar' }
    ];

    this.events = [
      {
        "title": "All Day Event",
        "start": "2019-05-01"
      },
      {
        "title": "Long Event",
        "start": "2019-04-07",
        "end": "2019-05-10"
      },
      {
        "title": "Repeating Event",
        "start": "2019-04-09T16:00:00"
      },
      {
        "title": "Repeating Event",
        "start": "2019-05-16T16:00:00",
        "end": "2019-05-16T20:00:00"
      },
      {
        "title": "Conference",
        "start": "2019-05-11",
        "end": "2019-05-13"
      }
    ];

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
    alert('Clicked on: ' + info.event.title);
  }

  DateClick(info: any): void {
    let dateClick = new Date(moment(info.dateStr).format('L'));
    this.formData = { taskName: '', dueDate: dateClick, status: null, priority: null };
    this.showDialog = true;
  }

  onSubmit($event) {
    let taskName = $event.taskName;
    let dueDate = moment($event.dueDate).format('YYYY-MM-DD');

    this.events = [...this.events, {
      "title": taskName,
      "start": dueDate
    }];

    this.showDialog = false;
  }
}
