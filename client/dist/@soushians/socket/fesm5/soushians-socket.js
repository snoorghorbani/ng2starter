import { InjectionToken, Inject, Injectable, NgModule, defineInjectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { getSocketModuleConfig } from '@soushians/config';
import { map } from 'rxjs/operators';
import * as _io from 'socket.io-client';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    development_uri: "http://localhost:3000",
    production_uri: "http://185.208.174.92:3000",
    env: {
        production: false
    }
};
var /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("SocketModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SocketConfigurationService = /** @class */ (function () {
    function SocketConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getSocketModuleConfig).subscribe(function (userConfig) {
            if (!userConfig) {
                return;
            }
            _this._config = Object.assign({}, _this._config, userConfig.Config);
            _this.config$.next(_this._config);
        });
    }
    Object.defineProperty(SocketConfigurationService.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    SocketConfigurationService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SocketConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
        { type: Store }
    ]; };
    return SocketConfigurationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var SocketActionTypes = {
    SOCKET_RUN_SUCCESSFULLY: "[SOCKET] SOCKET_RUN_SUCCESSFULLY",
    SOCKET_INITIALAZATION_FAILD: "[SOCKET] SOCKET_INITIALAZATION_FAILD",
};
var SocketRunSuccessfullyAction = /** @class */ (function () {
    function SocketRunSuccessfullyAction() {
        this.type = SocketActionTypes.SOCKET_RUN_SUCCESSFULLY;
    }
    return SocketRunSuccessfullyAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ io = _io;
var SocketService = /** @class */ (function () {
    function SocketService(configService, store) {
        var _this = this;
        this.configService = configService;
        this.store = store;
        this.configService.config$
            .pipe(map(function (config) { return (config.env.production ? config.production_uri : config.development_uri); }), map(function (uri) {
            console.log(uri, _this.configService.config);
            _this.socket = io(uri);
            return _this.store.dispatch(new SocketRunSuccessfullyAction());
        }))
            .subscribe(function () {
            _this.socket.on("DISPATCH_ACTION", function (data) {
                _this.store.dispatch({
                    type: data.type,
                    payload: data.payload
                });
            });
        });
    }
    /**
     * @example
     * this.socketService.on<number>("chnage-number").subscribe(data=>{})
     * @returns
     * Observable<T>
     */
    /**
     * \@example
     * this.socketService.on<number>("chnage-number").subscribe(data=>{})
     * @template T
     * @param {?} message
     * @return {?}
     * Observable<T>
     */
    SocketService.prototype.on = /**
     * \@example
     * this.socketService.on<number>("chnage-number").subscribe(data=>{})
     * @template T
     * @param {?} message
     * @return {?}
     * Observable<T>
     */
    function (message) {
        var _this = this;
        var /** @type {?} */ observer$ = new Observable(function (observer) {
            _this.socket.on(message, function (data) {
                observer.next(data);
            });
        });
        return observer$;
    };
    /**
     * @example
     * this.socketService.emit("chnage-number",{number:2})
     * @returns
     * void
     */
    /**
     * \@example
     * this.socketService.emit("chnage-number",{number:2})
     * @param {?} message
     * @param {?} payload
     * @return {?}
     * void
     */
    SocketService.prototype.emit = /**
     * \@example
     * this.socketService.emit("chnage-number",{number:2})
     * @param {?} message
     * @param {?} payload
     * @return {?}
     * void
     */
    function (message, payload) {
        this.socket.emit(message, payload);
    };
    SocketService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    SocketService.ctorParameters = function () { return [
        { type: SocketConfigurationService },
        { type: Store }
    ]; };
    /** @nocollapse */ SocketService.ngInjectableDef = defineInjectable({ factory: function SocketService_Factory() { return new SocketService(inject(SocketConfigurationService), inject(Store)); }, token: SocketService, providedIn: "root" });
    return SocketService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ initialState = {
    number: 0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        default: {
            return state;
        }
    }
}
var /** @type {?} */ SocketReducer = {
    change: Reducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgsSocketModule = /** @class */ (function () {
    function NgsSocketModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgsSocketModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: NgsSocketRootModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, SocketConfigurationService, SocketService]
        };
    };
    NgsSocketModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule]
                },] },
    ];
    return NgsSocketModule;
}());
var NgsSocketRootModule = /** @class */ (function () {
    function NgsSocketRootModule(socketService) {
        this.socketService = socketService;
    }
    NgsSocketRootModule.decorators = [
        { type: NgModule, args: [{
                    imports: [NgsSocketModule, StoreModule.forFeature("socket", SocketReducer)]
                },] },
    ];
    /** @nocollapse */
    NgsSocketRootModule.ctorParameters = function () { return [
        { type: SocketService }
    ]; };
    return NgsSocketRootModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { NgsSocketModule, SocketService, SocketConfigurationService as ɵe, MODULE_CONFIG_TOKEN as ɵf, NgsSocketRootModule as ɵa, Reducer as ɵb, SocketReducer as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXNvY2tldC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy9zb2NrZXQvbGliL3NvY2tldC5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvc29ja2V0L2xpYi9zZXJ2aWNlcy9zb2NrZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NvY2tldC9saWIvc29ja2V0LmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvc29ja2V0L2xpYi9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9zb2NrZXQvbGliL3NvY2tldC5yZWR1Y2VyLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NvY2tldC9saWIvc29ja2V0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNvY2tldE1vZHVsZUNvbmZpZyB7XHJcblx0ZGV2ZWxvcG1lbnRfdXJpOiBzdHJpbmc7XHJcblx0cHJvZHVjdGlvbl91cmk6IHN0cmluZztcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdH07XHJcbn1cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogU29ja2V0TW9kdWxlQ29uZmlnID0ge1xyXG5cdGRldmVsb3BtZW50X3VyaTogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcclxuXHRwcm9kdWN0aW9uX3VyaTogXCJodHRwOi8vMTg1LjIwOC4xNzQuOTI6MzAwMFwiLFxyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2VcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPFNvY2tldE1vZHVsZUNvbmZpZz4oXCJTb2NrZXRNb2R1bGVDb25maWdcIik7XHJcbiIsImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRTb2NrZXRNb2R1bGVDb25maWcgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IFNvY2tldE1vZHVsZUNvbmZpZywgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4uL3NvY2tldC5jb25maWdcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vc29ja2V0LnJlZHVjZXJcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNvY2tldENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IFNvY2tldE1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoTU9EVUxFX0RFRkFVTFRfQ09ORklHKTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0dGhpcy5zdG9yZS5zZWxlY3QoZ2V0U29ja2V0TW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUodXNlckNvbmZpZyA9PiB7XHJcblx0XHRcdGlmICghdXNlckNvbmZpZykge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHVzZXJDb25maWcuQ29uZmlnKTtcclxuXHRcdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFNvY2tldEFjdGlvblR5cGVzIHtcclxuXHRTT0NLRVRfUlVOX1NVQ0NFU1NGVUxMWSA9IFwiW1NPQ0tFVF0gU09DS0VUX1JVTl9TVUNDRVNTRlVMTFlcIixcclxuXHRTT0NLRVRfSU5JVElBTEFaQVRJT05fRkFJTEQgPSBcIltTT0NLRVRdIFNPQ0tFVF9JTklUSUFMQVpBVElPTl9GQUlMRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTb2NrZXRSdW5TdWNjZXNzZnVsbHlBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTb2NrZXRBY3Rpb25UeXBlcy5TT0NLRVRfUlVOX1NVQ0NFU1NGVUxMWTtcclxufVxyXG5leHBvcnQgY2xhc3MgU29ja2V0SW5pdGlhbGF6YXRpb25GYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTb2NrZXRBY3Rpb25UeXBlcy5TT0NLRVRfSU5JVElBTEFaQVRJT05fRkFJTEQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNvY2tldEFjdGlvbnMgPSBTb2NrZXRSdW5TdWNjZXNzZnVsbHlBY3Rpb24gfCBTb2NrZXRJbml0aWFsYXphdGlvbkZhaWxlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0ICogYXMgX2lvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmNvbnN0IGlvID0gX2lvO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vc29ja2V0LnJlZHVjZXJcIjtcclxuXHJcbmltcG9ydCB7IFNvY2tldENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc29ja2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTb2NrZXRSdW5TdWNjZXNzZnVsbHlBY3Rpb24gfSBmcm9tIFwiLi4vc29ja2V0LmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU29ja2V0U2VydmljZSB7XHJcblx0c29ja2V0OiBhbnk7XHJcblx0dXJpOiBzdHJpbmc7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBTb2NrZXRDb25maWd1cmF0aW9uU2VydmljZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJFxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRtYXAoY29uZmlnID0+IChjb25maWcuZW52LnByb2R1Y3Rpb24gPyBjb25maWcucHJvZHVjdGlvbl91cmkgOiBjb25maWcuZGV2ZWxvcG1lbnRfdXJpKSksXHJcblx0XHRcdFx0bWFwKHVyaSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh1cmksIHRoaXMuY29uZmlnU2VydmljZS5jb25maWcpO1xyXG5cdFx0XHRcdFx0dGhpcy5zb2NrZXQgPSBpbyh1cmkpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNvY2tldFJ1blN1Y2Nlc3NmdWxseUFjdGlvbigpKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc29ja2V0Lm9uKFwiRElTUEFUQ0hfQUNUSU9OXCIsIGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaCh7XHJcblx0XHRcdFx0XHRcdHR5cGU6IGRhdGEudHlwZSxcclxuXHRcdFx0XHRcdFx0cGF5bG9hZDogZGF0YS5wYXlsb2FkXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIEBleGFtcGxlXHJcblx0ICogdGhpcy5zb2NrZXRTZXJ2aWNlLm9uPG51bWJlcj4oXCJjaG5hZ2UtbnVtYmVyXCIpLnN1YnNjcmliZShkYXRhPT57fSlcclxuXHQgKiBAcmV0dXJuc1xyXG5cdCAqIE9ic2VydmFibGU8VD5cclxuXHQgKi9cclxuXHRvbjxUPihtZXNzYWdlKTogT2JzZXJ2YWJsZTxUPiB7XHJcblx0XHRjb25zdCBvYnNlcnZlciQgPSBuZXcgT2JzZXJ2YWJsZTxUPihvYnNlcnZlciA9PiB7XHJcblx0XHRcdHRoaXMuc29ja2V0Lm9uKG1lc3NhZ2UsIChkYXRhOiBUKSA9PiB7XHJcblx0XHRcdFx0b2JzZXJ2ZXIubmV4dChkYXRhKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBvYnNlcnZlciQ7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIEBleGFtcGxlXHJcblx0ICogdGhpcy5zb2NrZXRTZXJ2aWNlLmVtaXQoXCJjaG5hZ2UtbnVtYmVyXCIse251bWJlcjoyfSlcclxuXHQgKiBAcmV0dXJuc1xyXG5cdCAqIHZvaWRcclxuXHQgKi9cclxuXHRlbWl0KG1lc3NhZ2U6IHN0cmluZywgcGF5bG9hZDogYW55KTogdm9pZCB7XHJcblx0XHR0aGlzLnNvY2tldC5lbWl0KG1lc3NhZ2UsIHBheWxvYWQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdG51bWJlcjogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdG51bWJlcjogMFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTb2NrZXRTdGF0ZSB7XHJcblx0Y2hhbmdlOiBTdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNvY2tldFJlZHVjZXIgPSB7XHJcblx0Y2hhbmdlOiBSZWR1Y2VyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFN0YXRlIHtcclxuXHRzb2NrZXQ6IFNvY2tldFN0YXRlO1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgU29ja2V0TW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vc29ja2V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBTb2NrZXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3NvY2tldC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU29ja2V0U2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3NvY2tldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNvY2tldFJlZHVjZXIgfSBmcm9tIFwiLi9zb2NrZXQucmVkdWNlclwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbIENvbW1vbk1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NTb2NrZXRNb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IFNvY2tldE1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IE5nc1NvY2tldFJvb3RNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfSwgU29ja2V0Q29uZmlndXJhdGlvblNlcnZpY2UsIFNvY2tldFNlcnZpY2UgXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogWyBOZ3NTb2NrZXRNb2R1bGUsIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJzb2NrZXRcIiwgU29ja2V0UmVkdWNlcikgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzU29ja2V0Um9vdE1vZHVsZSB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzb2NrZXRTZXJ2aWNlOiBTb2NrZXRTZXJ2aWNlKSB7fVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxBQVNPLHFCQUFNLHFCQUFxQixHQUF1QjtJQUN4RCxlQUFlLEVBQUUsdUJBQXVCO0lBQ3hDLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsR0FBRyxFQUFFO1FBQ0osVUFBVSxFQUFFLEtBQUs7S0FDakI7Q0FDRCxDQUFDO0FBQ0YscUJBQWEsbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQXFCLG9CQUFvQixDQUFDOzs7Ozs7QUNoQi9GO0lB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