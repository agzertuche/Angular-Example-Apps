import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from '../../models/policy';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-policies-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.css'],
})
export class PoliciesCollectionPageComponent implements OnInit {
  policies: Observable<Policy[]>;
  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    // this.policies = this.store.pipe(select(fromStore.getPoliciesEntities));
    this.policies = this.store.select(fromStore.getPoliciesEntities);
    this.store.dispatch(new fromStore.Load());
  }
}
