import {
  PoliciesActions,
  PoliciesActionTypes,
} from '../actions/policies.actions';
import { Policy } from '../../models/policy';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export const adapter = createEntityAdapter<Policy>({
  selectId: (policy: Policy) => policy.id,
  sortComparer: false,
});

// -----------------------------------------
// The shape of EntityState
// ------------------------------------------
// interface EntityState<Policy> {
//   ids: string[] | number[];
//   entities: { [id: string]: Policy };
// }
// -----------------------------------------
// -> ids arrays allow us to sort data easily
// -> entities map allows us to access the data quickly without iterating/filtering though an array of objects

export interface State extends EntityState<Policy> {
  currentPolicyId: string | null;
}

export const initialState: State = adapter.getInitialState({
  currentPolicyId: null,
});

export function reducer(
  state: State = initialState,
  action: PoliciesActions,
): State {
  switch (action.type) {
    case PoliciesActionTypes.LoadPoliciesSuccess:
      return adapter.addAll(action.payload, state);
    case PoliciesActionTypes.SetCurrentPolicyID:
      return {
        ...state,
        currentPolicyId: action.payload,
      };
    default:
      return state;
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */
export const getCurrentPolicyId = (state: State) => state.currentPolicyId;
