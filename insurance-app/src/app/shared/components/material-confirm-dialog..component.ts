import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-material-confirm-dialog.',
  templateUrl: './material-confirm-dialog.component.html',
})
export class MaterialConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<MaterialConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  confirmNo(): void {
    this.dialogRef.close(false);
  }

  confirmYes() {
    this.dialogRef.close(true);
  }
}
