import { LoadingActions, LoadingActionTypes } from '../actions/loading.actions';

export interface State {
  loading: boolean;
}

const initialState: State = {
  loading: false,
};

export function reducer(
  state: State = initialState,
  action: LoadingActions,
): State {
  switch (action.type) {
    case LoadingActionTypes.Loaded:
      return {
        loading: false,
      };
    case LoadingActionTypes.Loading:
      return {
        loading: true,
      };
    default:
      return state;
  }
}

export const getLoading = (state: State) => state.loading;
