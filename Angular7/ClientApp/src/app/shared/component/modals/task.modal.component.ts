import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FormGroup, FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-taskModal',
  templateUrl: './task.modal.component.html'
})

export class TaskModalComponent implements OnInit {
  private _showDialog: boolean = false;
  @Output() showDialogChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() data: any = null;
  @Output() SubmitClick: EventEmitter<any> = new EventEmitter<any>();

  @Input() set showDialog(value: boolean) {
    this._showDialog = value;

    if (value) {
      this.BindData(this.data);
    }
  }

  get showDialog(): boolean {
    return this._showDialog;
  }

  newTaskForm = new FormGroup({
    taskName: new FormControl(''),
    status: new FormControl(null),
    priority: new FormControl(null),
    dueDate: new FormControl(null)
  });

  statuses: SelectItem[];
  priorities: SelectItem[];

  constructor() {
    this.statuses = [
      { label: 'Select Status', value: null },
      { label: 'Open', value: 'Open' },
      { label: 'Assign', value: 'Assign' },
      { label: 'In-progress', value: 'In-progress' },
      { label: 'Completed', value: 'Completed' },
      { label: 'Closed', value: 'Closed' }
    ];

    this.priorities = [
      { label: 'Select Priority', value: null },
      { label: 'High', value: 'High' },
      { label: 'Medium', value: 'Medium' },
      { label: 'Low', value: 'Low' }
    ];
  }

  ngOnInit() {
  }

  BindData(data) {
    if (data !== null) {
      this.newTaskForm.get('taskName').setValue(data.taskName);
      this.newTaskForm.get('status').setValue(data.status);
      this.newTaskForm.get('priority').setValue(data.priority);
      this.newTaskForm.get('dueDate').setValue(data.dueDate);
    }
  }

  private Close() {
    this.showDialog = false;
    this.showDialogChange.emit(this.showDialog);
    this.data = null;

    this.newTaskForm.get('taskName').setValue('');
    this.newTaskForm.get('status').setValue(null);
    this.newTaskForm.get('priority').setValue(null);
    this.newTaskForm.get('dueDate').setValue(null);
  }

  onClose() {
    this.Close();
  }

  onSubmit() {
    let taskName = this.newTaskForm.value.taskName;
    let dueDate = moment(this.newTaskForm.value.dueDate).format('L');
    let status = this.newTaskForm.value.status;
    let priority = this.newTaskForm.value.priority;

    this.data = { taskName: taskName, dueDate: dueDate, status: status, priority: priority};

    this.SubmitClick.emit(this.data);
    this.Close();
  }
}
