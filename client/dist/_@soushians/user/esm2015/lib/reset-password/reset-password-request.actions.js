/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ResetPasswordRequestActionTypes = {
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
export class GetResetPasswordLink {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ResetPasswordRequestActionTypes.GET_RESET_PASSWORD_LINK;
    }
}
if (false) {
    /** @type {?} */
    GetResetPasswordLink.prototype.type;
    /** @type {?} */
    GetResetPasswordLink.prototype.payload;
}
export class ResetPasswordLinkRequestStart {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START;
    }
}
if (false) {
    /** @type {?} */
    ResetPasswordLinkRequestStart.prototype.type;
    /** @type {?} */
    ResetPasswordLinkRequestStart.prototype.payload;
}
export class ResetPasswordLinkRequestSucceed {
    constructor() {
        this.type = ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_SUCCEED;
    }
}
if (false) {
    /** @type {?} */
    ResetPasswordLinkRequestSucceed.prototype.type;
}
export class ResetPasswordLinkRequestFailed {
    constructor() {
        this.type = ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_FAILED;
    }
}
if (false) {
    /** @type {?} */
    ResetPasswordLinkRequestFailed.prototype.type;
}
export class DisableGetLink {
    constructor() {
        this.type = ResetPasswordRequestActionTypes.DISABLE_GET_LINK;
    }
}
if (false) {
    /** @type {?} */
    DisableGetLink.prototype.type;
}
export class EnableGetLink {
    constructor() {
        this.type = ResetPasswordRequestActionTypes.ENABLE_GET_LINK;
    }
}
if (false) {
    /** @type {?} */
    EnableGetLink.prototype.type;
}
export class MaximumTryHappend {
    constructor() {
        this.type = ResetPasswordRequestActionTypes.MAXIMUM_TRY_HAPPEND;
    }
}
if (false) {
    /** @type {?} */
    MaximumTryHappend.prototype.type;
}
export class PasswordChangedSucceed {
    constructor() {
        this.type = ResetPasswordRequestActionTypes.PASSWORD_CHANGED_SUCCEED;
    }
}
if (false) {
    /** @type {?} */
    PasswordChangedSucceed.prototype.type;
}
export class PasswordChangedFailed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ResetPasswordRequestActionTypes.PASSWORD_CHANGED_FAILED;
    }
}
if (false) {
    /** @type {?} */
    PasswordChangedFailed.prototype.type;
    /** @type {?} */
    PasswordChangedFailed.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLQyx5QkFBMEIsMENBQTBDO0lBQ3BFLG1DQUFvQyxvREFBb0Q7SUFDeEYscUNBQXNDLHNEQUFzRDtJQUM1RixvQ0FBcUMscURBQXFEO0lBQzFGLGtCQUFtQixtQ0FBbUM7SUFDdEQsaUJBQWtCLGtDQUFrQztJQUNwRCxxQkFBc0Isc0NBQXNDO0lBQzVELDBCQUEyQiwyQ0FBMkM7SUFDdEUseUJBQTBCLDBDQUEwQzs7O0FBR3JFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFFaEMsWUFBbUIsT0FBMEM7UUFBMUMsWUFBTyxHQUFQLE9BQU8sQ0FBbUM7UUFEcEQsU0FBSSxHQUFHLCtCQUErQixDQUFDLHVCQUF1QixDQUFDO0lBQ1IsQ0FBQztDQUNqRTs7O0lBRkEsb0NBQXdFOztJQUM1RCx1Q0FBaUQ7O0FBRTlELE1BQU0sT0FBTyw2QkFBNkI7Ozs7SUFFekMsWUFBbUIsT0FBMEM7UUFBMUMsWUFBTyxHQUFQLE9BQU8sQ0FBbUM7UUFEcEQsU0FBSSxHQUFHLCtCQUErQixDQUFDLGlDQUFpQyxDQUFDO0lBQ2xCLENBQUM7Q0FDakU7OztJQUZBLDZDQUFrRjs7SUFDdEUsZ0RBQWlEOztBQUU5RCxNQUFNLE9BQU8sK0JBQStCO0lBRTNDO1FBRFMsU0FBSSxHQUFHLCtCQUErQixDQUFDLG1DQUFtQyxDQUFDO0lBQ3JFLENBQUM7Q0FDaEI7OztJQUZBLCtDQUFvRjs7QUFHckYsTUFBTSxPQUFPLDhCQUE4QjtJQUUxQztRQURTLFNBQUksR0FBRywrQkFBK0IsQ0FBQyxrQ0FBa0MsQ0FBQztJQUNwRSxDQUFDO0NBQ2hCOzs7SUFGQSw4Q0FBbUY7O0FBR3BGLE1BQU0sT0FBTyxjQUFjO0lBQTNCO1FBQ1UsU0FBSSxHQUFHLCtCQUErQixDQUFDLGdCQUFnQixDQUFDO0lBQ2xFLENBQUM7Q0FBQTs7O0lBREEsOEJBQWlFOztBQUVsRSxNQUFNLE9BQU8sYUFBYTtJQUExQjtRQUNVLFNBQUksR0FBRywrQkFBK0IsQ0FBQyxlQUFlLENBQUM7SUFDakUsQ0FBQztDQUFBOzs7SUFEQSw2QkFBZ0U7O0FBRWpFLE1BQU0sT0FBTyxpQkFBaUI7SUFBOUI7UUFDVSxTQUFJLEdBQUcsK0JBQStCLENBQUMsbUJBQW1CLENBQUM7SUFDckUsQ0FBQztDQUFBOzs7SUFEQSxpQ0FBb0U7O0FBRXJFLE1BQU0sT0FBTyxzQkFBc0I7SUFBbkM7UUFDVSxTQUFJLEdBQUcsK0JBQStCLENBQUMsd0JBQXdCLENBQUM7SUFDMUUsQ0FBQztDQUFBOzs7SUFEQSxzQ0FBeUU7O0FBRTFFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFFakMsWUFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLCtCQUErQixDQUFDLHVCQUF1QixDQUFDO0lBQ25DLENBQUM7Q0FDdEM7OztJQUZBLHFDQUF3RTs7SUFDNUQsd0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9yZXNldC1wYXNzd29yZC1yZXF1ZXN0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzIHtcclxuXHRHRVRfUkVTRVRfUEFTU1dPUkRfTElOSyA9IFwiW1VTRVJdW1BBU1NXT1JEXSBHRVRfUkVTRVRfUEFTU1dPUkRfTElOS1wiLFxyXG5cdFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVEFSVCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1RBUlRcIixcclxuXHRSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1VDQ0VFRCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1VDQ0VFRFwiLFxyXG5cdFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9GQUlMRUQgPSBcIltVU0VSXVtQQVNTV09SRF0gUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX0ZBSUxFRFwiLFxyXG5cdERJU0FCTEVfR0VUX0xJTksgPSBcIltVU0VSXVtQQVNTV09SRF0gRElTQUJMRV9HRVRfTElOS1wiLFxyXG5cdEVOQUJMRV9HRVRfTElOSyA9IFwiW1VTRVJdW1BBU1NXT1JEXSBFTkFCTEVfR0VUX0xJTktcIixcclxuXHRNQVhJTVVNX1RSWV9IQVBQRU5EID0gXCJbVVNFUl1bUEFTU1dPUkRdIE1BWElNVU1fVFJZX0hBUFBFTkRcIixcclxuXHRQQVNTV09SRF9DSEFOR0VEX1NVQ0NFRUQgPSBcIltVU0VSXVtQQVNTV09SRF0gUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEXCIsXHJcblx0UEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQgPSBcIltVU0VSXVtQQVNTV09SRF0gUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0UmVzZXRQYXNzd29yZExpbmsgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkdFVF9SRVNFVF9QQVNTV09SRF9MSU5LO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdFN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5SRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwuUmVxdWVzdCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0U3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEaXNhYmxlR2V0TGluayBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuRElTQUJMRV9HRVRfTElOSztcclxufVxyXG5leHBvcnQgY2xhc3MgRW5hYmxlR2V0TGluayBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuRU5BQkxFX0dFVF9MSU5LO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBNYXhpbXVtVHJ5SGFwcGVuZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuTUFYSU1VTV9UUllfSEFQUEVORDtcclxufVxyXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRDaGFuZ2VkU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQYXNzd29yZENoYW5nZWRGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uID1cclxuXHR8IEdldFJlc2V0UGFzc3dvcmRMaW5rXHJcblx0fCBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RTdGFydFxyXG5cdHwgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0RmFpbGVkXHJcblx0fCBEaXNhYmxlR2V0TGlua1xyXG5cdHwgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0U3VjY2VlZFxyXG5cdHwgRW5hYmxlR2V0TGlua1xyXG5cdHwgTWF4aW11bVRyeUhhcHBlbmRcclxuXHR8IFBhc3N3b3JkQ2hhbmdlZFN1Y2NlZWRcclxuXHR8IFBhc3N3b3JkQ2hhbmdlZEZhaWxlZDtcclxuIl19