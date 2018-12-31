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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWZvcm0uYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9hZGQvYWRkLWZvcm0uYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLQyxVQUFXLDhCQUE4QjtJQUN6QyxnQkFBaUIsNEJBQTRCO0lBQzdDLGtCQUFtQiw4QkFBOEI7SUFDakQsaUJBQWtCLDZCQUE2Qjs7O0FBR2hELElBQUE7SUFFQyx1QkFBbUIsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFEM0MsWUFBZ0Isa0JBQWtCLENBQUMsUUFBUSxDQUFDO0tBQ0c7d0JBYmhEO0lBY0MsQ0FBQTtBQUhELHlCQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVDLDRCQUFtQixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUQzQyxZQUFnQixrQkFBa0IsQ0FBQyxjQUFjLENBQUM7S0FDSDs2QkFqQmhEO0lBa0JDLENBQUE7QUFIRCw4QkFHQzs7Ozs7OztBQUNELElBQUE7O1FBQ0MsWUFBZ0Isa0JBQWtCLENBQUMsZ0JBQWdCLENBQUM7OytCQXBCckQ7SUFxQkMsQ0FBQTtBQUZELGdDQUVDOzs7OztBQUNELElBQUE7O1FBQ0MsWUFBZ0Isa0JBQWtCLENBQUMsZUFBZSxDQUFDOzs4QkF2QnBEO0lBd0JDLENBQUE7QUFGRCwrQkFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gQWRkRm9ybUFjdGlvblR5cGVzIHtcclxuXHRBRERfRk9STSA9IFwiW0ZPUk1dW0FERF0gQUREX0ZPUk1fUFJPRklMRVwiLFxyXG5cdEFERF9GT1JNX1NUQVJUID0gXCJbRk9STV1bQUREXSBBRERfRk9STV9TVEFSVFwiLFxyXG5cdEFERF9GT1JNX1NVQ0NFRUQgPSBcIltGT1JNXVtBRERdIEFERF9GT1JNX1NVQ0NFRURcIixcclxuXHRBRERfRk9STV9GQUlMRUQgPSBcIltGT1JNXVtBRERdIEFERF9GT1JNX0ZBSUxFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRm9ybUFjdGlvblR5cGVzLkFERF9GT1JNO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZEZvcm1TdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZEZvcm1BY3Rpb25UeXBlcy5BRERfRk9STV9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZEZvcm1BY3Rpb25UeXBlcy5BRERfRk9STV9TVUNDRUVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRm9ybUFjdGlvblR5cGVzLkFERF9GT1JNX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQWRkRm9ybUFjdGlvbnMgPSBBZGRGb3JtQWN0aW9uIHwgQWRkRm9ybVN0YXJ0QWN0aW9uIHwgQWRkRm9ybVN1Y2NlZWRBY3Rpb24gfCBBZGRGb3JtRmFpbGVkQWN0aW9uO1xyXG4iXX0=