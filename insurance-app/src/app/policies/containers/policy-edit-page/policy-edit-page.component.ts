import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Policy } from '../../models/policy';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-policy-edit-page',
  templateUrl: './policy-edit-page.component.html',
  styleUrls: ['./policy-edit-page.component.css'],
})
export class PolicyEditPageComponent implements OnInit, OnDestroy {
  actionSubscription: Subscription;
  policy: Observable<Policy>;

  constructor(private store: Store<fromStore.State>, route: ActivatedRoute) {
    this.actionSubscription = route.params
      .pipe(map(params => new fromStore.SetCurrentPolicyID(params.id)))
      .subscribe(() => {
        this.policy = this.store.pipe(select(fromStore.getSelectedPolicy));
      });
  }

  ngOnInit() {
    // this.store.dispatch(new fromStore.LoadPolicy(this.route.params));
    // this.policy = this.store.pipe(select(fromStore.getSelectedPolicy));
  }

  updatePolicy(updatedPolicy: any) {
    this.store.dispatch(new fromStore.UpdatePolicy(updatedPolicy));
  }

  ngOnDestroy() {
    this.actionSubscription.unsubscribe();
  }
}
