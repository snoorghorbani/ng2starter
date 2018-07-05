/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
function AddDiagramAction_tsickle_Closure_declarations() {
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
function AddDiagramActionStart_tsickle_Closure_declarations() {
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
function AddDiagramActionSucceed_tsickle_Closure_declarations() {
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
function AddDiagramActionFailed_tsickle_Closure_declarations() {
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
function DiagramConfigChangedAction_tsickle_Closure_declarations() {
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
function HaveEndpointAction_tsickle_Closure_declarations() {
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
function DataLoadedAction_tsickle_Closure_declarations() {
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
function StructureDefinitionStartAction_tsickle_Closure_declarations() {
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
function StructureDefinitionFinishedAction_tsickle_Closure_declarations() {
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
function ColumnsMappingChangedAction_tsickle_Closure_declarations() {
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
function DataCalculatedAction_tsickle_Closure_declarations() {
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
function GenerateDiagramAction_tsickle_Closure_declarations() {
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
function ColumnAdded_tsickle_Closure_declarations() {
    /** @type {?} */
    ColumnAdded.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRpYWdyYW0uYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9hY3Rpb25zL2FkZC1kaWFncmFtLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2lCQUtlLDRCQUE0Qjt1QkFDdEIsa0NBQWtDO3lCQUNoQyxvQ0FBb0M7NEJBQ2pDLHVDQUF1Qzt3QkFDM0MsbUNBQW1DO2dDQUMzQiwyQ0FBMkM7bUJBQ3hELCtCQUErQjtpQkFDakMsNEJBQTRCOzhCQUNmLHlDQUF5Qzs2QkFDMUMsd0NBQXdDO3FCQUNoRCxnQ0FBZ0M7a0JBQ25DLDZCQUE2QjtzQkFDekIsaUNBQWlDOzs7QUFHckQsTUFBTTs7OztJQUVMLFlBQW1CLE9BQW9DO1FBQXBDLFlBQU8sR0FBUCxPQUFPLENBQTZCO29CQUR2QyxxQkFBcUIsQ0FBQyxXQUFXO0tBQ1U7Q0FDM0Q7Ozs7Ozs7QUFDRCxNQUFNOzs7O0lBRUwsWUFBbUIsT0FBb0M7UUFBcEMsWUFBTyxHQUFQLE9BQU8sQ0FBNkI7b0JBRHZDLHFCQUFxQixDQUFDLGlCQUFpQjtLQUNJO0NBQzNEOzs7Ozs7O0FBQ0QsTUFBTTs7OztJQUVMLFlBQW1CLE9BQW9DO1FBQXBDLFlBQU8sR0FBUCxPQUFPLENBQTZCO29CQUR2QyxxQkFBcUIsQ0FBQyxtQkFBbUI7S0FDRTtDQUMzRDs7Ozs7OztBQUNELE1BQU07O29CQUNXLHFCQUFxQixDQUFDLGtCQUFrQjs7Q0FDeEQ7Ozs7O0FBQ0QsTUFBTTs7OztJQUVMLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO29CQURmLHFCQUFxQixDQUFDLHNCQUFzQjtLQUN6QjtDQUNuQzs7Ozs7OztBQUNELE1BQU07Ozs7SUFFTCxZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztvQkFEZixxQkFBcUIsQ0FBQyxhQUFhO0tBQ2hCO0NBQ25DOzs7Ozs7O0FBQ0QsTUFBTTs7OztJQUVMLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO29CQURmLHFCQUFxQixDQUFDLFdBQVc7S0FDZDtDQUNuQzs7Ozs7OztBQUNELE1BQU07Ozs7SUFFTCxZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztvQkFEZixxQkFBcUIsQ0FBQywwQkFBMEI7S0FDN0I7Q0FDbkM7Ozs7Ozs7QUFDRCxNQUFNOzs7O0lBRUwsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7b0JBRGYscUJBQXFCLENBQUMsd0JBQXdCO0tBQzNCO0NBQ25DOzs7Ozs7O0FBQ0QsTUFBTTs7OztJQUVMLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO29CQURmLHFCQUFxQixDQUFDLHVCQUF1QjtLQUMxQjtDQUNuQzs7Ozs7OztBQUNELE1BQU07Ozs7SUFFTCxZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztvQkFEZixxQkFBcUIsQ0FBQyxlQUFlO0tBQ2xCO0NBQ25DOzs7Ozs7O0FBQ0QsTUFBTTs7OztJQUVMLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO29CQURmLHFCQUFxQixDQUFDLGdCQUFnQjtLQUNuQjtDQUNuQzs7Ozs7OztBQUVELE1BQU07O29CQUNXLHFCQUFxQixDQUFDLFlBQVk7O0NBQ2xEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBBZGREaWFncmFtQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2FkZC1kaWFncmFtLWFwaS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzIHtcclxuXHRBRERfRElBR1JBTSA9IFwiW0RJQUdSQU1dW0FERF0gQUREX0RJQUdSQU1cIixcclxuXHRBRERfRElBR1JBTV9TVEFSVCA9IFwiW0RJQUdSQU1dW0FERF0gQUREX0RJQUdSQU1fU1RBUlRcIixcclxuXHRBRERfRElBR1JBTV9TVUNDRUVEID0gXCJbRElBR1JBTV1bQUREXSBBRERfRElBR1JBTV9TVUNDRUVEXCIsXHJcblx0RElBR1JBTV9DT05GSUdfQ0hBTkdFRCA9IFwiW0RJQUdSQU1dW0FERF0gRElBR1JBTV9DT05GSUdfQ0hBTkdFRFwiLFxyXG5cdEFERF9ESUFHUkFNX0ZBSUxFRCA9IFwiW0RJQUdSQU1dW0FERF0gQUREX0RJQUdSQU1fRkFJTEVEXCIsXHJcblx0U1RSVUNUVVJFX0RFRklOSVRJT05fU1RBUlQgPSBcIltESUFHUkFNXVtBRERdIFNUUlVDVFVSRV9ERUZJTklUSU9OX1NUQVJUXCIsXHJcblx0SEFWRV9FTkRQT0lOVCA9IFwiW0RJQUdSQU1dW0FERF0gSEFWRV9TVFJVQ1RVUkVcIixcclxuXHREQVRBX0xPQURFRCA9IFwiW0RJQUdSQU1dW0FERF0gREFUQV9MT0FERURcIixcclxuXHRTVFJVQ1RVUkVfREVGSU5JVElPTl9FTkQgPSBcIltESUFHUkFNXVtBRERdIFNUUlVDVFVSRV9ERUZJTklUSU9OX0VORFwiLFxyXG5cdENPTFVNTlNfTUFQUElOR19DSEFOR0VEID0gXCJbRElBR1JBTV1bQUREXSBDT0xVTU5TX01BUFBJTkdfQ0hBTkdFRFwiLFxyXG5cdERBVEFfQ0FMQ1VMQVRFRCA9IFwiW0RJQUdSQU1dW0FERF0gREFUQV9DQUxDVUxBVEVEXCIsXHJcblx0Q09MVU1OX0FEREVEID0gXCJbRElBR1JBTV1bQUREXSBDT0xVTU5fQURERURcIixcclxuXHRHRU5FUkFURV9ESUFHUkFNID0gXCJbRElBR1JBTV1bQUREXSBHRU5FUkFURV9ESUFHUkFNXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU07XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUFjdGlvblN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBZGREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2UpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1BY3Rpb25TdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUFjdGlvbkZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTV9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIERpYWdyYW1Db25maWdDaGFuZ2VkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkRJQUdSQU1fQ09ORklHX0NIQU5HRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgSGF2ZUVuZHBvaW50QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkhBVkVfRU5EUE9JTlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGF0YUxvYWRlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5EQVRBX0xPQURFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEZWZpbml0aW9uU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuU1RSVUNUVVJFX0RFRklOSVRJT05fU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGVmaW5pdGlvbkZpbmlzaGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLlNUUlVDVFVSRV9ERUZJTklUSU9OX0VORDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDb2x1bW5zTWFwcGluZ0NoYW5nZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQ09MVU1OU19NQVBQSU5HX0NIQU5HRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGF0YUNhbGN1bGF0ZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuREFUQV9DQUxDVUxBVEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdlbmVyYXRlRGlhZ3JhbUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5HRU5FUkFURV9ESUFHUkFNO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2x1bW5BZGRlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5DT0xVTU5fQURERUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEFkZERpYWdyYW1BY3Rpb25zID1cclxuXHR8IEFkZERpYWdyYW1BY3Rpb25cclxuXHR8IEFkZERpYWdyYW1BY3Rpb25TdGFydFxyXG5cdHwgQWRkRGlhZ3JhbUFjdGlvblN1Y2NlZWRcclxuXHR8IEFkZERpYWdyYW1BY3Rpb25GYWlsZWRcclxuXHR8IEhhdmVFbmRwb2ludEFjdGlvblxyXG5cdHwgRGF0YUxvYWRlZEFjdGlvblxyXG5cdHwgU3RydWN0dXJlRGVmaW5pdGlvblN0YXJ0QWN0aW9uXHJcblx0fCBTdHJ1Y3R1cmVEZWZpbml0aW9uRmluaXNoZWRBY3Rpb25cclxuXHR8IENvbHVtbnNNYXBwaW5nQ2hhbmdlZEFjdGlvblxyXG5cdHwgRGF0YUNhbGN1bGF0ZWRBY3Rpb25cclxuXHR8IEdlbmVyYXRlRGlhZ3JhbUFjdGlvblxyXG5cdHwgRGlhZ3JhbUNvbmZpZ0NoYW5nZWRBY3Rpb247XHJcbiJdfQ==