/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
function EditFormAction_tsickle_Closure_declarations() {
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
function EditFormStartAction_tsickle_Closure_declarations() {
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
function EditFormSucceedAction_tsickle_Closure_declarations() {
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
function EditFormFailedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    EditFormFailedAction.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1mb3JtLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zvcm0vIiwic291cmNlcyI6WyJsaWIvZWRpdC9lZGl0LWZvcm0uYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7ZUFLYSx3QkFBd0I7cUJBQ2xCLDhCQUE4Qjt1QkFDNUIsZ0NBQWdDO3NCQUNqQywrQkFBK0I7OztBQUduRCxJQUFBO0lBRUMsd0JBQW1CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO29CQUQzQixtQkFBbUIsQ0FBQyxTQUFTO0tBQ0U7eUJBYmhEO0lBY0MsQ0FBQTtBQUhELDBCQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVDLDZCQUFtQixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtvQkFEM0IsbUJBQW1CLENBQUMsZUFBZTtLQUNKOzhCQWpCaEQ7SUFrQkMsQ0FBQTtBQUhELCtCQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVDLCtCQUFtQixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtvQkFEM0IsbUJBQW1CLENBQUMsaUJBQWlCO0tBQ047Z0NBckJoRDtJQXNCQyxDQUFBO0FBSEQsaUNBR0M7Ozs7Ozs7QUFDRCxJQUFBOztvQkFDaUIsbUJBQW1CLENBQUMsZ0JBQWdCOzsrQkF4QnJEO0lBeUJDLENBQUE7QUFGRCxnQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gRWRpdEZvcm1BY3Rpb25UeXBlcyB7XHJcblx0RURJVF9GT1JNID0gXCJbRk9STV1bRURJVF0gRURJVF9GT1JNXCIsXHJcblx0RURJVF9GT1JNX1NUQVJUID0gXCJbRk9STV1bRURJVF0gRURJVF9GT1JNX1NUQVJUXCIsXHJcblx0RURJVF9GT1JNX1NVQ0NFRUQgPSBcIltGT1JNXVtFRElUXSBFRElUX0ZPUk1fU1VDQ0VFRFwiLFxyXG5cdEVESVRfRk9STV9GQUlMRUQgPSBcIltGT1JNXVtFRElUXSBFRElUX0ZPUk1fRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRGb3JtQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdEZvcm1BY3Rpb25UeXBlcy5FRElUX0ZPUk07XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdEZvcm1TdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRGb3JtQWN0aW9uVHlwZXMuRURJVF9GT1JNX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRGb3JtU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRGb3JtQWN0aW9uVHlwZXMuRURJVF9GT1JNX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdEZvcm1GYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0Rm9ybUFjdGlvblR5cGVzLkVESVRfRk9STV9GQUlMRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEVkaXRGb3JtQWN0aW9ucyA9IEVkaXRGb3JtQWN0aW9uIHwgRWRpdEZvcm1TdGFydEFjdGlvbiB8IEVkaXRGb3JtU3VjY2VlZEFjdGlvbiB8IEVkaXRGb3JtRmFpbGVkQWN0aW9uO1xyXG4iXX0=