import { InjectionToken, Inject, Injectable, Component, ComponentFactoryResolver, ViewContainerRef, Input, Directive, NgModule } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { map, filter, tap, take, switchMap, startWith, catchError, pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { stringTemplate } from '@soushians/shared';
import { Location, CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { __decorate, __metadata, __assign } from 'tslib';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatMenuModule, MatCheckboxModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

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
        { type: Injectable },
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
        { type: Injectable },
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
                },] },
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
                    template: "<div fxLayout=\"column wrap\" fxLayoutGap=\"15px\">\n  <h4>\u0644\u06CC\u0633\u062A \u0648\u06CC\u062C\u062A\u200C\u0647\u0627</h4>\n        <mat-form-field fxFlex=\"100\">\n<mat-select placeholder=\"\u0646\u0648\u0639 \u0648\u06CC\u062C\u062A\" [(ngModel)]=\"selectedWidgetId\" name=\"selectedWidgetId\">\n  <mat-option *ngFor=\"let item of (widgets$ | async)\" [value]=\"item._id\">\n    {{item.type}} : <b>{{item.name}}</b>\n  </mat-option>\n</mat-select> \n</mat-form-field>\n</div>"
                },] },
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
                },] },
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
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\n\n  <div class=\"content-action\">\n    <mat-card class=\"with-sticky-action\">\n      <mat-card-header>\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n          <mat-icon>widgets</mat-icon>\n          <span>\u0645\u062F\u06CC\u0631\u06CC\u062A \u0627\u0641\u0632\u0648\u0646\u0647\u200C\u0647\u0627</span>\n        </mat-card-title>\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n          <span>\n            \u0627\u0641\u0632\u0648\u0646\u0647\u200C \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0631\u0627 \u0628\u0631\u0627\u0633\u0627\u0633 \u0646\u0648\u0639 \u0622\u0646 \u0627\u06CC\u062C\u0627\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F ...\n          </span>\n        </mat-card-subtitle>\n      </mat-card-header>\n\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\n\n        <button mat-raised-button fxFlex.gt-lg=\"19\" fxFlex.lg=\"24\" fxFlex.md=\"31.7\" fxFlex.sm=\"49\" fxFlex.xs=\"100\"\n          class='link' *ngFor=\"let item of (widgets$ | async)\">\n          <button mat-icon-button (click)=\"remove(item)\" class=\"remove-item\">\n            <mat-icon>delete</mat-icon>\n          </button>\n          <div class=\"link-button\" [routerLink]=\"['../upsert' ,  item.type,  item._id]\" fxLayout='column' fxLayoutAlign='space-between center'>\n            <mat-icon color='primary' [style.color]=\"anghazi[item.type].color\">{{anghazi[item.type].icon}}</mat-icon>\n            <div fxFlex=\"nogrow\" fxFlexAlign=\"stretch\" fxLayoutAlign=\"center center\" class=\"widget-type\">\n              {{item.type}}\n            </div>\n            <h4 class=\"title\">{{item.name}}</h4>\n          </div>\n        </button>\n      </div>\n\n    </mat-card>\n\n    <div fxLayout=\"column\" class=\"sticky-action\">\n      <a mat-mini-fab routerLink=\"../upsert/article\" [style.backgroundColor]=\"'#ffffff'\">\n        <mat-icon [style.color]=\"anghazi.article.color\">{{anghazi.article.icon}}</mat-icon>\n      </a>\n      <a mat-mini-fab routerLink=\"../upsert/links\" [style.backgroundColor]=\"'#ffffff'\">\n        <mat-icon [style.color]=\"anghazi.links.color\">{{anghazi.links.icon}}</mat-icon>\n      </a>\n      <a mat-mini-fab routerLink=\"../upsert/list\" [style.backgroundColor]=\"'#ffffff'\">\n        <mat-icon [style.color]=\"anghazi.list.color\">{{anghazi.list.icon}}</mat-icon>\n      </a>\n    </div>\n\n  </div>\n</div>",
                    styles: [".link{margin:.5%;box-sizing:border-box;position:relative;padding:0}button.link mat-icon{font-size:34px;width:34px;height:34px}.link h4{margin:0}.remove-item{position:absolute;top:0;left:0;z-index:100}.link-button{padding:25px 15px}button.link .remove-item mat-icon{font-size:initial;width:initial;height:initial;visibility:hidden;opacity:0;transition:opacity .3s ease-in-out}button.link:hover .remove-item mat-icon{visibility:visible;opacity:1}"]
                },] },
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
        { type: Injectable },
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
        { type: Injectable },
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
        { type: Injectable },
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
        { type: Injectable },
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
        { type: Injectable },
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
                },] },
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
                },] },
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
                },] },
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

export { UpsertWidgetStartAction, DynamicWidgetViewComponent, WidgetSelectorComponent, NgsWidgetModule, WidgetModel, IWidgetView, IWidgetUpsert, WidgetsManagementComponent as ɵh, RootComponent as ɵg, WidgetDbEffects as ɵn, Reducer as ɵm, DeleteWidgetApiEffects as ɵu, GetWidgetApiEffects as ɵo, GetWidgetsApiEffects as ɵq, UpsertWidgetApiEffects as ɵs, WidgetConfigurationService as ɵf, WidgetService as ɵe, DynamicWidgetConfigDirective as ɵj, UpsertComponent as ɵi, DynamicWidgetViewDirective as ɵk, WidgetRoutingModule as ɵl, MODULE_CONFIG_TOKEN as ɵb, NgsWidgetRootModule as ɵa, WidgetReducer as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXdpZGdldC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0cy9nZXQtd2lkZ2V0cy5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0cy9nZXQtd2lkZ2V0cy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvYXBpL2dldC13aWRnZXQvZ2V0LXdpZGdldC5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0L2dldC13aWRnZXQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL21vZGVscy93aWRnZXQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LXdpZGdldC91cHNlcnQtd2lkZ2V0Lm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvYXBpL3Vwc2VydC13aWRnZXQvdXBzZXJ0LXdpZGdldC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvYXBpL2RlbGV0ZS13aWRnZXQvZGVsZXRlLXdpZGdldC5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3NlcnZpY2VzL2FwaS9kZWxldGUtd2lkZ2V0L2RlbGV0ZS13aWRnZXQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3dpZGdldC5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy93aWRnZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvd2lkZ2V0LnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi92aWV3L2R5bmFtaWMtd2lkZ2V0LXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvd2lkZ2V0LXNlbGVjdG9yL3dpZGdldC1zZWxlY3Rvci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9yb290L3Jvb3QuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvbWFuZ2VtZW50L3dpZGdldC1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3Vwc2VydC91cHNlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvd2lkZ2V0LXJvdXRpbmcubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvYXBpL2dldC13aWRnZXQvZ2V0LXdpZGdldC5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvYXBpL3Vwc2VydC13aWRnZXQvdXBzZXJ0LXdpZGdldC5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvYXBpL2dldC13aWRnZXRzL2dldC13aWRnZXRzLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvZGVsZXRlLXdpZGdldC9kZWxldGUtd2lkZ2V0LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9yb290L3dpZGdldC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvcm9vdC93aWRnZXRzLnJlZHVjZXJzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvd2lkZ2V0LnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9yb290L3dpZGdldHMuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3Vwc2VydC9keW5hbWljLXdpZGdldC1jb25maWcuZGlyZWN0aXZlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvdmlldy9keW5hbWljLXdpZGdldC12aWV3LmRpcmVjdGl2ZS50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3dpZGdldC5tb2R1bGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9tb2RlbHMvd2lkZ2V0LXZpZXcuaW50ZXJmYWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvbW9kZWxzL3dpZGdldC11cHNlcnQuaW50ZXJmYWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgR2V0V2lkZ2V0c0FwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWUgPSB7fSkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge307XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBXaWRnZXRNb2RlbDxhbnk+W107XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0V2lkZ2V0c0FwaU1vZGVsIH0gZnJvbSBcIi4vZ2V0LXdpZGdldHMubW9kZWxcIjtcclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gR0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW0dFVF9XSURHRVRTXVtBUEldW0dldFdpZGdldHNdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW0dFVF9XSURHRVRTXVtBUEldW0dldFdpZGdldHNdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltHRVRfV0lER0VUU11bQVBJXVtHZXRXaWRnZXRzXSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0c1N0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRzU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+W10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFdpZGdldHNGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldFdpZGdldHNBY3Rpb25zID0gR2V0V2lkZ2V0c1N0YXJ0QWN0aW9uIHwgR2V0V2lkZ2V0c1N1Y2NlZWRBY3Rpb24gfCBHZXRXaWRnZXRzRmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEdldFdpZGdldEFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRfaWQ6IHN0cmluZztcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7fTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IFdpZGdldE1vZGVsPGFueT47XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0V2lkZ2V0QXBpTW9kZWwgfSBmcm9tIFwiLi9nZXQtd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEdFVF9XSURHRVRfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW1dJREdFVF1bQVBJXVtHZXRXaWRnZXRdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW1dJREdFVF1bQVBJXVtHZXRXaWRnZXRdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltXSURHRVRdW0FQSV1bR2V0V2lkZ2V0XSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0U3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfV0lER0VUX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1dJREdFVF9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogV2lkZ2V0TW9kZWw8YW55Pikge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1dJREdFVF9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldFdpZGdldEFjdGlvbnMgPSBHZXRXaWRnZXRTdGFydEFjdGlvbiB8IEdldFdpZGdldFN1Y2NlZWRBY3Rpb24gfCBHZXRXaWRnZXRGYWlsZWRBY3Rpb247XHJcbiIsImV4cG9ydCBjbGFzcyBXaWRnZXRNb2RlbDxUPiB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdHR5cGU6IHN0cmluZztcclxuXHRDb25maWc6IFQ7XHJcblx0Y29uc3RydWN0b3IoeyBfaWQsIG5hbWUsIHR5cGUsIENvbmZpZyB9OiB7IF9pZD86IHN0cmluZzsgbmFtZT86IHN0cmluZzsgdHlwZT86IHN0cmluZzsgQ29uZmlnPzogVCB9ID0ge30pIHtcclxuXHRcdHRoaXMuX2lkID0gX2lkO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZSB8fCBcIlwiO1xyXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcclxuXHRcdHRoaXMuQ29uZmlnID0gQ29uZmlnIHx8ICh7fSBhcyBUKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBVcHNlcnRXaWRnZXRBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0d2lkZ2V0OiBXaWRnZXRNb2RlbDxhbnk+O1xyXG5cdFx0Y29uc3RydWN0b3Iod2lkZ2V0ID0ge30pIHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRoaXMud2lkZ2V0ID0gbmV3IFdpZGdldE1vZGVsKHdpZGdldCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLndpZGdldDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IFdpZGdldE1vZGVsPGFueT47XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0QXBpTW9kZWwgfSBmcm9tIFwiLi91cHNlcnQtd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIFVQU0VSVF9XSURHRVRfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW1VQU0VSVF9XSURHRVRdW0FQSV1bVXBzZXJ0V2lkZ2V0XSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltVUFNFUlRfV0lER0VUXVtBUEldW1Vwc2VydFdpZGdldF0gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW1VQU0VSVF9XSURHRVRdW0FQSV1bVXBzZXJ0V2lkZ2V0XSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfV0lER0VUX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogV2lkZ2V0TW9kZWw8YW55Pikge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0V2lkZ2V0U3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9XSURHRVRfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT4pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydFdpZGdldEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9XSURHRVRfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBVcHNlcnRXaWRnZXRBY3Rpb25zID0gVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24gfCBVcHNlcnRXaWRnZXRTdWNjZWVkQWN0aW9uIHwgVXBzZXJ0V2lkZ2V0RmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIERlbGV0ZVdpZGdldEFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHR3aWRnZXQ6IFdpZGdldE1vZGVsPGFueT47XHJcblx0XHRjb25zdHJ1Y3Rvcih3aWRnZXQgPSB7fSkge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy53aWRnZXQgPSBuZXcgV2lkZ2V0TW9kZWwod2lkZ2V0KTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMud2lkZ2V0O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogV2lkZ2V0TW9kZWw8YW55PjtcclxuXHRcdGNvbnN0cnVjdG9yKCkgeyB9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gREVMRVRFX1dJREdFVF9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbREVMRVRFX1dJREdFVF1bQVBJXVtEZWxldGVXaWRnZXRdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW0RFTEVURV9XSURHRVRdW0FQSV1bRGVsZXRlV2lkZ2V0XSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbREVMRVRFX1dJREdFVF1bQVBJXVtEZWxldGVXaWRnZXRdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZWxldGVXaWRnZXRTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERFTEVURV9XSURHRVRfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgRGVsZXRlV2lkZ2V0U3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERFTEVURV9XSURHRVRfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT4pIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVXaWRnZXRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfV0lER0VUX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT4pIHsgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBEZWxldGVXaWRnZXRBY3Rpb25zID0gRGVsZXRlV2lkZ2V0U3RhcnRBY3Rpb24gfCBEZWxldGVXaWRnZXRTdWNjZWVkQWN0aW9uIHwgRGVsZXRlV2lkZ2V0RmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBJTW9kdWxlQ29uZmlnTWFwVHlwZXMgfSBmcm9tIFwiLi9tb2RlbHMvbW9kdWxlLWNvbmZpZy1tYXAtdHlwZXMuaW50ZXJmY2VcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2lkZ2V0TW9kdWxlQ29uZmlnIHtcclxuXHRkZXZlbG9wbWVudF91cmk/OiBzdHJpbmc7XHJcblx0cHJvZHVjdGlvbl91cmk/OiBzdHJpbmc7XHJcblx0ZW52Pzoge1xyXG5cdFx0cHJvZHVjdGlvbjogYm9vbGVhbjtcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogc3RyaW5nO1xyXG5cdH07XHJcblx0ZW5kcG9pbnRzPzoge1xyXG5cdFx0Z2V0OiBzdHJpbmc7XHJcblx0XHRmaW5kOiBzdHJpbmc7XHJcblx0XHR1cHNlcnQ6IHN0cmluZztcclxuXHRcdGRlbGV0ZUl0ZW06IHN0cmluZztcclxuXHR9O1xyXG5cdHR5cGVzPzogSU1vZHVsZUNvbmZpZ01hcFR5cGVzO1xyXG59XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IFdpZGdldE1vZHVsZUNvbmZpZyA9IHtcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlLFxyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBcImZyb250ZW5kX3NlcnZlci9kaWQvbm90L3NldFwiXHJcblx0fSxcclxuXHRlbmRwb2ludHM6IHtcclxuXHRcdHVwc2VydDogXCIvYXBpL3Vpd2lkZ2V0XCIsXHJcblx0XHRmaW5kOiBcIi9hcGkvdWl3aWRnZXRcIixcclxuXHRcdGdldDogXCIvYXBpL3Vpd2lkZ2V0LyR7bW9kZWwuX2lkfVwiLFxyXG5cdFx0ZGVsZXRlSXRlbTogXCIvYXBpL3Vpd2lkZ2V0LyR7bW9kZWwud2lkZ2V0SWR9XCJcclxuXHR9LFxyXG5cdHR5cGVzOiB7fVxyXG59O1xyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxXaWRnZXRNb2R1bGVDb25maWc+KFwiV2lkZ2V0TW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kdWxlQ29uZmlnLCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi4vd2lkZ2V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogV2lkZ2V0TW9kdWxlQ29uZmlnO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cdH1cclxuXHRjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdChNT0RVTEVfREVGQVVMVF9DT05GSUcpO1xyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIHRoaXMuc3RvcmUuc2VsZWN0KGdldFdpZGdldE1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKCh3aWRnZXRDb25maWcpID0+IHtcclxuXHRcdC8vIFx0aWYgKCF3aWRnZXRDb25maWcpIHtcclxuXHRcdC8vIFx0XHRyZXR1cm47XHJcblx0XHQvLyBcdH1cclxuXHRcdC8vIFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCB3aWRnZXRDb25maWcuQ29uZmlnKTtcclxuXHRcdC8vIFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHRhcCwgdGFrZSwgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3dpZGdldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vd2lkZ2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IHN0cmluZ1RlbXBsYXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEdldFdpZGdldHNBcGlNb2RlbCwgR2V0V2lkZ2V0U3RhcnRBY3Rpb24sIFVwc2VydFdpZGdldEFwaU1vZGVsLCBEZWxldGVXaWRnZXRBcGlNb2RlbCB9IGZyb20gXCIuL2FwaVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdpZGdldFNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb25cclxuXHQpIHsgfVxyXG5cclxuXHRnZXQ8VD4oX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPFQ+PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmdldCAhPT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdHN3aXRjaE1hcCgoY29uZmlnKSA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5nZXQoc3RyaW5nVGVtcGxhdGUoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmdldCwgeyBfaWQgfSkpXHJcblx0XHRcdCksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IFVwc2VydFdpZGdldEFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Z2V0V2lkZ2V0cygpOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPGFueT5bXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5maW5kICE9IFwiXCIpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuZmluZCkpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBHZXRXaWRnZXRzQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cdHVwc2VydDxUPih3aWRnZXQ6IFVwc2VydFdpZGdldEFwaU1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPFQ+PiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBVcHNlcnRXaWRnZXRBcGlNb2RlbC5SZXF1ZXN0KHdpZGdldCk7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLnVwc2VydCAhPSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0c3dpdGNoTWFwKChjb25maWcpID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLnBvc3QoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLnVwc2VydCwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSlcclxuXHRcdFx0KSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogVXBzZXJ0V2lkZ2V0QXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdCksXHJcblx0XHRcdHRhcCgoKSA9PiB0aGlzLl9sb2NhdGlvbi5iYWNrKCkpXHJcblx0XHQpO1xyXG5cdH1cclxuXHRkZWxldGUod2lkZ2V0OiBXaWRnZXRNb2RlbDxhbnk+KSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGNvbnN0IHdpZGdldElkID0gd2lkZ2V0Ll9pZDtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlSXRlbSAhPSBcIlwiKSxcclxuXHRcdFx0c3dpdGNoTWFwKChjb25maWcpID0+IHRoaXMuaHR0cC5kZWxldGU8RGVsZXRlV2lkZ2V0QXBpTW9kZWwuUmVzcG9uc2U+KFxyXG5cdFx0XHRcdHN0cmluZ1RlbXBsYXRlKGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5kZWxldGVJdGVtLCB7IHdpZGdldElkIH0pKS5waXBlKFxyXG5cdFx0XHRcdFx0bWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0XHRcdCkpLFxyXG5cdFx0KTtcclxuXHR9XHJcblx0c2VsZWN0QnlJZDxUPihfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8VD4+IHtcclxuXHRcdGNvbnN0IHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFdpZGdldE1vZGVsPFQ+Pih1bmRlZmluZWQpO1xyXG5cdFx0dGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KChzdGF0ZSkgPT4gc3RhdGUud2lkZ2V0cy5kYi5kYXRhKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRmaWx0ZXIoKHdpZGdldHMpID0+IHdpZGdldHMgIT0gbnVsbCksXHJcblx0XHRcdFx0bWFwKCh3aWRnZXRzKSA9PiB3aWRnZXRzLmZpbmQoKHdpZGdldCkgPT4gd2lkZ2V0Ll9pZCA9PSBfaWQpKSxcclxuXHRcdFx0XHR0YXAoKHdpZGdldCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHdpZGdldCA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFdpZGdldFN0YXJ0QWN0aW9uKF9pZCkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZSgod2lkZ2V0KSA9PiBzdWJqZWN0Lm5leHQod2lkZ2V0KSk7XHJcblx0XHRyZXR1cm4gc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdENvbXBvbmVudFJlZixcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHREaXJlY3RpdmUsXHJcblx0SW5wdXRcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBwbHVjaywgZmlsdGVyLCBzd2l0Y2hNYXAsIG1hcCwgc3RhcnRXaXRoIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3dpZGdldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IElNb2R1bGVDb25maWdNYXBUeXBlcyB9IGZyb20gXCIuLi9tb2RlbHMvbW9kdWxlLWNvbmZpZy1tYXAtdHlwZXMuaW50ZXJmY2VcIjtcclxuaW1wb3J0IHsgV2lkZ2V0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy93aWRnZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy93aWRnZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXRcIixcclxuXHR0ZW1wbGF0ZTogXCJcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY1dpZGdldFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IG9pZChpZDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLl9zZWxlY3RXaWRnZXQoaWQpO1xyXG5cdH1cclxuXHR3aWRnZXQkOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPGFueT4+O1xyXG5cdGNvbXBvbmVudDogQ29tcG9uZW50UmVmPGFueT47XHJcblx0bWFwVHlwZVRvQ29tcG9uZW50OiBJTW9kdWxlQ29uZmlnTWFwVHlwZXM7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwdWJsaWMgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgc2VydmljZTogV2lkZ2V0U2VydmljZSxcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcclxuXHQpIHtcclxuXHRcdHRoaXMuX2ZpbGxfY29tcG9uZW50X21hcCgpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMud2lkZ2V0JC5waXBlKGZpbHRlcih3aWRnZXQgPT4gd2lkZ2V0ICE9IHVuZGVmaW5lZCkpLnN1YnNjcmliZSh3aWRnZXQgPT4ge1xyXG5cdFx0XHR0aGlzLl9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUod2lkZ2V0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfZmlsbF9jb21wb25lbnRfbWFwKCkge1xyXG5cdFx0dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUobWFwKGNvbmZpZyA9PiBjb25maWcudHlwZXMpLCBzdGFydFdpdGgoe30pKS5zdWJzY3JpYmUodHlwZXMgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5tYXBUeXBlVG9Db21wb25lbnQgPSB0eXBlcztcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfc2VsZWN0V2lkZ2V0KGlkOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMud2lkZ2V0JCA9IHRoaXMuc2VydmljZS5zZWxlY3RCeUlkPGFueT4oaWQpO1xyXG5cdH1cclxuXHRfcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHdpZGdldCkge1xyXG5cdFx0aWYgKCF0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt3aWRnZXQudHlwZV0pIHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdGNvbnN0IHN1cHBvcnRlZFR5cGVzID0gT2JqZWN0LmtleXModGhpcy5tYXBUeXBlVG9Db21wb25lbnQpLmpvaW4oXCIsIFwiKTtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdGBUcnlpbmcgdG8gdXNlIGFuIHVuc3VwcG9ydGVkIHR5cGUgKCR7d2lkZ2V0LnR5cGV9KS5cclxuXHRcdCAgXHRcdCBTdXBwb3J0ZWQgdHlwZXM6ICR7c3VwcG9ydGVkVHlwZXN9YFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KHRoaXMubWFwVHlwZVRvQ29tcG9uZW50W3dpZGdldC50eXBlXS52aWV3KTtcclxuXHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcblx0XHR0aGlzLndpZGdldCQuc3Vic2NyaWJlKHcgPT4gKHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLndpZGdldCA9IHcpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgSUdyaWRJdGVtQ29tcG9uZW50IH0gZnJvbSBcIkBzb3VzaGlhbnMvZ3JpZFwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBJV2lkZ2V0Vmlld0lucHV0SW50ZXJmYWNlIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQtdmlldy1pbnB1dC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR2V0V2lkZ2V0c1N0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uIHdyYXBcIiBmeExheW91dEdhcD1cIjE1cHhcIj5cclxuICA8aDQ+w5nChMObwozDmMKzw5jCqiDDmcKIw5vCjMOYwqzDmMKqw6LCgMKMw5nCh8OYwqc8L2g0PlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCIxMDBcIj5cclxuPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCLDmcKGw5nCiMOYwrkgw5nCiMObwozDmMKsw5jCqlwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRXaWRnZXRJZFwiIG5hbWU9XCJzZWxlY3RlZFdpZGdldElkXCI+XHJcbiAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgKHdpZGdldHMkIHwgYXN5bmMpXCIgW3ZhbHVlXT1cIml0ZW0uX2lkXCI+XHJcbiAgICB7e2l0ZW0udHlwZX19IDogPGI+e3tpdGVtLm5hbWV9fTwvYj5cclxuICA8L21hdC1vcHRpb24+XHJcbjwvbWF0LXNlbGVjdD4gXHJcbjwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFdpZGdldFNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJR3JpZEl0ZW1Db21wb25lbnQ8SVdpZGdldFZpZXdJbnB1dEludGVyZmFjZT4ge1xyXG5cdHdpZGdldHMkOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPGFueT5bXT47XHJcblx0c2VsZWN0ZWRXaWRnZXRJZDogc3RyaW5nO1xyXG5cdGdldCB2YWxpZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5vaWQgIT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0b2lkOiB0aGlzLnNlbGVjdGVkV2lkZ2V0SWRcclxuXHRcdH07XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLndpZGdldHMkID0gdGhpcy5zdG9yZS5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUud2lkZ2V0cy5kYi5kYXRhKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRXaWRnZXRzU3RhcnRBY3Rpb24oKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXQtcm9vdFwiLFxyXG5cdHRlbXBsYXRlOiBcIjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdENvbXBvbmVudCB7fVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR2V0V2lkZ2V0c1N0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0cy9nZXQtd2lkZ2V0cy5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IERlbGV0ZVdpZGdldFN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS9kZWxldGUtd2lkZ2V0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCIgY2xhc3M9XCJtYWluLWNvbnRhaW5lclwiPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudC1hY3Rpb25cIj5cclxuICAgIDxtYXQtY2FyZCBjbGFzcz1cIndpdGgtc3RpY2t5LWFjdGlvblwiPlxyXG4gICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiNXB4XCI+XHJcbiAgICAgICAgICA8bWF0LWljb24+d2lkZ2V0czwvbWF0LWljb24+XHJcbiAgICAgICAgICA8c3Bhbj7DmcKFw5jCr8ObwozDmMKxw5vCjMOYwqogw5jCp8OZwoHDmMKyw5nCiMOZwobDmcKHw6LCgMKMw5nCh8OYwqc8L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8bWF0LWNhcmQtc3VidGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICDDmMKnw5nCgcOYwrLDmcKIw5nChsOZwofDosKAwowgw5nChcOZwojDmMKxw5jCryDDmcKGw5jCuMOYwrEgw5jCscOYwqcgw5jCqMOYwrHDmMKnw5jCs8OYwqfDmMKzIMOZwobDmcKIw5jCuSDDmMKiw5nChiDDmMKnw5vCjMOYwqzDmMKnw5jCryDDmcKGw5nChcOYwqfDm8KMw5vCjMOYwq8gLi4uXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1zdWJ0aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcblxyXG4gICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEFsaWduPVwic3RhcnRcIj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBmeEZsZXguZ3QtbGc9XCIxOVwiIGZ4RmxleC5sZz1cIjI0XCIgZnhGbGV4Lm1kPVwiMzEuN1wiIGZ4RmxleC5zbT1cIjQ5XCIgZnhGbGV4LnhzPVwiMTAwXCJcclxuICAgICAgICAgIGNsYXNzPSdsaW5rJyAqbmdGb3I9XCJsZXQgaXRlbSBvZiAod2lkZ2V0cyQgfCBhc3luYylcIj5cclxuICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJyZW1vdmUoaXRlbSlcIiBjbGFzcz1cInJlbW92ZS1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluay1idXR0b25cIiBbcm91dGVyTGlua109XCJbJy4uL3Vwc2VydCcgLCAgaXRlbS50eXBlLCAgaXRlbS5faWRdXCIgZnhMYXlvdXQ9J2NvbHVtbicgZnhMYXlvdXRBbGlnbj0nc3BhY2UtYmV0d2VlbiBjZW50ZXInPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gY29sb3I9J3ByaW1hcnknIFtzdHlsZS5jb2xvcl09XCJhbmdoYXppW2l0ZW0udHlwZV0uY29sb3JcIj57e2FuZ2hhemlbaXRlbS50eXBlXS5pY29ufX08L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4RmxleEFsaWduPVwic3RyZXRjaFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJ3aWRnZXQtdHlwZVwiPlxyXG4gICAgICAgICAgICAgIHt7aXRlbS50eXBlfX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cInRpdGxlXCI+e3tpdGVtLm5hbWV9fTwvaDQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9tYXQtY2FyZD5cclxuXHJcbiAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgY2xhc3M9XCJzdGlja3ktYWN0aW9uXCI+XHJcbiAgICAgIDxhIG1hdC1taW5pLWZhYiByb3V0ZXJMaW5rPVwiLi4vdXBzZXJ0L2FydGljbGVcIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cIicjZmZmZmZmJ1wiPlxyXG4gICAgICAgIDxtYXQtaWNvbiBbc3R5bGUuY29sb3JdPVwiYW5naGF6aS5hcnRpY2xlLmNvbG9yXCI+e3thbmdoYXppLmFydGljbGUuaWNvbn19PC9tYXQtaWNvbj5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YSBtYXQtbWluaS1mYWIgcm91dGVyTGluaz1cIi4uL3Vwc2VydC9saW5rc1wiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiJyNmZmZmZmYnXCI+XHJcbiAgICAgICAgPG1hdC1pY29uIFtzdHlsZS5jb2xvcl09XCJhbmdoYXppLmxpbmtzLmNvbG9yXCI+e3thbmdoYXppLmxpbmtzLmljb259fTwvbWF0LWljb24+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgbWF0LW1pbmktZmFiIHJvdXRlckxpbms9XCIuLi91cHNlcnQvbGlzdFwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiJyNmZmZmZmYnXCI+XHJcbiAgICAgICAgPG1hdC1pY29uIFtzdHlsZS5jb2xvcl09XCJhbmdoYXppLmxpc3QuY29sb3JcIj57e2FuZ2hhemkubGlzdC5pY29ufX08L21hdC1pY29uPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYC5saW5re21hcmdpbjouNSU7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MH1idXR0b24ubGluayBtYXQtaWNvbntmb250LXNpemU6MzRweDt3aWR0aDozNHB4O2hlaWdodDozNHB4fS5saW5rIGg0e21hcmdpbjowfS5yZW1vdmUtaXRlbXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7ei1pbmRleDoxMDB9LmxpbmstYnV0dG9ue3BhZGRpbmc6MjVweCAxNXB4fWJ1dHRvbi5saW5rIC5yZW1vdmUtaXRlbSBtYXQtaWNvbntmb250LXNpemU6aW5pdGlhbDt3aWR0aDppbml0aWFsO2hlaWdodDppbml0aWFsO3Zpc2liaWxpdHk6aGlkZGVuO29wYWNpdHk6MDt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzIGVhc2UtaW4tb3V0fWJ1dHRvbi5saW5rOmhvdmVyIC5yZW1vdmUtaXRlbSBtYXQtaWNvbnt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXRzTWFuYWdlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0YW5naGF6aTogeyBbdHlwZTogc3RyaW5nXTogeyBjb2xvcjogc3RyaW5nOyBpY29uOiBzdHJpbmcgfSB9O1xyXG5cdHdpZGdldHMkOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPGFueT5bXT47XHJcblx0Y29uc3RydWN0b3IocHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMud2lkZ2V0cyQgPSB0aGlzLnN0b3JlLnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLndpZGdldHMuZGIuZGF0YSk7XHJcblx0XHR0aGlzLl9maWxsX2FuZ2hhemkoKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRXaWRnZXRzU3RhcnRBY3Rpb24oKSk7XHJcblx0fVxyXG5cdHJlbW92ZShpdGVtKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERlbGV0ZVdpZGdldFN0YXJ0QWN0aW9uKGl0ZW0pKTtcclxuXHR9XHJcblx0X2ZpbGxfYW5naGF6aSgpIHtcclxuXHRcdHRoaXMuYW5naGF6aSA9IHtcclxuXHRcdFx0YXJ0aWNsZToge1xyXG5cdFx0XHRcdGNvbG9yOiBcImdyZWVuXCIsXHJcblx0XHRcdFx0aWNvbjogXCJkZXNjcmlwdGlvblwiXHJcblx0XHRcdH0sXHJcblx0XHRcdGxpbmtzOiB7XHJcblx0XHRcdFx0Y29sb3I6IFwib3JhbmdlXCIsXHJcblx0XHRcdFx0aWNvbjogXCJsaW5rXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0bGlzdDoge1xyXG5cdFx0XHRcdGNvbG9yOiBcImJsdWVcIixcclxuXHRcdFx0XHRpY29uOiBcImxpc3RcIlxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwibWFpbi1jb250YWluZXJcIj5cclxuICAgIDxkaXYgZnhGbGV4PVwiNTBcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyIG5nc0R5bmFtaWNXaWRnZXRDb25maWc+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0Q29tcG9uZW50IHt9XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFJvb3RDb21wb25lbnQgfSBmcm9tIFwiLi9yb290L3Jvb3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFdpZGdldHNNYW5hZ2VtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vbWFuZ2VtZW50L3dpZGdldC1tYW5hZ2VtZW50LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVcHNlcnRDb21wb25lbnQgfSBmcm9tIFwiLi91cHNlcnQvdXBzZXJ0LmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogXCJ3aWRnZXRcIixcclxuXHRcdGNvbXBvbmVudDogUm9vdENvbXBvbmVudCxcclxuXHRcdGNoaWxkcmVuOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcIm1hbmFnZW1lbnRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFdpZGdldHNNYW5hZ2VtZW50Q29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInVwc2VydC86dHlwZVwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogVXBzZXJ0Q29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInVwc2VydC86dHlwZS86X2lkXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBVcHNlcnRDb21wb25lbnRcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBXaWRnZXRSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3dpZGdldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0R0VUX1dJREdFVF9BQ1RJT05fVFlQRVMsXHJcblx0R2V0V2lkZ2V0QWN0aW9ucyxcclxuXHRHZXRXaWRnZXRTdWNjZWVkQWN0aW9uLFxyXG5cdEdldFdpZGdldEZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL2dldC13aWRnZXQuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0QXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxHZXRXaWRnZXRBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBXaWRnZXRTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9XSURHRVRfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcCgoYWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgocGF5bG9hZCkgPT4gdGhpcy5zZXJ2aWNlLmdldChwYXlsb2FkKSksXHJcblx0XHRcdG1hcCgocmVzKSA9PiBuZXcgR2V0V2lkZ2V0U3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgR2V0V2lkZ2V0RmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0U2VydmljZSB9IGZyb20gXCIuLi8uLi93aWRnZXQuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG5cdFVQU0VSVF9XSURHRVRfQUNUSU9OX1RZUEVTLFxyXG5cdFVwc2VydFdpZGdldEFjdGlvbnMsXHJcblx0VXBzZXJ0V2lkZ2V0U3VjY2VlZEFjdGlvbixcclxuXHRVcHNlcnRXaWRnZXRGYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi91cHNlcnQtd2lkZ2V0LmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVwc2VydFdpZGdldEFwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8VXBzZXJ0V2lkZ2V0QWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogV2lkZ2V0U2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShVUFNFUlRfV0lER0VUX0FDVElPTl9UWVBFUy5TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoKGFjdGlvbikgPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKHBheWxvYWQpID0+IHRoaXMuc2VydmljZS51cHNlcnQocGF5bG9hZCkpLFxyXG5cdFx0XHRtYXAoKHJlcykgPT4gbmV3IFVwc2VydFdpZGdldFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IFVwc2VydFdpZGdldEZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vd2lkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMsXHJcblx0R2V0V2lkZ2V0c0FjdGlvbnMsXHJcblx0R2V0V2lkZ2V0c1N1Y2NlZWRBY3Rpb24sXHJcblx0R2V0V2lkZ2V0c0ZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL2dldC13aWRnZXRzLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdldFdpZGdldHNBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPEdldFdpZGdldHNBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBXaWRnZXRTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUy5TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRzd2l0Y2hNYXAoKCkgPT5cclxuXHRcdFx0XHR0aGlzLnNlcnZpY2VcclxuXHRcdFx0XHRcdC5nZXRXaWRnZXRzKClcclxuXHRcdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0XHRtYXAoKHJlcykgPT4gbmV3IEdldFdpZGdldHNTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRcdFx0XHRjYXRjaEVycm9yKChlcnIpID0+IG9mKG5ldyBHZXRXaWRnZXRzRmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3dpZGdldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0REVMRVRFX1dJREdFVF9BQ1RJT05fVFlQRVMsXHJcblx0RGVsZXRlV2lkZ2V0QWN0aW9ucyxcclxuXHREZWxldGVXaWRnZXRTdWNjZWVkQWN0aW9uLFxyXG5cdERlbGV0ZVdpZGdldEZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL2RlbGV0ZS13aWRnZXQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEZWxldGVXaWRnZXRBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPERlbGV0ZVdpZGdldEFjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UpIHsgfVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKERFTEVURV9XSURHRVRfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcCgoYWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgocGF5bG9hZCkgPT5cclxuXHRcdFx0XHR0aGlzLnNlcnZpY2VcclxuXHRcdFx0XHRcdC5kZWxldGUocGF5bG9hZClcclxuXHRcdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0XHRtYXAoKHJlcykgPT4gbmV3IERlbGV0ZVdpZGdldFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdFx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IERlbGV0ZVdpZGdldEZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFdpZGdldHNBY3Rpb25UeXBlcyB7XHJcblx0VVBTRVJUID0gXCJbV0lER0VUXVtEQl0gVVBTRVJUXCIsXHJcblx0REVMRVRFID0gXCJbV0lER0VUXVtEQl0gREVMRVRFXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwc2VydFdpZGdldEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFdpZGdldHNBY3Rpb25UeXBlcy5VUFNFUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT5bXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGVsZXRlV2lkZ2V0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gV2lkZ2V0c0FjdGlvblR5cGVzLkRFTEVURTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogV2lkZ2V0TW9kZWw8YW55Pikge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgV2lkZ2V0c0FjdGlvbnMgPSBVcHNlcnRXaWRnZXRBY3Rpb24gfCBEZWxldGVXaWRnZXRBY3Rpb247XHJcbiIsImltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgV2lkZ2V0c0FjdGlvbnMsIFdpZGdldHNBY3Rpb25UeXBlcyB9IGZyb20gXCIuL3dpZGdldC5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRkYXRhOiBXaWRnZXRNb2RlbDxhbnk+W107XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0ZGF0YTogW11cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFdpZGdldHNBY3Rpb25zKTogU3RhdGUge1xyXG5cdGxldCBfZGF0YTogV2lkZ2V0TW9kZWw8YW55PltdO1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgV2lkZ2V0c0FjdGlvblR5cGVzLlVQU0VSVDpcclxuXHRcdFx0X2RhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHRsZXQgbmV3V2lkZ2V0cyA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cdFx0XHRpZiAoIShuZXdXaWRnZXRzIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcblx0XHRcdFx0bmV3V2lkZ2V0cyA9IFtuZXdXaWRnZXRzXTtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiJ1dpZGdldHNBY3Rpb25UeXBlcy5VUFNFUlQnIGRvZXMgbm90IGdldCBhcnJheSBwYXlsb2FkXCIpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRuZXdXaWRnZXRzLmZvckVhY2goKG5ld1dpZGdldCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGV4aXN0ZWRXaWRnZXRJbmRleCA9IF9kYXRhLmZpbmRJbmRleCgodykgPT4gdy5faWQgPT0gbmV3V2lkZ2V0Ll9pZCk7XHJcblx0XHRcdFx0aWYgKGV4aXN0ZWRXaWRnZXRJbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0XHRfZGF0YS5zcGxpY2UoZXhpc3RlZFdpZGdldEluZGV4LCAxLCBuZXdXaWRnZXQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRfZGF0YS5wdXNoKG5ld1dpZGdldCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogX2RhdGFcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIFdpZGdldHNBY3Rpb25UeXBlcy5ERUxFVEU6XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRfZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblxyXG5cdFx0XHRjb25zdCB3aWRnZXRJbmRleCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KCh3KSA9PiB3Ll9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRpZiAod2lkZ2V0SW5kZXggPiAtMSkge1xyXG5cdFx0XHRcdF9kYXRhLnNwbGljZSh3aWRnZXRJbmRleCwgMSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBfZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFdpZGdldHMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG4iLCJpbXBvcnQgKiBhcyBmcm9tUm9vdCBmcm9tIFwiLi9yb290L3dpZGdldHMucmVkdWNlcnNcIjtcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuZXhwb3J0IGludGVyZmFjZSBXaWRnZXRTdGF0ZSB7XHJcblx0ZGI6IGZyb21Sb290LlN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgV2lkZ2V0UmVkdWNlciA9IHtcclxuXHRkYjogZnJvbVJvb3QuUmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XHJcblx0d2lkZ2V0czogV2lkZ2V0U3RhdGU7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgcGx1Y2ssIHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgR0VUX1dJREdFVF9BQ1RJT05fVFlQRVMsIEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVcHNlcnRXaWRnZXRBY3Rpb24sIFdpZGdldHNBY3Rpb25UeXBlcywgRGVsZXRlV2lkZ2V0QWN0aW9uIH0gZnJvbSBcIi4vd2lkZ2V0LmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgREVMRVRFX1dJREdFVF9BQ1RJT05fVFlQRVMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL2RlbGV0ZS13aWRnZXRcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdpZGdldERiRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+KSB7IH1cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0VXBzZXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX1dJREdFVF9BQ1RJT05fVFlQRVMuU1VDQ0VFRClcclxuXHRcdC5waXBlKHBsdWNrKFwicGF5bG9hZFwiKSwgbWFwKCh3aWRnZXQ6IFdpZGdldE1vZGVsPGFueT4pID0+IG5ldyBVcHNlcnRXaWRnZXRBY3Rpb24oW3dpZGdldF0pKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydE1hbnkkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMuU1VDQ0VFRClcclxuXHRcdC5waXBlKHBsdWNrKFwicGF5bG9hZFwiKSwgbWFwKCh3aWRnZXRzOiBXaWRnZXRNb2RlbDxhbnk+W10pID0+IG5ldyBVcHNlcnRXaWRnZXRBY3Rpb24od2lkZ2V0cykpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RGVsZXRlJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoREVMRVRFX1dJREdFVF9BQ1RJT05fVFlQRVMuU1VDQ0VFRClcclxuXHRcdC5waXBlKHBsdWNrKFwicGF5bG9hZFwiKSwgbWFwKCh3aWRnZXQ6IFdpZGdldE1vZGVsPGFueT4pID0+IG5ldyBEZWxldGVXaWRnZXRBY3Rpb24od2lkZ2V0KSlcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENvbXBvbmVudFJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBWaWV3Q29udGFpbmVyUmVmLCBEaXJlY3RpdmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgcGx1Y2ssIGZpbHRlciwgc3dpdGNoTWFwLCBtYXAsIHN0YXJ0V2l0aCwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3dpZGdldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvd2lkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvd2lkZ2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBJTW9kdWxlQ29uZmlnTWFwVHlwZXMgfSBmcm9tIFwiLi4vbW9kZWxzL21vZHVsZS1jb25maWctbWFwLXR5cGVzLmludGVyZmNlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogXCJbbmdzRHluYW1pY1dpZGdldENvbmZpZ11cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY1dpZGdldENvbmZpZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PjtcclxuXHRtYXBUeXBlVG9Db21wb25lbnQ6IElNb2R1bGVDb25maWdNYXBUeXBlcztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXHJcblx0KSB7XHJcblx0XHR0aGlzLl9maWxsX2NvbXBvbmVudF9tYXAoKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLl9yZWFjdF9iYXNlX29uX3BhcmFtcygpO1xyXG5cdH1cclxuXHRfZmlsbF9jb21wb25lbnRfbWFwKCkge1xyXG5cdFx0dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUobWFwKChjb25maWcpID0+IGNvbmZpZy50eXBlcyksIHN0YXJ0V2l0aCh7fSkpLnN1YnNjcmliZSgodHlwZXMpID0+IHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRoaXMubWFwVHlwZVRvQ29tcG9uZW50ID0gdHlwZXM7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0X3JlYWN0X2Jhc2Vfb25fcGFyYW1zKCkge1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKCh7IHR5cGUsIF9pZCB9KSA9PiB7XHJcblx0XHRcdGlmIChfaWQpIHtcclxuXHRcdFx0XHR0aGlzLnNlcnZpY2Uuc2VsZWN0QnlJZDxhbnk+KF9pZCkuc3Vic2NyaWJlKCh3aWRnZXQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuX3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh0eXBlLCB3aWRnZXQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuX3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh0eXBlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUodHlwZTogc3RyaW5nLCB3aWRnZXQ/OiBXaWRnZXRNb2RlbDxhbnk+KSB7XHJcblx0XHRpZiAodGhpcy5jb21wb25lbnQpIHtcclxuXHRcdFx0dGhpcy5jb21wb25lbnQuZGVzdHJveSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghdGhpcy5tYXBUeXBlVG9Db21wb25lbnRbdHlwZV0pIHtcclxuXHRcdFx0Y29uc3Qgc3VwcG9ydGVkVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCkuam9pbihcIiwgXCIpO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoJHt0eXBlfSkuXHJcblx0XHQgIFx0XHQgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt0eXBlXS51cHNlcnQpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdC8vIHRoaXMud2lkZ2V0JC5zdWJzY3JpYmUoKHcpID0+ICh0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS53aWRnZXQgPSB3KSk7XHJcblx0XHRpZiAod2lkZ2V0KSB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS53aWRnZXQgPSB3aWRnZXQ7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRDb21wb25lbnRSZWYsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0RGlyZWN0aXZlLFxyXG5cdElucHV0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgcGx1Y2ssIGZpbHRlciwgc3dpdGNoTWFwLCBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgV2lkZ2V0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy93aWRnZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy93aWRnZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElNb2R1bGVDb25maWdNYXBUeXBlcyB9IGZyb20gXCIuLi9tb2RlbHMvbW9kdWxlLWNvbmZpZy1tYXAtdHlwZXMuaW50ZXJmY2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiBcIltuZ3NEeW5hbWljV2lkZ2V0Vmlld11cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY1dpZGdldFZpZXdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IG9pZChpZDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLl9zZWxlY3RXaWRnZXQoaWQpO1xyXG5cdH1cclxuXHR3aWRnZXQkOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPGFueT4+O1xyXG5cdGNvbXBvbmVudDogQ29tcG9uZW50UmVmPGFueT47XHJcblx0bWFwVHlwZVRvQ29tcG9uZW50OiBJTW9kdWxlQ29uZmlnTWFwVHlwZXM7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwdWJsaWMgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG5cdFx0cHJpdmF0ZSBzZXJ2aWNlOiBXaWRnZXRTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0XHRwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZlxyXG5cdCkge1xyXG5cdFx0dGhpcy5fZmlsbF9jb21wb25lbnRfbWFwKCk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy53aWRnZXQkLnBpcGUoZmlsdGVyKHdpZGdldCA9PiB3aWRnZXQgIT0gdW5kZWZpbmVkKSkuc3Vic2NyaWJlKHdpZGdldCA9PiB7XHJcblx0XHRcdHRoaXMuX3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh3aWRnZXQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9maWxsX2NvbXBvbmVudF9tYXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShtYXAoY29uZmlnID0+IGNvbmZpZy50eXBlcyksIHN0YXJ0V2l0aCh7fSkpLnN1YnNjcmliZSh0eXBlcyA9PiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHR0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCA9IHR5cGVzO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9zZWxlY3RXaWRnZXQoaWQ6IHN0cmluZykge1xyXG5cdFx0dGhpcy53aWRnZXQkID0gdGhpcy5zZXJ2aWNlLnNlbGVjdEJ5SWQ8YW55PihpZCk7XHJcblx0fVxyXG5cdF9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUod2lkZ2V0KSB7XHJcblx0XHRpZiAoIXRoaXMubWFwVHlwZVRvQ29tcG9uZW50W3dpZGdldC50eXBlXSkge1xyXG5cdFx0XHRjb25zdCBzdXBwb3J0ZWRUeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMubWFwVHlwZVRvQ29tcG9uZW50KS5qb2luKFwiLCBcIik7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHRgVHJ5aW5nIHRvIHVzZSBhbiB1bnN1cHBvcnRlZCB0eXBlICgke3dpZGdldC50eXBlfSkuXHJcblx0XHQgIFx0XHQgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt3aWRnZXQudHlwZV0udmlldyk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG5cdFx0dGhpcy53aWRnZXQkLnN1YnNjcmliZSh3ID0+ICh0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS53aWRnZXQgPSB3KSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmVEZXZ0b29sc01vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZS1kZXZ0b29sc1wiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdFRhYnNNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRNYXRNZW51TW9kdWxlLFxyXG5cdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdE1hdFRhYmxlTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3dpZGdldC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2lkZ2V0U2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3dpZGdldC5zZXJ2aWNlXCI7XHJcbi8vIGltcG9ydCB7IFdpZGdldFJlZHVjZXIgfSBmcm9tIFwiLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBXaWRnZXRNb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi93aWRnZXQuY29uZmlnXCI7XHJcbmltcG9ydCB7IFdpZGdldFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi93aWRnZXQtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgUm9vdENvbXBvbmVudCB9IGZyb20gXCIuL3Jvb3Qvcm9vdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR2V0V2lkZ2V0QXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0L2dldC13aWRnZXQuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBVcHNlcnRXaWRnZXRBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL3Vwc2VydC13aWRnZXQvdXBzZXJ0LXdpZGdldC5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEdldFdpZGdldHNBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL2dldC13aWRnZXRzL2dldC13aWRnZXRzLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgRGVsZXRlV2lkZ2V0QXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS9kZWxldGUtd2lkZ2V0L2RlbGV0ZS13aWRnZXQuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBXaWRnZXRSZWR1Y2VyIH0gZnJvbSBcIi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgV2lkZ2V0RGJFZmZlY3RzIH0gZnJvbSBcIi4vcm9vdC93aWRnZXRzLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgV2lkZ2V0c01hbmFnZW1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9tYW5nZW1lbnQvd2lkZ2V0LW1hbmFnZW1lbnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVwc2VydENvbXBvbmVudCB9IGZyb20gXCIuL3Vwc2VydC91cHNlcnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IER5bmFtaWNXaWRnZXRDb25maWdEaXJlY3RpdmUgfSBmcm9tIFwiLi91cHNlcnQvZHluYW1pYy13aWRnZXQtY29uZmlnLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBEeW5hbWljV2lkZ2V0Vmlld0RpcmVjdGl2ZSB9IGZyb20gXCIuL3ZpZXcvZHluYW1pYy13aWRnZXQtdmlldy5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgV2lkZ2V0U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi93aWRnZXQtc2VsZWN0b3Ivd2lkZ2V0LXNlbGVjdG9yLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEeW5hbWljV2lkZ2V0Vmlld0NvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZHluYW1pYy13aWRnZXQtdmlldy5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdFx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRcdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdFx0TWF0VGFibGVNb2R1bGUsXHJcblx0XHRNYXRNZW51TW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdFJvb3RDb21wb25lbnQsXHJcblx0XHRXaWRnZXRzTWFuYWdlbWVudENvbXBvbmVudCxcclxuXHRcdFVwc2VydENvbXBvbmVudCxcclxuXHRcdER5bmFtaWNXaWRnZXRDb25maWdEaXJlY3RpdmUsXHJcblx0XHREeW5hbWljV2lkZ2V0Vmlld0RpcmVjdGl2ZSxcclxuXHRcdFdpZGdldFNlbGVjdG9yQ29tcG9uZW50LFxyXG5cdFx0RHluYW1pY1dpZGdldFZpZXdDb21wb25lbnRcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogW1dpZGdldFNlbGVjdG9yQ29tcG9uZW50LCBEeW5hbWljV2lkZ2V0Vmlld0NvbXBvbmVudF0sXHJcblx0ZXhwb3J0czogW0R5bmFtaWNXaWRnZXRWaWV3RGlyZWN0aXZlLCBXaWRnZXRTZWxlY3RvckNvbXBvbmVudCwgRHluYW1pY1dpZGdldFZpZXdDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NXaWRnZXRNb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IFdpZGdldE1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IE5nc1dpZGdldFJvb3RNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW3sgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9LCBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSwgV2lkZ2V0U2VydmljZV1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdE5nc1dpZGdldE1vZHVsZSxcclxuXHRcdFdpZGdldFJvdXRpbmdNb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwid2lkZ2V0c1wiLCBXaWRnZXRSZWR1Y2VyKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbV2lkZ2V0RGJFZmZlY3RzLCBHZXRXaWRnZXRBcGlFZmZlY3RzLCBHZXRXaWRnZXRzQXBpRWZmZWN0cywgVXBzZXJ0V2lkZ2V0QXBpRWZmZWN0cywgRGVsZXRlV2lkZ2V0QXBpRWZmZWN0c10pXHJcblx0XSxcclxuXHRleHBvcnRzOiBbTmdzV2lkZ2V0TW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzV2lkZ2V0Um9vdE1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi93aWRnZXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJV2lkZ2V0VmlldzxUPiB7XHJcblx0d2lkZ2V0OiBXaWRnZXRNb2RlbDxUPjtcclxuXHRnb1RvRWRpdD86IGFueTtcclxufVxyXG4iLCJpbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIElXaWRnZXRVcHNlcnQ8VD4ge1xyXG5cdHdpZGdldDogV2lkZ2V0TW9kZWw8VD47XHJcbn1cclxuIl0sIm5hbWVzIjpbImZyb21Sb290LlJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQWlCLGtCQUFrQjtBQUFuQyxXQUFpQixrQkFBa0I7SUFDbEMsSUFBQTtRQUNDLGlCQUFZLFNBQWM7WUFBZCwwQkFBQSxFQUFBLGNBQWM7WUFBMUIsaUJBRUM7WUFEQSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsSUFBSSxRQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUMsQ0FBQyxDQUFDO1NBQ3BFOzs7O1FBRUQsZ0NBQWM7OztRQUFkO1lBQ0MsT0FBTyxFQUFFLENBQUM7U0FDVjtzQkFWSDtRQVdFLENBQUE7SUFSWSwwQkFBTztJQVVwQixJQUFBO1FBRUM7U0FBZ0I7dUJBZmxCO1FBZ0JFLENBQUE7SUFIWSwyQkFBUTtHQVhMLGtCQUFrQixLQUFsQixrQkFBa0IsUUFlbEM7Ozs7OztBQ05ELElBQUE7Ozs7Z0NBWEE7SUFhQyxDQUFB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