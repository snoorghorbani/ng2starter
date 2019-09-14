/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const EditDiagramActionTypes = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1kaWFncmFtLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvYWN0aW9ucy9lZGl0LWRpYWdyYW0uYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLQyxjQUFlLDhCQUE4QjtJQUM3QyxvQkFBcUIsb0NBQW9DO0lBQ3pELHNCQUF1QixzQ0FBc0M7SUFDN0QscUJBQXNCLHFDQUFxQzs7O0FBRzVELE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFFN0IsWUFBbUIsT0FBcUM7UUFBckMsWUFBTyxHQUFQLE9BQU8sQ0FBOEI7UUFEL0MsU0FBSSxHQUFHLHNCQUFzQixDQUFDLFlBQVksQ0FBQztJQUNPLENBQUM7Q0FDNUQ7OztJQUZBLGlDQUFvRDs7SUFDeEMsb0NBQTRDOztBQUV6RCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBRWxDLFlBQW1CLE9BQXFDO1FBQXJDLFlBQU8sR0FBUCxPQUFPLENBQThCO1FBRC9DLFNBQUksR0FBRyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUNDLENBQUM7Q0FDNUQ7OztJQUZBLHNDQUEwRDs7SUFDOUMseUNBQTRDOztBQUV6RCxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBRXBDLFlBQW1CLE9BQXFDO1FBQXJDLFlBQU8sR0FBUCxPQUFPLENBQThCO1FBRC9DLFNBQUksR0FBRyxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQztJQUNELENBQUM7Q0FDNUQ7OztJQUZBLHdDQUE0RDs7SUFDaEQsMkNBQTRDOztBQUV6RCxNQUFNLE9BQU8sdUJBQXVCO0lBQXBDO1FBQ1UsU0FBSSxHQUFHLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDO0lBQzVELENBQUM7Q0FBQTs7O0lBREEsdUNBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBFZGl0RGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9lZGl0LWRpYWdyYW0tYXBpLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzIHtcclxuXHRFRElUX0RJQUdSQU0gPSBcIltESUFHUkFNXVtFRElUXSBFRElUX0RJQUdSQU1cIixcclxuXHRFRElUX0RJQUdSQU1fU1RBUlQgPSBcIltESUFHUkFNXVtFRElUXSBFRElUX0RJQUdSQU1fU1RBUlRcIixcclxuXHRFRElUX0RJQUdSQU1fU1VDQ0VFRCA9IFwiW0RJQUdSQU1dW0VESVRdIEVESVRfRElBR1JBTV9TVUNDRUVEXCIsXHJcblx0RURJVF9ESUFHUkFNX0ZBSUxFRCA9IFwiW0RJQUdSQU1dW0VESVRdIEVESVRfRElBR1JBTV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdERpYWdyYW1BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLkVESVRfRElBR1JBTTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRWRpdERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdERpYWdyYW1BY3Rpb25TdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0RGlhZ3JhbUFjdGlvblN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLkVESVRfRElBR1JBTV9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0RGlhZ3JhbUFjdGlvbkZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRWRpdERpYWdyYW1BY3Rpb25zID1cclxuXHR8IEVkaXREaWFncmFtQWN0aW9uXHJcblx0fCBFZGl0RGlhZ3JhbUFjdGlvblN0YXJ0XHJcblx0fCBFZGl0RGlhZ3JhbUFjdGlvblN1Y2NlZWRcclxuXHR8IEVkaXREaWFncmFtQWN0aW9uRmFpbGVkO1xyXG4iXX0=