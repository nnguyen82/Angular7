import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Positions } from '../position.data';
import { Position } from '../../position/models/position.model';


@Injectable({
    providedIn: 'root',
})

export class PositionService {
    private positions$: BehaviorSubject<Position[]> = new BehaviorSubject<Position[]>(Positions);

    constructor() { }

    getPositions() { return this.positions$; }

    getPosition(id: number | string) {
        return this.getPositions().pipe(
            map(p => p.filter(po => po.id === +id))
        );
    }
}
