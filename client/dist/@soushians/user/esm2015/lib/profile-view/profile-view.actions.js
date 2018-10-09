/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
if (false) {
    /** @type {?} */
    GetProfile.prototype.type;
}
export class GetProfileStart {
    constructor() {
        this.type = ProfileViewActionTypes.GET_PROFILE_START;
    }
}
if (false) {
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
if (false) {
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
if (false) {
    /** @type {?} */
    GetProfileFailed.prototype.type;
}
/** @typedef {?} */
var ProfileViewAction;
export { ProfileViewAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS12aWV3LmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQU1DLGFBQWMsNkJBQTZCO0lBQzNDLG1CQUFvQixtQ0FBbUM7SUFDdkQscUJBQXNCLHFDQUFxQztJQUMzRCxvQkFBcUIsb0NBQW9DOzs7QUFHMUQsTUFBTTs7b0JBQ1csc0JBQXNCLENBQUMsV0FBVzs7Q0FDbEQ7Ozs7O0FBQ0QsTUFBTTs7b0JBQ1csc0JBQXNCLENBQUMsaUJBQWlCOztDQUN4RDs7Ozs7QUFDRCxNQUFNOzs7O0lBRUwsWUFBbUIsT0FBa0M7UUFBbEMsWUFBTyxHQUFQLE9BQU8sQ0FBMkI7b0JBRHJDLHNCQUFzQixDQUFDLG1CQUFtQjtLQUNEO0NBQ3pEOzs7Ozs7O0FBQ0QsTUFBTTs7b0JBQ1csc0JBQXNCLENBQUMsa0JBQWtCOztDQUN6RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMge1xyXG5cdEdFVF9QUk9GSUxFID0gXCJbVVNFUl1bUFJPRklMRV0gR0VUX1BST0ZJTEVcIixcclxuXHRHRVRfUFJPRklMRV9TVEFSVCA9IFwiW1VTRVJdW1BST0ZJTEVdIEdFVF9QUk9GSUxFX1NUQVJUXCIsXHJcblx0R0VUX1BST0ZJTEVfU1VDQ0VFRCA9IFwiW1VTRVJdW1BST0ZJTEVdIEdFVF9QUk9GSUxFX1NVQ0NFRURcIixcclxuXHRHRVRfUFJPRklMRV9GQUlMRUQgPSBcIltVU0VSXVtQUk9GSUxFXSBHRVRfUFJPRklMRV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0UHJvZmlsZSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEU7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFByb2ZpbGVTdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEVfU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFByb2ZpbGVTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRV9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRQcm9maWxlRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRV9GQUlMRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFByb2ZpbGVWaWV3QWN0aW9uID0gR2V0UHJvZmlsZSB8IEdldFByb2ZpbGVTdGFydCB8IEdldFByb2ZpbGVTdWNjZWVkIHwgR2V0UHJvZmlsZUZhaWxlZDtcclxuIl19