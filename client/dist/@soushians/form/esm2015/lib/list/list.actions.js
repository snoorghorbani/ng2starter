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
export class FormsListAction {
    constructor() {
        this.type = FormsListActionTypes.FORMS_LIST;
    }
}
if (false) {
    /** @type {?} */
    FormsListAction.prototype.type;
}
export class FormsListStartAction {
    constructor() {
        this.type = FormsListActionTypes.FORMS_LIST_START;
    }
}
if (false) {
    /** @type {?} */
    FormsListStartAction.prototype.type;
}
export class FormsListSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.FORMS_LIST_SUCCEED;
    }
}
if (false) {
    /** @type {?} */
    FormsListSucceedAction.prototype.type;
    /** @type {?} */
    FormsListSucceedAction.prototype.payload;
}
export class FormsListFailedAction {
    constructor() {
        this.type = FormsListActionTypes.FORMS_LIST_FAILED;
    }
}
if (false) {
    /** @type {?} */
    FormsListFailedAction.prototype.type;
}
export class UpdateFormSchemaAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.FORM_SCHEMA_UPDATE;
    }
}
if (false) {
    /** @type {?} */
    UpdateFormSchemaAction.prototype.type;
    /** @type {?} */
    UpdateFormSchemaAction.prototype.payload;
}
export class AddFormSchemaAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.ADD_FORM_SCHEMA;
    }
}
if (false) {
    /** @type {?} */
    AddFormSchemaAction.prototype.type;
    /** @type {?} */
    AddFormSchemaAction.prototype.payload;
}
export class GetFormSchemaAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.GET_FORM_SCHEMA;
    }
}
if (false) {
    /** @type {?} */
    GetFormSchemaAction.prototype.type;
    /** @type {?} */
    GetFormSchemaAction.prototype.payload;
}
export class FormSchemaFechedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.FORM_SCHEMA_FETCHED;
    }
}
if (false) {
    /** @type {?} */
    FormSchemaFechedAction.prototype.type;
    /** @type {?} */
    FormSchemaFechedAction.prototype.payload;
}
/** @typedef {?} */
var FormsListActions;
export { FormsListActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mb3JtLyIsInNvdXJjZXMiOlsibGliL2xpc3QvbGlzdC5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUtDLFlBQWEseUJBQXlCO0lBQ3RDLGtCQUFtQiwrQkFBK0I7SUFDbEQsb0JBQXFCLGlDQUFpQztJQUN0RCxtQkFBb0IsZ0NBQWdDO0lBQ3BELGlCQUFrQiw4QkFBOEI7SUFDaEQsb0JBQXFCLGlDQUFpQztJQUN0RCxpQkFBa0IsOEJBQThCO0lBQ2hELHFCQUFzQixrQ0FBa0M7OztBQUd6RCxNQUFNLE9BQU8sZUFBZTs7UUFDM0IsWUFBZ0Isb0JBQW9CLENBQUMsVUFBVSxDQUFDOztDQUNoRDs7Ozs7QUFDRCxNQUFNLE9BQU8sb0JBQW9COztRQUNoQyxZQUFnQixvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQzs7Q0FDdEQ7Ozs7O0FBQ0QsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUVsQyxZQUFtQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUQ3QyxZQUFnQixvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQztLQUNQO0NBQ2pEOzs7Ozs7O0FBQ0QsTUFBTSxPQUFPLHFCQUFxQjs7UUFDakMsWUFBZ0Isb0JBQW9CLENBQUMsaUJBQWlCLENBQUM7O0NBQ3ZEOzs7OztBQUNELE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFFbEMsWUFBbUIsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFEM0MsWUFBZ0Isb0JBQW9CLENBQUMsa0JBQWtCLENBQUM7S0FDVDtDQUMvQzs7Ozs7OztBQUNELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFFL0IsWUFBbUIsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFEM0MsWUFBZ0Isb0JBQW9CLENBQUMsZUFBZSxDQUFDO0tBQ047Q0FDL0M7Ozs7Ozs7QUFDRCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBRS9CLFlBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRGxDLFlBQWdCLG9CQUFvQixDQUFDLGVBQWUsQ0FBQztLQUNmO0NBQ3RDOzs7Ozs7O0FBQ0QsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUVsQyxZQUFtQixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUQzQyxZQUFnQixvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQztLQUNWO0NBQy9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBGb3Jtc0xpc3RBY3Rpb25UeXBlcyB7XHJcblx0Rk9STVNfTElTVCA9IFwiW0ZPUk1dW0xJU1RdIEZPUk1TX0xJU1RcIixcclxuXHRGT1JNU19MSVNUX1NUQVJUID0gXCJbRk9STV1bTElTVF0gRk9STVNfTElTVF9TVEFSVFwiLFxyXG5cdEZPUk1TX0xJU1RfU1VDQ0VFRCA9IFwiW0ZPUk1dW0xJU1RdIEZPUk1TX0xJU1RfU1VDQ0VFRFwiLFxyXG5cdEZPUk1TX0xJU1RfRkFJTEVEID0gXCJbRk9STV1bTElTVF0gRk9STVNfTElTVF9GQUlMRURcIixcclxuXHRBRERfRk9STV9TQ0hFTUEgPSBcIltGT1JNXVtMSVNUXSBBRERfRk9STV9TQ0hFTUFcIixcclxuXHRGT1JNX1NDSEVNQV9VUERBVEUgPSBcIltGT1JNXVtMSVNUXSBGT1JNX1NDSEVNQV9VUERBVEVcIixcclxuXHRHRVRfRk9STV9TQ0hFTUEgPSBcIltGT1JNXVtMSVNUXSBHRVRfRk9STV9TQ0hFTUFcIixcclxuXHRGT1JNX1NDSEVNQV9GRVRDSEVEID0gXCJbRk9STV1bTElTVF0gRk9STV9TQ0hFTUFfRkVUQ0hFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpc3RBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpc3RTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1RfU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEZvcm1zTGlzdFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpc3RGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgVXBkYXRlRm9ybVNjaGVtYUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1fU0NIRU1BX1VQREFURTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtU2NoZW1hQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuQUREX0ZPUk1fU0NIRU1BO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldEZvcm1TY2hlbWFBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5HRVRfRk9STV9TQ0hFTUE7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgRm9ybVNjaGVtYUZlY2hlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1fU0NIRU1BX0ZFVENIRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRm9ybXNMaXN0QWN0aW9ucyA9XHJcblx0fCBGb3Jtc0xpc3RBY3Rpb25cclxuXHR8IEZvcm1zTGlzdFN0YXJ0QWN0aW9uXHJcblx0fCBGb3Jtc0xpc3RTdWNjZWVkQWN0aW9uXHJcblx0fCBGb3Jtc0xpc3RGYWlsZWRBY3Rpb25cclxuXHR8IFVwZGF0ZUZvcm1TY2hlbWFBY3Rpb25cclxuXHR8IEFkZEZvcm1TY2hlbWFBY3Rpb25cclxuXHR8IEdldEZvcm1TY2hlbWFBY3Rpb25cclxuXHR8IEZvcm1TY2hlbWFGZWNoZWRBY3Rpb247XHJcbiJdfQ==