import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  PoliciesActionTypes,
  Load,
  LoadSuccess,
  LoadFail,
} from './policies.actions';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { PoliciesService } from '../policies.service';
import { Policy } from '../model/policy';

@Injectable()
export class PoliciesEffects {
  @Effect()
  // load: Observable<Action> = this.actions.pipe(
  //   ofType(PoliciesActionTypes.LOAD),
  //   startWith(new Load()),
  //   switchMap(() => this.service.getPolicies()),
  //   map((policies: Policy[]) => new LoadSuccess(policies)),
  // );
  load: Observable<Action> = this.actions.ofType(PoliciesActionTypes.LOAD).pipe(
    switchMap(() => {
      return this.service.getPolicies().pipe(
        map(policies => new LoadSuccess(policies)),
        catchError(error => of(new LoadFail(error))),
      );
    }),
  );
  constructor(private actions: Actions, private service: PoliciesService) {}
}
