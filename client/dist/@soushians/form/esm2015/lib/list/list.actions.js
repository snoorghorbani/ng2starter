/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
const FormsListActionTypes = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mb3JtLyIsInNvdXJjZXMiOlsibGliL2xpc3QvbGlzdC5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUtDLFlBQWEseUJBQXlCO0lBQ3RDLGtCQUFtQiwrQkFBK0I7SUFDbEQsb0JBQXFCLGlDQUFpQztJQUN0RCxtQkFBb0IsZ0NBQWdDO0lBQ3BELGlCQUFrQiw4QkFBOEI7SUFDaEQsb0JBQXFCLGlDQUFpQztJQUN0RCxpQkFBa0IsOEJBQThCO0lBQ2hELHFCQUFzQixrQ0FBa0M7OztBQUd6RCxNQUFNOztvQkFDVyxvQkFBb0IsQ0FBQyxVQUFVOztDQUMvQzs7Ozs7QUFDRCxNQUFNOztvQkFDVyxvQkFBb0IsQ0FBQyxnQkFBZ0I7O0NBQ3JEOzs7OztBQUNELE1BQU07Ozs7SUFFTCxZQUFtQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtvQkFEN0Isb0JBQW9CLENBQUMsa0JBQWtCO0tBQ047Q0FDakQ7Ozs7Ozs7QUFDRCxNQUFNOztvQkFDVyxvQkFBb0IsQ0FBQyxpQkFBaUI7O0NBQ3REOzs7OztBQUNELE1BQU07Ozs7SUFFTCxZQUFtQixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtvQkFEM0Isb0JBQW9CLENBQUMsa0JBQWtCO0tBQ1I7Q0FDL0M7Ozs7Ozs7QUFDRCxNQUFNOzs7O0lBRUwsWUFBbUIsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7b0JBRDNCLG9CQUFvQixDQUFDLGVBQWU7S0FDTDtDQUMvQzs7Ozs7OztBQUNELE1BQU07Ozs7SUFFTCxZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFEbEIsb0JBQW9CLENBQUMsZUFBZTtLQUNkO0NBQ3RDOzs7Ozs7O0FBQ0QsTUFBTTs7OztJQUVMLFlBQW1CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO29CQUQzQixvQkFBb0IsQ0FBQyxtQkFBbUI7S0FDVDtDQUMvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gRm9ybXNMaXN0QWN0aW9uVHlwZXMge1xyXG5cdEZPUk1TX0xJU1QgPSBcIltGT1JNXVtMSVNUXSBGT1JNU19MSVNUXCIsXHJcblx0Rk9STVNfTElTVF9TVEFSVCA9IFwiW0ZPUk1dW0xJU1RdIEZPUk1TX0xJU1RfU1RBUlRcIixcclxuXHRGT1JNU19MSVNUX1NVQ0NFRUQgPSBcIltGT1JNXVtMSVNUXSBGT1JNU19MSVNUX1NVQ0NFRURcIixcclxuXHRGT1JNU19MSVNUX0ZBSUxFRCA9IFwiW0ZPUk1dW0xJU1RdIEZPUk1TX0xJU1RfRkFJTEVEXCIsXHJcblx0QUREX0ZPUk1fU0NIRU1BID0gXCJbRk9STV1bTElTVF0gQUREX0ZPUk1fU0NIRU1BXCIsXHJcblx0Rk9STV9TQ0hFTUFfVVBEQVRFID0gXCJbRk9STV1bTElTVF0gRk9STV9TQ0hFTUFfVVBEQVRFXCIsXHJcblx0R0VUX0ZPUk1fU0NIRU1BID0gXCJbRk9STV1bTElTVF0gR0VUX0ZPUk1fU0NIRU1BXCIsXHJcblx0Rk9STV9TQ0hFTUFfRkVUQ0hFRCA9IFwiW0ZPUk1dW0xJU1RdIEZPUk1fU0NIRU1BX0ZFVENIRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybXNMaXN0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVDtcclxufVxyXG5leHBvcnQgY2xhc3MgRm9ybXNMaXN0U3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX1NUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpc3RTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVF9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRm9ybXNMaXN0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVF9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwZGF0ZUZvcm1TY2hlbWFBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNX1NDSEVNQV9VUERBVEU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybVNjaGVtYUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZvcm1zTGlzdEFjdGlvblR5cGVzLkFERF9GT1JNX1NDSEVNQTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRGb3JtU2NoZW1hQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuR0VUX0ZPUk1fU0NIRU1BO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEZvcm1TY2hlbWFGZWNoZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNX1NDSEVNQV9GRVRDSEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEZvcm1zTGlzdEFjdGlvbnMgPVxyXG5cdHwgRm9ybXNMaXN0QWN0aW9uXHJcblx0fCBGb3Jtc0xpc3RTdGFydEFjdGlvblxyXG5cdHwgRm9ybXNMaXN0U3VjY2VlZEFjdGlvblxyXG5cdHwgRm9ybXNMaXN0RmFpbGVkQWN0aW9uXHJcblx0fCBVcGRhdGVGb3JtU2NoZW1hQWN0aW9uXHJcblx0fCBBZGRGb3JtU2NoZW1hQWN0aW9uXHJcblx0fCBHZXRGb3JtU2NoZW1hQWN0aW9uXHJcblx0fCBGb3JtU2NoZW1hRmVjaGVkQWN0aW9uO1xyXG4iXX0=