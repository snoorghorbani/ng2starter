/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ConfigActionTypes = {
    GET_CONFIGS: "[CONFIG] get config",
    CONFIG_LOADED_SUCCEED: "[CONFIG] load config succeed",
    UPDATE_CONFIG: "[CONFIG] update config",
    CONFIG_LOADED_FAILED: "[CONFIG] load config failed",
};
export { ConfigActionTypes };
var GetConfigAction = /** @class */ (function () {
    function GetConfigAction() {
        this.type = ConfigActionTypes.GET_CONFIGS;
    }
    return GetConfigAction;
}());
export { GetConfigAction };
if (false) {
    /** @type {?} */
    GetConfigAction.prototype.type;
}
var ConfigLoadedSucceedAction = /** @class */ (function () {
    function ConfigLoadedSucceedAction(payload) {
        this.payload = payload;
        this.type = ConfigActionTypes.CONFIG_LOADED_SUCCEED;
    }
    return ConfigLoadedSucceedAction;
}());
export { ConfigLoadedSucceedAction };
if (false) {
    /** @type {?} */
    ConfigLoadedSucceedAction.prototype.type;
    /** @type {?} */
    ConfigLoadedSucceedAction.prototype.payload;
}
var UpdateConfigAction = /** @class */ (function () {
    function UpdateConfigAction(payload) {
        this.payload = payload;
        this.type = ConfigActionTypes.UPDATE_CONFIG;
    }
    return UpdateConfigAction;
}());
export { UpdateConfigAction };
if (false) {
    /** @type {?} */
    UpdateConfigAction.prototype.type;
    /** @type {?} */
    UpdateConfigAction.prototype.payload;
}
var ConfigLoadedFailedAction = /** @class */ (function () {
    function ConfigLoadedFailedAction() {
        this.type = ConfigActionTypes.CONFIG_LOADED_FAILED;
    }
    return ConfigLoadedFailedAction;
}());
export { ConfigLoadedFailedAction };
if (false) {
    /** @type {?} */
    ConfigLoadedFailedAction.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvY29uZmlnLyIsInNvdXJjZXMiOlsiY29uZmlnL3NyYy9saWIvYWN0aW9ucy9jb25maWcuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUlDLGFBQWMscUJBQXFCO0lBQ25DLHVCQUF3Qiw4QkFBOEI7SUFDdEQsZUFBZ0Isd0JBQXdCO0lBQ3hDLHNCQUF1Qiw2QkFBNkI7OztBQUdyRDtJQUFBO1FBQ1UsU0FBSSxHQUFHLGlCQUFpQixDQUFDLFdBQVcsQ0FBQztJQUMvQyxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURBLCtCQUE4Qzs7QUFHL0M7SUFHQyxtQ0FBbUIsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFGckMsU0FBSSxHQUFHLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDO0lBRVAsQ0FBQztJQUNuRCxnQ0FBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7O0lBSEEseUNBQXdEOztJQUU1Qyw0Q0FBa0M7O0FBRS9DO0lBRUMsNEJBQW1CLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBRG5DLFNBQUksR0FBRyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7SUFDRCxDQUFDO0lBQ2pELHlCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSxrQ0FBZ0Q7O0lBQ3BDLHFDQUFnQzs7QUFHN0M7SUFBQTtRQUNVLFNBQUksR0FBRyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQztJQUN4RCxDQUFDO0lBQUQsK0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURBLHdDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBDb25maWdNb2RlbCwgR2V0Q29uZmlnc0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gQ29uZmlnQWN0aW9uVHlwZXMge1xyXG5cdEdFVF9DT05GSUdTID0gXCJbQ09ORklHXSBnZXQgY29uZmlnXCIsXHJcblx0Q09ORklHX0xPQURFRF9TVUNDRUVEID0gXCJbQ09ORklHXSBsb2FkIGNvbmZpZyBzdWNjZWVkXCIsXHJcblx0VVBEQVRFX0NPTkZJRyA9IFwiW0NPTkZJR10gdXBkYXRlIGNvbmZpZ1wiLFxyXG5cdENPTkZJR19MT0FERURfRkFJTEVEID0gXCJbQ09ORklHXSBsb2FkIGNvbmZpZyBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0Q29uZmlnQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ29uZmlnQWN0aW9uVHlwZXMuR0VUX0NPTkZJR1M7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maWdMb2FkZWRTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ29uZmlnQWN0aW9uVHlwZXMuQ09ORklHX0xPQURFRF9TVUNDRUVEO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ29uZmlnTW9kZWw8YW55PltdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVDb25maWdBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDb25maWdBY3Rpb25UeXBlcy5VUERBVEVfQ09ORklHO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDb25maWdNb2RlbDxhbnk+KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ29uZmlnQWN0aW9uVHlwZXMuQ09ORklHX0xPQURFRF9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IHR5cGUgQWN0aW9ucyA9IEdldENvbmZpZ0FjdGlvbiB8IENvbmZpZ0xvYWRlZFN1Y2NlZWRBY3Rpb24gfCBDb25maWdMb2FkZWRGYWlsZWRBY3Rpb24gfCBVcGRhdGVDb25maWdBY3Rpb247XHJcbiJdfQ==