/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var DiagramsActionTypes = {
    GET_DIAGRAM: '[DIAGRAM] GET_DIAGRAM',
    GET_DIAGRAM_START: '[DIAGRAM] GET_DIAGRAM_START',
    GET_DIAGRAM_SUCCEED: '[DIAGRAM] GET_DIAGRAM_SUCCEED',
    GET_DIAGRAM_FAILED: '[DIAGRAM] GET_DIAGRAM_FAILED',
};
export { DiagramsActionTypes };
var GetDiagrams = /** @class */ (function () {
    function GetDiagrams() {
        this.type = DiagramsActionTypes.GET_DIAGRAM;
    }
    return GetDiagrams;
}());
export { GetDiagrams };
function GetDiagrams_tsickle_Closure_declarations() {
    /** @type {?} */
    GetDiagrams.prototype.type;
}
var GetDiagramsStart = /** @class */ (function () {
    function GetDiagramsStart() {
        this.type = DiagramsActionTypes.GET_DIAGRAM_START;
    }
    return GetDiagramsStart;
}());
export { GetDiagramsStart };
function GetDiagramsStart_tsickle_Closure_declarations() {
    /** @type {?} */
    GetDiagramsStart.prototype.type;
}
var GetDiagramsSucceed = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function GetDiagramsSucceed(payload) {
        this.payload = payload;
        this.type = DiagramsActionTypes.GET_DIAGRAM_SUCCEED;
    }
    return GetDiagramsSucceed;
}());
export { GetDiagramsSucceed };
function GetDiagramsSucceed_tsickle_Closure_declarations() {
    /** @type {?} */
    GetDiagramsSucceed.prototype.type;
    /** @type {?} */
    GetDiagramsSucceed.prototype.payload;
}
var GetDiagramsFailed = /** @class */ (function () {
    function GetDiagramsFailed() {
        this.type = DiagramsActionTypes.GET_DIAGRAM_FAILED;
    }
    return GetDiagramsFailed;
}());
export { GetDiagramsFailed };
function GetDiagramsFailed_tsickle_Closure_declarations() {
    /** @type {?} */
    GetDiagramsFailed.prototype.type;
}
//# sourceMappingURL=diagrams.actions.js.map
