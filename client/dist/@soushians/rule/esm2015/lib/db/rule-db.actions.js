/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
const RulesListActionTypes = {
    RULES_LIST: "[RULE][DB] RULES_LIST",
    RULES_LIST_START: "[RULE][DB] RULES_LIST_START",
    RULES_LIST_SUCCEED: "[RULE][DB] RULES_LIST_SUCCEED",
    RULES_LIST_FAILED: "[RULE][DB] RULES_LIST_FAILED",
    RULE_UPSERT: "[RULE][DB] RULE_UPSERT",
    GET_RULE: "[RULE][DB] GET_RULE",
    RULE_FETCHED: "[RULE][DB] RULE_FETCHED",
};
export { RulesListActionTypes };
export class RulesListAction {
    constructor() {
        this.type = RulesListActionTypes.RULES_LIST;
    }
}
if (false) {
    /** @type {?} */
    RulesListAction.prototype.type;
}
export class RulesListStartAction {
    constructor() {
        this.type = RulesListActionTypes.RULES_LIST_START;
    }
}
if (false) {
    /** @type {?} */
    RulesListStartAction.prototype.type;
}
export class RulesListSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = RulesListActionTypes.RULES_LIST_SUCCEED;
    }
}
if (false) {
    /** @type {?} */
    RulesListSucceedAction.prototype.type;
    /** @type {?} */
    RulesListSucceedAction.prototype.payload;
}
export class RulesListFailedAction {
    constructor() {
        this.type = RulesListActionTypes.RULES_LIST_FAILED;
    }
}
if (false) {
    /** @type {?} */
    RulesListFailedAction.prototype.type;
}
export class UpsertRuleAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = RulesListActionTypes.RULE_UPSERT;
    }
}
if (false) {
    /** @type {?} */
    UpsertRuleAction.prototype.type;
    /** @type {?} */
    UpsertRuleAction.prototype.payload;
}
export class GetRuleAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = RulesListActionTypes.GET_RULE;
    }
}
if (false) {
    /** @type {?} */
    GetRuleAction.prototype.type;
    /** @type {?} */
    GetRuleAction.prototype.payload;
}
export class RuleFechedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = RulesListActionTypes.RULE_FETCHED;
    }
}
if (false) {
    /** @type {?} */
    RuleFechedAction.prototype.type;
    /** @type {?} */
    RuleFechedAction.prototype.payload;
}
/** @typedef {?} */
var RulesListActions;
export { RulesListActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS1kYi5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL2RiL3J1bGUtZGIuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLQyxZQUFhLHVCQUF1QjtJQUNwQyxrQkFBbUIsNkJBQTZCO0lBQ2hELG9CQUFxQiwrQkFBK0I7SUFDcEQsbUJBQW9CLDhCQUE4QjtJQUNsRCxhQUFjLHdCQUF3QjtJQUN0QyxVQUFXLHFCQUFxQjtJQUNoQyxjQUFlLHlCQUF5Qjs7O0FBR3pDLE1BQU07O29CQUNXLG9CQUFvQixDQUFDLFVBQVU7O0NBQy9DOzs7OztBQUNELE1BQU07O29CQUNXLG9CQUFvQixDQUFDLGdCQUFnQjs7Q0FDckQ7Ozs7O0FBQ0QsTUFBTTs7OztJQUVMLFlBQW1CLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7b0JBRHZCLG9CQUFvQixDQUFDLGtCQUFrQjtLQUNaO0NBQzNDOzs7Ozs7O0FBQ0QsTUFBTTs7b0JBQ1csb0JBQW9CLENBQUMsaUJBQWlCOztDQUN0RDs7Ozs7QUFDRCxNQUFNOzs7O0lBRUwsWUFBbUIsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztvQkFEckIsb0JBQW9CLENBQUMsV0FBVztLQUNQO0NBQ3pDOzs7Ozs7O0FBQ0QsTUFBTTs7OztJQUVMLFlBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQURsQixvQkFBb0IsQ0FBQyxRQUFRO0tBQ1A7Q0FDdEM7Ozs7Ozs7QUFDRCxNQUFNOzs7O0lBRUwsWUFBbUIsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztvQkFEckIsb0JBQW9CLENBQUMsWUFBWTtLQUNSO0NBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3J1bGUubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFJ1bGVzTGlzdEFjdGlvblR5cGVzIHtcclxuXHRSVUxFU19MSVNUID0gXCJbUlVMRV1bREJdIFJVTEVTX0xJU1RcIixcclxuXHRSVUxFU19MSVNUX1NUQVJUID0gXCJbUlVMRV1bREJdIFJVTEVTX0xJU1RfU1RBUlRcIixcclxuXHRSVUxFU19MSVNUX1NVQ0NFRUQgPSBcIltSVUxFXVtEQl0gUlVMRVNfTElTVF9TVUNDRUVEXCIsXHJcblx0UlVMRVNfTElTVF9GQUlMRUQgPSBcIltSVUxFXVtEQl0gUlVMRVNfTElTVF9GQUlMRURcIixcclxuXHRSVUxFX1VQU0VSVCA9IFwiW1JVTEVdW0RCXSBSVUxFX1VQU0VSVFwiLFxyXG5cdEdFVF9SVUxFID0gXCJbUlVMRV1bREJdIEdFVF9SVUxFXCIsXHJcblx0UlVMRV9GRVRDSEVEID0gXCJbUlVMRV1bREJdIFJVTEVfRkVUQ0hFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSdWxlc0xpc3RBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBSdWxlc0xpc3RTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1RfU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJ1bGVzTGlzdFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJ1bGVNb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSdWxlc0xpc3RGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0UnVsZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVfVVBTRVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSdWxlTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFJ1bGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5HRVRfUlVMRTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSdWxlRmVjaGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRV9GRVRDSEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSdWxlTW9kZWwpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFJ1bGVzTGlzdEFjdGlvbnMgPVxyXG5cdHwgUnVsZXNMaXN0QWN0aW9uXHJcblx0fCBSdWxlc0xpc3RTdGFydEFjdGlvblxyXG5cdHwgUnVsZXNMaXN0U3VjY2VlZEFjdGlvblxyXG5cdHwgUnVsZXNMaXN0RmFpbGVkQWN0aW9uXHJcblx0fCBVcHNlcnRSdWxlQWN0aW9uXHJcblx0fCBHZXRSdWxlQWN0aW9uXHJcblx0fCBSdWxlRmVjaGVkQWN0aW9uO1xyXG4iXX0=