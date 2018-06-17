import { FormGroup, FormControl, Validators, FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InjectionToken, Injectable, Inject, Component, Output, EventEmitter, Input, Injector, ViewChild, ComponentFactoryResolver, ViewContainerRef, ReflectiveInjector, NgModule, defineInjectable, inject } from '@angular/core';
import { createSelector, createFeatureSelector, Store, StoreModule } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { map, filter, switchMap, catchError } from 'rxjs/operators';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { __decorate, __metadata } from 'tslib';
import { Observable as Observable$1 } from 'rxjs/Observable';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
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
            Object.keys(initValue).forEach(key => ((/** @type {?} */ (this))[key] = (/** @type {?} */ (initValue))[key]));
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
        constructor() { }
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
     * @param {?} store
     */
    constructor(injector, store) {
        this.injector = injector;
        this.store = store;
        this.configChanged = new EventEmitter();
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
        this.sideNavModes = ["over", "push", "side"];
        this.layoutModes = ["with-margin", "without-margin", "default"];
        this.configFormGroup = this.injector.get("configFormGroup");
        this.roleItems$ = this.store
            .select(getAppConfig$1)
            .pipe(filter(config => config != null), map(appconfig => appconfig.Config.Roles));
        // this.configChanged.
        // this.formGroup.valueChanges.subscribe(value => {
        // 	debugger;
        // 	this.configChanged.emit(value);
        // });
    }
    /**
     * @param {?} configFormGroup
     * @return {?}
     */
    set configFormGroup(configFormGroup) {
        this._configFormGroup = configFormGroup;
        (/** @type {?} */ (configFormGroup.controls["menuItems"])).controls.forEach(control => {
            (/** @type {?} */ (this.formGroup.controls["menuItems"])).push(new FormGroup({
                route: new FormControl("", [Validators.required]),
                icon: new FormControl("", [Validators.required]),
                // roles: new FormArray(control.value.roles.map((i) => new FormControl("Admin"))),
                roles: new FormControl(),
                title: new FormControl("", [Validators.required])
            }));
        });
        this.formGroup.patchValue(configFormGroup.value);
        configFormGroup.valueChanges.subscribe(data => this.formGroup.patchValue(data));
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
                template: `<div fxLayout="row wrap" fxLayoutAlign="center" fxLayoutGap="25px">
    <mat-card fxFlex="20" fxFlexLayout="row">
        <div [formGroup]="formGroup">
            <mat-form-field>
                <mat-select placeholder="layout mode" formControlName="layoutMode" >
                    <mat-option *ngFor="let item of layoutModes" [value]="item">{{item}}</mat-option>
                </mat-select> 
            </mat-form-field>
            <mat-slide-toggle   formControlName="showLeftNavBar">show left navbar</mat-slide-toggle>
            <mat-form-field>
                <mat-select placeholder="main side nav mode" formControlName="mainSideNavMode" >
                    <mat-option *ngFor="let item of sideNavModes" [value]="item">{{item}}</mat-option>
                </mat-select> 
            </mat-form-field>
            <mat-slide-toggle formControlName="showMainSidenav">show main side nav</mat-slide-toggle>
            <mat-slide-toggle formControlName="stickyLeftNavBar">sticky left navbar</mat-slide-toggle>
            <mat-slide-toggle formControlName="showSecondSideNav">show second side nav</mat-slide-toggle>
            <mat-form-field>
                <mat-select placeholder="second side nav mode" formControlName="secondSideNavMode" >
                    <mat-option *ngFor="let item of sideNavModes" [value]="item">{{item}}</mat-option>
                </mat-select> 
            </mat-form-field>
        </div>
    </mat-card>

    <mat-card fxFlex fxLayout="column">
        <h2 fxFlex>
            Menu Items
            <button mat-icon-button color="primary" (click)="addMenu()">
                <mat-icon aria-label="icon-button icon">add</mat-icon>
            </button>
        </h2>
        <div fxFlex="nogrow" *ngFor="let item of $any(formGroup).get('menuItems').controls">
            <div [formGroup]="item" fxLayout="row" fxLayoutGap="25px">
                <button mat-icon-button>
                    <mat-icon>delete</mat-icon>
                </button>
                <mat-form-field>
                    <input type="text" matInput placeholder="route" formControlName="route">
                </mat-form-field>
                <mat-form-field>
                    <input type="text" matInput placeholder="icon" formControlName="icon">
                </mat-form-field>
                <mat-form-field>
                    <input type="text" matInput placeholder="title" formControlName="title">
                </mat-form-field>
                <mat-form-field> 
                    <mat-select placeholder="roles" formControlName="roles" multiple>
                        <mat-option *ngFor="let role of roleItems$ | async" [value]="role">{{role}}</mat-option>
                    </mat-select> 
                </mat-form-field>
            </div>
        </div>
    </mat-card>
</div>`
            },] },
];
/** @nocollapse */
LayoutModuleConfigComponent.ctorParameters = () => [
    { type: Injector },
    { type: Store }
];
LayoutModuleConfigComponent.propDecorators = {
    configChanged: [{ type: Output, args: ["configChanged",] }],
    configFormGroup: [{ type: Input }]
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
     * @return {?}
     */
    get config() {
        if (!this.currentComponent)
            return {};
        return this.currentComponent.instance.formGroup.value;
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
        // (<any>component.instance).configChanged.add.subscribe((data: any) => {
        // 	this.configChanged.emit(data);
        // });
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
        console.log("-");
    }
    /**
     * @return {?}
     */
    edit() {
        this.formGroup.controls["Config"].patchValue(this.dynConfig.config);
        if (!this.formGroup.valid)
            return;
        this.configService.editConfig(this.formGroup.value).subscribe(config => { });
    }
}
ConfigEditComponent.decorators = [
    { type: Component, args: [{
                selector: "config-config-edit",
                template: `<form [formGroup]="formGroup" (ngSubmit)="edit()" fxLayout="column">
  <dynamic-config-component-selector #dynConfig (configChanged)="configChanged($event)" [data]="partialConfigModel"></dynamic-config-component-selector>
  <button mat-fab  type="submit" mat-raised-button color="primary" (click)="edit">
    <mat-icon>done</mat-icon>
  </button>
  <!-- <button  type="button" routerLink="/configs" mat-raised-button>بازگشت</button> -->
</form>`,
                styles: [`:host{padding:25px}`]
            },] },
];
/** @nocollapse */
ConfigEditComponent.ctorParameters = () => [
    { type: ConfigService },
    { type: FormBuilder },
    { type: ActivatedRoute }
];
ConfigEditComponent.propDecorators = {
    dynConfig: [{ type: ViewChild, args: ["dynConfig",] }]
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
const /** @type {?} */ routes = [
    {
        path: "configs",
        component: ConfigModuleContainerComponent,
        children: [
            {
                path: "",
                component: ConfigsComponent
            },
            {
                path: "edit/:name",
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
                    BrowserAnimationsModule
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
                    EffectsModule.forFeature([LoadConfigEffects]),
                    RoutingModule
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

export { ConfigService, ConfigModel, GetConfigsApiModel, EditConfigApiModel, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, ConfigReducers, selectConfigState, getConfigListState, getConfigs$1 as getConfigs, getAppConfig$1 as getAppConfig, getAuthenticationModuleConfig$1 as getAuthenticationModuleConfig, getUserModuleConfig$1 as getUserModuleConfig, getConfigModuleConfig$1 as getConfigModuleConfig, getFormModuleConfig$1 as getFormModuleConfig, getSocketModuleConfig$1 as getSocketModuleConfig, NgsConfigModule, RootNgsConfigModule, RoutingModule as ɵn, ConfigAppConfigComponent as ɵf, AuthenticationModuleConfigComponent as ɵj, LayoutModuleConfigComponent as ɵh, UserModuleConfigComponent as ɵg, LoadConfigEffects as ɵm, ConfigReducers as ɵl, ConfigurationService as ɵb, ConfigEditComponent as ɵq, ConfigModuleContainerComponent as ɵo, ConfigsComponent as ɵp, ConfigEditComponent as ɵe, ConfigModuleContainerComponent as ɵi, ConfigsComponent as ɵc, DynamicConfigComponentSelectorComponent as ɵk };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWNvbmZpZy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL21vZGVscy9jb25maWcubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9tb2RlbHMvZ2V0LWNvbmZpZ3MtYXBpLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvbW9kZWxzL2VkaXQtY29uZmlnLWFwaS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2NvbmZpZy5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9hY3Rpb25zL2NvbmZpZy5hY3Rpb24udHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9yZWR1Y2Vycy9jb25maWctbGlzdC5yZWR1Y2VyLnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvcmVkdWNlcnMvaW5kZXgudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zZXJ2aWNlcy9jb25maWcuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlncy9jb25maWdzLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2R1bWItY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS1jb25maWcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvZHVtYi1jb21wb25lbnRzL2FwcC1jb25maWcvYXBwLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9kdW1iLWNvbXBvbmVudHMvdXNlci1tb2R1bGUtY29uZmlnL3VzZXItbW9kdWxlLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9kdW1iLWNvbXBvbmVudHMvbGF5b3V0LWNvbmZpZy9sYXlvdXQtbW9kdWxlLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvc21hcnQtY29tcG9uZW50cy9jb25maWctZWRpdC9jb25maWctZWRpdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zbWFydC1jb21wb25lbnRzL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2VmZmVjdHMvbG9hZC1jb25maWcuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2NvbmZpZy5yb3V0aW5nLW1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2NvbmZpZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbmZpZ01vZGVsPFQ+IHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHROYW1lOiBzdHJpbmc7XHJcblx0Q29uZmlnOiBUO1xyXG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwgfSBmcm9tIFwiLi9jb25maWcubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgR2V0Q29uZmlnc0FwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZTogR2V0Q29uZmlnc0FwaU1vZGVsLlJlcXVlc3QgPSB7fSBhcyBHZXRDb25maWdzQXBpTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICgodGhpcyBhcyBhbnkpW2tleV0gPSAoaW5pdFZhbHVlIGFzIGFueSlba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge307XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBDb25maWdNb2RlbDxhbnk+W107XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBFZGl0Q29uZmlnQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdFx0TmFtZTogc3RyaW5nO1xyXG5cdFx0Q29uZmlnOiB7fTtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9IGFzIEVkaXRDb25maWdBcGlNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKCh0aGlzIGFzIGFueSlba2V5XSA9IChpbml0VmFsdWUgYXMgYW55KVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0TmFtZTogdGhpcy5OYW1lLFxyXG5cdFx0XHRcdENvbmZpZzogdGhpcy5Db25maWdcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0TmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRDb25maWc6IG5ldyBGb3JtR3JvdXAoe30pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogQ29uZmlnTW9kZWw8YW55PjtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnTW9kdWxlQ29uZmlnIHtcclxuXHRkZXZfYXBpX2hvc3Q/OiBzdHJpbmc7XHJcblx0cHJvZF9hcGlfaG9zdD86IHN0cmluZztcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IENvbmZpZ01vZHVsZUNvbmZpZyA9IHtcclxuXHRkZXZfYXBpX2hvc3Q6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxyXG5cdHByb2RfYXBpX2hvc3Q6ICdodHRwOi8vNS4xOTYuMTQ5LjEwNzozMDAwJyxcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlXHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48Q29uZmlnTW9kdWxlQ29uZmlnPignVXNlck1vZHVsZUNvbmZpZycpO1xyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwsIEdldENvbmZpZ3NBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIENvbmZpZ0FjdGlvblR5cGVzIHtcclxuXHRHRVRfQ09ORklHUyA9IFwiW0NPTkZJR10gZ2V0IGNvbmZpZ1wiLFxyXG5cdENPTkZJR19MT0FERURfU1VDQ0VFRCA9IFwiW0NPTkZJR10gbG9hZCBjb25maWcgc3VjY2VlZFwiLFxyXG5cdFVQREFURV9DT05GSUcgPSBcIltDT05GSUddIHVwZGF0ZSBjb25maWdcIixcclxuXHRDT05GSUdfTE9BREVEX0ZBSUxFRCA9IFwiW0NPTkZJR10gbG9hZCBjb25maWcgZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldENvbmZpZ0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENvbmZpZ0FjdGlvblR5cGVzLkdFVF9DT05GSUdTO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnTG9hZGVkU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENvbmZpZ0FjdGlvblR5cGVzLkNPTkZJR19MT0FERURfU1VDQ0VFRDtcclxuXHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENvbmZpZ01vZGVsPGFueT5bXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBkYXRlQ29uZmlnQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ29uZmlnQWN0aW9uVHlwZXMuVVBEQVRFX0NPTkZJRztcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ29uZmlnTW9kZWw8YW55Pikge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ0xvYWRlZEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENvbmZpZ0FjdGlvblR5cGVzLkNPTkZJR19MT0FERURfRkFJTEVEO1xyXG59XHJcbmV4cG9ydCB0eXBlIEFjdGlvbnMgPSBHZXRDb25maWdBY3Rpb24gfCBDb25maWdMb2FkZWRTdWNjZWVkQWN0aW9uIHwgQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uIHwgVXBkYXRlQ29uZmlnQWN0aW9uO1xyXG4iLCJpbXBvcnQgKiBhcyBjb25maWcgZnJvbSBcIi4uL2FjdGlvbnMvY29uZmlnLmFjdGlvblwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0ZGF0YTogYW55W107XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0ZGF0YTogW11cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGNvbmZpZy5BY3Rpb25zKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgY29uZmlnLkNvbmZpZ0FjdGlvblR5cGVzLkNPTkZJR19MT0FERURfU1VDQ0VFRDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBhY3Rpb24ucGF5bG9hZFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBjb25maWcuQ29uZmlnQWN0aW9uVHlwZXMuVVBEQVRFX0NPTkZJRzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBzdGF0ZS5kYXRhLm1hcChjb25maWcgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGNvbmZpZy5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKSBjb25maWcuQ29uZmlnID0gYWN0aW9uLnBheWxvYWQuQ29uZmlnO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGNvbmZpZztcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ3MgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG5leHBvcnQgY29uc3QgZ2V0QXBwQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImFwcF9jb25maWdcIik7XHJcbmV4cG9ydCBjb25zdCBnZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+XHJcblx0c3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImF1dGhlbnRpY2F0aW9uX21vZHVsZV9jb25maWdcIik7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTW9kdWxlQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcInVzZXJfbW9kdWxlX2NvbmZpZ1wiKTtcclxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ01vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+XHJcblx0c3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImNvbmZpZ19tb2R1bGVfY29uZmlnXCIpIGFzIGFueTtcclxuZXhwb3J0IGNvbnN0IGdldEZvcm1Nb2R1bGVDb25maWcgPSAoc3RhdGU6IFN0YXRlKSA9PlxyXG5cdHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJmb3JtX21vZHVsZV9jb25maWdcIikgYXMgYW55O1xyXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0TW9kdWxlQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT5cclxuXHRzdGF0ZS5kYXRhLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwic29ja2V0X21vZHVsZV9jb25maWdcIikgYXMgYW55O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBjb25maWdMaXN0IGZyb20gXCIuL2NvbmZpZy1saXN0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uLCBDb25maWdMb2FkZWRTdWNjZWVkQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuZXhwb3J0IGludGVyZmFjZSBDb25maWdTdGF0ZSB7XHJcblx0bGlzdDogY29uZmlnTGlzdC5TdGF0ZTtcclxufVxyXG5Db25maWdMb2FkZWRGYWlsZWRBY3Rpb247XHJcbmV4cG9ydCBjb25zdCBDb25maWdSZWR1Y2VycyA9IHtcclxuXHRsaXN0OiBjb25maWdMaXN0LlJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVN0YXRlIHtcclxuXHRcImNvbmZpZ3NcIjogQ29uZmlnU3RhdGU7XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiBzZWxlY3RvcnNcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RDb25maWdTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxDb25maWdTdGF0ZT4oXCJjb25maWdcIik7XHJcblxyXG4vLyNlbmRyZWdpb25cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdMaXN0U3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RDb25maWdTdGF0ZSwgKHN0YXRlOiBDb25maWdTdGF0ZSkgPT4gc3RhdGUubGlzdCk7XHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdzID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldENvbmZpZ3MpO1xyXG5leHBvcnQgY29uc3QgZ2V0QXBwQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldEFwcENvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG5cdGdldENvbmZpZ0xpc3RTdGF0ZSxcclxuXHRjb25maWdMaXN0LmdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldFVzZXJNb2R1bGVDb25maWcpO1xyXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnTW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldENvbmZpZ01vZHVsZUNvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRGb3JtTW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldEZvcm1Nb2R1bGVDb25maWcpO1xyXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0TW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldFNvY2tldE1vZHVsZUNvbmZpZyk7XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWdNb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRyB9IGZyb20gXCIuLi9jb25maWcuY29uZmlnXCI7XHJcbmltcG9ydCB7IGdldENvbmZpZ01vZHVsZUNvbmZpZyB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogQ29uZmlnTW9kdWxlQ29uZmlnO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cdH1cclxuXHRjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLl9jb25maWcpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZ0ZpbGU6IENvbmZpZ01vZHVsZUNvbmZpZywgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWdGaWxlKTtcclxuXHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR0aGlzLnN0b3JlLnNlbGVjdChnZXRDb25maWdNb2R1bGVDb25maWcpLnN1YnNjcmliZShjb25maWdDb25maWcgPT4ge1xyXG5cdFx0XHRpZiAoIWNvbmZpZ0NvbmZpZykgcmV0dXJuO1xyXG5cdFx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIGNvbmZpZ0NvbmZpZy5Db25maWcpO1xyXG5cdFx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBDb25maWdTdGF0ZSB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRWRpdENvbmZpZ0FwaU1vZGVsLCBHZXRDb25maWdzQXBpTW9kZWwsIENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuaW1wb3J0IHsgR2V0Q29uZmlnQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XHJcblx0cmVzcG9uc2VDYWNoZTogYW55O1xyXG5cdGNvbmZpZ3NFbmRwb2ludDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPENvbmZpZ1N0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLmNvbmZpZ3NFbmRwb2ludCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVudi5wcm9kdWN0aW9uXHJcblx0XHRcdD8gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcucHJvZF9hcGlfaG9zdFxyXG5cdFx0XHQ6IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmRldl9hcGlfaG9zdDtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0Q29uZmlnQWN0aW9uKCkpO1xyXG5cdFx0fSwgOTk5KTtcclxuXHR9XHJcblxyXG5cdGdldENvbmZpZ3MoKTogT2JzZXJ2YWJsZTxDb25maWdNb2RlbDxhbnk+W10+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdHRoaXMuaHR0cFxyXG5cdFx0XHRcdC5nZXQoYCR7dGhpcy5jb25maWdzRW5kcG9pbnR9L2FwaS9jb25maWdgKVxyXG5cdFx0XHRcdC8vIC5maWx0ZXIoKCkgPT4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZGV2X2FwaV9ob3N0ICE9IHVuZGVmaW5lZClcclxuXHRcdFx0XHQudGFrZSgxKVxyXG5cdFx0XHRcdC5tYXAoKHJlc3BvbnNlOiBHZXRDb25maWdzQXBpTW9kZWwuUmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbnYucHJvZHVjdGlvbikge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBkZXZfYXBpX2hvc3QgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5kZXZfYXBpX2hvc3Q7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHByb2RfYXBpX2hvc3QgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5wcm9kX2FwaV9ob3N0O1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShcclxuXHRcdFx0XHRcdFx0XHRKU09OLnN0cmluZ2lmeShyZXNwb25zZSkucmVwbGFjZShuZXcgUmVnRXhwKGRldl9hcGlfaG9zdCwgXCJnXCIpLCBwcm9kX2FwaV9ob3N0KVxyXG5cdFx0XHRcdFx0XHQpLlJlc3VsdDtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5SZXN1bHQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdGdldENvbmZpZ0J5TmFtZShuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5jb25maWdzRW5kcG9pbnR9L2FwaS9jb25maWcvJHtuYW1lfWApLm1hcChyZXNwb25zZSA9PiByZXNwb25zZSkuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRlZGl0Q29uZmlnKGJvZHk6IEVkaXRDb25maWdBcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHZhciBtb2RlbCA9IG5ldyBFZGl0Q29uZmlnQXBpTW9kZWwuUmVxdWVzdChib2R5KTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wdXQoYCR7dGhpcy5jb25maWdzRW5kcG9pbnR9L2FwaS9jb25maWcvJHttb2RlbC5OYW1lfWAsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0TGF5b3V0Q29uZmlncygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0KGAke3RoaXMuY29uZmlnc0VuZHBvaW50fS9hcGkvbGF5b3V0LWNvbmZpZ2ApXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IGdldENvbmZpZ3MsIEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29uZmlnc1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeEZsZXhMYXlvdXQ9XCJyb3dcIiBmeExheW91dFdyYXAgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICA8bWF0LWNhcmQgY2xhc3M9XCJjb25maWctYm94XCIgKm5nRm9yPVwibGV0IGNvbmZpZyBvZiAoY29uZmlncyB8IGFzeW5jKVwiIFtmeEZsZXhdPVwiNTBcIj5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnZWRpdCcgLCAgY29uZmlnLk5hbWVdXCI+XHJcbiAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cImVkaXQgY29uZmlnXCI+ZWRpdDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIHt7Y29uZmlnLk5hbWV9fVxyXG4gICAgICA8L2gzPlxyXG4gIDwvbWF0LWNhcmQ+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmNvbmZpZy1ib3h7bWFyZ2luOjE1cHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ3NDb21wb25lbnQge1xyXG5cdGNvbmZpZ3M6IE9ic2VydmFibGU8Q29uZmlnTW9kZWw8YW55PltdPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7XHJcblx0XHR0aGlzLmNvbmZpZ3MgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRDb25maWdzKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29uZmlnLWF1dGhlbnRpY2F0aW9uLW1vZHVsZS1jb25maWdcIixcclxuXHR0ZW1wbGF0ZTogYDxoMj5FbmRwb2ludHM8L2gyPlxyXG48ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwLmNvbnRyb2xzLmVuZHBvaW50c1wiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwic2lnbiBpblwiIGZvcm1Db250cm9sTmFtZT1cInNpZ25JblwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJzaWduIG91dFwiIGZvcm1Db250cm9sTmFtZT1cInNpZ25PdXRcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwid2hvIGFtIGlcIiBmb3JtQ29udHJvbE5hbWU9XCJ3aG9BbUlcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZGl2PlxyXG48aDI+Rm9ybXM8L2gyPlxyXG48ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwLmNvbnRyb2xzLmZvcm1zXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJTaWduSW4gRm9ybXNcIiBmb3JtQ29udHJvbE5hbWU9XCJzaWduSW5cIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDwhLS0gPG5ncy1mb3JtLXNlbGVjdG9yIChzZWxlY3QpPVwic2V0Rm9ybUlkKCRldmVudCwnc2lnbkluJylcIj48L25ncy1mb3JtLXNlbGVjdG9yPiAtLT5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWdDb21wb25lbnQge1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRlbmRwb2ludHM6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRzaWduSW46IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdHNpZ25PdXQ6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdHdob0FtSTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0fSksXHJcblx0XHRmb3JtczogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHNpZ25JbjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0fSlcclxuXHR9KTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBjb25maWdGb3JtR3JvdXAoY29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXApIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoY29uZmlnRm9ybUdyb3VwLnZhbHVlKTtcclxuXHRcdGNvbmZpZ0Zvcm1Hcm91cC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGRhdGEpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdEBPdXRwdXQoKSBjb25maWdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiY29uZmlnRm9ybUdyb3VwXCIpO1xyXG5cdH1cclxuXHRzZXRGb3JtSWQoZm9ybUlkOiBzdHJpbmcsIGZvcm1OYW1lOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoeyBbZm9ybU5hbWVdOiBmb3JtSWQgfSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImNvbmZpZy1hcHAtY29uZmlnXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChsOYwqfDmcKFIMOZwr7DmMKxw5nCiMOawpjDmcKHXCIgZm9ybUNvbnRyb2xOYW1lPVwiQXBwVGl0bGVcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ0FwcENvbmZpZ0NvbXBvbmVudCB7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHsgQXBwVGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSkgfSk7XHJcblx0QElucHV0KClcclxuXHRzZXQgY29uZmlnRm9ybUdyb3VwKGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGNvbmZpZ0Zvcm1Hcm91cC52YWx1ZSk7XHJcblx0XHRjb25maWdGb3JtR3JvdXAudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShkYXRhKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRAT3V0cHV0KCkgY29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImNvbmZpZ0Zvcm1Hcm91cFwiKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCwgRm9ybUFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29uZmlnLXVzZXItbW9kdWxlLWNvbmZpZ1wiLFxyXG5cdHRlbXBsYXRlOiBgPGgyPkVuZHBvaW50czwvaDI+XHJcbjxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXAuZ2V0KCdlbmRwb2ludHMnKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJjaGFuZ2UgcGFzc3dvcmRcIiBmb3JtQ29udHJvbE5hbWU9XCJjaGFuZ2VQYXNzd29yZFwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJlZGl0IHByb2ZpbGVcIiBmb3JtQ29udHJvbE5hbWU9XCJlZGl0UHJvZmlsZVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJnZXQgdXNlciBpbmZvXCIgZm9ybUNvbnRyb2xOYW1lPVwiZ2V0VXNlckluZm9cIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiV2hvIEFtIElcIiBmb3JtQ29udHJvbE5hbWU9XCJ3aG9BbUlcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG48L2Rpdj5cclxuPGgyPkZvcm1zPC9oMj5cclxuPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cC5nZXQoJ2Zvcm1zJylcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInByb2ZpbGUgZWRpdFwiIGZvcm1Db250cm9sTmFtZT1cInByb2ZpbGVfZWRpdFwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPCEtLSA8bmdzLWZvcm0tc2VsZWN0b3IgKHNlbGVjdCk9XCJzZXRGb3JtSWQoJGV2ZW50LCdzaWduSW4nKVwiPjwvbmdzLWZvcm0tc2VsZWN0b3I+IC0tPlxyXG48L2Rpdj5cclxuXHJcblxyXG48aDIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICBEYXNob2JhcmQgTGlua3NcclxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRNZW51KClcIj5cclxuICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cImljb24tYnV0dG9uIGljb25cIj5hZGQ8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbjwvaDI+XHJcbjxkaXYgZnhGbGV4PVwiMTAwXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgJGFueShmb3JtR3JvdXAuZ2V0KCdkYXNoYm9hcmRMaW5rcycpKS5jb250cm9sc1wiPlxyXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cIml0ZW1cIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInJvdXRlXCIgZm9ybUNvbnRyb2xOYW1lPVwicm91dGVcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiaWNvblwiIGZvcm1Db250cm9sTmFtZT1cImljb25cIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwidGl0bGVcIiBmb3JtQ29udHJvbE5hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlck1vZHVsZUNvbmZpZ0NvbXBvbmVudCB7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdGVuZHBvaW50czogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdGNoYW5nZVBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRlZGl0UHJvZmlsZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0Z2V0VXNlckluZm86IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdHdob0FtSTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0fSksXHJcblx0XHRmb3JtczogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHByb2ZpbGVfZWRpdDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0fSksXHJcblx0XHRkYXNoYm9hcmRMaW5rczogbmV3IEZvcm1BcnJheShbXSlcclxuXHR9KTtcclxuXHRfY29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KClcclxuXHRzZXQgY29uZmlnRm9ybUdyb3VwKGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcblx0XHR0aGlzLl9jb25maWdGb3JtR3JvdXAgPSBjb25maWdGb3JtR3JvdXA7XHJcblx0XHQoY29uZmlnRm9ybUdyb3VwLmNvbnRyb2xzLmRhc2hib2FyZExpbmtzIGFzIEZvcm1BcnJheSkuY29udHJvbHMuZm9yRWFjaChjb250cm9sID0+IHtcclxuXHRcdFx0KHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmRhc2hib2FyZExpbmtzIGFzIEZvcm1BcnJheSkucHVzaChcclxuXHRcdFx0XHRuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdHJvdXRlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFx0aWNvbjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRcdHRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoY29uZmlnRm9ybUdyb3VwLnZhbHVlKTtcclxuXHRcdGNvbmZpZ0Zvcm1Hcm91cC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGRhdGEpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGdldCBjb25maWdGb3JtR3JvdXAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnRm9ybUdyb3VwO1xyXG5cdH1cclxuXHRAT3V0cHV0KCkgY29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImNvbmZpZ0Zvcm1Hcm91cFwiKTtcclxuXHR9XHJcblx0YWRkTWVudSgpIHtcclxuXHRcdHZhciBtZW51SXRlbSA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRyb3V0ZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0aWNvbjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdH0pO1xyXG5cclxuXHRcdCh0aGlzLmZvcm1Hcm91cC5nZXQoXCJkYXNoYm9hcmRMaW5rc1wiKSBhcyBGb3JtQXJyYXkpLnB1c2gobWVudUl0ZW0pO1xyXG5cdFx0KHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImRhc2hib2FyZExpbmtzXCIpIGFzIEZvcm1BcnJheSkucHVzaChtZW51SXRlbSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wsIEZvcm1BcnJheSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwLCBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSwgZ2V0QXBwQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgIDxtYXQtY2FyZCBmeEZsZXg9XCIyMFwiIGZ4RmxleExheW91dD1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJsYXlvdXQgbW9kZVwiIGZvcm1Db250cm9sTmFtZT1cImxheW91dE1vZGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgbGF5b3V0TW9kZXNcIiBbdmFsdWVdPVwiaXRlbVwiPnt7aXRlbX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PiBcclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgICBmb3JtQ29udHJvbE5hbWU9XCJzaG93TGVmdE5hdkJhclwiPnNob3cgbGVmdCBuYXZiYXI8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwibWFpbiBzaWRlIG5hdiBtb2RlXCIgZm9ybUNvbnRyb2xOYW1lPVwibWFpblNpZGVOYXZNb2RlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNpZGVOYXZNb2Rlc1wiIFt2YWx1ZV09XCJpdGVtXCI+e3tpdGVtfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+IFxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSBmb3JtQ29udHJvbE5hbWU9XCJzaG93TWFpblNpZGVuYXZcIj5zaG93IG1haW4gc2lkZSBuYXY8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGZvcm1Db250cm9sTmFtZT1cInN0aWNreUxlZnROYXZCYXJcIj5zdGlja3kgbGVmdCBuYXZiYXI8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGZvcm1Db250cm9sTmFtZT1cInNob3dTZWNvbmRTaWRlTmF2XCI+c2hvdyBzZWNvbmQgc2lkZSBuYXY8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwic2Vjb25kIHNpZGUgbmF2IG1vZGVcIiBmb3JtQ29udHJvbE5hbWU9XCJzZWNvbmRTaWRlTmF2TW9kZVwiID5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzaWRlTmF2TW9kZXNcIiBbdmFsdWVdPVwiaXRlbVwiPnt7aXRlbX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PiBcclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvbWF0LWNhcmQ+XHJcblxyXG4gICAgPG1hdC1jYXJkIGZ4RmxleCBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgICAgIDxoMiBmeEZsZXg+XHJcbiAgICAgICAgICAgIE1lbnUgSXRlbXNcclxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZE1lbnUoKVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJpY29uLWJ1dHRvbiBpY29uXCI+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiICpuZ0Zvcj1cImxldCBpdGVtIG9mICRhbnkoZm9ybUdyb3VwKS5nZXQoJ21lbnVJdGVtcycpLmNvbnRyb2xzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJpdGVtXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJyb3V0ZVwiIGZvcm1Db250cm9sTmFtZT1cInJvdXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiaWNvblwiIGZvcm1Db250cm9sTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiIGZvcm1Db250cm9sTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPiBcclxuICAgICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cInJvbGVzXCIgZm9ybUNvbnRyb2xOYW1lPVwicm9sZXNcIiBtdWx0aXBsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHJvbGUgb2Ygcm9sZUl0ZW1zJCB8IGFzeW5jXCIgW3ZhbHVlXT1cInJvbGVcIj57e3JvbGV9fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+IFxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L21hdC1jYXJkPlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGVDb25maWdDb21wb25lbnQge1xyXG5cdEBPdXRwdXQoXCJjb25maWdDaGFuZ2VkXCIpIGNvbmZpZ0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0X2NvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGNvbmZpZ0Zvcm1Hcm91cChjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xyXG5cdFx0dGhpcy5fY29uZmlnRm9ybUdyb3VwID0gY29uZmlnRm9ybUdyb3VwO1xyXG5cdFx0KGNvbmZpZ0Zvcm1Hcm91cC5jb250cm9scy5tZW51SXRlbXMgYXMgRm9ybUFycmF5KS5jb250cm9scy5mb3JFYWNoKGNvbnRyb2wgPT4ge1xyXG5cdFx0XHQodGhpcy5mb3JtR3JvdXAuY29udHJvbHMubWVudUl0ZW1zIGFzIEZvcm1BcnJheSkucHVzaChcclxuXHRcdFx0XHRuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdHJvdXRlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFx0aWNvbjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRcdC8vIHJvbGVzOiBuZXcgRm9ybUFycmF5KGNvbnRyb2wudmFsdWUucm9sZXMubWFwKChpKSA9PiBuZXcgRm9ybUNvbnRyb2woXCJBZG1pblwiKSkpLFxyXG5cdFx0XHRcdFx0cm9sZXM6IG5ldyBGb3JtQ29udHJvbCgpLFxyXG5cdFx0XHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShjb25maWdGb3JtR3JvdXAudmFsdWUpO1xyXG5cdFx0Y29uZmlnRm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGRhdGEpKTtcclxuXHR9XHJcblx0Z2V0IGNvbmZpZ0Zvcm1Hcm91cCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWdGb3JtR3JvdXA7XHJcblx0fVxyXG5cclxuXHRzaWRlTmF2TW9kZXM6IHN0cmluZ1tdO1xyXG5cdGxheW91dE1vZGVzOiBzdHJpbmdbXTtcclxuXHRmb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdGxheW91dE1vZGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRzaG93TGVmdE5hdkJhcjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdG1haW5TaWRlTmF2TW9kZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdHNob3dNYWluU2lkZW5hdjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdHN0aWNreUxlZnROYXZCYXI6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRzaG93U2Vjb25kU2lkZU5hdjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdHNlY29uZFNpZGVOYXZNb2RlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0bWVudUl0ZW1zOiBuZXcgRm9ybUFycmF5KFtdKVxyXG5cdH0pO1xyXG5cdHJvbGVJdGVtcyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPikge1xyXG5cdFx0dGhpcy5zaWRlTmF2TW9kZXMgPSBbIFwib3ZlclwiLCBcInB1c2hcIiwgXCJzaWRlXCIgXTtcclxuXHRcdHRoaXMubGF5b3V0TW9kZXMgPSBbIFwid2l0aC1tYXJnaW5cIiwgXCJ3aXRob3V0LW1hcmdpblwiLCBcImRlZmF1bHRcIiBdO1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImNvbmZpZ0Zvcm1Hcm91cFwiKTtcclxuXHRcdHRoaXMucm9sZUl0ZW1zJCA9IHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChnZXRBcHBDb25maWcpXHJcblx0XHRcdC5waXBlKGZpbHRlcihjb25maWcgPT4gY29uZmlnICE9IG51bGwpLCBtYXAoYXBwY29uZmlnID0+IGFwcGNvbmZpZy5Db25maWcuUm9sZXMpKTtcclxuXHRcdC8vIHRoaXMuY29uZmlnQ2hhbmdlZC5cclxuXHRcdC8vIHRoaXMuZm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG5cdFx0Ly8gXHRkZWJ1Z2dlcjtcclxuXHRcdC8vIFx0dGhpcy5jb25maWdDaGFuZ2VkLmVtaXQodmFsdWUpO1xyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG5cdGFkZE1lbnUoKSB7XHJcblx0XHR2YXIgbWVudUl0ZW0gPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0cm91dGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdGljb246IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdHJvbGVzOiBuZXcgRm9ybUNvbnRyb2woKSxcclxuXHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdH0pO1xyXG5cclxuXHRcdCh0aGlzLmZvcm1Hcm91cC5nZXQoXCJtZW51SXRlbXNcIikgYXMgRm9ybUFycmF5KS5wdXNoKG1lbnVJdGVtKTtcclxuXHRcdCh0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5nZXQoXCJtZW51SXRlbXNcIikgYXMgRm9ybUFycmF5KS5wdXNoKG1lbnVJdGVtKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdElucHV0LFxyXG5cdEFmdGVyVmlld0luaXQsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDaGlsZCxcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdFJlZmxlY3RpdmVJbmplY3RvcixcclxuXHRPbkRlc3Ryb3ksXHJcblx0T3V0cHV0LFxyXG5cdEV2ZW50RW1pdHRlclxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBQYXJ0aWFsQ29uZmlnIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvYXV0aGVudGljYXRpb24tbW9kdWxlLWNvbmZpZy9hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb25maWdBcHBDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL2FwcC1jb25maWcvYXBwLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXNlck1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvdXNlci1tb2R1bGUtY29uZmlnL3VzZXItbW9kdWxlLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9sYXlvdXQtY29uZmlnL2xheW91dC1tb2R1bGUtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICNkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyPjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5kaWFncmFtLWJveCAuYzN7ZGlyZWN0aW9uOmx0cn1gXSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0Q29uZmlnQXBwQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0VXNlck1vZHVsZUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdExheW91dE1vZHVsZUNvbmZpZ0NvbXBvbmVudFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNDb25maWdDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cdHR5cGVNYXBUb0RpYWdyYW06IGFueSA9IHtcclxuXHRcdGF1dGhlbnRpY2F0aW9uX21vZHVsZV9jb25maWc6IEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0YXBwX2NvbmZpZzogQ29uZmlnQXBwQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0dXNlcl9tb2R1bGVfY29uZmlnOiBVc2VyTW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0bGF5b3V0X2NvbmZpZzogTGF5b3V0TW9kdWxlQ29uZmlnQ29tcG9uZW50XHJcblx0fTtcclxuXHRAVmlld0NoaWxkKFwiZHluYW1pY0NvbXBvbmVudENvbnRhaW5lclwiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcclxuXHRkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cdEBPdXRwdXQoKSBjb25maWdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRpZiAoIXRoaXMuY3VycmVudENvbXBvbmVudCkgcmV0dXJuIHt9O1xyXG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudENvbXBvbmVudC5pbnN0YW5jZS5mb3JtR3JvdXAudmFsdWU7XHJcblx0fVxyXG5cdGN1cnJlbnRDb21wb25lbnQ6IGFueSA9IG51bGw7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhOiBQYXJ0aWFsQ29uZmlnKSB7XHJcblx0XHRpZiAoIWRhdGEgfHwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09IDApIHJldHVybjtcclxuXHRcdGlmICghKGRhdGEudHlwZSBpbiB0aGlzLnR5cGVNYXBUb0RpYWdyYW0pKSB7XHJcblx0XHRcdGlmICh0aGlzLmN1cnJlbnRDb21wb25lbnQpIHRoaXMuY3VycmVudENvbXBvbmVudC5kZXN0cm95KCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGxldCBfY29tcG9uZW50OiBhbnkgPSB0aGlzLnR5cGVNYXBUb0RpYWdyYW1bZGF0YS50eXBlXTtcclxuXHRcdGxldCBpbnB1dFByb3ZpZGVycyA9IE9iamVjdC5rZXlzKGRhdGEuaW5wdXRzKS5tYXAoaW5wdXROYW1lID0+IHtcclxuXHRcdFx0cmV0dXJuIHsgcHJvdmlkZTogaW5wdXROYW1lLCB1c2VWYWx1ZTogKGRhdGEuaW5wdXRzIGFzIGFueSlbaW5wdXROYW1lXSB9O1xyXG5cdFx0fSk7XHJcblx0XHRsZXQgcmVzb2x2ZWRJbnB1dHMgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZShpbnB1dFByb3ZpZGVycyk7XHJcblxyXG5cdFx0bGV0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhcclxuXHRcdFx0cmVzb2x2ZWRJbnB1dHMsXHJcblx0XHRcdHRoaXMuZHluYW1pY0NvbXBvbmVudENvbnRhaW5lci5wYXJlbnRJbmplY3RvclxyXG5cdFx0KTtcclxuXHRcdGxldCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShfY29tcG9uZW50KTtcclxuXHJcblx0XHRsZXQgY29tcG9uZW50ID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xyXG5cdFx0Ly8gKDxhbnk+Y29tcG9uZW50Lmluc3RhbmNlKS5jb25maWdDaGFuZ2VkLmFkZC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0Ly8gXHR0aGlzLmNvbmZpZ0NoYW5nZWQuZW1pdChkYXRhKTtcclxuXHRcdC8vIH0pO1xyXG5cdFx0dGhpcy5keW5hbWljQ29tcG9uZW50Q29udGFpbmVyLmluc2VydChjb21wb25lbnQuaG9zdFZpZXcpO1xyXG5cclxuXHRcdGlmICh0aGlzLmN1cnJlbnRDb21wb25lbnQpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50Q29tcG9uZW50LmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQgPSBjb21wb25lbnQ7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge31cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEVkaXRDb25maWdBcGlNb2RlbCwgUGFydGlhbENvbmZpZyB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi4vZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJjb25maWctY29uZmlnLWVkaXRcIixcclxuXHR0ZW1wbGF0ZTogYDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKG5nU3VibWl0KT1cImVkaXQoKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgPGR5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3RvciAjZHluQ29uZmlnIChjb25maWdDaGFuZ2VkKT1cImNvbmZpZ0NoYW5nZWQoJGV2ZW50KVwiIFtkYXRhXT1cInBhcnRpYWxDb25maWdNb2RlbFwiPjwvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yPlxyXG4gIDxidXR0b24gbWF0LWZhYiAgdHlwZT1cInN1Ym1pdFwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJlZGl0XCI+XHJcbiAgICA8bWF0LWljb24+ZG9uZTwvbWF0LWljb24+XHJcbiAgPC9idXR0b24+XHJcbiAgPCEtLSA8YnV0dG9uICB0eXBlPVwiYnV0dG9uXCIgcm91dGVyTGluaz1cIi9jb25maWdzXCIgbWF0LXJhaXNlZC1idXR0b24+w5jCqMOYwqfDmMKyw5rCr8OYwrTDmMKqPC9idXR0b24+IC0tPlxyXG48L2Zvcm0+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7cGFkZGluZzoyNXB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWdFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb25maWdJbmZvcmFtYXRpb246IGFueTtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IEVkaXRDb25maWdBcGlNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRwYXJ0aWFsQ29uZmlnTW9kZWw6IFBhcnRpYWxDb25maWc7XHJcblx0QFZpZXdDaGlsZChcImR5bkNvbmZpZ1wiKSBkeW5Db25maWc6IER5bmFtaWNDb25maWdDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGNvbnN0IGNvbmZpZ05hbWU6IHN0cmluZyA9IHBhcmFtc1tcIm5hbWVcIl07XHJcblx0XHRcdHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWdCeU5hbWUoY29uZmlnTmFtZSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMucGFydGlhbENvbmZpZ01vZGVsID0ge1xyXG5cdFx0XHRcdFx0dHlwZTogZGF0YS5SZXN1bHQuTmFtZSxcclxuXHRcdFx0XHRcdGlucHV0czoge1xyXG5cdFx0XHRcdFx0XHRjb25maWdGb3JtR3JvdXA6IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbmZpZyBhcyBGb3JtR3JvdXBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xyXG5cdFx0XHRcdFx0X2lkOiBkYXRhLlJlc3VsdC5faWQsXHJcblx0XHRcdFx0XHROYW1lOiBkYXRhLlJlc3VsdC5OYW1lXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0T2JqZWN0LmtleXMoZGF0YS5SZXN1bHQuQ29uZmlnKS5mb3JFYWNoKGtleSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmFkZENvbnRyb2wodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29uZmlnIGFzIEZvcm1Hcm91cCwga2V5LCBkYXRhLlJlc3VsdC5Db25maWdba2V5XSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhZGRDb250cm9sKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHRcdFx0Zm9ybUdyb3VwLmFkZENvbnRyb2woa2V5LCB0aGlzLmZvcm1CdWlsZGVyLmFycmF5KHZhbHVlKSk7XHJcblx0XHR9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcblx0XHRcdGZvcm1Hcm91cC5hZGRDb250cm9sKGtleSwgdGhpcy5mb3JtQnVpbGRlci5ncm91cCh2YWx1ZSkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Zm9ybUdyb3VwLmFkZENvbnRyb2woa2V5LCBuZXcgRm9ybUNvbnRyb2wodmFsdWUpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHRjb25maWdDaGFuZ2VkKGV2ZW50OiBhbnkpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiLVwiKTtcclxuXHR9XHJcblx0ZWRpdCgpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbmZpZy5wYXRjaFZhbHVlKHRoaXMuZHluQ29uZmlnLmNvbmZpZyk7XHJcblx0XHRpZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLmNvbmZpZ1NlcnZpY2UuZWRpdENvbmZpZyh0aGlzLmZvcm1Hcm91cC52YWx1ZSkuc3Vic2NyaWJlKGNvbmZpZyA9PiB7fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImNvbmZpZy1tb2R1bGUtY29udGFpbmVyXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0QWxpZ249XCJcIiBmeGZsZXg9XCIxMDBcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG48L2Rpdj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnQWN0aW9uVHlwZXMsIENvbmZpZ0xvYWRlZFN1Y2NlZWRBY3Rpb24sIENvbmZpZ0xvYWRlZEZhaWxlZEFjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY29uZmlnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0Q29uZmlnc0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9hZENvbmZpZ0VmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRnZXRDb25maWdzJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQ29uZmlnQWN0aW9uVHlwZXMuR0VUX0NPTkZJR1MpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgoZGF0YTogR2V0Q29uZmlnc0FwaU1vZGVsLlJlcXVlc3QpID0+IHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWdzKCkpLFxyXG5cdFx0XHRtYXAoY29uZmlncyA9PiBuZXcgQ29uZmlnTG9hZGVkU3VjY2VlZEFjdGlvbihjb25maWdzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gT2JzZXJ2YWJsZS5vZihuZXcgQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uKCkpKVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWdzQ29tcG9uZW50LCBDb25maWdFZGl0Q29tcG9uZW50LCBDb25maWdNb2R1bGVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiBcImNvbmZpZ3NcIixcclxuXHRcdGNvbXBvbmVudDogQ29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBDb25maWdzQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcImVkaXQvOm5hbWVcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IENvbmZpZ0VkaXRDb21wb25lbnRcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0TGlzdE1vZHVsZSxcclxuXHRNYXRNZW51TW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRNYXRQcm9ncmVzc0Jhck1vZHVsZSxcclxuXHRNYXRTbGlkZVRvZ2dsZU1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuL2NvbmZpZy5jb25maWdcIjtcclxuaW1wb3J0IHsgQ29uZmlnc0NvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlncy9jb25maWdzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb25maWdFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9jb25maWctZWRpdC9jb25maWctZWRpdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29uZmlnQXBwQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL2FwcC1jb25maWcvYXBwLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXNlck1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy91c2VyLW1vZHVsZS1jb25maWcvdXNlci1tb2R1bGUtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGVDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbGF5b3V0LWNvbmZpZy9sYXlvdXQtbW9kdWxlLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9jb25maWctbW9kdWxlLWNvbnRhaW5lci9jb25maWctbW9kdWxlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvYXV0aGVudGljYXRpb24tbW9kdWxlLWNvbmZpZy9hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExvYWRDb25maWdFZmZlY3RzIH0gZnJvbSBcIi4vZWZmZWN0cy9sb2FkLWNvbmZpZy5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IENvbmZpZ1JlZHVjZXJzIH0gZnJvbSBcIi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2NvbmZpZy5yb3V0aW5nLW1vZHVsZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0TGlzdE1vZHVsZSxcclxuXHRcdE1hdE1lbnVNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0XHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdFx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRcdE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG5cdFx0QnJvd3NlckFuaW1hdGlvbnNNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Q29uZmlnc0NvbXBvbmVudCxcclxuXHRcdENvbmZpZ0VkaXRDb21wb25lbnQsXHJcblx0XHRDb25maWdBcHBDb25maWdDb21wb25lbnQsXHJcblx0XHRVc2VyTW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0TGF5b3V0TW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0Q29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWdDb21wb25lbnQsXHJcblx0XHREeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnRcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc0NvbmZpZ01vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnOiBDb25maWdNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290TmdzQ29uZmlnTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0gXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzQ29uZmlnTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImNvbmZpZ1wiLCBDb25maWdSZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBMb2FkQ29uZmlnRWZmZWN0cyBdKSxcclxuXHRcdFJvdXRpbmdNb2R1bGVcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFsgTmdzQ29uZmlnTW9kdWxlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3ROZ3NDb25maWdNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbImNvbmZpZy5Db25maWdBY3Rpb25UeXBlcyIsImNvbmZpZ0xpc3QuUmVkdWNlciIsImdldENvbmZpZ3MiLCJjb25maWdMaXN0LmdldENvbmZpZ3MiLCJnZXRBcHBDb25maWciLCJjb25maWdMaXN0LmdldEFwcENvbmZpZyIsImdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnIiwiY29uZmlnTGlzdC5nZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyIsImdldFVzZXJNb2R1bGVDb25maWciLCJjb25maWdMaXN0LmdldFVzZXJNb2R1bGVDb25maWciLCJnZXRDb25maWdNb2R1bGVDb25maWciLCJjb25maWdMaXN0LmdldENvbmZpZ01vZHVsZUNvbmZpZyIsImdldEZvcm1Nb2R1bGVDb25maWciLCJjb25maWdMaXN0LmdldEZvcm1Nb2R1bGVDb25maWciLCJnZXRTb2NrZXRNb2R1bGVDb25maWciLCJjb25maWdMaXN0LmdldFNvY2tldE1vZHVsZUNvbmZpZyIsIk9ic2VydmFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FJQzs7Ozs7O0FDQ0QsSUFBaUIsa0JBQWtCO0FBQW5DLFdBQWlCLGtCQUFrQjtJQUNsQzs7OztRQUNDLFlBQVksOEJBQXdDLEVBQWdDLENBQUE7WUFDbkYsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLG1CQUFDLElBQVcsR0FBRSxHQUFHLENBQUMsR0FBRyxtQkFBQyxTQUFnQixHQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0Rjs7OztRQUVELGNBQWM7WUFDYixPQUFPLEVBQUUsQ0FBQztTQUNWO0tBQ0Q7SUFSWSwwQkFBTztJQVVwQjtRQUVDLGlCQUFnQjtLQUNoQjtJQUhZLDJCQUFRO0dBWEwsa0JBQWtCLEtBQWxCLGtCQUFrQixRQWVsQzs7Ozs7O0FDbEJELElBR2lCLGtCQUFrQjtBQUFuQyxXQUFpQixrQkFBa0I7SUFDbEM7Ozs7UUFHQyxZQUFZLFNBQVMscUJBQUcsRUFBZ0MsQ0FBQTtZQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFD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