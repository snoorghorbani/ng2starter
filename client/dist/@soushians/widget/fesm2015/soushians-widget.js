import { InjectionToken, Injectable, Inject, Component, ComponentFactoryResolver, ViewContainerRef, Input, Directive, NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { filter, take, switchMap, map, tap, startWith, pluck, catchError } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { stringTemplate } from '@soushians/shared';
import { Location, CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule, MatMenuModule } from '@angular/material';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { __decorate, __metadata } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const UPSERT_WIDGET_ACTION_TYPES = {
    START: "[UPSERT_WIDGET][API][UpsertWidget] start",
    SUCCEED: "[UPSERT_WIDGET][API][UpsertWidget] succeed",
    FAILED: "[UPSERT_WIDGET][API][UpsertWidget] failed",
};
class UpsertWidgetStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_WIDGET][API][UpsertWidget] start" /* START */;
    }
}
if (false) {
    /** @type {?} */
    UpsertWidgetStartAction.prototype.type;
    /** @type {?} */
    UpsertWidgetStartAction.prototype.payload;
}
class UpsertWidgetSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_WIDGET][API][UpsertWidget] succeed" /* SUCCEED */;
    }
}
if (false) {
    /** @type {?} */
    UpsertWidgetSucceedAction.prototype.type;
    /** @type {?} */
    UpsertWidgetSucceedAction.prototype.payload;
}
class UpsertWidgetFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_WIDGET][API][UpsertWidget] failed" /* FAILED */;
    }
}
if (false) {
    /** @type {?} */
    UpsertWidgetFailedAction.prototype.type;
    /** @type {?} */
    UpsertWidgetFailedAction.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function WidgetModuleConfig() { }
if (false) {
    /** @type {?|undefined} */
    WidgetModuleConfig.prototype.development_uri;
    /** @type {?|undefined} */
    WidgetModuleConfig.prototype.production_uri;
    /** @type {?|undefined} */
    WidgetModuleConfig.prototype.env;
    /** @type {?|undefined} */
    WidgetModuleConfig.prototype.endpoints;
    /** @type {?|undefined} */
    WidgetModuleConfig.prototype.types;
}
/** @type {?} */
const MODULE_DEFAULT_CONFIG = {
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
const MODULE_CONFIG_TOKEN = new InjectionToken("WidgetModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WidgetConfigurationService {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    constructor(configFile, store) {
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
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
}
WidgetConfigurationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
WidgetConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    WidgetConfigurationService.prototype._config;
    /** @type {?} */
    WidgetConfigurationService.prototype.config$;
    /**
     * @type {?}
     * @private
     */
    WidgetConfigurationService.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GetWidgetsApiModel;
(function (GetWidgetsApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = {}) {
            Object.keys(initValue).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => (this[key] = initValue[key])));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {};
        }
    }
    GetWidgetsApiModel.Request = Request;
    class Response {
        constructor() { }
    }
    GetWidgetsApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(GetWidgetsApiModel || (GetWidgetsApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const GET_WIDGETS_ACTION_TYPES = {
    START: "[GET_WIDGETS][API][GetWidgets] start",
    SUCCEED: "[GET_WIDGETS][API][GetWidgets] succeed",
    FAILED: "[GET_WIDGETS][API][GetWidgets] failed",
};
class GetWidgetsStartAction {
    constructor() {
        this.type = "[GET_WIDGETS][API][GetWidgets] start" /* START */;
    }
}
if (false) {
    /** @type {?} */
    GetWidgetsStartAction.prototype.type;
}
class GetWidgetsSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GET_WIDGETS][API][GetWidgets] succeed" /* SUCCEED */;
    }
}
if (false) {
    /** @type {?} */
    GetWidgetsSucceedAction.prototype.type;
    /** @type {?} */
    GetWidgetsSucceedAction.prototype.payload;
}
class GetWidgetsFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GET_WIDGETS][API][GetWidgets] failed" /* FAILED */;
    }
}
if (false) {
    /** @type {?} */
    GetWidgetsFailedAction.prototype.type;
    /** @type {?} */
    GetWidgetsFailedAction.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GetWidgetApiModel;
(function (GetWidgetApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = {}) {
            Object.keys(initValue).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => (this[key] = initValue[key])));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {};
        }
    }
    GetWidgetApiModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype._id;
    }
    class Response {
        constructor() { }
    }
    GetWidgetApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(GetWidgetApiModel || (GetWidgetApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const GET_WIDGET_ACTION_TYPES = {
    START: "[WIDGET][API][GetWidget] start",
    SUCCEED: "[WIDGET][API][GetWidget] succeed",
    FAILED: "[WIDGET][API][GetWidget] failed",
};
class GetWidgetStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[WIDGET][API][GetWidget] start" /* START */;
    }
}
if (false) {
    /** @type {?} */
    GetWidgetStartAction.prototype.type;
    /** @type {?} */
    GetWidgetStartAction.prototype.payload;
}
class GetWidgetSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[WIDGET][API][GetWidget] succeed" /* SUCCEED */;
    }
}
if (false) {
    /** @type {?} */
    GetWidgetSucceedAction.prototype.type;
    /** @type {?} */
    GetWidgetSucceedAction.prototype.payload;
}
class GetWidgetFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[WIDGET][API][GetWidget] failed" /* FAILED */;
    }
}
if (false) {
    /** @type {?} */
    GetWidgetFailedAction.prototype.type;
    /** @type {?} */
    GetWidgetFailedAction.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class WidgetModel {
    /**
     * @param {?=} __0
     */
    constructor({ _id, name, type, Config } = {}) {
        this._id = _id;
        this.name = name || "";
        this.type = type;
        this.Config = Config || ((/** @type {?} */ ({})));
    }
}
if (false) {
    /** @type {?} */
    WidgetModel.prototype._id;
    /** @type {?} */
    WidgetModel.prototype.name;
    /** @type {?} */
    WidgetModel.prototype.type;
    /** @type {?} */
    WidgetModel.prototype.Config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UpsertWidgetApiModel;
(function (UpsertWidgetApiModel) {
    class Request {
        /**
         * @param {?=} widget
         */
        constructor(widget = {}) {
            debugger;
            this.widget = new WidgetModel(widget);
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return this.widget;
        }
    }
    UpsertWidgetApiModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype.widget;
    }
    class Response {
        constructor() { }
    }
    UpsertWidgetApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(UpsertWidgetApiModel || (UpsertWidgetApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DeleteWidgetApiModel;
(function (DeleteWidgetApiModel) {
    class Request {
        /**
         * @param {?=} widget
         */
        constructor(widget = {}) {
            debugger;
            this.widget = new WidgetModel(widget);
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return this.widget;
        }
    }
    DeleteWidgetApiModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype.widget;
    }
    class Response {
        constructor() { }
    }
    DeleteWidgetApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(DeleteWidgetApiModel || (DeleteWidgetApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DELETE_WIDGET_ACTION_TYPES = {
    START: "[DELETE_WIDGET][API][DeleteWidget] start",
    SUCCEED: "[DELETE_WIDGET][API][DeleteWidget] succeed",
    FAILED: "[DELETE_WIDGET][API][DeleteWidget] failed",
};
class DeleteWidgetStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[DELETE_WIDGET][API][DeleteWidget] start" /* START */;
    }
}
if (false) {
    /** @type {?} */
    DeleteWidgetStartAction.prototype.type;
    /** @type {?} */
    DeleteWidgetStartAction.prototype.payload;
}
class DeleteWidgetSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[DELETE_WIDGET][API][DeleteWidget] succeed" /* SUCCEED */;
    }
}
if (false) {
    /** @type {?} */
    DeleteWidgetSucceedAction.prototype.type;
    /** @type {?} */
    DeleteWidgetSucceedAction.prototype.payload;
}
class DeleteWidgetFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[DELETE_WIDGET][API][DeleteWidget] failed" /* FAILED */;
    }
}
if (false) {
    /** @type {?} */
    DeleteWidgetFailedAction.prototype.type;
    /** @type {?} */
    DeleteWidgetFailedAction.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WidgetService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     * @param {?} _location
     */
    constructor(http, store, configurationService, _location) {
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
    get(_id) {
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        (config) => config.endpoints.get !== "")), take(1), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        (config) => this.http.get(stringTemplate(config.env.frontend_server + config.endpoints.get, { _id })))), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.Result)));
    }
    /**
     * @return {?}
     */
    getWidgets() {
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        (config) => config.endpoints.find != "")), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        (config) => this.http.get(config.env.frontend_server + config.endpoints.find))), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.Result)));
    }
    /**
     * @template T
     * @param {?} widget
     * @return {?}
     */
    upsert(widget) {
        /** @type {?} */
        const model = new UpsertWidgetApiModel.Request(widget);
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        (config) => config.endpoints.upsert != "")), take(1), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        (config) => this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody()))), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.Result)), tap((/**
         * @return {?}
         */
        () => this._location.back())));
    }
    /**
     * @param {?} widget
     * @return {?}
     */
    delete(widget) {
        debugger;
        /** @type {?} */
        const widgetId = widget._id;
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        (config) => config.endpoints.deleteItem != "")), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        (config) => this.http.delete(stringTemplate(config.env.frontend_server + config.endpoints.deleteItem, { widgetId })).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.Result))))));
    }
    /**
     * @template T
     * @param {?} _id
     * @return {?}
     */
    selectById(_id) {
        /** @type {?} */
        const subject = new BehaviorSubject(undefined);
        this.store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        (state) => state.widgets.db.data))
            .pipe(filter((/**
         * @param {?} widgets
         * @return {?}
         */
        (widgets) => widgets != null)), map((/**
         * @param {?} widgets
         * @return {?}
         */
        (widgets) => widgets.find((/**
         * @param {?} widget
         * @return {?}
         */
        (widget) => widget._id == _id)))), tap((/**
         * @param {?} widget
         * @return {?}
         */
        (widget) => {
            if (widget == null) {
                this.store.dispatch(new GetWidgetStartAction(_id));
            }
        })))
            .subscribe((/**
         * @param {?} widget
         * @return {?}
         */
        (widget) => subject.next(widget)));
        return subject.asObservable();
    }
}
WidgetService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
WidgetService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: WidgetConfigurationService },
    { type: Location }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    WidgetService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    WidgetService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    WidgetService.prototype.configurationService;
    /**
     * @type {?}
     * @private
     */
    WidgetService.prototype._location;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DynamicWidgetViewComponent {
    /**
     * @param {?} store
     * @param {?} service
     * @param {?} configurationService
     * @param {?} resolver
     * @param {?} container
     */
    constructor(store, service, configurationService, resolver, container) {
        this.store = store;
        this.service = service;
        this.configurationService = configurationService;
        this.resolver = resolver;
        this.container = container;
        this._fill_component_map();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    set oid(id) {
        this._selectWidget(id);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.widget$.pipe(filter((/**
         * @param {?} widget
         * @return {?}
         */
        widget => widget != undefined))).subscribe((/**
         * @param {?} widget
         * @return {?}
         */
        widget => {
            this._resolve_correct_component_base_on_widget_type(widget);
        }));
    }
    /**
     * @return {?}
     */
    _fill_component_map() {
        this.configurationService.config$.pipe(map((/**
         * @param {?} config
         * @return {?}
         */
        config => config.types)), startWith({})).subscribe((/**
         * @param {?} types
         * @return {?}
         */
        types => {
            debugger;
            this.mapTypeToComponent = types;
        }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    _selectWidget(id) {
        this.widget$ = this.service.selectById(id);
    }
    /**
     * @param {?} widget
     * @return {?}
     */
    _resolve_correct_component_base_on_widget_type(widget) {
        if (!this.mapTypeToComponent[widget.type]) {
            debugger;
            /** @type {?} */
            const supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
            throw new Error(`Trying to use an unsupported type (${widget.type}).
		  		 Supported types: ${supportedTypes}`);
        }
        /** @type {?} */
        const component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[widget.type].view);
        this.component = this.container.createComponent(component);
        this.widget$.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        w => (this.component.instance.widget = w)));
    }
}
DynamicWidgetViewComponent.decorators = [
    { type: Component, args: [{
                selector: "widget",
                template: ""
            }] }
];
/** @nocollapse */
DynamicWidgetViewComponent.ctorParameters = () => [
    { type: Store },
    { type: WidgetService },
    { type: WidgetConfigurationService },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
DynamicWidgetViewComponent.propDecorators = {
    oid: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DynamicWidgetViewComponent.prototype.widget$;
    /** @type {?} */
    DynamicWidgetViewComponent.prototype.component;
    /** @type {?} */
    DynamicWidgetViewComponent.prototype.mapTypeToComponent;
    /** @type {?} */
    DynamicWidgetViewComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetViewComponent.prototype.service;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetViewComponent.prototype.configurationService;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetViewComponent.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetViewComponent.prototype.container;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WidgetSelectorComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.widgets$ = this.store.select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.widgets.db.data));
    }
    /**
     * @return {?}
     */
    get valid() {
        return this.config.oid != undefined;
    }
    /**
     * @return {?}
     */
    get config() {
        return {
            oid: this.selectedWidgetId
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.store.dispatch(new GetWidgetsStartAction());
    }
}
WidgetSelectorComponent.decorators = [
    { type: Component, args: [{
                template: "<div fxLayout=\"column wrap\" fxLayoutGap=\"15px\">\r\n  <h4>\u0644\u06CC\u0633\u062A \u0648\u06CC\u062C\u062A\u200C\u0647\u0627</h4>\r\n        <mat-form-field fxFlex=\"100\">\r\n<mat-select placeholder=\"\u0646\u0648\u0639 \u0648\u06CC\u062C\u062A\" [(ngModel)]=\"selectedWidgetId\" name=\"selectedWidgetId\">\r\n  <mat-option *ngFor=\"let item of (widgets$ | async)\" [value]=\"item._id\">\r\n    {{item.type}} : <b>{{item.name}}</b>\r\n  </mat-option>\r\n</mat-select> \r\n</mat-form-field>\r\n</div>"
            }] }
];
/** @nocollapse */
WidgetSelectorComponent.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /** @type {?} */
    WidgetSelectorComponent.prototype.widgets$;
    /** @type {?} */
    WidgetSelectorComponent.prototype.selectedWidgetId;
    /** @type {?} */
    WidgetSelectorComponent.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RootComponent {
}
RootComponent.decorators = [
    { type: Component, args: [{
                selector: "widget-root",
                template: "<router-outlet></router-outlet>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WidgetsManagementComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.widgets$ = this.store.select((/**
         * @param {?} state
         * @return {?}
         */
        (state) => state.widgets.db.data));
        this._fill_anghazi();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.store.dispatch(new GetWidgetsStartAction());
    }
    /**
     * @param {?} item
     * @return {?}
     */
    remove(item) {
        debugger;
        this.store.dispatch(new DeleteWidgetStartAction(item));
    }
    /**
     * @return {?}
     */
    _fill_anghazi() {
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
    }
}
WidgetsManagementComponent.decorators = [
    { type: Component, args: [{
                template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n  <div class=\"content-action\">\r\n    <mat-card class=\"with-sticky-action\">\r\n      <mat-card-header>\r\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n          <mat-icon>widgets</mat-icon>\r\n          <span>\u0645\u062F\u06CC\u0631\u06CC\u062A \u0627\u0641\u0632\u0648\u0646\u0647\u200C\u0647\u0627</span>\r\n        </mat-card-title>\r\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <span>\r\n            \u0627\u0641\u0632\u0648\u0646\u0647\u200C \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0631\u0627 \u0628\u0631\u0627\u0633\u0627\u0633 \u0646\u0648\u0639 \u0622\u0646 \u0627\u06CC\u062C\u0627\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F ...\r\n          </span>\r\n        </mat-card-subtitle>\r\n      </mat-card-header>\r\n\r\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\r\n\r\n        <button mat-raised-button fxFlex.gt-lg=\"19\" fxFlex.lg=\"24\" fxFlex.md=\"31.7\" fxFlex.sm=\"49\" fxFlex.xs=\"100\"\r\n          class='link' *ngFor=\"let item of (widgets$ | async)\">\r\n          <button mat-icon-button (click)=\"remove(item)\" class=\"remove-item\">\r\n            <mat-icon>delete</mat-icon>\r\n          </button>\r\n          <div class=\"link-button\" [routerLink]=\"['../upsert' ,  item.type,  item._id]\" fxLayout='column' fxLayoutAlign='space-between center'>\r\n            <mat-icon color='primary' [style.color]=\"anghazi[item.type].color\">{{anghazi[item.type].icon}}</mat-icon>\r\n            <div fxFlex=\"nogrow\" fxFlexAlign=\"stretch\" fxLayoutAlign=\"center center\" class=\"widget-type\">\r\n              {{item.type}}\r\n            </div>\r\n            <h4 class=\"title\">{{item.name}}</h4>\r\n          </div>\r\n        </button>\r\n      </div>\r\n\r\n    </mat-card>\r\n\r\n    <div fxLayout=\"column\" class=\"sticky-action\">\r\n      <a mat-mini-fab routerLink=\"../upsert/article\" [style.backgroundColor]=\"'#ffffff'\">\r\n        <mat-icon [style.color]=\"anghazi.article.color\">{{anghazi.article.icon}}</mat-icon>\r\n      </a>\r\n      <a mat-mini-fab routerLink=\"../upsert/links\" [style.backgroundColor]=\"'#ffffff'\">\r\n        <mat-icon [style.color]=\"anghazi.links.color\">{{anghazi.links.icon}}</mat-icon>\r\n      </a>\r\n      <a mat-mini-fab routerLink=\"../upsert/list\" [style.backgroundColor]=\"'#ffffff'\">\r\n        <mat-icon [style.color]=\"anghazi.list.color\">{{anghazi.list.icon}}</mat-icon>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</div>",
                styles: [".link{margin:.5%;box-sizing:border-box;position:relative;padding:0}button.link mat-icon{font-size:34px;width:34px;height:34px}.link h4{margin:0}.remove-item{position:absolute;top:0;left:0;z-index:100}.link-button{padding:25px 15px}button.link .remove-item mat-icon{font-size:initial;width:initial;height:initial;visibility:hidden;opacity:0;transition:opacity .3s ease-in-out}button.link:hover .remove-item mat-icon{visibility:visible;opacity:1}"]
            }] }
];
/** @nocollapse */
WidgetsManagementComponent.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /** @type {?} */
    WidgetsManagementComponent.prototype.anghazi;
    /** @type {?} */
    WidgetsManagementComponent.prototype.widgets$;
    /** @type {?} */
    WidgetsManagementComponent.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpsertComponent {
}
UpsertComponent.decorators = [
    { type: Component, args: [{
                template: "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"main-container\">\r\n    <div fxFlex=\"50\">\r\n        <ng-container ngsDynamicWidgetConfig></ng-container>\r\n    </div>\r\n</div>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [
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
const WidgetRoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetWidgetApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[WIDGET][API][GetWidget] start" /* START */), pluck("payload"), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.service.get(payload))), map((/**
         * @param {?} res
         * @return {?}
         */
        res => new GetWidgetSucceedAction(res))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => of(new GetWidgetFailedAction(err)))));
    }
}
GetWidgetApiEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GetWidgetApiEffects.ctorParameters = () => [
    { type: Actions },
    { type: WidgetService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], GetWidgetApiEffects.prototype, "start$", void 0);
if (false) {
    /** @type {?} */
    GetWidgetApiEffects.prototype.start$;
    /**
     * @type {?}
     * @private
     */
    GetWidgetApiEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    GetWidgetApiEffects.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UpsertWidgetApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[UPSERT_WIDGET][API][UpsertWidget] start" /* START */), pluck("payload"), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.service.upsert(payload))), map((/**
         * @param {?} res
         * @return {?}
         */
        res => new UpsertWidgetSucceedAction(res))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => of(new UpsertWidgetFailedAction(err)))));
    }
}
UpsertWidgetApiEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UpsertWidgetApiEffects.ctorParameters = () => [
    { type: Actions },
    { type: WidgetService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], UpsertWidgetApiEffects.prototype, "start$", void 0);
if (false) {
    /** @type {?} */
    UpsertWidgetApiEffects.prototype.start$;
    /**
     * @type {?}
     * @private
     */
    UpsertWidgetApiEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    UpsertWidgetApiEffects.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetWidgetsApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[GET_WIDGETS][API][GetWidgets] start" /* START */), switchMap((/**
         * @return {?}
         */
        () => this.service
            .getWidgets()
            .pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => new GetWidgetsSucceedAction(res))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => of(new GetWidgetsFailedAction(err))))))));
    }
}
GetWidgetsApiEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GetWidgetsApiEffects.ctorParameters = () => [
    { type: Actions },
    { type: WidgetService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], GetWidgetsApiEffects.prototype, "start$", void 0);
if (false) {
    /** @type {?} */
    GetWidgetsApiEffects.prototype.start$;
    /**
     * @type {?}
     * @private
     */
    GetWidgetsApiEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    GetWidgetsApiEffects.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DeleteWidgetApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[DELETE_WIDGET][API][DeleteWidget] start" /* START */), pluck("payload"), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        (payload) => this.service
            .delete(payload)
            .pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => new DeleteWidgetSucceedAction(res))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => of(new DeleteWidgetFailedAction(err))))))));
    }
}
DeleteWidgetApiEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DeleteWidgetApiEffects.ctorParameters = () => [
    { type: Actions },
    { type: WidgetService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DeleteWidgetApiEffects.prototype, "start$", void 0);
if (false) {
    /** @type {?} */
    DeleteWidgetApiEffects.prototype.start$;
    /**
     * @type {?}
     * @private
     */
    DeleteWidgetApiEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DeleteWidgetApiEffects.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const WidgetsActionTypes = {
    UPSERT: "[WIDGET][DB] UPSERT",
    DELETE: "[WIDGET][DB] DELETE",
};
class UpsertWidgetAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = WidgetsActionTypes.UPSERT;
    }
}
if (false) {
    /** @type {?} */
    UpsertWidgetAction.prototype.type;
    /** @type {?} */
    UpsertWidgetAction.prototype.payload;
}
class DeleteWidgetAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = WidgetsActionTypes.DELETE;
    }
}
if (false) {
    /** @type {?} */
    DeleteWidgetAction.prototype.type;
    /** @type {?} */
    DeleteWidgetAction.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function State() { }
if (false) {
    /** @type {?} */
    State.prototype.data;
}
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
        case WidgetsActionTypes.UPSERT:
            _data = state.data.concat();
            /** @type {?} */
            let newWidgets = action.payload;
            if (!(newWidgets instanceof Array)) {
                newWidgets = [newWidgets];
                console.error("'WidgetsActionTypes.UPSERT' does not get array payload");
            }
            newWidgets.forEach((/**
             * @param {?} newWidget
             * @return {?}
             */
            (newWidget) => {
                /** @type {?} */
                const existedWidgetIndex = _data.findIndex((/**
                 * @param {?} w
                 * @return {?}
                 */
                (w) => w._id == newWidget._id));
                if (existedWidgetIndex > -1) {
                    _data.splice(existedWidgetIndex, 1, newWidget);
                }
                else {
                    _data.push(newWidget);
                }
            }));
            return Object.assign({}, state, { data: _data });
        case WidgetsActionTypes.DELETE:
            debugger;
            _data = state.data.concat();
            /** @type {?} */
            const widgetIndex = state.data.findIndex((/**
             * @param {?} w
             * @return {?}
             */
            (w) => w._id == action.payload._id));
            if (widgetIndex > -1) {
                _data.splice(widgetIndex, 1);
            }
            return Object.assign({}, state, { data: _data });
        default:
            return state;
    }
}
/** @type {?} */
const getWidgets = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.data);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function WidgetState() { }
if (false) {
    /** @type {?} */
    WidgetState.prototype.db;
}
/** @type {?} */
const WidgetReducer = {
    db: Reducer
};
/**
 * @record
 */
function AppState() { }
if (false) {
    /** @type {?} */
    AppState.prototype.widgets;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WidgetDbEffects {
    /**
     * @param {?} actions$
     */
    constructor(actions$) {
        this.actions$ = actions$;
        this.Upsert$ = this.actions$.pipe(ofType("[WIDGET][API][GetWidget] succeed" /* SUCCEED */), pluck("payload"), map((/**
         * @param {?} widget
         * @return {?}
         */
        (widget) => new UpsertWidgetAction([widget]))));
        this.UpsertMany$ = this.actions$.pipe(ofType("[GET_WIDGETS][API][GetWidgets] succeed" /* SUCCEED */), pluck("payload"), map((/**
         * @param {?} widgets
         * @return {?}
         */
        (widgets) => new UpsertWidgetAction(widgets))));
        this.Delete$ = this.actions$.pipe(ofType("[DELETE_WIDGET][API][DeleteWidget] succeed" /* SUCCEED */), pluck("payload"), map((/**
         * @param {?} widget
         * @return {?}
         */
        (widget) => new DeleteWidgetAction(widget))));
    }
}
WidgetDbEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
WidgetDbEffects.ctorParameters = () => [
    { type: Actions }
];
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
if (false) {
    /** @type {?} */
    WidgetDbEffects.prototype.Upsert$;
    /** @type {?} */
    WidgetDbEffects.prototype.UpsertMany$;
    /** @type {?} */
    WidgetDbEffects.prototype.Delete$;
    /**
     * @type {?}
     * @private
     */
    WidgetDbEffects.prototype.actions$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DynamicWidgetConfigDirective {
    /**
     * @param {?} store
     * @param {?} route
     * @param {?} service
     * @param {?} configurationService
     * @param {?} resolver
     * @param {?} container
     */
    constructor(store, route, service, configurationService, resolver, container) {
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
    ngOnInit() {
        this._react_base_on_params();
    }
    /**
     * @return {?}
     */
    _fill_component_map() {
        this.configurationService.config$.pipe(map((/**
         * @param {?} config
         * @return {?}
         */
        (config) => config.types)), startWith({})).subscribe((/**
         * @param {?} types
         * @return {?}
         */
        (types) => {
            debugger;
            this.mapTypeToComponent = types;
        }));
    }
    /**
     * @return {?}
     */
    _react_base_on_params() {
        this.route.params.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, _id }) => {
            if (_id) {
                this.service.selectById(_id).subscribe((/**
                 * @param {?} widget
                 * @return {?}
                 */
                (widget) => {
                    this._resolve_correct_component_base_on_widget_type(type, widget);
                }));
            }
            else {
                this._resolve_correct_component_base_on_widget_type(type);
            }
        }));
    }
    /**
     * @param {?} type
     * @param {?=} widget
     * @return {?}
     */
    _resolve_correct_component_base_on_widget_type(type, widget) {
        if (this.component) {
            this.component.destroy();
        }
        if (!this.mapTypeToComponent[type]) {
            /** @type {?} */
            const supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
            throw new Error(`Trying to use an unsupported type (${type}).
		  		 Supported types: ${supportedTypes}`);
        }
        /** @type {?} */
        const component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[type].upsert);
        this.component = this.container.createComponent(component);
        // this.widget$.subscribe((w) => (this.component.instance.widget = w));
        if (widget)
            this.component.instance.widget = widget;
    }
}
DynamicWidgetConfigDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ngsDynamicWidgetConfig]"
            },] }
];
/** @nocollapse */
DynamicWidgetConfigDirective.ctorParameters = () => [
    { type: Store },
    { type: ActivatedRoute },
    { type: WidgetService },
    { type: WidgetConfigurationService },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
if (false) {
    /** @type {?} */
    DynamicWidgetConfigDirective.prototype.component;
    /** @type {?} */
    DynamicWidgetConfigDirective.prototype.mapTypeToComponent;
    /** @type {?} */
    DynamicWidgetConfigDirective.prototype.store;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetConfigDirective.prototype.route;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetConfigDirective.prototype.service;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetConfigDirective.prototype.configurationService;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetConfigDirective.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetConfigDirective.prototype.container;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DynamicWidgetViewDirective {
    /**
     * @param {?} store
     * @param {?} route
     * @param {?} service
     * @param {?} configurationService
     * @param {?} resolver
     * @param {?} container
     */
    constructor(store, route, service, configurationService, resolver, container) {
        this.store = store;
        this.route = route;
        this.service = service;
        this.configurationService = configurationService;
        this.resolver = resolver;
        this.container = container;
        this._fill_component_map();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    set oid(id) {
        this._selectWidget(id);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.widget$.pipe(filter((/**
         * @param {?} widget
         * @return {?}
         */
        widget => widget != undefined))).subscribe((/**
         * @param {?} widget
         * @return {?}
         */
        widget => {
            this._resolve_correct_component_base_on_widget_type(widget);
        }));
    }
    /**
     * @return {?}
     */
    _fill_component_map() {
        this.configurationService.config$.pipe(map((/**
         * @param {?} config
         * @return {?}
         */
        config => config.types)), startWith({})).subscribe((/**
         * @param {?} types
         * @return {?}
         */
        types => {
            debugger;
            this.mapTypeToComponent = types;
        }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    _selectWidget(id) {
        this.widget$ = this.service.selectById(id);
    }
    /**
     * @param {?} widget
     * @return {?}
     */
    _resolve_correct_component_base_on_widget_type(widget) {
        if (!this.mapTypeToComponent[widget.type]) {
            /** @type {?} */
            const supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
            throw new Error(`Trying to use an unsupported type (${widget.type}).
		  		 Supported types: ${supportedTypes}`);
        }
        /** @type {?} */
        const component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[widget.type].view);
        this.component = this.container.createComponent(component);
        this.widget$.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        w => (this.component.instance.widget = w)));
    }
}
DynamicWidgetViewDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ngsDynamicWidgetView]"
            },] }
];
/** @nocollapse */
DynamicWidgetViewDirective.ctorParameters = () => [
    { type: Store },
    { type: ActivatedRoute },
    { type: WidgetService },
    { type: WidgetConfigurationService },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
DynamicWidgetViewDirective.propDecorators = {
    oid: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DynamicWidgetViewDirective.prototype.widget$;
    /** @type {?} */
    DynamicWidgetViewDirective.prototype.component;
    /** @type {?} */
    DynamicWidgetViewDirective.prototype.mapTypeToComponent;
    /** @type {?} */
    DynamicWidgetViewDirective.prototype.store;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetViewDirective.prototype.route;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetViewDirective.prototype.service;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetViewDirective.prototype.configurationService;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetViewDirective.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    DynamicWidgetViewDirective.prototype.container;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgsWidgetModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: NgsWidgetRootModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, WidgetConfigurationService, WidgetService]
        };
    }
}
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
class NgsWidgetRootModule {
    constructor() {
        ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
        ((/** @type {?} */ (window))).___starter.widget = "8.0.10";
    }
}
NgsWidgetRootModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NgsWidgetModule,
                    WidgetRoutingModule,
                    StoreModule.forFeature("widgets", WidgetReducer),
                    EffectsModule.forFeature([
                        WidgetDbEffects,
                        GetWidgetApiEffects,
                        GetWidgetsApiEffects,
                        UpsertWidgetApiEffects,
                        DeleteWidgetApiEffects
                    ])
                ],
                exports: [NgsWidgetModule]
            },] }
];
/** @nocollapse */
NgsWidgetRootModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class IWidgetView {
}
if (false) {
    /** @type {?} */
    IWidgetView.prototype.widget;
    /** @type {?} */
    IWidgetView.prototype.goToEdit;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class IWidgetUpsert {
}
if (false) {
    /** @type {?} */
    IWidgetUpsert.prototype.widget;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DynamicWidgetViewComponent, IWidgetUpsert, IWidgetView, NgsWidgetModule, UpsertWidgetStartAction, WidgetModel, WidgetSelectorComponent, NgsWidgetRootModule as ɵb, MODULE_CONFIG_TOKEN as ɵc, WidgetReducer as ɵd, WidgetService as ɵf, WidgetConfigurationService as ɵg, RootComponent as ɵh, WidgetsManagementComponent as ɵi, UpsertComponent as ɵj, DynamicWidgetConfigDirective as ɵk, DynamicWidgetViewDirective as ɵl, WidgetRoutingModule as ɵm, Reducer as ɵn, WidgetDbEffects as ɵo, GetWidgetApiEffects as ɵp, GetWidgetsApiEffects as ɵr, UpsertWidgetApiEffects as ɵt, DeleteWidgetApiEffects as ɵu };
//# sourceMappingURL=soushians-widget.js.map
