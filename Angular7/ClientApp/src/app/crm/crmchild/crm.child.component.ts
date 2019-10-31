import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
    selector: 'app-crmchild',
    templateUrl: './crm.child.component.html',
})

export class CrmChildComponent implements OnInit {
    id: any;
    menu: Menu[];
    menuName: any;

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.menu = [
            { id: '1', name: 'Physical Therapy Assistant' },
            { id: '2', name: 'LPHA'},
            { id: '3', name: 'Care Coordinator'}
        ];

        this.id = this.route.snapshot.paramMap.get('id');

        this.menuName = this.menu.filter(x => x.id == this.id)[0].name;
    }
}

interface Menu {
    id: any;
    name: any;
}
