import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})

export class NavMenuComponent {
  display: any;
  menuItems: MenuItem[];

  constructor() {
    this.menuItems = [
      { label: 'Dashboard', icon: 'pi pi-chart-bar', routerLink: ['/'] },
      { label: 'Work order', icon: 'pi pi-folder', routerLink: ['/workorder'] },
      { label: 'Task', icon: 'pi pi-folder', routerLink: ['/task'] },
      { label: 'Vendor', icon: 'pi pi-user', routerLink: ['/vendor'] },
      { label: 'CRM', icon: 'pi pi-user', routerLink: ['/crm'] },
      { label: 'Accountant', icon: 'pi pi-briefcase', routerLink: ['/accountant'] }
    ];
  }

}
