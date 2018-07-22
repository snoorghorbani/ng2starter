(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngrx/store'), require('@angular/router'), require('rxjs'), require('rxjs/operators'), require('@angular/common/http'), require('@soushians/shared'), require('@angular/common'), require('@angular/material'), require('@angular/flex-layout')) :
    typeof define === 'function' && define.amd ? define('@soushians/page', ['exports', '@angular/core', '@ngrx/store', '@angular/router', 'rxjs', 'rxjs/operators', '@angular/common/http', '@soushians/shared', '@angular/common', '@angular/material', '@angular/flex-layout'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.page = {}),global.ng.core,null,global.ng.router,global.rxjs,global.rxjs.operators,global.ng.common.http,null,global.ng.common,global.ng.material,global.ng['flex-layout']));
}(this, (function (exports,core,store,router,rxjs,operators,http,shared,common,material,flexLayout) { 'use strict';

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
        function UpsertComponent() {
        }
        UpsertComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <div fxFlex=\"50\">\n        []upsertt\n    </div>\n</div>"
                    },] },
        ];
        return UpsertComponent;
    }());

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
        PagesManagementComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\">\n  <div fXFlex=\"30\" fxLayout=\"row wrap\">\n    <button fxFlex=\"100\" color=\"primary\" mat-raised-button routerLink=\"../upsert/article\">\n      Add Article\n    </button>\n    <button fxFlex=\"100\" color=\"primary\" mat-raised-button routerLink=\"../upsert/links\">\n      Add Links\n    </button>\n  </div>\n  <div fxFlex=\"70\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n    <mat-card class=\"cards-item\" *ngFor=\"let item of (pages$ | async)\" fxFlex=\"33\" fxLayout=\"row\">\n      <div fxFlex>\n        <a [routerLink]=\"['../upsert' ,  item.type,  item._id]\">\n          <mat-icon aria-label=\"edit page\">edit</mat-icon>\n        </a>\n      </div>\n      <div fxFlex>\n        {{item.name}}\n      </div>\n      <div fxFlex>\n        {{item.type}}\n      </div>\n    </mat-card>\n  </div>\n</div>"
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
                    path: "upsert/:type",
                    component: UpsertComponent
                },
                {
                    path: "upsert/:type/:_id",
                    component: UpsertComponent
                }
            ]
        }
    ];
    var /** @type {?} */ RoutingModule = router.RouterModule.forChild(routes);

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
            find: "/api/page",
            get: "/api/page/${model._id}"
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ PageModel = (function () {
        function PageModel(_a) {
            var _b = _a === void 0 ? {} : _a, _id = _b._id, name = _b.name, type = _b.type, Config = _b.Config;
            this._id = _id;
            this.name = name || "";
            this.type = type;
            this.Config = Config || (({}));
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
        function PageService(http$$1, store$$1, configurationService, _location) {
            this.http = http$$1;
            this.store = store$$1;
            this.configurationService = configurationService;
            this._location = _location;
        }
        /**
         * @template T
         * @param {?} _id
         * @return {?}
         */
        PageService.prototype.get = /**
         * @template T
         * @param {?} _id
         * @return {?}
         */
            function (_id) {
                var _this = this;
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.get !== ""; }), operators.take(1), operators.switchMap(function (config) {
                    return _this.http.get(shared.stringTemplate(config.env.frontend_server + config.endpoints.get, { _id: _id }));
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
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.find != ""; }), operators.switchMap(function (config) { return _this.http.get(config.env.frontend_server + config.endpoints.find); }), operators.map(function (response) { return response.Result; }));
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
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.upsert != ""; }), operators.take(1), operators.switchMap(function (config) {
                    return _this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody());
                }), operators.map(function (response) { return response.Result; }), operators.tap(function () { return _this._location.back(); }));
            };
        // delete(_id: string) {
        // 	return this.configurationService.config$
        // 		.filter((config) => config.endpoints.deleteForm != "")
        // 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
        // }
        /**
         * @template T
         * @param {?} _id
         * @return {?}
         */
        PageService.prototype.selectById = /**
         * @template T
         * @param {?} _id
         * @return {?}
         */
            function (_id) {
                var _this = this;
                var /** @type {?} */ subject = new rxjs.BehaviorSubject(undefined);
                this.store
                    .select(function (state) { return state.pages.db.data; })
                    .pipe(operators.filter(function (pages) { return pages != null; }), operators.map(function (pages) { return pages.find(function (page) { return page._id == _id; }); }), operators.tap(function (page) {
                    if (page == null) {
                        _this.store.dispatch(new GetPageStartAction(_id));
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
                { type: common.Location }
            ];
        };
        return PageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PageViewComponent = (function () {
        function PageViewComponent(store$$1, service, configurationService, resolver, container) {
            this.store = store$$1;
            this.service = service;
            this.configurationService = configurationService;
            this.resolver = resolver;
            this.container = container;
        }
        Object.defineProperty(PageViewComponent.prototype, "oid", {
            set: /**
             * @param {?} id
             * @return {?}
             */ function (id) {
                this._selectPage(id);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        PageViewComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} id
         * @return {?}
         */
        PageViewComponent.prototype._selectPage = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                this.page$ = this.service.selectById(id);
            };
        PageViewComponent.decorators = [
            { type: core.Component, args: [{
                        template: ""
                    },] },
        ];
        /** @nocollapse */
        PageViewComponent.ctorParameters = function () {
            return [
                { type: store.Store },
                { type: PageService },
                { type: PageConfigurationService },
                { type: core.ComponentFactoryResolver },
                { type: core.ViewContainerRef }
            ];
        };
        PageViewComponent.propDecorators = {
            oid: [{ type: core.Input }]
        };
        return PageViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PageModule = (function () {
        function PageModule() {
        }
        PageModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, RoutingModule, material.MatCardModule, material.MatButtonModule, material.MatIconModule, flexLayout.FlexLayoutModule],
                        declarations: [PageViewComponent, PagesManagementComponent, RootComponent, UpsertComponent],
                        exports: []
                    },] },
        ];
        return PageModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.PageModule = PageModule;
    exports.MODULE_DEFAULT_CONFIG = MODULE_DEFAULT_CONFIG;
    exports.MODULE_CONFIG_TOKEN = MODULE_CONFIG_TOKEN;
    exports.ɵc = PagesManagementComponent;
    exports.ɵa = RoutingModule;
    exports.ɵb = RootComponent;
    exports.ɵh = PageConfigurationService;
    exports.ɵg = PageService;
    exports.ɵe = UpsertComponent;
    exports.ɵf = PageViewComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXBhZ2UudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3Jvb3Qvcm9vdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvdXBzZXJ0L3Vwc2VydC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvc2VydmljZXMvYXBpL2dldC1wYWdlcy9nZXQtcGFnZXMuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9wYWdlL2xpYi9tYW5nZW1lbnQvcGFnZS1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9wYWdlL2xpYi9wYWdlLXJvdXRpbmcubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3BhZ2UuY29uZmlnLnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3NlcnZpY2VzL3BhZ2UtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3NlcnZpY2VzL2FwaS9nZXQtcGFnZXMvZ2V0LXBhZ2VzLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3NlcnZpY2VzL2FwaS9nZXQtcGFnZS9nZXQtcGFnZS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9wYWdlL2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LXBhZ2UvZ2V0LXBhZ2UuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9wYWdlL2xpYi9tb2RlbHMvcGFnZS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9wYWdlL2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LXBhZ2UvdXBzZXJ0LXBhZ2UubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvcGFnZS9saWIvc2VydmljZXMvcGFnZS5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3BhZ2UvbGliL3ZpZXcvcGFnZS12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9wYWdlL2xpYi9wYWdlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwicGFnZS1yb290XCIsXHJcblx0dGVtcGxhdGU6IFwiPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290Q29tcG9uZW50IHt9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgPGRpdiBmeEZsZXg9XCI1MFwiPlxyXG4gICAgICAgIFtddXBzZXJ0dFxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFVwc2VydENvbXBvbmVudCB7fVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEdldFBhZ2VzQXBpTW9kZWwgfSBmcm9tIFwiLi9nZXQtcGFnZXMubW9kZWxcIjtcclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBHRVRfUEFHRVNfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW0dFVF9QQUdFU11bQVBJXVtHZXRQYWdlc10gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbR0VUX1BBR0VTXVtBUEldW0dldFBhZ2VzXSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbR0VUX1BBR0VTXVtBUEldW0dldFBhZ2VzXSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0UGFnZXNTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9QQUdFU19BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFBhZ2VzU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9QQUdFU19BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZU1vZGVsPGFueT5bXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UGFnZXNGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfUEFHRVNfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHZXRQYWdlc0FjdGlvbnMgPSBHZXRQYWdlc1N0YXJ0QWN0aW9uIHwgR2V0UGFnZXNTdWNjZWVkQWN0aW9uIHwgR2V0UGFnZXNGYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9wYWdlLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR2V0UGFnZXNTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvZ2V0LXBhZ2VzL2dldC1wYWdlcy5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgPGRpdiBmWEZsZXg9XCIzMFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIj5cclxuICAgIDxidXR0b24gZnhGbGV4PVwiMTAwXCIgY29sb3I9XCJwcmltYXJ5XCIgbWF0LXJhaXNlZC1idXR0b24gcm91dGVyTGluaz1cIi4uL3Vwc2VydC9hcnRpY2xlXCI+XHJcbiAgICAgIEFkZCBBcnRpY2xlXHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gZnhGbGV4PVwiMTAwXCIgY29sb3I9XCJwcmltYXJ5XCIgbWF0LXJhaXNlZC1idXR0b24gcm91dGVyTGluaz1cIi4uL3Vwc2VydC9saW5rc1wiPlxyXG4gICAgICBBZGQgTGlua3NcclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgZnhGbGV4PVwiNzBcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICA8bWF0LWNhcmQgY2xhc3M9XCJjYXJkcy1pdGVtXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgKHBhZ2VzJCB8IGFzeW5jKVwiIGZ4RmxleD1cIjMzXCIgZnhMYXlvdXQ9XCJyb3dcIj5cclxuICAgICAgPGRpdiBmeEZsZXg+XHJcbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycuLi91cHNlcnQnICwgIGl0ZW0udHlwZSwgIGl0ZW0uX2lkXVwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJlZGl0IHBhZ2VcIj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGZ4RmxleD5cclxuICAgICAgICB7e2l0ZW0ubmFtZX19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGZ4RmxleD5cclxuICAgICAgICB7e2l0ZW0udHlwZX19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZXNNYW5hZ2VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRwYWdlcyQ6IE9ic2VydmFibGU8UGFnZU1vZGVsPGFueT5bXT47XHJcblx0Y29uc3RydWN0b3IocHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMucGFnZXMkID0gdGhpcy5zdG9yZS5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS5wYWdlcy5kYi5kYXRhKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRQYWdlc1N0YXJ0QWN0aW9uKCkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvcGFnZS12aWV3LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSb290Q29tcG9uZW50IH0gZnJvbSBcIi4vcm9vdC9yb290LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVcHNlcnRDb21wb25lbnQgfSBmcm9tIFwiLi91cHNlcnQvdXBzZXJ0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQYWdlc01hbmFnZW1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9tYW5nZW1lbnQvcGFnZS1tYW5hZ2VtZW50LmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogXCJwYWdlc1wiLFxyXG5cdFx0Y29tcG9uZW50OiBSb290Q29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwibWFuYWdlbWVudFwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogUGFnZXNNYW5hZ2VtZW50Q29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInVwc2VydC86dHlwZVwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogVXBzZXJ0Q29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInVwc2VydC86dHlwZS86X2lkXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBVcHNlcnRDb21wb25lbnRcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFnZU1vZHVsZUNvbmZpZyB7XHJcblx0ZW52Pzoge1xyXG5cdFx0cHJvZHVjdGlvbjogYm9vbGVhbjtcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogc3RyaW5nO1xyXG5cdH07XHJcblx0ZW5kcG9pbnRzPzoge1xyXG5cdFx0Z2V0OiBzdHJpbmc7XHJcblx0XHRmaW5kOiBzdHJpbmc7XHJcblx0XHR1cHNlcnQ6IHN0cmluZztcclxuXHR9O1xyXG59XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IFBhZ2VNb2R1bGVDb25maWcgPSB7XHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBmYWxzZSxcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogXCJmcm9udGVuZF9zZXJ2ZXIvZGlkL25vdC9zZXRcIlxyXG5cdH0sXHJcblx0ZW5kcG9pbnRzOiB7XHJcblx0XHR1cHNlcnQ6IFwiL2FwaS9wYWdlXCIsXHJcblx0XHRmaW5kOiBcIi9hcGkvcGFnZVwiLFxyXG5cdFx0Z2V0OiBcIi9hcGkvcGFnZS8ke21vZGVsLl9pZH1cIlxyXG5cdH1cclxufTtcclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48UGFnZU1vZHVsZUNvbmZpZz4oXCJQYWdlTW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUGFnZU1vZHVsZUNvbmZpZywgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4uL3BhZ2UuY29uZmlnXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3BhZ2UucmVkdWNlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGFnZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IFBhZ2VNb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KE1PRFVMRV9ERUZBVUxUX0NPTkZJRyk7XHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0Ly8gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0UGFnZU1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKChwYWdlQ29uZmlnKSA9PiB7XHJcblx0XHQvLyBcdGlmICghcGFnZUNvbmZpZykge1xyXG5cdFx0Ly8gXHRcdHJldHVybjtcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gXHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHBhZ2VDb25maWcuQ29uZmlnKTtcclxuXHRcdC8vIFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgR2V0UGFnZXNBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlID0ge30pIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKChrZXkpID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge307XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBQYWdlTW9kZWw8YW55PltdO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgR2V0UGFnZUFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRfaWQ6IHN0cmluZztcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogUGFnZU1vZGVsPGFueT47XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0UGFnZUFwaU1vZGVsIH0gZnJvbSBcIi4vZ2V0LXBhZ2UubW9kZWxcIjtcclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBHRVRfUEFHRV9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbUEFHRV1bQVBJXVtHZXRQYWdlXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltQQUdFXVtBUEldW0dldFBhZ2VdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltQQUdFXVtBUEldW0dldFBhZ2VdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRQYWdlU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfUEFHRV9BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UGFnZVN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfUEFHRV9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZU1vZGVsPGFueT4pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFBhZ2VGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfUEFHRV9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldFBhZ2VBY3Rpb25zID0gR2V0UGFnZVN0YXJ0QWN0aW9uIHwgR2V0UGFnZVN1Y2NlZWRBY3Rpb24gfCBHZXRQYWdlRmFpbGVkQWN0aW9uO1xyXG4iLCJleHBvcnQgY2xhc3MgUGFnZU1vZGVsPFQ+IHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0dHlwZTogc3RyaW5nO1xyXG5cdENvbmZpZzogVDtcclxuXHRjb25zdHJ1Y3Rvcih7IF9pZCwgbmFtZSwgdHlwZSwgQ29uZmlnIH06IHsgX2lkPzogc3RyaW5nOyBuYW1lPzogc3RyaW5nOyB0eXBlPzogc3RyaW5nOyBDb25maWc/OiBUIH0gPSB7fSkge1xyXG5cdFx0dGhpcy5faWQgPSBfaWQ7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lIHx8IFwiXCI7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdFx0dGhpcy5Db25maWcgPSBDb25maWcgfHwgKHt9IGFzIFQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgVXBzZXJ0UGFnZUFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRwYWdlOiBQYWdlTW9kZWw8YW55PjtcclxuXHRcdGNvbnN0cnVjdG9yKHBhZ2UgPSB7fSkge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5wYWdlID0gbmV3IFBhZ2VNb2RlbChwYWdlKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMucGFnZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IFBhZ2VNb2RlbDxhbnk+O1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHRhcCwgdGFrZSwgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3BhZ2UucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBQYWdlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9wYWdlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgR2V0UGFnZXNBcGlNb2RlbCwgR2V0UGFnZVN0YXJ0QWN0aW9uLCBVcHNlcnRQYWdlQXBpTW9kZWwgfSBmcm9tIFwiLi9hcGlcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQYWdlU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBQYWdlQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb25cclxuXHQpIHt9XHJcblxyXG5cdGdldDxUPihfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UGFnZU1vZGVsPFQ+PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmdldCAhPT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdHN3aXRjaE1hcCgoY29uZmlnKSA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5nZXQoc3RyaW5nVGVtcGxhdGUoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmdldCwgeyBfaWQgfSkpXHJcblx0XHRcdCksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IFVwc2VydFBhZ2VBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGdldFBhZ2VzKCk6IE9ic2VydmFibGU8UGFnZU1vZGVsPGFueT5bXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5maW5kICE9IFwiXCIpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuZmluZCkpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBHZXRQYWdlc0FwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHR1cHNlcnQ8VD4ocGFnZTogVXBzZXJ0UGFnZUFwaU1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPFBhZ2VNb2RlbDxUPj4ge1xyXG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgVXBzZXJ0UGFnZUFwaU1vZGVsLlJlcXVlc3QocGFnZSk7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLnVwc2VydCAhPSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0c3dpdGNoTWFwKChjb25maWcpID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLnBvc3QoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLnVwc2VydCwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSlcclxuXHRcdFx0KSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogVXBzZXJ0UGFnZUFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpLFxyXG5cdFx0XHR0YXAoKCkgPT4gdGhpcy5fbG9jYXRpb24uYmFjaygpKVxyXG5cdFx0KTtcclxuXHR9XHJcblx0Ly8gZGVsZXRlKF9pZDogc3RyaW5nKSB7XHJcblx0Ly8gXHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0Ly8gXHRcdC5maWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5kZWxldGVGb3JtICE9IFwiXCIpXHJcblx0Ly8gXHRcdC5zd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW5kcG9pbnRzLmRlbGV0ZUZvcm0pKTtcclxuXHQvLyB9XHJcblx0c2VsZWN0QnlJZDxUPihfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UGFnZU1vZGVsPFQ+PiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQYWdlTW9kZWw8VD4+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS5wYWdlcy5kYi5kYXRhKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRmaWx0ZXIoKHBhZ2VzKSA9PiBwYWdlcyAhPSBudWxsKSxcclxuXHRcdFx0XHRtYXAoKHBhZ2VzKSA9PiBwYWdlcy5maW5kKChwYWdlKSA9PiBwYWdlLl9pZCA9PSBfaWQpKSxcclxuXHRcdFx0XHR0YXAoKHBhZ2UpID0+IHtcclxuXHRcdFx0XHRcdGlmIChwYWdlID09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0UGFnZVN0YXJ0QWN0aW9uKF9pZCkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZSgocGFnZSkgPT4gc3ViamVjdC5uZXh0KHBhZ2UpKTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0Q29tcG9uZW50UmVmLFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdERpcmVjdGl2ZSxcclxuXHRJbnB1dFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IHBsdWNrLCBmaWx0ZXIsIHN3aXRjaE1hcCwgbWFwLCBzdGFydFdpdGggfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9wYWdlLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcGFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBhZ2VDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wYWdlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IFwiXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBvaWQoaWQ6IHN0cmluZykge1xyXG5cdFx0dGhpcy5fc2VsZWN0UGFnZShpZCk7XHJcblx0fVxyXG5cdHBhZ2UkOiBPYnNlcnZhYmxlPFBhZ2VNb2RlbDxhbnk+PjtcclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IFBhZ2VTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogUGFnZUNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcclxuXHQpIHt9XHJcblx0bmdPbkluaXQoKSB7fVxyXG5cdF9zZWxlY3RQYWdlKGlkOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMucGFnZSQgPSB0aGlzLnNlcnZpY2Uuc2VsZWN0QnlJZDxhbnk+KGlkKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSwgTWF0SWNvbk1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XG5cbmltcG9ydCB7IFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9wYWdlLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBQYWdlVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvcGFnZS12aWV3LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGFnZXNNYW5hZ2VtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vbWFuZ2VtZW50L3BhZ2UtbWFuYWdlbWVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJvb3RDb21wb25lbnQgfSBmcm9tIFwiLi9yb290L3Jvb3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBVcHNlcnRDb21wb25lbnQgfSBmcm9tIFwiLi91cHNlcnQvdXBzZXJ0LmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbIENvbW1vbk1vZHVsZSwgUm91dGluZ01vZHVsZSwgTWF0Q2FyZE1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBGbGV4TGF5b3V0TW9kdWxlIF0sXG5cdGRlY2xhcmF0aW9uczogWyBQYWdlVmlld0NvbXBvbmVudCwgUGFnZXNNYW5hZ2VtZW50Q29tcG9uZW50LCBSb290Q29tcG9uZW50LCBVcHNlcnRDb21wb25lbnQgXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInN0b3JlIiwiU3RvcmUiLCJSb3V0ZXJNb2R1bGUiLCJJbmplY3Rpb25Ub2tlbiIsIkJlaGF2aW9yU3ViamVjdCIsIkluamVjdGFibGUiLCJJbmplY3QiLCJodHRwIiwiZmlsdGVyIiwidGFrZSIsInN3aXRjaE1hcCIsInN0cmluZ1RlbXBsYXRlIiwibWFwIiwidGFwIiwiSHR0cENsaWVudCIsIkxvY2F0aW9uIiwiQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIiwiVmlld0NvbnRhaW5lclJlZiIsIklucHV0IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJNYXRDYXJkTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIkZsZXhMYXlvdXRNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztvQkFFQ0EsY0FBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsaUNBQWlDO3FCQUMzQzs7NEJBTEQ7Ozs7Ozs7QUNBQTs7OztvQkFFQ0EsY0FBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSx3SEFJSjtxQkFDTjs7OEJBUkQ7Ozs7Ozs7SUNXQSxJQUFBOzs7O2tDQVhBO1FBYUMsQ0FBQTs7Ozs7O0FDYkQ7UUFxQ0Msa0NBQW1CQyxRQUFzQjtZQUF0QixVQUFLLEdBQUxBLFFBQUssQ0FBaUI7WUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksR0FBQSxDQUFDLENBQUM7U0FDaEU7Ozs7UUFDRCwyQ0FBUTs7O1lBQVI7Z0JBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7YUFDL0M7O29CQWxDREQsY0FBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSxzM0JBd0JKO3FCQUNOOzs7Ozt3QkFoQ1FFLFdBQUs7Ozt1Q0FGZDs7Ozs7OztBQ0NBLElBT0EscUJBQU0sTUFBTSxHQUFXO1FBQ3RCO1lBQ0MsSUFBSSxFQUFF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