import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsComponent } from './payments.component';
import { PaymentsListComponent } from './payments-list/payments-list.component';

const routes: Routes = [
  { path: '', component: PaymentsComponent },
  { path: 'list', component: PaymentsListComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsRoutingModule {}
