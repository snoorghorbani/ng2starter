/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { SignInActionTypes } from "../actions/signin.actions";
import { UserModel } from "../models/user.model";
/**
 * @record
 */
export function State() { }
function State_tsickle_Closure_declarations() {
    /** @type {?} */
    State.prototype.loggedIn;
    /** @type {?} */
    State.prototype.user;
}
export var /** @type {?} */ initialState = {
    loggedIn: false,
    user: new UserModel({ Id: 1 })
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function UserReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case SignInActionTypes.SIGNIN_SUCCEED: {
            return Object.assign({}, state, { loggedIn: true, user: action.payload });
        }
        case SignInActionTypes.SIGNOUT: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}
//#region  selectors
export var /** @type {?} */ getLoggedIn = function (state) { return state.loggedIn; };
export var /** @type {?} */ getUser = function (state) { return state.user; };
//#endregion
//# sourceMappingURL=user.reducer.js.map
