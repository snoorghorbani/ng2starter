/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
function RulesListAction_tsickle_Closure_declarations() {
    /** @type {?} */
    RulesListAction.prototype.type;
}
export class RulesListStartAction {
    constructor() {
        this.type = RulesListActionTypes.RULES_LIST_START;
    }
}
function RulesListStartAction_tsickle_Closure_declarations() {
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
function RulesListSucceedAction_tsickle_Closure_declarations() {
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
function RulesListFailedAction_tsickle_Closure_declarations() {
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
function UpsertRuleAction_tsickle_Closure_declarations() {
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
function GetRuleAction_tsickle_Closure_declarations() {
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
function RuleFechedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    RuleFechedAction.prototype.type;
    /** @type {?} */
    RuleFechedAction.prototype.payload;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS1kYi5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL2RiL3J1bGUtZGIuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Z0JBS2MsdUJBQXVCO3NCQUNqQiw2QkFBNkI7d0JBQzNCLCtCQUErQjt1QkFDaEMsOEJBQThCO2lCQUNwQyx3QkFBd0I7Y0FDM0IscUJBQXFCO2tCQUNqQix5QkFBeUI7OztBQUd6QyxNQUFNOztvQkFDVyxvQkFBb0IsQ0FBQyxVQUFVOztDQUMvQzs7Ozs7QUFDRCxNQUFNOztvQkFDVyxvQkFBb0IsQ0FBQyxnQkFBZ0I7O0NBQ3JEOzs7OztBQUNELE1BQU07Ozs7SUFFTCxZQUFtQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO29CQUR2QixvQkFBb0IsQ0FBQyxrQkFBa0I7S0FDWjtDQUMzQzs7Ozs7OztBQUNELE1BQU07O29CQUNXLG9CQUFvQixDQUFDLGlCQUFpQjs7Q0FDdEQ7Ozs7O0FBQ0QsTUFBTTs7OztJQUVMLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7b0JBRHJCLG9CQUFvQixDQUFDLFdBQVc7S0FDUDtDQUN6Qzs7Ozs7OztBQUNELE1BQU07Ozs7SUFFTCxZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFEbEIsb0JBQW9CLENBQUMsUUFBUTtLQUNQO0NBQ3RDOzs7Ozs7O0FBQ0QsTUFBTTs7OztJQUVMLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7b0JBRHJCLG9CQUFvQixDQUFDLFlBQVk7S0FDUjtDQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUnVsZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9ydWxlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBSdWxlc0xpc3RBY3Rpb25UeXBlcyB7XHJcblx0UlVMRVNfTElTVCA9IFwiW1JVTEVdW0RCXSBSVUxFU19MSVNUXCIsXHJcblx0UlVMRVNfTElTVF9TVEFSVCA9IFwiW1JVTEVdW0RCXSBSVUxFU19MSVNUX1NUQVJUXCIsXHJcblx0UlVMRVNfTElTVF9TVUNDRUVEID0gXCJbUlVMRV1bREJdIFJVTEVTX0xJU1RfU1VDQ0VFRFwiLFxyXG5cdFJVTEVTX0xJU1RfRkFJTEVEID0gXCJbUlVMRV1bREJdIFJVTEVTX0xJU1RfRkFJTEVEXCIsXHJcblx0UlVMRV9VUFNFUlQgPSBcIltSVUxFXVtEQl0gUlVMRV9VUFNFUlRcIixcclxuXHRHRVRfUlVMRSA9IFwiW1JVTEVdW0RCXSBHRVRfUlVMRVwiLFxyXG5cdFJVTEVfRkVUQ0hFRCA9IFwiW1JVTEVdW0RCXSBSVUxFX0ZFVENIRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUnVsZXNMaXN0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVDtcclxufVxyXG5leHBvcnQgY2xhc3MgUnVsZXNMaXN0U3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX1NUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBSdWxlc0xpc3RTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSdWxlTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgUnVsZXNMaXN0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydFJ1bGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFX1VQU0VSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUnVsZU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRSdWxlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuR0VUX1JVTEU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgUnVsZUZlY2hlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVfRkVUQ0hFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUnVsZU1vZGVsKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBSdWxlc0xpc3RBY3Rpb25zID1cclxuXHR8IFJ1bGVzTGlzdEFjdGlvblxyXG5cdHwgUnVsZXNMaXN0U3RhcnRBY3Rpb25cclxuXHR8IFJ1bGVzTGlzdFN1Y2NlZWRBY3Rpb25cclxuXHR8IFJ1bGVzTGlzdEZhaWxlZEFjdGlvblxyXG5cdHwgVXBzZXJ0UnVsZUFjdGlvblxyXG5cdHwgR2V0UnVsZUFjdGlvblxyXG5cdHwgUnVsZUZlY2hlZEFjdGlvbjtcclxuIl19