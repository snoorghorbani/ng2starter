import { InjectionToken, Component, Injectable, Inject, Injector, Input, ViewContainerRef, ComponentFactoryResolver, ViewChild, Directive, ViewChildren, HostListener, ElementRef, Renderer2, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { __decorate, __metadata, __assign } from 'tslib';
import { Store, StoreModule } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { filter, map, startWith, share, takeUntil, switchMap } from 'rxjs/operators';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs/Rx';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
        frontend_server: "frontend_server/did/not/set"
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
            .post(this.config.env.frontend_server + this.config.endpoints.upsert, model.getRequsetBody())
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
            .get(this.config.env.frontend_server + stringTemplate(this.config.endpoints.get, { anchorId: anchorId }))
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
                    styles: [".btn{position:fixed;bottom:25px;left:25px;z-index:3}"]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXJ1bGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvcnVsZS5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvcnVsZS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvcnVsZS1yb3V0aW5nLm1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3J1bGUtYW5jaG9yL3J1bGUtYW5jaG9yLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvZGIvcnVsZS1kYi5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL2RiL3J1bGUtZGIucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9kYi9zY2VuYXJpby1kYi5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL2RiL3NjZW5hcmlvLWRiLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvcnVsZS5yZWR1Y2Vycy50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9zZXJ2aWNlcy9ydWxlLWNvbmZpZ3VyYXRpb24uc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3N0ZXAtbG9hZGVyL3N0ZXAtbG9hZGVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9zZXJ2aWNlcy9zY2VuYXJpby5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL2d3dC12aWV3L2d3dC12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9tb2RlbHMvZ3d0LXN0ZXAtdHlwZXMuZW51bS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5kaXJlY3RpdmUudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvZGIvc2NlbmFyaW8tZGIuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9kYi9ydWxlLWRiLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvbW9kZS1idXR0b24vbW9kZS1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3NlcnZpY2VzL3J1bGUuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9ydWxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHd3RTdGVwIH0gZnJvbSBcIi4vbW9kZWxzL2d3dC1zdGVwLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJ1bGVNb2R1bGVDb25maWcge1xyXG5cdGVuZHBvaW50cz86IHtcclxuXHRcdHVwc2VydD86IHN0cmluZztcclxuXHRcdGdldD86IHN0cmluZztcclxuXHR9O1xyXG5cdHN0ZXBDbGFzc2VzPzogVHlwZTxHd3RTdGVwPltdO1xyXG5cdHN0ZXBzPzogR3d0U3RlcFtdO1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuXHR9O1xyXG59XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IFJ1bGVNb2R1bGVDb25maWcgPSB7XHJcblx0ZW5kcG9pbnRzOiB7XHJcblx0XHR1cHNlcnQ6IFwiL2FwaS9nd3Qvc2NlbmFyaW9cIixcclxuXHRcdGdldDogXCIvYXBpL2d3dC9hbmNob3IvJHttb2RlbC5hbmNob3JJZH0vc2NlbmFyaW9zXCJcclxuXHR9LFxyXG5cdHN0ZXBDbGFzc2VzOiBbXSxcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlLFxyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBcImZyb250ZW5kX3NlcnZlci9kaWQvbm90L3NldFwiXHJcblx0fVxyXG59O1xyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxSdWxlTW9kdWxlQ29uZmlnPihcIlJ1bGVNb2R1bGVDb25maWdcIik7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImFwcC1ydWxlXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFJ1bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVDb21wb25lbnQgfSBmcm9tIFwiLi9ydWxlLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogXCJydWxlXCIsXHJcblx0XHRjb21wb25lbnQ6IFJ1bGVDb21wb25lbnRcclxuXHRcdC8vIGNoaWxkcmVuOiBbIHt9IF1cclxuXHR9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFJ1bGVBbmNob3JzQWN0aW9uVHlwZXMge1xyXG5cdFNIT1dfQU5DSE9SUyA9IFwiW1JVTEVdW0FOQ0hPUlNdIFNIT1dfQU5DSE9SU1wiLFxyXG5cdEhJREVfQU5DSE9SUyA9IFwiW1JVTEVdW0FOQ0hPUlNdIEhJREVfQU5DSE9SU1wiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaG93QW5jaG9yc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVBbmNob3JzQWN0aW9uVHlwZXMuU0hPV19BTkNIT1JTO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSGlkZUFuY2hvcnNBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlQW5jaG9yc0FjdGlvblR5cGVzLkhJREVfQU5DSE9SUztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUnVsZUFuY2hvcnNBY3Rpb24gPSBTaG93QW5jaG9yc0FjdGlvbiB8IEhpZGVBbmNob3JzQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBSdWxlQW5jaG9yc0FjdGlvbiwgUnVsZUFuY2hvcnNBY3Rpb25UeXBlcyB9IGZyb20gXCIuL3J1bGUtYW5jaG9yLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGFjdGl2ZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0YWN0aXZlOiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogUnVsZUFuY2hvcnNBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBSdWxlQW5jaG9yc0FjdGlvblR5cGVzLlNIT1dfQU5DSE9SUzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFjdGl2ZTogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGNhc2UgUnVsZUFuY2hvcnNBY3Rpb25UeXBlcy5ISURFX0FOQ0hPUlM6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhY3RpdmU6IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyNyZWdpb24gIHNlbGVjdG9yc1xyXG5leHBvcnQgY29uc3QgZ2V0QW5jaG9yc0FjdGl2aXR5U3RhdGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5hY3RpdmU7XHJcbi8vI2VuZHJlZ2lvblxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcnVsZS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gUnVsZXNMaXN0QWN0aW9uVHlwZXMge1xyXG5cdFJVTEVTX0xJU1QgPSBcIltSVUxFXVtEQl0gUlVMRVNfTElTVFwiLFxyXG5cdFJVTEVTX0xJU1RfU1RBUlQgPSBcIltSVUxFXVtEQl0gUlVMRVNfTElTVF9TVEFSVFwiLFxyXG5cdFJVTEVTX0xJU1RfU1VDQ0VFRCA9IFwiW1JVTEVdW0RCXSBSVUxFU19MSVNUX1NVQ0NFRURcIixcclxuXHRSVUxFU19MSVNUX0ZBSUxFRCA9IFwiW1JVTEVdW0RCXSBSVUxFU19MSVNUX0ZBSUxFRFwiLFxyXG5cdFJVTEVfVVBTRVJUID0gXCJbUlVMRV1bREJdIFJVTEVfVVBTRVJUXCIsXHJcblx0R0VUX1JVTEUgPSBcIltSVUxFXVtEQl0gR0VUX1JVTEVcIixcclxuXHRSVUxFX0ZFVENIRUQgPSBcIltSVUxFXVtEQl0gUlVMRV9GRVRDSEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJ1bGVzTGlzdEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1Q7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJ1bGVzTGlzdFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgUnVsZXNMaXN0U3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1RfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUnVsZU1vZGVsW10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJ1bGVzTGlzdEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1RfRkFJTEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRSdWxlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRV9VUFNFUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJ1bGVNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UnVsZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLkdFVF9SVUxFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJ1bGVGZWNoZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFX0ZFVENIRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJ1bGVNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUnVsZXNMaXN0QWN0aW9ucyA9XHJcblx0fCBSdWxlc0xpc3RBY3Rpb25cclxuXHR8IFJ1bGVzTGlzdFN0YXJ0QWN0aW9uXHJcblx0fCBSdWxlc0xpc3RTdWNjZWVkQWN0aW9uXHJcblx0fCBSdWxlc0xpc3RGYWlsZWRBY3Rpb25cclxuXHR8IFVwc2VydFJ1bGVBY3Rpb25cclxuXHR8IEdldFJ1bGVBY3Rpb25cclxuXHR8IFJ1bGVGZWNoZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcnVsZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBSdWxlc0xpc3RBY3Rpb25UeXBlcywgUnVsZXNMaXN0QWN0aW9ucyB9IGZyb20gXCIuL3J1bGUtZGIuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG5cdGRhdGE6IFJ1bGVNb2RlbFtdO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHN0YXR1czogXCJwcmlzdGluZVwiLFxyXG5cdGRhdGE6IFtdXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFJ1bGVzTGlzdEFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImRpcnR5XCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJwZW5kaW5nXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdFx0c3RhdHVzOiBcInN1Y2NlZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFX1VQU0VSVDoge1xyXG5cdFx0XHRjb25zdCBkYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0dmFyIGVudGl0eUlkeCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KGZvcm0gPT4gZm9ybS5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKTtcclxuXHRcdFx0aWYgKGVudGl0eUlkeCA+IC0xKSB7XHJcblx0XHRcdFx0ZGF0YVtlbnRpdHlJZHhdID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YVtlbnRpdHlJZHhdLCBhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGF0YS5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGFcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRV9GRVRDSEVEOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRpZiAoZW50aXR5SWR4ID4gLTEpIHtcclxuXHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBnZXRTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zdGF0dXM7XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR3d0U2NlbmFyaW9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMge1xyXG5cdFNDRU5BUklPU19MSVNUID0gXCJbR1dUXVtTQ0VOQVJJT11bREJdW0xJU1RdIFNDRU5BUklPU19MSVNUXCIsXHJcblx0U0NFTkFSSU9TX0xJU1RfU1RBUlQgPSBcIltTQ0VOQVJJT11bREJdIFNDRU5BUklPU19MSVNUX1NUQVJUXCIsXHJcblx0U0NFTkFSSU9TX0xJU1RfU1VDQ0VFRCA9IFwiW1NDRU5BUklPXVtEQl0gU0NFTkFSSU9TX0xJU1RfU1VDQ0VFRFwiLFxyXG5cdFNDRU5BUklPU19MSVNUX0ZBSUxFRCA9IFwiW1NDRU5BUklPXVtEQl0gU0NFTkFSSU9TX0xJU1RfRkFJTEVEXCIsXHJcblx0VVBTRVJUID0gXCJbR1dUXVtTQ0VOQVJJT11bREJdW1VQU0VSVF0gU0NFTkFSSU9fVVBTRVJUXCIsXHJcblx0R0VUX1NDRU5BUklPID0gXCJbU0NFTkFSSU9dW0RCXSBHRVRfU0NFTkFSSU9cIixcclxuXHRTQ0VOQVJJT19GRVRDSEVEID0gXCJbU0NFTkFSSU9dW0RCXSBTQ0VOQVJJT19GRVRDSEVEXCIsXHJcblx0Ly8vIG5ldyB2aXNpb25cclxuXHRVUERBVEVfREIgPSBcIltHV1RdW1NDRU5BUklPXVtEQl0gVVBEQVRFX0RCXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvc0xpc3RBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1Q7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvc0xpc3RTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVF9TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9zTGlzdFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3d0U2NlbmFyaW9Nb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb3NMaXN0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0U2NlbmFyaW9BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuVVBTRVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHd3RTY2VuYXJpb01vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRTY2VuYXJpb0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5HRVRfU0NFTkFSSU87XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9GZWNoZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9fRkVUQ0hFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3d0U2NlbmFyaW9Nb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBkYXRlRGJBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuVVBEQVRFX0RCO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHd3RTY2VuYXJpb01vZGVsW10pIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNjZW5hcmlvc0xpc3RBY3Rpb25zID1cclxuXHR8IFNjZW5hcmlvc0xpc3RBY3Rpb25cclxuXHR8IFNjZW5hcmlvc0xpc3RTdGFydEFjdGlvblxyXG5cdHwgU2NlbmFyaW9zTGlzdFN1Y2NlZWRBY3Rpb25cclxuXHR8IFNjZW5hcmlvc0xpc3RGYWlsZWRBY3Rpb25cclxuXHR8IFVwc2VydFNjZW5hcmlvQWN0aW9uXHJcblx0fCBHZXRTY2VuYXJpb0FjdGlvblxyXG5cdHwgU2NlbmFyaW9GZWNoZWRBY3Rpb25cclxuXHR8IFVwZGF0ZURiQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBHd3RTY2VuYXJpb01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWxcIjtcclxuaW1wb3J0IHsgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLCBTY2VuYXJpb3NMaXN0QWN0aW9ucyB9IGZyb20gXCIuL3NjZW5hcmlvLWRiLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxuXHRkYXRhOiBHd3RTY2VuYXJpb01vZGVsW107XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiBcInByaXN0aW5lXCIsXHJcblx0ZGF0YTogW11cclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogU2NlbmFyaW9zTGlzdEFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1Q6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZGlydHlcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwicGVuZGluZ1wiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVF9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdFx0c3RhdHVzOiBcInN1Y2NlZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5VUFNFUlQ6IHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdHZhciBlbnRpdHlJZHggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleChmb3JtID0+IGZvcm0uX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdGlmIChlbnRpdHlJZHggPiAtMSkge1xyXG5cdFx0XHRcdGRhdGFbZW50aXR5SWR4XSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGFbZW50aXR5SWR4XSwgYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRhdGEucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBkYXRhXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT19GRVRDSEVEOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRpZiAoZW50aXR5SWR4ID4gLTEpIHtcclxuXHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuVVBEQVRFX0RCOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHRjb25zdCBzY2VuYXJpb3MgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHRcdFx0c2NlbmFyaW9zLmZvckVhY2goc2NlbmFyaW8gPT4ge1xyXG5cdFx0XHRcdHZhciBlbnRpdHlJZHggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleChmb3JtID0+IGZvcm0uX2lkID09IHNjZW5hcmlvLl9pZCk7XHJcblx0XHRcdFx0aWYgKGVudGl0eUlkeCA+IC0xKSB7XHJcblx0XHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIHNjZW5hcmlvKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZGF0YS5wdXNoKHNjZW5hcmlvKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGFcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0U3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc3RhdHVzO1xyXG4iLCJpbXBvcnQgKiBhcyBmcm9tUnVsZUFuY2hvciBmcm9tIFwiLi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIGZyb21SdWxlRGJBbmNob3IgZnJvbSBcIi4vZGIvcnVsZS1kYi5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIGZyb21TY2VuYXJpb0RiQW5jaG9yIGZyb20gXCIuL2RiL3NjZW5hcmlvLWRiLnJlZHVjZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUnVsZVN0YXRlIHtcclxuXHRydWxlQW5jaG9yczogZnJvbVJ1bGVBbmNob3IuU3RhdGU7XHJcblx0cnVsZXM6IGZyb21SdWxlRGJBbmNob3IuU3RhdGU7XHJcblx0c2NlbmFyaW9zOiBmcm9tU2NlbmFyaW9EYkFuY2hvci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFJ1bGVSZWR1Y2VycyA9IHtcclxuXHRydWxlQW5jaG9yczogZnJvbVJ1bGVBbmNob3IuUmVkdWNlcixcclxuXHRydWxlczogZnJvbVJ1bGVEYkFuY2hvci5yZWR1Y2VyLFxyXG5cdHNjZW5hcmlvczogZnJvbVNjZW5hcmlvRGJBbmNob3IucmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XHJcblx0XCJydWxlXCI6IFJ1bGVTdGF0ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG4vLyBpbXBvcnQgeyBnZXRSdWxlTW9kdWxlQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcbmltcG9ydCB7IFJ1bGVNb2R1bGVDb25maWcgfSBmcm9tIFwiLi4vcnVsZS5jb25maWdcIjtcclxuaW1wb3J0IHsgTU9EVUxFX0NPTkZJR19UT0tFTiwgTU9EVUxFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSBcIi4uL3J1bGUuY29uZmlnXCI7XHJcbmltcG9ydCB7IFJ1bGVTdGF0ZSB9IGZyb20gXCIuLi9ydWxlLnJlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogUnVsZU1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoTU9EVUxFX0RFRkFVTFRfQ09ORklHKTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZ0ZpbGU6IFJ1bGVNb2R1bGVDb25maWcsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxSdWxlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcclxuXHQpIHtcclxuXHRcdC8vIGluc3RhbnRpYXRlIHN0ZXBzIGFuZCB1c2VkIHRoZW1cclxuXHRcdGNvbmZpZ0ZpbGUuc3RlcHMgPSBjb25maWdGaWxlLnN0ZXBDbGFzc2VzLm1hcChzdGVwID0+IG5ldyBzdGVwKHRoaXMuaW5qZWN0b3IpKTtcclxuXHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cclxuXHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblxyXG5cdFx0Ly8gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0UnVsZU1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKHVzZXJDb25maWcgPT4ge1xyXG5cdFx0Ly8gXHRpZiAoIXVzZXJDb25maWcpIHJldHVybjtcclxuXHRcdC8vIFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCB1c2VyQ29uZmlnLkNvbmZpZyk7XHJcblx0XHQvLyBcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHQvLyB9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgR3d0U3RlcCB9IGZyb20gXCIuL2d3dC1zdGVwLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3d0U2NlbmFyaW9Nb2RlbCB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdGFuY2hvcklkOiBzdHJpbmc7XHJcblx0ZmVhdHVyZUlkOiBzdHJpbmc7XHJcblx0c3RlcHM6IEd3dFN0ZXBbXTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHtcclxuXHRcdFx0X2lkLFxyXG5cdFx0XHRhbmNob3JJZCxcclxuXHRcdFx0c3RlcHMsXHJcblx0XHRcdG5hbWUsXHJcblx0XHRcdGZlYXR1cmVJZFxyXG5cdFx0fTogeyBfaWQ/OiBzdHJpbmc7IGFuY2hvcklkPzogc3RyaW5nOyBzdGVwcz86IEd3dFN0ZXBbXTsgbmFtZT86IHN0cmluZzsgZmVhdHVyZUlkPzogc3RyaW5nIH0gPSB7fVxyXG5cdCkge1xyXG5cdFx0dGhpcy5faWQgPSBfaWQgfHwgXCJcIjtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWUgfHwgXCJcIjtcclxuXHRcdHRoaXMuZmVhdHVyZUlkID0gZmVhdHVyZUlkIHx8IFwiXCI7XHJcblx0XHR0aGlzLl9pZCA9IF9pZCB8fCBcIlwiO1xyXG5cdFx0dGhpcy5hbmNob3JJZCA9IGFuY2hvcklkIHx8IFwiXCI7XHJcblx0XHR0aGlzLnN0ZXBzID0gc3RlcHMgfHwgW107XHJcblx0fVxyXG5cdGdldFJlcXVzZXRCb2R5KCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0X2lkOiB0aGlzLl9pZCxcclxuXHRcdFx0YW5jaG9ySWQ6IHRoaXMuYW5jaG9ySWQsXHJcblx0XHRcdG5hbWU6IHRoaXMubmFtZSxcclxuXHRcdFx0ZmVhdHVyZUlkOiB0aGlzLmZlYXR1cmVJZCxcclxuXHRcdFx0c3RlcHM6IHRoaXMuc3RlcHMubWFwKChzdGVwKSA9PiAoe1xyXG5cdFx0XHRcdGlkOiBzdGVwLmlkLFxyXG5cdFx0XHRcdG9wcG9zaXRlOiBzdGVwLm9wcG9zaXRlLFxyXG5cdFx0XHRcdHBhcmFtczogc3RlcC5wYXJhbXNcclxuXHRcdFx0fSkpXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0SW5wdXQsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Q29tcG9uZW50UmVmLFxyXG5cdFZpZXdDaGlsZCxcclxuXHREaXJlY3RpdmUsXHJcblx0T25DaGFuZ2VzXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEd3dFN0ZXAgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zdGVwLm1vZGVsXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogXCJbcnVsZS1zdGVwLWxvYWRlcl1cIlxyXG5cdC8vIHRlbXBsYXRlVXJsOiBcIi4vc3RlcC1sb2FkZXIuY29tcG9uZW50Lmh0bWxcIixcclxuXHQvLyBzdHlsZVVybHM6IFsgXCIuL3N0ZXAtbG9hZGVyLmNvbXBvbmVudC5jc3NcIiBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGVwTG9hZGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG5cdEBJbnB1dCgpIHN0ZXA6IEd3dFN0ZXA8YW55PjtcclxuXHRAVmlld0NoaWxkKFwiY29udGFpbmVyXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxyXG5cdC8vIFRPRE86IGZpeCBnZW5lcmljIHR5cGVcclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cdGdldCBwYXJhbXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wb25lbnQuaW5zdGFuY2UucGFyYW1zIHx8IHt9O1xyXG5cdH1cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxyXG5cclxuXHRuZ09uQ2hhbmdlcygpIHtcclxuXHRcdGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG5cdFx0XHQvLyB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5jb25maWcgPSB0aGlzLmNvbmZpZztcclxuXHRcdFx0Ly8gdGhpcy5jb21wb25lbnQuaW5zdGFuY2UuZ3JvdXAgPSB0aGlzLmdyb3VwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRpZiAoIXRoaXMuc3RlcC5zdGVwQ29tcG9uZW50KSB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoKS5cclxuXHRcdCAgU3VwcG9ydGVkIHR5cGVzOiBgXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHQvLyBUT0RPOiBmaXggZ2VuZXJpYyB0eXBlXHJcblx0XHRjb25zdCBjb21wb25lbnQgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PGFueT4odGhpcy5zdGVwLnN0ZXBDb21wb25lbnQpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLnBhcmFtcyA9IHRoaXMuc3RlcC5wYXJhbXM7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IGZpbHRlciwgbWFwLCBzdGFydFdpdGgsIHNoYXJlIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBzdHJpbmdUZW1wbGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vcnVsZS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3d0U2NlbmFyaW9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsXCI7XHJcbmltcG9ydCB7IFJ1bGVNb2R1bGVDb25maWcgfSBmcm9tIFwiLi4vcnVsZS5jb25maWdcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcnVsZS5yZWR1Y2Vyc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9TZXJ2aWNlIHtcclxuXHRjb25maWckOiBPYnNlcnZhYmxlPFJ1bGVNb2R1bGVDb25maWc+O1xyXG5cdGNvbmZpZzogUnVsZU1vZHVsZUNvbmZpZztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLmNvbmZpZyQgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJDtcclxuXHRcdHRoaXMuY29uZmlnJC5zdWJzY3JpYmUoY29uZmlnID0+ICh0aGlzLmNvbmZpZyA9IGNvbmZpZykpO1xyXG5cdH1cclxuXHJcblx0dXBzZXJ0KHNjZW5hcmlvOiBHd3RTY2VuYXJpb01vZGVsKTogT2JzZXJ2YWJsZTxHd3RTY2VuYXJpb01vZGVsPiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBHd3RTY2VuYXJpb01vZGVsKHNjZW5hcmlvKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnBvc3QodGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIHRoaXMuY29uZmlnLmVuZHBvaW50cy51cHNlcnQsIG1vZGVsLmdldFJlcXVzZXRCb2R5KCkpXHJcblx0XHRcdC5waXBlKG1hcChyZXNwb25zZSA9PiByZXNwb25zZSBhcyBHd3RTY2VuYXJpb01vZGVsKSwgc2hhcmUoKSk7XHJcblx0fVxyXG5cdGdldEFuY2hvclNjZW5hcmlvcyhhbmNob3JJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxHd3RTY2VuYXJpb01vZGVsW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldDxhbnk+KHRoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBzdHJpbmdUZW1wbGF0ZSh0aGlzLmNvbmZpZy5lbmRwb2ludHMuZ2V0LCB7IGFuY2hvcklkIH0pKVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLlJlc3VsdCBhcyBHd3RTY2VuYXJpb01vZGVsW10pO1xyXG5cdH1cclxuXHRzZWxlY3RTY2VuYXJpb0J5SWQoX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEd3dFNjZW5hcmlvTW9kZWw+IHtcclxuXHRcdGNvbnN0IHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEd3dFNjZW5hcmlvTW9kZWw+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUucnVsZS5zY2VuYXJpb3MuZGF0YSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0ZmlsdGVyKHNjZW5hcmlvcyA9PiBzY2VuYXJpb3MgIT0gbnVsbCksXHJcblx0XHRcdFx0bWFwKHNjZW5hcmlvcyA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gc2NlbmFyaW9zLmZpbmQoc2NlbmFyaW8gPT4gc2NlbmFyaW8uX2lkID09IF9pZCk7XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0ZmlsdGVyKHNjZW5hcmlvID0+IHNjZW5hcmlvICE9IHVuZGVmaW5lZClcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKHNjZW5hcmlvID0+IHtcclxuXHRcdFx0XHRzdWJqZWN0Lm5leHQoc2NlbmFyaW8pO1xyXG5cdFx0XHR9KTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxuXHRzZWxlY3RBbmNob3JTY2VuYXJpb3MoYW5jaG9ySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3d0U2NlbmFyaW9Nb2RlbFtdPiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHd3RTY2VuYXJpb01vZGVsW10+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUucnVsZS5zY2VuYXJpb3MuZGF0YSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0c3RhcnRXaXRoKFtdKSxcclxuXHRcdFx0XHRmaWx0ZXIoc2NlbmFyaW9zID0+IHNjZW5hcmlvcyAhPSBudWxsKSxcclxuXHRcdFx0XHRtYXAoc2NlbmFyaW9zID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBzY2VuYXJpb3MuZmlsdGVyKHNjZW5hcmlvID0+IHNjZW5hcmlvLl9pZCA9PSBhbmNob3JJZCk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKHNjZW5hcmlvcyA9PiB7XHJcblx0XHRcdFx0c3ViamVjdC5uZXh0KHNjZW5hcmlvcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIFR5cGUsIEluamVjdG9yLCBWaWV3Q2hpbGRyZW4sIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IG1hcCwgZmlsdGVyLCB3aXRoTGF0ZXN0RnJvbSwgdGFrZVVudGlsIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IE1BVF9CT1RUT01fU0hFRVRfREFUQSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcnVsZS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3d0U3RlcCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXN0ZXAubW9kZWxcIjtcclxuaW1wb3J0IHsgR3d0U2NlbmFyaW9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3J1bGUucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgVXBzZXJ0U2NlbmFyaW9BY3Rpb24gfSBmcm9tIFwiLi4vZGIvc2NlbmFyaW8tZGIuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBTdGVwTG9hZGVyRGlyZWN0aXZlIH0gZnJvbSBcIi4uL3N0ZXAtbG9hZGVyL3N0ZXAtbG9hZGVyLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2NlbmFyaW8uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLWd3dC12aWV3XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbjxkaXYgZnhGbGV4PVwiNDAwcHhcIiBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0R2FwPVwiMTVweFwiPlxyXG4gIDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOZwoHDm8KMw5nChMOYwqrDmMKxXCI+XHJcbiAgICAgIDxtYXQtaWNvbiBtYXRTdWZmaXg+c2VhcmNoPC9tYXQtaWNvbj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8bWF0LWNoZWNrYm94IGZ4RmxleCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+w5nCgcOYwrHDmMK2IMOawqnDmcKGw5vCjMOYwq88L21hdC1jaGVja2JveD5cclxuICAgIDxtYXQtY2hlY2tib3ggZnhGbGV4IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj7DmcKHw5nChsOawq/DmMKnw5nChcObwowgw5rCqcOZwoc8L21hdC1jaGVja2JveD5cclxuICAgIDxtYXQtY2hlY2tib3ggZnhGbGV4IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj7DmMKiw5nChsOawq/DmMKnw5nChzwvbWF0LWNoZWNrYm94PlxyXG4gIDwvZGl2PlxyXG4gICAgPG1hdC1jYXJkIGNsYXNzPVwic3RlcHMtaXRlbVwiICpuZ0Zvcj1cImxldCBzdGVwIG9mIHN0ZXBzJCB8IGFzeW5jXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwic3RlcC10ZXh0XCI+XHJcbiAgICAgICAge3tzdGVwLmRlc2NyaXB0aW9ufX1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImFkZC1idXR0b25cIiAoY2xpY2spPVwiYWRkU3RlcFRvU2NlbmFyaW8oc3RlcClcIj5cclxuICAgICAgICA8bWF0LWljb24+YXJyb3dfYmFja19pb3M8L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBmeEZsZXg9XCI3MDBweFwiPlxyXG4gIDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJzY2VuYXJpby10b29sYmFyXCI+XHJcbiAgICA8ZGl2IGZ4RmxleD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmaXRcIj5cclxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCLDmcKIw5nCkMObwozDmsKYw5rCr8ObwoxcIiAoc2VsZWN0aW9uQ2hhbmdlKT1cImFjdGl2ZVNjZW5hcmlvKCRldmVudC52YWx1ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHNjZW5hcmlvIG9mIHNjZW5hcmlvcyQgfCBhc3luY1wiIFt2YWx1ZV09XCJzY2VuYXJpb1wiPlxyXG4gICAgICAgICAgICAgICAge3sgc2NlbmFyaW8uZmVhdHVyZUlkIH19IDoge3sgc2NlbmFyaW8ubmFtZSB9fVxyXG4gICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkTmV3U2NlbmFyaW8oKVwiPlxyXG4gICAgICAgw5jCq8OYwqjDmMKqIMOYwrPDmcKGw5jCp8OYwrHDm8KMw5nCiCDDmMKsw5jCr8ObwozDmMKvXHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRHYXA9XCIxNXB4XCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCIyNXB4XCIgW2Zvcm1Hcm91cF09XCJzY2VuYXJpb0Zvcm1Hcm91cFwiPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiNTBcIj5cclxuICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIsOZwojDm8KMw5rCmMOawq/Dm8KMXCIgZm9ybUNvbnRyb2xOYW1lPVwiZmVhdHVyZUlkXCI+XHJcbiAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZmVhdHVyZSBvZiBmZWF0dXJlcyRcIiBbdmFsdWVdPVwiZmVhdHVyZVwiPlxyXG4gICAgICAgICAgICB7eyBmZWF0dXJlIH19XHJcbiAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiNTBcIj5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoVcIiBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCI+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHN0ZXAgb2YgKHNjZW5hcmlvJCB8IGFzeW5jKS5zdGVwc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2NlbmFyaW8tc3RlcHMtaXRlbVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgcnVsZS1zdGVwLWxvYWRlciBbc3RlcF09XCJzdGVwXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNjZW5hcmlvLXN0ZXBzLWFjdGlvblwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImRlbGV0ZVN0ZXBGcm9tU2NlbmFyaW8oc3RlcClcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJpbmNTY2VuYXJpb1N0ZXBQcmlvcml0eShzdGVwKVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYXJyb3dfdXA8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiZGVjU2NlbmFyaW9TdGVwUHJpb3JpdHkoc3RlcClcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X2Rvd248L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxidXR0b24gZnhGbGV4PVwibm9ncm93XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInNhdmUoKVwiPlxyXG4gICAgICAgIMOYwqvDmMKow5jCqlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDB2d30uc2NlbmFyaW8tdG9vbGJhcntoZWlnaHQ6NjBweDttYXJnaW4tYm90dG9tOjIwcHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEd3dFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0dW5zdWJzY3JpYmUgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cdHN0ZXBzJDogT2JzZXJ2YWJsZTxHd3RTdGVwW10+O1xyXG5cdHN0ZXBzOiBHd3RTdGVwW107XHJcblx0c2NlbmFyaW8kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHd3RTY2VuYXJpb01vZGVsPihuZXcgR3d0U2NlbmFyaW9Nb2RlbCgpKTtcclxuXHRzY2VuYXJpb3MkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHd3RTY2VuYXJpb01vZGVsW10+KFtdKTtcclxuXHRzY2VuYXJpb0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGZlYXR1cmVzJDogc3RyaW5nW107XHJcblx0QFZpZXdDaGlsZHJlbihTdGVwTG9hZGVyRGlyZWN0aXZlKSBzdGVwTG9hZGVyczogU3RlcExvYWRlckRpcmVjdGl2ZVtdO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHNjZW5hcmlvU2VydmljZTogU2NlbmFyaW9TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcblx0XHRASW5qZWN0KE1BVF9CT1RUT01fU0hFRVRfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnlcclxuXHQpIHtcclxuXHRcdHRoaXMuX2NyZWF0ZV9zY2VuYXJpb19mb3JtX2dyb3VwKCk7XHJcblx0XHR0aGlzLl9pbml0X2ZlYXR1cmVzX2xpc3QoKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdGVwcyQgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJC5waXBlKG1hcChjb25maWcgPT4gY29uZmlnLnN0ZXBzKSwgdGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpKTtcclxuXHRcdHRoaXMuc3RlcHMkLnN1YnNjcmliZShzdGVwcyA9PiAodGhpcy5zdGVwcyA9IHN0ZXBzKSk7XHJcblx0XHR0aGlzLl9sb2FkX3NjZW5hcmlvX2FuZF9tYXBfc2NlbmFyaW9fc3RlcF90b19zdGVwc19jbGFzcygpO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUubmV4dCgpO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xyXG5cdH1cclxuXHRzYXZlKCkge1xyXG5cdFx0Y29uc3Qgc2NlbmFyaW8gPSB0aGlzLnNjZW5hcmlvJC5nZXRWYWx1ZSgpO1xyXG5cdFx0dGhpcy5zdGVwTG9hZGVycy5mb3JFYWNoKHN0ZXBMb2FkZXIgPT4ge1xyXG5cdFx0XHRzY2VuYXJpby5zdGVwcy5maW5kKHN0ZXAgPT4gc3RlcC5uYW1lID09IHN0ZXBMb2FkZXIuc3RlcC5uYW1lKS5wYXJhbXMgPSBzdGVwTG9hZGVyLnBhcmFtcztcclxuXHRcdH0pO1xyXG5cdFx0c2NlbmFyaW8uZmVhdHVyZUlkID0gdGhpcy5zY2VuYXJpb0Zvcm1Hcm91cC52YWx1ZS5mZWF0dXJlSWQ7XHJcblx0XHRzY2VuYXJpby5uYW1lID0gdGhpcy5zY2VuYXJpb0Zvcm1Hcm91cC52YWx1ZS5uYW1lO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBzZXJ0U2NlbmFyaW9BY3Rpb24oc2NlbmFyaW8pKTtcclxuXHR9XHJcblx0YWRkU3RlcFRvU2NlbmFyaW8oc3RlcDogR3d0U3RlcCkge1xyXG5cdFx0Y29uc3Qgc2NlbmFyaW8gPSB0aGlzLnNjZW5hcmlvJC5nZXRWYWx1ZSgpO1xyXG5cdFx0c2NlbmFyaW8uc3RlcHMucHVzaChzdGVwKTtcclxuXHRcdHRoaXMuc2NlbmFyaW8kLm5leHQoc2NlbmFyaW8pO1xyXG5cdH1cclxuXHRkZWxldGVTdGVwRnJvbVNjZW5hcmlvKHN0ZXA6IEd3dFN0ZXApIHtcclxuXHRcdGNvbnN0IHNjZW5hcmlvID0gdGhpcy5zY2VuYXJpbyQuZ2V0VmFsdWUoKTtcclxuXHRcdHNjZW5hcmlvLnN0ZXBzLnNwbGljZShzY2VuYXJpby5zdGVwcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLm5hbWUgPT0gc3RlcC5uYW1lKSwgMSk7XHJcblx0XHR0aGlzLnNjZW5hcmlvJC5uZXh0KHNjZW5hcmlvKTtcclxuXHR9XHJcblx0ZGVjU2NlbmFyaW9TdGVwUHJpb3JpdHkoc3RlcDogR3d0U3RlcCkge31cclxuXHRpbmNTY2VuYXJpb1N0ZXBQcmlvcml0eShzdGVwOiBHd3RTdGVwKSB7fVxyXG5cdGFkZE5ld1NjZW5hcmlvKCkge1xyXG5cdFx0Y29uc3Qgc2NlbmFyaW9zID0gdGhpcy5zY2VuYXJpb3MkLmdldFZhbHVlKCk7XHJcblx0XHRzY2VuYXJpb3MucHVzaChcclxuXHRcdFx0bmV3IEd3dFNjZW5hcmlvTW9kZWwoe1xyXG5cdFx0XHRcdGFuY2hvcklkOiB0aGlzLmRhdGEuYW5jaG9ySWRcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0XHR0aGlzLnNjZW5hcmlvcyQubmV4dChzY2VuYXJpb3MpO1xyXG5cdH1cclxuXHRhY3RpdmVTY2VuYXJpbyhzY2VuYXJpbzogR3d0U2NlbmFyaW9Nb2RlbCkge1xyXG5cdFx0c2NlbmFyaW8uc3RlcHMgPSBzY2VuYXJpby5zdGVwcy5tYXAoc2NlbmFyaW9TdGVwID0+IHtcclxuXHRcdFx0Y29uc3Qgc3RlcCA9IHRoaXMuc3RlcHMuZmluZChzdGVwID0+IHN0ZXAuaWQgPT0gc2NlbmFyaW9TdGVwLmlkKTtcclxuXHRcdFx0c3RlcC5wYXJhbXMgPSBzY2VuYXJpb1N0ZXAucGFyYW1zO1xyXG5cdFx0XHRyZXR1cm4gc3RlcDtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zY2VuYXJpb0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHNjZW5hcmlvKTtcclxuXHRcdHNjZW5hcmlvLmFuY2hvcklkID0gdGhpcy5kYXRhLmFuY2hvcklkO1xyXG5cdFx0dGhpcy5zY2VuYXJpbyQubmV4dChzY2VuYXJpbyk7XHJcblx0fVxyXG5cclxuXHRfbG9hZF9zY2VuYXJpb19hbmRfbWFwX3NjZW5hcmlvX3N0ZXBfdG9fc3RlcHNfY2xhc3MoKSB7XHJcblx0XHR0aGlzLnNjZW5hcmlvU2VydmljZVxyXG5cdFx0XHQuZ2V0QW5jaG9yU2NlbmFyaW9zKHRoaXMuZGF0YS5hbmNob3JJZClcclxuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpKVxyXG5cdFx0XHQuc3Vic2NyaWJlKHNjZW5hcmlvcyA9PiB7XHJcblx0XHRcdFx0dGhpcy5zY2VuYXJpb3MkLm5leHQoc2NlbmFyaW9zKTtcclxuXHRcdFx0XHR0aGlzLmFjdGl2ZVNjZW5hcmlvKHNjZW5hcmlvc1swXSB8fCBuZXcgR3d0U2NlbmFyaW9Nb2RlbCgpKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdF9jcmVhdGVfc2NlbmFyaW9fZm9ybV9ncm91cCgpIHtcclxuXHRcdHRoaXMuc2NlbmFyaW9Gb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0ZmVhdHVyZUlkOiBuZXcgRm9ybUNvbnRyb2woKSxcclxuXHRcdFx0bmFtZTogbmV3IEZvcm1Db250cm9sKClcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfcmVzZXRfc2NlbmFyaW9fZm9ybV9ncm91cF9hbmRfcGF0Y2hfd2l0aF9hY3RpdmVfc2NlbmFyaW8oKSB7XHJcblx0XHR0aGlzLnNjZW5hcmlvRm9ybUdyb3VwLnJlc2V0KCk7XHJcblx0XHR0aGlzLnNjZW5hcmlvRm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy5zY2VuYXJpbyQuZ2V0VmFsdWUoKSk7XHJcblx0fVxyXG5cdF9pbml0X2ZlYXR1cmVzX2xpc3QoKSB7XHJcblx0XHR0aGlzLmZlYXR1cmVzJCA9IFsgXCLDmcKFw5jCr8ObwozDmMKxw5vCjMOYwqogw5nChsOZwoXDmMKnw5vCjMOYwrQgw5jCqMOYwrHDmMKnw5jCs8OYwqfDmMKzIMOYwq/DmMKzw5jCqsOYwrHDmMKzw5vCjCDDmcKHw5jCp8Obwowgw5rCqcOYwqfDmMKxw5jCqMOYwrFcIiBdO1xyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBHd3RTdGVwVHlwZXMge1xyXG5cdFwiR2l2ZW5cIiA9IFwiR2l2ZW5cIixcclxuXHRcIldoZW5cIiA9IFwiV2hlblwiLFxyXG5cdFwiVGhlblwiID0gXCJUaGVuXCIsXHJcblx0XCJBbmRcIiA9IFwiQW5kXCIsXHJcblx0XCJCdXRcIiA9IFwiQnV0XCJcclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBPbkluaXQsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgemlwLCBTdWJqZWN0LCBjb21iaW5lTGF0ZXN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgeyBHd3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4uL2d3dC12aWV3L2d3dC12aWV3LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ydWxlLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEd3dFNjZW5hcmlvTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zY2VuYXJpby5tb2RlbFwiO1xyXG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2NlbmFyaW8uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHd3RTdGVwVHlwZXMgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zdGVwLXR5cGVzLmVudW1cIjtcclxuaW1wb3J0IHsgR3d0U3RlcCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXN0ZXAubW9kZWxcIjtcclxuaW1wb3J0IHsgUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3J1bGUtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogXCJbcnVsZUFuY2hvcl1cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUnVsZUFuY2hvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHR1bnN1YnNjcmliZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblx0QElucHV0KFwicnVsZUFuY2hvclwiKSBhbmNob3JJZDtcclxuXHRzdGVwczogR3d0U3RlcFtdO1xyXG5cdGFjdGl2ZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0YWN0aXZlOiBib29sZWFuO1xyXG5cdGJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblx0YW5jaG9yU2NlbmFyaW9zJDogT2JzZXJ2YWJsZTxHd3RTY2VuYXJpb01vZGVsW10+O1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzY2VuYXJpb1NlcnZpY2U6IFNjZW5hcmlvU2VydmljZSxcclxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuXHRcdHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuXHRcdHByaXZhdGUgYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0XHJcblx0KSB7XHJcblx0XHR0aGlzLmFjdGl2ZSQgPSB0aGlzLnN0b3JlLnNlbGVjdChzID0+IHMucnVsZS5ydWxlQW5jaG9ycy5hY3RpdmUpLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpKTtcclxuXHRcdHRoaXMuYWN0aXZlJC5zdWJzY3JpYmUoYWN0aXZlID0+ICh0aGlzLmFjdGl2ZSA9IGFjdGl2ZSkpO1xyXG5cdFx0dGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJuZ3MtcnVsZS1hbmNob3JcIik7XHJcblx0XHR0aGlzLnN0ZXBzID0gdGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS5zdGVwcztcclxuXHR9XHJcblxyXG5cdEBIb3N0TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIpXHJcblx0b25Nb3VzZUVudGVyKCkge1xyXG5cdFx0aWYgKCF0aGlzLmFjdGl2ZSkgcmV0dXJuO1xyXG5cdFx0dGhpcy5zaG93QW5jaG9yKCk7XHJcblx0fVxyXG5cclxuXHRASG9zdExpc3RlbmVyKFwibW91c2VsZWF2ZVwiKVxyXG5cdG9uTW91c2VMZWF2ZSgpIHtcclxuXHRcdGlmICghdGhpcy5hY3RpdmUpIHJldHVybjtcclxuXHRcdHRoaXMuaGlkZUFuY2hvcigpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzaG93QW5jaG9yKCkge1xyXG5cdFx0dGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaG93LWFuY2hvclwiKTtcclxuXHR9XHJcblx0cHJpdmF0ZSBoaWRlQW5jaG9yKCkge1xyXG5cdFx0dGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWFuY2hvclwiKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gVE9ETzogcmVtb3ZlXHJcblx0XHQvLyB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTaG93QW5jaG9yc0FjdGlvbigpKTtcclxuXHJcblx0XHR0aGlzLmFuY2hvclNjZW5hcmlvcyQgPSB0aGlzLnNjZW5hcmlvU2VydmljZVxyXG5cdFx0XHQuZ2V0QW5jaG9yU2NlbmFyaW9zKHRoaXMuYW5jaG9ySWQpIC8vVE9ETzogcmVwbGFjZSBzZXJ2aWNlIGNhbGwgd2l0aCBuZ3J4IGFjdGlvblxyXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSksIGZpbHRlcihzY2VuYXJpbyA9PiBzY2VuYXJpbyAhPSB1bmRlZmluZWQpKTtcclxuXHRcdHRoaXMuYWN0aXZlJC5zdWJzY3JpYmUoYWN0aXZlID0+IHtcclxuXHRcdFx0aWYgKGFjdGl2ZSkgdGhpcy5fYWN0aXZhdGVfYW5jaG9yKCk7XHJcblx0XHRcdGVsc2UgdGhpcy5fZGVhY3RpdmF0ZV9hbmNob3IoKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5hbmNob3JTY2VuYXJpb3MkLnN1YnNjcmliZShzY2VuYXJpb3MgPT4ge1xyXG5cdFx0XHRzY2VuYXJpb3MuZm9yRWFjaChzY2VuYXJpbyA9PiB7XHJcblx0XHRcdFx0c2NlbmFyaW8uc3RlcHMgPSBzY2VuYXJpby5zdGVwcy5tYXAoc2NlbmFyaW9TdGVwID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IHN0ZXAgPSB0aGlzLnN0ZXBzLmZpbmQoc3RlcCA9PiBzdGVwLmlkID09IHNjZW5hcmlvU3RlcC5pZCk7XHJcblx0XHRcdFx0XHRzdGVwLnBhcmFtcyA9IHNjZW5hcmlvU3RlcC5wYXJhbXM7XHJcblx0XHRcdFx0XHRyZXR1cm4gc3RlcDtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0dGhpcy5fZG9fc2NlbmFyaW8oc2NlbmFyaW8pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUubmV4dCgpO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xyXG5cdH1cclxuXHRfYWN0aXZhdGVfYW5jaG9yKCkge1xyXG5cdFx0dGhpcy5fY3JlYXRlX2FuY2hvcigpO1xyXG5cdFx0dGhpcy5fc2V0X2FjdGl2ZV9jbGFzc190b19ob3N0KCk7XHJcblx0fVxyXG5cdF9kZWFjdGl2YXRlX2FuY2hvcigpIHtcclxuXHRcdHRoaXMuX3JlbW92ZV9hbmNob3IoKTtcclxuXHRcdHRoaXMuX3JlbW92ZV9hY3RpdmVfY2xhc3NfdG9faG9zdCgpO1xyXG5cdH1cclxuXHRfc2V0X2FjdGl2ZV9jbGFzc190b19ob3N0KCkge1xyXG5cdFx0dGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhbmNob3ItYWN0aXZlXCIpO1xyXG5cdH1cclxuXHRfcmVtb3ZlX2FjdGl2ZV9jbGFzc190b19ob3N0KCkge1xyXG5cdFx0dGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhbmNob3ItYWN0aXZlXCIpO1xyXG5cdH1cclxuXHRfY3JlYXRlX2FuY2hvcigpIHtcclxuXHRcdHRoaXMuYnV0dG9uID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cdFx0dGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZChcIm5ncy1ydWxlLWFuY2hvci1idXR0b25cIiwgXCJtYXQtaWNvbi1idXR0b25cIik7XHJcblx0XHR0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJtYXQtaWNvbi1idXR0b25cIiwgXCJcIik7XHJcblx0XHR0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0dGhpcy5ib3R0b21TaGVldC5vcGVuKEd3dFZpZXdDb21wb25lbnQsIHtcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRhbmNob3JJZDogdGhpcy5hbmNob3JJZFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cGFuZWxDbGFzczogXCJtYWdlbnRhLXRoZW1lXCJcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IG1hdGljb24gPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoXCJtYXQtaWNvblwiKTtcclxuXHRcdG1hdGljb24uY2xhc3NMaXN0LmFkZChcIm1hdC1pY29uXCIsIFwibWF0ZXJpYWwtaWNvbnNcIik7XHJcblx0XHRjb25zdCBpY29uID0gdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KFwic2V0dGluZ3NcIik7XHJcblx0XHR0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKG1hdGljb24sIGljb24pO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbiwgbWF0aWNvbik7XHJcblx0XHR0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5idXR0b24pO1xyXG5cdH1cclxuXHRfcmVtb3ZlX2FuY2hvcigpIHtcclxuXHRcdGlmICghdGhpcy5idXR0b24pIHJldHVybjtcclxuXHRcdHRoaXMuYnV0dG9uLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5idXR0b24pO1xyXG5cdH1cclxuXHRfZG9fc2NlbmFyaW8oc2NlbmFyaW86IEd3dFNjZW5hcmlvTW9kZWwpIHtcclxuXHRcdGNvbnN0IGdpdmVuU3RlcEludGVycHJldG9ycyA9IHNjZW5hcmlvLnN0ZXBzXHJcblx0XHRcdC5maWx0ZXIoc3RlcCA9PiBzdGVwLnR5cGUgPT0gR3d0U3RlcFR5cGVzLkdpdmVuKVxyXG5cdFx0XHQubWFwKHN0ZXAgPT4gc3RlcC5pbnRlcnBlcmF0b3Ioc3RlcC5wYXJhbXMpKTtcclxuXHJcblx0XHRjb21iaW5lTGF0ZXN0KGdpdmVuU3RlcEludGVycHJldG9ycylcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpLFxyXG5cdFx0XHRcdG1hcCgodmFsdWVzOiBib29sZWFuW10pID0+IHZhbHVlcy5ldmVyeSh2YWx1ZSA9PiB2YWx1ZSA9PT0gdHJ1ZSkpLFxyXG5cdFx0XHRcdHN3aXRjaE1hcChnaXZlblJlc3VsdCA9PiB7XHJcblx0XHRcdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0XHRcdGlmIChnaXZlblJlc3VsdCkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCB0aGVuU3RlcEludGVycHJldG9ycyA9IHNjZW5hcmlvLnN0ZXBzXHJcblx0XHRcdFx0XHRcdFx0LmZpbHRlcihzdGVwID0+IHN0ZXAudHlwZSA9PSBHd3RTdGVwVHlwZXMuVGhlbilcclxuXHRcdFx0XHRcdFx0XHQubWFwKHN0ZXAgPT4gc3RlcC5pbnRlcnBlcmF0b3Ioc3RlcC5wYXJhbXMsIHRoaXMuZWwpKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGNvbWJpbmVMYXRlc3RcclxuXHRcdFx0XHRcdFx0XHQuYXBwbHkobnVsbCwgdGhlblN0ZXBJbnRlcnByZXRvcnMpXHJcblx0XHRcdFx0XHRcdFx0LnBpcGUobWFwKCh2YWx1ZXM6IGJvb2xlYW5bXSkgPT4gdmFsdWVzLmV2ZXJ5KHZhbHVlID0+IHZhbHVlID09PSB0cnVlKSkpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHJldHVybiBvZihmYWxzZSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHt9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLCBTY2VuYXJpb3NMaXN0U3RhcnRBY3Rpb24sIFNjZW5hcmlvRmVjaGVkQWN0aW9uIH0gZnJvbSBcIi4vc2NlbmFyaW8tZGIuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2NlbmFyaW8uc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9zRGJFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgc2VydmljZTogU2NlbmFyaW9TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRFZGl0UHJvZmlsZVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1QpXHJcblx0XHQucGlwZShtYXAoKCkgPT4gbmV3IFNjZW5hcmlvc0xpc3RTdGFydEFjdGlvbigpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydFNjZW5hcmlvJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlVQU0VSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoKGFjdGlvbikgPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKHNjZW5hcmlvKSA9PiB0aGlzLnNlcnZpY2UudXBzZXJ0KHNjZW5hcmlvKSksXHJcblx0XHRcdG1hcCgoc2NlbmFyaW8pID0+IG5ldyBTY2VuYXJpb0ZlY2hlZEFjdGlvbihzY2VuYXJpbykpXHJcblx0XHQpO1xyXG5cclxuXHQvLyBARWZmZWN0KClcclxuXHQvLyBHZXRTY2VuYXJpbyQgPSB0aGlzLmFjdGlvbnMkXHJcblx0Ly8gXHQub2ZUeXBlKFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5HRVRfU0NFTkFSSU8pXHJcblx0Ly8gXHQucGlwZShcclxuXHQvLyBcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0Ly8gXHRcdHN3aXRjaE1hcChpZCA9PiB0aGlzLnNlcnZpY2UuZ2V0KGlkKSksXHJcblx0Ly8gXHRcdG1hcChydWxlID0+IG5ldyBTY2VuYXJpb0ZlY2hlZEFjdGlvbihydWxlKSlcclxuXHQvLyBcdCk7XHJcblxyXG5cdC8vIEBFZmZlY3QoKVxyXG5cdC8vIGdldF9ydWxlc19saXN0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHQvLyBcdC5vZlR5cGUoU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUX1NUQVJUKVxyXG5cdC8vIFx0LnBpcGUoXHJcblx0Ly8gXHRcdHN3aXRjaE1hcCgoZGF0YTogYW55KSA9PiB0aGlzLnNlcnZpY2UuZ2V0TGlzdCgpKSxcclxuXHQvLyBcdFx0bWFwKHJlcyA9PiBuZXcgU2NlbmFyaW9zTGlzdFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0Ly8gXHRcdGNhdGNoRXJyb3IoKCkgPT4gT2JzZXJ2YWJsZS5vZihuZXcgU2NlbmFyaW9zTGlzdEZhaWxlZEFjdGlvbigpKSlcclxuXHQvLyBcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgUnVsZXNMaXN0QWN0aW9uVHlwZXMsIFJ1bGVzTGlzdFN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4vcnVsZS1kYi5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSdWxlc0xpc3RFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4pIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEVkaXRQcm9maWxlUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUKS5tYXAoKCkgPT4gbmV3IFJ1bGVzTGlzdFN0YXJ0QWN0aW9uKCkpO1xyXG5cclxuXHQvLyBARWZmZWN0KClcclxuXHQvLyBHZXRSdWxlJCA9IHRoaXMuYWN0aW9ucyRcclxuXHQvLyBcdC5vZlR5cGUoUnVsZXNMaXN0QWN0aW9uVHlwZXMuR0VUX1JVTEUpXHJcblx0Ly8gXHQucGlwZShcclxuXHQvLyBcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0Ly8gXHRcdHN3aXRjaE1hcChpZCA9PiB0aGlzLnNlcnZpY2UuZ2V0KGlkKSksXHJcblx0Ly8gXHRcdG1hcChydWxlID0+IG5ldyBSdWxlRmVjaGVkQWN0aW9uKHJ1bGUpKVxyXG5cdC8vIFx0KTtcclxuXHJcblx0Ly8gQEVmZmVjdCgpXHJcblx0Ly8gZ2V0X3J1bGVzX2xpc3QkID0gdGhpcy5hY3Rpb25zJFxyXG5cdC8vIFx0Lm9mVHlwZShSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX1NUQVJUKVxyXG5cdC8vIFx0LnBpcGUoXHJcblx0Ly8gXHRcdHN3aXRjaE1hcCgoZGF0YTogYW55KSA9PiB0aGlzLnNlcnZpY2UuZ2V0TGlzdCgpKSxcclxuXHQvLyBcdFx0bWFwKHJlcyA9PiBuZXcgUnVsZXNMaXN0U3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHQvLyBcdFx0Y2F0Y2hFcnJvcigoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBSdWxlc0xpc3RGYWlsZWRBY3Rpb24oKSkpXHJcblx0Ly8gXHQpO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBTaG93QW5jaG9yc0FjdGlvbiwgSGlkZUFuY2hvcnNBY3Rpb24gfSBmcm9tIFwiLi4vcnVsZS1hbmNob3IvcnVsZS1hbmNob3IuYWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZ3d0LW1vZGUtYnV0dG9uXCIsXHJcblx0dGVtcGxhdGU6IGAgICAgPGJ1dHRvbiAqbmdJZj1cIiEoaGF2ZVBlcm1pc3Npb24kIHwgYXN5bmMpXCIgY2xhc3M9XCJidG5cIiBtYXQtbWluaS1mYWIgdHlwZT1cImJ1dHRvblwiIHJvdXRlckxpbms9XCJhdXRoL2Zyb250ZW5kL3NpZ25pblwiIGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5maW5nZXJwcmludDwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiaGF2ZVBlcm1pc3Npb24kIHwgYXN5bmNcIiBjbGFzcz1cImJ0blwiIG1hdC1taW5pLWZhYiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInRvZ2dsZUFuY2hvcnMoKVwiIGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5zZXR0aW5nczwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5gLFxyXG5cdHN0eWxlczogW2AuYnRue3Bvc2l0aW9uOmZpeGVkO2JvdHRvbToyNXB4O2xlZnQ6MjVweDt6LWluZGV4OjN9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEd3dE1vZGVCdXR0b25Db21wb25lbnQge1xyXG5cdGFuY2hvcnNNb2RlOiBib29sZWFuO1xyXG5cdGhhdmVQZXJtaXNzaW9uJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLmFuY2hvcnNNb2RlID0gZmFsc2U7XHJcblx0XHR0aGlzLmhhdmVQZXJtaXNzaW9uJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSk7XHJcblx0fVxyXG5cclxuXHR0b2dnbGVBbmNob3JzKCkge1xyXG5cdFx0aWYgKHRoaXMuYW5jaG9yc01vZGUgPT09IGZhbHNlKSB7XHJcblx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNob3dBbmNob3JzQWN0aW9uKCkpO1xyXG5cdFx0XHR0aGlzLmFuY2hvcnNNb2RlID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEhpZGVBbmNob3JzQWN0aW9uKCkpO1xyXG5cdFx0XHR0aGlzLmFuY2hvcnNNb2RlID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL2ludGVybmFsL29ic2VydmFibGUvb2ZcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3J1bGUtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ydWxlLnJlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSdWxlU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHt9XHJcblxyXG5cdC8vIGFkZCgpOiBPYnNlcnZhYmxlPFRlc3RNb2RlbD4ge1xyXG5cdC8vIFx0Ly8gY29uc3QgbW9kZWwgPSBuZXcgQWRkUnVsZUFwaU1vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblx0Ly8gXHQvLyByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0Ly8gXHQvLyBcdC5maWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMuYWRkUnVsZSAhPSBcIlwiKVxyXG5cdC8vIFx0Ly8gXHQudGFrZSgxKVxyXG5cdC8vIFx0Ly8gXHQuc3dpdGNoTWFwKGNvbmZpZyA9PiB0aGlzLmh0dHAucG9zdChjb25maWcuZW5kcG9pbnRzLmFkZFJ1bGUsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpKVxyXG5cdC8vIFx0Ly8gXHQubWFwKChyZXNwb25zZTogQWRkUnVsZUFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpO1xyXG5cdC8vIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0VGFibGVNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vcnVsZS5jb25maWdcIjtcclxuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3J1bGUtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgUnVsZVJlZHVjZXJzIH0gZnJvbSBcIi4vcnVsZS5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBSdWxlQ29tcG9uZW50IH0gZnJvbSBcIi4vcnVsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUnVsZUFuY2hvckRpcmVjdGl2ZSB9IGZyb20gXCIuL3J1bGUtYW5jaG9yL3J1bGUtYW5jaG9yLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBHd3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vZ3d0LXZpZXcvZ3d0LXZpZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFN0ZXBMb2FkZXJEaXJlY3RpdmUgfSBmcm9tIFwiLi9zdGVwLWxvYWRlci9zdGVwLWxvYWRlci5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgU2NlbmFyaW9zRGJFZmZlY3RzIH0gZnJvbSBcIi4vZGIvc2NlbmFyaW8tZGIuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBSdWxlc0xpc3RFZmZlY3RzIH0gZnJvbSBcIi4vZGIvcnVsZS1kYi5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEd3dE1vZGVCdXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi9tb2RlLWJ1dHRvbi9tb2RlLWJ1dHRvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUnVsZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9ydWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvcnVsZS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvc2NlbmFyaW8uc2VydmljZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0XHRNYXRUYWJsZU1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbIFJ1bGVDb21wb25lbnQsIFJ1bGVBbmNob3JEaXJlY3RpdmUsIEd3dFZpZXdDb21wb25lbnQsIFN0ZXBMb2FkZXJEaXJlY3RpdmUsIEd3dE1vZGVCdXR0b25Db21wb25lbnQgXSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFsgR3d0Vmlld0NvbXBvbmVudCBdLFxyXG5cdGV4cG9ydHM6IFsgUnVsZUFuY2hvckRpcmVjdGl2ZSwgR3d0TW9kZUJ1dHRvbkNvbXBvbmVudCBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSdWxlTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBSdWxlTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUm9vdFJ1bGVNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB8fCB7fSB9LFxyXG5cdFx0XHRcdFJ1bGVTZXJ2aWNlLFxyXG5cdFx0XHRcdFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdFx0XHRTY2VuYXJpb1NlcnZpY2VcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0UnVsZU1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJydWxlXCIsIFJ1bGVSZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBSdWxlc0xpc3RFZmZlY3RzLCBTY2VuYXJpb3NEYkVmZmVjdHMgXSksXHJcblx0XHRSb3V0aW5nTW9kdWxlXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIFJ1bGVNb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdFJ1bGVNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImZyb21SdWxlQW5jaG9yLlJlZHVjZXIiLCJmcm9tUnVsZURiQW5jaG9yLnJlZHVjZXIiLCJmcm9tU2NlbmFyaW9EYkFuY2hvci5yZWR1Y2VyIiwiQmVoYXZpb3JTdWJqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBZ0JhLHFCQUFxQixHQUFxQjtJQUN0RCxTQUFTLEVBQUU7UUFDVixNQUFNLEVBQUUsbUJBQW1CO1FBQzNCLEdBQUcsRUFBRSw2Q0FBNkM7S0FDbEQ7SUFDRCxXQUFXLEVBQUUsRUFBRTtJQUNmLEdBQUcsRUFBRTtRQUNKLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGVBQWUsRUFBRSw2QkFBNkI7S0FDOUM7Q0FDRCxDQUFDO0FBQ0YscUJBQWEsbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQW1CLGtCQUFrQixDQUFDOzs7Ozs7QUMzQjNGO0lBU0M7S0FBZ0I7Ozs7SUFFaEIsZ0NBQVE7OztJQUFSLGVBQWE7O2dCQVRiLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLG1HQUVKO2lCQUNOOzs7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