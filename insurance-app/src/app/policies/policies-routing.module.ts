import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PoliciesCollectionPageComponent } from './containers/collection-page/collection-page.component';
import { PolicyDetailComponent } from './components/policy-detail/policy-detail.component';
import { FormPageComponent } from './containers/form-page/form-page.component';

const routes: Routes = [
  { path: ':id', component: PolicyDetailComponent },
  {
    path: '',
    component: PoliciesCollectionPageComponent,
  },
  { path: 'new', component: FormPageComponent },
  {
    path: 'edit/:id',
    component: FormPageComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliciesRoutingModule {}
