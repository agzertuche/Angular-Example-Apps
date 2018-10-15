import { Action } from '@ngrx/store';
import { Policy } from '../../models/policy';

export enum PoliciesActionTypes {
  AddPolicy = '[Policy List Page] AddPolicy',
  AddPolicySuccess = '[Policies API Service] AddPolicySuccess',
  AddPolicyFail = '[Policies API Service] AddPolicyFail',
  UpdatePolicy = '[Policy New Page] UpdatePolicy',
  UpdatePolicySuccess = '[Policies API Service] UpdatePolicySuccess',
  UpdatePolicyFail = '[Policies API Service] UpdatePolicyFail',
  RemovePolicy = '[Policy View Page] RemovePolicy',
  RemovePolicySuccess = '[Policies API Service] RemovePolicySuccess',
  RemovePolicyFail = '[Policies API Service] RemovePolicyFail',
  LoadAllPolicies = '[Policy List Page] LoadAllPolicies',
  LoadAllPoliciesSuccess = '[Policies API Service] LoadAllPoliciesSuccess',
  LoadAllPoliciesFail = '[Policies API Service] LoadAllPoliciesFail',
  LoadPolicy = '[Policy Detail Page] LoadPolicy',
  LoadPolicySuccess = '[Policies API Service] LoadPolicySuccess',
  LoadPolicyFail = '[Policies API Service] LoadPolicyFail',
  SetCurrentPolicyID = '[Policy List Page] SetCurrentPolicyID',
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
export class LoadAllPolicies implements Action {
  readonly type = PoliciesActionTypes.LoadAllPolicies;
}
export class LoadAllPoliciesSuccess implements Action {
  readonly type = PoliciesActionTypes.LoadAllPoliciesSuccess;
  constructor(public payload: Policy[]) {}
}
export class LoadAllPoliciesFail implements Action {
  readonly type = PoliciesActionTypes.LoadAllPoliciesFail;
  constructor(public payload: Policy) {}
}
export class LoadPolicy implements Action {
  readonly type = PoliciesActionTypes.LoadPolicy;
  constructor(public payload: string) {}
}
export class LoadPolicySuccess implements Action {
  readonly type = PoliciesActionTypes.LoadPolicySuccess;
  constructor(public payload: string) {}
}
export class LoadPolicyFail implements Action {
  readonly type = PoliciesActionTypes.LoadPolicyFail;
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
  | LoadAllPolicies
  | LoadAllPoliciesSuccess
  | LoadAllPoliciesFail
  | LoadPolicy
  | LoadPolicySuccess
  | LoadPolicyFail
  | SetCurrentPolicyID;
