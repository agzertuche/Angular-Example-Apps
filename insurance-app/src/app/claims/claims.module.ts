import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimsListComponent } from './claims-list/claims-list.component';
import { ClaimsComponent } from './claims.component';
import { ClaimsRoutingModule } from './claims-routing.module';

@NgModule({
  imports: [CommonModule, ClaimsRoutingModule],
  declarations: [ClaimsComponent, ClaimsListComponent],
})
export class ClaimsModule {}
