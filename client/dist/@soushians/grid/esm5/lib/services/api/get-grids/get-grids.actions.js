/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var GET_GRIDS_ACTION_TYPES = {
    START: "[GET_GRIDS][API][GetGrids] start",
    SUCCEED: "[GET_GRIDS][API][GetGrids] succeed",
    FAILED: "[GET_GRIDS][API][GetGrids] failed",
};
export { GET_GRIDS_ACTION_TYPES };
var GetGridsStartAction = /** @class */ (function () {
    function GetGridsStartAction() {
        this.type = "[GET_GRIDS][API][GetGrids] start" /* START */;
    }
    return GetGridsStartAction;
}());
export { GetGridsStartAction };
if (false) {
    /** @type {?} */
    GetGridsStartAction.prototype.type;
}
var GetGridsSucceedAction = /** @class */ (function () {
    function GetGridsSucceedAction(payload) {
        this.payload = payload;
        this.type = "[GET_GRIDS][API][GetGrids] succeed" /* SUCCEED */;
    }
    return GetGridsSucceedAction;
}());
export { GetGridsSucceedAction };
if (false) {
    /** @type {?} */
    GetGridsSucceedAction.prototype.type;
    /** @type {?} */
    GetGridsSucceedAction.prototype.payload;
}
var GetGridsFailedAction = /** @class */ (function () {
    function GetGridsFailedAction(payload) {
        this.payload = payload;
        this.type = "[GET_GRIDS][API][GetGrids] failed" /* FAILED */;
    }
    return GetGridsFailedAction;
}());
export { GetGridsFailedAction };
if (false) {
    /** @type {?} */
    GetGridsFailedAction.prototype.type;
    /** @type {?} */
    GetGridsFailedAction.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWdyaWRzLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL2dldC1ncmlkcy9nZXQtZ3JpZHMuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFNQyxPQUFRLGtDQUFrQztJQUMxQyxTQUFVLG9DQUFvQztJQUM5QyxRQUFTLG1DQUFtQzs7O0FBRzdDO0lBQUE7UUFDVSxTQUFJLGtEQUFnQztJQUM5QyxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURBLG1DQUE2Qzs7QUFFOUM7SUFFQywrQkFBbUIsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUQ5QixTQUFJLHNEQUFrQztJQUNMLENBQUM7SUFDNUMsNEJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZBLHFDQUErQzs7SUFDbkMsd0NBQTJCOztBQUV4QztJQUVDLDhCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLG9EQUFpQztJQUNaLENBQUM7SUFDcEMsMkJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZBLG9DQUE4Qzs7SUFDbEMsdUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRHcmlkc0FwaU1vZGVsIH0gZnJvbSBcIi4vZ2V0LWdyaWRzLm1vZGVsXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvZ3JpZC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gR0VUX0dSSURTX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltHRVRfR1JJRFNdW0FQSV1bR2V0R3JpZHNdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW0dFVF9HUklEU11bQVBJXVtHZXRHcmlkc10gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW0dFVF9HUklEU11bQVBJXVtHZXRHcmlkc10gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldEdyaWRzU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkc1N1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdyaWRNb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkc0ZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9HUklEU19BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldEdyaWRzQWN0aW9ucyA9IEdldEdyaWRzU3RhcnRBY3Rpb24gfCBHZXRHcmlkc1N1Y2NlZWRBY3Rpb24gfCBHZXRHcmlkc0ZhaWxlZEFjdGlvbjtcclxuIl19