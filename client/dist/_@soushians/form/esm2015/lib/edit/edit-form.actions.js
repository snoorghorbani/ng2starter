/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const EditFormActionTypes = {
    EDIT_FORM: "[FORM][EDIT] EDIT_FORM",
    EDIT_FORM_START: "[FORM][EDIT] EDIT_FORM_START",
    EDIT_FORM_SUCCEED: "[FORM][EDIT] EDIT_FORM_SUCCEED",
    EDIT_FORM_FAILED: "[FORM][EDIT] EDIT_FORM_FAILED",
};
export { EditFormActionTypes };
export class EditFormAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = EditFormActionTypes.EDIT_FORM;
    }
}
if (false) {
    /** @type {?} */
    EditFormAction.prototype.type;
    /** @type {?} */
    EditFormAction.prototype.payload;
}
export class EditFormStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = EditFormActionTypes.EDIT_FORM_START;
    }
}
if (false) {
    /** @type {?} */
    EditFormStartAction.prototype.type;
    /** @type {?} */
    EditFormStartAction.prototype.payload;
}
export class EditFormSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = EditFormActionTypes.EDIT_FORM_SUCCEED;
    }
}
if (false) {
    /** @type {?} */
    EditFormSucceedAction.prototype.type;
    /** @type {?} */
    EditFormSucceedAction.prototype.payload;
}
export class EditFormFailedAction {
    constructor() {
        this.type = EditFormActionTypes.EDIT_FORM_FAILED;
    }
}
if (false) {
    /** @type {?} */
    EditFormFailedAction.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1mb3JtLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zvcm0vIiwic291cmNlcyI6WyJsaWIvZWRpdC9lZGl0LWZvcm0uYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLQyxXQUFZLHdCQUF3QjtJQUNwQyxpQkFBa0IsOEJBQThCO0lBQ2hELG1CQUFvQixnQ0FBZ0M7SUFDcEQsa0JBQW1CLCtCQUErQjs7O0FBR25ELE1BQU0sT0FBTyxjQUFjOzs7O0lBRTFCLFlBQW1CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBRGxDLFNBQUksR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLENBQUM7SUFDQSxDQUFDO0NBQy9DOzs7SUFGQSw4QkFBOEM7O0lBQ2xDLGlDQUErQjs7QUFFNUMsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUUvQixZQUFtQixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQURsQyxTQUFJLEdBQUcsbUJBQW1CLENBQUMsZUFBZSxDQUFDO0lBQ04sQ0FBQztDQUMvQzs7O0lBRkEsbUNBQW9EOztJQUN4QyxzQ0FBK0I7O0FBRTVDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFFakMsWUFBbUIsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFEbEMsU0FBSSxHQUFHLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDO0lBQ1IsQ0FBQztDQUMvQzs7O0lBRkEscUNBQXNEOztJQUMxQyx3Q0FBK0I7O0FBRTVDLE1BQU0sT0FBTyxvQkFBb0I7SUFBakM7UUFDVSxTQUFJLEdBQUcsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUM7SUFDdEQsQ0FBQztDQUFBOzs7SUFEQSxvQ0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEVkaXRGb3JtQWN0aW9uVHlwZXMge1xyXG5cdEVESVRfRk9STSA9IFwiW0ZPUk1dW0VESVRdIEVESVRfRk9STVwiLFxyXG5cdEVESVRfRk9STV9TVEFSVCA9IFwiW0ZPUk1dW0VESVRdIEVESVRfRk9STV9TVEFSVFwiLFxyXG5cdEVESVRfRk9STV9TVUNDRUVEID0gXCJbRk9STV1bRURJVF0gRURJVF9GT1JNX1NVQ0NFRURcIixcclxuXHRFRElUX0ZPUk1fRkFJTEVEID0gXCJbRk9STV1bRURJVF0gRURJVF9GT1JNX0ZBSUxFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0Rm9ybUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRGb3JtQWN0aW9uVHlwZXMuRURJVF9GT1JNO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRGb3JtU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0Rm9ybUFjdGlvblR5cGVzLkVESVRfRk9STV9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0Rm9ybVN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0Rm9ybUFjdGlvblR5cGVzLkVESVRfRk9STV9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRGb3JtRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdEZvcm1BY3Rpb25UeXBlcy5FRElUX0ZPUk1fRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBFZGl0Rm9ybUFjdGlvbnMgPSBFZGl0Rm9ybUFjdGlvbiB8IEVkaXRGb3JtU3RhcnRBY3Rpb24gfCBFZGl0Rm9ybVN1Y2NlZWRBY3Rpb24gfCBFZGl0Rm9ybUZhaWxlZEFjdGlvbjtcclxuIl19