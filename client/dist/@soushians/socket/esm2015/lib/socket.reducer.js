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
    State.prototype.number;
}
export const /** @type {?} */ initialState = {
    number: 0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function Reducer(state = initialState, action) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}
/**
 * @record
 */
export function SocketState() { }
function SocketState_tsickle_Closure_declarations() {
    /** @type {?} */
    SocketState.prototype.change;
}
export const /** @type {?} */ SocketReducer = {
    change: Reducer
};
/**
 * @record
 */
export function AppState() { }
function AppState_tsickle_Closure_declarations() {
    /** @type {?} */
    AppState.prototype.socket;
}
//# sourceMappingURL=socket.reducer.js.map
