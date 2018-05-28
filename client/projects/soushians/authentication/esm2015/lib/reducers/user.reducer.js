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
export const /** @type {?} */ initialState = {
    loggedIn: false,
    user: new UserModel({ Id: 1 })
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function UserReducer(state = initialState, action) {
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
export const /** @type {?} */ getLoggedIn = (state) => state.loggedIn;
export const /** @type {?} */ getUser = (state) => state.user;
//#endregion
//# sourceMappingURL=user.reducer.js.map
