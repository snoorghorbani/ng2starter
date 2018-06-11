(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@ngrx/store'), require('@soushians/config'), require('rxjs/operators'), require('socket.io-client'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@soushians/socket', ['exports', '@angular/core', 'rxjs', '@ngrx/store', '@soushians/config', 'rxjs/operators', 'socket.io-client', '@angular/common'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.socket = {}),global.ng.core,global.rxjs,null,null,global.rxjs.operators,null,global.ng.common));
}(this, (function (exports,i0,rxjs,i2,config,operators,_io,common) { 'use strict';

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
    var /** @type {?} */ MODULE_CONFIG_TOKEN = new i0.InjectionToken("SocketModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SocketConfigurationService = (function () {
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
            { type: i0.Injectable },
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
    var /** @type {?} */ io = _io;
    var SocketService = (function () {
        function SocketService(configService, store) {
            var _this = this;
            this.configService = configService;
            this.store = store;
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
                var /** @type {?} */ observer$ = new rxjs.Observable(function (observer) {
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
                    },] },
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
                    },] },
        ];
        return NgsSocketModule;
    }());
    var NgsSocketRootModule = (function () {
        function NgsSocketRootModule() {
        }
        NgsSocketRootModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [NgsSocketModule, i2.StoreModule.forFeature("socket", SocketReducer)]
                    },] },
        ];
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXNvY2tldC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvc29ja2V0L2xpYi9zb2NrZXQuY29uZmlnLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NvY2tldC9saWIvc2VydmljZXMvc29ja2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9zb2NrZXQvbGliL3NvY2tldC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NvY2tldC9saWIvc2VydmljZXMvc29ja2V0LnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvc29ja2V0L2xpYi9zb2NrZXQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9zb2NrZXQvbGliL3NvY2tldC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTb2NrZXRNb2R1bGVDb25maWcge1xyXG5cdGRldmVsb3BtZW50X3VyaTogc3RyaW5nO1xyXG5cdHByb2R1Y3Rpb25fdXJpOiBzdHJpbmc7XHJcblx0ZW52Pzoge1xyXG5cdFx0cHJvZHVjdGlvbjogYm9vbGVhbjtcclxuXHR9O1xyXG59XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IFNvY2tldE1vZHVsZUNvbmZpZyA9IHtcclxuXHRkZXZlbG9wbWVudF91cmk6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsXHJcblx0cHJvZHVjdGlvbl91cmk6IFwiXCIsXHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBmYWxzZVxyXG5cdH1cclxufTtcclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48U29ja2V0TW9kdWxlQ29uZmlnPihcIlNvY2tldE1vZHVsZUNvbmZpZ1wiKTtcclxuIiwiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgZ2V0U29ja2V0TW9kdWxlQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBTb2NrZXRNb2R1bGVDb25maWcsIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuLi9zb2NrZXQuY29uZmlnXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3NvY2tldC5yZWR1Y2VyXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTb2NrZXRDb25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBTb2NrZXRNb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KE1PRFVMRV9ERUZBVUxUX0NPTkZJRyk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KGdldFNvY2tldE1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKCh1c2VyQ29uZmlnKSA9PiB7XHJcblx0XHRcdGlmICghdXNlckNvbmZpZykge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHVzZXJDb25maWcuQ29uZmlnKTtcclxuXHRcdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFNvY2tldEFjdGlvblR5cGVzIHtcclxuXHRTT0NLRVRfUlVOX1NVQ0NFU1NGVUxMWSA9IFwiW1NPQ0tFVF0gU09DS0VUX1JVTl9TVUNDRVNTRlVMTFlcIixcclxuXHRTT0NLRVRfSU5JVElBTEFaQVRJT05fRkFJTEQgPSBcIltTT0NLRVRdIFNPQ0tFVF9JTklUSUFMQVpBVElPTl9GQUlMRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTb2NrZXRSdW5TdWNjZXNzZnVsbHlBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTb2NrZXRBY3Rpb25UeXBlcy5TT0NLRVRfUlVOX1NVQ0NFU1NGVUxMWTtcclxufVxyXG5leHBvcnQgY2xhc3MgU29ja2V0SW5pdGlhbGF6YXRpb25GYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTb2NrZXRBY3Rpb25UeXBlcy5TT0NLRVRfSU5JVElBTEFaQVRJT05fRkFJTEQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNvY2tldEFjdGlvbnMgPSBTb2NrZXRSdW5TdWNjZXNzZnVsbHlBY3Rpb24gfCBTb2NrZXRJbml0aWFsYXphdGlvbkZhaWxlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuLy8gaW1wb3J0ICogYXMgc29ja2V0SW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuLy8gY29uc3Qgc29ja2V0SW8gPSByZXF1aXJlKFwic29ja2V0LmlvLWNsaWVudFwiKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlYnVnZ2VyXHJcbmltcG9ydCAqIGFzIF9pbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5jb25zdCBpbyA9IF9pbztcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vc29ja2V0LnJlZHVjZXJcIjtcclxuXHJcbmltcG9ydCB7IGdldFNvY2tldE1vZHVsZUNvbmZpZyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHsgU29ja2V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zb2NrZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNvY2tldFJ1blN1Y2Nlc3NmdWxseUFjdGlvbiB9IGZyb20gXCIuLi9zb2NrZXQuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb2NrZXRTZXJ2aWNlIHtcclxuXHRzb2NrZXQ6IGFueTtcclxuXHR1cmk6IHN0cmluZztcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IFNvY2tldENvbmZpZ3VyYXRpb25TZXJ2aWNlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMuY29uZmlnU2VydmljZS5jb25maWckXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdG1hcChjb25maWcgPT4gKGNvbmZpZy5lbnYucHJvZHVjdGlvbiA/IGNvbmZpZy5wcm9kdWN0aW9uX3VyaSA6IGNvbmZpZy5kZXZlbG9wbWVudF91cmkpKSxcclxuXHRcdFx0XHRtYXAodXJpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuc29ja2V0ID0gaW8odXJpKTtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTb2NrZXRSdW5TdWNjZXNzZnVsbHlBY3Rpb24oKSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNvY2tldC5vbihcIkRJU1BBVENIX0FDVElPTlwiLCBkYXRhID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2goe1xyXG5cdFx0XHRcdFx0XHR0eXBlOiBkYXRhLnR5cGUsXHJcblx0XHRcdFx0XHRcdHBheWxvYWQ6IGRhdGEucGF5bG9hZFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiBAZXhhbXBsZVxyXG5cdCAqIHRoaXMuc29ja2V0U2VydmljZS5vbjxudW1iZXI+KFwiY2huYWdlLW51bWJlclwiKS5zdWJzY3JpYmUoZGF0YT0+e30pXHJcblx0ICogQHJldHVybnNcclxuXHQgKiBPYnNlcnZhYmxlPFQ+XHJcblx0ICovXHJcblx0b248VD4obWVzc2FnZSk6IE9ic2VydmFibGU8VD4ge1xyXG5cdFx0Y29uc3Qgb2JzZXJ2ZXIkID0gbmV3IE9ic2VydmFibGU8VD4ob2JzZXJ2ZXIgPT4ge1xyXG5cdFx0XHR0aGlzLnNvY2tldC5vbihtZXNzYWdlLCAoZGF0YTogVCkgPT4ge1xyXG5cdFx0XHRcdG9ic2VydmVyLm5leHQoZGF0YSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gb2JzZXJ2ZXIkO1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiBAZXhhbXBsZVxyXG5cdCAqIHRoaXMuc29ja2V0U2VydmljZS5lbWl0KFwiY2huYWdlLW51bWJlclwiLHtudW1iZXI6Mn0pXHJcblx0ICogQHJldHVybnNcclxuXHQgKiB2b2lkXHJcblx0ICovXHJcblx0ZW1pdChtZXNzYWdlOiBzdHJpbmcsIHBheWxvYWQ6IGFueSk6IHZvaWQge1xyXG5cdFx0dGhpcy5zb2NrZXQuZW1pdChtZXNzYWdlLCBwYXlsb2FkKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRudW1iZXI6IG51bWJlcjtcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRudW1iZXI6IDBcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU29ja2V0U3RhdGUge1xyXG5cdGNoYW5nZTogU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTb2NrZXRSZWR1Y2VyID0ge1xyXG5cdGNoYW5nZTogUmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XHJcblx0c29ja2V0OiBTb2NrZXRTdGF0ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFNvY2tldFNlcnZpY2UsIFNvY2tldENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXNcIjtcclxuaW1wb3J0IHsgU29ja2V0UmVkdWNlciB9IGZyb20gXCIuL3NvY2tldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFNvY2tldE1vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuL3NvY2tldC5jb25maWdcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogWyBDb21tb25Nb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzU29ja2V0TW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBTb2NrZXRNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBOZ3NTb2NrZXRSb290TW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0sIFNvY2tldENvbmZpZ3VyYXRpb25TZXJ2aWNlLCBTb2NrZXRTZXJ2aWNlIF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFsgTmdzU29ja2V0TW9kdWxlLCBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwic29ja2V0XCIsIFNvY2tldFJlZHVjZXIpIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc1NvY2tldFJvb3RNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbIkluamVjdGlvblRva2VuIiwiQmVoYXZpb3JTdWJqZWN0IiwiZ2V0U29ja2V0TW9kdWxlQ29uZmlnIiwiSW5qZWN0YWJsZSIsIkluamVjdCIsIlN0b3JlIiwibWFwIiwiY29uZmlnIiwiT2JzZXJ2YWJsZSIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiU3RvcmVNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx5QkFTYSxxQkFBcUIsR0FBdUI7UUFDeEQsZUFBZSxFQUFFLHVCQUF1QjtRQUN4QyxjQUFjLEVBQUUsRUFBRTtRQUNsQixHQUFHLEVBQUU7WUFDSixVQUFVLEVBQUUsS0FBSztTQUNqQjtLQUNELENBQUM7QUFDRix5QkFBYSxtQkFBbUIsR0FBRyxJQUFJQSxpQkFBYyxDQUFxQixvQkFBb0IsQ0FBQzs7Ozs7O0FDaEIvRjtRQWdCQyxvQ0FBeUMsVUFBVSxFQUFVLEtBQXNCO1lBQW5GLGlCQVVDO1lBVjRELFVBQUssR0FBTCxLQUFLLENBQWlCOzJCQUZ6RSxJQUFJQyxvQkFBZSxDQUFDLHFCQUFxQixDQUFDO1lBR25ELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDQyw0QkFBcUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFVBQVU7Z0JBQzdELElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2hCLE9BQU87aUJBQ1A7Z0JBQ0QsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hDLENBQUMsQ0FBQztTQUNIO1FBZkQsc0JBQUksOENBQU07OztnQkFBVjtnQkFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDcEI7OztXQUFBOztvQkFMREMsYUFBVTs7Ozs7d0RBUUdDLFNBQU0sU0FBQyxtQkFBbUI7d0JBZC9CQyxRQUFLOzs7eUNBRmQ7Ozs7Ozs7OztpQ0NHMkIsa0NBQWtDO3FDQUM5QixzQ0FBc0M7O1FBR3JFOzt3QkFDaUIsaUJBQWlCLENBQUMsdUJBQXVCOzswQ0FSMUQ7UUFTQyxDQUFBO0FBRkQsUUFHQTs7d0JBQ2lCLGlCQUFpQixDQUFDLDJCQUEyQjs7K0NBWDlEO1FBWUM7Ozs7OztBQ1pELElBUUEscUJBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUtmO1FBU0MsdUJBQW9CLGFBQXlDLEVBQVUsS0FBc0I7WUFBN0YsaUJBaUJDO1lBakJtQixrQkFBYSxHQUFiLGFBQWEsQ0FBNEI7WUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFpQjtZQUM1RixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU87aUJBQ3hCLElBQUksQ0FDSkMsYUFBRyxDQUFDLFVBQUFDLFNBQU0sSUFBSSxRQUFDQSxTQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBR0EsU0FBTSxDQUFDLGNBQWMsR0FBR0EsU0FBTSxDQUFDLGVBQWUsSUFBQyxDQUFDLEVBQ3ZGRCxhQUFHLENBQUMsVUFBQSxHQUFHO2dCQUNOLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixPQUFPLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksMkJBQTJCLEVBQUUsQ0FBQyxDQUFDO2FBQzlELENBQUMsQ0FDRjtpQkFDQSxTQUFTLENBQUM7Z0JBQ1YsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsVUFBQSxJQUFJO29CQUNyQyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzt3QkFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO3dCQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztxQkFDckIsQ0FBQyxDQUFDO2lCQUNILENBQUMsQ0FBQzthQUNILENBQUMsQ0FBQztTQUNKOzs7Ozs7Ozs7Ozs7Ozs7UUFPRCwwQkFBRTs7Ozs7Ozs7WUFBRixVQUFNLE9BQU87Z0JBQWIsaUJBT0M7Z0JBTkEscUJBQU0sU0FBUyxHQUFHLElBQUlFLGVBQVUsQ0FBSSxVQUFBLFFBQVE7b0JBQzNDLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLElBQU87d0JBQy9CLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3BCLENBQUMsQ0FBQztpQkFDSCxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxTQUFTLENBQUM7YUFDakI7Ozs7Ozs7Ozs7Ozs7OztRQU9ELDRCQUFJOzs7Ozs7OztZQUFKLFVBQUssT0FBZSxFQUFFLE9BQVk7Z0JBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQzthQUNuQzs7b0JBOUNETCxhQUFVLFNBQUM7d0JBQ1gsVUFBVSxFQUFFLE1BQU07cUJBQ2xCOzs7Ozt3QkFMUSwwQkFBMEI7d0JBVjFCRSxRQUFLOzs7OzRCQUhkOzs7Ozs7Ozs7Ozs7SUNLTyxxQkFBTSxZQUFZLEdBQVU7UUFDbEMsTUFBTSxFQUFFLENBQUM7S0FDVCxDQUFDOzs7Ozs7QUFFRixxQkFBd0IsS0FBb0IsRUFBRSxNQUFjO1FBQXBDLHNCQUFBO1lBQUEsb0JBQW9COztRQUMzQyxRQUFRLE1BQU0sQ0FBQyxJQUFJO1lBQ2xCLFNBQVM7Z0JBQ1IsT0FBTyxLQUFLLENBQUM7YUFDYjtTQUNEO0tBQ0Q7SUFNTSxxQkFBTSxhQUFhLEdBQUc7UUFDNUIsTUFBTSxFQUFFLE9BQU87S0FDZixDQUFDOzs7Ozs7QUN2QkY7Ozs7Ozs7UUFZUSx1QkFBTzs7OztZQUFkLFVBQWVFLFNBQTJCO2dCQUN6QyxPQUFPO29CQUNOLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFNBQVMsRUFBRSxDQUFFLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRUEsU0FBTSxFQUFFLEVBQUUsMEJBQTBCLEVBQUUsYUFBYSxDQUFFO2lCQUM1RyxDQUFDO2FBQ0Y7O29CQVRERSxXQUFRLFNBQUM7d0JBQ1QsT0FBTyxFQUFFLENBQUVDLG1CQUFZLENBQUU7cUJBQ3pCOzs4QkFWRDs7Ozs7O29CQW9CQ0QsV0FBUSxTQUFDO3dCQUNULE9BQU8sRUFBRSxDQUFFLGVBQWUsRUFBRUUsY0FBVyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUU7cUJBQzdFOztrQ0F0QkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9