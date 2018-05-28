/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ProfileViewModel } from "../models";
import { SearchActionTypes } from "./search.actions";
/**
 * @record
 */
export function State() { }
function State_tsickle_Closure_declarations() {
    /** @type {?} */
    State.prototype.status;
    /** @type {?} */
    State.prototype.data;
}
export const /** @type {?} */ initialState = {
    status: "pristine",
    data: new ProfileViewModel.Response()
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case SearchActionTypes.SEARCH: {
            return Object.assign({}, state, { status: "dirty", data: new ProfileViewModel.Response() });
        }
        case SearchActionTypes.SEARCH_START: {
            return Object.assign({}, state, { status: "pending" });
        }
        case SearchActionTypes.SEARCH_SUCCEED: {
            return Object.assign({}, state, { status: "succeed", data: action.payload });
        }
        case SearchActionTypes.SEARCH_FAILED: {
            return Object.assign({}, state, { status: "failed" });
        }
        case SearchActionTypes.CLEAR_SEARCHED_USER: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}
export var /** @type {?} */ getStatus = (state) => state.status;
export var /** @type {?} */ getUserInfo = (state) => state.data;
//# sourceMappingURL=search.reducer.js.map
