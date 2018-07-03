/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var AddDiagramActionTypes = {
    ADD_DIAGRAM: '[DIAGRAM][ADD] ADD_DIAGRAM',
    ADD_DIAGRAM_START: '[DIAGRAM][ADD] ADD_DIAGRAM_START',
    ADD_DIAGRAM_SUCCEED: '[DIAGRAM][ADD] ADD_DIAGRAM_SUCCEED',
    DIAGRAM_CONFIG_CHANGED: '[DIAGRAM][ADD] DIAGRAM_CONFIG_CHANGED',
    ADD_DIAGRAM_FAILED: '[DIAGRAM][ADD] ADD_DIAGRAM_FAILED',
    STRUCTURE_DEFINITION_START: '[DIAGRAM][ADD] STRUCTURE_DEFINITION_START',
    HAVE_ENDPOINT: '[DIAGRAM][ADD] HAVE_STRUCTURE',
    DATA_LOADED: '[DIAGRAM][ADD] DATA_LOADED',
    STRUCTURE_DEFINITION_END: '[DIAGRAM][ADD] STRUCTURE_DEFINITION_END',
    COLUMNS_MAPPING_CHANGED: '[DIAGRAM][ADD] COLUMNS_MAPPING_CHANGED',
    DATA_CALCULATED: '[DIAGRAM][ADD] DATA_CALCULATED',
    COLUMN_ADDED: '[DIAGRAM][ADD] COLUMN_ADDED',
    GENERATE_DIAGRAM: '[DIAGRAM][ADD] GENERATE_DIAGRAM',
};
export { AddDiagramActionTypes };
var AddDiagramAction = /** @class */ (function () {
    function AddDiagramAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.ADD_DIAGRAM;
    }
    return AddDiagramAction;
}());
export { AddDiagramAction };
function AddDiagramAction_tsickle_Closure_declarations() {
    /** @type {?} */
    AddDiagramAction.prototype.type;
    /** @type {?} */
    AddDiagramAction.prototype.payload;
}
var AddDiagramActionStart = /** @class */ (function () {
    function AddDiagramActionStart(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.ADD_DIAGRAM_START;
    }
    return AddDiagramActionStart;
}());
export { AddDiagramActionStart };
function AddDiagramActionStart_tsickle_Closure_declarations() {
    /** @type {?} */
    AddDiagramActionStart.prototype.type;
    /** @type {?} */
    AddDiagramActionStart.prototype.payload;
}
var AddDiagramActionSucceed = /** @class */ (function () {
    function AddDiagramActionSucceed(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED;
    }
    return AddDiagramActionSucceed;
}());
export { AddDiagramActionSucceed };
function AddDiagramActionSucceed_tsickle_Closure_declarations() {
    /** @type {?} */
    AddDiagramActionSucceed.prototype.type;
    /** @type {?} */
    AddDiagramActionSucceed.prototype.payload;
}
var AddDiagramActionFailed = /** @class */ (function () {
    function AddDiagramActionFailed() {
        this.type = AddDiagramActionTypes.ADD_DIAGRAM_FAILED;
    }
    return AddDiagramActionFailed;
}());
export { AddDiagramActionFailed };
function AddDiagramActionFailed_tsickle_Closure_declarations() {
    /** @type {?} */
    AddDiagramActionFailed.prototype.type;
}
var DiagramConfigChangedAction = /** @class */ (function () {
    function DiagramConfigChangedAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.DIAGRAM_CONFIG_CHANGED;
    }
    return DiagramConfigChangedAction;
}());
export { DiagramConfigChangedAction };
function DiagramConfigChangedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    DiagramConfigChangedAction.prototype.type;
    /** @type {?} */
    DiagramConfigChangedAction.prototype.payload;
}
var HaveEndpointAction = /** @class */ (function () {
    function HaveEndpointAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.HAVE_ENDPOINT;
    }
    return HaveEndpointAction;
}());
export { HaveEndpointAction };
function HaveEndpointAction_tsickle_Closure_declarations() {
    /** @type {?} */
    HaveEndpointAction.prototype.type;
    /** @type {?} */
    HaveEndpointAction.prototype.payload;
}
var DataLoadedAction = /** @class */ (function () {
    function DataLoadedAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.DATA_LOADED;
    }
    return DataLoadedAction;
}());
export { DataLoadedAction };
function DataLoadedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    DataLoadedAction.prototype.type;
    /** @type {?} */
    DataLoadedAction.prototype.payload;
}
var StructureDefinitionStartAction = /** @class */ (function () {
    function StructureDefinitionStartAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.STRUCTURE_DEFINITION_START;
    }
    return StructureDefinitionStartAction;
}());
export { StructureDefinitionStartAction };
function StructureDefinitionStartAction_tsickle_Closure_declarations() {
    /** @type {?} */
    StructureDefinitionStartAction.prototype.type;
    /** @type {?} */
    StructureDefinitionStartAction.prototype.payload;
}
var StructureDefinitionFinishedAction = /** @class */ (function () {
    function StructureDefinitionFinishedAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.STRUCTURE_DEFINITION_END;
    }
    return StructureDefinitionFinishedAction;
}());
export { StructureDefinitionFinishedAction };
function StructureDefinitionFinishedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    StructureDefinitionFinishedAction.prototype.type;
    /** @type {?} */
    StructureDefinitionFinishedAction.prototype.payload;
}
var ColumnsMappingChangedAction = /** @class */ (function () {
    function ColumnsMappingChangedAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.COLUMNS_MAPPING_CHANGED;
    }
    return ColumnsMappingChangedAction;
}());
export { ColumnsMappingChangedAction };
function ColumnsMappingChangedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    ColumnsMappingChangedAction.prototype.type;
    /** @type {?} */
    ColumnsMappingChangedAction.prototype.payload;
}
var DataCalculatedAction = /** @class */ (function () {
    function DataCalculatedAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.DATA_CALCULATED;
    }
    return DataCalculatedAction;
}());
export { DataCalculatedAction };
function DataCalculatedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    DataCalculatedAction.prototype.type;
    /** @type {?} */
    DataCalculatedAction.prototype.payload;
}
var GenerateDiagramAction = /** @class */ (function () {
    function GenerateDiagramAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.GENERATE_DIAGRAM;
    }
    return GenerateDiagramAction;
}());
export { GenerateDiagramAction };
function GenerateDiagramAction_tsickle_Closure_declarations() {
    /** @type {?} */
    GenerateDiagramAction.prototype.type;
    /** @type {?} */
    GenerateDiagramAction.prototype.payload;
}
var ColumnAdded = /** @class */ (function () {
    function ColumnAdded() {
        this.type = AddDiagramActionTypes.COLUMN_ADDED;
    }
    return ColumnAdded;
}());
export { ColumnAdded };
function ColumnAdded_tsickle_Closure_declarations() {
    /** @type {?} */
    ColumnAdded.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRpYWdyYW0uYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9hY3Rpb25zL2FkZC1kaWFncmFtLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2lCQUtnQiw0QkFBNEI7dUJBQ3RCLGtDQUFrQzt5QkFDaEMsb0NBQW9DOzRCQUNqQyx1Q0FBdUM7d0JBQzNDLG1DQUFtQztnQ0FDM0IsMkNBQTJDO21CQUN4RCwrQkFBK0I7aUJBQ2pDLDRCQUE0Qjs4QkFDZix5Q0FBeUM7NkJBQzFDLHdDQUF3QztxQkFDaEQsZ0NBQWdDO2tCQUNuQyw2QkFBNkI7c0JBQ3pCLGlDQUFpQzs7O0FBR3RELElBQUE7SUFFRSwwQkFBbUIsT0FBb0M7UUFBcEMsWUFBTyxHQUFQLE9BQU8sQ0FBNkI7b0JBRHZDLHFCQUFxQixDQUFDLFdBQVc7S0FDVzsyQkF0QjlEO0lBdUJDLENBQUE7QUFIRCw0QkFHQzs7Ozs7OztBQUNELElBQUE7SUFFRSwrQkFBbUIsT0FBb0M7UUFBcEMsWUFBTyxHQUFQLE9BQU8sQ0FBNkI7b0JBRHZDLHFCQUFxQixDQUFDLGlCQUFpQjtLQUNLO2dDQTFCOUQ7SUEyQkMsQ0FBQTtBQUhELGlDQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVFLGlDQUFtQixPQUFvQztRQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUE2QjtvQkFEdkMscUJBQXFCLENBQUMsbUJBQW1CO0tBQ0c7a0NBOUI5RDtJQStCQyxDQUFBO0FBSEQsbUNBR0M7Ozs7Ozs7QUFDRCxJQUFBOztvQkFDa0IscUJBQXFCLENBQUMsa0JBQWtCOztpQ0FqQzFEO0lBa0NDLENBQUE7QUFGRCxrQ0FFQzs7Ozs7QUFDRCxJQUFBO0lBRUUsb0NBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO29CQURmLHFCQUFxQixDQUFDLHNCQUFzQjtLQUN4QjtxQ0FyQ3RDO0lBc0NDLENBQUE7QUFIRCxzQ0FHQzs7Ozs7OztBQUNELElBQUE7SUFFRSw0QkFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7b0JBRGYscUJBQXFCLENBQUMsYUFBYTtLQUNmOzZCQXpDdEM7SUEwQ0MsQ0FBQTtBQUhELDhCQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVFLDBCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztvQkFEZixxQkFBcUIsQ0FBQyxXQUFXO0tBQ2I7MkJBN0N0QztJQThDQyxDQUFBO0FBSEQsNEJBR0M7Ozs7Ozs7QUFDRCxJQUFBO0lBRUUsd0NBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO29CQURmLHFCQUFxQixDQUFDLDBCQUEwQjtLQUM1Qjt5Q0FqRHRDO0lBa0RDLENBQUE7QUFIRCwwQ0FHQzs7Ozs7OztBQUNELElBQUE7SUFFRSwyQ0FBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7b0JBRGYscUJBQXFCLENBQUMsd0JBQXdCO0tBQzFCOzRDQXJEdEM7SUFzREMsQ0FBQTtBQUhELDZDQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVFLHFDQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztvQkFEZixxQkFBcUIsQ0FBQyx1QkFBdUI7S0FDekI7c0NBekR0QztJQTBEQyxDQUFBO0FBSEQsdUNBR0M7Ozs7Ozs7QUFDRCxJQUFBO0lBRUUsOEJBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO29CQURmLHFCQUFxQixDQUFDLGVBQWU7S0FDakI7K0JBN0R0QztJQThEQyxDQUFBO0FBSEQsZ0NBR0M7Ozs7Ozs7QUFDRCxJQUFBO0lBRUUsK0JBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO29CQURmLHFCQUFxQixDQUFDLGdCQUFnQjtLQUNsQjtnQ0FqRXRDO0lBa0VDLENBQUE7QUFIRCxpQ0FHQzs7Ozs7OztBQUVELElBQUE7O29CQUNrQixxQkFBcUIsQ0FBQyxZQUFZOztzQkFyRXBEO0lBc0VDLENBQUE7QUFGRCx1QkFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmltcG9ydCB7IEFkZERpYWdyYW1BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEFkZERpYWdyYW1BY3Rpb25UeXBlcyB7XHJcbiAgQUREX0RJQUdSQU0gPSAnW0RJQUdSQU1dW0FERF0gQUREX0RJQUdSQU0nLFxyXG4gIEFERF9ESUFHUkFNX1NUQVJUID0gJ1tESUFHUkFNXVtBRERdIEFERF9ESUFHUkFNX1NUQVJUJyxcclxuICBBRERfRElBR1JBTV9TVUNDRUVEID0gJ1tESUFHUkFNXVtBRERdIEFERF9ESUFHUkFNX1NVQ0NFRUQnLFxyXG4gIERJQUdSQU1fQ09ORklHX0NIQU5HRUQgPSAnW0RJQUdSQU1dW0FERF0gRElBR1JBTV9DT05GSUdfQ0hBTkdFRCcsXHJcbiAgQUREX0RJQUdSQU1fRkFJTEVEID0gJ1tESUFHUkFNXVtBRERdIEFERF9ESUFHUkFNX0ZBSUxFRCcsXHJcbiAgU1RSVUNUVVJFX0RFRklOSVRJT05fU1RBUlQgPSAnW0RJQUdSQU1dW0FERF0gU1RSVUNUVVJFX0RFRklOSVRJT05fU1RBUlQnLFxyXG4gIEhBVkVfRU5EUE9JTlQgPSAnW0RJQUdSQU1dW0FERF0gSEFWRV9TVFJVQ1RVUkUnLFxyXG4gIERBVEFfTE9BREVEID0gJ1tESUFHUkFNXVtBRERdIERBVEFfTE9BREVEJyxcclxuICBTVFJVQ1RVUkVfREVGSU5JVElPTl9FTkQgPSAnW0RJQUdSQU1dW0FERF0gU1RSVUNUVVJFX0RFRklOSVRJT05fRU5EJyxcclxuICBDT0xVTU5TX01BUFBJTkdfQ0hBTkdFRCA9ICdbRElBR1JBTV1bQUREXSBDT0xVTU5TX01BUFBJTkdfQ0hBTkdFRCcsXHJcbiAgREFUQV9DQUxDVUxBVEVEID0gJ1tESUFHUkFNXVtBRERdIERBVEFfQ0FMQ1VMQVRFRCcsXHJcbiAgQ09MVU1OX0FEREVEID0gJ1tESUFHUkFNXVtBRERdIENPTFVNTl9BRERFRCcsXHJcbiAgR0VORVJBVEVfRElBR1JBTSA9ICdbRElBR1JBTV1bQUREXSBHRU5FUkFURV9ESUFHUkFNJ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTTtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQWRkRGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUFjdGlvblN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX1NUQVJUO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBZGREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2UpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGREaWFncmFtQWN0aW9uU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTV9TVUNDRUVEO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBZGREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2UpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGREaWFncmFtQWN0aW9uRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbUNvbmZpZ0NoYW5nZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuRElBR1JBTV9DT05GSUdfQ0hBTkdFRDtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgSGF2ZUVuZHBvaW50QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkhBVkVfRU5EUE9JTlQ7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERhdGFMb2FkZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuREFUQV9MT0FERUQ7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURlZmluaXRpb25TdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5TVFJVQ1RVUkVfREVGSU5JVElPTl9TVEFSVDtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGVmaW5pdGlvbkZpbmlzaGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLlNUUlVDVFVSRV9ERUZJTklUSU9OX0VORDtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgQ29sdW1uc01hcHBpbmdDaGFuZ2VkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkNPTFVNTlNfTUFQUElOR19DSEFOR0VEO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEYXRhQ2FsY3VsYXRlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5EQVRBX0NBTENVTEFURUQ7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdlbmVyYXRlRGlhZ3JhbUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5HRU5FUkFURV9ESUFHUkFNO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sdW1uQWRkZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQ09MVU1OX0FEREVEO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgQWRkRGlhZ3JhbUFjdGlvbnMgPVxyXG4gIEFkZERpYWdyYW1BY3Rpb25cclxuICB8IEFkZERpYWdyYW1BY3Rpb25TdGFydFxyXG4gIHwgQWRkRGlhZ3JhbUFjdGlvblN1Y2NlZWRcclxuICB8IEFkZERpYWdyYW1BY3Rpb25GYWlsZWRcclxuICB8IEhhdmVFbmRwb2ludEFjdGlvblxyXG4gIHwgRGF0YUxvYWRlZEFjdGlvblxyXG4gIHwgU3RydWN0dXJlRGVmaW5pdGlvblN0YXJ0QWN0aW9uXHJcbiAgfCBTdHJ1Y3R1cmVEZWZpbml0aW9uRmluaXNoZWRBY3Rpb25cclxuICB8IENvbHVtbnNNYXBwaW5nQ2hhbmdlZEFjdGlvblxyXG4gIHwgRGF0YUNhbGN1bGF0ZWRBY3Rpb25cclxuICB8IEdlbmVyYXRlRGlhZ3JhbUFjdGlvblxyXG4gIHwgRGlhZ3JhbUNvbmZpZ0NoYW5nZWRBY3Rpb247XHJcbiJdfQ==