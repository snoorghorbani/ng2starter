/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { EditProfileActionTypes } from './edit-profile.actions';
/**
 * @record
 */
export function State() { }
function State_tsickle_Closure_declarations() {
    /** @type {?} */
    State.prototype.status;
}
export var /** @type {?} */ initialState = {
    status: 'pristine'
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case EditProfileActionTypes.EDIT_PROFILE: {
            return {
                status: 'dirty'
            };
        }
        case EditProfileActionTypes.EDIT_PROFILE_START: {
            return {
                status: 'pending'
            };
        }
        case EditProfileActionTypes.EDIT_PROFILE_SUCCEED: {
            return {
                status: 'succeed'
            };
        }
        case EditProfileActionTypes.EDIT_PROFILE_FAILED: {
            return {
                status: 'failed'
            };
        }
        default: {
            return state;
        }
    }
}
export var /** @type {?} */ getStatus = function (state) { return state.status; };
//# sourceMappingURL=edit-profile.reducer.js.map
