/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var EditProfileActionTypes = {
    EDIT_PROFILE: "[USER][PASSWORD] EDIT_PROFILE",
    EDIT_PROFILE_START: "[USER][PASSWORD] EDIT_PROFILE_START",
    EDIT_PROFILE_SUCCEED: "[USER][PASSWORD] EDIT_PROFILE_SUCCEED",
    EDIT_PROFILE_FAILED: "[USER][PASSWORD] EDIT_PROFILE_FAILED",
};
export { EditProfileActionTypes };
var EditProfile = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function EditProfile(payload) {
        this.payload = payload;
        this.type = EditProfileActionTypes.EDIT_PROFILE;
    }
    return EditProfile;
}());
export { EditProfile };
function EditProfile_tsickle_Closure_declarations() {
    /** @type {?} */
    EditProfile.prototype.type;
    /** @type {?} */
    EditProfile.prototype.payload;
}
var EditProfileStart = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function EditProfileStart(payload) {
        this.payload = payload;
        this.type = EditProfileActionTypes.EDIT_PROFILE_START;
    }
    return EditProfileStart;
}());
export { EditProfileStart };
function EditProfileStart_tsickle_Closure_declarations() {
    /** @type {?} */
    EditProfileStart.prototype.type;
    /** @type {?} */
    EditProfileStart.prototype.payload;
}
var EditProfileSucceed = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function EditProfileSucceed(payload) {
        this.payload = payload;
        this.type = EditProfileActionTypes.EDIT_PROFILE_SUCCEED;
    }
    return EditProfileSucceed;
}());
export { EditProfileSucceed };
function EditProfileSucceed_tsickle_Closure_declarations() {
    /** @type {?} */
    EditProfileSucceed.prototype.type;
    /** @type {?} */
    EditProfileSucceed.prototype.payload;
}
var EditProfileFailed = /** @class */ (function () {
    function EditProfileFailed() {
        this.type = EditProfileActionTypes.EDIT_PROFILE_FAILED;
    }
    return EditProfileFailed;
}());
export { EditProfileFailed };
function EditProfileFailed_tsickle_Closure_declarations() {
    /** @type {?} */
    EditProfileFailed.prototype.type;
}
//# sourceMappingURL=edit-profile.actions.js.map
