import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  OPEN_SIDENAV = 'OPEN_SIDENAV',
  CLOSE_SIDENAV = 'CLOSE_SIDENAV',
}

export class OpenSidenav implements Action {
  readonly type = LayoutActionTypes.OPEN_SIDENAV;
}

export class CloseSidenav implements Action {
  readonly type = LayoutActionTypes.CLOSE_SIDENAV;
}

export type LayoutActions = OpenSidenav | CloseSidenav;
