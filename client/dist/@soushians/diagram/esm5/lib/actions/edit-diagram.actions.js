/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var EditDiagramActionTypes = {
    EDIT_DIAGRAM: "[DIAGRAM][EDIT] EDIT_DIAGRAM",
    EDIT_DIAGRAM_START: "[DIAGRAM][EDIT] EDIT_DIAGRAM_START",
    EDIT_DIAGRAM_SUCCEED: "[DIAGRAM][EDIT] EDIT_DIAGRAM_SUCCEED",
    EDIT_DIAGRAM_FAILED: "[DIAGRAM][EDIT] EDIT_DIAGRAM_FAILED",
};
export { EditDiagramActionTypes };
var EditDiagramAction = /** @class */ (function () {
    function EditDiagramAction(payload) {
        this.payload = payload;
        this.type = EditDiagramActionTypes.EDIT_DIAGRAM;
    }
    return EditDiagramAction;
}());
export { EditDiagramAction };
if (false) {
    /** @type {?} */
    EditDiagramAction.prototype.type;
    /** @type {?} */
    EditDiagramAction.prototype.payload;
}
var EditDiagramActionStart = /** @class */ (function () {
    function EditDiagramActionStart(payload) {
        this.payload = payload;
        this.type = EditDiagramActionTypes.EDIT_DIAGRAM_START;
    }
    return EditDiagramActionStart;
}());
export { EditDiagramActionStart };
if (false) {
    /** @type {?} */
    EditDiagramActionStart.prototype.type;
    /** @type {?} */
    EditDiagramActionStart.prototype.payload;
}
var EditDiagramActionSucceed = /** @class */ (function () {
    function EditDiagramActionSucceed(payload) {
        this.payload = payload;
        this.type = EditDiagramActionTypes.EDIT_DIAGRAM_SUCCEED;
    }
    return EditDiagramActionSucceed;
}());
export { EditDiagramActionSucceed };
if (false) {
    /** @type {?} */
    EditDiagramActionSucceed.prototype.type;
    /** @type {?} */
    EditDiagramActionSucceed.prototype.payload;
}
var EditDiagramActionFailed = /** @class */ (function () {
    function EditDiagramActionFailed() {
        this.type = EditDiagramActionTypes.EDIT_DIAGRAM_FAILED;
    }
    return EditDiagramActionFailed;
}());
export { EditDiagramActionFailed };
if (false) {
    /** @type {?} */
    EditDiagramActionFailed.prototype.type;
}
/** @typedef {?} */
var EditDiagramActions;
export { EditDiagramActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1kaWFncmFtLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvYWN0aW9ucy9lZGl0LWRpYWdyYW0uYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLQyxjQUFlLDhCQUE4QjtJQUM3QyxvQkFBcUIsb0NBQW9DO0lBQ3pELHNCQUF1QixzQ0FBc0M7SUFDN0QscUJBQXNCLHFDQUFxQzs7O0FBRzVELElBQUE7SUFFQywyQkFBbUIsT0FBcUM7UUFBckMsWUFBTyxHQUFQLE9BQU8sQ0FBOEI7UUFEeEQsWUFBZ0Isc0JBQXNCLENBQUMsWUFBWSxDQUFDO0tBQ1E7NEJBYjdEO0lBY0MsQ0FBQTtBQUhELDZCQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVDLGdDQUFtQixPQUFxQztRQUFyQyxZQUFPLEdBQVAsT0FBTyxDQUE4QjtRQUR4RCxZQUFnQixzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQztLQUNFO2lDQWpCN0Q7SUFrQkMsQ0FBQTtBQUhELGtDQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVDLGtDQUFtQixPQUFxQztRQUFyQyxZQUFPLEdBQVAsT0FBTyxDQUE4QjtRQUR4RCxZQUFnQixzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQztLQUNBO21DQXJCN0Q7SUFzQkMsQ0FBQTtBQUhELG9DQUdDOzs7Ozs7O0FBQ0QsSUFBQTs7UUFDQyxZQUFnQixzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQzs7a0NBeEI1RDtJQXlCQyxDQUFBO0FBRkQsbUNBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEVkaXREaWFncmFtQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2VkaXQtZGlhZ3JhbS1hcGkubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEVkaXREaWFncmFtQWN0aW9uVHlwZXMge1xyXG5cdEVESVRfRElBR1JBTSA9IFwiW0RJQUdSQU1dW0VESVRdIEVESVRfRElBR1JBTVwiLFxyXG5cdEVESVRfRElBR1JBTV9TVEFSVCA9IFwiW0RJQUdSQU1dW0VESVRdIEVESVRfRElBR1JBTV9TVEFSVFwiLFxyXG5cdEVESVRfRElBR1JBTV9TVUNDRUVEID0gXCJbRElBR1JBTV1bRURJVF0gRURJVF9ESUFHUkFNX1NVQ0NFRURcIixcclxuXHRFRElUX0RJQUdSQU1fRkFJTEVEID0gXCJbRElBR1JBTV1bRURJVF0gRURJVF9ESUFHUkFNX0ZBSUxFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0RGlhZ3JhbUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0RGlhZ3JhbUFjdGlvblN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVkaXREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2UpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXREaWFncmFtQWN0aW9uU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVkaXREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2UpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXREaWFncmFtQWN0aW9uRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBFZGl0RGlhZ3JhbUFjdGlvbnMgPVxyXG5cdHwgRWRpdERpYWdyYW1BY3Rpb25cclxuXHR8IEVkaXREaWFncmFtQWN0aW9uU3RhcnRcclxuXHR8IEVkaXREaWFncmFtQWN0aW9uU3VjY2VlZFxyXG5cdHwgRWRpdERpYWdyYW1BY3Rpb25GYWlsZWQ7XHJcbiJdfQ==