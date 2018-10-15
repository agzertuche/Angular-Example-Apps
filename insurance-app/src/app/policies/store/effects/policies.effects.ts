import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  switchMap,
  map,
  catchError,
  startWith,
  mapTo,
  tap,
} from 'rxjs/operators';
import * as fromActions from '../actions/policies.actions';
import * as fromServices from '../../services';
import * as fromRootStore from '../../../core/store';
import * as fromStore from '../../store';

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
    .ofType(fromActions.PoliciesActionTypes.LoadAllPolicies)
    .pipe(
      switchMap(() => {
        return this.service.getPolicies().pipe(
          map(policies => new fromActions.LoadAllPoliciesSuccess(policies)),
          catchError(error => of(new fromActions.LoadAllPoliciesFail(error))),
        );
      }),
    );

  @Effect()
  loadPolicy: Observable<Action> = this.actions
    .ofType(fromActions.PoliciesActionTypes.LoadPolicy)
    .pipe(
      switchMap(() => {
        return this.service.getPolicy('5bb7e225fc13ae7745000016').pipe(
          map(
            policy =>
              new fromActions.LoadPolicySuccess('5bb7e225fc13ae7745000016'),
          ),
          catchError(error => of(new fromActions.LoadPolicyFail())),
        );
      }),
    );

  @Effect({ dispatch: false })
  savePolicy: Observable<Action> = this.actions
    .ofType(
      fromActions.PoliciesActionTypes.AddPolicySuccess,
      fromActions.PoliciesActionTypes.UpdatePolicySuccess,
    )
    .pipe(
      tap(() => {
        this.router.navigate(['/policies/5bb7e225fc13ae7745000016']);
      }),
    );

  // @Effect({ dispatch: false })
  // selectPolicy: Observable<Action> = this.actions
  //   .ofType(fromActions.PoliciesActionTypes.SetCurrentPolicyID)
  //   .pipe(
  //     tap(() => {
  //       this.router.navigate(['/policies/view', fromStore.getSelectedPolicyId]);
  //     }),
  //   );
}
