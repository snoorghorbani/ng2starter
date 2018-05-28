/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var EditFormActionTypes = {
    EDIT_FORM: "[FORM][EDIT] EDIT_FORM",
    EDIT_FORM_START: "[FORM][EDIT] EDIT_FORM_START",
    EDIT_FORM_SUCCEED: "[FORM][EDIT] EDIT_FORM_SUCCEED",
    EDIT_FORM_FAILED: "[FORM][EDIT] EDIT_FORM_FAILED",
};
export { EditFormActionTypes };
var EditFormAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function EditFormAction(payload) {
        this.payload = payload;
        this.type = EditFormActionTypes.EDIT_FORM;
    }
    return EditFormAction;
}());
export { EditFormAction };
function EditFormAction_tsickle_Closure_declarations() {
    /** @type {?} */
    EditFormAction.prototype.type;
    /** @type {?} */
    EditFormAction.prototype.payload;
}
var EditFormStartAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function EditFormStartAction(payload) {
        this.payload = payload;
        this.type = EditFormActionTypes.EDIT_FORM_START;
    }
    return EditFormStartAction;
}());
export { EditFormStartAction };
function EditFormStartAction_tsickle_Closure_declarations() {
    /** @type {?} */
    EditFormStartAction.prototype.type;
    /** @type {?} */
    EditFormStartAction.prototype.payload;
}
var EditFormSucceedAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function EditFormSucceedAction(payload) {
        this.payload = payload;
        this.type = EditFormActionTypes.EDIT_FORM_SUCCEED;
    }
    return EditFormSucceedAction;
}());
export { EditFormSucceedAction };
function EditFormSucceedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    EditFormSucceedAction.prototype.type;
    /** @type {?} */
    EditFormSucceedAction.prototype.payload;
}
var EditFormFailedAction = /** @class */ (function () {
    function EditFormFailedAction() {
        this.type = EditFormActionTypes.EDIT_FORM_FAILED;
    }
    return EditFormFailedAction;
}());
export { EditFormFailedAction };
function EditFormFailedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    EditFormFailedAction.prototype.type;
}
//# sourceMappingURL=edit-form.actions.js.map
