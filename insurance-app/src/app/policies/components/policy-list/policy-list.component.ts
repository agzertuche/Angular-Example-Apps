import { Component, Input } from '@angular/core';
import { Policy } from '../../models/policy';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css'],
})
export class PolicyListComponent {
  @Input()
  policies: Policy[];
}
