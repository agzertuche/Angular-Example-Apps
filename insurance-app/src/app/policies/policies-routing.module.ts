import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {
  PolicyListPageComponent,
  PolicyNewPageComponent,
  PolicyEditPageComponent,
  PolicyViewPageComponent,
} from './containers';

const routes: Routes = [
  {
    path: '',
    component: PolicyListPageComponent,
    pathMatch: 'full',
  },
  { path: 'new', component: PolicyNewPageComponent },
  { path: 'view/:id', component: PolicyViewPageComponent },
  {
    path: 'edit/:id',
    component: PolicyEditPageComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliciesRoutingModule {}
