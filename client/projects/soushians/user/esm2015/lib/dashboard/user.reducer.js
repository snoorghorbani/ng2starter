/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { UserModel } from "../models";
import { UserActionTypes } from "./user.actions";
/**
 * @record
 */
export function State() { }
function State_tsickle_Closure_declarations() {
    /** @type {?} */
    State.prototype.loaded;
    /** @type {?} */
    State.prototype.data;
}
export const /** @type {?} */ initialState = {
    loaded: false,
    data: new UserModel()
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function userReducer(state = initialState, action) {
    switch (action.type) {
        case UserActionTypes.USER_SELECTED: {
            return Object.assign({}, state, { loaded: true, data: action.payload });
        }
        case UserActionTypes.REFRESH_USER_INFO: {
            return Object.assign({}, state, { loaded: true, data: action.payload });
        }
        default: {
            return state;
        }
    }
}
export const /** @type {?} */ getUser = (state) => state.data;
//# sourceMappingURL=user.reducer.js.map
