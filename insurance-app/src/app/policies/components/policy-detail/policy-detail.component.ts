import { Component, Input } from '@angular/core';
import { Policy } from '../../model/policy';

@Component({
  selector: 'app-policy-detail',
  templateUrl: './policy-detail.component.html',
  styleUrls: ['./policy-detail.component.css'],
})
export class PolicyDetailComponent {
  @Input()
  policy: Policy;

  get id() {
    return this.policy.id;
  }

  get alias() {
    return this.policy.alias;
  }

  get indent() {
    return this.policy.indent;
  }

  get type() {
    return this.policy.type;
  }

  get start_date() {
    return this.policy.start_date;
  }
  get end_date() {
    return this.policy.end_date;
  }
}
