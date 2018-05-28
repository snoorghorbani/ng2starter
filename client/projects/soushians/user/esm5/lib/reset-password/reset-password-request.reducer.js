/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ResetPasswordRequestActionTypes } from "./reset-password-request.actions";
/**
 * @record
 */
export function State() { }
function State_tsickle_Closure_declarations() {
    /** @type {?} */
    State.prototype.numberOfRequested;
    /** @type {?} */
    State.prototype.lastRequestedTime;
    /** @type {?} */
    State.prototype.disable;
}
export var /** @type {?} */ initialState = {
    numberOfRequested: 0,
    lastRequestedTime: null,
    disable: false
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ResetPasswordRequestActionTypes.GET_RESET_PASSWORD_LINK: {
            return Object.assign({}, state);
        }
        case ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START: {
            return Object.assign({}, state, { numberOfRequested: state.numberOfRequested + 1, lastRequestedTime: Date.now().toString() });
        }
        case ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_SUCCEED: {
            return Object.assign({}, state);
        }
        case ResetPasswordRequestActionTypes.DISABLE_GET_LINK: {
            return Object.assign({}, state, { disable: true });
        }
        case ResetPasswordRequestActionTypes.ENABLE_GET_LINK: {
            return Object.assign({}, state, { disable: false });
        }
        default: {
            return state;
        }
    }
}
export var /** @type {?} */ getNumberOfRequeseted = function (state) { return state.numberOfRequested; };
export var /** @type {?} */ getStatus = function (state) { return state.disable; };
//# sourceMappingURL=reset-password-request.reducer.js.map
