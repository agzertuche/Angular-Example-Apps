import { NgModule } from '@angular/core';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatDialogModule,
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialConfirmDialogComponent } from '../shared/components/material-confirm-dialog..component';

const materialModules = [
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  LayoutModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatDialogModule,
];
@NgModule({
  imports: [...materialModules],
  declarations: [MaterialConfirmDialogComponent],
  exports: [...materialModules, MaterialConfirmDialogComponent],
  entryComponents: [MaterialConfirmDialogComponent],
})
export class MaterialModule {}
