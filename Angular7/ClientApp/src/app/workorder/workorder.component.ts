import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  templateUrl: './workorder.component.html',
  styleUrls: ['./workorder.component.css']
})

export class WorkOrderComponent implements OnInit{
  items: MenuItem[];
  pageIndex: any;
  pages: MenuItem[];
  PageNames = PageNames;

  constructor() {
  }

  ngOnInit() {
    this.items = [
      { label: 'Work order', icon: 'fas fa-briefcase' }
    ];

    this.pageIndex = this.PageNames.CreateJob;

    this.pages = [
      { label: "Create Job" },
      { label: "Job assignments" },
      { label: "Invoicing" },
      { label: "Complete" }
    ];
  }

  onSubmit(): void {
  }
}

export enum PageNames {
  CreateJob,
  JobAssignments,
  Invoicing,
  Complete
}
