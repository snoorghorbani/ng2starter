/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { SocketService, SocketConfigurationService } from "./services";
import { SocketReducer } from "./socket.reducer";
import { MODULE_CONFIG_TOKEN } from "./socket.config";
var NgsSocketModule = /** @class */ (function () {
    function NgsSocketModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgsSocketModule.forRoot = function (config) {
        return {
            ngModule: NgsSocketRootModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, SocketConfigurationService, SocketService]
        };
    };
    return NgsSocketModule;
}());
export { NgsSocketModule };
NgsSocketModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule]
            },] },
];
var NgsSocketRootModule = /** @class */ (function () {
    function NgsSocketRootModule() {
    }
    return NgsSocketRootModule;
}());
export { NgsSocketRootModule };
NgsSocketRootModule.decorators = [
    { type: NgModule, args: [{
                imports: [NgsSocketModule, StoreModule.forFeature("socket", SocketReducer)]
            },] },
];
//# sourceMappingURL=socket.module.js.map
