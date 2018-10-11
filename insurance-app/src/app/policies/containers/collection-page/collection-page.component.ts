import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from '../../model/policy';
import { Store, select } from '@ngrx/store';
import * as fromPolicies from '../../store';
import * as PoliciesActions from '../../store/policies.actions';

@Component({
  selector: 'app-policies-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.css'],
})
export class PoliciesCollectionPageComponent implements OnInit {
  policies: Observable<Policy[]>;
  constructor(private store: Store<fromPolicies.State>) {
    this.policies = this.store.pipe(select(fromPolicies.getAllPolicies));
  }

  ngOnInit() {
    this.store.dispatch(new PoliciesActions.Load());
  }
}
