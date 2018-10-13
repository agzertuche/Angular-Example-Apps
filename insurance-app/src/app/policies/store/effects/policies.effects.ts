import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap, map, catchError, startWith, mapTo } from 'rxjs/operators';
import * as fromActions from '../actions/policies.actions';
import * as fromServices from '../../services';
import * as fromRootStore from '../../../core/store';
import { Loading, Loaded } from '../../../core/store/actions/loading.actions';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Router } from '@angular/router';

@Injectable()
export class PoliciesEffects {
  constructor(
    private actions: Actions,
    private service: fromServices.PoliciesService,
    private router: Router,
  ) {}

  @Effect()
  loadPolicies: Observable<Action> = this.actions
    .ofType(fromActions.PoliciesActionTypes.LoadPolicies)
    .pipe(
      switchMap(() => {
        return this.service.getPolicies().pipe(
          map(policies => new fromActions.LoadPoliciesSuccess(policies)),
          catchError(error => of(new fromActions.LoadPoliciesFail(error))),
        );
      }),
    );
}
