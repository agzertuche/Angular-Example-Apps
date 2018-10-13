import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Policy } from '../../models/policy';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-policy-detail',
  templateUrl: './policy-detail.component.html',
  styleUrls: ['./policy-detail.component.css'],
})
export class PolicyDetailComponent {
  @Input()
  policy: Policy;
  @Output()
  delete = new EventEmitter();

  constructor(private route: ActivatedRoute, private router: Router) {}

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

  onEdit() {
    // FIXME: router should not be here
    this.router.navigate(['../edit', this.policy.id], {
      relativeTo: this.route,
    });
  }

  onDelete() {
    // TODO: add a material dialog
    const remove = window.confirm('Are you sure?');
    if (remove) {
      this.delete.emit();
    }
  }
}
