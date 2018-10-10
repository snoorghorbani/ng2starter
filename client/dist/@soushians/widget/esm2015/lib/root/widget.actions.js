/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
const WidgetsActionTypes = {
    UPSERT: "[WIDGET][DB] UPSERT",
    DELETE: "[WIDGET][DB] DELETE",
};
export { WidgetsActionTypes };
export class UpsertWidgetAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = WidgetsActionTypes.UPSERT;
    }
}
if (false) {
    /** @type {?} */
    UpsertWidgetAction.prototype.type;
    /** @type {?} */
    UpsertWidgetAction.prototype.payload;
}
export class DeleteWidgetAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = WidgetsActionTypes.DELETE;
    }
}
if (false) {
    /** @type {?} */
    DeleteWidgetAction.prototype.type;
    /** @type {?} */
    DeleteWidgetAction.prototype.payload;
}
/** @typedef {?} */
var WidgetsActions;
export { WidgetsActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3dpZGdldC8iLCJzb3VyY2VzIjpbImxpYi9yb290L3dpZGdldC5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUtDLFFBQVMscUJBQXFCO0lBQzlCLFFBQVMscUJBQXFCOzs7QUFHL0IsTUFBTTs7OztJQUVMLFlBQW1CLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO29CQUQ5QixrQkFBa0IsQ0FBQyxNQUFNO0tBQ1M7Q0FDbEQ7Ozs7Ozs7QUFDRCxNQUFNOzs7O0lBRUwsWUFBbUIsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7b0JBRDVCLGtCQUFrQixDQUFDLE1BQU07S0FDTztDQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gV2lkZ2V0c0FjdGlvblR5cGVzIHtcclxuXHRVUFNFUlQgPSBcIltXSURHRVRdW0RCXSBVUFNFUlRcIixcclxuXHRERUxFVEUgPSBcIltXSURHRVRdW0RCXSBERUxFVEVcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0V2lkZ2V0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gV2lkZ2V0c0FjdGlvblR5cGVzLlVQU0VSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogV2lkZ2V0TW9kZWw8YW55PltdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVXaWRnZXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBXaWRnZXRzQWN0aW9uVHlwZXMuREVMRVRFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBXaWRnZXRzQWN0aW9ucyA9IFVwc2VydFdpZGdldEFjdGlvbiB8IERlbGV0ZVdpZGdldEFjdGlvbjtcclxuIl19