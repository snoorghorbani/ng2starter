(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@soushians/config'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@ngrx/store'), require('socket.io-client')) :
    typeof define === 'function' && define.amd ? define('@soushians/socket', ['exports', '@angular/common', '@soushians/config', '@angular/core', 'rxjs', 'rxjs/operators', '@ngrx/store', 'socket.io-client'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.socket = {}),global.ng.common,global.config,global.ng.core,global.rxjs,global.rxjs.operators,global.i2,global._io));
}(this, (function (exports,common,config,i0,rxjs,operators,i2,_io) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MODULE_DEFAULT_CONFIG = {
        env: {
            production: false,
            frontend_server: "frontend_server/did/not/set"
        }
    };
    /** @type {?} */
    var MODULE_CONFIG_TOKEN = new i0.InjectionToken("SocketModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SocketConfigurationService = /** @class */ (function () {
        function SocketConfigurationService(configFile, store) {
            var _this = this;
            this.store = store;
            this.config$ = new rxjs.BehaviorSubject(MODULE_DEFAULT_CONFIG);
            this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
            this.config$.next(this._config);
            this.store.select(config.getSocketModuleConfig).subscribe(function (userConfig) {
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
             */ function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        SocketConfigurationService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        SocketConfigurationService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
                { type: i2.Store }
            ];
        };
        return SocketConfigurationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var io = _io;
    var SocketService = /** @class */ (function () {
        function SocketService(configService, store) {
            var _this = this;
            this.configService = configService;
            this.store = store;
            this.configService.config$
                .pipe(operators.map(function (config$$1) { return config$$1.env.frontend_server; }), operators.map(function (uri) {
                // console.log(uri, this.configService.config);
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
                var observer$ = new rxjs.Observable(function (observer) {
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
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        SocketService.ctorParameters = function () {
            return [
                { type: SocketConfigurationService },
                { type: i2.Store }
            ];
        };
        /** @nocollapse */ SocketService.ngInjectableDef = i0.defineInjectable({ factory: function SocketService_Factory() { return new SocketService(i0.inject(SocketConfigurationService), i0.inject(i2.Store)); }, token: SocketService, providedIn: "root" });
        return SocketService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        if (state === void 0) {
            state = initialState;
        }
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            function (config$$1) {
                return {
                    ngModule: NgsSocketRootModule,
                    providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config$$1 }, SocketConfigurationService, SocketService]
                };
            };
        NgsSocketModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule]
                    },] }
        ];
        return NgsSocketModule;
    }());
    var NgsSocketRootModule = /** @class */ (function () {
        function NgsSocketRootModule(socketService) {
            this.socketService = socketService;
        }
        NgsSocketRootModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [NgsSocketModule, i2.StoreModule.forFeature("socket", SocketReducer)]
                    },] }
        ];
        /** @nocollapse */
        NgsSocketRootModule.ctorParameters = function () {
            return [
                { type: SocketService }
            ];
        };
        return NgsSocketRootModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgsSocketModule = NgsSocketModule;
    exports.SocketService = SocketService;
    exports.ɵe = SocketConfigurationService;
    exports.ɵf = MODULE_CONFIG_TOKEN;
    exports.ɵa = NgsSocketRootModule;
    exports.ɵb = Reducer;
    exports.ɵc = SocketReducer;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=soushians-socket.umd.js.map