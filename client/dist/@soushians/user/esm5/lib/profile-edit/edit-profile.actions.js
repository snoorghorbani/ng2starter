/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    function EditProfile(payload) {
        this.payload = payload;
        this.type = EditProfileActionTypes.EDIT_PROFILE;
    }
    return EditProfile;
}());
export { EditProfile };
if (false) {
    /** @type {?} */
    EditProfile.prototype.type;
    /** @type {?} */
    EditProfile.prototype.payload;
}
var EditProfileStart = /** @class */ (function () {
    function EditProfileStart(payload) {
        this.payload = payload;
        this.type = EditProfileActionTypes.EDIT_PROFILE_START;
    }
    return EditProfileStart;
}());
export { EditProfileStart };
if (false) {
    /** @type {?} */
    EditProfileStart.prototype.type;
    /** @type {?} */
    EditProfileStart.prototype.payload;
}
var EditProfileSucceed = /** @class */ (function () {
    function EditProfileSucceed(payload) {
        this.payload = payload;
        this.type = EditProfileActionTypes.EDIT_PROFILE_SUCCEED;
    }
    return EditProfileSucceed;
}());
export { EditProfileSucceed };
if (false) {
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
if (false) {
    /** @type {?} */
    EditProfileFailed.prototype.type;
}
/** @typedef {?} */
var EditProfileAction;
export { EditProfileAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1wcm9maWxlLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS1lZGl0L2VkaXQtcHJvZmlsZS5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQU1DLGNBQWUsK0JBQStCO0lBQzlDLG9CQUFxQixxQ0FBcUM7SUFDMUQsc0JBQXVCLHVDQUF1QztJQUM5RCxxQkFBc0Isc0NBQXNDOzs7QUFHN0QsSUFBQTtJQUVDLHFCQUFtQixPQUFxQztRQUFyQyxZQUFPLEdBQVAsT0FBTyxDQUE4QjtvQkFEeEMsc0JBQXNCLENBQUMsWUFBWTtLQUNTO3NCQWQ3RDtJQWVDLENBQUE7QUFIRCx1QkFHQzs7Ozs7OztBQUNELElBQUE7SUFFQywwQkFBbUIsT0FBcUM7UUFBckMsWUFBTyxHQUFQLE9BQU8sQ0FBOEI7b0JBRHhDLHNCQUFzQixDQUFDLGtCQUFrQjtLQUNHOzJCQWxCN0Q7SUFtQkMsQ0FBQTtBQUhELDRCQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVDLDRCQUFtQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXO29CQURyQixzQkFBc0IsQ0FBQyxvQkFBb0I7S0FDbEI7NkJBdEIxQztJQXVCQyxDQUFBO0FBSEQsOEJBR0M7Ozs7Ozs7QUFDRCxJQUFBOztvQkFDaUIsc0JBQXNCLENBQUMsbUJBQW1COzs0QkF6QjNEO0lBMEJDLENBQUE7QUFGRCw2QkFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlX0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wcm9maWxlLWVkaXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEVkaXRQcm9maWxlQWN0aW9uVHlwZXMge1xyXG5cdEVESVRfUFJPRklMRSA9IFwiW1VTRVJdW1BBU1NXT1JEXSBFRElUX1BST0ZJTEVcIixcclxuXHRFRElUX1BST0ZJTEVfU1RBUlQgPSBcIltVU0VSXVtQQVNTV09SRF0gRURJVF9QUk9GSUxFX1NUQVJUXCIsXHJcblx0RURJVF9QUk9GSUxFX1NVQ0NFRUQgPSBcIltVU0VSXVtQQVNTV09SRF0gRURJVF9QUk9GSUxFX1NVQ0NFRURcIixcclxuXHRFRElUX1BST0ZJTEVfRkFJTEVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIEVESVRfUFJPRklMRV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdFByb2ZpbGUgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdFByb2ZpbGVTdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZmlsZVN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBVc2VyTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBFZGl0UHJvZmlsZUFjdGlvbiA9IEVkaXRQcm9maWxlIHwgRWRpdFByb2ZpbGVTdGFydCB8IEVkaXRQcm9maWxlU3VjY2VlZCB8IEVkaXRQcm9maWxlRmFpbGVkO1xyXG4iXX0=