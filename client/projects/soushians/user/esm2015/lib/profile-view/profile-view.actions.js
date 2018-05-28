/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const ProfileViewActionTypes = {
    GET_PROFILE: "[USER][PROFILE] GET_PROFILE",
    GET_PROFILE_START: "[USER][PROFILE] GET_PROFILE_START",
    GET_PROFILE_SUCCEED: "[USER][PROFILE] GET_PROFILE_SUCCEED",
    GET_PROFILE_FAILED: "[USER][PROFILE] GET_PROFILE_FAILED",
};
export { ProfileViewActionTypes };
export class GetProfile {
    constructor() {
        this.type = ProfileViewActionTypes.GET_PROFILE;
    }
}
function GetProfile_tsickle_Closure_declarations() {
    /** @type {?} */
    GetProfile.prototype.type;
}
export class GetProfileStart {
    constructor() {
        this.type = ProfileViewActionTypes.GET_PROFILE_START;
    }
}
function GetProfileStart_tsickle_Closure_declarations() {
    /** @type {?} */
    GetProfileStart.prototype.type;
}
export class GetProfileSucceed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ProfileViewActionTypes.GET_PROFILE_SUCCEED;
    }
}
function GetProfileSucceed_tsickle_Closure_declarations() {
    /** @type {?} */
    GetProfileSucceed.prototype.type;
    /** @type {?} */
    GetProfileSucceed.prototype.payload;
}
export class GetProfileFailed {
    constructor() {
        this.type = ProfileViewActionTypes.GET_PROFILE_FAILED;
    }
}
function GetProfileFailed_tsickle_Closure_declarations() {
    /** @type {?} */
    GetProfileFailed.prototype.type;
}
//# sourceMappingURL=profile-view.actions.js.map
