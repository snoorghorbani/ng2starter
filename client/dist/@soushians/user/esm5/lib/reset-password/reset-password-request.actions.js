/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var ResetPasswordRequestActionTypes = {
    GET_RESET_PASSWORD_LINK: '[USER][PASSWORD] GET_RESET_PASSWORD_LINK',
    RESET_PASSWORD_LINK_REQUEST_START: '[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_START',
    RESET_PASSWORD_LINK_REQUEST_SUCCEED: '[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_SUCCEED',
    RESET_PASSWORD_LINK_REQUEST_FAILED: '[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_FAILED',
    DISABLE_GET_LINK: '[USER][PASSWORD] DISABLE_GET_LINK',
    ENABLE_GET_LINK: '[USER][PASSWORD] ENABLE_GET_LINK',
    MAXIMUM_TRY_HAPPEND: '[USER][PASSWORD] MAXIMUM_TRY_HAPPEND',
    PASSWORD_CHANGED_SUCCEED: '[USER][PASSWORD] PASSWORD_CHANGED_SUCCEED',
    PASSWORD_CHANGED_FAILED: '[USER][PASSWORD] PASSWORD_CHANGED_FAILED',
};
export { ResetPasswordRequestActionTypes };
var GetResetPasswordLink = /** @class */ (function () {
    function GetResetPasswordLink(payload) {
        this.payload = payload;
        this.type = ResetPasswordRequestActionTypes.GET_RESET_PASSWORD_LINK;
    }
    return GetResetPasswordLink;
}());
export { GetResetPasswordLink };
if (false) {
    /** @type {?} */
    GetResetPasswordLink.prototype.type;
    /** @type {?} */
    GetResetPasswordLink.prototype.payload;
}
var ResetPasswordLinkRequestStart = /** @class */ (function () {
    function ResetPasswordLinkRequestStart(payload) {
        this.payload = payload;
        this.type = ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START;
    }
    return ResetPasswordLinkRequestStart;
}());
export { ResetPasswordLinkRequestStart };
if (false) {
    /** @type {?} */
    ResetPasswordLinkRequestStart.prototype.type;
    /** @type {?} */
    ResetPasswordLinkRequestStart.prototype.payload;
}
var ResetPasswordLinkRequestSucceed = /** @class */ (function () {
    function ResetPasswordLinkRequestSucceed() {
        this.type = ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_SUCCEED;
    }
    return ResetPasswordLinkRequestSucceed;
}());
export { ResetPasswordLinkRequestSucceed };
if (false) {
    /** @type {?} */
    ResetPasswordLinkRequestSucceed.prototype.type;
}
var ResetPasswordLinkRequestFailed = /** @class */ (function () {
    function ResetPasswordLinkRequestFailed() {
        this.type = ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_FAILED;
    }
    return ResetPasswordLinkRequestFailed;
}());
export { ResetPasswordLinkRequestFailed };
if (false) {
    /** @type {?} */
    ResetPasswordLinkRequestFailed.prototype.type;
}
var DisableGetLink = /** @class */ (function () {
    function DisableGetLink() {
        this.type = ResetPasswordRequestActionTypes.DISABLE_GET_LINK;
    }
    return DisableGetLink;
}());
export { DisableGetLink };
if (false) {
    /** @type {?} */
    DisableGetLink.prototype.type;
}
var EnableGetLink = /** @class */ (function () {
    function EnableGetLink() {
        this.type = ResetPasswordRequestActionTypes.ENABLE_GET_LINK;
    }
    return EnableGetLink;
}());
export { EnableGetLink };
if (false) {
    /** @type {?} */
    EnableGetLink.prototype.type;
}
var MaximumTryHappend = /** @class */ (function () {
    function MaximumTryHappend() {
        this.type = ResetPasswordRequestActionTypes.MAXIMUM_TRY_HAPPEND;
    }
    return MaximumTryHappend;
}());
export { MaximumTryHappend };
if (false) {
    /** @type {?} */
    MaximumTryHappend.prototype.type;
}
var PasswordChangedSucceed = /** @class */ (function () {
    function PasswordChangedSucceed() {
        this.type = ResetPasswordRequestActionTypes.PASSWORD_CHANGED_SUCCEED;
    }
    return PasswordChangedSucceed;
}());
export { PasswordChangedSucceed };
if (false) {
    /** @type {?} */
    PasswordChangedSucceed.prototype.type;
}
var PasswordChangedFailed = /** @class */ (function () {
    function PasswordChangedFailed(payload) {
        this.payload = payload;
        this.type = ResetPasswordRequestActionTypes.PASSWORD_CHANGED_FAILED;
    }
    return PasswordChangedFailed;
}());
export { PasswordChangedFailed };
if (false) {
    /** @type {?} */
    PasswordChangedFailed.prototype.type;
    /** @type {?} */
    PasswordChangedFailed.prototype.payload;
}
/** @typedef {?} */
var ResetPasswordRequestAction;
export { ResetPasswordRequestAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLUSx5QkFBc0MsMENBQTBDO0lBQ2hGLG1DQUFzQyxvREFBb0Q7SUFDMUYscUNBQXNDLHNEQUFzRDtJQUM1RixvQ0FBc0MscURBQXFEO0lBQzNGLGtCQUFzQyxtQ0FBbUM7SUFDekUsaUJBQXNDLGtDQUFrQztJQUN4RSxxQkFBc0Msc0NBQXNDO0lBQzVFLDBCQUFzQywyQ0FBMkM7SUFDakYseUJBQXNDLDBDQUEwQzs7O0FBR3hGLElBQUE7SUFFUSw4QkFBbUIsT0FBMEM7UUFBMUMsWUFBTyxHQUFQLE9BQU8sQ0FBbUM7b0JBRDdDLCtCQUErQixDQUFDLHVCQUF1QjtLQUNMOytCQWxCMUU7SUFtQkMsQ0FBQTtBQUhELGdDQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVRLHVDQUFtQixPQUEwQztRQUExQyxZQUFPLEdBQVAsT0FBTyxDQUFtQztvQkFEN0MsK0JBQStCLENBQUMsaUNBQWlDO0tBQ2Y7d0NBdEIxRTtJQXVCQyxDQUFBO0FBSEQseUNBR0M7Ozs7Ozs7QUFDRCxJQUFBO0lBRVE7b0JBRGdCLCtCQUErQixDQUFDLG1DQUFtQztLQUNsRTswQ0ExQnpCO0lBMkJDLENBQUE7QUFIRCwyQ0FHQzs7Ozs7QUFDRCxJQUFBO0lBRVE7b0JBRGdCLCtCQUErQixDQUFDLGtDQUFrQztLQUNqRTt5Q0E5QnpCO0lBK0JDLENBQUE7QUFIRCwwQ0FHQzs7Ozs7QUFDRCxJQUFBOztvQkFDd0IsK0JBQStCLENBQUMsZ0JBQWdCOzt5QkFqQ3hFO0lBa0NDLENBQUE7QUFGRCwwQkFFQzs7Ozs7QUFDRCxJQUFBOztvQkFDd0IsK0JBQStCLENBQUMsZUFBZTs7d0JBcEN2RTtJQXFDQyxDQUFBO0FBRkQseUJBRUM7Ozs7O0FBQ0QsSUFBQTs7b0JBQ3dCLCtCQUErQixDQUFDLG1CQUFtQjs7NEJBdkMzRTtJQXdDQyxDQUFBO0FBRkQsNkJBRUM7Ozs7O0FBQ0QsSUFBQTs7b0JBQ3dCLCtCQUErQixDQUFDLHdCQUF3Qjs7aUNBMUNoRjtJQTJDQyxDQUFBO0FBRkQsa0NBRUM7Ozs7O0FBQ0QsSUFBQTtJQUVRLCtCQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFEbEIsK0JBQStCLENBQUMsdUJBQXVCO0tBQ2hDO2dDQTlDL0M7SUErQ0MsQ0FBQTtBQUhELGlDQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbCB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgZW51bSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzIHtcclxuICAgICAgICBHRVRfUkVTRVRfUEFTU1dPUkRfTElOSyAgICAgICAgICAgICA9ICdbVVNFUl1bUEFTU1dPUkRdIEdFVF9SRVNFVF9QQVNTV09SRF9MSU5LJyxcclxuICAgICAgICBSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1RBUlQgICA9ICdbVVNFUl1bUEFTU1dPUkRdIFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVEFSVCcsXHJcbiAgICAgICAgUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NVQ0NFRUQgPSAnW1VTRVJdW1BBU1NXT1JEXSBSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1VDQ0VFRCcsXHJcbiAgICAgICAgUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX0ZBSUxFRCAgPSAnW1VTRVJdW1BBU1NXT1JEXSBSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfRkFJTEVEJyxcclxuICAgICAgICBESVNBQkxFX0dFVF9MSU5LICAgICAgICAgICAgICAgICAgICA9ICdbVVNFUl1bUEFTU1dPUkRdIERJU0FCTEVfR0VUX0xJTksnLFxyXG4gICAgICAgIEVOQUJMRV9HRVRfTElOSyAgICAgICAgICAgICAgICAgICAgID0gJ1tVU0VSXVtQQVNTV09SRF0gRU5BQkxFX0dFVF9MSU5LJyxcclxuICAgICAgICBNQVhJTVVNX1RSWV9IQVBQRU5EICAgICAgICAgICAgICAgICA9ICdbVVNFUl1bUEFTU1dPUkRdIE1BWElNVU1fVFJZX0hBUFBFTkQnLFxyXG4gICAgICAgIFBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRCAgICAgICAgICAgID0gJ1tVU0VSXVtQQVNTV09SRF0gUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEJyxcclxuICAgICAgICBQQVNTV09SRF9DSEFOR0VEX0ZBSUxFRCAgICAgICAgICAgICA9ICdbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfRkFJTEVEJyxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldFJlc2V0UGFzc3dvcmRMaW5rIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5HRVRfUkVTRVRfUEFTU1dPUkRfTElOSztcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbC5SZXF1ZXN0KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0U3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVEFSVDtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbC5SZXF1ZXN0KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0U3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NVQ0NFRUQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0RmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5SRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfRkFJTEVEO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERpc2FibGVHZXRMaW5rIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5ESVNBQkxFX0dFVF9MSU5LO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBFbmFibGVHZXRMaW5rIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5FTkFCTEVfR0VUX0xJTks7XHJcbn1cclxuZXhwb3J0IGNsYXNzIE1heGltdW1UcnlIYXBwZW5kIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5NQVhJTVVNX1RSWV9IQVBQRU5EO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQYXNzd29yZENoYW5nZWRTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX1NVQ0NFRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkQ2hhbmdlZEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykgeyB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgdHlwZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvbiA9XHJcbiAgICAgICAgR2V0UmVzZXRQYXNzd29yZExpbmtcclxuICAgICAgICB8IFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdFN0YXJ0XHJcbiAgICAgICAgfCBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RGYWlsZWRcclxuICAgICAgICB8IERpc2FibGVHZXRMaW5rXHJcbiAgICAgICAgfCBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RTdWNjZWVkXHJcbiAgICAgICAgfCBFbmFibGVHZXRMaW5rXHJcbiAgICAgICAgfCBNYXhpbXVtVHJ5SGFwcGVuZFxyXG4gICAgICAgIHwgUGFzc3dvcmRDaGFuZ2VkU3VjY2VlZFxyXG4gICAgICAgIHwgUGFzc3dvcmRDaGFuZ2VkRmFpbGVkO1xyXG4iXX0=