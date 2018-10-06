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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1wcm9maWxlLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS1lZGl0L2VkaXQtcHJvZmlsZS5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUtDLGNBQWUsK0JBQStCO0lBQzlDLG9CQUFxQixxQ0FBcUM7SUFDMUQsc0JBQXVCLHVDQUF1QztJQUM5RCxxQkFBc0Isc0NBQXNDOzs7QUFHN0QsSUFBQTtJQUVDLHFCQUFtQixPQUFxQztRQUFyQyxZQUFPLEdBQVAsT0FBTyxDQUE4QjtvQkFEeEMsc0JBQXNCLENBQUMsWUFBWTtLQUNVO3NCQWI5RDtJQWNDLENBQUE7QUFIRCx1QkFHQzs7Ozs7OztBQUNELElBQUE7SUFFQywwQkFBbUIsT0FBcUM7UUFBckMsWUFBTyxHQUFQLE9BQU8sQ0FBOEI7b0JBRHhDLHNCQUFzQixDQUFDLGtCQUFrQjtLQUNJOzJCQWpCOUQ7SUFrQkMsQ0FBQTtBQUhELDRCQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVDLDRCQUFtQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXO29CQURyQixzQkFBc0IsQ0FBQyxvQkFBb0I7S0FDakI7NkJBckIzQztJQXNCQyxDQUFBO0FBSEQsOEJBR0M7Ozs7Ozs7QUFDRCxJQUFBOztvQkFDaUIsc0JBQXNCLENBQUMsbUJBQW1COzs0QkF4QjNEO0lBeUJDLENBQUE7QUFGRCw2QkFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVfQXBpTW9kZWwsIFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEVkaXRQcm9maWxlQWN0aW9uVHlwZXMge1xyXG5cdEVESVRfUFJPRklMRSA9IFwiW1VTRVJdW1BBU1NXT1JEXSBFRElUX1BST0ZJTEVcIixcclxuXHRFRElUX1BST0ZJTEVfU1RBUlQgPSBcIltVU0VSXVtQQVNTV09SRF0gRURJVF9QUk9GSUxFX1NUQVJUXCIsXHJcblx0RURJVF9QUk9GSUxFX1NVQ0NFRUQgPSBcIltVU0VSXVtQQVNTV09SRF0gRURJVF9QUk9GSUxFX1NVQ0NFRURcIixcclxuXHRFRElUX1BST0ZJTEVfRkFJTEVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIEVESVRfUFJPRklMRV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdFByb2ZpbGUgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlU3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVzZXJNb2RlbCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBFZGl0UHJvZmlsZUFjdGlvbiA9XHJcblx0fCBFZGl0UHJvZmlsZVxyXG5cdHwgRWRpdFByb2ZpbGVTdGFydFxyXG5cdHwgRWRpdFByb2ZpbGVTdWNjZWVkXHJcblx0fCBFZGl0UHJvZmlsZUZhaWxlZDtcclxuIl19