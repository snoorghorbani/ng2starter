import { InjectionToken, Inject, Injectable, Component, ComponentFactoryResolver, ViewContainerRef, Input, Directive, NgModule } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { map, filter, tap, take, switchMap, startWith, catchError, pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { stringTemplate } from '@soushians/shared';
import { RouterModule, ActivatedRoute } from '@angular/router';
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
var GetWidgetsApiModel;
(function (GetWidgetsApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = {}) {
            Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
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
            Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
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
        this.Config = Config || (/** @type {?} */ ({}));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    class Response {
        constructor() { }
    }
    UpsertWidgetApiModel.Response = Response;
})(UpsertWidgetApiModel || (UpsertWidgetApiModel = {}));

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
const /** @type {?} */ MODULE_DEFAULT_CONFIG = {
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
        return this.configurationService.config$.pipe(filter((config) => config.endpoints.get !== ''), take(1), switchMap((config) => this.http.get(stringTemplate(config.env.frontend_server + config.endpoints.get, { _id }))), map((response) => response.Result));
    }
    /**
     * @return {?}
     */
    getWidgets() {
        return this.configurationService.config$.pipe(filter((config) => config.endpoints.find != ''), switchMap((config) => this.http.get(config.env.frontend_server + config.endpoints.find)), map((response) => response.Result));
    }
    /**
     * @template T
     * @param {?} widget
     * @return {?}
     */
    upsert(widget) {
        const /** @type {?} */ model = new UpsertWidgetApiModel.Request(widget);
        return this.configurationService.config$.pipe(filter((config) => config.endpoints.upsert != ''), take(1), switchMap((config) => this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody())), map((response) => response.Result));
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
            .subscribe((widget) => subject.next(widget));
        return subject.asObservable();
    }
}
WidgetService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
WidgetService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: WidgetConfigurationService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        this.widget$.pipe(filter(widget => widget != undefined)).subscribe(widget => {
            this._resolve_correct_component_base_on_widget_type(widget);
        });
    }
    /**
     * @return {?}
     */
    _fill_component_map() {
        this.configurationService.config$.pipe(map(config => config.types), startWith({})).subscribe(types => {
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
            debugger;
            const /** @type {?} */ supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
            throw new Error(`Trying to use an unsupported type (${widget.type}).
		  		 Supported types: ${supportedTypes}`);
        }
        const /** @type {?} */ component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[widget.type].view);
        this.component = this.container.createComponent(component);
        this.widget$.subscribe(w => (this.component.instance.widget = w));
    }
}
DynamicWidgetViewComponent.decorators = [
    { type: Component, args: [{
                selector: "widget",
                template: ""
            },] },
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
        this.widgets$ = this.store.select(state => state.widgets.db.data);
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
                template: `<div fxLayout="column wrap" fxLayoutGap="15px">
  <h4>لیست ویجت‌ها</h4>
        <mat-form-field fxFlex="100">
<mat-select placeholder="نوع ویجت" [(ngModel)]="selectedWidgetId" name="selectedWidgetId">
  <mat-option *ngFor="let item of (widgets$ | async)" [value]="item._id">
    {{item.type}} : <b>{{item.name}}</b>
  </mat-option>
</mat-select> 
</mat-form-field>
</div>`
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
                template: `<div fxLayout="row" fxLayoutAlign="center" fxLayoutGap="25px">
  <div fXFlex="30" fxLayout="row wrap">
    <button fxFlex="100" color="primary" mat-raised-button routerLink="../upsert/article">
      Add Article
    </button>
    <button fxFlex="100" color="primary" mat-raised-button routerLink="../upsert/links">
      Add Links
    </button>
  </div>
  <div fxFlex="70" fxLayout="row wrap" fxLayoutGap="25px">
    <mat-card class="cards-item" *ngFor="let item of (widgets$ | async)" fxFlex="33" fxLayout="row">
      <div fxFlex>
        <a [routerLink]="['../upsert' ,  item.type,  item._id]">
          <mat-icon aria-label="edit widget">edit</mat-icon>
        </a>
      </div>
      <div fxFlex>
        {{item.name}}
      </div>
      <div fxFlex>
        {{item.type}}
      </div>
    </mat-card>
  </div>
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
            newWidgets.forEach(newWidget => {
                const /** @type {?} */ existedWidgetIndex = _data.findIndex(w => w._id == newWidget._id);
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
            const /** @type {?} */ widgetIndex = state.data.findIndex(w => w._id == action.payload._id);
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
        this._react_base_on_params();
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
    _react_base_on_params() {
        this.route.params.subscribe(({ type, _id }) => {
            if (_id) {
                this.service.selectById(_id).subscribe((widget) => {
                    this._resolve_correct_component_base_on_widget_type(type, widget);
                });
            }
            else {
                this._resolve_correct_component_base_on_widget_type(type);
            }
        });
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
            const /** @type {?} */ supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
            throw new Error(`Trying to use an unsupported type (${type}).
		  		 Supported types: ${supportedTypes}`);
        }
        const /** @type {?} */ component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[type].upsert);
        this.component = this.container.createComponent(component);
        // this.widget$.subscribe((w) => (this.component.instance.widget = w));
        if (widget)
            this.component.instance.widget = widget;
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
        this.widget$.pipe(filter(widget => widget != undefined)).subscribe(widget => {
            this._resolve_correct_component_base_on_widget_type(widget);
        });
    }
    /**
     * @return {?}
     */
    _fill_component_map() {
        this.configurationService.config$.pipe(map(config => config.types), startWith({})).subscribe(types => {
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
        this.widget$.subscribe(w => (this.component.instance.widget = w));
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

export { UpsertWidgetStartAction, DynamicWidgetViewComponent, WidgetSelectorComponent, NgsWidgetModule, WidgetModel, IWidgetView, IWidgetUpsert, WidgetsManagementComponent as ɵh, RootComponent as ɵg, WidgetDbEffects as ɵn, Reducer as ɵm, GetWidgetApiEffects as ɵo, GetWidgetsApiEffects as ɵq, UpsertWidgetApiEffects as ɵs, WidgetConfigurationService as ɵf, WidgetService as ɵe, DynamicWidgetConfigDirective as ɵj, UpsertComponent as ɵi, DynamicWidgetViewDirective as ɵk, WidgetRoutingModule as ɵl, MODULE_CONFIG_TOKEN as ɵb, NgsWidgetRootModule as ɵa, WidgetReducer as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXdpZGdldC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0cy9nZXQtd2lkZ2V0cy5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0cy9nZXQtd2lkZ2V0cy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvYXBpL2dldC13aWRnZXQvZ2V0LXdpZGdldC5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0L2dldC13aWRnZXQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL21vZGVscy93aWRnZXQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LXdpZGdldC91cHNlcnQtd2lkZ2V0Lm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvYXBpL3Vwc2VydC13aWRnZXQvdXBzZXJ0LXdpZGdldC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvd2lkZ2V0LmNvbmZpZy50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3NlcnZpY2VzL3dpZGdldC1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy93aWRnZXQuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3ZpZXcvZHluYW1pYy13aWRnZXQtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi93aWRnZXQtc2VsZWN0b3Ivd2lkZ2V0LXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3Jvb3Qvcm9vdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9tYW5nZW1lbnQvd2lkZ2V0LW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvdXBzZXJ0L3Vwc2VydC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi93aWRnZXQtcm91dGluZy5tb2R1bGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldC9nZXQtd2lkZ2V0LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LXdpZGdldC91cHNlcnQtd2lkZ2V0LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldHMvZ2V0LXdpZGdldHMuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3Jvb3Qvd2lkZ2V0LmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9yb290L3dpZGdldHMucmVkdWNlcnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi93aWRnZXQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3Jvb3Qvd2lkZ2V0cy5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvdXBzZXJ0L2R5bmFtaWMtd2lkZ2V0LWNvbmZpZy5kaXJlY3RpdmUudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi92aWV3L2R5bmFtaWMtd2lkZ2V0LXZpZXcuZGlyZWN0aXZlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvd2lkZ2V0Lm1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL21vZGVscy93aWRnZXQtdmlldy5pbnRlcmZhY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9tb2RlbHMvd2lkZ2V0LXVwc2VydC5pbnRlcmZhY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBHZXRXaWRnZXRzQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7fTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IFdpZGdldE1vZGVsPGFueT5bXTtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRXaWRnZXRzQXBpTW9kZWwgfSBmcm9tIFwiLi9nZXQtd2lkZ2V0cy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbR0VUX1dJREdFVFNdW0FQSV1bR2V0V2lkZ2V0c10gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbR0VUX1dJREdFVFNdW0FQSV1bR2V0V2lkZ2V0c10gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW0dFVF9XSURHRVRTXVtBUEldW0dldFdpZGdldHNdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRzU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFdpZGdldHNTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT5bXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0c0ZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR2V0V2lkZ2V0c0FjdGlvbnMgPSBHZXRXaWRnZXRzU3RhcnRBY3Rpb24gfCBHZXRXaWRnZXRzU3VjY2VlZEFjdGlvbiB8IEdldFdpZGdldHNGYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgR2V0V2lkZ2V0QXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdF9pZDogc3RyaW5nO1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlID0ge30pIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogV2lkZ2V0TW9kZWw8YW55PjtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRXaWRnZXRBcGlNb2RlbCB9IGZyb20gXCIuL2dldC13aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gR0VUX1dJREdFVF9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbV0lER0VUXVtBUEldW0dldFdpZGdldF0gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbV0lER0VUXVtBUEldW0dldFdpZGdldF0gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW1dJREdFVF1bQVBJXVtHZXRXaWRnZXRdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9XSURHRVRfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFdpZGdldFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfV0lER0VUX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfV0lER0VUX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR2V0V2lkZ2V0QWN0aW9ucyA9IEdldFdpZGdldFN0YXJ0QWN0aW9uIHwgR2V0V2lkZ2V0U3VjY2VlZEFjdGlvbiB8IEdldFdpZGdldEZhaWxlZEFjdGlvbjtcclxuIiwiZXhwb3J0IGNsYXNzIFdpZGdldE1vZGVsPFQ+IHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0dHlwZTogc3RyaW5nO1xyXG5cdENvbmZpZzogVDtcclxuXHRjb25zdHJ1Y3Rvcih7IF9pZCwgbmFtZSwgdHlwZSwgQ29uZmlnIH06IHsgX2lkPzogc3RyaW5nOyBuYW1lPzogc3RyaW5nOyB0eXBlPzogc3RyaW5nOyBDb25maWc/OiBUIH0gPSB7fSkge1xyXG5cdFx0dGhpcy5faWQgPSBfaWQ7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lIHx8IFwiXCI7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdFx0dGhpcy5Db25maWcgPSBDb25maWcgfHwgKHt9IGFzIFQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFVwc2VydFdpZGdldEFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHR3aWRnZXQ6IFdpZGdldE1vZGVsPGFueT47XHJcblx0XHRjb25zdHJ1Y3Rvcih3aWRnZXQgPSB7fSkge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy53aWRnZXQgPSBuZXcgV2lkZ2V0TW9kZWwod2lkZ2V0KTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMud2lkZ2V0O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogV2lkZ2V0TW9kZWw8YW55PjtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVcHNlcnRXaWRnZXRBcGlNb2RlbCB9IGZyb20gXCIuL3Vwc2VydC13aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gVVBTRVJUX1dJREdFVF9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbVVBTRVJUX1dJREdFVF1bQVBJXVtVcHNlcnRXaWRnZXRdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW1VQU0VSVF9XSURHRVRdW0FQSV1bVXBzZXJ0V2lkZ2V0XSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbVVBTRVJUX1dJREdFVF1bQVBJXVtVcHNlcnRXaWRnZXRdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9XSURHRVRfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRXaWRnZXRTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX1dJREdFVF9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogV2lkZ2V0TW9kZWw8YW55Pikge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0V2lkZ2V0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX1dJREdFVF9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVwc2VydFdpZGdldEFjdGlvbnMgPSBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbiB8IFVwc2VydFdpZGdldFN1Y2NlZWRBY3Rpb24gfCBVcHNlcnRXaWRnZXRGYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IElNb2R1bGVDb25maWdNYXBUeXBlcyB9IGZyb20gXCIuL21vZGVscy9tb2R1bGUtY29uZmlnLW1hcC10eXBlcy5pbnRlcmZjZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaWRnZXRNb2R1bGVDb25maWcge1xyXG5cdGRldmVsb3BtZW50X3VyaT86IHN0cmluZztcclxuXHRwcm9kdWN0aW9uX3VyaT86IHN0cmluZztcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcblx0fTtcclxuXHRlbmRwb2ludHM/OiB7XHJcblx0XHRnZXQ6IHN0cmluZztcclxuXHRcdGZpbmQ6IHN0cmluZztcclxuXHRcdHVwc2VydDogc3RyaW5nO1xyXG5cdH07XHJcblx0dHlwZXM/OiBJTW9kdWxlQ29uZmlnTWFwVHlwZXM7XHJcbn1cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogV2lkZ2V0TW9kdWxlQ29uZmlnID0ge1xyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2UsXHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IFwiZnJvbnRlbmRfc2VydmVyL2RpZC9ub3Qvc2V0XCJcclxuXHR9LFxyXG5cdGVuZHBvaW50czoge1xyXG5cdFx0dXBzZXJ0OiBcIi9hcGkvdWl3aWRnZXRcIixcclxuXHRcdGZpbmQ6IFwiL2FwaS91aXdpZGdldFwiLFxyXG5cdFx0Z2V0OiBcIi9hcGkvdWl3aWRnZXQvJHttb2RlbC5faWR9XCJcclxuXHR9LFxyXG5cdHR5cGVzOiB7fVxyXG59O1xyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxXaWRnZXRNb2R1bGVDb25maWc+KFwiV2lkZ2V0TW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kdWxlQ29uZmlnLCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi4vd2lkZ2V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogV2lkZ2V0TW9kdWxlQ29uZmlnO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cdH1cclxuXHRjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdChNT0RVTEVfREVGQVVMVF9DT05GSUcpO1xyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIHRoaXMuc3RvcmUuc2VsZWN0KGdldFdpZGdldE1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKCh3aWRnZXRDb25maWcpID0+IHtcclxuXHRcdC8vIFx0aWYgKCF3aWRnZXRDb25maWcpIHtcclxuXHRcdC8vIFx0XHRyZXR1cm47XHJcblx0XHQvLyBcdH1cclxuXHRcdC8vIFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCB3aWRnZXRDb25maWcuQ29uZmlnKTtcclxuXHRcdC8vIFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgdGFwLCB0YWtlLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuLi93aWRnZXQucmVkdWNlcic7XHJcbmltcG9ydCB7IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi93aWRnZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsJztcclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tICdAc291c2hpYW5zL3NoYXJlZCc7XHJcbmltcG9ydCB7IEdldFdpZGdldHNBcGlNb2RlbCwgR2V0V2lkZ2V0U3RhcnRBY3Rpb24sIFVwc2VydFdpZGdldEFwaU1vZGVsIH0gZnJvbSAnLi9hcGknO1xyXG5cclxuLy8gaW1wb3J0IHsgZ2V0V2lkZ2V0TW9kdWxlQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3dpZGdldC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuLy8gaW1wb3J0IHsgV2lkZ2V0UnVuU3VjY2Vzc2Z1bGx5QWN0aW9uIH0gZnJvbSBcIi4uL3dpZGdldC5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXRTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7fVxyXG5cclxuXHRnZXQ8VD4oX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPFQ+PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmdldCAhPT0gJycpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGNvbmZpZykgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAuZ2V0KHN0cmluZ1RlbXBsYXRlKGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5nZXQsIHsgX2lkIH0pKVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBVcHNlcnRXaWRnZXRBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGdldFdpZGdldHMoKTogT2JzZXJ2YWJsZTxXaWRnZXRNb2RlbDxhbnk+W10+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZmluZCAhPSAnJyksXHJcblx0XHRcdHN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5maW5kKSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IEdldFdpZGdldHNBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0dXBzZXJ0PFQ+KHdpZGdldDogVXBzZXJ0V2lkZ2V0QXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8VD4+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IFVwc2VydFdpZGdldEFwaU1vZGVsLlJlcXVlc3Qod2lkZ2V0KTtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMudXBzZXJ0ICE9ICcnKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0c3dpdGNoTWFwKChjb25maWcpID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLnBvc3QoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLnVwc2VydCwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSlcclxuXHRcdFx0KSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogVXBzZXJ0V2lkZ2V0QXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cdC8vIGRlbGV0ZShfaWQ6IHN0cmluZykge1xyXG5cdC8vIFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJFxyXG5cdC8vIFx0XHQuZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlRm9ybSAhPSBcIlwiKVxyXG5cdC8vIFx0XHQuc3dpdGNoTWFwKChjb25maWcpID0+IHRoaXMuaHR0cC5nZXQoY29uZmlnLmVuZHBvaW50cy5kZWxldGVGb3JtKSk7XHJcblx0Ly8gfVxyXG5cdHNlbGVjdEJ5SWQ8VD4oX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPFQ+PiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxXaWRnZXRNb2RlbDxUPj4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLndpZGdldHMuZGIuZGF0YSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0ZmlsdGVyKCh3aWRnZXRzKSA9PiB3aWRnZXRzICE9IG51bGwpLFxyXG5cdFx0XHRcdG1hcCgod2lkZ2V0cykgPT4gd2lkZ2V0cy5maW5kKCh3aWRnZXQpID0+IHdpZGdldC5faWQgPT0gX2lkKSksXHJcblx0XHRcdFx0dGFwKCh3aWRnZXQpID0+IHtcclxuXHRcdFx0XHRcdGlmICh3aWRnZXQgPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRXaWRnZXRTdGFydEFjdGlvbihfaWQpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoKHdpZGdldCkgPT4gc3ViamVjdC5uZXh0KHdpZGdldCkpO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRDb21wb25lbnRSZWYsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0RGlyZWN0aXZlLFxyXG5cdElucHV0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgcGx1Y2ssIGZpbHRlciwgc3dpdGNoTWFwLCBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBJTW9kdWxlQ29uZmlnTWFwVHlwZXMgfSBmcm9tIFwiLi4vbW9kZWxzL21vZHVsZS1jb25maWctbWFwLXR5cGVzLmludGVyZmNlXCI7XHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvd2lkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvd2lkZ2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwid2lkZ2V0XCIsXHJcblx0dGVtcGxhdGU6IFwiXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNXaWRnZXRWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBvaWQoaWQ6IHN0cmluZykge1xyXG5cdFx0dGhpcy5fc2VsZWN0V2lkZ2V0KGlkKTtcclxuXHR9XHJcblx0d2lkZ2V0JDogT2JzZXJ2YWJsZTxXaWRnZXRNb2RlbDxhbnk+PjtcclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cdG1hcFR5cGVUb0NvbXBvbmVudDogSU1vZHVsZUNvbmZpZ01hcFR5cGVzO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXHJcblx0KSB7XHJcblx0XHR0aGlzLl9maWxsX2NvbXBvbmVudF9tYXAoKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLndpZGdldCQucGlwZShmaWx0ZXIod2lkZ2V0ID0+IHdpZGdldCAhPSB1bmRlZmluZWQpKS5zdWJzY3JpYmUod2lkZ2V0ID0+IHtcclxuXHRcdFx0dGhpcy5fcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHdpZGdldCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0X2ZpbGxfY29tcG9uZW50X21hcCgpIHtcclxuXHRcdHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKG1hcChjb25maWcgPT4gY29uZmlnLnR5cGVzKSwgc3RhcnRXaXRoKHt9KSkuc3Vic2NyaWJlKHR5cGVzID0+IHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRoaXMubWFwVHlwZVRvQ29tcG9uZW50ID0gdHlwZXM7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0X3NlbGVjdFdpZGdldChpZDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLndpZGdldCQgPSB0aGlzLnNlcnZpY2Uuc2VsZWN0QnlJZDxhbnk+KGlkKTtcclxuXHR9XHJcblx0X3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh3aWRnZXQpIHtcclxuXHRcdGlmICghdGhpcy5tYXBUeXBlVG9Db21wb25lbnRbd2lkZ2V0LnR5cGVdKSB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRjb25zdCBzdXBwb3J0ZWRUeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMubWFwVHlwZVRvQ29tcG9uZW50KS5qb2luKFwiLCBcIik7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHRgVHJ5aW5nIHRvIHVzZSBhbiB1bnN1cHBvcnRlZCB0eXBlICgke3dpZGdldC50eXBlfSkuXHJcblx0XHQgIFx0XHQgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt3aWRnZXQudHlwZV0udmlldyk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG5cdFx0dGhpcy53aWRnZXQkLnN1YnNjcmliZSh3ID0+ICh0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS53aWRnZXQgPSB3KSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IElHcmlkSXRlbUNvbXBvbmVudCB9IGZyb20gXCJAc291c2hpYW5zL2dyaWRcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgSVdpZGdldFZpZXdJbnB1dEludGVyZmFjZSB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0LXZpZXctaW5wdXQuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3dpZGdldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdldFdpZGdldHNTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cImNvbHVtbiB3cmFwXCIgZnhMYXlvdXRHYXA9XCIxNXB4XCI+XHJcbiAgPGg0PsOZwoTDm8KMw5jCs8OYwqogw5nCiMObwozDmMKsw5jCqsOiwoDCjMOZwofDmMKnPC9oND5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiMTAwXCI+XHJcbjxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiw5nChsOZwojDmMK5IMOZwojDm8KMw5jCrMOYwqpcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkV2lkZ2V0SWRcIiBuYW1lPVwic2VsZWN0ZWRXaWRnZXRJZFwiPlxyXG4gIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mICh3aWRnZXRzJCB8IGFzeW5jKVwiIFt2YWx1ZV09XCJpdGVtLl9pZFwiPlxyXG4gICAge3tpdGVtLnR5cGV9fSA6IDxiPnt7aXRlbS5uYW1lfX08L2I+XHJcbiAgPC9tYXQtb3B0aW9uPlxyXG48L21hdC1zZWxlY3Q+IFxyXG48L21hdC1mb3JtLWZpZWxkPlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXRTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSUdyaWRJdGVtQ29tcG9uZW50PElXaWRnZXRWaWV3SW5wdXRJbnRlcmZhY2U+IHtcclxuXHR3aWRnZXRzJDogT2JzZXJ2YWJsZTxXaWRnZXRNb2RlbDxhbnk+W10+O1xyXG5cdHNlbGVjdGVkV2lkZ2V0SWQ6IHN0cmluZztcclxuXHRnZXQgdmFsaWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWcub2lkICE9IHVuZGVmaW5lZDtcclxuXHR9XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG9pZDogdGhpcy5zZWxlY3RlZFdpZGdldElkXHJcblx0XHR9O1xyXG5cdH1cclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy53aWRnZXRzJCA9IHRoaXMuc3RvcmUuc2VsZWN0KHN0YXRlID0+IHN0YXRlLndpZGdldHMuZGIuZGF0YSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0V2lkZ2V0c1N0YXJ0QWN0aW9uKCkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwid2lkZ2V0LXJvb3RcIixcclxuXHR0ZW1wbGF0ZTogXCI8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3RDb21wb25lbnQge31cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHZXRXaWRnZXRzU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL2dldC13aWRnZXRzL2dldC13aWRnZXRzLmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICA8ZGl2IGZYRmxleD1cIjMwXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiPlxyXG4gICAgPGJ1dHRvbiBmeEZsZXg9XCIxMDBcIiBjb2xvcj1cInByaW1hcnlcIiBtYXQtcmFpc2VkLWJ1dHRvbiByb3V0ZXJMaW5rPVwiLi4vdXBzZXJ0L2FydGljbGVcIj5cclxuICAgICAgQWRkIEFydGljbGVcclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBmeEZsZXg9XCIxMDBcIiBjb2xvcj1cInByaW1hcnlcIiBtYXQtcmFpc2VkLWJ1dHRvbiByb3V0ZXJMaW5rPVwiLi4vdXBzZXJ0L2xpbmtzXCI+XHJcbiAgICAgIEFkZCBMaW5rc1xyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBmeEZsZXg9XCI3MFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgIDxtYXQtY2FyZCBjbGFzcz1cImNhcmRzLWl0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiAod2lkZ2V0cyQgfCBhc3luYylcIiBmeEZsZXg9XCIzM1wiIGZ4TGF5b3V0PVwicm93XCI+XHJcbiAgICAgIDxkaXYgZnhGbGV4PlxyXG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnLi4vdXBzZXJ0JyAsICBpdGVtLnR5cGUsICBpdGVtLl9pZF1cIj5cclxuICAgICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiZWRpdCB3aWRnZXRcIj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGZ4RmxleD5cclxuICAgICAgICB7e2l0ZW0ubmFtZX19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGZ4RmxleD5cclxuICAgICAgICB7e2l0ZW0udHlwZX19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0c01hbmFnZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHdpZGdldHMkOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPGFueT5bXT47XHJcblx0Y29uc3RydWN0b3IocHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMud2lkZ2V0cyQgPSB0aGlzLnN0b3JlLnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLndpZGdldHMuZGIuZGF0YSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0V2lkZ2V0c1N0YXJ0QWN0aW9uKCkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgIDxkaXYgZnhGbGV4PVwiNTBcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyIG5nc0R5bmFtaWNXaWRnZXRDb25maWc+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0Q29tcG9uZW50IHt9XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFJvb3RDb21wb25lbnQgfSBmcm9tIFwiLi9yb290L3Jvb3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFdpZGdldHNNYW5hZ2VtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vbWFuZ2VtZW50L3dpZGdldC1tYW5hZ2VtZW50LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVcHNlcnRDb21wb25lbnQgfSBmcm9tIFwiLi91cHNlcnQvdXBzZXJ0LmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogXCJ3aWRnZXRcIixcclxuXHRcdGNvbXBvbmVudDogUm9vdENvbXBvbmVudCxcclxuXHRcdGNoaWxkcmVuOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcIm1hbmFnZW1lbnRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFdpZGdldHNNYW5hZ2VtZW50Q29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInVwc2VydC86dHlwZVwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogVXBzZXJ0Q29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInVwc2VydC86dHlwZS86X2lkXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBVcHNlcnRDb21wb25lbnRcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBXaWRnZXRSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3dpZGdldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0R0VUX1dJREdFVF9BQ1RJT05fVFlQRVMsXHJcblx0R2V0V2lkZ2V0QWN0aW9ucyxcclxuXHRHZXRXaWRnZXRTdWNjZWVkQWN0aW9uLFxyXG5cdEdldFdpZGdldEZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL2dldC13aWRnZXQuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0QXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxHZXRXaWRnZXRBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBXaWRnZXRTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9XSURHRVRfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcCgoYWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgocGF5bG9hZCkgPT4gdGhpcy5zZXJ2aWNlLmdldChwYXlsb2FkKSksXHJcblx0XHRcdG1hcCgocmVzKSA9PiBuZXcgR2V0V2lkZ2V0U3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgR2V0V2lkZ2V0RmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0U2VydmljZSB9IGZyb20gXCIuLi8uLi93aWRnZXQuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG5cdFVQU0VSVF9XSURHRVRfQUNUSU9OX1RZUEVTLFxyXG5cdFVwc2VydFdpZGdldEFjdGlvbnMsXHJcblx0VXBzZXJ0V2lkZ2V0U3VjY2VlZEFjdGlvbixcclxuXHRVcHNlcnRXaWRnZXRGYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi91cHNlcnQtd2lkZ2V0LmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVwc2VydFdpZGdldEFwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8VXBzZXJ0V2lkZ2V0QWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogV2lkZ2V0U2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShVUFNFUlRfV0lER0VUX0FDVElPTl9UWVBFUy5TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoKGFjdGlvbikgPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKHBheWxvYWQpID0+IHRoaXMuc2VydmljZS51cHNlcnQocGF5bG9hZCkpLFxyXG5cdFx0XHRtYXAoKHJlcykgPT4gbmV3IFVwc2VydFdpZGdldFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IFVwc2VydFdpZGdldEZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vd2lkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMsXHJcblx0R2V0V2lkZ2V0c0FjdGlvbnMsXHJcblx0R2V0V2lkZ2V0c1N1Y2NlZWRBY3Rpb24sXHJcblx0R2V0V2lkZ2V0c0ZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL2dldC13aWRnZXRzLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdldFdpZGdldHNBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPEdldFdpZGdldHNBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBXaWRnZXRTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUy5TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRzd2l0Y2hNYXAoKCkgPT5cclxuXHRcdFx0XHR0aGlzLnNlcnZpY2VcclxuXHRcdFx0XHRcdC5nZXRXaWRnZXRzKClcclxuXHRcdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0XHRtYXAoKHJlcykgPT4gbmV3IEdldFdpZGdldHNTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRcdFx0XHRjYXRjaEVycm9yKChlcnIpID0+IG9mKG5ldyBHZXRXaWRnZXRzRmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gV2lkZ2V0c0FjdGlvblR5cGVzIHtcclxuXHRVUFNFUlQgPSBcIltXSURHRVRdW0RCXSBVUFNFUlRcIixcclxuXHRERUxFVEUgPSBcIltXSURHRVRdW0RCXSBERUxFVEVcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0V2lkZ2V0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gV2lkZ2V0c0FjdGlvblR5cGVzLlVQU0VSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogV2lkZ2V0TW9kZWw8YW55PltdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVXaWRnZXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBXaWRnZXRzQWN0aW9uVHlwZXMuREVMRVRFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBXaWRnZXRzQWN0aW9ucyA9IFVwc2VydFdpZGdldEFjdGlvbiB8IERlbGV0ZVdpZGdldEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBXaWRnZXRzQWN0aW9ucywgV2lkZ2V0c0FjdGlvblR5cGVzIH0gZnJvbSBcIi4vd2lkZ2V0LmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGRhdGE6IFdpZGdldE1vZGVsPGFueT5bXTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRkYXRhOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogV2lkZ2V0c0FjdGlvbnMpOiBTdGF0ZSB7XHJcblx0bGV0IF9kYXRhOiBXaWRnZXRNb2RlbDxhbnk+W107XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBXaWRnZXRzQWN0aW9uVHlwZXMuVVBTRVJUOlxyXG5cdFx0XHRfZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdGNvbnN0IG5ld1dpZGdldHMgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcblx0XHRcdG5ld1dpZGdldHMuZm9yRWFjaChuZXdXaWRnZXQgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGV4aXN0ZWRXaWRnZXRJbmRleCA9IF9kYXRhLmZpbmRJbmRleCh3ID0+IHcuX2lkID09IG5ld1dpZGdldC5faWQpO1xyXG5cdFx0XHRcdGlmIChleGlzdGVkV2lkZ2V0SW5kZXggPiAtMSkge1xyXG5cdFx0XHRcdFx0X2RhdGEuc3BsaWNlKGV4aXN0ZWRXaWRnZXRJbmRleCwgMSwgbmV3V2lkZ2V0KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0X2RhdGEucHVzaChuZXdXaWRnZXQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IF9kYXRhXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBXaWRnZXRzQWN0aW9uVHlwZXMuREVMRVRFOlxyXG5cdFx0XHRfZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmRhdGEpO1xyXG5cclxuXHRcdFx0Y29uc3Qgd2lkZ2V0SW5kZXggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleCh3ID0+IHcuX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdF9kYXRhLnNwbGljZSh3aWRnZXRJbmRleCwgMSk7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IF9kYXRhXHJcblx0XHRcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFdpZGdldHMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG4iLCJpbXBvcnQgKiBhcyBmcm9tUm9vdCBmcm9tIFwiLi9yb290L3dpZGdldHMucmVkdWNlcnNcIjtcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuZXhwb3J0IGludGVyZmFjZSBXaWRnZXRTdGF0ZSB7XHJcblx0ZGI6IGZyb21Sb290LlN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgV2lkZ2V0UmVkdWNlciA9IHtcclxuXHRkYjogZnJvbVJvb3QuUmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XHJcblx0d2lkZ2V0czogV2lkZ2V0U3RhdGU7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgcGx1Y2sgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IEdFVF9XSURHRVRfQUNUSU9OX1RZUEVTLCBHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0QWN0aW9uIH0gZnJvbSBcIi4vd2lkZ2V0LmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdpZGdldERiRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+KSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfV0lER0VUX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKHdpZGdldDogV2lkZ2V0TW9kZWw8YW55PikgPT4gbmV3IFVwc2VydFdpZGdldEFjdGlvbihbIHdpZGdldCBdKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnRNYW55JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTLlNVQ0NFRUQpXHJcblx0XHQucGlwZShwbHVjayhcInBheWxvYWRcIiksIG1hcCgod2lkZ2V0czogV2lkZ2V0TW9kZWw8YW55PltdKSA9PiBuZXcgVXBzZXJ0V2lkZ2V0QWN0aW9uKHdpZGdldHMpKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENvbXBvbmVudFJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBWaWV3Q29udGFpbmVyUmVmLCBEaXJlY3RpdmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgcGx1Y2ssIGZpbHRlciwgc3dpdGNoTWFwLCBtYXAsIHN0YXJ0V2l0aCwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3dpZGdldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvd2lkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvd2lkZ2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBJTW9kdWxlQ29uZmlnTWFwVHlwZXMgfSBmcm9tIFwiLi4vbW9kZWxzL21vZHVsZS1jb25maWctbWFwLXR5cGVzLmludGVyZmNlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogXCJbbmdzRHluYW1pY1dpZGdldENvbmZpZ11cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY1dpZGdldENvbmZpZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PjtcclxuXHRtYXBUeXBlVG9Db21wb25lbnQ6IElNb2R1bGVDb25maWdNYXBUeXBlcztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXHJcblx0KSB7XHJcblx0XHR0aGlzLl9maWxsX2NvbXBvbmVudF9tYXAoKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLl9yZWFjdF9iYXNlX29uX3BhcmFtcygpO1xyXG5cdH1cclxuXHRfZmlsbF9jb21wb25lbnRfbWFwKCkge1xyXG5cdFx0dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUobWFwKChjb25maWcpID0+IGNvbmZpZy50eXBlcyksIHN0YXJ0V2l0aCh7fSkpLnN1YnNjcmliZSgodHlwZXMpID0+IHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRoaXMubWFwVHlwZVRvQ29tcG9uZW50ID0gdHlwZXM7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0X3JlYWN0X2Jhc2Vfb25fcGFyYW1zKCkge1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKCh7IHR5cGUsIF9pZCB9KSA9PiB7XHJcblx0XHRcdGlmIChfaWQpIHtcclxuXHRcdFx0XHR0aGlzLnNlcnZpY2Uuc2VsZWN0QnlJZDxhbnk+KF9pZCkuc3Vic2NyaWJlKCh3aWRnZXQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuX3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh0eXBlLCB3aWRnZXQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuX3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh0eXBlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUodHlwZTogc3RyaW5nLCB3aWRnZXQ/OiBXaWRnZXRNb2RlbDxhbnk+KSB7XHJcblx0XHRpZiAodGhpcy5jb21wb25lbnQpIHtcclxuXHRcdFx0dGhpcy5jb21wb25lbnQuZGVzdHJveSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghdGhpcy5tYXBUeXBlVG9Db21wb25lbnRbdHlwZV0pIHtcclxuXHRcdFx0Y29uc3Qgc3VwcG9ydGVkVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCkuam9pbihcIiwgXCIpO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoJHt0eXBlfSkuXHJcblx0XHQgIFx0XHQgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt0eXBlXS51cHNlcnQpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdC8vIHRoaXMud2lkZ2V0JC5zdWJzY3JpYmUoKHcpID0+ICh0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS53aWRnZXQgPSB3KSk7XHJcblx0XHRpZiAod2lkZ2V0KSB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS53aWRnZXQgPSB3aWRnZXQ7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRDb21wb25lbnRSZWYsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0RGlyZWN0aXZlLFxyXG5cdElucHV0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgcGx1Y2ssIGZpbHRlciwgc3dpdGNoTWFwLCBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgV2lkZ2V0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy93aWRnZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy93aWRnZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElNb2R1bGVDb25maWdNYXBUeXBlcyB9IGZyb20gXCIuLi9tb2RlbHMvbW9kdWxlLWNvbmZpZy1tYXAtdHlwZXMuaW50ZXJmY2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiBcIltuZ3NEeW5hbWljV2lkZ2V0Vmlld11cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY1dpZGdldFZpZXdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IG9pZChpZDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLl9zZWxlY3RXaWRnZXQoaWQpO1xyXG5cdH1cclxuXHR3aWRnZXQkOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPGFueT4+O1xyXG5cdGNvbXBvbmVudDogQ29tcG9uZW50UmVmPGFueT47XHJcblx0bWFwVHlwZVRvQ29tcG9uZW50OiBJTW9kdWxlQ29uZmlnTWFwVHlwZXM7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwdWJsaWMgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG5cdFx0cHJpdmF0ZSBzZXJ2aWNlOiBXaWRnZXRTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0XHRwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZlxyXG5cdCkge1xyXG5cdFx0dGhpcy5fZmlsbF9jb21wb25lbnRfbWFwKCk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy53aWRnZXQkLnBpcGUoZmlsdGVyKHdpZGdldCA9PiB3aWRnZXQgIT0gdW5kZWZpbmVkKSkuc3Vic2NyaWJlKHdpZGdldCA9PiB7XHJcblx0XHRcdHRoaXMuX3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh3aWRnZXQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9maWxsX2NvbXBvbmVudF9tYXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShtYXAoY29uZmlnID0+IGNvbmZpZy50eXBlcyksIHN0YXJ0V2l0aCh7fSkpLnN1YnNjcmliZSh0eXBlcyA9PiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHR0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCA9IHR5cGVzO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9zZWxlY3RXaWRnZXQoaWQ6IHN0cmluZykge1xyXG5cdFx0dGhpcy53aWRnZXQkID0gdGhpcy5zZXJ2aWNlLnNlbGVjdEJ5SWQ8YW55PihpZCk7XHJcblx0fVxyXG5cdF9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUod2lkZ2V0KSB7XHJcblx0XHRpZiAoIXRoaXMubWFwVHlwZVRvQ29tcG9uZW50W3dpZGdldC50eXBlXSkge1xyXG5cdFx0XHRjb25zdCBzdXBwb3J0ZWRUeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMubWFwVHlwZVRvQ29tcG9uZW50KS5qb2luKFwiLCBcIik7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHRgVHJ5aW5nIHRvIHVzZSBhbiB1bnN1cHBvcnRlZCB0eXBlICgke3dpZGdldC50eXBlfSkuXHJcblx0XHQgIFx0XHQgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt3aWRnZXQudHlwZV0udmlldyk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG5cdFx0dGhpcy53aWRnZXQkLnN1YnNjcmliZSh3ID0+ICh0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS53aWRnZXQgPSB3KSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmVEZXZ0b29sc01vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZS1kZXZ0b29sc1wiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdFRhYnNNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRNYXRDaGVja2JveCxcclxuXHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRNYXRUYWJsZU1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy93aWRnZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy93aWRnZXQuc2VydmljZVwiO1xyXG4vLyBpbXBvcnQgeyBXaWRnZXRSZWR1Y2VyIH0gZnJvbSBcIi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgV2lkZ2V0TW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vd2lkZ2V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBXaWRnZXRSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vd2lkZ2V0LXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IFJvb3RDb21wb25lbnQgfSBmcm9tIFwiLi9yb290L3Jvb3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEdldFdpZGdldEFwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldC9nZXQtd2lkZ2V0LmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0QXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS91cHNlcnQtd2lkZ2V0L3Vwc2VydC13aWRnZXQuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBHZXRXaWRnZXRzQXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0cy9nZXQtd2lkZ2V0cy5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFdpZGdldFJlZHVjZXIgfSBmcm9tIFwiLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBXaWRnZXREYkVmZmVjdHMgfSBmcm9tIFwiLi9yb290L3dpZGdldHMuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBXaWRnZXRzTWFuYWdlbWVudENvbXBvbmVudCB9IGZyb20gXCIuL21hbmdlbWVudC93aWRnZXQtbWFuYWdlbWVudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXBzZXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vdXBzZXJ0L3Vwc2VydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRHluYW1pY1dpZGdldENvbmZpZ0RpcmVjdGl2ZSB9IGZyb20gXCIuL3Vwc2VydC9keW5hbWljLXdpZGdldC1jb25maWcuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IER5bmFtaWNXaWRnZXRWaWV3RGlyZWN0aXZlIH0gZnJvbSBcIi4vdmlldy9keW5hbWljLXdpZGdldC12aWV3LmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gXCIuL3dpZGdldC1zZWxlY3Rvci93aWRnZXQtc2VsZWN0b3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IER5bmFtaWNXaWRnZXRWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9keW5hbWljLXdpZGdldC12aWV3LmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRUYWJzTW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0XHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdFx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0XHRNYXRUYWJsZU1vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRSb290Q29tcG9uZW50LFxyXG5cdFx0V2lkZ2V0c01hbmFnZW1lbnRDb21wb25lbnQsXHJcblx0XHRVcHNlcnRDb21wb25lbnQsXHJcblx0XHREeW5hbWljV2lkZ2V0Q29uZmlnRGlyZWN0aXZlLFxyXG5cdFx0RHluYW1pY1dpZGdldFZpZXdEaXJlY3RpdmUsXHJcblx0XHRXaWRnZXRTZWxlY3RvckNvbXBvbmVudCxcclxuXHRcdER5bmFtaWNXaWRnZXRWaWV3Q29tcG9uZW50XHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFsgV2lkZ2V0U2VsZWN0b3JDb21wb25lbnQsIER5bmFtaWNXaWRnZXRWaWV3Q29tcG9uZW50IF0sXHJcblx0ZXhwb3J0czogWyBEeW5hbWljV2lkZ2V0Vmlld0RpcmVjdGl2ZSwgV2lkZ2V0U2VsZWN0b3JDb21wb25lbnQsIER5bmFtaWNXaWRnZXRWaWV3Q29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc1dpZGdldE1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogV2lkZ2V0TW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogTmdzV2lkZ2V0Um9vdE1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9LCBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSwgV2lkZ2V0U2VydmljZSBdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHROZ3NXaWRnZXRNb2R1bGUsXHJcblx0XHRXaWRnZXRSb3V0aW5nTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcIndpZGdldHNcIiwgV2lkZ2V0UmVkdWNlciksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBXaWRnZXREYkVmZmVjdHMsIEdldFdpZGdldEFwaUVmZmVjdHMsIEdldFdpZGdldHNBcGlFZmZlY3RzLCBVcHNlcnRXaWRnZXRBcGlFZmZlY3RzIF0pXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIE5nc1dpZGdldE1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NXaWRnZXRSb290TW9kdWxlIHt9XHJcbiIsImltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4vd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSVdpZGdldFZpZXc8VD4ge1xyXG5cdHdpZGdldDogV2lkZ2V0TW9kZWw8VD47XHJcbn1cclxuIiwiaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi93aWRnZXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJV2lkZ2V0VXBzZXJ0PFQ+IHtcclxuXHR3aWRnZXQ6IFdpZGdldE1vZGVsPFQ+O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJmcm9tUm9vdC5SZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFpQixrQkFBa0I7QUFBbkMsV0FBaUIsa0JBQWtCO0lBQ2xDOzs7O1FBQ0MsWUFBWSxTQUFTLEdBQUcsRUFBRTtZQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEU7Ozs7UUFFRCxjQUFjO1lBQ2IsT0FBTyxFQUFFLENBQUM7U0FDVjtLQUNEO0lBUlksMEJBQU87SUFVcEI7UUFFQyxpQkFBZ0I7S0FDaEI7SUFIWSwyQkFBUTtHQVhMLGtCQUFrQixLQUFsQixrQkFBa0IsUUFlbEM7Ozs7Ozs7Ozs7Q0NKQTs7Ozs7SUFHQSxZQUFtQixPQUEyQjtRQUEzQixZQUFPLEdBQVAsT0FBTyxDQUFvQjs7S0FBSTtDQUNsRDs7Ozs7SUFHQSxZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSzs7S0FBSTtDQUNuQzs7Ozs7Ozs7Ozs7QUNuQkQsSUFBaUIsaUJBQWlCO0FBQWxDLFdBQWlCLGlCQUFpQjtJQUNqQzs7OztRQUVDLFlBQVksU0FBUyxHQUFHLEVBQUU7WUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BFOzs7O1FBRUQsY0FBYztZQUNiLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7S0FDRDtJQVRZLHlCQUFPO0lBV3BCO1FBRUMsaUJBQWdCO0tBQ2hCO0lBSFksMEJBQVE7R0FaTCxpQkFBaUIsS0FBakIsaUJBQWlCLFFBZ0JqQzs7Ozs7Ozs7OztJQ0xBLFlBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFROztLQUFJO0NBQ3RDOzs7OztJQUdBLFlBQW1CLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCOztLQUFJO0NBQ2hEOzs7OztJQUdBLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLOztLQUFJO0NBQ25DOzs7Ozs7Ozs7Ozs7OztBQ3RCRDs7OztJQUtDLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEtBQWlFLEVBQUU7UUFDdkcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLHVCQUFLLEVBQU8sRUFBQyxDQUFDO0tBQ2xDO0NBQ0Q7Ozs7OztBQ1hELElBRWlCLG9CQUFvQjtBQUFyQyxXQUFpQixvQkFBb0I7SUFDcEM7Ozs7UUFFQyxZQUFZLE1BQU0sR0FBRyxFQUFFO1lBQ3RCLFNBQVM7WUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RDOzs7O1FBRUQsY0FBYztZQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNuQjtLQUNEO0lBVlksNEJBQU87SUFZcEI7UUFFQyxpQkFBZ0I7S0FDaEI7SUFIWSw2QkFBUTtHQWJMLG9CQUFvQixLQUFwQixvQkFBb0IsUUFpQnBDOzs7Ozs7Ozs7O0lDTkEsWUFBbUIsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7O0tBQUk7Q0FDaEQ7Ozs7O0lBR0EsWUFBbUIsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7O0tBQUk7Q0FDaEQ7Ozs7O0lBR0EsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7O0tBQUk7Q0FDbkM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkQsQUFrQk8sdUJBQU0scUJBQXFCLEdBQXVCO0lBQ3hELEdBQUcsRUFBRTtRQUNKLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGVBQWUsRUFBRSw2QkFBNkI7S0FDOUM7SUFDRCxTQUFTLEVBQUU7UUFDVixNQUFNLEVBQUUsZUFBZTtRQUN2QixJQUFJLEVBQUUsZUFBZTtRQUNyQixHQUFHLEVBQUUsNEJBQTRCO0tBQ2pDO0lBQ0QsS0FBSyxFQUFFLEVBQUU7Q0FDVCxDQUFDO0FBQ0YsdUJBQWEsbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQXFCLG9CQUFvQixDQUFDOzs7Ozs7QUM5Qi9GOzs7OztJQWNDLFlBQXlDLFVBQVUsRUFBVSxLQUFzQjtRQUF0QixVQUFLLEdBQUwsS0FBSyxDQUFpQjt1QkFEekUsSUFBSSxlQUFlLENBQUMscUJBQXFCLENBQUM7UUFFbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7O0tBUWhDOzs7O0lBZEQsSUFBSSxNQUFNO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3BCOzs7WUFMRCxVQUFVOzs7OzRDQU9HLE1BQU0sU0FBQyxtQkFBbUI7WUFaL0IsS0FBSzs7Ozs7OztBQ0ZkOzs7Ozs7SUFtQkMsWUFDUyxNQUNBLE9BQ0E7UUFGQSxTQUFJLEdBQUosSUFBSTtRQUNKLFVBQUssR0FBTCxLQUFLO1FBQ0wseUJBQW9CLEdBQXBCLG9CQUFvQjtLQUN6Qjs7Ozs7O0lBRUosR0FBRyxDQUFJLEdBQVc7UUFDakIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDNUMsTUFBTSxDQUFDLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUMvQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsU0FBUyxDQUFDLENBQUMsTUFBTSxLQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQ3pGLEVBQ0QsR0FBRyxDQUFDLENBQUMsUUFBdUMsS0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQ2pFLENBQUM7S0FDRjs7OztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM1QyxNQUFNLENBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEVBQy9DLFNBQVMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3hGLEdBQUcsQ0FBQyxDQUFDLFFBQXFDLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUMvRCxDQUFDO0tBQ0Y7Ozs7OztJQUNELE1BQU0sQ0FBSSxNQUFvQztRQUM3Qyx1QkFBTSxLQUFLLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkQsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDNUMsTUFBTSxDQUFDLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxFQUNqRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsU0FBUyxDQUFDLENBQUMsTUFBTSxLQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FDNUYsRUFDRCxHQUFHLENBQUMsQ0FBQyxRQUF1QyxLQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FDakUsQ0FBQztLQUNGOzs7Ozs7SUFNRCxVQUFVLENBQUksR0FBVztRQUN4Qix1QkFBTSxPQUFPLEdBQUcsSUFBSSxlQUFlLENBQWlCLFNBQVMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxLQUFLO2FBQ1IsTUFBTSxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzthQUN4QyxJQUFJLENBQ0osTUFBTSxDQUFDLENBQUMsT0FBTyxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsRUFDcEMsR0FBRyxDQUFDLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUM3RCxHQUFHLENBQUMsQ0FBQyxNQUFNO1lBQ1YsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO2dCQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDbkQ7U0FDRCxDQUFDLENBQ0Y7YUFDQSxTQUFTLENBQUMsQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQzlCOzs7WUF6REQsVUFBVTs7OztZQWJGLFVBQVU7WUFEVixLQUFLO1lBSUwsMEJBQTBCOzs7Ozs7O0FDUG5DOzs7Ozs7OztJQStCQyxZQUNRLE9BQ0MsU0FDQSxzQkFDQSxVQUNBO1FBSkQsVUFBSyxHQUFMLEtBQUs7UUFDSixZQUFPLEdBQVAsT0FBTztRQUNQLHlCQUFvQixHQUFwQixvQkFBb0I7UUFDcEIsYUFBUSxHQUFSLFFBQVE7UUFDUixjQUFTLEdBQVQsU0FBUztRQUVqQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztLQUMzQjs7Ozs7SUFmRCxJQUNJLEdBQUcsQ0FBQyxFQUFVO1FBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDdkI7Ozs7SUFhRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTTtZQUN4RSxJQUFJLENBQUMsOENBQThDLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUQsQ0FBQyxDQUFDO0tBQ0g7Ozs7SUFDRCxtQkFBbUI7UUFDbEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUs7WUFDakcsU0FBUztZQUNULElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7U0FDaEMsQ0FBQyxDQUFDO0tBQ0g7Ozs7O0lBQ0QsYUFBYSxDQUFDLEVBQVU7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBTSxFQUFFLENBQUMsQ0FBQztLQUNoRDs7Ozs7SUFDRCw4Q0FBOEMsQ0FBQyxNQUFNO1FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFDLFNBQVM7WUFDVCx1QkFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkUsTUFBTSxJQUFJLEtBQUssQ0FDZCxzQ0FBc0MsTUFBTSxDQUFDLElBQUk7MEJBQzNCLGNBQWMsRUFBRSxDQUN0QyxDQUFDO1NBQ0Y7UUFDRCx1QkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2xFOzs7WUEvQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUUsRUFBRTthQUNaOzs7O1lBWlEsS0FBSztZQU1MLGFBQWE7WUFDYiwwQkFBMEI7WUFibEMsd0JBQXdCO1lBQ3hCLGdCQUFnQjs7O2tCQW1CZixLQUFLOzs7Ozs7O0FDeEJQOzs7O0lBa0NDLFlBQW1CLEtBQXNCO1FBQXRCLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xFOzs7O0lBVkQsSUFBSSxLQUFLO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUM7S0FDcEM7Ozs7SUFDRCxJQUFJLE1BQU07UUFDVCxPQUFPO1lBQ04sR0FBRyxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7U0FDMUIsQ0FBQztLQUNGOzs7O0lBSUQsUUFBUTtRQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUkscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO0tBQ2pEOzs7WUE1QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRTs7Ozs7Ozs7O09BU0o7YUFDTjs7OztZQXBCUSxLQUFLOzs7Ozs7O0FDRmQ7OztZQUVDLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLGlDQUFpQzthQUMzQzs7Ozs7OztBQ0xEOzs7O0lBcUNDLFlBQW1CLEtBQXNCO1FBQXRCLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDcEU7Ozs7SUFDRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsRUFBRSxDQUFDLENBQUM7S0FDakQ7OztZQWxDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F3Qko7YUFDTjs7OztZQWhDUSxLQUFLOzs7Ozs7O0FDRmQ7OztZQUVDLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUU7Ozs7T0FJSjthQUNOOzs7Ozs7O0FDUEQsQUFNQSx1QkFBTSxNQUFNLEdBQVc7SUFDdEI7UUFDQyxJQUFJLEVBQUUsUUFBUTtRQUNkLFNBQVMsRUFBRSxhQUFhO1FBQ3hCLFFBQVEsRUFBRTtZQUNUO2dCQUNDLElBQUksRUFBRSxZQUFZO2dCQUNsQixTQUFTLEVBQUUsMEJBQTBCO2FBQ3JDO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLFNBQVMsRUFBRSxlQUFlO2FBQzFCO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsU0FBUyxFQUFFLGVBQWU7YUFDMUI7U0FDRDtLQUNEO0NBQ0QsQ0FBQztBQUVGLHVCQUFhLG1CQUFtQixHQUF3QixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7SUNacEYsWUFBb0IsUUFBbUMsRUFBVSxPQUFzQjtRQUFuRSxhQUFRLEdBQVIsUUFBUSxDQUEyQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWU7c0JBRzlFLElBQUksQ0FBQyxRQUFRO2FBQ3BCLE1BQU0sOENBQStCO2FBQ3JDLElBQUksQ0FDSixHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUMvQixTQUFTLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsRUFDakQsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksc0JBQXNCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDN0MsVUFBVSxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDdkQ7S0FWeUY7OztZQUYzRixVQUFVOzs7O1lBWkYsT0FBTztZQUlQLGFBQWE7OztJQVlwQixNQUFNLEVBQUU7Ozs7Ozs7Ozs7Ozs7SUNGVCxZQUFvQixRQUFzQyxFQUFVLE9BQXNCO1FBQXRFLGFBQVEsR0FBUixRQUFRLENBQThCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZTtzQkFHakYsSUFBSSxDQUFDLFFBQVE7YUFDcEIsTUFBTSx3REFBa0M7YUFDeEMsSUFBSSxDQUNKLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQy9CLFNBQVMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUNwRCxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNoRCxVQUFVLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksd0JBQXdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUMxRDtLQVY0Rjs7O1lBRjlGLFVBQVU7Ozs7WUFaRixPQUFPO1lBSVAsYUFBYTs7O0lBWXBCLE1BQU0sRUFBRTs7Ozs7Ozs7Ozs7OztJQ0ZULFlBQW9CLFFBQW9DLEVBQVUsT0FBc0I7UUFBcEUsYUFBUSxHQUFSLFFBQVEsQ0FBNEI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFlO3NCQUcvRSxJQUFJLENBQUMsUUFBUTthQUNwQixNQUFNLG9EQUFnQzthQUN0QyxJQUFJLENBQ0osU0FBUyxDQUFDLE1BQ1QsSUFBSSxDQUFDLE9BQU87YUFDVixVQUFVLEVBQUU7YUFDWixJQUFJLENBQ0osR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDOUMsVUFBVSxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDeEQsQ0FDRixDQUNEO0tBZDBGOzs7WUFGNUYsVUFBVTs7OztZQVpGLE9BQU87WUFJUCxhQUFhOzs7SUFZcEIsTUFBTSxFQUFFOzs7Ozs7Ozs7O1lDYkEscUJBQXFCO1lBQ3JCLHFCQUFxQjs7Ozs7O0lBSzlCLFlBQW1CLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO29CQUQ5QixrQkFBa0IsQ0FBQyxNQUFNO0tBQ1M7Q0FDbEQ7Ozs7OztBQ1hELFdBT08sRUFBRTtBQURULHVCQUFNLFlBQVksR0FBVTtJQUMzQixJQUFJLElBQUk7Q0FDUixDQUFDOzs7Ozs7QUFFRixpQkFBd0IsS0FBSyxHQUFHLFlBQVksRUFBRSxNQUFzQjtJQUNuRSxxQkFBSSxLQUF5QixDQUFDO0lBQzlCLFFBQVEsTUFBTSxDQUFDLElBQUk7UUFDbEIsS0FBSyxrQkFBa0IsQ0FBQyxNQUFNO1lBQzdCLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVCLHVCQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBRWxDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUztnQkFDM0IsdUJBQU0sa0JBQWtCLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hFLElBQUksa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQzVCLEtBQUssQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2lCQUMvQztxQkFBTTtvQkFDTixLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUN0QjthQUNELENBQUMsQ0FBQztZQUVILHlCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsS0FBSyxJQUNWO1FBRUgsS0FBSyxrQkFBa0IsQ0FBQyxNQUFNO1lBQzdCLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFdEMsdUJBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0UsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFN0IseUJBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxLQUFLLElBQ1Y7UUFFSDtZQUNDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Q0FDRDs7Ozs7O0FDOUNELHVCQU9hLGFBQWEsR0FBRztJQUM1QixFQUFFLEVBQUVBLE9BQWdCO0NBQ3BCOzs7Ozs7Ozs7O0lDRUEsWUFBb0IsUUFBc0I7UUFBdEIsYUFBUSxHQUFSLFFBQVEsQ0FBYzt1QkFHaEMsSUFBSSxDQUFDLFFBQVE7YUFDckIsTUFBTSxrREFBaUM7YUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUF3QixLQUFLLElBQUksa0JBQWtCLENBQUMsQ0FBRSxNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUM7MkJBR2pGLElBQUksQ0FBQyxRQUFRO2FBQ3pCLE1BQU0sd0RBQWtDO2FBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBMkIsS0FBSyxJQUFJLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FWakQ7OztZQUY5QyxVQUFVOzs7O1lBUkYsT0FBTzs7O0lBWWQsTUFBTSxFQUFFOzs7O0lBS1IsTUFBTSxFQUFFOzs7Ozs7OztBQ2xCVjs7Ozs7Ozs7O0lBa0JDLFlBQ1EsT0FDQyxPQUNBLFNBQ0Esc0JBQ0EsVUFDQTtRQUxELFVBQUssR0FBTCxLQUFLO1FBQ0osVUFBSyxHQUFMLEtBQUs7UUFDTCxZQUFPLEdBQVAsT0FBTztRQUNQLHlCQUFvQixHQUFwQixvQkFBb0I7UUFDcEIsYUFBUSxHQUFSLFFBQVE7UUFDUixjQUFTLEdBQVQsU0FBUztRQUVqQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztLQUMzQjs7OztJQUNELFFBQVE7UUFDUCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztLQUM3Qjs7OztJQUNELG1CQUFtQjtRQUNsQixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUs7WUFDcEcsU0FBUztZQUNULElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7U0FDaEMsQ0FBQyxDQUFDO0tBQ0g7Ozs7SUFDRCxxQkFBcUI7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQ3pDLElBQUksR0FBRyxFQUFFO2dCQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFNLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU07b0JBQ2xELElBQUksQ0FBQyw4Q0FBOEMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQ2xFLENBQUMsQ0FBQzthQUNIO2lCQUFNO2dCQUNOLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMxRDtTQUNELENBQUMsQ0FBQztLQUNIOzs7Ozs7SUFDRCw4Q0FBOEMsQ0FBQyxJQUFZLEVBQUUsTUFBeUI7UUFDckYsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDekI7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25DLHVCQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RSxNQUFNLElBQUksS0FBSyxDQUNkLHNDQUFzQyxJQUFJOzBCQUNwQixjQUFjLEVBQUUsQ0FDdEMsQ0FBQztTQUNGO1FBQ0QsdUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25HLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7O1FBRTNELElBQUksTUFBTTtZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7S0FDcEQ7OztZQXBERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjthQUNwQzs7OztZQVpRLEtBQUs7WUFDTCxjQUFjO1lBS2QsYUFBYTtZQUNiLDBCQUEwQjtZQVRPLHdCQUF3QjtZQUFFLGdCQUFnQjs7Ozs7OztBQ0FwRjs7Ozs7Ozs7O0lBK0JDLFlBQ1EsT0FDQyxPQUNBLFNBQ0Esc0JBQ0EsVUFDQTtRQUxELFVBQUssR0FBTCxLQUFLO1FBQ0osVUFBSyxHQUFMLEtBQUs7UUFDTCxZQUFPLEdBQVAsT0FBTztRQUNQLHlCQUFvQixHQUFwQixvQkFBb0I7UUFDcEIsYUFBUSxHQUFSLFFBQVE7UUFDUixjQUFTLEdBQVQsU0FBUztRQUVqQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztLQUMzQjs7Ozs7SUFoQkQsSUFDSSxHQUFHLENBQUMsRUFBVTtRQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZCOzs7O0lBY0QsUUFBUTtRQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU07WUFDeEUsSUFBSSxDQUFDLDhDQUE4QyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVELENBQUMsQ0FBQztLQUNIOzs7O0lBQ0QsbUJBQW1CO1FBQ2xCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLO1lBQ2pHLFNBQVM7WUFDVCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1NBQ2hDLENBQUMsQ0FBQztLQUNIOzs7OztJQUNELGFBQWEsQ0FBQyxFQUFVO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQU0sRUFBRSxDQUFDLENBQUM7S0FDaEQ7Ozs7O0lBQ0QsOENBQThDLENBQUMsTUFBTTtRQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMxQyx1QkFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkUsTUFBTSxJQUFJLEtBQUssQ0FDZCxzQ0FBc0MsTUFBTSxDQUFDLElBQUk7MEJBQzNCLGNBQWMsRUFBRSxDQUN0QyxDQUFDO1NBQ0Y7UUFDRCx1QkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2xFOzs7WUE5Q0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx3QkFBd0I7YUFDbEM7Ozs7WUFaUSxLQUFLO1lBRUwsY0FBYztZQUlkLGFBQWE7WUFDYiwwQkFBMEI7WUFibEMsd0JBQXdCO1lBQ3hCLGdCQUFnQjs7O2tCQW1CZixLQUFLOzs7Ozs7O0FDeEJQOzs7OztJQStFQyxPQUFPLE9BQU8sQ0FBQyxNQUEyQjtRQUN6QyxPQUFPO1lBQ04sUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixTQUFTLEVBQUUsQ0FBRSxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUUsMEJBQTBCLEVBQUUsYUFBYSxDQUFFO1NBQzVHLENBQUM7S0FDRjs7O1lBeENELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixZQUFZO29CQUNaLGtCQUFrQjtvQkFDbEIsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixlQUFlO29CQUNmLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsZ0JBQWdCO29CQUNoQixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsb0JBQW9CO29CQUNwQixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsY0FBYztpQkFDZDtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsYUFBYTtvQkFDYiwwQkFBMEI7b0JBQzFCLGVBQWU7b0JBQ2YsNEJBQTRCO29CQUM1QiwwQkFBMEI7b0JBQzFCLHVCQUF1QjtvQkFDdkIsMEJBQTBCO2lCQUMxQjtnQkFDRCxlQUFlLEVBQUUsQ0FBRSx1QkFBdUIsRUFBRSwwQkFBMEIsQ0FBRTtnQkFDeEUsT0FBTyxFQUFFLENBQUUsMEJBQTBCLEVBQUUsdUJBQXVCLEVBQUUsMEJBQTBCLENBQUU7YUFDNUY7O0FBbUJEOzs7WUFUQyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUM7b0JBQ2hELGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsc0JBQXNCLENBQUUsQ0FBQztpQkFDaEg7Z0JBQ0QsT0FBTyxFQUFFLENBQUUsZUFBZSxDQUFFO2FBQzVCOzs7Ozs7Ozs7O0FDN0ZEO0NBRUM7Ozs7Ozs7OztBQ0ZEO0NBRUM7Ozs7Ozs7Ozs7Ozs7OyJ9