import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsListComponent } from './payments-list/payments-list.component';
import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments.component';

@NgModule({
  imports: [CommonModule, PaymentsRoutingModule],
  declarations: [PaymentsListComponent, PaymentsComponent],
})
export class PaymentsModule {}
