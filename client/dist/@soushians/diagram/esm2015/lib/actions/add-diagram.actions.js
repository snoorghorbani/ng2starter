/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const AddDiagramActionTypes = {
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
export class AddDiagramAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.ADD_DIAGRAM;
    }
}
if (false) {
    /** @type {?} */
    AddDiagramAction.prototype.type;
    /** @type {?} */
    AddDiagramAction.prototype.payload;
}
export class AddDiagramActionStart {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.ADD_DIAGRAM_START;
    }
}
if (false) {
    /** @type {?} */
    AddDiagramActionStart.prototype.type;
    /** @type {?} */
    AddDiagramActionStart.prototype.payload;
}
export class AddDiagramActionSucceed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED;
    }
}
if (false) {
    /** @type {?} */
    AddDiagramActionSucceed.prototype.type;
    /** @type {?} */
    AddDiagramActionSucceed.prototype.payload;
}
export class AddDiagramActionFailed {
    constructor() {
        this.type = AddDiagramActionTypes.ADD_DIAGRAM_FAILED;
    }
}
if (false) {
    /** @type {?} */
    AddDiagramActionFailed.prototype.type;
}
export class DiagramConfigChangedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.DIAGRAM_CONFIG_CHANGED;
    }
}
if (false) {
    /** @type {?} */
    DiagramConfigChangedAction.prototype.type;
    /** @type {?} */
    DiagramConfigChangedAction.prototype.payload;
}
export class HaveEndpointAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.HAVE_ENDPOINT;
    }
}
if (false) {
    /** @type {?} */
    HaveEndpointAction.prototype.type;
    /** @type {?} */
    HaveEndpointAction.prototype.payload;
}
export class DataLoadedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.DATA_LOADED;
    }
}
if (false) {
    /** @type {?} */
    DataLoadedAction.prototype.type;
    /** @type {?} */
    DataLoadedAction.prototype.payload;
}
export class StructureDefinitionStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.STRUCTURE_DEFINITION_START;
    }
}
if (false) {
    /** @type {?} */
    StructureDefinitionStartAction.prototype.type;
    /** @type {?} */
    StructureDefinitionStartAction.prototype.payload;
}
export class StructureDefinitionFinishedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.STRUCTURE_DEFINITION_END;
    }
}
if (false) {
    /** @type {?} */
    StructureDefinitionFinishedAction.prototype.type;
    /** @type {?} */
    StructureDefinitionFinishedAction.prototype.payload;
}
export class ColumnsMappingChangedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.COLUMNS_MAPPING_CHANGED;
    }
}
if (false) {
    /** @type {?} */
    ColumnsMappingChangedAction.prototype.type;
    /** @type {?} */
    ColumnsMappingChangedAction.prototype.payload;
}
export class DataCalculatedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.DATA_CALCULATED;
    }
}
if (false) {
    /** @type {?} */
    DataCalculatedAction.prototype.type;
    /** @type {?} */
    DataCalculatedAction.prototype.payload;
}
export class GenerateDiagramAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.GENERATE_DIAGRAM;
    }
}
if (false) {
    /** @type {?} */
    GenerateDiagramAction.prototype.type;
    /** @type {?} */
    GenerateDiagramAction.prototype.payload;
}
export class ColumnAdded {
    constructor() {
        this.type = AddDiagramActionTypes.COLUMN_ADDED;
    }
}
if (false) {
    /** @type {?} */
    ColumnAdded.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRpYWdyYW0uYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9hY3Rpb25zL2FkZC1kaWFncmFtLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBS0MsYUFBYyw0QkFBNEI7SUFDMUMsbUJBQW9CLGtDQUFrQztJQUN0RCxxQkFBc0Isb0NBQW9DO0lBQzFELHdCQUF5Qix1Q0FBdUM7SUFDaEUsb0JBQXFCLG1DQUFtQztJQUN4RCw0QkFBNkIsMkNBQTJDO0lBQ3hFLGVBQWdCLCtCQUErQjtJQUMvQyxhQUFjLDRCQUE0QjtJQUMxQywwQkFBMkIseUNBQXlDO0lBQ3BFLHlCQUEwQix3Q0FBd0M7SUFDbEUsaUJBQWtCLGdDQUFnQztJQUNsRCxjQUFlLDZCQUE2QjtJQUM1QyxrQkFBbUIsaUNBQWlDOzs7QUFHckQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUU1QixZQUFtQixPQUFvQztRQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUE2QjtRQUQ5QyxTQUFJLEdBQUcscUJBQXFCLENBQUMsV0FBVyxDQUFDO0lBQ1EsQ0FBQztDQUMzRDs7O0lBRkEsZ0NBQWtEOztJQUN0QyxtQ0FBMkM7O0FBRXhELE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFFakMsWUFBbUIsT0FBb0M7UUFBcEMsWUFBTyxHQUFQLE9BQU8sQ0FBNkI7UUFEOUMsU0FBSSxHQUFHLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDO0lBQ0UsQ0FBQztDQUMzRDs7O0lBRkEscUNBQXdEOztJQUM1Qyx3Q0FBMkM7O0FBRXhELE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFFbkMsWUFBbUIsT0FBb0M7UUFBcEMsWUFBTyxHQUFQLE9BQU8sQ0FBNkI7UUFEOUMsU0FBSSxHQUFHLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDO0lBQ0EsQ0FBQztDQUMzRDs7O0lBRkEsdUNBQTBEOztJQUM5QywwQ0FBMkM7O0FBRXhELE1BQU0sT0FBTyxzQkFBc0I7SUFBbkM7UUFDVSxTQUFJLEdBQUcscUJBQXFCLENBQUMsa0JBQWtCLENBQUM7SUFDMUQsQ0FBQztDQUFBOzs7SUFEQSxzQ0FBeUQ7O0FBRTFELE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFFdEMsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDO0lBQzNCLENBQUM7Q0FDbkM7OztJQUZBLDBDQUE2RDs7SUFDakQsNkNBQW1COztBQUVoQyxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBRTlCLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxxQkFBcUIsQ0FBQyxhQUFhLENBQUM7SUFDbEIsQ0FBQztDQUNuQzs7O0lBRkEsa0NBQW9EOztJQUN4QyxxQ0FBbUI7O0FBRWhDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFFNUIsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLHFCQUFxQixDQUFDLFdBQVcsQ0FBQztJQUNoQixDQUFDO0NBQ25DOzs7SUFGQSxnQ0FBa0Q7O0lBQ3RDLG1DQUFtQjs7QUFFaEMsTUFBTSxPQUFPLDhCQUE4Qjs7OztJQUUxQyxZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcscUJBQXFCLENBQUMsMEJBQTBCLENBQUM7SUFDL0IsQ0FBQztDQUNuQzs7O0lBRkEsOENBQWlFOztJQUNyRCxpREFBbUI7O0FBRWhDLE1BQU0sT0FBTyxpQ0FBaUM7Ozs7SUFFN0MsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLHFCQUFxQixDQUFDLHdCQUF3QixDQUFDO0lBQzdCLENBQUM7Q0FDbkM7OztJQUZBLGlEQUErRDs7SUFDbkQsb0RBQW1COztBQUVoQyxNQUFNLE9BQU8sMkJBQTJCOzs7O0lBRXZDLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxxQkFBcUIsQ0FBQyx1QkFBdUIsQ0FBQztJQUM1QixDQUFDO0NBQ25DOzs7SUFGQSwyQ0FBOEQ7O0lBQ2xELDhDQUFtQjs7QUFFaEMsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUVoQyxZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcscUJBQXFCLENBQUMsZUFBZSxDQUFDO0lBQ3BCLENBQUM7Q0FDbkM7OztJQUZBLG9DQUFzRDs7SUFDMUMsdUNBQW1COztBQUVoQyxNQUFNLE9BQU8scUJBQXFCOzs7O0lBRWpDLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNyQixDQUFDO0NBQ25DOzs7SUFGQSxxQ0FBdUQ7O0lBQzNDLHdDQUFtQjs7QUFHaEMsTUFBTSxPQUFPLFdBQVc7SUFBeEI7UUFDVSxTQUFJLEdBQUcscUJBQXFCLENBQUMsWUFBWSxDQUFDO0lBQ3BELENBQUM7Q0FBQTs7O0lBREEsMkJBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBBZGREaWFncmFtQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2FkZC1kaWFncmFtLWFwaS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzIHtcclxuXHRBRERfRElBR1JBTSA9IFwiW0RJQUdSQU1dW0FERF0gQUREX0RJQUdSQU1cIixcclxuXHRBRERfRElBR1JBTV9TVEFSVCA9IFwiW0RJQUdSQU1dW0FERF0gQUREX0RJQUdSQU1fU1RBUlRcIixcclxuXHRBRERfRElBR1JBTV9TVUNDRUVEID0gXCJbRElBR1JBTV1bQUREXSBBRERfRElBR1JBTV9TVUNDRUVEXCIsXHJcblx0RElBR1JBTV9DT05GSUdfQ0hBTkdFRCA9IFwiW0RJQUdSQU1dW0FERF0gRElBR1JBTV9DT05GSUdfQ0hBTkdFRFwiLFxyXG5cdEFERF9ESUFHUkFNX0ZBSUxFRCA9IFwiW0RJQUdSQU1dW0FERF0gQUREX0RJQUdSQU1fRkFJTEVEXCIsXHJcblx0U1RSVUNUVVJFX0RFRklOSVRJT05fU1RBUlQgPSBcIltESUFHUkFNXVtBRERdIFNUUlVDVFVSRV9ERUZJTklUSU9OX1NUQVJUXCIsXHJcblx0SEFWRV9FTkRQT0lOVCA9IFwiW0RJQUdSQU1dW0FERF0gSEFWRV9TVFJVQ1RVUkVcIixcclxuXHREQVRBX0xPQURFRCA9IFwiW0RJQUdSQU1dW0FERF0gREFUQV9MT0FERURcIixcclxuXHRTVFJVQ1RVUkVfREVGSU5JVElPTl9FTkQgPSBcIltESUFHUkFNXVtBRERdIFNUUlVDVFVSRV9ERUZJTklUSU9OX0VORFwiLFxyXG5cdENPTFVNTlNfTUFQUElOR19DSEFOR0VEID0gXCJbRElBR1JBTV1bQUREXSBDT0xVTU5TX01BUFBJTkdfQ0hBTkdFRFwiLFxyXG5cdERBVEFfQ0FMQ1VMQVRFRCA9IFwiW0RJQUdSQU1dW0FERF0gREFUQV9DQUxDVUxBVEVEXCIsXHJcblx0Q09MVU1OX0FEREVEID0gXCJbRElBR1JBTV1bQUREXSBDT0xVTU5fQURERURcIixcclxuXHRHRU5FUkFURV9ESUFHUkFNID0gXCJbRElBR1JBTV1bQUREXSBHRU5FUkFURV9ESUFHUkFNXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU07XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUFjdGlvblN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBZGREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2UpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1BY3Rpb25TdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUFjdGlvbkZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTV9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIERpYWdyYW1Db25maWdDaGFuZ2VkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkRJQUdSQU1fQ09ORklHX0NIQU5HRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgSGF2ZUVuZHBvaW50QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkhBVkVfRU5EUE9JTlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGF0YUxvYWRlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5EQVRBX0xPQURFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEZWZpbml0aW9uU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuU1RSVUNUVVJFX0RFRklOSVRJT05fU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGVmaW5pdGlvbkZpbmlzaGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLlNUUlVDVFVSRV9ERUZJTklUSU9OX0VORDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDb2x1bW5zTWFwcGluZ0NoYW5nZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQ09MVU1OU19NQVBQSU5HX0NIQU5HRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGF0YUNhbGN1bGF0ZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuREFUQV9DQUxDVUxBVEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdlbmVyYXRlRGlhZ3JhbUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5HRU5FUkFURV9ESUFHUkFNO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2x1bW5BZGRlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5DT0xVTU5fQURERUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEFkZERpYWdyYW1BY3Rpb25zID1cclxuXHR8IEFkZERpYWdyYW1BY3Rpb25cclxuXHR8IEFkZERpYWdyYW1BY3Rpb25TdGFydFxyXG5cdHwgQWRkRGlhZ3JhbUFjdGlvblN1Y2NlZWRcclxuXHR8IEFkZERpYWdyYW1BY3Rpb25GYWlsZWRcclxuXHR8IEhhdmVFbmRwb2ludEFjdGlvblxyXG5cdHwgRGF0YUxvYWRlZEFjdGlvblxyXG5cdHwgU3RydWN0dXJlRGVmaW5pdGlvblN0YXJ0QWN0aW9uXHJcblx0fCBTdHJ1Y3R1cmVEZWZpbml0aW9uRmluaXNoZWRBY3Rpb25cclxuXHR8IENvbHVtbnNNYXBwaW5nQ2hhbmdlZEFjdGlvblxyXG5cdHwgRGF0YUNhbGN1bGF0ZWRBY3Rpb25cclxuXHR8IEdlbmVyYXRlRGlhZ3JhbUFjdGlvblxyXG5cdHwgRGlhZ3JhbUNvbmZpZ0NoYW5nZWRBY3Rpb247XHJcbiJdfQ==