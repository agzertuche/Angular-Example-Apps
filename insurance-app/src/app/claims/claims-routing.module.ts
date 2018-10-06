import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClaimsComponent } from './claims.component';
import { ClaimsListComponent } from './claims-list/claims-list.component';

const routes: Routes = [
  { path: '', component: ClaimsComponent },
  { path: 'list', component: ClaimsListComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaimsRoutingModule {}
