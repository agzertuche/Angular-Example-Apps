import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Policy } from '../../models/policy';

@Component({
  selector: 'app-policy-preview',
  template: `
    <mat-card (click)="handleSelect()">
      <mat-card-title-group>
        <mat-card-title>{{ alias }}</mat-card-title>
      </mat-card-title-group>
      <mat-card-footer>
        <span>{{ type }}</span>
      </mat-card-footer>
    </mat-card>
  `,
})
export class PolicyPreviewComponent {
  @Input()
  policy: Policy;
  @Output()
  select = new EventEmitter<Policy>();

  get id() {
    return this.policy.id;
  }

  get alias() {
    return this.policy.alias;
  }

  get type() {
    return this.policy.type;
  }

  handleSelect() {
    this.select.emit(this.policy);
  }
}
