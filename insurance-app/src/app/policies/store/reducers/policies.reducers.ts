import {
  PoliciesActions,
  PoliciesActionTypes,
} from '../actions/policies.actions';
import { Policy } from '../../models/policy';

export interface State {
  loading: boolean;
  loaded: boolean;
  entities: Policy[];
}

const initialState: State = {
  loading: false,
  loaded: false,
  entities: [],
};

export function reducer(state = initialState, action: PoliciesActions): State {
  switch (action.type) {
    case PoliciesActionTypes.LOAD:
      return {
        ...state,
        loading: true,
      };
    case PoliciesActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        entities: action.payload,
        loading: false,
        loaded: true,
      };
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

export const getPoliciesLoading = (state: State) => state.loading;
export const getPoliciesLoaded = (state: State) => state.loaded;
export const getPolicies = (state: State) => state.entities;
