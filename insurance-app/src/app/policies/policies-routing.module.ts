import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PoliciesCollectionPageComponent } from './containers/policies-collection-page/policies-collection-page.component';
import { PolicyDetailComponent } from './components/policy-detail/policy-detail.component';

const routes: Routes = [
  { path: ':id', component: PolicyDetailComponent },
  { path: '', component: PoliciesCollectionPageComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliciesRoutingModule {}
