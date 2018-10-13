import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from '../../models/policy';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-policy-edit-page',
  templateUrl: './policy-edit-page.component.html',
  styleUrls: ['./policy-edit-page.component.css'],
})
export class PolicyEditPageComponent implements OnInit {
  policy: Observable<Policy>;

  constructor(
    private store: Store<fromStore.State>,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    // this.policy = this.store.select(fromStore.getpolic);
  }

  updatePolicy(updatedPolicy: Policy) {
    this.store.dispatch(new fromStore.UpdatePolicy(updatedPolicy));
  }
}
