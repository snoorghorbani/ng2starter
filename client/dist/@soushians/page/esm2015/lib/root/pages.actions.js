/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const PagesActionTypes = {
    UPSERT: "[PAGE][DB] UPSERT",
    DELETE: "[PAGE][DB] DELETE",
};
export { PagesActionTypes };
export class UpsertPageAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = PagesActionTypes.UPSERT;
    }
}
if (false) {
    /** @type {?} */
    UpsertPageAction.prototype.type;
    /** @type {?} */
    UpsertPageAction.prototype.payload;
}
export class DeletePageAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = PagesActionTypes.DELETE;
    }
}
if (false) {
    /** @type {?} */
    DeletePageAction.prototype.type;
    /** @type {?} */
    DeletePageAction.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9yb290L3BhZ2VzLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBS0MsUUFBUyxtQkFBbUI7SUFDNUIsUUFBUyxtQkFBbUI7OztBQUc3QixNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBRTVCLFlBQW1CLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFEOUIsU0FBSSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztJQUNFLENBQUM7Q0FDM0M7OztJQUZBLGdDQUF3Qzs7SUFDNUIsbUNBQTJCOztBQUV4QyxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBRTVCLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFENUIsU0FBSSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztJQUNBLENBQUM7Q0FDekM7OztJQUZBLGdDQUF3Qzs7SUFDNUIsbUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFBhZ2VzQWN0aW9uVHlwZXMge1xyXG5cdFVQU0VSVCA9IFwiW1BBR0VdW0RCXSBVUFNFUlRcIixcclxuXHRERUxFVEUgPSBcIltQQUdFXVtEQl0gREVMRVRFXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwc2VydFBhZ2VBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBQYWdlc0FjdGlvblR5cGVzLlVQU0VSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZU1vZGVsW10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERlbGV0ZVBhZ2VBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBQYWdlc0FjdGlvblR5cGVzLkRFTEVURTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZU1vZGVsKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBQYWdlc0FjdGlvbnMgPSBVcHNlcnRQYWdlQWN0aW9uIHwgRGVsZXRlUGFnZUFjdGlvbjtcclxuIl19