import { MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDividerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgsGridModule } from '@soushians/grid';
import { HttpClient } from '@angular/common/http';
import { UserFacadeService } from '@soushians/user';
import { stringTemplate } from '@soushians/shared';
import { Location, CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __read, __assign, __decorate, __metadata } from 'tslib';
import { InjectionToken, Inject, Injectable, Component, ComponentFactoryResolver, ViewContainerRef, NgModule } from '@angular/core';
import { Actions, Effect, ofType, EffectsModule } from '@ngrx/effects';
import { map, filter, tap, take, switchMap, combineLatest, pluck, catchError } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MODULE_DEFAULT_CONFIG = {
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
var MODULE_CONFIG_TOKEN = new InjectionToken("PageModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        { type: Injectable }
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageService = /** @class */ (function () {
    function PageService(http, store, configurationService, _location, userFacadeService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        this._location = _location;
        this.userFacadeService = userFacadeService;
        this.userId$ = this.userFacadeService.getDisplayName().pipe(filter(function (i) { return i != undefined; }));
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
            return _this.http.get(stringTemplate(config.env.frontend_server + config.endpoints.get, { name: name }));
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
            return _this.http.get(config.env.frontend_server + config.endpoints.find);
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
        /** @type {?} */
        var model = new UpsertPageApiModel.Request(page);
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.upsert != ""; }), take(1), combineLatest(this.userId$), switchMap(function (_a) {
            var _b = __read(_a, 2), config = _b[0], userId = _b[1];
            return _this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody());
        }), map(function (response) { return response.Result; }), tap(function () { return _this._location.back(); }));
    };
    // delete(name: string) {
    // 	return this.configurationService.config$
    // 		.filter((config) => config.endpoints.deleteForm != "")
    // 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
    // }
    // delete(name: string) {
    // 	return this.configurationService.config$
    // 		.filter((config) => config.endpoints.deleteForm != "")
    // 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
    // }
    /**
     * @param {?} name
     * @return {?}
     */
    PageService.prototype.selectByName = 
    // delete(name: string) {
    // 	return this.configurationService.config$
    // 		.filter((config) => config.endpoints.deleteForm != "")
    // 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
    // }
    /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var _this = this;
        /** @type {?} */
        var subject = new BehaviorSubject(undefined);
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
        { type: Injectable }
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<div *ngIf=\"(page$ | async)?.grid\">\r\n    <ngs-grid [oid]=\"(page$ | async)?.grid\"></ngs-grid>\r\n</div>"
                }] }
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RootComponent = /** @class */ (function () {
    function RootComponent() {
    }
    RootComponent.decorators = [
        { type: Component, args: [{
                    selector: "page-root",
                    template: "<router-outlet></router-outlet>"
                }] }
    ];
    return RootComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        /** @type {?} */
        var page = __assign({}, this.formGroup.value);
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
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"main-container\">\r\n    <mat-card fxFlex=\"50\">\r\n        <mat-card-header>\r\n            <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n                <mat-icon>receipt</mat-icon>\r\n                <span>\u0627\u06CC\u062C\u0627\u062F \u0635\u0641\u062D\u0647 \u062C\u062F\u06CC\u062F</span>\r\n            </mat-card-title>\r\n            <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <span>\r\n                    \u0646\u0627\u0645 \u0635\u0641\u062D\u0647 \u0631\u0627 \u0648\u0627\u0631\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F \u0648 \u0628\u0647 \u0645\u0631\u062D\u0644\u0647 \u0628\u0639\u062F \u0628\u0631\u0648\u06CC\u062F ...\r\n                </span>\r\n            </mat-card-subtitle>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content [formGroup]=\"formGroup\">\r\n            <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n        <mat-card-actions align=\"end\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"upsert()\">\u062B\u0628\u062A</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</div>"
                }] }
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n  <div class=\"content-action\">\r\n    <mat-card class=\"with-sticky-action\">\r\n      <mat-card-header>\r\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n          <mat-icon>list_alt</mat-icon>\r\n          <span>\u0645\u062F\u06CC\u0631\u06CC\u062A \u0635\u063A\u062D\u0627\u062A</span>\r\n        </mat-card-title>\r\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <span>\r\n            \u062F\u0631 \u0627\u06CC\u0646 \u0642\u0633\u0645\u062A \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0635\u063A\u062D\u0627\u062A \u0628\u0627 \u06AF\u0631\u06CC\u062F\u0647\u0627\u06CC \u062F\u0644\u062E\u0648\u0627\u0647 \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u062C\u0627\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F ...\r\n          </span>\r\n        </mat-card-subtitle>\r\n      </mat-card-header>\r\n\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\">\r\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\r\n          <mat-card fxFlex.gt-lg=\"24\" fxFlex.lg=\"32\" fxFlex.md=\"48\" fxFlex.sm=\"100\" fxFlex.xs=\"100\" class=\"link\" *ngFor=\"let item of (pages$ | async)\"\r\n            fxFlex=\"32\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <div fxFlex fxLayoutAlign=\"start center\">\r\n              <h3> {{item.name}}</h3>\r\n            </div>\r\n            <div fxFlex fxLayoutAlign=\"center center\">\r\n              {{item.type}}\r\n            </div>\r\n            <div fxLayout=\"row\">\r\n              <div fxFlex=\"nogrow\">\r\n                <a mat-icon-button [routerLink]=\"['../upsert' , item.name]\">\r\n                  <mat-icon aria-label=\"edit page\">edit</mat-icon>\r\n                </a>\r\n              </div>\r\n\r\n              <div fxFlex=\"nogrow\">\r\n                <button mat-icon-button (click)=\"delete(item)\">\r\n                  <mat-icon aria-label=\"delete page\">delete</mat-icon>\r\n                </button>\r\n              </div>\r\n              <div fxFlex=\"nogrow\">\r\n                <a mat-icon-button [routerLink]=\"['/page' , item.name]\">\r\n                  <mat-icon aria-label=\"edit page\">remove_red_eye</mat-icon>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n    <div fxLayout=\"column\" class=\"sticky-action\">\r\n      <a color=\"primary\" mat-mini-fab routerLink=\"../upsert\">\r\n        <mat-icon>add</mat-icon>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: ["mat-card.link{padding:25px 15px;margin:.5%;box-sizing:border-box}"]
                }] }
    ];
    /** @nocollapse */
    PagesManagementComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return PagesManagementComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var routes = [
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
var RoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageDbEffects = /** @class */ (function () {
    function PageDbEffects(actions$) {
        this.actions$ = actions$;
        this.Upsert$ = this.actions$.pipe(ofType("[PAGE][API][GetPage] succeed" /* SUCCEED */), pluck("payload"), map(function (page) { return new UpsertPageAction([page]); }));
        this.UpsertMany$ = this.actions$.pipe(ofType("[GET_PAGES][API][GetPages] succeed" /* SUCCEED */), pluck("payload"), map(function (pages) { return new UpsertPageAction(pages); }));
        this.delete$ = this.actions$.pipe(ofType("[PAGE][API][DELETE] succeed" /* SUCCEED */), pluck("payload"), map(function (page) { return new DeletePageAction(page); }));
    }
    PageDbEffects.decorators = [
        { type: Injectable }
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = [];
/** @type {?} */
var initialState = {
    data: ɵ0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    /** @type {?} */
    var _data;
    switch (action.type) {
        case PagesActionTypes.UPSERT:
            debugger;
            _data = state.data.concat();
            /** @type {?} */
            var newPages = action.payload;
            if (!(newPages instanceof Array)) {
                newPages = [newPages];
                console.error("'PagesActionTypes.UPSERT' does not get array payload");
            }
            newPages.forEach(function (newPage) {
                /** @type {?} */
                var existedPageIndex = _data.findIndex(function (w) { return w._id == newPage._id; });
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
            /** @type {?} */
            var pageIndex = state.data.findIndex(function (w) { return w._id == action.payload._id; });
            _data.splice(pageIndex, 1);
            return __assign({}, state, { data: _data });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PageReducer = {
    db: Reducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GetPageApiEffects = /** @class */ (function () {
    function GetPageApiEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[PAGE][API][GetPage] start" /* START */), map(function (action) { return action.payload; }), switchMap(function (payload) { return _this.service.get(payload); }), map(function (res) { return new GetPageSucceedAction(res); }), catchError(function (err) { return of(new GetPageFailedAction(err)); }));
    }
    GetPageApiEffects.decorators = [
        { type: Injectable }
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GetPagesApiEffects = /** @class */ (function () {
    function GetPagesApiEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[GET_PAGES][API][GetPages] start" /* START */), switchMap(function () {
            return _this.service
                .getPages()
                .pipe(map(function (res) { return new GetPagesSucceedAction(res); }), catchError(function (err) { return of(new GetPagesFailedAction(err)); }));
        }));
    }
    GetPagesApiEffects.decorators = [
        { type: Injectable }
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UpsertPageApiEffects = /** @class */ (function () {
    function UpsertPageApiEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[UPSERT_PAGE][API][UpsertPage] start" /* START */), map(function (action) { return action.payload; }), switchMap(function (payload) { return _this.service.upsert(payload); }), map(function (res) { return new UpsertPageSucceedAction(res); }), catchError(function (err) { return of(new UpsertPageFailedAction(err)); }));
    }
    UpsertPageApiEffects.decorators = [
        { type: Injectable }
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DeletePageApiEffects = /** @class */ (function () {
    function DeletePageApiEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[PAGE][API][DELETE] start" /* START */), map(function (action) { return action.payload; }), switchMap(function (payload) { return _this.service.delete(payload); }), map(function (res) { return new DeletePageSucceedAction(res); }), catchError(function (err) { return of(new DeletePageFailedAction(err)); }));
    }
    DeletePageApiEffects.decorators = [
        { type: Injectable }
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                },] }
    ];
    return NgsPageRootModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgsPageModule, NgsPageRootModule, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, PagesManagementComponent as ɵf, RoutingModule as ɵi, PageReducer as ɵb, PageDbEffects as ɵk, Reducer as ɵj, RootComponent as ɵg, DeletePageApiEffects as ɵr, GetPageApiEffects as ɵl, GetPagesApiEffects as ɵn, UpsertPageApiEffects as ɵp, PageConfigurationService as ɵe, PageService as ɵd, UpsertComponent as ɵh, PageViewComponent as ɵa };

//# sourceMappingURL=soushians-page.js.map