/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var EditDiagramActionTypes = {
    EDIT_DIAGRAM: '[DIAGRAM][EDIT] EDIT_DIAGRAM',
    EDIT_DIAGRAM_START: '[DIAGRAM][EDIT] EDIT_DIAGRAM_START',
    EDIT_DIAGRAM_SUCCEED: '[DIAGRAM][EDIT] EDIT_DIAGRAM_SUCCEED',
    EDIT_DIAGRAM_FAILED: '[DIAGRAM][EDIT] EDIT_DIAGRAM_FAILED',
};
export { EditDiagramActionTypes };
var EditDiagramAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function EditDiagramAction(payload) {
        this.payload = payload;
        this.type = EditDiagramActionTypes.EDIT_DIAGRAM;
    }
    return EditDiagramAction;
}());
export { EditDiagramAction };
function EditDiagramAction_tsickle_Closure_declarations() {
    /** @type {?} */
    EditDiagramAction.prototype.type;
    /** @type {?} */
    EditDiagramAction.prototype.payload;
}
var EditDiagramActionStart = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function EditDiagramActionStart(payload) {
        this.payload = payload;
        this.type = EditDiagramActionTypes.EDIT_DIAGRAM_START;
    }
    return EditDiagramActionStart;
}());
export { EditDiagramActionStart };
function EditDiagramActionStart_tsickle_Closure_declarations() {
    /** @type {?} */
    EditDiagramActionStart.prototype.type;
    /** @type {?} */
    EditDiagramActionStart.prototype.payload;
}
var EditDiagramActionSucceed = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function EditDiagramActionSucceed(payload) {
        this.payload = payload;
        this.type = EditDiagramActionTypes.EDIT_DIAGRAM_SUCCEED;
    }
    return EditDiagramActionSucceed;
}());
export { EditDiagramActionSucceed };
function EditDiagramActionSucceed_tsickle_Closure_declarations() {
    /** @type {?} */
    EditDiagramActionSucceed.prototype.type;
    /** @type {?} */
    EditDiagramActionSucceed.prototype.payload;
}
var EditDiagramActionFailed = /** @class */ (function () {
    function EditDiagramActionFailed() {
        this.type = EditDiagramActionTypes.EDIT_DIAGRAM_FAILED;
    }
    return EditDiagramActionFailed;
}());
export { EditDiagramActionFailed };
function EditDiagramActionFailed_tsickle_Closure_declarations() {
    /** @type {?} */
    EditDiagramActionFailed.prototype.type;
}
//# sourceMappingURL=edit-diagram.actions.js.map
