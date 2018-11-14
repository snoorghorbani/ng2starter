import { Action } from "@ngrx/store";
export declare enum ParentGuardActionTypes {
    "ASK_FROM_PARENT_GUARD" = "[USER][GUARD] ASK_FROM_PARENT_GUARD",
    "PARENT_GUARD_APPROVED" = "[USER][GUARD] PARENT_GUARD_APPROVED",
    "PARENT_GUARD_REJECTED" = "[USER][GUARD] PARENT_GUARD_REJECTED"
}
export declare class AskFromParentGuardAction implements Action {
    readonly type: ParentGuardActionTypes;
}
export declare class ParentGuardApprovedAction implements Action {
    readonly type: ParentGuardActionTypes;
}
export declare class ParentGuardRejectedAction implements Action {
    readonly type: ParentGuardActionTypes;
}
export declare type ParentGuardAction = AskFromParentGuardAction | ParentGuardApprovedAction | ParentGuardRejectedAction;
