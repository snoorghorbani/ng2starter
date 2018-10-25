/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var GET_GRID_ACTION_TYPES = {
    START: "[GRID][API][GetGrid] start",
    SUCCEED: "[GRID][API][GetGrid] succeed",
    FAILED: "[GRID][API][GetGrid] failed",
};
export { GET_GRID_ACTION_TYPES };
export class GetGridStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GRID][API][GetGrid] start" /* START */;
    }
}
if (false) {
    /** @type {?} */
    GetGridStartAction.prototype.type;
    /** @type {?} */
    GetGridStartAction.prototype.payload;
}
export class GetGridSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GRID][API][GetGrid] succeed" /* SUCCEED */;
    }
}
if (false) {
    /** @type {?} */
    GetGridSucceedAction.prototype.type;
    /** @type {?} */
    GetGridSucceedAction.prototype.payload;
}
export class GetGridFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GRID][API][GetGrid] failed" /* FAILED */;
    }
}
if (false) {
    /** @type {?} */
    GetGridFailedAction.prototype.type;
    /** @type {?} */
    GetGridFailedAction.prototype.payload;
}
/** @typedef {?} */
var GetGridActions;
export { GetGridActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWdyaWQuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWQvZ2V0LWdyaWQuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFNQyxPQUFRLDRCQUE0QjtJQUNwQyxTQUFVLDhCQUE4QjtJQUN4QyxRQUFTLDZCQUE2Qjs7O0FBR3ZDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFFOUIsWUFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEbEMscURBQTRDO0tBQ047Q0FDdEM7Ozs7Ozs7QUFDRCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRWhDLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFEckMseURBQThDO0tBQ0w7Q0FDekM7Ozs7Ozs7QUFDRCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBRS9CLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRC9CLHVEQUE2QztLQUNWO0NBQ25DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRHcmlkQXBpTW9kZWwgfSBmcm9tIFwiLi9nZXQtZ3JpZC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEdFVF9HUklEX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltHUklEXVtBUEldW0dldEdyaWRdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW0dSSURdW0FQSV1bR2V0R3JpZF0gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW0dSSURdW0FQSV1bR2V0R3JpZF0gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldEdyaWRTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9HUklEX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9HUklEX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldEdyaWRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRF9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldEdyaWRBY3Rpb25zID0gR2V0R3JpZFN0YXJ0QWN0aW9uIHwgR2V0R3JpZFN1Y2NlZWRBY3Rpb24gfCBHZXRHcmlkRmFpbGVkQWN0aW9uO1xyXG4iXX0=