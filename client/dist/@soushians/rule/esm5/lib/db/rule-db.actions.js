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
var RulesListAction = /** @class */ (function () {
    function RulesListAction() {
        this.type = RulesListActionTypes.RULES_LIST;
    }
    return RulesListAction;
}());
export { RulesListAction };
if (false) {
    /** @type {?} */
    RulesListAction.prototype.type;
}
var RulesListStartAction = /** @class */ (function () {
    function RulesListStartAction() {
        this.type = RulesListActionTypes.RULES_LIST_START;
    }
    return RulesListStartAction;
}());
export { RulesListStartAction };
if (false) {
    /** @type {?} */
    RulesListStartAction.prototype.type;
}
var RulesListSucceedAction = /** @class */ (function () {
    function RulesListSucceedAction(payload) {
        this.payload = payload;
        this.type = RulesListActionTypes.RULES_LIST_SUCCEED;
    }
    return RulesListSucceedAction;
}());
export { RulesListSucceedAction };
if (false) {
    /** @type {?} */
    RulesListSucceedAction.prototype.type;
    /** @type {?} */
    RulesListSucceedAction.prototype.payload;
}
var RulesListFailedAction = /** @class */ (function () {
    function RulesListFailedAction() {
        this.type = RulesListActionTypes.RULES_LIST_FAILED;
    }
    return RulesListFailedAction;
}());
export { RulesListFailedAction };
if (false) {
    /** @type {?} */
    RulesListFailedAction.prototype.type;
}
var UpsertRuleAction = /** @class */ (function () {
    function UpsertRuleAction(payload) {
        this.payload = payload;
        this.type = RulesListActionTypes.RULE_UPSERT;
    }
    return UpsertRuleAction;
}());
export { UpsertRuleAction };
if (false) {
    /** @type {?} */
    UpsertRuleAction.prototype.type;
    /** @type {?} */
    UpsertRuleAction.prototype.payload;
}
var GetRuleAction = /** @class */ (function () {
    function GetRuleAction(payload) {
        this.payload = payload;
        this.type = RulesListActionTypes.GET_RULE;
    }
    return GetRuleAction;
}());
export { GetRuleAction };
if (false) {
    /** @type {?} */
    GetRuleAction.prototype.type;
    /** @type {?} */
    GetRuleAction.prototype.payload;
}
var RuleFechedAction = /** @class */ (function () {
    function RuleFechedAction(payload) {
        this.payload = payload;
        this.type = RulesListActionTypes.RULE_FETCHED;
    }
    return RuleFechedAction;
}());
export { RuleFechedAction };
if (false) {
    /** @type {?} */
    RuleFechedAction.prototype.type;
    /** @type {?} */
    RuleFechedAction.prototype.payload;
}
/** @typedef {?} */
var RulesListActions;
export { RulesListActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS1kYi5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL2RiL3J1bGUtZGIuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLQyxZQUFhLHVCQUF1QjtJQUNwQyxrQkFBbUIsNkJBQTZCO0lBQ2hELG9CQUFxQiwrQkFBK0I7SUFDcEQsbUJBQW9CLDhCQUE4QjtJQUNsRCxhQUFjLHdCQUF3QjtJQUN0QyxVQUFXLHFCQUFxQjtJQUNoQyxjQUFlLHlCQUF5Qjs7O0FBR3pDLElBQUE7O29CQUNpQixvQkFBb0IsQ0FBQyxVQUFVOzswQkFmaEQ7SUFnQkMsQ0FBQTtBQUZELDJCQUVDOzs7OztBQUNELElBQUE7O29CQUNpQixvQkFBb0IsQ0FBQyxnQkFBZ0I7OytCQWxCdEQ7SUFtQkMsQ0FBQTtBQUZELGdDQUVDOzs7OztBQUNELElBQUE7SUFFQyxnQ0FBbUIsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtvQkFEdkIsb0JBQW9CLENBQUMsa0JBQWtCO0tBQ1o7aUNBdEI1QztJQXVCQyxDQUFBO0FBSEQsa0NBR0M7Ozs7Ozs7QUFDRCxJQUFBOztvQkFDaUIsb0JBQW9CLENBQUMsaUJBQWlCOztnQ0F6QnZEO0lBMEJDLENBQUE7QUFGRCxpQ0FFQzs7Ozs7QUFDRCxJQUFBO0lBRUMsMEJBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7b0JBRHJCLG9CQUFvQixDQUFDLFdBQVc7S0FDUDsyQkE3QjFDO0lBOEJDLENBQUE7QUFIRCw0QkFHQzs7Ozs7OztBQUNELElBQUE7SUFFQyx1QkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBRGxCLG9CQUFvQixDQUFDLFFBQVE7S0FDUDt3QkFqQ3ZDO0lBa0NDLENBQUE7QUFIRCx5QkFHQzs7Ozs7OztBQUNELElBQUE7SUFFQywwQkFBbUIsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztvQkFEckIsb0JBQW9CLENBQUMsWUFBWTtLQUNSOzJCQXJDMUM7SUFzQ0MsQ0FBQTtBQUhELDRCQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3J1bGUubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFJ1bGVzTGlzdEFjdGlvblR5cGVzIHtcclxuXHRSVUxFU19MSVNUID0gXCJbUlVMRV1bREJdIFJVTEVTX0xJU1RcIixcclxuXHRSVUxFU19MSVNUX1NUQVJUID0gXCJbUlVMRV1bREJdIFJVTEVTX0xJU1RfU1RBUlRcIixcclxuXHRSVUxFU19MSVNUX1NVQ0NFRUQgPSBcIltSVUxFXVtEQl0gUlVMRVNfTElTVF9TVUNDRUVEXCIsXHJcblx0UlVMRVNfTElTVF9GQUlMRUQgPSBcIltSVUxFXVtEQl0gUlVMRVNfTElTVF9GQUlMRURcIixcclxuXHRSVUxFX1VQU0VSVCA9IFwiW1JVTEVdW0RCXSBSVUxFX1VQU0VSVFwiLFxyXG5cdEdFVF9SVUxFID0gXCJbUlVMRV1bREJdIEdFVF9SVUxFXCIsXHJcblx0UlVMRV9GRVRDSEVEID0gXCJbUlVMRV1bREJdIFJVTEVfRkVUQ0hFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSdWxlc0xpc3RBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBSdWxlc0xpc3RTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1RfU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJ1bGVzTGlzdFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJ1bGVNb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSdWxlc0xpc3RGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0UnVsZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVfVVBTRVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSdWxlTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFJ1bGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5HRVRfUlVMRTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSdWxlRmVjaGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRV9GRVRDSEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSdWxlTW9kZWwpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFJ1bGVzTGlzdEFjdGlvbnMgPVxyXG5cdHwgUnVsZXNMaXN0QWN0aW9uXHJcblx0fCBSdWxlc0xpc3RTdGFydEFjdGlvblxyXG5cdHwgUnVsZXNMaXN0U3VjY2VlZEFjdGlvblxyXG5cdHwgUnVsZXNMaXN0RmFpbGVkQWN0aW9uXHJcblx0fCBVcHNlcnRSdWxlQWN0aW9uXHJcblx0fCBHZXRSdWxlQWN0aW9uXHJcblx0fCBSdWxlRmVjaGVkQWN0aW9uO1xyXG4iXX0=