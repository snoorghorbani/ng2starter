/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var PagesActionTypes = {
    UPSERT: "[PAGE][DB] UPSERT",
    DELETE: "[PAGE][DB] DELETE",
};
export { PagesActionTypes };
var UpsertPageAction = /** @class */ (function () {
    function UpsertPageAction(payload) {
        this.payload = payload;
        this.type = PagesActionTypes.UPSERT;
    }
    return UpsertPageAction;
}());
export { UpsertPageAction };
if (false) {
    /** @type {?} */
    UpsertPageAction.prototype.type;
    /** @type {?} */
    UpsertPageAction.prototype.payload;
}
var DeletePageAction = /** @class */ (function () {
    function DeletePageAction(payload) {
        this.payload = payload;
        this.type = PagesActionTypes.DELETE;
    }
    return DeletePageAction;
}());
export { DeletePageAction };
if (false) {
    /** @type {?} */
    DeletePageAction.prototype.type;
    /** @type {?} */
    DeletePageAction.prototype.payload;
}
/** @typedef {?} */
var PagesActions;
export { PagesActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9yb290L3BhZ2VzLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBS0MsUUFBUyxtQkFBbUI7SUFDNUIsUUFBUyxtQkFBbUI7OztBQUc3QixJQUFBO0lBRUMsMEJBQW1CLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7b0JBRHZCLGdCQUFnQixDQUFDLE1BQU07S0FDSTsyQkFYNUM7SUFZQyxDQUFBO0FBSEQsNEJBR0M7Ozs7Ozs7QUFDRCxJQUFBO0lBRUMsMEJBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7b0JBRHJCLGdCQUFnQixDQUFDLE1BQU07S0FDRTsyQkFmMUM7SUFnQkMsQ0FBQTtBQUhELDRCQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFBhZ2VzQWN0aW9uVHlwZXMge1xyXG5cdFVQU0VSVCA9IFwiW1BBR0VdW0RCXSBVUFNFUlRcIixcclxuXHRERUxFVEUgPSBcIltQQUdFXVtEQl0gREVMRVRFXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwc2VydFBhZ2VBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBQYWdlc0FjdGlvblR5cGVzLlVQU0VSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZU1vZGVsW10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERlbGV0ZVBhZ2VBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBQYWdlc0FjdGlvblR5cGVzLkRFTEVURTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZU1vZGVsKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBQYWdlc0FjdGlvbnMgPSBVcHNlcnRQYWdlQWN0aW9uIHwgRGVsZXRlUGFnZUFjdGlvbjtcclxuIl19