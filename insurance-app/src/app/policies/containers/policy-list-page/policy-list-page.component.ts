import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from '../../models/policy';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy-list-page',
  templateUrl: './policy-list-page.component.html',
  styleUrls: ['./policy-list-page.component.css'],
})
export class PolicyListPageComponent implements OnInit {
  policies: Observable<Policy[]>;

  constructor(private store: Store<fromStore.State>, private router: Router) {}

  ngOnInit() {
    // Selector from the main store allows us to monitor changes
    // only on policies state without monitoring the rest of the state
    this.policies = this.store.pipe(select(fromStore.selectAll));
    this.store.dispatch(new fromStore.LoadAllPolicies());
  }

  selectPolicy(policy: any) {
    this.store.dispatch(new fromStore.SetCurrentPolicyID(policy.id));
    this.router.navigate(['/policies/view', policy.id]);
  }
}
