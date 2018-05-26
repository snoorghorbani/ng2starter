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
//# sourceMappingURL=add-diagram.actions.js.map
