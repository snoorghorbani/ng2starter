/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var DiagramsActionTypes = {
    GET_DIAGRAM: '[DIAGRAM] GET_DIAGRAM',
    GET_DIAGRAM_START: '[DIAGRAM] GET_DIAGRAM_START',
    GET_DIAGRAM_SUCCEED: '[DIAGRAM] GET_DIAGRAM_SUCCEED',
    GET_DIAGRAM_FAILED: '[DIAGRAM] GET_DIAGRAM_FAILED',
};
export { DiagramsActionTypes };
var GetDiagrams = /** @class */ (function () {
    function GetDiagrams() {
        this.type = DiagramsActionTypes.GET_DIAGRAM;
    }
    return GetDiagrams;
}());
export { GetDiagrams };
function GetDiagrams_tsickle_Closure_declarations() {
    /** @type {?} */
    GetDiagrams.prototype.type;
}
var GetDiagramsStart = /** @class */ (function () {
    function GetDiagramsStart() {
        this.type = DiagramsActionTypes.GET_DIAGRAM_START;
    }
    return GetDiagramsStart;
}());
export { GetDiagramsStart };
function GetDiagramsStart_tsickle_Closure_declarations() {
    /** @type {?} */
    GetDiagramsStart.prototype.type;
}
var GetDiagramsSucceed = /** @class */ (function () {
    function GetDiagramsSucceed(payload) {
        this.payload = payload;
        this.type = DiagramsActionTypes.GET_DIAGRAM_SUCCEED;
    }
    return GetDiagramsSucceed;
}());
export { GetDiagramsSucceed };
function GetDiagramsSucceed_tsickle_Closure_declarations() {
    /** @type {?} */
    GetDiagramsSucceed.prototype.type;
    /** @type {?} */
    GetDiagramsSucceed.prototype.payload;
}
var GetDiagramsFailed = /** @class */ (function () {
    function GetDiagramsFailed() {
        this.type = DiagramsActionTypes.GET_DIAGRAM_FAILED;
    }
    return GetDiagramsFailed;
}());
export { GetDiagramsFailed };
function GetDiagramsFailed_tsickle_Closure_declarations() {
    /** @type {?} */
    GetDiagramsFailed.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbXMuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9hY3Rpb25zL2RpYWdyYW1zLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2lCQUtnQix1QkFBdUI7dUJBQ2pCLDZCQUE2Qjt5QkFDM0IsK0JBQStCO3dCQUNoQyw4QkFBOEI7OztBQUdyRCxJQUFBOztvQkFDa0IsbUJBQW1CLENBQUMsV0FBVzs7c0JBWmpEO0lBYUMsQ0FBQTtBQUZELHVCQUVDOzs7OztBQUNELElBQUE7O29CQUNrQixtQkFBbUIsQ0FBQyxpQkFBaUI7OzJCQWZ2RDtJQWdCQyxDQUFBO0FBRkQsNEJBRUM7Ozs7O0FBQ0QsSUFBQTtJQUVFLDRCQUFtQixPQUFxQztRQUFyQyxZQUFPLEdBQVAsT0FBTyxDQUE4QjtvQkFEeEMsbUJBQW1CLENBQUMsbUJBQW1CO0tBQ007NkJBbkIvRDtJQW9CQyxDQUFBO0FBSEQsOEJBR0M7Ozs7Ozs7QUFDRCxJQUFBOztvQkFDa0IsbUJBQW1CLENBQUMsa0JBQWtCOzs0QkF0QnhEO0lBdUJDLENBQUE7QUFGRCw2QkFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmltcG9ydCB7IEdldERpYWdyYW1zQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBEaWFncmFtc0FjdGlvblR5cGVzIHtcclxuICBHRVRfRElBR1JBTSA9ICdbRElBR1JBTV0gR0VUX0RJQUdSQU0nLFxyXG4gIEdFVF9ESUFHUkFNX1NUQVJUID0gJ1tESUFHUkFNXSBHRVRfRElBR1JBTV9TVEFSVCcsXHJcbiAgR0VUX0RJQUdSQU1fU1VDQ0VFRCA9ICdbRElBR1JBTV0gR0VUX0RJQUdSQU1fU1VDQ0VFRCcsXHJcbiAgR0VUX0RJQUdSQU1fRkFJTEVEID0gJ1tESUFHUkFNXSBHRVRfRElBR1JBTV9GQUlMRUQnXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXREaWFncmFtcyBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IERpYWdyYW1zQWN0aW9uVHlwZXMuR0VUX0RJQUdSQU07XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldERpYWdyYW1zU3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBEaWFncmFtc0FjdGlvblR5cGVzLkdFVF9ESUFHUkFNX1NUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXREaWFncmFtc1N1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBEaWFncmFtc0FjdGlvblR5cGVzLkdFVF9ESUFHUkFNX1NVQ0NFRUQ7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2UpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXREaWFncmFtc0ZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IERpYWdyYW1zQWN0aW9uVHlwZXMuR0VUX0RJQUdSQU1fRkFJTEVEO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgRGlhZ3JhbXNBY3Rpb24gPVxyXG4gIEdldERpYWdyYW1zXHJcbiAgfCBHZXREaWFncmFtc1N0YXJ0XHJcbiAgfCBHZXREaWFncmFtc1N1Y2NlZWRcclxuICB8IEdldERpYWdyYW1zRmFpbGVkO1xyXG4iXX0=