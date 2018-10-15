import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {
  PolicyListPageComponent,
  PolicyNewPageComponent,
  PolicyEditPageComponent,
  PolicyViewPageComponent,
} from './containers';
import * as fromGuards from './guards';

const routes: Routes = [
  {
    path: '',
    canActivate: [fromGuards.PoliciesGuard],
    component: PolicyListPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'new',
    canActivate: [fromGuards.PoliciesGuard],
    component: PolicyNewPageComponent,
  },
  {
    path: 'view/:id',
    canActivate: [fromGuards.PoliciesGuard],
    component: PolicyViewPageComponent,
  },
  {
    path: 'edit/:id',
    canActivate: [fromGuards.PoliciesGuard],
    component: PolicyEditPageComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliciesRoutingModule {}
