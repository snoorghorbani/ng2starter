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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWZvcm0uYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9hZGQvYWRkLWZvcm0uYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Y0FLWSw4QkFBOEI7b0JBQ3hCLDRCQUE0QjtzQkFDMUIsOEJBQThCO3FCQUMvQiw2QkFBNkI7OztBQUdoRCxJQUFBO0lBRUMsdUJBQW1CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO29CQUQzQixrQkFBa0IsQ0FBQyxRQUFRO0tBQ0k7d0JBYmhEO0lBY0MsQ0FBQTtBQUhELHlCQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVDLDRCQUFtQixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtvQkFEM0Isa0JBQWtCLENBQUMsY0FBYztLQUNGOzZCQWpCaEQ7SUFrQkMsQ0FBQTtBQUhELDhCQUdDOzs7Ozs7O0FBQ0QsSUFBQTs7b0JBQ2lCLGtCQUFrQixDQUFDLGdCQUFnQjs7K0JBcEJwRDtJQXFCQyxDQUFBO0FBRkQsZ0NBRUM7Ozs7O0FBQ0QsSUFBQTs7b0JBQ2lCLGtCQUFrQixDQUFDLGVBQWU7OzhCQXZCbkQ7SUF3QkMsQ0FBQTtBQUZELCtCQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBBZGRGb3JtQWN0aW9uVHlwZXMge1xyXG5cdEFERF9GT1JNID0gXCJbRk9STV1bQUREXSBBRERfRk9STV9QUk9GSUxFXCIsXHJcblx0QUREX0ZPUk1fU1RBUlQgPSBcIltGT1JNXVtBRERdIEFERF9GT1JNX1NUQVJUXCIsXHJcblx0QUREX0ZPUk1fU1VDQ0VFRCA9IFwiW0ZPUk1dW0FERF0gQUREX0ZPUk1fU1VDQ0VFRFwiLFxyXG5cdEFERF9GT1JNX0ZBSUxFRCA9IFwiW0ZPUk1dW0FERF0gQUREX0ZPUk1fRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZEZvcm1BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGRGb3JtQWN0aW9uVHlwZXMuQUREX0ZPUk07XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybVN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRm9ybUFjdGlvblR5cGVzLkFERF9GT1JNX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZEZvcm1TdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRm9ybUFjdGlvblR5cGVzLkFERF9GT1JNX1NVQ0NFRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZEZvcm1GYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGRGb3JtQWN0aW9uVHlwZXMuQUREX0ZPUk1fRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBZGRGb3JtQWN0aW9ucyA9IEFkZEZvcm1BY3Rpb24gfCBBZGRGb3JtU3RhcnRBY3Rpb24gfCBBZGRGb3JtU3VjY2VlZEFjdGlvbiB8IEFkZEZvcm1GYWlsZWRBY3Rpb247XHJcbiJdfQ==