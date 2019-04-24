import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-workorder',
  templateUrl: './workorder.component.html',
  styleUrls: ['./workorder.component.css']
})

export class WorkOrderComponent implements OnInit{
  items: MenuItem[];

  constructor() {
  }

  ngOnInit() {
    this.items = [
      { label: 'Work order', icon: 'fas fa-briefcase' }
    ];
  }
}
