import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Policy } from '../../models/policy';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css'],
})
export class PolicyListComponent {
  @Input()
  policies: Policy[];
  @Output()
  select = new EventEmitter<Policy>();

  handleSelect(policy: Policy) {
    this.select.emit(policy);
  }
}
