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
var GetDiagrams = /** @class */ (function () {
    function GetDiagrams() {
        this.type = DiagramsActionTypes.GET_DIAGRAM;
    }
    return GetDiagrams;
}());
export { GetDiagrams };
if (false) {
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
if (false) {
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
if (false) {
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
if (false) {
    /** @type {?} */
    GetDiagramsFailed.prototype.type;
}
/** @typedef {?} */
var DiagramsAction;
export { DiagramsAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbXMuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9hY3Rpb25zL2RpYWdyYW1zLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBS0MsYUFBYyx1QkFBdUI7SUFDckMsbUJBQW9CLDZCQUE2QjtJQUNqRCxxQkFBc0IsK0JBQStCO0lBQ3JELG9CQUFxQiw4QkFBOEI7OztBQUdwRCxJQUFBOztvQkFDaUIsbUJBQW1CLENBQUMsV0FBVzs7c0JBWmhEO0lBYUMsQ0FBQTtBQUZELHVCQUVDOzs7OztBQUNELElBQUE7O29CQUNpQixtQkFBbUIsQ0FBQyxpQkFBaUI7OzJCQWZ0RDtJQWdCQyxDQUFBO0FBRkQsNEJBRUM7Ozs7O0FBQ0QsSUFBQTtJQUVDLDRCQUFtQixPQUFxQztRQUFyQyxZQUFPLEdBQVAsT0FBTyxDQUE4QjtvQkFEeEMsbUJBQW1CLENBQUMsbUJBQW1CO0tBQ0s7NkJBbkI3RDtJQW9CQyxDQUFBO0FBSEQsOEJBR0M7Ozs7Ozs7QUFDRCxJQUFBOztvQkFDaUIsbUJBQW1CLENBQUMsa0JBQWtCOzs0QkF0QnZEO0lBdUJDLENBQUE7QUFGRCw2QkFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0RGlhZ3JhbXNBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ2V0LWRpYWdyYW1zLWFwaS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gRGlhZ3JhbXNBY3Rpb25UeXBlcyB7XHJcblx0R0VUX0RJQUdSQU0gPSBcIltESUFHUkFNXSBHRVRfRElBR1JBTVwiLFxyXG5cdEdFVF9ESUFHUkFNX1NUQVJUID0gXCJbRElBR1JBTV0gR0VUX0RJQUdSQU1fU1RBUlRcIixcclxuXHRHRVRfRElBR1JBTV9TVUNDRUVEID0gXCJbRElBR1JBTV0gR0VUX0RJQUdSQU1fU1VDQ0VFRFwiLFxyXG5cdEdFVF9ESUFHUkFNX0ZBSUxFRCA9IFwiW0RJQUdSQU1dIEdFVF9ESUFHUkFNX0ZBSUxFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXREaWFncmFtcyBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERpYWdyYW1zQWN0aW9uVHlwZXMuR0VUX0RJQUdSQU07XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldERpYWdyYW1zU3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBEaWFncmFtc0FjdGlvblR5cGVzLkdFVF9ESUFHUkFNX1NUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXREaWFncmFtc1N1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBEaWFncmFtc0FjdGlvblR5cGVzLkdFVF9ESUFHUkFNX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2UpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldERpYWdyYW1zRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRGlhZ3JhbXNBY3Rpb25UeXBlcy5HRVRfRElBR1JBTV9GQUlMRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIERpYWdyYW1zQWN0aW9uID0gR2V0RGlhZ3JhbXMgfCBHZXREaWFncmFtc1N0YXJ0IHwgR2V0RGlhZ3JhbXNTdWNjZWVkIHwgR2V0RGlhZ3JhbXNGYWlsZWQ7XHJcbiJdfQ==