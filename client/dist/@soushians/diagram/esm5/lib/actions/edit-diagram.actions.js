/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var EditDiagramActionTypes = {
    EDIT_DIAGRAM: '[DIAGRAM][EDIT] EDIT_DIAGRAM',
    EDIT_DIAGRAM_START: '[DIAGRAM][EDIT] EDIT_DIAGRAM_START',
    EDIT_DIAGRAM_SUCCEED: '[DIAGRAM][EDIT] EDIT_DIAGRAM_SUCCEED',
    EDIT_DIAGRAM_FAILED: '[DIAGRAM][EDIT] EDIT_DIAGRAM_FAILED',
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
function EditDiagramAction_tsickle_Closure_declarations() {
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
function EditDiagramActionStart_tsickle_Closure_declarations() {
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
function EditDiagramActionSucceed_tsickle_Closure_declarations() {
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
function EditDiagramActionFailed_tsickle_Closure_declarations() {
    /** @type {?} */
    EditDiagramActionFailed.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1kaWFncmFtLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvYWN0aW9ucy9lZGl0LWRpYWdyYW0uYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBS2lCLDhCQUE4Qjt3QkFDeEIsb0NBQW9DOzBCQUNsQyxzQ0FBc0M7eUJBQ3ZDLHFDQUFxQzs7O0FBRzdELElBQUE7SUFFRSwyQkFBbUIsT0FBcUM7UUFBckMsWUFBTyxHQUFQLE9BQU8sQ0FBOEI7b0JBRHhDLHNCQUFzQixDQUFDLFlBQVk7S0FDVTs0QkFiL0Q7SUFjQyxDQUFBO0FBSEQsNkJBR0M7Ozs7Ozs7QUFDRCxJQUFBO0lBRUUsZ0NBQW1CLE9BQXFDO1FBQXJDLFlBQU8sR0FBUCxPQUFPLENBQThCO29CQUR4QyxzQkFBc0IsQ0FBQyxrQkFBa0I7S0FDSTtpQ0FqQi9EO0lBa0JDLENBQUE7QUFIRCxrQ0FHQzs7Ozs7OztBQUNELElBQUE7SUFFRSxrQ0FBbUIsT0FBcUM7UUFBckMsWUFBTyxHQUFQLE9BQU8sQ0FBOEI7b0JBRHhDLHNCQUFzQixDQUFDLG9CQUFvQjtLQUNFO21DQXJCL0Q7SUFzQkMsQ0FBQTtBQUhELG9DQUdDOzs7Ozs7O0FBQ0QsSUFBQTs7b0JBQ2tCLHNCQUFzQixDQUFDLG1CQUFtQjs7a0NBeEI1RDtJQXlCQyxDQUFBO0FBRkQsbUNBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBFZGl0RGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gRWRpdERpYWdyYW1BY3Rpb25UeXBlcyB7XHJcbiAgRURJVF9ESUFHUkFNID0gJ1tESUFHUkFNXVtFRElUXSBFRElUX0RJQUdSQU0nLFxyXG4gIEVESVRfRElBR1JBTV9TVEFSVCA9ICdbRElBR1JBTV1bRURJVF0gRURJVF9ESUFHUkFNX1NUQVJUJyxcclxuICBFRElUX0RJQUdSQU1fU1VDQ0VFRCA9ICdbRElBR1JBTV1bRURJVF0gRURJVF9ESUFHUkFNX1NVQ0NFRUQnLFxyXG4gIEVESVRfRElBR1JBTV9GQUlMRUQgPSAnW0RJQUdSQU1dW0VESVRdIEVESVRfRElBR1JBTV9GQUlMRUQnXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0RGlhZ3JhbUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdERpYWdyYW1BY3Rpb25TdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNX1NUQVJUO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdERpYWdyYW1BY3Rpb25TdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fU1VDQ0VFRDtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRWRpdERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXREaWFncmFtQWN0aW9uRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fRkFJTEVEO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgRWRpdERpYWdyYW1BY3Rpb25zID1cclxuICBFZGl0RGlhZ3JhbUFjdGlvblxyXG4gIHwgRWRpdERpYWdyYW1BY3Rpb25TdGFydFxyXG4gIHwgRWRpdERpYWdyYW1BY3Rpb25TdWNjZWVkXHJcbiAgfCBFZGl0RGlhZ3JhbUFjdGlvbkZhaWxlZDtcclxuIl19