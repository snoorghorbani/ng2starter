import { InjectionToken, Inject, Injectable, NgModule, Component, ComponentFactoryResolver, ViewContainerRef, Input, Directive, defineInjectable, inject } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { map, filter, tap, take, switchMap, startWith, catchError, pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { stringTemplate } from '@soushians/shared';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { __decorate, __metadata } from 'tslib';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    development_uri: "http://localhost:3000",
    production_uri: "",
    env: {
        production: false
    },
    endpoints: {
        upsert: "http://localhost:3000/api/uiwidget",
        find: "http://localhost:3000/api/uiwidget",
        get: "http://localhost:3000/api/uiwidget/${model._id}"
    },
    types: {}
};
const /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("WidgetModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    { type: Injectable },
];
/** @nocollapse */
WidgetConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GetWidgetsApiModel;
(function (GetWidgetsApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = {}) {
            Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
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
})(GetWidgetsApiModel || (GetWidgetsApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class GetWidgetsStartAction {
    constructor() {
        this.type = "[GET_WIDGETS][API][GetWidgets] start" /* START */;
    }
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
class GetWidgetsFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GET_WIDGETS][API][GetWidgets] failed" /* FAILED */;
    }
}

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
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = {}) {
            Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {};
        }
    }
    GetWidgetApiModel.Request = Request;
    class Response {
        constructor() { }
    }
    GetWidgetApiModel.Response = Response;
})(GetWidgetApiModel || (GetWidgetApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class GetWidgetStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[WIDGET][API][GetWidget] start" /* START */;
    }
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
class GetWidgetFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[WIDGET][API][GetWidget] failed" /* FAILED */;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UpsertWidgetApiModel;
(function (UpsertWidgetApiModel) {
    /**
     * @template T
     */
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = {}) {
            Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return this.widget;
        }
    }
    UpsertWidgetApiModel.Request = Request;
    /**
     * @template T
     */
    class Response {
        constructor() { }
    }
    UpsertWidgetApiModel.Response = Response;
})(UpsertWidgetApiModel || (UpsertWidgetApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        this.name = name;
        this.type = type;
        this.Config = Config;
    }
}

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
var UpsertWidgetApiModel$1;
(function (UpsertWidgetApiModel$$1) {
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
    UpsertWidgetApiModel$$1.Request = Request;
    class Response {
        constructor() { }
    }
    UpsertWidgetApiModel$$1.Response = Response;
})(UpsertWidgetApiModel$1 || (UpsertWidgetApiModel$1 = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UpsertWidgetStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_WIDGET][API][UpsertWidget] start" /* START */;
    }
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
class UpsertWidgetFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_WIDGET][API][UpsertWidget] failed" /* FAILED */;
    }
}

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
class WidgetService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     */
    constructor(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
    }
    /**
     * @template T
     * @param {?} _id
     * @return {?}
     */
    get(_id) {
        return this.configurationService.config$.pipe(filter((config) => config.endpoints.get !== ""), take(1), switchMap((config) => this.http.get(stringTemplate(config.endpoints.get, { _id }))), map((response) => response.Result));
    }
    /**
     * @return {?}
     */
    getWidgets() {
        return this.configurationService.config$.pipe(filter((config) => config.endpoints.find != ""), switchMap((config) => this.http.get(config.endpoints.find)), map((response) => response.Result));
    }
    /**
     * @template T
     * @param {?} widget
     * @return {?}
     */
    upsert(widget) {
        const /** @type {?} */ model = new UpsertWidgetApiModel$1.Request(widget);
        return this.configurationService.config$.pipe(filter((config) => config.endpoints.upsert != ""), take(1), switchMap((config) => this.http.post(config.endpoints.upsert, model.getRequestBody())), map((response) => response.Result));
    }
    /**
     * @template T
     * @param {?} _id
     * @return {?}
     */
    selectById(_id) {
        const /** @type {?} */ subject = new BehaviorSubject(undefined);
        this.store
            .select((state) => state.widgets.db.data)
            .pipe(filter((widgets) => widgets != null), map((widgets) => widgets.find((widget) => widget._id == _id)), tap((widget) => {
            if (widget == null) {
                this.store.dispatch(new GetWidgetStartAction(_id));
            }
        }))
            .subscribe((FormSchemaModel) => subject.next(FormSchemaModel));
        return subject.asObservable();
    }
}
WidgetService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
WidgetService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: WidgetConfigurationService }
];
/** @nocollapse */ WidgetService.ngInjectableDef = defineInjectable({ factory: function WidgetService_Factory() { return new WidgetService(inject(HttpClient), inject(Store), inject(WidgetConfigurationService)); }, token: WidgetService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DynamicWidgetViewComponent {
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
        this.widget$.pipe(filter((widget) => widget != undefined)).subscribe((widget) => {
            this._resolve_correct_component_base_on_widget_type(widget);
        });
    }
    /**
     * @return {?}
     */
    _fill_component_map() {
        this.configurationService.config$.pipe(map((config) => config.types), startWith({})).subscribe((types) => {
            debugger;
            this.mapTypeToComponent = types;
        });
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
            const /** @type {?} */ supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
            throw new Error(`Trying to use an unsupported type (${widget.type}).
		  		 Supported types: ${supportedTypes}`);
        }
        const /** @type {?} */ component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[widget.type].view);
        this.component = this.container.createComponent(component);
        this.widget$.subscribe((w) => (this.component.instance.widget = w));
    }
}
DynamicWidgetViewComponent.decorators = [
    { type: Component, args: [{
                template: ""
            },] },
];
/** @nocollapse */
DynamicWidgetViewComponent.ctorParameters = () => [
    { type: Store },
    { type: ActivatedRoute },
    { type: WidgetService },
    { type: WidgetConfigurationService },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
DynamicWidgetViewComponent.propDecorators = {
    oid: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WidgetSelectorComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.widgets$ = this.store.select((state) => state.widgets.db.data);
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
                template: `<mat-select placeholder="Grid Type" [(ngModel)]="selectedWidgetId" name="selectedWidgetId">
  <mat-option *ngFor="let item of (widgets$ | async)" [value]="item._id">
    {{item.type}} : <b>{{item.name}}</b>
  </mat-option>
</mat-select>`
            },] },
];
/** @nocollapse */
WidgetSelectorComponent.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RootComponent {
}
RootComponent.decorators = [
    { type: Component, args: [{
                selector: "widget-root",
                template: "<router-outlet></router-outlet>"
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const ɵ0 = [];
const /** @type {?} */ initialState = {
    data: ɵ0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer(state = initialState, action) {
    let /** @type {?} */ _data;
    switch (action.type) {
        case WidgetsActionTypes.UPSERT:
            _data = state.data.concat();
            const /** @type {?} */ newWidgets = action.payload;
            newWidgets.forEach((newWidget) => {
                const /** @type {?} */ existedWidgetIndex = _data.findIndex((w) => w._id == newWidget._id);
                if (existedWidgetIndex > -1) {
                    _data.splice(existedWidgetIndex, 1, newWidget);
                }
                else {
                    _data.push(newWidget);
                }
            });
            return Object.assign({}, state, { data: _data });
        case WidgetsActionTypes.DELETE:
            _data = Object.assign({}, state.data);
            const /** @type {?} */ widgetIndex = state.data.findIndex((w) => w._id == action.payload._id);
            _data.splice(widgetIndex, 1);
            return Object.assign({}, state, { data: _data });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WidgetsManagementComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.widgets$ = this.store.select((state) => state.widgets.db.data);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.store.dispatch(new GetWidgetsStartAction());
    }
}
WidgetsManagementComponent.decorators = [
    { type: Component, args: [{
                template: `<div fxLayout="row wrap" fxLayoutAlign="center center" >
    <mat-card class="cards-item" *ngFor="let item of (widgets$ | async)" fxFlex="51">
      <h3>
        <a [routerLink]="['../upsert' ,  item.type,  item._id]">
          <mat-icon aria-label="edit widget">edit</mat-icon>
        </a>
        {{item.name}}
      </h3>
  </mat-card>
</div>`
            },] },
];
/** @nocollapse */
WidgetsManagementComponent.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UpsertComponent {
}
UpsertComponent.decorators = [
    { type: Component, args: [{
                template: `<div fxLayout="row" fxLayoutAlign="center center">
    <div fxFlex="50">
        <ng-container ngsDynamicWidgetConfig></ng-container>
    </div>
</div>`
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ routes = [
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
const /** @type {?} */ WidgetRoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class GetWidgetApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[WIDGET][API][GetWidget] start" /* START */)
            .pipe(map((action) => action.payload), switchMap((payload) => this.service.get(payload)), map((res) => new GetWidgetSucceedAction(res)), catchError((err) => of(new GetWidgetFailedAction(err))));
    }
}
GetWidgetApiEffects.decorators = [
    { type: Injectable },
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UpsertWidgetApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[UPSERT_WIDGET][API][UpsertWidget] start" /* START */)
            .pipe(map((action) => action.payload), switchMap((payload) => this.service.upsert(payload)), map((res) => new UpsertWidgetSucceedAction(res)), catchError((err) => of(new UpsertWidgetFailedAction(err))));
    }
}
UpsertWidgetApiEffects.decorators = [
    { type: Injectable },
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class GetWidgetsApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[GET_WIDGETS][API][GetWidgets] start" /* START */)
            .pipe(switchMap(() => this.service
            .getWidgets()
            .pipe(map((res) => new GetWidgetsSucceedAction(res)), catchError((err) => of(new GetWidgetsFailedAction(err))))));
    }
}
GetWidgetsApiEffects.decorators = [
    { type: Injectable },
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ WidgetReducer = {
    db: Reducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WidgetDbEffects {
    /**
     * @param {?} actions$
     */
    constructor(actions$) {
        this.actions$ = actions$;
        this.Upsert$ = this.actions$
            .ofType("[WIDGET][API][GetWidget] succeed" /* SUCCEED */)
            .pipe(pluck("payload"), map((widget) => new UpsertWidgetAction([widget])));
        this.UpsertMany$ = this.actions$
            .ofType("[GET_WIDGETS][API][GetWidgets] succeed" /* SUCCEED */)
            .pipe(pluck("payload"), map((widgets) => new UpsertWidgetAction(widgets)));
    }
}
WidgetDbEffects.decorators = [
    { type: Injectable },
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        this._selectWidget();
        this.widget$.pipe(filter((widget) => widget != undefined)).subscribe((widget) => {
            this._resolve_correct_component_base_on_widget_type(widget);
        });
    }
    /**
     * @return {?}
     */
    _fill_component_map() {
        this.configurationService.config$.pipe(map((config) => config.types), startWith({})).subscribe((types) => {
            debugger;
            this.mapTypeToComponent = types;
        });
    }
    /**
     * @return {?}
     */
    _selectWidget() {
        this.widget$ = this.route.params.pipe(pluck("_id"), filter((id) => id != null), switchMap((id) => this.service.selectById(id)));
    }
    /**
     * @param {?} widget
     * @return {?}
     */
    _resolve_correct_component_base_on_widget_type(widget) {
        if (!this.mapTypeToComponent[widget.type]) {
            const /** @type {?} */ supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
            throw new Error(`Trying to use an unsupported type (${widget.type}).
		  		 Supported types: ${supportedTypes}`);
        }
        const /** @type {?} */ component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[widget.type].upsert);
        this.component = this.container.createComponent(component);
        this.widget$.subscribe((w) => (this.component.instance.widget = w));
    }
}
DynamicWidgetConfigDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ngsDynamicWidgetConfig]"
            },] },
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        this.widget$.pipe(filter((widget) => widget != undefined)).subscribe((widget) => {
            this._resolve_correct_component_base_on_widget_type(widget);
        });
    }
    /**
     * @return {?}
     */
    _fill_component_map() {
        this.configurationService.config$.pipe(map((config) => config.types), startWith({})).subscribe((types) => {
            debugger;
            this.mapTypeToComponent = types;
        });
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
            const /** @type {?} */ supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
            throw new Error(`Trying to use an unsupported type (${widget.type}).
		  		 Supported types: ${supportedTypes}`);
        }
        const /** @type {?} */ component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[widget.type].view);
        this.component = this.container.createComponent(component);
        this.widget$.subscribe((w) => (this.component.instance.widget = w));
    }
}
DynamicWidgetViewDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ngsDynamicWidgetView]"
            },] },
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
class NgsWidgetRootModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
class IWidgetView {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
class IWidgetUpsert {
}

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

export { DynamicWidgetViewComponent, WidgetSelectorComponent, UpsertWidgetStartAction, WidgetModel, IWidgetView, IWidgetUpsert, WidgetService, NgsWidgetModule, NgsWidgetRootModule, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXdpZGdldC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3dpZGdldC5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy93aWRnZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvYXBpL2dldC13aWRnZXRzL2dldC13aWRnZXRzLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvYXBpL2dldC13aWRnZXRzL2dldC13aWRnZXRzLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldC9nZXQtd2lkZ2V0Lm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvYXBpL2dldC13aWRnZXQvZ2V0LXdpZGdldC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvbW9kZWxzL3Vwc2VydC13aWRnZXQuYXBpLW1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvbW9kZWxzL3dpZGdldC5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3NlcnZpY2VzL2FwaS91cHNlcnQtd2lkZ2V0L3Vwc2VydC13aWRnZXQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LXdpZGdldC91cHNlcnQtd2lkZ2V0LmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy93aWRnZXQuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3ZpZXcvZHluYW1pYy13aWRnZXQtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi93aWRnZXQtc2VsZWN0b3Ivd2lkZ2V0LXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3Jvb3Qvcm9vdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9yb290L3dpZGdldC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvcm9vdC93aWRnZXRzLnJlZHVjZXJzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvbWFuZ2VtZW50L3dpZGdldC1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3Vwc2VydC91cHNlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvd2lkZ2V0LXJvdXRpbmcubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvYXBpL2dldC13aWRnZXQvZ2V0LXdpZGdldC5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvYXBpL3Vwc2VydC13aWRnZXQvdXBzZXJ0LXdpZGdldC5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvYXBpL2dldC13aWRnZXRzL2dldC13aWRnZXRzLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi93aWRnZXQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3Jvb3Qvd2lkZ2V0cy5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvdXBzZXJ0L2R5bmFtaWMtd2lkZ2V0LWNvbmZpZy5kaXJlY3RpdmUudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi92aWV3L2R5bmFtaWMtd2lkZ2V0LXZpZXcuZGlyZWN0aXZlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvd2lkZ2V0Lm1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL21vZGVscy93aWRnZXQtdmlldy5pbnRlcmZhY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9tb2RlbHMvd2lkZ2V0LXVwc2VydC5pbnRlcmZhY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBJTW9kdWxlQ29uZmlnTWFwVHlwZXMgfSBmcm9tIFwiLi9tb2RlbHMvbW9kdWxlLWNvbmZpZy1tYXAtdHlwZXMuaW50ZXJmY2VcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2lkZ2V0TW9kdWxlQ29uZmlnIHtcclxuXHRkZXZlbG9wbWVudF91cmk/OiBzdHJpbmc7XHJcblx0cHJvZHVjdGlvbl91cmk/OiBzdHJpbmc7XHJcblx0ZW52Pzoge1xyXG5cdFx0cHJvZHVjdGlvbjogYm9vbGVhbjtcclxuXHR9O1xyXG5cdGVuZHBvaW50cz86IHtcclxuXHRcdGdldDogc3RyaW5nO1xyXG5cdFx0ZmluZDogc3RyaW5nO1xyXG5cdFx0dXBzZXJ0OiBzdHJpbmc7XHJcblx0fTtcclxuXHR0eXBlcz86IElNb2R1bGVDb25maWdNYXBUeXBlcztcclxufVxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBXaWRnZXRNb2R1bGVDb25maWcgPSB7XHJcblx0ZGV2ZWxvcG1lbnRfdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLFxyXG5cdHByb2R1Y3Rpb25fdXJpOiBcIlwiLFxyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2VcclxuXHR9LFxyXG5cdGVuZHBvaW50czoge1xyXG5cdFx0dXBzZXJ0OiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdWl3aWRnZXRcIixcclxuXHRcdGZpbmQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91aXdpZGdldFwiLFxyXG5cdFx0Z2V0OiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdWl3aWRnZXQvJHttb2RlbC5faWR9XCJcclxuXHR9LFxyXG5cdHR5cGVzOiB7fVxyXG59O1xyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxXaWRnZXRNb2R1bGVDb25maWc+KFwiV2lkZ2V0TW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kdWxlQ29uZmlnLCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi4vd2lkZ2V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogV2lkZ2V0TW9kdWxlQ29uZmlnO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cdH1cclxuXHRjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdChNT0RVTEVfREVGQVVMVF9DT05GSUcpO1xyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIHRoaXMuc3RvcmUuc2VsZWN0KGdldFdpZGdldE1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKCh3aWRnZXRDb25maWcpID0+IHtcclxuXHRcdC8vIFx0aWYgKCF3aWRnZXRDb25maWcpIHtcclxuXHRcdC8vIFx0XHRyZXR1cm47XHJcblx0XHQvLyBcdH1cclxuXHRcdC8vIFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCB3aWRnZXRDb25maWcuQ29uZmlnKTtcclxuXHRcdC8vIFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgR2V0V2lkZ2V0c0FwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWUgPSB7fSkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goKGtleSkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7fTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IFdpZGdldE1vZGVsPGFueT5bXTtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRXaWRnZXRzQXBpTW9kZWwgfSBmcm9tIFwiLi9nZXQtd2lkZ2V0cy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbR0VUX1dJREdFVFNdW0FQSV1bR2V0V2lkZ2V0c10gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbR0VUX1dJREdFVFNdW0FQSV1bR2V0V2lkZ2V0c10gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW0dFVF9XSURHRVRTXVtBUEldW0dldFdpZGdldHNdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRzU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFdpZGdldHNTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT5bXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0c0ZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR2V0V2lkZ2V0c0FjdGlvbnMgPSBHZXRXaWRnZXRzU3RhcnRBY3Rpb24gfCBHZXRXaWRnZXRzU3VjY2VlZEFjdGlvbiB8IEdldFdpZGdldHNGYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBHZXRXaWRnZXRBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0X2lkOiBzdHJpbmc7XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWUgPSB7fSkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goKGtleSkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7fTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IFdpZGdldE1vZGVsPGFueT47XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0V2lkZ2V0QXBpTW9kZWwgfSBmcm9tIFwiLi9nZXQtd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEdFVF9XSURHRVRfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW1dJREdFVF1bQVBJXVtHZXRXaWRnZXRdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW1dJREdFVF1bQVBJXVtHZXRXaWRnZXRdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltXSURHRVRdW0FQSV1bR2V0V2lkZ2V0XSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0U3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfV0lER0VUX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1dJREdFVF9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogV2lkZ2V0TW9kZWw8YW55Pikge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1dJREdFVF9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldFdpZGdldEFjdGlvbnMgPSBHZXRXaWRnZXRTdGFydEFjdGlvbiB8IEdldFdpZGdldFN1Y2NlZWRBY3Rpb24gfCBHZXRXaWRnZXRGYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi5cIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgVXBzZXJ0V2lkZ2V0QXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0PFQ+IHtcclxuXHRcdHdpZGdldDogV2lkZ2V0TW9kZWw8VD47XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IFBhcnRpYWw8VXBzZXJ0V2lkZ2V0QXBpTW9kZWwuUmVxdWVzdDxUPj4gPSB7fSkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goKGtleSkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLndpZGdldDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZTxUPiB7XHJcblx0XHRSZXN1bHQ6IFdpZGdldE1vZGVsPFQ+O1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgV2lkZ2V0TW9kZWw8VD4ge1xyXG5cdF9pZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHR0eXBlOiBzdHJpbmc7XHJcblx0Q29uZmlnOiBUO1xyXG5cdGNvbnN0cnVjdG9yKHsgX2lkLCBuYW1lLCB0eXBlLCBDb25maWcgfTogeyBfaWQ/OiBzdHJpbmc7IG5hbWU/OiBzdHJpbmc7IHR5cGU/OiBzdHJpbmc7IENvbmZpZz86IFQgfSA9IHt9KSB7XHJcblx0XHR0aGlzLl9pZCA9IF9pZDtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdFx0dGhpcy5Db25maWcgPSBDb25maWc7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBVcHNlcnRXaWRnZXRBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0d2lkZ2V0OiBXaWRnZXRNb2RlbDxhbnk+O1xyXG5cdFx0Y29uc3RydWN0b3Iod2lkZ2V0ID0ge30pIHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRoaXMud2lkZ2V0ID0gbmV3IFdpZGdldE1vZGVsKHdpZGdldCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLndpZGdldDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IFdpZGdldE1vZGVsPGFueT47XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0QXBpTW9kZWwgfSBmcm9tIFwiLi91cHNlcnQtd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIFVQU0VSVF9XSURHRVRfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW1VQU0VSVF9XSURHRVRdW0FQSV1bVXBzZXJ0V2lkZ2V0XSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltVUFNFUlRfV0lER0VUXVtBUEldW1Vwc2VydFdpZGdldF0gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW1VQU0VSVF9XSURHRVRdW0FQSV1bVXBzZXJ0V2lkZ2V0XSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfV0lER0VUX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogV2lkZ2V0TW9kZWw8YW55Pikge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0V2lkZ2V0U3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9XSURHRVRfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT4pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydFdpZGdldEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9XSURHRVRfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBVcHNlcnRXaWRnZXRBY3Rpb25zID0gVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24gfCBVcHNlcnRXaWRnZXRTdWNjZWVkQWN0aW9uIHwgVXBzZXJ0V2lkZ2V0RmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHRhcCwgdGFrZSwgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3dpZGdldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vd2lkZ2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgR2V0V2lkZ2V0c0FwaU1vZGVsLCBHZXRXaWRnZXRTdGFydEFjdGlvbiwgVXBzZXJ0V2lkZ2V0QXBpTW9kZWwgfSBmcm9tIFwiLi9hcGlcIjtcclxuXHJcbi8vIGltcG9ydCB7IGdldFdpZGdldE1vZHVsZUNvbmZpZyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5cclxuLy8gaW1wb3J0IHsgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi93aWRnZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbi8vIGltcG9ydCB7IFdpZGdldFJ1blN1Y2Nlc3NmdWxseUFjdGlvbiB9IGZyb20gXCIuLi93aWRnZXQuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXRTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7fVxyXG5cclxuXHRnZXQ8VD4oX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPFQ+PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmdldCAhPT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdHN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLmh0dHAuZ2V0KHN0cmluZ1RlbXBsYXRlKGNvbmZpZy5lbmRwb2ludHMuZ2V0LCB7IF9pZCB9KSkpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBVcHNlcnRXaWRnZXRBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGdldFdpZGdldHMoKTogT2JzZXJ2YWJsZTxXaWRnZXRNb2RlbDxhbnk+W10+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZmluZCAhPSBcIlwiKSxcclxuXHRcdFx0c3dpdGNoTWFwKChjb25maWcpID0+IHRoaXMuaHR0cC5nZXQoY29uZmlnLmVuZHBvaW50cy5maW5kKSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IEdldFdpZGdldHNBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0dXBzZXJ0PFQ+KHdpZGdldDogVXBzZXJ0V2lkZ2V0QXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8VD4+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IFVwc2VydFdpZGdldEFwaU1vZGVsLlJlcXVlc3Qod2lkZ2V0KTtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMudXBzZXJ0ICE9IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLnBvc3QoY29uZmlnLmVuZHBvaW50cy51cHNlcnQsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpKSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogVXBzZXJ0V2lkZ2V0QXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cdC8vIGRlbGV0ZShfaWQ6IHN0cmluZykge1xyXG5cdC8vIFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJFxyXG5cdC8vIFx0XHQuZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlRm9ybSAhPSBcIlwiKVxyXG5cdC8vIFx0XHQuc3dpdGNoTWFwKChjb25maWcpID0+IHRoaXMuaHR0cC5nZXQoY29uZmlnLmVuZHBvaW50cy5kZWxldGVGb3JtKSk7XHJcblx0Ly8gfVxyXG5cdHNlbGVjdEJ5SWQ8VD4oX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPFQ+PiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxXaWRnZXRNb2RlbDxUPj4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLndpZGdldHMuZGIuZGF0YSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0ZmlsdGVyKCh3aWRnZXRzKSA9PiB3aWRnZXRzICE9IG51bGwpLFxyXG5cdFx0XHRcdG1hcCgod2lkZ2V0cykgPT4gd2lkZ2V0cy5maW5kKCh3aWRnZXQpID0+IHdpZGdldC5faWQgPT0gX2lkKSksXHJcblx0XHRcdFx0dGFwKCh3aWRnZXQpID0+IHtcclxuXHRcdFx0XHRcdGlmICh3aWRnZXQgPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRXaWRnZXRTdGFydEFjdGlvbihfaWQpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoKEZvcm1TY2hlbWFNb2RlbCkgPT4gc3ViamVjdC5uZXh0KEZvcm1TY2hlbWFNb2RlbCkpO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRDb21wb25lbnRSZWYsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0RGlyZWN0aXZlLFxyXG5cdElucHV0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3dpZGdldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IHBsdWNrLCBmaWx0ZXIsIHN3aXRjaE1hcCwgbWFwLCBzdGFydFdpdGggfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UsIFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IElNb2R1bGVDb25maWdNYXBUeXBlcyB9IGZyb20gXCIuLi9tb2RlbHMvbW9kdWxlLWNvbmZpZy1tYXAtdHlwZXMuaW50ZXJmY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBcIlwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljV2lkZ2V0Vmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KClcclxuXHRzZXQgb2lkKGlkOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuX3NlbGVjdFdpZGdldChpZCk7XHJcblx0fVxyXG5cdHdpZGdldCQ6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8YW55Pj47XHJcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PjtcclxuXHRtYXBUeXBlVG9Db21wb25lbnQ6IElNb2R1bGVDb25maWdNYXBUeXBlcztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXHJcblx0KSB7XHJcblx0XHR0aGlzLl9maWxsX2NvbXBvbmVudF9tYXAoKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLndpZGdldCQucGlwZShmaWx0ZXIoKHdpZGdldCkgPT4gd2lkZ2V0ICE9IHVuZGVmaW5lZCkpLnN1YnNjcmliZSgod2lkZ2V0KSA9PiB7XHJcblx0XHRcdHRoaXMuX3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh3aWRnZXQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9maWxsX2NvbXBvbmVudF9tYXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShtYXAoKGNvbmZpZykgPT4gY29uZmlnLnR5cGVzKSwgc3RhcnRXaXRoKHt9KSkuc3Vic2NyaWJlKCh0eXBlcykgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5tYXBUeXBlVG9Db21wb25lbnQgPSB0eXBlcztcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfc2VsZWN0V2lkZ2V0KGlkOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMud2lkZ2V0JCA9IHRoaXMuc2VydmljZS5zZWxlY3RCeUlkPGFueT4oaWQpO1xyXG5cdH1cclxuXHRfcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHdpZGdldCkge1xyXG5cdFx0aWYgKCF0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt3aWRnZXQudHlwZV0pIHtcclxuXHRcdFx0Y29uc3Qgc3VwcG9ydGVkVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCkuam9pbihcIiwgXCIpO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoJHt3aWRnZXQudHlwZX0pLlxyXG5cdFx0ICBcdFx0IFN1cHBvcnRlZCB0eXBlczogJHtzdXBwb3J0ZWRUeXBlc31gXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBjb21wb25lbnQgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PGFueT4odGhpcy5tYXBUeXBlVG9Db21wb25lbnRbd2lkZ2V0LnR5cGVdLnZpZXcpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdHRoaXMud2lkZ2V0JC5zdWJzY3JpYmUoKHcpID0+ICh0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS53aWRnZXQgPSB3KSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IElHcmlkSXRlbUNvbXBvbmVudCB9IGZyb20gXCJAc291c2hpYW5zL2dyaWRcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsLCBJV2lkZ2V0Vmlld0lucHV0SW50ZXJmYWNlIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHZXRXaWRnZXRzU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiR3JpZCBUeXBlXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFdpZGdldElkXCIgbmFtZT1cInNlbGVjdGVkV2lkZ2V0SWRcIj5cclxuICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiAod2lkZ2V0cyQgfCBhc3luYylcIiBbdmFsdWVdPVwiaXRlbS5faWRcIj5cclxuICAgIHt7aXRlbS50eXBlfX0gOiA8Yj57e2l0ZW0ubmFtZX19PC9iPlxyXG4gIDwvbWF0LW9wdGlvbj5cclxuPC9tYXQtc2VsZWN0PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFdpZGdldFNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJR3JpZEl0ZW1Db21wb25lbnQ8SVdpZGdldFZpZXdJbnB1dEludGVyZmFjZT4ge1xyXG5cdHdpZGdldHMkOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPGFueT5bXT47XHJcblx0c2VsZWN0ZWRXaWRnZXRJZDogc3RyaW5nO1xyXG5cdGdldCB2YWxpZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5vaWQgIT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0b2lkOiB0aGlzLnNlbGVjdGVkV2lkZ2V0SWRcclxuXHRcdH07XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLndpZGdldHMkID0gdGhpcy5zdG9yZS5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS53aWRnZXRzLmRiLmRhdGEpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFdpZGdldHNTdGFydEFjdGlvbigpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIndpZGdldC1yb290XCIsXHJcblx0dGVtcGxhdGU6IFwiPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290Q29tcG9uZW50IHt9XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBXaWRnZXRzQWN0aW9uVHlwZXMge1xyXG5cdFVQU0VSVCA9IFwiW1dJREdFVF1bREJdIFVQU0VSVFwiLFxyXG5cdERFTEVURSA9IFwiW1dJREdFVF1bREJdIERFTEVURVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRXaWRnZXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBXaWRnZXRzQWN0aW9uVHlwZXMuVVBTRVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+W10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERlbGV0ZVdpZGdldEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFdpZGdldHNBY3Rpb25UeXBlcy5ERUxFVEU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT4pIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFdpZGdldHNBY3Rpb25zID0gVXBzZXJ0V2lkZ2V0QWN0aW9uIHwgRGVsZXRlV2lkZ2V0QWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgV2lkZ2V0c0FjdGlvbnMsIFdpZGdldHNBY3Rpb25UeXBlcyB9IGZyb20gXCIuL3dpZGdldC5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRkYXRhOiBXaWRnZXRNb2RlbDxhbnk+W107XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0ZGF0YTogW11cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFdpZGdldHNBY3Rpb25zKTogU3RhdGUge1xyXG5cdGxldCBfZGF0YTogV2lkZ2V0TW9kZWw8YW55PltdO1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgV2lkZ2V0c0FjdGlvblR5cGVzLlVQU0VSVDpcclxuXHRcdFx0X2RhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHRjb25zdCBuZXdXaWRnZXRzID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG5cdFx0XHRuZXdXaWRnZXRzLmZvckVhY2goKG5ld1dpZGdldCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGV4aXN0ZWRXaWRnZXRJbmRleCA9IF9kYXRhLmZpbmRJbmRleCgodykgPT4gdy5faWQgPT0gbmV3V2lkZ2V0Ll9pZCk7XHJcblx0XHRcdFx0aWYgKGV4aXN0ZWRXaWRnZXRJbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0XHRfZGF0YS5zcGxpY2UoZXhpc3RlZFdpZGdldEluZGV4LCAxLCBuZXdXaWRnZXQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRfZGF0YS5wdXNoKG5ld1dpZGdldCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogX2RhdGFcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIFdpZGdldHNBY3Rpb25UeXBlcy5ERUxFVEU6XHJcblx0XHRcdF9kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuZGF0YSk7XHJcblxyXG5cdFx0XHRjb25zdCB3aWRnZXRJbmRleCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KCh3KSA9PiB3Ll9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRfZGF0YS5zcGxpY2Uod2lkZ2V0SW5kZXgsIDEpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBfZGF0YVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRXaWRnZXRzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR2V0V2lkZ2V0c1N0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiID5cclxuICAgIDxtYXQtY2FyZCBjbGFzcz1cImNhcmRzLWl0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiAod2lkZ2V0cyQgfCBhc3luYylcIiBmeEZsZXg9XCI1MVwiPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycuLi91cHNlcnQnICwgIGl0ZW0udHlwZSwgIGl0ZW0uX2lkXVwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJlZGl0IHdpZGdldFwiPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7e2l0ZW0ubmFtZX19XHJcbiAgICAgIDwvaDM+XHJcbiAgPC9tYXQtY2FyZD5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0c01hbmFnZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHdpZGdldHMkOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPGFueT5bXT47XHJcblx0Y29uc3RydWN0b3IocHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMud2lkZ2V0cyQgPSB0aGlzLnN0b3JlLnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLndpZGdldHMuZGIuZGF0YSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0V2lkZ2V0c1N0YXJ0QWN0aW9uKCkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgIDxkaXYgZnhGbGV4PVwiNTBcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyIG5nc0R5bmFtaWNXaWRnZXRDb25maWc+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0Q29tcG9uZW50IHt9XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFJvb3RDb21wb25lbnQgfSBmcm9tIFwiLi9yb290XCI7XHJcbmltcG9ydCB7IFdpZGdldHNNYW5hZ2VtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vbWFuZ2VtZW50XCI7XHJcbmltcG9ydCB7IFVwc2VydENvbXBvbmVudCB9IGZyb20gXCIuL3Vwc2VydC91cHNlcnQuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiBcIndpZGdldFwiLFxyXG5cdFx0Y29tcG9uZW50OiBSb290Q29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwibWFuYWdlbWVudFwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogV2lkZ2V0c01hbmFnZW1lbnRDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwidXBzZXJ0Lzp0eXBlXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBVcHNlcnRDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwidXBzZXJ0Lzp0eXBlLzpfaWRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFVwc2VydENvbXBvbmVudFxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdpZGdldFJvdXRpbmdNb2R1bGU6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vd2lkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRHRVRfV0lER0VUX0FDVElPTl9UWVBFUyxcclxuXHRHZXRXaWRnZXRBY3Rpb25zLFxyXG5cdEdldFdpZGdldFN1Y2NlZWRBY3Rpb24sXHJcblx0R2V0V2lkZ2V0RmFpbGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vZ2V0LXdpZGdldC5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPEdldFdpZGdldEFjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX1dJREdFVF9BQ1RJT05fVFlQRVMuU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKChhY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChwYXlsb2FkKSA9PiB0aGlzLnNlcnZpY2UuZ2V0KHBheWxvYWQpKSxcclxuXHRcdFx0bWFwKChyZXMpID0+IG5ldyBHZXRXaWRnZXRTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRjYXRjaEVycm9yKChlcnIpID0+IG9mKG5ldyBHZXRXaWRnZXRGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3dpZGdldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0VVBTRVJUX1dJREdFVF9BQ1RJT05fVFlQRVMsXHJcblx0VXBzZXJ0V2lkZ2V0QWN0aW9ucyxcclxuXHRVcHNlcnRXaWRnZXRTdWNjZWVkQWN0aW9uLFxyXG5cdFVwc2VydFdpZGdldEZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL3Vwc2VydC13aWRnZXQuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0V2lkZ2V0QXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxVcHNlcnRXaWRnZXRBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBXaWRnZXRTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFVQU0VSVF9XSURHRVRfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcCgoYWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgocGF5bG9hZCkgPT4gdGhpcy5zZXJ2aWNlLnVwc2VydChwYXlsb2FkKSksXHJcblx0XHRcdG1hcCgocmVzKSA9PiBuZXcgVXBzZXJ0V2lkZ2V0U3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgVXBzZXJ0V2lkZ2V0RmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0U2VydmljZSB9IGZyb20gXCIuLi8uLi93aWRnZXQuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG5cdEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUyxcclxuXHRHZXRXaWRnZXRzQWN0aW9ucyxcclxuXHRHZXRXaWRnZXRzU3VjY2VlZEFjdGlvbixcclxuXHRHZXRXaWRnZXRzRmFpbGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vZ2V0LXdpZGdldHMuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0c0FwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8R2V0V2lkZ2V0c0FjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdHN3aXRjaE1hcCgoKSA9PlxyXG5cdFx0XHRcdHRoaXMuc2VydmljZVxyXG5cdFx0XHRcdFx0LmdldFdpZGdldHMoKVxyXG5cdFx0XHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0XHRcdG1hcCgocmVzKSA9PiBuZXcgR2V0V2lkZ2V0c1N1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdFx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IEdldFdpZGdldHNGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdClcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgZnJvbVJvb3QgZnJvbSBcIi4vcm9vdC93aWRnZXRzLnJlZHVjZXJzXCI7XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2lkZ2V0U3RhdGUge1xyXG5cdGRiOiBmcm9tUm9vdC5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFdpZGdldFJlZHVjZXIgPSB7XHJcblx0ZGI6IGZyb21Sb290LlJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xyXG5cdHdpZGdldHM6IFdpZGdldFN0YXRlO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHBsdWNrIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBHRVRfV0lER0VUX0FDVElPTl9UWVBFUywgR0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0QWN0aW9uIH0gZnJvbSBcIi4vd2lkZ2V0LmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdpZGdldERiRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+KSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfV0lER0VUX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKHdpZGdldDogV2lkZ2V0TW9kZWw8YW55PikgPT4gbmV3IFVwc2VydFdpZGdldEFjdGlvbihbIHdpZGdldCBdKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnRNYW55JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTLlNVQ0NFRUQpXHJcblx0XHQucGlwZShwbHVjayhcInBheWxvYWRcIiksIG1hcCgod2lkZ2V0czogV2lkZ2V0TW9kZWw8YW55PltdKSA9PiBuZXcgVXBzZXJ0V2lkZ2V0QWN0aW9uKHdpZGdldHMpKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENvbXBvbmVudFJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBWaWV3Q29udGFpbmVyUmVmLCBEaXJlY3RpdmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgcGx1Y2ssIGZpbHRlciwgc3dpdGNoTWFwLCBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgV2lkZ2V0U2VydmljZSwgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuaW1wb3J0IHsgSU1vZHVsZUNvbmZpZ01hcFR5cGVzIH0gZnJvbSBcIi4uL21vZGVscy9tb2R1bGUtY29uZmlnLW1hcC10eXBlcy5pbnRlcmZjZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IFwiW25nc0R5bmFtaWNXaWRnZXRDb25maWddXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNXaWRnZXRDb25maWdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHdpZGdldCQ6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8YW55Pj47XHJcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PjtcclxuXHRtYXBUeXBlVG9Db21wb25lbnQ6IElNb2R1bGVDb25maWdNYXBUeXBlcztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXHJcblx0KSB7XHJcblx0XHR0aGlzLl9maWxsX2NvbXBvbmVudF9tYXAoKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLl9zZWxlY3RXaWRnZXQoKTtcclxuXHRcdHRoaXMud2lkZ2V0JC5waXBlKGZpbHRlcigod2lkZ2V0KSA9PiB3aWRnZXQgIT0gdW5kZWZpbmVkKSkuc3Vic2NyaWJlKCh3aWRnZXQpID0+IHtcclxuXHRcdFx0dGhpcy5fcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHdpZGdldCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0X2ZpbGxfY29tcG9uZW50X21hcCgpIHtcclxuXHRcdHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKG1hcCgoY29uZmlnKSA9PiBjb25maWcudHlwZXMpLCBzdGFydFdpdGgoe30pKS5zdWJzY3JpYmUoKHR5cGVzKSA9PiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHR0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCA9IHR5cGVzO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9zZWxlY3RXaWRnZXQoKSB7XHJcblx0XHR0aGlzLndpZGdldCQgPSB0aGlzLnJvdXRlLnBhcmFtcy5waXBlKFxyXG5cdFx0XHRwbHVjayhcIl9pZFwiKSxcclxuXHRcdFx0ZmlsdGVyKChpZDogc3RyaW5nKSA9PiBpZCAhPSBudWxsKSxcclxuXHRcdFx0c3dpdGNoTWFwKChpZCkgPT4gdGhpcy5zZXJ2aWNlLnNlbGVjdEJ5SWQ8YW55PihpZCkpXHJcblx0XHQpO1xyXG5cdH1cclxuXHRfcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHdpZGdldCkge1xyXG5cdFx0aWYgKCF0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt3aWRnZXQudHlwZV0pIHtcclxuXHRcdFx0Y29uc3Qgc3VwcG9ydGVkVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCkuam9pbihcIiwgXCIpO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoJHt3aWRnZXQudHlwZX0pLlxyXG5cdFx0ICBcdFx0IFN1cHBvcnRlZCB0eXBlczogJHtzdXBwb3J0ZWRUeXBlc31gXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBjb21wb25lbnQgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PGFueT4odGhpcy5tYXBUeXBlVG9Db21wb25lbnRbd2lkZ2V0LnR5cGVdLnVwc2VydCk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG5cdFx0dGhpcy53aWRnZXQkLnN1YnNjcmliZSgodykgPT4gKHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLndpZGdldCA9IHcpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdENvbXBvbmVudFJlZixcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHREaXJlY3RpdmUsXHJcblx0SW5wdXRcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgcGx1Y2ssIGZpbHRlciwgc3dpdGNoTWFwLCBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgV2lkZ2V0U2VydmljZSwgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcclxuaW1wb3J0IHsgSU1vZHVsZUNvbmZpZ01hcFR5cGVzIH0gZnJvbSBcIi4uL21vZGVscy9tb2R1bGUtY29uZmlnLW1hcC10eXBlcy5pbnRlcmZjZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IFwiW25nc0R5bmFtaWNXaWRnZXRWaWV3XVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljV2lkZ2V0Vmlld0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KClcclxuXHRzZXQgb2lkKGlkOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuX3NlbGVjdFdpZGdldChpZCk7XHJcblx0fVxyXG5cdHdpZGdldCQ6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8YW55Pj47XHJcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PjtcclxuXHRtYXBUeXBlVG9Db21wb25lbnQ6IElNb2R1bGVDb25maWdNYXBUeXBlcztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXHJcblx0KSB7XHJcblx0XHR0aGlzLl9maWxsX2NvbXBvbmVudF9tYXAoKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLndpZGdldCQucGlwZShmaWx0ZXIoKHdpZGdldCkgPT4gd2lkZ2V0ICE9IHVuZGVmaW5lZCkpLnN1YnNjcmliZSgod2lkZ2V0KSA9PiB7XHJcblx0XHRcdHRoaXMuX3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh3aWRnZXQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9maWxsX2NvbXBvbmVudF9tYXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShtYXAoKGNvbmZpZykgPT4gY29uZmlnLnR5cGVzKSwgc3RhcnRXaXRoKHt9KSkuc3Vic2NyaWJlKCh0eXBlcykgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5tYXBUeXBlVG9Db21wb25lbnQgPSB0eXBlcztcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfc2VsZWN0V2lkZ2V0KGlkOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMud2lkZ2V0JCA9IHRoaXMuc2VydmljZS5zZWxlY3RCeUlkPGFueT4oaWQpO1xyXG5cdH1cclxuXHRfcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHdpZGdldCkge1xyXG5cdFx0aWYgKCF0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt3aWRnZXQudHlwZV0pIHtcclxuXHRcdFx0Y29uc3Qgc3VwcG9ydGVkVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCkuam9pbihcIiwgXCIpO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoJHt3aWRnZXQudHlwZX0pLlxyXG5cdFx0ICBcdFx0IFN1cHBvcnRlZCB0eXBlczogJHtzdXBwb3J0ZWRUeXBlc31gXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBjb21wb25lbnQgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PGFueT4odGhpcy5tYXBUeXBlVG9Db21wb25lbnRbd2lkZ2V0LnR5cGVdLnZpZXcpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdHRoaXMud2lkZ2V0JC5zdWJzY3JpYmUoKHcpID0+ICh0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS53aWRnZXQgPSB3KSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmVEZXZ0b29sc01vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZS1kZXZ0b29sc1wiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdFRhYnNNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRNYXRDaGVja2JveCxcclxuXHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRNYXRUYWJsZU1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0U2VydmljZSwgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlc1wiO1xyXG4vLyBpbXBvcnQgeyBXaWRnZXRSZWR1Y2VyIH0gZnJvbSBcIi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgV2lkZ2V0TW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vd2lkZ2V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBXaWRnZXRSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vd2lkZ2V0LXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IFJvb3RDb21wb25lbnQgfSBmcm9tIFwiLi9yb290XCI7XHJcbmltcG9ydCB7IEdldFdpZGdldEFwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldC9nZXQtd2lkZ2V0LmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0QXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS91cHNlcnQtd2lkZ2V0L3Vwc2VydC13aWRnZXQuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBHZXRXaWRnZXRzQXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0cy9nZXQtd2lkZ2V0cy5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFdpZGdldFJlZHVjZXIgfSBmcm9tIFwiLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBXaWRnZXREYkVmZmVjdHMgfSBmcm9tIFwiLi9yb290L3dpZGdldHMuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBXaWRnZXRzTWFuYWdlbWVudENvbXBvbmVudCB9IGZyb20gXCIuL21hbmdlbWVudFwiO1xyXG5pbXBvcnQgeyBVcHNlcnRDb21wb25lbnQgfSBmcm9tIFwiLi91cHNlcnQvdXBzZXJ0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEeW5hbWljV2lkZ2V0Q29uZmlnRGlyZWN0aXZlIH0gZnJvbSBcIi4vdXBzZXJ0L2R5bmFtaWMtd2lkZ2V0LWNvbmZpZy5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgRHluYW1pY1dpZGdldFZpZXdEaXJlY3RpdmUgfSBmcm9tIFwiLi92aWV3L2R5bmFtaWMtd2lkZ2V0LXZpZXcuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IFdpZGdldFNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vd2lkZ2V0LXNlbGVjdG9yL3dpZGdldC1zZWxlY3Rvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRHluYW1pY1dpZGdldFZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2R5bmFtaWMtd2lkZ2V0LXZpZXcuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdFRhYnNNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRcdE1hdFRhYmxlTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdFJvb3RDb21wb25lbnQsXHJcblx0XHRXaWRnZXRzTWFuYWdlbWVudENvbXBvbmVudCxcclxuXHRcdFVwc2VydENvbXBvbmVudCxcclxuXHRcdER5bmFtaWNXaWRnZXRDb25maWdEaXJlY3RpdmUsXHJcblx0XHREeW5hbWljV2lkZ2V0Vmlld0RpcmVjdGl2ZSxcclxuXHRcdFdpZGdldFNlbGVjdG9yQ29tcG9uZW50LFxyXG5cdFx0RHluYW1pY1dpZGdldFZpZXdDb21wb25lbnRcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogWyBXaWRnZXRTZWxlY3RvckNvbXBvbmVudCwgRHluYW1pY1dpZGdldFZpZXdDb21wb25lbnQgXSxcclxuXHRleHBvcnRzOiBbIER5bmFtaWNXaWRnZXRWaWV3RGlyZWN0aXZlLCBXaWRnZXRTZWxlY3RvckNvbXBvbmVudCwgRHluYW1pY1dpZGdldFZpZXdDb21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzV2lkZ2V0TW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBXaWRnZXRNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBOZ3NXaWRnZXRSb290TW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0sIFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlLCBXaWRnZXRTZXJ2aWNlIF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdE5nc1dpZGdldE1vZHVsZSxcclxuXHRcdFdpZGdldFJvdXRpbmdNb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwid2lkZ2V0c1wiLCBXaWRnZXRSZWR1Y2VyKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbIFdpZGdldERiRWZmZWN0cywgR2V0V2lkZ2V0QXBpRWZmZWN0cywgR2V0V2lkZ2V0c0FwaUVmZmVjdHMsIFVwc2VydFdpZGdldEFwaUVmZmVjdHMgXSlcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFsgTmdzV2lkZ2V0TW9kdWxlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc1dpZGdldFJvb3RNb2R1bGUge31cclxuIiwiaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi93aWRnZXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJV2lkZ2V0VmlldzxUPiB7XHJcblx0d2lkZ2V0OiBXaWRnZXRNb2RlbDxUPjtcclxufVxyXG4iLCJpbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIElXaWRnZXRVcHNlcnQ8VD4ge1xyXG5cdHdpZGdldDogV2lkZ2V0TW9kZWw8VD47XHJcbn1cclxuIl0sIm5hbWVzIjpbIlVwc2VydFdpZGdldEFwaU1vZGVsIiwiZnJvbVJvb3QuUmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUJBZ0JhLHFCQUFxQixHQUF1QjtJQUN4RCxlQUFlLEVBQUUsdUJBQXVCO0lBQ3hDLGNBQWMsRUFBRSxFQUFFO0lBQ2xCLEdBQUcsRUFBRTtRQUNKLFVBQVUsRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsU0FBUyxFQUFFO1FBQ1YsTUFBTSxFQUFFLG9DQUFvQztRQUM1QyxJQUFJLEVBQUUsb0NBQW9DO1FBQzFDLEdBQUcsRUFBRSxpREFBaUQ7S0FDdEQ7SUFDRCxLQUFLLEVBQUUsRUFBRTtDQUNULENBQUM7QUFDRix1QkFBYSxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBcUIsb0JBQW9CLENBQUM7Ozs7OztBQzdCL0Y7Ozs7O0lBY0MsWUFBeUMsVUFBVSxFQUFVLEtBQXNCO1FBQXRCLFVBQUssR0FBTCxLQUFLLENBQWlCO3VCQUR6RSxJQUFJLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQztRQUVuRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLHFCQUFxQixFQUFF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