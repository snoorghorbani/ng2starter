/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const DiagramsActionTypes = {
    GET_DIAGRAM: '[DIAGRAM] GET_DIAGRAM',
    GET_DIAGRAM_START: '[DIAGRAM] GET_DIAGRAM_START',
    GET_DIAGRAM_SUCCEED: '[DIAGRAM] GET_DIAGRAM_SUCCEED',
    GET_DIAGRAM_FAILED: '[DIAGRAM] GET_DIAGRAM_FAILED',
};
export { DiagramsActionTypes };
export class GetDiagrams {
    constructor() {
        this.type = DiagramsActionTypes.GET_DIAGRAM;
    }
}
function GetDiagrams_tsickle_Closure_declarations() {
    /** @type {?} */
    GetDiagrams.prototype.type;
}
export class GetDiagramsStart {
    constructor() {
        this.type = DiagramsActionTypes.GET_DIAGRAM_START;
    }
}
function GetDiagramsStart_tsickle_Closure_declarations() {
    /** @type {?} */
    GetDiagramsStart.prototype.type;
}
export class GetDiagramsSucceed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DiagramsActionTypes.GET_DIAGRAM_SUCCEED;
    }
}
function GetDiagramsSucceed_tsickle_Closure_declarations() {
    /** @type {?} */
    GetDiagramsSucceed.prototype.type;
    /** @type {?} */
    GetDiagramsSucceed.prototype.payload;
}
export class GetDiagramsFailed {
    constructor() {
        this.type = DiagramsActionTypes.GET_DIAGRAM_FAILED;
    }
}
function GetDiagramsFailed_tsickle_Closure_declarations() {
    /** @type {?} */
    GetDiagramsFailed.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbXMuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9hY3Rpb25zL2RpYWdyYW1zLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2lCQUtnQix1QkFBdUI7dUJBQ2pCLDZCQUE2Qjt5QkFDM0IsK0JBQStCO3dCQUNoQyw4QkFBOEI7OztBQUdyRCxNQUFNOztvQkFDWSxtQkFBbUIsQ0FBQyxXQUFXOztDQUNoRDs7Ozs7QUFDRCxNQUFNOztvQkFDWSxtQkFBbUIsQ0FBQyxpQkFBaUI7O0NBQ3REOzs7OztBQUNELE1BQU07Ozs7SUFFSixZQUFtQixPQUFxQztRQUFyQyxZQUFPLEdBQVAsT0FBTyxDQUE4QjtvQkFEeEMsbUJBQW1CLENBQUMsbUJBQW1CO0tBQ007Q0FDOUQ7Ozs7Ozs7QUFDRCxNQUFNOztvQkFDWSxtQkFBbUIsQ0FBQyxrQkFBa0I7O0NBQ3ZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgR2V0RGlhZ3JhbXNBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIERpYWdyYW1zQWN0aW9uVHlwZXMge1xyXG4gIEdFVF9ESUFHUkFNID0gJ1tESUFHUkFNXSBHRVRfRElBR1JBTScsXHJcbiAgR0VUX0RJQUdSQU1fU1RBUlQgPSAnW0RJQUdSQU1dIEdFVF9ESUFHUkFNX1NUQVJUJyxcclxuICBHRVRfRElBR1JBTV9TVUNDRUVEID0gJ1tESUFHUkFNXSBHRVRfRElBR1JBTV9TVUNDRUVEJyxcclxuICBHRVRfRElBR1JBTV9GQUlMRUQgPSAnW0RJQUdSQU1dIEdFVF9ESUFHUkFNX0ZBSUxFRCdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldERpYWdyYW1zIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gRGlhZ3JhbXNBY3Rpb25UeXBlcy5HRVRfRElBR1JBTTtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0RGlhZ3JhbXNTdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IERpYWdyYW1zQWN0aW9uVHlwZXMuR0VUX0RJQUdSQU1fU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldERpYWdyYW1zU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IERpYWdyYW1zQWN0aW9uVHlwZXMuR0VUX0RJQUdSQU1fU1VDQ0VFRDtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXNwb25zZSkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldERpYWdyYW1zRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gRGlhZ3JhbXNBY3Rpb25UeXBlcy5HRVRfRElBR1JBTV9GQUlMRUQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgdHlwZSBEaWFncmFtc0FjdGlvbiA9XHJcbiAgR2V0RGlhZ3JhbXNcclxuICB8IEdldERpYWdyYW1zU3RhcnRcclxuICB8IEdldERpYWdyYW1zU3VjY2VlZFxyXG4gIHwgR2V0RGlhZ3JhbXNGYWlsZWQ7XHJcbiJdfQ==