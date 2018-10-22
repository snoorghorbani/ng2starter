import { InjectionToken, Inject, Injectable, Component, ComponentFactoryResolver, ViewContainerRef, NgModule } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { map, filter, tap, take, switchMap, combineLatest, pluck, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserFacadeService } from '@soushians/user';
import { stringTemplate } from '@soushians/shared';
import { Location, CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __decorate, __metadata } from 'tslib';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDividerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgsGridModule } from '@soushians/grid';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    { type: Injectable },
];
/** @nocollapse */
PageConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GetPagesApiModel;
(function (GetPagesApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = {}) {
            Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
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
})(GetPagesApiModel || (GetPagesApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class GetPagesStartAction {
    constructor() {
        this.type = "[GET_PAGES][API][GetPages] start" /* START */;
    }
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
class GetPagesFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GET_PAGES][API][GetPages] failed" /* FAILED */;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GetPageApiModel;
(function (GetPageApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = {}) {
            Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {};
        }
    }
    GetPageApiModel.Request = Request;
    class Response {
        constructor() { }
    }
    GetPageApiModel.Response = Response;
})(GetPageApiModel || (GetPageApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class GetPageStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][GetPage] start" /* START */;
    }
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
class GetPageFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][GetPage] failed" /* FAILED */;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DeletePageApiModel;
(function (DeletePageApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = {}) {
            Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
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
})(DeletePageApiModel || (DeletePageApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DeletePageStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][DELETE] start" /* START */;
    }
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
class DeletePageFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][DELETE] failed" /* FAILED */;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    class Response {
        constructor() { }
    }
    UpsertPageApiModel.Response = Response;
})(UpsertPageApiModel || (UpsertPageApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class UpsertPageStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_PAGE][API][UpsertPage] start" /* START */;
    }
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
class UpsertPageFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_PAGE][API][UpsertPage] failed" /* FAILED */;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.userId$ = this.userFacadeService.getDisplayName().pipe(filter(i => i != undefined));
    }
    /**
     * @param {?} name
     * @return {?}
     */
    get(name) {
        return this.configurationService.config$.pipe(filter(config => config.endpoints.get !== ""), take(1), combineLatest(this.userId$), switchMap(([config, userId]) => this.http.get(stringTemplate(config.env.frontend_server + config.endpoints.get, { name }))), map((response) => response.Result));
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    delete(_id) {
        return this.configurationService.config$.pipe(filter(config => config.endpoints.delete !== ""), take(1), switchMap(config => this.http.delete(stringTemplate(config.env.frontend_server + config.endpoints.delete, { _id }))), map((response) => response.Result));
    }
    /**
     * @return {?}
     */
    getPages() {
        return this.configurationService.config$.pipe(filter(config => config.endpoints.find != ""), combineLatest(this.userId$), switchMap(([config, userId]) => this.http.get(config.env.frontend_server + config.endpoints.find)), map((response) => response.Result));
    }
    /**
     * @template T
     * @param {?} page
     * @return {?}
     */
    upsert(page) {
        /** @type {?} */
        const model = new UpsertPageApiModel.Request(page);
        return this.configurationService.config$.pipe(filter(config => config.endpoints.upsert != ""), take(1), combineLatest(this.userId$), switchMap(([config, userId]) => this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody())), map((response) => response.Result), tap(() => this._location.back()));
    }
    /**
     * @param {?} name
     * @return {?}
     */
    selectByName(name) {
        /** @type {?} */
        const subject = new BehaviorSubject(undefined);
        this.store
            .select(state => state.pages.db.data)
            .pipe(filter(pages => pages != null), map(pages => pages.find(page => page.name == name)), tap(page => {
            if (page == null) {
                debugger;
                this.store.dispatch(new GetPageStartAction(name));
            }
        }))
            .subscribe(page => subject.next(page));
        return subject.asObservable();
    }
}
PageService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
PageService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: PageConfigurationService },
    { type: Location },
    { type: UserFacadeService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.page$ = this.route.params.pipe(pluck("name"), switchMap((name) => this.service.selectByName(name)), filter((page) => page != undefined));
    }
}
PageViewComponent.decorators = [
    { type: Component, args: [{
                template: `<div *ngIf="(page$ | async)?.grid">
    <ngs-grid [oid]="(page$ | async)?.grid"></ngs-grid>
</div>`
            },] },
];
/** @nocollapse */
PageViewComponent.ctorParameters = () => [
    { type: Store },
    { type: PageService },
    { type: ActivatedRoute },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class RootComponent {
}
RootComponent.decorators = [
    { type: Component, args: [{
                selector: "page-root",
                template: "<router-outlet></router-outlet>"
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.page$ = this.route.params.pipe(pluck("name"), filter((name) => name != undefined), switchMap((name) => this.service.selectByName(name)), filter((page) => page != undefined));
    }
    /**
     * @return {?}
     */
    _update_formgroup_base_on_page() {
        this.page$.subscribe((page) => {
            this.formGroup.patchValue(page);
        });
    }
}
UpsertComponent.decorators = [
    { type: Component, args: [{
                template: `<div fxLayout="row" fxLayoutAlign="center center" class="main-container">
    <mat-card fxFlex="50">
        <mat-card-header>
            <mat-card-title fxLayout="row" fxLayoutGap="5px">
                <mat-icon>receipt</mat-icon>
                <span>ایجاد صفحه جدید</span>
            </mat-card-title>
            <mat-card-subtitle fxLayout="row" fxLayoutAlign="space-between center">
                <span>
                    نام صفحه را وارد نمایید و به مرحله بعد بروید ...
                </span>
            </mat-card-subtitle>
        </mat-card-header>

        <mat-card-content [formGroup]="formGroup">
            <mat-form-field>
                <input type="text" matInput placeholder="نام" formControlName="name">
            </mat-form-field>
        </mat-card-content>
        <mat-card-actions align="end">
            <button mat-raised-button color="primary" (click)="upsert()">ثبت</button>
        </mat-card-actions>
    </mat-card>
</div>`
            },] },
];
/** @nocollapse */
UpsertComponent.ctorParameters = () => [
    { type: Store },
    { type: ActivatedRoute },
    { type: PageService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PagesManagementComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.pages$ = this.store.select((state) => state.pages.db.data);
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
                template: `<div fxLayout="row" fxLayoutAlign="center" fxLayoutGap="25px" class="main-container">

  <div class="content-action">
    <mat-card class="with-sticky-action">
      <mat-card-header>
        <mat-card-title fxLayout="row" fxLayoutGap="5px">
          <mat-icon>list_alt</mat-icon>
          <span>مدیریت صغحات</span>
        </mat-card-title>
        <mat-card-subtitle fxLayout="row" fxLayoutAlign="space-between center">
          <span>
            در این قسمت می‌توانید صغحات با گریدهای دلخواه خود را ایجاد نمایید ...
          </span>
        </mat-card-subtitle>
      </mat-card-header>

      <div fxLayout="column" fxLayoutAlign="center" fxLayoutGap="25px">
        <div fxFlex="100" fxLayout="row wrap" fxLayoutAlign="start center">
          <mat-card fxFlex.gt-lg="24" fxFlex.lg="32" fxFlex.md="48" fxFlex.sm="100" fxFlex.xs="100" class="link" *ngFor="let item of (pages$ | async)"
            fxFlex="32" fxLayout="row" fxLayoutAlign="center center">
            <div fxFlex fxLayoutAlign="start center">
              <h3> {{item.name}}</h3>
            </div>
            <div fxFlex fxLayoutAlign="center center">
              {{item.type}}
            </div>
            <div fxLayout="row">
              <div fxFlex="nogrow">
                <a mat-icon-button [routerLink]="['../upsert' , item.name]">
                  <mat-icon aria-label="edit page">edit</mat-icon>
                </a>
              </div>

              <div fxFlex="nogrow">
                <button mat-icon-button (click)="delete(item)">
                  <mat-icon aria-label="delete page">delete</mat-icon>
                </button>
              </div>
              <div fxFlex="nogrow">
                <a mat-icon-button [routerLink]="['/page' , item.name]">
                  <mat-icon aria-label="edit page">remove_red_eye</mat-icon>
                </a>
              </div>
            </div>
          </mat-card>
        </div>
      </div>
    </mat-card>
    <div fxLayout="column" class="sticky-action">
      <a color="primary" mat-mini-fab routerLink="../upsert">
        <mat-icon>add</mat-icon>
      </a>
    </div>
  </div>
</div>`,
                styles: [`mat-card.link{padding:25px 15px;margin:.5%;box-sizing:border-box}`]
            },] },
];
/** @nocollapse */
PagesManagementComponent.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
class DeletePageAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = PagesActionTypes.DELETE;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PageDbEffects {
    /**
     * @param {?} actions$
     */
    constructor(actions$) {
        this.actions$ = actions$;
        this.Upsert$ = this.actions$
            .ofType("[PAGE][API][GetPage] succeed" /* SUCCEED */)
            .pipe(pluck("payload"), map((page) => new UpsertPageAction([page])));
        this.UpsertMany$ = this.actions$
            .ofType("[GET_PAGES][API][GetPages] succeed" /* SUCCEED */)
            .pipe(pluck("payload"), map((pages) => new UpsertPageAction(pages)));
        this.delete$ = this.actions$
            .ofType("[PAGE][API][DELETE] succeed" /* SUCCEED */)
            .pipe(pluck("payload"), map((page) => new DeletePageAction(page)));
    }
}
PageDbEffects.decorators = [
    { type: Injectable },
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
            newPages.forEach((newPage) => {
                /** @type {?} */
                const existedPageIndex = _data.findIndex((w) => w._id == newPage._id);
                if (existedPageIndex > -1) {
                    _data.splice(existedPageIndex, 1, newPage);
                }
                else {
                    _data.push(newPage);
                }
            });
            return Object.assign({}, state, { data: _data });
        case PagesActionTypes.DELETE:
            debugger;
            _data = state.data.concat();
            /** @type {?} */
            const pageIndex = state.data.findIndex((w) => w._id == action.payload._id);
            _data.splice(pageIndex, 1);
            return Object.assign({}, state, { data: _data });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const PageReducer = {
    db: Reducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class GetPageApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[PAGE][API][GetPage] start" /* START */)
            .pipe(map((action) => action.payload), switchMap((payload) => this.service.get(payload)), map((res) => new GetPageSucceedAction(res)), catchError((err) => of(new GetPageFailedAction(err))));
    }
}
GetPageApiEffects.decorators = [
    { type: Injectable },
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class GetPagesApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[GET_PAGES][API][GetPages] start" /* START */)
            .pipe(switchMap(() => this.service
            .getPages()
            .pipe(map((res) => new GetPagesSucceedAction(res)), catchError((err) => of(new GetPagesFailedAction(err))))));
    }
}
GetPagesApiEffects.decorators = [
    { type: Injectable },
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class UpsertPageApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[UPSERT_PAGE][API][UpsertPage] start" /* START */)
            .pipe(map((action) => action.payload), switchMap((payload) => this.service.upsert(payload)), map((res) => new UpsertPageSucceedAction(res)), catchError((err) => of(new UpsertPageFailedAction(err))));
    }
}
UpsertPageApiEffects.decorators = [
    { type: Injectable },
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DeletePageApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[PAGE][API][DELETE] start" /* START */)
            .pipe(map((action) => action.payload), switchMap((payload) => this.service.delete(payload)), map((res) => new DeletePageSucceedAction(res)), catchError((err) => of(new DeletePageFailedAction(err))));
    }
}
DeletePageApiEffects.decorators = [
    { type: Injectable },
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            },] },
];
class NgsPageRootModule {
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
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgsPageModule, NgsPageRootModule, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, PagesManagementComponent as ɵf, RoutingModule as ɵi, PageReducer as ɵb, PageDbEffects as ɵk, Reducer as ɵj, RootComponent as ɵg, DeletePageApiEffects as ɵr, GetPageApiEffects as ɵl, GetPagesApiEffects as ɵn, UpsertPageApiEffects as ɵp, PageConfigurationService as ɵe, PageService as ɵd, UpsertComponent as ɵh, PageViewComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXBhZ2UuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvcGFnZS5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvc2VydmljZXMvcGFnZS1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvc2VydmljZXMvYXBpL2dldC1wYWdlcy9nZXQtcGFnZXMubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvc2VydmljZXMvYXBpL2dldC1wYWdlcy9nZXQtcGFnZXMuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9wYWdlL2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LXBhZ2UvZ2V0LXBhZ2UubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvc2VydmljZXMvYXBpL2dldC1wYWdlL2dldC1wYWdlLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvc2VydmljZXMvYXBpL2RlbGV0ZS1wYWdlL2RlbGV0ZS1wYWdlLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3NlcnZpY2VzL2FwaS9kZWxldGUtcGFnZS9kZWxldGUtcGFnZS5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL21vZGVscy9wYWdlLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3NlcnZpY2VzL2FwaS91cHNlcnQtcGFnZS91cHNlcnQtcGFnZS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9wYWdlL2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LXBhZ2UvdXBzZXJ0LXBhZ2UuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9wYWdlL2xpYi9zZXJ2aWNlcy9wYWdlLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvdmlldy9wYWdlLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3Jvb3Qvcm9vdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvdXBzZXJ0L3Vwc2VydC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvbWFuZ2VtZW50L3BhZ2UtbWFuYWdlbWVudC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvcGFnZS1yb3V0aW5nLm1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9wYWdlL2xpYi9yb290L3BhZ2VzLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvcm9vdC9wYWdlcy5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3Jvb3QvcGFnZXMucmVkdWNlcnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvcGFnZS5yZWR1Y2VyLnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3NlcnZpY2VzL2FwaS9nZXQtcGFnZS9nZXQtcGFnZS5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3NlcnZpY2VzL2FwaS9nZXQtcGFnZXMvZ2V0LXBhZ2VzLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvc2VydmljZXMvYXBpL3Vwc2VydC1wYWdlL3Vwc2VydC1wYWdlLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvc2VydmljZXMvYXBpL2RlbGV0ZS1wYWdlL2RlbGV0ZS1wYWdlLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvcGFnZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYWdlTW9kdWxlQ29uZmlnIHtcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcblx0fTtcclxuXHRlbmRwb2ludHM/OiB7XHJcblx0XHRnZXQ6IHN0cmluZztcclxuXHRcdGRlbGV0ZTogc3RyaW5nO1xyXG5cdFx0ZmluZDogc3RyaW5nO1xyXG5cdFx0dXBzZXJ0OiBzdHJpbmc7XHJcblx0fTtcclxufVxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBQYWdlTW9kdWxlQ29uZmlnID0ge1xyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2UsXHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IFwiZnJvbnRlbmRfc2VydmVyL2RpZC9ub3Qvc2V0XCJcclxuXHR9LFxyXG5cdGVuZHBvaW50czoge1xyXG5cdFx0dXBzZXJ0OiBcIi9hcGkvcGFnZVwiLFxyXG5cdFx0ZGVsZXRlOiBcIi9hcGkvcGFnZS8ke21vZGVsLl9pZH1cIixcclxuXHRcdGZpbmQ6IFwiL2FwaS9wYWdlXCIsXHJcblx0XHRnZXQ6IFwiL2FwaS9wYWdlLyR7bW9kZWwubmFtZX1cIlxyXG5cdH1cclxufTtcclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48UGFnZU1vZHVsZUNvbmZpZz4oXCJQYWdlTW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUGFnZU1vZHVsZUNvbmZpZywgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4uL3BhZ2UuY29uZmlnXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3BhZ2UucmVkdWNlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGFnZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IFBhZ2VNb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KE1PRFVMRV9ERUZBVUxUX0NPTkZJRyk7XHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0Ly8gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0UGFnZU1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKChwYWdlQ29uZmlnKSA9PiB7XHJcblx0XHQvLyBcdGlmICghcGFnZUNvbmZpZykge1xyXG5cdFx0Ly8gXHRcdHJldHVybjtcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gXHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHBhZ2VDb25maWcuQ29uZmlnKTtcclxuXHRcdC8vIFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgR2V0UGFnZXNBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlID0ge30pIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKChrZXkpID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge307XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBQYWdlTW9kZWxbXTtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRQYWdlc0FwaU1vZGVsIH0gZnJvbSBcIi4vZ2V0LXBhZ2VzLm1vZGVsXCI7XHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gR0VUX1BBR0VTX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltHRVRfUEFHRVNdW0FQSV1bR2V0UGFnZXNdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW0dFVF9QQUdFU11bQVBJXVtHZXRQYWdlc10gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW0dFVF9QQUdFU11bQVBJXVtHZXRQYWdlc10gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldFBhZ2VzU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfUEFHRVNfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRQYWdlc1N1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfUEFHRVNfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhZ2VNb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRQYWdlc0ZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9QQUdFU19BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldFBhZ2VzQWN0aW9ucyA9IEdldFBhZ2VzU3RhcnRBY3Rpb24gfCBHZXRQYWdlc1N1Y2NlZWRBY3Rpb24gfCBHZXRQYWdlc0ZhaWxlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEdldFBhZ2VBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0bmFtZTogc3RyaW5nO1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlID0ge30pIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKChrZXkpID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge307XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBQYWdlTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0UGFnZUFwaU1vZGVsIH0gZnJvbSBcIi4vZ2V0LXBhZ2UubW9kZWxcIjtcclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBHRVRfUEFHRV9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbUEFHRV1bQVBJXVtHZXRQYWdlXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltQQUdFXVtBUEldW0dldFBhZ2VdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltQQUdFXVtBUEldW0dldFBhZ2VdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRQYWdlU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfUEFHRV9BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UGFnZVN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfUEFHRV9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRQYWdlRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1BBR0VfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHZXRQYWdlQWN0aW9ucyA9IEdldFBhZ2VTdGFydEFjdGlvbiB8IEdldFBhZ2VTdWNjZWVkQWN0aW9uIHwgR2V0UGFnZUZhaWxlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIERlbGV0ZVBhZ2VBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlID0ge30pIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKChrZXkpID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge307XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBQYWdlTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBERUxFVEVfUEFHRV9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbUEFHRV1bQVBJXVtERUxFVEVdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW1BBR0VdW0FQSV1bREVMRVRFXSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbUEFHRV1bQVBJXVtERUxFVEVdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZWxldGVQYWdlU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfUEFHRV9BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGVsZXRlUGFnZVN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfUEFHRV9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVQYWdlRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gREVMRVRFX1BBR0VfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBEZWxldGVQYWdlQWN0aW9ucyA9IERlbGV0ZVBhZ2VTdGFydEFjdGlvbiB8IERlbGV0ZVBhZ2VTdWNjZWVkQWN0aW9uIHwgRGVsZXRlUGFnZUZhaWxlZEFjdGlvbjtcclxuIiwiZXhwb3J0IGNsYXNzIFBhZ2VNb2RlbCB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdGdyaWQ6IHN0cmluZztcclxuXHRjb25zdHJ1Y3Rvcih7IF9pZCwgbmFtZSwgZ3JpZCB9OiB7IF9pZD86IHN0cmluZzsgbmFtZT86IHN0cmluZzsgZ3JpZD86IHN0cmluZyB9ID0ge30pIHtcclxuXHRcdHRoaXMuX2lkID0gX2lkO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZSB8fCBcIlwiO1xyXG5cdFx0dGhpcy5ncmlkID0gZ3JpZCB8fCBcIlwiO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgVXBzZXJ0UGFnZUFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRwYWdlOiBQYWdlTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcihwYWdlID0ge30pIHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRoaXMucGFnZSA9IG5ldyBQYWdlTW9kZWwocGFnZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnBhZ2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBQYWdlTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0UGFnZUFwaU1vZGVsIH0gZnJvbSBcIi4vdXBzZXJ0LXBhZ2UubW9kZWxcIjtcclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBVUFNFUlRfUEFHRV9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbVVBTRVJUX1BBR0VdW0FQSV1bVXBzZXJ0UGFnZV0gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbVVBTRVJUX1BBR0VdW0FQSV1bVXBzZXJ0UGFnZV0gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW1VQU0VSVF9QQUdFXVtBUEldW1Vwc2VydFBhZ2VdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRQYWdlU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfUEFHRV9BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhZ2VNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0UGFnZVN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfUEFHRV9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRQYWdlRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX1BBR0VfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBVcHNlcnRQYWdlQWN0aW9ucyA9IFVwc2VydFBhZ2VTdGFydEFjdGlvbiB8IFVwc2VydFBhZ2VTdWNjZWVkQWN0aW9uIHwgVXBzZXJ0UGFnZUZhaWxlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IG1hcCwgZmlsdGVyLCB0YXAsIHRha2UsIHN3aXRjaE1hcCwgY29tYmluZUxhdGVzdCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyRmFjYWRlU2VydmljZSB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3BhZ2UucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBQYWdlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9wYWdlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgR2V0UGFnZXNBcGlNb2RlbCwgR2V0UGFnZVN0YXJ0QWN0aW9uLCBVcHNlcnRQYWdlQXBpTW9kZWwsIERlbGV0ZVBhZ2VBcGlNb2RlbCB9IGZyb20gXCIuL2FwaVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBhZ2VTZXJ2aWNlIHtcclxuXHR1c2VySWQkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBQYWdlQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb24sXHJcblx0XHRwcml2YXRlIHVzZXJGYWNhZGVTZXJ2aWNlOiBVc2VyRmFjYWRlU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy51c2VySWQkID0gdGhpcy51c2VyRmFjYWRlU2VydmljZS5nZXREaXNwbGF5TmFtZSgpLnBpcGUoZmlsdGVyKGkgPT4gaSAhPSB1bmRlZmluZWQpKTtcclxuXHR9XHJcblxyXG5cdGdldChuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBhZ2VNb2RlbD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMuZ2V0ICE9PSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0Y29tYmluZUxhdGVzdCh0aGlzLnVzZXJJZCQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKFsgY29uZmlnLCB1c2VySWQgXSkgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAuZ2V0KHN0cmluZ1RlbXBsYXRlKGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5nZXQsIHsgbmFtZSB9KSlcclxuXHRcdFx0KSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogVXBzZXJ0UGFnZUFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlKF9pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQYWdlTW9kZWw+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLmRlbGV0ZSAhPT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdHN3aXRjaE1hcChjb25maWcgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAuZGVsZXRlKHN0cmluZ1RlbXBsYXRlKGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5kZWxldGUsIHsgX2lkIH0pKVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBEZWxldGVQYWdlQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRnZXRQYWdlcygpOiBPYnNlcnZhYmxlPFBhZ2VNb2RlbFtdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy5maW5kICE9IFwiXCIpLFxyXG5cdFx0XHRjb21iaW5lTGF0ZXN0KHRoaXMudXNlcklkJCksXHJcblx0XHRcdHN3aXRjaE1hcCgoWyBjb25maWcsIHVzZXJJZCBdKSA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5maW5kKSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IEdldFBhZ2VzQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cdHVwc2VydDxUPihwYWdlOiBVcHNlcnRQYWdlQXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8UGFnZU1vZGVsPiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBVcHNlcnRQYWdlQXBpTW9kZWwuUmVxdWVzdChwYWdlKTtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLnVwc2VydCAhPSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0Y29tYmluZUxhdGVzdCh0aGlzLnVzZXJJZCQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKFsgY29uZmlnLCB1c2VySWQgXSkgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAucG9zdChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMudXBzZXJ0LCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpKVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBVcHNlcnRQYWdlQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdCksXHJcblx0XHRcdHRhcCgoKSA9PiB0aGlzLl9sb2NhdGlvbi5iYWNrKCkpXHJcblx0XHQpO1xyXG5cdH1cclxuXHQvLyBkZWxldGUobmFtZTogc3RyaW5nKSB7XHJcblx0Ly8gXHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0Ly8gXHRcdC5maWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5kZWxldGVGb3JtICE9IFwiXCIpXHJcblx0Ly8gXHRcdC5zd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW5kcG9pbnRzLmRlbGV0ZUZvcm0pKTtcclxuXHQvLyB9XHJcblx0c2VsZWN0QnlOYW1lKG5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8UGFnZU1vZGVsPiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQYWdlTW9kZWw+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUucGFnZXMuZGIuZGF0YSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0ZmlsdGVyKHBhZ2VzID0+IHBhZ2VzICE9IG51bGwpLFxyXG5cdFx0XHRcdG1hcChwYWdlcyA9PiBwYWdlcy5maW5kKHBhZ2UgPT4gcGFnZS5uYW1lID09IG5hbWUpKSxcclxuXHRcdFx0XHR0YXAocGFnZSA9PiB7XHJcblx0XHRcdFx0XHRpZiAocGFnZSA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRQYWdlU3RhcnRBY3Rpb24obmFtZSkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZShwYWdlID0+IHN1YmplY3QubmV4dChwYWdlKSk7XHJcblx0XHRyZXR1cm4gc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdENvbXBvbmVudFJlZixcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHREaXJlY3RpdmUsXHJcblx0SW5wdXRcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBwbHVjaywgZmlsdGVyLCBzd2l0Y2hNYXAsIG1hcCwgc3RhcnRXaXRoIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcGFnZS5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3BhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQYWdlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcGFnZS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCIocGFnZSQgfCBhc3luYyk/LmdyaWRcIj5cclxuICAgIDxuZ3MtZ3JpZCBbb2lkXT1cIihwYWdlJCB8IGFzeW5jKT8uZ3JpZFwiPjwvbmdzLWdyaWQ+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRwYWdlJDogT2JzZXJ2YWJsZTxQYWdlTW9kZWw+O1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IFBhZ2VTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0XHRwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZlxyXG5cdCkge31cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuX3NlbGVjdFBhZ2UoKTtcclxuXHR9XHJcblx0X3NlbGVjdFBhZ2UoKSB7XHJcblx0XHR0aGlzLnBhZ2UkID0gdGhpcy5yb3V0ZS5wYXJhbXMucGlwZShcclxuXHRcdFx0cGx1Y2soXCJuYW1lXCIpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKG5hbWU6IHN0cmluZykgPT4gdGhpcy5zZXJ2aWNlLnNlbGVjdEJ5TmFtZShuYW1lKSksXHJcblx0XHRcdGZpbHRlcigocGFnZSkgPT4gcGFnZSAhPSB1bmRlZmluZWQpXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwicGFnZS1yb290XCIsXHJcblx0dGVtcGxhdGU6IFwiPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290Q29tcG9uZW50IHt9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydFBhZ2VTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcGFnZS5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuaW1wb3J0IHsgcGx1Y2ssIHN3aXRjaE1hcCwgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3BhZ2Uuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiBjbGFzcz1cIm1haW4tY29udGFpbmVyXCI+XHJcbiAgICA8bWF0LWNhcmQgZnhGbGV4PVwiNTBcIj5cclxuICAgICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgICAgICA8bWF0LWNhcmQtdGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjVweFwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1pY29uPnJlY2VpcHQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+w5jCp8ObwozDmMKsw5jCp8OYwq8gw5jCtcOZwoHDmMKtw5nChyDDmMKsw5jCr8ObwozDmMKvPC9zcGFuPlxyXG4gICAgICAgICAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgICA8bWF0LWNhcmQtc3VidGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIMOZwobDmMKnw5nChSDDmMK1w5nCgcOYwq3DmcKHIMOYwrHDmMKnIMOZwojDmMKnw5jCscOYwq8gw5nChsOZwoXDmMKnw5vCjMObwozDmMKvIMOZwoggw5jCqMOZwocgw5nChcOYwrHDmMKtw5nChMOZwocgw5jCqMOYwrnDmMKvIMOYwqjDmMKxw5nCiMObwozDmMKvIC4uLlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L21hdC1jYXJkLXN1YnRpdGxlPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG5cclxuICAgICAgICA8bWF0LWNhcmQtY29udGVudCBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOZwobDmMKnw5nChVwiIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPG1hdC1jYXJkLWFjdGlvbnMgYWxpZ249XCJlbmRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwidXBzZXJ0KClcIj7DmMKrw5jCqMOYwqo8L2J1dHRvbj5cclxuICAgICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICA8L21hdC1jYXJkPlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdHBhZ2UkOiBPYnNlcnZhYmxlPFBhZ2VNb2RlbD47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBzZXJ2aWNlOiBQYWdlU2VydmljZSkge1xyXG5cdFx0dGhpcy5faW5pdF9mb3JtZ3JvdXAoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHZpZXcgbWV0aG9kc1xyXG5cdCAqL1xyXG5cdHVwc2VydCgpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0Y29uc3QgcGFnZSA9IHtcclxuXHRcdFx0Li4udGhpcy5mb3JtR3JvdXAudmFsdWVcclxuXHRcdH07XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRQYWdlU3RhcnRBY3Rpb24ocGFnZSkpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuX3NlbGVjdF9wYWdlKCk7XHJcblx0XHR0aGlzLl91cGRhdGVfZm9ybWdyb3VwX2Jhc2Vfb25fcGFnZSgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogcHJpdmF0ZSBtZXRob2RzXHJcblx0ICovXHJcblx0X2luaXRfZm9ybWdyb3VwKCkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0X2lkOiBuZXcgRm9ybUNvbnRyb2woXCJcIiksXHJcblx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiKSxcclxuXHRcdFx0Z3JpZDogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdF9zZWxlY3RfcGFnZSgpIHtcclxuXHRcdHRoaXMucGFnZSQgPSB0aGlzLnJvdXRlLnBhcmFtcy5waXBlKFxyXG5cdFx0XHRwbHVjayhcIm5hbWVcIiksXHJcblx0XHRcdGZpbHRlcigobmFtZSkgPT4gbmFtZSAhPSB1bmRlZmluZWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKG5hbWU6IHN0cmluZykgPT4gdGhpcy5zZXJ2aWNlLnNlbGVjdEJ5TmFtZShuYW1lKSksXHJcblx0XHRcdGZpbHRlcigocGFnZSkgPT4gcGFnZSAhPSB1bmRlZmluZWQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHRfdXBkYXRlX2Zvcm1ncm91cF9iYXNlX29uX3BhZ2UoKSB7XHJcblx0XHR0aGlzLnBhZ2UkLnN1YnNjcmliZSgocGFnZSkgPT4ge1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHBhZ2UpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9wYWdlLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR2V0UGFnZXNTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvZ2V0LXBhZ2VzL2dldC1wYWdlcy5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IERlbGV0ZVBhZ2VTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dEdhcD1cIjI1cHhcIiBjbGFzcz1cIm1haW4tY29udGFpbmVyXCI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50LWFjdGlvblwiPlxyXG4gICAgPG1hdC1jYXJkIGNsYXNzPVwid2l0aC1zdGlja3ktYWN0aW9uXCI+XHJcbiAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCI1cHhcIj5cclxuICAgICAgICAgIDxtYXQtaWNvbj5saXN0X2FsdDwvbWF0LWljb24+XHJcbiAgICAgICAgICA8c3Bhbj7DmcKFw5jCr8ObwozDmMKxw5vCjMOYwqogw5jCtcOYwrrDmMKtw5jCp8OYwqo8L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8bWF0LWNhcmQtc3VidGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICDDmMKvw5jCsSDDmMKnw5vCjMOZwoYgw5nCgsOYwrPDmcKFw5jCqiDDmcKFw5vCjMOiwoDCjMOYwqrDmcKIw5jCp8OZwobDm8KMw5jCryDDmMK1w5jCusOYwq3DmMKnw5jCqiDDmMKow5jCpyDDmsKvw5jCscObwozDmMKvw5nCh8OYwqfDm8KMIMOYwq/DmcKEw5jCrsOZwojDmMKnw5nChyDDmMKuw5nCiMOYwq8gw5jCscOYwqcgw5jCp8ObwozDmMKsw5jCp8OYwq8gw5nChsOZwoXDmMKnw5vCjMObwozDmMKvIC4uLlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtc3VidGl0bGU+XHJcbiAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG5cclxuICAgICAgPGRpdiBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEFsaWduPVwic3RhcnQgY2VudGVyXCI+XHJcbiAgICAgICAgICA8bWF0LWNhcmQgZnhGbGV4Lmd0LWxnPVwiMjRcIiBmeEZsZXgubGc9XCIzMlwiIGZ4RmxleC5tZD1cIjQ4XCIgZnhGbGV4LnNtPVwiMTAwXCIgZnhGbGV4LnhzPVwiMTAwXCIgY2xhc3M9XCJsaW5rXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgKHBhZ2VzJCB8IGFzeW5jKVwiXHJcbiAgICAgICAgICAgIGZ4RmxleD1cIjMyXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleCBmeExheW91dEFsaWduPVwic3RhcnQgY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGgzPiB7e2l0ZW0ubmFtZX19PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAge3tpdGVtLnR5cGV9fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBmeExheW91dD1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBtYXQtaWNvbi1idXR0b24gW3JvdXRlckxpbmtdPVwiWycuLi91cHNlcnQnICwgaXRlbS5uYW1lXVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cImVkaXQgcGFnZVwiPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImRlbGV0ZShpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cImRlbGV0ZSBwYWdlXCI+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBtYXQtaWNvbi1idXR0b24gW3JvdXRlckxpbmtdPVwiWycvcGFnZScgLCBpdGVtLm5hbWVdXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiZWRpdCBwYWdlXCI+cmVtb3ZlX3JlZF9leWU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbWF0LWNhcmQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBjbGFzcz1cInN0aWNreS1hY3Rpb25cIj5cclxuICAgICAgPGEgY29sb3I9XCJwcmltYXJ5XCIgbWF0LW1pbmktZmFiIHJvdXRlckxpbms9XCIuLi91cHNlcnRcIj5cclxuICAgICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYG1hdC1jYXJkLmxpbmt7cGFkZGluZzoyNXB4IDE1cHg7bWFyZ2luOi41JTtib3gtc2l6aW5nOmJvcmRlci1ib3h9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VzTWFuYWdlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0cGFnZXMkOiBPYnNlcnZhYmxlPFBhZ2VNb2RlbFtdPjtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy5wYWdlcyQgPSB0aGlzLnN0b3JlLnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLnBhZ2VzLmRiLmRhdGEpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFBhZ2VzU3RhcnRBY3Rpb24oKSk7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIHZpZXcgbWV0aG9kc1xyXG5cdCAqL1xyXG5cdGRlbGV0ZShwYWdlOiBQYWdlTW9kZWwpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERlbGV0ZVBhZ2VTdGFydEFjdGlvbihwYWdlLl9pZCkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvcGFnZS12aWV3LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSb290Q29tcG9uZW50IH0gZnJvbSBcIi4vcm9vdC9yb290LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVcHNlcnRDb21wb25lbnQgfSBmcm9tIFwiLi91cHNlcnQvdXBzZXJ0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQYWdlc01hbmFnZW1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9tYW5nZW1lbnQvcGFnZS1tYW5hZ2VtZW50LmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogXCJwYWdlc1wiLFxyXG5cdFx0Y29tcG9uZW50OiBSb290Q29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwibWFuYWdlbWVudFwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogUGFnZXNNYW5hZ2VtZW50Q29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInVwc2VydFwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogVXBzZXJ0Q29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInVwc2VydC86bmFtZVwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogVXBzZXJ0Q29tcG9uZW50XHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6IFwicGFnZS86bmFtZVwiLFxyXG5cdFx0Y29tcG9uZW50OiBQYWdlVmlld0NvbXBvbmVudFxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBQYWdlc0FjdGlvblR5cGVzIHtcclxuXHRVUFNFUlQgPSBcIltQQUdFXVtEQl0gVVBTRVJUXCIsXHJcblx0REVMRVRFID0gXCJbUEFHRV1bREJdIERFTEVURVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRQYWdlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUGFnZXNBY3Rpb25UeXBlcy5VUFNFUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhZ2VNb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVQYWdlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUGFnZXNBY3Rpb25UeXBlcy5ERUxFVEU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhZ2VNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUGFnZXNBY3Rpb25zID0gVXBzZXJ0UGFnZUFjdGlvbiB8IERlbGV0ZVBhZ2VBY3Rpb247XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHBsdWNrIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBHRVRfUEFHRV9BQ1RJT05fVFlQRVMsIEdFVF9QQUdFU19BQ1RJT05fVFlQRVMsIERFTEVURV9QQUdFX0FDVElPTl9UWVBFUyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcbmltcG9ydCB7IFVwc2VydFBhZ2VBY3Rpb24sIERlbGV0ZVBhZ2VBY3Rpb24gfSBmcm9tIFwiLi9wYWdlcy5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQYWdlRGJFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4pIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9QQUdFX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKHBhZ2U6IFBhZ2VNb2RlbCkgPT4gbmV3IFVwc2VydFBhZ2VBY3Rpb24oWyBwYWdlIF0pKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydE1hbnkkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfUEFHRVNfQUNUSU9OX1RZUEVTLlNVQ0NFRUQpXHJcblx0XHQucGlwZShwbHVjayhcInBheWxvYWRcIiksIG1hcCgocGFnZXM6IFBhZ2VNb2RlbFtdKSA9PiBuZXcgVXBzZXJ0UGFnZUFjdGlvbihwYWdlcykpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0ZGVsZXRlJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoREVMRVRFX1BBR0VfQUNUSU9OX1RZUEVTLlNVQ0NFRUQpXHJcblx0XHQucGlwZShwbHVjayhcInBheWxvYWRcIiksIG1hcCgocGFnZTogUGFnZU1vZGVsKSA9PiBuZXcgRGVsZXRlUGFnZUFjdGlvbihwYWdlKSkpO1xyXG59XHJcbiIsImltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBQYWdlc0FjdGlvbnMsIFBhZ2VzQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi9wYWdlcy5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRkYXRhOiBQYWdlTW9kZWxbXTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRkYXRhOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogUGFnZXNBY3Rpb25zKTogU3RhdGUge1xyXG5cdGxldCBfZGF0YTogUGFnZU1vZGVsW107XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBQYWdlc0FjdGlvblR5cGVzLlVQU0VSVDpcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdF9kYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0bGV0IG5ld1BhZ2VzID0gYWN0aW9uLnBheWxvYWQ7XHJcblx0XHRcdGlmICghKG5ld1BhZ2VzIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcblx0XHRcdFx0bmV3UGFnZXMgPSBbIG5ld1BhZ2VzIF07XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIidQYWdlc0FjdGlvblR5cGVzLlVQU0VSVCcgZG9lcyBub3QgZ2V0IGFycmF5IHBheWxvYWRcIik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG5ld1BhZ2VzLmZvckVhY2goKG5ld1BhZ2UpID0+IHtcclxuXHRcdFx0XHRjb25zdCBleGlzdGVkUGFnZUluZGV4ID0gX2RhdGEuZmluZEluZGV4KCh3KSA9PiB3Ll9pZCA9PSBuZXdQYWdlLl9pZCk7XHJcblx0XHRcdFx0aWYgKGV4aXN0ZWRQYWdlSW5kZXggPiAtMSkge1xyXG5cdFx0XHRcdFx0X2RhdGEuc3BsaWNlKGV4aXN0ZWRQYWdlSW5kZXgsIDEsIG5ld1BhZ2UpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRfZGF0YS5wdXNoKG5ld1BhZ2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IF9kYXRhXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBQYWdlc0FjdGlvblR5cGVzLkRFTEVURTpcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdF9kYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHJcblx0XHRcdGNvbnN0IHBhZ2VJbmRleCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KCh3KSA9PiB3Ll9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRfZGF0YS5zcGxpY2UocGFnZUluZGV4LCAxKTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogX2RhdGFcclxuXHRcdFx0fTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UGFnZXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG4iLCJpbXBvcnQgKiBhcyBmcm9tUm9vdCBmcm9tIFwiLi9yb290L3BhZ2VzLnJlZHVjZXJzXCI7XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFnZVN0YXRlIHtcclxuXHRkYjogZnJvbVJvb3QuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlUmVkdWNlciA9IHtcclxuXHRkYjogZnJvbVJvb3QuUmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XHJcblx0cGFnZXM6IFBhZ2VTdGF0ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vcGFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdFVF9QQUdFX0FDVElPTl9UWVBFUywgR2V0UGFnZUFjdGlvbnMsIEdldFBhZ2VTdWNjZWVkQWN0aW9uLCBHZXRQYWdlRmFpbGVkQWN0aW9uIH0gZnJvbSBcIi4vZ2V0LXBhZ2UuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2V0UGFnZUFwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8R2V0UGFnZUFjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IFBhZ2VTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9QQUdFX0FDVElPTl9UWVBFUy5TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoKGFjdGlvbikgPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKHBheWxvYWQpID0+IHRoaXMuc2VydmljZS5nZXQocGF5bG9hZCkpLFxyXG5cdFx0XHRtYXAoKHJlcykgPT4gbmV3IEdldFBhZ2VTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRjYXRjaEVycm9yKChlcnIpID0+IG9mKG5ldyBHZXRQYWdlRmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vcGFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0R0VUX1BBR0VTX0FDVElPTl9UWVBFUyxcclxuXHRHZXRQYWdlc0FjdGlvbnMsXHJcblx0R2V0UGFnZXNTdWNjZWVkQWN0aW9uLFxyXG5cdEdldFBhZ2VzRmFpbGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vZ2V0LXBhZ2VzLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdldFBhZ2VzQXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxHZXRQYWdlc0FjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IFBhZ2VTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9QQUdFU19BQ1RJT05fVFlQRVMuU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0c3dpdGNoTWFwKCgpID0+XHJcblx0XHRcdFx0dGhpcy5zZXJ2aWNlXHJcblx0XHRcdFx0XHQuZ2V0UGFnZXMoKVxyXG5cdFx0XHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0XHRcdG1hcCgocmVzKSA9PiBuZXcgR2V0UGFnZXNTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRcdFx0XHRjYXRjaEVycm9yKChlcnIpID0+IG9mKG5ldyBHZXRQYWdlc0ZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vcGFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0VVBTRVJUX1BBR0VfQUNUSU9OX1RZUEVTLFxyXG5cdFVwc2VydFBhZ2VBY3Rpb25zLFxyXG5cdFVwc2VydFBhZ2VTdWNjZWVkQWN0aW9uLFxyXG5cdFVwc2VydFBhZ2VGYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi91cHNlcnQtcGFnZS5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRQYWdlQXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxVcHNlcnRQYWdlQWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogUGFnZVNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoVVBTRVJUX1BBR0VfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcCgoYWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgocGF5bG9hZCkgPT4gdGhpcy5zZXJ2aWNlLnVwc2VydChwYXlsb2FkKSksXHJcblx0XHRcdG1hcCgocmVzKSA9PiBuZXcgVXBzZXJ0UGFnZVN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IFVwc2VydFBhZ2VGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gXCIuLi8uLi9wYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRERUxFVEVfUEFHRV9BQ1RJT05fVFlQRVMsXHJcblx0RGVsZXRlUGFnZUFjdGlvbnMsXHJcblx0RGVsZXRlUGFnZVN1Y2NlZWRBY3Rpb24sXHJcblx0RGVsZXRlUGFnZUZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL2RlbGV0ZS1wYWdlLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERlbGV0ZVBhZ2VBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPERlbGV0ZVBhZ2VBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBQYWdlU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShERUxFVEVfUEFHRV9BQ1RJT05fVFlQRVMuU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKChhY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChwYXlsb2FkKSA9PiB0aGlzLnNlcnZpY2UuZGVsZXRlKHBheWxvYWQpKSxcclxuXHRcdFx0bWFwKChyZXMpID0+IG5ldyBEZWxldGVQYWdlU3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgRGVsZXRlUGFnZUZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgTWF0RGl2aWRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBOZ3NHcmlkTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZ3JpZFwiO1xyXG5cclxuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3BhZ2Utcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgUGFnZVZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L3BhZ2Utdmlldy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUGFnZXNNYW5hZ2VtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vbWFuZ2VtZW50L3BhZ2UtbWFuYWdlbWVudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUm9vdENvbXBvbmVudCB9IGZyb20gXCIuL3Jvb3Qvcm9vdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXBzZXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vdXBzZXJ0L3Vwc2VydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgUGFnZU1vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuL3BhZ2UuY29uZmlnXCI7XHJcbmltcG9ydCB7IFBhZ2VDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3BhZ2UtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvcGFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBhZ2VEYkVmZmVjdHMgfSBmcm9tIFwiLi9yb290L3BhZ2VzLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgUGFnZVJlZHVjZXIgfSBmcm9tIFwiLi9wYWdlLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR2V0UGFnZUFwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZ2V0LXBhZ2UvZ2V0LXBhZ2UuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBHZXRQYWdlc0FwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZ2V0LXBhZ2VzL2dldC1wYWdlcy5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFVwc2VydFBhZ2VBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL3Vwc2VydC1wYWdlL3Vwc2VydC1wYWdlLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgRGVsZXRlUGFnZUFwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZGVsZXRlLXBhZ2UvZGVsZXRlLXBhZ2UuZWZmZWN0c1wiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHROZ3NHcmlkTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtQYWdlVmlld0NvbXBvbmVudCwgUGFnZXNNYW5hZ2VtZW50Q29tcG9uZW50LCBSb290Q29tcG9uZW50LCBVcHNlcnRDb21wb25lbnRdLFxyXG5cdGV4cG9ydHM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NQYWdlTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBQYWdlTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogTmdzUGFnZVJvb3RNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW3sgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9LCBQYWdlQ29uZmlndXJhdGlvblNlcnZpY2UsIFBhZ2VTZXJ2aWNlXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzUGFnZU1vZHVsZSxcclxuXHRcdFJvdXRpbmdNb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwicGFnZXNcIiwgUGFnZVJlZHVjZXIpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtcclxuXHRcdFx0UGFnZURiRWZmZWN0cyxcclxuXHRcdFx0R2V0UGFnZUFwaUVmZmVjdHMsXHJcblx0XHRcdEdldFBhZ2VzQXBpRWZmZWN0cyxcclxuXHRcdFx0VXBzZXJ0UGFnZUFwaUVmZmVjdHMsXHJcblx0XHRcdERlbGV0ZVBhZ2VBcGlFZmZlY3RzXHJcblx0XHRdKVxyXG5cdF0sXHJcblx0ZXhwb3J0czogW05nc1BhZ2VNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NQYWdlUm9vdE1vZHVsZSB7IH1cclxuIl0sIm5hbWVzIjpbImZyb21Sb290LlJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFjQSxNQUFhLHFCQUFxQixHQUFxQjtJQUN0RCxHQUFHLEVBQUU7UUFDSixVQUFVLEVBQUUsS0FBSztRQUNqQixlQUFlLEVBQUUsNkJBQTZCO0tBQzlDO0lBQ0QsU0FBUyxFQUFFO1FBQ1YsTUFBTSxFQUFFLFdBQVc7UUFDbkIsTUFBTSxFQUFFLHdCQUF3QjtRQUNoQyxJQUFJLEVBQUUsV0FBVztRQUNqQixHQUFHLEVBQUUseUJBQXlCO0tBQzlCO0NBQ0QsQ0FBQzs7QUFDRixNQUFhLG1CQUFtQixHQUFHLElBQUksY0FBYyxDQUFtQixrQkFBa0IsQ0FBQzs7Ozs7O0FDMUIzRjs7Ozs7SUFjQyxZQUF5QyxVQUFVLEVBQVUsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7dUJBRHpFLElBQUksZUFBZSxDQUFDLHFCQUFxQixDQUFDO1FBRW5ELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7OztLQVFoQzs7OztJQWRELElBQUksTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNwQjs7O1lBTEQsVUFBVTs7Ozs0Q0FPRyxNQUFNLFNBQUMsbUJBQW1CO1lBWi9CLEtBQUs7Ozs7Ozs7QUNBZCxJQUFpQixnQkFBZ0I7QUFBakMsV0FBaUIsZ0JBQWdCO0lBQ2hDOzs7O1FBQ0MsWUFBWSxTQUFTLEdBQUcsRUFB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