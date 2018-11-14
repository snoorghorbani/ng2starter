/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var UPSERT_PAGE_ACTION_TYPES = {
    START: "[UPSERT_PAGE][API][UpsertPage] start",
    SUCCEED: "[UPSERT_PAGE][API][UpsertPage] succeed",
    FAILED: "[UPSERT_PAGE][API][UpsertPage] failed",
};
export { UPSERT_PAGE_ACTION_TYPES };
export class UpsertPageStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_PAGE][API][UpsertPage] start" /* START */;
    }
}
if (false) {
    /** @type {?} */
    UpsertPageStartAction.prototype.type;
    /** @type {?} */
    UpsertPageStartAction.prototype.payload;
}
export class UpsertPageSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_PAGE][API][UpsertPage] succeed" /* SUCCEED */;
    }
}
if (false) {
    /** @type {?} */
    UpsertPageSucceedAction.prototype.type;
    /** @type {?} */
    UpsertPageSucceedAction.prototype.payload;
}
export class UpsertPageFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_PAGE][API][UpsertPage] failed" /* FAILED */;
    }
}
if (false) {
    /** @type {?} */
    UpsertPageFailedAction.prototype.type;
    /** @type {?} */
    UpsertPageFailedAction.prototype.payload;
}
/** @typedef {?} */
var UpsertPageActions;
export { UpsertPageActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LXBhZ2UuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LXBhZ2UvdXBzZXJ0LXBhZ2UuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFNQyxPQUFRLHNDQUFzQztJQUM5QyxTQUFVLHdDQUF3QztJQUNsRCxRQUFTLHVDQUF1Qzs7O0FBR2pELE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFFakMsWUFBbUIsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQURyQywrREFBK0M7S0FDTjtDQUN6Qzs7Ozs7OztBQUNELE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFFbkMsWUFBbUIsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQURyQyxtRUFBaUQ7S0FDUjtDQUN6Qzs7Ozs7OztBQUNELE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFFbEMsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEL0IsaUVBQWdEO0tBQ2I7Q0FDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydFBhZ2VBcGlNb2RlbCB9IGZyb20gXCIuL3Vwc2VydC1wYWdlLm1vZGVsXCI7XHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gVVBTRVJUX1BBR0VfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW1VQU0VSVF9QQUdFXVtBUEldW1Vwc2VydFBhZ2VdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW1VQU0VSVF9QQUdFXVtBUEldW1Vwc2VydFBhZ2VdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltVUFNFUlRfUEFHRV1bQVBJXVtVcHNlcnRQYWdlXSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0UGFnZVN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX1BBR0VfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYWdlTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydFBhZ2VTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX1BBR0VfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhZ2VNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0UGFnZUZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9QQUdFX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVXBzZXJ0UGFnZUFjdGlvbnMgPSBVcHNlcnRQYWdlU3RhcnRBY3Rpb24gfCBVcHNlcnRQYWdlU3VjY2VlZEFjdGlvbiB8IFVwc2VydFBhZ2VGYWlsZWRBY3Rpb247XHJcbiJdfQ==