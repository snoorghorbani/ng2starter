(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@ngrx/store'), require('rxjs'), require('@soushians/config'), require('rxjs/operators'), require('socket.io-client')) :
    typeof define === 'function' && define.amd ? define('@soushians/socket', ['exports', '@angular/core', '@angular/common', '@ngrx/store', 'rxjs', '@soushians/config', 'rxjs/operators', 'socket.io-client'], factory) :
    (global = global || self, factory((global.soushians = global.soushians || {}, global.soushians.socket = {}), global.ng.core, global.ng.common, global.store, global.rxjs, global.config, global.rxjs.operators, global._io));
}(this, function (exports, core, common, store, rxjs, config, operators, _io) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SocketModuleConfig() { }
    if (false) {
        /** @type {?|undefined} */
        SocketModuleConfig.prototype.env;
    }
    /** @type {?} */
    var MODULE_DEFAULT_CONFIG = {
        env: {
            production: false,
            frontend_server: "frontend_server/did/not/set"
        }
    };
    /** @type {?} */
    var MODULE_CONFIG_TOKEN = new core.InjectionToken("SocketModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SocketConfigurationService = /** @class */ (function () {
        function SocketConfigurationService(configFile, store) {
            var _this = this;
            this.store = store;
            this.config$ = new rxjs.BehaviorSubject(MODULE_DEFAULT_CONFIG);
            this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
            this.config$.next(this._config);
            this.store.select(config.getSocketModuleConfig).subscribe((/**
             * @param {?} userConfig
             * @return {?}
             */
            function (userConfig) {
                if (!userConfig) {
                    return;
                }
                _this._config = Object.assign({}, _this._config, userConfig.Config);
                _this.config$.next(_this._config);
            }));
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SocketConfigurationService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
            { type: store.Store }
        ]; };
        return SocketConfigurationService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SocketConfigurationService.prototype._config;
        /** @type {?} */
        SocketConfigurationService.prototype.config$;
        /**
         * @type {?}
         * @private
         */
        SocketConfigurationService.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    if (false) {
        /** @type {?} */
        SocketRunSuccessfullyAction.prototype.type;
    }
    var SocketInitialazationFailedAction = /** @class */ (function () {
        function SocketInitialazationFailedAction() {
            this.type = SocketActionTypes.SOCKET_INITIALAZATION_FAILD;
        }
        return SocketInitialazationFailedAction;
    }());
    if (false) {
        /** @type {?} */
        SocketInitialazationFailedAction.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var io = _io;
    var SocketService = /** @class */ (function () {
        function SocketService(configService, store) {
            var _this = this;
            this.configService = configService;
            this.store = store;
            this.configService.config$
                .pipe(operators.map((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.env.frontend_server; })), operators.map((/**
             * @param {?} uri
             * @return {?}
             */
            function (uri) {
                // console.log(uri, this.configService.config);
                _this.socket = io(uri);
                return _this.store.dispatch(new SocketRunSuccessfullyAction());
            })))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.socket.on("DISPATCH_ACTION", (/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    _this.store.dispatch({
                        type: data.type,
                        payload: data.payload
                    });
                }));
            }));
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
            var observer$ = new rxjs.Observable((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                _this.socket.on(message, (/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    observer.next(data);
                }));
            }));
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
            { type: core.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        SocketService.ctorParameters = function () { return [
            { type: SocketConfigurationService },
            { type: store.Store }
        ]; };
        /** @nocollapse */ SocketService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SocketService_Factory() { return new SocketService(core.ɵɵinject(SocketConfigurationService), core.ɵɵinject(store.Store)); }, token: SocketService, providedIn: "root" });
        return SocketService;
    }());
    if (false) {
        /** @type {?} */
        SocketService.prototype.socket;
        /** @type {?} */
        SocketService.prototype.uri;
        /**
         * @type {?}
         * @private
         */
        SocketService.prototype.configService;
        /**
         * @type {?}
         * @private
         */
        SocketService.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function State() { }
    if (false) {
        /** @type {?} */
        State.prototype.number;
    }
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
    /**
     * @record
     */
    function SocketState() { }
    if (false) {
        /** @type {?} */
        SocketState.prototype.change;
    }
    /** @type {?} */
    var SocketReducer = {
        change: Reducer
    };
    /**
     * @record
     */
    function AppState() { }
    if (false) {
        /** @type {?} */
        AppState.prototype.socket;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule]
                    },] }
        ];
        return NgsSocketModule;
    }());
    var NgsSocketRootModule = /** @class */ (function () {
        function NgsSocketRootModule(socketService) {
            this.socketService = socketService;
            ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
            ((/** @type {?} */ (window))).___starter.socket = "8.0.10";
        }
        NgsSocketRootModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [NgsSocketModule, store.StoreModule.forFeature("socket", SocketReducer)]
                    },] }
        ];
        /** @nocollapse */
        NgsSocketRootModule.ctorParameters = function () { return [
            { type: SocketService }
        ]; };
        return NgsSocketRootModule;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NgsSocketRootModule.prototype.socketService;
    }

    exports.NgsSocketModule = NgsSocketModule;
    exports.SocketService = SocketService;
    exports.ɵa = NgsSocketRootModule;
    exports.ɵb = Reducer;
    exports.ɵc = SocketReducer;
    exports.ɵe = SocketConfigurationService;
    exports.ɵf = MODULE_CONFIG_TOKEN;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=soushians-socket.umd.js.map
