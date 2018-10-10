/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var GridsActionTypes = {
    UPSERT: "[GRID][DB] UPSERT",
    DELETE: "[GRID][DB] DELETE",
};
export { GridsActionTypes };
var UpsertGridAction = /** @class */ (function () {
    function UpsertGridAction(payload) {
        this.payload = payload;
        this.type = GridsActionTypes.UPSERT;
    }
    return UpsertGridAction;
}());
export { UpsertGridAction };
if (false) {
    /** @type {?} */
    UpsertGridAction.prototype.type;
    /** @type {?} */
    UpsertGridAction.prototype.payload;
}
var DeleteGridAction = /** @class */ (function () {
    function DeleteGridAction(payload) {
        this.payload = payload;
        this.type = GridsActionTypes.DELETE;
    }
    return DeleteGridAction;
}());
export { DeleteGridAction };
if (false) {
    /** @type {?} */
    DeleteGridAction.prototype.type;
    /** @type {?} */
    DeleteGridAction.prototype.payload;
}
/** @typedef {?} */
var GridsActions;
export { GridsActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvcm9vdC93aWRnZXQuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLQyxRQUFTLG1CQUFtQjtJQUM1QixRQUFTLG1CQUFtQjs7O0FBRzdCLElBQUE7SUFFQywwQkFBbUIsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtvQkFEdkIsZ0JBQWdCLENBQUMsTUFBTTtLQUNJOzJCQVg1QztJQVlDLENBQUE7QUFIRCw0QkFHQzs7Ozs7OztBQUNELElBQUE7SUFFQywwQkFBbUIsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztvQkFEckIsZ0JBQWdCLENBQUMsTUFBTTtLQUNFOzJCQWYxQztJQWdCQyxDQUFBO0FBSEQsNEJBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEdyaWRzQWN0aW9uVHlwZXMge1xyXG5cdFVQU0VSVCA9IFwiW0dSSURdW0RCXSBVUFNFUlRcIixcclxuXHRERUxFVEUgPSBcIltHUklEXVtEQl0gREVMRVRFXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwc2VydEdyaWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHcmlkc0FjdGlvblR5cGVzLlVQU0VSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3JpZE1vZGVsW10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERlbGV0ZUdyaWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHcmlkc0FjdGlvblR5cGVzLkRFTEVURTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3JpZE1vZGVsKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHcmlkc0FjdGlvbnMgPSBVcHNlcnRHcmlkQWN0aW9uIHwgRGVsZXRlR3JpZEFjdGlvbjtcclxuIl19