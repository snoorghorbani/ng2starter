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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvY29uZmlnLyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvY29uZmlnLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7aUJBSWUscUJBQXFCOzJCQUNYLDhCQUE4QjswQkFDL0IsNkJBQTZCOzs7QUFHckQsTUFBTTs7b0JBQ1csaUJBQWlCLENBQUMsV0FBVzs7Q0FDN0M7Ozs7O0FBRUQsTUFBTTs7OztJQUdMLFlBQW1CLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO29CQUY5QixpQkFBaUIsQ0FBQyxxQkFBcUI7S0FFTDtDQUNsRDs7Ozs7OztBQUVELE1BQU07O29CQUNXLGlCQUFpQixDQUFDLG9CQUFvQjs7Q0FDdEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IENvbmZpZ01vZGVsLCBHZXRDb25maWdzQXBpTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGVudW0gQ29uZmlnQWN0aW9uVHlwZXMge1xyXG5cdEdFVF9DT05GSUdTID0gJ1tDT05GSUddIGdldCBjb25maWcnLFxyXG5cdENPTkZJR19MT0FERURfU1VDQ0VFRCA9ICdbQ09ORklHXSBsb2FkIGNvbmZpZyBzdWNjZWVkJyxcclxuXHRDT05GSUdfTE9BREVEX0ZBSUxFRCA9ICdbQ09ORklHXSBsb2FkIGNvbmZpZyBmYWlsZWQnXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRDb25maWdBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDb25maWdBY3Rpb25UeXBlcy5HRVRfQ09ORklHUztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ0xvYWRlZFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDb25maWdBY3Rpb25UeXBlcy5DT05GSUdfTE9BREVEX1NVQ0NFRUQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDb25maWdNb2RlbDxhbnk+W10pIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maWdMb2FkZWRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDb25maWdBY3Rpb25UeXBlcy5DT05GSUdfTE9BREVEX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgdHlwZSBBY3Rpb25zID0gR2V0Q29uZmlnQWN0aW9uIHwgQ29uZmlnTG9hZGVkU3VjY2VlZEFjdGlvbiB8IENvbmZpZ0xvYWRlZEZhaWxlZEFjdGlvbjtcclxuIl19