import { FormGroup, FormControl, Validators, FormBuilder, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InjectionToken, Injectable, Inject, Component, Output, EventEmitter, Input, Injector, ComponentFactoryResolver, ViewChild, ViewContainerRef, ReflectiveInjector, NgModule, defineInjectable, inject } from '@angular/core';
import { createSelector, createFeatureSelector, Store, StoreModule } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { __decorate, __metadata } from 'tslib';
import { Observable as Observable$1 } from 'rxjs/Observable';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule, MatSlideToggleModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
class ConfigModel {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GetConfigsApiModel;
(function (GetConfigsApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = /** @type {?} */ ({})) {
            Object.keys(initValue).forEach(key => (/** @type {?} */ (this))[key] = (/** @type {?} */ (initValue))[key]);
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {};
        }
    }
    GetConfigsApiModel.Request = Request;
    class Response {
        constructor() {
        }
    }
    GetConfigsApiModel.Response = Response;
})(GetConfigsApiModel || (GetConfigsApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EditConfigApiModel;
(function (EditConfigApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = /** @type {?} */ ({})) {
            Object.keys(initValue).forEach(key => (/** @type {?} */ (this))[key] = (/** @type {?} */ (initValue))[key]);
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            debugger;
            return {
                Name: this.Name,
                Config: this.Config
            };
        }
        /**
         * @return {?}
         */
        static get formGroup() {
            return new FormGroup({
                Name: new FormControl('', [Validators.required]),
                Config: new FormGroup({}),
            });
        }
    }
    EditConfigApiModel.Request = Request;
    class Response {
        constructor() {
        }
    }
    EditConfigApiModel.Response = Response;
})(EditConfigApiModel || (EditConfigApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    dev_api_host: 'http://localhost:3000',
    prod_api_host: 'http://5.196.149.107:3000',
    env: {
        production: false
    }
};
const /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken('UserModuleConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const ConfigActionTypes = {
    GET_CONFIGS: "[CONFIG] get config",
    CONFIG_LOADED_SUCCEED: "[CONFIG] load config succeed",
    UPDATE_CONFIG: "[CONFIG] update config",
    CONFIG_LOADED_FAILED: "[CONFIG] load config failed",
};
class GetConfigAction {
    constructor() {
        this.type = ConfigActionTypes.GET_CONFIGS;
    }
}
class ConfigLoadedSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ConfigActionTypes.CONFIG_LOADED_SUCCEED;
    }
}
class ConfigLoadedFailedAction {
    constructor() {
        this.type = ConfigActionTypes.CONFIG_LOADED_FAILED;
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
    switch (action.type) {
        case ConfigActionTypes.CONFIG_LOADED_SUCCEED:
            return Object.assign({}, state, { data: action.payload });
        case ConfigActionTypes.UPDATE_CONFIG:
            return Object.assign({}, state, { data: state.data.map(config => {
                    debugger;
                    if (config._id == action.payload._id)
                        config.Config = action.payload.Config;
                    return config;
                }) });
        default:
            return state;
    }
}
const /** @type {?} */ getConfigs = (state) => state.data;
const /** @type {?} */ getAppConfig = (state) => state.data.find(config => config.Name == "app_config");
const /** @type {?} */ getAuthenticationModuleConfig = (state) => state.data.find(config => config.Name == "authentication_module_config");
const /** @type {?} */ getUserModuleConfig = (state) => state.data.find(config => config.Name == "user_module_config");
const /** @type {?} */ getlayoutModuleConfig = (state) => /** @type {?} */ (state.data.find(config => config.Name == "layout_config"));
const /** @type {?} */ getConfigModuleConfig = (state) => /** @type {?} */ (state.data.find(config => config.Name == "config_module_config"));
const /** @type {?} */ getFormModuleConfig = (state) => /** @type {?} */ (state.data.find(config => config.Name == "form_module_config"));
const /** @type {?} */ getSocketModuleConfig = (state) => /** @type {?} */ (state.data.find(config => config.Name == "socket_module_config"));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ ConfigReducers = {
    list: Reducer
};
//#region selectors
const /** @type {?} */ selectConfigState = createFeatureSelector("config");
//#endregion
const /** @type {?} */ getConfigListState = createSelector(selectConfigState, (state) => state.list);
const /** @type {?} */ getConfigs$1 = createSelector(getConfigListState, getConfigs);
const /** @type {?} */ getAppConfig$1 = createSelector(getConfigListState, getAppConfig);
const /** @type {?} */ getAuthenticationModuleConfig$1 = createSelector(getConfigListState, getAuthenticationModuleConfig);
const /** @type {?} */ getUserModuleConfig$1 = createSelector(getConfigListState, getUserModuleConfig);
const /** @type {?} */ getlayoutModuleConfig$1 = createSelector(getConfigListState, getlayoutModuleConfig);
const /** @type {?} */ getConfigModuleConfig$1 = createSelector(getConfigListState, getConfigModuleConfig);
const /** @type {?} */ getFormModuleConfig$1 = createSelector(getConfigListState, getFormModuleConfig);
const /** @type {?} */ getSocketModuleConfig$1 = createSelector(getConfigListState, getSocketModuleConfig);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ConfigurationService {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    constructor(configFile, store) {
        this.store = store;
        this.config$ = new BehaviorSubject(this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getConfigModuleConfig$1).subscribe(configConfig => {
            if (!configConfig)
                return;
            this._config = Object.assign({}, this._config, configConfig.Config);
            this.config$.next(this._config);
        });
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
}
ConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
ConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];
/** @nocollapse */ ConfigurationService.ngInjectableDef = defineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(inject(MODULE_CONFIG_TOKEN), inject(Store)); }, token: ConfigurationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ConfigService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     */
    constructor(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        this.configsEndpoint = this.configurationService.config.env.production
            ? this.configurationService.config.prod_api_host
            : this.configurationService.config.dev_api_host;
        setTimeout(() => {
            this.store.dispatch(new GetConfigAction());
        }, 999);
    }
    /**
     * @return {?}
     */
    getConfigs() {
        return (this.http
            .get(`${this.configsEndpoint}/api/config`)
            .take(1)
            .map((response) => {
            if (this.configurationService.config.env.production) {
                const /** @type {?} */ dev_api_host = this.configurationService.config.dev_api_host;
                const /** @type {?} */ prod_api_host = this.configurationService.config.prod_api_host;
                return JSON.parse(JSON.stringify(response).replace(new RegExp(dev_api_host, "g"), prod_api_host)).Result;
            }
            else {
                return response.Result;
            }
        })
            .catch(err => {
            return Observable.throw(err);
        }));
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getConfigByName(name) {
        return this.http.get(`${this.configsEndpoint}/api/config/${name}`).map(response => response).catch(err => {
            return Observable.throw(err);
        });
    }
    /**
     * @param {?} body
     * @return {?}
     */
    editConfig(body) {
        var /** @type {?} */ model = new EditConfigApiModel.Request(body);
        return this.http
            .put(`${this.configsEndpoint}/api/config/${model.Name}`, model.getRequestBody())
            .map(response => response)
            .catch(err => {
            return Observable.throw(err);
        });
    }
    /**
     * @return {?}
     */
    getLayoutConfigs() {
        return this.http
            .get(`${this.configsEndpoint}/api/layout-config`)
            .map((response) => response)
            .catch(err => {
            return Observable.throw(err);
        });
    }
}
ConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
ConfigService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: ConfigurationService }
];
/** @nocollapse */ ConfigService.ngInjectableDef = defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(inject(HttpClient), inject(Store), inject(ConfigurationService)); }, token: ConfigService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ConfigsComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.configs = this.store.select(getConfigs$1);
    }
}
ConfigsComponent.decorators = [
    { type: Component, args: [{
                selector: "configs",
                template: `<div fxFlexLayout="row" fxLayoutWrap fxLayoutAlign="center center">
  <mat-card class="config-box" *ngFor="let config of (configs | async)" [fxFlex]="50">
      <h3>
        <a [routerLink]="['edit' ,  config.Name]">
          <mat-icon aria-label="edit config">edit</mat-icon>
        </a>
        {{config.Name}}
      </h3>
  </mat-card>
</div>`,
                styles: [`:host{width:100%}.config-box{margin:15px}`]
            },] },
];
/** @nocollapse */
ConfigsComponent.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ConfigEditComponent {
    /**
     * @param {?} configService
     * @param {?} formBuilder
     * @param {?} route
     */
    constructor(configService, formBuilder, route) {
        this.configService = configService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.formGroup = EditConfigApiModel.Request.formGroup;
        this.route.params.subscribe(params => {
            const /** @type {?} */ configName = params["name"];
            this.configService.getConfigByName(configName).subscribe(data => {
                this.partialConfigModel = {
                    type: data.Result.Name,
                    inputs: {
                        configFormGroup: /** @type {?} */ (this.formGroup.controls["Config"])
                    }
                };
                this.formGroup.patchValue({
                    _id: data.Result._id,
                    Name: data.Result.Name
                });
                Object.keys(data.Result.Config).forEach(key => {
                    this.addControl(/** @type {?} */ (this.formGroup.controls["Config"]), key, data.Result.Config[key]);
                });
            });
        });
    }
    /**
     * @param {?} formGroup
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    addControl(formGroup, key, value) {
        if (value instanceof Array) {
            formGroup.addControl(key, this.formBuilder.array(value));
        }
        else if (value instanceof Object) {
            formGroup.addControl(key, this.formBuilder.group(value));
        }
        else {
            formGroup.addControl(key, new FormControl(value));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} event
     * @return {?}
     */
    configChanged(event) {
        debugger;
        this.formGroup.controls["Config"].patchValue(event);
    }
    /**
     * @return {?}
     */
    edit() {
        debugger;
        if (!this.formGroup.valid)
            return;
        this.configService.editConfig(this.formGroup.value).subscribe(config => {
            debugger;
        });
    }
}
ConfigEditComponent.decorators = [
    { type: Component, args: [{
                selector: "config-config-edit",
                template: `<div >
  <form [formGroup]="formGroup" (ngSubmit)="edit()" fxLayout="column">
    <mat-card>
      <mat-card-content>
          <dynamic-config-component-selector (configChanged)="configChanged($event)" [data]="partialConfigModel"></dynamic-config-component-selector>
      </mat-card-content>
      <mat-card-actions fxLayoutAlign="center center">
        <button fxFlex="nogrow" type="submit" mat-raised-button color="primary" (click)="edit">ویرایش</button>
        <button fxFlex="nogrow" type="button" routerLink="/configs" mat-raised-button>بازگشت</button>
      </mat-card-actions>
    </mat-card>
  </form>
</div>`
            },] },
];
/** @nocollapse */
ConfigEditComponent.ctorParameters = () => [
    { type: ConfigService },
    { type: FormBuilder },
    { type: ActivatedRoute }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ConfigAppConfigComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.formGroup = new FormGroup({ AppTitle: new FormControl("", [Validators.required]) });
        this.configChanged = new EventEmitter();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    /**
     * @param {?} configFormGroup
     * @return {?}
     */
    set configFormGroup(configFormGroup) {
        this.formGroup.patchValue(configFormGroup.value);
        configFormGroup.valueChanges.subscribe(data => {
            this.formGroup.patchValue(data);
        });
    }
}
ConfigAppConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "config-app-config",
                template: `<div [formGroup]="formGroup">
    <mat-form-field>
        <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="نام پروژه" formControlName="AppTitle">
    </mat-form-field>
</div>`
            },] },
];
/** @nocollapse */
ConfigAppConfigComponent.ctorParameters = () => [
    { type: Injector }
];
ConfigAppConfigComponent.propDecorators = {
    configFormGroup: [{ type: Input }],
    configChanged: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UserModuleConfigComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.formGroup = new FormGroup({
            endpoints: new FormGroup({
                changePassword: new FormControl("", [Validators.required]),
                editProfile: new FormControl("", [Validators.required]),
                getUserInfo: new FormControl("", [Validators.required]),
                profileInformation: new FormControl("", [Validators.required])
            }),
            forms: new FormGroup({
                profile_edit: new FormControl("", [Validators.required])
            }),
            dashboardLinks: new FormArray([])
        });
        this.configChanged = new EventEmitter();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    /**
     * @param {?} configFormGroup
     * @return {?}
     */
    set configFormGroup(configFormGroup) {
        this._configFormGroup = configFormGroup;
        (/** @type {?} */ (configFormGroup.controls["dashboardLinks"])).controls.forEach(control => {
            (/** @type {?} */ (this.formGroup.controls["dashboardLinks"])).push(new FormGroup({
                route: new FormControl("", [Validators.required]),
                icon: new FormControl("", [Validators.required]),
                title: new FormControl("", [Validators.required])
            }));
        });
        this.formGroup.patchValue(configFormGroup.value);
        configFormGroup.valueChanges.subscribe(data => {
            this.formGroup.patchValue(data);
        });
    }
    /**
     * @return {?}
     */
    get configFormGroup() {
        return this._configFormGroup;
    }
    /**
     * @return {?}
     */
    addMenu() {
        var /** @type {?} */ menuItem = new FormGroup({
            route: new FormControl("", [Validators.required]),
            icon: new FormControl("", [Validators.required]),
            title: new FormControl("", [Validators.required])
        });
        (/** @type {?} */ (this.formGroup.get("dashboardLinks"))).push(menuItem);
        (/** @type {?} */ (this.configFormGroup.get("dashboardLinks"))).push(menuItem);
    }
}
UserModuleConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "config-user-module-config",
                template: `<h2>Endpoints</h2>
<div [formGroup]="formGroup.get('endpoints')" fxLayout="column">
        <mat-form-field>
            <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="change password" formControlName="changePassword">
        </mat-form-field>
        <mat-form-field>
            <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="edit profile" formControlName="editProfile">
        </mat-form-field>
        <mat-form-field>
            <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="get user info" formControlName="getUserInfo">
        </mat-form-field>
        <mat-form-field>
            <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="Profile Information Endpoint" formControlName="profileInformation">
        </mat-form-field>
</div>
<h2>Forms</h2>
<div [formGroup]="formGroup.get('forms')" fxLayout="column">
    <mat-form-field>
        <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="profile edit" formControlName="profile_edit">
    </mat-form-field>
            <!-- <ngs-form-selector (select)="setFormId($event,'signIn')"></ngs-form-selector> -->
</div>


<h2 fxFlex="100">
    Dashobard Links
    <button mat-icon-button color="primary" (click)="addMenu()">
        <mat-icon aria-label="icon-button icon">add</mat-icon>
    </button>
</h2>
<div fxFlex="100" *ngFor="let item of $any(formGroup.get('dashboardLinks')).controls">
    <div [formGroup]="item">
        <mat-form-field>
            <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="route" formControlName="route">
        </mat-form-field>
        <mat-form-field>
            <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="icon" formControlName="icon">
        </mat-form-field>
        <mat-form-field>
            <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="title" formControlName="title">
        </mat-form-field>
    </div>
</div>`
            },] },
];
/** @nocollapse */
UserModuleConfigComponent.ctorParameters = () => [
    { type: Injector }
];
UserModuleConfigComponent.propDecorators = {
    configFormGroup: [{ type: Input }],
    configChanged: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LayoutModuleConfigComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.formGroup = new FormGroup({
            layoutMode: new FormControl("", [Validators.required]),
            showLeftNavBar: new FormControl("", [Validators.required]),
            mainSideNavMode: new FormControl("", [Validators.required]),
            showMainSidenav: new FormControl("", [Validators.required]),
            stickyLeftNavBar: new FormControl("", [Validators.required]),
            showSecondSideNav: new FormControl("", [Validators.required]),
            secondSideNavMode: new FormControl("", [Validators.required]),
            menuItems: new FormArray([])
        });
        this.configChanged = new EventEmitter();
        this.roleItems = ["Admin", "User"];
        this.sideNavModes = ["over", "push", "side"];
        this.layoutModes = ["with-margin", "without-margin", "default"];
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    /**
     * @param {?} configFormGroup
     * @return {?}
     */
    set configFormGroup(configFormGroup) {
        this._configFormGroup = configFormGroup;
        (/** @type {?} */ (configFormGroup.controls["menuItems"])).controls.forEach((control) => {
            (/** @type {?} */ (this.formGroup.controls.menuItems)).push(new FormGroup({
                route: new FormControl("", [Validators.required]),
                icon: new FormControl("", [Validators.required]),
                // roles: new FormArray(control.value.roles.map((i) => new FormControl("Admin"))),
                roles: new FormControl(),
                title: new FormControl("", [Validators.required])
            }));
        });
        this.formGroup.patchValue(configFormGroup.value);
        configFormGroup.valueChanges.subscribe((data) => this.formGroup.patchValue(data));
    }
    /**
     * @return {?}
     */
    get configFormGroup() {
        return this._configFormGroup;
    }
    /**
     * @return {?}
     */
    addMenu() {
        var /** @type {?} */ menuItem = new FormGroup({
            route: new FormControl("", [Validators.required]),
            icon: new FormControl("", [Validators.required]),
            roles: new FormControl(),
            title: new FormControl("", [Validators.required])
        });
        (/** @type {?} */ (this.formGroup.get("menuItems"))).push(menuItem);
        (/** @type {?} */ (this.configFormGroup.get("menuItems"))).push(menuItem);
    }
}
LayoutModuleConfigComponent.decorators = [
    { type: Component, args: [{
                template: `<div fxFlexLayout="row" fxLayoutWrap fxLayoutAlign="center center">
    <div fxFlex="100" fxFlexLayout="row">
        <div [formGroup]="formGroup">
            <mat-form-field>
                <mat-select (change)="configChanged.emit(formGroup.value)" placeholder="layout mode" formControlName="layoutMode" >
                    <mat-option *ngFor="let item of layoutModes" [value]="item">{{item}}</mat-option>
                </mat-select> 
            </mat-form-field>
            <mat-slide-toggle  (change)="configChanged.emit(formGroup.value)"  formControlName="showLeftNavBar">show left navbar</mat-slide-toggle>
            <mat-form-field>
                <mat-select (change)="configChanged.emit(formGroup.value)" placeholder="main side nav mode" formControlName="mainSideNavMode" >
                    <mat-option *ngFor="let item of sideNavModes" [value]="item">{{item}}</mat-option>
                </mat-select> 
            </mat-form-field>
            <mat-slide-toggle  (change)="configChanged.emit(formGroup.value)"  formControlName="showMainSidenav">show main side nav</mat-slide-toggle>
            <mat-slide-toggle  (change)="configChanged.emit(formGroup.value)"  formControlName="stickyLeftNavBar">sticky left navbar</mat-slide-toggle>
            <mat-slide-toggle  (change)="configChanged.emit(formGroup.value)"  formControlName="showSecondSideNav">show second side nav</mat-slide-toggle>
            <mat-form-field>
                <mat-select (change)="configChanged.emit(formGroup.value)" placeholder="second side nav mode" formControlName="secondSideNavMode" >
                    <mat-option *ngFor="let item of sideNavModes" [value]="item">{{item}}</mat-option>
                </mat-select> 
            </mat-form-field>
        </div>
    </div>

    <h2 fxFlex="100">
        Menu Items
        <button mat-icon-button color="primary" (click)="addMenu()">
            <mat-icon aria-label="icon-button icon">add</mat-icon>
        </button>
    </h2>
    <div fxFlex="100" *ngFor="let item of formGroup.controls.menuItems.controls">
        <div [formGroup]="item">
            <mat-form-field>
                <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="route" formControlName="route">
            </mat-form-field>
            <mat-form-field>
                <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="icon" formControlName="icon">
            </mat-form-field>
            <mat-form-field>
                <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="title" formControlName="title">
            </mat-form-field>
            <mat-form-field> 
                <mat-select (change)="configChanged.emit(formGroup.value)" placeholder="roles" formControlName="roles" multiple>
                    <mat-option *ngFor="let role of roleItems" [value]="role">{{role}}</mat-option>
                </mat-select> 
            </mat-form-field>
        </div>
    </div>
</div>`
            },] },
];
/** @nocollapse */
LayoutModuleConfigComponent.ctorParameters = () => [
    { type: Injector }
];
LayoutModuleConfigComponent.propDecorators = {
    configFormGroup: [{ type: Input }],
    configChanged: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ConfigModuleContainerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ConfigModuleContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "config-module-container",
                template: `<div fxLayoutAlign="" fxflex="100" fxLayout="column">
    <router-outlet></router-outlet>
</div>
`
            },] },
];
/** @nocollapse */
ConfigModuleContainerComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AuthenticationModuleConfigComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.formGroup = new FormGroup({
            endpoints: new FormGroup({
                signIn: new FormControl("", [Validators.required]),
                signOut: new FormControl("", [Validators.required]),
                userInformation: new FormControl("", [Validators.required])
            }),
            forms: new FormGroup({
                signIn: new FormControl("", [Validators.required])
            })
        });
        this.configChanged = new EventEmitter();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    /**
     * @param {?} configFormGroup
     * @return {?}
     */
    set configFormGroup(configFormGroup) {
        this.formGroup.patchValue(configFormGroup.value);
        configFormGroup.valueChanges.subscribe(data => {
            this.formGroup.patchValue(data);
        });
    }
    /**
     * @param {?} formId
     * @param {?} formName
     * @return {?}
     */
    setFormId(formId, formName) {
        debugger;
        this.formGroup.patchValue({ [formName]: formId });
    }
}
AuthenticationModuleConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "config-authentication-module-config",
                template: `<h2>Endpoints</h2>
<div [formGroup]="formGroup.controls.endpoints" fxLayout="column">
    <mat-form-field>
        <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="sign in" formControlName="signIn">
    </mat-form-field>
    <mat-form-field>
        <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="sign out" formControlName="signOut">
    </mat-form-field>
    <mat-form-field>
        <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="user information" formControlName="userInformation">
    </mat-form-field>
</div>
<h2>Forms</h2>
<div [formGroup]="formGroup.controls.forms" fxLayout="column">
    <mat-form-field>
        <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="SignIn Forms" formControlName="signIn">
    </mat-form-field>
            <!-- <ngs-form-selector (select)="setFormId($event,'signIn')"></ngs-form-selector> -->
</div>`
            },] },
];
/** @nocollapse */
AuthenticationModuleConfigComponent.ctorParameters = () => [
    { type: Injector }
];
AuthenticationModuleConfigComponent.propDecorators = {
    configFormGroup: [{ type: Input }],
    configChanged: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DynamicConfigComponentSelectorComponent {
    /**
     * @param {?} resolver
     */
    constructor(resolver) {
        this.resolver = resolver;
        this.typeMapToDiagram = {
            authentication_module_config: AuthenticationModuleConfigComponent,
            app_config: ConfigAppConfigComponent,
            user_module_config: UserModuleConfigComponent,
            layout_config: LayoutModuleConfigComponent
        };
        this.configChanged = new EventEmitter();
        this.currentComponent = null;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        if (!data || Object.keys(data).length == 0)
            return;
        if (!(data.type in this.typeMapToDiagram)) {
            if (this.currentComponent)
                this.currentComponent.destroy();
            return;
        }
        let /** @type {?} */ _component = this.typeMapToDiagram[data.type];
        let /** @type {?} */ inputProviders = Object.keys(data.inputs).map(inputName => {
            return { provide: inputName, useValue: (/** @type {?} */ (data.inputs))[inputName] };
        });
        let /** @type {?} */ resolvedInputs = ReflectiveInjector.resolve(inputProviders);
        let /** @type {?} */ injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
        let /** @type {?} */ factory = this.resolver.resolveComponentFactory(_component);
        let /** @type {?} */ component = factory.create(injector);
        (/** @type {?} */ (component.instance)).configChanged.subscribe((data) => {
            this.configChanged.emit(data);
        });
        this.dynamicComponentContainer.insert(component.hostView);
        if (this.currentComponent) {
            this.currentComponent.destroy();
        }
        this.currentComponent = component;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() { }
}
DynamicConfigComponentSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-config-component-selector",
                template: `<div #dynamicComponentContainer></div>`,
                styles: [`:host{width:100%}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}`],
                entryComponents: [
                    AuthenticationModuleConfigComponent,
                    ConfigAppConfigComponent,
                    UserModuleConfigComponent,
                    LayoutModuleConfigComponent
                ]
            },] },
];
/** @nocollapse */
DynamicConfigComponentSelectorComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
DynamicConfigComponentSelectorComponent.propDecorators = {
    dynamicComponentContainer: [{ type: ViewChild, args: ["dynamicComponentContainer", { read: ViewContainerRef },] }],
    configChanged: [{ type: Output }],
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LoadConfigEffects {
    /**
     * @param {?} actions$
     * @param {?} configService
     */
    constructor(actions$, configService) {
        this.actions$ = actions$;
        this.configService = configService;
        this.getConfigs$ = this.actions$
            .ofType(ConfigActionTypes.GET_CONFIGS)
            .pipe(map(action => action.payload), switchMap((data) => this.configService.getConfigs()), map(configs => new ConfigLoadedSucceedAction(configs)), catchError(() => Observable$1.of(new ConfigLoadedFailedAction())));
    }
}
LoadConfigEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LoadConfigEffects.ctorParameters = () => [
    { type: Actions },
    { type: ConfigService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], LoadConfigEffects.prototype, "getConfigs$", void 0);

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ routes = [
    {
        path: 'configs',
        component: ConfigModuleContainerComponent,
        children: [
            {
                path: '',
                component: ConfigsComponent
            },
            {
                path: 'edit/:name',
                component: ConfigEditComponent
            }
        ]
    }
];
const /** @type {?} */ RoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgsConfigModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: RootNgsConfigModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    }
}
NgsConfigModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    FlexLayoutModule,
                    MatIconModule,
                    MatButtonModule,
                    MatCardModule,
                    MatSnackBarModule,
                    MatSidenavModule,
                    MatExpansionModule,
                    MatSelectModule,
                    MatFormFieldModule,
                    MatListModule,
                    MatMenuModule,
                    MatRadioModule,
                    MatInputModule,
                    MatSlideToggleModule,
                    MatToolbarModule,
                    MatDatepickerModule,
                    MatProgressBarModule,
                    BrowserAnimationsModule,
                    RoutingModule
                ],
                declarations: [
                    ConfigsComponent,
                    ConfigEditComponent,
                    ConfigAppConfigComponent,
                    UserModuleConfigComponent,
                    LayoutModuleConfigComponent,
                    ConfigModuleContainerComponent,
                    AuthenticationModuleConfigComponent,
                    DynamicConfigComponentSelectorComponent
                ],
                providers: []
            },] },
];
class RootNgsConfigModule {
}
RootNgsConfigModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NgsConfigModule,
                    StoreModule.forFeature("config", ConfigReducers),
                    EffectsModule.forFeature([LoadConfigEffects])
                ],
                exports: [NgsConfigModule]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ConfigService, ConfigModel, GetConfigsApiModel, EditConfigApiModel, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, ConfigReducers, selectConfigState, getConfigListState, getConfigs$1 as getConfigs, getAppConfig$1 as getAppConfig, getAuthenticationModuleConfig$1 as getAuthenticationModuleConfig, getUserModuleConfig$1 as getUserModuleConfig, getlayoutModuleConfig$1 as getlayoutModuleConfig, getConfigModuleConfig$1 as getConfigModuleConfig, getFormModuleConfig$1 as getFormModuleConfig, getSocketModuleConfig$1 as getSocketModuleConfig, NgsConfigModule, RootNgsConfigModule, RoutingModule as ɵc, ConfigAppConfigComponent as ɵj, AuthenticationModuleConfigComponent as ɵn, LayoutModuleConfigComponent as ɵl, UserModuleConfigComponent as ɵk, LoadConfigEffects as ɵq, ConfigReducers as ɵp, ConfigurationService as ɵb, ConfigEditComponent as ɵf, ConfigModuleContainerComponent as ɵd, ConfigsComponent as ɵe, ConfigEditComponent as ɵi, ConfigModuleContainerComponent as ɵm, ConfigsComponent as ɵg, DynamicConfigComponentSelectorComponent as ɵo };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWNvbmZpZy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL21vZGVscy9jb25maWcubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9tb2RlbHMvZ2V0LWNvbmZpZ3MtYXBpLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvbW9kZWxzL2VkaXQtY29uZmlnLWFwaS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2NvbmZpZy5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9hY3Rpb25zL2NvbmZpZy5hY3Rpb24udHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9yZWR1Y2Vycy9jb25maWctbGlzdC5yZWR1Y2VyLnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvcmVkdWNlcnMvaW5kZXgudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zZXJ2aWNlcy9jb25maWcuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlncy9jb25maWdzLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlnLWVkaXQvY29uZmlnLWVkaXQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvZHVtYi1jb21wb25lbnRzL2FwcC1jb25maWcvYXBwLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9kdW1iLWNvbXBvbmVudHMvdXNlci1tb2R1bGUtY29uZmlnL3VzZXItbW9kdWxlLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9kdW1iLWNvbXBvbmVudHMvbGF5b3V0LWNvbmZpZy9sYXlvdXQtbW9kdWxlLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zbWFydC1jb21wb25lbnRzL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2R1bWItY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS1jb25maWcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvc21hcnQtY29tcG9uZW50cy9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2VmZmVjdHMvbG9hZC1jb25maWcuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2NvbmZpZy5yb3V0aW5nLW1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2NvbmZpZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbmZpZ01vZGVsPFQ+IHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHROYW1lOiBzdHJpbmc7XHJcblx0Q29uZmlnOiBUO1xyXG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwgfSBmcm9tIFwiLi9jb25maWcubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBtb2R1bGUgR2V0Q29uZmlnc0FwaU1vZGVsIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+e1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IEdldENvbmZpZ3NBcGlNb2RlbC5SZXF1ZXN0ID0ge30gYXMgR2V0Q29uZmlnc0FwaU1vZGVsLlJlcXVlc3QpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpcyBhcyBhbnkpW2tleV0gPSAoaW5pdFZhbHVlIGFzIGFueSlba2V5XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRSZXF1ZXN0Qm9keSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG4gICAgICAgIFJlc3VsdDogQ29uZmlnTW9kZWw8YW55PltdO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBDb25maWdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBtb2R1bGUgRWRpdENvbmZpZ0FwaU1vZGVsIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+e1xyXG4gICAgICAgIE5hbWU6IHN0cmluZztcclxuICAgICAgICBDb25maWc6IHt9O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9IGFzIEVkaXRDb25maWdBcGlNb2RlbC5SZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXMgYXMgYW55KVtrZXldID0gKGluaXRWYWx1ZSBhcyBhbnkpW2tleV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0UmVxdWVzdEJvZHkoKSB7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgTmFtZTogdGhpcy5OYW1lLFxyXG4gICAgICAgICAgICAgICAgQ29uZmlnOiB0aGlzLkNvbmZpZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcbiAgICAgICAgICAgICAgICBOYW1lOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcbiAgICAgICAgICAgICAgICBDb25maWc6IG5ldyBGb3JtR3JvdXAoe30pLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuICAgICAgICBSZXN1bHQ6IENvbmZpZ01vZGVsPGFueT47XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25maWdNb2R1bGVDb25maWcge1xyXG5cdGRldl9hcGlfaG9zdD86IHN0cmluZztcclxuXHRwcm9kX2FwaV9ob3N0Pzogc3RyaW5nO1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogQ29uZmlnTW9kdWxlQ29uZmlnID0ge1xyXG5cdGRldl9hcGlfaG9zdDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXHJcblx0cHJvZF9hcGlfaG9zdDogJ2h0dHA6Ly81LjE5Ni4xNDkuMTA3OjMwMDAnLFxyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2VcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxDb25maWdNb2R1bGVDb25maWc+KCdVc2VyTW9kdWxlQ29uZmlnJyk7XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBDb25maWdNb2RlbCwgR2V0Q29uZmlnc0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gQ29uZmlnQWN0aW9uVHlwZXMge1xyXG5cdEdFVF9DT05GSUdTID0gXCJbQ09ORklHXSBnZXQgY29uZmlnXCIsXHJcblx0Q09ORklHX0xPQURFRF9TVUNDRUVEID0gXCJbQ09ORklHXSBsb2FkIGNvbmZpZyBzdWNjZWVkXCIsXHJcblx0VVBEQVRFX0NPTkZJRyA9IFwiW0NPTkZJR10gdXBkYXRlIGNvbmZpZ1wiLFxyXG5cdENPTkZJR19MT0FERURfRkFJTEVEID0gXCJbQ09ORklHXSBsb2FkIGNvbmZpZyBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0Q29uZmlnQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ29uZmlnQWN0aW9uVHlwZXMuR0VUX0NPTkZJR1M7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maWdMb2FkZWRTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ29uZmlnQWN0aW9uVHlwZXMuQ09ORklHX0xPQURFRF9TVUNDRUVEO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ29uZmlnTW9kZWw8YW55PltdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVDb25maWdBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDb25maWdBY3Rpb25UeXBlcy5VUERBVEVfQ09ORklHO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDb25maWdNb2RlbDxhbnk+KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ29uZmlnQWN0aW9uVHlwZXMuQ09ORklHX0xPQURFRF9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IHR5cGUgQWN0aW9ucyA9IEdldENvbmZpZ0FjdGlvbiB8IENvbmZpZ0xvYWRlZFN1Y2NlZWRBY3Rpb24gfCBDb25maWdMb2FkZWRGYWlsZWRBY3Rpb24gfCBVcGRhdGVDb25maWdBY3Rpb247XHJcbiIsImltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiLi4vYWN0aW9ucy9jb25maWcuYWN0aW9uXCI7XHJcbmltcG9ydCB7IENvbmZpZ01vZGVsLCBMYXlvdXRDb25maWdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGRhdGE6IGFueVtdO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGRhdGE6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBjb25maWcuQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIGNvbmZpZy5Db25maWdBY3Rpb25UeXBlcy5DT05GSUdfTE9BREVEX1NVQ0NFRUQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWRcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgY29uZmlnLkNvbmZpZ0FjdGlvblR5cGVzLlVQREFURV9DT05GSUc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogc3RhdGUuZGF0YS5tYXAoY29uZmlnID0+IHtcclxuXHRcdFx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRcdFx0aWYgKGNvbmZpZy5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKSBjb25maWcuQ29uZmlnID0gYWN0aW9uLnBheWxvYWQuQ29uZmlnO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGNvbmZpZztcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ3MgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG5leHBvcnQgY29uc3QgZ2V0QXBwQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImFwcF9jb25maWdcIik7XHJcbmV4cG9ydCBjb25zdCBnZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+XHJcblx0c3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImF1dGhlbnRpY2F0aW9uX21vZHVsZV9jb25maWdcIik7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTW9kdWxlQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcInVzZXJfbW9kdWxlX2NvbmZpZ1wiKTtcclxuZXhwb3J0IGNvbnN0IGdldGxheW91dE1vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJsYXlvdXRfY29uZmlnXCIpIGFzIGFueTtcclxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ01vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+XHJcblx0c3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImNvbmZpZ19tb2R1bGVfY29uZmlnXCIpIGFzIGFueTtcclxuZXhwb3J0IGNvbnN0IGdldEZvcm1Nb2R1bGVDb25maWcgPSAoc3RhdGU6IFN0YXRlKSA9PlxyXG5cdHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJmb3JtX21vZHVsZV9jb25maWdcIikgYXMgYW55O1xyXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0TW9kdWxlQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT5cclxuXHRzdGF0ZS5kYXRhLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwic29ja2V0X21vZHVsZV9jb25maWdcIikgYXMgYW55O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBjb25maWdMaXN0IGZyb20gXCIuL2NvbmZpZy1saXN0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uLCBDb25maWdMb2FkZWRTdWNjZWVkQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuZXhwb3J0IGludGVyZmFjZSBDb25maWdTdGF0ZSB7XHJcblx0bGlzdDogY29uZmlnTGlzdC5TdGF0ZTtcclxufVxyXG5Db25maWdMb2FkZWRGYWlsZWRBY3Rpb247XHJcbmV4cG9ydCBjb25zdCBDb25maWdSZWR1Y2VycyA9IHtcclxuXHRsaXN0OiBjb25maWdMaXN0LlJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVN0YXRlIHtcclxuXHRcImNvbmZpZ3NcIjogQ29uZmlnU3RhdGU7XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiBzZWxlY3RvcnNcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RDb25maWdTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxDb25maWdTdGF0ZT4oXCJjb25maWdcIik7XHJcblxyXG4vLyNlbmRyZWdpb25cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdMaXN0U3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RDb25maWdTdGF0ZSwgKHN0YXRlOiBDb25maWdTdGF0ZSkgPT4gc3RhdGUubGlzdCk7XHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdzID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldENvbmZpZ3MpO1xyXG5leHBvcnQgY29uc3QgZ2V0QXBwQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldEFwcENvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG5cdGdldENvbmZpZ0xpc3RTdGF0ZSxcclxuXHRjb25maWdMaXN0LmdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldFVzZXJNb2R1bGVDb25maWcpO1xyXG5leHBvcnQgY29uc3QgZ2V0bGF5b3V0TW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldGxheW91dE1vZHVsZUNvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdNb2R1bGVDb25maWcgPSBjcmVhdGVTZWxlY3RvcihnZXRDb25maWdMaXN0U3RhdGUsIGNvbmZpZ0xpc3QuZ2V0Q29uZmlnTW9kdWxlQ29uZmlnKTtcclxuZXhwb3J0IGNvbnN0IGdldEZvcm1Nb2R1bGVDb25maWcgPSBjcmVhdGVTZWxlY3RvcihnZXRDb25maWdMaXN0U3RhdGUsIGNvbmZpZ0xpc3QuZ2V0Rm9ybU1vZHVsZUNvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRTb2NrZXRNb2R1bGVDb25maWcgPSBjcmVhdGVTZWxlY3RvcihnZXRDb25maWdMaXN0U3RhdGUsIGNvbmZpZ0xpc3QuZ2V0U29ja2V0TW9kdWxlQ29uZmlnKTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiwgTU9EVUxFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSBcIi4uL2NvbmZpZy5jb25maWdcIjtcclxuaW1wb3J0IHsgZ2V0Q29uZmlnTW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBDb25maWdNb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX2NvbmZpZyk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZTogQ29uZmlnTW9kdWxlQ29uZmlnLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KGdldENvbmZpZ01vZHVsZUNvbmZpZykuc3Vic2NyaWJlKGNvbmZpZ0NvbmZpZyA9PiB7XHJcblx0XHRcdGlmICghY29uZmlnQ29uZmlnKSByZXR1cm47XHJcblx0XHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgY29uZmlnQ29uZmlnLkNvbmZpZyk7XHJcblx0XHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IENvbmZpZ1N0YXRlIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBFZGl0Q29uZmlnQXBpTW9kZWwsIEdldENvbmZpZ3NBcGlNb2RlbCwgQ29uZmlnTW9kZWwsIExheW91dENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuaW1wb3J0IHsgR2V0Q29uZmlnQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XHJcblx0cmVzcG9uc2VDYWNoZTogYW55O1xyXG5cdGNvbmZpZ3NFbmRwb2ludDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPENvbmZpZ1N0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLmNvbmZpZ3NFbmRwb2ludCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVudi5wcm9kdWN0aW9uXHJcblx0XHRcdD8gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcucHJvZF9hcGlfaG9zdFxyXG5cdFx0XHQ6IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmRldl9hcGlfaG9zdDtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0Q29uZmlnQWN0aW9uKCkpO1xyXG5cdFx0fSwgOTk5KTtcclxuXHR9XHJcblxyXG5cdGdldENvbmZpZ3MoKTogT2JzZXJ2YWJsZTxDb25maWdNb2RlbDxhbnk+W10+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdHRoaXMuaHR0cFxyXG5cdFx0XHRcdC5nZXQoYCR7dGhpcy5jb25maWdzRW5kcG9pbnR9L2FwaS9jb25maWdgKVxyXG5cdFx0XHRcdC8vIC5maWx0ZXIoKCkgPT4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZGV2X2FwaV9ob3N0ICE9IHVuZGVmaW5lZClcclxuXHRcdFx0XHQudGFrZSgxKVxyXG5cdFx0XHRcdC5tYXAoKHJlc3BvbnNlOiBHZXRDb25maWdzQXBpTW9kZWwuUmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbnYucHJvZHVjdGlvbikge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBkZXZfYXBpX2hvc3QgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5kZXZfYXBpX2hvc3Q7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHByb2RfYXBpX2hvc3QgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5wcm9kX2FwaV9ob3N0O1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShcclxuXHRcdFx0XHRcdFx0XHRKU09OLnN0cmluZ2lmeShyZXNwb25zZSkucmVwbGFjZShuZXcgUmVnRXhwKGRldl9hcGlfaG9zdCwgXCJnXCIpLCBwcm9kX2FwaV9ob3N0KVxyXG5cdFx0XHRcdFx0XHQpLlJlc3VsdDtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5SZXN1bHQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdGdldENvbmZpZ0J5TmFtZShuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5jb25maWdzRW5kcG9pbnR9L2FwaS9jb25maWcvJHtuYW1lfWApLm1hcChyZXNwb25zZSA9PiByZXNwb25zZSkuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRlZGl0Q29uZmlnKGJvZHk6IEVkaXRDb25maWdBcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHZhciBtb2RlbCA9IG5ldyBFZGl0Q29uZmlnQXBpTW9kZWwuUmVxdWVzdChib2R5KTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wdXQoYCR7dGhpcy5jb25maWdzRW5kcG9pbnR9L2FwaS9jb25maWcvJHttb2RlbC5OYW1lfWAsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0TGF5b3V0Q29uZmlncygpOiBPYnNlcnZhYmxlPExheW91dENvbmZpZ01vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQoYCR7dGhpcy5jb25maWdzRW5kcG9pbnR9L2FwaS9sYXlvdXQtY29uZmlnYClcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2U6IExheW91dENvbmZpZ01vZGVsKSA9PiByZXNwb25zZSlcclxuXHRcdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBnZXRDb25maWdzLCBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImNvbmZpZ3NcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhGbGV4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRXcmFwIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgPG1hdC1jYXJkIGNsYXNzPVwiY29uZmlnLWJveFwiICpuZ0Zvcj1cImxldCBjb25maWcgb2YgKGNvbmZpZ3MgfCBhc3luYylcIiBbZnhGbGV4XT1cIjUwXCI+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ2VkaXQnICwgIGNvbmZpZy5OYW1lXVwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJlZGl0IGNvbmZpZ1wiPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7e2NvbmZpZy5OYW1lfX1cclxuICAgICAgPC9oMz5cclxuICA8L21hdC1jYXJkPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5jb25maWctYm94e21hcmdpbjoxNXB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWdzQ29tcG9uZW50IHtcclxuXHRjb25maWdzOiBPYnNlcnZhYmxlPENvbmZpZ01vZGVsPGFueT5bXT47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPikge1xyXG5cdFx0dGhpcy5jb25maWdzID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0Q29uZmlncyk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEVkaXRDb25maWdBcGlNb2RlbCwgUGFydGlhbENvbmZpZyB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29uZmlnLWNvbmZpZy1lZGl0XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ID5cclxuICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIChuZ1N1Ym1pdCk9XCJlZGl0KClcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1jYXJkPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgIDxkeW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IgKGNvbmZpZ0NoYW5nZWQpPVwiY29uZmlnQ2hhbmdlZCgkZXZlbnQpXCIgW2RhdGFdPVwicGFydGlhbENvbmZpZ01vZGVsXCI+PC9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3I+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPG1hdC1jYXJkLWFjdGlvbnMgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIHR5cGU9XCJzdWJtaXRcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiZWRpdFwiPsOZwojDm8KMw5jCscOYwqfDm8KMw5jCtDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gZnhGbGV4PVwibm9ncm93XCIgdHlwZT1cImJ1dHRvblwiIHJvdXRlckxpbms9XCIvY29uZmlnc1wiIG1hdC1yYWlzZWQtYnV0dG9uPsOYwqjDmMKnw5jCssOawq/DmMK0w5jCqjwvYnV0dG9uPlxyXG4gICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Y29uZmlnSW5mb3JhbWF0aW9uOiBhbnk7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBFZGl0Q29uZmlnQXBpTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0cGFydGlhbENvbmZpZ01vZGVsOiBQYXJ0aWFsQ29uZmlnO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGNvbnN0IGNvbmZpZ05hbWU6IHN0cmluZyA9IHBhcmFtc1tcIm5hbWVcIl07XHJcblx0XHRcdHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWdCeU5hbWUoY29uZmlnTmFtZSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMucGFydGlhbENvbmZpZ01vZGVsID0ge1xyXG5cdFx0XHRcdFx0dHlwZTogZGF0YS5SZXN1bHQuTmFtZSxcclxuXHRcdFx0XHRcdGlucHV0czoge1xyXG5cdFx0XHRcdFx0XHRjb25maWdGb3JtR3JvdXA6IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbmZpZyBhcyBGb3JtR3JvdXBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xyXG5cdFx0XHRcdFx0X2lkOiBkYXRhLlJlc3VsdC5faWQsXHJcblx0XHRcdFx0XHROYW1lOiBkYXRhLlJlc3VsdC5OYW1lXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0T2JqZWN0LmtleXMoZGF0YS5SZXN1bHQuQ29uZmlnKS5mb3JFYWNoKGtleSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmFkZENvbnRyb2wodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29uZmlnIGFzIEZvcm1Hcm91cCwga2V5LCBkYXRhLlJlc3VsdC5Db25maWdba2V5XSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhZGRDb250cm9sKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHRcdFx0Zm9ybUdyb3VwLmFkZENvbnRyb2woa2V5LCB0aGlzLmZvcm1CdWlsZGVyLmFycmF5KHZhbHVlKSk7XHJcblx0XHR9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcblx0XHRcdGZvcm1Hcm91cC5hZGRDb250cm9sKGtleSwgdGhpcy5mb3JtQnVpbGRlci5ncm91cCh2YWx1ZSkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Zm9ybUdyb3VwLmFkZENvbnRyb2woa2V5LCBuZXcgRm9ybUNvbnRyb2wodmFsdWUpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHRjb25maWdDaGFuZ2VkKGV2ZW50OiBhbnkpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29uZmlnLnBhdGNoVmFsdWUoZXZlbnQpO1xyXG5cdH1cclxuXHRlZGl0KCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRpZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLmNvbmZpZ1NlcnZpY2UuZWRpdENvbmZpZyh0aGlzLmZvcm1Hcm91cC52YWx1ZSkuc3Vic2NyaWJlKGNvbmZpZyA9PiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImNvbmZpZy1hcHAtY29uZmlnXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChsOYwqfDmcKFIMOZwr7DmMKxw5nCiMOawpjDmcKHXCIgZm9ybUNvbnRyb2xOYW1lPVwiQXBwVGl0bGVcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ0FwcENvbmZpZ0NvbXBvbmVudCB7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHsgQXBwVGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSkgfSk7XHJcblx0QElucHV0KClcclxuXHRzZXQgY29uZmlnRm9ybUdyb3VwKGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGNvbmZpZ0Zvcm1Hcm91cC52YWx1ZSk7XHJcblx0XHRjb25maWdGb3JtR3JvdXAudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShkYXRhKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRAT3V0cHV0KCkgY29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImNvbmZpZ0Zvcm1Hcm91cFwiKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCwgRm9ybUFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29uZmlnLXVzZXItbW9kdWxlLWNvbmZpZ1wiLFxyXG5cdHRlbXBsYXRlOiBgPGgyPkVuZHBvaW50czwvaDI+XHJcbjxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXAuZ2V0KCdlbmRwb2ludHMnKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJjaGFuZ2UgcGFzc3dvcmRcIiBmb3JtQ29udHJvbE5hbWU9XCJjaGFuZ2VQYXNzd29yZFwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJlZGl0IHByb2ZpbGVcIiBmb3JtQ29udHJvbE5hbWU9XCJlZGl0UHJvZmlsZVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJnZXQgdXNlciBpbmZvXCIgZm9ybUNvbnRyb2xOYW1lPVwiZ2V0VXNlckluZm9cIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiUHJvZmlsZSBJbmZvcm1hdGlvbiBFbmRwb2ludFwiIGZvcm1Db250cm9sTmFtZT1cInByb2ZpbGVJbmZvcm1hdGlvblwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZGl2PlxyXG48aDI+Rm9ybXM8L2gyPlxyXG48ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwLmdldCgnZm9ybXMnKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwicHJvZmlsZSBlZGl0XCIgZm9ybUNvbnRyb2xOYW1lPVwicHJvZmlsZV9lZGl0XCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8IS0tIDxuZ3MtZm9ybS1zZWxlY3RvciAoc2VsZWN0KT1cInNldEZvcm1JZCgkZXZlbnQsJ3NpZ25JbicpXCI+PC9uZ3MtZm9ybS1zZWxlY3Rvcj4gLS0+XHJcbjwvZGl2PlxyXG5cclxuXHJcbjxoMiBmeEZsZXg9XCIxMDBcIj5cclxuICAgIERhc2hvYmFyZCBMaW5rc1xyXG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZE1lbnUoKVwiPlxyXG4gICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiaWNvbi1idXR0b24gaWNvblwiPmFkZDwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuPC9oMj5cclxuPGRpdiBmeEZsZXg9XCIxMDBcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiAkYW55KGZvcm1Hcm91cC5nZXQoJ2Rhc2hib2FyZExpbmtzJykpLmNvbnRyb2xzXCI+XHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiaXRlbVwiPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwicm91dGVcIiBmb3JtQ29udHJvbE5hbWU9XCJyb3V0ZVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJpY29uXCIgZm9ybUNvbnRyb2xOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiIGZvcm1Db250cm9sTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyTW9kdWxlQ29uZmlnQ29tcG9uZW50IHtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0ZW5kcG9pbnRzOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0Y2hhbmdlUGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdGVkaXRQcm9maWxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRnZXRVc2VySW5mbzogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0cHJvZmlsZUluZm9ybWF0aW9uOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHR9KSxcclxuXHRcdGZvcm1zOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0cHJvZmlsZV9lZGl0OiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHR9KSxcclxuXHRcdGRhc2hib2FyZExpbmtzOiBuZXcgRm9ybUFycmF5KFtdKVxyXG5cdH0pO1xyXG5cdF9jb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBjb25maWdGb3JtR3JvdXAoY29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXApIHtcclxuXHRcdHRoaXMuX2NvbmZpZ0Zvcm1Hcm91cCA9IGNvbmZpZ0Zvcm1Hcm91cDtcclxuXHRcdChjb25maWdGb3JtR3JvdXAuY29udHJvbHMuZGFzaGJvYXJkTGlua3MgYXMgRm9ybUFycmF5KS5jb250cm9scy5mb3JFYWNoKGNvbnRyb2wgPT4ge1xyXG5cdFx0XHQodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuZGFzaGJvYXJkTGlua3MgYXMgRm9ybUFycmF5KS5wdXNoKFxyXG5cdFx0XHRcdG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0cm91dGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0XHRpY29uOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShjb25maWdGb3JtR3JvdXAudmFsdWUpO1xyXG5cdFx0Y29uZmlnRm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoZGF0YSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Z2V0IGNvbmZpZ0Zvcm1Hcm91cCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWdGb3JtR3JvdXA7XHJcblx0fVxyXG5cdEBPdXRwdXQoKSBjb25maWdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiY29uZmlnRm9ybUdyb3VwXCIpO1xyXG5cdH1cclxuXHRhZGRNZW51KCkge1xyXG5cdFx0dmFyIG1lbnVJdGVtID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHJvdXRlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRpY29uOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHR0aXRsZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0KHRoaXMuZm9ybUdyb3VwLmdldChcImRhc2hib2FyZExpbmtzXCIpIGFzIEZvcm1BcnJheSkucHVzaChtZW51SXRlbSk7XHJcblx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwiZGFzaGJvYXJkTGlua3NcIikgYXMgRm9ybUFycmF5KS5wdXNoKG1lbnVJdGVtKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCwgRm9ybUFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhGbGV4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRXcmFwIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4RmxleExheW91dD1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIHBsYWNlaG9sZGVyPVwibGF5b3V0IG1vZGVcIiBmb3JtQ29udHJvbE5hbWU9XCJsYXlvdXRNb2RlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxheW91dE1vZGVzXCIgW3ZhbHVlXT1cIml0ZW1cIj57e2l0ZW19fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD4gXHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlICAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgIGZvcm1Db250cm9sTmFtZT1cInNob3dMZWZ0TmF2QmFyXCI+c2hvdyBsZWZ0IG5hdmJhcjwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIHBsYWNlaG9sZGVyPVwibWFpbiBzaWRlIG5hdiBtb2RlXCIgZm9ybUNvbnRyb2xOYW1lPVwibWFpblNpZGVOYXZNb2RlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNpZGVOYXZNb2Rlc1wiIFt2YWx1ZV09XCJpdGVtXCI+e3tpdGVtfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+IFxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSAgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiICBmb3JtQ29udHJvbE5hbWU9XCJzaG93TWFpblNpZGVuYXZcIj5zaG93IG1haW4gc2lkZSBuYXY8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlICAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgIGZvcm1Db250cm9sTmFtZT1cInN0aWNreUxlZnROYXZCYXJcIj5zdGlja3kgbGVmdCBuYXZiYXI8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlICAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgIGZvcm1Db250cm9sTmFtZT1cInNob3dTZWNvbmRTaWRlTmF2XCI+c2hvdyBzZWNvbmQgc2lkZSBuYXY8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBwbGFjZWhvbGRlcj1cInNlY29uZCBzaWRlIG5hdiBtb2RlXCIgZm9ybUNvbnRyb2xOYW1lPVwic2Vjb25kU2lkZU5hdk1vZGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc2lkZU5hdk1vZGVzXCIgW3ZhbHVlXT1cIml0ZW1cIj57e2l0ZW19fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD4gXHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8aDIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICAgICAgTWVudSBJdGVtc1xyXG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRNZW51KClcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJpY29uLWJ1dHRvbiBpY29uXCI+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvaDI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZvcm1Hcm91cC5jb250cm9scy5tZW51SXRlbXMuY29udHJvbHNcIj5cclxuICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJyb3V0ZVwiIGZvcm1Db250cm9sTmFtZT1cInJvdXRlXCI+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cImljb25cIiBmb3JtQ29udHJvbE5hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInRpdGxlXCIgZm9ybUNvbnRyb2xOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPiBcclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBwbGFjZWhvbGRlcj1cInJvbGVzXCIgZm9ybUNvbnRyb2xOYW1lPVwicm9sZXNcIiBtdWx0aXBsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgcm9sZSBvZiByb2xlSXRlbXNcIiBbdmFsdWVdPVwicm9sZVwiPnt7cm9sZX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PiBcclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGVDb25maWdDb21wb25lbnQge1xyXG5cdHNpZGVOYXZNb2Rlczogc3RyaW5nW107XHJcblx0bGF5b3V0TW9kZXM6IHN0cmluZ1tdO1xyXG5cdGZvcm1Hcm91cDogYW55ID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRsYXlvdXRNb2RlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0c2hvd0xlZnROYXZCYXI6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRtYWluU2lkZU5hdk1vZGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRzaG93TWFpblNpZGVuYXY6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRzdGlja3lMZWZ0TmF2QmFyOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0c2hvd1NlY29uZFNpZGVOYXY6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRzZWNvbmRTaWRlTmF2TW9kZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdG1lbnVJdGVtczogbmV3IEZvcm1BcnJheShbXSlcclxuXHR9KTtcclxuXHRfY29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KClcclxuXHRzZXQgY29uZmlnRm9ybUdyb3VwKGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcblx0XHR0aGlzLl9jb25maWdGb3JtR3JvdXAgPSBjb25maWdGb3JtR3JvdXA7XHJcblx0XHQoY29uZmlnRm9ybUdyb3VwLmNvbnRyb2xzLm1lbnVJdGVtcyBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcclxuXHRcdFx0KHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLm1lbnVJdGVtcyBhcyBGb3JtQXJyYXkpLnB1c2goXHJcblx0XHRcdFx0bmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHRyb3V0ZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRcdGljb246IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0XHQvLyByb2xlczogbmV3IEZvcm1BcnJheShjb250cm9sLnZhbHVlLnJvbGVzLm1hcCgoaSkgPT4gbmV3IEZvcm1Db250cm9sKFwiQWRtaW5cIikpKSxcclxuXHRcdFx0XHRcdHJvbGVzOiBuZXcgRm9ybUNvbnRyb2woKSxcclxuXHRcdFx0XHRcdHRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoY29uZmlnRm9ybUdyb3VwLnZhbHVlKTtcclxuXHRcdGNvbmZpZ0Zvcm1Hcm91cC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChkYXRhKSA9PiB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGRhdGEpKTtcclxuXHR9XHJcblx0Z2V0IGNvbmZpZ0Zvcm1Hcm91cCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWdGb3JtR3JvdXA7XHJcblx0fVxyXG5cdEBPdXRwdXQoKSBjb25maWdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRyb2xlSXRlbXM6IHN0cmluZ1tdID0gWyBcIkFkbWluXCIsIFwiVXNlclwiIF07XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLnNpZGVOYXZNb2RlcyA9IFsgXCJvdmVyXCIsIFwicHVzaFwiLCBcInNpZGVcIiBdO1xyXG5cdFx0dGhpcy5sYXlvdXRNb2RlcyA9IFsgXCJ3aXRoLW1hcmdpblwiLCBcIndpdGhvdXQtbWFyZ2luXCIsIFwiZGVmYXVsdFwiIF07XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiY29uZmlnRm9ybUdyb3VwXCIpO1xyXG5cdH1cclxuXHRhZGRNZW51KCkge1xyXG5cdFx0dmFyIG1lbnVJdGVtID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHJvdXRlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRpY29uOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRyb2xlczogbmV3IEZvcm1Db250cm9sKCksXHJcblx0XHRcdHRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHR9KTtcclxuXHJcblx0XHQodGhpcy5mb3JtR3JvdXAuZ2V0KFwibWVudUl0ZW1zXCIpIGFzIEZvcm1BcnJheSkucHVzaChtZW51SXRlbSk7XHJcblx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibWVudUl0ZW1zXCIpIGFzIEZvcm1BcnJheSkucHVzaChtZW51SXRlbSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImNvbmZpZy1tb2R1bGUtY29udGFpbmVyXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0QWxpZ249XCJcIiBmeGZsZXg9XCIxMDBcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG48L2Rpdj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJjb25maWctYXV0aGVudGljYXRpb24tbW9kdWxlLWNvbmZpZ1wiLFxyXG5cdHRlbXBsYXRlOiBgPGgyPkVuZHBvaW50czwvaDI+XHJcbjxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXAuY29udHJvbHMuZW5kcG9pbnRzXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJzaWduIGluXCIgZm9ybUNvbnRyb2xOYW1lPVwic2lnbkluXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInNpZ24gb3V0XCIgZm9ybUNvbnRyb2xOYW1lPVwic2lnbk91dFwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJ1c2VyIGluZm9ybWF0aW9uXCIgZm9ybUNvbnRyb2xOYW1lPVwidXNlckluZm9ybWF0aW9uXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG48L2Rpdj5cclxuPGgyPkZvcm1zPC9oMj5cclxuPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cC5jb250cm9scy5mb3Jtc1wiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiU2lnbkluIEZvcm1zXCIgZm9ybUNvbnRyb2xOYW1lPVwic2lnbkluXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8IS0tIDxuZ3MtZm9ybS1zZWxlY3RvciAoc2VsZWN0KT1cInNldEZvcm1JZCgkZXZlbnQsJ3NpZ25JbicpXCI+PC9uZ3MtZm9ybS1zZWxlY3Rvcj4gLS0+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnQ29tcG9uZW50IHtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0ZW5kcG9pbnRzOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0c2lnbkluOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRzaWduT3V0OiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHR1c2VySW5mb3JtYXRpb246IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdH0pLFxyXG5cdFx0Zm9ybXM6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRzaWduSW46IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdH0pXHJcblx0fSk7XHJcblx0QElucHV0KClcclxuXHRzZXQgY29uZmlnRm9ybUdyb3VwKGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGNvbmZpZ0Zvcm1Hcm91cC52YWx1ZSk7XHJcblx0XHRjb25maWdGb3JtR3JvdXAudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShkYXRhKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRAT3V0cHV0KCkgY29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImNvbmZpZ0Zvcm1Hcm91cFwiKTtcclxuXHR9XHJcblx0c2V0Rm9ybUlkKGZvcm1JZDogc3RyaW5nLCBmb3JtTmFtZTogc3RyaW5nKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoeyBbZm9ybU5hbWVdOiBmb3JtSWQgfSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRJbnB1dCxcclxuXHRBZnRlclZpZXdJbml0LFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRWaWV3Q2hpbGQsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHRSZWZsZWN0aXZlSW5qZWN0b3IsXHJcblx0T25EZXN0cm95LFxyXG5cdE91dHB1dCxcclxuXHRFdmVudEVtaXR0ZXJcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgUGFydGlhbENvbmZpZyB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS1jb25maWcvYXV0aGVudGljYXRpb24tbW9kdWxlLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29uZmlnQXBwQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9hcHAtY29uZmlnL2FwcC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVzZXJNb2R1bGVDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL3VzZXItbW9kdWxlLWNvbmZpZy91c2VyLW1vZHVsZS1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExheW91dE1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvbGF5b3V0LWNvbmZpZy9sYXlvdXQtbW9kdWxlLWNvbmZpZy5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImR5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3RvclwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAjZHluYW1pY0NvbXBvbmVudENvbnRhaW5lcj48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5kaWFncmFtLWJveHttYXJnaW46MTVweH0uZGlhZ3JhbS1ib3ggLmMze2RpcmVjdGlvbjpsdHJ9YF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbXHJcblx0XHRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdENvbmZpZ0FwcENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdFVzZXJNb2R1bGVDb25maWdDb21wb25lbnQsXHJcblx0XHRMYXlvdXRNb2R1bGVDb25maWdDb21wb25lbnRcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHR0eXBlTWFwVG9EaWFncmFtOiBhbnkgPSB7XHJcblx0XHRhdXRoZW50aWNhdGlvbl9tb2R1bGVfY29uZmlnOiBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdGFwcF9jb25maWc6IENvbmZpZ0FwcENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdHVzZXJfbW9kdWxlX2NvbmZpZzogVXNlck1vZHVsZUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdGxheW91dF9jb25maWc6IExheW91dE1vZHVsZUNvbmZpZ0NvbXBvbmVudFxyXG5cdH07XHJcblx0QFZpZXdDaGlsZChcImR5bmFtaWNDb21wb25lbnRDb250YWluZXJcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXHJcblx0ZHluYW1pY0NvbXBvbmVudENvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuXHRAT3V0cHV0KCkgY29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjdXJyZW50Q29tcG9uZW50OiBhbnkgPSBudWxsO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YTogUGFydGlhbENvbmZpZykge1xyXG5cdFx0aWYgKCFkYXRhIHx8IE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcblx0XHRpZiAoIShkYXRhLnR5cGUgaW4gdGhpcy50eXBlTWFwVG9EaWFncmFtKSkge1xyXG5cdFx0XHRpZiAodGhpcy5jdXJyZW50Q29tcG9uZW50KSB0aGlzLmN1cnJlbnRDb21wb25lbnQuZGVzdHJveSgpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRsZXQgX2NvbXBvbmVudDogYW55ID0gdGhpcy50eXBlTWFwVG9EaWFncmFtW2RhdGEudHlwZV07XHJcblx0XHRsZXQgaW5wdXRQcm92aWRlcnMgPSBPYmplY3Qua2V5cyhkYXRhLmlucHV0cykubWFwKGlucHV0TmFtZSA9PiB7XHJcblx0XHRcdHJldHVybiB7IHByb3ZpZGU6IGlucHV0TmFtZSwgdXNlVmFsdWU6IChkYXRhLmlucHV0cyBhcyBhbnkpW2lucHV0TmFtZV0gfTtcclxuXHRcdH0pO1xyXG5cdFx0bGV0IHJlc29sdmVkSW5wdXRzID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUoaW5wdXRQcm92aWRlcnMpO1xyXG5cclxuXHRcdGxldCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMoXHJcblx0XHRcdHJlc29sdmVkSW5wdXRzLFxyXG5cdFx0XHR0aGlzLmR5bmFtaWNDb21wb25lbnRDb250YWluZXIucGFyZW50SW5qZWN0b3JcclxuXHRcdCk7XHJcblx0XHRsZXQgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoX2NvbXBvbmVudCk7XHJcblxyXG5cdFx0bGV0IGNvbXBvbmVudCA9IGZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcclxuXHRcdCg8YW55PmNvbXBvbmVudC5pbnN0YW5jZSkuY29uZmlnQ2hhbmdlZC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHR0aGlzLmNvbmZpZ0NoYW5nZWQuZW1pdChkYXRhKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5keW5hbWljQ29tcG9uZW50Q29udGFpbmVyLmluc2VydChjb21wb25lbnQuaG9zdFZpZXcpO1xyXG5cclxuXHRcdGlmICh0aGlzLmN1cnJlbnRDb21wb25lbnQpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50Q29tcG9uZW50LmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQgPSBjb21wb25lbnQ7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge31cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWdBY3Rpb25UeXBlcywgQ29uZmlnTG9hZGVkU3VjY2VlZEFjdGlvbiwgQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHZXRDb25maWdzQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2FkQ29uZmlnRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdldENvbmZpZ3MkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShDb25maWdBY3Rpb25UeXBlcy5HRVRfQ09ORklHUylcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBHZXRDb25maWdzQXBpTW9kZWwuUmVxdWVzdCkgPT4gdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZ3MoKSksXHJcblx0XHRcdG1hcChjb25maWdzID0+IG5ldyBDb25maWdMb2FkZWRTdWNjZWVkQWN0aW9uKGNvbmZpZ3MpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBDb25maWdMb2FkZWRGYWlsZWRBY3Rpb24oKSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnc0NvbXBvbmVudCwgQ29uZmlnRWRpdENvbXBvbmVudCwgQ29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICdjb25maWdzJyxcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogQ29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogQ29uZmlnc0NvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2VkaXQvOm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogQ29uZmlnRWRpdENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvdXRpbmdNb2R1bGU6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKTtcclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0U2lkZW5hdk1vZHVsZSxcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRMaXN0TW9kdWxlLFxyXG5cdE1hdE1lbnVNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0VG9vbGJhck1vZHVsZSxcclxuXHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgR2V0Q29uZmlnc0FwaU1vZGVsIH0gZnJvbSBcIi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IENvbmZpZ01vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiwgTU9EVUxFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSBcIi4vY29uZmlnLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBDb25maWdzQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9jb25maWdzL2NvbmZpZ3MuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbmZpZ0VkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2NvbmZpZy1lZGl0L2NvbmZpZy1lZGl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb25maWdBcHBDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvYXBwLWNvbmZpZy9hcHAtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kdWxlQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3VzZXItbW9kdWxlLWNvbmZpZy91c2VyLW1vZHVsZS1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExheW91dE1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9sYXlvdXQtY29uZmlnL2xheW91dC1tb2R1bGUtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb25maWdNb2R1bGVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IER5bmFtaWNDb25maWdDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTG9hZENvbmZpZ0VmZmVjdHMgfSBmcm9tIFwiLi9lZmZlY3RzL2xvYWQtY29uZmlnLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgQ29uZmlnUmVkdWNlcnMgfSBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vY29uZmlnLnJvdXRpbmctbW9kdWxlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRMaXN0TW9kdWxlLFxyXG5cdFx0TWF0TWVudU1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0XHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdFx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuXHRcdFJvdXRpbmdNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Q29uZmlnc0NvbXBvbmVudCxcclxuXHRcdENvbmZpZ0VkaXRDb21wb25lbnQsXHJcblx0XHRDb25maWdBcHBDb25maWdDb21wb25lbnQsXHJcblx0XHRVc2VyTW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0TGF5b3V0TW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0Q29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWdDb21wb25lbnQsXHJcblx0XHREeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnRcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc0NvbmZpZ01vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnOiBDb25maWdNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290TmdzQ29uZmlnTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0gXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzQ29uZmlnTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImNvbmZpZ1wiLCBDb25maWdSZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBMb2FkQ29uZmlnRWZmZWN0cyBdKVxyXG5cdFx0Ly8gUm91dGluZ01vZHVsZVxyXG5cdF0sXHJcblx0ZXhwb3J0czogWyBOZ3NDb25maWdNb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdE5nc0NvbmZpZ01vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsiY29uZmlnLkNvbmZpZ0FjdGlvblR5cGVzIiwiY29uZmlnTGlzdC5SZWR1Y2VyIiwiZ2V0Q29uZmlncyIsImNvbmZpZ0xpc3QuZ2V0Q29uZmlncyIsImdldEFwcENvbmZpZyIsImNvbmZpZ0xpc3QuZ2V0QXBwQ29uZmlnIiwiZ2V0QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWciLCJjb25maWdMaXN0LmdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnIiwiZ2V0VXNlck1vZHVsZUNvbmZpZyIsImNvbmZpZ0xpc3QuZ2V0VXNlck1vZHVsZUNvbmZpZyIsImdldGxheW91dE1vZHVsZUNvbmZpZyIsImNvbmZpZ0xpc3QuZ2V0bGF5b3V0TW9kdWxlQ29uZmlnIiwiZ2V0Q29uZmlnTW9kdWxlQ29uZmlnIiwiY29uZmlnTGlzdC5nZXRDb25maWdNb2R1bGVDb25maWciLCJnZXRGb3JtTW9kdWxlQ29uZmlnIiwiY29uZmlnTGlzdC5nZXRGb3JtTW9kdWxlQ29uZmlnIiwiZ2V0U29ja2V0TW9kdWxlQ29uZmlnIiwiY29uZmlnTGlzdC5nZXRTb2NrZXRNb2R1bGVDb25maWciLCJPYnNlcnZhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBSUM7Ozs7OztBQ0NELElBQWMsa0JBQWtCO0FBQWhDLFdBQWMsa0JBQWtCO0lBRTVCOzs7O1FBRUksWUFBWSw4QkFBd0MsRUFBZ0MsQ0FBQTtZQUNoRixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksbUJBQUMsSUFBVyxHQUFFLEdBQUcsQ0FBQyxHQUFHLG1CQUFDLFNBQWdCLEdBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN2Rjs7OztRQUVELGNBQWM7WUFDVixPQUFPLEVBQ04sQ0FBQTtTQUNKO0tBQ0o7SUFWWSwwQkFBTztJQVlwQjtRQUVJO1NBRUM7S0FDSjtJQUxZLDJCQUFRO0dBZFgsa0JBQWtCLEtBQWxCLGtCQUFrQixRQW9CL0I7Ozs7OztBQ3ZCRCxJQUdjLGtCQUFrQjtBQUFoQyxXQUFjLGtCQUFrQjtJQUU1Qjs7OztRQUdJLFlBQVksU0FBUyxxQkFBRyxFQUFnQyxDQUFBO1lBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxtQkFBQyxJQUFXLEdBQUUsR0FBRyxDQUFDLEdBQUcsbUJBQUMsU0FBZ0IsR0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3ZGOzs7O1FBRUQsY0FBYztZQUNWLFNBQVM7WUFDVCxPQUFPO2dCQUNILElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDdEIsQ0FBQTtTQUNKOzs7O1FBQ0QsV0FBVyxTQUFTO1lBQ2hCLE9BQU8sSUFBSSxTQUFTLENBQUM7Z0JBQ2pCLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FB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