/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var PagesActionTypes = {
    UPSERT: "[PAGE][DB] UPSERT",
    DELETE: "[PAGE][DB] DELETE",
};
export { PagesActionTypes };
var UpsertPageAction = /** @class */ (function () {
    function UpsertPageAction(payload) {
        this.payload = payload;
        this.type = PagesActionTypes.UPSERT;
    }
    return UpsertPageAction;
}());
export { UpsertPageAction };
if (false) {
    /** @type {?} */
    UpsertPageAction.prototype.type;
    /** @type {?} */
    UpsertPageAction.prototype.payload;
}
var DeletePageAction = /** @class */ (function () {
    function DeletePageAction(payload) {
        this.payload = payload;
        this.type = PagesActionTypes.DELETE;
    }
    return DeletePageAction;
}());
export { DeletePageAction };
if (false) {
    /** @type {?} */
    DeletePageAction.prototype.type;
    /** @type {?} */
    DeletePageAction.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9yb290L3BhZ2VzLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBS0MsUUFBUyxtQkFBbUI7SUFDNUIsUUFBUyxtQkFBbUI7OztBQUc3QjtJQUVDLDBCQUFtQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBRDlCLFNBQUksR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7SUFDRSxDQUFDO0lBQzVDLHVCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSxnQ0FBd0M7O0lBQzVCLG1DQUEyQjs7QUFFeEM7SUFFQywwQkFBbUIsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUQ1QixTQUFJLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO0lBQ0EsQ0FBQztJQUMxQyx1QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkEsZ0NBQXdDOztJQUM1QixtQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gUGFnZXNBY3Rpb25UeXBlcyB7XHJcblx0VVBTRVJUID0gXCJbUEFHRV1bREJdIFVQU0VSVFwiLFxyXG5cdERFTEVURSA9IFwiW1BBR0VdW0RCXSBERUxFVEVcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0UGFnZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFBhZ2VzQWN0aW9uVHlwZXMuVVBTRVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYWdlTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGVsZXRlUGFnZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFBhZ2VzQWN0aW9uVHlwZXMuREVMRVRFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYWdlTW9kZWwpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFBhZ2VzQWN0aW9ucyA9IFVwc2VydFBhZ2VBY3Rpb24gfCBEZWxldGVQYWdlQWN0aW9uO1xyXG4iXX0=