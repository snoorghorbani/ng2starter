/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const AddFormActionTypes = {
    ADD_FORM: "[FORM][ADD] ADD_FORM_PROFILE",
    ADD_FORM_START: "[FORM][ADD] ADD_FORM_START",
    ADD_FORM_SUCCEED: "[FORM][ADD] ADD_FORM_SUCCEED",
    ADD_FORM_FAILED: "[FORM][ADD] ADD_FORM_FAILED",
};
export { AddFormActionTypes };
export class AddFormAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddFormActionTypes.ADD_FORM;
    }
}
if (false) {
    /** @type {?} */
    AddFormAction.prototype.type;
    /** @type {?} */
    AddFormAction.prototype.payload;
}
export class AddFormStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddFormActionTypes.ADD_FORM_START;
    }
}
if (false) {
    /** @type {?} */
    AddFormStartAction.prototype.type;
    /** @type {?} */
    AddFormStartAction.prototype.payload;
}
export class AddFormSucceedAction {
    constructor() {
        this.type = AddFormActionTypes.ADD_FORM_SUCCEED;
    }
}
if (false) {
    /** @type {?} */
    AddFormSucceedAction.prototype.type;
}
export class AddFormFailedAction {
    constructor() {
        this.type = AddFormActionTypes.ADD_FORM_FAILED;
    }
}
if (false) {
    /** @type {?} */
    AddFormFailedAction.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWZvcm0uYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9hZGQvYWRkLWZvcm0uYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLQyxVQUFXLDhCQUE4QjtJQUN6QyxnQkFBaUIsNEJBQTRCO0lBQzdDLGtCQUFtQiw4QkFBOEI7SUFDakQsaUJBQWtCLDZCQUE2Qjs7O0FBR2hELE1BQU0sT0FBTyxhQUFhOzs7O0lBRXpCLFlBQW1CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBRGxDLFNBQUksR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7SUFDRSxDQUFDO0NBQy9DOzs7SUFGQSw2QkFBNEM7O0lBQ2hDLGdDQUErQjs7QUFFNUMsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUU5QixZQUFtQixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQURsQyxTQUFJLEdBQUcsa0JBQWtCLENBQUMsY0FBYyxDQUFDO0lBQ0osQ0FBQztDQUMvQzs7O0lBRkEsa0NBQWtEOztJQUN0QyxxQ0FBK0I7O0FBRTVDLE1BQU0sT0FBTyxvQkFBb0I7SUFBakM7UUFDVSxTQUFJLEdBQUcsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUM7SUFDckQsQ0FBQztDQUFBOzs7SUFEQSxvQ0FBb0Q7O0FBRXJELE1BQU0sT0FBTyxtQkFBbUI7SUFBaEM7UUFDVSxTQUFJLEdBQUcsa0JBQWtCLENBQUMsZUFBZSxDQUFDO0lBQ3BELENBQUM7Q0FBQTs7O0lBREEsbUNBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBBZGRGb3JtQWN0aW9uVHlwZXMge1xyXG5cdEFERF9GT1JNID0gXCJbRk9STV1bQUREXSBBRERfRk9STV9QUk9GSUxFXCIsXHJcblx0QUREX0ZPUk1fU1RBUlQgPSBcIltGT1JNXVtBRERdIEFERF9GT1JNX1NUQVJUXCIsXHJcblx0QUREX0ZPUk1fU1VDQ0VFRCA9IFwiW0ZPUk1dW0FERF0gQUREX0ZPUk1fU1VDQ0VFRFwiLFxyXG5cdEFERF9GT1JNX0ZBSUxFRCA9IFwiW0ZPUk1dW0FERF0gQUREX0ZPUk1fRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZEZvcm1BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGRGb3JtQWN0aW9uVHlwZXMuQUREX0ZPUk07XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybVN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRm9ybUFjdGlvblR5cGVzLkFERF9GT1JNX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZEZvcm1TdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRm9ybUFjdGlvblR5cGVzLkFERF9GT1JNX1NVQ0NFRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZEZvcm1GYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGRGb3JtQWN0aW9uVHlwZXMuQUREX0ZPUk1fRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBZGRGb3JtQWN0aW9ucyA9IEFkZEZvcm1BY3Rpb24gfCBBZGRGb3JtU3RhcnRBY3Rpb24gfCBBZGRGb3JtU3VjY2VlZEFjdGlvbiB8IEFkZEZvcm1GYWlsZWRBY3Rpb247XHJcbiJdfQ==