import {
  createSelector,
  ActionReducerMap,
  createFeatureSelector,
} from '@ngrx/store';
import * as fromPolicies from './policies.reducers';
import * as fromRoot from '../../reducers';

export interface PoliciesState {
  policies: fromPolicies.State;
}

export interface State extends fromRoot.State {
  policies: PoliciesState;
}

export const reducers: ActionReducerMap<PoliciesState> = {
  policies: fromPolicies.reducer,
};

// This is used for selecting feature states that are loaded eagerly or lazily.
export const getPoliciesState = createFeatureSelector<PoliciesState>(
  'policies',
);

export const getPoliciesEntitiesState = createSelector(
  getPoliciesState,
  state => state.policies,
);

export const getAllPolicies = createSelector(
  getPoliciesEntitiesState,
  fromPolicies.getAllPolicies,
);
