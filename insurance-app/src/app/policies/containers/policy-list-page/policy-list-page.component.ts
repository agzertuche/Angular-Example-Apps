import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from '../../models/policy';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-policy-list-page',
  templateUrl: './policy-list-page.component.html',
  styleUrls: ['./policy-list-page.component.css'],
})
export class PolicyListPageComponent implements OnInit {
  policies: Observable<Policy[]>;
  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.policies = this.store.select(fromStore.selectAll);
    this.store.dispatch(new fromStore.LoadPolicies());
  }
}
