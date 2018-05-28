/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var ConfigActionTypes = {
    GET_CONFIGS: '[CONFIG] get config',
    CONFIG_LOADED_SUCCEED: '[CONFIG] load config succeed',
    CONFIG_LOADED_FAILED: '[CONFIG] load config failed',
};
export { ConfigActionTypes };
var GetConfigAction = /** @class */ (function () {
    function GetConfigAction() {
        this.type = ConfigActionTypes.GET_CONFIGS;
    }
    return GetConfigAction;
}());
export { GetConfigAction };
function GetConfigAction_tsickle_Closure_declarations() {
    /** @type {?} */
    GetConfigAction.prototype.type;
}
var ConfigLoadedSucceedAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function ConfigLoadedSucceedAction(payload) {
        this.payload = payload;
        this.type = ConfigActionTypes.CONFIG_LOADED_SUCCEED;
    }
    return ConfigLoadedSucceedAction;
}());
export { ConfigLoadedSucceedAction };
function ConfigLoadedSucceedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    ConfigLoadedSucceedAction.prototype.type;
    /** @type {?} */
    ConfigLoadedSucceedAction.prototype.payload;
}
var ConfigLoadedFailedAction = /** @class */ (function () {
    function ConfigLoadedFailedAction() {
        this.type = ConfigActionTypes.CONFIG_LOADED_FAILED;
    }
    return ConfigLoadedFailedAction;
}());
export { ConfigLoadedFailedAction };
function ConfigLoadedFailedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    ConfigLoadedFailedAction.prototype.type;
}
//# sourceMappingURL=config.action.js.map
