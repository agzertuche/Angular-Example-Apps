import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Policy } from '../../models/policy';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { MaterialConfirmDialogComponent } from 'src/app/shared/components/material-confirm-dialog..component';

@Component({
  selector: 'app-policy-detail',
  templateUrl: './policy-detail.component.html',
  styleUrls: ['./policy-detail.component.css'],
})
export class PolicyDetailComponent {
  @Input()
  policy: Policy;
  @Output()
  delete = new EventEmitter<Policy>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
  ) {}

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

  handleEdit() {
    // FIXME: router should not be here
    this.router.navigate(['../../edit', this.policy.id], {
      relativeTo: this.route,
    });
  }

  handleDelete() {
    const dialogRef = this.dialog.open(MaterialConfirmDialogComponent, {
      width: '250px',
      data: this.policy,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete.emit(this.policy);
      }
    });
  }
}
