import { InjectionToken, Inject, Injectable, NgModule, defineInjectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { getSocketModuleConfig } from '@soushians/config';
import { map } from 'rxjs/operators';
import * as _io from 'socket.io-client';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var MODULE_DEFAULT_CONFIG = {
    env: {
        production: false,
        frontend_server: "frontend_server/did/not/set"
    }
};
/** @type {?} */
var MODULE_CONFIG_TOKEN = new InjectionToken("SocketModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var io = _io;
var SocketService = /** @class */ (function () {
    function SocketService(configService, store) {
        var _this = this;
        this.configService = configService;
        this.store = store;
        this.configService.config$
            .pipe(map(function (config) { return config.env.frontend_server; }), map(function (uri) {
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
        /** @type {?} */
        var observer$ = new Observable(function (observer) {
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState = {
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
/** @type {?} */
var SocketReducer = {
    change: Reducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgsSocketModule, SocketService, SocketConfigurationService as ɵe, MODULE_CONFIG_TOKEN as ɵf, NgsSocketRootModule as ɵa, Reducer as ɵb, SocketReducer as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXNvY2tldC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy9zb2NrZXQvbGliL3NvY2tldC5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvc29ja2V0L2xpYi9zZXJ2aWNlcy9zb2NrZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NvY2tldC9saWIvc29ja2V0LmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvc29ja2V0L2xpYi9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9zb2NrZXQvbGliL3NvY2tldC5yZWR1Y2VyLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NvY2tldC9saWIvc29ja2V0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNvY2tldE1vZHVsZUNvbmZpZyB7XHJcblx0ZW52Pzoge1xyXG5cdFx0cHJvZHVjdGlvbjogYm9vbGVhbjtcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogc3RyaW5nO1xyXG5cdH07XHJcbn1cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogU29ja2V0TW9kdWxlQ29uZmlnID0ge1xyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2UsXHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IFwiZnJvbnRlbmRfc2VydmVyL2RpZC9ub3Qvc2V0XCJcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPFNvY2tldE1vZHVsZUNvbmZpZz4oXCJTb2NrZXRNb2R1bGVDb25maWdcIik7XHJcbiIsImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRTb2NrZXRNb2R1bGVDb25maWcgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IFNvY2tldE1vZHVsZUNvbmZpZywgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4uL3NvY2tldC5jb25maWdcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vc29ja2V0LnJlZHVjZXJcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNvY2tldENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IFNvY2tldE1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoTU9EVUxFX0RFRkFVTFRfQ09ORklHKTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0dGhpcy5zdG9yZS5zZWxlY3QoZ2V0U29ja2V0TW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUodXNlckNvbmZpZyA9PiB7XHJcblx0XHRcdGlmICghdXNlckNvbmZpZykge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHVzZXJDb25maWcuQ29uZmlnKTtcclxuXHRcdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFNvY2tldEFjdGlvblR5cGVzIHtcclxuXHRTT0NLRVRfUlVOX1NVQ0NFU1NGVUxMWSA9IFwiW1NPQ0tFVF0gU09DS0VUX1JVTl9TVUNDRVNTRlVMTFlcIixcclxuXHRTT0NLRVRfSU5JVElBTEFaQVRJT05fRkFJTEQgPSBcIltTT0NLRVRdIFNPQ0tFVF9JTklUSUFMQVpBVElPTl9GQUlMRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTb2NrZXRSdW5TdWNjZXNzZnVsbHlBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTb2NrZXRBY3Rpb25UeXBlcy5TT0NLRVRfUlVOX1NVQ0NFU1NGVUxMWTtcclxufVxyXG5leHBvcnQgY2xhc3MgU29ja2V0SW5pdGlhbGF6YXRpb25GYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTb2NrZXRBY3Rpb25UeXBlcy5TT0NLRVRfSU5JVElBTEFaQVRJT05fRkFJTEQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNvY2tldEFjdGlvbnMgPSBTb2NrZXRSdW5TdWNjZXNzZnVsbHlBY3Rpb24gfCBTb2NrZXRJbml0aWFsYXphdGlvbkZhaWxlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0ICogYXMgX2lvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmNvbnN0IGlvID0gX2lvO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vc29ja2V0LnJlZHVjZXJcIjtcclxuXHJcbmltcG9ydCB7IFNvY2tldENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc29ja2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTb2NrZXRSdW5TdWNjZXNzZnVsbHlBY3Rpb24gfSBmcm9tIFwiLi4vc29ja2V0LmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU29ja2V0U2VydmljZSB7XHJcblx0c29ja2V0OiBhbnk7XHJcblx0dXJpOiBzdHJpbmc7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBTb2NrZXRDb25maWd1cmF0aW9uU2VydmljZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJFxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRtYXAoY29uZmlnID0+IGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyKSxcclxuXHRcdFx0XHRtYXAodXJpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHVyaSwgdGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyk7XHJcblx0XHRcdFx0XHR0aGlzLnNvY2tldCA9IGlvKHVyaSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU29ja2V0UnVuU3VjY2Vzc2Z1bGx5QWN0aW9uKCkpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zb2NrZXQub24oXCJESVNQQVRDSF9BQ1RJT05cIiwgZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKHtcclxuXHRcdFx0XHRcdFx0dHlwZTogZGF0YS50eXBlLFxyXG5cdFx0XHRcdFx0XHRwYXlsb2FkOiBkYXRhLnBheWxvYWRcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0LyoqXHJcblx0ICogQGV4YW1wbGVcclxuXHQgKiB0aGlzLnNvY2tldFNlcnZpY2Uub248bnVtYmVyPihcImNobmFnZS1udW1iZXJcIikuc3Vic2NyaWJlKGRhdGE9Pnt9KVxyXG5cdCAqIEByZXR1cm5zXHJcblx0ICogT2JzZXJ2YWJsZTxUPlxyXG5cdCAqL1xyXG5cdG9uPFQ+KG1lc3NhZ2UpOiBPYnNlcnZhYmxlPFQ+IHtcclxuXHRcdGNvbnN0IG9ic2VydmVyJCA9IG5ldyBPYnNlcnZhYmxlPFQ+KG9ic2VydmVyID0+IHtcclxuXHRcdFx0dGhpcy5zb2NrZXQub24obWVzc2FnZSwgKGRhdGE6IFQpID0+IHtcclxuXHRcdFx0XHRvYnNlcnZlci5uZXh0KGRhdGEpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIG9ic2VydmVyJDtcclxuXHR9XHJcblx0LyoqXHJcblx0ICogQGV4YW1wbGVcclxuXHQgKiB0aGlzLnNvY2tldFNlcnZpY2UuZW1pdChcImNobmFnZS1udW1iZXJcIix7bnVtYmVyOjJ9KVxyXG5cdCAqIEByZXR1cm5zXHJcblx0ICogdm9pZFxyXG5cdCAqL1xyXG5cdGVtaXQobWVzc2FnZTogc3RyaW5nLCBwYXlsb2FkOiBhbnkpOiB2b2lkIHtcclxuXHRcdHRoaXMuc29ja2V0LmVtaXQobWVzc2FnZSwgcGF5bG9hZCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bnVtYmVyOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0bnVtYmVyOiAwXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNvY2tldFN0YXRlIHtcclxuXHRjaGFuZ2U6IFN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU29ja2V0UmVkdWNlciA9IHtcclxuXHRjaGFuZ2U6IFJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xyXG5cdHNvY2tldDogU29ja2V0U3RhdGU7XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBTb2NrZXRNb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi9zb2NrZXQuY29uZmlnXCI7XHJcbmltcG9ydCB7IFNvY2tldENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvc29ja2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTb2NrZXRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvc29ja2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU29ja2V0UmVkdWNlciB9IGZyb20gXCIuL3NvY2tldC5yZWR1Y2VyXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc1NvY2tldE1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogU29ja2V0TW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogTmdzU29ja2V0Um9vdE1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9LCBTb2NrZXRDb25maWd1cmF0aW9uU2VydmljZSwgU29ja2V0U2VydmljZSBdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbIE5nc1NvY2tldE1vZHVsZSwgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcInNvY2tldFwiLCBTb2NrZXRSZWR1Y2VyKSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NTb2NrZXRSb290TW9kdWxlIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNvY2tldFNlcnZpY2U6IFNvY2tldFNlcnZpY2UpIHt9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBUUEsSUFBYSxxQkFBcUIsR0FBdUI7SUFDeEQsR0FBRyxFQUFFO1FBQ0osVUFBVSxFQUFFLEtBQUs7UUFDakIsZUFBZSxFQUFFLDZCQUE2QjtLQUM5QztDQUNELENBQUM7O0FBQ0YsSUFBYSxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBcUIsb0JBQW9CLENBQUM7Ozs7OztBQ2QvRjtJQWlCQyxvQ0FBeUMsVUFBVSxFQUFVLEtBQXNCO1FBQW5GLGlCQVVDO1FBVjRELFVBQUssR0FBTCxLQUFLLENBQWlCO3VCQUZ6RSxJQUFJLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQztRQUduRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLHFCQUFxQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFVBQVU7WUFDNUQsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDaEIsT0FBTzthQUNQO1lBQ0QsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDaEMsQ0FBQyxDQUFDO0tBQ0g7SUFmRCxzQkFBSSw4Q0FBTTs7OztRQUFWO1lBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3BCOzs7T0FBQTs7Z0JBTEQsVUFBVTs7OztnREFRRyxNQUFNLFNBQUMsbUJBQW1CO2dCQWYvQixLQUFLOztxQ0FGZDs7Ozs7Ozs7O0lDR0MseUJBQTBCLGtDQUFrQztJQUM1RCw2QkFBOEIsc0NBQXNDOztBQUdyRSxJQUFBOztvQkFDaUIsaUJBQWlCLENBQUMsdUJBQXVCOztzQ0FSMUQ7SUFTQyxDQUFBOzs7Ozs7QUNURDtBQUtBLElBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUlmO0lBU0MsdUJBQW9CLGFBQXlDLEVBQVUsS0FBc0I7UUFBN0YsaUJBa0JDO1FBbEJtQixrQkFBYSxHQUFiLGFBQWEsQ0FBNEI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUM1RixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU87YUFDeEIsSUFBSSxDQUNKLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFBLENBQUMsRUFDekMsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEIsT0FBTyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLDJCQUEyQixFQUFFLENBQUMsQ0FBQztTQUM5RCxDQUFDLENBQ0Y7YUFDQSxTQUFTLENBQUM7WUFDVixLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxVQUFBLElBQUk7Z0JBQ3JDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO29CQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2lCQUNyQixDQUFDLENBQUM7YUFDSCxDQUFDLENBQUM7U0FDSCxDQUFDLENBQUM7S0FDSjs7Ozs7Ozs7Ozs7Ozs7O0lBT0QsMEJBQUU7Ozs7Ozs7O0lBQUYsVUFBTSxPQUFPO1FBQWIsaUJBT0M7O1FBTkEsSUFBTSxTQUFTLEdBQUcsSUFBSSxVQUFVLENBQUksVUFBQSxRQUFRO1lBQzNDLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLElBQU87Z0JBQy9CLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDcEIsQ0FBQyxDQUFDO1NBQ0gsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxTQUFTLENBQUM7S0FDakI7Ozs7Ozs7Ozs7Ozs7OztJQU9ELDRCQUFJOzs7Ozs7OztJQUFKLFVBQUssT0FBZSxFQUFFLE9BQVk7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ25DOztnQkEvQ0QsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFMUSwwQkFBMEI7Z0JBTjFCLEtBQUs7Ozt3QkFIZDs7Ozs7Ozs7QUNLQSxJQUFhLFlBQVksR0FBVTtJQUNsQyxNQUFNLEVBQUUsQ0FBQztDQUNULENBQUM7Ozs7OztBQUVGLGlCQUF3QixLQUFvQixFQUFFLE1BQWM7SUFBcEMsc0JBQUEsRUFBQSxvQkFBb0I7SUFDM0MsUUFBUSxNQUFNLENBQUMsSUFBSTtRQUNsQixTQUFTO1lBQ1IsT0FBTyxLQUFLLENBQUM7U0FDYjtLQUNEO0NBQ0Q7O0FBTUQsSUFBYSxhQUFhLEdBQUc7SUFDNUIsTUFBTSxFQUFFLE9BQU87Q0FDZjs7Ozs7O0FDdkJEOzs7Ozs7O0lBYVEsdUJBQU87Ozs7SUFBZCxVQUFlLE1BQTJCO1FBQ3pDLE9BQU87WUFDTixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFNBQVMsRUFBRSxDQUFFLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRSwwQkFBMEIsRUFBRSxhQUFhLENBQUU7U0FDNUcsQ0FBQztLQUNGOztnQkFURCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFLENBQUUsWUFBWSxDQUFFO2lCQUN6Qjs7MEJBWEQ7OztJQXlCQyw2QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7S0FBSTs7Z0JBSnBELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUUsQ0FBRSxlQUFlLEVBQUUsV0FBVyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUU7aUJBQzdFOzs7O2dCQWpCUSxhQUFhOzs4QkFOdEI7Ozs7Ozs7Ozs7Ozs7OzsifQ==