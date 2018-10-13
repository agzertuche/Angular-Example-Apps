import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from '../../models/policy';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-policy-new-page',
  templateUrl: './policy-new-page.component.html',
  styleUrls: ['./policy-new-page.component.css'],
})
export class PolicyNewPageComponent implements OnInit {
  policy: Observable<Policy>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    // this.policy = this.store.select(fromStore.getpolic);
  }

  createPolicy(newPolicy: Policy) {
    this.store.dispatch(new fromStore.AddPolicy(newPolicy));
  }
}
