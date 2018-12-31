/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
/** @typedef {?} */
var Actions;
export { Actions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvY29uZmlnLyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvY29uZmlnLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFJQyxhQUFjLHFCQUFxQjtJQUNuQyx1QkFBd0IsOEJBQThCO0lBQ3RELGVBQWdCLHdCQUF3QjtJQUN4QyxzQkFBdUIsNkJBQTZCOzs7QUFHckQsSUFBQTs7UUFDQyxZQUFnQixpQkFBaUIsQ0FBQyxXQUFXLENBQUM7OzBCQVgvQztJQVlDLENBQUE7QUFGRCwyQkFFQzs7Ozs7QUFFRCxJQUFBO0lBR0MsbUNBQW1CLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBRjlDLFlBQWdCLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDO0tBRU47b0NBakJuRDtJQWtCQyxDQUFBO0FBSkQscUNBSUM7Ozs7Ozs7QUFDRCxJQUFBO0lBRUMsNEJBQW1CLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBRDVDLFlBQWdCLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztLQUNBOzZCQXJCakQ7SUFzQkMsQ0FBQTtBQUhELDhCQUdDOzs7Ozs7O0FBRUQsSUFBQTs7UUFDQyxZQUFnQixpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQzs7bUNBekJ4RDtJQTBCQyxDQUFBO0FBRkQsb0NBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwsIEdldENvbmZpZ3NBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIENvbmZpZ0FjdGlvblR5cGVzIHtcclxuXHRHRVRfQ09ORklHUyA9IFwiW0NPTkZJR10gZ2V0IGNvbmZpZ1wiLFxyXG5cdENPTkZJR19MT0FERURfU1VDQ0VFRCA9IFwiW0NPTkZJR10gbG9hZCBjb25maWcgc3VjY2VlZFwiLFxyXG5cdFVQREFURV9DT05GSUcgPSBcIltDT05GSUddIHVwZGF0ZSBjb25maWdcIixcclxuXHRDT05GSUdfTE9BREVEX0ZBSUxFRCA9IFwiW0NPTkZJR10gbG9hZCBjb25maWcgZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldENvbmZpZ0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENvbmZpZ0FjdGlvblR5cGVzLkdFVF9DT05GSUdTO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnTG9hZGVkU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENvbmZpZ0FjdGlvblR5cGVzLkNPTkZJR19MT0FERURfU1VDQ0VFRDtcclxuXHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENvbmZpZ01vZGVsPGFueT5bXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBkYXRlQ29uZmlnQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ29uZmlnQWN0aW9uVHlwZXMuVVBEQVRFX0NPTkZJRztcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ29uZmlnTW9kZWw8YW55Pikge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ0xvYWRlZEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENvbmZpZ0FjdGlvblR5cGVzLkNPTkZJR19MT0FERURfRkFJTEVEO1xyXG59XHJcbmV4cG9ydCB0eXBlIEFjdGlvbnMgPSBHZXRDb25maWdBY3Rpb24gfCBDb25maWdMb2FkZWRTdWNjZWVkQWN0aW9uIHwgQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uIHwgVXBkYXRlQ29uZmlnQWN0aW9uO1xyXG4iXX0=