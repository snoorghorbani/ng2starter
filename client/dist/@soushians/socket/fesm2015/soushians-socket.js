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
const /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    development_uri: "http://localhost:3000",
    production_uri: "",
    env: {
        production: false
    }
};
const /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("SocketModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SocketConfigurationService {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    constructor(configFile, store) {
        this.store = store;
        this.config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getSocketModuleConfig).subscribe((userConfig) => {
            if (!userConfig) {
                return;
            }
            this._config = Object.assign({}, this._config, userConfig.Config);
            this.config$.next(this._config);
        });
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
}
SocketConfigurationService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SocketConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const SocketActionTypes = {
    SOCKET_RUN_SUCCESSFULLY: "[SOCKET] SOCKET_RUN_SUCCESSFULLY",
    SOCKET_INITIALAZATION_FAILD: "[SOCKET] SOCKET_INITIALAZATION_FAILD",
};
class SocketRunSuccessfullyAction {
    constructor() {
        this.type = SocketActionTypes.SOCKET_RUN_SUCCESSFULLY;
    }
}
class SocketInitialazationFailedAction {
    constructor() {
        this.type = SocketActionTypes.SOCKET_INITIALAZATION_FAILD;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ io = _io;
class SocketService {
    /**
     * @param {?} configService
     * @param {?} store
     */
    constructor(configService, store) {
        this.configService = configService;
        this.store = store;
        this.configService.config$
            .pipe(map(config => (config.env.production ? config.production_uri : config.development_uri)), map(uri => {
            this.socket = io(uri);
            return this.store.dispatch(new SocketRunSuccessfullyAction());
        }))
            .subscribe(() => {
            this.socket.on("DISPATCH_ACTION", data => {
                this.store.dispatch({
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
    on(message) {
        const /** @type {?} */ observer$ = new Observable(observer => {
            this.socket.on(message, (data) => {
                observer.next(data);
            });
        });
        return observer$;
    }
    /**
     * \@example
     * this.socketService.emit("chnage-number",{number:2})
     * @param {?} message
     * @param {?} payload
     * @return {?}
     * void
     */
    emit(message, payload) {
        this.socket.emit(message, payload);
    }
}
SocketService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
SocketService.ctorParameters = () => [
    { type: SocketConfigurationService },
    { type: Store }
];
/** @nocollapse */ SocketService.ngInjectableDef = defineInjectable({ factory: function SocketService_Factory() { return new SocketService(inject(SocketConfigurationService), inject(Store)); }, token: SocketService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ initialState = {
    number: 0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer(state = initialState, action) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}
const /** @type {?} */ SocketReducer = {
    change: Reducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgsSocketModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: NgsSocketRootModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, SocketConfigurationService, SocketService]
        };
    }
}
NgsSocketModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule]
            },] },
];
class NgsSocketRootModule {
}
NgsSocketRootModule.decorators = [
    { type: NgModule, args: [{
                imports: [NgsSocketModule, StoreModule.forFeature("socket", SocketReducer)]
            },] },
];

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

export { NgsSocketModule, NgsSocketRootModule, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, SocketActionTypes, SocketRunSuccessfullyAction, SocketInitialazationFailedAction, SocketService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXNvY2tldC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy9zb2NrZXQvbGliL3NvY2tldC5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvc29ja2V0L2xpYi9zZXJ2aWNlcy9zb2NrZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NvY2tldC9saWIvc29ja2V0LmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvc29ja2V0L2xpYi9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9zb2NrZXQvbGliL3NvY2tldC5yZWR1Y2VyLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NvY2tldC9saWIvc29ja2V0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNvY2tldE1vZHVsZUNvbmZpZyB7XHJcblx0ZGV2ZWxvcG1lbnRfdXJpOiBzdHJpbmc7XHJcblx0cHJvZHVjdGlvbl91cmk6IHN0cmluZztcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdH07XHJcbn1cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogU29ja2V0TW9kdWxlQ29uZmlnID0ge1xyXG5cdGRldmVsb3BtZW50X3VyaTogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcclxuXHRwcm9kdWN0aW9uX3VyaTogXCJcIixcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlXHJcblx0fVxyXG59O1xyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxTb2NrZXRNb2R1bGVDb25maWc+KFwiU29ja2V0TW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBnZXRTb2NrZXRNb2R1bGVDb25maWcgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IFNvY2tldE1vZHVsZUNvbmZpZywgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4uL3NvY2tldC5jb25maWdcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vc29ja2V0LnJlZHVjZXJcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNvY2tldENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IFNvY2tldE1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoTU9EVUxFX0RFRkFVTFRfQ09ORklHKTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0dGhpcy5zdG9yZS5zZWxlY3QoZ2V0U29ja2V0TW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUoKHVzZXJDb25maWcpID0+IHtcclxuXHRcdFx0aWYgKCF1c2VyQ29uZmlnKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgdXNlckNvbmZpZy5Db25maWcpO1xyXG5cdFx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gU29ja2V0QWN0aW9uVHlwZXMge1xyXG5cdFNPQ0tFVF9SVU5fU1VDQ0VTU0ZVTExZID0gXCJbU09DS0VUXSBTT0NLRVRfUlVOX1NVQ0NFU1NGVUxMWVwiLFxyXG5cdFNPQ0tFVF9JTklUSUFMQVpBVElPTl9GQUlMRCA9IFwiW1NPQ0tFVF0gU09DS0VUX0lOSVRJQUxBWkFUSU9OX0ZBSUxEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNvY2tldFJ1blN1Y2Nlc3NmdWxseUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNvY2tldEFjdGlvblR5cGVzLlNPQ0tFVF9SVU5fU1VDQ0VTU0ZVTExZO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBTb2NrZXRJbml0aWFsYXphdGlvbkZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNvY2tldEFjdGlvblR5cGVzLlNPQ0tFVF9JTklUSUFMQVpBVElPTl9GQUlMRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU29ja2V0QWN0aW9ucyA9IFNvY2tldFJ1blN1Y2Nlc3NmdWxseUFjdGlvbiB8IFNvY2tldEluaXRpYWxhemF0aW9uRmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG4vLyBpbXBvcnQgKiBhcyBzb2NrZXRJbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG4vLyBjb25zdCBzb2NrZXRJbyA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tY2xpZW50XCIpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVidWdnZXJcclxuaW1wb3J0ICogYXMgX2lvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmNvbnN0IGlvID0gX2lvO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9zb2NrZXQucmVkdWNlclwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0U29ja2V0TW9kdWxlQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBTb2NrZXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3NvY2tldC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU29ja2V0UnVuU3VjY2Vzc2Z1bGx5QWN0aW9uIH0gZnJvbSBcIi4uL3NvY2tldC5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvY2tldFNlcnZpY2Uge1xyXG5cdHNvY2tldDogYW55O1xyXG5cdHVyaTogc3RyaW5nO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnU2VydmljZTogU29ja2V0Q29uZmlndXJhdGlvblNlcnZpY2UsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyRcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0bWFwKGNvbmZpZyA9PiAoY29uZmlnLmVudi5wcm9kdWN0aW9uID8gY29uZmlnLnByb2R1Y3Rpb25fdXJpIDogY29uZmlnLmRldmVsb3BtZW50X3VyaSkpLFxyXG5cdFx0XHRcdG1hcCh1cmkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zb2NrZXQgPSBpbyh1cmkpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNvY2tldFJ1blN1Y2Nlc3NmdWxseUFjdGlvbigpKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc29ja2V0Lm9uKFwiRElTUEFUQ0hfQUNUSU9OXCIsIGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaCh7XHJcblx0XHRcdFx0XHRcdHR5cGU6IGRhdGEudHlwZSxcclxuXHRcdFx0XHRcdFx0cGF5bG9hZDogZGF0YS5wYXlsb2FkXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIEBleGFtcGxlXHJcblx0ICogdGhpcy5zb2NrZXRTZXJ2aWNlLm9uPG51bWJlcj4oXCJjaG5hZ2UtbnVtYmVyXCIpLnN1YnNjcmliZShkYXRhPT57fSlcclxuXHQgKiBAcmV0dXJuc1xyXG5cdCAqIE9ic2VydmFibGU8VD5cclxuXHQgKi9cclxuXHRvbjxUPihtZXNzYWdlKTogT2JzZXJ2YWJsZTxUPiB7XHJcblx0XHRjb25zdCBvYnNlcnZlciQgPSBuZXcgT2JzZXJ2YWJsZTxUPihvYnNlcnZlciA9PiB7XHJcblx0XHRcdHRoaXMuc29ja2V0Lm9uKG1lc3NhZ2UsIChkYXRhOiBUKSA9PiB7XHJcblx0XHRcdFx0b2JzZXJ2ZXIubmV4dChkYXRhKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBvYnNlcnZlciQ7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIEBleGFtcGxlXHJcblx0ICogdGhpcy5zb2NrZXRTZXJ2aWNlLmVtaXQoXCJjaG5hZ2UtbnVtYmVyXCIse251bWJlcjoyfSlcclxuXHQgKiBAcmV0dXJuc1xyXG5cdCAqIHZvaWRcclxuXHQgKi9cclxuXHRlbWl0KG1lc3NhZ2U6IHN0cmluZywgcGF5bG9hZDogYW55KTogdm9pZCB7XHJcblx0XHR0aGlzLnNvY2tldC5lbWl0KG1lc3NhZ2UsIHBheWxvYWQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdG51bWJlcjogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdG51bWJlcjogMFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTb2NrZXRTdGF0ZSB7XHJcblx0Y2hhbmdlOiBTdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNvY2tldFJlZHVjZXIgPSB7XHJcblx0Y2hhbmdlOiBSZWR1Y2VyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFN0YXRlIHtcclxuXHRzb2NrZXQ6IFNvY2tldFN0YXRlO1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgU29ja2V0U2VydmljZSwgU29ja2V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBTb2NrZXRSZWR1Y2VyIH0gZnJvbSBcIi4vc29ja2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgU29ja2V0TW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vc29ja2V0LmNvbmZpZ1wiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbIENvbW1vbk1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NTb2NrZXRNb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IFNvY2tldE1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IE5nc1NvY2tldFJvb3RNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfSwgU29ja2V0Q29uZmlndXJhdGlvblNlcnZpY2UsIFNvY2tldFNlcnZpY2UgXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogWyBOZ3NTb2NrZXRNb2R1bGUsIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJzb2NrZXRcIiwgU29ja2V0UmVkdWNlcikgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzU29ja2V0Um9vdE1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsdUJBU2EscUJBQXFCLEdBQXVCO0lBQ3hELGVBQWUsRUFBRSx1QkFBdUI7SUFDeEMsY0FBYyxFQUFFLEVBQUU7SUFDbEIsR0FBRyxFQUFFO1FBQ0osVUFBVSxFQUFFLEtBQUs7S0FDakI7Q0FDRCxDQUFDO0FBQ0YsdUJBQWEsbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQXFCLG9CQUFvQixDQUFDOzs7Ozs7QUNoQi9GOzs7OztJQWdCQyxZQUF5QyxVQUFV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