import {
  createSelector,
  ActionReducerMap,
  createFeatureSelector,
} from '@ngrx/store';
import * as fromPolicies from './policies.reducers';
import * as fromRoot from '../../../core/store/reducers';

export interface State extends fromRoot.State {
  policies: PoliciesState;
}

export interface PoliciesState {
  data: fromPolicies.State;
}

export const reducers: ActionReducerMap<PoliciesState> = {
  data: fromPolicies.reducer,
};

// createFeatureSelector is used for selecting feature states that are loaded eagerly or lazily.
export const getPoliciesState = createFeatureSelector<State, PoliciesState>(
  'policies',
);

export const getPoliciesDataState = createSelector(
  getPoliciesState,
  (state: PoliciesState) => state.data,
);

export const getPoliciesEntities = createSelector(
  getPoliciesDataState,
  fromPolicies.getPolicies,
);

export const getPoliciesLoaded = createSelector(
  getPoliciesDataState,
  fromPolicies.getPoliciesLoaded,
);
export const getPoliciesLoading = createSelector(
  getPoliciesDataState,
  fromPolicies.getPoliciesLoading,
);
