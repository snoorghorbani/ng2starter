/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ToolbarActionTypes } from "../actions";
/**
 * @record
 */
export function State() { }
function State_tsickle_Closure_declarations() {
    /** @type {?} */
    State.prototype.mode;
    /** @type {?} */
    State.prototype.enableComfortableMode;
    /** @type {?} */
    State.prototype.comfortableModeHaveBeenDone;
}
var /** @type {?} */ initialState = {
    mode: "compact",
    enableComfortableMode: false,
    comfortableModeHaveBeenDone: false
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ToolbarActionTypes.COMPACT:
            return Object.assign({}, state, { mode: "compact" });
        case ToolbarActionTypes.COMPORTABLE:
            return Object.assign({}, state, { mode: state.enableComfortableMode ? "comfortable" : "compact" });
        case ToolbarActionTypes.SUMMARY:
            return Object.assign({}, state, { mode: "summary" });
        case ToolbarActionTypes.ENABLE_COMFORTABLE_MODE:
            return Object.assign({}, state, { enableComfortableMode: true });
        case ToolbarActionTypes.DISBALE_COMFORTABLE_MODE:
            return Object.assign({}, state, { mode: "compact", enableComfortableMode: false });
        default:
            return state;
    }
}
export var /** @type {?} */ getToolbarMode = function (state) { return state.mode; };
//# sourceMappingURL=toolbar.reducer.js.map
