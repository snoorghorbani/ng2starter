import { InjectionToken, Component, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, Directive, ComponentFactoryResolver, ViewContainerRef, Input, ViewChild, EventEmitter, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheet, MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatBottomSheetModule, MatRadioModule, MatMenuModule, MatToolbarModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule } from '@angular/material';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridsterModule } from 'angular-gridster2';
import { __decorate, __metadata } from 'tslib';
import { filter, take, skipUntil, switchMap, map, tap, catchError, pluck } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getFrontendUser } from '@soushians/frontend-authentication';
import { UserFacadeService, getAccountInfo } from '@soushians/user';
import { stringTemplate } from '@soushians/shared';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IGridType() { }
if (false) {
    /** @type {?|undefined} */
    IGridType.prototype.upsertComponet;
    /** @type {?|undefined} */
    IGridType.prototype.configComponent;
    /** @type {?|undefined} */
    IGridType.prototype.type;
    /** @type {?} */
    IGridType.prototype.viewComponent;
}
/**
 * @record
 */
function GridModuleConfig() { }
if (false) {
    /** @type {?|undefined} */
    GridModuleConfig.prototype.env;
    /** @type {?|undefined} */
    GridModuleConfig.prototype.endpoints;
    /** @type {?|undefined} */
    GridModuleConfig.prototype.types;
}
/** @type {?} */
const MODULE_DEFAULT_CONFIG = {
    env: {
        production: false,
        frontend_server: ""
    },
    endpoints: {
        upsert: "/api/grid",
        find: "/api/grid",
        get: "/api/grid/${model._id}",
        update_item: "/api/grid/item",
        update_item_access: "/api/grid/item/access"
    },
    types: {}
};
/** @type {?} */
const MODULE_CONFIG_TOKEN = new InjectionToken("GridModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RootComponent {
}
RootComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-grid-root",
                template: "<router-outlet></router-outlet>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [
    {
        path: "grid",
        component: RootComponent,
        children: []
    }
];
/** @type {?} */
const GridRoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridModel {
    /**
     * @param {?=} __0
     */
    constructor({ _id, oid, name, type, config, items } = {
        config: {},
        items: []
    }) {
        this._id = _id;
        this.oid = oid;
        this.name = name;
        this.type = type;
        this.config = config;
        this.items = items;
    }
}
if (false) {
    /** @type {?} */
    GridModel.prototype._id;
    /** @type {?} */
    GridModel.prototype.oid;
    /** @type {?} */
    GridModel.prototype.name;
    /** @type {?} */
    GridModel.prototype.type;
    /** @type {?} */
    GridModel.prototype.owner;
    /** @type {?} */
    GridModel.prototype.config;
    /** @type {?} */
    GridModel.prototype.items;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UpsertGridApiModel;
(function (UpsertGridApiModel) {
    class Request {
        /**
         * @param {?=} grid
         */
        constructor(grid = {}) {
            debugger;
            this.grid = new GridModel(grid);
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return this.grid;
        }
    }
    UpsertGridApiModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype.grid;
    }
    class Response {
        constructor() { }
    }
    UpsertGridApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(UpsertGridApiModel || (UpsertGridApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridConfigurationService {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    constructor(configFile, store) {
        this.store = store;
        this.config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        // this.store.select(getGridModuleConfig).subscribe((gridConfig) => {
        // 	if (!gridConfig) {
        // 		return;
        // 	}
        // 	this._config = Object.assign({}, this._config, gridConfig.Config);
        // 	this.config$.next(this._config);
        // });
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
}
GridConfigurationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GridConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    GridConfigurationService.prototype._config;
    /** @type {?} */
    GridConfigurationService.prototype.config$;
    /**
     * @type {?}
     * @private
     */
    GridConfigurationService.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const GET_GRID_ACTION_TYPES = {
    START: "[GRID][API][GetGrid] start",
    SUCCEED: "[GRID][API][GetGrid] succeed",
    FAILED: "[GRID][API][GetGrid] failed",
};
class GetGridStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GRID][API][GetGrid] start" /* START */;
    }
}
if (false) {
    /** @type {?} */
    GetGridStartAction.prototype.type;
    /** @type {?} */
    GetGridStartAction.prototype.payload;
}
class GetGridSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GRID][API][GetGrid] succeed" /* SUCCEED */;
    }
}
if (false) {
    /** @type {?} */
    GetGridSucceedAction.prototype.type;
    /** @type {?} */
    GetGridSucceedAction.prototype.payload;
}
class GetGridFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GRID][API][GetGrid] failed" /* FAILED */;
    }
}
if (false) {
    /** @type {?} */
    GetGridFailedAction.prototype.type;
    /** @type {?} */
    GetGridFailedAction.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} userFacadeService
     * @param {?} configurationService
     */
    constructor(http, store, userFacadeService, configurationService) {
        this.http = http;
        this.store = store;
        this.userFacadeService = userFacadeService;
        this.configurationService = configurationService;
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    get(_id) {
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        config => config.endpoints.get !== "")), take(1), skipUntil(this.store.select(getFrontendUser)), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        config => {
            return this.http
                .get(stringTemplate(config.env.frontend_server + config.endpoints.get, { _id }), {})
                .pipe(map((/**
             * @param {?} response
             * @return {?}
             */
            (response) => response.Result)));
        })));
    }
    /**
     * @return {?}
     */
    getGrids() {
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        config => config.endpoints.find != "")), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        config => this.http.get(config.env.frontend_server + config.endpoints.find))), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.Result)));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    update_item(item) {
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        config => config.endpoints.update_item != "")), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        config => this.http.patch(config.env.frontend_server + config.endpoints.update_item, item))), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.Result)));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    update_item_access(item) {
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        config => config.endpoints.update_item_access != "")), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        config => this.http.patch(config.env.frontend_server + config.endpoints.update_item_access, item))), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.Result)));
    }
    /**
     * @param {?} grid
     * @return {?}
     */
    upsert(grid) {
        /** @type {?} */
        const model = new UpsertGridApiModel.Request(grid);
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        config => config.endpoints.upsert != "")), take(1), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        config => {
            return this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody(), {});
        })), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.Result)));
    }
    // delete(_id: string) {
    // 	return this.configurationService.config$
    // 		.filter((config) => config.endpoints.deleteForm != "")
    // 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
    // }
    /**
     * @param {?} _id
     * @return {?}
     */
    selectById(_id) {
        /** @type {?} */
        const subject = new BehaviorSubject(undefined);
        this.store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.grids.db.data))
            .pipe(filter((/**
         * @param {?} grids
         * @return {?}
         */
        grids => grids != null)), map((/**
         * @param {?} grids
         * @return {?}
         */
        grids => grids.find((/**
         * @param {?} grid
         * @return {?}
         */
        grid => grid._id == _id)))), tap((/**
         * @param {?} grid
         * @return {?}
         */
        grid => {
            if (grid == null) {
                this.store.dispatch(new GetGridStartAction(_id));
            }
        })))
            .subscribe((/**
         * @param {?} FormSchemaModel
         * @return {?}
         */
        FormSchemaModel => subject.next(FormSchemaModel)));
        return subject.asObservable();
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    selectByOid(_id) {
        /** @type {?} */
        const subject = new BehaviorSubject(undefined);
        this.store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.grids.db.data))
            .pipe(filter((/**
         * @param {?} grids
         * @return {?}
         */
        grids => grids != null)), map((/**
         * @param {?} grids
         * @return {?}
         */
        grids => grids.find((/**
         * @param {?} grid
         * @return {?}
         */
        grid => grid._id == _id)))), tap((/**
         * @param {?} grid
         * @return {?}
         */
        grid => {
            if (grid == null) {
                this.store.dispatch(new GetGridStartAction(_id));
            }
        })))
            .subscribe((/**
         * @param {?} FormSchemaModel
         * @return {?}
         */
        FormSchemaModel => subject.next(FormSchemaModel)));
        return subject.asObservable();
    }
}
GridService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
GridService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: UserFacadeService },
    { type: GridConfigurationService }
];
/** @nocollapse */ GridService.ngInjectableDef = ɵɵdefineInjectable({ factory: function GridService_Factory() { return new GridService(ɵɵinject(HttpClient), ɵɵinject(Store), ɵɵinject(UserFacadeService), ɵɵinject(GridConfigurationService)); }, token: GridService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    GridService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    GridService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    GridService.prototype.userFacadeService;
    /**
     * @type {?}
     * @private
     */
    GridService.prototype.configurationService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetGridApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[GRID][API][GetGrid] start" /* START */), map((/**
         * @param {?} action
         * @return {?}
         */
        action => action.payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.service.get(payload))), map((/**
         * @param {?} res
         * @return {?}
         */
        res => new GetGridSucceedAction(res))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => of(new GetGridFailedAction(err)))));
    }
}
GetGridApiEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GetGridApiEffects.ctorParameters = () => [
    { type: Actions },
    { type: GridService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], GetGridApiEffects.prototype, "start$", void 0);
if (false) {
    /** @type {?} */
    GetGridApiEffects.prototype.start$;
    /**
     * @type {?}
     * @private
     */
    GetGridApiEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    GetGridApiEffects.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const UPSERT_GRID_ACTION_TYPES = {
    START: "[UPSERT_GRID][API][UpsertGrid] start",
    SUCCEED: "[UPSERT_GRID][API][UpsertGrid] succeed",
    FAILED: "[UPSERT_GRID][API][UpsertGrid] failed",
};
class UpsertGridStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_GRID][API][UpsertGrid] start" /* START */;
    }
}
if (false) {
    /** @type {?} */
    UpsertGridStartAction.prototype.type;
    /** @type {?} */
    UpsertGridStartAction.prototype.payload;
}
class UpsertGridSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_GRID][API][UpsertGrid] succeed" /* SUCCEED */;
    }
}
if (false) {
    /** @type {?} */
    UpsertGridSucceedAction.prototype.type;
    /** @type {?} */
    UpsertGridSucceedAction.prototype.payload;
}
class UpsertGridFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_GRID][API][UpsertGrid] failed" /* FAILED */;
    }
}
if (false) {
    /** @type {?} */
    UpsertGridFailedAction.prototype.type;
    /** @type {?} */
    UpsertGridFailedAction.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpsertGridApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[UPSERT_GRID][API][UpsertGrid] start" /* START */), pluck("payload"), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        (payload) => this.service.upsert(payload))), map((/**
         * @param {?} res
         * @return {?}
         */
        res => new UpsertGridSucceedAction(res))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => of(new UpsertGridFailedAction(err)))));
    }
}
UpsertGridApiEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UpsertGridApiEffects.ctorParameters = () => [
    { type: Actions },
    { type: GridService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], UpsertGridApiEffects.prototype, "start$", void 0);
if (false) {
    /** @type {?} */
    UpsertGridApiEffects.prototype.start$;
    /**
     * @type {?}
     * @private
     */
    UpsertGridApiEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    UpsertGridApiEffects.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const GET_GRIDS_ACTION_TYPES = {
    START: "[GET_GRIDS][API][GetGrids] start",
    SUCCEED: "[GET_GRIDS][API][GetGrids] succeed",
    FAILED: "[GET_GRIDS][API][GetGrids] failed",
};
class GetGridsStartAction {
    constructor() {
        this.type = "[GET_GRIDS][API][GetGrids] start" /* START */;
    }
}
if (false) {
    /** @type {?} */
    GetGridsStartAction.prototype.type;
}
class GetGridsSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GET_GRIDS][API][GetGrids] succeed" /* SUCCEED */;
    }
}
if (false) {
    /** @type {?} */
    GetGridsSucceedAction.prototype.type;
    /** @type {?} */
    GetGridsSucceedAction.prototype.payload;
}
class GetGridsFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GET_GRIDS][API][GetGrids] failed" /* FAILED */;
    }
}
if (false) {
    /** @type {?} */
    GetGridsFailedAction.prototype.type;
    /** @type {?} */
    GetGridsFailedAction.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetGridsApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[GET_GRIDS][API][GetGrids] start" /* START */), switchMap((/**
         * @return {?}
         */
        () => this.service
            .getGrids()
            .pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => new GetGridsSucceedAction(res))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => of(new GetGridsFailedAction(err))))))));
    }
}
GetGridsApiEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GetGridsApiEffects.ctorParameters = () => [
    { type: Actions },
    { type: GridService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], GetGridsApiEffects.prototype, "start$", void 0);
if (false) {
    /** @type {?} */
    GetGridsApiEffects.prototype.start$;
    /**
     * @type {?}
     * @private
     */
    GetGridsApiEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    GetGridsApiEffects.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const GridsActionTypes = {
    UPSERT: "[GRID][DB] UPSERT",
    DELETE: "[GRID][DB] DELETE",
};
class UpsertGridAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GridsActionTypes.UPSERT;
    }
}
if (false) {
    /** @type {?} */
    UpsertGridAction.prototype.type;
    /** @type {?} */
    UpsertGridAction.prototype.payload;
}
class DeleteGridAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GridsActionTypes.DELETE;
    }
}
if (false) {
    /** @type {?} */
    DeleteGridAction.prototype.type;
    /** @type {?} */
    DeleteGridAction.prototype.payload;
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
    State.prototype.data;
}
const ɵ0 = [];
/** @type {?} */
const initialState = {
    data: ɵ0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer(state = initialState, action) {
    /** @type {?} */
    let _data;
    switch (action.type) {
        case GridsActionTypes.UPSERT:
            _data = state.data.concat();
            /** @type {?} */
            const newGrids = action.payload;
            newGrids.forEach((/**
             * @param {?} newGrid
             * @return {?}
             */
            newGrid => {
                /** @type {?} */
                const existedGridIndex = _data.findIndex((/**
                 * @param {?} w
                 * @return {?}
                 */
                w => w._id == newGrid._id));
                if (existedGridIndex > -1) {
                    _data.splice(existedGridIndex, 1, newGrid);
                }
                else {
                    _data.push(newGrid);
                }
            }));
            return Object.assign({}, state, { data: _data });
        case GridsActionTypes.DELETE:
            _data = Object.assign({}, state.data);
            /** @type {?} */
            const gridIndex = state.data.findIndex((/**
             * @param {?} w
             * @return {?}
             */
            w => w._id == action.payload._id));
            _data.splice(gridIndex, 1);
            return Object.assign({}, state, { data: _data });
        default:
            return state;
    }
}
/** @type {?} */
const getGrids = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.data);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function GridState() { }
if (false) {
    /** @type {?} */
    GridState.prototype.db;
}
/** @type {?} */
const GridReducer = {
    db: Reducer
};
/**
 * @record
 */
function AppState() { }
if (false) {
    /** @type {?} */
    AppState.prototype.grids;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridDbEffects {
    /**
     * @param {?} actions$
     */
    constructor(actions$) {
        this.actions$ = actions$;
        this.Upsert$ = this.actions$.pipe(ofType("[GRID][API][GetGrid] succeed" /* SUCCEED */, "[UPSERT_GRID][API][UpsertGrid] succeed" /* SUCCEED */), pluck("payload"), map((/**
         * @param {?} grid
         * @return {?}
         */
        (grid) => new UpsertGridAction([grid]))));
        this.UpsertMany$ = this.actions$.pipe(ofType("[GET_GRIDS][API][GetGrids] succeed" /* SUCCEED */), pluck("payload"), map((/**
         * @param {?} grids
         * @return {?}
         */
        (grids) => new UpsertGridAction(grids))));
    }
}
GridDbEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GridDbEffects.ctorParameters = () => [
    { type: Actions }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], GridDbEffects.prototype, "Upsert$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], GridDbEffects.prototype, "UpsertMany$", void 0);
if (false) {
    /** @type {?} */
    GridDbEffects.prototype.Upsert$;
    /** @type {?} */
    GridDbEffects.prototype.UpsertMany$;
    /**
     * @type {?}
     * @private
     */
    GridDbEffects.prototype.actions$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DynamicGridItremConfigDirective {
    /**
     * @param {?} configurationService
     * @param {?} resolver
     * @param {?} container
     */
    constructor(configurationService, resolver, container) {
        this.configurationService = configurationService;
        this.resolver = resolver;
        this.container = container;
        this.mapTypeToComponent = this.configurationService.config$.getValue().types;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    set type(type) {
        if (!type)
            return;
        this._resolve_correct_component_base_on_widget_type(type);
    }
    /**
     * @return {?}
     */
    get valid() {
        return this.component.instance.valid;
    }
    /**
     * @return {?}
     */
    get config() {
        return this.component.instance.config;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} type
     * @return {?}
     */
    _resolve_correct_component_base_on_widget_type(type) {
        if (!this.mapTypeToComponent[type]) {
            /** @type {?} */
            const supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
            throw new Error(`Trying to use an unsupported type (${type}).
		  		 Supported types: ${supportedTypes}`);
        }
        /** @type {?} */
        const component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[type].configComponent);
        this.component = this.container.createComponent(component);
        // this.widget$.subscribe((w) => (this.component.instance.widget = w));
    }
}
DynamicGridItremConfigDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ngsDynamicGridItemConfig]"
            },] }
];
/** @nocollapse */
DynamicGridItremConfigDirective.ctorParameters = () => [
    { type: GridConfigurationService },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
DynamicGridItremConfigDirective.propDecorators = {
    type: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DynamicGridItremConfigDirective.prototype.component;
    /** @type {?} */
    DynamicGridItremConfigDirective.prototype.mapTypeToComponent;
    /**
     * @type {?}
     * @private
     */
    DynamicGridItremConfigDirective.prototype.configurationService;
    /**
     * @type {?}
     * @private
     */
    DynamicGridItremConfigDirective.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    DynamicGridItremConfigDirective.prototype.container;
}
class DynamicGridItemConfigComponent {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.data = data;
    }
    /**
     * @return {?}
     */
    get config() {
        return this.DynamicWidgetRef.config;
    }
    /**
     * @return {?}
     */
    get valid() {
        return this.DynamicWidgetRef.valid;
    }
}
DynamicGridItemConfigComponent.decorators = [
    { type: Component, args: [{
                template: `
	<div ngsDynamicGridItemConfig [type]="data.type"></div>
	`
            }] }
];
/** @nocollapse */
DynamicGridItemConfigComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_BOTTOM_SHEET_DATA,] }] }
];
DynamicGridItemConfigComponent.propDecorators = {
    DynamicWidgetRef: [{ type: ViewChild, args: [DynamicGridItremConfigDirective, { static: false },] }]
};
if (false) {
    /** @type {?} */
    DynamicGridItemConfigComponent.prototype.DynamicWidgetRef;
    /** @type {?} */
    DynamicGridItemConfigComponent.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridConfigComponent {
    /**
     * @param {?} store
     * @param {?} data
     */
    constructor(store, data) {
        this.store = store;
        this.data = data;
        this.grid = this.data.grid;
        this.oid = this.data.oid;
        this._init_properties();
        this._init_form_group();
    }
    /**
     * @return {?}
     */
    save() {
        /** @type {?} */
        const grid = Object.assign({}, this.grid, this.gridFormGroup.value, { config: Object.assign({}, this.configFormGroup.value) });
        this.store.dispatch(new UpsertGridStartAction(grid));
    }
    /**
     * @return {?}
     */
    _init_form_group() {
        this.configFormGroup = new FormGroup({
            gridType: new FormControl("fit"),
            compactType: new FormControl("none"),
            displayGrid: new FormControl("onDrag&Resize"),
            // empty cell
            enableEmptyCellDrag: new FormControl(true),
            enableEmptyCellClick: new FormControl(false),
            enableEmptyCellContextMenu: new FormControl(false),
            //
            scrollToNewItems: new FormControl(true),
            // margins
            margin: new FormControl(10),
            outerMargin: new FormControl(true),
            outerMarginTop: new FormControl(10),
            outerMarginRight: new FormControl(10),
            outerMarginBottom: new FormControl(10),
            outerMarginLeft: new FormControl(10),
            // grid size
            minCols: new FormControl(3),
            maxCols: new FormControl(3),
            //
            draggable: new FormGroup({
                enabled: new FormControl(),
                delayStart: new FormControl(333)
                // ignoreContent: new FormControl("false")
            }),
            resizable: new FormGroup({
                enabled: new FormControl()
            })
        });
        this.gridFormGroup = new FormGroup({
            oid: new FormControl(this.oid),
            name: new FormControl("")
        });
        this.gridFormGroup.patchValue(this.grid);
        this.configFormGroup.patchValue(this.grid.config);
    }
    /**
     * @return {?}
     */
    _init_properties() {
        this.gridTypes = ["fit", "scrollVertical", "scrollHorizontal", "fixed", "verticalFixed", "horizontalFixed"];
        this.compactType = ["none", "compactUp", "compactLeft", "compactUp&Left", "compactLeft&Up"];
        this.displayGridTypes = ["always", "onDrag&Resize", "none"];
    }
}
GridConfigComponent.decorators = [
    { type: Component, args: [{
                template: "<h4> \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u062F\u0627\u0634\u0628\u0648\u0631\u062F</h4>\r\n<div fxLayout=\"column wrap\" fxLayoutGap=\"15px\">\r\n    <div fxFlex=\"100\" fxLayout=\"row wrap\" [formGroup]=\"gridFormGroup\">\r\n        <mat-form-field fxFlex=\"20\">\r\n            <input matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\r\n        </mat-form-field>\r\n    </div>\r\n    <div fxLayout=\"column wrap\" fxLayoutGap=\"15px\"  fxFlex=\"100\" [formGroup]=\"configFormGroup\">\r\n        <div fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n            <mat-form-field fxFlex=\"20\">\r\n                <mat-select placeholder=\"\u0646\u0648\u0639 \u0642\u0631\u0627\u0631\u06AF\u06CC\u0631\u06CC \u06AF\u0631\u06CC\u062F\u0647\u0627 \u062F\u0631 \u0635\u0641\u062D\u0647\" formControlName=\"gridType\">\r\n                    <mat-option *ngFor=\"let item of gridTypes\" [value]=\"item\">\r\n                        {{item}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"20\">\r\n                <mat-select placeholder=\"\u0646\u0648\u0639 \u0641\u0634\u0631\u062F\u0647 \u0634\u062F\u0646 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u062F\u0631 \u0635\u0641\u062D\u0647\" formControlName=\"compactType\">\r\n                    <mat-option *ngFor=\"let item of compactType\" [value]=\"item\">\r\n                        {{item}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"20\">\r\n                <mat-select placeholder=\"\u0646\u0634\u0627\u0646 \u062F\u0627\u062F\u0646 \u0633\u0644\u0648\u0644\u200C\u0647\u0627\u06CC \u06AF\u0631\u06CC\u062F\" formControlName=\"displayGrid\">\r\n                    <mat-option *ngFor=\"let item of displayGridTypes\" [value]=\"item\">\r\n                        {{item}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n            <div fxFlex=\"20\">\r\n                <mat-checkbox formControlName=\"enableEmptyCellDrag\">\u0627\u06CC\u062C\u0627\u062F \u06AF\u0631\u06CC\u062F \u0628\u0627 \u062F\u0631\u06AF \u06A9\u0631\u062F\u0646</mat-checkbox>\r\n                <!-- <mat-checkbox formControlName=\"enableEmptyCellClick\">enableEmptyCellClick</mat-checkbox> -->\r\n            </div>\r\n            <div fxFlex=\"20\" [formGroup]=\"configFormGroup.get('draggable')\">\r\n                <mat-checkbox formControlName=\"enabled\">\u0642\u0627\u0628\u0644\u06CC\u062A \u062C\u0627\u0628\u062C\u0627\u06CC\u06CC \u06AF\u0631\u06CC\u062F\u0647\u0627</mat-checkbox>\r\n            </div>\r\n            <div fxFlex=\"20\" [formGroup]=\"configFormGroup.get('resizable')\">\r\n                <mat-checkbox formControlName=\"enabled\">\u0642\u0627\u0628\u0644\u06CC\u062A \u062A\u063A\u06CC\u06CC\u0631 \u0633\u0627\u06CC\u0632 \u06AF\u0631\u06CC\u062F\u0647\u0627</mat-checkbox>\r\n            </div>\r\n        </div>\r\n        <!-- Margins -->\r\n        <div fxFlex=\"100\" fxLayout=\"column wrap\" fxLayoutGap=\"25px\">\r\n            <h4 fxFlex=\"100\">\u062D\u0627\u0634\u06CC\u0647:</h4>\r\n            <div fxFlex fxLayout=\"column\" fxLayoutGap=\"25px\">\r\n                <mat-checkbox fxFlex formControlName=\"outerMargin\">\u0627\u0645\u06A9\u0627\u0646 \u062A\u0646\u0638\u06CC\u0645 \u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627</mat-checkbox>\r\n            </div>\r\n            <div fxFlex=\"100\"  fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n                <mat-form-field fxFlex>\r\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u0647\u0645\" formControlName=\"margin\" />\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex>\r\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0631 \u0628\u0627\u0644\u0627 \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginTop\" />\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex>\r\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u0631\u0627\u0633\u062A \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginRight\" />\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex>\r\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u067E\u0627\u06CC\u06CC\u0646 \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginBottom\" />\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex>\r\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u0686\u067E \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginLeft\" />\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n        <!-- Grid Size -->\r\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n            <h4 fxFlex=\"100\">\u062A\u0639\u062F\u0627\u062F \u0633\u062A\u0648\u0646\u200C\u0647\u0627:</h4>\r\n            <mat-form-field fxFlex=\"18\">\r\n                <input matInput type=\"number\" placeholder=\"\u06A9\u0645\u062A\u0631\u06CC\u0646 \u0633\u062A\u0648\u0646\" formControlName=\"minCols\" />\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"18\">\r\n                <input matInput type=\"number\" placeholder=\"\u0628\u06CC\u0634\u062A\u0631\u06CC\u0646 \u0633\u062A\u0648\u0646\" formControlName=\"maxCols\" />\r\n            </mat-form-field>\r\n        </div> \r\n        <div fxFlex=\"20\" fxLayoutAlign=\"flex-end center\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n         <button color=\"primary\" mat-raised-button (click)=\"save()\">\u0630\u062E\u06CC\u0631\u0647</button>\r\n    </div>\r\n</div>\r\n</div>"
            }] }
];
/** @nocollapse */
GridConfigComponent.ctorParameters = () => [
    { type: Store },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_BOTTOM_SHEET_DATA,] }] }
];
if (false) {
    /** @type {?} */
    GridConfigComponent.prototype.gridTypes;
    /** @type {?} */
    GridConfigComponent.prototype.compactType;
    /** @type {?} */
    GridConfigComponent.prototype.displayGridTypes;
    /** @type {?} */
    GridConfigComponent.prototype.grid;
    /** @type {?} */
    GridConfigComponent.prototype.oid;
    /** @type {?} */
    GridConfigComponent.prototype.configFormGroup;
    /** @type {?} */
    GridConfigComponent.prototype.gridFormGroup;
    /**
     * @type {?}
     * @private
     */
    GridConfigComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    GridConfigComponent.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridComponent {
    /**
     * @param {?} store
     * @param {?} service
     * @param {?} userFacadeService
     * @param {?} configurationService
     * @param {?} bottomSheet
     */
    constructor(store, service, userFacadeService, configurationService, bottomSheet) {
        this.store = store;
        this.service = service;
        this.userFacadeService = userFacadeService;
        this.configurationService = configurationService;
        this.bottomSheet = bottomSheet;
        this.itemValidateCallback = new EventEmitter();
        this.itemRemovedCallback = new EventEmitter();
        this.itemInitCallback = new EventEmitter();
        this.itemResizeCallback = new EventEmitter();
        this.itemChangeCallback = new EventEmitter();
        this.gridSizeChangedCallback = new EventEmitter();
        this.destroyCallback = new EventEmitter();
        this.initCallback = new EventEmitter();
        this.ready = false;
        this.options = {};
        this.userFacadeService
            .getInfo()
            .pipe(filter((/**
         * @param {?} user
         * @return {?}
         */
        (user) => user.CurrentSession != undefined)), map((/**
         * @param {?} user
         * @return {?}
         */
        (user) => user.CurrentSession.Username)))
            .subscribe((/**
         * @param {?} username
         * @return {?}
         */
        username => {
            this.username = username;
        }));
        this.gridItemTypes = Object.keys(this.configurationService.config$.getValue().types);
        this.havePermission$ = this.store.select(getAccountInfo).pipe(map((/**
         * @param {?} user
         * @return {?}
         */
        user => {
            /** @type {?} */
            const criteria = [user, user._id, this.grid, this.grid.owner];
            if (criteria.some((/**
             * @param {?} i
             * @return {?}
             */
            i => !i)))
                return false;
            return user._id == this.grid.owner;
        })));
    }
    /**
     * @param {?} item
     * @param {?} itemComponent
     * @return {?}
     */
    static itemChange(item, itemComponent) {
        console.log("itemChanged", item, itemComponent);
    }
    /**
     * @param {?} item
     * @param {?} itemComponent
     * @return {?}
     */
    static itemResize(item, itemComponent) {
        console.log("itemResized", item, itemComponent);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.items = [ { cols: 2, rows: 1, y: 0, x: 0 }, { cols: 2, rows: 2, y: 0, x: 2 } ];
        this.grid = new GridModel({
            oid: this.oid,
            config: {}
        });
        this._get_grid_by_oid_and_update_component();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _initCallback(item) {
        this.initCallback.emit(item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    removeItem(item) {
        this.grid.items.splice(this.grid.items.indexOf(item), 1);
    }
    /**
     * @param {?} item
     * @param {?} event
     * @return {?}
     */
    make_public(item, event) {
        debugger;
        item.access = event.checked ? "public" : "private";
        this.service.update_item_access(item).subscribe((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            debugger;
        }));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    addItem(e) {
        debugger;
        e.stopPropagation();
        this.grid.items.push((/** @type {?} */ ({})));
    }
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    emptyCellClick(event, item) {
        console.log("empty cell click", event, item);
        this.grid.items.push((/** @type {?} */ (item)));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    openConfig(e) {
        debugger;
        e.stopPropagation();
        e.preventDefault();
        this.bottomSheet.open(GridConfigComponent, {
            data: {
                grid: this.grid
            }
        });
    }
    /**
     * @param {?} e
     * @return {?}
     */
    saveConfig(e) {
        debugger;
        e.stopPropagation();
        e.stopImmediatePropagation();
        e.preventDefault();
        /**
         * TODO:
         * احزار هویت در سمت نود اتحام شود
        * کانفیگ برای گرفتن شناسه کاربر
         */
        this.store.dispatch(new UpsertGridStartAction(this.grid));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    gridItemTypeChanged(item) {
        /** @type {?} */
        const bs = this.bottomSheet.open(DynamicGridItemConfigComponent, {
            data: {
                type: item.type
            }
        });
        bs.afterDismissed().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            item.config = bs.instance.config;
            item.valid = bs.instance.valid;
        }));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    showConfig(item) {
        /** @type {?} */
        const bs = this.bottomSheet.open(DynamicGridItemConfigComponent, {
            data: {
                type: item.type
            }
        });
        bs.afterDismissed().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            item.config = bs.instance.config;
            item.valid = bs.instance.valid;
        }));
    }
    // tslint:disable-next-line:member-ordering
    // @ViewChild("DiagramViewComponent") _ngsDynamicGridItemView: DiagramViewComponent;
    /**
     * @return {?}
     */
    goToEdit() {
        debugger;
        // tslint:disable-next-line:no-unused-expression
        // this._ngsDynamicGridItemView;
    }
    /**
     * private methods
     * @return {?}
     */
    _get_grid_by_oid_and_update_component() {
        this.service.selectById(this.oid).pipe(filter((/**
         * @param {?} data
         * @return {?}
         */
        data => data != undefined))).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.grid = data;
            debugger;
            data.config.outerMarginBottom = +data.config.outerMarginBottom;
            data.config.outerMarginRight = +data.config.outerMarginRight;
            this.options = Object.assign({}, this.options, data.config);
            // this.options.draggable = {
            // 	enabled: true
            // };
            // this.options.emptyCellContextMenuCallback = this.emptyCellClick.bind(this);
            // this.options.emptyCellDropCallback = this.emptyCellClick.bind(this);
            if (this.options.enableEmptyCellDrag)
                this.options.emptyCellDragCallback = this.emptyCellClick.bind(this);
            // if (this.options.enableEmptyCellClick) this.options.emptyCellClickCallback = this.emptyCellClick.bind(this);
            this.ready = true;
            // this.options.api.optionsChanged();
        }));
    }
}
GridComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-grid",
                template: "<gridster [options]=\"options\">\r\n    <div class=\"actions\" >\r\n        <button mat-mini-fab (click)=\"addItem($event)\">\r\n            <mat-icon>add</mat-icon>\r\n        </button>\r\n        <button mat-mini-fab (click)=\"openConfig($event)\" *ngIf=\"havePermission$ | async\">\r\n            <mat-icon>dashboard</mat-icon>\r\n        </button>\r\n        <button mat-mini-fab (click)=\"saveConfig($event)\">\r\n            <mat-icon>done</mat-icon>\r\n        </button>\r\n    </div>\r\n    <gridster-item [item]=\"item\" *ngFor=\"let item of grid.items\">\r\n        <div class=\"initializer\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <div fxFlex=\"nogrow\">\r\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n                    <mat-icon>more_horiz</mat-icon>\r\n                </button>\r\n                <mat-menu #menu=\"matMenu\" class=\"rtl\">\r\n                    <mat-checkbox *ngIf=\"grid.owner == username\" labelPosition=\"before\" [checked]=\"item.access=='public'\"\r\n                        (change)=\"make_public(item,$event)\">\u0639\u0645\u0648\u0645\u06CC</mat-checkbox>\r\n                    <button mat-menu-item class=\"rtl\" (click)=\"goToEdit()\">\r\n                        <mat-icon>edit</mat-icon>\r\n                        <span>\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0627\u0641\u0632\u0648\u0646\u0647</span>\r\n                    </button>\r\n                    <!-- <button mat-menu-item class=\"rtl\" (click)=\"showConfig(item)\">\r\n                        <mat-icon>settings</mat-icon>\r\n                        <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A</span>\r\n                    </button> -->\r\n                    <button mat-menu-item class=\"rtl\" (click)=\"removeItem(item)\">\r\n                        <mat-icon>delete</mat-icon>\r\n                        <span>\u062D\u0630\u0641</span>\r\n                    </button>\r\n                </mat-menu>\r\n            </div>\r\n        </div>\r\n        <div class=\"widget-content\">\r\n            <div *ngIf=\"!item.valid\" fxFlex=\"100\" class=\"form-container\">\r\n                <h4>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A</h4>\r\n                <mat-form-field fxFlex=\"grow\">\r\n                    <mat-select placeholder=\"Grid Item Type\" [(ngModel)]=\"item.type\" (selectionChange)=\"gridItemTypeChanged(item)\">\r\n                        <mat-option *ngFor=\"let item of gridItemTypes\" [value]=\"item\">\r\n                            {{item}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n            <div *ngIf=\"item.valid\" #test [ngsDynamicGridItemView]=\"item\"></div>\r\n        </div>\r\n    </gridster-item>\r\n</gridster>",
                styles: [":host{width:100%;min-height:calc(100vh - 205px);display:-ms-grid;display:grid;direction:ltr}.initializer{position:absolute;z-index:10;top:5px;left:5px;height:25px}.actions{position:absolute;top:25px;right:25px;z-index:5}.actions button{margin-left:10px}.widget-content{position:relative;height:100%}.form-container{padding:25px;width:100%}[dir=rtl] .form-container{direction:rtl}.form-container mat-form-field{width:100%}.rtl{direction:rtl}"]
            }] }
];
/** @nocollapse */
GridComponent.ctorParameters = () => [
    { type: Store },
    { type: GridService },
    { type: UserFacadeService },
    { type: GridConfigurationService },
    { type: MatBottomSheet }
];
GridComponent.propDecorators = {
    itemValidateCallback: [{ type: Output }],
    itemRemovedCallback: [{ type: Output }],
    itemInitCallback: [{ type: Output }],
    itemResizeCallback: [{ type: Output }],
    itemChangeCallback: [{ type: Output }],
    gridSizeChangedCallback: [{ type: Output }],
    destroyCallback: [{ type: Output }],
    initCallback: [{ type: Output }],
    oid: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GridComponent.prototype.itemValidateCallback;
    /** @type {?} */
    GridComponent.prototype.itemRemovedCallback;
    /** @type {?} */
    GridComponent.prototype.itemInitCallback;
    /** @type {?} */
    GridComponent.prototype.itemResizeCallback;
    /** @type {?} */
    GridComponent.prototype.itemChangeCallback;
    /** @type {?} */
    GridComponent.prototype.gridSizeChangedCallback;
    /** @type {?} */
    GridComponent.prototype.destroyCallback;
    /** @type {?} */
    GridComponent.prototype.initCallback;
    /** @type {?} */
    GridComponent.prototype.oid;
    /** @type {?} */
    GridComponent.prototype.havePermission$;
    /** @type {?} */
    GridComponent.prototype.username;
    /** @type {?} */
    GridComponent.prototype.options;
    /** @type {?} */
    GridComponent.prototype.grid;
    /** @type {?} */
    GridComponent.prototype.ready;
    /** @type {?} */
    GridComponent.prototype.gridItemTypes;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.service;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.userFacadeService;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.configurationService;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.bottomSheet;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DynamicGridItemViewDirective {
    /**
     * @param {?} configurationService
     * @param {?} resolver
     * @param {?} container
     */
    constructor(configurationService, resolver, container) {
        this.configurationService = configurationService;
        this.resolver = resolver;
        this.container = container;
        this.mapTypeToComponent = this.configurationService.config$.getValue().types;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    set item(item) {
        if (!item)
            return;
        if (!item.valid)
            return;
        this._resolve_correct_component_base_on_widget_type(item);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} item
     * @return {?}
     */
    _resolve_correct_component_base_on_widget_type(item) {
        debugger;
        if (!this.mapTypeToComponent[item.type]) {
            /** @type {?} */
            const supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
            throw new Error(`Trying to use an unsupported type (${item.type}).
		  		 Supported types: ${supportedTypes}`);
        }
        /** @type {?} */
        const componentFactory = this.resolver.resolveComponentFactory(this.mapTypeToComponent[item.type].viewComponent);
        this.component = this.container.createComponent(componentFactory);
        Object.keys(item.config || {}).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            this.component.instance[key] = item.config[key];
        }));
    }
}
DynamicGridItemViewDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ngsDynamicGridItemView]"
            },] }
];
/** @nocollapse */
DynamicGridItemViewDirective.ctorParameters = () => [
    { type: GridConfigurationService },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
DynamicGridItemViewDirective.propDecorators = {
    item: [{ type: Input, args: ["ngsDynamicGridItemView",] }]
};
if (false) {
    /** @type {?} */
    DynamicGridItemViewDirective.prototype.component;
    /** @type {?} */
    DynamicGridItemViewDirective.prototype.mapTypeToComponent;
    /**
     * @type {?}
     * @private
     */
    DynamicGridItemViewDirective.prototype.configurationService;
    /**
     * @type {?}
     * @private
     */
    DynamicGridItemViewDirective.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    DynamicGridItemViewDirective.prototype.container;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgsGridModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: NgsGridRootModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, GridConfigurationService, GridService]
        };
    }
}
NgsGridModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    MatExpansionModule,
                    MatSnackBarModule,
                    MatIconModule,
                    MatButtonModule,
                    MatCardModule,
                    MatSelectModule,
                    MatInputModule,
                    MatFormFieldModule,
                    MatTabsModule,
                    MatBottomSheetModule,
                    MatRadioModule,
                    FlexLayoutModule,
                    MatMenuModule,
                    MatToolbarModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatSlideToggleModule,
                    MatDividerModule,
                    MatCheckboxModule,
                    MatTableModule,
                    GridsterModule
                ],
                declarations: [
                    RootComponent,
                    GridComponent,
                    GridConfigComponent,
                    DynamicGridItremConfigDirective,
                    DynamicGridItemConfigComponent,
                    DynamicGridItemViewDirective
                ],
                entryComponents: [GridConfigComponent, DynamicGridItemConfigComponent],
                exports: [GridComponent]
            },] }
];
class NgsGridRootModule {
    constructor() {
        ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
        ((/** @type {?} */ (window))).___starter.grid = "8.0.10";
    }
}
NgsGridRootModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NgsGridModule,
                    GridRoutingModule,
                    StoreModule.forFeature("grids", GridReducer),
                    EffectsModule.forFeature([GridDbEffects, GetGridApiEffects, GetGridsApiEffects, UpsertGridApiEffects])
                ],
                exports: [NgsGridModule]
            },] }
];
/** @nocollapse */
NgsGridRootModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { GridModel, MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG, NgsGridModule, NgsGridRootModule, RootComponent as ɵa, GridComponent as ɵb, GridReducer as ɵc, GridService as ɵe, GridConfigurationService as ɵf, GridConfigComponent as ɵg, DynamicGridItremConfigDirective as ɵh, DynamicGridItemConfigComponent as ɵi, DynamicGridItemViewDirective as ɵj, GridRoutingModule as ɵk, Reducer as ɵl, GridDbEffects as ɵm, GetGridApiEffects as ɵn, GetGridsApiEffects as ɵp, UpsertGridApiEffects as ɵr };
//# sourceMappingURL=soushians-grid.js.map
