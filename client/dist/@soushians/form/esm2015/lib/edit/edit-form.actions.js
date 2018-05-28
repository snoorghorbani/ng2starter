/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
function EditFormAction_tsickle_Closure_declarations() {
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
function EditFormStartAction_tsickle_Closure_declarations() {
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
function EditFormSucceedAction_tsickle_Closure_declarations() {
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
function EditFormFailedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    EditFormFailedAction.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1mb3JtLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zvcm0vIiwic291cmNlcyI6WyJsaWIvZWRpdC9lZGl0LWZvcm0uYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7ZUFLYSx3QkFBd0I7cUJBQ2xCLDhCQUE4Qjt1QkFDNUIsZ0NBQWdDO3NCQUNqQywrQkFBK0I7OztBQUduRCxNQUFNOzs7O0lBRUwsWUFBbUIsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7b0JBRDNCLG1CQUFtQixDQUFDLFNBQVM7S0FDRTtDQUMvQzs7Ozs7OztBQUNELE1BQU07Ozs7SUFFTCxZQUFtQixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtvQkFEM0IsbUJBQW1CLENBQUMsZUFBZTtLQUNKO0NBQy9DOzs7Ozs7O0FBQ0QsTUFBTTs7OztJQUVMLFlBQW1CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO29CQUQzQixtQkFBbUIsQ0FBQyxpQkFBaUI7S0FDTjtDQUMvQzs7Ozs7OztBQUNELE1BQU07O29CQUNXLG1CQUFtQixDQUFDLGdCQUFnQjs7Q0FDcEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEVkaXRGb3JtQWN0aW9uVHlwZXMge1xyXG5cdEVESVRfRk9STSA9IFwiW0ZPUk1dW0VESVRdIEVESVRfRk9STVwiLFxyXG5cdEVESVRfRk9STV9TVEFSVCA9IFwiW0ZPUk1dW0VESVRdIEVESVRfRk9STV9TVEFSVFwiLFxyXG5cdEVESVRfRk9STV9TVUNDRUVEID0gXCJbRk9STV1bRURJVF0gRURJVF9GT1JNX1NVQ0NFRURcIixcclxuXHRFRElUX0ZPUk1fRkFJTEVEID0gXCJbRk9STV1bRURJVF0gRURJVF9GT1JNX0ZBSUxFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0Rm9ybUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRGb3JtQWN0aW9uVHlwZXMuRURJVF9GT1JNO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRGb3JtU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0Rm9ybUFjdGlvblR5cGVzLkVESVRfRk9STV9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0Rm9ybVN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0Rm9ybUFjdGlvblR5cGVzLkVESVRfRk9STV9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRGb3JtRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdEZvcm1BY3Rpb25UeXBlcy5FRElUX0ZPUk1fRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBFZGl0Rm9ybUFjdGlvbnMgPSBFZGl0Rm9ybUFjdGlvbiB8IEVkaXRGb3JtU3RhcnRBY3Rpb24gfCBFZGl0Rm9ybVN1Y2NlZWRBY3Rpb24gfCBFZGl0Rm9ybUZhaWxlZEFjdGlvbjtcclxuIl19