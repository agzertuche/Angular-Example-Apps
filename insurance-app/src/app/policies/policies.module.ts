import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliciesRoutingModule } from './policies-routing.module';
import { PolicyDetailComponent } from './components/policy-detail/policy-detail.component';
import { ViewPageComponent } from './containers/view-page/view-page.component';
import { PoliciesListComponent } from './components/policies-list/policies-list.component';
import { PoliciesCollectionPageComponent } from './containers/policies-collection-page/policies-collection-page.component';

@NgModule({
  imports: [CommonModule, PoliciesRoutingModule],
  declarations: [
    PoliciesCollectionPageComponent,
    ViewPageComponent,
    PoliciesListComponent,
    PolicyDetailComponent,
  ],
})
export class PoliciesModule {}
