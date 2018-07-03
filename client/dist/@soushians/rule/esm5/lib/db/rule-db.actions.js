/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
function RulesListAction_tsickle_Closure_declarations() {
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
function RulesListStartAction_tsickle_Closure_declarations() {
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
function RulesListSucceedAction_tsickle_Closure_declarations() {
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
function RulesListFailedAction_tsickle_Closure_declarations() {
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
function UpsertRuleAction_tsickle_Closure_declarations() {
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
function GetRuleAction_tsickle_Closure_declarations() {
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
function RuleFechedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    RuleFechedAction.prototype.type;
    /** @type {?} */
    RuleFechedAction.prototype.payload;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS1kYi5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL2RiL3J1bGUtZGIuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Z0JBS2MsdUJBQXVCO3NCQUNqQiw2QkFBNkI7d0JBQzNCLCtCQUErQjt1QkFDaEMsOEJBQThCO2lCQUNwQyx3QkFBd0I7Y0FDM0IscUJBQXFCO2tCQUNqQix5QkFBeUI7OztBQUd6QyxJQUFBOztvQkFDaUIsb0JBQW9CLENBQUMsVUFBVTs7MEJBZmhEO0lBZ0JDLENBQUE7QUFGRCwyQkFFQzs7Ozs7QUFDRCxJQUFBOztvQkFDaUIsb0JBQW9CLENBQUMsZ0JBQWdCOzsrQkFsQnREO0lBbUJDLENBQUE7QUFGRCxnQ0FFQzs7Ozs7QUFDRCxJQUFBO0lBRUMsZ0NBQW1CLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7b0JBRHZCLG9CQUFvQixDQUFDLGtCQUFrQjtLQUNaO2lDQXRCNUM7SUF1QkMsQ0FBQTtBQUhELGtDQUdDOzs7Ozs7O0FBQ0QsSUFBQTs7b0JBQ2lCLG9CQUFvQixDQUFDLGlCQUFpQjs7Z0NBekJ2RDtJQTBCQyxDQUFBO0FBRkQsaUNBRUM7Ozs7O0FBQ0QsSUFBQTtJQUVDLDBCQUFtQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXO29CQURyQixvQkFBb0IsQ0FBQyxXQUFXO0tBQ1A7MkJBN0IxQztJQThCQyxDQUFBO0FBSEQsNEJBR0M7Ozs7Ozs7QUFDRCxJQUFBO0lBRUMsdUJBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQURsQixvQkFBb0IsQ0FBQyxRQUFRO0tBQ1A7d0JBakN2QztJQWtDQyxDQUFBO0FBSEQseUJBR0M7Ozs7Ozs7QUFDRCxJQUFBO0lBRUMsMEJBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7b0JBRHJCLG9CQUFvQixDQUFDLFlBQVk7S0FDUjsyQkFyQzFDO0lBc0NDLENBQUE7QUFIRCw0QkFHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUnVsZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gUnVsZXNMaXN0QWN0aW9uVHlwZXMge1xyXG5cdFJVTEVTX0xJU1QgPSBcIltSVUxFXVtEQl0gUlVMRVNfTElTVFwiLFxyXG5cdFJVTEVTX0xJU1RfU1RBUlQgPSBcIltSVUxFXVtEQl0gUlVMRVNfTElTVF9TVEFSVFwiLFxyXG5cdFJVTEVTX0xJU1RfU1VDQ0VFRCA9IFwiW1JVTEVdW0RCXSBSVUxFU19MSVNUX1NVQ0NFRURcIixcclxuXHRSVUxFU19MSVNUX0ZBSUxFRCA9IFwiW1JVTEVdW0RCXSBSVUxFU19MSVNUX0ZBSUxFRFwiLFxyXG5cdFJVTEVfVVBTRVJUID0gXCJbUlVMRV1bREJdIFJVTEVfVVBTRVJUXCIsXHJcblx0R0VUX1JVTEUgPSBcIltSVUxFXVtEQl0gR0VUX1JVTEVcIixcclxuXHRSVUxFX0ZFVENIRUQgPSBcIltSVUxFXVtEQl0gUlVMRV9GRVRDSEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJ1bGVzTGlzdEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1Q7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJ1bGVzTGlzdFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgUnVsZXNMaXN0U3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1RfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUnVsZU1vZGVsW10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJ1bGVzTGlzdEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1RfRkFJTEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRSdWxlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRV9VUFNFUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJ1bGVNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UnVsZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLkdFVF9SVUxFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJ1bGVGZWNoZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFX0ZFVENIRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJ1bGVNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUnVsZXNMaXN0QWN0aW9ucyA9XHJcblx0fCBSdWxlc0xpc3RBY3Rpb25cclxuXHR8IFJ1bGVzTGlzdFN0YXJ0QWN0aW9uXHJcblx0fCBSdWxlc0xpc3RTdWNjZWVkQWN0aW9uXHJcblx0fCBSdWxlc0xpc3RGYWlsZWRBY3Rpb25cclxuXHR8IFVwc2VydFJ1bGVBY3Rpb25cclxuXHR8IEdldFJ1bGVBY3Rpb25cclxuXHR8IFJ1bGVGZWNoZWRBY3Rpb247XHJcbiJdfQ==