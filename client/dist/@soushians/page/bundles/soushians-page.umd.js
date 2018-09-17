(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@ngrx/store'), require('rxjs/operators'), require('@angular/common/http'), require('@soushians/user'), require('@soushians/shared'), require('@angular/common'), require('@angular/router'), require('@angular/forms'), require('@ngrx/effects'), require('@angular/material'), require('@angular/flex-layout'), require('@soushians/grid')) :
    typeof define === 'function' && define.amd ? define('@soushians/page', ['exports', '@angular/core', 'rxjs', '@ngrx/store', 'rxjs/operators', '@angular/common/http', '@soushians/user', '@soushians/shared', '@angular/common', '@angular/router', '@angular/forms', '@ngrx/effects', '@angular/material', '@angular/flex-layout', '@soushians/grid'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.page = {}),global.ng.core,global.rxjs,null,global.rxjs.operators,global.ng.common.http,null,null,global.ng.common,global.ng.router,global.ng.forms,null,global.ng.material,global.ng['flex-layout'],null));
}(this, (function (exports,core,rxjs,store,operators,http,user,shared,common,router,forms,effects,material,flexLayout,grid) { 'use strict';

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
    var /** @type {?} */ MODULE_CONFIG_TOKEN = new core.InjectionToken("PageModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PageConfigurationService = (function () {
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
            { type: core.Injectable },
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
     * @suppress {checkTypes} checked by tsc
     */
    var GetPagesApiModel;
    (function (GetPagesApiModel) {
        var Request = (function () {
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
        var Response = (function () {
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
    var GetPagesStartAction = (function () {
        function GetPagesStartAction() {
            this.type = "[GET_PAGES][API][GetPages] start" /* START */;
        }
        return GetPagesStartAction;
    }());
    var GetPagesSucceedAction = (function () {
        function GetPagesSucceedAction(payload) {
            this.payload = payload;
            this.type = "[GET_PAGES][API][GetPages] succeed" /* SUCCEED */;
        }
        return GetPagesSucceedAction;
    }());
    var GetPagesFailedAction = (function () {
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
        var Request = (function () {
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
        var Response = (function () {
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
    var GetPageStartAction = (function () {
        function GetPageStartAction(payload) {
            this.payload = payload;
            this.type = "[PAGE][API][GetPage] start" /* START */;
        }
        return GetPageStartAction;
    }());
    var GetPageSucceedAction = (function () {
        function GetPageSucceedAction(payload) {
            this.payload = payload;
            this.type = "[PAGE][API][GetPage] succeed" /* SUCCEED */;
        }
        return GetPageSucceedAction;
    }());
    var GetPageFailedAction = (function () {
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
        var Request = (function () {
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
        var Response = (function () {
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
    var DeletePageStartAction = (function () {
        function DeletePageStartAction(payload) {
            this.payload = payload;
            this.type = "[PAGE][API][DELETE] start" /* START */;
        }
        return DeletePageStartAction;
    }());
    var DeletePageSucceedAction = (function () {
        function DeletePageSucceedAction(payload) {
            this.payload = payload;
            this.type = "[PAGE][API][DELETE] succeed" /* SUCCEED */;
        }
        return DeletePageSucceedAction;
    }());
    var DeletePageFailedAction = (function () {
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
    var PageModel = (function () {
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
     * @suppress {checkTypes} checked by tsc
     */
    var UpsertPageApiModel;
    (function (UpsertPageApiModel) {
        var Request = (function () {
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
        var Response = (function () {
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
    var UpsertPageStartAction = (function () {
        function UpsertPageStartAction(payload) {
            this.payload = payload;
            this.type = "[UPSERT_PAGE][API][UpsertPage] start" /* START */;
        }
        return UpsertPageStartAction;
    }());
    var UpsertPageSucceedAction = (function () {
        function UpsertPageSucceedAction(payload) {
            this.payload = payload;
            this.type = "[UPSERT_PAGE][API][UpsertPage] succeed" /* SUCCEED */;
        }
        return UpsertPageSucceedAction;
    }());
    var UpsertPageFailedAction = (function () {
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
    var PageService = (function () {
        function PageService(http$$1, store$$1, configurationService, _location, userFacadeService) {
            this.http = http$$1;
            this.store = store$$1;
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
                var /** @type {?} */ model = new UpsertPageApiModel.Request(page);
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
                var /** @type {?} */ subject = new rxjs.BehaviorSubject(undefined);
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
            { type: core.Injectable },
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
     * @suppress {checkTypes} checked by tsc
     */
    var PageViewComponent = (function () {
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
                        template: "<div *ngIf=\"(page$ | async)?.grid\">\n    <ngs-grid [oid]=\"(page$ | async)?.grid\"></ngs-grid>\n</div>"
                    },] },
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
     * @suppress {checkTypes} checked by tsc
     */
    var RootComponent = (function () {
        function RootComponent() {
        }
        RootComponent.decorators = [
            { type: core.Component, args: [{
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
    var UpsertComponent = (function () {
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
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-card fxFlex=\"50\">\n        <mat-card-content [formGroup]=\"formGroup\">\n            <mat-form-field>\n                <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\"  formControlName=\"name\">\n            </mat-form-field>\n        </mat-card-content>\n        <mat-card-actions align=\"end\">\n            <button mat-raised-button color=\"primary\" (click)=\"upsert()\">\u062B\u0628\u062A</button>\n        </mat-card-actions>\n    </mat-card>\n</div>"
                    },] },
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
     * @suppress {checkTypes} checked by tsc
     */
    var PagesManagementComponent = (function () {
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
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\n\n  <div class=\"content-action\">\n    <mat-card class=\"with-sticky-action\">\n      <mat-card-header>\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n          <mat-icon>settings_input_component</mat-icon>\n          <span>\u0645\u062F\u06CC\u0631\u06CC\u062A \u0635\u063A\u062D\u0627\u062A</span>\n        </mat-card-title>\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n          <span>\n            \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\n          </span>\n        </mat-card-subtitle>\n      </mat-card-header>\n\n      <div fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\">\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"20px\">\n          <mat-card class=\"cards-item\" *ngFor=\"let item of (pages$ | async)\" fxFlex=\"32\" fxLayout=\"row\">\n\n            <div fxFlex fxLayoutAlign=\"start center\">\n              <h3> {{item.name}}</h3>\n            </div>\n            <div fxFlex fxLayoutAlign=\"center center\">\n              {{item.type}}\n            </div>\n            <div fxLayout=\"row\">\n              <div fxFlex=\"nogrow\">\n                <a mat-icon-button [routerLink]=\"['../upsert' , item.name]\">\n                  <mat-icon aria-label=\"edit page\">edit</mat-icon>\n                </a>\n              </div>\n\n              <div fxFlex=\"nogrow\">\n                <button mat-icon-button (click)=\"delete(item)\">\n                  <mat-icon aria-label=\"delete page\">delete</mat-icon>\n                </button>\n              </div>\n              <div fxFlex=\"nogrow\">\n                <a mat-icon-button [routerLink]=\"['/page' , item.name]\">\n                  <mat-icon aria-label=\"edit page\">remove_red_eye</mat-icon>\n                </a>\n              </div>\n            </div>\n          </mat-card>\n        </div>\n      </div>\n    </mat-card>\n    <div fxLayout=\"column\" class=\"sticky-action\">\n      <a color=\"primary\" mat-mini-fab routerLink=\"../upsert\">\n        <mat-icon>add</mat-icon>\n      </a>\n    </div>\n  </div>\n</div>"
                    },] },
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
    var /** @type {?} */ RoutingModule = router.RouterModule.forChild(routes);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {string} */
    var PagesActionTypes = {
        UPSERT: "[PAGE][DB] UPSERT",
        DELETE: "[PAGE][DB] DELETE",
    };
    var UpsertPageAction = (function () {
        function UpsertPageAction(payload) {
            this.payload = payload;
            this.type = PagesActionTypes.UPSERT;
        }
        return UpsertPageAction;
    }());
    var DeletePageAction = (function () {
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
    var PageDbEffects = (function () {
        function PageDbEffects(actions$) {
            this.actions$ = actions$;
            this.Upsert$ = this.actions$
                .ofType("[PAGE][API][GetPage] succeed" /* SUCCEED */)
                .pipe(operators.pluck("payload"), operators.map(function (page) { return new UpsertPageAction([page]); }));
            this.UpsertMany$ = this.actions$
                .ofType("[GET_PAGES][API][GetPages] succeed" /* SUCCEED */)
                .pipe(operators.pluck("payload"), operators.map(function (pages) { return new UpsertPageAction(pages); }));
            this.delete$ = this.actions$
                .ofType("[PAGE][API][DELETE] succeed" /* SUCCEED */)
                .pipe(operators.pluck("payload"), operators.map(function (page) { return new DeletePageAction(page); }));
        }
        PageDbEffects.decorators = [
            { type: core.Injectable },
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
        if (state === void 0) {
            state = initialState;
        }
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
    var GetPageApiEffects = (function () {
        function GetPageApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$
                .ofType("[PAGE][API][GetPage] start" /* START */)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (payload) { return _this.service.get(payload); }), operators.map(function (res) { return new GetPageSucceedAction(res); }), operators.catchError(function (err) { return rxjs.of(new GetPageFailedAction(err)); }));
        }
        GetPageApiEffects.decorators = [
            { type: core.Injectable },
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
     * @suppress {checkTypes} checked by tsc
     */
    var GetPagesApiEffects = (function () {
        function GetPagesApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$
                .ofType("[GET_PAGES][API][GetPages] start" /* START */)
                .pipe(operators.switchMap(function () {
                return _this.service
                    .getPages()
                    .pipe(operators.map(function (res) { return new GetPagesSucceedAction(res); }), operators.catchError(function (err) { return rxjs.of(new GetPagesFailedAction(err)); }));
            }));
        }
        GetPagesApiEffects.decorators = [
            { type: core.Injectable },
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
     * @suppress {checkTypes} checked by tsc
     */
    var UpsertPageApiEffects = (function () {
        function UpsertPageApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$
                .ofType("[UPSERT_PAGE][API][UpsertPage] start" /* START */)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (payload) { return _this.service.upsert(payload); }), operators.map(function (res) { return new UpsertPageSucceedAction(res); }), operators.catchError(function (err) { return rxjs.of(new UpsertPageFailedAction(err)); }));
        }
        UpsertPageApiEffects.decorators = [
            { type: core.Injectable },
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
     * @suppress {checkTypes} checked by tsc
     */
    var DeletePageApiEffects = (function () {
        function DeletePageApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$
                .ofType("[PAGE][API][DELETE] start" /* START */)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (payload) { return _this.service.delete(payload); }), operators.map(function (res) { return new DeletePageSucceedAction(res); }), operators.catchError(function (err) { return rxjs.of(new DeletePageFailedAction(err)); }));
        }
        DeletePageApiEffects.decorators = [
            { type: core.Injectable },
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
     * @suppress {checkTypes} checked by tsc
     */
    var NgsPageModule = (function () {
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
                    },] },
        ];
        return NgsPageModule;
    }());
    var NgsPageRootModule = (function () {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXBhZ2UudW1kLmpzLm1hcCIsInNvdXJjZXMiOltudWxsLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvcGFnZS5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvc2VydmljZXMvcGFnZS1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvc2VydmljZXMvYXBpL2dldC1wYWdlcy9nZXQtcGFnZXMubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvc2VydmljZXMvYXBpL2dldC1wYWdlcy9nZXQtcGFnZXMuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9wYWdlL2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LXBhZ2UvZ2V0LXBhZ2UubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvc2VydmljZXMvYXBpL2dldC1wYWdlL2dldC1wYWdlLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvc2VydmljZXMvYXBpL2RlbGV0ZS1wYWdlL2RlbGV0ZS1wYWdlLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3NlcnZpY2VzL2FwaS9kZWxldGUtcGFnZS9kZWxldGUtcGFnZS5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL21vZGVscy9wYWdlLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3NlcnZpY2VzL2FwaS91cHNlcnQtcGFnZS91cHNlcnQtcGFnZS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9wYWdlL2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LXBhZ2UvdXBzZXJ0LXBhZ2UuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9wYWdlL2xpYi9zZXJ2aWNlcy9wYWdlLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvdmlldy9wYWdlLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3Jvb3Qvcm9vdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvdXBzZXJ0L3Vwc2VydC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvbWFuZ2VtZW50L3BhZ2UtbWFuYWdlbWVudC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvcGFnZS1yb3V0aW5nLm1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9wYWdlL2xpYi9yb290L3BhZ2VzLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvcm9vdC9wYWdlcy5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3Jvb3QvcGFnZXMucmVkdWNlcnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvcGFnZS5yZWR1Y2VyLnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3NlcnZpY2VzL2FwaS9nZXQtcGFnZS9nZXQtcGFnZS5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3NlcnZpY2VzL2FwaS9nZXQtcGFnZXMvZ2V0LXBhZ2VzLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvc2VydmljZXMvYXBpL3Vwc2VydC1wYWdlL3Vwc2VydC1wYWdlLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvc2VydmljZXMvYXBpL2RlbGV0ZS1wYWdlL2RlbGV0ZS1wYWdlLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvcGFnZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VNb2R1bGVDb25maWcge1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuXHR9O1xyXG5cdGVuZHBvaW50cz86IHtcclxuXHRcdGdldDogc3RyaW5nO1xyXG5cdFx0ZGVsZXRlOiBzdHJpbmc7XHJcblx0XHRmaW5kOiBzdHJpbmc7XHJcblx0XHR1cHNlcnQ6IHN0cmluZztcclxuXHR9O1xyXG59XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IFBhZ2VNb2R1bGVDb25maWcgPSB7XHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBmYWxzZSxcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogXCJmcm9udGVuZF9zZXJ2ZXIvZGlkL25vdC9zZXRcIlxyXG5cdH0sXHJcblx0ZW5kcG9pbnRzOiB7XHJcblx0XHR1cHNlcnQ6IFwiL2FwaS9wYWdlXCIsXHJcblx0XHRkZWxldGU6IFwiL2FwaS9wYWdlLyR7bW9kZWwuX2lkfVwiLFxyXG5cdFx0ZmluZDogXCIvYXBpL3BhZ2VcIixcclxuXHRcdGdldDogXCIvYXBpL3BhZ2UvJHttb2RlbC5uYW1lfVwiXHJcblx0fVxyXG59O1xyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxQYWdlTW9kdWxlQ29uZmlnPihcIlBhZ2VNb2R1bGVDb25maWdcIik7XHJcbiIsImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlTW9kdWxlQ29uZmlnLCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi4vcGFnZS5jb25maWdcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcGFnZS5yZWR1Y2VyXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQYWdlQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogUGFnZU1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoTU9EVUxFX0RFRkFVTFRfQ09ORklHKTtcclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZ0ZpbGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWdGaWxlKTtcclxuXHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHQvLyB0aGlzLnN0b3JlLnNlbGVjdChnZXRQYWdlTW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUoKHBhZ2VDb25maWcpID0+IHtcclxuXHRcdC8vIFx0aWYgKCFwYWdlQ29uZmlnKSB7XHJcblx0XHQvLyBcdFx0cmV0dXJuO1xyXG5cdFx0Ly8gXHR9XHJcblx0XHQvLyBcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgcGFnZUNvbmZpZy5Db25maWcpO1xyXG5cdFx0Ly8gXHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBHZXRQYWdlc0FwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWUgPSB7fSkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goKGtleSkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7fTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IFBhZ2VNb2RlbFtdO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEdldFBhZ2VzQXBpTW9kZWwgfSBmcm9tIFwiLi9nZXQtcGFnZXMubW9kZWxcIjtcclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBHRVRfUEFHRVNfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW0dFVF9QQUdFU11bQVBJXVtHZXRQYWdlc10gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbR0VUX1BBR0VTXVtBUEldW0dldFBhZ2VzXSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbR0VUX1BBR0VTXVtBUEldW0dldFBhZ2VzXSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0UGFnZXNTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9QQUdFU19BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFBhZ2VzU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9QQUdFU19BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZU1vZGVsW10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFBhZ2VzRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1BBR0VTX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR2V0UGFnZXNBY3Rpb25zID0gR2V0UGFnZXNTdGFydEFjdGlvbiB8IEdldFBhZ2VzU3VjY2VlZEFjdGlvbiB8IEdldFBhZ2VzRmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgR2V0UGFnZUFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRuYW1lOiBzdHJpbmc7XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWUgPSB7fSkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goKGtleSkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7fTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IFBhZ2VNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRQYWdlQXBpTW9kZWwgfSBmcm9tIFwiLi9nZXQtcGFnZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEdFVF9QQUdFX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltQQUdFXVtBUEldW0dldFBhZ2VdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW1BBR0VdW0FQSV1bR2V0UGFnZV0gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW1BBR0VdW0FQSV1bR2V0UGFnZV0gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldFBhZ2VTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9QQUdFX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRQYWdlU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9QQUdFX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYWdlTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFBhZ2VGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfUEFHRV9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldFBhZ2VBY3Rpb25zID0gR2V0UGFnZVN0YXJ0QWN0aW9uIHwgR2V0UGFnZVN1Y2NlZWRBY3Rpb24gfCBHZXRQYWdlRmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRGVsZXRlUGFnZUFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWUgPSB7fSkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goKGtleSkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7fTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IFBhZ2VNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIERFTEVURV9QQUdFX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltQQUdFXVtBUEldW0RFTEVURV0gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbUEFHRV1bQVBJXVtERUxFVEVdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltQQUdFXVtBUEldW0RFTEVURV0gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERlbGV0ZVBhZ2VTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERFTEVURV9QQUdFX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVQYWdlU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERFTEVURV9QQUdFX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYWdlTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERlbGV0ZVBhZ2VGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfUEFHRV9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIERlbGV0ZVBhZ2VBY3Rpb25zID0gRGVsZXRlUGFnZVN0YXJ0QWN0aW9uIHwgRGVsZXRlUGFnZVN1Y2NlZWRBY3Rpb24gfCBEZWxldGVQYWdlRmFpbGVkQWN0aW9uO1xyXG4iLCJleHBvcnQgY2xhc3MgUGFnZU1vZGVsIHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0Z3JpZDogc3RyaW5nO1xyXG5cdGNvbnN0cnVjdG9yKHsgX2lkLCBuYW1lLCBncmlkIH06IHsgX2lkPzogc3RyaW5nOyBuYW1lPzogc3RyaW5nOyBncmlkPzogc3RyaW5nIH0gPSB7fSkge1xyXG5cdFx0dGhpcy5faWQgPSBfaWQ7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lIHx8IFwiXCI7XHJcblx0XHR0aGlzLmdyaWQgPSBncmlkIHx8IFwiXCI7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBVcHNlcnRQYWdlQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdHBhZ2U6IFBhZ2VNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKHBhZ2UgPSB7fSkge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5wYWdlID0gbmV3IFBhZ2VNb2RlbChwYWdlKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMucGFnZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IFBhZ2VNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVcHNlcnRQYWdlQXBpTW9kZWwgfSBmcm9tIFwiLi91cHNlcnQtcGFnZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIFVQU0VSVF9QQUdFX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltVUFNFUlRfUEFHRV1bQVBJXVtVcHNlcnRQYWdlXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltVUFNFUlRfUEFHRV1bQVBJXVtVcHNlcnRQYWdlXSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbVVBTRVJUX1BBR0VdW0FQSV1bVXBzZXJ0UGFnZV0gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwc2VydFBhZ2VTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9QQUdFX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRQYWdlU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9QQUdFX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYWdlTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydFBhZ2VGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfUEFHRV9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVwc2VydFBhZ2VBY3Rpb25zID0gVXBzZXJ0UGFnZVN0YXJ0QWN0aW9uIHwgVXBzZXJ0UGFnZVN1Y2NlZWRBY3Rpb24gfCBVcHNlcnRQYWdlRmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHRhcCwgdGFrZSwgc3dpdGNoTWFwLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJGYWNhZGVTZXJ2aWNlIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcGFnZS5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFBhZ2VDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3BhZ2UtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBzdHJpbmdUZW1wbGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBHZXRQYWdlc0FwaU1vZGVsLCBHZXRQYWdlU3RhcnRBY3Rpb24sIFVwc2VydFBhZ2VBcGlNb2RlbCwgRGVsZXRlUGFnZUFwaU1vZGVsIH0gZnJvbSBcIi4vYXBpXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGFnZVNlcnZpY2Uge1xyXG5cdHVzZXJJZCQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IFBhZ2VDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgX2xvY2F0aW9uOiBMb2NhdGlvbixcclxuXHRcdHByaXZhdGUgdXNlckZhY2FkZVNlcnZpY2U6IFVzZXJGYWNhZGVTZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLnVzZXJJZCQgPSB0aGlzLnVzZXJGYWNhZGVTZXJ2aWNlLmdldERpc3BsYXlOYW1lKCkuZmlsdGVyKChpKSA9PiBpICE9IHVuZGVmaW5lZCk7XHJcblx0fVxyXG5cclxuXHRnZXQobmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxQYWdlTW9kZWw+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZ2V0ICE9PSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0Y29tYmluZUxhdGVzdCh0aGlzLnVzZXJJZCQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKFtjb25maWcsIHVzZXJJZF0pID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLmdldChzdHJpbmdUZW1wbGF0ZShjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuZ2V0LCB7IG5hbWUgfSkpXHJcblx0XHRcdCksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IFVwc2VydFBhZ2VBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZShfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UGFnZU1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmRlbGV0ZSAhPT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdHN3aXRjaE1hcCgoY29uZmlnKSA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5kZWxldGUoc3RyaW5nVGVtcGxhdGUoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmRlbGV0ZSwgeyBfaWQgfSkpXHJcblx0XHRcdCksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IERlbGV0ZVBhZ2VBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGdldFBhZ2VzKCk6IE9ic2VydmFibGU8UGFnZU1vZGVsW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZmluZCAhPSBcIlwiKSxcclxuXHRcdFx0Y29tYmluZUxhdGVzdCh0aGlzLnVzZXJJZCQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKFtjb25maWcsIHVzZXJJZF0pID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLmdldChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuZmluZClcclxuXHRcdFx0KSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogR2V0UGFnZXNBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0dXBzZXJ0PFQ+KHBhZ2U6IFVwc2VydFBhZ2VBcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxQYWdlTW9kZWw+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IFVwc2VydFBhZ2VBcGlNb2RlbC5SZXF1ZXN0KHBhZ2UpO1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy51cHNlcnQgIT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdGNvbWJpbmVMYXRlc3QodGhpcy51c2VySWQkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChbY29uZmlnLCB1c2VySWRdKSA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5wb3N0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy51cHNlcnQsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpXHJcblx0XHRcdCksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IFVwc2VydFBhZ2VBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KSxcclxuXHRcdFx0dGFwKCgpID0+IHRoaXMuX2xvY2F0aW9uLmJhY2soKSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdC8vIGRlbGV0ZShuYW1lOiBzdHJpbmcpIHtcclxuXHQvLyBcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHQvLyBcdFx0LmZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmRlbGV0ZUZvcm0gIT0gXCJcIilcclxuXHQvLyBcdFx0LnN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlRm9ybSkpO1xyXG5cdC8vIH1cclxuXHRzZWxlY3RCeU5hbWUobmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxQYWdlTW9kZWw+IHtcclxuXHRcdGNvbnN0IHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBhZ2VNb2RlbD4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLnBhZ2VzLmRiLmRhdGEpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdGZpbHRlcigocGFnZXMpID0+IHBhZ2VzICE9IG51bGwpLFxyXG5cdFx0XHRcdG1hcCgocGFnZXMpID0+IHBhZ2VzLmZpbmQoKHBhZ2UpID0+IHBhZ2UubmFtZSA9PSBuYW1lKSksXHJcblx0XHRcdFx0dGFwKChwYWdlKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAocGFnZSA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRQYWdlU3RhcnRBY3Rpb24obmFtZSkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZSgocGFnZSkgPT4gc3ViamVjdC5uZXh0KHBhZ2UpKTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0Q29tcG9uZW50UmVmLFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdERpcmVjdGl2ZSxcclxuXHRJbnB1dFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IHBsdWNrLCBmaWx0ZXIsIHN3aXRjaE1hcCwgbWFwLCBzdGFydFdpdGggfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9wYWdlLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcGFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBhZ2VDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wYWdlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cIihwYWdlJCB8IGFzeW5jKT8uZ3JpZFwiPlxyXG4gICAgPG5ncy1ncmlkIFtvaWRdPVwiKHBhZ2UkIHwgYXN5bmMpPy5ncmlkXCI+PC9uZ3MtZ3JpZD5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHBhZ2UkOiBPYnNlcnZhYmxlPFBhZ2VNb2RlbD47XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwdWJsaWMgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgc2VydmljZTogUGFnZVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXHJcblx0KSB7fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5fc2VsZWN0UGFnZSgpO1xyXG5cdH1cclxuXHRfc2VsZWN0UGFnZSgpIHtcclxuXHRcdHRoaXMucGFnZSQgPSB0aGlzLnJvdXRlLnBhcmFtcy5waXBlKFxyXG5cdFx0XHRwbHVjayhcIm5hbWVcIiksXHJcblx0XHRcdHN3aXRjaE1hcCgobmFtZTogc3RyaW5nKSA9PiB0aGlzLnNlcnZpY2Uuc2VsZWN0QnlOYW1lKG5hbWUpKSxcclxuXHRcdFx0ZmlsdGVyKChwYWdlKSA9PiBwYWdlICE9IHVuZGVmaW5lZClcclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJwYWdlLXJvb3RcIixcclxuXHR0ZW1wbGF0ZTogXCI8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3RDb21wb25lbnQge31cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0UGFnZVN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9wYWdlLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBwbHVjaywgc3dpdGNoTWFwLCBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcGFnZS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgPG1hdC1jYXJkIGZ4RmxleD1cIjUwXCI+XHJcbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoVcIiAgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8bWF0LWNhcmQtYWN0aW9ucyBhbGlnbj1cImVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJ1cHNlcnQoKVwiPsOYwqvDmMKow5jCqjwvYnV0dG9uPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFVwc2VydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0cGFnZSQ6IE9ic2VydmFibGU8UGFnZU1vZGVsPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHNlcnZpY2U6IFBhZ2VTZXJ2aWNlKSB7XHJcblx0XHR0aGlzLl9pbml0X2Zvcm1ncm91cCgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogdmlldyBtZXRob2RzXHJcblx0ICovXHJcblx0dXBzZXJ0KCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRjb25zdCBwYWdlID0ge1xyXG5cdFx0XHQuLi50aGlzLmZvcm1Hcm91cC52YWx1ZVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwc2VydFBhZ2VTdGFydEFjdGlvbihwYWdlKSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5fc2VsZWN0X3BhZ2UoKTtcclxuXHRcdHRoaXMuX3VwZGF0ZV9mb3JtZ3JvdXBfYmFzZV9vbl9wYWdlKCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBwcml2YXRlIG1ldGhvZHNcclxuXHQgKi9cclxuXHRfaW5pdF9mb3JtZ3JvdXAoKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRfaWQ6IG5ldyBGb3JtQ29udHJvbChcIlwiKSxcclxuXHRcdFx0bmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIpLFxyXG5cdFx0XHRncmlkOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0X3NlbGVjdF9wYWdlKCkge1xyXG5cdFx0dGhpcy5wYWdlJCA9IHRoaXMucm91dGUucGFyYW1zLnBpcGUoXHJcblx0XHRcdHBsdWNrKFwibmFtZVwiKSxcclxuXHRcdFx0ZmlsdGVyKChuYW1lKSA9PiBuYW1lICE9IHVuZGVmaW5lZCksXHJcblx0XHRcdHN3aXRjaE1hcCgobmFtZTogc3RyaW5nKSA9PiB0aGlzLnNlcnZpY2Uuc2VsZWN0QnlOYW1lKG5hbWUpKSxcclxuXHRcdFx0ZmlsdGVyKChwYWdlKSA9PiBwYWdlICE9IHVuZGVmaW5lZClcclxuXHRcdCk7XHJcblx0fVxyXG5cdF91cGRhdGVfZm9ybWdyb3VwX2Jhc2Vfb25fcGFnZSgpIHtcclxuXHRcdHRoaXMucGFnZSQuc3Vic2NyaWJlKChwYWdlKSA9PiB7XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUocGFnZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3BhZ2UucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHZXRQYWdlc1N0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS9nZXQtcGFnZXMvZ2V0LXBhZ2VzLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgRGVsZXRlUGFnZVN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiIGNsYXNzPVwibWFpbi1jb250YWluZXJcIj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQtYWN0aW9uXCI+XHJcbiAgICA8bWF0LWNhcmQgY2xhc3M9XCJ3aXRoLXN0aWNreS1hY3Rpb25cIj5cclxuICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICA8bWF0LWNhcmQtdGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjVweFwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uPnNldHRpbmdzX2lucHV0X2NvbXBvbmVudDwvbWF0LWljb24+XHJcbiAgICAgICAgICA8c3Bhbj7DmcKFw5jCr8ObwozDmMKxw5vCjMOYwqogw5jCtcOYwrrDmMKtw5jCp8OYwqo8L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8bWF0LWNhcmQtc3VidGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICDDmMK0w5jCp8OZwoXDmcKEIMOYwqrDmcKFw5jCp8OZwoXDm8KMIMOYwq/DmMKxw5jCrsOZwojDmMKnw5jCs8OYwqrDosKAwozDmcKHw5jCpyDDmMKnw5jCsiDDmcKCw5jCqMObwozDmcKEIMOYwq/DmMKnw5jCpsOYwrHDm8KMw5jCjCDDmMKsw5nChcOYwrnDosKAwozDmMKiw5nCiMOYwrHDm8KMIMOZwoggLi4uXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1zdWJ0aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcblxyXG4gICAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwiMTAwXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjBweFwiPlxyXG4gICAgICAgICAgPG1hdC1jYXJkIGNsYXNzPVwiY2FyZHMtaXRlbVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIChwYWdlcyQgfCBhc3luYylcIiBmeEZsZXg9XCIzMlwiIGZ4TGF5b3V0PVwicm93XCI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleCBmeExheW91dEFsaWduPVwic3RhcnQgY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGgzPiB7e2l0ZW0ubmFtZX19PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAge3tpdGVtLnR5cGV9fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBmeExheW91dD1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBtYXQtaWNvbi1idXR0b24gW3JvdXRlckxpbmtdPVwiWycuLi91cHNlcnQnICwgaXRlbS5uYW1lXVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cImVkaXQgcGFnZVwiPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImRlbGV0ZShpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cImRlbGV0ZSBwYWdlXCI+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBtYXQtaWNvbi1idXR0b24gW3JvdXRlckxpbmtdPVwiWycvcGFnZScgLCBpdGVtLm5hbWVdXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiZWRpdCBwYWdlXCI+cmVtb3ZlX3JlZF9leWU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbWF0LWNhcmQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBjbGFzcz1cInN0aWNreS1hY3Rpb25cIj5cclxuICAgICAgPGEgY29sb3I9XCJwcmltYXJ5XCIgbWF0LW1pbmktZmFiIHJvdXRlckxpbms9XCIuLi91cHNlcnRcIj5cclxuICAgICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VzTWFuYWdlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0cGFnZXMkOiBPYnNlcnZhYmxlPFBhZ2VNb2RlbFtdPjtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy5wYWdlcyQgPSB0aGlzLnN0b3JlLnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLnBhZ2VzLmRiLmRhdGEpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFBhZ2VzU3RhcnRBY3Rpb24oKSk7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIHZpZXcgbWV0aG9kc1xyXG5cdCAqL1xyXG5cdGRlbGV0ZShwYWdlOiBQYWdlTW9kZWwpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERlbGV0ZVBhZ2VTdGFydEFjdGlvbihwYWdlLl9pZCkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvcGFnZS12aWV3LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSb290Q29tcG9uZW50IH0gZnJvbSBcIi4vcm9vdC9yb290LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVcHNlcnRDb21wb25lbnQgfSBmcm9tIFwiLi91cHNlcnQvdXBzZXJ0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQYWdlc01hbmFnZW1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9tYW5nZW1lbnQvcGFnZS1tYW5hZ2VtZW50LmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogXCJwYWdlc1wiLFxyXG5cdFx0Y29tcG9uZW50OiBSb290Q29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwibWFuYWdlbWVudFwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogUGFnZXNNYW5hZ2VtZW50Q29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInVwc2VydFwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogVXBzZXJ0Q29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInVwc2VydC86bmFtZVwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogVXBzZXJ0Q29tcG9uZW50XHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6IFwicGFnZS86bmFtZVwiLFxyXG5cdFx0Y29tcG9uZW50OiBQYWdlVmlld0NvbXBvbmVudFxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBQYWdlc0FjdGlvblR5cGVzIHtcclxuXHRVUFNFUlQgPSBcIltQQUdFXVtEQl0gVVBTRVJUXCIsXHJcblx0REVMRVRFID0gXCJbUEFHRV1bREJdIERFTEVURVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRQYWdlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUGFnZXNBY3Rpb25UeXBlcy5VUFNFUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhZ2VNb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVQYWdlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUGFnZXNBY3Rpb25UeXBlcy5ERUxFVEU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhZ2VNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUGFnZXNBY3Rpb25zID0gVXBzZXJ0UGFnZUFjdGlvbiB8IERlbGV0ZVBhZ2VBY3Rpb247XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHBsdWNrIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBHRVRfUEFHRV9BQ1RJT05fVFlQRVMsIEdFVF9QQUdFU19BQ1RJT05fVFlQRVMsIERFTEVURV9QQUdFX0FDVElPTl9UWVBFUyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcbmltcG9ydCB7IFVwc2VydFBhZ2VBY3Rpb24sIERlbGV0ZVBhZ2VBY3Rpb24gfSBmcm9tIFwiLi9wYWdlcy5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQYWdlRGJFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4pIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9QQUdFX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKHBhZ2U6IFBhZ2VNb2RlbCkgPT4gbmV3IFVwc2VydFBhZ2VBY3Rpb24oWyBwYWdlIF0pKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydE1hbnkkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfUEFHRVNfQUNUSU9OX1RZUEVTLlNVQ0NFRUQpXHJcblx0XHQucGlwZShwbHVjayhcInBheWxvYWRcIiksIG1hcCgocGFnZXM6IFBhZ2VNb2RlbFtdKSA9PiBuZXcgVXBzZXJ0UGFnZUFjdGlvbihwYWdlcykpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0ZGVsZXRlJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoREVMRVRFX1BBR0VfQUNUSU9OX1RZUEVTLlNVQ0NFRUQpXHJcblx0XHQucGlwZShwbHVjayhcInBheWxvYWRcIiksIG1hcCgocGFnZTogUGFnZU1vZGVsKSA9PiBuZXcgRGVsZXRlUGFnZUFjdGlvbihwYWdlKSkpO1xyXG59XHJcbiIsImltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBQYWdlc0FjdGlvbnMsIFBhZ2VzQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi9wYWdlcy5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRkYXRhOiBQYWdlTW9kZWxbXTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRkYXRhOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogUGFnZXNBY3Rpb25zKTogU3RhdGUge1xyXG5cdGxldCBfZGF0YTogUGFnZU1vZGVsW107XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBQYWdlc0FjdGlvblR5cGVzLlVQU0VSVDpcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdF9kYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0bGV0IG5ld1BhZ2VzID0gYWN0aW9uLnBheWxvYWQ7XHJcblx0XHRcdGlmICghKG5ld1BhZ2VzIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcblx0XHRcdFx0bmV3UGFnZXMgPSBbIG5ld1BhZ2VzIF07XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIidQYWdlc0FjdGlvblR5cGVzLlVQU0VSVCcgZG9lcyBub3QgZ2V0IGFycmF5IHBheWxvYWRcIik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG5ld1BhZ2VzLmZvckVhY2goKG5ld1BhZ2UpID0+IHtcclxuXHRcdFx0XHRjb25zdCBleGlzdGVkUGFnZUluZGV4ID0gX2RhdGEuZmluZEluZGV4KCh3KSA9PiB3Ll9pZCA9PSBuZXdQYWdlLl9pZCk7XHJcblx0XHRcdFx0aWYgKGV4aXN0ZWRQYWdlSW5kZXggPiAtMSkge1xyXG5cdFx0XHRcdFx0X2RhdGEuc3BsaWNlKGV4aXN0ZWRQYWdlSW5kZXgsIDEsIG5ld1BhZ2UpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRfZGF0YS5wdXNoKG5ld1BhZ2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IF9kYXRhXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBQYWdlc0FjdGlvblR5cGVzLkRFTEVURTpcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdF9kYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHJcblx0XHRcdGNvbnN0IHBhZ2VJbmRleCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KCh3KSA9PiB3Ll9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRfZGF0YS5zcGxpY2UocGFnZUluZGV4LCAxKTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogX2RhdGFcclxuXHRcdFx0fTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UGFnZXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG4iLCJpbXBvcnQgKiBhcyBmcm9tUm9vdCBmcm9tIFwiLi9yb290L3BhZ2VzLnJlZHVjZXJzXCI7XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFnZVN0YXRlIHtcclxuXHRkYjogZnJvbVJvb3QuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlUmVkdWNlciA9IHtcclxuXHRkYjogZnJvbVJvb3QuUmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XHJcblx0cGFnZXM6IFBhZ2VTdGF0ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vcGFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdFVF9QQUdFX0FDVElPTl9UWVBFUywgR2V0UGFnZUFjdGlvbnMsIEdldFBhZ2VTdWNjZWVkQWN0aW9uLCBHZXRQYWdlRmFpbGVkQWN0aW9uIH0gZnJvbSBcIi4vZ2V0LXBhZ2UuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2V0UGFnZUFwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8R2V0UGFnZUFjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IFBhZ2VTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9QQUdFX0FDVElPTl9UWVBFUy5TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoKGFjdGlvbikgPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKHBheWxvYWQpID0+IHRoaXMuc2VydmljZS5nZXQocGF5bG9hZCkpLFxyXG5cdFx0XHRtYXAoKHJlcykgPT4gbmV3IEdldFBhZ2VTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRjYXRjaEVycm9yKChlcnIpID0+IG9mKG5ldyBHZXRQYWdlRmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vcGFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0R0VUX1BBR0VTX0FDVElPTl9UWVBFUyxcclxuXHRHZXRQYWdlc0FjdGlvbnMsXHJcblx0R2V0UGFnZXNTdWNjZWVkQWN0aW9uLFxyXG5cdEdldFBhZ2VzRmFpbGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vZ2V0LXBhZ2VzLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdldFBhZ2VzQXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxHZXRQYWdlc0FjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IFBhZ2VTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9QQUdFU19BQ1RJT05fVFlQRVMuU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0c3dpdGNoTWFwKCgpID0+XHJcblx0XHRcdFx0dGhpcy5zZXJ2aWNlXHJcblx0XHRcdFx0XHQuZ2V0UGFnZXMoKVxyXG5cdFx0XHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0XHRcdG1hcCgocmVzKSA9PiBuZXcgR2V0UGFnZXNTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRcdFx0XHRjYXRjaEVycm9yKChlcnIpID0+IG9mKG5ldyBHZXRQYWdlc0ZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vcGFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0VVBTRVJUX1BBR0VfQUNUSU9OX1RZUEVTLFxyXG5cdFVwc2VydFBhZ2VBY3Rpb25zLFxyXG5cdFVwc2VydFBhZ2VTdWNjZWVkQWN0aW9uLFxyXG5cdFVwc2VydFBhZ2VGYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi91cHNlcnQtcGFnZS5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRQYWdlQXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxVcHNlcnRQYWdlQWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogUGFnZVNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoVVBTRVJUX1BBR0VfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcCgoYWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgocGF5bG9hZCkgPT4gdGhpcy5zZXJ2aWNlLnVwc2VydChwYXlsb2FkKSksXHJcblx0XHRcdG1hcCgocmVzKSA9PiBuZXcgVXBzZXJ0UGFnZVN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IFVwc2VydFBhZ2VGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gXCIuLi8uLi9wYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRERUxFVEVfUEFHRV9BQ1RJT05fVFlQRVMsXHJcblx0RGVsZXRlUGFnZUFjdGlvbnMsXHJcblx0RGVsZXRlUGFnZVN1Y2NlZWRBY3Rpb24sXHJcblx0RGVsZXRlUGFnZUZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL2RlbGV0ZS1wYWdlLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERlbGV0ZVBhZ2VBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPERlbGV0ZVBhZ2VBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBQYWdlU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShERUxFVEVfUEFHRV9BQ1RJT05fVFlQRVMuU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKChhY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChwYXlsb2FkKSA9PiB0aGlzLnNlcnZpY2UuZGVsZXRlKHBheWxvYWQpKSxcclxuXHRcdFx0bWFwKChyZXMpID0+IG5ldyBEZWxldGVQYWdlU3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgRGVsZXRlUGFnZUZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSwgTWF0SWNvbk1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRGb3JtRmllbGRNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXREaXZpZGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XG5cbmltcG9ydCB7IE5nc0dyaWRNb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9ncmlkXCI7XG5cbmltcG9ydCB7IFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9wYWdlLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBQYWdlVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvcGFnZS12aWV3LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGFnZXNNYW5hZ2VtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vbWFuZ2VtZW50L3BhZ2UtbWFuYWdlbWVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJvb3RDb21wb25lbnQgfSBmcm9tIFwiLi9yb290L3Jvb3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBVcHNlcnRDb21wb25lbnQgfSBmcm9tIFwiLi91cHNlcnQvdXBzZXJ0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFBhZ2VNb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi9wYWdlLmNvbmZpZ1wiO1xuaW1wb3J0IHsgUGFnZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvcGFnZS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvcGFnZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQYWdlRGJFZmZlY3RzIH0gZnJvbSBcIi4vcm9vdC9wYWdlcy5lZmZlY3RzXCI7XG5pbXBvcnQgeyBQYWdlUmVkdWNlciB9IGZyb20gXCIuL3BhZ2UucmVkdWNlclwiO1xuaW1wb3J0IHsgR2V0UGFnZUFwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZ2V0LXBhZ2UvZ2V0LXBhZ2UuZWZmZWN0c1wiO1xuaW1wb3J0IHsgR2V0UGFnZXNBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL2dldC1wYWdlcy9nZXQtcGFnZXMuZWZmZWN0c1wiO1xuaW1wb3J0IHsgVXBzZXJ0UGFnZUFwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LXBhZ2UvdXBzZXJ0LXBhZ2UuZWZmZWN0c1wiO1xuaW1wb3J0IHsgRGVsZXRlUGFnZUFwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZGVsZXRlLXBhZ2UvZGVsZXRlLXBhZ2UuZWZmZWN0c1wiO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFJvdXRlck1vZHVsZSxcblx0XHRNYXRJbnB1dE1vZHVsZSxcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXG5cdFx0TWF0Q2FyZE1vZHVsZSxcblx0XHRNYXRCdXR0b25Nb2R1bGUsXG5cdFx0TWF0SWNvbk1vZHVsZSxcblx0XHRNYXREaXZpZGVyTW9kdWxlLFxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXG5cdFx0Rm9ybXNNb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0XHROZ3NHcmlkTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1BhZ2VWaWV3Q29tcG9uZW50LCBQYWdlc01hbmFnZW1lbnRDb21wb25lbnQsIFJvb3RDb21wb25lbnQsIFVwc2VydENvbXBvbmVudF0sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5nc1BhZ2VNb2R1bGUge1xuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBQYWdlTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBOZ3NQYWdlUm9vdE1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW3sgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9LCBQYWdlQ29uZmlndXJhdGlvblNlcnZpY2UsIFBhZ2VTZXJ2aWNlXVxuXHRcdH07XG5cdH1cbn1cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdE5nc1BhZ2VNb2R1bGUsXG5cdFx0Um91dGluZ01vZHVsZSxcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwicGFnZXNcIiwgUGFnZVJlZHVjZXIpLFxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbXG5cdFx0XHRQYWdlRGJFZmZlY3RzLFxuXHRcdFx0R2V0UGFnZUFwaUVmZmVjdHMsXG5cdFx0XHRHZXRQYWdlc0FwaUVmZmVjdHMsXG5cdFx0XHRVcHNlcnRQYWdlQXBpRWZmZWN0cyxcblx0XHRcdERlbGV0ZVBhZ2VBcGlFZmZlY3RzXG5cdFx0XSlcblx0XSxcblx0ZXhwb3J0czogW05nc1BhZ2VNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE5nc1BhZ2VSb290TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGlvblRva2VuIiwic3RvcmUiLCJCZWhhdmlvclN1YmplY3QiLCJJbmplY3RhYmxlIiwiSW5qZWN0IiwiU3RvcmUiLCJncmlkIiwiaHR0cCIsImZpbHRlciIsInRha2UiLCJjb21iaW5lTGF0ZXN0Iiwic3dpdGNoTWFwIiwic3RyaW5nVGVtcGxhdGUiLCJtYXAiLCJ0YXAiLCJIdHRwQ2xpZW50IiwiTG9jYXRpb24iLCJVc2VyRmFjYWRlU2VydmljZSIsInBsdWNrIiwiQ29tcG9uZW50IiwiQWN0aXZhdGVkUm91dGUiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJWaWV3Q29udGFpbmVyUmVmIiwiRm9ybUdyb3VwIiwiRm9ybUNvbnRyb2wiLCJSb3V0ZXJNb2R1bGUiLCJBY3Rpb25zIiwiRWZmZWN0IiwiZnJvbVJvb3QuUmVkdWNlciIsImNhdGNoRXJyb3IiLCJvZiIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTWF0SW5wdXRNb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJNYXRDYXJkTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIk1hdERpdmlkZXJNb2R1bGUiLCJGbGV4TGF5b3V0TW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJSZWFjdGl2ZUZvcm1zTW9kdWxlIiwiTmdzR3JpZE1vZHVsZSIsIlN0b3JlTW9kdWxlIiwiRWZmZWN0c01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFlTyxJQUFJLFFBQVEsR0FBRztRQUNsQixRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxrQkFBa0IsQ0FBQztZQUMzQyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakQsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoRjtZQUNELE9BQU8sQ0FBQyxDQUFDO1NBQ1osQ0FBQTtRQUNELE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDM0MsQ0FBQyxDQUFBO0FBRUQsd0JBVTJCLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUk7UUFDcEQsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcs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