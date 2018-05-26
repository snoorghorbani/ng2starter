/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const ConfigActionTypes = {
    GET_CONFIGS: '[CONFIG] get config',
    CONFIG_LOADED_SUCCEED: '[CONFIG] load config succeed',
    CONFIG_LOADED_FAILED: '[CONFIG] load config failed',
};
export { ConfigActionTypes };
export class GetConfigAction {
    constructor() {
        this.type = ConfigActionTypes.GET_CONFIGS;
    }
}
function GetConfigAction_tsickle_Closure_declarations() {
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
function ConfigLoadedSucceedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    ConfigLoadedSucceedAction.prototype.type;
    /** @type {?} */
    ConfigLoadedSucceedAction.prototype.payload;
}
export class ConfigLoadedFailedAction {
    constructor() {
        this.type = ConfigActionTypes.CONFIG_LOADED_FAILED;
    }
}
function ConfigLoadedFailedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    ConfigLoadedFailedAction.prototype.type;
}
//# sourceMappingURL=config.action.js.map
