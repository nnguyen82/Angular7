import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { PositionService } from '../services/position.service';
import { switchMap } from 'rxjs/operators';
import { Position } from '../../position/models/position.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-positionMenu',
    templateUrl: './position.menu.component.html',
})

export class PositionMenuComponent implements OnInit {

    positionMenuItems: MenuItem[] = [];
    positions$: Observable<Position[]>;
    selectedId: number;

    constructor(private route: ActivatedRoute, private router: Router, private _positionService: PositionService) {
    }

    ngOnInit() {

        this.positions$ = this.route.paramMap.pipe(
            switchMap(params => {
                this.selectedId = +params.get('id');
                return this._positionService.getPositions();
            })
        );

        this.positions$.subscribe((ret) => {
            for (let i = 0; i < ret.length; i++) {
                let vm = { label: ret[i].name, icon: 'fas fa-user', command: (event) => this.navigate(ret[i].id) };

                this.positionMenuItems.push(vm);
            }
        });
    }

    navigate(id) {
        this.router.navigate(['/position/positionform', id]);
    }
}
