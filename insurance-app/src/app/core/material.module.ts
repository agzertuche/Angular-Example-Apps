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
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

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
];
@NgModule({
  imports: [...materialModules],
  exports: [...materialModules],
})
export class MaterialModule {}
