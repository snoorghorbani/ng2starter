/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
if (false) {
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
if (false) {
    /** @type {?} */
    FormsListStartAction.prototype.type;
}
var FormsListSucceedAction = /** @class */ (function () {
    function FormsListSucceedAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.FORMS_LIST_SUCCEED;
    }
    return FormsListSucceedAction;
}());
export { FormsListSucceedAction };
if (false) {
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
if (false) {
    /** @type {?} */
    FormsListFailedAction.prototype.type;
}
var UpdateFormSchemaAction = /** @class */ (function () {
    function UpdateFormSchemaAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.FORM_SCHEMA_UPDATE;
    }
    return UpdateFormSchemaAction;
}());
export { UpdateFormSchemaAction };
if (false) {
    /** @type {?} */
    UpdateFormSchemaAction.prototype.type;
    /** @type {?} */
    UpdateFormSchemaAction.prototype.payload;
}
var AddFormSchemaAction = /** @class */ (function () {
    function AddFormSchemaAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.ADD_FORM_SCHEMA;
    }
    return AddFormSchemaAction;
}());
export { AddFormSchemaAction };
if (false) {
    /** @type {?} */
    AddFormSchemaAction.prototype.type;
    /** @type {?} */
    AddFormSchemaAction.prototype.payload;
}
var GetFormSchemaAction = /** @class */ (function () {
    function GetFormSchemaAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.GET_FORM_SCHEMA;
    }
    return GetFormSchemaAction;
}());
export { GetFormSchemaAction };
if (false) {
    /** @type {?} */
    GetFormSchemaAction.prototype.type;
    /** @type {?} */
    GetFormSchemaAction.prototype.payload;
}
var FormSchemaFechedAction = /** @class */ (function () {
    function FormSchemaFechedAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.FORM_SCHEMA_FETCHED;
    }
    return FormSchemaFechedAction;
}());
export { FormSchemaFechedAction };
if (false) {
    /** @type {?} */
    FormSchemaFechedAction.prototype.type;
    /** @type {?} */
    FormSchemaFechedAction.prototype.payload;
}
/** @typedef {?} */
var FormsListActions;
export { FormsListActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mb3JtLyIsInNvdXJjZXMiOlsibGliL2xpc3QvbGlzdC5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUtDLFlBQWEseUJBQXlCO0lBQ3RDLGtCQUFtQiwrQkFBK0I7SUFDbEQsb0JBQXFCLGlDQUFpQztJQUN0RCxtQkFBb0IsZ0NBQWdDO0lBQ3BELGlCQUFrQiw4QkFBOEI7SUFDaEQsb0JBQXFCLGlDQUFpQztJQUN0RCxpQkFBa0IsOEJBQThCO0lBQ2hELHFCQUFzQixrQ0FBa0M7OztBQUd6RCxJQUFBOztvQkFDaUIsb0JBQW9CLENBQUMsVUFBVTs7MEJBaEJoRDtJQWlCQyxDQUFBO0FBRkQsMkJBRUM7Ozs7O0FBQ0QsSUFBQTs7b0JBQ2lCLG9CQUFvQixDQUFDLGdCQUFnQjs7K0JBbkJ0RDtJQW9CQyxDQUFBO0FBRkQsZ0NBRUM7Ozs7O0FBQ0QsSUFBQTtJQUVDLGdDQUFtQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtvQkFEN0Isb0JBQW9CLENBQUMsa0JBQWtCO0tBQ047aUNBdkJsRDtJQXdCQyxDQUFBO0FBSEQsa0NBR0M7Ozs7Ozs7QUFDRCxJQUFBOztvQkFDaUIsb0JBQW9CLENBQUMsaUJBQWlCOztnQ0ExQnZEO0lBMkJDLENBQUE7QUFGRCxpQ0FFQzs7Ozs7QUFDRCxJQUFBO0lBRUMsZ0NBQW1CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO29CQUQzQixvQkFBb0IsQ0FBQyxrQkFBa0I7S0FDUjtpQ0E5QmhEO0lBK0JDLENBQUE7QUFIRCxrQ0FHQzs7Ozs7OztBQUNELElBQUE7SUFFQyw2QkFBbUIsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7b0JBRDNCLG9CQUFvQixDQUFDLGVBQWU7S0FDTDs4QkFsQ2hEO0lBbUNDLENBQUE7QUFIRCwrQkFHQzs7Ozs7OztBQUNELElBQUE7SUFFQyw2QkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBRGxCLG9CQUFvQixDQUFDLGVBQWU7S0FDZDs4QkF0Q3ZDO0lBdUNDLENBQUE7QUFIRCwrQkFHQzs7Ozs7OztBQUNELElBQUE7SUFFQyxnQ0FBbUIsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7b0JBRDNCLG9CQUFvQixDQUFDLG1CQUFtQjtLQUNUO2lDQTFDaEQ7SUEyQ0MsQ0FBQTtBQUhELGtDQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBGb3Jtc0xpc3RBY3Rpb25UeXBlcyB7XHJcblx0Rk9STVNfTElTVCA9IFwiW0ZPUk1dW0xJU1RdIEZPUk1TX0xJU1RcIixcclxuXHRGT1JNU19MSVNUX1NUQVJUID0gXCJbRk9STV1bTElTVF0gRk9STVNfTElTVF9TVEFSVFwiLFxyXG5cdEZPUk1TX0xJU1RfU1VDQ0VFRCA9IFwiW0ZPUk1dW0xJU1RdIEZPUk1TX0xJU1RfU1VDQ0VFRFwiLFxyXG5cdEZPUk1TX0xJU1RfRkFJTEVEID0gXCJbRk9STV1bTElTVF0gRk9STVNfTElTVF9GQUlMRURcIixcclxuXHRBRERfRk9STV9TQ0hFTUEgPSBcIltGT1JNXVtMSVNUXSBBRERfRk9STV9TQ0hFTUFcIixcclxuXHRGT1JNX1NDSEVNQV9VUERBVEUgPSBcIltGT1JNXVtMSVNUXSBGT1JNX1NDSEVNQV9VUERBVEVcIixcclxuXHRHRVRfRk9STV9TQ0hFTUEgPSBcIltGT1JNXVtMSVNUXSBHRVRfRk9STV9TQ0hFTUFcIixcclxuXHRGT1JNX1NDSEVNQV9GRVRDSEVEID0gXCJbRk9STV1bTElTVF0gRk9STV9TQ0hFTUFfRkVUQ0hFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpc3RBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpc3RTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1RfU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEZvcm1zTGlzdFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpc3RGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgVXBkYXRlRm9ybVNjaGVtYUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1fU0NIRU1BX1VQREFURTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtU2NoZW1hQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuQUREX0ZPUk1fU0NIRU1BO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldEZvcm1TY2hlbWFBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5HRVRfRk9STV9TQ0hFTUE7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgRm9ybVNjaGVtYUZlY2hlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1fU0NIRU1BX0ZFVENIRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRm9ybXNMaXN0QWN0aW9ucyA9XHJcblx0fCBGb3Jtc0xpc3RBY3Rpb25cclxuXHR8IEZvcm1zTGlzdFN0YXJ0QWN0aW9uXHJcblx0fCBGb3Jtc0xpc3RTdWNjZWVkQWN0aW9uXHJcblx0fCBGb3Jtc0xpc3RGYWlsZWRBY3Rpb25cclxuXHR8IFVwZGF0ZUZvcm1TY2hlbWFBY3Rpb25cclxuXHR8IEFkZEZvcm1TY2hlbWFBY3Rpb25cclxuXHR8IEdldEZvcm1TY2hlbWFBY3Rpb25cclxuXHR8IEZvcm1TY2hlbWFGZWNoZWRBY3Rpb247XHJcbiJdfQ==