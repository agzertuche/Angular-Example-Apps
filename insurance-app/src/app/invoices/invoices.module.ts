import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './invoices.component';

@NgModule({
  imports: [CommonModule, InvoicesRoutingModule],
  declarations: [InvoicesListComponent, InvoicesComponent],
})
export class InvoicesModule {}
