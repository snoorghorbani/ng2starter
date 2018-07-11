import { InjectionToken, Component, Injectable, Inject, Injector, Input, ViewContainerRef, ComponentFactoryResolver, ViewChild, Directive, ViewChildren, HostListener, ElementRef, Renderer2, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { __decorate, __metadata, __assign } from 'tslib';
import { Store, StoreModule } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs/Rx';
import { filter, map, startWith, share, takeUntil, switchMap } from 'rxjs/operators';
import { stringTemplate } from '@soushians/shared';
import { BehaviorSubject as BehaviorSubject$2, Subject, of, combineLatest } from 'rxjs';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheet, MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule } from '@angular/material';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { getFrontendAuthenticationState } from '@soushians/frontend-authentication';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    endpoints: {
        upsert: "/api/gwt/scenario",
        get: "/api/gwt/anchor/${model.anchorId}/scenarios"
    },
    stepClasses: [],
    env: {
        production: false,
        frontend_server: "http://localhost:3000"
    }
};
var /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("RuleModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RuleComponent = /** @class */ (function () {
    function RuleComponent() {
    }
    /**
     * @return {?}
     */
    RuleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    RuleComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-rule",
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <router-outlet></router-outlet>\n</div>"
                },] },
    ];
    /** @nocollapse */
    RuleComponent.ctorParameters = function () { return []; };
    return RuleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ routes = [
    {
        path: "rule",
        component: RuleComponent
    }
];
var /** @type {?} */ RoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var RuleAnchorsActionTypes = {
    SHOW_ANCHORS: "[RULE][ANCHORS] SHOW_ANCHORS",
    HIDE_ANCHORS: "[RULE][ANCHORS] HIDE_ANCHORS",
};
var ShowAnchorsAction = /** @class */ (function () {
    function ShowAnchorsAction() {
        this.type = RuleAnchorsActionTypes.SHOW_ANCHORS;
    }
    return ShowAnchorsAction;
}());
var HideAnchorsAction = /** @class */ (function () {
    function HideAnchorsAction() {
        this.type = RuleAnchorsActionTypes.HIDE_ANCHORS;
    }
    return HideAnchorsAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ initialState = {
    active: false
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case RuleAnchorsActionTypes.SHOW_ANCHORS: {
            return __assign({}, state, { active: true });
        }
        case RuleAnchorsActionTypes.HIDE_ANCHORS: {
            return __assign({}, state, { active: false });
        }
        default: {
            return state;
        }
    }
}
//#endregion

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var RulesListActionTypes = {
    RULES_LIST: "[RULE][DB] RULES_LIST",
    RULES_LIST_START: "[RULE][DB] RULES_LIST_START",
    RULES_LIST_SUCCEED: "[RULE][DB] RULES_LIST_SUCCEED",
    RULES_LIST_FAILED: "[RULE][DB] RULES_LIST_FAILED",
    RULE_UPSERT: "[RULE][DB] RULE_UPSERT",
    GET_RULE: "[RULE][DB] GET_RULE",
    RULE_FETCHED: "[RULE][DB] RULE_FETCHED",
};
var RulesListStartAction = /** @class */ (function () {
    function RulesListStartAction() {
        this.type = RulesListActionTypes.RULES_LIST_START;
    }
    return RulesListStartAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ initialState$1 = {
    status: "pristine",
    data: []
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer(state, action) {
    if (state === void 0) { state = initialState$1; }
    switch (action.type) {
        case RulesListActionTypes.RULES_LIST: {
            return __assign({}, state, { status: "dirty" });
        }
        case RulesListActionTypes.RULES_LIST_START: {
            return __assign({}, state, { status: "pending" });
        }
        case RulesListActionTypes.RULES_LIST_SUCCEED: {
            return __assign({}, state, { data: action.payload, status: "succeed" });
        }
        case RulesListActionTypes.RULES_LIST_FAILED: {
            return __assign({}, state, { status: "failed" });
        }
        case RulesListActionTypes.RULE_UPSERT: {
            var /** @type {?} */ data = state.data.concat();
            var /** @type {?} */ entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return __assign({}, state, { data: data });
        }
        case RulesListActionTypes.RULE_FETCHED: {
            var /** @type {?} */ data = state.data.concat();
            var /** @type {?} */ entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return __assign({}, state, { data: data });
        }
        default: {
            return state;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var ScenariosListActionTypes = {
    SCENARIOS_LIST: "[GWT][SCENARIO][DB][LIST] SCENARIOS_LIST",
    SCENARIOS_LIST_START: "[SCENARIO][DB] SCENARIOS_LIST_START",
    SCENARIOS_LIST_SUCCEED: "[SCENARIO][DB] SCENARIOS_LIST_SUCCEED",
    SCENARIOS_LIST_FAILED: "[SCENARIO][DB] SCENARIOS_LIST_FAILED",
    UPSERT: "[GWT][SCENARIO][DB][UPSERT] SCENARIO_UPSERT",
    GET_SCENARIO: "[SCENARIO][DB] GET_SCENARIO",
    SCENARIO_FETCHED: "[SCENARIO][DB] SCENARIO_FETCHED",
    UPDATE_DB: "[GWT][SCENARIO][DB] UPDATE_DB",
};
var ScenariosListStartAction = /** @class */ (function () {
    function ScenariosListStartAction() {
        this.type = ScenariosListActionTypes.SCENARIOS_LIST_START;
    }
    return ScenariosListStartAction;
}());
var UpsertScenarioAction = /** @class */ (function () {
    function UpsertScenarioAction(payload) {
        this.payload = payload;
        this.type = ScenariosListActionTypes.UPSERT;
    }
    return UpsertScenarioAction;
}());
var ScenarioFechedAction = /** @class */ (function () {
    function ScenarioFechedAction(payload) {
        this.payload = payload;
        this.type = ScenariosListActionTypes.SCENARIO_FETCHED;
    }
    return ScenarioFechedAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ initialState$2 = {
    status: "pristine",
    data: []
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$1(state, action) {
    if (state === void 0) { state = initialState$2; }
    switch (action.type) {
        case ScenariosListActionTypes.SCENARIOS_LIST: {
            return __assign({}, state, { status: "dirty" });
        }
        case ScenariosListActionTypes.SCENARIOS_LIST_START: {
            return __assign({}, state, { status: "pending" });
        }
        case ScenariosListActionTypes.SCENARIOS_LIST_SUCCEED: {
            return __assign({}, state, { data: action.payload, status: "succeed" });
        }
        case ScenariosListActionTypes.SCENARIOS_LIST_FAILED: {
            return __assign({}, state, { status: "failed" });
        }
        case ScenariosListActionTypes.UPSERT: {
            var /** @type {?} */ data = state.data.concat();
            var /** @type {?} */ entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return __assign({}, state, { data: data });
        }
        case ScenariosListActionTypes.SCENARIO_FETCHED: {
            var /** @type {?} */ data = state.data.concat();
            var /** @type {?} */ entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return __assign({}, state, { data: data });
        }
        case ScenariosListActionTypes.UPDATE_DB: {
            var /** @type {?} */ data_1 = state.data.concat();
            var /** @type {?} */ scenarios = action.payload;
            scenarios.forEach(function (scenario) {
                var /** @type {?} */ entityIdx = state.data.findIndex(function (form) { return form._id == scenario._id; });
                if (entityIdx > -1) {
                    data_1[entityIdx] = Object.assign({}, data_1[entityIdx], scenario);
                }
                else {
                    data_1.push(scenario);
                }
            });
            return __assign({}, state, { data: data_1 });
        }
        default: {
            return state;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ RuleReducers = {
    ruleAnchors: Reducer,
    rules: reducer,
    scenarios: reducer$1
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RuleConfigurationService = /** @class */ (function () {
    function RuleConfigurationService(configFile, store, injector) {
        var _this = this;
        this.store = store;
        this.injector = injector;
        this.config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);
        // instantiate steps and used them
        configFile.steps = configFile.stepClasses.map(function (step) { return new step(_this.injector); });
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        // this.store.select(getRuleModuleConfig).subscribe(userConfig => {
        // 	if (!userConfig) return;
        // 	this._config = Object.assign({}, this._config, userConfig.Config);
        // 	this.config$.next(this._config);
        // });
    }
    Object.defineProperty(RuleConfigurationService.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    RuleConfigurationService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    RuleConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
        { type: Store },
        { type: Injector }
    ]; };
    return RuleConfigurationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GwtScenarioModel = /** @class */ (function () {
    function GwtScenarioModel(_a) {
        var _b = _a === void 0 ? {} : _a, _id = _b._id, anchorId = _b.anchorId, steps = _b.steps, name = _b.name, featureId = _b.featureId;
        this._id = _id || "";
        this.name = name || "";
        this.featureId = featureId || "";
        this._id = _id || "";
        this.anchorId = anchorId || "";
        this.steps = steps || [];
    }
    /**
     * @return {?}
     */
    GwtScenarioModel.prototype.getRequsetBody = /**
     * @return {?}
     */
    function () {
        return {
            _id: this._id,
            anchorId: this.anchorId,
            name: this.name,
            featureId: this.featureId,
            steps: this.steps.map(function (step) { return ({
                id: step.id,
                opposite: step.opposite,
                params: step.params
            }); })
        };
    };
    return GwtScenarioModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var StepLoaderDirective = /** @class */ (function () {
    function StepLoaderDirective(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    Object.defineProperty(StepLoaderDirective.prototype, "params", {
        get: /**
         * @return {?}
         */
        function () {
            return this.component.instance.params || {};
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StepLoaderDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.component) ;
    };
    /**
     * @return {?}
     */
    StepLoaderDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.step.stepComponent) {
            debugger;
            throw new Error("Trying to use an unsupported type ().\n\t\t  Supported types: ");
        }
        // TODO: fix generic type
        var /** @type {?} */ component = this.resolver.resolveComponentFactory(this.step.stepComponent);
        this.component = this.container.createComponent(component);
        this.component.instance.params = this.step.params;
    };
    StepLoaderDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[rule-step-loader]"
                },] },
    ];
    /** @nocollapse */
    StepLoaderDirective.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    StepLoaderDirective.propDecorators = {
        step: [{ type: Input }],
        component: [{ type: ViewChild, args: ["container", { read: ViewContainerRef },] }]
    };
    return StepLoaderDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ScenarioService = /** @class */ (function () {
    function ScenarioService(http, store, configService) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.configService = configService;
        this.config$ = this.configService.config$;
        this.config$.subscribe(function (config) { return (_this.config = config); });
    }
    /**
     * @param {?} scenario
     * @return {?}
     */
    ScenarioService.prototype.upsert = /**
     * @param {?} scenario
     * @return {?}
     */
    function (scenario) {
        var /** @type {?} */ model = new GwtScenarioModel(scenario);
        return this.http
            .post("" + this.config.env.frontend_server + this.config.endpoints.upsert, model.getRequsetBody())
            .pipe(map(function (response) { return (response); }), share());
    };
    /**
     * @param {?} anchorId
     * @return {?}
     */
    ScenarioService.prototype.getAnchorScenarios = /**
     * @param {?} anchorId
     * @return {?}
     */
    function (anchorId) {
        return this.http
            .get("" + this.config.env.frontend_server + stringTemplate(this.config.endpoints.get, { anchorId: anchorId }))
            .map(function (response) { return (response.Result); });
    };
    /**
     * @param {?} _id
     * @return {?}
     */
    ScenarioService.prototype.selectScenarioById = /**
     * @param {?} _id
     * @return {?}
     */
    function (_id) {
        var /** @type {?} */ subject = new BehaviorSubject$1(undefined);
        this.store
            .select(function (state) { return state.rule.scenarios.data; })
            .pipe(filter(function (scenarios) { return scenarios != null; }), map(function (scenarios) {
            return scenarios.find(function (scenario) { return scenario._id == _id; });
        }), filter(function (scenario) { return scenario != undefined; }))
            .subscribe(function (scenario) {
            subject.next(scenario);
        });
        return subject.asObservable();
    };
    /**
     * @param {?} anchorId
     * @return {?}
     */
    ScenarioService.prototype.selectAnchorScenarios = /**
     * @param {?} anchorId
     * @return {?}
     */
    function (anchorId) {
        var /** @type {?} */ subject = new BehaviorSubject$1(undefined);
        this.store
            .select(function (state) { return state.rule.scenarios.data; })
            .pipe(startWith([]), filter(function (scenarios) { return scenarios != null; }), map(function (scenarios) {
            return scenarios.filter(function (scenario) { return scenario._id == anchorId; });
        }))
            .subscribe(function (scenarios) {
            subject.next(scenarios);
        });
        return subject.asObservable();
    };
    ScenarioService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ScenarioService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: RuleConfigurationService }
    ]; };
    return ScenarioService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GwtViewComponent = /** @class */ (function () {
    function GwtViewComponent(store, configService, scenarioService, injector, data) {
        this.store = store;
        this.configService = configService;
        this.scenarioService = scenarioService;
        this.injector = injector;
        this.data = data;
        this.unsubscribe = new Subject();
        this.scenario$ = new BehaviorSubject$2(new GwtScenarioModel());
        this.scenarios$ = new BehaviorSubject$2([]);
        this._create_scenario_form_group();
        this._init_features_list();
    }
    /**
     * @return {?}
     */
    GwtViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.steps$ = this.configService.config$.pipe(map(function (config) { return config.steps; }), takeUntil(this.unsubscribe));
        this.steps$.subscribe(function (steps) { return (_this.steps = steps); });
        this._load_scenario_and_map_scenario_step_to_steps_class();
    };
    /**
     * @return {?}
     */
    GwtViewComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    /**
     * @return {?}
     */
    GwtViewComponent.prototype.save = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ scenario = this.scenario$.getValue();
        this.stepLoaders.forEach(function (stepLoader) {
            scenario.steps.find(function (step) { return step.name == stepLoader.step.name; }).params = stepLoader.params;
        });
        scenario.featureId = this.scenarioFormGroup.value.featureId;
        scenario.name = this.scenarioFormGroup.value.name;
        this.store.dispatch(new UpsertScenarioAction(scenario));
    };
    /**
     * @param {?} step
     * @return {?}
     */
    GwtViewComponent.prototype.addStepToScenario = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        var /** @type {?} */ scenario = this.scenario$.getValue();
        scenario.steps.push(step);
        this.scenario$.next(scenario);
    };
    /**
     * @param {?} step
     * @return {?}
     */
    GwtViewComponent.prototype.deleteStepFromScenario = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        var /** @type {?} */ scenario = this.scenario$.getValue();
        scenario.steps.splice(scenario.steps.findIndex(function (item) { return item.name == step.name; }), 1);
        this.scenario$.next(scenario);
    };
    /**
     * @param {?} step
     * @return {?}
     */
    GwtViewComponent.prototype.decScenarioStepPriority = /**
     * @param {?} step
     * @return {?}
     */
    function (step) { };
    /**
     * @param {?} step
     * @return {?}
     */
    GwtViewComponent.prototype.incScenarioStepPriority = /**
     * @param {?} step
     * @return {?}
     */
    function (step) { };
    /**
     * @return {?}
     */
    GwtViewComponent.prototype.addNewScenario = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ scenarios = this.scenarios$.getValue();
        scenarios.push(new GwtScenarioModel({
            anchorId: this.data.anchorId
        }));
        this.scenarios$.next(scenarios);
    };
    /**
     * @param {?} scenario
     * @return {?}
     */
    GwtViewComponent.prototype.activeScenario = /**
     * @param {?} scenario
     * @return {?}
     */
    function (scenario) {
        var _this = this;
        scenario.steps = scenario.steps.map(function (scenarioStep) {
            var /** @type {?} */ step = _this.steps.find(function (step) { return step.id == scenarioStep.id; });
            step.params = scenarioStep.params;
            return step;
        });
        this.scenarioFormGroup.patchValue(scenario);
        scenario.anchorId = this.data.anchorId;
        this.scenario$.next(scenario);
    };
    /**
     * @return {?}
     */
    GwtViewComponent.prototype._load_scenario_and_map_scenario_step_to_steps_class = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.scenarioService
            .getAnchorScenarios(this.data.anchorId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (scenarios) {
            _this.scenarios$.next(scenarios);
            _this.activeScenario(scenarios[0] || new GwtScenarioModel());
        });
    };
    /**
     * @return {?}
     */
    GwtViewComponent.prototype._create_scenario_form_group = /**
     * @return {?}
     */
    function () {
        this.scenarioFormGroup = new FormGroup({
            featureId: new FormControl(),
            name: new FormControl()
        });
    };
    /**
     * @return {?}
     */
    GwtViewComponent.prototype._reset_scenario_form_group_and_patch_with_active_scenario = /**
     * @return {?}
     */
    function () {
        this.scenarioFormGroup.reset();
        this.scenarioFormGroup.patchValue(this.scenario$.getValue());
    };
    /**
     * @return {?}
     */
    GwtViewComponent.prototype._init_features_list = /**
     * @return {?}
     */
    function () {
        this.features$ = ["مدیریت نمایش براساس دسترسی های کاربر"];
    };
    GwtViewComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-gwt-view",
                    template: "<div fxLayout=\"row\" fxLayoutGap=\"25px\">\n<div fxFlex=\"400px\" fxLayout=\"column\" fxLayoutGap=\"15px\">\n  <div fxLayout=\"row wrap\">\n    <mat-form-field appearance=\"fill\" fxFlex=\"100\">\n      <input matInput placeholder=\"\u0641\u06CC\u0644\u062A\u0631\">\n      <mat-icon matSuffix>search</mat-icon>\n    </mat-form-field>\n    <mat-checkbox fxFlex class=\"example-margin\">\u0641\u0631\u0636 \u06A9\u0646\u06CC\u062F</mat-checkbox>\n    <mat-checkbox fxFlex class=\"example-margin\">\u0647\u0646\u06AF\u0627\u0645\u06CC \u06A9\u0647</mat-checkbox>\n    <mat-checkbox fxFlex class=\"example-margin\">\u0622\u0646\u06AF\u0627\u0647</mat-checkbox>\n  </div>\n    <mat-card class=\"steps-item\" *ngFor=\"let step of steps$ | async\">\n      <span class=\"step-text\">\n        {{step.description}}\n      </span>\n      <button mat-icon-button class=\"add-button\" (click)=\"addStepToScenario(step)\">\n        <mat-icon>arrow_back_ios</mat-icon>\n      </button>\n    </mat-card>\n</div>\n\n<div fxFlex=\"700px\">\n  <div fxLayout=\"row wrap\" fxLayoutGap=\"25px\" fxLayoutAlign=\"center center\" class=\"scenario-toolbar\">\n    <div fxFlex>\n        <mat-form-field class=\"fit\">\n            <mat-select placeholder=\"\u0648\u0650\u06CC\u0698\u06AF\u06CC\" (selectionChange)=\"activeScenario($event.value)\">\n                  <mat-option *ngFor=\"let scenario of scenarios$ | async\" [value]=\"scenario\">\n                {{ scenario.featureId }} : {{ scenario.name }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n    </div>\n    <button fxFlex=\"nogrow\" mat-raised-button color=\"primary\" (click)=\"addNewScenario()\">\n       \u062B\u0628\u062A \u0633\u0646\u0627\u0631\u06CC\u0648 \u062C\u062F\u06CC\u062F\n    </button>\n  </div>\n  <div fxLayout=\"column\" fxLayoutGap=\"15px\">\n    <div fxFlex=\"100\" fxLayout=\"row\" fxLayoutGap=\"25px\" [formGroup]=\"scenarioFormGroup\">\n      <mat-form-field fxFlex=\"50\">\n        <mat-select placeholder=\"\u0648\u06CC\u0698\u06AF\u06CC\" formControlName=\"featureId\">\n          <mat-option *ngFor=\"let feature of features$\" [value]=\"feature\">\n            {{ feature }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field fxFlex=\"50\">\n        <input matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\n      </mat-form-field>\n    </div>\n    <ng-container *ngFor=\"let step of (scenario$ | async).steps\">\n      <div class=\"scenario-steps-item\">\n        <ng-container rule-step-loader [step]=\"step\"></ng-container>\n        <div class=\"scenario-steps-action\">\n          <button mat-icon-button (click)=\"deleteStepFromScenario(step)\">\n            <mat-icon>delete</mat-icon>\n          </button>\n          <button mat-icon-button (click)=\"incScenarioStepPriority(step)\">\n            <mat-icon>keyboard_arrow_up</mat-icon>\n          </button>\n          <button mat-icon-button (click)=\"decScenarioStepPriority(step)\">\n            <mat-icon>keyboard_arrow_down</mat-icon>\n          </button>\n        </div>\n      </div>\n    </ng-container>\n      <button fxFlex=\"nogrow\" mat-raised-button color=\"primary\" (click)=\"save()\">\n        \u062B\u0628\u062A\n      </button>\n    </div>\n  </div>\n</div>",
                    styles: [":host{width:100vw}.scenario-toolbar{height:60px;margin-bottom:20px}"]
                },] },
    ];
    /** @nocollapse */
    GwtViewComponent.ctorParameters = function () { return [
        { type: Store },
        { type: RuleConfigurationService },
        { type: ScenarioService },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_BOTTOM_SHEET_DATA,] }] }
    ]; };
    GwtViewComponent.propDecorators = {
        stepLoaders: [{ type: ViewChildren, args: [StepLoaderDirective,] }]
    };
    return GwtViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var GwtStepTypes = {
    "Given": "Given",
    "When": "When",
    "Then": "Then",
    "And": "And",
    "But": "But",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RuleAnchorDirective = /** @class */ (function () {
    function RuleAnchorDirective(scenarioService, configService, store, el, renderer, bottomSheet) {
        var _this = this;
        this.scenarioService = scenarioService;
        this.configService = configService;
        this.store = store;
        this.el = el;
        this.renderer = renderer;
        this.bottomSheet = bottomSheet;
        this.unsubscribe = new Subject();
        this.active$ = this.store.select(function (s) { return s.rule.ruleAnchors.active; }).pipe(takeUntil(this.unsubscribe));
        this.active$.subscribe(function (active) { return (_this.active = active); });
        this.el.nativeElement.classList.add("ngs-rule-anchor");
        this.steps = this.configService.config$.getValue().steps;
    }
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype.onMouseEnter = /**
     * @return {?}
     */
    function () {
        if (!this.active)
            return;
        this.showAnchor();
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        if (!this.active)
            return;
        this.hideAnchor();
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype.showAnchor = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.classList.add("show-anchor");
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype.hideAnchor = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.classList.remove("show-anchor");
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // TODO: remove
        // this.store.dispatch(new ShowAnchorsAction());
        this.anchorScenarios$ = this.scenarioService
            .getAnchorScenarios(this.anchorId) //TODO: replace service call with ngrx action
            .pipe(takeUntil(this.unsubscribe), filter(function (scenario) { return scenario != undefined; }));
        this.active$.subscribe(function (active) {
            if (active)
                _this._activate_anchor();
            else
                _this._deactivate_anchor();
        });
        this.anchorScenarios$.subscribe(function (scenarios) {
            scenarios.forEach(function (scenario) {
                scenario.steps = scenario.steps.map(function (scenarioStep) {
                    var /** @type {?} */ step = _this.steps.find(function (step) { return step.id == scenarioStep.id; });
                    step.params = scenarioStep.params;
                    return step;
                });
                _this._do_scenario(scenario);
            });
        });
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype._activate_anchor = /**
     * @return {?}
     */
    function () {
        this._create_anchor();
        this._set_active_class_to_host();
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype._deactivate_anchor = /**
     * @return {?}
     */
    function () {
        this._remove_anchor();
        this._remove_active_class_to_host();
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype._set_active_class_to_host = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.classList.add("anchor-active");
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype._remove_active_class_to_host = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.classList.remove("anchor-active");
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype._create_anchor = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.button = this.renderer.createElement("button");
        this.button.classList.add("ngs-rule-anchor-button", "mat-icon-button");
        this.button.setAttribute("mat-icon-button", "");
        this.button.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            _this.bottomSheet.open(GwtViewComponent, {
                data: {
                    anchorId: _this.anchorId
                },
                panelClass: "magenta-theme"
            });
        });
        var /** @type {?} */ maticon = this.renderer.createElement("mat-icon");
        maticon.classList.add("mat-icon", "material-icons");
        var /** @type {?} */ icon = this.renderer.createText("settings");
        this.renderer.appendChild(maticon, icon);
        this.renderer.appendChild(this.button, maticon);
        this.renderer.appendChild(this.el.nativeElement, this.button);
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype._remove_anchor = /**
     * @return {?}
     */
    function () {
        if (!this.button)
            return;
        this.button.parentNode.removeChild(this.button);
    };
    /**
     * @param {?} scenario
     * @return {?}
     */
    RuleAnchorDirective.prototype._do_scenario = /**
     * @param {?} scenario
     * @return {?}
     */
    function (scenario) {
        var _this = this;
        var /** @type {?} */ givenStepInterpretors = scenario.steps
            .filter(function (step) { return step.type == GwtStepTypes.Given; })
            .map(function (step) { return step.interperator(step.params); });
        combineLatest(givenStepInterpretors)
            .pipe(takeUntil(this.unsubscribe), map(function (values) { return values.every(function (value) { return value === true; }); }), switchMap(function (givenResult) {
            debugger;
            if (givenResult) {
                var /** @type {?} */ thenStepInterpretors = scenario.steps
                    .filter(function (step) { return step.type == GwtStepTypes.Then; })
                    .map(function (step) { return step.interperator(step.params, _this.el); });
                return combineLatest
                    .apply(null, thenStepInterpretors)
                    .pipe(map(function (values) { return values.every(function (value) { return value === true; }); }));
            }
            else
                return of(false);
        }))
            .subscribe(function () { });
    };
    RuleAnchorDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[ruleAnchor]"
                },] },
    ];
    /** @nocollapse */
    RuleAnchorDirective.ctorParameters = function () { return [
        { type: ScenarioService },
        { type: RuleConfigurationService },
        { type: Store },
        { type: ElementRef },
        { type: Renderer2 },
        { type: MatBottomSheet }
    ]; };
    RuleAnchorDirective.propDecorators = {
        anchorId: [{ type: Input, args: ["ruleAnchor",] }],
        onMouseEnter: [{ type: HostListener, args: ["mouseenter",] }],
        onMouseLeave: [{ type: HostListener, args: ["mouseleave",] }]
    };
    return RuleAnchorDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ScenariosDbEffects = /** @class */ (function () {
    function ScenariosDbEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.EditProfileRequest$ = this.actions$
            .ofType(ScenariosListActionTypes.SCENARIOS_LIST)
            .pipe(map(function () { return new ScenariosListStartAction(); }));
        this.UpsertScenario$ = this.actions$
            .ofType(ScenariosListActionTypes.UPSERT)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (scenario) { return _this.service.upsert(scenario); }), map(function (scenario) { return new ScenarioFechedAction(scenario); }));
    }
    ScenariosDbEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ScenariosDbEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: ScenarioService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], ScenariosDbEffects.prototype, "EditProfileRequest$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], ScenariosDbEffects.prototype, "UpsertScenario$", void 0);
    return ScenariosDbEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RulesListEffects = /** @class */ (function () {
    function RulesListEffects(actions$) {
        this.actions$ = actions$;
        this.EditProfileRequest$ = this.actions$.ofType(RulesListActionTypes.RULES_LIST).map(function () { return new RulesListStartAction(); });
    }
    RulesListEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    RulesListEffects.ctorParameters = function () { return [
        { type: Actions }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], RulesListEffects.prototype, "EditProfileRequest$", void 0);
    return RulesListEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GwtModeButtonComponent = /** @class */ (function () {
    function GwtModeButtonComponent(store) {
        this.store = store;
        this.anchorsMode = false;
        this.havePermission$ = this.store.select(getFrontendAuthenticationState);
    }
    /**
     * @return {?}
     */
    GwtModeButtonComponent.prototype.toggleAnchors = /**
     * @return {?}
     */
    function () {
        if (this.anchorsMode === false) {
            this.store.dispatch(new ShowAnchorsAction());
            this.anchorsMode = true;
        }
        else {
            this.store.dispatch(new HideAnchorsAction());
            this.anchorsMode = false;
        }
    };
    GwtModeButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: "gwt-mode-button",
                    template: "    <button *ngIf=\"!(havePermission$ | async)\" class=\"btn\" mat-mini-fab type=\"button\" routerLink=\"auth/frontend/signin\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>fingerprint</mat-icon>\n    </button>\n\n    <button *ngIf=\"havePermission$ | async\" class=\"btn\" mat-mini-fab type=\"button\" (click)=\"toggleAnchors()\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>settings</mat-icon>\n    </button>",
                    styles: [".btn{position:fixed;bottom:25px;right:25px;z-index:3}"]
                },] },
    ];
    /** @nocollapse */
    GwtModeButtonComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return GwtModeButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RuleService = /** @class */ (function () {
    function RuleService(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
    }
    RuleService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    RuleService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: RuleConfigurationService }
    ]; };
    return RuleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RuleModule = /** @class */ (function () {
    function RuleModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    RuleModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: RootRuleModule,
            providers: [
                { provide: MODULE_CONFIG_TOKEN, useValue: config || {} },
                RuleService,
                RuleConfigurationService,
                ScenarioService
            ]
        };
    };
    RuleModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        HttpClientModule,
                        FormsModule,
                        RouterModule,
                        CommonModule,
                        MatExpansionModule,
                        MatSnackBarModule,
                        MatIconModule,
                        MatButtonModule,
                        MatCardModule,
                        MatCheckboxModule,
                        MatTableModule,
                        MatSelectModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatTabsModule,
                        MatDividerModule,
                        FlexLayoutModule,
                        MatRadioModule,
                        MatSlideToggleModule,
                        ReactiveFormsModule,
                        BrowserAnimationsModule
                    ],
                    declarations: [RuleComponent, RuleAnchorDirective, GwtViewComponent, StepLoaderDirective, GwtModeButtonComponent],
                    entryComponents: [GwtViewComponent],
                    exports: [RuleAnchorDirective, GwtModeButtonComponent]
                },] },
    ];
    return RuleModule;
}());
var RootRuleModule = /** @class */ (function () {
    function RootRuleModule() {
    }
    RootRuleModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RuleModule,
                        StoreModule.forFeature("rule", RuleReducers),
                        EffectsModule.forFeature([RulesListEffects, ScenariosDbEffects]),
                        RoutingModule
                    ],
                    exports: [RuleModule]
                },] },
    ];
    return RootRuleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { GwtStepTypes, ShowAnchorsAction, HideAnchorsAction, RuleModule, RootRuleModule, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, RulesListEffects as ɵn, reducer as ɵl, ScenariosDbEffects as ɵo, reducer$1 as ɵm, GwtViewComponent as ɵh, GwtModeButtonComponent as ɵj, RuleAnchorDirective as ɵb, Reducer as ɵk, RoutingModule as ɵp, RuleComponent as ɵa, RuleReducers as ɵe, RuleConfigurationService as ɵg, RuleService as ɵq, ScenarioService as ɵc, StepLoaderDirective as ɵi };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXJ1bGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvcnVsZS5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvcnVsZS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvcnVsZS1yb3V0aW5nLm1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3J1bGUtYW5jaG9yL3J1bGUtYW5jaG9yLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvZGIvcnVsZS1kYi5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL2RiL3J1bGUtZGIucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9kYi9zY2VuYXJpby1kYi5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL2RiL3NjZW5hcmlvLWRiLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvcnVsZS5yZWR1Y2Vycy50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9zZXJ2aWNlcy9ydWxlLWNvbmZpZ3VyYXRpb24uc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3N0ZXAtbG9hZGVyL3N0ZXAtbG9hZGVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9zZXJ2aWNlcy9zY2VuYXJpby5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL2d3dC12aWV3L2d3dC12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9tb2RlbHMvZ3d0LXN0ZXAtdHlwZXMuZW51bS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5kaXJlY3RpdmUudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvZGIvc2NlbmFyaW8tZGIuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9kYi9ydWxlLWRiLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvbW9kZS1idXR0b24vbW9kZS1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3NlcnZpY2VzL3J1bGUuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9ydWxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHd3RTdGVwIH0gZnJvbSBcIi4vbW9kZWxzL2d3dC1zdGVwLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJ1bGVNb2R1bGVDb25maWcge1xyXG5cdGVuZHBvaW50cz86IHtcclxuXHRcdHVwc2VydD86IHN0cmluZztcclxuXHRcdGdldD86IHN0cmluZztcclxuXHR9O1xyXG5cdHN0ZXBDbGFzc2VzPzogVHlwZTxHd3RTdGVwPltdO1xyXG5cdHN0ZXBzPzogR3d0U3RlcFtdO1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuXHR9O1xyXG59XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IFJ1bGVNb2R1bGVDb25maWcgPSB7XHJcblx0ZW5kcG9pbnRzOiB7XHJcblx0XHR1cHNlcnQ6IFwiL2FwaS9nd3Qvc2NlbmFyaW9cIixcclxuXHRcdGdldDogXCIvYXBpL2d3dC9hbmNob3IvJHttb2RlbC5hbmNob3JJZH0vc2NlbmFyaW9zXCJcclxuXHR9LFxyXG5cdHN0ZXBDbGFzc2VzOiBbXSxcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlLFxyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiXHJcblx0fVxyXG59O1xyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxSdWxlTW9kdWxlQ29uZmlnPihcIlJ1bGVNb2R1bGVDb25maWdcIik7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImFwcC1ydWxlXCIsXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XG4gIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgUnVsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHRuZ09uSW5pdCgpIHt9XG59XG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlQ29tcG9uZW50IH0gZnJvbSBcIi4vcnVsZS5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwicnVsZVwiLFxyXG5cdFx0Y29tcG9uZW50OiBSdWxlQ29tcG9uZW50XHJcblx0XHQvLyBjaGlsZHJlbjogWyB7fSBdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvdXRpbmdNb2R1bGU6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKTtcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgZW51bSBSdWxlQW5jaG9yc0FjdGlvblR5cGVzIHtcclxuXHRTSE9XX0FOQ0hPUlMgPSBcIltSVUxFXVtBTkNIT1JTXSBTSE9XX0FOQ0hPUlNcIixcclxuXHRISURFX0FOQ0hPUlMgPSBcIltSVUxFXVtBTkNIT1JTXSBISURFX0FOQ0hPUlNcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2hvd0FuY2hvcnNBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlQW5jaG9yc0FjdGlvblR5cGVzLlNIT1dfQU5DSE9SUztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEhpZGVBbmNob3JzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZUFuY2hvcnNBY3Rpb25UeXBlcy5ISURFX0FOQ0hPUlM7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFJ1bGVBbmNob3JzQWN0aW9uID0gU2hvd0FuY2hvcnNBY3Rpb24gfCBIaWRlQW5jaG9yc0FjdGlvbjtcclxuIiwiaW1wb3J0IHsgUnVsZUFuY2hvcnNBY3Rpb24sIFJ1bGVBbmNob3JzQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi9ydWxlLWFuY2hvci5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRhY3RpdmU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGFjdGl2ZTogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFJ1bGVBbmNob3JzQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgUnVsZUFuY2hvcnNBY3Rpb25UeXBlcy5TSE9XX0FOQ0hPUlM6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhY3RpdmU6IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRjYXNlIFJ1bGVBbmNob3JzQWN0aW9uVHlwZXMuSElERV9BTkNIT1JTOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWN0aXZlOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8jcmVnaW9uICBzZWxlY3RvcnNcclxuZXhwb3J0IGNvbnN0IGdldEFuY2hvcnNBY3Rpdml0eVN0YXRlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuYWN0aXZlO1xyXG4vLyNlbmRyZWdpb25cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3J1bGUubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFJ1bGVzTGlzdEFjdGlvblR5cGVzIHtcclxuXHRSVUxFU19MSVNUID0gXCJbUlVMRV1bREJdIFJVTEVTX0xJU1RcIixcclxuXHRSVUxFU19MSVNUX1NUQVJUID0gXCJbUlVMRV1bREJdIFJVTEVTX0xJU1RfU1RBUlRcIixcclxuXHRSVUxFU19MSVNUX1NVQ0NFRUQgPSBcIltSVUxFXVtEQl0gUlVMRVNfTElTVF9TVUNDRUVEXCIsXHJcblx0UlVMRVNfTElTVF9GQUlMRUQgPSBcIltSVUxFXVtEQl0gUlVMRVNfTElTVF9GQUlMRURcIixcclxuXHRSVUxFX1VQU0VSVCA9IFwiW1JVTEVdW0RCXSBSVUxFX1VQU0VSVFwiLFxyXG5cdEdFVF9SVUxFID0gXCJbUlVMRV1bREJdIEdFVF9SVUxFXCIsXHJcblx0UlVMRV9GRVRDSEVEID0gXCJbUlVMRV1bREJdIFJVTEVfRkVUQ0hFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSdWxlc0xpc3RBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBSdWxlc0xpc3RTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1RfU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJ1bGVzTGlzdFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJ1bGVNb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSdWxlc0xpc3RGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0UnVsZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVfVVBTRVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSdWxlTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFJ1bGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5HRVRfUlVMRTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSdWxlRmVjaGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRV9GRVRDSEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSdWxlTW9kZWwpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFJ1bGVzTGlzdEFjdGlvbnMgPVxyXG5cdHwgUnVsZXNMaXN0QWN0aW9uXHJcblx0fCBSdWxlc0xpc3RTdGFydEFjdGlvblxyXG5cdHwgUnVsZXNMaXN0U3VjY2VlZEFjdGlvblxyXG5cdHwgUnVsZXNMaXN0RmFpbGVkQWN0aW9uXHJcblx0fCBVcHNlcnRSdWxlQWN0aW9uXHJcblx0fCBHZXRSdWxlQWN0aW9uXHJcblx0fCBSdWxlRmVjaGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3J1bGUubW9kZWxcIjtcclxuaW1wb3J0IHsgUnVsZXNMaXN0QWN0aW9uVHlwZXMsIFJ1bGVzTGlzdEFjdGlvbnMgfSBmcm9tIFwiLi9ydWxlLWRiLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxuXHRkYXRhOiBSdWxlTW9kZWxbXTtcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzdGF0dXM6IFwicHJpc3RpbmVcIixcclxuXHRkYXRhOiBbXVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBSdWxlc0xpc3RBY3Rpb25zKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJkaXJ0eVwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1RfU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwicGVuZGluZ1wiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1RfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9GQUlMRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZmFpbGVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRV9VUFNFUlQ6IHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdHZhciBlbnRpdHlJZHggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleChmb3JtID0+IGZvcm0uX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdGlmIChlbnRpdHlJZHggPiAtMSkge1xyXG5cdFx0XHRcdGRhdGFbZW50aXR5SWR4XSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGFbZW50aXR5SWR4XSwgYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRhdGEucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBkYXRhXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVfRkVUQ0hFRDoge1xyXG5cdFx0XHRjb25zdCBkYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0dmFyIGVudGl0eUlkeCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KGZvcm0gPT4gZm9ybS5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKTtcclxuXHRcdFx0aWYgKGVudGl0eUlkeCA+IC0xKSB7XHJcblx0XHRcdFx0ZGF0YVtlbnRpdHlJZHhdID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YVtlbnRpdHlJZHhdLCBhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGF0YS5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGFcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0U3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc3RhdHVzO1xyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEd3dFNjZW5hcmlvTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zY2VuYXJpby5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzIHtcclxuXHRTQ0VOQVJJT1NfTElTVCA9IFwiW0dXVF1bU0NFTkFSSU9dW0RCXVtMSVNUXSBTQ0VOQVJJT1NfTElTVFwiLFxyXG5cdFNDRU5BUklPU19MSVNUX1NUQVJUID0gXCJbU0NFTkFSSU9dW0RCXSBTQ0VOQVJJT1NfTElTVF9TVEFSVFwiLFxyXG5cdFNDRU5BUklPU19MSVNUX1NVQ0NFRUQgPSBcIltTQ0VOQVJJT11bREJdIFNDRU5BUklPU19MSVNUX1NVQ0NFRURcIixcclxuXHRTQ0VOQVJJT1NfTElTVF9GQUlMRUQgPSBcIltTQ0VOQVJJT11bREJdIFNDRU5BUklPU19MSVNUX0ZBSUxFRFwiLFxyXG5cdFVQU0VSVCA9IFwiW0dXVF1bU0NFTkFSSU9dW0RCXVtVUFNFUlRdIFNDRU5BUklPX1VQU0VSVFwiLFxyXG5cdEdFVF9TQ0VOQVJJTyA9IFwiW1NDRU5BUklPXVtEQl0gR0VUX1NDRU5BUklPXCIsXHJcblx0U0NFTkFSSU9fRkVUQ0hFRCA9IFwiW1NDRU5BUklPXVtEQl0gU0NFTkFSSU9fRkVUQ0hFRFwiLFxyXG5cdC8vLyBuZXcgdmlzaW9uXHJcblx0VVBEQVRFX0RCID0gXCJbR1dUXVtTQ0VOQVJJT11bREJdIFVQREFURV9EQlwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb3NMaXN0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb3NMaXN0U3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvc0xpc3RTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEd3dFNjZW5hcmlvTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9zTGlzdEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVF9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydFNjZW5hcmlvQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlVQU0VSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3d0U2NlbmFyaW9Nb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0U2NlbmFyaW9BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuR0VUX1NDRU5BUklPO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvRmVjaGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPX0ZFVENIRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEd3dFNjZW5hcmlvTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwZGF0ZURiQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlVQREFURV9EQjtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3d0U2NlbmFyaW9Nb2RlbFtdKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTY2VuYXJpb3NMaXN0QWN0aW9ucyA9XHJcblx0fCBTY2VuYXJpb3NMaXN0QWN0aW9uXHJcblx0fCBTY2VuYXJpb3NMaXN0U3RhcnRBY3Rpb25cclxuXHR8IFNjZW5hcmlvc0xpc3RTdWNjZWVkQWN0aW9uXHJcblx0fCBTY2VuYXJpb3NMaXN0RmFpbGVkQWN0aW9uXHJcblx0fCBVcHNlcnRTY2VuYXJpb0FjdGlvblxyXG5cdHwgR2V0U2NlbmFyaW9BY3Rpb25cclxuXHR8IFNjZW5hcmlvRmVjaGVkQWN0aW9uXHJcblx0fCBVcGRhdGVEYkFjdGlvbjtcclxuIiwiaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgR3d0U2NlbmFyaW9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsXCI7XHJcbmltcG9ydCB7IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcywgU2NlbmFyaW9zTGlzdEFjdGlvbnMgfSBmcm9tIFwiLi9zY2VuYXJpby1kYi5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzVHlwZXM7XHJcblx0ZGF0YTogR3d0U2NlbmFyaW9Nb2RlbFtdO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHN0YXR1czogXCJwcmlzdGluZVwiLFxyXG5cdGRhdGE6IFtdXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFNjZW5hcmlvc0xpc3RBY3Rpb25zKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImRpcnR5XCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcInBlbmRpbmdcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuVVBTRVJUOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRpZiAoZW50aXR5SWR4ID4gLTEpIHtcclxuXHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9fRkVUQ0hFRDoge1xyXG5cdFx0XHRjb25zdCBkYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0dmFyIGVudGl0eUlkeCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KGZvcm0gPT4gZm9ybS5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKTtcclxuXHRcdFx0aWYgKGVudGl0eUlkeCA+IC0xKSB7XHJcblx0XHRcdFx0ZGF0YVtlbnRpdHlJZHhdID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YVtlbnRpdHlJZHhdLCBhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGF0YS5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGFcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlVQREFURV9EQjoge1xyXG5cdFx0XHRjb25zdCBkYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0Y29uc3Qgc2NlbmFyaW9zID0gYWN0aW9uLnBheWxvYWQ7XHJcblx0XHRcdHNjZW5hcmlvcy5mb3JFYWNoKHNjZW5hcmlvID0+IHtcclxuXHRcdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBzY2VuYXJpby5faWQpO1xyXG5cdFx0XHRcdGlmIChlbnRpdHlJZHggPiAtMSkge1xyXG5cdFx0XHRcdFx0ZGF0YVtlbnRpdHlJZHhdID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YVtlbnRpdHlJZHhdLCBzY2VuYXJpbyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGRhdGEucHVzaChzY2VuYXJpbyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBkYXRhXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdldFN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnN0YXR1cztcclxuIiwiaW1wb3J0ICogYXMgZnJvbVJ1bGVBbmNob3IgZnJvbSBcIi4vcnVsZS1hbmNob3IvcnVsZS1hbmNob3IucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBmcm9tUnVsZURiQW5jaG9yIGZyb20gXCIuL2RiL3J1bGUtZGIucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBmcm9tU2NlbmFyaW9EYkFuY2hvciBmcm9tIFwiLi9kYi9zY2VuYXJpby1kYi5yZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJ1bGVTdGF0ZSB7XHJcblx0cnVsZUFuY2hvcnM6IGZyb21SdWxlQW5jaG9yLlN0YXRlO1xyXG5cdHJ1bGVzOiBmcm9tUnVsZURiQW5jaG9yLlN0YXRlO1xyXG5cdHNjZW5hcmlvczogZnJvbVNjZW5hcmlvRGJBbmNob3IuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSdWxlUmVkdWNlcnMgPSB7XHJcblx0cnVsZUFuY2hvcnM6IGZyb21SdWxlQW5jaG9yLlJlZHVjZXIsXHJcblx0cnVsZXM6IGZyb21SdWxlRGJBbmNob3IucmVkdWNlcixcclxuXHRzY2VuYXJpb3M6IGZyb21TY2VuYXJpb0RiQW5jaG9yLnJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xyXG5cdFwicnVsZVwiOiBSdWxlU3RhdGU7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuLy8gaW1wb3J0IHsgZ2V0UnVsZU1vZHVsZUNvbmZpZyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBSdWxlTW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uL3J1bGUuY29uZmlnXCI7XHJcbmltcG9ydCB7IE1PRFVMRV9DT05GSUdfVE9LRU4sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRyB9IGZyb20gXCIuLi9ydWxlLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBSdWxlU3RhdGUgfSBmcm9tIFwiLi4vcnVsZS5yZWR1Y2Vyc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IFJ1bGVNb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KE1PRFVMRV9ERUZBVUxUX0NPTkZJRyk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlOiBSdWxlTW9kdWxlQ29uZmlnLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8UnVsZVN0YXRlPixcclxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXHJcblx0KSB7XHJcblx0XHQvLyBpbnN0YW50aWF0ZSBzdGVwcyBhbmQgdXNlZCB0aGVtXHJcblx0XHRjb25maWdGaWxlLnN0ZXBzID0gY29uZmlnRmlsZS5zdGVwQ2xhc3Nlcy5tYXAoc3RlcCA9PiBuZXcgc3RlcCh0aGlzLmluamVjdG9yKSk7XHJcblxyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWdGaWxlKTtcclxuXHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cclxuXHRcdC8vIHRoaXMuc3RvcmUuc2VsZWN0KGdldFJ1bGVNb2R1bGVDb25maWcpLnN1YnNjcmliZSh1c2VyQ29uZmlnID0+IHtcclxuXHRcdC8vIFx0aWYgKCF1c2VyQ29uZmlnKSByZXR1cm47XHJcblx0XHQvLyBcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgdXNlckNvbmZpZy5Db25maWcpO1xyXG5cdFx0Ly8gXHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEd3dFN0ZXAgfSBmcm9tIFwiLi9nd3Qtc3RlcC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEd3dFNjZW5hcmlvTW9kZWwge1xyXG5cdF9pZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRhbmNob3JJZDogc3RyaW5nO1xyXG5cdGZlYXR1cmVJZDogc3RyaW5nO1xyXG5cdHN0ZXBzOiBHd3RTdGVwW107XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHR7XHJcblx0XHRcdF9pZCxcclxuXHRcdFx0YW5jaG9ySWQsXHJcblx0XHRcdHN0ZXBzLFxyXG5cdFx0XHRuYW1lLFxyXG5cdFx0XHRmZWF0dXJlSWRcclxuXHRcdH06IHsgX2lkPzogc3RyaW5nOyBhbmNob3JJZD86IHN0cmluZzsgc3RlcHM/OiBHd3RTdGVwW107IG5hbWU/OiBzdHJpbmc7IGZlYXR1cmVJZD86IHN0cmluZyB9ID0ge31cclxuXHQpIHtcclxuXHRcdHRoaXMuX2lkID0gX2lkIHx8IFwiXCI7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lIHx8IFwiXCI7XHJcblx0XHR0aGlzLmZlYXR1cmVJZCA9IGZlYXR1cmVJZCB8fCBcIlwiO1xyXG5cdFx0dGhpcy5faWQgPSBfaWQgfHwgXCJcIjtcclxuXHRcdHRoaXMuYW5jaG9ySWQgPSBhbmNob3JJZCB8fCBcIlwiO1xyXG5cdFx0dGhpcy5zdGVwcyA9IHN0ZXBzIHx8IFtdO1xyXG5cdH1cclxuXHRnZXRSZXF1c2V0Qm9keSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdF9pZDogdGhpcy5faWQsXHJcblx0XHRcdGFuY2hvcklkOiB0aGlzLmFuY2hvcklkLFxyXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsXHJcblx0XHRcdGZlYXR1cmVJZDogdGhpcy5mZWF0dXJlSWQsXHJcblx0XHRcdHN0ZXBzOiB0aGlzLnN0ZXBzLm1hcCgoc3RlcCkgPT4gKHtcclxuXHRcdFx0XHRpZDogc3RlcC5pZCxcclxuXHRcdFx0XHRvcHBvc2l0ZTogc3RlcC5vcHBvc2l0ZSxcclxuXHRcdFx0XHRwYXJhbXM6IHN0ZXAucGFyYW1zXHJcblx0XHRcdH0pKVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRPbkluaXQsXG5cdElucHV0LFxuXHRWaWV3Q29udGFpbmVyUmVmLFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdENvbXBvbmVudFJlZixcblx0Vmlld0NoaWxkLFxuXHREaXJlY3RpdmUsXG5cdE9uQ2hhbmdlc1xufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBHd3RTdGVwIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc3RlcC5tb2RlbFwiO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6IFwiW3J1bGUtc3RlcC1sb2FkZXJdXCJcblx0Ly8gdGVtcGxhdGVVcmw6IFwiLi9zdGVwLWxvYWRlci5jb21wb25lbnQuaHRtbFwiLFxuXHQvLyBzdHlsZVVybHM6IFsgXCIuL3N0ZXAtbG9hZGVyLmNvbXBvbmVudC5jc3NcIiBdXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBMb2FkZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cdEBJbnB1dCgpIHN0ZXA6IEd3dFN0ZXA8YW55Pjtcblx0QFZpZXdDaGlsZChcImNvbnRhaW5lclwiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcblx0Ly8gVE9ETzogZml4IGdlbmVyaWMgdHlwZVxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xuXHRnZXQgcGFyYW1zKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5wYXJhbXMgfHwge307XG5cdH1cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikge31cblxuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHRpZiAodGhpcy5jb21wb25lbnQpIHtcblx0XHRcdC8vIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLmNvbmZpZyA9IHRoaXMuY29uZmlnO1xuXHRcdFx0Ly8gdGhpcy5jb21wb25lbnQuaW5zdGFuY2UuZ3JvdXAgPSB0aGlzLmdyb3VwO1xuXHRcdH1cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGlmICghdGhpcy5zdGVwLnN0ZXBDb21wb25lbnQpIHtcblx0XHRcdGRlYnVnZ2VyO1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHRgVHJ5aW5nIHRvIHVzZSBhbiB1bnN1cHBvcnRlZCB0eXBlICgpLlxuXHRcdCAgU3VwcG9ydGVkIHR5cGVzOiBgXG5cdFx0XHQpO1xuXHRcdH1cblx0XHQvLyBUT0RPOiBmaXggZ2VuZXJpYyB0eXBlXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KHRoaXMuc3RlcC5zdGVwQ29tcG9uZW50KTtcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuXHRcdHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLnBhcmFtcyA9IHRoaXMuc3RlcC5wYXJhbXM7XG5cdH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzdGFydFdpdGgsIHNoYXJlIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBzdHJpbmdUZW1wbGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vcnVsZS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcnVsZS5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBHd3RTY2VuYXJpb01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWxcIjtcclxuaW1wb3J0IHsgUnVsZU1vZHVsZUNvbmZpZyB9IGZyb20gXCIuLi9ydWxlLmNvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9TZXJ2aWNlIHtcclxuXHRjb25maWckOiBPYnNlcnZhYmxlPFJ1bGVNb2R1bGVDb25maWc+O1xyXG5cdGNvbmZpZzogUnVsZU1vZHVsZUNvbmZpZztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLmNvbmZpZyQgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJDtcclxuXHRcdHRoaXMuY29uZmlnJC5zdWJzY3JpYmUoY29uZmlnID0+ICh0aGlzLmNvbmZpZyA9IGNvbmZpZykpO1xyXG5cdH1cclxuXHJcblx0dXBzZXJ0KHNjZW5hcmlvOiBHd3RTY2VuYXJpb01vZGVsKTogT2JzZXJ2YWJsZTxHd3RTY2VuYXJpb01vZGVsPiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBHd3RTY2VuYXJpb01vZGVsKHNjZW5hcmlvKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnBvc3QoYCR7dGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlcn0ke3RoaXMuY29uZmlnLmVuZHBvaW50cy51cHNlcnR9YCwgbW9kZWwuZ2V0UmVxdXNldEJvZHkoKSlcclxuXHRcdFx0LnBpcGUobWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlIGFzIEd3dFNjZW5hcmlvTW9kZWwpLCBzaGFyZSgpKTtcclxuXHR9XHJcblx0Z2V0QW5jaG9yU2NlbmFyaW9zKGFuY2hvcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEd3dFNjZW5hcmlvTW9kZWxbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0PGFueT4oYCR7dGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlcn0ke3N0cmluZ1RlbXBsYXRlKHRoaXMuY29uZmlnLmVuZHBvaW50cy5nZXQsIHsgYW5jaG9ySWQgfSl9YClcclxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5SZXN1bHQgYXMgR3d0U2NlbmFyaW9Nb2RlbFtdKTtcclxuXHR9XHJcblx0c2VsZWN0U2NlbmFyaW9CeUlkKF9pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxHd3RTY2VuYXJpb01vZGVsPiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHd3RTY2VuYXJpb01vZGVsPih1bmRlZmluZWQpO1xyXG5cdFx0dGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnJ1bGUuc2NlbmFyaW9zLmRhdGEpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdGZpbHRlcihzY2VuYXJpb3MgPT4gc2NlbmFyaW9zICE9IG51bGwpLFxyXG5cdFx0XHRcdG1hcChzY2VuYXJpb3MgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHNjZW5hcmlvcy5maW5kKHNjZW5hcmlvID0+IHNjZW5hcmlvLl9pZCA9PSBfaWQpO1xyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdGZpbHRlcihzY2VuYXJpbyA9PiBzY2VuYXJpbyAhPSB1bmRlZmluZWQpXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZShzY2VuYXJpbyA9PiB7XHJcblx0XHRcdFx0c3ViamVjdC5uZXh0KHNjZW5hcmlvKTtcclxuXHRcdFx0fSk7XHJcblx0XHRyZXR1cm4gc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHR9XHJcblx0c2VsZWN0QW5jaG9yU2NlbmFyaW9zKGFuY2hvcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEd3dFNjZW5hcmlvTW9kZWxbXT4ge1xyXG5cdFx0Y29uc3Qgc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R3d0U2NlbmFyaW9Nb2RlbFtdPih1bmRlZmluZWQpO1xyXG5cdFx0dGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnJ1bGUuc2NlbmFyaW9zLmRhdGEpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdHN0YXJ0V2l0aChbXSksXHJcblx0XHRcdFx0ZmlsdGVyKHNjZW5hcmlvcyA9PiBzY2VuYXJpb3MgIT0gbnVsbCksXHJcblx0XHRcdFx0bWFwKHNjZW5hcmlvcyA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gc2NlbmFyaW9zLmZpbHRlcihzY2VuYXJpbyA9PiBzY2VuYXJpby5faWQgPT0gYW5jaG9ySWQpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZShzY2VuYXJpb3MgPT4ge1xyXG5cdFx0XHRcdHN1YmplY3QubmV4dChzY2VuYXJpb3MpO1xyXG5cdFx0XHR9KTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBUeXBlLCBJbmplY3RvciwgVmlld0NoaWxkcmVuLCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHdpdGhMYXRlc3RGcm9tLCB0YWtlVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgTUFUX0JPVFRPTV9TSEVFVF9EQVRBIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5cbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3J1bGUtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBHd3RTdGVwIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc3RlcC5tb2RlbFwiO1xuaW1wb3J0IHsgR3d0U2NlbmFyaW9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsXCI7XG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ydWxlLnJlZHVjZXJzXCI7XG5pbXBvcnQgeyBVcHNlcnRTY2VuYXJpb0FjdGlvbiB9IGZyb20gXCIuLi9kYi9zY2VuYXJpby1kYi5hY3Rpb25zXCI7XG5pbXBvcnQgeyBTdGVwTG9hZGVyRGlyZWN0aXZlIH0gZnJvbSBcIi4uL3N0ZXAtbG9hZGVyL3N0ZXAtbG9hZGVyLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjZW5hcmlvLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImFwcC1nd3Qtdmlld1wiLFxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cbjxkaXYgZnhGbGV4PVwiNDAwcHhcIiBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0R2FwPVwiMTVweFwiPlxuICA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIiBmeEZsZXg9XCIxMDBcIj5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOZwoHDm8KMw5nChMOYwqrDmMKxXCI+XG4gICAgICA8bWF0LWljb24gbWF0U3VmZml4PnNlYXJjaDwvbWF0LWljb24+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWNoZWNrYm94IGZ4RmxleCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+w5nCgcOYwrHDmMK2IMOawqnDmcKGw5vCjMOYwq88L21hdC1jaGVja2JveD5cbiAgICA8bWF0LWNoZWNrYm94IGZ4RmxleCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+w5nCh8OZwobDmsKvw5jCp8OZwoXDm8KMIMOawqnDmcKHPC9tYXQtY2hlY2tib3g+XG4gICAgPG1hdC1jaGVja2JveCBmeEZsZXggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPsOYwqLDmcKGw5rCr8OYwqfDmcKHPC9tYXQtY2hlY2tib3g+XG4gIDwvZGl2PlxuICAgIDxtYXQtY2FyZCBjbGFzcz1cInN0ZXBzLWl0ZW1cIiAqbmdGb3I9XCJsZXQgc3RlcCBvZiBzdGVwcyQgfCBhc3luY1wiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzdGVwLXRleHRcIj5cbiAgICAgICAge3tzdGVwLmRlc2NyaXB0aW9ufX1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiYWRkLWJ1dHRvblwiIChjbGljayk9XCJhZGRTdGVwVG9TY2VuYXJpbyhzdGVwKVwiPlxuICAgICAgICA8bWF0LWljb24+YXJyb3dfYmFja19pb3M8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9tYXQtY2FyZD5cbjwvZGl2PlxuXG48ZGl2IGZ4RmxleD1cIjcwMHB4XCI+XG4gIDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJzY2VuYXJpby10b29sYmFyXCI+XG4gICAgPGRpdiBmeEZsZXg+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZpdFwiPlxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCLDmcKIw5nCkMObwozDmsKYw5rCr8ObwoxcIiAoc2VsZWN0aW9uQ2hhbmdlKT1cImFjdGl2ZVNjZW5hcmlvKCRldmVudC52YWx1ZSlcIj5cbiAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBzY2VuYXJpbyBvZiBzY2VuYXJpb3MkIHwgYXN5bmNcIiBbdmFsdWVdPVwic2NlbmFyaW9cIj5cbiAgICAgICAgICAgICAgICB7eyBzY2VuYXJpby5mZWF0dXJlSWQgfX0gOiB7eyBzY2VuYXJpby5uYW1lIH19XG4gICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gZnhGbGV4PVwibm9ncm93XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZE5ld1NjZW5hcmlvKClcIj5cbiAgICAgICDDmMKrw5jCqMOYwqogw5jCs8OZwobDmMKnw5jCscObwozDmcKIIMOYwqzDmMKvw5vCjMOYwq9cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEdhcD1cIjE1cHhcIj5cbiAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCIyNXB4XCIgW2Zvcm1Hcm91cF09XCJzY2VuYXJpb0Zvcm1Hcm91cFwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cIjUwXCI+XG4gICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiw5nCiMObwozDmsKYw5rCr8ObwoxcIiBmb3JtQ29udHJvbE5hbWU9XCJmZWF0dXJlSWRcIj5cbiAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZmVhdHVyZSBvZiBmZWF0dXJlcyRcIiBbdmFsdWVdPVwiZmVhdHVyZVwiPlxuICAgICAgICAgICAge3sgZmVhdHVyZSB9fVxuICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCI1MFwiPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoVcIiBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHN0ZXAgb2YgKHNjZW5hcmlvJCB8IGFzeW5jKS5zdGVwc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInNjZW5hcmlvLXN0ZXBzLWl0ZW1cIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBydWxlLXN0ZXAtbG9hZGVyIFtzdGVwXT1cInN0ZXBcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNjZW5hcmlvLXN0ZXBzLWFjdGlvblwiPlxuICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJkZWxldGVTdGVwRnJvbVNjZW5hcmlvKHN0ZXApXCI+XG4gICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiaW5jU2NlbmFyaW9TdGVwUHJpb3JpdHkoc3RlcClcIj5cbiAgICAgICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd191cDwvbWF0LWljb24+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImRlY1NjZW5hcmlvU3RlcFByaW9yaXR5KHN0ZXApXCI+XG4gICAgICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYXJyb3dfZG93bjwvbWF0LWljb24+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJzYXZlKClcIj5cbiAgICAgICAgw5jCq8OYwqjDmMKqXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5gLFxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwdnd9LnNjZW5hcmlvLXRvb2xiYXJ7aGVpZ2h0OjYwcHg7bWFyZ2luLWJvdHRvbToyMHB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIEd3dFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cdHVuc3Vic2NyaWJlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblx0c3RlcHMkOiBPYnNlcnZhYmxlPEd3dFN0ZXBbXT47XG5cdHN0ZXBzOiBHd3RTdGVwW107XG5cdHNjZW5hcmlvJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R3d0U2NlbmFyaW9Nb2RlbD4obmV3IEd3dFNjZW5hcmlvTW9kZWwoKSk7XG5cdHNjZW5hcmlvcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEd3dFNjZW5hcmlvTW9kZWxbXT4oW10pO1xuXHRzY2VuYXJpb0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xuXHRmZWF0dXJlcyQ6IHN0cmluZ1tdO1xuXHRAVmlld0NoaWxkcmVuKFN0ZXBMb2FkZXJEaXJlY3RpdmUpIHN0ZXBMb2FkZXJzOiBTdGVwTG9hZGVyRGlyZWN0aXZlW107XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSxcblx0XHRwcml2YXRlIHNjZW5hcmlvU2VydmljZTogU2NlbmFyaW9TZXJ2aWNlLFxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdEBJbmplY3QoTUFUX0JPVFRPTV9TSEVFVF9EQVRBKSBwcml2YXRlIGRhdGE6IGFueVxuXHQpIHtcblx0XHR0aGlzLl9jcmVhdGVfc2NlbmFyaW9fZm9ybV9ncm91cCgpO1xuXHRcdHRoaXMuX2luaXRfZmVhdHVyZXNfbGlzdCgpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zdGVwcyQgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJC5waXBlKG1hcChjb25maWcgPT4gY29uZmlnLnN0ZXBzKSwgdGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpKTtcblx0XHR0aGlzLnN0ZXBzJC5zdWJzY3JpYmUoc3RlcHMgPT4gKHRoaXMuc3RlcHMgPSBzdGVwcykpO1xuXHRcdHRoaXMuX2xvYWRfc2NlbmFyaW9fYW5kX21hcF9zY2VuYXJpb19zdGVwX3RvX3N0ZXBzX2NsYXNzKCk7XG5cdH1cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZS5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xuXHR9XG5cdHNhdmUoKSB7XG5cdFx0Y29uc3Qgc2NlbmFyaW8gPSB0aGlzLnNjZW5hcmlvJC5nZXRWYWx1ZSgpO1xuXHRcdHRoaXMuc3RlcExvYWRlcnMuZm9yRWFjaChzdGVwTG9hZGVyID0+IHtcblx0XHRcdHNjZW5hcmlvLnN0ZXBzLmZpbmQoc3RlcCA9PiBzdGVwLm5hbWUgPT0gc3RlcExvYWRlci5zdGVwLm5hbWUpLnBhcmFtcyA9IHN0ZXBMb2FkZXIucGFyYW1zO1xuXHRcdH0pO1xuXHRcdHNjZW5hcmlvLmZlYXR1cmVJZCA9IHRoaXMuc2NlbmFyaW9Gb3JtR3JvdXAudmFsdWUuZmVhdHVyZUlkO1xuXHRcdHNjZW5hcmlvLm5hbWUgPSB0aGlzLnNjZW5hcmlvRm9ybUdyb3VwLnZhbHVlLm5hbWU7XG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBzZXJ0U2NlbmFyaW9BY3Rpb24oc2NlbmFyaW8pKTtcblx0fVxuXHRhZGRTdGVwVG9TY2VuYXJpbyhzdGVwOiBHd3RTdGVwKSB7XG5cdFx0Y29uc3Qgc2NlbmFyaW8gPSB0aGlzLnNjZW5hcmlvJC5nZXRWYWx1ZSgpO1xuXHRcdHNjZW5hcmlvLnN0ZXBzLnB1c2goc3RlcCk7XG5cdFx0dGhpcy5zY2VuYXJpbyQubmV4dChzY2VuYXJpbyk7XG5cdH1cblx0ZGVsZXRlU3RlcEZyb21TY2VuYXJpbyhzdGVwOiBHd3RTdGVwKSB7XG5cdFx0Y29uc3Qgc2NlbmFyaW8gPSB0aGlzLnNjZW5hcmlvJC5nZXRWYWx1ZSgpO1xuXHRcdHNjZW5hcmlvLnN0ZXBzLnNwbGljZShzY2VuYXJpby5zdGVwcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLm5hbWUgPT0gc3RlcC5uYW1lKSwgMSk7XG5cdFx0dGhpcy5zY2VuYXJpbyQubmV4dChzY2VuYXJpbyk7XG5cdH1cblx0ZGVjU2NlbmFyaW9TdGVwUHJpb3JpdHkoc3RlcDogR3d0U3RlcCkge31cblx0aW5jU2NlbmFyaW9TdGVwUHJpb3JpdHkoc3RlcDogR3d0U3RlcCkge31cblx0YWRkTmV3U2NlbmFyaW8oKSB7XG5cdFx0Y29uc3Qgc2NlbmFyaW9zID0gdGhpcy5zY2VuYXJpb3MkLmdldFZhbHVlKCk7XG5cdFx0c2NlbmFyaW9zLnB1c2goXG5cdFx0XHRuZXcgR3d0U2NlbmFyaW9Nb2RlbCh7XG5cdFx0XHRcdGFuY2hvcklkOiB0aGlzLmRhdGEuYW5jaG9ySWRcblx0XHRcdH0pXG5cdFx0KTtcblx0XHR0aGlzLnNjZW5hcmlvcyQubmV4dChzY2VuYXJpb3MpO1xuXHR9XG5cdGFjdGl2ZVNjZW5hcmlvKHNjZW5hcmlvOiBHd3RTY2VuYXJpb01vZGVsKSB7XG5cdFx0c2NlbmFyaW8uc3RlcHMgPSBzY2VuYXJpby5zdGVwcy5tYXAoc2NlbmFyaW9TdGVwID0+IHtcblx0XHRcdGNvbnN0IHN0ZXAgPSB0aGlzLnN0ZXBzLmZpbmQoc3RlcCA9PiBzdGVwLmlkID09IHNjZW5hcmlvU3RlcC5pZCk7XG5cdFx0XHRzdGVwLnBhcmFtcyA9IHNjZW5hcmlvU3RlcC5wYXJhbXM7XG5cdFx0XHRyZXR1cm4gc3RlcDtcblx0XHR9KTtcblx0XHR0aGlzLnNjZW5hcmlvRm9ybUdyb3VwLnBhdGNoVmFsdWUoc2NlbmFyaW8pO1xuXHRcdHNjZW5hcmlvLmFuY2hvcklkID0gdGhpcy5kYXRhLmFuY2hvcklkO1xuXHRcdHRoaXMuc2NlbmFyaW8kLm5leHQoc2NlbmFyaW8pO1xuXHR9XG5cblx0X2xvYWRfc2NlbmFyaW9fYW5kX21hcF9zY2VuYXJpb19zdGVwX3RvX3N0ZXBzX2NsYXNzKCkge1xuXHRcdHRoaXMuc2NlbmFyaW9TZXJ2aWNlXG5cdFx0XHQuZ2V0QW5jaG9yU2NlbmFyaW9zKHRoaXMuZGF0YS5hbmNob3JJZClcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSlcblx0XHRcdC5zdWJzY3JpYmUoc2NlbmFyaW9zID0+IHtcblx0XHRcdFx0dGhpcy5zY2VuYXJpb3MkLm5leHQoc2NlbmFyaW9zKTtcblx0XHRcdFx0dGhpcy5hY3RpdmVTY2VuYXJpbyhzY2VuYXJpb3NbMF0gfHwgbmV3IEd3dFNjZW5hcmlvTW9kZWwoKSk7XG5cdFx0XHR9KTtcblx0fVxuXHRfY3JlYXRlX3NjZW5hcmlvX2Zvcm1fZ3JvdXAoKSB7XG5cdFx0dGhpcy5zY2VuYXJpb0Zvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xuXHRcdFx0ZmVhdHVyZUlkOiBuZXcgRm9ybUNvbnRyb2woKSxcblx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbCgpXG5cdFx0fSk7XG5cdH1cblx0X3Jlc2V0X3NjZW5hcmlvX2Zvcm1fZ3JvdXBfYW5kX3BhdGNoX3dpdGhfYWN0aXZlX3NjZW5hcmlvKCkge1xuXHRcdHRoaXMuc2NlbmFyaW9Gb3JtR3JvdXAucmVzZXQoKTtcblx0XHR0aGlzLnNjZW5hcmlvRm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy5zY2VuYXJpbyQuZ2V0VmFsdWUoKSk7XG5cdH1cblx0X2luaXRfZmVhdHVyZXNfbGlzdCgpIHtcblx0XHR0aGlzLmZlYXR1cmVzJCA9IFsgXCLDmcKFw5jCr8ObwozDmMKxw5vCjMOYwqogw5nChsOZwoXDmMKnw5vCjMOYwrQgw5jCqMOYwrHDmMKnw5jCs8OYwqfDmMKzIMOYwq/DmMKzw5jCqsOYwrHDmMKzw5vCjCDDmcKHw5jCp8Obwowgw5rCqcOYwqfDmMKxw5jCqMOYwrFcIiBdO1xuXHR9XG59XG4iLCJleHBvcnQgZW51bSBHd3RTdGVwVHlwZXMge1xyXG5cdFwiR2l2ZW5cIiA9IFwiR2l2ZW5cIixcclxuXHRcIldoZW5cIiA9IFwiV2hlblwiLFxyXG5cdFwiVGhlblwiID0gXCJUaGVuXCIsXHJcblx0XCJBbmRcIiA9IFwiQW5kXCIsXHJcblx0XCJCdXRcIiA9IFwiQnV0XCJcclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBPbkluaXQsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCB6aXAsIFN1YmplY3QsIGNvbWJpbmVMYXRlc3QgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBNYXRCb3R0b21TaGVldCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuXG5pbXBvcnQgeyBHd3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4uL2d3dC12aWV3L2d3dC12aWV3LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcnVsZS5yZWR1Y2Vyc1wiO1xuaW1wb3J0IHsgR3d0U2NlbmFyaW9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsXCI7XG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2NlbmFyaW8uc2VydmljZVwiO1xuaW1wb3J0IHsgR3d0U3RlcFR5cGVzIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc3RlcC10eXBlcy5lbnVtXCI7XG5pbXBvcnQgeyBHd3RTdGVwIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc3RlcC5tb2RlbFwiO1xuaW1wb3J0IHsgUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3J1bGUtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogXCJbcnVsZUFuY2hvcl1cIlxufSlcbmV4cG9ydCBjbGFzcyBSdWxlQW5jaG9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXHR1bnN1YnNjcmliZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cdEBJbnB1dChcInJ1bGVBbmNob3JcIikgYW5jaG9ySWQ7XG5cdHN0ZXBzOiBHd3RTdGVwW107XG5cdGFjdGl2ZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cdGFjdGl2ZTogYm9vbGVhbjtcblx0YnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcblx0YW5jaG9yU2NlbmFyaW9zJDogT2JzZXJ2YWJsZTxHd3RTY2VuYXJpb01vZGVsW10+O1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHNjZW5hcmlvU2VydmljZTogU2NlbmFyaW9TZXJ2aWNlLFxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcblx0XHRwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuXHRcdHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRwcml2YXRlIGJvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldFxuXHQpIHtcblx0XHR0aGlzLmFjdGl2ZSQgPSB0aGlzLnN0b3JlLnNlbGVjdChzID0+IHMucnVsZS5ydWxlQW5jaG9ycy5hY3RpdmUpLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpKTtcblx0XHR0aGlzLmFjdGl2ZSQuc3Vic2NyaWJlKGFjdGl2ZSA9PiAodGhpcy5hY3RpdmUgPSBhY3RpdmUpKTtcblx0XHR0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5ncy1ydWxlLWFuY2hvclwiKTtcblx0XHR0aGlzLnN0ZXBzID0gdGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS5zdGVwcztcblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIpXG5cdG9uTW91c2VFbnRlcigpIHtcblx0XHRpZiAoIXRoaXMuYWN0aXZlKSByZXR1cm47XG5cdFx0dGhpcy5zaG93QW5jaG9yKCk7XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKFwibW91c2VsZWF2ZVwiKVxuXHRvbk1vdXNlTGVhdmUoKSB7XG5cdFx0aWYgKCF0aGlzLmFjdGl2ZSkgcmV0dXJuO1xuXHRcdHRoaXMuaGlkZUFuY2hvcigpO1xuXHR9XG5cblx0cHJpdmF0ZSBzaG93QW5jaG9yKCkge1xuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2hvdy1hbmNob3JcIik7XG5cdH1cblx0cHJpdmF0ZSBoaWRlQW5jaG9yKCkge1xuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1hbmNob3JcIik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHQvLyBUT0RPOiByZW1vdmVcblx0XHQvLyB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTaG93QW5jaG9yc0FjdGlvbigpKTtcblxuXHRcdHRoaXMuYW5jaG9yU2NlbmFyaW9zJCA9IHRoaXMuc2NlbmFyaW9TZXJ2aWNlXG5cdFx0XHQuZ2V0QW5jaG9yU2NlbmFyaW9zKHRoaXMuYW5jaG9ySWQpIC8vVE9ETzogcmVwbGFjZSBzZXJ2aWNlIGNhbGwgd2l0aCBuZ3J4IGFjdGlvblxuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpLCBmaWx0ZXIoc2NlbmFyaW8gPT4gc2NlbmFyaW8gIT0gdW5kZWZpbmVkKSk7XG5cdFx0dGhpcy5hY3RpdmUkLnN1YnNjcmliZShhY3RpdmUgPT4ge1xuXHRcdFx0aWYgKGFjdGl2ZSkgdGhpcy5fYWN0aXZhdGVfYW5jaG9yKCk7XG5cdFx0XHRlbHNlIHRoaXMuX2RlYWN0aXZhdGVfYW5jaG9yKCk7XG5cdFx0fSk7XG5cdFx0dGhpcy5hbmNob3JTY2VuYXJpb3MkLnN1YnNjcmliZShzY2VuYXJpb3MgPT4ge1xuXHRcdFx0c2NlbmFyaW9zLmZvckVhY2goc2NlbmFyaW8gPT4ge1xuXHRcdFx0XHRzY2VuYXJpby5zdGVwcyA9IHNjZW5hcmlvLnN0ZXBzLm1hcChzY2VuYXJpb1N0ZXAgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHN0ZXAgPSB0aGlzLnN0ZXBzLmZpbmQoc3RlcCA9PiBzdGVwLmlkID09IHNjZW5hcmlvU3RlcC5pZCk7XG5cdFx0XHRcdFx0c3RlcC5wYXJhbXMgPSBzY2VuYXJpb1N0ZXAucGFyYW1zO1xuXHRcdFx0XHRcdHJldHVybiBzdGVwO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLl9kb19zY2VuYXJpbyhzY2VuYXJpbyk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVuc3Vic2NyaWJlLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XG5cdH1cblx0X2FjdGl2YXRlX2FuY2hvcigpIHtcblx0XHR0aGlzLl9jcmVhdGVfYW5jaG9yKCk7XG5cdFx0dGhpcy5fc2V0X2FjdGl2ZV9jbGFzc190b19ob3N0KCk7XG5cdH1cblx0X2RlYWN0aXZhdGVfYW5jaG9yKCkge1xuXHRcdHRoaXMuX3JlbW92ZV9hbmNob3IoKTtcblx0XHR0aGlzLl9yZW1vdmVfYWN0aXZlX2NsYXNzX3RvX2hvc3QoKTtcblx0fVxuXHRfc2V0X2FjdGl2ZV9jbGFzc190b19ob3N0KCkge1xuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYW5jaG9yLWFjdGl2ZVwiKTtcblx0fVxuXHRfcmVtb3ZlX2FjdGl2ZV9jbGFzc190b19ob3N0KCkge1xuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYW5jaG9yLWFjdGl2ZVwiKTtcblx0fVxuXHRfY3JlYXRlX2FuY2hvcigpIHtcblx0XHR0aGlzLmJ1dHRvbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHR0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmdzLXJ1bGUtYW5jaG9yLWJ1dHRvblwiLCBcIm1hdC1pY29uLWJ1dHRvblwiKTtcblx0XHR0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJtYXQtaWNvbi1idXR0b25cIiwgXCJcIik7XG5cdFx0dGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdHRoaXMuYm90dG9tU2hlZXQub3BlbihHd3RWaWV3Q29tcG9uZW50LCB7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRhbmNob3JJZDogdGhpcy5hbmNob3JJZFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRwYW5lbENsYXNzOiBcIm1hZ2VudGEtdGhlbWVcIlxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0Y29uc3QgbWF0aWNvbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudChcIm1hdC1pY29uXCIpO1xuXHRcdG1hdGljb24uY2xhc3NMaXN0LmFkZChcIm1hdC1pY29uXCIsIFwibWF0ZXJpYWwtaWNvbnNcIik7XG5cdFx0Y29uc3QgaWNvbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dChcInNldHRpbmdzXCIpO1xuXHRcdHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQobWF0aWNvbiwgaWNvbik7XG5cdFx0dGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbiwgbWF0aWNvbik7XG5cdFx0dGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYnV0dG9uKTtcblx0fVxuXHRfcmVtb3ZlX2FuY2hvcigpIHtcblx0XHRpZiAoIXRoaXMuYnV0dG9uKSByZXR1cm47XG5cdFx0dGhpcy5idXR0b24ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmJ1dHRvbik7XG5cdH1cblx0X2RvX3NjZW5hcmlvKHNjZW5hcmlvOiBHd3RTY2VuYXJpb01vZGVsKSB7XG5cdFx0Y29uc3QgZ2l2ZW5TdGVwSW50ZXJwcmV0b3JzID0gc2NlbmFyaW8uc3RlcHNcblx0XHRcdC5maWx0ZXIoc3RlcCA9PiBzdGVwLnR5cGUgPT0gR3d0U3RlcFR5cGVzLkdpdmVuKVxuXHRcdFx0Lm1hcChzdGVwID0+IHN0ZXAuaW50ZXJwZXJhdG9yKHN0ZXAucGFyYW1zKSk7XG5cblx0XHRjb21iaW5lTGF0ZXN0KGdpdmVuU3RlcEludGVycHJldG9ycylcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSksXG5cdFx0XHRcdG1hcCgodmFsdWVzOiBib29sZWFuW10pID0+IHZhbHVlcy5ldmVyeSh2YWx1ZSA9PiB2YWx1ZSA9PT0gdHJ1ZSkpLFxuXHRcdFx0XHRzd2l0Y2hNYXAoZ2l2ZW5SZXN1bHQgPT4ge1xuXHRcdFx0XHRcdGRlYnVnZ2VyO1xuXHRcdFx0XHRcdGlmIChnaXZlblJlc3VsdCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgdGhlblN0ZXBJbnRlcnByZXRvcnMgPSBzY2VuYXJpby5zdGVwc1xuXHRcdFx0XHRcdFx0XHQuZmlsdGVyKHN0ZXAgPT4gc3RlcC50eXBlID09IEd3dFN0ZXBUeXBlcy5UaGVuKVxuXHRcdFx0XHRcdFx0XHQubWFwKHN0ZXAgPT4gc3RlcC5pbnRlcnBlcmF0b3Ioc3RlcC5wYXJhbXMsIHRoaXMuZWwpKTtcblx0XHRcdFx0XHRcdHJldHVybiBjb21iaW5lTGF0ZXN0XG5cdFx0XHRcdFx0XHRcdC5hcHBseShudWxsLCB0aGVuU3RlcEludGVycHJldG9ycylcblx0XHRcdFx0XHRcdFx0LnBpcGUobWFwKCh2YWx1ZXM6IGJvb2xlYW5bXSkgPT4gdmFsdWVzLmV2ZXJ5KHZhbHVlID0+IHZhbHVlID09PSB0cnVlKSkpO1xuXHRcdFx0XHRcdH0gZWxzZSByZXR1cm4gb2YoZmFsc2UpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7fSk7XG5cdH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcywgU2NlbmFyaW9zTGlzdFN0YXJ0QWN0aW9uLCBTY2VuYXJpb0ZlY2hlZEFjdGlvbiB9IGZyb20gXCIuL3NjZW5hcmlvLWRiLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjZW5hcmlvLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvc0RiRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHNlcnZpY2U6IFNjZW5hcmlvU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RWRpdFByb2ZpbGVSZXF1ZXN0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUKVxyXG5cdFx0LnBpcGUobWFwKCgpID0+IG5ldyBTY2VuYXJpb3NMaXN0U3RhcnRBY3Rpb24oKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnRTY2VuYXJpbyQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5VUFNFUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKChhY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChzY2VuYXJpbykgPT4gdGhpcy5zZXJ2aWNlLnVwc2VydChzY2VuYXJpbykpLFxyXG5cdFx0XHRtYXAoKHNjZW5hcmlvKSA9PiBuZXcgU2NlbmFyaW9GZWNoZWRBY3Rpb24oc2NlbmFyaW8pKVxyXG5cdFx0KTtcclxuXHJcblx0Ly8gQEVmZmVjdCgpXHJcblx0Ly8gR2V0U2NlbmFyaW8kID0gdGhpcy5hY3Rpb25zJFxyXG5cdC8vIFx0Lm9mVHlwZShTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuR0VUX1NDRU5BUklPKVxyXG5cdC8vIFx0LnBpcGUoXHJcblx0Ly8gXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdC8vIFx0XHRzd2l0Y2hNYXAoaWQgPT4gdGhpcy5zZXJ2aWNlLmdldChpZCkpLFxyXG5cdC8vIFx0XHRtYXAocnVsZSA9PiBuZXcgU2NlbmFyaW9GZWNoZWRBY3Rpb24ocnVsZSkpXHJcblx0Ly8gXHQpO1xyXG5cclxuXHQvLyBARWZmZWN0KClcclxuXHQvLyBnZXRfcnVsZXNfbGlzdCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0Ly8gXHQub2ZUeXBlKFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVF9TVEFSVClcclxuXHQvLyBcdC5waXBlKFxyXG5cdC8vIFx0XHRzd2l0Y2hNYXAoKGRhdGE6IGFueSkgPT4gdGhpcy5zZXJ2aWNlLmdldExpc3QoKSksXHJcblx0Ly8gXHRcdG1hcChyZXMgPT4gbmV3IFNjZW5hcmlvc0xpc3RTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdC8vIFx0XHRjYXRjaEVycm9yKCgpID0+IE9ic2VydmFibGUub2YobmV3IFNjZW5hcmlvc0xpc3RGYWlsZWRBY3Rpb24oKSkpXHJcblx0Ly8gXHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVzTGlzdEFjdGlvblR5cGVzLCBSdWxlc0xpc3RTdGFydEFjdGlvbiB9IGZyb20gXCIuL3J1bGUtZGIuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUnVsZXNMaXN0RWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+KSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRFZGl0UHJvZmlsZVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVCkubWFwKCgpID0+IG5ldyBSdWxlc0xpc3RTdGFydEFjdGlvbigpKTtcclxuXHJcblx0Ly8gQEVmZmVjdCgpXHJcblx0Ly8gR2V0UnVsZSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0Ly8gXHQub2ZUeXBlKFJ1bGVzTGlzdEFjdGlvblR5cGVzLkdFVF9SVUxFKVxyXG5cdC8vIFx0LnBpcGUoXHJcblx0Ly8gXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdC8vIFx0XHRzd2l0Y2hNYXAoaWQgPT4gdGhpcy5zZXJ2aWNlLmdldChpZCkpLFxyXG5cdC8vIFx0XHRtYXAocnVsZSA9PiBuZXcgUnVsZUZlY2hlZEFjdGlvbihydWxlKSlcclxuXHQvLyBcdCk7XHJcblxyXG5cdC8vIEBFZmZlY3QoKVxyXG5cdC8vIGdldF9ydWxlc19saXN0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHQvLyBcdC5vZlR5cGUoUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9TVEFSVClcclxuXHQvLyBcdC5waXBlKFxyXG5cdC8vIFx0XHRzd2l0Y2hNYXAoKGRhdGE6IGFueSkgPT4gdGhpcy5zZXJ2aWNlLmdldExpc3QoKSksXHJcblx0Ly8gXHRcdG1hcChyZXMgPT4gbmV3IFJ1bGVzTGlzdFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0Ly8gXHRcdGNhdGNoRXJyb3IoKCkgPT4gT2JzZXJ2YWJsZS5vZihuZXcgUnVsZXNMaXN0RmFpbGVkQWN0aW9uKCkpKVxyXG5cdC8vIFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHsgZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIjtcblxuaW1wb3J0IHsgU2hvd0FuY2hvcnNBY3Rpb24sIEhpZGVBbmNob3JzQWN0aW9uIH0gZnJvbSBcIi4uL3J1bGUtYW5jaG9yL3J1bGUtYW5jaG9yLmFjdGlvbnNcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImd3dC1tb2RlLWJ1dHRvblwiLFxuXHR0ZW1wbGF0ZTogYCAgICA8YnV0dG9uICpuZ0lmPVwiIShoYXZlUGVybWlzc2lvbiQgfCBhc3luYylcIiBjbGFzcz1cImJ0blwiIG1hdC1taW5pLWZhYiB0eXBlPVwiYnV0dG9uXCIgcm91dGVyTGluaz1cImF1dGgvZnJvbnRlbmQvc2lnbmluXCIgZnhGbGV4PVwibm9ncm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cbiAgICAgIDxtYXQtaWNvbj5maW5nZXJwcmludDwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG5cbiAgICA8YnV0dG9uICpuZ0lmPVwiaGF2ZVBlcm1pc3Npb24kIHwgYXN5bmNcIiBjbGFzcz1cImJ0blwiIG1hdC1taW5pLWZhYiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInRvZ2dsZUFuY2hvcnMoKVwiIGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XG4gICAgICA8bWF0LWljb24+c2V0dGluZ3M8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPmAsXG5cdHN0eWxlczogW2AuYnRue3Bvc2l0aW9uOmZpeGVkO2JvdHRvbToyNXB4O3JpZ2h0OjI1cHg7ei1pbmRleDozfWBdXG59KVxuZXhwb3J0IGNsYXNzIEd3dE1vZGVCdXR0b25Db21wb25lbnQge1xuXHRhbmNob3JzTW9kZTogYm9vbGVhbjtcblx0aGF2ZVBlcm1pc3Npb24kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XG5cdFx0dGhpcy5hbmNob3JzTW9kZSA9IGZhbHNlO1xuXHRcdHRoaXMuaGF2ZVBlcm1pc3Npb24kID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlKTtcblx0fVxuXG5cdHRvZ2dsZUFuY2hvcnMoKSB7XG5cdFx0aWYgKHRoaXMuYW5jaG9yc01vZGUgPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTaG93QW5jaG9yc0FjdGlvbigpKTtcblx0XHRcdHRoaXMuYW5jaG9yc01vZGUgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBIaWRlQW5jaG9yc0FjdGlvbigpKTtcblx0XHRcdHRoaXMuYW5jaG9yc01vZGUgPSBmYWxzZTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL2ludGVybmFsL29ic2VydmFibGUvb2ZcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3J1bGUtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ydWxlLnJlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSdWxlU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHt9XHJcblxyXG5cdC8vIGFkZCgpOiBPYnNlcnZhYmxlPFRlc3RNb2RlbD4ge1xyXG5cdC8vIFx0Ly8gY29uc3QgbW9kZWwgPSBuZXcgQWRkUnVsZUFwaU1vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblx0Ly8gXHQvLyByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0Ly8gXHQvLyBcdC5maWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMuYWRkUnVsZSAhPSBcIlwiKVxyXG5cdC8vIFx0Ly8gXHQudGFrZSgxKVxyXG5cdC8vIFx0Ly8gXHQuc3dpdGNoTWFwKGNvbmZpZyA9PiB0aGlzLmh0dHAucG9zdChjb25maWcuZW5kcG9pbnRzLmFkZFJ1bGUsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpKVxyXG5cdC8vIFx0Ly8gXHQubWFwKChyZXNwb25zZTogQWRkUnVsZUFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpO1xyXG5cdC8vIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0VGFibGVNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vcnVsZS5jb25maWdcIjtcclxuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3J1bGUtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgUnVsZVJlZHVjZXJzIH0gZnJvbSBcIi4vcnVsZS5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBSdWxlQ29tcG9uZW50IH0gZnJvbSBcIi4vcnVsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUnVsZUFuY2hvckRpcmVjdGl2ZSB9IGZyb20gXCIuL3J1bGUtYW5jaG9yL3J1bGUtYW5jaG9yLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBHd3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vZ3d0LXZpZXcvZ3d0LXZpZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFN0ZXBMb2FkZXJEaXJlY3RpdmUgfSBmcm9tIFwiLi9zdGVwLWxvYWRlci9zdGVwLWxvYWRlci5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgU2NlbmFyaW9zRGJFZmZlY3RzIH0gZnJvbSBcIi4vZGIvc2NlbmFyaW8tZGIuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBSdWxlc0xpc3RFZmZlY3RzIH0gZnJvbSBcIi4vZGIvcnVsZS1kYi5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEd3dE1vZGVCdXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi9tb2RlLWJ1dHRvbi9tb2RlLWJ1dHRvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUnVsZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9ydWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvcnVsZS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvc2NlbmFyaW8uc2VydmljZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0XHRNYXRUYWJsZU1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbIFJ1bGVDb21wb25lbnQsIFJ1bGVBbmNob3JEaXJlY3RpdmUsIEd3dFZpZXdDb21wb25lbnQsIFN0ZXBMb2FkZXJEaXJlY3RpdmUsIEd3dE1vZGVCdXR0b25Db21wb25lbnQgXSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFsgR3d0Vmlld0NvbXBvbmVudCBdLFxyXG5cdGV4cG9ydHM6IFsgUnVsZUFuY2hvckRpcmVjdGl2ZSwgR3d0TW9kZUJ1dHRvbkNvbXBvbmVudCBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSdWxlTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBSdWxlTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUm9vdFJ1bGVNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB8fCB7fSB9LFxyXG5cdFx0XHRcdFJ1bGVTZXJ2aWNlLFxyXG5cdFx0XHRcdFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdFx0XHRTY2VuYXJpb1NlcnZpY2VcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0UnVsZU1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJydWxlXCIsIFJ1bGVSZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBSdWxlc0xpc3RFZmZlY3RzLCBTY2VuYXJpb3NEYkVmZmVjdHMgXSksXHJcblx0XHRSb3V0aW5nTW9kdWxlXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIFJ1bGVNb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdFJ1bGVNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImZyb21SdWxlQW5jaG9yLlJlZHVjZXIiLCJmcm9tUnVsZURiQW5jaG9yLnJlZHVjZXIiLCJmcm9tU2NlbmFyaW9EYkFuY2hvci5yZWR1Y2VyIiwiQmVoYXZpb3JTdWJqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBZ0JhLHFCQUFxQixHQUFxQjtJQUN0RCxTQUFTLEVBQUU7UUFDVixNQUFNLEVBQUUsbUJBQW1CO1FBQzNCLEdBQUcsRUFBRSw2Q0FBNkM7S0FDbEQ7SUFDRCxXQUFXLEVBQUUsRUFBRTtJQUNmLEdBQUcsRUFBRTtRQUNKLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGVBQWUsRUFBRSx1QkFBdUI7S0FDeEM7Q0FDRCxDQUFDO0FBQ0YscUJBQWEsbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQW1CLGtCQUFrQixDQUFDOzs7Ozs7QUMzQjNGO0lBU0M7S0FBZ0I7Ozs7SUFFaEIsZ0NBQVE7OztJQUFSLGVBQWE7O2dCQVRiLFNBQVMsU0FBQztvQkFDVixRQUFRLEVB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