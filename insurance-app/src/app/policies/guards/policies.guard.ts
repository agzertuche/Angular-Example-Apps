import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store';
import { Observable, of } from 'rxjs';
import { take, filter, switchMap, tap, catchError } from 'rxjs/operators';

@Injectable()
export class PoliciesGuard implements CanActivate {
  constructor(private store: Store<fromStore.State>) {}

  checkPolicies(): Observable<boolean> {
    return this.store.pipe(
      select(fromStore.getLoaded),
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadAllPolicies());
        }
      }),
      filter(loaded => loaded),
      take(1),
    );
  }

  canActivate(): Observable<boolean> {
    return this.checkPolicies().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false)),
    );
  }
}
