/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var EditFormActionTypes = {
    EDIT_FORM: "[FORM][EDIT] EDIT_FORM",
    EDIT_FORM_START: "[FORM][EDIT] EDIT_FORM_START",
    EDIT_FORM_SUCCEED: "[FORM][EDIT] EDIT_FORM_SUCCEED",
    EDIT_FORM_FAILED: "[FORM][EDIT] EDIT_FORM_FAILED",
};
export { EditFormActionTypes };
var EditFormAction = /** @class */ (function () {
    function EditFormAction(payload) {
        this.payload = payload;
        this.type = EditFormActionTypes.EDIT_FORM;
    }
    return EditFormAction;
}());
export { EditFormAction };
if (false) {
    /** @type {?} */
    EditFormAction.prototype.type;
    /** @type {?} */
    EditFormAction.prototype.payload;
}
var EditFormStartAction = /** @class */ (function () {
    function EditFormStartAction(payload) {
        this.payload = payload;
        this.type = EditFormActionTypes.EDIT_FORM_START;
    }
    return EditFormStartAction;
}());
export { EditFormStartAction };
if (false) {
    /** @type {?} */
    EditFormStartAction.prototype.type;
    /** @type {?} */
    EditFormStartAction.prototype.payload;
}
var EditFormSucceedAction = /** @class */ (function () {
    function EditFormSucceedAction(payload) {
        this.payload = payload;
        this.type = EditFormActionTypes.EDIT_FORM_SUCCEED;
    }
    return EditFormSucceedAction;
}());
export { EditFormSucceedAction };
if (false) {
    /** @type {?} */
    EditFormSucceedAction.prototype.type;
    /** @type {?} */
    EditFormSucceedAction.prototype.payload;
}
var EditFormFailedAction = /** @class */ (function () {
    function EditFormFailedAction() {
        this.type = EditFormActionTypes.EDIT_FORM_FAILED;
    }
    return EditFormFailedAction;
}());
export { EditFormFailedAction };
if (false) {
    /** @type {?} */
    EditFormFailedAction.prototype.type;
}
/** @typedef {?} */
var EditFormActions;
export { EditFormActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1mb3JtLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zvcm0vIiwic291cmNlcyI6WyJsaWIvZWRpdC9lZGl0LWZvcm0uYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLQyxXQUFZLHdCQUF3QjtJQUNwQyxpQkFBa0IsOEJBQThCO0lBQ2hELG1CQUFvQixnQ0FBZ0M7SUFDcEQsa0JBQW1CLCtCQUErQjs7O0FBR25ELElBQUE7SUFFQyx3QkFBbUIsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7b0JBRDNCLG1CQUFtQixDQUFDLFNBQVM7S0FDRTt5QkFiaEQ7SUFjQyxDQUFBO0FBSEQsMEJBR0M7Ozs7Ozs7QUFDRCxJQUFBO0lBRUMsNkJBQW1CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO29CQUQzQixtQkFBbUIsQ0FBQyxlQUFlO0tBQ0o7OEJBakJoRDtJQWtCQyxDQUFBO0FBSEQsK0JBR0M7Ozs7Ozs7QUFDRCxJQUFBO0lBRUMsK0JBQW1CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO29CQUQzQixtQkFBbUIsQ0FBQyxpQkFBaUI7S0FDTjtnQ0FyQmhEO0lBc0JDLENBQUE7QUFIRCxpQ0FHQzs7Ozs7OztBQUNELElBQUE7O29CQUNpQixtQkFBbUIsQ0FBQyxnQkFBZ0I7OytCQXhCckQ7SUF5QkMsQ0FBQTtBQUZELGdDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBFZGl0Rm9ybUFjdGlvblR5cGVzIHtcclxuXHRFRElUX0ZPUk0gPSBcIltGT1JNXVtFRElUXSBFRElUX0ZPUk1cIixcclxuXHRFRElUX0ZPUk1fU1RBUlQgPSBcIltGT1JNXVtFRElUXSBFRElUX0ZPUk1fU1RBUlRcIixcclxuXHRFRElUX0ZPUk1fU1VDQ0VFRCA9IFwiW0ZPUk1dW0VESVRdIEVESVRfRk9STV9TVUNDRUVEXCIsXHJcblx0RURJVF9GT1JNX0ZBSUxFRCA9IFwiW0ZPUk1dW0VESVRdIEVESVRfRk9STV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdEZvcm1BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0Rm9ybUFjdGlvblR5cGVzLkVESVRfRk9STTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0Rm9ybVN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdEZvcm1BY3Rpb25UeXBlcy5FRElUX0ZPUk1fU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdEZvcm1TdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdEZvcm1BY3Rpb25UeXBlcy5FRElUX0ZPUk1fU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0Rm9ybUZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRGb3JtQWN0aW9uVHlwZXMuRURJVF9GT1JNX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRWRpdEZvcm1BY3Rpb25zID0gRWRpdEZvcm1BY3Rpb24gfCBFZGl0Rm9ybVN0YXJ0QWN0aW9uIHwgRWRpdEZvcm1TdWNjZWVkQWN0aW9uIHwgRWRpdEZvcm1GYWlsZWRBY3Rpb247XHJcbiJdfQ==