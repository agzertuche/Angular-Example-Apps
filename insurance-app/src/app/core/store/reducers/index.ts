import { storeFreeze } from 'ngrx-store-freeze';
import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromRouter from '@ngrx/router-store';
import * as fromLayout from './layout.reducer';
import * as fromLoading from './loading.reducer';

export interface State {
  layout: fromLayout.State;
  router: fromRouter.RouterReducerState;
  loading: fromLoading.State;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer,
  router: fromRouter.routerReducer,
  loading: fromLoading.reducer,
};

// Middleware to log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

export const getLayoutState = createFeatureSelector<State, fromLayout.State>(
  'layout',
);

export const getShowSidenav = createSelector(
  getLayoutState,
  fromLayout.getShowSidenav,
);

export const getLoadingState = createFeatureSelector<State, fromLoading.State>(
  'loading',
);

export const getLoading = createSelector(
  getLoadingState,
  fromLoading.getLoading,
);
