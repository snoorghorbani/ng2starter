/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
if (false) {
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
if (false) {
    /** @type {?} */
    GetProfileStart.prototype.type;
}
var GetProfileSucceed = /** @class */ (function () {
    function GetProfileSucceed(payload) {
        this.payload = payload;
        this.type = ProfileViewActionTypes.GET_PROFILE_SUCCEED;
    }
    return GetProfileSucceed;
}());
export { GetProfileSucceed };
if (false) {
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
if (false) {
    /** @type {?} */
    GetProfileFailed.prototype.type;
}
/** @typedef {?} */
var ProfileViewAction;
export { ProfileViewAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS12aWV3LmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUtDLGFBQWMsNkJBQTZCO0lBQzNDLG1CQUFvQixtQ0FBbUM7SUFDdkQscUJBQXNCLHFDQUFxQztJQUMzRCxvQkFBcUIsb0NBQW9DOzs7QUFHMUQsSUFBQTs7b0JBQ2lCLHNCQUFzQixDQUFDLFdBQVc7O3FCQVpuRDtJQWFDLENBQUE7QUFGRCxzQkFFQzs7Ozs7QUFDRCxJQUFBOztvQkFDaUIsc0JBQXNCLENBQUMsaUJBQWlCOzswQkFmekQ7SUFnQkMsQ0FBQTtBQUZELDJCQUVDOzs7OztBQUNELElBQUE7SUFFQywyQkFBbUIsT0FBa0M7UUFBbEMsWUFBTyxHQUFQLE9BQU8sQ0FBMkI7b0JBRHJDLHNCQUFzQixDQUFDLG1CQUFtQjtLQUNEOzRCQW5CMUQ7SUFvQkMsQ0FBQTtBQUhELDZCQUdDOzs7Ozs7O0FBQ0QsSUFBQTs7b0JBQ2lCLHNCQUFzQixDQUFDLGtCQUFrQjs7MkJBdEIxRDtJQXVCQyxDQUFBO0FBRkQsNEJBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3Byb2ZpbGUtdmlldy5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gUHJvZmlsZVZpZXdBY3Rpb25UeXBlcyB7XHJcblx0R0VUX1BST0ZJTEUgPSBcIltVU0VSXVtQUk9GSUxFXSBHRVRfUFJPRklMRVwiLFxyXG5cdEdFVF9QUk9GSUxFX1NUQVJUID0gXCJbVVNFUl1bUFJPRklMRV0gR0VUX1BST0ZJTEVfU1RBUlRcIixcclxuXHRHRVRfUFJPRklMRV9TVUNDRUVEID0gXCJbVVNFUl1bUFJPRklMRV0gR0VUX1BST0ZJTEVfU1VDQ0VFRFwiLFxyXG5cdEdFVF9QUk9GSUxFX0ZBSUxFRCA9IFwiW1VTRVJdW1BST0ZJTEVdIEdFVF9QUk9GSUxFX0ZBSUxFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRQcm9maWxlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRTtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UHJvZmlsZVN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRV9TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UHJvZmlsZVN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2UpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFByb2ZpbGVGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUHJvZmlsZVZpZXdBY3Rpb24gPSBHZXRQcm9maWxlIHwgR2V0UHJvZmlsZVN0YXJ0IHwgR2V0UHJvZmlsZVN1Y2NlZWQgfCBHZXRQcm9maWxlRmFpbGVkO1xyXG4iXX0=