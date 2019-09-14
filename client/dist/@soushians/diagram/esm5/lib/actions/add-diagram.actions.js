/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
if (false) {
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
if (false) {
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
if (false) {
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
if (false) {
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
if (false) {
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
if (false) {
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
if (false) {
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
if (false) {
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
if (false) {
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
if (false) {
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
if (false) {
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
if (false) {
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
if (false) {
    /** @type {?} */
    ColumnAdded.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRpYWdyYW0uYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9hY3Rpb25zL2FkZC1kaWFncmFtLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBS0MsYUFBYyw0QkFBNEI7SUFDMUMsbUJBQW9CLGtDQUFrQztJQUN0RCxxQkFBc0Isb0NBQW9DO0lBQzFELHdCQUF5Qix1Q0FBdUM7SUFDaEUsb0JBQXFCLG1DQUFtQztJQUN4RCw0QkFBNkIsMkNBQTJDO0lBQ3hFLGVBQWdCLCtCQUErQjtJQUMvQyxhQUFjLDRCQUE0QjtJQUMxQywwQkFBMkIseUNBQXlDO0lBQ3BFLHlCQUEwQix3Q0FBd0M7SUFDbEUsaUJBQWtCLGdDQUFnQztJQUNsRCxjQUFlLDZCQUE2QjtJQUM1QyxrQkFBbUIsaUNBQWlDOzs7QUFHckQ7SUFFQywwQkFBbUIsT0FBb0M7UUFBcEMsWUFBTyxHQUFQLE9BQU8sQ0FBNkI7UUFEOUMsU0FBSSxHQUFHLHFCQUFxQixDQUFDLFdBQVcsQ0FBQztJQUNRLENBQUM7SUFDNUQsdUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZBLGdDQUFrRDs7SUFDdEMsbUNBQTJDOztBQUV4RDtJQUVDLCtCQUFtQixPQUFvQztRQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUE2QjtRQUQ5QyxTQUFJLEdBQUcscUJBQXFCLENBQUMsaUJBQWlCLENBQUM7SUFDRSxDQUFDO0lBQzVELDRCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSxxQ0FBd0Q7O0lBQzVDLHdDQUEyQzs7QUFFeEQ7SUFFQyxpQ0FBbUIsT0FBb0M7UUFBcEMsWUFBTyxHQUFQLE9BQU8sQ0FBNkI7UUFEOUMsU0FBSSxHQUFHLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDO0lBQ0EsQ0FBQztJQUM1RCw4QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkEsdUNBQTBEOztJQUM5QywwQ0FBMkM7O0FBRXhEO0lBQUE7UUFDVSxTQUFJLEdBQUcscUJBQXFCLENBQUMsa0JBQWtCLENBQUM7SUFDMUQsQ0FBQztJQUFELDZCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQSxzQ0FBeUQ7O0FBRTFEO0lBRUMsb0NBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQztJQUMzQixDQUFDO0lBQ3BDLGlDQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSwwQ0FBNkQ7O0lBQ2pELDZDQUFtQjs7QUFFaEM7SUFFQyw0QkFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLHFCQUFxQixDQUFDLGFBQWEsQ0FBQztJQUNsQixDQUFDO0lBQ3BDLHlCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSxrQ0FBb0Q7O0lBQ3hDLHFDQUFtQjs7QUFFaEM7SUFFQywwQkFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLHFCQUFxQixDQUFDLFdBQVcsQ0FBQztJQUNoQixDQUFDO0lBQ3BDLHVCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSxnQ0FBa0Q7O0lBQ3RDLG1DQUFtQjs7QUFFaEM7SUFFQyx3Q0FBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLHFCQUFxQixDQUFDLDBCQUEwQixDQUFDO0lBQy9CLENBQUM7SUFDcEMscUNBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZBLDhDQUFpRTs7SUFDckQsaURBQW1COztBQUVoQztJQUVDLDJDQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcscUJBQXFCLENBQUMsd0JBQXdCLENBQUM7SUFDN0IsQ0FBQztJQUNwQyx3Q0FBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkEsaURBQStEOztJQUNuRCxvREFBbUI7O0FBRWhDO0lBRUMscUNBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxxQkFBcUIsQ0FBQyx1QkFBdUIsQ0FBQztJQUM1QixDQUFDO0lBQ3BDLGtDQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSwyQ0FBOEQ7O0lBQ2xELDhDQUFtQjs7QUFFaEM7SUFFQyw4QkFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLHFCQUFxQixDQUFDLGVBQWUsQ0FBQztJQUNwQixDQUFDO0lBQ3BDLDJCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSxvQ0FBc0Q7O0lBQzFDLHVDQUFtQjs7QUFFaEM7SUFFQywrQkFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDO0lBQ3JCLENBQUM7SUFDcEMsNEJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZBLHFDQUF1RDs7SUFDM0Msd0NBQW1COztBQUdoQztJQUFBO1FBQ1UsU0FBSSxHQUFHLHFCQUFxQixDQUFDLFlBQVksQ0FBQztJQUNwRCxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURBLDJCQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9hZGQtZGlhZ3JhbS1hcGkubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEFkZERpYWdyYW1BY3Rpb25UeXBlcyB7XHJcblx0QUREX0RJQUdSQU0gPSBcIltESUFHUkFNXVtBRERdIEFERF9ESUFHUkFNXCIsXHJcblx0QUREX0RJQUdSQU1fU1RBUlQgPSBcIltESUFHUkFNXVtBRERdIEFERF9ESUFHUkFNX1NUQVJUXCIsXHJcblx0QUREX0RJQUdSQU1fU1VDQ0VFRCA9IFwiW0RJQUdSQU1dW0FERF0gQUREX0RJQUdSQU1fU1VDQ0VFRFwiLFxyXG5cdERJQUdSQU1fQ09ORklHX0NIQU5HRUQgPSBcIltESUFHUkFNXVtBRERdIERJQUdSQU1fQ09ORklHX0NIQU5HRURcIixcclxuXHRBRERfRElBR1JBTV9GQUlMRUQgPSBcIltESUFHUkFNXVtBRERdIEFERF9ESUFHUkFNX0ZBSUxFRFwiLFxyXG5cdFNUUlVDVFVSRV9ERUZJTklUSU9OX1NUQVJUID0gXCJbRElBR1JBTV1bQUREXSBTVFJVQ1RVUkVfREVGSU5JVElPTl9TVEFSVFwiLFxyXG5cdEhBVkVfRU5EUE9JTlQgPSBcIltESUFHUkFNXVtBRERdIEhBVkVfU1RSVUNUVVJFXCIsXHJcblx0REFUQV9MT0FERUQgPSBcIltESUFHUkFNXVtBRERdIERBVEFfTE9BREVEXCIsXHJcblx0U1RSVUNUVVJFX0RFRklOSVRJT05fRU5EID0gXCJbRElBR1JBTV1bQUREXSBTVFJVQ1RVUkVfREVGSU5JVElPTl9FTkRcIixcclxuXHRDT0xVTU5TX01BUFBJTkdfQ0hBTkdFRCA9IFwiW0RJQUdSQU1dW0FERF0gQ09MVU1OU19NQVBQSU5HX0NIQU5HRURcIixcclxuXHREQVRBX0NBTENVTEFURUQgPSBcIltESUFHUkFNXVtBRERdIERBVEFfQ0FMQ1VMQVRFRFwiLFxyXG5cdENPTFVNTl9BRERFRCA9IFwiW0RJQUdSQU1dW0FERF0gQ09MVU1OX0FEREVEXCIsXHJcblx0R0VORVJBVEVfRElBR1JBTSA9IFwiW0RJQUdSQU1dW0FERF0gR0VORVJBVEVfRElBR1JBTVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBZGREaWFncmFtQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBZGREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2UpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1BY3Rpb25TdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTV9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQWRkRGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGREaWFncmFtQWN0aW9uU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTV9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBZGREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2UpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1BY3Rpb25GYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU1fRkFJTEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtQ29uZmlnQ2hhbmdlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5ESUFHUkFNX0NPTkZJR19DSEFOR0VEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEhhdmVFbmRwb2ludEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5IQVZFX0VORFBPSU5UO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERhdGFMb2FkZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuREFUQV9MT0FERUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGVmaW5pdGlvblN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLlNUUlVDVFVSRV9ERUZJTklUSU9OX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURlZmluaXRpb25GaW5pc2hlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5TVFJVQ1RVUkVfREVGSU5JVElPTl9FTkQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQ29sdW1uc01hcHBpbmdDaGFuZ2VkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkNPTFVNTlNfTUFQUElOR19DSEFOR0VEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERhdGFDYWxjdWxhdGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkRBVEFfQ0FMQ1VMQVRFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZW5lcmF0ZURpYWdyYW1BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuR0VORVJBVEVfRElBR1JBTTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sdW1uQWRkZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQ09MVU1OX0FEREVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBZGREaWFncmFtQWN0aW9ucyA9XHJcblx0fCBBZGREaWFncmFtQWN0aW9uXHJcblx0fCBBZGREaWFncmFtQWN0aW9uU3RhcnRcclxuXHR8IEFkZERpYWdyYW1BY3Rpb25TdWNjZWVkXHJcblx0fCBBZGREaWFncmFtQWN0aW9uRmFpbGVkXHJcblx0fCBIYXZlRW5kcG9pbnRBY3Rpb25cclxuXHR8IERhdGFMb2FkZWRBY3Rpb25cclxuXHR8IFN0cnVjdHVyZURlZmluaXRpb25TdGFydEFjdGlvblxyXG5cdHwgU3RydWN0dXJlRGVmaW5pdGlvbkZpbmlzaGVkQWN0aW9uXHJcblx0fCBDb2x1bW5zTWFwcGluZ0NoYW5nZWRBY3Rpb25cclxuXHR8IERhdGFDYWxjdWxhdGVkQWN0aW9uXHJcblx0fCBHZW5lcmF0ZURpYWdyYW1BY3Rpb25cclxuXHR8IERpYWdyYW1Db25maWdDaGFuZ2VkQWN0aW9uO1xyXG4iXX0=