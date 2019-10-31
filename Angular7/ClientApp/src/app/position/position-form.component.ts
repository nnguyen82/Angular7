import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PositionService } from './services/position.service';
import { Observable } from 'rxjs';
import { Position } from '../position/models/position.model';

@Component({
    templateUrl: './position-form.component.html',
})

export class PositionFormComponent implements OnInit {
    id: any;
    formName: any;
    formId: any;
    positions$: Observable<Position[]>;

    constructor(private route: ActivatedRoute, private router: Router, private _positionService: PositionService) {
    }

    ngOnInit() {
        this.route.data
            .subscribe((data) => {
                this.formId = data.position[0].id;
                this.formName = data.position[0].name;
            });
    }
}
