/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ConfigActionTypes = {
    GET_CONFIGS: "[CONFIG] get config",
    CONFIG_LOADED_SUCCEED: "[CONFIG] load config succeed",
    UPDATE_CONFIG: "[CONFIG] update config",
    CONFIG_LOADED_FAILED: "[CONFIG] load config failed",
};
export { ConfigActionTypes };
export class GetConfigAction {
    constructor() {
        this.type = ConfigActionTypes.GET_CONFIGS;
    }
}
if (false) {
    /** @type {?} */
    GetConfigAction.prototype.type;
}
export class ConfigLoadedSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ConfigActionTypes.CONFIG_LOADED_SUCCEED;
    }
}
if (false) {
    /** @type {?} */
    ConfigLoadedSucceedAction.prototype.type;
    /** @type {?} */
    ConfigLoadedSucceedAction.prototype.payload;
}
export class UpdateConfigAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ConfigActionTypes.UPDATE_CONFIG;
    }
}
if (false) {
    /** @type {?} */
    UpdateConfigAction.prototype.type;
    /** @type {?} */
    UpdateConfigAction.prototype.payload;
}
export class ConfigLoadedFailedAction {
    constructor() {
        this.type = ConfigActionTypes.CONFIG_LOADED_FAILED;
    }
}
if (false) {
    /** @type {?} */
    ConfigLoadedFailedAction.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvY29uZmlnLyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvY29uZmlnLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFJQyxhQUFjLHFCQUFxQjtJQUNuQyx1QkFBd0IsOEJBQThCO0lBQ3RELGVBQWdCLHdCQUF3QjtJQUN4QyxzQkFBdUIsNkJBQTZCOzs7QUFHckQsTUFBTSxPQUFPLGVBQWU7SUFBNUI7UUFDVSxTQUFJLEdBQUcsaUJBQWlCLENBQUMsV0FBVyxDQUFDO0lBQy9DLENBQUM7Q0FBQTs7O0lBREEsK0JBQThDOztBQUcvQyxNQUFNLE9BQU8seUJBQXlCOzs7O0lBR3JDLFlBQW1CLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBRnJDLFNBQUksR0FBRyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQztJQUVQLENBQUM7Q0FDbEQ7OztJQUhBLHlDQUF3RDs7SUFFNUMsNENBQWtDOztBQUUvQyxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBRTlCLFlBQW1CLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBRG5DLFNBQUksR0FBRyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7SUFDRCxDQUFDO0NBQ2hEOzs7SUFGQSxrQ0FBZ0Q7O0lBQ3BDLHFDQUFnQzs7QUFHN0MsTUFBTSxPQUFPLHdCQUF3QjtJQUFyQztRQUNVLFNBQUksR0FBRyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQztJQUN4RCxDQUFDO0NBQUE7OztJQURBLHdDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBDb25maWdNb2RlbCwgR2V0Q29uZmlnc0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gQ29uZmlnQWN0aW9uVHlwZXMge1xyXG5cdEdFVF9DT05GSUdTID0gXCJbQ09ORklHXSBnZXQgY29uZmlnXCIsXHJcblx0Q09ORklHX0xPQURFRF9TVUNDRUVEID0gXCJbQ09ORklHXSBsb2FkIGNvbmZpZyBzdWNjZWVkXCIsXHJcblx0VVBEQVRFX0NPTkZJRyA9IFwiW0NPTkZJR10gdXBkYXRlIGNvbmZpZ1wiLFxyXG5cdENPTkZJR19MT0FERURfRkFJTEVEID0gXCJbQ09ORklHXSBsb2FkIGNvbmZpZyBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0Q29uZmlnQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ29uZmlnQWN0aW9uVHlwZXMuR0VUX0NPTkZJR1M7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maWdMb2FkZWRTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ29uZmlnQWN0aW9uVHlwZXMuQ09ORklHX0xPQURFRF9TVUNDRUVEO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ29uZmlnTW9kZWw8YW55PltdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVDb25maWdBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDb25maWdBY3Rpb25UeXBlcy5VUERBVEVfQ09ORklHO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDb25maWdNb2RlbDxhbnk+KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ29uZmlnQWN0aW9uVHlwZXMuQ09ORklHX0xPQURFRF9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IHR5cGUgQWN0aW9ucyA9IEdldENvbmZpZ0FjdGlvbiB8IENvbmZpZ0xvYWRlZFN1Y2NlZWRBY3Rpb24gfCBDb25maWdMb2FkZWRGYWlsZWRBY3Rpb24gfCBVcGRhdGVDb25maWdBY3Rpb247XHJcbiJdfQ==