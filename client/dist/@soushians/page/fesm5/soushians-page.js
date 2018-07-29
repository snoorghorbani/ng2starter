import { InjectionToken, Inject, Injectable, Component, ComponentFactoryResolver, ViewContainerRef, NgModule } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { __decorate, __metadata, __assign, __read } from 'tslib';
import { map, filter, tap, take, switchMap, combineLatest, pluck, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserFacadeService } from '@soushians/user';
import { stringTemplate } from '@soushians/shared';
import { Location, CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgsGridModule } from '@soushians/grid';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
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
var /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("PageModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PageConfigurationService = /** @class */ (function () {
    function PageConfigurationService(configFile, store) {
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
    Object.defineProperty(PageConfigurationService.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    PageConfigurationService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    PageConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
        { type: Store }
    ]; };
    return PageConfigurationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GetPagesApiModel;
(function (GetPagesApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = {}; }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = /**
         * @return {?}
         */
        function () {
            return {};
        };
        return Request;
    }());
    GetPagesApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    GetPagesApiModel.Response = Response;
})(GetPagesApiModel || (GetPagesApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GetPagesStartAction = /** @class */ (function () {
    function GetPagesStartAction() {
        this.type = "[GET_PAGES][API][GetPages] start" /* START */;
    }
    return GetPagesStartAction;
}());
var GetPagesSucceedAction = /** @class */ (function () {
    function GetPagesSucceedAction(payload) {
        this.payload = payload;
        this.type = "[GET_PAGES][API][GetPages] succeed" /* SUCCEED */;
    }
    return GetPagesSucceedAction;
}());
var GetPagesFailedAction = /** @class */ (function () {
    function GetPagesFailedAction(payload) {
        this.payload = payload;
        this.type = "[GET_PAGES][API][GetPages] failed" /* FAILED */;
    }
    return GetPagesFailedAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GetPageApiModel;
(function (GetPageApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = {}; }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = /**
         * @return {?}
         */
        function () {
            return {};
        };
        return Request;
    }());
    GetPageApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    GetPageApiModel.Response = Response;
})(GetPageApiModel || (GetPageApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GetPageStartAction = /** @class */ (function () {
    function GetPageStartAction(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][GetPage] start" /* START */;
    }
    return GetPageStartAction;
}());
var GetPageSucceedAction = /** @class */ (function () {
    function GetPageSucceedAction(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][GetPage] succeed" /* SUCCEED */;
    }
    return GetPageSucceedAction;
}());
var GetPageFailedAction = /** @class */ (function () {
    function GetPageFailedAction(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][GetPage] failed" /* FAILED */;
    }
    return GetPageFailedAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DeletePageApiModel;
(function (DeletePageApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = {}; }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = /**
         * @return {?}
         */
        function () {
            return {};
        };
        return Request;
    }());
    DeletePageApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    DeletePageApiModel.Response = Response;
})(DeletePageApiModel || (DeletePageApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DeletePageStartAction = /** @class */ (function () {
    function DeletePageStartAction(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][DELETE] start" /* START */;
    }
    return DeletePageStartAction;
}());
var DeletePageSucceedAction = /** @class */ (function () {
    function DeletePageSucceedAction(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][DELETE] succeed" /* SUCCEED */;
    }
    return DeletePageSucceedAction;
}());
var DeletePageFailedAction = /** @class */ (function () {
    function DeletePageFailedAction(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][DELETE] failed" /* FAILED */;
    }
    return DeletePageFailedAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PageModel = /** @class */ (function () {
    function PageModel(_a) {
        var _b = _a === void 0 ? {} : _a, _id = _b._id, name = _b.name, grid = _b.grid;
        this._id = _id;
        this.name = name || "";
        this.grid = grid || "";
    }
    return PageModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UpsertPageApiModel;
(function (UpsertPageApiModel) {
    var Request = /** @class */ (function () {
        function Request(page) {
            if (page === void 0) { page = {}; }
            debugger;
            this.page = new PageModel(page);
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = /**
         * @return {?}
         */
        function () {
            return this.page;
        };
        return Request;
    }());
    UpsertPageApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    UpsertPageApiModel.Response = Response;
})(UpsertPageApiModel || (UpsertPageApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UpsertPageStartAction = /** @class */ (function () {
    function UpsertPageStartAction(payload) {
        this.payload = payload;
        this.type = "[UPSERT_PAGE][API][UpsertPage] start" /* START */;
    }
    return UpsertPageStartAction;
}());
var UpsertPageSucceedAction = /** @class */ (function () {
    function UpsertPageSucceedAction(payload) {
        this.payload = payload;
        this.type = "[UPSERT_PAGE][API][UpsertPage] succeed" /* SUCCEED */;
    }
    return UpsertPageSucceedAction;
}());
var UpsertPageFailedAction = /** @class */ (function () {
    function UpsertPageFailedAction(payload) {
        this.payload = payload;
        this.type = "[UPSERT_PAGE][API][UpsertPage] failed" /* FAILED */;
    }
    return UpsertPageFailedAction;
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
var PageService = /** @class */ (function () {
    function PageService(http, store, configurationService, _location, userFacadeService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        this._location = _location;
        this.userFacadeService = userFacadeService;
        this.userId$ = this.userFacadeService.getDisplayName().filter(function (i) { return i != undefined; });
    }
    /**
     * @param {?} name
     * @return {?}
     */
    PageService.prototype.get = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var _this = this;
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.get !== ""; }), take(1), combineLatest(this.userId$), switchMap(function (_a) {
            var _b = __read(_a, 2), config = _b[0], userId = _b[1];
            return _this.http.get(stringTemplate(config.env.frontend_server + config.endpoints.get, { name: name }), {
                params: {
                    userId: userId
                }
            });
        }), map(function (response) { return response.Result; }));
    };
    /**
     * @param {?} _id
     * @return {?}
     */
    PageService.prototype.delete = /**
     * @param {?} _id
     * @return {?}
     */
    function (_id) {
        var _this = this;
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.delete !== ""; }), take(1), switchMap(function (config) {
            return _this.http.delete(stringTemplate(config.env.frontend_server + config.endpoints.delete, { _id: _id }));
        }), map(function (response) { return response.Result; }));
    };
    /**
     * @return {?}
     */
    PageService.prototype.getPages = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.find != ""; }), combineLatest(this.userId$), switchMap(function (_a) {
            var _b = __read(_a, 2), config = _b[0], userId = _b[1];
            return _this.http.get(config.env.frontend_server + config.endpoints.find, {
                params: {
                    userId: userId
                }
            });
        }), map(function (response) { return response.Result; }));
    };
    /**
     * @template T
     * @param {?} page
     * @return {?}
     */
    PageService.prototype.upsert = /**
     * @template T
     * @param {?} page
     * @return {?}
     */
    function (page) {
        var _this = this;
        var /** @type {?} */ model = new UpsertPageApiModel.Request(page);
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.upsert != ""; }), take(1), combineLatest(this.userId$), switchMap(function (_a) {
            var _b = __read(_a, 2), config = _b[0], userId = _b[1];
            return _this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody(), {
                params: {
                    userId: userId
                }
            });
        }), map(function (response) { return response.Result; }), tap(function () { return _this._location.back(); }));
    };
    // delete(name: string) {
    // 	return this.configurationService.config$
    // 		.filter((config) => config.endpoints.deleteForm != "")
    // 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
    // }
    /**
     * @param {?} name
     * @return {?}
     */
    PageService.prototype.selectByName = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var _this = this;
        var /** @type {?} */ subject = new BehaviorSubject(undefined);
        this.store
            .select(function (state) { return state.pages.db.data; })
            .pipe(filter(function (pages) { return pages != null; }), map(function (pages) { return pages.find(function (page) { return page.name == name; }); }), tap(function (page) {
            if (page == null) {
                debugger;
                _this.store.dispatch(new GetPageStartAction(name));
            }
        }))
            .subscribe(function (page) { return subject.next(page); });
        return subject.asObservable();
    };
    PageService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    PageService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: PageConfigurationService },
        { type: Location },
        { type: UserFacadeService }
    ]; };
    return PageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PageViewComponent = /** @class */ (function () {
    function PageViewComponent(store, service, route, resolver, container) {
        this.store = store;
        this.service = service;
        this.route = route;
        this.resolver = resolver;
        this.container = container;
    }
    /**
     * @return {?}
     */
    PageViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._selectPage();
    };
    /**
     * @return {?}
     */
    PageViewComponent.prototype._selectPage = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.page$ = this.route.params.pipe(pluck("name"), switchMap(function (name) { return _this.service.selectByName(name); }), filter(function (page) { return page != undefined; }));
    };
    PageViewComponent.decorators = [
        { type: Component, args: [{
                    template: "<div *ngIf=\"(page$ | async)?.grid\">\n    <ngs-grid [oid]=\"(page$ | async)?.grid\"></ngs-grid>\n</div>"
                },] },
    ];
    /** @nocollapse */
    PageViewComponent.ctorParameters = function () { return [
        { type: Store },
        { type: PageService },
        { type: ActivatedRoute },
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    return PageViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RootComponent = /** @class */ (function () {
    function RootComponent() {
    }
    RootComponent.decorators = [
        { type: Component, args: [{
                    selector: "page-root",
                    template: "<router-outlet></router-outlet>"
                },] },
    ];
    return RootComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UpsertComponent = /** @class */ (function () {
    function UpsertComponent(store, route, service) {
        this.store = store;
        this.route = route;
        this.service = service;
        this._init_formgroup();
    }
    /**
     * view methods
     */
    /**
     * view methods
     * @return {?}
     */
    UpsertComponent.prototype.upsert = /**
     * view methods
     * @return {?}
     */
    function () {
        debugger;
        var /** @type {?} */ page = __assign({}, this.formGroup.value);
        this.store.dispatch(new UpsertPageStartAction(page));
    };
    /**
     * @return {?}
     */
    UpsertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._select_page();
        this._update_formgroup_base_on_page();
    };
    /**
     * private methods
     */
    /**
     * private methods
     * @return {?}
     */
    UpsertComponent.prototype._init_formgroup = /**
     * private methods
     * @return {?}
     */
    function () {
        this.formGroup = new FormGroup({
            _id: new FormControl(""),
            name: new FormControl(""),
            grid: new FormControl("")
        });
    };
    /**
     * @return {?}
     */
    UpsertComponent.prototype._select_page = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.page$ = this.route.params.pipe(pluck("name"), filter(function (name) { return name != undefined; }), switchMap(function (name) { return _this.service.selectByName(name); }), filter(function (page) { return page != undefined; }));
    };
    /**
     * @return {?}
     */
    UpsertComponent.prototype._update_formgroup_base_on_page = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.page$.subscribe(function (page) {
            _this.formGroup.patchValue(page);
        });
    };
    UpsertComponent.decorators = [
        { type: Component, args: [{
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-card fxFlex=\"50\">\n        <mat-card-content [formGroup]=\"formGroup\">\n            <mat-form-field>\n                <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\"  formControlName=\"name\">\n            </mat-form-field>\n        </mat-card-content>\n        <mat-card-actions align=\"end\">\n            <button mat-raised-button color=\"primary\" (click)=\"upsert()\">\u062B\u0628\u062A</button>\n        </mat-card-actions>\n    </mat-card>\n</div>"
                },] },
    ];
    /** @nocollapse */
    UpsertComponent.ctorParameters = function () { return [
        { type: Store },
        { type: ActivatedRoute },
        { type: PageService }
    ]; };
    return UpsertComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PagesManagementComponent = /** @class */ (function () {
    function PagesManagementComponent(store) {
        this.store = store;
        this.pages$ = this.store.select(function (state) { return state.pages.db.data; });
    }
    /**
     * @return {?}
     */
    PagesManagementComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new GetPagesStartAction());
    };
    /**
     * view methods
     */
    /**
     * view methods
     * @param {?} page
     * @return {?}
     */
    PagesManagementComponent.prototype.delete = /**
     * view methods
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.store.dispatch(new DeletePageStartAction(page._id));
    };
    PagesManagementComponent.decorators = [
        { type: Component, args: [{
                    template: "<div fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\">\n  <div fXFlex fxLayout=\"row\">\n    <button  color=\"primary\" mat-mini-fab routerLink=\"../upsert\">\n      <mat-icon>add</mat-icon>\n    </button>\n  </div>\n  <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"20px\">\n    <mat-card class=\"cards-item\" *ngFor=\"let item of (pages$ | async)\" fxFlex=\"32\" fxLayout=\"row\">\n\n      <div fxFlex fxLayoutAlign=\"start center\">\n        {{item.name}}\n      </div>\n      <div fxFlex fxLayoutAlign=\"center center\">\n        {{item.type}}\n      </div>\n      <div fxLayout=\"row\" >\n          <div fxFlex=\"nogrow\">\n              <a mat-icon-button [routerLink]=\"['../upsert' , item.name]\">\n                <mat-icon aria-label=\"edit page\">edit</mat-icon>\n              </a>\n            </div>\n    \n        <div fxFlex=\"nogrow\">\n          <button mat-icon-button (click)=\"delete(item)\">\n            <mat-icon aria-label=\"delete page\">delete</mat-icon>\n          </button>\n        </div>\n                <div fxFlex=\"nogrow\">\n          <a mat-icon-button [routerLink]=\"['/page' , item.name]\">\n            <mat-icon aria-label=\"edit page\">remove_red_eye</mat-icon>\n          </a>\n        </div>\n      </div>\n    </mat-card>\n  </div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    PagesManagementComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return PagesManagementComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ routes = [
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
var /** @type {?} */ RoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var PagesActionTypes = {
    UPSERT: "[PAGE][DB] UPSERT",
    DELETE: "[PAGE][DB] DELETE",
};
var UpsertPageAction = /** @class */ (function () {
    function UpsertPageAction(payload) {
        this.payload = payload;
        this.type = PagesActionTypes.UPSERT;
    }
    return UpsertPageAction;
}());
var DeletePageAction = /** @class */ (function () {
    function DeletePageAction(payload) {
        this.payload = payload;
        this.type = PagesActionTypes.DELETE;
    }
    return DeletePageAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PageDbEffects = /** @class */ (function () {
    function PageDbEffects(actions$) {
        this.actions$ = actions$;
        this.Upsert$ = this.actions$
            .ofType("[PAGE][API][GetPage] succeed" /* SUCCEED */)
            .pipe(pluck("payload"), map(function (page) { return new UpsertPageAction([page]); }));
        this.UpsertMany$ = this.actions$
            .ofType("[GET_PAGES][API][GetPages] succeed" /* SUCCEED */)
            .pipe(pluck("payload"), map(function (pages) { return new UpsertPageAction(pages); }));
        this.delete$ = this.actions$
            .ofType("[PAGE][API][DELETE] succeed" /* SUCCEED */)
            .pipe(pluck("payload"), map(function (page) { return new DeletePageAction(page); }));
    }
    PageDbEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    PageDbEffects.ctorParameters = function () { return [
        { type: Actions }
    ]; };
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
    return PageDbEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ɵ0 = [];
var /** @type {?} */ initialState = {
    data: ɵ0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    var /** @type {?} */ _data;
    switch (action.type) {
        case PagesActionTypes.UPSERT:
            debugger;
            _data = state.data.concat();
            var /** @type {?} */ newPages = action.payload;
            if (!(newPages instanceof Array)) {
                newPages = [newPages];
                console.error("'PagesActionTypes.UPSERT' does not get array payload");
            }
            newPages.forEach(function (newPage) {
                var /** @type {?} */ existedPageIndex = _data.findIndex(function (w) { return w._id == newPage._id; });
                if (existedPageIndex > -1) {
                    _data.splice(existedPageIndex, 1, newPage);
                }
                else {
                    _data.push(newPage);
                }
            });
            return __assign({}, state, { data: _data });
        case PagesActionTypes.DELETE:
            debugger;
            _data = state.data.concat();
            var /** @type {?} */ pageIndex = state.data.findIndex(function (w) { return w._id == action.payload._id; });
            _data.splice(pageIndex, 1);
            return __assign({}, state, { data: _data });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ PageReducer = {
    db: Reducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GetPageApiEffects = /** @class */ (function () {
    function GetPageApiEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[PAGE][API][GetPage] start" /* START */)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (payload) { return _this.service.get(payload); }), map(function (res) { return new GetPageSucceedAction(res); }), catchError(function (err) { return of(new GetPageFailedAction(err)); }));
    }
    GetPageApiEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GetPageApiEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: PageService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], GetPageApiEffects.prototype, "start$", void 0);
    return GetPageApiEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GetPagesApiEffects = /** @class */ (function () {
    function GetPagesApiEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[GET_PAGES][API][GetPages] start" /* START */)
            .pipe(switchMap(function () {
            return _this.service
                .getPages()
                .pipe(map(function (res) { return new GetPagesSucceedAction(res); }), catchError(function (err) { return of(new GetPagesFailedAction(err)); }));
        }));
    }
    GetPagesApiEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GetPagesApiEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: PageService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], GetPagesApiEffects.prototype, "start$", void 0);
    return GetPagesApiEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UpsertPageApiEffects = /** @class */ (function () {
    function UpsertPageApiEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[UPSERT_PAGE][API][UpsertPage] start" /* START */)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (payload) { return _this.service.upsert(payload); }), map(function (res) { return new UpsertPageSucceedAction(res); }), catchError(function (err) { return of(new UpsertPageFailedAction(err)); }));
    }
    UpsertPageApiEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    UpsertPageApiEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: PageService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], UpsertPageApiEffects.prototype, "start$", void 0);
    return UpsertPageApiEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DeletePageApiEffects = /** @class */ (function () {
    function DeletePageApiEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[PAGE][API][DELETE] start" /* START */)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (payload) { return _this.service.delete(payload); }), map(function (res) { return new DeletePageSucceedAction(res); }), catchError(function (err) { return of(new DeletePageFailedAction(err)); }));
    }
    DeletePageApiEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DeletePageApiEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: PageService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], DeletePageApiEffects.prototype, "start$", void 0);
    return DeletePageApiEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgsPageModule = /** @class */ (function () {
    function NgsPageModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgsPageModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: NgsPageRootModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, PageConfigurationService, PageService]
        };
    };
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
                        FlexLayoutModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgsGridModule
                    ],
                    declarations: [PageViewComponent, PagesManagementComponent, RootComponent, UpsertComponent],
                    exports: []
                },] },
    ];
    return NgsPageModule;
}());
var NgsPageRootModule = /** @class */ (function () {
    function NgsPageRootModule() {
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
    return NgsPageRootModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { NgsPageModule, NgsPageRootModule, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, PagesManagementComponent as ɵf, RoutingModule as ɵi, PageReducer as ɵb, PageDbEffects as ɵk, Reducer as ɵj, RootComponent as ɵg, DeletePageApiEffects as ɵr, GetPageApiEffects as ɵl, GetPagesApiEffects as ɵn, UpsertPageApiEffects as ɵp, PageConfigurationService as ɵe, PageService as ɵd, UpsertComponent as ɵh, PageViewComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXBhZ2UuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvcGFnZS5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvc2VydmljZXMvcGFnZS1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvc2VydmljZXMvYXBpL2dldC1wYWdlcy9nZXQtcGFnZXMubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvc2VydmljZXMvYXBpL2dldC1wYWdlcy9nZXQtcGFnZXMuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9wYWdlL2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LXBhZ2UvZ2V0LXBhZ2UubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvc2VydmljZXMvYXBpL2dldC1wYWdlL2dldC1wYWdlLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvc2VydmljZXMvYXBpL2RlbGV0ZS1wYWdlL2RlbGV0ZS1wYWdlLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3NlcnZpY2VzL2FwaS9kZWxldGUtcGFnZS9kZWxldGUtcGFnZS5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL21vZGVscy9wYWdlLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3NlcnZpY2VzL2FwaS91cHNlcnQtcGFnZS91cHNlcnQtcGFnZS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9wYWdlL2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LXBhZ2UvdXBzZXJ0LXBhZ2UuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9wYWdlL2xpYi9zZXJ2aWNlcy9wYWdlLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvdmlldy9wYWdlLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3Jvb3Qvcm9vdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvdXBzZXJ0L3Vwc2VydC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvbWFuZ2VtZW50L3BhZ2UtbWFuYWdlbWVudC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvcGFnZS1yb3V0aW5nLm1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9wYWdlL2xpYi9yb290L3BhZ2VzLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvcm9vdC9wYWdlcy5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3Jvb3QvcGFnZXMucmVkdWNlcnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvcGFnZS5yZWR1Y2VyLnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3NlcnZpY2VzL2FwaS9nZXQtcGFnZS9nZXQtcGFnZS5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3NlcnZpY2VzL2FwaS9nZXQtcGFnZXMvZ2V0LXBhZ2VzLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvc2VydmljZXMvYXBpL3Vwc2VydC1wYWdlL3Vwc2VydC1wYWdlLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvc2VydmljZXMvYXBpL2RlbGV0ZS1wYWdlL2RlbGV0ZS1wYWdlLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvcGFnZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYWdlTW9kdWxlQ29uZmlnIHtcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcblx0fTtcclxuXHRlbmRwb2ludHM/OiB7XHJcblx0XHRnZXQ6IHN0cmluZztcclxuXHRcdGRlbGV0ZTogc3RyaW5nO1xyXG5cdFx0ZmluZDogc3RyaW5nO1xyXG5cdFx0dXBzZXJ0OiBzdHJpbmc7XHJcblx0fTtcclxufVxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBQYWdlTW9kdWxlQ29uZmlnID0ge1xyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2UsXHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IFwiZnJvbnRlbmRfc2VydmVyL2RpZC9ub3Qvc2V0XCJcclxuXHR9LFxyXG5cdGVuZHBvaW50czoge1xyXG5cdFx0dXBzZXJ0OiBcIi9hcGkvcGFnZVwiLFxyXG5cdFx0ZGVsZXRlOiBcIi9hcGkvcGFnZS8ke21vZGVsLl9pZH1cIixcclxuXHRcdGZpbmQ6IFwiL2FwaS9wYWdlXCIsXHJcblx0XHRnZXQ6IFwiL2FwaS9wYWdlLyR7bW9kZWwubmFtZX1cIlxyXG5cdH1cclxufTtcclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48UGFnZU1vZHVsZUNvbmZpZz4oXCJQYWdlTW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUGFnZU1vZHVsZUNvbmZpZywgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4uL3BhZ2UuY29uZmlnXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3BhZ2UucmVkdWNlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGFnZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IFBhZ2VNb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KE1PRFVMRV9ERUZBVUxUX0NPTkZJRyk7XHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0Ly8gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0UGFnZU1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKChwYWdlQ29uZmlnKSA9PiB7XHJcblx0XHQvLyBcdGlmICghcGFnZUNvbmZpZykge1xyXG5cdFx0Ly8gXHRcdHJldHVybjtcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gXHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHBhZ2VDb25maWcuQ29uZmlnKTtcclxuXHRcdC8vIFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgR2V0UGFnZXNBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlID0ge30pIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKChrZXkpID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge307XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBQYWdlTW9kZWxbXTtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRQYWdlc0FwaU1vZGVsIH0gZnJvbSBcIi4vZ2V0LXBhZ2VzLm1vZGVsXCI7XHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gR0VUX1BBR0VTX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltHRVRfUEFHRVNdW0FQSV1bR2V0UGFnZXNdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW0dFVF9QQUdFU11bQVBJXVtHZXRQYWdlc10gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW0dFVF9QQUdFU11bQVBJXVtHZXRQYWdlc10gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldFBhZ2VzU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfUEFHRVNfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRQYWdlc1N1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfUEFHRVNfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhZ2VNb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRQYWdlc0ZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9QQUdFU19BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldFBhZ2VzQWN0aW9ucyA9IEdldFBhZ2VzU3RhcnRBY3Rpb24gfCBHZXRQYWdlc1N1Y2NlZWRBY3Rpb24gfCBHZXRQYWdlc0ZhaWxlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEdldFBhZ2VBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0bmFtZTogc3RyaW5nO1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlID0ge30pIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKChrZXkpID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge307XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBQYWdlTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0UGFnZUFwaU1vZGVsIH0gZnJvbSBcIi4vZ2V0LXBhZ2UubW9kZWxcIjtcclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBHRVRfUEFHRV9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbUEFHRV1bQVBJXVtHZXRQYWdlXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltQQUdFXVtBUEldW0dldFBhZ2VdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltQQUdFXVtBUEldW0dldFBhZ2VdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRQYWdlU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfUEFHRV9BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UGFnZVN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfUEFHRV9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRQYWdlRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1BBR0VfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHZXRQYWdlQWN0aW9ucyA9IEdldFBhZ2VTdGFydEFjdGlvbiB8IEdldFBhZ2VTdWNjZWVkQWN0aW9uIHwgR2V0UGFnZUZhaWxlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIERlbGV0ZVBhZ2VBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlID0ge30pIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKChrZXkpID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge307XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBQYWdlTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBERUxFVEVfUEFHRV9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbUEFHRV1bQVBJXVtERUxFVEVdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW1BBR0VdW0FQSV1bREVMRVRFXSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbUEFHRV1bQVBJXVtERUxFVEVdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZWxldGVQYWdlU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfUEFHRV9BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGVsZXRlUGFnZVN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfUEFHRV9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVQYWdlRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gREVMRVRFX1BBR0VfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBEZWxldGVQYWdlQWN0aW9ucyA9IERlbGV0ZVBhZ2VTdGFydEFjdGlvbiB8IERlbGV0ZVBhZ2VTdWNjZWVkQWN0aW9uIHwgRGVsZXRlUGFnZUZhaWxlZEFjdGlvbjtcclxuIiwiZXhwb3J0IGNsYXNzIFBhZ2VNb2RlbCB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdGdyaWQ6IHN0cmluZztcclxuXHRjb25zdHJ1Y3Rvcih7IF9pZCwgbmFtZSwgZ3JpZCB9OiB7IF9pZD86IHN0cmluZzsgbmFtZT86IHN0cmluZzsgZ3JpZD86IHN0cmluZyB9ID0ge30pIHtcclxuXHRcdHRoaXMuX2lkID0gX2lkO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZSB8fCBcIlwiO1xyXG5cdFx0dGhpcy5ncmlkID0gZ3JpZCB8fCBcIlwiO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgVXBzZXJ0UGFnZUFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRwYWdlOiBQYWdlTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcihwYWdlID0ge30pIHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRoaXMucGFnZSA9IG5ldyBQYWdlTW9kZWwocGFnZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnBhZ2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBQYWdlTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0UGFnZUFwaU1vZGVsIH0gZnJvbSBcIi4vdXBzZXJ0LXBhZ2UubW9kZWxcIjtcclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBVUFNFUlRfUEFHRV9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbVVBTRVJUX1BBR0VdW0FQSV1bVXBzZXJ0UGFnZV0gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbVVBTRVJUX1BBR0VdW0FQSV1bVXBzZXJ0UGFnZV0gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW1VQU0VSVF9QQUdFXVtBUEldW1Vwc2VydFBhZ2VdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRQYWdlU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfUEFHRV9BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhZ2VNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0UGFnZVN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfUEFHRV9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRQYWdlRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX1BBR0VfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBVcHNlcnRQYWdlQWN0aW9ucyA9IFVwc2VydFBhZ2VTdGFydEFjdGlvbiB8IFVwc2VydFBhZ2VTdWNjZWVkQWN0aW9uIHwgVXBzZXJ0UGFnZUZhaWxlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IG1hcCwgZmlsdGVyLCB0YXAsIHRha2UsIHN3aXRjaE1hcCwgY29tYmluZUxhdGVzdCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyRmFjYWRlU2VydmljZSB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3BhZ2UucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBQYWdlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9wYWdlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgR2V0UGFnZXNBcGlNb2RlbCwgR2V0UGFnZVN0YXJ0QWN0aW9uLCBVcHNlcnRQYWdlQXBpTW9kZWwsIERlbGV0ZVBhZ2VBcGlNb2RlbCB9IGZyb20gXCIuL2FwaVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBhZ2VTZXJ2aWNlIHtcclxuXHR1c2VySWQkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBQYWdlQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb24sXHJcblx0XHRwcml2YXRlIHVzZXJGYWNhZGVTZXJ2aWNlOiBVc2VyRmFjYWRlU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy51c2VySWQkID0gdGhpcy51c2VyRmFjYWRlU2VydmljZS5nZXREaXNwbGF5TmFtZSgpLmZpbHRlcigoaSkgPT4gaSAhPSB1bmRlZmluZWQpO1xyXG5cdH1cclxuXHJcblx0Z2V0KG5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8UGFnZU1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmdldCAhPT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdGNvbWJpbmVMYXRlc3QodGhpcy51c2VySWQkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChbIGNvbmZpZywgdXNlcklkIF0pID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLmdldChzdHJpbmdUZW1wbGF0ZShjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuZ2V0LCB7IG5hbWUgfSksIHtcclxuXHRcdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0XHR1c2VySWQ6IHVzZXJJZFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IFVwc2VydFBhZ2VBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZShfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UGFnZU1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmRlbGV0ZSAhPT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdHN3aXRjaE1hcCgoY29uZmlnKSA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5kZWxldGUoc3RyaW5nVGVtcGxhdGUoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmRlbGV0ZSwgeyBfaWQgfSkpXHJcblx0XHRcdCksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IERlbGV0ZVBhZ2VBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGdldFBhZ2VzKCk6IE9ic2VydmFibGU8UGFnZU1vZGVsW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZmluZCAhPSBcIlwiKSxcclxuXHRcdFx0Y29tYmluZUxhdGVzdCh0aGlzLnVzZXJJZCQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKFsgY29uZmlnLCB1c2VySWQgXSkgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5maW5kLCB7XHJcblx0XHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdFx0dXNlcklkOiB1c2VySWRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBHZXRQYWdlc0FwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHR1cHNlcnQ8VD4ocGFnZTogVXBzZXJ0UGFnZUFwaU1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPFBhZ2VNb2RlbD4ge1xyXG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgVXBzZXJ0UGFnZUFwaU1vZGVsLlJlcXVlc3QocGFnZSk7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLnVwc2VydCAhPSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0Y29tYmluZUxhdGVzdCh0aGlzLnVzZXJJZCQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKFsgY29uZmlnLCB1c2VySWQgXSkgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAucG9zdChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMudXBzZXJ0LCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpLCB7XHJcblx0XHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdFx0dXNlcklkOiB1c2VySWRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBVcHNlcnRQYWdlQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdCksXHJcblx0XHRcdHRhcCgoKSA9PiB0aGlzLl9sb2NhdGlvbi5iYWNrKCkpXHJcblx0XHQpO1xyXG5cdH1cclxuXHQvLyBkZWxldGUobmFtZTogc3RyaW5nKSB7XHJcblx0Ly8gXHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0Ly8gXHRcdC5maWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5kZWxldGVGb3JtICE9IFwiXCIpXHJcblx0Ly8gXHRcdC5zd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW5kcG9pbnRzLmRlbGV0ZUZvcm0pKTtcclxuXHQvLyB9XHJcblx0c2VsZWN0QnlOYW1lKG5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8UGFnZU1vZGVsPiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQYWdlTW9kZWw+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS5wYWdlcy5kYi5kYXRhKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRmaWx0ZXIoKHBhZ2VzKSA9PiBwYWdlcyAhPSBudWxsKSxcclxuXHRcdFx0XHRtYXAoKHBhZ2VzKSA9PiBwYWdlcy5maW5kKChwYWdlKSA9PiBwYWdlLm5hbWUgPT0gbmFtZSkpLFxyXG5cdFx0XHRcdHRhcCgocGFnZSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHBhZ2UgPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0UGFnZVN0YXJ0QWN0aW9uKG5hbWUpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoKHBhZ2UpID0+IHN1YmplY3QubmV4dChwYWdlKSk7XHJcblx0XHRyZXR1cm4gc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdENvbXBvbmVudFJlZixcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHREaXJlY3RpdmUsXHJcblx0SW5wdXRcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBwbHVjaywgZmlsdGVyLCBzd2l0Y2hNYXAsIG1hcCwgc3RhcnRXaXRoIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcGFnZS5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3BhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQYWdlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcGFnZS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCIocGFnZSQgfCBhc3luYyk/LmdyaWRcIj5cclxuICAgIDxuZ3MtZ3JpZCBbb2lkXT1cIihwYWdlJCB8IGFzeW5jKT8uZ3JpZFwiPjwvbmdzLWdyaWQ+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRwYWdlJDogT2JzZXJ2YWJsZTxQYWdlTW9kZWw+O1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IFBhZ2VTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0XHRwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZlxyXG5cdCkge31cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuX3NlbGVjdFBhZ2UoKTtcclxuXHR9XHJcblx0X3NlbGVjdFBhZ2UoKSB7XHJcblx0XHR0aGlzLnBhZ2UkID0gdGhpcy5yb3V0ZS5wYXJhbXMucGlwZShcclxuXHRcdFx0cGx1Y2soXCJuYW1lXCIpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKG5hbWU6IHN0cmluZykgPT4gdGhpcy5zZXJ2aWNlLnNlbGVjdEJ5TmFtZShuYW1lKSksXHJcblx0XHRcdGZpbHRlcigocGFnZSkgPT4gcGFnZSAhPSB1bmRlZmluZWQpXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwicGFnZS1yb290XCIsXHJcblx0dGVtcGxhdGU6IFwiPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290Q29tcG9uZW50IHt9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydFBhZ2VTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcGFnZS5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuaW1wb3J0IHsgcGx1Y2ssIHN3aXRjaE1hcCwgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3BhZ2Uuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgIDxtYXQtY2FyZCBmeEZsZXg9XCI1MFwiPlxyXG4gICAgICAgIDxtYXQtY2FyZC1jb250ZW50IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChsOYwqfDmcKFXCIgIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPG1hdC1jYXJkLWFjdGlvbnMgYWxpZ249XCJlbmRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwidXBzZXJ0KClcIj7DmMKrw5jCqMOYwqo8L2J1dHRvbj5cclxuICAgICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICA8L21hdC1jYXJkPlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdHBhZ2UkOiBPYnNlcnZhYmxlPFBhZ2VNb2RlbD47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBzZXJ2aWNlOiBQYWdlU2VydmljZSkge1xyXG5cdFx0dGhpcy5faW5pdF9mb3JtZ3JvdXAoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHZpZXcgbWV0aG9kc1xyXG5cdCAqL1xyXG5cdHVwc2VydCgpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0Y29uc3QgcGFnZSA9IHtcclxuXHRcdFx0Li4udGhpcy5mb3JtR3JvdXAudmFsdWVcclxuXHRcdH07XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRQYWdlU3RhcnRBY3Rpb24ocGFnZSkpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuX3NlbGVjdF9wYWdlKCk7XHJcblx0XHR0aGlzLl91cGRhdGVfZm9ybWdyb3VwX2Jhc2Vfb25fcGFnZSgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogcHJpdmF0ZSBtZXRob2RzXHJcblx0ICovXHJcblx0X2luaXRfZm9ybWdyb3VwKCkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0X2lkOiBuZXcgRm9ybUNvbnRyb2woXCJcIiksXHJcblx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiKSxcclxuXHRcdFx0Z3JpZDogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdF9zZWxlY3RfcGFnZSgpIHtcclxuXHRcdHRoaXMucGFnZSQgPSB0aGlzLnJvdXRlLnBhcmFtcy5waXBlKFxyXG5cdFx0XHRwbHVjayhcIm5hbWVcIiksXHJcblx0XHRcdGZpbHRlcigobmFtZSkgPT4gbmFtZSAhPSB1bmRlZmluZWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKG5hbWU6IHN0cmluZykgPT4gdGhpcy5zZXJ2aWNlLnNlbGVjdEJ5TmFtZShuYW1lKSksXHJcblx0XHRcdGZpbHRlcigocGFnZSkgPT4gcGFnZSAhPSB1bmRlZmluZWQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHRfdXBkYXRlX2Zvcm1ncm91cF9iYXNlX29uX3BhZ2UoKSB7XHJcblx0XHR0aGlzLnBhZ2UkLnN1YnNjcmliZSgocGFnZSkgPT4ge1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHBhZ2UpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9wYWdlLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR2V0UGFnZXNTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvZ2V0LXBhZ2VzL2dldC1wYWdlcy5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IERlbGV0ZVBhZ2VTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICA8ZGl2IGZYRmxleCBmeExheW91dD1cInJvd1wiPlxyXG4gICAgPGJ1dHRvbiAgY29sb3I9XCJwcmltYXJ5XCIgbWF0LW1pbmktZmFiIHJvdXRlckxpbms9XCIuLi91cHNlcnRcIj5cclxuICAgICAgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjIwcHhcIj5cclxuICAgIDxtYXQtY2FyZCBjbGFzcz1cImNhcmRzLWl0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiAocGFnZXMkIHwgYXN5bmMpXCIgZnhGbGV4PVwiMzJcIiBmeExheW91dD1cInJvd1wiPlxyXG5cclxuICAgICAgPGRpdiBmeEZsZXggZnhMYXlvdXRBbGlnbj1cInN0YXJ0IGNlbnRlclwiPlxyXG4gICAgICAgIHt7aXRlbS5uYW1lfX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICAgICAge3tpdGVtLnR5cGV9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBmeExheW91dD1cInJvd1wiID5cclxuICAgICAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgICAgICAgPGEgbWF0LWljb24tYnV0dG9uIFtyb3V0ZXJMaW5rXT1cIlsnLi4vdXBzZXJ0JyAsIGl0ZW0ubmFtZV1cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiZWRpdCBwYWdlXCI+ZWRpdDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiZGVsZXRlKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiZGVsZXRlIHBhZ2VcIj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgICAgPGEgbWF0LWljb24tYnV0dG9uIFtyb3V0ZXJMaW5rXT1cIlsnL3BhZ2UnICwgaXRlbS5uYW1lXVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cImVkaXQgcGFnZVwiPnJlbW92ZV9yZWRfZXllPC9tYXQtaWNvbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlc01hbmFnZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHBhZ2VzJDogT2JzZXJ2YWJsZTxQYWdlTW9kZWxbXT47XHJcblx0Y29uc3RydWN0b3IocHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMucGFnZXMkID0gdGhpcy5zdG9yZS5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS5wYWdlcy5kYi5kYXRhKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRQYWdlc1N0YXJ0QWN0aW9uKCkpO1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiB2aWV3IG1ldGhvZHNcclxuXHQgKi9cclxuXHRkZWxldGUocGFnZTogUGFnZU1vZGVsKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEZWxldGVQYWdlU3RhcnRBY3Rpb24ocGFnZS5faWQpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgUGFnZVZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L3BhZ2Utdmlldy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUm9vdENvbXBvbmVudCB9IGZyb20gXCIuL3Jvb3Qvcm9vdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXBzZXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vdXBzZXJ0L3Vwc2VydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUGFnZXNNYW5hZ2VtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vbWFuZ2VtZW50L3BhZ2UtbWFuYWdlbWVudC5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwicGFnZXNcIixcclxuXHRcdGNvbXBvbmVudDogUm9vdENvbXBvbmVudCxcclxuXHRcdGNoaWxkcmVuOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcIm1hbmFnZW1lbnRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFBhZ2VzTWFuYWdlbWVudENvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJ1cHNlcnRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFVwc2VydENvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJ1cHNlcnQvOm5hbWVcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFVwc2VydENvbXBvbmVudFxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiBcInBhZ2UvOm5hbWVcIixcclxuXHRcdGNvbXBvbmVudDogUGFnZVZpZXdDb21wb25lbnRcclxuXHR9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gUGFnZXNBY3Rpb25UeXBlcyB7XHJcblx0VVBTRVJUID0gXCJbUEFHRV1bREJdIFVQU0VSVFwiLFxyXG5cdERFTEVURSA9IFwiW1BBR0VdW0RCXSBERUxFVEVcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0UGFnZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFBhZ2VzQWN0aW9uVHlwZXMuVVBTRVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYWdlTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGVsZXRlUGFnZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFBhZ2VzQWN0aW9uVHlwZXMuREVMRVRFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYWdlTW9kZWwpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFBhZ2VzQWN0aW9ucyA9IFVwc2VydFBhZ2VBY3Rpb24gfCBEZWxldGVQYWdlQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBwbHVjayB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgR0VUX1BBR0VfQUNUSU9OX1RZUEVTLCBHRVRfUEFHRVNfQUNUSU9OX1RZUEVTLCBERUxFVEVfUEFHRV9BQ1RJT05fVFlQRVMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVcHNlcnRQYWdlQWN0aW9uLCBEZWxldGVQYWdlQWN0aW9uIH0gZnJvbSBcIi4vcGFnZXMuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGFnZURiRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+KSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfUEFHRV9BQ1RJT05fVFlQRVMuU1VDQ0VFRClcclxuXHRcdC5waXBlKHBsdWNrKFwicGF5bG9hZFwiKSwgbWFwKChwYWdlOiBQYWdlTW9kZWwpID0+IG5ldyBVcHNlcnRQYWdlQWN0aW9uKFsgcGFnZSBdKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnRNYW55JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX1BBR0VTX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKHBhZ2VzOiBQYWdlTW9kZWxbXSkgPT4gbmV3IFVwc2VydFBhZ2VBY3Rpb24ocGFnZXMpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGRlbGV0ZSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKERFTEVURV9QQUdFX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKHBhZ2U6IFBhZ2VNb2RlbCkgPT4gbmV3IERlbGV0ZVBhZ2VBY3Rpb24ocGFnZSkpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuaW1wb3J0IHsgUGFnZXNBY3Rpb25zLCBQYWdlc0FjdGlvblR5cGVzIH0gZnJvbSBcIi4vcGFnZXMuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0ZGF0YTogUGFnZU1vZGVsW107XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0ZGF0YTogW11cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFBhZ2VzQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRsZXQgX2RhdGE6IFBhZ2VNb2RlbFtdO1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgUGFnZXNBY3Rpb25UeXBlcy5VUFNFUlQ6XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRfZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdGxldCBuZXdQYWdlcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cdFx0XHRpZiAoIShuZXdQYWdlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG5cdFx0XHRcdG5ld1BhZ2VzID0gWyBuZXdQYWdlcyBdO1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCInUGFnZXNBY3Rpb25UeXBlcy5VUFNFUlQnIGRvZXMgbm90IGdldCBhcnJheSBwYXlsb2FkXCIpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRuZXdQYWdlcy5mb3JFYWNoKChuZXdQYWdlKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgZXhpc3RlZFBhZ2VJbmRleCA9IF9kYXRhLmZpbmRJbmRleCgodykgPT4gdy5faWQgPT0gbmV3UGFnZS5faWQpO1xyXG5cdFx0XHRcdGlmIChleGlzdGVkUGFnZUluZGV4ID4gLTEpIHtcclxuXHRcdFx0XHRcdF9kYXRhLnNwbGljZShleGlzdGVkUGFnZUluZGV4LCAxLCBuZXdQYWdlKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0X2RhdGEucHVzaChuZXdQYWdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBfZGF0YVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgUGFnZXNBY3Rpb25UeXBlcy5ERUxFVEU6XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRfZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblxyXG5cdFx0XHRjb25zdCBwYWdlSW5kZXggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleCgodykgPT4gdy5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKTtcclxuXHRcdFx0X2RhdGEuc3BsaWNlKHBhZ2VJbmRleCwgMSk7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IF9kYXRhXHJcblx0XHRcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBhZ2VzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIiwiaW1wb3J0ICogYXMgZnJvbVJvb3QgZnJvbSBcIi4vcm9vdC9wYWdlcy5yZWR1Y2Vyc1wiO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxyXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VTdGF0ZSB7XHJcblx0ZGI6IGZyb21Sb290LlN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUGFnZVJlZHVjZXIgPSB7XHJcblx0ZGI6IGZyb21Sb290LlJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xyXG5cdHBhZ2VzOiBQYWdlU3RhdGU7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3BhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHRVRfUEFHRV9BQ1RJT05fVFlQRVMsIEdldFBhZ2VBY3Rpb25zLCBHZXRQYWdlU3VjY2VlZEFjdGlvbiwgR2V0UGFnZUZhaWxlZEFjdGlvbiB9IGZyb20gXCIuL2dldC1wYWdlLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdldFBhZ2VBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPEdldFBhZ2VBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBQYWdlU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfUEFHRV9BQ1RJT05fVFlQRVMuU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKChhY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChwYXlsb2FkKSA9PiB0aGlzLnNlcnZpY2UuZ2V0KHBheWxvYWQpKSxcclxuXHRcdFx0bWFwKChyZXMpID0+IG5ldyBHZXRQYWdlU3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgR2V0UGFnZUZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3BhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG5cdEdFVF9QQUdFU19BQ1RJT05fVFlQRVMsXHJcblx0R2V0UGFnZXNBY3Rpb25zLFxyXG5cdEdldFBhZ2VzU3VjY2VlZEFjdGlvbixcclxuXHRHZXRQYWdlc0ZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL2dldC1wYWdlcy5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHZXRQYWdlc0FwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8R2V0UGFnZXNBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBQYWdlU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfUEFHRVNfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdHN3aXRjaE1hcCgoKSA9PlxyXG5cdFx0XHRcdHRoaXMuc2VydmljZVxyXG5cdFx0XHRcdFx0LmdldFBhZ2VzKClcclxuXHRcdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0XHRtYXAoKHJlcykgPT4gbmV3IEdldFBhZ2VzU3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0XHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgR2V0UGFnZXNGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdClcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3BhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG5cdFVQU0VSVF9QQUdFX0FDVElPTl9UWVBFUyxcclxuXHRVcHNlcnRQYWdlQWN0aW9ucyxcclxuXHRVcHNlcnRQYWdlU3VjY2VlZEFjdGlvbixcclxuXHRVcHNlcnRQYWdlRmFpbGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vdXBzZXJ0LXBhZ2UuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0UGFnZUFwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8VXBzZXJ0UGFnZUFjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IFBhZ2VTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFVQU0VSVF9QQUdFX0FDVElPTl9UWVBFUy5TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoKGFjdGlvbikgPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKHBheWxvYWQpID0+IHRoaXMuc2VydmljZS51cHNlcnQocGF5bG9hZCkpLFxyXG5cdFx0XHRtYXAoKHJlcykgPT4gbmV3IFVwc2VydFBhZ2VTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRjYXRjaEVycm9yKChlcnIpID0+IG9mKG5ldyBVcHNlcnRQYWdlRmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vcGFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0REVMRVRFX1BBR0VfQUNUSU9OX1RZUEVTLFxyXG5cdERlbGV0ZVBhZ2VBY3Rpb25zLFxyXG5cdERlbGV0ZVBhZ2VTdWNjZWVkQWN0aW9uLFxyXG5cdERlbGV0ZVBhZ2VGYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi9kZWxldGUtcGFnZS5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEZWxldGVQYWdlQXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxEZWxldGVQYWdlQWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogUGFnZVNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoREVMRVRFX1BBR0VfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcCgoYWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgocGF5bG9hZCkgPT4gdGhpcy5zZXJ2aWNlLmRlbGV0ZShwYXlsb2FkKSksXHJcblx0XHRcdG1hcCgocmVzKSA9PiBuZXcgRGVsZXRlUGFnZVN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IERlbGV0ZVBhZ2VGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xuXG5pbXBvcnQgeyBOZ3NHcmlkTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZ3JpZFwiO1xuXG5pbXBvcnQgeyBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vcGFnZS1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgUGFnZVZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L3BhZ2Utdmlldy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBhZ2VzTWFuYWdlbWVudENvbXBvbmVudCB9IGZyb20gXCIuL21hbmdlbWVudC9wYWdlLW1hbmFnZW1lbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSb290Q29tcG9uZW50IH0gZnJvbSBcIi4vcm9vdC9yb290LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVXBzZXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vdXBzZXJ0L3Vwc2VydC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBQYWdlTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vcGFnZS5jb25maWdcIjtcbmltcG9ydCB7IFBhZ2VDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3BhZ2UtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3BhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgUGFnZURiRWZmZWN0cyB9IGZyb20gXCIuL3Jvb3QvcGFnZXMuZWZmZWN0c1wiO1xuaW1wb3J0IHsgUGFnZVJlZHVjZXIgfSBmcm9tIFwiLi9wYWdlLnJlZHVjZXJcIjtcbmltcG9ydCB7IEdldFBhZ2VBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL2dldC1wYWdlL2dldC1wYWdlLmVmZmVjdHNcIjtcbmltcG9ydCB7IEdldFBhZ2VzQXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS9nZXQtcGFnZXMvZ2V0LXBhZ2VzLmVmZmVjdHNcIjtcbmltcG9ydCB7IFVwc2VydFBhZ2VBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL3Vwc2VydC1wYWdlL3Vwc2VydC1wYWdlLmVmZmVjdHNcIjtcbmltcG9ydCB7IERlbGV0ZVBhZ2VBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL2RlbGV0ZS1wYWdlL2RlbGV0ZS1wYWdlLmVmZmVjdHNcIjtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRSb3V0ZXJNb2R1bGUsXG5cdFx0TWF0SW5wdXRNb2R1bGUsXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxuXHRcdE1hdENhcmRNb2R1bGUsXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxuXHRcdE1hdEljb25Nb2R1bGUsXG5cdFx0RmxleExheW91dE1vZHVsZSxcblx0XHRGb3Jtc01vZHVsZSxcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRcdE5nc0dyaWRNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbIFBhZ2VWaWV3Q29tcG9uZW50LCBQYWdlc01hbmFnZW1lbnRDb21wb25lbnQsIFJvb3RDb21wb25lbnQsIFVwc2VydENvbXBvbmVudCBdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3NQYWdlTW9kdWxlIHtcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogUGFnZU1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogTmdzUGFnZVJvb3RNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0sIFBhZ2VDb25maWd1cmF0aW9uU2VydmljZSwgUGFnZVNlcnZpY2UgXVxuXHRcdH07XG5cdH1cbn1cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdE5nc1BhZ2VNb2R1bGUsXG5cdFx0Um91dGluZ01vZHVsZSxcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwicGFnZXNcIiwgUGFnZVJlZHVjZXIpLFxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbXG5cdFx0XHRQYWdlRGJFZmZlY3RzLFxuXHRcdFx0R2V0UGFnZUFwaUVmZmVjdHMsXG5cdFx0XHRHZXRQYWdlc0FwaUVmZmVjdHMsXG5cdFx0XHRVcHNlcnRQYWdlQXBpRWZmZWN0cyxcblx0XHRcdERlbGV0ZVBhZ2VBcGlFZmZlY3RzXG5cdFx0XSlcblx0XSxcblx0ZXhwb3J0czogWyBOZ3NQYWdlTW9kdWxlIF1cbn0pXG5leHBvcnQgY2xhc3MgTmdzUGFnZVJvb3RNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJmcm9tUm9vdC5SZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQWNhLHFCQUFxQixHQUFxQjtJQUN0RCxHQUFHLEVBQUU7UUFDSixVQUFVLEVBQUUsS0FBSztRQUNqQixlQUFlLEVBQUUsNkJBQTZCO0tBQzlDO0lBQ0QsU0FBUyxFQUFFO1FBQ1YsTUFBTSxFQUFFLFdBQVc7UUFDbkIsTUFBTSxFQUFFLHdCQUF3QjtRQUNoQyxJQUFJLEVBQUUsV0FBVztRQUNqQixHQUFHLEVBQUUseUJBQXlCO0tBQzlCO0NBQ0QsQ0FBQztBQUNGLHFCQUFhLG1CQUFtQixHQUFHLElBQUksY0FBYyxDQUFtQixrQkFBa0IsQ0FBQzs7Ozs7O0FDMUIzRjtJQWNDLGtDQUF5QyxVQUFVLEVBQVUsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7dUJBRHpFLElBQUksZUFBZSxDQUFDLHFCQUFxQixDQUFDO1FBRW5ELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7OztLQVFoQztJQWRELHNCQUFJLDRDQUFNOzs7O1FBQVY7WUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDcEI7OztPQUFBOztnQkFMRCxVQUFVOzs7O2dEQU9HLE1BQU0sU0FBQyxtQkFBbUI7Z0JBWi9CLEtBQUs7O21DQUZkOzs7Ozs7O0FDRUEsSUFBaUIsZ0JBQWdCO0FBQWpDLFdBQWlCLGdCQUFnQjtJQUNoQyxJQUFBO1FBQ0MsaUJBQVksU0FBYztZQUFkLDBCQUFBLEVBQUEsY0FBYztZQUExQixpQkFFQztZQURBLE1BQU0sQ0FBQyxJ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