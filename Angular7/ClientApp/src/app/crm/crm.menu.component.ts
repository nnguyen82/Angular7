import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
    selector: 'app-crmMenu',
    templateUrl: './crm.menu.component.html',
})

export class CrmMenuComponent implements OnInit {

    crmMenuItems: MenuItem[];

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.crmMenuItems = [
            { label: 'Physical Therapy Assistant', icon: 'fas fa-user', command: (event) => this.navigate(1) },
            { label: 'LPHA', icon: 'fas fa-user', command: (event) => this.navigate(2) },
            { label: 'Care Coordinator', icon: 'fas fa-user', command: (event) => this.navigate(3) }
        ];
    }

    navigate(id) {
        this.router.navigate(['/crm/crmchild', id]);
    }
}
