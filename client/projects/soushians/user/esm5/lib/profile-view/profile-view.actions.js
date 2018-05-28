/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var ProfileViewActionTypes = {
    GET_PROFILE: "[USER][PROFILE] GET_PROFILE",
    GET_PROFILE_START: "[USER][PROFILE] GET_PROFILE_START",
    GET_PROFILE_SUCCEED: "[USER][PROFILE] GET_PROFILE_SUCCEED",
    GET_PROFILE_FAILED: "[USER][PROFILE] GET_PROFILE_FAILED",
};
export { ProfileViewActionTypes };
var GetProfile = /** @class */ (function () {
    function GetProfile() {
        this.type = ProfileViewActionTypes.GET_PROFILE;
    }
    return GetProfile;
}());
export { GetProfile };
function GetProfile_tsickle_Closure_declarations() {
    /** @type {?} */
    GetProfile.prototype.type;
}
var GetProfileStart = /** @class */ (function () {
    function GetProfileStart() {
        this.type = ProfileViewActionTypes.GET_PROFILE_START;
    }
    return GetProfileStart;
}());
export { GetProfileStart };
function GetProfileStart_tsickle_Closure_declarations() {
    /** @type {?} */
    GetProfileStart.prototype.type;
}
var GetProfileSucceed = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function GetProfileSucceed(payload) {
        this.payload = payload;
        this.type = ProfileViewActionTypes.GET_PROFILE_SUCCEED;
    }
    return GetProfileSucceed;
}());
export { GetProfileSucceed };
function GetProfileSucceed_tsickle_Closure_declarations() {
    /** @type {?} */
    GetProfileSucceed.prototype.type;
    /** @type {?} */
    GetProfileSucceed.prototype.payload;
}
var GetProfileFailed = /** @class */ (function () {
    function GetProfileFailed() {
        this.type = ProfileViewActionTypes.GET_PROFILE_FAILED;
    }
    return GetProfileFailed;
}());
export { GetProfileFailed };
function GetProfileFailed_tsickle_Closure_declarations() {
    /** @type {?} */
    GetProfileFailed.prototype.type;
}
//# sourceMappingURL=profile-view.actions.js.map
