/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var WidgetsActionTypes = {
    UPSERT: "[WIDGET][DB] UPSERT",
    DELETE: "[WIDGET][DB] DELETE",
};
export { WidgetsActionTypes };
var UpsertWidgetAction = /** @class */ (function () {
    function UpsertWidgetAction(payload) {
        this.payload = payload;
        this.type = WidgetsActionTypes.UPSERT;
    }
    return UpsertWidgetAction;
}());
export { UpsertWidgetAction };
if (false) {
    /** @type {?} */
    UpsertWidgetAction.prototype.type;
    /** @type {?} */
    UpsertWidgetAction.prototype.payload;
}
var DeleteWidgetAction = /** @class */ (function () {
    function DeleteWidgetAction(payload) {
        this.payload = payload;
        this.type = WidgetsActionTypes.DELETE;
    }
    return DeleteWidgetAction;
}());
export { DeleteWidgetAction };
if (false) {
    /** @type {?} */
    DeleteWidgetAction.prototype.type;
    /** @type {?} */
    DeleteWidgetAction.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3dpZGdldC8iLCJzb3VyY2VzIjpbImxpYi9yb290L3dpZGdldC5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUtDLFFBQVMscUJBQXFCO0lBQzlCLFFBQVMscUJBQXFCOzs7QUFHL0I7SUFFQyw0QkFBbUIsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFEckMsU0FBSSxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQztJQUNPLENBQUM7SUFDbkQseUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZBLGtDQUEwQzs7SUFDOUIscUNBQWtDOztBQUUvQztJQUVDLDRCQUFtQixPQUF5QjtRQUF6QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQURuQyxTQUFJLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDO0lBQ0ssQ0FBQztJQUNqRCx5QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkEsa0NBQTBDOztJQUM5QixxQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFdpZGdldHNBY3Rpb25UeXBlcyB7XHJcblx0VVBTRVJUID0gXCJbV0lER0VUXVtEQl0gVVBTRVJUXCIsXHJcblx0REVMRVRFID0gXCJbV0lER0VUXVtEQl0gREVMRVRFXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwc2VydFdpZGdldEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFdpZGdldHNBY3Rpb25UeXBlcy5VUFNFUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT5bXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGVsZXRlV2lkZ2V0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gV2lkZ2V0c0FjdGlvblR5cGVzLkRFTEVURTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogV2lkZ2V0TW9kZWw8YW55Pikge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgV2lkZ2V0c0FjdGlvbnMgPSBVcHNlcnRXaWRnZXRBY3Rpb24gfCBEZWxldGVXaWRnZXRBY3Rpb247XHJcbiJdfQ==