/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const DiagramsActionTypes = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbXMuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9hY3Rpb25zL2RpYWdyYW1zLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2lCQUtlLHVCQUF1Qjt1QkFDakIsNkJBQTZCO3lCQUMzQiwrQkFBK0I7d0JBQ2hDLDhCQUE4Qjs7O0FBR3BELE1BQU07O29CQUNXLG1CQUFtQixDQUFDLFdBQVc7O0NBQy9DOzs7OztBQUNELE1BQU07O29CQUNXLG1CQUFtQixDQUFDLGlCQUFpQjs7Q0FDckQ7Ozs7O0FBQ0QsTUFBTTs7OztJQUVMLFlBQW1CLE9BQXFDO1FBQXJDLFlBQU8sR0FBUCxPQUFPLENBQThCO29CQUR4QyxtQkFBbUIsQ0FBQyxtQkFBbUI7S0FDSztDQUM1RDs7Ozs7OztBQUNELE1BQU07O29CQUNXLG1CQUFtQixDQUFDLGtCQUFrQjs7Q0FDdEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEdldERpYWdyYW1zQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dldC1kaWFncmFtcy1hcGkubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIERpYWdyYW1zQWN0aW9uVHlwZXMge1xyXG5cdEdFVF9ESUFHUkFNID0gXCJbRElBR1JBTV0gR0VUX0RJQUdSQU1cIixcclxuXHRHRVRfRElBR1JBTV9TVEFSVCA9IFwiW0RJQUdSQU1dIEdFVF9ESUFHUkFNX1NUQVJUXCIsXHJcblx0R0VUX0RJQUdSQU1fU1VDQ0VFRCA9IFwiW0RJQUdSQU1dIEdFVF9ESUFHUkFNX1NVQ0NFRURcIixcclxuXHRHRVRfRElBR1JBTV9GQUlMRUQgPSBcIltESUFHUkFNXSBHRVRfRElBR1JBTV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0RGlhZ3JhbXMgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBEaWFncmFtc0FjdGlvblR5cGVzLkdFVF9ESUFHUkFNO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXREaWFncmFtc1N0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRGlhZ3JhbXNBY3Rpb25UeXBlcy5HRVRfRElBR1JBTV9TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0RGlhZ3JhbXNTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRGlhZ3JhbXNBY3Rpb25UeXBlcy5HRVRfRElBR1JBTV9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHZXREaWFncmFtc0FwaU1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXREaWFncmFtc0ZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERpYWdyYW1zQWN0aW9uVHlwZXMuR0VUX0RJQUdSQU1fRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBEaWFncmFtc0FjdGlvbiA9IEdldERpYWdyYW1zIHwgR2V0RGlhZ3JhbXNTdGFydCB8IEdldERpYWdyYW1zU3VjY2VlZCB8IEdldERpYWdyYW1zRmFpbGVkO1xyXG4iXX0=