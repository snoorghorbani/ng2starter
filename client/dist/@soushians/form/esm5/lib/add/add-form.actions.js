/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    function AddFormAction(payload) {
        this.payload = payload;
        this.type = AddFormActionTypes.ADD_FORM;
    }
    return AddFormAction;
}());
export { AddFormAction };
if (false) {
    /** @type {?} */
    AddFormAction.prototype.type;
    /** @type {?} */
    AddFormAction.prototype.payload;
}
var AddFormStartAction = /** @class */ (function () {
    function AddFormStartAction(payload) {
        this.payload = payload;
        this.type = AddFormActionTypes.ADD_FORM_START;
    }
    return AddFormStartAction;
}());
export { AddFormStartAction };
if (false) {
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
if (false) {
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
if (false) {
    /** @type {?} */
    AddFormFailedAction.prototype.type;
}
/** @typedef {?} */
var AddFormActions;
export { AddFormActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWZvcm0uYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9hZGQvYWRkLWZvcm0uYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLQyxVQUFXLDhCQUE4QjtJQUN6QyxnQkFBaUIsNEJBQTRCO0lBQzdDLGtCQUFtQiw4QkFBOEI7SUFDakQsaUJBQWtCLDZCQUE2Qjs7O0FBR2hELElBQUE7SUFFQyx1QkFBbUIsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7b0JBRDNCLGtCQUFrQixDQUFDLFFBQVE7S0FDSTt3QkFiaEQ7SUFjQyxDQUFBO0FBSEQseUJBR0M7Ozs7Ozs7QUFDRCxJQUFBO0lBRUMsNEJBQW1CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO29CQUQzQixrQkFBa0IsQ0FBQyxjQUFjO0tBQ0Y7NkJBakJoRDtJQWtCQyxDQUFBO0FBSEQsOEJBR0M7Ozs7Ozs7QUFDRCxJQUFBOztvQkFDaUIsa0JBQWtCLENBQUMsZ0JBQWdCOzsrQkFwQnBEO0lBcUJDLENBQUE7QUFGRCxnQ0FFQzs7Ozs7QUFDRCxJQUFBOztvQkFDaUIsa0JBQWtCLENBQUMsZUFBZTs7OEJBdkJuRDtJQXdCQyxDQUFBO0FBRkQsK0JBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEFkZEZvcm1BY3Rpb25UeXBlcyB7XHJcblx0QUREX0ZPUk0gPSBcIltGT1JNXVtBRERdIEFERF9GT1JNX1BST0ZJTEVcIixcclxuXHRBRERfRk9STV9TVEFSVCA9IFwiW0ZPUk1dW0FERF0gQUREX0ZPUk1fU1RBUlRcIixcclxuXHRBRERfRk9STV9TVUNDRUVEID0gXCJbRk9STV1bQUREXSBBRERfRk9STV9TVUNDRUVEXCIsXHJcblx0QUREX0ZPUk1fRkFJTEVEID0gXCJbRk9STV1bQUREXSBBRERfRk9STV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZEZvcm1BY3Rpb25UeXBlcy5BRERfRk9STTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGRGb3JtQWN0aW9uVHlwZXMuQUREX0ZPUk1fU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybVN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGRGb3JtQWN0aW9uVHlwZXMuQUREX0ZPUk1fU1VDQ0VFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybUZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZEZvcm1BY3Rpb25UeXBlcy5BRERfRk9STV9GQUlMRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEFkZEZvcm1BY3Rpb25zID0gQWRkRm9ybUFjdGlvbiB8IEFkZEZvcm1TdGFydEFjdGlvbiB8IEFkZEZvcm1TdWNjZWVkQWN0aW9uIHwgQWRkRm9ybUZhaWxlZEFjdGlvbjtcclxuIl19