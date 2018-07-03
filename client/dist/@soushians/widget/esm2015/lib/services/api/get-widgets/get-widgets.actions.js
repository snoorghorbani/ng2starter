/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const GET_WIDGETS_ACTION_TYPES = {
    START: "[GET_WIDGETS][API][GetWidgets] start",
    SUCCEED: "[GET_WIDGETS][API][GetWidgets] succeed",
    FAILED: "[GET_WIDGETS][API][GetWidgets] failed",
};
export { GET_WIDGETS_ACTION_TYPES };
export class GetWidgetsStartAction {
    constructor() {
        this.type = "[GET_WIDGETS][API][GetWidgets] start" /* START */;
    }
}
function GetWidgetsStartAction_tsickle_Closure_declarations() {
    /** @type {?} */
    GetWidgetsStartAction.prototype.type;
}
export class GetWidgetsSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GET_WIDGETS][API][GetWidgets] succeed" /* SUCCEED */;
    }
}
function GetWidgetsSucceedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    GetWidgetsSucceedAction.prototype.type;
    /** @type {?} */
    GetWidgetsSucceedAction.prototype.payload;
}
export class GetWidgetsFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GET_WIDGETS][API][GetWidgets] failed" /* FAILED */;
    }
}
function GetWidgetsFailedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    GetWidgetsFailedAction.prototype.type;
    /** @type {?} */
    GetWidgetsFailedAction.prototype.payload;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXdpZGdldHMuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0cy9nZXQtd2lkZ2V0cy5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztXQU1TLHNDQUFzQzthQUNwQyx3Q0FBd0M7WUFDekMsdUNBQXVDOzs7QUFHakQsTUFBTTs7OztDQUVMOzs7OztBQUNELE1BQU07Ozs7SUFFTCxZQUFtQixPQUEyQjtRQUEzQixZQUFPLEdBQVAsT0FBTyxDQUFvQjs7S0FBSTtDQUNsRDs7Ozs7OztBQUNELE1BQU07Ozs7SUFFTCxZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSzs7S0FBSTtDQUNuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0V2lkZ2V0c0FwaU1vZGVsIH0gZnJvbSBcIi4vZ2V0LXdpZGdldHMubW9kZWxcIjtcclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gR0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW0dFVF9XSURHRVRTXVtBUEldW0dldFdpZGdldHNdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW0dFVF9XSURHRVRTXVtBUEldW0dldFdpZGdldHNdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltHRVRfV0lER0VUU11bQVBJXVtHZXRXaWRnZXRzXSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0c1N0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRzU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+W10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFdpZGdldHNGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldFdpZGdldHNBY3Rpb25zID0gR2V0V2lkZ2V0c1N0YXJ0QWN0aW9uIHwgR2V0V2lkZ2V0c1N1Y2NlZWRBY3Rpb24gfCBHZXRXaWRnZXRzRmFpbGVkQWN0aW9uO1xyXG4iXX0=