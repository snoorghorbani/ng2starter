/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var AddFormActionTypes = {
    ADD_FORM: "[FORM][ADD] ADD_FORM_PROFILE",
    ADD_FORM_START: "[FORM][ADD] ADD_FORM_START",
    ADD_FORM_SUCCEED: "[FORM][ADD] ADD_FORM_SUCCEED",
    ADD_FORM_FAILED: "[FORM][ADD] ADD_FORM_FAILED",
};
export { AddFormActionTypes };
var AddFormAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function AddFormAction(payload) {
        this.payload = payload;
        this.type = AddFormActionTypes.ADD_FORM;
    }
    return AddFormAction;
}());
export { AddFormAction };
function AddFormAction_tsickle_Closure_declarations() {
    /** @type {?} */
    AddFormAction.prototype.type;
    /** @type {?} */
    AddFormAction.prototype.payload;
}
var AddFormStartAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function AddFormStartAction(payload) {
        this.payload = payload;
        this.type = AddFormActionTypes.ADD_FORM_START;
    }
    return AddFormStartAction;
}());
export { AddFormStartAction };
function AddFormStartAction_tsickle_Closure_declarations() {
    /** @type {?} */
    AddFormStartAction.prototype.type;
    /** @type {?} */
    AddFormStartAction.prototype.payload;
}
var AddFormSucceedAction = /** @class */ (function () {
    function AddFormSucceedAction() {
        this.type = AddFormActionTypes.ADD_FORM_SUCCEED;
    }
    return AddFormSucceedAction;
}());
export { AddFormSucceedAction };
function AddFormSucceedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    AddFormSucceedAction.prototype.type;
}
var AddFormFailedAction = /** @class */ (function () {
    function AddFormFailedAction() {
        this.type = AddFormActionTypes.ADD_FORM_FAILED;
    }
    return AddFormFailedAction;
}());
export { AddFormFailedAction };
function AddFormFailedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    AddFormFailedAction.prototype.type;
}
//# sourceMappingURL=add-form.actions.js.map
