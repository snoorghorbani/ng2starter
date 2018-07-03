/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const UPSERT_WIDGET_ACTION_TYPES = {
    START: "[UPSERT_WIDGET][API][UpsertWidget] start",
    SUCCEED: "[UPSERT_WIDGET][API][UpsertWidget] succeed",
    FAILED: "[UPSERT_WIDGET][API][UpsertWidget] failed",
};
export { UPSERT_WIDGET_ACTION_TYPES };
export class UpsertWidgetStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_WIDGET][API][UpsertWidget] start" /* START */;
    }
}
function UpsertWidgetStartAction_tsickle_Closure_declarations() {
    /** @type {?} */
    UpsertWidgetStartAction.prototype.type;
    /** @type {?} */
    UpsertWidgetStartAction.prototype.payload;
}
export class UpsertWidgetSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_WIDGET][API][UpsertWidget] succeed" /* SUCCEED */;
    }
}
function UpsertWidgetSucceedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    UpsertWidgetSucceedAction.prototype.type;
    /** @type {?} */
    UpsertWidgetSucceedAction.prototype.payload;
}
export class UpsertWidgetFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_WIDGET][API][UpsertWidget] failed" /* FAILED */;
    }
}
function UpsertWidgetFailedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    UpsertWidgetFailedAction.prototype.type;
    /** @type {?} */
    UpsertWidgetFailedAction.prototype.payload;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LXdpZGdldC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL3Vwc2VydC13aWRnZXQvdXBzZXJ0LXdpZGdldC5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztXQU1TLDBDQUEwQzthQUN4Qyw0Q0FBNEM7WUFDN0MsMkNBQTJDOzs7QUFHckQsTUFBTTs7OztJQUVMLFlBQW1CLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCOztLQUFJO0NBQ2hEOzs7Ozs7O0FBQ0QsTUFBTTs7OztJQUVMLFlBQW1CLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCOztLQUFJO0NBQ2hEOzs7Ozs7O0FBQ0QsTUFBTTs7OztJQUVMLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLOztLQUFJO0NBQ25DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVcHNlcnRXaWRnZXRBcGlNb2RlbCB9IGZyb20gXCIuL3Vwc2VydC13aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gVVBTRVJUX1dJREdFVF9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbVVBTRVJUX1dJREdFVF1bQVBJXVtVcHNlcnRXaWRnZXRdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW1VQU0VSVF9XSURHRVRdW0FQSV1bVXBzZXJ0V2lkZ2V0XSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbVVBTRVJUX1dJREdFVF1bQVBJXVtVcHNlcnRXaWRnZXRdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9XSURHRVRfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRXaWRnZXRTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX1dJREdFVF9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogV2lkZ2V0TW9kZWw8YW55Pikge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0V2lkZ2V0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX1dJREdFVF9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVwc2VydFdpZGdldEFjdGlvbnMgPSBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbiB8IFVwc2VydFdpZGdldFN1Y2NlZWRBY3Rpb24gfCBVcHNlcnRXaWRnZXRGYWlsZWRBY3Rpb247XHJcbiJdfQ==