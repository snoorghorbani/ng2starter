import { Action } from "@ngrx/store";

export enum ParentGuardActionTypes {
	"ASK_FROM_PARENT_GUARD" = "[USER][GUARD] ASK_FROM_PARENT_GUARD",
	"PARENT_GUARD_APPROVED" = "[USER][GUARD] PARENT_GUARD_APPROVED",
	"PARENT_GUARD_REJECTED" = "[USER][GUARD] PARENT_GUARD_REJECTED"
}

export class AskFromParentGuardAction implements Action {
	readonly type = ParentGuardActionTypes.ASK_FROM_PARENT_GUARD;
	// constructor(public payload: ChangePasswordLinkRequest) { }
}
export class ParentGuardApprovedAction implements Action {
	readonly type = ParentGuardActionTypes.PARENT_GUARD_APPROVED;
}
export class ParentGuardRejectedAction implements Action {
	readonly type = ParentGuardActionTypes.PARENT_GUARD_REJECTED;
}

export type ParentGuardAction = AskFromParentGuardAction | ParentGuardApprovedAction | ParentGuardRejectedAction;
