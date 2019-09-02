/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS1kYi5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL2RiL3J1bGUtZGIuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLQyxZQUFhLHVCQUF1QjtJQUNwQyxrQkFBbUIsNkJBQTZCO0lBQ2hELG9CQUFxQiwrQkFBK0I7SUFDcEQsbUJBQW9CLDhCQUE4QjtJQUNsRCxhQUFjLHdCQUF3QjtJQUN0QyxVQUFXLHFCQUFxQjtJQUNoQyxjQUFlLHlCQUF5Qjs7O0FBR3pDLE1BQU0sT0FBTyxlQUFlO0lBQTVCO1FBQ1UsU0FBSSxHQUFHLG9CQUFvQixDQUFDLFVBQVUsQ0FBQztJQUNqRCxDQUFDO0NBQUE7OztJQURBLCtCQUFnRDs7QUFFakQsTUFBTSxPQUFPLG9CQUFvQjtJQUFqQztRQUNVLFNBQUksR0FBRyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN2RCxDQUFDO0NBQUE7OztJQURBLG9DQUFzRDs7QUFFdkQsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUVsQyxZQUFtQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBRDlCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUNkLENBQUM7Q0FDM0M7OztJQUZBLHNDQUF3RDs7SUFDNUMseUNBQTJCOztBQUV4QyxNQUFNLE9BQU8scUJBQXFCO0lBQWxDO1FBQ1UsU0FBSSxHQUFHLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDO0lBQ3hELENBQUM7Q0FBQTs7O0lBREEscUNBQXVEOztBQUV4RCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBRTVCLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFENUIsU0FBSSxHQUFHLG9CQUFvQixDQUFDLFdBQVcsQ0FBQztJQUNULENBQUM7Q0FDekM7OztJQUZBLGdDQUFpRDs7SUFDckMsbUNBQXlCOztBQUV0QyxNQUFNLE9BQU8sYUFBYTs7OztJQUV6QixZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsb0JBQW9CLENBQUMsUUFBUSxDQUFDO0lBQ1QsQ0FBQztDQUN0Qzs7O0lBRkEsNkJBQThDOztJQUNsQyxnQ0FBc0I7O0FBRW5DLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFFNUIsWUFBbUIsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUQ1QixTQUFJLEdBQUcsb0JBQW9CLENBQUMsWUFBWSxDQUFDO0lBQ1YsQ0FBQztDQUN6Qzs7O0lBRkEsZ0NBQWtEOztJQUN0QyxtQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcnVsZS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gUnVsZXNMaXN0QWN0aW9uVHlwZXMge1xyXG5cdFJVTEVTX0xJU1QgPSBcIltSVUxFXVtEQl0gUlVMRVNfTElTVFwiLFxyXG5cdFJVTEVTX0xJU1RfU1RBUlQgPSBcIltSVUxFXVtEQl0gUlVMRVNfTElTVF9TVEFSVFwiLFxyXG5cdFJVTEVTX0xJU1RfU1VDQ0VFRCA9IFwiW1JVTEVdW0RCXSBSVUxFU19MSVNUX1NVQ0NFRURcIixcclxuXHRSVUxFU19MSVNUX0ZBSUxFRCA9IFwiW1JVTEVdW0RCXSBSVUxFU19MSVNUX0ZBSUxFRFwiLFxyXG5cdFJVTEVfVVBTRVJUID0gXCJbUlVMRV1bREJdIFJVTEVfVVBTRVJUXCIsXHJcblx0R0VUX1JVTEUgPSBcIltSVUxFXVtEQl0gR0VUX1JVTEVcIixcclxuXHRSVUxFX0ZFVENIRUQgPSBcIltSVUxFXVtEQl0gUlVMRV9GRVRDSEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJ1bGVzTGlzdEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1Q7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJ1bGVzTGlzdFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgUnVsZXNMaXN0U3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1RfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUnVsZU1vZGVsW10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJ1bGVzTGlzdEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1RfRkFJTEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRSdWxlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRV9VUFNFUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJ1bGVNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UnVsZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLkdFVF9SVUxFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJ1bGVGZWNoZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFX0ZFVENIRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJ1bGVNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUnVsZXNMaXN0QWN0aW9ucyA9XHJcblx0fCBSdWxlc0xpc3RBY3Rpb25cclxuXHR8IFJ1bGVzTGlzdFN0YXJ0QWN0aW9uXHJcblx0fCBSdWxlc0xpc3RTdWNjZWVkQWN0aW9uXHJcblx0fCBSdWxlc0xpc3RGYWlsZWRBY3Rpb25cclxuXHR8IFVwc2VydFJ1bGVBY3Rpb25cclxuXHR8IEdldFJ1bGVBY3Rpb25cclxuXHR8IFJ1bGVGZWNoZWRBY3Rpb247XHJcbiJdfQ==