import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliciesRoutingModule } from './policies-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../core/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { reducers, effects } from './store';
import { services } from './services';
import { containers } from './containers';
import { components } from './components';
import { guards } from './guards';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PoliciesRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('policies', reducers),
    EffectsModule.forFeature([...effects]),
  ],
  providers: [...services, ...guards],
  declarations: [...containers, ...components],
  exports: [...containers, ...components],
})
export class PoliciesModule {}
