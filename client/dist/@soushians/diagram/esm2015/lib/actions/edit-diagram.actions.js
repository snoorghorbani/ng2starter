/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const EditDiagramActionTypes = {
    EDIT_DIAGRAM: '[DIAGRAM][EDIT] EDIT_DIAGRAM',
    EDIT_DIAGRAM_START: '[DIAGRAM][EDIT] EDIT_DIAGRAM_START',
    EDIT_DIAGRAM_SUCCEED: '[DIAGRAM][EDIT] EDIT_DIAGRAM_SUCCEED',
    EDIT_DIAGRAM_FAILED: '[DIAGRAM][EDIT] EDIT_DIAGRAM_FAILED',
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
function EditDiagramAction_tsickle_Closure_declarations() {
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
function EditDiagramActionStart_tsickle_Closure_declarations() {
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
function EditDiagramActionSucceed_tsickle_Closure_declarations() {
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
function EditDiagramActionFailed_tsickle_Closure_declarations() {
    /** @type {?} */
    EditDiagramActionFailed.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1kaWFncmFtLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvYWN0aW9ucy9lZGl0LWRpYWdyYW0uYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBS2lCLDhCQUE4Qjt3QkFDeEIsb0NBQW9DOzBCQUNsQyxzQ0FBc0M7eUJBQ3ZDLHFDQUFxQzs7O0FBRzdELE1BQU07Ozs7SUFFSixZQUFtQixPQUFxQztRQUFyQyxZQUFPLEdBQVAsT0FBTyxDQUE4QjtvQkFEeEMsc0JBQXNCLENBQUMsWUFBWTtLQUNVO0NBQzlEOzs7Ozs7O0FBQ0QsTUFBTTs7OztJQUVKLFlBQW1CLE9BQXFDO1FBQXJDLFlBQU8sR0FBUCxPQUFPLENBQThCO29CQUR4QyxzQkFBc0IsQ0FBQyxrQkFBa0I7S0FDSTtDQUM5RDs7Ozs7OztBQUNELE1BQU07Ozs7SUFFSixZQUFtQixPQUFxQztRQUFyQyxZQUFPLEdBQVAsT0FBTyxDQUE4QjtvQkFEeEMsc0JBQXNCLENBQUMsb0JBQW9CO0tBQ0U7Q0FDOUQ7Ozs7Ozs7QUFDRCxNQUFNOztvQkFDWSxzQkFBc0IsQ0FBQyxtQkFBbUI7O0NBQzNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgRWRpdERpYWdyYW1BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEVkaXREaWFncmFtQWN0aW9uVHlwZXMge1xyXG4gIEVESVRfRElBR1JBTSA9ICdbRElBR1JBTV1bRURJVF0gRURJVF9ESUFHUkFNJyxcclxuICBFRElUX0RJQUdSQU1fU1RBUlQgPSAnW0RJQUdSQU1dW0VESVRdIEVESVRfRElBR1JBTV9TVEFSVCcsXHJcbiAgRURJVF9ESUFHUkFNX1NVQ0NFRUQgPSAnW0RJQUdSQU1dW0VESVRdIEVESVRfRElBR1JBTV9TVUNDRUVEJyxcclxuICBFRElUX0RJQUdSQU1fRkFJTEVEID0gJ1tESUFHUkFNXVtFRElUXSBFRElUX0RJQUdSQU1fRkFJTEVEJ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdERpYWdyYW1BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLkVESVRfRElBR1JBTTtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRWRpdERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXREaWFncmFtQWN0aW9uU3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLkVESVRfRElBR1JBTV9TVEFSVDtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRWRpdERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXREaWFncmFtQWN0aW9uU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNX1NVQ0NFRUQ7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVkaXREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2UpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0RGlhZ3JhbUFjdGlvbkZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNX0ZBSUxFRDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB0eXBlIEVkaXREaWFncmFtQWN0aW9ucyA9XHJcbiAgRWRpdERpYWdyYW1BY3Rpb25cclxuICB8IEVkaXREaWFncmFtQWN0aW9uU3RhcnRcclxuICB8IEVkaXREaWFncmFtQWN0aW9uU3VjY2VlZFxyXG4gIHwgRWRpdERpYWdyYW1BY3Rpb25GYWlsZWQ7XHJcbiJdfQ==