import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
})

export class VendorComponent implements OnInit {
  items: MenuItem[];

  constructor() {
  }

  ngOnInit() {
    this.items = [
      { label: 'Vendor', icon: 'fas fa-user' }
    ];
  }
}
