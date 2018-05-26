/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const AddFormActionTypes = {
    ADD_FORM: "[FORM][ADD] ADD_FORM_PROFILE",
    ADD_FORM_START: "[FORM][ADD] ADD_FORM_START",
    ADD_FORM_SUCCEED: "[FORM][ADD] ADD_FORM_SUCCEED",
    ADD_FORM_FAILED: "[FORM][ADD] ADD_FORM_FAILED",
};
export { AddFormActionTypes };
export class AddFormAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddFormActionTypes.ADD_FORM;
    }
}
function AddFormAction_tsickle_Closure_declarations() {
    /** @type {?} */
    AddFormAction.prototype.type;
    /** @type {?} */
    AddFormAction.prototype.payload;
}
export class AddFormStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddFormActionTypes.ADD_FORM_START;
    }
}
function AddFormStartAction_tsickle_Closure_declarations() {
    /** @type {?} */
    AddFormStartAction.prototype.type;
    /** @type {?} */
    AddFormStartAction.prototype.payload;
}
export class AddFormSucceedAction {
    constructor() {
        this.type = AddFormActionTypes.ADD_FORM_SUCCEED;
    }
}
function AddFormSucceedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    AddFormSucceedAction.prototype.type;
}
export class AddFormFailedAction {
    constructor() {
        this.type = AddFormActionTypes.ADD_FORM_FAILED;
    }
}
function AddFormFailedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    AddFormFailedAction.prototype.type;
}
//# sourceMappingURL=add-form.actions.js.map
