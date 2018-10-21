/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
function GetResetPasswordLink_tsickle_Closure_declarations() {
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
function ResetPasswordLinkRequestStart_tsickle_Closure_declarations() {
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
function ResetPasswordLinkRequestSucceed_tsickle_Closure_declarations() {
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
function ResetPasswordLinkRequestFailed_tsickle_Closure_declarations() {
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
function DisableGetLink_tsickle_Closure_declarations() {
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
function EnableGetLink_tsickle_Closure_declarations() {
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
function MaximumTryHappend_tsickle_Closure_declarations() {
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
function PasswordChangedSucceed_tsickle_Closure_declarations() {
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
function PasswordChangedFailed_tsickle_Closure_declarations() {
    /** @type {?} */
    PasswordChangedFailed.prototype.type;
    /** @type {?} */
    PasswordChangedFailed.prototype.payload;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7NkJBSzJCLDBDQUEwQzt1Q0FDaEMsb0RBQW9EO3lDQUNsRCxzREFBc0Q7d0NBQ3ZELHFEQUFxRDtzQkFDdkUsbUNBQW1DO3FCQUNwQyxrQ0FBa0M7eUJBQzlCLHNDQUFzQzs4QkFDakMsMkNBQTJDOzZCQUM1QywwQ0FBMEM7OztBQUdyRSxJQUFBO0lBRUMsOEJBQW1CLE9BQTBDO1FBQTFDLFlBQU8sR0FBUCxPQUFPLENBQW1DO29CQUQ3QywrQkFBK0IsQ0FBQyx1QkFBdUI7S0FDTjsrQkFsQmxFO0lBbUJDLENBQUE7QUFIRCxnQ0FHQzs7Ozs7OztBQUNELElBQUE7SUFFQyx1Q0FBbUIsT0FBMEM7UUFBMUMsWUFBTyxHQUFQLE9BQU8sQ0FBbUM7b0JBRDdDLCtCQUErQixDQUFDLGlDQUFpQztLQUNoQjt3Q0F0QmxFO0lBdUJDLENBQUE7QUFIRCx5Q0FHQzs7Ozs7OztBQUNELElBQUE7SUFFQztvQkFEZ0IsK0JBQStCLENBQUMsbUNBQW1DO0tBQ25FOzBDQTFCakI7SUEyQkMsQ0FBQTtBQUhELDJDQUdDOzs7OztBQUNELElBQUE7SUFFQztvQkFEZ0IsK0JBQStCLENBQUMsa0NBQWtDO0tBQ2xFO3lDQTlCakI7SUErQkMsQ0FBQTtBQUhELDBDQUdDOzs7OztBQUNELElBQUE7O29CQUNpQiwrQkFBK0IsQ0FBQyxnQkFBZ0I7O3lCQWpDakU7SUFrQ0MsQ0FBQTtBQUZELDBCQUVDOzs7OztBQUNELElBQUE7O29CQUNpQiwrQkFBK0IsQ0FBQyxlQUFlOzt3QkFwQ2hFO0lBcUNDLENBQUE7QUFGRCx5QkFFQzs7Ozs7QUFDRCxJQUFBOztvQkFDaUIsK0JBQStCLENBQUMsbUJBQW1COzs0QkF2Q3BFO0lBd0NDLENBQUE7QUFGRCw2QkFFQzs7Ozs7QUFDRCxJQUFBOztvQkFDaUIsK0JBQStCLENBQUMsd0JBQXdCOztpQ0ExQ3pFO0lBMkNDLENBQUE7QUFGRCxrQ0FFQzs7Ozs7QUFDRCxJQUFBO0lBRUMsK0JBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQURsQiwrQkFBK0IsQ0FBQyx1QkFBdUI7S0FDakM7Z0NBOUN2QztJQStDQyxDQUFBO0FBSEQsaUNBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMge1xyXG5cdEdFVF9SRVNFVF9QQVNTV09SRF9MSU5LID0gXCJbVVNFUl1bUEFTU1dPUkRdIEdFVF9SRVNFVF9QQVNTV09SRF9MSU5LXCIsXHJcblx0UkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NUQVJUID0gXCJbVVNFUl1bUEFTU1dPUkRdIFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVEFSVFwiLFxyXG5cdFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVUNDRUVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVUNDRUVEXCIsXHJcblx0UkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX0ZBSUxFRCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfRkFJTEVEXCIsXHJcblx0RElTQUJMRV9HRVRfTElOSyA9IFwiW1VTRVJdW1BBU1NXT1JEXSBESVNBQkxFX0dFVF9MSU5LXCIsXHJcblx0RU5BQkxFX0dFVF9MSU5LID0gXCJbVVNFUl1bUEFTU1dPUkRdIEVOQUJMRV9HRVRfTElOS1wiLFxyXG5cdE1BWElNVU1fVFJZX0hBUFBFTkQgPSBcIltVU0VSXVtQQVNTV09SRF0gTUFYSU1VTV9UUllfSEFQUEVORFwiLFxyXG5cdFBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBQQVNTV09SRF9DSEFOR0VEX1NVQ0NFRURcIixcclxuXHRQQVNTV09SRF9DSEFOR0VEX0ZBSUxFRCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBQQVNTV09SRF9DSEFOR0VEX0ZBSUxFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRSZXNldFBhc3N3b3JkTGluayBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuR0VUX1JFU0VUX1BBU1NXT1JEX0xJTks7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwuUmVxdWVzdCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0U3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5SRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX0ZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERpc2FibGVHZXRMaW5rIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5ESVNBQkxFX0dFVF9MSU5LO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBFbmFibGVHZXRMaW5rIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5FTkFCTEVfR0VUX0xJTks7XHJcbn1cclxuZXhwb3J0IGNsYXNzIE1heGltdW1UcnlIYXBwZW5kIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5NQVhJTVVNX1RSWV9IQVBQRU5EO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQYXNzd29yZENoYW5nZWRTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX1NVQ0NFRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkQ2hhbmdlZEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb24gPVxyXG5cdHwgR2V0UmVzZXRQYXNzd29yZExpbmtcclxuXHR8IFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdFN0YXJ0XHJcblx0fCBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RGYWlsZWRcclxuXHR8IERpc2FibGVHZXRMaW5rXHJcblx0fCBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RTdWNjZWVkXHJcblx0fCBFbmFibGVHZXRMaW5rXHJcblx0fCBNYXhpbXVtVHJ5SGFwcGVuZFxyXG5cdHwgUGFzc3dvcmRDaGFuZ2VkU3VjY2VlZFxyXG5cdHwgUGFzc3dvcmRDaGFuZ2VkRmFpbGVkO1xyXG4iXX0=