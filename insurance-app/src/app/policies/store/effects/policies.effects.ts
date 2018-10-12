import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as fromActions from '../actions/policies.actions';
import * as fromServices from '../../services';

@Injectable()
export class PoliciesEffects {
  constructor(
    private actions: Actions,
    private service: fromServices.PoliciesService,
  ) {}

  @Effect()
  load: Observable<Action> = this.actions
    .ofType(fromActions.PoliciesActionTypes.LOAD)
    .pipe(
      switchMap(() => {
        return this.service.getPolicies().pipe(
          map(policies => new fromActions.LoadSuccess(policies)),
          catchError(error => of(new fromActions.LoadFail(error))),
        );
      }),
    );
}
