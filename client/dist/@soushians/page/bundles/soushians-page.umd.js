(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/material'), require('@angular/flex-layout'), require('@soushians/grid'), require('@angular/common/http'), require('@soushians/user'), require('@soushians/shared'), require('@angular/common'), require('@angular/router'), require('@ngrx/store'), require('@angular/forms'), require('@angular/core'), require('@ngrx/effects'), require('rxjs/operators'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@soushians/page', ['exports', '@angular/material', '@angular/flex-layout', '@soushians/grid', '@angular/common/http', '@soushians/user', '@soushians/shared', '@angular/common', '@angular/router', '@ngrx/store', '@angular/forms', '@angular/core', '@ngrx/effects', 'rxjs/operators', 'rxjs'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.page = {}),global.ng.material,global.ng['flex-layout'],global.grid,global.ng.common.http,global.user,global.shared,global.ng.common,global.ng.router,global.store,global.ng.forms,global.ng.core,global.effects,global.rxjs.operators,global.rxjs));
}(this, (function (exports,material,flexLayout,grid,http,user,shared,common,router,store,forms,core,effects,operators,rxjs) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }

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
    var MODULE_CONFIG_TOKEN = new core.InjectionToken("PageModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageConfigurationService = /** @class */ (function () {
        function PageConfigurationService(configFile, store$$1) {
            this.store = store$$1;
            this.config$ = new rxjs.BehaviorSubject(MODULE_DEFAULT_CONFIG);
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
             */ function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        PageConfigurationService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        PageConfigurationService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
                { type: store.Store }
            ];
        };
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
                if (initValue === void 0) {
                    initValue = {};
                }
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
                if (initValue === void 0) {
                    initValue = {};
                }
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
                if (initValue === void 0) {
                    initValue = {};
                }
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
            var _b = _a === void 0 ? {} : _a, _id = _b._id, name = _b.name, grid$$1 = _b.grid;
            this._id = _id;
            this.name = name || "";
            this.grid = grid$$1 || "";
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
                if (page === void 0) {
                    page = {};
                }
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
        function PageService(http$$1, store$$1, configurationService, _location, userFacadeService) {
            this.http = http$$1;
            this.store = store$$1;
            this.configurationService = configurationService;
            this._location = _location;
            this.userFacadeService = userFacadeService;
            this.userId$ = this.userFacadeService.getDisplayName().pipe(operators.filter(function (i) { return i != undefined; }));
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
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.get !== ""; }), operators.take(1), operators.combineLatest(this.userId$), operators.switchMap(function (_a) {
                    var _b = __read(_a, 2), config = _b[0], userId = _b[1];
                    return _this.http.get(shared.stringTemplate(config.env.frontend_server + config.endpoints.get, { name: name }));
                }), operators.map(function (response) { return response.Result; }));
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
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.delete !== ""; }), operators.take(1), operators.switchMap(function (config) {
                    return _this.http.delete(shared.stringTemplate(config.env.frontend_server + config.endpoints.delete, { _id: _id }));
                }), operators.map(function (response) { return response.Result; }));
            };
        /**
         * @return {?}
         */
        PageService.prototype.getPages = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.find != ""; }), operators.combineLatest(this.userId$), operators.switchMap(function (_a) {
                    var _b = __read(_a, 2), config = _b[0], userId = _b[1];
                    return _this.http.get(config.env.frontend_server + config.endpoints.find);
                }), operators.map(function (response) { return response.Result; }));
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
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.upsert != ""; }), operators.take(1), operators.combineLatest(this.userId$), operators.switchMap(function (_a) {
                    var _b = __read(_a, 2), config = _b[0], userId = _b[1];
                    return _this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody());
                }), operators.map(function (response) { return response.Result; }), operators.tap(function () { return _this._location.back(); }));
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
                var subject = new rxjs.BehaviorSubject(undefined);
                this.store
                    .select(function (state) { return state.pages.db.data; })
                    .pipe(operators.filter(function (pages) { return pages != null; }), operators.map(function (pages) { return pages.find(function (page) { return page.name == name; }); }), operators.tap(function (page) {
                    if (page == null) {
                        debugger;
                        _this.store.dispatch(new GetPageStartAction(name));
                    }
                }))
                    .subscribe(function (page) { return subject.next(page); });
                return subject.asObservable();
            };
        PageService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        PageService.ctorParameters = function () {
            return [
                { type: http.HttpClient },
                { type: store.Store },
                { type: PageConfigurationService },
                { type: common.Location },
                { type: user.UserFacadeService }
            ];
        };
        return PageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageViewComponent = /** @class */ (function () {
        function PageViewComponent(store$$1, service, route, resolver, container) {
            this.store = store$$1;
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
                this.page$ = this.route.params.pipe(operators.pluck("name"), operators.switchMap(function (name) { return _this.service.selectByName(name); }), operators.filter(function (page) { return page != undefined; }));
            };
        PageViewComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<div *ngIf=\"(page$ | async)?.grid\">\r\n    <ngs-grid [oid]=\"(page$ | async)?.grid\"></ngs-grid>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        PageViewComponent.ctorParameters = function () {
            return [
                { type: store.Store },
                { type: PageService },
                { type: router.ActivatedRoute },
                { type: core.ComponentFactoryResolver },
                { type: core.ViewContainerRef }
            ];
        };
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
            { type: core.Component, args: [{
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
        function UpsertComponent(store$$1, route, service) {
            this.store = store$$1;
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
                this.formGroup = new forms.FormGroup({
                    _id: new forms.FormControl(""),
                    name: new forms.FormControl(""),
                    grid: new forms.FormControl("")
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
                this.page$ = this.route.params.pipe(operators.pluck("name"), operators.filter(function (name) { return name != undefined; }), operators.switchMap(function (name) { return _this.service.selectByName(name); }), operators.filter(function (page) { return page != undefined; }));
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
            { type: core.Component, args: [{
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"main-container\">\r\n    <mat-card fxFlex=\"50\">\r\n        <mat-card-header>\r\n            <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n                <mat-icon>receipt</mat-icon>\r\n                <span>\u0627\u06CC\u062C\u0627\u062F \u0635\u0641\u062D\u0647 \u062C\u062F\u06CC\u062F</span>\r\n            </mat-card-title>\r\n            <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <span>\r\n                    \u0646\u0627\u0645 \u0635\u0641\u062D\u0647 \u0631\u0627 \u0648\u0627\u0631\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F \u0648 \u0628\u0647 \u0645\u0631\u062D\u0644\u0647 \u0628\u0639\u062F \u0628\u0631\u0648\u06CC\u062F ...\r\n                </span>\r\n            </mat-card-subtitle>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content [formGroup]=\"formGroup\">\r\n            <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n        <mat-card-actions align=\"end\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"upsert()\">\u062B\u0628\u062A</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        UpsertComponent.ctorParameters = function () {
            return [
                { type: store.Store },
                { type: router.ActivatedRoute },
                { type: PageService }
            ];
        };
        return UpsertComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PagesManagementComponent = /** @class */ (function () {
        function PagesManagementComponent(store$$1) {
            this.store = store$$1;
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
            { type: core.Component, args: [{
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n  <div class=\"content-action\">\r\n    <mat-card class=\"with-sticky-action\">\r\n      <mat-card-header>\r\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n          <mat-icon>list_alt</mat-icon>\r\n          <span>\u0645\u062F\u06CC\u0631\u06CC\u062A \u0635\u063A\u062D\u0627\u062A</span>\r\n        </mat-card-title>\r\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <span>\r\n            \u062F\u0631 \u0627\u06CC\u0646 \u0642\u0633\u0645\u062A \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0635\u063A\u062D\u0627\u062A \u0628\u0627 \u06AF\u0631\u06CC\u062F\u0647\u0627\u06CC \u062F\u0644\u062E\u0648\u0627\u0647 \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u062C\u0627\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F ...\r\n          </span>\r\n        </mat-card-subtitle>\r\n      </mat-card-header>\r\n\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\">\r\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\r\n          <mat-card fxFlex.gt-lg=\"24\" fxFlex.lg=\"32\" fxFlex.md=\"48\" fxFlex.sm=\"100\" fxFlex.xs=\"100\" class=\"link\" *ngFor=\"let item of (pages$ | async)\"\r\n            fxFlex=\"32\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <div fxFlex fxLayoutAlign=\"start center\">\r\n              <h3> {{item.name}}</h3>\r\n            </div>\r\n            <div fxFlex fxLayoutAlign=\"center center\">\r\n              {{item.type}}\r\n            </div>\r\n            <div fxLayout=\"row\">\r\n              <div fxFlex=\"nogrow\">\r\n                <a mat-icon-button [routerLink]=\"['../upsert' , item.name]\">\r\n                  <mat-icon aria-label=\"edit page\">edit</mat-icon>\r\n                </a>\r\n              </div>\r\n\r\n              <div fxFlex=\"nogrow\">\r\n                <button mat-icon-button (click)=\"delete(item)\">\r\n                  <mat-icon aria-label=\"delete page\">delete</mat-icon>\r\n                </button>\r\n              </div>\r\n              <div fxFlex=\"nogrow\">\r\n                <a mat-icon-button [routerLink]=\"['/page' , item.name]\">\r\n                  <mat-icon aria-label=\"edit page\">remove_red_eye</mat-icon>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n    <div fxLayout=\"column\" class=\"sticky-action\">\r\n      <a color=\"primary\" mat-mini-fab routerLink=\"../upsert\">\r\n        <mat-icon>add</mat-icon>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>",
                        styles: ["mat-card.link{padding:25px 15px;margin:.5%;box-sizing:border-box}"]
                    }] }
        ];
        /** @nocollapse */
        PagesManagementComponent.ctorParameters = function () {
            return [
                { type: store.Store }
            ];
        };
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
    var RoutingModule = router.RouterModule.forChild(routes);

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
            this.Upsert$ = this.actions$.pipe(effects.ofType("[PAGE][API][GetPage] succeed" /* SUCCEED */), operators.pluck("payload"), operators.map(function (page) { return new UpsertPageAction([page]); }));
            this.UpsertMany$ = this.actions$.pipe(effects.ofType("[GET_PAGES][API][GetPages] succeed" /* SUCCEED */), operators.pluck("payload"), operators.map(function (pages) { return new UpsertPageAction(pages); }));
            this.delete$ = this.actions$.pipe(effects.ofType("[PAGE][API][DELETE] succeed" /* SUCCEED */), operators.pluck("payload"), operators.map(function (page) { return new DeletePageAction(page); }));
        }
        PageDbEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        PageDbEffects.ctorParameters = function () {
            return [
                { type: effects.Actions }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], PageDbEffects.prototype, "Upsert$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], PageDbEffects.prototype, "UpsertMany$", void 0);
        __decorate([
            effects.Effect(),
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
        if (state === void 0) {
            state = initialState;
        }
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
            this.start$ = this.actions$.pipe(effects.ofType("[PAGE][API][GetPage] start" /* START */), operators.map(function (action) { return action.payload; }), operators.switchMap(function (payload) { return _this.service.get(payload); }), operators.map(function (res) { return new GetPageSucceedAction(res); }), operators.catchError(function (err) { return rxjs.of(new GetPageFailedAction(err)); }));
        }
        GetPageApiEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GetPageApiEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: PageService }
            ];
        };
        __decorate([
            effects.Effect(),
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
            this.start$ = this.actions$.pipe(effects.ofType("[GET_PAGES][API][GetPages] start" /* START */), operators.switchMap(function () {
                return _this.service
                    .getPages()
                    .pipe(operators.map(function (res) { return new GetPagesSucceedAction(res); }), operators.catchError(function (err) { return rxjs.of(new GetPagesFailedAction(err)); }));
            }));
        }
        GetPagesApiEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GetPagesApiEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: PageService }
            ];
        };
        __decorate([
            effects.Effect(),
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
            this.start$ = this.actions$.pipe(effects.ofType("[UPSERT_PAGE][API][UpsertPage] start" /* START */), operators.map(function (action) { return action.payload; }), operators.switchMap(function (payload) { return _this.service.upsert(payload); }), operators.map(function (res) { return new UpsertPageSucceedAction(res); }), operators.catchError(function (err) { return rxjs.of(new UpsertPageFailedAction(err)); }));
        }
        UpsertPageApiEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        UpsertPageApiEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: PageService }
            ];
        };
        __decorate([
            effects.Effect(),
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
            this.start$ = this.actions$.pipe(effects.ofType("[PAGE][API][DELETE] start" /* START */), operators.map(function (action) { return action.payload; }), operators.switchMap(function (payload) { return _this.service.delete(payload); }), operators.map(function (res) { return new DeletePageSucceedAction(res); }), operators.catchError(function (err) { return rxjs.of(new DeletePageFailedAction(err)); }));
        }
        DeletePageApiEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DeletePageApiEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: PageService }
            ];
        };
        __decorate([
            effects.Effect(),
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            material.MatInputModule,
                            material.MatFormFieldModule,
                            material.MatCardModule,
                            material.MatButtonModule,
                            material.MatIconModule,
                            material.MatDividerModule,
                            flexLayout.FlexLayoutModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            grid.NgsGridModule
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
            { type: core.NgModule, args: [{
                        imports: [
                            NgsPageModule,
                            RoutingModule,
                            store.StoreModule.forFeature("pages", PageReducer),
                            effects.EffectsModule.forFeature([
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

    exports.NgsPageModule = NgsPageModule;
    exports.NgsPageRootModule = NgsPageRootModule;
    exports.MODULE_DEFAULT_CONFIG = MODULE_DEFAULT_CONFIG;
    exports.MODULE_CONFIG_TOKEN = MODULE_CONFIG_TOKEN;
    exports.ɵf = PagesManagementComponent;
    exports.ɵi = RoutingModule;
    exports.ɵb = PageReducer;
    exports.ɵk = PageDbEffects;
    exports.ɵj = Reducer;
    exports.ɵg = RootComponent;
    exports.ɵr = DeletePageApiEffects;
    exports.ɵl = GetPageApiEffects;
    exports.ɵn = GetPagesApiEffects;
    exports.ɵp = UpsertPageApiEffects;
    exports.ɵe = PageConfigurationService;
    exports.ɵd = PageService;
    exports.ɵh = UpsertComponent;
    exports.ɵa = PageViewComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=soushians-page.umd.js.map