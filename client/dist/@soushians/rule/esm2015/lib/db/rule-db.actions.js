/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var RulesListActionTypes = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS1kYi5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL2RiL3J1bGUtZGIuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLQyxZQUFhLHVCQUF1QjtJQUNwQyxrQkFBbUIsNkJBQTZCO0lBQ2hELG9CQUFxQiwrQkFBK0I7SUFDcEQsbUJBQW9CLDhCQUE4QjtJQUNsRCxhQUFjLHdCQUF3QjtJQUN0QyxVQUFXLHFCQUFxQjtJQUNoQyxjQUFlLHlCQUF5Qjs7O0FBR3pDLE1BQU0sT0FBTyxlQUFlOztRQUMzQixZQUFnQixvQkFBb0IsQ0FBQyxVQUFVLENBQUM7O0NBQ2hEOzs7OztBQUNELE1BQU0sT0FBTyxvQkFBb0I7O1FBQ2hDLFlBQWdCLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDOztDQUN0RDs7Ozs7QUFDRCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBRWxDLFlBQW1CLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFEdkMsWUFBZ0Isb0JBQW9CLENBQUMsa0JBQWtCLENBQUM7S0FDYjtDQUMzQzs7Ozs7OztBQUNELE1BQU0sT0FBTyxxQkFBcUI7O1FBQ2pDLFlBQWdCLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDOztDQUN2RDs7Ozs7QUFDRCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBRTVCLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFEckMsWUFBZ0Isb0JBQW9CLENBQUMsV0FBVyxDQUFDO0tBQ1I7Q0FDekM7Ozs7Ozs7QUFDRCxNQUFNLE9BQU8sYUFBYTs7OztJQUV6QixZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQURsQyxZQUFnQixvQkFBb0IsQ0FBQyxRQUFRLENBQUM7S0FDUjtDQUN0Qzs7Ozs7OztBQUNELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFFNUIsWUFBbUIsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQURyQyxZQUFnQixvQkFBb0IsQ0FBQyxZQUFZLENBQUM7S0FDVDtDQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUnVsZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9ydWxlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBSdWxlc0xpc3RBY3Rpb25UeXBlcyB7XHJcblx0UlVMRVNfTElTVCA9IFwiW1JVTEVdW0RCXSBSVUxFU19MSVNUXCIsXHJcblx0UlVMRVNfTElTVF9TVEFSVCA9IFwiW1JVTEVdW0RCXSBSVUxFU19MSVNUX1NUQVJUXCIsXHJcblx0UlVMRVNfTElTVF9TVUNDRUVEID0gXCJbUlVMRV1bREJdIFJVTEVTX0xJU1RfU1VDQ0VFRFwiLFxyXG5cdFJVTEVTX0xJU1RfRkFJTEVEID0gXCJbUlVMRV1bREJdIFJVTEVTX0xJU1RfRkFJTEVEXCIsXHJcblx0UlVMRV9VUFNFUlQgPSBcIltSVUxFXVtEQl0gUlVMRV9VUFNFUlRcIixcclxuXHRHRVRfUlVMRSA9IFwiW1JVTEVdW0RCXSBHRVRfUlVMRVwiLFxyXG5cdFJVTEVfRkVUQ0hFRCA9IFwiW1JVTEVdW0RCXSBSVUxFX0ZFVENIRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUnVsZXNMaXN0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVDtcclxufVxyXG5leHBvcnQgY2xhc3MgUnVsZXNMaXN0U3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX1NUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBSdWxlc0xpc3RTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSdWxlTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgUnVsZXNMaXN0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydFJ1bGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFX1VQU0VSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUnVsZU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRSdWxlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuR0VUX1JVTEU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgUnVsZUZlY2hlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVfRkVUQ0hFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUnVsZU1vZGVsKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBSdWxlc0xpc3RBY3Rpb25zID1cclxuXHR8IFJ1bGVzTGlzdEFjdGlvblxyXG5cdHwgUnVsZXNMaXN0U3RhcnRBY3Rpb25cclxuXHR8IFJ1bGVzTGlzdFN1Y2NlZWRBY3Rpb25cclxuXHR8IFJ1bGVzTGlzdEZhaWxlZEFjdGlvblxyXG5cdHwgVXBzZXJ0UnVsZUFjdGlvblxyXG5cdHwgR2V0UnVsZUFjdGlvblxyXG5cdHwgUnVsZUZlY2hlZEFjdGlvbjtcclxuIl19