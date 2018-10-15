import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from '../../models/policy';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-policy-list-page',
  templateUrl: './policy-list-page.component.html',
  styleUrls: ['./policy-list-page.component.css'],
})
export class PolicyListPageComponent implements OnInit {
  policies: Observable<Policy[]>;
  loading: Observable<boolean>;

  constructor(private store: Store<fromStore.State>, private router: Router) {
    this.policies = this.store.pipe(select(fromStore.selectAll));
    this.loading = this.store.pipe(select(fromStore.getLoading));
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadAllPolicies());
  }

  selectPolicy(policy: any) {
    this.store.dispatch(new fromStore.SetCurrentPolicyID(policy.id));
  }

  newPolicy() {
    this.router.navigate(['/policies/new']);
  }
}
