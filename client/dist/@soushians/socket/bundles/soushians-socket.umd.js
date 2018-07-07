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
        env: {
            production: false,
            frontend_server: "http://localhost:3000"
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
                .pipe(operators.map(function (config$$1) { return config$$1.env.frontend_server; }), operators.map(function (uri) {
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
        function NgsSocketRootModule(socketService) {
            this.socketService = socketService;
        }
        NgsSocketRootModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [NgsSocketModule, i2.StoreModule.forFeature("socket", SocketReducer)]
                    },] },
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
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXNvY2tldC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvc29ja2V0L2xpYi9zb2NrZXQuY29uZmlnLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NvY2tldC9saWIvc2VydmljZXMvc29ja2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9zb2NrZXQvbGliL3NvY2tldC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NvY2tldC9saWIvc2VydmljZXMvc29ja2V0LnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvc29ja2V0L2xpYi9zb2NrZXQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9zb2NrZXQvbGliL3NvY2tldC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTb2NrZXRNb2R1bGVDb25maWcge1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuXHR9O1xyXG59XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IFNvY2tldE1vZHVsZUNvbmZpZyA9IHtcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlLFxyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiXHJcblx0fVxyXG59O1xyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxTb2NrZXRNb2R1bGVDb25maWc+KFwiU29ja2V0TW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0U29ja2V0TW9kdWxlQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBTb2NrZXRNb2R1bGVDb25maWcsIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuLi9zb2NrZXQuY29uZmlnXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3NvY2tldC5yZWR1Y2VyXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTb2NrZXRDb25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBTb2NrZXRNb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KE1PRFVMRV9ERUZBVUxUX0NPTkZJRyk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KGdldFNvY2tldE1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKHVzZXJDb25maWcgPT4ge1xyXG5cdFx0XHRpZiAoIXVzZXJDb25maWcpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCB1c2VyQ29uZmlnLkNvbmZpZyk7XHJcblx0XHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgZW51bSBTb2NrZXRBY3Rpb25UeXBlcyB7XHJcblx0U09DS0VUX1JVTl9TVUNDRVNTRlVMTFkgPSBcIltTT0NLRVRdIFNPQ0tFVF9SVU5fU1VDQ0VTU0ZVTExZXCIsXHJcblx0U09DS0VUX0lOSVRJQUxBWkFUSU9OX0ZBSUxEID0gXCJbU09DS0VUXSBTT0NLRVRfSU5JVElBTEFaQVRJT05fRkFJTERcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU29ja2V0UnVuU3VjY2Vzc2Z1bGx5QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU29ja2V0QWN0aW9uVHlwZXMuU09DS0VUX1JVTl9TVUNDRVNTRlVMTFk7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNvY2tldEluaXRpYWxhemF0aW9uRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU29ja2V0QWN0aW9uVHlwZXMuU09DS0VUX0lOSVRJQUxBWkFUSU9OX0ZBSUxEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTb2NrZXRBY3Rpb25zID0gU29ja2V0UnVuU3VjY2Vzc2Z1bGx5QWN0aW9uIHwgU29ja2V0SW5pdGlhbGF6YXRpb25GYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCAqIGFzIF9pbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5jb25zdCBpbyA9IF9pbztcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3NvY2tldC5yZWR1Y2VyXCI7XHJcblxyXG5pbXBvcnQgeyBTb2NrZXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3NvY2tldC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU29ja2V0UnVuU3VjY2Vzc2Z1bGx5QWN0aW9uIH0gZnJvbSBcIi4uL3NvY2tldC5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvY2tldFNlcnZpY2Uge1xyXG5cdHNvY2tldDogYW55O1xyXG5cdHVyaTogc3RyaW5nO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnU2VydmljZTogU29ja2V0Q29uZmlndXJhdGlvblNlcnZpY2UsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyRcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0bWFwKGNvbmZpZyA9PiBjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciksXHJcblx0XHRcdFx0bWFwKHVyaSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh1cmksIHRoaXMuY29uZmlnU2VydmljZS5jb25maWcpO1xyXG5cdFx0XHRcdFx0dGhpcy5zb2NrZXQgPSBpbyh1cmkpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNvY2tldFJ1blN1Y2Nlc3NmdWxseUFjdGlvbigpKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc29ja2V0Lm9uKFwiRElTUEFUQ0hfQUNUSU9OXCIsIGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaCh7XHJcblx0XHRcdFx0XHRcdHR5cGU6IGRhdGEudHlwZSxcclxuXHRcdFx0XHRcdFx0cGF5bG9hZDogZGF0YS5wYXlsb2FkXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIEBleGFtcGxlXHJcblx0ICogdGhpcy5zb2NrZXRTZXJ2aWNlLm9uPG51bWJlcj4oXCJjaG5hZ2UtbnVtYmVyXCIpLnN1YnNjcmliZShkYXRhPT57fSlcclxuXHQgKiBAcmV0dXJuc1xyXG5cdCAqIE9ic2VydmFibGU8VD5cclxuXHQgKi9cclxuXHRvbjxUPihtZXNzYWdlKTogT2JzZXJ2YWJsZTxUPiB7XHJcblx0XHRjb25zdCBvYnNlcnZlciQgPSBuZXcgT2JzZXJ2YWJsZTxUPihvYnNlcnZlciA9PiB7XHJcblx0XHRcdHRoaXMuc29ja2V0Lm9uKG1lc3NhZ2UsIChkYXRhOiBUKSA9PiB7XHJcblx0XHRcdFx0b2JzZXJ2ZXIubmV4dChkYXRhKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBvYnNlcnZlciQ7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIEBleGFtcGxlXHJcblx0ICogdGhpcy5zb2NrZXRTZXJ2aWNlLmVtaXQoXCJjaG5hZ2UtbnVtYmVyXCIse251bWJlcjoyfSlcclxuXHQgKiBAcmV0dXJuc1xyXG5cdCAqIHZvaWRcclxuXHQgKi9cclxuXHRlbWl0KG1lc3NhZ2U6IHN0cmluZywgcGF5bG9hZDogYW55KTogdm9pZCB7XHJcblx0XHR0aGlzLnNvY2tldC5lbWl0KG1lc3NhZ2UsIHBheWxvYWQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdG51bWJlcjogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdG51bWJlcjogMFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTb2NrZXRTdGF0ZSB7XHJcblx0Y2hhbmdlOiBTdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNvY2tldFJlZHVjZXIgPSB7XHJcblx0Y2hhbmdlOiBSZWR1Y2VyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFN0YXRlIHtcclxuXHRzb2NrZXQ6IFNvY2tldFN0YXRlO1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgU29ja2V0TW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vc29ja2V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBTb2NrZXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3NvY2tldC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU29ja2V0U2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3NvY2tldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNvY2tldFJlZHVjZXIgfSBmcm9tIFwiLi9zb2NrZXQucmVkdWNlclwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbIENvbW1vbk1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NTb2NrZXRNb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IFNvY2tldE1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IE5nc1NvY2tldFJvb3RNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfSwgU29ja2V0Q29uZmlndXJhdGlvblNlcnZpY2UsIFNvY2tldFNlcnZpY2UgXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogWyBOZ3NTb2NrZXRNb2R1bGUsIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJzb2NrZXRcIiwgU29ja2V0UmVkdWNlcikgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzU29ja2V0Um9vdE1vZHVsZSB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzb2NrZXRTZXJ2aWNlOiBTb2NrZXRTZXJ2aWNlKSB7fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbmplY3Rpb25Ub2tlbiIsIkJlaGF2aW9yU3ViamVjdCIsImdldFNvY2tldE1vZHVsZUNvbmZpZyIsIkluamVjdGFibGUiLCJJbmplY3QiLCJTdG9yZSIsIm1hcCIsImNvbmZpZyIsIk9ic2VydmFibGUiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIlN0b3JlTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFRTyxxQkFBTSxxQkFBcUIsR0FBdUI7UUFDeEQsR0FBRyxFQUFFO1lBQ0osVUFBVSxFQUFFLEtBQUs7WUFDakIsZUFBZSxFQUFFLHVCQUF1QjtTQUN4QztLQUNELENBQUM7QUFDRix5QkFBYSxtQkFBbUIsR0FBRyxJQUFJQSxpQkFBYyxDQUFxQixvQkFBb0IsQ0FBQzs7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