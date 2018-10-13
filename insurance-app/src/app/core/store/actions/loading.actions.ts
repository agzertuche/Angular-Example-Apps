import { Action } from '@ngrx/store';

export enum LoadingActionTypes {
  Loaded = '[Loading] Loaded',
  Loading = '[Loading] Loading',
}

export class Loaded implements Action {
  readonly type = LoadingActionTypes.Loaded;
}

export class Loading implements Action {
  readonly type = LoadingActionTypes.Loading;
}

export type LoadingActions = Loaded | Loading;
