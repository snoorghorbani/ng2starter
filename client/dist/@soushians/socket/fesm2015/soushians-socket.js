import { InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { getSocketModuleConfig } from '@soushians/config';
import { map } from 'rxjs/operators';
import * as _io from 'socket.io-client';

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
const MODULE_DEFAULT_CONFIG = {
    env: {
        production: false,
        frontend_server: "frontend_server/did/not/set"
    }
};
/** @type {?} */
const MODULE_CONFIG_TOKEN = new InjectionToken("SocketModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.store.select(getSocketModuleConfig).subscribe((/**
         * @param {?} userConfig
         * @return {?}
         */
        userConfig => {
            if (!userConfig) {
                return;
            }
            this._config = Object.assign({}, this._config, userConfig.Config);
            this.config$.next(this._config);
        }));
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
}
SocketConfigurationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SocketConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];
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
const SocketActionTypes = {
    SOCKET_RUN_SUCCESSFULLY: "[SOCKET] SOCKET_RUN_SUCCESSFULLY",
    SOCKET_INITIALAZATION_FAILD: "[SOCKET] SOCKET_INITIALAZATION_FAILD",
};
class SocketRunSuccessfullyAction {
    constructor() {
        this.type = SocketActionTypes.SOCKET_RUN_SUCCESSFULLY;
    }
}
if (false) {
    /** @type {?} */
    SocketRunSuccessfullyAction.prototype.type;
}
class SocketInitialazationFailedAction {
    constructor() {
        this.type = SocketActionTypes.SOCKET_INITIALAZATION_FAILD;
    }
}
if (false) {
    /** @type {?} */
    SocketInitialazationFailedAction.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const io = _io;
class SocketService {
    /**
     * @param {?} configService
     * @param {?} store
     */
    constructor(configService, store) {
        this.configService = configService;
        this.store = store;
        this.configService.config$
            .pipe(map((/**
         * @param {?} config
         * @return {?}
         */
        config => config.env.frontend_server)), map((/**
         * @param {?} uri
         * @return {?}
         */
        uri => {
            // console.log(uri, this.configService.config);
            this.socket = io(uri);
            return this.store.dispatch(new SocketRunSuccessfullyAction());
        })))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.socket.on("DISPATCH_ACTION", (/**
             * @param {?} data
             * @return {?}
             */
            data => {
                this.store.dispatch({
                    type: data.type,
                    payload: data.payload
                });
            }));
        }));
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
        /** @type {?} */
        const observer$ = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            this.socket.on(message, (/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                observer.next(data);
            }));
        }));
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
            },] }
];
/** @nocollapse */
SocketService.ctorParameters = () => [
    { type: SocketConfigurationService },
    { type: Store }
];
/** @nocollapse */ SocketService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SocketService_Factory() { return new SocketService(ɵɵinject(SocketConfigurationService), ɵɵinject(Store)); }, token: SocketService, providedIn: "root" });
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
const initialState = {
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
/**
 * @record
 */
function SocketState() { }
if (false) {
    /** @type {?} */
    SocketState.prototype.change;
}
/** @type {?} */
const SocketReducer = {
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
            },] }
];
class NgsSocketRootModule {
    /**
     * @param {?} socketService
     */
    constructor(socketService) {
        this.socketService = socketService;
        ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
        ((/** @type {?} */ (window))).___starter.socket = "8.0.10";
    }
}
NgsSocketRootModule.decorators = [
    { type: NgModule, args: [{
                imports: [NgsSocketModule, StoreModule.forFeature("socket", SocketReducer)]
            },] }
];
/** @nocollapse */
NgsSocketRootModule.ctorParameters = () => [
    { type: SocketService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgsSocketRootModule.prototype.socketService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgsSocketModule, SocketService, NgsSocketRootModule as ɵa, Reducer as ɵb, SocketReducer as ɵc, SocketConfigurationService as ɵe, MODULE_CONFIG_TOKEN as ɵf };
//# sourceMappingURL=soushians-socket.js.map
