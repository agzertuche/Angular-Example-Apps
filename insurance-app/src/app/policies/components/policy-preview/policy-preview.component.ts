import { Component, Input } from '@angular/core';
import { Policy } from '../../models/policy';

@Component({
  selector: 'app-policy-preview',
  template: `
    <a [routerLink]="['/policies', id]">
      <mat-card>
        <mat-card-title-group>
          <mat-card-title>{{ alias }}</mat-card-title>
        </mat-card-title-group>
        <mat-card-footer>
          <span>{{ type }}</span>
        </mat-card-footer>
      </mat-card>
    </a>
  `,
})
export class PolicyPreviewComponent {
  @Input()
  policy: Policy;

  get id() {
    return this.policy.id;
  }

  get alias() {
    return this.policy.alias;
  }

  get type() {
    return this.policy.type;
  }
}
