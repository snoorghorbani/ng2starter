/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
const GridsActionTypes = {
    UPSERT: "[GRID][DB] UPSERT",
    DELETE: "[GRID][DB] DELETE",
};
export { GridsActionTypes };
export class UpsertGridAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GridsActionTypes.UPSERT;
    }
}
if (false) {
    /** @type {?} */
    UpsertGridAction.prototype.type;
    /** @type {?} */
    UpsertGridAction.prototype.payload;
}
export class DeleteGridAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GridsActionTypes.DELETE;
    }
}
if (false) {
    /** @type {?} */
    DeleteGridAction.prototype.type;
    /** @type {?} */
    DeleteGridAction.prototype.payload;
}
/** @typedef {?} */
var GridsActions;
export { GridsActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvcm9vdC93aWRnZXQuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLQyxRQUFTLG1CQUFtQjtJQUM1QixRQUFTLG1CQUFtQjs7O0FBRzdCLE1BQU07Ozs7SUFFTCxZQUFtQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO29CQUR2QixnQkFBZ0IsQ0FBQyxNQUFNO0tBQ0k7Q0FDM0M7Ozs7Ozs7QUFDRCxNQUFNOzs7O0lBRUwsWUFBbUIsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztvQkFEckIsZ0JBQWdCLENBQUMsTUFBTTtLQUNFO0NBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEdyaWRzQWN0aW9uVHlwZXMge1xyXG5cdFVQU0VSVCA9IFwiW0dSSURdW0RCXSBVUFNFUlRcIixcclxuXHRERUxFVEUgPSBcIltHUklEXVtEQl0gREVMRVRFXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwc2VydEdyaWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHcmlkc0FjdGlvblR5cGVzLlVQU0VSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3JpZE1vZGVsW10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERlbGV0ZUdyaWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHcmlkc0FjdGlvblR5cGVzLkRFTEVURTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3JpZE1vZGVsKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHcmlkc0FjdGlvbnMgPSBVcHNlcnRHcmlkQWN0aW9uIHwgRGVsZXRlR3JpZEFjdGlvbjtcclxuIl19