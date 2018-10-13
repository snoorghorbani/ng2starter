/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
/** @typedef {?} */
var WidgetsActions;
export { WidgetsActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3dpZGdldC8iLCJzb3VyY2VzIjpbImxpYi9yb290L3dpZGdldC5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUtDLFFBQVMscUJBQXFCO0lBQzlCLFFBQVMscUJBQXFCOzs7QUFHL0IsSUFBQTtJQUVDLDRCQUFtQixPQUEyQjtRQUEzQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtvQkFEOUIsa0JBQWtCLENBQUMsTUFBTTtLQUNTOzZCQVhuRDtJQVlDLENBQUE7QUFIRCw4QkFHQzs7Ozs7OztBQUNELElBQUE7SUFFQyw0QkFBbUIsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7b0JBRDVCLGtCQUFrQixDQUFDLE1BQU07S0FDTzs2QkFmakQ7SUFnQkMsQ0FBQTtBQUhELDhCQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBXaWRnZXRzQWN0aW9uVHlwZXMge1xyXG5cdFVQU0VSVCA9IFwiW1dJREdFVF1bREJdIFVQU0VSVFwiLFxyXG5cdERFTEVURSA9IFwiW1dJREdFVF1bREJdIERFTEVURVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRXaWRnZXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBXaWRnZXRzQWN0aW9uVHlwZXMuVVBTRVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+W10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERlbGV0ZVdpZGdldEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFdpZGdldHNBY3Rpb25UeXBlcy5ERUxFVEU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT4pIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFdpZGdldHNBY3Rpb25zID0gVXBzZXJ0V2lkZ2V0QWN0aW9uIHwgRGVsZXRlV2lkZ2V0QWN0aW9uO1xyXG4iXX0=