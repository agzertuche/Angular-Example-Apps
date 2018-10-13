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
  policies: fromPolicies.State;
}

export const reducers: ActionReducerMap<PoliciesState> = {
  policies: fromPolicies.reducer,
};

// createFeatureSelector is used for selecting feature states that are loaded eagerly or lazily.
export const getPoliciesRootState = createFeatureSelector<PoliciesState>(
  'policies',
);

export const getPoliciesState = createSelector(
  getPoliciesRootState,
  (state: PoliciesState) => state.policies,
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = fromPolicies.adapter.getSelectors(getPoliciesState);

export const getSelectedPolicyId = createSelector(
  getPoliciesState,
  fromPolicies.getCurrentPolicyId,
);

export const getSelectedPolicy = createSelector(
  selectEntities,
  getSelectedPolicyId,
  (entities, id) => {
    return id && entities[id];
  },
);
