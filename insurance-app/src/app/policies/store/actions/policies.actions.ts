import { Action } from '@ngrx/store';
import { Policy } from '../../models/policy';

export enum PoliciesActionTypes {
  AddPolicy = '[Policies] AddPolicy',
  AddPolicySuccess = '[Policies] AddPolicySuccess',
  AddPolicyFail = '[Policies] AddPolicyFail',
  UpdatePolicy = '[Policies] UpdatePolicy',
  UpdatePolicySuccess = '[Policies] UpdatePolicySuccess',
  UpdatePolicyFail = '[Policies] UpdatePolicyFail',
  RemovePolicy = '[Policies] RemovePolicy',
  RemovePolicySuccess = '[Policies] RemovePolicySuccess',
  RemovePolicyFail = '[Policies] RemovePolicyFail',
  LoadPolicies = '[Policies] LoadPolicies',
  LoadPoliciesSuccess = '[Policies] LoadPoliciesSuccess',
  LoadPoliciesFail = '[Policies] LoadPoliciesFail',
  // TODO: load all
  SetCurrentPolicyID = '[Policies] SetCurrentPolicyID',
}

export class AddPolicy implements Action {
  readonly type = PoliciesActionTypes.AddPolicy;
  constructor(public payload: Policy) {}
}
export class AddPolicySuccess implements Action {
  readonly type = PoliciesActionTypes.AddPolicySuccess;
  constructor(public payload: Policy) {}
}
export class AddPolicyFail implements Action {
  readonly type = PoliciesActionTypes.AddPolicyFail;
  constructor(public payload: Policy) {}
}
export class UpdatePolicy implements Action {
  readonly type = PoliciesActionTypes.UpdatePolicy;
  constructor(public payload: Policy) {}
}
export class UpdatePolicySuccess implements Action {
  readonly type = PoliciesActionTypes.UpdatePolicySuccess;
  constructor(public payload: Policy) {}
}
export class UpdatePolicyFail implements Action {
  readonly type = PoliciesActionTypes.UpdatePolicyFail;
  constructor(public payload: Policy) {}
}
export class RemovePolicy implements Action {
  readonly type = PoliciesActionTypes.RemovePolicy;
  constructor(public payload: Policy) {}
}
export class RemovePolicySuccess implements Action {
  readonly type = PoliciesActionTypes.RemovePolicySuccess;
  constructor(public payload: Policy) {}
}
export class RemovePolicyFail implements Action {
  readonly type = PoliciesActionTypes.RemovePolicyFail;
  constructor(public payload: Policy) {}
}
export class LoadPolicies implements Action {
  readonly type = PoliciesActionTypes.LoadPolicies;
}
export class LoadPoliciesSuccess implements Action {
  readonly type = PoliciesActionTypes.LoadPoliciesSuccess;
  constructor(public payload: Policy[]) {}
}
export class LoadPoliciesFail implements Action {
  readonly type = PoliciesActionTypes.LoadPoliciesFail;
  constructor(public payload: Policy) {}
}
export class SetCurrentPolicyID implements Action {
  readonly type = PoliciesActionTypes.SetCurrentPolicyID;
  constructor(public payload: string) {}
}

export type PoliciesActions =
  | AddPolicy
  | AddPolicySuccess
  | AddPolicyFail
  | UpdatePolicy
  | UpdatePolicySuccess
  | UpdatePolicyFail
  | RemovePolicy
  | RemovePolicySuccess
  | RemovePolicyFail
  | LoadPolicies
  | LoadPoliciesSuccess
  | LoadPoliciesFail
  | SetCurrentPolicyID;
