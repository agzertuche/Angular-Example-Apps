import { Action } from '@ngrx/store';
import { Policy } from '../model/policy';

export enum PoliciesActionTypes {
  ADD = 'ADD',
  ADD_SUCCESS = 'ADD_SUCCESS',
  ADD_FAIL = 'ADD_FAIL',
  UPDATE = 'UPDATE',
  UPDATE_SUCCESS = 'UPDATE_SUCCESS',
  UPDATE_FAIL = 'UPDATE_FAIL',
  REMOVE = 'REMOVE',
  REMOVE_SUCCESS = 'REMOVE_SUCCESS',
  REMOVE_FAIL = 'REMOVE_FAIL',
  LOAD = 'LOAD',
  LOAD_SUCCESS = 'LOAD_SUCCESS',
  LOAD_FAIL = 'LOAD_FAIL',
}

export class Add implements Action {
  readonly type = PoliciesActionTypes.ADD;
  constructor(public payload: Policy) {}
}
export class AddSuccess implements Action {
  readonly type = PoliciesActionTypes.ADD_SUCCESS;
  constructor(public payload: Policy) {}
}
export class AddFail implements Action {
  readonly type = PoliciesActionTypes.ADD_FAIL;
  constructor(public payload: Policy) {}
}
export class Update implements Action {
  readonly type = PoliciesActionTypes.UPDATE;
  constructor(public payload: Policy) {}
}
export class UpdateSuccess implements Action {
  readonly type = PoliciesActionTypes.UPDATE_SUCCESS;
  constructor(public payload: Policy) {}
}
export class UpdateFail implements Action {
  readonly type = PoliciesActionTypes.UPDATE_FAIL;
  constructor(public payload: Policy) {}
}
export class Remove implements Action {
  readonly type = PoliciesActionTypes.REMOVE;
  constructor(public payload: Policy) {}
}
export class RemoveSuccess implements Action {
  readonly type = PoliciesActionTypes.REMOVE_SUCCESS;
  constructor(public payload: Policy) {}
}
export class RemoveFail implements Action {
  readonly type = PoliciesActionTypes.REMOVE_FAIL;
  constructor(public payload: Policy) {}
}
export class Load implements Action {
  readonly type = PoliciesActionTypes.LOAD;
}
export class LoadSuccess implements Action {
  readonly type = PoliciesActionTypes.LOAD_SUCCESS;
  constructor(public payload: Policy[]) {}
}
export class LoadFail implements Action {
  readonly type = PoliciesActionTypes.LOAD_FAIL;
  constructor(public payload: Policy) {}
}

export type PoliciesActions =
  | Add
  | AddSuccess
  | AddFail
  | Update
  | UpdateSuccess
  | UpdateFail
  | Remove
  | RemoveSuccess
  | RemoveFail
  | Load
  | LoadSuccess
  | LoadFail;
