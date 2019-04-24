import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
})

export class CrmComponent implements OnInit{
  items: MenuItem[];

  constructor() {
  }

  ngOnInit() {
    this.items = [
      { label: 'Crm', icon: 'fas fa-users' }
    ];
  }
}
