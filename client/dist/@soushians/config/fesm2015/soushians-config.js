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
            Object.keys(initValue).forEach(key => ((/** @type {?} */ (this))[key] = (/** @type {?} */ (initValue))[key]));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
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
                Name: new FormControl("", [Validators.required]),
                Config: new FormGroup({})
            });
        }
    }
    EditConfigApiModel.Request = Request;
    class Response {
        constructor() { }
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
        this.formGroup.controls["Config"].patchValue(event);
    }
    /**
     * @return {?}
     */
    edit() {
        if (!this.formGroup.valid)
            return;
        this.configService.editConfig(this.formGroup.value).subscribe(config => { });
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
                whoAmI: new FormControl("", [Validators.required])
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
            <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="Who Am I" formControlName="whoAmI">
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
                whoAmI: new FormControl("", [Validators.required])
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
        <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="who am i" formControlName="whoAmI">
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWNvbmZpZy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL21vZGVscy9jb25maWcubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9tb2RlbHMvZ2V0LWNvbmZpZ3MtYXBpLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvbW9kZWxzL2VkaXQtY29uZmlnLWFwaS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2NvbmZpZy5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9hY3Rpb25zL2NvbmZpZy5hY3Rpb24udHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9yZWR1Y2Vycy9jb25maWctbGlzdC5yZWR1Y2VyLnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvcmVkdWNlcnMvaW5kZXgudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zZXJ2aWNlcy9jb25maWcuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlncy9jb25maWdzLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlnLWVkaXQvY29uZmlnLWVkaXQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvZHVtYi1jb21wb25lbnRzL2FwcC1jb25maWcvYXBwLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9kdW1iLWNvbXBvbmVudHMvdXNlci1tb2R1bGUtY29uZmlnL3VzZXItbW9kdWxlLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9kdW1iLWNvbXBvbmVudHMvbGF5b3V0LWNvbmZpZy9sYXlvdXQtbW9kdWxlLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zbWFydC1jb21wb25lbnRzL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2R1bWItY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS1jb25maWcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvc21hcnQtY29tcG9uZW50cy9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2VmZmVjdHMvbG9hZC1jb25maWcuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2NvbmZpZy5yb3V0aW5nLW1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2NvbmZpZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbmZpZ01vZGVsPFQ+IHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHROYW1lOiBzdHJpbmc7XHJcblx0Q29uZmlnOiBUO1xyXG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwgfSBmcm9tIFwiLi9jb25maWcubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBtb2R1bGUgR2V0Q29uZmlnc0FwaU1vZGVsIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+e1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IEdldENvbmZpZ3NBcGlNb2RlbC5SZXF1ZXN0ID0ge30gYXMgR2V0Q29uZmlnc0FwaU1vZGVsLlJlcXVlc3QpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpcyBhcyBhbnkpW2tleV0gPSAoaW5pdFZhbHVlIGFzIGFueSlba2V5XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRSZXF1ZXN0Qm9keSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG4gICAgICAgIFJlc3VsdDogQ29uZmlnTW9kZWw8YW55PltdO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBDb25maWdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRWRpdENvbmZpZ0FwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdE5hbWU6IHN0cmluZztcclxuXHRcdENvbmZpZzoge307XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWUgPSB7fSBhcyBFZGl0Q29uZmlnQXBpTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICgodGhpcyBhcyBhbnkpW2tleV0gPSAoaW5pdFZhbHVlIGFzIGFueSlba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdE5hbWU6IHRoaXMuTmFtZSxcclxuXHRcdFx0XHRDb25maWc6IHRoaXMuQ29uZmlnXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdE5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Q29uZmlnOiBuZXcgRm9ybUdyb3VwKHt9KVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IENvbmZpZ01vZGVsPGFueT47XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ01vZHVsZUNvbmZpZyB7XHJcblx0ZGV2X2FwaV9ob3N0Pzogc3RyaW5nO1xyXG5cdHByb2RfYXBpX2hvc3Q/OiBzdHJpbmc7XHJcblx0ZW52Pzoge1xyXG5cdFx0cHJvZHVjdGlvbjogYm9vbGVhbjtcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBDb25maWdNb2R1bGVDb25maWcgPSB7XHJcblx0ZGV2X2FwaV9ob3N0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcclxuXHRwcm9kX2FwaV9ob3N0OiAnaHR0cDovLzUuMTk2LjE0OS4xMDc6MzAwMCcsXHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBmYWxzZVxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPENvbmZpZ01vZHVsZUNvbmZpZz4oJ1VzZXJNb2R1bGVDb25maWcnKTtcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IENvbmZpZ01vZGVsLCBHZXRDb25maWdzQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBDb25maWdBY3Rpb25UeXBlcyB7XHJcblx0R0VUX0NPTkZJR1MgPSBcIltDT05GSUddIGdldCBjb25maWdcIixcclxuXHRDT05GSUdfTE9BREVEX1NVQ0NFRUQgPSBcIltDT05GSUddIGxvYWQgY29uZmlnIHN1Y2NlZWRcIixcclxuXHRVUERBVEVfQ09ORklHID0gXCJbQ09ORklHXSB1cGRhdGUgY29uZmlnXCIsXHJcblx0Q09ORklHX0xPQURFRF9GQUlMRUQgPSBcIltDT05GSUddIGxvYWQgY29uZmlnIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRDb25maWdBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDb25maWdBY3Rpb25UeXBlcy5HRVRfQ09ORklHUztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ0xvYWRlZFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDb25maWdBY3Rpb25UeXBlcy5DT05GSUdfTE9BREVEX1NVQ0NFRUQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDb25maWdNb2RlbDxhbnk+W10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwZGF0ZUNvbmZpZ0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENvbmZpZ0FjdGlvblR5cGVzLlVQREFURV9DT05GSUc7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENvbmZpZ01vZGVsPGFueT4pIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maWdMb2FkZWRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDb25maWdBY3Rpb25UeXBlcy5DT05GSUdfTE9BREVEX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgdHlwZSBBY3Rpb25zID0gR2V0Q29uZmlnQWN0aW9uIHwgQ29uZmlnTG9hZGVkU3VjY2VlZEFjdGlvbiB8IENvbmZpZ0xvYWRlZEZhaWxlZEFjdGlvbiB8IFVwZGF0ZUNvbmZpZ0FjdGlvbjtcclxuIiwiaW1wb3J0ICogYXMgY29uZmlnIGZyb20gXCIuLi9hY3Rpb25zL2NvbmZpZy5hY3Rpb25cIjtcclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwsIExheW91dENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0ZGF0YTogYW55W107XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0ZGF0YTogW11cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGNvbmZpZy5BY3Rpb25zKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgY29uZmlnLkNvbmZpZ0FjdGlvblR5cGVzLkNPTkZJR19MT0FERURfU1VDQ0VFRDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBhY3Rpb24ucGF5bG9hZFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBjb25maWcuQ29uZmlnQWN0aW9uVHlwZXMuVVBEQVRFX0NPTkZJRzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBzdGF0ZS5kYXRhLm1hcChjb25maWcgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGNvbmZpZy5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKSBjb25maWcuQ29uZmlnID0gYWN0aW9uLnBheWxvYWQuQ29uZmlnO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGNvbmZpZztcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ3MgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG5leHBvcnQgY29uc3QgZ2V0QXBwQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImFwcF9jb25maWdcIik7XHJcbmV4cG9ydCBjb25zdCBnZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+XHJcblx0c3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImF1dGhlbnRpY2F0aW9uX21vZHVsZV9jb25maWdcIik7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTW9kdWxlQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcInVzZXJfbW9kdWxlX2NvbmZpZ1wiKTtcclxuZXhwb3J0IGNvbnN0IGdldGxheW91dE1vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJsYXlvdXRfY29uZmlnXCIpIGFzIGFueTtcclxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ01vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+XHJcblx0c3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImNvbmZpZ19tb2R1bGVfY29uZmlnXCIpIGFzIGFueTtcclxuZXhwb3J0IGNvbnN0IGdldEZvcm1Nb2R1bGVDb25maWcgPSAoc3RhdGU6IFN0YXRlKSA9PlxyXG5cdHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJmb3JtX21vZHVsZV9jb25maWdcIikgYXMgYW55O1xyXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0TW9kdWxlQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT5cclxuXHRzdGF0ZS5kYXRhLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwic29ja2V0X21vZHVsZV9jb25maWdcIikgYXMgYW55O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBjb25maWdMaXN0IGZyb20gXCIuL2NvbmZpZy1saXN0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uLCBDb25maWdMb2FkZWRTdWNjZWVkQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuZXhwb3J0IGludGVyZmFjZSBDb25maWdTdGF0ZSB7XHJcblx0bGlzdDogY29uZmlnTGlzdC5TdGF0ZTtcclxufVxyXG5Db25maWdMb2FkZWRGYWlsZWRBY3Rpb247XHJcbmV4cG9ydCBjb25zdCBDb25maWdSZWR1Y2VycyA9IHtcclxuXHRsaXN0OiBjb25maWdMaXN0LlJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVN0YXRlIHtcclxuXHRcImNvbmZpZ3NcIjogQ29uZmlnU3RhdGU7XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiBzZWxlY3RvcnNcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RDb25maWdTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxDb25maWdTdGF0ZT4oXCJjb25maWdcIik7XHJcblxyXG4vLyNlbmRyZWdpb25cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdMaXN0U3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RDb25maWdTdGF0ZSwgKHN0YXRlOiBDb25maWdTdGF0ZSkgPT4gc3RhdGUubGlzdCk7XHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdzID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldENvbmZpZ3MpO1xyXG5leHBvcnQgY29uc3QgZ2V0QXBwQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldEFwcENvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG5cdGdldENvbmZpZ0xpc3RTdGF0ZSxcclxuXHRjb25maWdMaXN0LmdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldFVzZXJNb2R1bGVDb25maWcpO1xyXG5leHBvcnQgY29uc3QgZ2V0bGF5b3V0TW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldGxheW91dE1vZHVsZUNvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdNb2R1bGVDb25maWcgPSBjcmVhdGVTZWxlY3RvcihnZXRDb25maWdMaXN0U3RhdGUsIGNvbmZpZ0xpc3QuZ2V0Q29uZmlnTW9kdWxlQ29uZmlnKTtcclxuZXhwb3J0IGNvbnN0IGdldEZvcm1Nb2R1bGVDb25maWcgPSBjcmVhdGVTZWxlY3RvcihnZXRDb25maWdMaXN0U3RhdGUsIGNvbmZpZ0xpc3QuZ2V0Rm9ybU1vZHVsZUNvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRTb2NrZXRNb2R1bGVDb25maWcgPSBjcmVhdGVTZWxlY3RvcihnZXRDb25maWdMaXN0U3RhdGUsIGNvbmZpZ0xpc3QuZ2V0U29ja2V0TW9kdWxlQ29uZmlnKTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiwgTU9EVUxFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSBcIi4uL2NvbmZpZy5jb25maWdcIjtcclxuaW1wb3J0IHsgZ2V0Q29uZmlnTW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBDb25maWdNb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX2NvbmZpZyk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZTogQ29uZmlnTW9kdWxlQ29uZmlnLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KGdldENvbmZpZ01vZHVsZUNvbmZpZykuc3Vic2NyaWJlKGNvbmZpZ0NvbmZpZyA9PiB7XHJcblx0XHRcdGlmICghY29uZmlnQ29uZmlnKSByZXR1cm47XHJcblx0XHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgY29uZmlnQ29uZmlnLkNvbmZpZyk7XHJcblx0XHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IENvbmZpZ1N0YXRlIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBFZGl0Q29uZmlnQXBpTW9kZWwsIEdldENvbmZpZ3NBcGlNb2RlbCwgQ29uZmlnTW9kZWwsIExheW91dENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuaW1wb3J0IHsgR2V0Q29uZmlnQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XHJcblx0cmVzcG9uc2VDYWNoZTogYW55O1xyXG5cdGNvbmZpZ3NFbmRwb2ludDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPENvbmZpZ1N0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLmNvbmZpZ3NFbmRwb2ludCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVudi5wcm9kdWN0aW9uXHJcblx0XHRcdD8gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcucHJvZF9hcGlfaG9zdFxyXG5cdFx0XHQ6IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmRldl9hcGlfaG9zdDtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0Q29uZmlnQWN0aW9uKCkpO1xyXG5cdFx0fSwgOTk5KTtcclxuXHR9XHJcblxyXG5cdGdldENvbmZpZ3MoKTogT2JzZXJ2YWJsZTxDb25maWdNb2RlbDxhbnk+W10+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdHRoaXMuaHR0cFxyXG5cdFx0XHRcdC5nZXQoYCR7dGhpcy5jb25maWdzRW5kcG9pbnR9L2FwaS9jb25maWdgKVxyXG5cdFx0XHRcdC8vIC5maWx0ZXIoKCkgPT4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZGV2X2FwaV9ob3N0ICE9IHVuZGVmaW5lZClcclxuXHRcdFx0XHQudGFrZSgxKVxyXG5cdFx0XHRcdC5tYXAoKHJlc3BvbnNlOiBHZXRDb25maWdzQXBpTW9kZWwuUmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbnYucHJvZHVjdGlvbikge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBkZXZfYXBpX2hvc3QgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5kZXZfYXBpX2hvc3Q7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHByb2RfYXBpX2hvc3QgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5wcm9kX2FwaV9ob3N0O1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShcclxuXHRcdFx0XHRcdFx0XHRKU09OLnN0cmluZ2lmeShyZXNwb25zZSkucmVwbGFjZShuZXcgUmVnRXhwKGRldl9hcGlfaG9zdCwgXCJnXCIpLCBwcm9kX2FwaV9ob3N0KVxyXG5cdFx0XHRcdFx0XHQpLlJlc3VsdDtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5SZXN1bHQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdGdldENvbmZpZ0J5TmFtZShuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5jb25maWdzRW5kcG9pbnR9L2FwaS9jb25maWcvJHtuYW1lfWApLm1hcChyZXNwb25zZSA9PiByZXNwb25zZSkuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRlZGl0Q29uZmlnKGJvZHk6IEVkaXRDb25maWdBcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHZhciBtb2RlbCA9IG5ldyBFZGl0Q29uZmlnQXBpTW9kZWwuUmVxdWVzdChib2R5KTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wdXQoYCR7dGhpcy5jb25maWdzRW5kcG9pbnR9L2FwaS9jb25maWcvJHttb2RlbC5OYW1lfWAsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0TGF5b3V0Q29uZmlncygpOiBPYnNlcnZhYmxlPExheW91dENvbmZpZ01vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQoYCR7dGhpcy5jb25maWdzRW5kcG9pbnR9L2FwaS9sYXlvdXQtY29uZmlnYClcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2U6IExheW91dENvbmZpZ01vZGVsKSA9PiByZXNwb25zZSlcclxuXHRcdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBnZXRDb25maWdzLCBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImNvbmZpZ3NcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhGbGV4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRXcmFwIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgPG1hdC1jYXJkIGNsYXNzPVwiY29uZmlnLWJveFwiICpuZ0Zvcj1cImxldCBjb25maWcgb2YgKGNvbmZpZ3MgfCBhc3luYylcIiBbZnhGbGV4XT1cIjUwXCI+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ2VkaXQnICwgIGNvbmZpZy5OYW1lXVwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJlZGl0IGNvbmZpZ1wiPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7e2NvbmZpZy5OYW1lfX1cclxuICAgICAgPC9oMz5cclxuICA8L21hdC1jYXJkPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5jb25maWctYm94e21hcmdpbjoxNXB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWdzQ29tcG9uZW50IHtcclxuXHRjb25maWdzOiBPYnNlcnZhYmxlPENvbmZpZ01vZGVsPGFueT5bXT47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPikge1xyXG5cdFx0dGhpcy5jb25maWdzID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0Q29uZmlncyk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEVkaXRDb25maWdBcGlNb2RlbCwgUGFydGlhbENvbmZpZyB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29uZmlnLWNvbmZpZy1lZGl0XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ID5cclxuICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIChuZ1N1Ym1pdCk9XCJlZGl0KClcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1jYXJkPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgIDxkeW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IgKGNvbmZpZ0NoYW5nZWQpPVwiY29uZmlnQ2hhbmdlZCgkZXZlbnQpXCIgW2RhdGFdPVwicGFydGlhbENvbmZpZ01vZGVsXCI+PC9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3I+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPG1hdC1jYXJkLWFjdGlvbnMgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIHR5cGU9XCJzdWJtaXRcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiZWRpdFwiPsOZwojDm8KMw5jCscOYwqfDm8KMw5jCtDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gZnhGbGV4PVwibm9ncm93XCIgdHlwZT1cImJ1dHRvblwiIHJvdXRlckxpbms9XCIvY29uZmlnc1wiIG1hdC1yYWlzZWQtYnV0dG9uPsOYwqjDmMKnw5jCssOawq/DmMK0w5jCqjwvYnV0dG9uPlxyXG4gICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Y29uZmlnSW5mb3JhbWF0aW9uOiBhbnk7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBFZGl0Q29uZmlnQXBpTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0cGFydGlhbENvbmZpZ01vZGVsOiBQYXJ0aWFsQ29uZmlnO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGNvbnN0IGNvbmZpZ05hbWU6IHN0cmluZyA9IHBhcmFtc1tcIm5hbWVcIl07XHJcblx0XHRcdHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWdCeU5hbWUoY29uZmlnTmFtZSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMucGFydGlhbENvbmZpZ01vZGVsID0ge1xyXG5cdFx0XHRcdFx0dHlwZTogZGF0YS5SZXN1bHQuTmFtZSxcclxuXHRcdFx0XHRcdGlucHV0czoge1xyXG5cdFx0XHRcdFx0XHRjb25maWdGb3JtR3JvdXA6IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbmZpZyBhcyBGb3JtR3JvdXBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xyXG5cdFx0XHRcdFx0X2lkOiBkYXRhLlJlc3VsdC5faWQsXHJcblx0XHRcdFx0XHROYW1lOiBkYXRhLlJlc3VsdC5OYW1lXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0T2JqZWN0LmtleXMoZGF0YS5SZXN1bHQuQ29uZmlnKS5mb3JFYWNoKGtleSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmFkZENvbnRyb2wodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29uZmlnIGFzIEZvcm1Hcm91cCwga2V5LCBkYXRhLlJlc3VsdC5Db25maWdba2V5XSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhZGRDb250cm9sKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHRcdFx0Zm9ybUdyb3VwLmFkZENvbnRyb2woa2V5LCB0aGlzLmZvcm1CdWlsZGVyLmFycmF5KHZhbHVlKSk7XHJcblx0XHR9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcblx0XHRcdGZvcm1Hcm91cC5hZGRDb250cm9sKGtleSwgdGhpcy5mb3JtQnVpbGRlci5ncm91cCh2YWx1ZSkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Zm9ybUdyb3VwLmFkZENvbnRyb2woa2V5LCBuZXcgRm9ybUNvbnRyb2wodmFsdWUpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHRjb25maWdDaGFuZ2VkKGV2ZW50OiBhbnkpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbmZpZy5wYXRjaFZhbHVlKGV2ZW50KTtcclxuXHR9XHJcblx0ZWRpdCgpIHtcclxuXHRcdGlmICghdGhpcy5mb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuXHRcdHRoaXMuY29uZmlnU2VydmljZS5lZGl0Q29uZmlnKHRoaXMuZm9ybUdyb3VwLnZhbHVlKS5zdWJzY3JpYmUoY29uZmlnID0+IHt9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29uZmlnLWFwcC1jb25maWdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoUgw5nCvsOYwrHDmcKIw5rCmMOZwodcIiBmb3JtQ29udHJvbE5hbWU9XCJBcHBUaXRsZVwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnQXBwQ29uZmlnQ29tcG9uZW50IHtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoeyBBcHBUaXRsZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSB9KTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBjb25maWdGb3JtR3JvdXAoY29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXApIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoY29uZmlnRm9ybUdyb3VwLnZhbHVlKTtcclxuXHRcdGNvbmZpZ0Zvcm1Hcm91cC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGRhdGEpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdEBPdXRwdXQoKSBjb25maWdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiY29uZmlnRm9ybUdyb3VwXCIpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sLCBGb3JtQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJjb25maWctdXNlci1tb2R1bGUtY29uZmlnXCIsXHJcblx0dGVtcGxhdGU6IGA8aDI+RW5kcG9pbnRzPC9oMj5cclxuPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cC5nZXQoJ2VuZHBvaW50cycpXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cImNoYW5nZSBwYXNzd29yZFwiIGZvcm1Db250cm9sTmFtZT1cImNoYW5nZVBhc3N3b3JkXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cImVkaXQgcHJvZmlsZVwiIGZvcm1Db250cm9sTmFtZT1cImVkaXRQcm9maWxlXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cImdldCB1c2VyIGluZm9cIiBmb3JtQ29udHJvbE5hbWU9XCJnZXRVc2VySW5mb1wiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJXaG8gQW0gSVwiIGZvcm1Db250cm9sTmFtZT1cIndob0FtSVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZGl2PlxyXG48aDI+Rm9ybXM8L2gyPlxyXG48ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwLmdldCgnZm9ybXMnKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwicHJvZmlsZSBlZGl0XCIgZm9ybUNvbnRyb2xOYW1lPVwicHJvZmlsZV9lZGl0XCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8IS0tIDxuZ3MtZm9ybS1zZWxlY3RvciAoc2VsZWN0KT1cInNldEZvcm1JZCgkZXZlbnQsJ3NpZ25JbicpXCI+PC9uZ3MtZm9ybS1zZWxlY3Rvcj4gLS0+XHJcbjwvZGl2PlxyXG5cclxuXHJcbjxoMiBmeEZsZXg9XCIxMDBcIj5cclxuICAgIERhc2hvYmFyZCBMaW5rc1xyXG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZE1lbnUoKVwiPlxyXG4gICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiaWNvbi1idXR0b24gaWNvblwiPmFkZDwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuPC9oMj5cclxuPGRpdiBmeEZsZXg9XCIxMDBcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiAkYW55KGZvcm1Hcm91cC5nZXQoJ2Rhc2hib2FyZExpbmtzJykpLmNvbnRyb2xzXCI+XHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiaXRlbVwiPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwicm91dGVcIiBmb3JtQ29udHJvbE5hbWU9XCJyb3V0ZVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJpY29uXCIgZm9ybUNvbnRyb2xOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiIGZvcm1Db250cm9sTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyTW9kdWxlQ29uZmlnQ29tcG9uZW50IHtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0ZW5kcG9pbnRzOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0Y2hhbmdlUGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdGVkaXRQcm9maWxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRnZXRVc2VySW5mbzogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0d2hvQW1JOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHR9KSxcclxuXHRcdGZvcm1zOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0cHJvZmlsZV9lZGl0OiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHR9KSxcclxuXHRcdGRhc2hib2FyZExpbmtzOiBuZXcgRm9ybUFycmF5KFtdKVxyXG5cdH0pO1xyXG5cdF9jb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBjb25maWdGb3JtR3JvdXAoY29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXApIHtcclxuXHRcdHRoaXMuX2NvbmZpZ0Zvcm1Hcm91cCA9IGNvbmZpZ0Zvcm1Hcm91cDtcclxuXHRcdChjb25maWdGb3JtR3JvdXAuY29udHJvbHMuZGFzaGJvYXJkTGlua3MgYXMgRm9ybUFycmF5KS5jb250cm9scy5mb3JFYWNoKGNvbnRyb2wgPT4ge1xyXG5cdFx0XHQodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuZGFzaGJvYXJkTGlua3MgYXMgRm9ybUFycmF5KS5wdXNoKFxyXG5cdFx0XHRcdG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0cm91dGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0XHRpY29uOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShjb25maWdGb3JtR3JvdXAudmFsdWUpO1xyXG5cdFx0Y29uZmlnRm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoZGF0YSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Z2V0IGNvbmZpZ0Zvcm1Hcm91cCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWdGb3JtR3JvdXA7XHJcblx0fVxyXG5cdEBPdXRwdXQoKSBjb25maWdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiY29uZmlnRm9ybUdyb3VwXCIpO1xyXG5cdH1cclxuXHRhZGRNZW51KCkge1xyXG5cdFx0dmFyIG1lbnVJdGVtID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHJvdXRlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRpY29uOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHR0aXRsZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0KHRoaXMuZm9ybUdyb3VwLmdldChcImRhc2hib2FyZExpbmtzXCIpIGFzIEZvcm1BcnJheSkucHVzaChtZW51SXRlbSk7XHJcblx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwiZGFzaGJvYXJkTGlua3NcIikgYXMgRm9ybUFycmF5KS5wdXNoKG1lbnVJdGVtKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCwgRm9ybUFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhGbGV4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRXcmFwIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4RmxleExheW91dD1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIHBsYWNlaG9sZGVyPVwibGF5b3V0IG1vZGVcIiBmb3JtQ29udHJvbE5hbWU9XCJsYXlvdXRNb2RlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxheW91dE1vZGVzXCIgW3ZhbHVlXT1cIml0ZW1cIj57e2l0ZW19fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD4gXHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlICAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgIGZvcm1Db250cm9sTmFtZT1cInNob3dMZWZ0TmF2QmFyXCI+c2hvdyBsZWZ0IG5hdmJhcjwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIHBsYWNlaG9sZGVyPVwibWFpbiBzaWRlIG5hdiBtb2RlXCIgZm9ybUNvbnRyb2xOYW1lPVwibWFpblNpZGVOYXZNb2RlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNpZGVOYXZNb2Rlc1wiIFt2YWx1ZV09XCJpdGVtXCI+e3tpdGVtfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+IFxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSAgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiICBmb3JtQ29udHJvbE5hbWU9XCJzaG93TWFpblNpZGVuYXZcIj5zaG93IG1haW4gc2lkZSBuYXY8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlICAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgIGZvcm1Db250cm9sTmFtZT1cInN0aWNreUxlZnROYXZCYXJcIj5zdGlja3kgbGVmdCBuYXZiYXI8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlICAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgIGZvcm1Db250cm9sTmFtZT1cInNob3dTZWNvbmRTaWRlTmF2XCI+c2hvdyBzZWNvbmQgc2lkZSBuYXY8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBwbGFjZWhvbGRlcj1cInNlY29uZCBzaWRlIG5hdiBtb2RlXCIgZm9ybUNvbnRyb2xOYW1lPVwic2Vjb25kU2lkZU5hdk1vZGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc2lkZU5hdk1vZGVzXCIgW3ZhbHVlXT1cIml0ZW1cIj57e2l0ZW19fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD4gXHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8aDIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICAgICAgTWVudSBJdGVtc1xyXG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRNZW51KClcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJpY29uLWJ1dHRvbiBpY29uXCI+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvaDI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZvcm1Hcm91cC5jb250cm9scy5tZW51SXRlbXMuY29udHJvbHNcIj5cclxuICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJyb3V0ZVwiIGZvcm1Db250cm9sTmFtZT1cInJvdXRlXCI+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cImljb25cIiBmb3JtQ29udHJvbE5hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInRpdGxlXCIgZm9ybUNvbnRyb2xOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPiBcclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBwbGFjZWhvbGRlcj1cInJvbGVzXCIgZm9ybUNvbnRyb2xOYW1lPVwicm9sZXNcIiBtdWx0aXBsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgcm9sZSBvZiByb2xlSXRlbXNcIiBbdmFsdWVdPVwicm9sZVwiPnt7cm9sZX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PiBcclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGVDb25maWdDb21wb25lbnQge1xyXG5cdHNpZGVOYXZNb2Rlczogc3RyaW5nW107XHJcblx0bGF5b3V0TW9kZXM6IHN0cmluZ1tdO1xyXG5cdGZvcm1Hcm91cDogYW55ID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRsYXlvdXRNb2RlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0c2hvd0xlZnROYXZCYXI6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRtYWluU2lkZU5hdk1vZGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRzaG93TWFpblNpZGVuYXY6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRzdGlja3lMZWZ0TmF2QmFyOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0c2hvd1NlY29uZFNpZGVOYXY6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRzZWNvbmRTaWRlTmF2TW9kZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdG1lbnVJdGVtczogbmV3IEZvcm1BcnJheShbXSlcclxuXHR9KTtcclxuXHRfY29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KClcclxuXHRzZXQgY29uZmlnRm9ybUdyb3VwKGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcblx0XHR0aGlzLl9jb25maWdGb3JtR3JvdXAgPSBjb25maWdGb3JtR3JvdXA7XHJcblx0XHQoY29uZmlnRm9ybUdyb3VwLmNvbnRyb2xzLm1lbnVJdGVtcyBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcclxuXHRcdFx0KHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLm1lbnVJdGVtcyBhcyBGb3JtQXJyYXkpLnB1c2goXHJcblx0XHRcdFx0bmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHRyb3V0ZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRcdGljb246IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0XHQvLyByb2xlczogbmV3IEZvcm1BcnJheShjb250cm9sLnZhbHVlLnJvbGVzLm1hcCgoaSkgPT4gbmV3IEZvcm1Db250cm9sKFwiQWRtaW5cIikpKSxcclxuXHRcdFx0XHRcdHJvbGVzOiBuZXcgRm9ybUNvbnRyb2woKSxcclxuXHRcdFx0XHRcdHRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoY29uZmlnRm9ybUdyb3VwLnZhbHVlKTtcclxuXHRcdGNvbmZpZ0Zvcm1Hcm91cC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChkYXRhKSA9PiB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGRhdGEpKTtcclxuXHR9XHJcblx0Z2V0IGNvbmZpZ0Zvcm1Hcm91cCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWdGb3JtR3JvdXA7XHJcblx0fVxyXG5cdEBPdXRwdXQoKSBjb25maWdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRyb2xlSXRlbXM6IHN0cmluZ1tdID0gWyBcIkFkbWluXCIsIFwiVXNlclwiIF07XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLnNpZGVOYXZNb2RlcyA9IFsgXCJvdmVyXCIsIFwicHVzaFwiLCBcInNpZGVcIiBdO1xyXG5cdFx0dGhpcy5sYXlvdXRNb2RlcyA9IFsgXCJ3aXRoLW1hcmdpblwiLCBcIndpdGhvdXQtbWFyZ2luXCIsIFwiZGVmYXVsdFwiIF07XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiY29uZmlnRm9ybUdyb3VwXCIpO1xyXG5cdH1cclxuXHRhZGRNZW51KCkge1xyXG5cdFx0dmFyIG1lbnVJdGVtID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHJvdXRlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRpY29uOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRyb2xlczogbmV3IEZvcm1Db250cm9sKCksXHJcblx0XHRcdHRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHR9KTtcclxuXHJcblx0XHQodGhpcy5mb3JtR3JvdXAuZ2V0KFwibWVudUl0ZW1zXCIpIGFzIEZvcm1BcnJheSkucHVzaChtZW51SXRlbSk7XHJcblx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibWVudUl0ZW1zXCIpIGFzIEZvcm1BcnJheSkucHVzaChtZW51SXRlbSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImNvbmZpZy1tb2R1bGUtY29udGFpbmVyXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0QWxpZ249XCJcIiBmeGZsZXg9XCIxMDBcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG48L2Rpdj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJjb25maWctYXV0aGVudGljYXRpb24tbW9kdWxlLWNvbmZpZ1wiLFxyXG5cdHRlbXBsYXRlOiBgPGgyPkVuZHBvaW50czwvaDI+XHJcbjxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXAuY29udHJvbHMuZW5kcG9pbnRzXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJzaWduIGluXCIgZm9ybUNvbnRyb2xOYW1lPVwic2lnbkluXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInNpZ24gb3V0XCIgZm9ybUNvbnRyb2xOYW1lPVwic2lnbk91dFwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJ3aG8gYW0gaVwiIGZvcm1Db250cm9sTmFtZT1cIndob0FtSVwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuPC9kaXY+XHJcbjxoMj5Gb3JtczwvaDI+XHJcbjxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXAuY29udHJvbHMuZm9ybXNcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlNpZ25JbiBGb3Jtc1wiIGZvcm1Db250cm9sTmFtZT1cInNpZ25JblwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPCEtLSA8bmdzLWZvcm0tc2VsZWN0b3IgKHNlbGVjdCk9XCJzZXRGb3JtSWQoJGV2ZW50LCdzaWduSW4nKVwiPjwvbmdzLWZvcm0tc2VsZWN0b3I+IC0tPlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ0NvbXBvbmVudCB7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdGVuZHBvaW50czogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHNpZ25JbjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0c2lnbk91dDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0d2hvQW1JOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHR9KSxcclxuXHRcdGZvcm1zOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0c2lnbkluOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHR9KVxyXG5cdH0pO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGNvbmZpZ0Zvcm1Hcm91cChjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShjb25maWdGb3JtR3JvdXAudmFsdWUpO1xyXG5cdFx0Y29uZmlnRm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoZGF0YSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0QE91dHB1dCgpIGNvbmZpZ0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwID0gdGhpcy5pbmplY3Rvci5nZXQoXCJjb25maWdGb3JtR3JvdXBcIik7XHJcblx0fVxyXG5cdHNldEZvcm1JZChmb3JtSWQ6IHN0cmluZywgZm9ybU5hbWU6IHN0cmluZykge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7IFtmb3JtTmFtZV06IGZvcm1JZCB9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdElucHV0LFxyXG5cdEFmdGVyVmlld0luaXQsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDaGlsZCxcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdFJlZmxlY3RpdmVJbmplY3RvcixcclxuXHRPbkRlc3Ryb3ksXHJcblx0T3V0cHV0LFxyXG5cdEV2ZW50RW1pdHRlclxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBQYXJ0aWFsQ29uZmlnIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvYXV0aGVudGljYXRpb24tbW9kdWxlLWNvbmZpZy9hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb25maWdBcHBDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL2FwcC1jb25maWcvYXBwLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXNlck1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvdXNlci1tb2R1bGUtY29uZmlnL3VzZXItbW9kdWxlLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9sYXlvdXQtY29uZmlnL2xheW91dC1tb2R1bGUtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICNkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyPjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5kaWFncmFtLWJveCAuYzN7ZGlyZWN0aW9uOmx0cn1gXSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0Q29uZmlnQXBwQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0VXNlck1vZHVsZUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdExheW91dE1vZHVsZUNvbmZpZ0NvbXBvbmVudFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNDb25maWdDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cdHR5cGVNYXBUb0RpYWdyYW06IGFueSA9IHtcclxuXHRcdGF1dGhlbnRpY2F0aW9uX21vZHVsZV9jb25maWc6IEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0YXBwX2NvbmZpZzogQ29uZmlnQXBwQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0dXNlcl9tb2R1bGVfY29uZmlnOiBVc2VyTW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0bGF5b3V0X2NvbmZpZzogTGF5b3V0TW9kdWxlQ29uZmlnQ29tcG9uZW50XHJcblx0fTtcclxuXHRAVmlld0NoaWxkKFwiZHluYW1pY0NvbXBvbmVudENvbnRhaW5lclwiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcclxuXHRkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cdEBPdXRwdXQoKSBjb25maWdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGN1cnJlbnRDb21wb25lbnQ6IGFueSA9IG51bGw7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhOiBQYXJ0aWFsQ29uZmlnKSB7XHJcblx0XHRpZiAoIWRhdGEgfHwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09IDApIHJldHVybjtcclxuXHRcdGlmICghKGRhdGEudHlwZSBpbiB0aGlzLnR5cGVNYXBUb0RpYWdyYW0pKSB7XHJcblx0XHRcdGlmICh0aGlzLmN1cnJlbnRDb21wb25lbnQpIHRoaXMuY3VycmVudENvbXBvbmVudC5kZXN0cm95KCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGxldCBfY29tcG9uZW50OiBhbnkgPSB0aGlzLnR5cGVNYXBUb0RpYWdyYW1bZGF0YS50eXBlXTtcclxuXHRcdGxldCBpbnB1dFByb3ZpZGVycyA9IE9iamVjdC5rZXlzKGRhdGEuaW5wdXRzKS5tYXAoaW5wdXROYW1lID0+IHtcclxuXHRcdFx0cmV0dXJuIHsgcHJvdmlkZTogaW5wdXROYW1lLCB1c2VWYWx1ZTogKGRhdGEuaW5wdXRzIGFzIGFueSlbaW5wdXROYW1lXSB9O1xyXG5cdFx0fSk7XHJcblx0XHRsZXQgcmVzb2x2ZWRJbnB1dHMgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZShpbnB1dFByb3ZpZGVycyk7XHJcblxyXG5cdFx0bGV0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhcclxuXHRcdFx0cmVzb2x2ZWRJbnB1dHMsXHJcblx0XHRcdHRoaXMuZHluYW1pY0NvbXBvbmVudENvbnRhaW5lci5wYXJlbnRJbmplY3RvclxyXG5cdFx0KTtcclxuXHRcdGxldCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShfY29tcG9uZW50KTtcclxuXHJcblx0XHRsZXQgY29tcG9uZW50ID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xyXG5cdFx0KDxhbnk+Y29tcG9uZW50Lmluc3RhbmNlKS5jb25maWdDaGFuZ2VkLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcblx0XHRcdHRoaXMuY29uZmlnQ2hhbmdlZC5lbWl0KGRhdGEpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmR5bmFtaWNDb21wb25lbnRDb250YWluZXIuaW5zZXJ0KGNvbXBvbmVudC5ob3N0Vmlldyk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY3VycmVudENvbXBvbmVudCkge1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQuZGVzdHJveSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY3VycmVudENvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7fVxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ0FjdGlvblR5cGVzLCBDb25maWdMb2FkZWRTdWNjZWVkQWN0aW9uLCBDb25maWdMb2FkZWRGYWlsZWRBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldENvbmZpZ3NBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvYWRDb25maWdFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Z2V0Q29uZmlncyQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKENvbmZpZ0FjdGlvblR5cGVzLkdFVF9DT05GSUdTKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEdldENvbmZpZ3NBcGlNb2RlbC5SZXF1ZXN0KSA9PiB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlncygpKSxcclxuXHRcdFx0bWFwKGNvbmZpZ3MgPT4gbmV3IENvbmZpZ0xvYWRlZFN1Y2NlZWRBY3Rpb24oY29uZmlncykpLFxyXG5cdFx0XHRjYXRjaEVycm9yKCgpID0+IE9ic2VydmFibGUub2YobmV3IENvbmZpZ0xvYWRlZEZhaWxlZEFjdGlvbigpKSlcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBDb25maWdzQ29tcG9uZW50LCBDb25maWdFZGl0Q29tcG9uZW50LCBDb25maWdNb2R1bGVDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3NtYXJ0LWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogJ2NvbmZpZ3MnLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBDb25maWdNb2R1bGVDb250YWluZXJDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBDb25maWdzQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAnZWRpdC86bmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBDb25maWdFZGl0Q29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdExpc3RNb2R1bGUsXHJcblx0TWF0TWVudU1vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcblx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcblx0TWF0U2xpZGVUb2dnbGVNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRDb25maWdzQXBpTW9kZWwgfSBmcm9tIFwiLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQ29uZmlnTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi9jb25maWcuY29uZmlnXCI7XHJcbmltcG9ydCB7IENvbmZpZ3NDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2NvbmZpZ3MvY29uZmlncy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29uZmlnRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlnLWVkaXQvY29uZmlnLWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbmZpZ0FwcENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9hcHAtY29uZmlnL2FwcC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVzZXJNb2R1bGVDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvdXNlci1tb2R1bGUtY29uZmlnL3VzZXItbW9kdWxlLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL2xheW91dC1jb25maWcvbGF5b3V0LW1vZHVsZS1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbmZpZ01vZHVsZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlnLW1vZHVsZS1jb250YWluZXIvY29uZmlnLW1vZHVsZS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS1jb25maWcvYXV0aGVudGljYXRpb24tbW9kdWxlLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRHluYW1pY0NvbmZpZ0NvbXBvbmVudFNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMb2FkQ29uZmlnRWZmZWN0cyB9IGZyb20gXCIuL2VmZmVjdHMvbG9hZC1jb25maWcuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBDb25maWdSZWR1Y2VycyB9IGZyb20gXCIuL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9jb25maWcucm91dGluZy1tb2R1bGVcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0U2lkZW5hdk1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdExpc3RNb2R1bGUsXHJcblx0XHRNYXRNZW51TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdFx0TWF0VG9vbGJhck1vZHVsZSxcclxuXHRcdE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcblx0XHRNYXRQcm9ncmVzc0Jhck1vZHVsZSxcclxuXHRcdEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG5cdFx0Um91dGluZ01vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRDb25maWdzQ29tcG9uZW50LFxyXG5cdFx0Q29uZmlnRWRpdENvbXBvbmVudCxcclxuXHRcdENvbmZpZ0FwcENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdFVzZXJNb2R1bGVDb25maWdDb21wb25lbnQsXHJcblx0XHRMYXlvdXRNb2R1bGVDb25maWdDb21wb25lbnQsXHJcblx0XHRDb25maWdNb2R1bGVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdER5bmFtaWNDb25maWdDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzQ29uZmlnTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc6IENvbmZpZ01vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IFJvb3ROZ3NDb25maWdNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfSBdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHROZ3NDb25maWdNb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwiY29uZmlnXCIsIENvbmZpZ1JlZHVjZXJzKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbIExvYWRDb25maWdFZmZlY3RzIF0pXHJcblx0XHQvLyBSb3V0aW5nTW9kdWxlXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIE5nc0NvbmZpZ01vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzQ29uZmlnTW9kdWxlIHt9XHJcbiJdLCJuYW1lcyI6WyJjb25maWcuQ29uZmlnQWN0aW9uVHlwZXMiLCJjb25maWdMaXN0LlJlZHVjZXIiLCJnZXRDb25maWdzIiwiY29uZmlnTGlzdC5nZXRDb25maWdzIiwiZ2V0QXBwQ29uZmlnIiwiY29uZmlnTGlzdC5nZXRBcHBDb25maWciLCJnZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyIsImNvbmZpZ0xpc3QuZ2V0QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWciLCJnZXRVc2VyTW9kdWxlQ29uZmlnIiwiY29uZmlnTGlzdC5nZXRVc2VyTW9kdWxlQ29uZmlnIiwiZ2V0bGF5b3V0TW9kdWxlQ29uZmlnIiwiY29uZmlnTGlzdC5nZXRsYXlvdXRNb2R1bGVDb25maWciLCJnZXRDb25maWdNb2R1bGVDb25maWciLCJjb25maWdMaXN0LmdldENvbmZpZ01vZHVsZUNvbmZpZyIsImdldEZvcm1Nb2R1bGVDb25maWciLCJjb25maWdMaXN0LmdldEZvcm1Nb2R1bGVDb25maWciLCJnZXRTb2NrZXRNb2R1bGVDb25maWciLCJjb25maWdMaXN0LmdldFNvY2tldE1vZHVsZUNvbmZpZyIsIk9ic2VydmFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FJQzs7Ozs7O0FDQ0QsSUFBYyxrQkFBa0I7QUFBaEMsV0FBYyxrQkFBa0I7SUFFNUI7Ozs7UUFFSSxZQUFZLDhCQUF3QyxFQUFnQyxDQUFBO1lBQ2hGLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxtQkFBQyxJQUFXLEdBQUUsR0FBRyxDQUFDLEdB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