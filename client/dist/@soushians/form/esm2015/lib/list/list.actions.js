/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mb3JtLyIsInNvdXJjZXMiOlsibGliL2xpc3QvbGlzdC5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUtDLFlBQWEseUJBQXlCO0lBQ3RDLGtCQUFtQiwrQkFBK0I7SUFDbEQsb0JBQXFCLGlDQUFpQztJQUN0RCxtQkFBb0IsZ0NBQWdDO0lBQ3BELGlCQUFrQiw4QkFBOEI7SUFDaEQsb0JBQXFCLGlDQUFpQztJQUN0RCxpQkFBa0IsOEJBQThCO0lBQ2hELHFCQUFzQixrQ0FBa0M7OztBQUd6RCxNQUFNLE9BQU8sZUFBZTtJQUE1QjtRQUNVLFNBQUksR0FBRyxvQkFBb0IsQ0FBQyxVQUFVLENBQUM7SUFDakQsQ0FBQztDQUFBOzs7SUFEQSwrQkFBZ0Q7O0FBRWpELE1BQU0sT0FBTyxvQkFBb0I7SUFBakM7UUFDVSxTQUFJLEdBQUcsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUM7SUFDdkQsQ0FBQztDQUFBOzs7SUFEQSxvQ0FBc0Q7O0FBRXZELE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFFbEMsWUFBbUIsT0FBMEI7UUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFEcEMsU0FBSSxHQUFHLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDO0lBQ1IsQ0FBQztDQUNqRDs7O0lBRkEsc0NBQXdEOztJQUM1Qyx5Q0FBaUM7O0FBRTlDLE1BQU0sT0FBTyxxQkFBcUI7SUFBbEM7UUFDVSxTQUFJLEdBQUcsb0JBQW9CLENBQUMsaUJBQWlCLENBQUM7SUFDeEQsQ0FBQztDQUFBOzs7SUFEQSxxQ0FBdUQ7O0FBRXhELE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFFbEMsWUFBbUIsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFEbEMsU0FBSSxHQUFHLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDO0lBQ1YsQ0FBQztDQUMvQzs7O0lBRkEsc0NBQXdEOztJQUM1Qyx5Q0FBK0I7O0FBRTVDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFFL0IsWUFBbUIsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFEbEMsU0FBSSxHQUFHLG9CQUFvQixDQUFDLGVBQWUsQ0FBQztJQUNQLENBQUM7Q0FDL0M7OztJQUZBLG1DQUFxRDs7SUFDekMsc0NBQStCOztBQUU1QyxNQUFNLE9BQU8sbUJBQW1COzs7O0lBRS9CLFlBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQyxlQUFlLENBQUM7SUFDaEIsQ0FBQztDQUN0Qzs7O0lBRkEsbUNBQXFEOztJQUN6QyxzQ0FBc0I7O0FBRW5DLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFFbEMsWUFBbUIsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFEbEMsU0FBSSxHQUFHLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDO0lBQ1gsQ0FBQztDQUMvQzs7O0lBRkEsc0NBQXlEOztJQUM3Qyx5Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEZvcm1zTGlzdEFjdGlvblR5cGVzIHtcclxuXHRGT1JNU19MSVNUID0gXCJbRk9STV1bTElTVF0gRk9STVNfTElTVFwiLFxyXG5cdEZPUk1TX0xJU1RfU1RBUlQgPSBcIltGT1JNXVtMSVNUXSBGT1JNU19MSVNUX1NUQVJUXCIsXHJcblx0Rk9STVNfTElTVF9TVUNDRUVEID0gXCJbRk9STV1bTElTVF0gRk9STVNfTElTVF9TVUNDRUVEXCIsXHJcblx0Rk9STVNfTElTVF9GQUlMRUQgPSBcIltGT1JNXVtMSVNUXSBGT1JNU19MSVNUX0ZBSUxFRFwiLFxyXG5cdEFERF9GT1JNX1NDSEVNQSA9IFwiW0ZPUk1dW0xJU1RdIEFERF9GT1JNX1NDSEVNQVwiLFxyXG5cdEZPUk1fU0NIRU1BX1VQREFURSA9IFwiW0ZPUk1dW0xJU1RdIEZPUk1fU0NIRU1BX1VQREFURVwiLFxyXG5cdEdFVF9GT1JNX1NDSEVNQSA9IFwiW0ZPUk1dW0xJU1RdIEdFVF9GT1JNX1NDSEVNQVwiLFxyXG5cdEZPUk1fU0NIRU1BX0ZFVENIRUQgPSBcIltGT1JNXVtMSVNUXSBGT1JNX1NDSEVNQV9GRVRDSEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1zTGlzdEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1Q7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEZvcm1zTGlzdFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVF9TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgRm9ybXNMaXN0U3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1RfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsW10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEZvcm1zTGlzdEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1RfRkFJTEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVGb3JtU2NoZW1hQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STV9TQ0hFTUFfVVBEQVRFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZEZvcm1TY2hlbWFBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5BRERfRk9STV9TQ0hFTUE7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0Rm9ybVNjaGVtYUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZvcm1zTGlzdEFjdGlvblR5cGVzLkdFVF9GT1JNX1NDSEVNQTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBGb3JtU2NoZW1hRmVjaGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STV9TQ0hFTUFfRkVUQ0hFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBGb3Jtc0xpc3RBY3Rpb25zID1cclxuXHR8IEZvcm1zTGlzdEFjdGlvblxyXG5cdHwgRm9ybXNMaXN0U3RhcnRBY3Rpb25cclxuXHR8IEZvcm1zTGlzdFN1Y2NlZWRBY3Rpb25cclxuXHR8IEZvcm1zTGlzdEZhaWxlZEFjdGlvblxyXG5cdHwgVXBkYXRlRm9ybVNjaGVtYUFjdGlvblxyXG5cdHwgQWRkRm9ybVNjaGVtYUFjdGlvblxyXG5cdHwgR2V0Rm9ybVNjaGVtYUFjdGlvblxyXG5cdHwgRm9ybVNjaGVtYUZlY2hlZEFjdGlvbjtcclxuIl19