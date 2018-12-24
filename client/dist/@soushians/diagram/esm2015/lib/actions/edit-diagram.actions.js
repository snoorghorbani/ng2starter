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
export class EditDiagramAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = EditDiagramActionTypes.EDIT_DIAGRAM;
    }
}
if (false) {
    /** @type {?} */
    EditDiagramAction.prototype.type;
    /** @type {?} */
    EditDiagramAction.prototype.payload;
}
export class EditDiagramActionStart {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = EditDiagramActionTypes.EDIT_DIAGRAM_START;
    }
}
if (false) {
    /** @type {?} */
    EditDiagramActionStart.prototype.type;
    /** @type {?} */
    EditDiagramActionStart.prototype.payload;
}
export class EditDiagramActionSucceed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = EditDiagramActionTypes.EDIT_DIAGRAM_SUCCEED;
    }
}
if (false) {
    /** @type {?} */
    EditDiagramActionSucceed.prototype.type;
    /** @type {?} */
    EditDiagramActionSucceed.prototype.payload;
}
export class EditDiagramActionFailed {
    constructor() {
        this.type = EditDiagramActionTypes.EDIT_DIAGRAM_FAILED;
    }
}
if (false) {
    /** @type {?} */
    EditDiagramActionFailed.prototype.type;
}
/** @typedef {?} */
var EditDiagramActions;
export { EditDiagramActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1kaWFncmFtLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvYWN0aW9ucy9lZGl0LWRpYWdyYW0uYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLQyxjQUFlLDhCQUE4QjtJQUM3QyxvQkFBcUIsb0NBQW9DO0lBQ3pELHNCQUF1QixzQ0FBc0M7SUFDN0QscUJBQXNCLHFDQUFxQzs7O0FBRzVELE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFFN0IsWUFBbUIsT0FBcUM7UUFBckMsWUFBTyxHQUFQLE9BQU8sQ0FBOEI7UUFEeEQsWUFBZ0Isc0JBQXNCLENBQUMsWUFBWSxDQUFDO0tBQ1E7Q0FDNUQ7Ozs7Ozs7QUFDRCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBRWxDLFlBQW1CLE9BQXFDO1FBQXJDLFlBQU8sR0FBUCxPQUFPLENBQThCO1FBRHhELFlBQWdCLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDO0tBQ0U7Q0FDNUQ7Ozs7Ozs7QUFDRCxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBRXBDLFlBQW1CLE9BQXFDO1FBQXJDLFlBQU8sR0FBUCxPQUFPLENBQThCO1FBRHhELFlBQWdCLHNCQUFzQixDQUFDLG9CQUFvQixDQUFDO0tBQ0E7Q0FDNUQ7Ozs7Ozs7QUFDRCxNQUFNLE9BQU8sdUJBQXVCOztRQUNuQyxZQUFnQixzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQzs7Q0FDM0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEVkaXREaWFncmFtQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2VkaXQtZGlhZ3JhbS1hcGkubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEVkaXREaWFncmFtQWN0aW9uVHlwZXMge1xyXG5cdEVESVRfRElBR1JBTSA9IFwiW0RJQUdSQU1dW0VESVRdIEVESVRfRElBR1JBTVwiLFxyXG5cdEVESVRfRElBR1JBTV9TVEFSVCA9IFwiW0RJQUdSQU1dW0VESVRdIEVESVRfRElBR1JBTV9TVEFSVFwiLFxyXG5cdEVESVRfRElBR1JBTV9TVUNDRUVEID0gXCJbRElBR1JBTV1bRURJVF0gRURJVF9ESUFHUkFNX1NVQ0NFRURcIixcclxuXHRFRElUX0RJQUdSQU1fRkFJTEVEID0gXCJbRElBR1JBTV1bRURJVF0gRURJVF9ESUFHUkFNX0ZBSUxFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0RGlhZ3JhbUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0RGlhZ3JhbUFjdGlvblN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVkaXREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2UpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXREaWFncmFtQWN0aW9uU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVkaXREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2UpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXREaWFncmFtQWN0aW9uRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBFZGl0RGlhZ3JhbUFjdGlvbnMgPVxyXG5cdHwgRWRpdERpYWdyYW1BY3Rpb25cclxuXHR8IEVkaXREaWFncmFtQWN0aW9uU3RhcnRcclxuXHR8IEVkaXREaWFncmFtQWN0aW9uU3VjY2VlZFxyXG5cdHwgRWRpdERpYWdyYW1BY3Rpb25GYWlsZWQ7XHJcbiJdfQ==