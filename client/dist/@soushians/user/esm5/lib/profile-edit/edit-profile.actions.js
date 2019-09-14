/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1wcm9maWxlLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS1lZGl0L2VkaXQtcHJvZmlsZS5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQU1DLGNBQWUsK0JBQStCO0lBQzlDLG9CQUFxQixxQ0FBcUM7SUFDMUQsc0JBQXVCLHVDQUF1QztJQUM5RCxxQkFBc0Isc0NBQXNDOzs7QUFHN0Q7SUFFQyxxQkFBbUIsT0FBcUM7UUFBckMsWUFBTyxHQUFQLE9BQU8sQ0FBOEI7UUFEL0MsU0FBSSxHQUFHLHNCQUFzQixDQUFDLFlBQVksQ0FBQztJQUNPLENBQUM7SUFDN0Qsa0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZBLDJCQUFvRDs7SUFDeEMsOEJBQTRDOztBQUV6RDtJQUVDLDBCQUFtQixPQUFxQztRQUFyQyxZQUFPLEdBQVAsT0FBTyxDQUE4QjtRQUQvQyxTQUFJLEdBQUcsc0JBQXNCLENBQUMsa0JBQWtCLENBQUM7SUFDQyxDQUFDO0lBQzdELHVCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSxnQ0FBMEQ7O0lBQzlDLG1DQUE0Qzs7QUFFekQ7SUFFQyw0QkFBbUIsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUQ1QixTQUFJLEdBQUcsc0JBQXNCLENBQUMsb0JBQW9CLENBQUM7SUFDcEIsQ0FBQztJQUMxQyx5QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkEsa0NBQTREOztJQUNoRCxxQ0FBeUI7O0FBRXRDO0lBQUE7UUFDVSxTQUFJLEdBQUcsc0JBQXNCLENBQUMsbUJBQW1CLENBQUM7SUFDNUQsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQSxpQ0FBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZV9BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvZmlsZS1lZGl0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzIHtcclxuXHRFRElUX1BST0ZJTEUgPSBcIltVU0VSXVtQQVNTV09SRF0gRURJVF9QUk9GSUxFXCIsXHJcblx0RURJVF9QUk9GSUxFX1NUQVJUID0gXCJbVVNFUl1bUEFTU1dPUkRdIEVESVRfUFJPRklMRV9TVEFSVFwiLFxyXG5cdEVESVRfUFJPRklMRV9TVUNDRUVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIEVESVRfUFJPRklMRV9TVUNDRUVEXCIsXHJcblx0RURJVF9QUk9GSUxFX0ZBSUxFRCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBFRElUX1BST0ZJTEVfRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlU3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdFByb2ZpbGVTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlck1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZmlsZUZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRWRpdFByb2ZpbGVBY3Rpb24gPSBFZGl0UHJvZmlsZSB8IEVkaXRQcm9maWxlU3RhcnQgfCBFZGl0UHJvZmlsZVN1Y2NlZWQgfCBFZGl0UHJvZmlsZUZhaWxlZDtcclxuIl19