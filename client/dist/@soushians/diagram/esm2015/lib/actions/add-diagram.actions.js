/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const AddDiagramActionTypes = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRpYWdyYW0uYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9hY3Rpb25zL2FkZC1kaWFncmFtLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2lCQUtnQiw0QkFBNEI7dUJBQ3RCLGtDQUFrQzt5QkFDaEMsb0NBQW9DOzRCQUNqQyx1Q0FBdUM7d0JBQzNDLG1DQUFtQztnQ0FDM0IsMkNBQTJDO21CQUN4RCwrQkFBK0I7aUJBQ2pDLDRCQUE0Qjs4QkFDZix5Q0FBeUM7NkJBQzFDLHdDQUF3QztxQkFDaEQsZ0NBQWdDO2tCQUNuQyw2QkFBNkI7c0JBQ3pCLGlDQUFpQzs7O0FBR3RELE1BQU07Ozs7SUFFSixZQUFtQixPQUFvQztRQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUE2QjtvQkFEdkMscUJBQXFCLENBQUMsV0FBVztLQUNXO0NBQzdEOzs7Ozs7O0FBQ0QsTUFBTTs7OztJQUVKLFlBQW1CLE9BQW9DO1FBQXBDLFlBQU8sR0FBUCxPQUFPLENBQTZCO29CQUR2QyxxQkFBcUIsQ0FBQyxpQkFBaUI7S0FDSztDQUM3RDs7Ozs7OztBQUNELE1BQU07Ozs7SUFFSixZQUFtQixPQUFvQztRQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUE2QjtvQkFEdkMscUJBQXFCLENBQUMsbUJBQW1CO0tBQ0c7Q0FDN0Q7Ozs7Ozs7QUFDRCxNQUFNOztvQkFDWSxxQkFBcUIsQ0FBQyxrQkFBa0I7O0NBQ3pEOzs7OztBQUNELE1BQU07Ozs7SUFFSixZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztvQkFEZixxQkFBcUIsQ0FBQyxzQkFBc0I7S0FDeEI7Q0FDckM7Ozs7Ozs7QUFDRCxNQUFNOzs7O0lBRUosWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7b0JBRGYscUJBQXFCLENBQUMsYUFBYTtLQUNmO0NBQ3JDOzs7Ozs7O0FBQ0QsTUFBTTs7OztJQUVKLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO29CQURmLHFCQUFxQixDQUFDLFdBQVc7S0FDYjtDQUNyQzs7Ozs7OztBQUNELE1BQU07Ozs7SUFFSixZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztvQkFEZixxQkFBcUIsQ0FBQywwQkFBMEI7S0FDNUI7Q0FDckM7Ozs7Ozs7QUFDRCxNQUFNOzs7O0lBRUosWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7b0JBRGYscUJBQXFCLENBQUMsd0JBQXdCO0tBQzFCO0NBQ3JDOzs7Ozs7O0FBQ0QsTUFBTTs7OztJQUVKLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO29CQURmLHFCQUFxQixDQUFDLHVCQUF1QjtLQUN6QjtDQUNyQzs7Ozs7OztBQUNELE1BQU07Ozs7SUFFSixZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztvQkFEZixxQkFBcUIsQ0FBQyxlQUFlO0tBQ2pCO0NBQ3JDOzs7Ozs7O0FBQ0QsTUFBTTs7OztJQUVKLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO29CQURmLHFCQUFxQixDQUFDLGdCQUFnQjtLQUNsQjtDQUNyQzs7Ozs7OztBQUVELE1BQU07O29CQUNZLHFCQUFxQixDQUFDLFlBQVk7O0NBQ25EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzIHtcclxuICBBRERfRElBR1JBTSA9ICdbRElBR1JBTV1bQUREXSBBRERfRElBR1JBTScsXHJcbiAgQUREX0RJQUdSQU1fU1RBUlQgPSAnW0RJQUdSQU1dW0FERF0gQUREX0RJQUdSQU1fU1RBUlQnLFxyXG4gIEFERF9ESUFHUkFNX1NVQ0NFRUQgPSAnW0RJQUdSQU1dW0FERF0gQUREX0RJQUdSQU1fU1VDQ0VFRCcsXHJcbiAgRElBR1JBTV9DT05GSUdfQ0hBTkdFRCA9ICdbRElBR1JBTV1bQUREXSBESUFHUkFNX0NPTkZJR19DSEFOR0VEJyxcclxuICBBRERfRElBR1JBTV9GQUlMRUQgPSAnW0RJQUdSQU1dW0FERF0gQUREX0RJQUdSQU1fRkFJTEVEJyxcclxuICBTVFJVQ1RVUkVfREVGSU5JVElPTl9TVEFSVCA9ICdbRElBR1JBTV1bQUREXSBTVFJVQ1RVUkVfREVGSU5JVElPTl9TVEFSVCcsXHJcbiAgSEFWRV9FTkRQT0lOVCA9ICdbRElBR1JBTV1bQUREXSBIQVZFX1NUUlVDVFVSRScsXHJcbiAgREFUQV9MT0FERUQgPSAnW0RJQUdSQU1dW0FERF0gREFUQV9MT0FERUQnLFxyXG4gIFNUUlVDVFVSRV9ERUZJTklUSU9OX0VORCA9ICdbRElBR1JBTV1bQUREXSBTVFJVQ1RVUkVfREVGSU5JVElPTl9FTkQnLFxyXG4gIENPTFVNTlNfTUFQUElOR19DSEFOR0VEID0gJ1tESUFHUkFNXVtBRERdIENPTFVNTlNfTUFQUElOR19DSEFOR0VEJyxcclxuICBEQVRBX0NBTENVTEFURUQgPSAnW0RJQUdSQU1dW0FERF0gREFUQV9DQUxDVUxBVEVEJyxcclxuICBDT0xVTU5fQURERUQgPSAnW0RJQUdSQU1dW0FERF0gQ09MVU1OX0FEREVEJyxcclxuICBHRU5FUkFURV9ESUFHUkFNID0gJ1tESUFHUkFNXVtBRERdIEdFTkVSQVRFX0RJQUdSQU0nXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBZGREaWFncmFtQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBZGREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2UpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGREaWFncmFtQWN0aW9uU3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU1fU1RBUlQ7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1BY3Rpb25TdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX1NVQ0NFRUQ7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1BY3Rpb25GYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU1fRkFJTEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtQ29uZmlnQ2hhbmdlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5ESUFHUkFNX0NPTkZJR19DSEFOR0VEO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBIYXZlRW5kcG9pbnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuSEFWRV9FTkRQT0lOVDtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgRGF0YUxvYWRlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5EQVRBX0xPQURFRDtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGVmaW5pdGlvblN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLlNUUlVDVFVSRV9ERUZJTklUSU9OX1NUQVJUO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEZWZpbml0aW9uRmluaXNoZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuU1RSVUNUVVJFX0RFRklOSVRJT05fRU5EO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDb2x1bW5zTWFwcGluZ0NoYW5nZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQ09MVU1OU19NQVBQSU5HX0NIQU5HRUQ7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERhdGFDYWxjdWxhdGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkRBVEFfQ0FMQ1VMQVRFRDtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgR2VuZXJhdGVEaWFncmFtQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkdFTkVSQVRFX0RJQUdSQU07XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2x1bW5BZGRlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5DT0xVTU5fQURERUQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgdHlwZSBBZGREaWFncmFtQWN0aW9ucyA9XHJcbiAgQWRkRGlhZ3JhbUFjdGlvblxyXG4gIHwgQWRkRGlhZ3JhbUFjdGlvblN0YXJ0XHJcbiAgfCBBZGREaWFncmFtQWN0aW9uU3VjY2VlZFxyXG4gIHwgQWRkRGlhZ3JhbUFjdGlvbkZhaWxlZFxyXG4gIHwgSGF2ZUVuZHBvaW50QWN0aW9uXHJcbiAgfCBEYXRhTG9hZGVkQWN0aW9uXHJcbiAgfCBTdHJ1Y3R1cmVEZWZpbml0aW9uU3RhcnRBY3Rpb25cclxuICB8IFN0cnVjdHVyZURlZmluaXRpb25GaW5pc2hlZEFjdGlvblxyXG4gIHwgQ29sdW1uc01hcHBpbmdDaGFuZ2VkQWN0aW9uXHJcbiAgfCBEYXRhQ2FsY3VsYXRlZEFjdGlvblxyXG4gIHwgR2VuZXJhdGVEaWFncmFtQWN0aW9uXHJcbiAgfCBEaWFncmFtQ29uZmlnQ2hhbmdlZEFjdGlvbjtcclxuIl19