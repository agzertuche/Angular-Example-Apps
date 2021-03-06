import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, forkJoin } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Policy } from '../../models/policy';

@Component({
  selector: 'app-policy-view-page',
  templateUrl: './policy-view-page.component.html',
  styleUrls: ['./policy-view-page.component.css'],
})
export class PolicyViewPageComponent implements OnDestroy {
  actionSubscription: Subscription;
  policy: Observable<Policy>;

  constructor(private store: Store<fromStore.State>, route: ActivatedRoute) {
    this.actionSubscription = route.params
      .pipe(map(params => new fromStore.SetCurrentPolicyID(params.id)))
      .subscribe();

    this.policy = this.store.pipe(select(fromStore.getSelectedPolicy));
  }

  ngOnDestroy() {
    this.actionSubscription.unsubscribe();
  }

  deletePolicy(policy: Policy) {
    this.store.dispatch(new fromStore.RemovePolicy(policy));
  }
}
