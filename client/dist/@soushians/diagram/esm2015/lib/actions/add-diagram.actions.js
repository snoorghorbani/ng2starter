/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
/** @typedef {?} */
var AddDiagramActions;
export { AddDiagramActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRpYWdyYW0uYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9hY3Rpb25zL2FkZC1kaWFncmFtLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBS0MsYUFBYyw0QkFBNEI7SUFDMUMsbUJBQW9CLGtDQUFrQztJQUN0RCxxQkFBc0Isb0NBQW9DO0lBQzFELHdCQUF5Qix1Q0FBdUM7SUFDaEUsb0JBQXFCLG1DQUFtQztJQUN4RCw0QkFBNkIsMkNBQTJDO0lBQ3hFLGVBQWdCLCtCQUErQjtJQUMvQyxhQUFjLDRCQUE0QjtJQUMxQywwQkFBMkIseUNBQXlDO0lBQ3BFLHlCQUEwQix3Q0FBd0M7SUFDbEUsaUJBQWtCLGdDQUFnQztJQUNsRCxjQUFlLDZCQUE2QjtJQUM1QyxrQkFBbUIsaUNBQWlDOzs7QUFHckQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUU1QixZQUFtQixPQUFvQztRQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUE2QjtRQUR2RCxZQUFnQixxQkFBcUIsQ0FBQyxXQUFXLENBQUM7S0FDUztDQUMzRDs7Ozs7OztBQUNELE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFFakMsWUFBbUIsT0FBb0M7UUFBcEMsWUFBTyxHQUFQLE9BQU8sQ0FBNkI7UUFEdkQsWUFBZ0IscUJBQXFCLENBQUMsaUJBQWlCLENBQUM7S0FDRztDQUMzRDs7Ozs7OztBQUNELE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFFbkMsWUFBbUIsT0FBb0M7UUFBcEMsWUFBTyxHQUFQLE9BQU8sQ0FBNkI7UUFEdkQsWUFBZ0IscUJBQXFCLENBQUMsbUJBQW1CLENBQUM7S0FDQztDQUMzRDs7Ozs7OztBQUNELE1BQU0sT0FBTyxzQkFBc0I7O1FBQ2xDLFlBQWdCLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDOztDQUN6RDs7Ozs7QUFDRCxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBRXRDLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRC9CLFlBQWdCLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDO0tBQzFCO0NBQ25DOzs7Ozs7O0FBQ0QsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUU5QixZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUQvQixZQUFnQixxQkFBcUIsQ0FBQyxhQUFhLENBQUM7S0FDakI7Q0FDbkM7Ozs7Ozs7QUFDRCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBRTVCLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRC9CLFlBQWdCLHFCQUFxQixDQUFDLFdBQVcsQ0FBQztLQUNmO0NBQ25DOzs7Ozs7O0FBQ0QsTUFBTSxPQUFPLDhCQUE4Qjs7OztJQUUxQyxZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUQvQixZQUFnQixxQkFBcUIsQ0FBQywwQkFBMEIsQ0FBQztLQUM5QjtDQUNuQzs7Ozs7OztBQUNELE1BQU0sT0FBTyxpQ0FBaUM7Ozs7SUFFN0MsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEL0IsWUFBZ0IscUJBQXFCLENBQUMsd0JBQXdCLENBQUM7S0FDNUI7Q0FDbkM7Ozs7Ozs7QUFDRCxNQUFNLE9BQU8sMkJBQTJCOzs7O0lBRXZDLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRC9CLFlBQWdCLHFCQUFxQixDQUFDLHVCQUF1QixDQUFDO0tBQzNCO0NBQ25DOzs7Ozs7O0FBQ0QsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUVoQyxZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUQvQixZQUFnQixxQkFBcUIsQ0FBQyxlQUFlLENBQUM7S0FDbkI7Q0FDbkM7Ozs7Ozs7QUFDRCxNQUFNLE9BQU8scUJBQXFCOzs7O0lBRWpDLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRC9CLFlBQWdCLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDO0tBQ3BCO0NBQ25DOzs7Ozs7O0FBRUQsTUFBTSxPQUFPLFdBQVc7O1FBQ3ZCLFlBQWdCLHFCQUFxQixDQUFDLFlBQVksQ0FBQzs7Q0FDbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEFkZERpYWdyYW1BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvYWRkLWRpYWdyYW0tYXBpLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBBZGREaWFncmFtQWN0aW9uVHlwZXMge1xyXG5cdEFERF9ESUFHUkFNID0gXCJbRElBR1JBTV1bQUREXSBBRERfRElBR1JBTVwiLFxyXG5cdEFERF9ESUFHUkFNX1NUQVJUID0gXCJbRElBR1JBTV1bQUREXSBBRERfRElBR1JBTV9TVEFSVFwiLFxyXG5cdEFERF9ESUFHUkFNX1NVQ0NFRUQgPSBcIltESUFHUkFNXVtBRERdIEFERF9ESUFHUkFNX1NVQ0NFRURcIixcclxuXHRESUFHUkFNX0NPTkZJR19DSEFOR0VEID0gXCJbRElBR1JBTV1bQUREXSBESUFHUkFNX0NPTkZJR19DSEFOR0VEXCIsXHJcblx0QUREX0RJQUdSQU1fRkFJTEVEID0gXCJbRElBR1JBTV1bQUREXSBBRERfRElBR1JBTV9GQUlMRURcIixcclxuXHRTVFJVQ1RVUkVfREVGSU5JVElPTl9TVEFSVCA9IFwiW0RJQUdSQU1dW0FERF0gU1RSVUNUVVJFX0RFRklOSVRJT05fU1RBUlRcIixcclxuXHRIQVZFX0VORFBPSU5UID0gXCJbRElBR1JBTV1bQUREXSBIQVZFX1NUUlVDVFVSRVwiLFxyXG5cdERBVEFfTE9BREVEID0gXCJbRElBR1JBTV1bQUREXSBEQVRBX0xPQURFRFwiLFxyXG5cdFNUUlVDVFVSRV9ERUZJTklUSU9OX0VORCA9IFwiW0RJQUdSQU1dW0FERF0gU1RSVUNUVVJFX0RFRklOSVRJT05fRU5EXCIsXHJcblx0Q09MVU1OU19NQVBQSU5HX0NIQU5HRUQgPSBcIltESUFHUkFNXVtBRERdIENPTFVNTlNfTUFQUElOR19DSEFOR0VEXCIsXHJcblx0REFUQV9DQUxDVUxBVEVEID0gXCJbRElBR1JBTV1bQUREXSBEQVRBX0NBTENVTEFURURcIixcclxuXHRDT0xVTU5fQURERUQgPSBcIltESUFHUkFNXVtBRERdIENPTFVNTl9BRERFRFwiLFxyXG5cdEdFTkVSQVRFX0RJQUdSQU0gPSBcIltESUFHUkFNXVtBRERdIEdFTkVSQVRFX0RJQUdSQU1cIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQWRkRGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGREaWFncmFtQWN0aW9uU3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU1fU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUFjdGlvblN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU1fU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQWRkRGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGREaWFncmFtQWN0aW9uRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbUNvbmZpZ0NoYW5nZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuRElBR1JBTV9DT05GSUdfQ0hBTkdFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBIYXZlRW5kcG9pbnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuSEFWRV9FTkRQT0lOVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEYXRhTG9hZGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkRBVEFfTE9BREVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURlZmluaXRpb25TdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5TVFJVQ1RVUkVfREVGSU5JVElPTl9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEZWZpbml0aW9uRmluaXNoZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuU1RSVUNUVVJFX0RFRklOSVRJT05fRU5EO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENvbHVtbnNNYXBwaW5nQ2hhbmdlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5DT0xVTU5TX01BUFBJTkdfQ0hBTkdFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEYXRhQ2FsY3VsYXRlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5EQVRBX0NBTENVTEFURUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2VuZXJhdGVEaWFncmFtQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkdFTkVSQVRFX0RJQUdSQU07XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbHVtbkFkZGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkNPTFVNTl9BRERFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQWRkRGlhZ3JhbUFjdGlvbnMgPVxyXG5cdHwgQWRkRGlhZ3JhbUFjdGlvblxyXG5cdHwgQWRkRGlhZ3JhbUFjdGlvblN0YXJ0XHJcblx0fCBBZGREaWFncmFtQWN0aW9uU3VjY2VlZFxyXG5cdHwgQWRkRGlhZ3JhbUFjdGlvbkZhaWxlZFxyXG5cdHwgSGF2ZUVuZHBvaW50QWN0aW9uXHJcblx0fCBEYXRhTG9hZGVkQWN0aW9uXHJcblx0fCBTdHJ1Y3R1cmVEZWZpbml0aW9uU3RhcnRBY3Rpb25cclxuXHR8IFN0cnVjdHVyZURlZmluaXRpb25GaW5pc2hlZEFjdGlvblxyXG5cdHwgQ29sdW1uc01hcHBpbmdDaGFuZ2VkQWN0aW9uXHJcblx0fCBEYXRhQ2FsY3VsYXRlZEFjdGlvblxyXG5cdHwgR2VuZXJhdGVEaWFncmFtQWN0aW9uXHJcblx0fCBEaWFncmFtQ29uZmlnQ2hhbmdlZEFjdGlvbjtcclxuIl19