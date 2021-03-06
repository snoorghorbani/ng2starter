/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS12aWV3LmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUtDLGFBQWMsNkJBQTZCO0lBQzNDLG1CQUFvQixtQ0FBbUM7SUFDdkQscUJBQXNCLHFDQUFxQztJQUMzRCxvQkFBcUIsb0NBQW9DOzs7QUFHMUQ7SUFBQTtRQUNVLFNBQUksR0FBRyxzQkFBc0IsQ0FBQyxXQUFXLENBQUM7SUFDcEQsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQSwwQkFBbUQ7O0FBRXBEO0lBQUE7UUFDVSxTQUFJLEdBQUcsc0JBQXNCLENBQUMsaUJBQWlCLENBQUM7SUFDMUQsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQSwrQkFBeUQ7O0FBRTFEO0lBRUMsMkJBQW1CLE9BQWtDO1FBQWxDLFlBQU8sR0FBUCxPQUFPLENBQTJCO1FBRDVDLFNBQUksR0FBRyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQztJQUNILENBQUM7SUFDMUQsd0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZBLGlDQUEyRDs7SUFDL0Msb0NBQXlDOztBQUV0RDtJQUFBO1FBQ1UsU0FBSSxHQUFHLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDO0lBQzNELENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREEsZ0NBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlVmlld01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wcm9maWxlLXZpZXcubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMge1xyXG5cdEdFVF9QUk9GSUxFID0gXCJbVVNFUl1bUFJPRklMRV0gR0VUX1BST0ZJTEVcIixcclxuXHRHRVRfUFJPRklMRV9TVEFSVCA9IFwiW1VTRVJdW1BST0ZJTEVdIEdFVF9QUk9GSUxFX1NUQVJUXCIsXHJcblx0R0VUX1BST0ZJTEVfU1VDQ0VFRCA9IFwiW1VTRVJdW1BST0ZJTEVdIEdFVF9QUk9GSUxFX1NVQ0NFRURcIixcclxuXHRHRVRfUFJPRklMRV9GQUlMRUQgPSBcIltVU0VSXVtQUk9GSUxFXSBHRVRfUFJPRklMRV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0UHJvZmlsZSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEU7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFByb2ZpbGVTdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEVfU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFByb2ZpbGVTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRV9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRQcm9maWxlRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRV9GQUlMRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFByb2ZpbGVWaWV3QWN0aW9uID0gR2V0UHJvZmlsZSB8IEdldFByb2ZpbGVTdGFydCB8IEdldFByb2ZpbGVTdWNjZWVkIHwgR2V0UHJvZmlsZUZhaWxlZDtcclxuIl19