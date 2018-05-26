/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var ParentGuardActionTypes = {
    "ASK_FROM_PARENT_GUARD": "[USER][GUARD] ASK_FROM_PARENT_GUARD",
    "PARENT_GUARD_APPROVED": "[USER][GUARD] PARENT_GUARD_APPROVED",
    "PARENT_GUARD_REJECTED": "[USER][GUARD] PARENT_GUARD_REJECTED",
};
export { ParentGuardActionTypes };
var AskFromParentGuardAction = /** @class */ (function () {
    function AskFromParentGuardAction() {
        this.type = ParentGuardActionTypes.ASK_FROM_PARENT_GUARD;
    }
    return AskFromParentGuardAction;
}());
export { AskFromParentGuardAction };
function AskFromParentGuardAction_tsickle_Closure_declarations() {
    /** @type {?} */
    AskFromParentGuardAction.prototype.type;
}
var ParentGuardApprovedAction = /** @class */ (function () {
    function ParentGuardApprovedAction() {
        this.type = ParentGuardActionTypes.PARENT_GUARD_APPROVED;
    }
    return ParentGuardApprovedAction;
}());
export { ParentGuardApprovedAction };
function ParentGuardApprovedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    ParentGuardApprovedAction.prototype.type;
}
var ParentGuardRejectedAction = /** @class */ (function () {
    function ParentGuardRejectedAction() {
        this.type = ParentGuardActionTypes.PARENT_GUARD_REJECTED;
    }
    return ParentGuardRejectedAction;
}());
export { ParentGuardRejectedAction };
function ParentGuardRejectedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    ParentGuardRejectedAction.prototype.type;
}
//# sourceMappingURL=parent-guard.actions.js.map
