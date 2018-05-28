/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7NkJBSzhDLDBDQUEwQzt1Q0FDMUMsb0RBQW9EO3lDQUNwRCxzREFBc0Q7d0NBQ3RELHFEQUFxRDtzQkFDckQsbUNBQW1DO3FCQUNuQyxrQ0FBa0M7eUJBQ2xDLHNDQUFzQzs4QkFDdEMsMkNBQTJDOzZCQUMzQywwQ0FBMEM7OztBQUd4RixJQUFBO0lBRVEsOEJBQW1CLE9BQTBDO1FBQTFDLFlBQU8sR0FBUCxPQUFPLENBQW1DO29CQUQ3QywrQkFBK0IsQ0FBQyx1QkFBdUI7S0FDTDsrQkFsQjFFO0lBbUJDLENBQUE7QUFIRCxnQ0FHQzs7Ozs7OztBQUNELElBQUE7SUFFUSx1Q0FBbUIsT0FBMEM7UUFBMUMsWUFBTyxHQUFQLE9BQU8sQ0FBbUM7b0JBRDdDLCtCQUErQixDQUFDLGlDQUFpQztLQUNmO3dDQXRCMUU7SUF1QkMsQ0FBQTtBQUhELHlDQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVRO29CQURnQiwrQkFBK0IsQ0FBQyxtQ0FBbUM7S0FDbEU7MENBMUJ6QjtJQTJCQyxDQUFBO0FBSEQsMkNBR0M7Ozs7O0FBQ0QsSUFBQTtJQUVRO29CQURnQiwrQkFBK0IsQ0FBQyxrQ0FBa0M7S0FDakU7eUNBOUJ6QjtJQStCQyxDQUFBO0FBSEQsMENBR0M7Ozs7O0FBQ0QsSUFBQTs7b0JBQ3dCLCtCQUErQixDQUFDLGdCQUFnQjs7eUJBakN4RTtJQWtDQyxDQUFBO0FBRkQsMEJBRUM7Ozs7O0FBQ0QsSUFBQTs7b0JBQ3dCLCtCQUErQixDQUFDLGVBQWU7O3dCQXBDdkU7SUFxQ0MsQ0FBQTtBQUZELHlCQUVDOzs7OztBQUNELElBQUE7O29CQUN3QiwrQkFBK0IsQ0FBQyxtQkFBbUI7OzRCQXZDM0U7SUF3Q0MsQ0FBQTtBQUZELDZCQUVDOzs7OztBQUNELElBQUE7O29CQUN3QiwrQkFBK0IsQ0FBQyx3QkFBd0I7O2lDQTFDaEY7SUEyQ0MsQ0FBQTtBQUZELGtDQUVDOzs7OztBQUNELElBQUE7SUFFUSwrQkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBRGxCLCtCQUErQixDQUFDLHVCQUF1QjtLQUNoQztnQ0E5Qy9DO0lBK0NDLENBQUE7QUFIRCxpQ0FHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGVudW0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcyB7XHJcbiAgICAgICAgR0VUX1JFU0VUX1BBU1NXT1JEX0xJTksgICAgICAgICAgICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBHRVRfUkVTRVRfUEFTU1dPUkRfTElOSycsXHJcbiAgICAgICAgUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NUQVJUICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1RBUlQnLFxyXG4gICAgICAgIFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVUNDRUVEID0gJ1tVU0VSXVtQQVNTV09SRF0gUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NVQ0NFRUQnLFxyXG4gICAgICAgIFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9GQUlMRUQgID0gJ1tVU0VSXVtQQVNTV09SRF0gUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX0ZBSUxFRCcsXHJcbiAgICAgICAgRElTQUJMRV9HRVRfTElOSyAgICAgICAgICAgICAgICAgICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBESVNBQkxFX0dFVF9MSU5LJyxcclxuICAgICAgICBFTkFCTEVfR0VUX0xJTksgICAgICAgICAgICAgICAgICAgICA9ICdbVVNFUl1bUEFTU1dPUkRdIEVOQUJMRV9HRVRfTElOSycsXHJcbiAgICAgICAgTUFYSU1VTV9UUllfSEFQUEVORCAgICAgICAgICAgICAgICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBNQVhJTVVNX1RSWV9IQVBQRU5EJyxcclxuICAgICAgICBQQVNTV09SRF9DSEFOR0VEX1NVQ0NFRUQgICAgICAgICAgICA9ICdbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRCcsXHJcbiAgICAgICAgUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQgICAgICAgICAgICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBQQVNTV09SRF9DSEFOR0VEX0ZBSUxFRCcsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRSZXNldFBhc3N3b3JkTGluayBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuR0VUX1JFU0VUX1BBU1NXT1JEX0xJTks7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdFN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5SRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1RBUlQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVUNDRUVEO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX0ZBSUxFRDtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEaXNhYmxlR2V0TGluayBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuRElTQUJMRV9HRVRfTElOSztcclxufVxyXG5leHBvcnQgY2xhc3MgRW5hYmxlR2V0TGluayBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuRU5BQkxFX0dFVF9MSU5LO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBNYXhpbXVtVHJ5SGFwcGVuZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuTUFYSU1VTV9UUllfSEFQUEVORDtcclxufVxyXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRDaGFuZ2VkU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQYXNzd29yZENoYW5nZWRGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfRkFJTEVEO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHsgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb24gPVxyXG4gICAgICAgIEdldFJlc2V0UGFzc3dvcmRMaW5rXHJcbiAgICAgICAgfCBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RTdGFydFxyXG4gICAgICAgIHwgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0RmFpbGVkXHJcbiAgICAgICAgfCBEaXNhYmxlR2V0TGlua1xyXG4gICAgICAgIHwgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0U3VjY2VlZFxyXG4gICAgICAgIHwgRW5hYmxlR2V0TGlua1xyXG4gICAgICAgIHwgTWF4aW11bVRyeUhhcHBlbmRcclxuICAgICAgICB8IFBhc3N3b3JkQ2hhbmdlZFN1Y2NlZWRcclxuICAgICAgICB8IFBhc3N3b3JkQ2hhbmdlZEZhaWxlZDtcclxuIl19