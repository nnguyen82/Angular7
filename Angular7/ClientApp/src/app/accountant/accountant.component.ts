import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
})

export class AccountantComponent implements OnInit{
  items: MenuItem[];

  constructor() {
  }

  ngOnInit() {
    this.items = [
      { label: 'Accountant', icon: 'fas fa-file-invoice-dollar' }
    ];
  }
}
