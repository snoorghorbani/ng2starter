/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS1kYi5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL2RiL3J1bGUtZGIuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLQyxZQUFhLHVCQUF1QjtJQUNwQyxrQkFBbUIsNkJBQTZCO0lBQ2hELG9CQUFxQiwrQkFBK0I7SUFDcEQsbUJBQW9CLDhCQUE4QjtJQUNsRCxhQUFjLHdCQUF3QjtJQUN0QyxVQUFXLHFCQUFxQjtJQUNoQyxjQUFlLHlCQUF5Qjs7O0FBR3pDO0lBQUE7UUFDVSxTQUFJLEdBQUcsb0JBQW9CLENBQUMsVUFBVSxDQUFDO0lBQ2pELENBQUM7SUFBRCxzQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREEsK0JBQWdEOztBQUVqRDtJQUFBO1FBQ1UsU0FBSSxHQUFHLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDO0lBQ3ZELENBQUM7SUFBRCwyQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREEsb0NBQXNEOztBQUV2RDtJQUVDLGdDQUFtQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBRDlCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUNkLENBQUM7SUFDNUMsNkJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZBLHNDQUF3RDs7SUFDNUMseUNBQTJCOztBQUV4QztJQUFBO1FBQ1UsU0FBSSxHQUFHLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDO0lBQ3hELENBQUM7SUFBRCw0QkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREEscUNBQXVEOztBQUV4RDtJQUVDLDBCQUFtQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBRDVCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQyxXQUFXLENBQUM7SUFDVCxDQUFDO0lBQzFDLHVCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSxnQ0FBaUQ7O0lBQ3JDLG1DQUF5Qjs7QUFFdEM7SUFFQyx1QkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLG9CQUFvQixDQUFDLFFBQVEsQ0FBQztJQUNULENBQUM7SUFDdkMsb0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZBLDZCQUE4Qzs7SUFDbEMsZ0NBQXNCOztBQUVuQztJQUVDLDBCQUFtQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBRDVCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQyxZQUFZLENBQUM7SUFDVixDQUFDO0lBQzFDLHVCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSxnQ0FBa0Q7O0lBQ3RDLG1DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUnVsZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9ydWxlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBSdWxlc0xpc3RBY3Rpb25UeXBlcyB7XHJcblx0UlVMRVNfTElTVCA9IFwiW1JVTEVdW0RCXSBSVUxFU19MSVNUXCIsXHJcblx0UlVMRVNfTElTVF9TVEFSVCA9IFwiW1JVTEVdW0RCXSBSVUxFU19MSVNUX1NUQVJUXCIsXHJcblx0UlVMRVNfTElTVF9TVUNDRUVEID0gXCJbUlVMRV1bREJdIFJVTEVTX0xJU1RfU1VDQ0VFRFwiLFxyXG5cdFJVTEVTX0xJU1RfRkFJTEVEID0gXCJbUlVMRV1bREJdIFJVTEVTX0xJU1RfRkFJTEVEXCIsXHJcblx0UlVMRV9VUFNFUlQgPSBcIltSVUxFXVtEQl0gUlVMRV9VUFNFUlRcIixcclxuXHRHRVRfUlVMRSA9IFwiW1JVTEVdW0RCXSBHRVRfUlVMRVwiLFxyXG5cdFJVTEVfRkVUQ0hFRCA9IFwiW1JVTEVdW0RCXSBSVUxFX0ZFVENIRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUnVsZXNMaXN0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVDtcclxufVxyXG5leHBvcnQgY2xhc3MgUnVsZXNMaXN0U3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX1NUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBSdWxlc0xpc3RTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSdWxlTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgUnVsZXNMaXN0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydFJ1bGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFX1VQU0VSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUnVsZU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRSdWxlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuR0VUX1JVTEU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgUnVsZUZlY2hlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVfRkVUQ0hFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUnVsZU1vZGVsKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBSdWxlc0xpc3RBY3Rpb25zID1cclxuXHR8IFJ1bGVzTGlzdEFjdGlvblxyXG5cdHwgUnVsZXNMaXN0U3RhcnRBY3Rpb25cclxuXHR8IFJ1bGVzTGlzdFN1Y2NlZWRBY3Rpb25cclxuXHR8IFJ1bGVzTGlzdEZhaWxlZEFjdGlvblxyXG5cdHwgVXBzZXJ0UnVsZUFjdGlvblxyXG5cdHwgR2V0UnVsZUFjdGlvblxyXG5cdHwgUnVsZUZlY2hlZEFjdGlvbjtcclxuIl19