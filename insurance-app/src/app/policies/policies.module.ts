import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliciesRoutingModule } from './policies-routing.module';
import { PolicyDetailComponent } from './components/policy-detail/policy-detail.component';
import { ViewPageComponent } from './containers/view-page/view-page.component';
import { PoliciesListComponent } from './components/policies-list/policies-list.component';
import { PoliciesCollectionPageComponent } from './containers/collection-page/collection-page.component';
import { FormPageComponent } from './containers/form-page/form-page.component';
import { PolicyFormComponent } from './components/policy-form/policy-form.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store';
import { PoliciesEffects } from './store/policies.effects';
import { PoliciesService } from './policies.service';

@NgModule({
  imports: [
    CommonModule,
    PoliciesRoutingModule,
    StoreModule.forFeature('policies', reducers),
    EffectsModule.forFeature([PoliciesEffects]),
  ],
  declarations: [
    PoliciesCollectionPageComponent,
    ViewPageComponent,
    PoliciesListComponent,
    PolicyDetailComponent,
    FormPageComponent,
    PolicyFormComponent,
  ],
  providers: [PoliciesService],
})
export class PoliciesModule {}
