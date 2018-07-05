/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var AddDiagramActionTypes = {
    ADD_DIAGRAM: "[DIAGRAM][ADD] ADD_DIAGRAM",
    ADD_DIAGRAM_START: "[DIAGRAM][ADD] ADD_DIAGRAM_START",
    ADD_DIAGRAM_SUCCEED: "[DIAGRAM][ADD] ADD_DIAGRAM_SUCCEED",
    DIAGRAM_CONFIG_CHANGED: "[DIAGRAM][ADD] DIAGRAM_CONFIG_CHANGED",
    ADD_DIAGRAM_FAILED: "[DIAGRAM][ADD] ADD_DIAGRAM_FAILED",
    STRUCTURE_DEFINITION_START: "[DIAGRAM][ADD] STRUCTURE_DEFINITION_START",
    HAVE_ENDPOINT: "[DIAGRAM][ADD] HAVE_STRUCTURE",
    DATA_LOADED: "[DIAGRAM][ADD] DATA_LOADED",
    STRUCTURE_DEFINITION_END: "[DIAGRAM][ADD] STRUCTURE_DEFINITION_END",
    COLUMNS_MAPPING_CHANGED: "[DIAGRAM][ADD] COLUMNS_MAPPING_CHANGED",
    DATA_CALCULATED: "[DIAGRAM][ADD] DATA_CALCULATED",
    COLUMN_ADDED: "[DIAGRAM][ADD] COLUMN_ADDED",
    GENERATE_DIAGRAM: "[DIAGRAM][ADD] GENERATE_DIAGRAM",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRpYWdyYW0uYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9hY3Rpb25zL2FkZC1kaWFncmFtLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2lCQUtlLDRCQUE0Qjt1QkFDdEIsa0NBQWtDO3lCQUNoQyxvQ0FBb0M7NEJBQ2pDLHVDQUF1Qzt3QkFDM0MsbUNBQW1DO2dDQUMzQiwyQ0FBMkM7bUJBQ3hELCtCQUErQjtpQkFDakMsNEJBQTRCOzhCQUNmLHlDQUF5Qzs2QkFDMUMsd0NBQXdDO3FCQUNoRCxnQ0FBZ0M7a0JBQ25DLDZCQUE2QjtzQkFDekIsaUNBQWlDOzs7QUFHckQsSUFBQTtJQUVDLDBCQUFtQixPQUFvQztRQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUE2QjtvQkFEdkMscUJBQXFCLENBQUMsV0FBVztLQUNVOzJCQXRCNUQ7SUF1QkMsQ0FBQTtBQUhELDRCQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVDLCtCQUFtQixPQUFvQztRQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUE2QjtvQkFEdkMscUJBQXFCLENBQUMsaUJBQWlCO0tBQ0k7Z0NBMUI1RDtJQTJCQyxDQUFBO0FBSEQsaUNBR0M7Ozs7Ozs7QUFDRCxJQUFBO0lBRUMsaUNBQW1CLE9BQW9DO1FBQXBDLFlBQU8sR0FBUCxPQUFPLENBQTZCO29CQUR2QyxxQkFBcUIsQ0FBQyxtQkFBbUI7S0FDRTtrQ0E5QjVEO0lBK0JDLENBQUE7QUFIRCxtQ0FHQzs7Ozs7OztBQUNELElBQUE7O29CQUNpQixxQkFBcUIsQ0FBQyxrQkFBa0I7O2lDQWpDekQ7SUFrQ0MsQ0FBQTtBQUZELGtDQUVDOzs7OztBQUNELElBQUE7SUFFQyxvQ0FBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7b0JBRGYscUJBQXFCLENBQUMsc0JBQXNCO0tBQ3pCO3FDQXJDcEM7SUFzQ0MsQ0FBQTtBQUhELHNDQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVDLDRCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztvQkFEZixxQkFBcUIsQ0FBQyxhQUFhO0tBQ2hCOzZCQXpDcEM7SUEwQ0MsQ0FBQTtBQUhELDhCQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVDLDBCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztvQkFEZixxQkFBcUIsQ0FBQyxXQUFXO0tBQ2Q7MkJBN0NwQztJQThDQyxDQUFBO0FBSEQsNEJBR0M7Ozs7Ozs7QUFDRCxJQUFBO0lBRUMsd0NBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO29CQURmLHFCQUFxQixDQUFDLDBCQUEwQjtLQUM3Qjt5Q0FqRHBDO0lBa0RDLENBQUE7QUFIRCwwQ0FHQzs7Ozs7OztBQUNELElBQUE7SUFFQywyQ0FBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7b0JBRGYscUJBQXFCLENBQUMsd0JBQXdCO0tBQzNCOzRDQXJEcEM7SUFzREMsQ0FBQTtBQUhELDZDQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVDLHFDQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztvQkFEZixxQkFBcUIsQ0FBQyx1QkFBdUI7S0FDMUI7c0NBekRwQztJQTBEQyxDQUFBO0FBSEQsdUNBR0M7Ozs7Ozs7QUFDRCxJQUFBO0lBRUMsOEJBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO29CQURmLHFCQUFxQixDQUFDLGVBQWU7S0FDbEI7K0JBN0RwQztJQThEQyxDQUFBO0FBSEQsZ0NBR0M7Ozs7Ozs7QUFDRCxJQUFBO0lBRUMsK0JBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO29CQURmLHFCQUFxQixDQUFDLGdCQUFnQjtLQUNuQjtnQ0FqRXBDO0lBa0VDLENBQUE7QUFIRCxpQ0FHQzs7Ozs7OztBQUVELElBQUE7O29CQUNpQixxQkFBcUIsQ0FBQyxZQUFZOztzQkFyRW5EO0lBc0VDLENBQUE7QUFGRCx1QkFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9hZGQtZGlhZ3JhbS1hcGkubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEFkZERpYWdyYW1BY3Rpb25UeXBlcyB7XHJcblx0QUREX0RJQUdSQU0gPSBcIltESUFHUkFNXVtBRERdIEFERF9ESUFHUkFNXCIsXHJcblx0QUREX0RJQUdSQU1fU1RBUlQgPSBcIltESUFHUkFNXVtBRERdIEFERF9ESUFHUkFNX1NUQVJUXCIsXHJcblx0QUREX0RJQUdSQU1fU1VDQ0VFRCA9IFwiW0RJQUdSQU1dW0FERF0gQUREX0RJQUdSQU1fU1VDQ0VFRFwiLFxyXG5cdERJQUdSQU1fQ09ORklHX0NIQU5HRUQgPSBcIltESUFHUkFNXVtBRERdIERJQUdSQU1fQ09ORklHX0NIQU5HRURcIixcclxuXHRBRERfRElBR1JBTV9GQUlMRUQgPSBcIltESUFHUkFNXVtBRERdIEFERF9ESUFHUkFNX0ZBSUxFRFwiLFxyXG5cdFNUUlVDVFVSRV9ERUZJTklUSU9OX1NUQVJUID0gXCJbRElBR1JBTV1bQUREXSBTVFJVQ1RVUkVfREVGSU5JVElPTl9TVEFSVFwiLFxyXG5cdEhBVkVfRU5EUE9JTlQgPSBcIltESUFHUkFNXVtBRERdIEhBVkVfU1RSVUNUVVJFXCIsXHJcblx0REFUQV9MT0FERUQgPSBcIltESUFHUkFNXVtBRERdIERBVEFfTE9BREVEXCIsXHJcblx0U1RSVUNUVVJFX0RFRklOSVRJT05fRU5EID0gXCJbRElBR1JBTV1bQUREXSBTVFJVQ1RVUkVfREVGSU5JVElPTl9FTkRcIixcclxuXHRDT0xVTU5TX01BUFBJTkdfQ0hBTkdFRCA9IFwiW0RJQUdSQU1dW0FERF0gQ09MVU1OU19NQVBQSU5HX0NIQU5HRURcIixcclxuXHREQVRBX0NBTENVTEFURUQgPSBcIltESUFHUkFNXVtBRERdIERBVEFfQ0FMQ1VMQVRFRFwiLFxyXG5cdENPTFVNTl9BRERFRCA9IFwiW0RJQUdSQU1dW0FERF0gQ09MVU1OX0FEREVEXCIsXHJcblx0R0VORVJBVEVfRElBR1JBTSA9IFwiW0RJQUdSQU1dW0FERF0gR0VORVJBVEVfRElBR1JBTVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBZGREaWFncmFtQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBZGREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2UpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1BY3Rpb25TdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTV9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQWRkRGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGREaWFncmFtQWN0aW9uU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTV9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBZGREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2UpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1BY3Rpb25GYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU1fRkFJTEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtQ29uZmlnQ2hhbmdlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5ESUFHUkFNX0NPTkZJR19DSEFOR0VEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEhhdmVFbmRwb2ludEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5IQVZFX0VORFBPSU5UO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERhdGFMb2FkZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuREFUQV9MT0FERUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGVmaW5pdGlvblN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLlNUUlVDVFVSRV9ERUZJTklUSU9OX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURlZmluaXRpb25GaW5pc2hlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5TVFJVQ1RVUkVfREVGSU5JVElPTl9FTkQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQ29sdW1uc01hcHBpbmdDaGFuZ2VkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkNPTFVNTlNfTUFQUElOR19DSEFOR0VEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERhdGFDYWxjdWxhdGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkRBVEFfQ0FMQ1VMQVRFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZW5lcmF0ZURpYWdyYW1BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuR0VORVJBVEVfRElBR1JBTTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sdW1uQWRkZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQ09MVU1OX0FEREVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBZGREaWFncmFtQWN0aW9ucyA9XHJcblx0fCBBZGREaWFncmFtQWN0aW9uXHJcblx0fCBBZGREaWFncmFtQWN0aW9uU3RhcnRcclxuXHR8IEFkZERpYWdyYW1BY3Rpb25TdWNjZWVkXHJcblx0fCBBZGREaWFncmFtQWN0aW9uRmFpbGVkXHJcblx0fCBIYXZlRW5kcG9pbnRBY3Rpb25cclxuXHR8IERhdGFMb2FkZWRBY3Rpb25cclxuXHR8IFN0cnVjdHVyZURlZmluaXRpb25TdGFydEFjdGlvblxyXG5cdHwgU3RydWN0dXJlRGVmaW5pdGlvbkZpbmlzaGVkQWN0aW9uXHJcblx0fCBDb2x1bW5zTWFwcGluZ0NoYW5nZWRBY3Rpb25cclxuXHR8IERhdGFDYWxjdWxhdGVkQWN0aW9uXHJcblx0fCBHZW5lcmF0ZURpYWdyYW1BY3Rpb25cclxuXHR8IERpYWdyYW1Db25maWdDaGFuZ2VkQWN0aW9uO1xyXG4iXX0=