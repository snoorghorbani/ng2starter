/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var DELETE_WIDGET_ACTION_TYPES = {
    START: "[DELETE_WIDGET][API][DeleteWidget] start",
    SUCCEED: "[DELETE_WIDGET][API][DeleteWidget] succeed",
    FAILED: "[DELETE_WIDGET][API][DeleteWidget] failed",
};
export { DELETE_WIDGET_ACTION_TYPES };
export class DeleteWidgetStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[DELETE_WIDGET][API][DeleteWidget] start" /* START */;
    }
}
if (false) {
    /** @type {?} */
    DeleteWidgetStartAction.prototype.type;
    /** @type {?} */
    DeleteWidgetStartAction.prototype.payload;
}
export class DeleteWidgetSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[DELETE_WIDGET][API][DeleteWidget] succeed" /* SUCCEED */;
    }
}
if (false) {
    /** @type {?} */
    DeleteWidgetSucceedAction.prototype.type;
    /** @type {?} */
    DeleteWidgetSucceedAction.prototype.payload;
}
export class DeleteWidgetFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[DELETE_WIDGET][API][DeleteWidget] failed" /* FAILED */;
    }
}
if (false) {
    /** @type {?} */
    DeleteWidgetFailedAction.prototype.type;
    /** @type {?} */
    DeleteWidgetFailedAction.prototype.payload;
}
/** @typedef {?} */
var DeleteWidgetActions;
export { DeleteWidgetActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXdpZGdldC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL2RlbGV0ZS13aWRnZXQvZGVsZXRlLXdpZGdldC5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUtDLE9BQVEsMENBQTBDO0lBQ2xELFNBQVUsNENBQTRDO0lBQ3RELFFBQVMsMkNBQTJDOzs7QUFHckQsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUVuQyxZQUFtQixPQUF5QjtRQUF6QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUQ1QyxtRUFBaUQ7S0FDQTtDQUNqRDs7Ozs7OztBQUNELE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFFckMsWUFBbUIsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFENUMsdUVBQW1EO0tBQ0Y7Q0FDakQ7Ozs7Ozs7QUFDRCxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBRXBDLFlBQW1CLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBRDVDLHFFQUFrRDtLQUNEO0NBQ2pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBERUxFVEVfV0lER0VUX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltERUxFVEVfV0lER0VUXVtBUEldW0RlbGV0ZVdpZGdldF0gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbREVMRVRFX1dJREdFVF1bQVBJXVtEZWxldGVXaWRnZXRdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltERUxFVEVfV0lER0VUXVtBUEldW0RlbGV0ZVdpZGdldF0gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERlbGV0ZVdpZGdldFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gREVMRVRFX1dJREdFVF9BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT4pIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVXaWRnZXRTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gREVMRVRFX1dJREdFVF9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogV2lkZ2V0TW9kZWw8YW55PikgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERlbGV0ZVdpZGdldEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERFTEVURV9XSURHRVRfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogV2lkZ2V0TW9kZWw8YW55PikgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIERlbGV0ZVdpZGdldEFjdGlvbnMgPSBEZWxldGVXaWRnZXRTdGFydEFjdGlvbiB8IERlbGV0ZVdpZGdldFN1Y2NlZWRBY3Rpb24gfCBEZWxldGVXaWRnZXRGYWlsZWRBY3Rpb247XHJcbiJdfQ==