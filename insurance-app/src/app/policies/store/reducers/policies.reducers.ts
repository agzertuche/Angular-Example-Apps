import {
  PoliciesActions,
  PoliciesActionTypes,
} from '../actions/policies.actions';
import { Policy } from '../../models/policy';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { PolicyDetailComponent } from '../../components';

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
  loading: boolean;
  loaded: boolean;
}

export const initialState: State = adapter.getInitialState({
  currentPolicyId: null,
  loading: false,
  loaded: false,
});

export function reducer(
  state: State = initialState,
  action: PoliciesActions,
): State {
  switch (action.type) {
    case PoliciesActionTypes.LoadAllPolicies:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case PoliciesActionTypes.LoadAllPoliciesSuccess:
      return adapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true,
      });
    case PoliciesActionTypes.SetCurrentPolicyID:
      return {
        ...state,
        currentPolicyId: action.payload,
      };
    case PoliciesActionTypes.UpdatePolicy:
    case PoliciesActionTypes.AddPolicy:
      return adapter.upsertOne(action.payload, state);
    case PoliciesActionTypes.RemovePolicy:
      return adapter.removeOne(action.payload.id, state);
    case PoliciesActionTypes.LoadPolicy:
      return adapter.addOne(action.payload, state);
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
export const getLoding = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
