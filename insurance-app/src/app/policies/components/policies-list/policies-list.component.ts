import { Component, Input } from '@angular/core';
import { Policy } from '../../model/policy';

@Component({
  selector: 'app-policies-list',
  templateUrl: './policies-list.component.html',
  styleUrls: ['./policies-list.component.css'],
})
export class PoliciesListComponent {
  @Input()
  policies: Policy[];
}
