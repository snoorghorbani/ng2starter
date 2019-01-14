/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ResetPasswordRequestActionTypes = {
    GET_RESET_PASSWORD_LINK: "[USER][PASSWORD] GET_RESET_PASSWORD_LINK",
    RESET_PASSWORD_LINK_REQUEST_START: "[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_START",
    RESET_PASSWORD_LINK_REQUEST_SUCCEED: "[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_SUCCEED",
    RESET_PASSWORD_LINK_REQUEST_FAILED: "[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_FAILED",
    DISABLE_GET_LINK: "[USER][PASSWORD] DISABLE_GET_LINK",
    ENABLE_GET_LINK: "[USER][PASSWORD] ENABLE_GET_LINK",
    MAXIMUM_TRY_HAPPEND: "[USER][PASSWORD] MAXIMUM_TRY_HAPPEND",
    PASSWORD_CHANGED_SUCCEED: "[USER][PASSWORD] PASSWORD_CHANGED_SUCCEED",
    PASSWORD_CHANGED_FAILED: "[USER][PASSWORD] PASSWORD_CHANGED_FAILED",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLQyx5QkFBMEIsMENBQTBDO0lBQ3BFLG1DQUFvQyxvREFBb0Q7SUFDeEYscUNBQXNDLHNEQUFzRDtJQUM1RixvQ0FBcUMscURBQXFEO0lBQzFGLGtCQUFtQixtQ0FBbUM7SUFDdEQsaUJBQWtCLGtDQUFrQztJQUNwRCxxQkFBc0Isc0NBQXNDO0lBQzVELDBCQUEyQiwyQ0FBMkM7SUFDdEUseUJBQTBCLDBDQUEwQzs7O0FBR3JFO0lBRUMsOEJBQW1CLE9BQTBDO1FBQTFDLFlBQU8sR0FBUCxPQUFPLENBQW1DO1FBRHBELFNBQUksR0FBRywrQkFBK0IsQ0FBQyx1QkFBdUIsQ0FBQztJQUNSLENBQUM7SUFDbEUsMkJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZBLG9DQUF3RTs7SUFDNUQsdUNBQWlEOztBQUU5RDtJQUVDLHVDQUFtQixPQUEwQztRQUExQyxZQUFPLEdBQVAsT0FBTyxDQUFtQztRQURwRCxTQUFJLEdBQUcsK0JBQStCLENBQUMsaUNBQWlDLENBQUM7SUFDbEIsQ0FBQztJQUNsRSxvQ0FBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkEsNkNBQWtGOztJQUN0RSxnREFBaUQ7O0FBRTlEO0lBRUM7UUFEUyxTQUFJLEdBQUcsK0JBQStCLENBQUMsbUNBQW1DLENBQUM7SUFDckUsQ0FBQztJQUNqQixzQ0FBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkEsK0NBQW9GOztBQUdyRjtJQUVDO1FBRFMsU0FBSSxHQUFHLCtCQUErQixDQUFDLGtDQUFrQyxDQUFDO0lBQ3BFLENBQUM7SUFDakIscUNBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZBLDhDQUFtRjs7QUFHcEY7SUFBQTtRQUNVLFNBQUksR0FBRywrQkFBK0IsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNsRSxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURBLDhCQUFpRTs7QUFFbEU7SUFBQTtRQUNVLFNBQUksR0FBRywrQkFBK0IsQ0FBQyxlQUFlLENBQUM7SUFDakUsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQSw2QkFBZ0U7O0FBRWpFO0lBQUE7UUFDVSxTQUFJLEdBQUcsK0JBQStCLENBQUMsbUJBQW1CLENBQUM7SUFDckUsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQSxpQ0FBb0U7O0FBRXJFO0lBQUE7UUFDVSxTQUFJLEdBQUcsK0JBQStCLENBQUMsd0JBQXdCLENBQUM7SUFDMUUsQ0FBQztJQUFELDZCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQSxzQ0FBeUU7O0FBRTFFO0lBRUMsK0JBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRywrQkFBK0IsQ0FBQyx1QkFBdUIsQ0FBQztJQUNuQyxDQUFDO0lBQ3ZDLDRCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSxxQ0FBd0U7O0lBQzVELHdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcyB7XHJcblx0R0VUX1JFU0VUX1BBU1NXT1JEX0xJTksgPSBcIltVU0VSXVtQQVNTV09SRF0gR0VUX1JFU0VUX1BBU1NXT1JEX0xJTktcIixcclxuXHRSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1RBUlQgPSBcIltVU0VSXVtQQVNTV09SRF0gUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NUQVJUXCIsXHJcblx0UkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NVQ0NFRUQgPSBcIltVU0VSXVtQQVNTV09SRF0gUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NVQ0NFRURcIixcclxuXHRSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfRkFJTEVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9GQUlMRURcIixcclxuXHRESVNBQkxFX0dFVF9MSU5LID0gXCJbVVNFUl1bUEFTU1dPUkRdIERJU0FCTEVfR0VUX0xJTktcIixcclxuXHRFTkFCTEVfR0VUX0xJTksgPSBcIltVU0VSXVtQQVNTV09SRF0gRU5BQkxFX0dFVF9MSU5LXCIsXHJcblx0TUFYSU1VTV9UUllfSEFQUEVORCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBNQVhJTVVNX1RSWV9IQVBQRU5EXCIsXHJcblx0UEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRFwiLFxyXG5cdFBBU1NXT1JEX0NIQU5HRURfRkFJTEVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldFJlc2V0UGFzc3dvcmRMaW5rIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5HRVRfUkVTRVRfUEFTU1dPUkRfTElOSztcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RTdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0RmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5SRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGlzYWJsZUdldExpbmsgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkRJU0FCTEVfR0VUX0xJTks7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVuYWJsZUdldExpbmsgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkVOQUJMRV9HRVRfTElOSztcclxufVxyXG5leHBvcnQgY2xhc3MgTWF4aW11bVRyeUhhcHBlbmQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLk1BWElNVU1fVFJZX0hBUFBFTkQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkQ2hhbmdlZFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRDaGFuZ2VkRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX0ZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvbiA9XHJcblx0fCBHZXRSZXNldFBhc3N3b3JkTGlua1xyXG5cdHwgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0U3RhcnRcclxuXHR8IFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdEZhaWxlZFxyXG5cdHwgRGlzYWJsZUdldExpbmtcclxuXHR8IFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdFN1Y2NlZWRcclxuXHR8IEVuYWJsZUdldExpbmtcclxuXHR8IE1heGltdW1UcnlIYXBwZW5kXHJcblx0fCBQYXNzd29yZENoYW5nZWRTdWNjZWVkXHJcblx0fCBQYXNzd29yZENoYW5nZWRGYWlsZWQ7XHJcbiJdfQ==