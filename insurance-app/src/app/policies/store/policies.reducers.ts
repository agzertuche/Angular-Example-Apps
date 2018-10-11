import { PoliciesActionTypes, PoliciesActions } from './policies.actions';
import { Policy } from '../model/policy';

export interface State {
  loading: boolean;
  loaded: boolean;
  policies: Policy[];
}

const initialState: State = {
  loading: false,
  loaded: false,
  policies: [],
};

export function reducer(state = initialState, action: PoliciesActions): State {
  switch (action.type) {
    case PoliciesActionTypes.LOAD:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case PoliciesActionTypes.LOAD_SUCCESS: {
      return {
        policies: action.payload,
        loading: false,
        loaded: true,
      };
    }
    case PoliciesActionTypes.LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    default:
      return state;
  }
}

export const getAllPolicies = (state: State) => state.policies;
