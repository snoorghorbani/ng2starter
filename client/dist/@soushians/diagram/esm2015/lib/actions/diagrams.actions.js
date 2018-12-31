/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var DiagramsActionTypes = {
    GET_DIAGRAM: "[DIAGRAM] GET_DIAGRAM",
    GET_DIAGRAM_START: "[DIAGRAM] GET_DIAGRAM_START",
    GET_DIAGRAM_SUCCEED: "[DIAGRAM] GET_DIAGRAM_SUCCEED",
    GET_DIAGRAM_FAILED: "[DIAGRAM] GET_DIAGRAM_FAILED",
};
export { DiagramsActionTypes };
export class GetDiagrams {
    constructor() {
        this.type = DiagramsActionTypes.GET_DIAGRAM;
    }
}
if (false) {
    /** @type {?} */
    GetDiagrams.prototype.type;
}
export class GetDiagramsStart {
    constructor() {
        this.type = DiagramsActionTypes.GET_DIAGRAM_START;
    }
}
if (false) {
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
if (false) {
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
if (false) {
    /** @type {?} */
    GetDiagramsFailed.prototype.type;
}
/** @typedef {?} */
var DiagramsAction;
export { DiagramsAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbXMuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9hY3Rpb25zL2RpYWdyYW1zLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBS0MsYUFBYyx1QkFBdUI7SUFDckMsbUJBQW9CLDZCQUE2QjtJQUNqRCxxQkFBc0IsK0JBQStCO0lBQ3JELG9CQUFxQiw4QkFBOEI7OztBQUdwRCxNQUFNLE9BQU8sV0FBVzs7UUFDdkIsWUFBZ0IsbUJBQW1CLENBQUMsV0FBVyxDQUFDOztDQUNoRDs7Ozs7QUFDRCxNQUFNLE9BQU8sZ0JBQWdCOztRQUM1QixZQUFnQixtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQzs7Q0FDdEQ7Ozs7O0FBQ0QsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUU5QixZQUFtQixPQUFxQztRQUFyQyxZQUFPLEdBQVAsT0FBTyxDQUE4QjtRQUR4RCxZQUFnQixtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQztLQUNJO0NBQzVEOzs7Ozs7O0FBQ0QsTUFBTSxPQUFPLGlCQUFpQjs7UUFDN0IsWUFBZ0IsbUJBQW1CLENBQUMsa0JBQWtCLENBQUM7O0NBQ3ZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXREaWFncmFtc0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nZXQtZGlhZ3JhbXMtYXBpLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBEaWFncmFtc0FjdGlvblR5cGVzIHtcclxuXHRHRVRfRElBR1JBTSA9IFwiW0RJQUdSQU1dIEdFVF9ESUFHUkFNXCIsXHJcblx0R0VUX0RJQUdSQU1fU1RBUlQgPSBcIltESUFHUkFNXSBHRVRfRElBR1JBTV9TVEFSVFwiLFxyXG5cdEdFVF9ESUFHUkFNX1NVQ0NFRUQgPSBcIltESUFHUkFNXSBHRVRfRElBR1JBTV9TVUNDRUVEXCIsXHJcblx0R0VUX0RJQUdSQU1fRkFJTEVEID0gXCJbRElBR1JBTV0gR0VUX0RJQUdSQU1fRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldERpYWdyYW1zIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRGlhZ3JhbXNBY3Rpb25UeXBlcy5HRVRfRElBR1JBTTtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0RGlhZ3JhbXNTdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERpYWdyYW1zQWN0aW9uVHlwZXMuR0VUX0RJQUdSQU1fU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldERpYWdyYW1zU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERpYWdyYW1zQWN0aW9uVHlwZXMuR0VUX0RJQUdSQU1fU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0RGlhZ3JhbXNGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBEaWFncmFtc0FjdGlvblR5cGVzLkdFVF9ESUFHUkFNX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRGlhZ3JhbXNBY3Rpb24gPSBHZXREaWFncmFtcyB8IEdldERpYWdyYW1zU3RhcnQgfCBHZXREaWFncmFtc1N1Y2NlZWQgfCBHZXREaWFncmFtc0ZhaWxlZDtcclxuIl19