/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
export function State() { }
function State_tsickle_Closure_declarations() {
    /** @type {?} */
    State.prototype.route;
    /** @type {?} */
    State.prototype.result;
}
;
export const /** @type {?} */ initialState = {
    route: '',
    result: false
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function ParentGuardReducer(state = initialState, action) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}
export var /** @type {?} */ getParentRoutingGuard = (state) => state;
//# sourceMappingURL=parent-guard.reducer.js.map
