(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@ngrx/store'), require('rxjs/operators'), require('@angular/common/http'), require('@soushians/shared'), require('@angular/common'), require('@angular/router'), require('@ngrx/effects'), require('@angular/forms'), require('@angular/material'), require('@angular/flex-layout')) :
    typeof define === 'function' && define.amd ? define('@soushians/widget', ['exports', '@angular/core', 'rxjs', '@ngrx/store', 'rxjs/operators', '@angular/common/http', '@soushians/shared', '@angular/common', '@angular/router', '@ngrx/effects', '@angular/forms', '@angular/material', '@angular/flex-layout'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.widget = {}),global.ng.core,global.rxjs,null,global.rxjs.operators,global.ng.common.http,null,global.ng.common,global.ng.router,null,global.ng.forms,global.ng.material,global.ng['flex-layout']));
}(this, (function (exports,core,rxjs,store,operators,http,shared,common,router,effects,forms,material,flexLayout) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GetWidgetsApiModel;
    (function (GetWidgetsApiModel) {
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
        GetWidgetsApiModel.Request = Request;
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        GetWidgetsApiModel.Response = Response;
    })(GetWidgetsApiModel || (GetWidgetsApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GetWidgetsStartAction = /** @class */ (function () {
        function GetWidgetsStartAction() {
            this.type = "[GET_WIDGETS][API][GetWidgets] start" /* START */;
        }
        return GetWidgetsStartAction;
    }());
    var GetWidgetsSucceedAction = /** @class */ (function () {
        function GetWidgetsSucceedAction(payload) {
            this.payload = payload;
            this.type = "[GET_WIDGETS][API][GetWidgets] succeed" /* SUCCEED */;
        }
        return GetWidgetsSucceedAction;
    }());
    var GetWidgetsFailedAction = /** @class */ (function () {
        function GetWidgetsFailedAction(payload) {
            this.payload = payload;
            this.type = "[GET_WIDGETS][API][GetWidgets] failed" /* FAILED */;
        }
        return GetWidgetsFailedAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GetWidgetApiModel;
    (function (GetWidgetApiModel) {
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
        GetWidgetApiModel.Request = Request;
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        GetWidgetApiModel.Response = Response;
    })(GetWidgetApiModel || (GetWidgetApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GetWidgetStartAction = /** @class */ (function () {
        function GetWidgetStartAction(payload) {
            this.payload = payload;
            this.type = "[WIDGET][API][GetWidget] start" /* START */;
        }
        return GetWidgetStartAction;
    }());
    var GetWidgetSucceedAction = /** @class */ (function () {
        function GetWidgetSucceedAction(payload) {
            this.payload = payload;
            this.type = "[WIDGET][API][GetWidget] succeed" /* SUCCEED */;
        }
        return GetWidgetSucceedAction;
    }());
    var GetWidgetFailedAction = /** @class */ (function () {
        function GetWidgetFailedAction(payload) {
            this.payload = payload;
            this.type = "[WIDGET][API][GetWidget] failed" /* FAILED */;
        }
        return GetWidgetFailedAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ WidgetModel = /** @class */ (function () {
        function WidgetModel(_a) {
            var _b = _a === void 0 ? {} : _a, _id = _b._id, name = _b.name, type = _b.type, Config = _b.Config;
            this._id = _id;
            this.name = name || "";
            this.type = type;
            this.Config = Config || ( /** @type {?} */({}));
        }
        return WidgetModel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var UpsertWidgetApiModel;
    (function (UpsertWidgetApiModel) {
        var Request = /** @class */ (function () {
            function Request(widget) {
                if (widget === void 0) {
                    widget = {};
                }
                debugger;
                this.widget = new WidgetModel(widget);
            }
            /**
             * @return {?}
             */
            Request.prototype.getRequestBody = /**
             * @return {?}
             */
                function () {
                    return this.widget;
                };
            return Request;
        }());
        UpsertWidgetApiModel.Request = Request;
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        UpsertWidgetApiModel.Response = Response;
    })(UpsertWidgetApiModel || (UpsertWidgetApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var UpsertWidgetStartAction = /** @class */ (function () {
        function UpsertWidgetStartAction(payload) {
            this.payload = payload;
            this.type = "[UPSERT_WIDGET][API][UpsertWidget] start" /* START */;
        }
        return UpsertWidgetStartAction;
    }());
    var UpsertWidgetSucceedAction = /** @class */ (function () {
        function UpsertWidgetSucceedAction(payload) {
            this.payload = payload;
            this.type = "[UPSERT_WIDGET][API][UpsertWidget] succeed" /* SUCCEED */;
        }
        return UpsertWidgetSucceedAction;
    }());
    var UpsertWidgetFailedAction = /** @class */ (function () {
        function UpsertWidgetFailedAction(payload) {
            this.payload = payload;
            this.type = "[UPSERT_WIDGET][API][UpsertWidget] failed" /* FAILED */;
        }
        return UpsertWidgetFailedAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DeleteWidgetApiModel;
    (function (DeleteWidgetApiModel) {
        var Request = /** @class */ (function () {
            function Request(widget) {
                if (widget === void 0) {
                    widget = {};
                }
                debugger;
                this.widget = new WidgetModel(widget);
            }
            /**
             * @return {?}
             */
            Request.prototype.getRequestBody = /**
             * @return {?}
             */
                function () {
                    return this.widget;
                };
            return Request;
        }());
        DeleteWidgetApiModel.Request = Request;
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        DeleteWidgetApiModel.Response = Response;
    })(DeleteWidgetApiModel || (DeleteWidgetApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DeleteWidgetStartAction = /** @class */ (function () {
        function DeleteWidgetStartAction(payload) {
            this.payload = payload;
            this.type = "[DELETE_WIDGET][API][DeleteWidget] start" /* START */;
        }
        return DeleteWidgetStartAction;
    }());
    var DeleteWidgetSucceedAction = /** @class */ (function () {
        function DeleteWidgetSucceedAction(payload) {
            this.payload = payload;
            this.type = "[DELETE_WIDGET][API][DeleteWidget] succeed" /* SUCCEED */;
        }
        return DeleteWidgetSucceedAction;
    }());
    var DeleteWidgetFailedAction = /** @class */ (function () {
        function DeleteWidgetFailedAction(payload) {
            this.payload = payload;
            this.type = "[DELETE_WIDGET][API][DeleteWidget] failed" /* FAILED */;
        }
        return DeleteWidgetFailedAction;
    }());

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
    /** @type {?} */
    var MODULE_DEFAULT_CONFIG = {
        env: {
            production: false,
            frontend_server: "frontend_server/did/not/set"
        },
        endpoints: {
            upsert: "/api/uiwidget",
            find: "/api/uiwidget",
            get: "/api/uiwidget/${model._id}",
            deleteItem: "/api/uiwidget/${model.widgetId}"
        },
        types: {}
    };
    /** @type {?} */
    var MODULE_CONFIG_TOKEN = new core.InjectionToken("WidgetModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var WidgetConfigurationService = /** @class */ (function () {
        function WidgetConfigurationService(configFile, store$$1) {
            this.store = store$$1;
            this.config$ = new rxjs.BehaviorSubject(MODULE_DEFAULT_CONFIG);
            this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
            this.config$.next(this._config);
            // this.store.select(getWidgetModuleConfig).subscribe((widgetConfig) => {
            // 	if (!widgetConfig) {
            // 		return;
            // 	}
            // 	this._config = Object.assign({}, this._config, widgetConfig.Config);
            // 	this.config$.next(this._config);
            // });
        }
        Object.defineProperty(WidgetConfigurationService.prototype, "config", {
            get: /**
             * @return {?}
             */ function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        WidgetConfigurationService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        WidgetConfigurationService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
                { type: store.Store }
            ];
        };
        return WidgetConfigurationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var WidgetService = /** @class */ (function () {
        function WidgetService(http$$1, store$$1, configurationService, _location) {
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
        WidgetService.prototype.get = /**
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
        WidgetService.prototype.getWidgets = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.find != ""; }), operators.switchMap(function (config) { return _this.http.get(config.env.frontend_server + config.endpoints.find); }), operators.map(function (response) { return response.Result; }));
            };
        /**
         * @template T
         * @param {?} widget
         * @return {?}
         */
        WidgetService.prototype.upsert = /**
         * @template T
         * @param {?} widget
         * @return {?}
         */
            function (widget) {
                var _this = this;
                /** @type {?} */
                var model = new UpsertWidgetApiModel.Request(widget);
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.upsert != ""; }), operators.take(1), operators.switchMap(function (config) {
                    return _this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody());
                }), operators.map(function (response) { return response.Result; }), operators.tap(function () { return _this._location.back(); }));
            };
        /**
         * @param {?} widget
         * @return {?}
         */
        WidgetService.prototype.delete = /**
         * @param {?} widget
         * @return {?}
         */
            function (widget) {
                var _this = this;
                debugger;
                /** @type {?} */
                var widgetId = widget._id;
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.deleteItem != ""; }), operators.switchMap(function (config) { return _this.http.delete(shared.stringTemplate(config.env.frontend_server + config.endpoints.deleteItem, { widgetId: widgetId })).pipe(operators.map(function (response) { return response.Result; })); }));
            };
        /**
         * @template T
         * @param {?} _id
         * @return {?}
         */
        WidgetService.prototype.selectById = /**
         * @template T
         * @param {?} _id
         * @return {?}
         */
            function (_id) {
                var _this = this;
                /** @type {?} */
                var subject = new rxjs.BehaviorSubject(undefined);
                this.store
                    .select(function (state) { return state.widgets.db.data; })
                    .pipe(operators.filter(function (widgets) { return widgets != null; }), operators.map(function (widgets) { return widgets.find(function (widget) { return widget._id == _id; }); }), operators.tap(function (widget) {
                    if (widget == null) {
                        _this.store.dispatch(new GetWidgetStartAction(_id));
                    }
                }))
                    .subscribe(function (widget) { return subject.next(widget); });
                return subject.asObservable();
            };
        WidgetService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        WidgetService.ctorParameters = function () {
            return [
                { type: http.HttpClient },
                { type: store.Store },
                { type: WidgetConfigurationService },
                { type: common.Location }
            ];
        };
        return WidgetService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DynamicWidgetViewComponent = /** @class */ (function () {
        function DynamicWidgetViewComponent(store$$1, service, configurationService, resolver, container) {
            this.store = store$$1;
            this.service = service;
            this.configurationService = configurationService;
            this.resolver = resolver;
            this.container = container;
            this._fill_component_map();
        }
        Object.defineProperty(DynamicWidgetViewComponent.prototype, "oid", {
            set: /**
             * @param {?} id
             * @return {?}
             */ function (id) {
                this._selectWidget(id);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DynamicWidgetViewComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.widget$.pipe(operators.filter(function (widget) { return widget != undefined; })).subscribe(function (widget) {
                    _this._resolve_correct_component_base_on_widget_type(widget);
                });
            };
        /**
         * @return {?}
         */
        DynamicWidgetViewComponent.prototype._fill_component_map = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.configurationService.config$.pipe(operators.map(function (config) { return config.types; }), operators.startWith({})).subscribe(function (types) {
                    debugger;
                    _this.mapTypeToComponent = types;
                });
            };
        /**
         * @param {?} id
         * @return {?}
         */
        DynamicWidgetViewComponent.prototype._selectWidget = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                this.widget$ = this.service.selectById(id);
            };
        /**
         * @param {?} widget
         * @return {?}
         */
        DynamicWidgetViewComponent.prototype._resolve_correct_component_base_on_widget_type = /**
         * @param {?} widget
         * @return {?}
         */
            function (widget) {
                var _this = this;
                if (!this.mapTypeToComponent[widget.type]) {
                    debugger;
                    /** @type {?} */
                    var supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
                    throw new Error("Trying to use an unsupported type (" + widget.type + ").\n\t\t  \t\t Supported types: " + supportedTypes);
                }
                /** @type {?} */
                var component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[widget.type].view);
                this.component = this.container.createComponent(component);
                this.widget$.subscribe(function (w) { return (_this.component.instance.widget = w); });
            };
        DynamicWidgetViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "widget",
                        template: ""
                    },] },
        ];
        /** @nocollapse */
        DynamicWidgetViewComponent.ctorParameters = function () {
            return [
                { type: store.Store },
                { type: WidgetService },
                { type: WidgetConfigurationService },
                { type: core.ComponentFactoryResolver },
                { type: core.ViewContainerRef }
            ];
        };
        DynamicWidgetViewComponent.propDecorators = {
            oid: [{ type: core.Input }]
        };
        return DynamicWidgetViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var WidgetSelectorComponent = /** @class */ (function () {
        function WidgetSelectorComponent(store$$1) {
            this.store = store$$1;
            this.widgets$ = this.store.select(function (state) { return state.widgets.db.data; });
        }
        Object.defineProperty(WidgetSelectorComponent.prototype, "valid", {
            get: /**
             * @return {?}
             */ function () {
                return this.config.oid != undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WidgetSelectorComponent.prototype, "config", {
            get: /**
             * @return {?}
             */ function () {
                return {
                    oid: this.selectedWidgetId
                };
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        WidgetSelectorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.store.dispatch(new GetWidgetsStartAction());
            };
        WidgetSelectorComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<div fxLayout=\"column wrap\" fxLayoutGap=\"15px\">\n  <h4>\u0644\u06CC\u0633\u062A \u0648\u06CC\u062C\u062A\u200C\u0647\u0627</h4>\n        <mat-form-field fxFlex=\"100\">\n<mat-select placeholder=\"\u0646\u0648\u0639 \u0648\u06CC\u062C\u062A\" [(ngModel)]=\"selectedWidgetId\" name=\"selectedWidgetId\">\n  <mat-option *ngFor=\"let item of (widgets$ | async)\" [value]=\"item._id\">\n    {{item.type}} : <b>{{item.name}}</b>\n  </mat-option>\n</mat-select> \n</mat-form-field>\n</div>"
                    },] },
        ];
        /** @nocollapse */
        WidgetSelectorComponent.ctorParameters = function () {
            return [
                { type: store.Store }
            ];
        };
        return WidgetSelectorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var RootComponent = /** @class */ (function () {
        function RootComponent() {
        }
        RootComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "widget-root",
                        template: "<router-outlet></router-outlet>"
                    },] },
        ];
        return RootComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var WidgetsManagementComponent = /** @class */ (function () {
        function WidgetsManagementComponent(store$$1) {
            this.store = store$$1;
            this.widgets$ = this.store.select(function (state) { return state.widgets.db.data; });
            this._fill_anghazi();
        }
        /**
         * @return {?}
         */
        WidgetsManagementComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.store.dispatch(new GetWidgetsStartAction());
            };
        /**
         * @param {?} item
         * @return {?}
         */
        WidgetsManagementComponent.prototype.remove = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                debugger;
                this.store.dispatch(new DeleteWidgetStartAction(item));
            };
        /**
         * @return {?}
         */
        WidgetsManagementComponent.prototype._fill_anghazi = /**
         * @return {?}
         */
            function () {
                this.anghazi = {
                    article: {
                        color: "green",
                        icon: "description"
                    },
                    links: {
                        color: "orange",
                        icon: "link"
                    },
                    list: {
                        color: "blue",
                        icon: "list"
                    }
                };
            };
        WidgetsManagementComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\n\n  <div class=\"content-action\">\n    <mat-card class=\"with-sticky-action\">\n      <mat-card-header>\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n          <mat-icon>widgets</mat-icon>\n          <span>\u0645\u062F\u06CC\u0631\u06CC\u062A \u0627\u0641\u0632\u0648\u0646\u0647\u200C\u0647\u0627</span>\n        </mat-card-title>\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n          <span>\n            \u0627\u0641\u0632\u0648\u0646\u0647\u200C \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0631\u0627 \u0628\u0631\u0627\u0633\u0627\u0633 \u0646\u0648\u0639 \u0622\u0646 \u0627\u06CC\u062C\u0627\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F ...\n          </span>\n        </mat-card-subtitle>\n      </mat-card-header>\n\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\n\n        <button mat-raised-button fxFlex.gt-lg=\"19\" fxFlex.lg=\"24\" fxFlex.md=\"31.7\" fxFlex.sm=\"49\" fxFlex.xs=\"100\"\n          class='link' *ngFor=\"let item of (widgets$ | async)\">\n          <button mat-icon-button (click)=\"remove(item)\" class=\"remove-item\">\n            <mat-icon>delete</mat-icon>\n          </button>\n          <div class=\"link-button\" [routerLink]=\"['../upsert' ,  item.type,  item._id]\" fxLayout='column' fxLayoutAlign='space-between center'>\n            <mat-icon color='primary' [style.color]=\"anghazi[item.type].color\">{{anghazi[item.type].icon}}</mat-icon>\n            <div fxFlex=\"nogrow\" fxFlexAlign=\"stretch\" fxLayoutAlign=\"center center\" class=\"widget-type\">\n              {{item.type}}\n            </div>\n            <h4 class=\"title\">{{item.name}}</h4>\n          </div>\n        </button>\n      </div>\n\n    </mat-card>\n\n    <div fxLayout=\"column\" class=\"sticky-action\">\n      <a mat-mini-fab routerLink=\"../upsert/article\" [style.backgroundColor]=\"'#ffffff'\">\n        <mat-icon [style.color]=\"anghazi.article.color\">{{anghazi.article.icon}}</mat-icon>\n      </a>\n      <a mat-mini-fab routerLink=\"../upsert/links\" [style.backgroundColor]=\"'#ffffff'\">\n        <mat-icon [style.color]=\"anghazi.links.color\">{{anghazi.links.icon}}</mat-icon>\n      </a>\n      <a mat-mini-fab routerLink=\"../upsert/list\" [style.backgroundColor]=\"'#ffffff'\">\n        <mat-icon [style.color]=\"anghazi.list.color\">{{anghazi.list.icon}}</mat-icon>\n      </a>\n    </div>\n\n  </div>\n</div>",
                        styles: [".link{margin:.5%;box-sizing:border-box;position:relative;padding:0}button.link mat-icon{font-size:34px;width:34px;height:34px}.link h4{margin:0}.remove-item{position:absolute;top:0;left:0;z-index:100}.link-button{padding:25px 15px}button.link .remove-item mat-icon{font-size:initial;width:initial;height:initial;visibility:hidden;opacity:0;transition:opacity .3s ease-in-out}button.link:hover .remove-item mat-icon{visibility:visible;opacity:1}"]
                    },] },
        ];
        /** @nocollapse */
        WidgetsManagementComponent.ctorParameters = function () {
            return [
                { type: store.Store }
            ];
        };
        return WidgetsManagementComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var UpsertComponent = /** @class */ (function () {
        function UpsertComponent() {
        }
        UpsertComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"main-container\">\n    <div fxFlex=\"50\">\n        <ng-container ngsDynamicWidgetConfig></ng-container>\n    </div>\n</div>"
                    },] },
        ];
        return UpsertComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        {
            path: "widget",
            component: RootComponent,
            children: [
                {
                    path: "management",
                    component: WidgetsManagementComponent
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
    /** @type {?} */
    var WidgetRoutingModule = router.RouterModule.forChild(routes);

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GetWidgetApiEffects = /** @class */ (function () {
        function GetWidgetApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$
                .ofType("[WIDGET][API][GetWidget] start" /* START */)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (payload) { return _this.service.get(payload); }), operators.map(function (res) { return new GetWidgetSucceedAction(res); }), operators.catchError(function (err) { return rxjs.of(new GetWidgetFailedAction(err)); }));
        }
        GetWidgetApiEffects.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        GetWidgetApiEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: WidgetService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], GetWidgetApiEffects.prototype, "start$", void 0);
        return GetWidgetApiEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var UpsertWidgetApiEffects = /** @class */ (function () {
        function UpsertWidgetApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$
                .ofType("[UPSERT_WIDGET][API][UpsertWidget] start" /* START */)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (payload) { return _this.service.upsert(payload); }), operators.map(function (res) { return new UpsertWidgetSucceedAction(res); }), operators.catchError(function (err) { return rxjs.of(new UpsertWidgetFailedAction(err)); }));
        }
        UpsertWidgetApiEffects.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        UpsertWidgetApiEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: WidgetService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], UpsertWidgetApiEffects.prototype, "start$", void 0);
        return UpsertWidgetApiEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GetWidgetsApiEffects = /** @class */ (function () {
        function GetWidgetsApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$
                .ofType("[GET_WIDGETS][API][GetWidgets] start" /* START */)
                .pipe(operators.switchMap(function () {
                return _this.service
                    .getWidgets()
                    .pipe(operators.map(function (res) { return new GetWidgetsSucceedAction(res); }), operators.catchError(function (err) { return rxjs.of(new GetWidgetsFailedAction(err)); }));
            }));
        }
        GetWidgetsApiEffects.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        GetWidgetsApiEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: WidgetService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], GetWidgetsApiEffects.prototype, "start$", void 0);
        return GetWidgetsApiEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DeleteWidgetApiEffects = /** @class */ (function () {
        function DeleteWidgetApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$
                .ofType("[DELETE_WIDGET][API][DeleteWidget] start" /* START */)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (payload) {
                return _this.service
                    .delete(payload)
                    .pipe(operators.map(function (res) { return new DeleteWidgetSucceedAction(res); }), operators.catchError(function (err) { return rxjs.of(new DeleteWidgetFailedAction(err)); }));
            }));
        }
        DeleteWidgetApiEffects.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        DeleteWidgetApiEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: WidgetService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], DeleteWidgetApiEffects.prototype, "start$", void 0);
        return DeleteWidgetApiEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var WidgetsActionTypes = {
        UPSERT: "[WIDGET][DB] UPSERT",
        DELETE: "[WIDGET][DB] DELETE",
    };
    var UpsertWidgetAction = /** @class */ (function () {
        function UpsertWidgetAction(payload) {
            this.payload = payload;
            this.type = WidgetsActionTypes.UPSERT;
        }
        return UpsertWidgetAction;
    }());
    var DeleteWidgetAction = /** @class */ (function () {
        function DeleteWidgetAction(payload) {
            this.payload = payload;
            this.type = WidgetsActionTypes.DELETE;
        }
        return DeleteWidgetAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            case WidgetsActionTypes.UPSERT:
                _data = state.data.concat();
                /** @type {?} */
                var newWidgets = action.payload;
                if (!(newWidgets instanceof Array)) {
                    newWidgets = [newWidgets];
                    console.error("'WidgetsActionTypes.UPSERT' does not get array payload");
                }
                newWidgets.forEach(function (newWidget) {
                    /** @type {?} */
                    var existedWidgetIndex = _data.findIndex(function (w) { return w._id == newWidget._id; });
                    if (existedWidgetIndex > -1) {
                        _data.splice(existedWidgetIndex, 1, newWidget);
                    }
                    else {
                        _data.push(newWidget);
                    }
                });
                return __assign({}, state, { data: _data });
            case WidgetsActionTypes.DELETE:
                debugger;
                _data = state.data.concat();
                /** @type {?} */
                var widgetIndex = state.data.findIndex(function (w) { return w._id == action.payload._id; });
                if (widgetIndex > -1) {
                    _data.splice(widgetIndex, 1);
                }
                return __assign({}, state, { data: _data });
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var WidgetReducer = {
        db: Reducer
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var WidgetDbEffects = /** @class */ (function () {
        function WidgetDbEffects(actions$) {
            this.actions$ = actions$;
            this.Upsert$ = this.actions$
                .ofType("[WIDGET][API][GetWidget] succeed" /* SUCCEED */)
                .pipe(operators.pluck("payload"), operators.map(function (widget) { return new UpsertWidgetAction([widget]); }));
            this.UpsertMany$ = this.actions$
                .ofType("[GET_WIDGETS][API][GetWidgets] succeed" /* SUCCEED */)
                .pipe(operators.pluck("payload"), operators.map(function (widgets) { return new UpsertWidgetAction(widgets); }));
            this.Delete$ = this.actions$
                .ofType("[DELETE_WIDGET][API][DeleteWidget] succeed" /* SUCCEED */)
                .pipe(operators.pluck("payload"), operators.map(function (widget) { return new DeleteWidgetAction(widget); }));
        }
        WidgetDbEffects.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        WidgetDbEffects.ctorParameters = function () {
            return [
                { type: effects.Actions }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], WidgetDbEffects.prototype, "Upsert$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], WidgetDbEffects.prototype, "UpsertMany$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], WidgetDbEffects.prototype, "Delete$", void 0);
        return WidgetDbEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DynamicWidgetConfigDirective = /** @class */ (function () {
        function DynamicWidgetConfigDirective(store$$1, route, service, configurationService, resolver, container) {
            this.store = store$$1;
            this.route = route;
            this.service = service;
            this.configurationService = configurationService;
            this.resolver = resolver;
            this.container = container;
            this._fill_component_map();
        }
        /**
         * @return {?}
         */
        DynamicWidgetConfigDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._react_base_on_params();
            };
        /**
         * @return {?}
         */
        DynamicWidgetConfigDirective.prototype._fill_component_map = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.configurationService.config$.pipe(operators.map(function (config) { return config.types; }), operators.startWith({})).subscribe(function (types) {
                    debugger;
                    _this.mapTypeToComponent = types;
                });
            };
        /**
         * @return {?}
         */
        DynamicWidgetConfigDirective.prototype._react_base_on_params = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.route.params.subscribe(function (_a) {
                    var type = _a.type, _id = _a._id;
                    if (_id) {
                        _this.service.selectById(_id).subscribe(function (widget) {
                            _this._resolve_correct_component_base_on_widget_type(type, widget);
                        });
                    }
                    else {
                        _this._resolve_correct_component_base_on_widget_type(type);
                    }
                });
            };
        /**
         * @param {?} type
         * @param {?=} widget
         * @return {?}
         */
        DynamicWidgetConfigDirective.prototype._resolve_correct_component_base_on_widget_type = /**
         * @param {?} type
         * @param {?=} widget
         * @return {?}
         */
            function (type, widget) {
                if (this.component) {
                    this.component.destroy();
                }
                if (!this.mapTypeToComponent[type]) {
                    /** @type {?} */
                    var supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
                    throw new Error("Trying to use an unsupported type (" + type + ").\n\t\t  \t\t Supported types: " + supportedTypes);
                }
                /** @type {?} */
                var component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[type].upsert);
                this.component = this.container.createComponent(component);
                // this.widget$.subscribe((w) => (this.component.instance.widget = w));
                if (widget)
                    this.component.instance.widget = widget;
            };
        DynamicWidgetConfigDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "[ngsDynamicWidgetConfig]"
                    },] },
        ];
        /** @nocollapse */
        DynamicWidgetConfigDirective.ctorParameters = function () {
            return [
                { type: store.Store },
                { type: router.ActivatedRoute },
                { type: WidgetService },
                { type: WidgetConfigurationService },
                { type: core.ComponentFactoryResolver },
                { type: core.ViewContainerRef }
            ];
        };
        return DynamicWidgetConfigDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DynamicWidgetViewDirective = /** @class */ (function () {
        function DynamicWidgetViewDirective(store$$1, route, service, configurationService, resolver, container) {
            this.store = store$$1;
            this.route = route;
            this.service = service;
            this.configurationService = configurationService;
            this.resolver = resolver;
            this.container = container;
            this._fill_component_map();
        }
        Object.defineProperty(DynamicWidgetViewDirective.prototype, "oid", {
            set: /**
             * @param {?} id
             * @return {?}
             */ function (id) {
                this._selectWidget(id);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DynamicWidgetViewDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.widget$.pipe(operators.filter(function (widget) { return widget != undefined; })).subscribe(function (widget) {
                    _this._resolve_correct_component_base_on_widget_type(widget);
                });
            };
        /**
         * @return {?}
         */
        DynamicWidgetViewDirective.prototype._fill_component_map = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.configurationService.config$.pipe(operators.map(function (config) { return config.types; }), operators.startWith({})).subscribe(function (types) {
                    debugger;
                    _this.mapTypeToComponent = types;
                });
            };
        /**
         * @param {?} id
         * @return {?}
         */
        DynamicWidgetViewDirective.prototype._selectWidget = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                this.widget$ = this.service.selectById(id);
            };
        /**
         * @param {?} widget
         * @return {?}
         */
        DynamicWidgetViewDirective.prototype._resolve_correct_component_base_on_widget_type = /**
         * @param {?} widget
         * @return {?}
         */
            function (widget) {
                var _this = this;
                if (!this.mapTypeToComponent[widget.type]) {
                    /** @type {?} */
                    var supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
                    throw new Error("Trying to use an unsupported type (" + widget.type + ").\n\t\t  \t\t Supported types: " + supportedTypes);
                }
                /** @type {?} */
                var component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[widget.type].view);
                this.component = this.container.createComponent(component);
                this.widget$.subscribe(function (w) { return (_this.component.instance.widget = w); });
            };
        DynamicWidgetViewDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "[ngsDynamicWidgetView]"
                    },] },
        ];
        /** @nocollapse */
        DynamicWidgetViewDirective.ctorParameters = function () {
            return [
                { type: store.Store },
                { type: router.ActivatedRoute },
                { type: WidgetService },
                { type: WidgetConfigurationService },
                { type: core.ComponentFactoryResolver },
                { type: core.ViewContainerRef }
            ];
        };
        DynamicWidgetViewDirective.propDecorators = {
            oid: [{ type: core.Input }]
        };
        return DynamicWidgetViewDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgsWidgetModule = /** @class */ (function () {
        function NgsWidgetModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        NgsWidgetModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: NgsWidgetRootModule,
                    providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, WidgetConfigurationService, WidgetService]
                };
            };
        NgsWidgetModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            material.MatExpansionModule,
                            material.MatSnackBarModule,
                            material.MatIconModule,
                            material.MatButtonModule,
                            material.MatCardModule,
                            material.MatSelectModule,
                            material.MatInputModule,
                            material.MatFormFieldModule,
                            material.MatTabsModule,
                            material.MatRadioModule,
                            flexLayout.FlexLayoutModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            material.MatSlideToggleModule,
                            material.MatDividerModule,
                            material.MatCheckboxModule,
                            material.MatTableModule,
                            material.MatMenuModule
                        ],
                        declarations: [
                            RootComponent,
                            WidgetsManagementComponent,
                            UpsertComponent,
                            DynamicWidgetConfigDirective,
                            DynamicWidgetViewDirective,
                            WidgetSelectorComponent,
                            DynamicWidgetViewComponent
                        ],
                        entryComponents: [WidgetSelectorComponent, DynamicWidgetViewComponent],
                        exports: [DynamicWidgetViewDirective, WidgetSelectorComponent, DynamicWidgetViewComponent]
                    },] },
        ];
        return NgsWidgetModule;
    }());
    var NgsWidgetRootModule = /** @class */ (function () {
        function NgsWidgetRootModule() {
        }
        NgsWidgetRootModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            NgsWidgetModule,
                            WidgetRoutingModule,
                            store.StoreModule.forFeature("widgets", WidgetReducer),
                            effects.EffectsModule.forFeature([WidgetDbEffects, GetWidgetApiEffects, GetWidgetsApiEffects, UpsertWidgetApiEffects, DeleteWidgetApiEffects])
                        ],
                        exports: [NgsWidgetModule]
                    },] },
        ];
        return NgsWidgetRootModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ IWidgetView = /** @class */ (function () {
        function IWidgetView() {
        }
        return IWidgetView;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ IWidgetUpsert = /** @class */ (function () {
        function IWidgetUpsert() {
        }
        return IWidgetUpsert;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.UpsertWidgetStartAction = UpsertWidgetStartAction;
    exports.DynamicWidgetViewComponent = DynamicWidgetViewComponent;
    exports.WidgetSelectorComponent = WidgetSelectorComponent;
    exports.NgsWidgetModule = NgsWidgetModule;
    exports.WidgetModel = WidgetModel;
    exports.IWidgetView = IWidgetView;
    exports.IWidgetUpsert = IWidgetUpsert;
    exports.ɵh = WidgetsManagementComponent;
    exports.ɵg = RootComponent;
    exports.ɵn = WidgetDbEffects;
    exports.ɵm = Reducer;
    exports.ɵu = DeleteWidgetApiEffects;
    exports.ɵo = GetWidgetApiEffects;
    exports.ɵq = GetWidgetsApiEffects;
    exports.ɵs = UpsertWidgetApiEffects;
    exports.ɵf = WidgetConfigurationService;
    exports.ɵe = WidgetService;
    exports.ɵj = DynamicWidgetConfigDirective;
    exports.ɵi = UpsertComponent;
    exports.ɵk = DynamicWidgetViewDirective;
    exports.ɵl = WidgetRoutingModule;
    exports.ɵb = MODULE_CONFIG_TOKEN;
    exports.ɵa = NgsWidgetRootModule;
    exports.ɵc = WidgetReducer;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXdpZGdldC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldHMvZ2V0LXdpZGdldHMubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldHMvZ2V0LXdpZGdldHMuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0L2dldC13aWRnZXQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldC9nZXQtd2lkZ2V0LmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9tb2RlbHMvd2lkZ2V0Lm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvYXBpL3Vwc2VydC13aWRnZXQvdXBzZXJ0LXdpZGdldC5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3NlcnZpY2VzL2FwaS91cHNlcnQtd2lkZ2V0L3Vwc2VydC13aWRnZXQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3NlcnZpY2VzL2FwaS9kZWxldGUtd2lkZ2V0L2RlbGV0ZS13aWRnZXQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvZGVsZXRlLXdpZGdldC9kZWxldGUtd2lkZ2V0LmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi93aWRnZXQuY29uZmlnLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvd2lkZ2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3NlcnZpY2VzL3dpZGdldC5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvdmlldy9keW5hbWljLXdpZGdldC12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3dpZGdldC1zZWxlY3Rvci93aWRnZXQtc2VsZWN0b3IuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvcm9vdC9yb290LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL21hbmdlbWVudC93aWRnZXQtbWFuYWdlbWVudC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi91cHNlcnQvdXBzZXJ0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3dpZGdldC1yb3V0aW5nLm1vZHVsZS50cyIsbnVsbCwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvYXBpL2dldC13aWRnZXQvZ2V0LXdpZGdldC5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvYXBpL3Vwc2VydC13aWRnZXQvdXBzZXJ0LXdpZGdldC5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvYXBpL2dldC13aWRnZXRzL2dldC13aWRnZXRzLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvZGVsZXRlLXdpZGdldC9kZWxldGUtd2lkZ2V0LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9yb290L3dpZGdldC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvcm9vdC93aWRnZXRzLnJlZHVjZXJzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvd2lkZ2V0LnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9yb290L3dpZGdldHMuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3Vwc2VydC9keW5hbWljLXdpZGdldC1jb25maWcuZGlyZWN0aXZlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvdmlldy9keW5hbWljLXdpZGdldC12aWV3LmRpcmVjdGl2ZS50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3dpZGdldC5tb2R1bGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9tb2RlbHMvd2lkZ2V0LXZpZXcuaW50ZXJmYWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvbW9kZWxzL3dpZGdldC11cHNlcnQuaW50ZXJmYWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgR2V0V2lkZ2V0c0FwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWUgPSB7fSkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge307XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBXaWRnZXRNb2RlbDxhbnk+W107XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0V2lkZ2V0c0FwaU1vZGVsIH0gZnJvbSBcIi4vZ2V0LXdpZGdldHMubW9kZWxcIjtcclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gR0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW0dFVF9XSURHRVRTXVtBUEldW0dldFdpZGdldHNdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW0dFVF9XSURHRVRTXVtBUEldW0dldFdpZGdldHNdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltHRVRfV0lER0VUU11bQVBJXVtHZXRXaWRnZXRzXSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0c1N0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRzU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+W10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFdpZGdldHNGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldFdpZGdldHNBY3Rpb25zID0gR2V0V2lkZ2V0c1N0YXJ0QWN0aW9uIHwgR2V0V2lkZ2V0c1N1Y2NlZWRBY3Rpb24gfCBHZXRXaWRnZXRzRmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEdldFdpZGdldEFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRfaWQ6IHN0cmluZztcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7fTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IFdpZGdldE1vZGVsPGFueT47XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0V2lkZ2V0QXBpTW9kZWwgfSBmcm9tIFwiLi9nZXQtd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEdFVF9XSURHRVRfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW1dJREdFVF1bQVBJXVtHZXRXaWRnZXRdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW1dJREdFVF1bQVBJXVtHZXRXaWRnZXRdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltXSURHRVRdW0FQSV1bR2V0V2lkZ2V0XSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0U3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfV0lER0VUX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1dJREdFVF9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogV2lkZ2V0TW9kZWw8YW55Pikge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1dJREdFVF9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldFdpZGdldEFjdGlvbnMgPSBHZXRXaWRnZXRTdGFydEFjdGlvbiB8IEdldFdpZGdldFN1Y2NlZWRBY3Rpb24gfCBHZXRXaWRnZXRGYWlsZWRBY3Rpb247XHJcbiIsImV4cG9ydCBjbGFzcyBXaWRnZXRNb2RlbDxUPiB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdHR5cGU6IHN0cmluZztcclxuXHRDb25maWc6IFQ7XHJcblx0Y29uc3RydWN0b3IoeyBfaWQsIG5hbWUsIHR5cGUsIENvbmZpZyB9OiB7IF9pZD86IHN0cmluZzsgbmFtZT86IHN0cmluZzsgdHlwZT86IHN0cmluZzsgQ29uZmlnPzogVCB9ID0ge30pIHtcclxuXHRcdHRoaXMuX2lkID0gX2lkO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZSB8fCBcIlwiO1xyXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcclxuXHRcdHRoaXMuQ29uZmlnID0gQ29uZmlnIHx8ICh7fSBhcyBUKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBVcHNlcnRXaWRnZXRBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0d2lkZ2V0OiBXaWRnZXRNb2RlbDxhbnk+O1xyXG5cdFx0Y29uc3RydWN0b3Iod2lkZ2V0ID0ge30pIHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRoaXMud2lkZ2V0ID0gbmV3IFdpZGdldE1vZGVsKHdpZGdldCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLndpZGdldDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IFdpZGdldE1vZGVsPGFueT47XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0QXBpTW9kZWwgfSBmcm9tIFwiLi91cHNlcnQtd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIFVQU0VSVF9XSURHRVRfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW1VQU0VSVF9XSURHRVRdW0FQSV1bVXBzZXJ0V2lkZ2V0XSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltVUFNFUlRfV0lER0VUXVtBUEldW1Vwc2VydFdpZGdldF0gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW1VQU0VSVF9XSURHRVRdW0FQSV1bVXBzZXJ0V2lkZ2V0XSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfV0lER0VUX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogV2lkZ2V0TW9kZWw8YW55Pikge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0V2lkZ2V0U3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9XSURHRVRfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT4pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydFdpZGdldEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9XSURHRVRfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBVcHNlcnRXaWRnZXRBY3Rpb25zID0gVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24gfCBVcHNlcnRXaWRnZXRTdWNjZWVkQWN0aW9uIHwgVXBzZXJ0V2lkZ2V0RmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIERlbGV0ZVdpZGdldEFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHR3aWRnZXQ6IFdpZGdldE1vZGVsPGFueT47XHJcblx0XHRjb25zdHJ1Y3Rvcih3aWRnZXQgPSB7fSkge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy53aWRnZXQgPSBuZXcgV2lkZ2V0TW9kZWwod2lkZ2V0KTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMud2lkZ2V0O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogV2lkZ2V0TW9kZWw8YW55PjtcclxuXHRcdGNvbnN0cnVjdG9yKCkgeyB9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gREVMRVRFX1dJREdFVF9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbREVMRVRFX1dJREdFVF1bQVBJXVtEZWxldGVXaWRnZXRdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW0RFTEVURV9XSURHRVRdW0FQSV1bRGVsZXRlV2lkZ2V0XSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbREVMRVRFX1dJREdFVF1bQVBJXVtEZWxldGVXaWRnZXRdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZWxldGVXaWRnZXRTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERFTEVURV9XSURHRVRfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgRGVsZXRlV2lkZ2V0U3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERFTEVURV9XSURHRVRfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT4pIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVXaWRnZXRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfV0lER0VUX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT4pIHsgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBEZWxldGVXaWRnZXRBY3Rpb25zID0gRGVsZXRlV2lkZ2V0U3RhcnRBY3Rpb24gfCBEZWxldGVXaWRnZXRTdWNjZWVkQWN0aW9uIHwgRGVsZXRlV2lkZ2V0RmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBJTW9kdWxlQ29uZmlnTWFwVHlwZXMgfSBmcm9tIFwiLi9tb2RlbHMvbW9kdWxlLWNvbmZpZy1tYXAtdHlwZXMuaW50ZXJmY2VcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2lkZ2V0TW9kdWxlQ29uZmlnIHtcclxuXHRkZXZlbG9wbWVudF91cmk/OiBzdHJpbmc7XHJcblx0cHJvZHVjdGlvbl91cmk/OiBzdHJpbmc7XHJcblx0ZW52Pzoge1xyXG5cdFx0cHJvZHVjdGlvbjogYm9vbGVhbjtcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogc3RyaW5nO1xyXG5cdH07XHJcblx0ZW5kcG9pbnRzPzoge1xyXG5cdFx0Z2V0OiBzdHJpbmc7XHJcblx0XHRmaW5kOiBzdHJpbmc7XHJcblx0XHR1cHNlcnQ6IHN0cmluZztcclxuXHRcdGRlbGV0ZUl0ZW06IHN0cmluZztcclxuXHR9O1xyXG5cdHR5cGVzPzogSU1vZHVsZUNvbmZpZ01hcFR5cGVzO1xyXG59XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IFdpZGdldE1vZHVsZUNvbmZpZyA9IHtcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlLFxyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBcImZyb250ZW5kX3NlcnZlci9kaWQvbm90L3NldFwiXHJcblx0fSxcclxuXHRlbmRwb2ludHM6IHtcclxuXHRcdHVwc2VydDogXCIvYXBpL3Vpd2lkZ2V0XCIsXHJcblx0XHRmaW5kOiBcIi9hcGkvdWl3aWRnZXRcIixcclxuXHRcdGdldDogXCIvYXBpL3Vpd2lkZ2V0LyR7bW9kZWwuX2lkfVwiLFxyXG5cdFx0ZGVsZXRlSXRlbTogXCIvYXBpL3Vpd2lkZ2V0LyR7bW9kZWwud2lkZ2V0SWR9XCJcclxuXHR9LFxyXG5cdHR5cGVzOiB7fVxyXG59O1xyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxXaWRnZXRNb2R1bGVDb25maWc+KFwiV2lkZ2V0TW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kdWxlQ29uZmlnLCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi4vd2lkZ2V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogV2lkZ2V0TW9kdWxlQ29uZmlnO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cdH1cclxuXHRjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdChNT0RVTEVfREVGQVVMVF9DT05GSUcpO1xyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIHRoaXMuc3RvcmUuc2VsZWN0KGdldFdpZGdldE1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKCh3aWRnZXRDb25maWcpID0+IHtcclxuXHRcdC8vIFx0aWYgKCF3aWRnZXRDb25maWcpIHtcclxuXHRcdC8vIFx0XHRyZXR1cm47XHJcblx0XHQvLyBcdH1cclxuXHRcdC8vIFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCB3aWRnZXRDb25maWcuQ29uZmlnKTtcclxuXHRcdC8vIFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHRhcCwgdGFrZSwgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3dpZGdldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vd2lkZ2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IHN0cmluZ1RlbXBsYXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEdldFdpZGdldHNBcGlNb2RlbCwgR2V0V2lkZ2V0U3RhcnRBY3Rpb24sIFVwc2VydFdpZGdldEFwaU1vZGVsLCBEZWxldGVXaWRnZXRBcGlNb2RlbCB9IGZyb20gXCIuL2FwaVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdpZGdldFNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb25cclxuXHQpIHsgfVxyXG5cclxuXHRnZXQ8VD4oX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPFQ+PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmdldCAhPT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdHN3aXRjaE1hcCgoY29uZmlnKSA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5nZXQoc3RyaW5nVGVtcGxhdGUoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmdldCwgeyBfaWQgfSkpXHJcblx0XHRcdCksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IFVwc2VydFdpZGdldEFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Z2V0V2lkZ2V0cygpOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPGFueT5bXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5maW5kICE9IFwiXCIpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuZmluZCkpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBHZXRXaWRnZXRzQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cdHVwc2VydDxUPih3aWRnZXQ6IFVwc2VydFdpZGdldEFwaU1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPFQ+PiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBVcHNlcnRXaWRnZXRBcGlNb2RlbC5SZXF1ZXN0KHdpZGdldCk7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLnVwc2VydCAhPSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0c3dpdGNoTWFwKChjb25maWcpID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLnBvc3QoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLnVwc2VydCwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSlcclxuXHRcdFx0KSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogVXBzZXJ0V2lkZ2V0QXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdCksXHJcblx0XHRcdHRhcCgoKSA9PiB0aGlzLl9sb2NhdGlvbi5iYWNrKCkpXHJcblx0XHQpO1xyXG5cdH1cclxuXHRkZWxldGUod2lkZ2V0OiBXaWRnZXRNb2RlbDxhbnk+KSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGNvbnN0IHdpZGdldElkID0gd2lkZ2V0Ll9pZDtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlSXRlbSAhPSBcIlwiKSxcclxuXHRcdFx0c3dpdGNoTWFwKChjb25maWcpID0+IHRoaXMuaHR0cC5kZWxldGU8RGVsZXRlV2lkZ2V0QXBpTW9kZWwuUmVzcG9uc2U+KFxyXG5cdFx0XHRcdHN0cmluZ1RlbXBsYXRlKGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5kZWxldGVJdGVtLCB7IHdpZGdldElkIH0pKS5waXBlKFxyXG5cdFx0XHRcdFx0bWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0XHRcdCkpLFxyXG5cdFx0KTtcclxuXHR9XHJcblx0c2VsZWN0QnlJZDxUPihfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8VD4+IHtcclxuXHRcdGNvbnN0IHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFdpZGdldE1vZGVsPFQ+Pih1bmRlZmluZWQpO1xyXG5cdFx0dGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KChzdGF0ZSkgPT4gc3RhdGUud2lkZ2V0cy5kYi5kYXRhKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRmaWx0ZXIoKHdpZGdldHMpID0+IHdpZGdldHMgIT0gbnVsbCksXHJcblx0XHRcdFx0bWFwKCh3aWRnZXRzKSA9PiB3aWRnZXRzLmZpbmQoKHdpZGdldCkgPT4gd2lkZ2V0Ll9pZCA9PSBfaWQpKSxcclxuXHRcdFx0XHR0YXAoKHdpZGdldCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHdpZGdldCA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFdpZGdldFN0YXJ0QWN0aW9uKF9pZCkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZSgod2lkZ2V0KSA9PiBzdWJqZWN0Lm5leHQod2lkZ2V0KSk7XHJcblx0XHRyZXR1cm4gc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdENvbXBvbmVudFJlZixcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHREaXJlY3RpdmUsXHJcblx0SW5wdXRcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBwbHVjaywgZmlsdGVyLCBzd2l0Y2hNYXAsIG1hcCwgc3RhcnRXaXRoIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3dpZGdldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IElNb2R1bGVDb25maWdNYXBUeXBlcyB9IGZyb20gXCIuLi9tb2RlbHMvbW9kdWxlLWNvbmZpZy1tYXAtdHlwZXMuaW50ZXJmY2VcIjtcclxuaW1wb3J0IHsgV2lkZ2V0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy93aWRnZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy93aWRnZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXRcIixcclxuXHR0ZW1wbGF0ZTogXCJcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY1dpZGdldFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IG9pZChpZDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLl9zZWxlY3RXaWRnZXQoaWQpO1xyXG5cdH1cclxuXHR3aWRnZXQkOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPGFueT4+O1xyXG5cdGNvbXBvbmVudDogQ29tcG9uZW50UmVmPGFueT47XHJcblx0bWFwVHlwZVRvQ29tcG9uZW50OiBJTW9kdWxlQ29uZmlnTWFwVHlwZXM7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwdWJsaWMgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgc2VydmljZTogV2lkZ2V0U2VydmljZSxcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcclxuXHQpIHtcclxuXHRcdHRoaXMuX2ZpbGxfY29tcG9uZW50X21hcCgpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMud2lkZ2V0JC5waXBlKGZpbHRlcih3aWRnZXQgPT4gd2lkZ2V0ICE9IHVuZGVmaW5lZCkpLnN1YnNjcmliZSh3aWRnZXQgPT4ge1xyXG5cdFx0XHR0aGlzLl9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUod2lkZ2V0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfZmlsbF9jb21wb25lbnRfbWFwKCkge1xyXG5cdFx0dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUobWFwKGNvbmZpZyA9PiBjb25maWcudHlwZXMpLCBzdGFydFdpdGgoe30pKS5zdWJzY3JpYmUodHlwZXMgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5tYXBUeXBlVG9Db21wb25lbnQgPSB0eXBlcztcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfc2VsZWN0V2lkZ2V0KGlkOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMud2lkZ2V0JCA9IHRoaXMuc2VydmljZS5zZWxlY3RCeUlkPGFueT4oaWQpO1xyXG5cdH1cclxuXHRfcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHdpZGdldCkge1xyXG5cdFx0aWYgKCF0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt3aWRnZXQudHlwZV0pIHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdGNvbnN0IHN1cHBvcnRlZFR5cGVzID0gT2JqZWN0LmtleXModGhpcy5tYXBUeXBlVG9Db21wb25lbnQpLmpvaW4oXCIsIFwiKTtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdGBUcnlpbmcgdG8gdXNlIGFuIHVuc3VwcG9ydGVkIHR5cGUgKCR7d2lkZ2V0LnR5cGV9KS5cclxuXHRcdCAgXHRcdCBTdXBwb3J0ZWQgdHlwZXM6ICR7c3VwcG9ydGVkVHlwZXN9YFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KHRoaXMubWFwVHlwZVRvQ29tcG9uZW50W3dpZGdldC50eXBlXS52aWV3KTtcclxuXHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcblx0XHR0aGlzLndpZGdldCQuc3Vic2NyaWJlKHcgPT4gKHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLndpZGdldCA9IHcpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgSUdyaWRJdGVtQ29tcG9uZW50IH0gZnJvbSBcIkBzb3VzaGlhbnMvZ3JpZFwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBJV2lkZ2V0Vmlld0lucHV0SW50ZXJmYWNlIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQtdmlldy1pbnB1dC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR2V0V2lkZ2V0c1N0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uIHdyYXBcIiBmeExheW91dEdhcD1cIjE1cHhcIj5cclxuICA8aDQ+w5nChMObwozDmMKzw5jCqiDDmcKIw5vCjMOYwqzDmMKqw6LCgMKMw5nCh8OYwqc8L2g0PlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCIxMDBcIj5cclxuPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCLDmcKGw5nCiMOYwrkgw5nCiMObwozDmMKsw5jCqlwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRXaWRnZXRJZFwiIG5hbWU9XCJzZWxlY3RlZFdpZGdldElkXCI+XHJcbiAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgKHdpZGdldHMkIHwgYXN5bmMpXCIgW3ZhbHVlXT1cIml0ZW0uX2lkXCI+XHJcbiAgICB7e2l0ZW0udHlwZX19IDogPGI+e3tpdGVtLm5hbWV9fTwvYj5cclxuICA8L21hdC1vcHRpb24+XHJcbjwvbWF0LXNlbGVjdD4gXHJcbjwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFdpZGdldFNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJR3JpZEl0ZW1Db21wb25lbnQ8SVdpZGdldFZpZXdJbnB1dEludGVyZmFjZT4ge1xyXG5cdHdpZGdldHMkOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPGFueT5bXT47XHJcblx0c2VsZWN0ZWRXaWRnZXRJZDogc3RyaW5nO1xyXG5cdGdldCB2YWxpZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5vaWQgIT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0b2lkOiB0aGlzLnNlbGVjdGVkV2lkZ2V0SWRcclxuXHRcdH07XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLndpZGdldHMkID0gdGhpcy5zdG9yZS5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUud2lkZ2V0cy5kYi5kYXRhKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRXaWRnZXRzU3RhcnRBY3Rpb24oKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXQtcm9vdFwiLFxyXG5cdHRlbXBsYXRlOiBcIjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdENvbXBvbmVudCB7fVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR2V0V2lkZ2V0c1N0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0cy9nZXQtd2lkZ2V0cy5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IERlbGV0ZVdpZGdldFN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS9kZWxldGUtd2lkZ2V0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCIgY2xhc3M9XCJtYWluLWNvbnRhaW5lclwiPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudC1hY3Rpb25cIj5cclxuICAgIDxtYXQtY2FyZCBjbGFzcz1cIndpdGgtc3RpY2t5LWFjdGlvblwiPlxyXG4gICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiNXB4XCI+XHJcbiAgICAgICAgICA8bWF0LWljb24+d2lkZ2V0czwvbWF0LWljb24+XHJcbiAgICAgICAgICA8c3Bhbj7DmcKFw5jCr8ObwozDmMKxw5vCjMOYwqogw5jCp8OZwoHDmMKyw5nCiMOZwobDmcKHw6LCgMKMw5nCh8OYwqc8L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8bWF0LWNhcmQtc3VidGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICDDmMKnw5nCgcOYwrLDmcKIw5nChsOZwofDosKAwowgw5nChcOZwojDmMKxw5jCryDDmcKGw5jCuMOYwrEgw5jCscOYwqcgw5jCqMOYwrHDmMKnw5jCs8OYwqfDmMKzIMOZwobDmcKIw5jCuSDDmMKiw5nChiDDmMKnw5vCjMOYwqzDmMKnw5jCryDDmcKGw5nChcOYwqfDm8KMw5vCjMOYwq8gLi4uXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1zdWJ0aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcblxyXG4gICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEFsaWduPVwic3RhcnRcIj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBmeEZsZXguZ3QtbGc9XCIxOVwiIGZ4RmxleC5sZz1cIjI0XCIgZnhGbGV4Lm1kPVwiMzEuN1wiIGZ4RmxleC5zbT1cIjQ5XCIgZnhGbGV4LnhzPVwiMTAwXCJcclxuICAgICAgICAgIGNsYXNzPSdsaW5rJyAqbmdGb3I9XCJsZXQgaXRlbSBvZiAod2lkZ2V0cyQgfCBhc3luYylcIj5cclxuICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJyZW1vdmUoaXRlbSlcIiBjbGFzcz1cInJlbW92ZS1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluay1idXR0b25cIiBbcm91dGVyTGlua109XCJbJy4uL3Vwc2VydCcgLCAgaXRlbS50eXBlLCAgaXRlbS5faWRdXCIgZnhMYXlvdXQ9J2NvbHVtbicgZnhMYXlvdXRBbGlnbj0nc3BhY2UtYmV0d2VlbiBjZW50ZXInPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gY29sb3I9J3ByaW1hcnknIFtzdHlsZS5jb2xvcl09XCJhbmdoYXppW2l0ZW0udHlwZV0uY29sb3JcIj57e2FuZ2hhemlbaXRlbS50eXBlXS5pY29ufX08L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4RmxleEFsaWduPVwic3RyZXRjaFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJ3aWRnZXQtdHlwZVwiPlxyXG4gICAgICAgICAgICAgIHt7aXRlbS50eXBlfX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cInRpdGxlXCI+e3tpdGVtLm5hbWV9fTwvaDQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9tYXQtY2FyZD5cclxuXHJcbiAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgY2xhc3M9XCJzdGlja3ktYWN0aW9uXCI+XHJcbiAgICAgIDxhIG1hdC1taW5pLWZhYiByb3V0ZXJMaW5rPVwiLi4vdXBzZXJ0L2FydGljbGVcIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cIicjZmZmZmZmJ1wiPlxyXG4gICAgICAgIDxtYXQtaWNvbiBbc3R5bGUuY29sb3JdPVwiYW5naGF6aS5hcnRpY2xlLmNvbG9yXCI+e3thbmdoYXppLmFydGljbGUuaWNvbn19PC9tYXQtaWNvbj5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YSBtYXQtbWluaS1mYWIgcm91dGVyTGluaz1cIi4uL3Vwc2VydC9saW5rc1wiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiJyNmZmZmZmYnXCI+XHJcbiAgICAgICAgPG1hdC1pY29uIFtzdHlsZS5jb2xvcl09XCJhbmdoYXppLmxpbmtzLmNvbG9yXCI+e3thbmdoYXppLmxpbmtzLmljb259fTwvbWF0LWljb24+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgbWF0LW1pbmktZmFiIHJvdXRlckxpbms9XCIuLi91cHNlcnQvbGlzdFwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiJyNmZmZmZmYnXCI+XHJcbiAgICAgICAgPG1hdC1pY29uIFtzdHlsZS5jb2xvcl09XCJhbmdoYXppLmxpc3QuY29sb3JcIj57e2FuZ2hhemkubGlzdC5pY29ufX08L21hdC1pY29uPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYC5saW5re21hcmdpbjouNSU7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MH1idXR0b24ubGluayBtYXQtaWNvbntmb250LXNpemU6MzRweDt3aWR0aDozNHB4O2hlaWdodDozNHB4fS5saW5rIGg0e21hcmdpbjowfS5yZW1vdmUtaXRlbXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7ei1pbmRleDoxMDB9LmxpbmstYnV0dG9ue3BhZGRpbmc6MjVweCAxNXB4fWJ1dHRvbi5saW5rIC5yZW1vdmUtaXRlbSBtYXQtaWNvbntmb250LXNpemU6aW5pdGlhbDt3aWR0aDppbml0aWFsO2hlaWdodDppbml0aWFsO3Zpc2liaWxpdHk6aGlkZGVuO29wYWNpdHk6MDt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzIGVhc2UtaW4tb3V0fWJ1dHRvbi5saW5rOmhvdmVyIC5yZW1vdmUtaXRlbSBtYXQtaWNvbnt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXRzTWFuYWdlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0YW5naGF6aTogeyBbdHlwZTogc3RyaW5nXTogeyBjb2xvcjogc3RyaW5nOyBpY29uOiBzdHJpbmcgfSB9O1xyXG5cdHdpZGdldHMkOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPGFueT5bXT47XHJcblx0Y29uc3RydWN0b3IocHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMud2lkZ2V0cyQgPSB0aGlzLnN0b3JlLnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLndpZGdldHMuZGIuZGF0YSk7XHJcblx0XHR0aGlzLl9maWxsX2FuZ2hhemkoKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRXaWRnZXRzU3RhcnRBY3Rpb24oKSk7XHJcblx0fVxyXG5cdHJlbW92ZShpdGVtKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERlbGV0ZVdpZGdldFN0YXJ0QWN0aW9uKGl0ZW0pKTtcclxuXHR9XHJcblx0X2ZpbGxfYW5naGF6aSgpIHtcclxuXHRcdHRoaXMuYW5naGF6aSA9IHtcclxuXHRcdFx0YXJ0aWNsZToge1xyXG5cdFx0XHRcdGNvbG9yOiBcImdyZWVuXCIsXHJcblx0XHRcdFx0aWNvbjogXCJkZXNjcmlwdGlvblwiXHJcblx0XHRcdH0sXHJcblx0XHRcdGxpbmtzOiB7XHJcblx0XHRcdFx0Y29sb3I6IFwib3JhbmdlXCIsXHJcblx0XHRcdFx0aWNvbjogXCJsaW5rXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0bGlzdDoge1xyXG5cdFx0XHRcdGNvbG9yOiBcImJsdWVcIixcclxuXHRcdFx0XHRpY29uOiBcImxpc3RcIlxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwibWFpbi1jb250YWluZXJcIj5cclxuICAgIDxkaXYgZnhGbGV4PVwiNTBcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyIG5nc0R5bmFtaWNXaWRnZXRDb25maWc+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0Q29tcG9uZW50IHt9XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFJvb3RDb21wb25lbnQgfSBmcm9tIFwiLi9yb290L3Jvb3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFdpZGdldHNNYW5hZ2VtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vbWFuZ2VtZW50L3dpZGdldC1tYW5hZ2VtZW50LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVcHNlcnRDb21wb25lbnQgfSBmcm9tIFwiLi91cHNlcnQvdXBzZXJ0LmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogXCJ3aWRnZXRcIixcclxuXHRcdGNvbXBvbmVudDogUm9vdENvbXBvbmVudCxcclxuXHRcdGNoaWxkcmVuOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcIm1hbmFnZW1lbnRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFdpZGdldHNNYW5hZ2VtZW50Q29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInVwc2VydC86dHlwZVwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogVXBzZXJ0Q29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInVwc2VydC86dHlwZS86X2lkXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBVcHNlcnRDb21wb25lbnRcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBXaWRnZXRSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vd2lkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRHRVRfV0lER0VUX0FDVElPTl9UWVBFUyxcclxuXHRHZXRXaWRnZXRBY3Rpb25zLFxyXG5cdEdldFdpZGdldFN1Y2NlZWRBY3Rpb24sXHJcblx0R2V0V2lkZ2V0RmFpbGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vZ2V0LXdpZGdldC5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPEdldFdpZGdldEFjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX1dJREdFVF9BQ1RJT05fVFlQRVMuU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKChhY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChwYXlsb2FkKSA9PiB0aGlzLnNlcnZpY2UuZ2V0KHBheWxvYWQpKSxcclxuXHRcdFx0bWFwKChyZXMpID0+IG5ldyBHZXRXaWRnZXRTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRjYXRjaEVycm9yKChlcnIpID0+IG9mKG5ldyBHZXRXaWRnZXRGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3dpZGdldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0VVBTRVJUX1dJREdFVF9BQ1RJT05fVFlQRVMsXHJcblx0VXBzZXJ0V2lkZ2V0QWN0aW9ucyxcclxuXHRVcHNlcnRXaWRnZXRTdWNjZWVkQWN0aW9uLFxyXG5cdFVwc2VydFdpZGdldEZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL3Vwc2VydC13aWRnZXQuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0V2lkZ2V0QXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxVcHNlcnRXaWRnZXRBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBXaWRnZXRTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFVQU0VSVF9XSURHRVRfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcCgoYWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgocGF5bG9hZCkgPT4gdGhpcy5zZXJ2aWNlLnVwc2VydChwYXlsb2FkKSksXHJcblx0XHRcdG1hcCgocmVzKSA9PiBuZXcgVXBzZXJ0V2lkZ2V0U3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgVXBzZXJ0V2lkZ2V0RmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0U2VydmljZSB9IGZyb20gXCIuLi8uLi93aWRnZXQuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG5cdEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUyxcclxuXHRHZXRXaWRnZXRzQWN0aW9ucyxcclxuXHRHZXRXaWRnZXRzU3VjY2VlZEFjdGlvbixcclxuXHRHZXRXaWRnZXRzRmFpbGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vZ2V0LXdpZGdldHMuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0c0FwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8R2V0V2lkZ2V0c0FjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdHN3aXRjaE1hcCgoKSA9PlxyXG5cdFx0XHRcdHRoaXMuc2VydmljZVxyXG5cdFx0XHRcdFx0LmdldFdpZGdldHMoKVxyXG5cdFx0XHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0XHRcdG1hcCgocmVzKSA9PiBuZXcgR2V0V2lkZ2V0c1N1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdFx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IEdldFdpZGdldHNGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdClcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vd2lkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRERUxFVEVfV0lER0VUX0FDVElPTl9UWVBFUyxcclxuXHREZWxldGVXaWRnZXRBY3Rpb25zLFxyXG5cdERlbGV0ZVdpZGdldFN1Y2NlZWRBY3Rpb24sXHJcblx0RGVsZXRlV2lkZ2V0RmFpbGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vZGVsZXRlLXdpZGdldC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERlbGV0ZVdpZGdldEFwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8RGVsZXRlV2lkZ2V0QWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogV2lkZ2V0U2VydmljZSkgeyB9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoREVMRVRFX1dJREdFVF9BQ1RJT05fVFlQRVMuU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKChhY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChwYXlsb2FkKSA9PlxyXG5cdFx0XHRcdHRoaXMuc2VydmljZVxyXG5cdFx0XHRcdFx0LmRlbGV0ZShwYXlsb2FkKVxyXG5cdFx0XHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0XHRcdG1hcCgocmVzKSA9PiBuZXcgRGVsZXRlV2lkZ2V0U3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0XHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgRGVsZXRlV2lkZ2V0RmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gV2lkZ2V0c0FjdGlvblR5cGVzIHtcclxuXHRVUFNFUlQgPSBcIltXSURHRVRdW0RCXSBVUFNFUlRcIixcclxuXHRERUxFVEUgPSBcIltXSURHRVRdW0RCXSBERUxFVEVcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0V2lkZ2V0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gV2lkZ2V0c0FjdGlvblR5cGVzLlVQU0VSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogV2lkZ2V0TW9kZWw8YW55PltdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVXaWRnZXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBXaWRnZXRzQWN0aW9uVHlwZXMuREVMRVRFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBXaWRnZXRzQWN0aW9ucyA9IFVwc2VydFdpZGdldEFjdGlvbiB8IERlbGV0ZVdpZGdldEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBXaWRnZXRzQWN0aW9ucywgV2lkZ2V0c0FjdGlvblR5cGVzIH0gZnJvbSBcIi4vd2lkZ2V0LmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGRhdGE6IFdpZGdldE1vZGVsPGFueT5bXTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRkYXRhOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogV2lkZ2V0c0FjdGlvbnMpOiBTdGF0ZSB7XHJcblx0bGV0IF9kYXRhOiBXaWRnZXRNb2RlbDxhbnk+W107XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBXaWRnZXRzQWN0aW9uVHlwZXMuVVBTRVJUOlxyXG5cdFx0XHRfZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdGxldCBuZXdXaWRnZXRzID0gYWN0aW9uLnBheWxvYWQ7XHJcblx0XHRcdGlmICghKG5ld1dpZGdldHMgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuXHRcdFx0XHRuZXdXaWRnZXRzID0gW25ld1dpZGdldHNdO1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCInV2lkZ2V0c0FjdGlvblR5cGVzLlVQU0VSVCcgZG9lcyBub3QgZ2V0IGFycmF5IHBheWxvYWRcIik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG5ld1dpZGdldHMuZm9yRWFjaCgobmV3V2lkZ2V0KSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgZXhpc3RlZFdpZGdldEluZGV4ID0gX2RhdGEuZmluZEluZGV4KCh3KSA9PiB3Ll9pZCA9PSBuZXdXaWRnZXQuX2lkKTtcclxuXHRcdFx0XHRpZiAoZXhpc3RlZFdpZGdldEluZGV4ID4gLTEpIHtcclxuXHRcdFx0XHRcdF9kYXRhLnNwbGljZShleGlzdGVkV2lkZ2V0SW5kZXgsIDEsIG5ld1dpZGdldCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF9kYXRhLnB1c2gobmV3V2lkZ2V0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBfZGF0YVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgV2lkZ2V0c0FjdGlvblR5cGVzLkRFTEVURTpcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdF9kYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHJcblx0XHRcdGNvbnN0IHdpZGdldEluZGV4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoKHcpID0+IHcuX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdGlmICh3aWRnZXRJbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0X2RhdGEuc3BsaWNlKHdpZGdldEluZGV4LCAxKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IF9kYXRhXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0V2lkZ2V0cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGE7XHJcbiIsImltcG9ydCAqIGFzIGZyb21Sb290IGZyb20gXCIuL3Jvb3Qvd2lkZ2V0cy5yZWR1Y2Vyc1wiO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxyXG5leHBvcnQgaW50ZXJmYWNlIFdpZGdldFN0YXRlIHtcclxuXHRkYjogZnJvbVJvb3QuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBXaWRnZXRSZWR1Y2VyID0ge1xyXG5cdGRiOiBmcm9tUm9vdC5SZWR1Y2VyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFN0YXRlIHtcclxuXHR3aWRnZXRzOiBXaWRnZXRTdGF0ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBwbHVjaywgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBHRVRfV0lER0VUX0FDVElPTl9UWVBFUywgR0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFVwc2VydFdpZGdldEFjdGlvbiwgV2lkZ2V0c0FjdGlvblR5cGVzLCBEZWxldGVXaWRnZXRBY3Rpb24gfSBmcm9tIFwiLi93aWRnZXQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBERUxFVEVfV0lER0VUX0FDVElPTl9UWVBFUyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvZGVsZXRlLXdpZGdldFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0RGJFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4pIHsgfVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfV0lER0VUX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKHdpZGdldDogV2lkZ2V0TW9kZWw8YW55PikgPT4gbmV3IFVwc2VydFdpZGdldEFjdGlvbihbd2lkZ2V0XSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0VXBzZXJ0TWFueSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKHdpZGdldHM6IFdpZGdldE1vZGVsPGFueT5bXSkgPT4gbmV3IFVwc2VydFdpZGdldEFjdGlvbih3aWRnZXRzKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHREZWxldGUkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShERUxFVEVfV0lER0VUX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKHdpZGdldDogV2lkZ2V0TW9kZWw8YW55PikgPT4gbmV3IERlbGV0ZVdpZGdldEFjdGlvbih3aWRnZXQpKVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ29tcG9uZW50UmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFZpZXdDb250YWluZXJSZWYsIERpcmVjdGl2ZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBwbHVjaywgZmlsdGVyLCBzd2l0Y2hNYXAsIG1hcCwgc3RhcnRXaXRoLCB0YXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgV2lkZ2V0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy93aWRnZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy93aWRnZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElNb2R1bGVDb25maWdNYXBUeXBlcyB9IGZyb20gXCIuLi9tb2RlbHMvbW9kdWxlLWNvbmZpZy1tYXAtdHlwZXMuaW50ZXJmY2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiBcIltuZ3NEeW5hbWljV2lkZ2V0Q29uZmlnXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljV2lkZ2V0Q29uZmlnRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cdG1hcFR5cGVUb0NvbXBvbmVudDogSU1vZHVsZUNvbmZpZ01hcFR5cGVzO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuXHRcdHByaXZhdGUgc2VydmljZTogV2lkZ2V0U2VydmljZSxcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcclxuXHQpIHtcclxuXHRcdHRoaXMuX2ZpbGxfY29tcG9uZW50X21hcCgpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuX3JlYWN0X2Jhc2Vfb25fcGFyYW1zKCk7XHJcblx0fVxyXG5cdF9maWxsX2NvbXBvbmVudF9tYXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShtYXAoKGNvbmZpZykgPT4gY29uZmlnLnR5cGVzKSwgc3RhcnRXaXRoKHt9KSkuc3Vic2NyaWJlKCh0eXBlcykgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5tYXBUeXBlVG9Db21wb25lbnQgPSB0eXBlcztcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfcmVhY3RfYmFzZV9vbl9wYXJhbXMoKSB7XHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHsgdHlwZSwgX2lkIH0pID0+IHtcclxuXHRcdFx0aWYgKF9pZCkge1xyXG5cdFx0XHRcdHRoaXMuc2VydmljZS5zZWxlY3RCeUlkPGFueT4oX2lkKS5zdWJzY3JpYmUoKHdpZGdldCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5fcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHR5cGUsIHdpZGdldCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5fcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHR5cGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0X3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh0eXBlOiBzdHJpbmcsIHdpZGdldD86IFdpZGdldE1vZGVsPGFueT4pIHtcclxuXHRcdGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG5cdFx0XHR0aGlzLmNvbXBvbmVudC5kZXN0cm95KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCF0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt0eXBlXSkge1xyXG5cdFx0XHRjb25zdCBzdXBwb3J0ZWRUeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMubWFwVHlwZVRvQ29tcG9uZW50KS5qb2luKFwiLCBcIik7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHRgVHJ5aW5nIHRvIHVzZSBhbiB1bnN1cHBvcnRlZCB0eXBlICgke3R5cGV9KS5cclxuXHRcdCAgXHRcdCBTdXBwb3J0ZWQgdHlwZXM6ICR7c3VwcG9ydGVkVHlwZXN9YFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KHRoaXMubWFwVHlwZVRvQ29tcG9uZW50W3R5cGVdLnVwc2VydCk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG5cdFx0Ly8gdGhpcy53aWRnZXQkLnN1YnNjcmliZSgodykgPT4gKHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLndpZGdldCA9IHcpKTtcclxuXHRcdGlmICh3aWRnZXQpIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLndpZGdldCA9IHdpZGdldDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdENvbXBvbmVudFJlZixcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHREaXJlY3RpdmUsXHJcblx0SW5wdXRcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBwbHVjaywgZmlsdGVyLCBzd2l0Y2hNYXAsIG1hcCwgc3RhcnRXaXRoIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBXaWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3dpZGdldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3dpZGdldC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSU1vZHVsZUNvbmZpZ01hcFR5cGVzIH0gZnJvbSBcIi4uL21vZGVscy9tb2R1bGUtY29uZmlnLW1hcC10eXBlcy5pbnRlcmZjZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IFwiW25nc0R5bmFtaWNXaWRnZXRWaWV3XVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljV2lkZ2V0Vmlld0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KClcclxuXHRzZXQgb2lkKGlkOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuX3NlbGVjdFdpZGdldChpZCk7XHJcblx0fVxyXG5cdHdpZGdldCQ6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8YW55Pj47XHJcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PjtcclxuXHRtYXBUeXBlVG9Db21wb25lbnQ6IElNb2R1bGVDb25maWdNYXBUeXBlcztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXHJcblx0KSB7XHJcblx0XHR0aGlzLl9maWxsX2NvbXBvbmVudF9tYXAoKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLndpZGdldCQucGlwZShmaWx0ZXIod2lkZ2V0ID0+IHdpZGdldCAhPSB1bmRlZmluZWQpKS5zdWJzY3JpYmUod2lkZ2V0ID0+IHtcclxuXHRcdFx0dGhpcy5fcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHdpZGdldCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0X2ZpbGxfY29tcG9uZW50X21hcCgpIHtcclxuXHRcdHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKG1hcChjb25maWcgPT4gY29uZmlnLnR5cGVzKSwgc3RhcnRXaXRoKHt9KSkuc3Vic2NyaWJlKHR5cGVzID0+IHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRoaXMubWFwVHlwZVRvQ29tcG9uZW50ID0gdHlwZXM7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0X3NlbGVjdFdpZGdldChpZDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLndpZGdldCQgPSB0aGlzLnNlcnZpY2Uuc2VsZWN0QnlJZDxhbnk+KGlkKTtcclxuXHR9XHJcblx0X3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh3aWRnZXQpIHtcclxuXHRcdGlmICghdGhpcy5tYXBUeXBlVG9Db21wb25lbnRbd2lkZ2V0LnR5cGVdKSB7XHJcblx0XHRcdGNvbnN0IHN1cHBvcnRlZFR5cGVzID0gT2JqZWN0LmtleXModGhpcy5tYXBUeXBlVG9Db21wb25lbnQpLmpvaW4oXCIsIFwiKTtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdGBUcnlpbmcgdG8gdXNlIGFuIHVuc3VwcG9ydGVkIHR5cGUgKCR7d2lkZ2V0LnR5cGV9KS5cclxuXHRcdCAgXHRcdCBTdXBwb3J0ZWQgdHlwZXM6ICR7c3VwcG9ydGVkVHlwZXN9YFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KHRoaXMubWFwVHlwZVRvQ29tcG9uZW50W3dpZGdldC50eXBlXS52aWV3KTtcclxuXHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcblx0XHR0aGlzLndpZGdldCQuc3Vic2NyaWJlKHcgPT4gKHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLndpZGdldCA9IHcpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZURldnRvb2xzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlLWRldnRvb2xzXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0VGFic01vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdE1hdE1lbnVNb2R1bGUsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0VGFibGVNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvd2lkZ2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvd2lkZ2V0LnNlcnZpY2VcIjtcclxuLy8gaW1wb3J0IHsgV2lkZ2V0UmVkdWNlciB9IGZyb20gXCIuL3dpZGdldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFdpZGdldE1vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuL3dpZGdldC5jb25maWdcIjtcclxuaW1wb3J0IHsgV2lkZ2V0Um91dGluZ01vZHVsZSB9IGZyb20gXCIuL3dpZGdldC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBSb290Q29tcG9uZW50IH0gZnJvbSBcIi4vcm9vdC9yb290LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBHZXRXaWRnZXRBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL2dldC13aWRnZXQvZ2V0LXdpZGdldC5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFVwc2VydFdpZGdldEFwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LXdpZGdldC91cHNlcnQtd2lkZ2V0LmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgR2V0V2lkZ2V0c0FwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldHMvZ2V0LXdpZGdldHMuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBEZWxldGVXaWRnZXRBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL2RlbGV0ZS13aWRnZXQvZGVsZXRlLXdpZGdldC5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFdpZGdldFJlZHVjZXIgfSBmcm9tIFwiLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBXaWRnZXREYkVmZmVjdHMgfSBmcm9tIFwiLi9yb290L3dpZGdldHMuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBXaWRnZXRzTWFuYWdlbWVudENvbXBvbmVudCB9IGZyb20gXCIuL21hbmdlbWVudC93aWRnZXQtbWFuYWdlbWVudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXBzZXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vdXBzZXJ0L3Vwc2VydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRHluYW1pY1dpZGdldENvbmZpZ0RpcmVjdGl2ZSB9IGZyb20gXCIuL3Vwc2VydC9keW5hbWljLXdpZGdldC1jb25maWcuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IER5bmFtaWNXaWRnZXRWaWV3RGlyZWN0aXZlIH0gZnJvbSBcIi4vdmlldy9keW5hbWljLXdpZGdldC12aWV3LmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gXCIuL3dpZGdldC1zZWxlY3Rvci93aWRnZXQtc2VsZWN0b3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IER5bmFtaWNXaWRnZXRWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9keW5hbWljLXdpZGdldC12aWV3LmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRUYWJzTW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0XHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdFx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0XHRNYXRUYWJsZU1vZHVsZSxcclxuXHRcdE1hdE1lbnVNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Um9vdENvbXBvbmVudCxcclxuXHRcdFdpZGdldHNNYW5hZ2VtZW50Q29tcG9uZW50LFxyXG5cdFx0VXBzZXJ0Q29tcG9uZW50LFxyXG5cdFx0RHluYW1pY1dpZGdldENvbmZpZ0RpcmVjdGl2ZSxcclxuXHRcdER5bmFtaWNXaWRnZXRWaWV3RGlyZWN0aXZlLFxyXG5cdFx0V2lkZ2V0U2VsZWN0b3JDb21wb25lbnQsXHJcblx0XHREeW5hbWljV2lkZ2V0Vmlld0NvbXBvbmVudFxyXG5cdF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbV2lkZ2V0U2VsZWN0b3JDb21wb25lbnQsIER5bmFtaWNXaWRnZXRWaWV3Q29tcG9uZW50XSxcclxuXHRleHBvcnRzOiBbRHluYW1pY1dpZGdldFZpZXdEaXJlY3RpdmUsIFdpZGdldFNlbGVjdG9yQ29tcG9uZW50LCBEeW5hbWljV2lkZ2V0Vmlld0NvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc1dpZGdldE1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogV2lkZ2V0TW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogTmdzV2lkZ2V0Um9vdE1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0sIFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlLCBXaWRnZXRTZXJ2aWNlXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzV2lkZ2V0TW9kdWxlLFxyXG5cdFx0V2lkZ2V0Um91dGluZ01vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJ3aWRnZXRzXCIsIFdpZGdldFJlZHVjZXIpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtXaWRnZXREYkVmZmVjdHMsIEdldFdpZGdldEFwaUVmZmVjdHMsIEdldFdpZGdldHNBcGlFZmZlY3RzLCBVcHNlcnRXaWRnZXRBcGlFZmZlY3RzLCBEZWxldGVXaWRnZXRBcGlFZmZlY3RzXSlcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtOZ3NXaWRnZXRNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NXaWRnZXRSb290TW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIElXaWRnZXRWaWV3PFQ+IHtcclxuXHR3aWRnZXQ6IFdpZGdldE1vZGVsPFQ+O1xyXG5cdGdvVG9FZGl0PzogYW55O1xyXG59XHJcbiIsImltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4vd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSVdpZGdldFVwc2VydDxUPiB7XHJcblx0d2lkZ2V0OiBXaWRnZXRNb2RlbDxUPjtcclxufVxyXG4iXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJzdG9yZSIsIkJlaGF2aW9yU3ViamVjdCIsIkluamVjdGFibGUiLCJJbmplY3QiLCJTdG9yZSIsImh0dHAiLCJmaWx0ZXIiLCJ0YWtlIiwic3dpdGNoTWFwIiwic3RyaW5nVGVtcGxhdGUiLCJtYXAiLCJ0YXAiLCJIdHRwQ2xpZW50IiwiTG9jYXRpb24iLCJzdGFydFdpdGgiLCJDb21wb25lbnQiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJWaWV3Q29udGFpbmVyUmVmIiwiSW5wdXQiLCJSb3V0ZXJNb2R1bGUiLCJjYXRjaEVycm9yIiwib2YiLCJBY3Rpb25zIiwiRWZmZWN0IiwiZnJvbVJvb3QuUmVkdWNlciIsInBsdWNrIiwiRGlyZWN0aXZlIiwiQWN0aXZhdGVkUm91dGUiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIk1hdEV4cGFuc2lvbk1vZHVsZSIsIk1hdFNuYWNrQmFyTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIk1hdEJ1dHRvbk1vZHVsZSIsIk1hdENhcmRNb2R1bGUiLCJNYXRTZWxlY3RNb2R1bGUiLCJNYXRJbnB1dE1vZHVsZSIsIk1hdEZvcm1GaWVsZE1vZHVsZSIsIk1hdFRhYnNNb2R1bGUiLCJNYXRSYWRpb01vZHVsZSIsIkZsZXhMYXlvdXRNb2R1bGUiLCJGb3Jtc01vZHVsZSIsIlJlYWN0aXZlRm9ybXNNb2R1bGUiLCJNYXRTbGlkZVRvZ2dsZU1vZHVsZSIsIk1hdERpdmlkZXJNb2R1bGUiLCJNYXRDaGVja2JveE1vZHVsZSIsIk1hdFRhYmxlTW9kdWxlIiwiTWF0TWVudU1vZHVsZSIsIlN0b3JlTW9kdWxlIiwiRWZmZWN0c01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLFFBQWlCLGtCQUFrQjtJQUFuQyxXQUFpQixrQkFBa0I7UUFDbEMsSUFBQTtZQUNDLGlCQUFZLFNBQWM7Z0JBQWQsMEJBQUE7b0JBQUEsY0FBYzs7Z0JBQTFCLGlCQUVDO2dCQURBLE1BQU0sQ0FBQyxJ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