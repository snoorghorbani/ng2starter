import { HttpClient } from '@angular/common/http';
import { stringTemplate } from '@soushians/shared';
import { Location, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatMenuModule, MatCheckboxModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BehaviorSubject, of } from 'rxjs';
import { __decorate, __metadata, __assign } from 'tslib';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { InjectionToken, Inject, Injectable, Component, ComponentFactoryResolver, ViewContainerRef, Input, Directive, NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { map, filter, tap, take, switchMap, startWith, catchError, pluck } from 'rxjs/operators';
import { RouterModule, ActivatedRoute } from '@angular/router';

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
var MODULE_CONFIG_TOKEN = new InjectionToken("WidgetModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var WidgetConfigurationService = /** @class */ (function () {
    function WidgetConfigurationService(configFile, store) {
        this.store = store;
        this.config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);
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
         */
        function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    WidgetConfigurationService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    WidgetConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
        { type: Store }
    ]; };
    return WidgetConfigurationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GetWidgetsApiModel;
(function (GetWidgetsApiModel) {
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
var  /**
 * @template T
 */
WidgetModel = /** @class */ (function () {
    function WidgetModel(_a) {
        var _b = _a === void 0 ? {} : _a, _id = _b._id, name = _b.name, type = _b.type, Config = _b.Config;
        this._id = _id;
        this.name = name || "";
        this.type = type;
        this.Config = Config || (/** @type {?} */ ({}));
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
            if (widget === void 0) { widget = {}; }
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DeleteWidgetApiModel;
(function (DeleteWidgetApiModel) {
    var Request = /** @class */ (function () {
        function Request(widget) {
            if (widget === void 0) { widget = {}; }
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
var WidgetService = /** @class */ (function () {
    function WidgetService(http, store, configurationService, _location) {
        this.http = http;
        this.store = store;
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
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.get !== ""; }), take(1), switchMap(function (config) {
            return _this.http.get(stringTemplate(config.env.frontend_server + config.endpoints.get, { _id: _id }));
        }), map(function (response) { return response.Result; }));
    };
    /**
     * @return {?}
     */
    WidgetService.prototype.getWidgets = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.find != ""; }), switchMap(function (config) { return _this.http.get(config.env.frontend_server + config.endpoints.find); }), map(function (response) { return response.Result; }));
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
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.upsert != ""; }), take(1), switchMap(function (config) {
            return _this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody());
        }), map(function (response) { return response.Result; }), tap(function () { return _this._location.back(); }));
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
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.deleteItem != ""; }), switchMap(function (config) { return _this.http.delete(stringTemplate(config.env.frontend_server + config.endpoints.deleteItem, { widgetId: widgetId })).pipe(map(function (response) { return response.Result; })); }));
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
        var subject = new BehaviorSubject(undefined);
        this.store
            .select(function (state) { return state.widgets.db.data; })
            .pipe(filter(function (widgets) { return widgets != null; }), map(function (widgets) { return widgets.find(function (widget) { return widget._id == _id; }); }), tap(function (widget) {
            if (widget == null) {
                _this.store.dispatch(new GetWidgetStartAction(_id));
            }
        }))
            .subscribe(function (widget) { return subject.next(widget); });
        return subject.asObservable();
    };
    WidgetService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    WidgetService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: WidgetConfigurationService },
        { type: Location }
    ]; };
    return WidgetService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DynamicWidgetViewComponent = /** @class */ (function () {
    function DynamicWidgetViewComponent(store, service, configurationService, resolver, container) {
        this.store = store;
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
         */
        function (id) {
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
        this.widget$.pipe(filter(function (widget) { return widget != undefined; })).subscribe(function (widget) {
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
        this.configurationService.config$.pipe(map(function (config) { return config.types; }), startWith({})).subscribe(function (types) {
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
        { type: Component, args: [{
                    selector: "widget",
                    template: ""
                }] }
    ];
    /** @nocollapse */
    DynamicWidgetViewComponent.ctorParameters = function () { return [
        { type: Store },
        { type: WidgetService },
        { type: WidgetConfigurationService },
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    DynamicWidgetViewComponent.propDecorators = {
        oid: [{ type: Input }]
    };
    return DynamicWidgetViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var WidgetSelectorComponent = /** @class */ (function () {
    function WidgetSelectorComponent(store) {
        this.store = store;
        this.widgets$ = this.store.select(function (state) { return state.widgets.db.data; });
    }
    Object.defineProperty(WidgetSelectorComponent.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.oid != undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WidgetSelectorComponent.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
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
        { type: Component, args: [{
                    template: "<div fxLayout=\"column wrap\" fxLayoutGap=\"15px\">\r\n  <h4>\u0644\u06CC\u0633\u062A \u0648\u06CC\u062C\u062A\u200C\u0647\u0627</h4>\r\n        <mat-form-field fxFlex=\"100\">\r\n<mat-select placeholder=\"\u0646\u0648\u0639 \u0648\u06CC\u062C\u062A\" [(ngModel)]=\"selectedWidgetId\" name=\"selectedWidgetId\">\r\n  <mat-option *ngFor=\"let item of (widgets$ | async)\" [value]=\"item._id\">\r\n    {{item.type}} : <b>{{item.name}}</b>\r\n  </mat-option>\r\n</mat-select> \r\n</mat-form-field>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    WidgetSelectorComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
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
        { type: Component, args: [{
                    selector: "widget-root",
                    template: "<router-outlet></router-outlet>"
                }] }
    ];
    return RootComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var WidgetsManagementComponent = /** @class */ (function () {
    function WidgetsManagementComponent(store) {
        this.store = store;
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
        { type: Component, args: [{
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n  <div class=\"content-action\">\r\n    <mat-card class=\"with-sticky-action\">\r\n      <mat-card-header>\r\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n          <mat-icon>widgets</mat-icon>\r\n          <span>\u0645\u062F\u06CC\u0631\u06CC\u062A \u0627\u0641\u0632\u0648\u0646\u0647\u200C\u0647\u0627</span>\r\n        </mat-card-title>\r\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <span>\r\n            \u0627\u0641\u0632\u0648\u0646\u0647\u200C \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0631\u0627 \u0628\u0631\u0627\u0633\u0627\u0633 \u0646\u0648\u0639 \u0622\u0646 \u0627\u06CC\u062C\u0627\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F ...\r\n          </span>\r\n        </mat-card-subtitle>\r\n      </mat-card-header>\r\n\r\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\r\n\r\n        <button mat-raised-button fxFlex.gt-lg=\"19\" fxFlex.lg=\"24\" fxFlex.md=\"31.7\" fxFlex.sm=\"49\" fxFlex.xs=\"100\"\r\n          class='link' *ngFor=\"let item of (widgets$ | async)\">\r\n          <button mat-icon-button (click)=\"remove(item)\" class=\"remove-item\">\r\n            <mat-icon>delete</mat-icon>\r\n          </button>\r\n          <div class=\"link-button\" [routerLink]=\"['../upsert' ,  item.type,  item._id]\" fxLayout='column' fxLayoutAlign='space-between center'>\r\n            <mat-icon color='primary' [style.color]=\"anghazi[item.type].color\">{{anghazi[item.type].icon}}</mat-icon>\r\n            <div fxFlex=\"nogrow\" fxFlexAlign=\"stretch\" fxLayoutAlign=\"center center\" class=\"widget-type\">\r\n              {{item.type}}\r\n            </div>\r\n            <h4 class=\"title\">{{item.name}}</h4>\r\n          </div>\r\n        </button>\r\n      </div>\r\n\r\n    </mat-card>\r\n\r\n    <div fxLayout=\"column\" class=\"sticky-action\">\r\n      <a mat-mini-fab routerLink=\"../upsert/article\" [style.backgroundColor]=\"'#ffffff'\">\r\n        <mat-icon [style.color]=\"anghazi.article.color\">{{anghazi.article.icon}}</mat-icon>\r\n      </a>\r\n      <a mat-mini-fab routerLink=\"../upsert/links\" [style.backgroundColor]=\"'#ffffff'\">\r\n        <mat-icon [style.color]=\"anghazi.links.color\">{{anghazi.links.icon}}</mat-icon>\r\n      </a>\r\n      <a mat-mini-fab routerLink=\"../upsert/list\" [style.backgroundColor]=\"'#ffffff'\">\r\n        <mat-icon [style.color]=\"anghazi.list.color\">{{anghazi.list.icon}}</mat-icon>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</div>",
                    styles: [".link{margin:.5%;box-sizing:border-box;position:relative;padding:0}button.link mat-icon{font-size:34px;width:34px;height:34px}.link h4{margin:0}.remove-item{position:absolute;top:0;left:0;z-index:100}.link-button{padding:25px 15px}button.link .remove-item mat-icon{font-size:initial;width:initial;height:initial;visibility:hidden;opacity:0;transition:opacity .3s ease-in-out}button.link:hover .remove-item mat-icon{visibility:visible;opacity:1}"]
                }] }
    ];
    /** @nocollapse */
    WidgetsManagementComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
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
        { type: Component, args: [{
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"main-container\">\r\n    <div fxFlex=\"50\">\r\n        <ng-container ngsDynamicWidgetConfig></ng-container>\r\n    </div>\r\n</div>"
                }] }
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
var WidgetRoutingModule = RouterModule.forChild(routes);

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
            .pipe(map(function (action) { return action.payload; }), switchMap(function (payload) { return _this.service.get(payload); }), map(function (res) { return new GetWidgetSucceedAction(res); }), catchError(function (err) { return of(new GetWidgetFailedAction(err)); }));
    }
    GetWidgetApiEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GetWidgetApiEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: WidgetService }
    ]; };
    __decorate([
        Effect(),
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
            .pipe(map(function (action) { return action.payload; }), switchMap(function (payload) { return _this.service.upsert(payload); }), map(function (res) { return new UpsertWidgetSucceedAction(res); }), catchError(function (err) { return of(new UpsertWidgetFailedAction(err)); }));
    }
    UpsertWidgetApiEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UpsertWidgetApiEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: WidgetService }
    ]; };
    __decorate([
        Effect(),
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
            .pipe(switchMap(function () {
            return _this.service
                .getWidgets()
                .pipe(map(function (res) { return new GetWidgetsSucceedAction(res); }), catchError(function (err) { return of(new GetWidgetsFailedAction(err)); }));
        }));
    }
    GetWidgetsApiEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GetWidgetsApiEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: WidgetService }
    ]; };
    __decorate([
        Effect(),
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
            .pipe(map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.service
                .delete(payload)
                .pipe(map(function (res) { return new DeleteWidgetSucceedAction(res); }), catchError(function (err) { return of(new DeleteWidgetFailedAction(err)); }));
        }));
    }
    DeleteWidgetApiEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DeleteWidgetApiEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: WidgetService }
    ]; };
    __decorate([
        Effect(),
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
    if (state === void 0) { state = initialState; }
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
            .pipe(pluck("payload"), map(function (widget) { return new UpsertWidgetAction([widget]); }));
        this.UpsertMany$ = this.actions$
            .ofType("[GET_WIDGETS][API][GetWidgets] succeed" /* SUCCEED */)
            .pipe(pluck("payload"), map(function (widgets) { return new UpsertWidgetAction(widgets); }));
        this.Delete$ = this.actions$
            .ofType("[DELETE_WIDGET][API][DeleteWidget] succeed" /* SUCCEED */)
            .pipe(pluck("payload"), map(function (widget) { return new DeleteWidgetAction(widget); }));
    }
    WidgetDbEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    WidgetDbEffects.ctorParameters = function () { return [
        { type: Actions }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], WidgetDbEffects.prototype, "Upsert$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], WidgetDbEffects.prototype, "UpsertMany$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], WidgetDbEffects.prototype, "Delete$", void 0);
    return WidgetDbEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DynamicWidgetConfigDirective = /** @class */ (function () {
    function DynamicWidgetConfigDirective(store, route, service, configurationService, resolver, container) {
        this.store = store;
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
        this.configurationService.config$.pipe(map(function (config) { return config.types; }), startWith({})).subscribe(function (types) {
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
        { type: Directive, args: [{
                    selector: "[ngsDynamicWidgetConfig]"
                },] }
    ];
    /** @nocollapse */
    DynamicWidgetConfigDirective.ctorParameters = function () { return [
        { type: Store },
        { type: ActivatedRoute },
        { type: WidgetService },
        { type: WidgetConfigurationService },
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    return DynamicWidgetConfigDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DynamicWidgetViewDirective = /** @class */ (function () {
    function DynamicWidgetViewDirective(store, route, service, configurationService, resolver, container) {
        this.store = store;
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
         */
        function (id) {
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
        this.widget$.pipe(filter(function (widget) { return widget != undefined; })).subscribe(function (widget) {
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
        this.configurationService.config$.pipe(map(function (config) { return config.types; }), startWith({})).subscribe(function (types) {
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
        { type: Directive, args: [{
                    selector: "[ngsDynamicWidgetView]"
                },] }
    ];
    /** @nocollapse */
    DynamicWidgetViewDirective.ctorParameters = function () { return [
        { type: Store },
        { type: ActivatedRoute },
        { type: WidgetService },
        { type: WidgetConfigurationService },
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    DynamicWidgetViewDirective.propDecorators = {
        oid: [{ type: Input }]
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
                        MatRadioModule,
                        FlexLayoutModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatSlideToggleModule,
                        MatDividerModule,
                        MatCheckboxModule,
                        MatTableModule,
                        MatMenuModule
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
                },] }
    ];
    return NgsWidgetModule;
}());
var NgsWidgetRootModule = /** @class */ (function () {
    function NgsWidgetRootModule() {
    }
    NgsWidgetRootModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        NgsWidgetModule,
                        WidgetRoutingModule,
                        StoreModule.forFeature("widgets", WidgetReducer),
                        EffectsModule.forFeature([WidgetDbEffects, GetWidgetApiEffects, GetWidgetsApiEffects, UpsertWidgetApiEffects, DeleteWidgetApiEffects])
                    ],
                    exports: [NgsWidgetModule]
                },] }
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
var  /**
 * @template T
 */
IWidgetView = /** @class */ (function () {
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
var  /**
 * @template T
 */
IWidgetUpsert = /** @class */ (function () {
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

export { UpsertWidgetStartAction, DynamicWidgetViewComponent, WidgetSelectorComponent, NgsWidgetModule, WidgetModel, IWidgetView, IWidgetUpsert, WidgetsManagementComponent as ɵi, RootComponent as ɵh, WidgetDbEffects as ɵo, Reducer as ɵn, DeleteWidgetApiEffects as ɵu, GetWidgetApiEffects as ɵp, GetWidgetsApiEffects as ɵr, UpsertWidgetApiEffects as ɵt, WidgetConfigurationService as ɵg, WidgetService as ɵf, DynamicWidgetConfigDirective as ɵk, UpsertComponent as ɵj, DynamicWidgetViewDirective as ɵl, WidgetRoutingModule as ɵm, MODULE_CONFIG_TOKEN as ɵc, NgsWidgetRootModule as ɵb, WidgetReducer as ɵd };

//# sourceMappingURL=soushians-widget.js.map