(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@ngrx/store'), require('@soushians/config'), require('rxjs/operators'), require('socket.io-client'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@soushians/socket', ['exports', '@angular/core', 'rxjs', '@ngrx/store', '@soushians/config', 'rxjs/operators', 'socket.io-client', '@angular/common'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.socket = {}),global.ng.core,null,null,null,global.Rx.Observable.prototype,null,global.ng.common));
}(this, (function (exports,core,rxjs,store,config,operators,_io,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
        development_uri: "http://localhost:3000",
        production_uri: "",
        env: {
            production: false
        }
    };
    var /** @type {?} */ MODULE_CONFIG_TOKEN = new core.InjectionToken("SocketModuleConfig");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SocketConfigurationService = (function () {
        /**
         * @param {?} configFile
         * @param {?} store
         */
        function SocketConfigurationService(configFile, store$$1) {
            var _this = this;
            this.store = store$$1;
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
            /**
             * @return {?}
             */
            get: function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        return SocketConfigurationService;
    }());
    SocketConfigurationService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    SocketConfigurationService.ctorParameters = function () {
        return [
            { type: undefined, decorators: [{ type: core.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
            { type: store.Store }
        ];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {string} */
    var SocketActionTypes = {
        SOCKET_RUN_SUCCESSFULLY: "[SOCKET] SOCKET_RUN_SUCCESSFULLY",
        SOCKET_INITIALAZATION_FAILD: "[SOCKET] SOCKET_INITIALAZATION_FAILD",
    };
    var SocketRunSuccessfullyAction = (function () {
        function SocketRunSuccessfullyAction() {
            this.type = SocketActionTypes.SOCKET_RUN_SUCCESSFULLY;
        }
        return SocketRunSuccessfullyAction;
    }());
    var SocketInitialazationFailedAction = (function () {
        function SocketInitialazationFailedAction() {
            this.type = SocketActionTypes.SOCKET_INITIALAZATION_FAILD;
        }
        return SocketInitialazationFailedAction;
    }());
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // import * as socketIo from "socket.io-client";
    // const socketIo = require("socket.io-client");
    // tslint:disable-next-line:no-debugger
    debugger;
    var /** @type {?} */ io = _io;
    var SocketService = (function () {
        /**
         * @param {?} configService
         * @param {?} store
         */
        function SocketService(configService, store$$1) {
            var _this = this;
            this.configService = configService;
            this.store = store$$1;
            this.configService.config$
                .pipe(operators.map(function (config$$1) { return (config$$1.env.production ? config$$1.production_uri : config$$1.development_uri); }), operators.map(function (uri) {
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
         * \@example
         * this.socketService.on<number>("chnage-number").subscribe(data=>{})
         * @template T
         * @param {?} message
         * @return {?}
         * Observable<T>
         */
        SocketService.prototype.on = function (message) {
            var _this = this;
            var /** @type {?} */ observer$ = new rxjs.Observable(function (observer) {
                _this.socket.on(message, function (data) {
                    observer.next(data);
                });
            });
            return observer$;
        };
        /**
         * \@example
         * this.socketService.emit("chnage-number",{number:2})
         * @param {?} message
         * @param {?} payload
         * @return {?}
         * void
         */
        SocketService.prototype.emit = function (message, payload) {
            this.socket.emit(message, payload);
        };
        return SocketService;
    }());
    SocketService.decorators = [
        { type: core.Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    SocketService.ctorParameters = function () {
        return [
            { type: SocketConfigurationService },
            { type: store.Store }
        ];
    };
    /** @nocollapse */ SocketService.ngInjectableDef = core.defineInjectable({ factory: function SocketService_Factory() { return new SocketService(core.inject(SocketConfigurationService), core.inject(store.Store)); }, token: SocketService, providedIn: "root" });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
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
        if (state === void 0) {
            state = initialState;
        }
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
    var NgsSocketModule = (function () {
        function NgsSocketModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        NgsSocketModule.forRoot = function (config$$1) {
            return {
                ngModule: NgsSocketRootModule,
                providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config$$1 }, SocketConfigurationService, SocketService]
            };
        };
        return NgsSocketModule;
    }());
    NgsSocketModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule]
                },] },
    ];
    var NgsSocketRootModule = (function () {
        function NgsSocketRootModule() {
        }
        return NgsSocketRootModule;
    }());
    NgsSocketRootModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [NgsSocketModule, store.StoreModule.forFeature("socket", SocketReducer)]
                },] },
    ];

    exports.NgsSocketModule = NgsSocketModule;
    exports.NgsSocketRootModule = NgsSocketRootModule;
    exports.MODULE_DEFAULT_CONFIG = MODULE_DEFAULT_CONFIG;
    exports.MODULE_CONFIG_TOKEN = MODULE_CONFIG_TOKEN;
    exports.SocketActionTypes = SocketActionTypes;
    exports.SocketRunSuccessfullyAction = SocketRunSuccessfullyAction;
    exports.SocketInitialazationFailedAction = SocketInitialazationFailedAction;
    exports.SocketService = SocketService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=soushians-socket.umd.js.map
