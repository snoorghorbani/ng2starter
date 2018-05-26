/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const ParentGuardActionTypes = {
    "ASK_FROM_PARENT_GUARD": "[USER][GUARD] ASK_FROM_PARENT_GUARD",
    "PARENT_GUARD_APPROVED": "[USER][GUARD] PARENT_GUARD_APPROVED",
    "PARENT_GUARD_REJECTED": "[USER][GUARD] PARENT_GUARD_REJECTED",
};
export { ParentGuardActionTypes };
export class AskFromParentGuardAction {
    constructor() {
        this.type = ParentGuardActionTypes.ASK_FROM_PARENT_GUARD;
    }
}
function AskFromParentGuardAction_tsickle_Closure_declarations() {
    /** @type {?} */
    AskFromParentGuardAction.prototype.type;
}
export class ParentGuardApprovedAction {
    constructor() {
        this.type = ParentGuardActionTypes.PARENT_GUARD_APPROVED;
    }
}
function ParentGuardApprovedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    ParentGuardApprovedAction.prototype.type;
}
export class ParentGuardRejectedAction {
    constructor() {
        this.type = ParentGuardActionTypes.PARENT_GUARD_REJECTED;
    }
}
function ParentGuardRejectedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    ParentGuardRejectedAction.prototype.type;
}
//# sourceMappingURL=parent-guard.actions.js.map
