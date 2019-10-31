import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap, take }         from 'rxjs/operators';
import { PositionService } from './services/position.service';
import { Position } from '../position/models/position.model';

@Injectable({
  providedIn: 'root',
})
export class PositionFormResolverService implements Resolve<Position[]> {
    constructor(private _positionService: PositionService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Position[]> | Observable<never> {
    let id = route.paramMap.get('id');

      return this._positionService.getPosition(id).pipe(
      take(1),
      mergeMap(pos => {
        if (pos) {
          return of(pos);
        } else { // id not found
            this.router.navigate(['/position']);
          return EMPTY;
        }
      })
    );
  }
}
