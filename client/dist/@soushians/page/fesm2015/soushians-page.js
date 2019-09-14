import { InjectionToken, Injectable, Inject, Component, ComponentFactoryResolver, ViewContainerRef, NgModule } from '@angular/core';
import { Location, CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatIconModule, MatDividerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Store, StoreModule } from '@ngrx/store';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { NgsGridModule } from '@soushians/grid';
import { filter, take, combineLatest, switchMap, map, tap, pluck, catchError } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserFacadeService } from '@soushians/user';
import { stringTemplate } from '@soushians/shared';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __decorate, __metadata } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PageModuleConfig() { }
if (false) {
    /** @type {?|undefined} */
    PageModuleConfig.prototype.env;
    /** @type {?|undefined} */
    PageModuleConfig.prototype.endpoints;
}
/** @type {?} */
const MODULE_DEFAULT_CONFIG = {
    env: {
        production: false,
        frontend_server: "frontend_server/did/not/set"
    },
    endpoints: {
        upsert: "/api/page",
        delete: "/api/page/${model._id}",
        find: "/api/page",
        get: "/api/page/${model.name}"
    }
};
/** @type {?} */
const MODULE_CONFIG_TOKEN = new InjectionToken("PageModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageConfigurationService {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    constructor(configFile, store) {
        this.store = store;
        this.config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        // this.store.select(getPageModuleConfig).subscribe((pageConfig) => {
        // 	if (!pageConfig) {
        // 		return;
        // 	}
        // 	this._config = Object.assign({}, this._config, pageConfig.Config);
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
PageConfigurationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PageConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PageConfigurationService.prototype._config;
    /** @type {?} */
    PageConfigurationService.prototype.config$;
    /**
     * @type {?}
     * @private
     */
    PageConfigurationService.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GetPagesApiModel;
(function (GetPagesApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = {}) {
            Object.keys(initValue).forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => (this[key] = initValue[key])));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {};
        }
    }
    GetPagesApiModel.Request = Request;
    class Response {
        constructor() { }
    }
    GetPagesApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(GetPagesApiModel || (GetPagesApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const GET_PAGES_ACTION_TYPES = {
    START: "[GET_PAGES][API][GetPages] start",
    SUCCEED: "[GET_PAGES][API][GetPages] succeed",
    FAILED: "[GET_PAGES][API][GetPages] failed",
};
class GetPagesStartAction {
    constructor() {
        this.type = "[GET_PAGES][API][GetPages] start" /* START */;
    }
}
if (false) {
    /** @type {?} */
    GetPagesStartAction.prototype.type;
}
class GetPagesSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GET_PAGES][API][GetPages] succeed" /* SUCCEED */;
    }
}
if (false) {
    /** @type {?} */
    GetPagesSucceedAction.prototype.type;
    /** @type {?} */
    GetPagesSucceedAction.prototype.payload;
}
class GetPagesFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GET_PAGES][API][GetPages] failed" /* FAILED */;
    }
}
if (false) {
    /** @type {?} */
    GetPagesFailedAction.prototype.type;
    /** @type {?} */
    GetPagesFailedAction.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GetPageApiModel;
(function (GetPageApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = {}) {
            Object.keys(initValue).forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => (this[key] = initValue[key])));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {};
        }
    }
    GetPageApiModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype.name;
    }
    class Response {
        constructor() { }
    }
    GetPageApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(GetPageApiModel || (GetPageApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const GET_PAGE_ACTION_TYPES = {
    START: "[PAGE][API][GetPage] start",
    SUCCEED: "[PAGE][API][GetPage] succeed",
    FAILED: "[PAGE][API][GetPage] failed",
};
class GetPageStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][GetPage] start" /* START */;
    }
}
if (false) {
    /** @type {?} */
    GetPageStartAction.prototype.type;
    /** @type {?} */
    GetPageStartAction.prototype.payload;
}
class GetPageSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][GetPage] succeed" /* SUCCEED */;
    }
}
if (false) {
    /** @type {?} */
    GetPageSucceedAction.prototype.type;
    /** @type {?} */
    GetPageSucceedAction.prototype.payload;
}
class GetPageFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][GetPage] failed" /* FAILED */;
    }
}
if (false) {
    /** @type {?} */
    GetPageFailedAction.prototype.type;
    /** @type {?} */
    GetPageFailedAction.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DeletePageApiModel;
(function (DeletePageApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = {}) {
            Object.keys(initValue).forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => (this[key] = initValue[key])));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {};
        }
    }
    DeletePageApiModel.Request = Request;
    class Response {
        constructor() { }
    }
    DeletePageApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(DeletePageApiModel || (DeletePageApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DELETE_PAGE_ACTION_TYPES = {
    START: "[PAGE][API][DELETE] start",
    SUCCEED: "[PAGE][API][DELETE] succeed",
    FAILED: "[PAGE][API][DELETE] failed",
};
class DeletePageStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][DELETE] start" /* START */;
    }
}
if (false) {
    /** @type {?} */
    DeletePageStartAction.prototype.type;
    /** @type {?} */
    DeletePageStartAction.prototype.payload;
}
class DeletePageSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][DELETE] succeed" /* SUCCEED */;
    }
}
if (false) {
    /** @type {?} */
    DeletePageSucceedAction.prototype.type;
    /** @type {?} */
    DeletePageSucceedAction.prototype.payload;
}
class DeletePageFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][DELETE] failed" /* FAILED */;
    }
}
if (false) {
    /** @type {?} */
    DeletePageFailedAction.prototype.type;
    /** @type {?} */
    DeletePageFailedAction.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageModel {
    /**
     * @param {?=} __0
     */
    constructor({ _id, name, grid } = {}) {
        this._id = _id;
        this.name = name || "";
        this.grid = grid || "";
    }
}
if (false) {
    /** @type {?} */
    PageModel.prototype._id;
    /** @type {?} */
    PageModel.prototype.name;
    /** @type {?} */
    PageModel.prototype.grid;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UpsertPageApiModel;
(function (UpsertPageApiModel) {
    class Request {
        /**
         * @param {?=} page
         */
        constructor(page = {}) {
            debugger;
            this.page = new PageModel(page);
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return this.page;
        }
    }
    UpsertPageApiModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype.page;
    }
    class Response {
        constructor() { }
    }
    UpsertPageApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(UpsertPageApiModel || (UpsertPageApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const UPSERT_PAGE_ACTION_TYPES = {
    START: "[UPSERT_PAGE][API][UpsertPage] start",
    SUCCEED: "[UPSERT_PAGE][API][UpsertPage] succeed",
    FAILED: "[UPSERT_PAGE][API][UpsertPage] failed",
};
class UpsertPageStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_PAGE][API][UpsertPage] start" /* START */;
    }
}
if (false) {
    /** @type {?} */
    UpsertPageStartAction.prototype.type;
    /** @type {?} */
    UpsertPageStartAction.prototype.payload;
}
class UpsertPageSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_PAGE][API][UpsertPage] succeed" /* SUCCEED */;
    }
}
if (false) {
    /** @type {?} */
    UpsertPageSucceedAction.prototype.type;
    /** @type {?} */
    UpsertPageSucceedAction.prototype.payload;
}
class UpsertPageFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_PAGE][API][UpsertPage] failed" /* FAILED */;
    }
}
if (false) {
    /** @type {?} */
    UpsertPageFailedAction.prototype.type;
    /** @type {?} */
    UpsertPageFailedAction.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     * @param {?} _location
     * @param {?} userFacadeService
     */
    constructor(http, store, configurationService, _location, userFacadeService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        this._location = _location;
        this.userFacadeService = userFacadeService;
        this.userId$ = this.userFacadeService.getDisplayName().pipe(filter((/**
         * @param {?} i
         * @return {?}
         */
        i => i != undefined)));
    }
    /**
     * @param {?} name
     * @return {?}
     */
    get(name) {
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        config => config.endpoints.get !== "")), take(1), combineLatest(this.userId$), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([config, userId]) => this.http.get(stringTemplate(config.env.frontend_server + config.endpoints.get, { name })))), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.Result)));
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    delete(_id) {
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        config => config.endpoints.delete !== "")), take(1), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        config => this.http.delete(stringTemplate(config.env.frontend_server + config.endpoints.delete, { _id })))), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.Result)));
    }
    /**
     * @return {?}
     */
    getPages() {
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        config => config.endpoints.find != "")), combineLatest(this.userId$), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([config, userId]) => this.http.get(config.env.frontend_server + config.endpoints.find))), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.Result)));
    }
    /**
     * @template T
     * @param {?} page
     * @return {?}
     */
    upsert(page) {
        /** @type {?} */
        const model = new UpsertPageApiModel.Request(page);
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        config => config.endpoints.upsert != "")), take(1), combineLatest(this.userId$), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([config, userId]) => this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody()))), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.Result)), tap((/**
         * @return {?}
         */
        () => this._location.back())));
    }
    // delete(name: string) {
    // 	return this.configurationService.config$
    // 		.filter((config) => config.endpoints.deleteForm != "")
    // 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
    // }
    /**
     * @param {?} name
     * @return {?}
     */
    selectByName(name) {
        /** @type {?} */
        const subject = new BehaviorSubject(undefined);
        this.store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.pages.db.data))
            .pipe(filter((/**
         * @param {?} pages
         * @return {?}
         */
        pages => pages != null)), map((/**
         * @param {?} pages
         * @return {?}
         */
        pages => pages.find((/**
         * @param {?} page
         * @return {?}
         */
        page => page.name == name)))), tap((/**
         * @param {?} page
         * @return {?}
         */
        page => {
            if (page == null) {
                debugger;
                this.store.dispatch(new GetPageStartAction(name));
            }
        })))
            .subscribe((/**
         * @param {?} page
         * @return {?}
         */
        page => subject.next(page)));
        return subject.asObservable();
    }
}
PageService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PageService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: PageConfigurationService },
    { type: Location },
    { type: UserFacadeService }
];
if (false) {
    /** @type {?} */
    PageService.prototype.userId$;
    /**
     * @type {?}
     * @private
     */
    PageService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    PageService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    PageService.prototype.configurationService;
    /**
     * @type {?}
     * @private
     */
    PageService.prototype._location;
    /**
     * @type {?}
     * @private
     */
    PageService.prototype.userFacadeService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageViewComponent {
    /**
     * @param {?} store
     * @param {?} service
     * @param {?} route
     * @param {?} resolver
     * @param {?} container
     */
    constructor(store, service, route, resolver, container) {
        this.store = store;
        this.service = service;
        this.route = route;
        this.resolver = resolver;
        this.container = container;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._selectPage();
    }
    /**
     * @return {?}
     */
    _selectPage() {
        this.page$ = this.route.params.pipe(pluck("name"), switchMap((/**
         * @param {?} name
         * @return {?}
         */
        (name) => this.service.selectByName(name))), filter((/**
         * @param {?} page
         * @return {?}
         */
        (page) => page != undefined)));
    }
}
PageViewComponent.decorators = [
    { type: Component, args: [{
                template: "<div *ngIf=\"(page$ | async)?.grid\">\r\n    <ngs-grid [oid]=\"(page$ | async)?.grid\"></ngs-grid>\r\n</div>"
            }] }
];
/** @nocollapse */
PageViewComponent.ctorParameters = () => [
    { type: Store },
    { type: PageService },
    { type: ActivatedRoute },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
if (false) {
    /** @type {?} */
    PageViewComponent.prototype.page$;
    /** @type {?} */
    PageViewComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    PageViewComponent.prototype.service;
    /**
     * @type {?}
     * @private
     */
    PageViewComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    PageViewComponent.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    PageViewComponent.prototype.container;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RootComponent {
}
RootComponent.decorators = [
    { type: Component, args: [{
                selector: "page-root",
                template: "<router-outlet></router-outlet>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpsertComponent {
    /**
     * @param {?} store
     * @param {?} route
     * @param {?} service
     */
    constructor(store, route, service) {
        this.store = store;
        this.route = route;
        this.service = service;
        this._init_formgroup();
    }
    /**
     * view methods
     * @return {?}
     */
    upsert() {
        debugger;
        /** @type {?} */
        const page = Object.assign({}, this.formGroup.value);
        this.store.dispatch(new UpsertPageStartAction(page));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._select_page();
        this._update_formgroup_base_on_page();
    }
    /**
     * private methods
     * @return {?}
     */
    _init_formgroup() {
        this.formGroup = new FormGroup({
            _id: new FormControl(""),
            name: new FormControl(""),
            grid: new FormControl("")
        });
    }
    /**
     * @return {?}
     */
    _select_page() {
        this.page$ = this.route.params.pipe(pluck("name"), filter((/**
         * @param {?} name
         * @return {?}
         */
        (name) => name != undefined)), switchMap((/**
         * @param {?} name
         * @return {?}
         */
        (name) => this.service.selectByName(name))), filter((/**
         * @param {?} page
         * @return {?}
         */
        (page) => page != undefined)));
    }
    /**
     * @return {?}
     */
    _update_formgroup_base_on_page() {
        this.page$.subscribe((/**
         * @param {?} page
         * @return {?}
         */
        (page) => {
            this.formGroup.patchValue(page);
        }));
    }
}
UpsertComponent.decorators = [
    { type: Component, args: [{
                template: "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"main-container\">\r\n    <mat-card fxFlex=\"50\">\r\n        <mat-card-header>\r\n            <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n                <mat-icon>receipt</mat-icon>\r\n                <span>\u0627\u06CC\u062C\u0627\u062F \u0635\u0641\u062D\u0647 \u062C\u062F\u06CC\u062F</span>\r\n            </mat-card-title>\r\n            <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <span>\r\n                    \u0646\u0627\u0645 \u0635\u0641\u062D\u0647 \u0631\u0627 \u0648\u0627\u0631\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F \u0648 \u0628\u0647 \u0645\u0631\u062D\u0644\u0647 \u0628\u0639\u062F \u0628\u0631\u0648\u06CC\u062F ...\r\n                </span>\r\n            </mat-card-subtitle>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content [formGroup]=\"formGroup\">\r\n            <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n        <mat-card-actions align=\"end\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"upsert()\">\u062B\u0628\u062A</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</div>"
            }] }
];
/** @nocollapse */
UpsertComponent.ctorParameters = () => [
    { type: Store },
    { type: ActivatedRoute },
    { type: PageService }
];
if (false) {
    /** @type {?} */
    UpsertComponent.prototype.formGroup;
    /** @type {?} */
    UpsertComponent.prototype.page$;
    /**
     * @type {?}
     * @private
     */
    UpsertComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    UpsertComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    UpsertComponent.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PagesManagementComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.pages$ = this.store.select((/**
         * @param {?} state
         * @return {?}
         */
        (state) => state.pages.db.data));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.store.dispatch(new GetPagesStartAction());
    }
    /**
     * view methods
     * @param {?} page
     * @return {?}
     */
    delete(page) {
        this.store.dispatch(new DeletePageStartAction(page._id));
    }
}
PagesManagementComponent.decorators = [
    { type: Component, args: [{
                template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n  <div class=\"content-action\">\r\n    <mat-card class=\"with-sticky-action\">\r\n      <mat-card-header>\r\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n          <mat-icon>list_alt</mat-icon>\r\n          <span>\u0645\u062F\u06CC\u0631\u06CC\u062A \u0635\u063A\u062D\u0627\u062A</span>\r\n        </mat-card-title>\r\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <span>\r\n            \u062F\u0631 \u0627\u06CC\u0646 \u0642\u0633\u0645\u062A \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0635\u063A\u062D\u0627\u062A \u0628\u0627 \u06AF\u0631\u06CC\u062F\u0647\u0627\u06CC \u062F\u0644\u062E\u0648\u0627\u0647 \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u062C\u0627\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F ...\r\n          </span>\r\n        </mat-card-subtitle>\r\n      </mat-card-header>\r\n\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\">\r\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\r\n          <mat-card fxFlex.gt-lg=\"24\" fxFlex.lg=\"32\" fxFlex.md=\"48\" fxFlex.sm=\"100\" fxFlex.xs=\"100\" class=\"link\" *ngFor=\"let item of (pages$ | async)\"\r\n            fxFlex=\"32\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <div fxFlex fxLayoutAlign=\"start center\">\r\n              <h3> {{item.name}}</h3>\r\n            </div>\r\n            <div fxFlex fxLayoutAlign=\"center center\">\r\n              {{item.type}}\r\n            </div>\r\n            <div fxLayout=\"row\">\r\n              <div fxFlex=\"nogrow\">\r\n                <a mat-icon-button [routerLink]=\"['../upsert' , item.name]\">\r\n                  <mat-icon aria-label=\"edit page\">edit</mat-icon>\r\n                </a>\r\n              </div>\r\n\r\n              <div fxFlex=\"nogrow\">\r\n                <button mat-icon-button (click)=\"delete(item)\">\r\n                  <mat-icon aria-label=\"delete page\">delete</mat-icon>\r\n                </button>\r\n              </div>\r\n              <div fxFlex=\"nogrow\">\r\n                <a mat-icon-button [routerLink]=\"['/page' , item.name]\">\r\n                  <mat-icon aria-label=\"edit page\">remove_red_eye</mat-icon>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n    <div fxLayout=\"column\" class=\"sticky-action\">\r\n      <a color=\"primary\" mat-mini-fab routerLink=\"../upsert\">\r\n        <mat-icon>add</mat-icon>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: ["mat-card.link{padding:25px 15px;margin:.5%;box-sizing:border-box}"]
            }] }
];
/** @nocollapse */
PagesManagementComponent.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /** @type {?} */
    PagesManagementComponent.prototype.pages$;
    /** @type {?} */
    PagesManagementComponent.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [
    {
        path: "pages",
        component: RootComponent,
        children: [
            {
                path: "management",
                component: PagesManagementComponent
            },
            {
                path: "upsert",
                component: UpsertComponent
            },
            {
                path: "upsert/:name",
                component: UpsertComponent
            }
        ]
    },
    {
        path: "page/:name",
        component: PageViewComponent
    }
];
/** @type {?} */
const RoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const PagesActionTypes = {
    UPSERT: "[PAGE][DB] UPSERT",
    DELETE: "[PAGE][DB] DELETE",
};
class UpsertPageAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = PagesActionTypes.UPSERT;
    }
}
if (false) {
    /** @type {?} */
    UpsertPageAction.prototype.type;
    /** @type {?} */
    UpsertPageAction.prototype.payload;
}
class DeletePageAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = PagesActionTypes.DELETE;
    }
}
if (false) {
    /** @type {?} */
    DeletePageAction.prototype.type;
    /** @type {?} */
    DeletePageAction.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageDbEffects {
    /**
     * @param {?} actions$
     */
    constructor(actions$) {
        this.actions$ = actions$;
        this.Upsert$ = this.actions$.pipe(ofType("[PAGE][API][GetPage] succeed" /* SUCCEED */), pluck("payload"), map((/**
         * @param {?} page
         * @return {?}
         */
        (page) => new UpsertPageAction([page]))));
        this.UpsertMany$ = this.actions$.pipe(ofType("[GET_PAGES][API][GetPages] succeed" /* SUCCEED */), pluck("payload"), map((/**
         * @param {?} pages
         * @return {?}
         */
        (pages) => new UpsertPageAction(pages))));
        this.delete$ = this.actions$.pipe(ofType("[PAGE][API][DELETE] succeed" /* SUCCEED */), pluck("payload"), map((/**
         * @param {?} page
         * @return {?}
         */
        (page) => new DeletePageAction(page))));
    }
}
PageDbEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PageDbEffects.ctorParameters = () => [
    { type: Actions }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], PageDbEffects.prototype, "Upsert$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], PageDbEffects.prototype, "UpsertMany$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], PageDbEffects.prototype, "delete$", void 0);
if (false) {
    /** @type {?} */
    PageDbEffects.prototype.Upsert$;
    /** @type {?} */
    PageDbEffects.prototype.UpsertMany$;
    /** @type {?} */
    PageDbEffects.prototype.delete$;
    /**
     * @type {?}
     * @private
     */
    PageDbEffects.prototype.actions$;
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
        case PagesActionTypes.UPSERT:
            debugger;
            _data = state.data.concat();
            /** @type {?} */
            let newPages = action.payload;
            if (!(newPages instanceof Array)) {
                newPages = [newPages];
                console.error("'PagesActionTypes.UPSERT' does not get array payload");
            }
            newPages.forEach((/**
             * @param {?} newPage
             * @return {?}
             */
            (newPage) => {
                /** @type {?} */
                const existedPageIndex = _data.findIndex((/**
                 * @param {?} w
                 * @return {?}
                 */
                (w) => w._id == newPage._id));
                if (existedPageIndex > -1) {
                    _data.splice(existedPageIndex, 1, newPage);
                }
                else {
                    _data.push(newPage);
                }
            }));
            return Object.assign({}, state, { data: _data });
        case PagesActionTypes.DELETE:
            debugger;
            _data = state.data.concat();
            /** @type {?} */
            const pageIndex = state.data.findIndex((/**
             * @param {?} w
             * @return {?}
             */
            (w) => w._id == action.payload._id));
            _data.splice(pageIndex, 1);
            return Object.assign({}, state, { data: _data });
        default:
            return state;
    }
}
/** @type {?} */
const getPages = (/**
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
function PageState() { }
if (false) {
    /** @type {?} */
    PageState.prototype.db;
}
/** @type {?} */
const PageReducer = {
    db: Reducer
};
/**
 * @record
 */
function AppState() { }
if (false) {
    /** @type {?} */
    AppState.prototype.pages;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetPageApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[PAGE][API][GetPage] start" /* START */), map((/**
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
        res => new GetPageSucceedAction(res))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => of(new GetPageFailedAction(err)))));
    }
}
GetPageApiEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GetPageApiEffects.ctorParameters = () => [
    { type: Actions },
    { type: PageService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], GetPageApiEffects.prototype, "start$", void 0);
if (false) {
    /** @type {?} */
    GetPageApiEffects.prototype.start$;
    /**
     * @type {?}
     * @private
     */
    GetPageApiEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    GetPageApiEffects.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetPagesApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[GET_PAGES][API][GetPages] start" /* START */), switchMap((/**
         * @return {?}
         */
        () => this.service
            .getPages()
            .pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => new GetPagesSucceedAction(res))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => of(new GetPagesFailedAction(err))))))));
    }
}
GetPagesApiEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GetPagesApiEffects.ctorParameters = () => [
    { type: Actions },
    { type: PageService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], GetPagesApiEffects.prototype, "start$", void 0);
if (false) {
    /** @type {?} */
    GetPagesApiEffects.prototype.start$;
    /**
     * @type {?}
     * @private
     */
    GetPagesApiEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    GetPagesApiEffects.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpsertPageApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[UPSERT_PAGE][API][UpsertPage] start" /* START */), map((/**
         * @param {?} action
         * @return {?}
         */
        action => action.payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.service.upsert(payload))), map((/**
         * @param {?} res
         * @return {?}
         */
        res => new UpsertPageSucceedAction(res))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => of(new UpsertPageFailedAction(err)))));
    }
}
UpsertPageApiEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UpsertPageApiEffects.ctorParameters = () => [
    { type: Actions },
    { type: PageService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], UpsertPageApiEffects.prototype, "start$", void 0);
if (false) {
    /** @type {?} */
    UpsertPageApiEffects.prototype.start$;
    /**
     * @type {?}
     * @private
     */
    UpsertPageApiEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    UpsertPageApiEffects.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DeletePageApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[PAGE][API][DELETE] start" /* START */), map((/**
         * @param {?} action
         * @return {?}
         */
        action => action.payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.service.delete(payload))), map((/**
         * @param {?} res
         * @return {?}
         */
        res => new DeletePageSucceedAction(res))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => of(new DeletePageFailedAction(err)))));
    }
}
DeletePageApiEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DeletePageApiEffects.ctorParameters = () => [
    { type: Actions },
    { type: PageService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DeletePageApiEffects.prototype, "start$", void 0);
if (false) {
    /** @type {?} */
    DeletePageApiEffects.prototype.start$;
    /**
     * @type {?}
     * @private
     */
    DeletePageApiEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DeletePageApiEffects.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgsPageModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: NgsPageRootModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, PageConfigurationService, PageService]
        };
    }
}
NgsPageModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    MatInputModule,
                    MatFormFieldModule,
                    MatCardModule,
                    MatButtonModule,
                    MatIconModule,
                    MatDividerModule,
                    FlexLayoutModule,
                    FormsModule,
                    ReactiveFormsModule,
                    NgsGridModule
                ],
                declarations: [PageViewComponent, PagesManagementComponent, RootComponent, UpsertComponent],
                exports: []
            },] }
];
class NgsPageRootModule {
    constructor() {
        ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
        ((/** @type {?} */ (window))).___starter.page = "8.0.10";
    }
}
NgsPageRootModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NgsPageModule,
                    RoutingModule,
                    StoreModule.forFeature("pages", PageReducer),
                    EffectsModule.forFeature([
                        PageDbEffects,
                        GetPageApiEffects,
                        GetPagesApiEffects,
                        UpsertPageApiEffects,
                        DeletePageApiEffects
                    ])
                ],
                exports: [NgsPageModule]
            },] }
];
/** @nocollapse */
NgsPageRootModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG, NgsPageModule, NgsPageRootModule, PageViewComponent as ɵa, PageReducer as ɵb, PageService as ɵd, PageConfigurationService as ɵe, PagesManagementComponent as ɵf, RootComponent as ɵg, UpsertComponent as ɵh, RoutingModule as ɵi, Reducer as ɵj, PageDbEffects as ɵk, GetPageApiEffects as ɵl, GetPagesApiEffects as ɵn, UpsertPageApiEffects as ɵp, DeletePageApiEffects as ɵr };
//# sourceMappingURL=soushians-page.js.map
