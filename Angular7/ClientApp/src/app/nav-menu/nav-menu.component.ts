import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

declare var jQuery: any;

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})

export class NavMenuComponent implements OnInit {
  display: any;
  menuItems: MenuItem[];

  constructor() {
  }

  ngOnInit() {
    let handleSelected = function (event) {
      let allMenus = jQuery(event.originalEvent.target).closest('ul');
      let allLinks = allMenus.find('.menu-selected');

      allLinks.removeClass("menu-selected");
      let selected = jQuery(event.originalEvent.target).closest('a');
      selected.addClass('menu-selected');
    }

    this.menuItems = [
      { label: 'Dashboard', icon: 'fas fa-chart-line', routerLink: ['/'], command: (event) => handleSelected(event) },
      { label: 'Work order', icon: 'fas fa-briefcase', routerLink: ['/workorder'], command: (event) => handleSelected(event) },
      { label: 'Task', icon: 'fas fa-tasks', routerLink: ['/task'], command: (event) => handleSelected(event) },
      { label: 'Vendor', icon: 'fas fa-user', routerLink: ['/vendor'], command: (event) => handleSelected(event) },
      { label: 'CRM', icon: 'fas fa-users', routerLink: ['/crm'], command: (event) => handleSelected(event) },
      { label: 'Accountant', icon: 'fas fa-file-invoice-dollar', routerLink: ['/accountant'], command: (event) => handleSelected(event) }
    ];
  }

}
