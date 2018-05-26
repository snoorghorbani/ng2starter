/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var FormsListActionTypes = {
    FORMS_LIST: "[FORM][LIST] FORMS_LIST",
    FORMS_LIST_START: "[FORM][LIST] FORMS_LIST_START",
    FORMS_LIST_SUCCEED: "[FORM][LIST] FORMS_LIST_SUCCEED",
    FORMS_LIST_FAILED: "[FORM][LIST] FORMS_LIST_FAILED",
    ADD_FORM_SCHEMA: "[FORM][LIST] ADD_FORM_SCHEMA",
    FORM_SCHEMA_UPDATE: "[FORM][LIST] FORM_SCHEMA_UPDATE",
    GET_FORM_SCHEMA: "[FORM][LIST] GET_FORM_SCHEMA",
    FORM_SCHEMA_FETCHED: "[FORM][LIST] FORM_SCHEMA_FETCHED",
};
export { FormsListActionTypes };
var FormsListAction = /** @class */ (function () {
    function FormsListAction() {
        this.type = FormsListActionTypes.FORMS_LIST;
    }
    return FormsListAction;
}());
export { FormsListAction };
function FormsListAction_tsickle_Closure_declarations() {
    /** @type {?} */
    FormsListAction.prototype.type;
}
var FormsListStartAction = /** @class */ (function () {
    function FormsListStartAction() {
        this.type = FormsListActionTypes.FORMS_LIST_START;
    }
    return FormsListStartAction;
}());
export { FormsListStartAction };
function FormsListStartAction_tsickle_Closure_declarations() {
    /** @type {?} */
    FormsListStartAction.prototype.type;
}
var FormsListSucceedAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function FormsListSucceedAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.FORMS_LIST_SUCCEED;
    }
    return FormsListSucceedAction;
}());
export { FormsListSucceedAction };
function FormsListSucceedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    FormsListSucceedAction.prototype.type;
    /** @type {?} */
    FormsListSucceedAction.prototype.payload;
}
var FormsListFailedAction = /** @class */ (function () {
    function FormsListFailedAction() {
        this.type = FormsListActionTypes.FORMS_LIST_FAILED;
    }
    return FormsListFailedAction;
}());
export { FormsListFailedAction };
function FormsListFailedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    FormsListFailedAction.prototype.type;
}
var UpdateFormSchemaAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function UpdateFormSchemaAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.FORM_SCHEMA_UPDATE;
    }
    return UpdateFormSchemaAction;
}());
export { UpdateFormSchemaAction };
function UpdateFormSchemaAction_tsickle_Closure_declarations() {
    /** @type {?} */
    UpdateFormSchemaAction.prototype.type;
    /** @type {?} */
    UpdateFormSchemaAction.prototype.payload;
}
var AddFormSchemaAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function AddFormSchemaAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.ADD_FORM_SCHEMA;
    }
    return AddFormSchemaAction;
}());
export { AddFormSchemaAction };
function AddFormSchemaAction_tsickle_Closure_declarations() {
    /** @type {?} */
    AddFormSchemaAction.prototype.type;
    /** @type {?} */
    AddFormSchemaAction.prototype.payload;
}
var GetFormSchemaAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function GetFormSchemaAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.GET_FORM_SCHEMA;
    }
    return GetFormSchemaAction;
}());
export { GetFormSchemaAction };
function GetFormSchemaAction_tsickle_Closure_declarations() {
    /** @type {?} */
    GetFormSchemaAction.prototype.type;
    /** @type {?} */
    GetFormSchemaAction.prototype.payload;
}
var FormSchemaFechedAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function FormSchemaFechedAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.FORM_SCHEMA_FETCHED;
    }
    return FormSchemaFechedAction;
}());
export { FormSchemaFechedAction };
function FormSchemaFechedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    FormSchemaFechedAction.prototype.type;
    /** @type {?} */
    FormSchemaFechedAction.prototype.payload;
}
//# sourceMappingURL=list.actions.js.map
