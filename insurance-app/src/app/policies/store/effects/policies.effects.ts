import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import * as fromActions from '../actions/policies.actions';
import * as fromServices from '../../services';
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
          catchError(error => of(new fromActions.LoadPolicyFail(error))),
        );
      }),
    );

  @Effect()
  updatePolicy: Observable<Action> = this.actions
    .ofType(fromActions.PoliciesActionTypes.UpdatePolicy)
    .pipe(
      map((action: fromActions.UpdatePolicy) => action.payload),
      switchMap(updatedPolicy => {
        return this.service.updatePolicy(updatedPolicy).pipe(
          map(policy => new fromActions.UpdatePolicySuccess(policy)),
          catchError(error => of(new fromActions.UpdatePolicyFail(error))),
        );
      }),
    );

  @Effect()
  createPolicy: Observable<Action> = this.actions
    .ofType(fromActions.PoliciesActionTypes.AddPolicy)
    .pipe(
      map((action: fromActions.AddPolicy) => action.payload),
      switchMap(newPolicy => {
        return this.service.createPolicy(newPolicy).pipe(
          map(policy => new fromActions.AddPolicySuccess(policy)),
          catchError(error => of(new fromActions.AddPolicyFail(error))),
        );
      }),
    );

  @Effect({ dispatch: false })
  policySaved: Observable<Action> = this.actions
    .ofType(
      fromActions.PoliciesActionTypes.AddPolicySuccess,
      fromActions.PoliciesActionTypes.UpdatePolicySuccess,
    )
    .pipe(
      tap(
        (
          action:
            | fromActions.UpdatePolicySuccess
            | fromActions.AddPolicySuccess,
        ) => {
          this.router.navigate([`/policies/view/${action.payload.id}`]);
        },
      ),
    );

  @Effect()
  removePolicy: Observable<Action> = this.actions
    .ofType(fromActions.PoliciesActionTypes.RemovePolicy)
    .pipe(
      map((action: fromActions.RemovePolicy) => action.payload),
      switchMap(deletedPolicy => {
        return this.service.removePolicy(deletedPolicy).pipe(
          map(policy => new fromActions.RemovePolicySuccess(policy)),
          catchError(error => of(new fromActions.RemovePolicyFail(error))),
        );
      }),
    );

  @Effect({ dispatch: false })
  policyDeleted: Observable<Action> = this.actions
    .ofType(fromActions.PoliciesActionTypes.RemovePolicySuccess)
    .pipe(
      tap((action: fromActions.RemovePolicySuccess) => {
        this.router.navigate([`policies`]);
      }),
    );

  @Effect({ dispatch: false })
  selectPolicy: Observable<Action> = this.actions
    .ofType(fromActions.PoliciesActionTypes.SetCurrentPolicyID)
    .pipe(
      tap((action: fromActions.SetCurrentPolicyID) => {
        this.router.navigate(['/policies/view', action.payload]);
      }),
    );
}
