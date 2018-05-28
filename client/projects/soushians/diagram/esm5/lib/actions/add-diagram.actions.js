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
    /**
     * @param {?} payload
     */
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
    /**
     * @param {?} payload
     */
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
    /**
     * @param {?} payload
     */
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
    /**
     * @param {?} payload
     */
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
    /**
     * @param {?} payload
     */
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
    /**
     * @param {?} payload
     */
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
    /**
     * @param {?} payload
     */
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
    /**
     * @param {?} payload
     */
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
    /**
     * @param {?} payload
     */
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
    /**
     * @param {?} payload
     */
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
    /**
     * @param {?} payload
     */
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
//# sourceMappingURL=add-diagram.actions.js.map
