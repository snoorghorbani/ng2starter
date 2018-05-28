/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const ToolbarActionTypes = {
    COMPORTABLE: "[Layout][TOOLBAR] COMPORTABLE",
    COMPACT: "[Layout][TOOLBAR] COMPACT",
    SUMMARY: "[Layout][TOOLBAR] SUMMARY",
    ENABLE_COMFORTABLE_MODE: "[Layout][TOOLBAR] ENABLE_COMFORTABLE_MODE",
    DISBALE_COMFORTABLE_MODE: "[Layout][TOOLBAR] DISBALE_COMFORTABLE_MODE",
};
export { ToolbarActionTypes };
export class ChangeToolbatToComfortableModeAction {
    constructor() {
        this.type = ToolbarActionTypes.COMPORTABLE;
    }
}
function ChangeToolbatToComfortableModeAction_tsickle_Closure_declarations() {
    /** @type {?} */
    ChangeToolbatToComfortableModeAction.prototype.type;
}
export class ChangeToolbatToCompactModeAction {
    constructor() {
        this.type = ToolbarActionTypes.COMPACT;
    }
}
function ChangeToolbatToCompactModeAction_tsickle_Closure_declarations() {
    /** @type {?} */
    ChangeToolbatToCompactModeAction.prototype.type;
}
export class ChangeToolbatToSummaryModeAction {
    constructor() {
        this.type = ToolbarActionTypes.SUMMARY;
    }
}
function ChangeToolbatToSummaryModeAction_tsickle_Closure_declarations() {
    /** @type {?} */
    ChangeToolbatToSummaryModeAction.prototype.type;
}
export class EnableComfortableModeAction {
    constructor() {
        this.type = ToolbarActionTypes.ENABLE_COMFORTABLE_MODE;
    }
}
function EnableComfortableModeAction_tsickle_Closure_declarations() {
    /** @type {?} */
    EnableComfortableModeAction.prototype.type;
}
export class DisableComfortableModeAction {
    constructor() {
        this.type = ToolbarActionTypes.DISBALE_COMFORTABLE_MODE;
    }
}
function DisableComfortableModeAction_tsickle_Closure_declarations() {
    /** @type {?} */
    DisableComfortableModeAction.prototype.type;
}
//# sourceMappingURL=toolbar.js.map
