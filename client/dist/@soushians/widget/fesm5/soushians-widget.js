import { InjectionToken, Inject, Injectable, Component, ComponentFactoryResolver, ViewContainerRef, Input, Directive, NgModule } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { map, filter, tap, take, switchMap, startWith, catchError, pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { stringTemplate } from '@soushians/shared';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { __decorate, __metadata, __assign } from 'tslib';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    env: {
        production: false,
        frontend_server: "frontend_server/did/not/set"
    },
    endpoints: {
        upsert: "/api/uiwidget",
        find: "/api/uiwidget",
        get: "/api/uiwidget/${model._id}"
    },
    types: {}
};
var /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("WidgetModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */
var WidgetService = /** @class */ (function () {
    function WidgetService(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
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
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.get !== ''; }), take(1), switchMap(function (config) {
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
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.find != ''; }), switchMap(function (config) { return _this.http.get(config.env.frontend_server + config.endpoints.find); }), map(function (response) { return response.Result; }));
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
        var /** @type {?} */ model = new UpsertWidgetApiModel.Request(widget);
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.upsert != ''; }), take(1), switchMap(function (config) {
            return _this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody());
        }), map(function (response) { return response.Result; }));
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
    WidgetService.prototype.selectById = /**
     * @template T
     * @param {?} _id
     * @return {?}
     */
    function (_id) {
        var _this = this;
        var /** @type {?} */ subject = new BehaviorSubject(undefined);
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
        { type: WidgetConfigurationService }
    ]; };
    return WidgetService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            var /** @type {?} */ supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
            throw new Error("Trying to use an unsupported type (" + widget.type + ").\n\t\t  \t\t Supported types: " + supportedTypes);
        }
        var /** @type {?} */ component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[widget.type].view);
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */
var WidgetsManagementComponent = /** @class */ (function () {
    function WidgetsManagementComponent(store) {
        this.store = store;
        this.widgets$ = this.store.select(function (state) { return state.widgets.db.data; });
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
    WidgetsManagementComponent.decorators = [
        { type: Component, args: [{
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\">\n  <div fXFlex=\"30\" fxLayout=\"row wrap\">\n    <button fxFlex=\"100\" color=\"primary\" mat-raised-button routerLink=\"../upsert/article\">\n      Add Article\n    </button>\n    <button fxFlex=\"100\" color=\"primary\" mat-raised-button routerLink=\"../upsert/links\">\n      Add Links\n    </button>\n  </div>\n  <div fxFlex=\"70\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n    <mat-card class=\"cards-item\" *ngFor=\"let item of (widgets$ | async)\" fxFlex=\"33\" fxLayout=\"row\">\n      <div fxFlex>\n        <a [routerLink]=\"['../upsert' ,  item.type,  item._id]\">\n          <mat-icon aria-label=\"edit widget\">edit</mat-icon>\n        </a>\n      </div>\n      <div fxFlex>\n        {{item.name}}\n      </div>\n      <div fxFlex>\n        {{item.type}}\n      </div>\n    </mat-card>\n  </div>\n</div>"
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
 * @suppress {checkTypes} checked by tsc
 */
var UpsertComponent = /** @class */ (function () {
    function UpsertComponent() {
    }
    UpsertComponent.decorators = [
        { type: Component, args: [{
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <div fxFlex=\"50\">\n        <ng-container ngsDynamicWidgetConfig></ng-container>\n    </div>\n</div>"
                },] },
    ];
    return UpsertComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ routes = [
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
var /** @type {?} */ WidgetRoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
        case WidgetsActionTypes.UPSERT:
            _data = state.data.concat();
            var /** @type {?} */ newWidgets = action.payload;
            newWidgets.forEach(function (newWidget) {
                var /** @type {?} */ existedWidgetIndex = _data.findIndex(function (w) { return w._id == newWidget._id; });
                if (existedWidgetIndex > -1) {
                    _data.splice(existedWidgetIndex, 1, newWidget);
                }
                else {
                    _data.push(newWidget);
                }
            });
            return __assign({}, state, { data: _data });
        case WidgetsActionTypes.DELETE:
            _data = Object.assign({}, state.data);
            var /** @type {?} */ widgetIndex = state.data.findIndex(function (w) { return w._id == action.payload._id; });
            _data.splice(widgetIndex, 1);
            return __assign({}, state, { data: _data });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ WidgetReducer = {
    db: Reducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    return WidgetDbEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            var /** @type {?} */ supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
            throw new Error("Trying to use an unsupported type (" + type + ").\n\t\t  \t\t Supported types: " + supportedTypes);
        }
        var /** @type {?} */ component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[type].upsert);
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
 * @suppress {checkTypes} checked by tsc
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
            var /** @type {?} */ supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
            throw new Error("Trying to use an unsupported type (" + widget.type + ").\n\t\t  \t\t Supported types: " + supportedTypes);
        }
        var /** @type {?} */ component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[widget.type].view);
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
 * @suppress {checkTypes} checked by tsc
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
                        MatTableModule
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
                        EffectsModule.forFeature([WidgetDbEffects, GetWidgetApiEffects, GetWidgetsApiEffects, UpsertWidgetApiEffects])
                    ],
                    exports: [NgsWidgetModule]
                },] },
    ];
    return NgsWidgetRootModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { UpsertWidgetStartAction, DynamicWidgetViewComponent, WidgetSelectorComponent, NgsWidgetModule, WidgetModel, IWidgetView, IWidgetUpsert, WidgetsManagementComponent as ɵh, RootComponent as ɵg, WidgetDbEffects as ɵn, Reducer as ɵm, GetWidgetApiEffects as ɵo, GetWidgetsApiEffects as ɵq, UpsertWidgetApiEffects as ɵs, WidgetConfigurationService as ɵf, WidgetService as ɵe, DynamicWidgetConfigDirective as ɵj, UpsertComponent as ɵi, DynamicWidgetViewDirective as ɵk, WidgetRoutingModule as ɵl, MODULE_CONFIG_TOKEN as ɵb, NgsWidgetRootModule as ɵa, WidgetReducer as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXdpZGdldC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0cy9nZXQtd2lkZ2V0cy5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0cy9nZXQtd2lkZ2V0cy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvYXBpL2dldC13aWRnZXQvZ2V0LXdpZGdldC5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0L2dldC13aWRnZXQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL21vZGVscy93aWRnZXQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LXdpZGdldC91cHNlcnQtd2lkZ2V0Lm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvYXBpL3Vwc2VydC13aWRnZXQvdXBzZXJ0LXdpZGdldC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvd2lkZ2V0LmNvbmZpZy50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3NlcnZpY2VzL3dpZGdldC1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy93aWRnZXQuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3ZpZXcvZHluYW1pYy13aWRnZXQtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi93aWRnZXQtc2VsZWN0b3Ivd2lkZ2V0LXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3Jvb3Qvcm9vdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9tYW5nZW1lbnQvd2lkZ2V0LW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvdXBzZXJ0L3Vwc2VydC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi93aWRnZXQtcm91dGluZy5tb2R1bGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldC9nZXQtd2lkZ2V0LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LXdpZGdldC91cHNlcnQtd2lkZ2V0LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldHMvZ2V0LXdpZGdldHMuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3Jvb3Qvd2lkZ2V0LmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9yb290L3dpZGdldHMucmVkdWNlcnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi93aWRnZXQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3Jvb3Qvd2lkZ2V0cy5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvdXBzZXJ0L2R5bmFtaWMtd2lkZ2V0LWNvbmZpZy5kaXJlY3RpdmUudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi92aWV3L2R5bmFtaWMtd2lkZ2V0LXZpZXcuZGlyZWN0aXZlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvd2lkZ2V0Lm1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL21vZGVscy93aWRnZXQtdmlldy5pbnRlcmZhY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9tb2RlbHMvd2lkZ2V0LXVwc2VydC5pbnRlcmZhY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBHZXRXaWRnZXRzQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7fTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IFdpZGdldE1vZGVsPGFueT5bXTtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRXaWRnZXRzQXBpTW9kZWwgfSBmcm9tIFwiLi9nZXQtd2lkZ2V0cy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbR0VUX1dJREdFVFNdW0FQSV1bR2V0V2lkZ2V0c10gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbR0VUX1dJREdFVFNdW0FQSV1bR2V0V2lkZ2V0c10gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW0dFVF9XSURHRVRTXVtBUEldW0dldFdpZGdldHNdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRzU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFdpZGdldHNTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT5bXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0c0ZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR2V0V2lkZ2V0c0FjdGlvbnMgPSBHZXRXaWRnZXRzU3RhcnRBY3Rpb24gfCBHZXRXaWRnZXRzU3VjY2VlZEFjdGlvbiB8IEdldFdpZGdldHNGYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgR2V0V2lkZ2V0QXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdF9pZDogc3RyaW5nO1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlID0ge30pIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogV2lkZ2V0TW9kZWw8YW55PjtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRXaWRnZXRBcGlNb2RlbCB9IGZyb20gXCIuL2dldC13aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gR0VUX1dJREdFVF9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbV0lER0VUXVtBUEldW0dldFdpZGdldF0gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbV0lER0VUXVtBUEldW0dldFdpZGdldF0gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW1dJREdFVF1bQVBJXVtHZXRXaWRnZXRdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9XSURHRVRfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFdpZGdldFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfV0lER0VUX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfV0lER0VUX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR2V0V2lkZ2V0QWN0aW9ucyA9IEdldFdpZGdldFN0YXJ0QWN0aW9uIHwgR2V0V2lkZ2V0U3VjY2VlZEFjdGlvbiB8IEdldFdpZGdldEZhaWxlZEFjdGlvbjtcclxuIiwiZXhwb3J0IGNsYXNzIFdpZGdldE1vZGVsPFQ+IHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0dHlwZTogc3RyaW5nO1xyXG5cdENvbmZpZzogVDtcclxuXHRjb25zdHJ1Y3Rvcih7IF9pZCwgbmFtZSwgdHlwZSwgQ29uZmlnIH06IHsgX2lkPzogc3RyaW5nOyBuYW1lPzogc3RyaW5nOyB0eXBlPzogc3RyaW5nOyBDb25maWc/OiBUIH0gPSB7fSkge1xyXG5cdFx0dGhpcy5faWQgPSBfaWQ7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lIHx8IFwiXCI7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdFx0dGhpcy5Db25maWcgPSBDb25maWcgfHwgKHt9IGFzIFQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFVwc2VydFdpZGdldEFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHR3aWRnZXQ6IFdpZGdldE1vZGVsPGFueT47XHJcblx0XHRjb25zdHJ1Y3Rvcih3aWRnZXQgPSB7fSkge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy53aWRnZXQgPSBuZXcgV2lkZ2V0TW9kZWwod2lkZ2V0KTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMud2lkZ2V0O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogV2lkZ2V0TW9kZWw8YW55PjtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVcHNlcnRXaWRnZXRBcGlNb2RlbCB9IGZyb20gXCIuL3Vwc2VydC13aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gVVBTRVJUX1dJREdFVF9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbVVBTRVJUX1dJREdFVF1bQVBJXVtVcHNlcnRXaWRnZXRdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW1VQU0VSVF9XSURHRVRdW0FQSV1bVXBzZXJ0V2lkZ2V0XSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbVVBTRVJUX1dJREdFVF1bQVBJXVtVcHNlcnRXaWRnZXRdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9XSURHRVRfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRXaWRnZXRTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX1dJREdFVF9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogV2lkZ2V0TW9kZWw8YW55Pikge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0V2lkZ2V0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX1dJREdFVF9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVwc2VydFdpZGdldEFjdGlvbnMgPSBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbiB8IFVwc2VydFdpZGdldFN1Y2NlZWRBY3Rpb24gfCBVcHNlcnRXaWRnZXRGYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IElNb2R1bGVDb25maWdNYXBUeXBlcyB9IGZyb20gXCIuL21vZGVscy9tb2R1bGUtY29uZmlnLW1hcC10eXBlcy5pbnRlcmZjZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaWRnZXRNb2R1bGVDb25maWcge1xyXG5cdGRldmVsb3BtZW50X3VyaT86IHN0cmluZztcclxuXHRwcm9kdWN0aW9uX3VyaT86IHN0cmluZztcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcblx0fTtcclxuXHRlbmRwb2ludHM/OiB7XHJcblx0XHRnZXQ6IHN0cmluZztcclxuXHRcdGZpbmQ6IHN0cmluZztcclxuXHRcdHVwc2VydDogc3RyaW5nO1xyXG5cdH07XHJcblx0dHlwZXM/OiBJTW9kdWxlQ29uZmlnTWFwVHlwZXM7XHJcbn1cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogV2lkZ2V0TW9kdWxlQ29uZmlnID0ge1xyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2UsXHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IFwiZnJvbnRlbmRfc2VydmVyL2RpZC9ub3Qvc2V0XCJcclxuXHR9LFxyXG5cdGVuZHBvaW50czoge1xyXG5cdFx0dXBzZXJ0OiBcIi9hcGkvdWl3aWRnZXRcIixcclxuXHRcdGZpbmQ6IFwiL2FwaS91aXdpZGdldFwiLFxyXG5cdFx0Z2V0OiBcIi9hcGkvdWl3aWRnZXQvJHttb2RlbC5faWR9XCJcclxuXHR9LFxyXG5cdHR5cGVzOiB7fVxyXG59O1xyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxXaWRnZXRNb2R1bGVDb25maWc+KFwiV2lkZ2V0TW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kdWxlQ29uZmlnLCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi4vd2lkZ2V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogV2lkZ2V0TW9kdWxlQ29uZmlnO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cdH1cclxuXHRjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdChNT0RVTEVfREVGQVVMVF9DT05GSUcpO1xyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIHRoaXMuc3RvcmUuc2VsZWN0KGdldFdpZGdldE1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKCh3aWRnZXRDb25maWcpID0+IHtcclxuXHRcdC8vIFx0aWYgKCF3aWRnZXRDb25maWcpIHtcclxuXHRcdC8vIFx0XHRyZXR1cm47XHJcblx0XHQvLyBcdH1cclxuXHRcdC8vIFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCB3aWRnZXRDb25maWcuQ29uZmlnKTtcclxuXHRcdC8vIFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgdGFwLCB0YWtlLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuLi93aWRnZXQucmVkdWNlcic7XHJcbmltcG9ydCB7IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi93aWRnZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsJztcclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tICdAc291c2hpYW5zL3NoYXJlZCc7XHJcbmltcG9ydCB7IEdldFdpZGdldHNBcGlNb2RlbCwgR2V0V2lkZ2V0U3RhcnRBY3Rpb24sIFVwc2VydFdpZGdldEFwaU1vZGVsIH0gZnJvbSAnLi9hcGknO1xyXG5cclxuLy8gaW1wb3J0IHsgZ2V0V2lkZ2V0TW9kdWxlQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3dpZGdldC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuLy8gaW1wb3J0IHsgV2lkZ2V0UnVuU3VjY2Vzc2Z1bGx5QWN0aW9uIH0gZnJvbSBcIi4uL3dpZGdldC5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXRTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7fVxyXG5cclxuXHRnZXQ8VD4oX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPFQ+PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmdldCAhPT0gJycpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGNvbmZpZykgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAuZ2V0KHN0cmluZ1RlbXBsYXRlKGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5nZXQsIHsgX2lkIH0pKVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBVcHNlcnRXaWRnZXRBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGdldFdpZGdldHMoKTogT2JzZXJ2YWJsZTxXaWRnZXRNb2RlbDxhbnk+W10+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZmluZCAhPSAnJyksXHJcblx0XHRcdHN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5maW5kKSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IEdldFdpZGdldHNBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0dXBzZXJ0PFQ+KHdpZGdldDogVXBzZXJ0V2lkZ2V0QXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8VD4+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IFVwc2VydFdpZGdldEFwaU1vZGVsLlJlcXVlc3Qod2lkZ2V0KTtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMudXBzZXJ0ICE9ICcnKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0c3dpdGNoTWFwKChjb25maWcpID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLnBvc3QoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLnVwc2VydCwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSlcclxuXHRcdFx0KSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogVXBzZXJ0V2lkZ2V0QXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cdC8vIGRlbGV0ZShfaWQ6IHN0cmluZykge1xyXG5cdC8vIFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJFxyXG5cdC8vIFx0XHQuZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlRm9ybSAhPSBcIlwiKVxyXG5cdC8vIFx0XHQuc3dpdGNoTWFwKChjb25maWcpID0+IHRoaXMuaHR0cC5nZXQoY29uZmlnLmVuZHBvaW50cy5kZWxldGVGb3JtKSk7XHJcblx0Ly8gfVxyXG5cdHNlbGVjdEJ5SWQ8VD4oX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPFQ+PiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxXaWRnZXRNb2RlbDxUPj4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLndpZGdldHMuZGIuZGF0YSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0ZmlsdGVyKCh3aWRnZXRzKSA9PiB3aWRnZXRzICE9IG51bGwpLFxyXG5cdFx0XHRcdG1hcCgod2lkZ2V0cykgPT4gd2lkZ2V0cy5maW5kKCh3aWRnZXQpID0+IHdpZGdldC5faWQgPT0gX2lkKSksXHJcblx0XHRcdFx0dGFwKCh3aWRnZXQpID0+IHtcclxuXHRcdFx0XHRcdGlmICh3aWRnZXQgPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRXaWRnZXRTdGFydEFjdGlvbihfaWQpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoKHdpZGdldCkgPT4gc3ViamVjdC5uZXh0KHdpZGdldCkpO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRDb21wb25lbnRSZWYsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0RGlyZWN0aXZlLFxyXG5cdElucHV0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgcGx1Y2ssIGZpbHRlciwgc3dpdGNoTWFwLCBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBJTW9kdWxlQ29uZmlnTWFwVHlwZXMgfSBmcm9tIFwiLi4vbW9kZWxzL21vZHVsZS1jb25maWctbWFwLXR5cGVzLmludGVyZmNlXCI7XHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvd2lkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvd2lkZ2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwid2lkZ2V0XCIsXHJcblx0dGVtcGxhdGU6IFwiXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNXaWRnZXRWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBvaWQoaWQ6IHN0cmluZykge1xyXG5cdFx0dGhpcy5fc2VsZWN0V2lkZ2V0KGlkKTtcclxuXHR9XHJcblx0d2lkZ2V0JDogT2JzZXJ2YWJsZTxXaWRnZXRNb2RlbDxhbnk+PjtcclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cdG1hcFR5cGVUb0NvbXBvbmVudDogSU1vZHVsZUNvbmZpZ01hcFR5cGVzO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXHJcblx0KSB7XHJcblx0XHR0aGlzLl9maWxsX2NvbXBvbmVudF9tYXAoKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLndpZGdldCQucGlwZShmaWx0ZXIod2lkZ2V0ID0+IHdpZGdldCAhPSB1bmRlZmluZWQpKS5zdWJzY3JpYmUod2lkZ2V0ID0+IHtcclxuXHRcdFx0dGhpcy5fcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHdpZGdldCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0X2ZpbGxfY29tcG9uZW50X21hcCgpIHtcclxuXHRcdHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKG1hcChjb25maWcgPT4gY29uZmlnLnR5cGVzKSwgc3RhcnRXaXRoKHt9KSkuc3Vic2NyaWJlKHR5cGVzID0+IHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRoaXMubWFwVHlwZVRvQ29tcG9uZW50ID0gdHlwZXM7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0X3NlbGVjdFdpZGdldChpZDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLndpZGdldCQgPSB0aGlzLnNlcnZpY2Uuc2VsZWN0QnlJZDxhbnk+KGlkKTtcclxuXHR9XHJcblx0X3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh3aWRnZXQpIHtcclxuXHRcdGlmICghdGhpcy5tYXBUeXBlVG9Db21wb25lbnRbd2lkZ2V0LnR5cGVdKSB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRjb25zdCBzdXBwb3J0ZWRUeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMubWFwVHlwZVRvQ29tcG9uZW50KS5qb2luKFwiLCBcIik7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHRgVHJ5aW5nIHRvIHVzZSBhbiB1bnN1cHBvcnRlZCB0eXBlICgke3dpZGdldC50eXBlfSkuXHJcblx0XHQgIFx0XHQgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt3aWRnZXQudHlwZV0udmlldyk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG5cdFx0dGhpcy53aWRnZXQkLnN1YnNjcmliZSh3ID0+ICh0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS53aWRnZXQgPSB3KSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IElHcmlkSXRlbUNvbXBvbmVudCB9IGZyb20gXCJAc291c2hpYW5zL2dyaWRcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgSVdpZGdldFZpZXdJbnB1dEludGVyZmFjZSB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0LXZpZXctaW5wdXQuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3dpZGdldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdldFdpZGdldHNTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cImNvbHVtbiB3cmFwXCIgZnhMYXlvdXRHYXA9XCIxNXB4XCI+XHJcbiAgPGg0PsOZwoTDm8KMw5jCs8OYwqogw5nCiMObwozDmMKsw5jCqsOiwoDCjMOZwofDmMKnPC9oND5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiMTAwXCI+XHJcbjxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiw5nChsOZwojDmMK5IMOZwojDm8KMw5jCrMOYwqpcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkV2lkZ2V0SWRcIiBuYW1lPVwic2VsZWN0ZWRXaWRnZXRJZFwiPlxyXG4gIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mICh3aWRnZXRzJCB8IGFzeW5jKVwiIFt2YWx1ZV09XCJpdGVtLl9pZFwiPlxyXG4gICAge3tpdGVtLnR5cGV9fSA6IDxiPnt7aXRlbS5uYW1lfX08L2I+XHJcbiAgPC9tYXQtb3B0aW9uPlxyXG48L21hdC1zZWxlY3Q+IFxyXG48L21hdC1mb3JtLWZpZWxkPlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXRTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSUdyaWRJdGVtQ29tcG9uZW50PElXaWRnZXRWaWV3SW5wdXRJbnRlcmZhY2U+IHtcclxuXHR3aWRnZXRzJDogT2JzZXJ2YWJsZTxXaWRnZXRNb2RlbDxhbnk+W10+O1xyXG5cdHNlbGVjdGVkV2lkZ2V0SWQ6IHN0cmluZztcclxuXHRnZXQgdmFsaWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWcub2lkICE9IHVuZGVmaW5lZDtcclxuXHR9XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG9pZDogdGhpcy5zZWxlY3RlZFdpZGdldElkXHJcblx0XHR9O1xyXG5cdH1cclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy53aWRnZXRzJCA9IHRoaXMuc3RvcmUuc2VsZWN0KHN0YXRlID0+IHN0YXRlLndpZGdldHMuZGIuZGF0YSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0V2lkZ2V0c1N0YXJ0QWN0aW9uKCkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwid2lkZ2V0LXJvb3RcIixcclxuXHR0ZW1wbGF0ZTogXCI8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3RDb21wb25lbnQge31cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHZXRXaWRnZXRzU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL2dldC13aWRnZXRzL2dldC13aWRnZXRzLmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICA8ZGl2IGZYRmxleD1cIjMwXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiPlxyXG4gICAgPGJ1dHRvbiBmeEZsZXg9XCIxMDBcIiBjb2xvcj1cInByaW1hcnlcIiBtYXQtcmFpc2VkLWJ1dHRvbiByb3V0ZXJMaW5rPVwiLi4vdXBzZXJ0L2FydGljbGVcIj5cclxuICAgICAgQWRkIEFydGljbGVcclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBmeEZsZXg9XCIxMDBcIiBjb2xvcj1cInByaW1hcnlcIiBtYXQtcmFpc2VkLWJ1dHRvbiByb3V0ZXJMaW5rPVwiLi4vdXBzZXJ0L2xpbmtzXCI+XHJcbiAgICAgIEFkZCBMaW5rc1xyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBmeEZsZXg9XCI3MFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgIDxtYXQtY2FyZCBjbGFzcz1cImNhcmRzLWl0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiAod2lkZ2V0cyQgfCBhc3luYylcIiBmeEZsZXg9XCIzM1wiIGZ4TGF5b3V0PVwicm93XCI+XHJcbiAgICAgIDxkaXYgZnhGbGV4PlxyXG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnLi4vdXBzZXJ0JyAsICBpdGVtLnR5cGUsICBpdGVtLl9pZF1cIj5cclxuICAgICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiZWRpdCB3aWRnZXRcIj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGZ4RmxleD5cclxuICAgICAgICB7e2l0ZW0ubmFtZX19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGZ4RmxleD5cclxuICAgICAgICB7e2l0ZW0udHlwZX19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0c01hbmFnZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHdpZGdldHMkOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPGFueT5bXT47XHJcblx0Y29uc3RydWN0b3IocHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMud2lkZ2V0cyQgPSB0aGlzLnN0b3JlLnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLndpZGdldHMuZGIuZGF0YSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0V2lkZ2V0c1N0YXJ0QWN0aW9uKCkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgIDxkaXYgZnhGbGV4PVwiNTBcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyIG5nc0R5bmFtaWNXaWRnZXRDb25maWc+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0Q29tcG9uZW50IHt9XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFJvb3RDb21wb25lbnQgfSBmcm9tIFwiLi9yb290L3Jvb3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFdpZGdldHNNYW5hZ2VtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vbWFuZ2VtZW50L3dpZGdldC1tYW5hZ2VtZW50LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVcHNlcnRDb21wb25lbnQgfSBmcm9tIFwiLi91cHNlcnQvdXBzZXJ0LmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogXCJ3aWRnZXRcIixcclxuXHRcdGNvbXBvbmVudDogUm9vdENvbXBvbmVudCxcclxuXHRcdGNoaWxkcmVuOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcIm1hbmFnZW1lbnRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFdpZGdldHNNYW5hZ2VtZW50Q29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInVwc2VydC86dHlwZVwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogVXBzZXJ0Q29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInVwc2VydC86dHlwZS86X2lkXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBVcHNlcnRDb21wb25lbnRcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBXaWRnZXRSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3dpZGdldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0R0VUX1dJREdFVF9BQ1RJT05fVFlQRVMsXHJcblx0R2V0V2lkZ2V0QWN0aW9ucyxcclxuXHRHZXRXaWRnZXRTdWNjZWVkQWN0aW9uLFxyXG5cdEdldFdpZGdldEZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL2dldC13aWRnZXQuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0QXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxHZXRXaWRnZXRBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBXaWRnZXRTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9XSURHRVRfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcCgoYWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgocGF5bG9hZCkgPT4gdGhpcy5zZXJ2aWNlLmdldChwYXlsb2FkKSksXHJcblx0XHRcdG1hcCgocmVzKSA9PiBuZXcgR2V0V2lkZ2V0U3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgR2V0V2lkZ2V0RmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0U2VydmljZSB9IGZyb20gXCIuLi8uLi93aWRnZXQuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG5cdFVQU0VSVF9XSURHRVRfQUNUSU9OX1RZUEVTLFxyXG5cdFVwc2VydFdpZGdldEFjdGlvbnMsXHJcblx0VXBzZXJ0V2lkZ2V0U3VjY2VlZEFjdGlvbixcclxuXHRVcHNlcnRXaWRnZXRGYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi91cHNlcnQtd2lkZ2V0LmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVwc2VydFdpZGdldEFwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8VXBzZXJ0V2lkZ2V0QWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogV2lkZ2V0U2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShVUFNFUlRfV0lER0VUX0FDVElPTl9UWVBFUy5TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoKGFjdGlvbikgPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKHBheWxvYWQpID0+IHRoaXMuc2VydmljZS51cHNlcnQocGF5bG9hZCkpLFxyXG5cdFx0XHRtYXAoKHJlcykgPT4gbmV3IFVwc2VydFdpZGdldFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IFVwc2VydFdpZGdldEZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vd2lkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMsXHJcblx0R2V0V2lkZ2V0c0FjdGlvbnMsXHJcblx0R2V0V2lkZ2V0c1N1Y2NlZWRBY3Rpb24sXHJcblx0R2V0V2lkZ2V0c0ZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL2dldC13aWRnZXRzLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdldFdpZGdldHNBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPEdldFdpZGdldHNBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBXaWRnZXRTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUy5TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRzd2l0Y2hNYXAoKCkgPT5cclxuXHRcdFx0XHR0aGlzLnNlcnZpY2VcclxuXHRcdFx0XHRcdC5nZXRXaWRnZXRzKClcclxuXHRcdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0XHRtYXAoKHJlcykgPT4gbmV3IEdldFdpZGdldHNTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRcdFx0XHRjYXRjaEVycm9yKChlcnIpID0+IG9mKG5ldyBHZXRXaWRnZXRzRmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gV2lkZ2V0c0FjdGlvblR5cGVzIHtcclxuXHRVUFNFUlQgPSBcIltXSURHRVRdW0RCXSBVUFNFUlRcIixcclxuXHRERUxFVEUgPSBcIltXSURHRVRdW0RCXSBERUxFVEVcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0V2lkZ2V0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gV2lkZ2V0c0FjdGlvblR5cGVzLlVQU0VSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogV2lkZ2V0TW9kZWw8YW55PltdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVXaWRnZXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBXaWRnZXRzQWN0aW9uVHlwZXMuREVMRVRFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBXaWRnZXRzQWN0aW9ucyA9IFVwc2VydFdpZGdldEFjdGlvbiB8IERlbGV0ZVdpZGdldEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBXaWRnZXRzQWN0aW9ucywgV2lkZ2V0c0FjdGlvblR5cGVzIH0gZnJvbSBcIi4vd2lkZ2V0LmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGRhdGE6IFdpZGdldE1vZGVsPGFueT5bXTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRkYXRhOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogV2lkZ2V0c0FjdGlvbnMpOiBTdGF0ZSB7XHJcblx0bGV0IF9kYXRhOiBXaWRnZXRNb2RlbDxhbnk+W107XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBXaWRnZXRzQWN0aW9uVHlwZXMuVVBTRVJUOlxyXG5cdFx0XHRfZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdGNvbnN0IG5ld1dpZGdldHMgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcblx0XHRcdG5ld1dpZGdldHMuZm9yRWFjaChuZXdXaWRnZXQgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGV4aXN0ZWRXaWRnZXRJbmRleCA9IF9kYXRhLmZpbmRJbmRleCh3ID0+IHcuX2lkID09IG5ld1dpZGdldC5faWQpO1xyXG5cdFx0XHRcdGlmIChleGlzdGVkV2lkZ2V0SW5kZXggPiAtMSkge1xyXG5cdFx0XHRcdFx0X2RhdGEuc3BsaWNlKGV4aXN0ZWRXaWRnZXRJbmRleCwgMSwgbmV3V2lkZ2V0KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0X2RhdGEucHVzaChuZXdXaWRnZXQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IF9kYXRhXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBXaWRnZXRzQWN0aW9uVHlwZXMuREVMRVRFOlxyXG5cdFx0XHRfZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmRhdGEpO1xyXG5cclxuXHRcdFx0Y29uc3Qgd2lkZ2V0SW5kZXggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleCh3ID0+IHcuX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdF9kYXRhLnNwbGljZSh3aWRnZXRJbmRleCwgMSk7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IF9kYXRhXHJcblx0XHRcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFdpZGdldHMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG4iLCJpbXBvcnQgKiBhcyBmcm9tUm9vdCBmcm9tIFwiLi9yb290L3dpZGdldHMucmVkdWNlcnNcIjtcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuZXhwb3J0IGludGVyZmFjZSBXaWRnZXRTdGF0ZSB7XHJcblx0ZGI6IGZyb21Sb290LlN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgV2lkZ2V0UmVkdWNlciA9IHtcclxuXHRkYjogZnJvbVJvb3QuUmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XHJcblx0d2lkZ2V0czogV2lkZ2V0U3RhdGU7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgcGx1Y2sgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IEdFVF9XSURHRVRfQUNUSU9OX1RZUEVTLCBHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0QWN0aW9uIH0gZnJvbSBcIi4vd2lkZ2V0LmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdpZGdldERiRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+KSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfV0lER0VUX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKHdpZGdldDogV2lkZ2V0TW9kZWw8YW55PikgPT4gbmV3IFVwc2VydFdpZGdldEFjdGlvbihbIHdpZGdldCBdKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnRNYW55JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTLlNVQ0NFRUQpXHJcblx0XHQucGlwZShwbHVjayhcInBheWxvYWRcIiksIG1hcCgod2lkZ2V0czogV2lkZ2V0TW9kZWw8YW55PltdKSA9PiBuZXcgVXBzZXJ0V2lkZ2V0QWN0aW9uKHdpZGdldHMpKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENvbXBvbmVudFJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBWaWV3Q29udGFpbmVyUmVmLCBEaXJlY3RpdmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgcGx1Y2ssIGZpbHRlciwgc3dpdGNoTWFwLCBtYXAsIHN0YXJ0V2l0aCwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3dpZGdldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvd2lkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvd2lkZ2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBJTW9kdWxlQ29uZmlnTWFwVHlwZXMgfSBmcm9tIFwiLi4vbW9kZWxzL21vZHVsZS1jb25maWctbWFwLXR5cGVzLmludGVyZmNlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogXCJbbmdzRHluYW1pY1dpZGdldENvbmZpZ11cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY1dpZGdldENvbmZpZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PjtcclxuXHRtYXBUeXBlVG9Db21wb25lbnQ6IElNb2R1bGVDb25maWdNYXBUeXBlcztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXHJcblx0KSB7XHJcblx0XHR0aGlzLl9maWxsX2NvbXBvbmVudF9tYXAoKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLl9yZWFjdF9iYXNlX29uX3BhcmFtcygpO1xyXG5cdH1cclxuXHRfZmlsbF9jb21wb25lbnRfbWFwKCkge1xyXG5cdFx0dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUobWFwKChjb25maWcpID0+IGNvbmZpZy50eXBlcyksIHN0YXJ0V2l0aCh7fSkpLnN1YnNjcmliZSgodHlwZXMpID0+IHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRoaXMubWFwVHlwZVRvQ29tcG9uZW50ID0gdHlwZXM7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0X3JlYWN0X2Jhc2Vfb25fcGFyYW1zKCkge1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKCh7IHR5cGUsIF9pZCB9KSA9PiB7XHJcblx0XHRcdGlmIChfaWQpIHtcclxuXHRcdFx0XHR0aGlzLnNlcnZpY2Uuc2VsZWN0QnlJZDxhbnk+KF9pZCkuc3Vic2NyaWJlKCh3aWRnZXQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuX3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh0eXBlLCB3aWRnZXQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuX3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh0eXBlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUodHlwZTogc3RyaW5nLCB3aWRnZXQ/OiBXaWRnZXRNb2RlbDxhbnk+KSB7XHJcblx0XHRpZiAodGhpcy5jb21wb25lbnQpIHtcclxuXHRcdFx0dGhpcy5jb21wb25lbnQuZGVzdHJveSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghdGhpcy5tYXBUeXBlVG9Db21wb25lbnRbdHlwZV0pIHtcclxuXHRcdFx0Y29uc3Qgc3VwcG9ydGVkVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCkuam9pbihcIiwgXCIpO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoJHt0eXBlfSkuXHJcblx0XHQgIFx0XHQgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt0eXBlXS51cHNlcnQpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdC8vIHRoaXMud2lkZ2V0JC5zdWJzY3JpYmUoKHcpID0+ICh0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS53aWRnZXQgPSB3KSk7XHJcblx0XHRpZiAod2lkZ2V0KSB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS53aWRnZXQgPSB3aWRnZXQ7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRDb21wb25lbnRSZWYsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0RGlyZWN0aXZlLFxyXG5cdElucHV0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgcGx1Y2ssIGZpbHRlciwgc3dpdGNoTWFwLCBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgV2lkZ2V0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy93aWRnZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy93aWRnZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElNb2R1bGVDb25maWdNYXBUeXBlcyB9IGZyb20gXCIuLi9tb2RlbHMvbW9kdWxlLWNvbmZpZy1tYXAtdHlwZXMuaW50ZXJmY2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiBcIltuZ3NEeW5hbWljV2lkZ2V0Vmlld11cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY1dpZGdldFZpZXdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IG9pZChpZDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLl9zZWxlY3RXaWRnZXQoaWQpO1xyXG5cdH1cclxuXHR3aWRnZXQkOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPGFueT4+O1xyXG5cdGNvbXBvbmVudDogQ29tcG9uZW50UmVmPGFueT47XHJcblx0bWFwVHlwZVRvQ29tcG9uZW50OiBJTW9kdWxlQ29uZmlnTWFwVHlwZXM7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwdWJsaWMgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG5cdFx0cHJpdmF0ZSBzZXJ2aWNlOiBXaWRnZXRTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0XHRwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZlxyXG5cdCkge1xyXG5cdFx0dGhpcy5fZmlsbF9jb21wb25lbnRfbWFwKCk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy53aWRnZXQkLnBpcGUoZmlsdGVyKHdpZGdldCA9PiB3aWRnZXQgIT0gdW5kZWZpbmVkKSkuc3Vic2NyaWJlKHdpZGdldCA9PiB7XHJcblx0XHRcdHRoaXMuX3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh3aWRnZXQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9maWxsX2NvbXBvbmVudF9tYXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShtYXAoY29uZmlnID0+IGNvbmZpZy50eXBlcyksIHN0YXJ0V2l0aCh7fSkpLnN1YnNjcmliZSh0eXBlcyA9PiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHR0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCA9IHR5cGVzO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9zZWxlY3RXaWRnZXQoaWQ6IHN0cmluZykge1xyXG5cdFx0dGhpcy53aWRnZXQkID0gdGhpcy5zZXJ2aWNlLnNlbGVjdEJ5SWQ8YW55PihpZCk7XHJcblx0fVxyXG5cdF9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUod2lkZ2V0KSB7XHJcblx0XHRpZiAoIXRoaXMubWFwVHlwZVRvQ29tcG9uZW50W3dpZGdldC50eXBlXSkge1xyXG5cdFx0XHRjb25zdCBzdXBwb3J0ZWRUeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMubWFwVHlwZVRvQ29tcG9uZW50KS5qb2luKFwiLCBcIik7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHRgVHJ5aW5nIHRvIHVzZSBhbiB1bnN1cHBvcnRlZCB0eXBlICgke3dpZGdldC50eXBlfSkuXHJcblx0XHQgIFx0XHQgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt3aWRnZXQudHlwZV0udmlldyk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG5cdFx0dGhpcy53aWRnZXQkLnN1YnNjcmliZSh3ID0+ICh0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS53aWRnZXQgPSB3KSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmVEZXZ0b29sc01vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZS1kZXZ0b29sc1wiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdFRhYnNNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRNYXRDaGVja2JveCxcclxuXHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRNYXRUYWJsZU1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy93aWRnZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy93aWRnZXQuc2VydmljZVwiO1xyXG4vLyBpbXBvcnQgeyBXaWRnZXRSZWR1Y2VyIH0gZnJvbSBcIi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgV2lkZ2V0TW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vd2lkZ2V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBXaWRnZXRSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vd2lkZ2V0LXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IFJvb3RDb21wb25lbnQgfSBmcm9tIFwiLi9yb290L3Jvb3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEdldFdpZGdldEFwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldC9nZXQtd2lkZ2V0LmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0QXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS91cHNlcnQtd2lkZ2V0L3Vwc2VydC13aWRnZXQuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBHZXRXaWRnZXRzQXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0cy9nZXQtd2lkZ2V0cy5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFdpZGdldFJlZHVjZXIgfSBmcm9tIFwiLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBXaWRnZXREYkVmZmVjdHMgfSBmcm9tIFwiLi9yb290L3dpZGdldHMuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBXaWRnZXRzTWFuYWdlbWVudENvbXBvbmVudCB9IGZyb20gXCIuL21hbmdlbWVudC93aWRnZXQtbWFuYWdlbWVudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXBzZXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vdXBzZXJ0L3Vwc2VydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRHluYW1pY1dpZGdldENvbmZpZ0RpcmVjdGl2ZSB9IGZyb20gXCIuL3Vwc2VydC9keW5hbWljLXdpZGdldC1jb25maWcuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IER5bmFtaWNXaWRnZXRWaWV3RGlyZWN0aXZlIH0gZnJvbSBcIi4vdmlldy9keW5hbWljLXdpZGdldC12aWV3LmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gXCIuL3dpZGdldC1zZWxlY3Rvci93aWRnZXQtc2VsZWN0b3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IER5bmFtaWNXaWRnZXRWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9keW5hbWljLXdpZGdldC12aWV3LmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRUYWJzTW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0XHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdFx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0XHRNYXRUYWJsZU1vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRSb290Q29tcG9uZW50LFxyXG5cdFx0V2lkZ2V0c01hbmFnZW1lbnRDb21wb25lbnQsXHJcblx0XHRVcHNlcnRDb21wb25lbnQsXHJcblx0XHREeW5hbWljV2lkZ2V0Q29uZmlnRGlyZWN0aXZlLFxyXG5cdFx0RHluYW1pY1dpZGdldFZpZXdEaXJlY3RpdmUsXHJcblx0XHRXaWRnZXRTZWxlY3RvckNvbXBvbmVudCxcclxuXHRcdER5bmFtaWNXaWRnZXRWaWV3Q29tcG9uZW50XHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFsgV2lkZ2V0U2VsZWN0b3JDb21wb25lbnQsIER5bmFtaWNXaWRnZXRWaWV3Q29tcG9uZW50IF0sXHJcblx0ZXhwb3J0czogWyBEeW5hbWljV2lkZ2V0Vmlld0RpcmVjdGl2ZSwgV2lkZ2V0U2VsZWN0b3JDb21wb25lbnQsIER5bmFtaWNXaWRnZXRWaWV3Q29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc1dpZGdldE1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogV2lkZ2V0TW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogTmdzV2lkZ2V0Um9vdE1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9LCBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSwgV2lkZ2V0U2VydmljZSBdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHROZ3NXaWRnZXRNb2R1bGUsXHJcblx0XHRXaWRnZXRSb3V0aW5nTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcIndpZGdldHNcIiwgV2lkZ2V0UmVkdWNlciksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBXaWRnZXREYkVmZmVjdHMsIEdldFdpZGdldEFwaUVmZmVjdHMsIEdldFdpZGdldHNBcGlFZmZlY3RzLCBVcHNlcnRXaWRnZXRBcGlFZmZlY3RzIF0pXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIE5nc1dpZGdldE1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NXaWRnZXRSb290TW9kdWxlIHt9XHJcbiIsImltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4vd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSVdpZGdldFZpZXc8VD4ge1xyXG5cdHdpZGdldDogV2lkZ2V0TW9kZWw8VD47XHJcbn1cclxuIiwiaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi93aWRnZXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJV2lkZ2V0VXBzZXJ0PFQ+IHtcclxuXHR3aWRnZXQ6IFdpZGdldE1vZGVsPFQ+O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJmcm9tUm9vdC5SZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFpQixrQkFBa0I7QUFBbkMsV0FBaUIsa0JBQWtCO0lBQ2xDLElBQUE7UUFDQyxpQkFBWSxTQUFjO1lBQWQsMEJBQUEsRUFBQSxjQUFjO1lBQTFCLGlCQUVDO1lBREEsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksUUFBQyxLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFDLENBQUMsQ0FBQztTQUNwRTs7OztRQUVELGdDQUFjOzs7UUFBZDtZQUNDLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7c0JBVkg7UUFXRSxDQUFBO0lBUlksMEJBQU87SUFVcEIsSUFBQTtRQUVDO1NBQWdCO3VCQWZsQjtRQWdCRSxDQUFBO0lBSFksMkJBQVE7R0FYTCxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBZWxDOzs7Ozs7QUNORCxJQUFBOzs7O2dDQVhBO0lBYUMsQ0FBQTtBQUZELEFBR0EsSUFBQTtJQUVDLGlDQUFtQixPQUEyQjtRQUEzQixZQUFPLEdBQVAsT0FBTyxDQUFvQjs7S0FBSTtrQ0FoQm5EO0lBaUJDLENBQUE7QUFIRCxBQUlBLElBQUE7SUFFQyxnQ0FBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7O0tBQUk7aUNBcEJwQztJQXFCQyxDQUFBOzs7Ozs7Ozs7OztBQ25CRCxJQUFpQixpQkFBaUI7QUFBbEMs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