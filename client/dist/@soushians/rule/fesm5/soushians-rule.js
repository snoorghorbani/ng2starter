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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var MODULE_DEFAULT_CONFIG = {
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
/** @type {?} */
var MODULE_CONFIG_TOKEN = new InjectionToken("RuleModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var routes = [
    {
        path: "rule",
        component: RuleComponent
    }
];
/** @type {?} */
var RoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState = {
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$1 = {
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
            /** @type {?} */
            var data = state.data.concat();
            /** @type {?} */
            var entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return __assign({}, state, { data: data });
        }
        case RulesListActionTypes.RULE_FETCHED: {
            /** @type {?} */
            var data = state.data.concat();
            /** @type {?} */
            var entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$2 = {
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
            /** @type {?} */
            var data = state.data.concat();
            /** @type {?} */
            var entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return __assign({}, state, { data: data });
        }
        case ScenariosListActionTypes.SCENARIO_FETCHED: {
            /** @type {?} */
            var data = state.data.concat();
            /** @type {?} */
            var entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return __assign({}, state, { data: data });
        }
        case ScenariosListActionTypes.UPDATE_DB: {
            /** @type {?} */
            var data_1 = state.data.concat();
            /** @type {?} */
            var scenarios = action.payload;
            scenarios.forEach(function (scenario) {
                /** @type {?} */
                var entityIdx = state.data.findIndex(function (form) { return form._id == scenario._id; });
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var RuleReducers = {
    ruleAnchors: Reducer,
    rules: reducer,
    scenarios: reducer$1
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        /** @type {?} */
        var component = this.resolver.resolveComponentFactory(this.step.stepComponent);
        this.component = this.container.createComponent(component);
        debugger;
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        /** @type {?} */
        var model = new GwtScenarioModel(scenario);
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
        /** @type {?} */
        var subject = new BehaviorSubject$1(undefined);
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
        /** @type {?} */
        var subject = new BehaviorSubject$1(undefined);
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.scenario$.subscribe(function (s) {
            debugger;
        });
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
        /** @type {?} */
        var scenario = this.scenario$.getValue();
        this.stepLoaders.forEach(function (stepLoader) {
            scenario.steps.find(function (step) { return step.name === stepLoader.step.name; }).params = stepLoader.params;
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
        /** @type {?} */
        var scenario = this.scenario$.getValue();
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
        /** @type {?} */
        var scenario = this.scenario$.getValue();
        scenario.steps.splice(scenario.steps.findIndex(function (item) { return item.name === step.name; }), 1);
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
        /** @type {?} */
        var scenarios = this.scenarios$.getValue();
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
        debugger;
        scenario.steps = scenario.steps.map(function (scenarioStep) {
            /** @type {?} */
            var _step = _this.steps.find(function (step) { return step.id === scenarioStep.id; });
            /** @type {?} */
            var step = Object.create(_step);
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
                    template: "<div fxLayout=\"row\" fxLayoutGap=\"25px\">\n  <div fxFlex=\"400px\" fxLayout=\"column\" fxLayoutGap=\"15px\">\n    <!-- <div fxLayout=\"row wrap\">\n    <mat-form-field appearance=\"fill\" fxFlex=\"100\">\n      <input matInput placeholder=\"\u0641\u06CC\u0644\u062A\u0631\">\n      <mat-icon matSuffix>search</mat-icon>\n    </mat-form-field>\n    <mat-checkbox fxFlex class=\"example-margin\">\u0641\u0631\u0636 \u06A9\u0646\u06CC\u062F</mat-checkbox>\n    <mat-checkbox fxFlex class=\"example-margin\">\u0647\u0646\u06AF\u0627\u0645\u06CC \u06A9\u0647</mat-checkbox>\n    <mat-checkbox fxFlex class=\"example-margin\">\u0622\u0646\u06AF\u0627\u0647</mat-checkbox>\n  </div> -->\n    <mat-card class=\"steps-item\" *ngFor=\"let step of steps$ | async\">\n      <span class=\"step-text\">\n        {{step.description}}\n      </span>\n      <button mat-icon-button class=\"add-button\" (click)=\"addStepToScenario(step)\">\n        <mat-icon>arrow_back_ios</mat-icon>\n      </button>\n    </mat-card>\n  </div>\n\n  <div fxFlex=\"700px\">\n    <div fxLayout=\"row wrap\" fxLayoutGap=\"25px\" fxLayoutAlign=\"center center\" class=\"scenario-toolbar\">\n      <div fxFlex>\n        <mat-form-field class=\"fit\">\n          <mat-select placeholder=\"\u0648\u0650\u06CC\u0698\u06AF\u06CC\" (selectionChange)=\"activeScenario($event.value)\">\n            <mat-option *ngFor=\"let scenario of scenarios$ | async\" [value]=\"scenario\">\n              {{ scenario.featureId }} : {{ scenario.name }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <button fxFlex=\"nogrow\" mat-raised-button color=\"primary\" (click)=\"addNewScenario()\">\n        \u062B\u0628\u062A \u0633\u0646\u0627\u0631\u06CC\u0648 \u062C\u062F\u06CC\u062F\n      </button>\n    </div>\n    <div fxLayout=\"column\" fxLayoutGap=\"15px\">\n      <div fxFlex=\"100\" fxLayout=\"row\" fxLayoutGap=\"25px\" [formGroup]=\"scenarioFormGroup\">\n        <mat-form-field fxFlex=\"50\">\n          <mat-select placeholder=\"\u0648\u06CC\u0698\u06AF\u06CC\" formControlName=\"featureId\">\n            <mat-option *ngFor=\"let feature of features$\" [value]=\"feature\">\n              {{ feature }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field fxFlex=\"50\">\n          <input matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\n        </mat-form-field>\n      </div>\n      <ng-container *ngFor=\"let step of (scenario$ | async).steps\">\n        <div class=\"scenario-steps-item\">\n          <ng-container rule-step-loader [step]=\"step\"></ng-container>\n          <div class=\"scenario-steps-action\">\n            <button mat-icon-button (click)=\"deleteStepFromScenario(step)\">\n              <mat-icon>delete</mat-icon>\n            </button>\n            <button mat-icon-button (click)=\"incScenarioStepPriority(step)\">\n              <mat-icon>keyboard_arrow_up</mat-icon>\n            </button>\n            <button mat-icon-button (click)=\"decScenarioStepPriority(step)\">\n              <mat-icon>keyboard_arrow_down</mat-icon>\n            </button>\n          </div>\n        </div>\n      </ng-container>\n      <button fxFlex=\"nogrow\" mat-raised-button color=\"primary\" (click)=\"save()\">\n        \u062B\u0628\u062A\n      </button>\n    </div>\n  </div>\n</div>",
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        if (!this.active) {
            return;
        }
        this.showAnchor();
    };
    /**
     * @return {?}
     */
    RuleAnchorDirective.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        if (!this.active) {
            return;
        }
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
            .getAnchorScenarios(this.anchorId) // TODO: replace service call with ngrx action
            .pipe(takeUntil(this.unsubscribe), filter(function (scenario) { return scenario !== undefined; }));
        this.active$.subscribe(function (active) {
            if (active) {
                _this._activate_anchor();
            }
            else {
                _this._deactivate_anchor();
            }
        });
        this.anchorScenarios$.subscribe(function (scenarios) {
            scenarios.forEach(function (scenario) {
                scenario.steps = scenario.steps.map(function (scenarioStep) {
                    /** @type {?} */
                    var step = _this.steps.find(function (step) { return step.id === scenarioStep.id; });
                    /** @type {?} */
                    var _step = Object.create(step);
                    _step.params = scenarioStep.params;
                    return _step;
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
        /** @type {?} */
        var maticon = this.renderer.createElement("mat-icon");
        maticon.classList.add("mat-icon", "material-icons");
        /** @type {?} */
        var icon = this.renderer.createText("settings");
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
        if (!this.button) {
            return;
        }
        this.button.parentNode.removeChild(this.button);
    };
    /**
     * @param {?} _scenario
     * @return {?}
     */
    RuleAnchorDirective.prototype._do_scenario = /**
     * @param {?} _scenario
     * @return {?}
     */
    function (_scenario) {
        var _this = this;
        debugger;
        /** @type {?} */
        var scenario = _scenario;
        /** @type {?} */
        var givenStepInterpretors = scenario.steps
            .filter(function (step) { return step.type === GwtStepTypes.Given; })
            .map(function (step) { return step.interperator(step.params); });
        debugger;
        combineLatest(givenStepInterpretors)
            .pipe(takeUntil(this.unsubscribe), map(function (values) { return values.every(function (value) { return value === true; }); }), switchMap(function (givenResult) {
            debugger;
            if (givenResult) {
                /** @type {?} */
                var thenStepInterpretors = scenario.steps
                    .filter(function (step) { return step.type === GwtStepTypes.Then; })
                    .map(function (step) { return step.interperator(step.params, _this.el); });
                return combineLatest
                    .apply(null, thenStepInterpretors)
                    .pipe(map(function (values) { return values.every(function (value) { return value === true; }); }));
            }
            else {
                return of(false);
            }
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { RuleModule, GwtStepTypes, ShowAnchorsAction, HideAnchorsAction, RulesListEffects as ɵp, reducer as ɵn, ScenariosDbEffects as ɵq, reducer$1 as ɵo, GwtViewComponent as ɵj, GwtModeButtonComponent as ɵl, RuleAnchorDirective as ɵd, Reducer as ɵm, RoutingModule as ɵr, RuleComponent as ɵc, MODULE_CONFIG_TOKEN as ɵb, RootRuleModule as ɵa, RuleReducers as ɵg, RuleConfigurationService as ɵi, RuleService as ɵs, ScenarioService as ɵe, StepLoaderDirective as ɵk };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXJ1bGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvcnVsZS5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvcnVsZS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvcnVsZS1yb3V0aW5nLm1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3J1bGUtYW5jaG9yL3J1bGUtYW5jaG9yLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvZGIvcnVsZS1kYi5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL2RiL3J1bGUtZGIucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9kYi9zY2VuYXJpby1kYi5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL2RiL3NjZW5hcmlvLWRiLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvcnVsZS5yZWR1Y2Vycy50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9zZXJ2aWNlcy9ydWxlLWNvbmZpZ3VyYXRpb24uc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3N0ZXAtbG9hZGVyL3N0ZXAtbG9hZGVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9zZXJ2aWNlcy9zY2VuYXJpby5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL2d3dC12aWV3L2d3dC12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9tb2RlbHMvZ3d0LXN0ZXAtdHlwZXMuZW51bS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5kaXJlY3RpdmUudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvZGIvc2NlbmFyaW8tZGIuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9kYi9ydWxlLWRiLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvbW9kZS1idXR0b24vbW9kZS1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3NlcnZpY2VzL3J1bGUuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9ydWxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHd3RTdGVwIH0gZnJvbSBcIi4vbW9kZWxzL2d3dC1zdGVwLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJ1bGVNb2R1bGVDb25maWcge1xyXG5cdGVuZHBvaW50cz86IHtcclxuXHRcdHVwc2VydD86IHN0cmluZztcclxuXHRcdGdldD86IHN0cmluZztcclxuXHR9O1xyXG5cdHN0ZXBDbGFzc2VzPzogVHlwZTxHd3RTdGVwPltdO1xyXG5cdHN0ZXBzPzogR3d0U3RlcFtdO1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuXHR9O1xyXG59XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IFJ1bGVNb2R1bGVDb25maWcgPSB7XHJcblx0ZW5kcG9pbnRzOiB7XHJcblx0XHR1cHNlcnQ6IFwiL2FwaS9nd3Qvc2NlbmFyaW9cIixcclxuXHRcdGdldDogXCIvYXBpL2d3dC9hbmNob3IvJHttb2RlbC5hbmNob3JJZH0vc2NlbmFyaW9zXCJcclxuXHR9LFxyXG5cdHN0ZXBDbGFzc2VzOiBbXSxcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlLFxyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBcImZyb250ZW5kX3NlcnZlci9kaWQvbm90L3NldFwiXHJcblx0fVxyXG59O1xyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxSdWxlTW9kdWxlQ29uZmlnPihcIlJ1bGVNb2R1bGVDb25maWdcIik7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImFwcC1ydWxlXCIsXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XG4gIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgUnVsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHRuZ09uSW5pdCgpIHt9XG59XG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlQ29tcG9uZW50IH0gZnJvbSBcIi4vcnVsZS5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwicnVsZVwiLFxyXG5cdFx0Y29tcG9uZW50OiBSdWxlQ29tcG9uZW50XHJcblx0XHQvLyBjaGlsZHJlbjogWyB7fSBdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvdXRpbmdNb2R1bGU6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKTtcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgZW51bSBSdWxlQW5jaG9yc0FjdGlvblR5cGVzIHtcclxuXHRTSE9XX0FOQ0hPUlMgPSBcIltSVUxFXVtBTkNIT1JTXSBTSE9XX0FOQ0hPUlNcIixcclxuXHRISURFX0FOQ0hPUlMgPSBcIltSVUxFXVtBTkNIT1JTXSBISURFX0FOQ0hPUlNcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2hvd0FuY2hvcnNBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlQW5jaG9yc0FjdGlvblR5cGVzLlNIT1dfQU5DSE9SUztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEhpZGVBbmNob3JzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZUFuY2hvcnNBY3Rpb25UeXBlcy5ISURFX0FOQ0hPUlM7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFJ1bGVBbmNob3JzQWN0aW9uID0gU2hvd0FuY2hvcnNBY3Rpb24gfCBIaWRlQW5jaG9yc0FjdGlvbjtcclxuIiwiaW1wb3J0IHsgUnVsZUFuY2hvcnNBY3Rpb24sIFJ1bGVBbmNob3JzQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi9ydWxlLWFuY2hvci5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRhY3RpdmU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGFjdGl2ZTogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFJ1bGVBbmNob3JzQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgUnVsZUFuY2hvcnNBY3Rpb25UeXBlcy5TSE9XX0FOQ0hPUlM6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhY3RpdmU6IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRjYXNlIFJ1bGVBbmNob3JzQWN0aW9uVHlwZXMuSElERV9BTkNIT1JTOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWN0aXZlOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8jcmVnaW9uICBzZWxlY3RvcnNcclxuZXhwb3J0IGNvbnN0IGdldEFuY2hvcnNBY3Rpdml0eVN0YXRlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuYWN0aXZlO1xyXG4vLyNlbmRyZWdpb25cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3J1bGUubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFJ1bGVzTGlzdEFjdGlvblR5cGVzIHtcclxuXHRSVUxFU19MSVNUID0gXCJbUlVMRV1bREJdIFJVTEVTX0xJU1RcIixcclxuXHRSVUxFU19MSVNUX1NUQVJUID0gXCJbUlVMRV1bREJdIFJVTEVTX0xJU1RfU1RBUlRcIixcclxuXHRSVUxFU19MSVNUX1NVQ0NFRUQgPSBcIltSVUxFXVtEQl0gUlVMRVNfTElTVF9TVUNDRUVEXCIsXHJcblx0UlVMRVNfTElTVF9GQUlMRUQgPSBcIltSVUxFXVtEQl0gUlVMRVNfTElTVF9GQUlMRURcIixcclxuXHRSVUxFX1VQU0VSVCA9IFwiW1JVTEVdW0RCXSBSVUxFX1VQU0VSVFwiLFxyXG5cdEdFVF9SVUxFID0gXCJbUlVMRV1bREJdIEdFVF9SVUxFXCIsXHJcblx0UlVMRV9GRVRDSEVEID0gXCJbUlVMRV1bREJdIFJVTEVfRkVUQ0hFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSdWxlc0xpc3RBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBSdWxlc0xpc3RTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1RfU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJ1bGVzTGlzdFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJ1bGVNb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSdWxlc0xpc3RGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0UnVsZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVfVVBTRVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSdWxlTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFJ1bGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5HRVRfUlVMRTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSdWxlRmVjaGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRV9GRVRDSEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSdWxlTW9kZWwpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFJ1bGVzTGlzdEFjdGlvbnMgPVxyXG5cdHwgUnVsZXNMaXN0QWN0aW9uXHJcblx0fCBSdWxlc0xpc3RTdGFydEFjdGlvblxyXG5cdHwgUnVsZXNMaXN0U3VjY2VlZEFjdGlvblxyXG5cdHwgUnVsZXNMaXN0RmFpbGVkQWN0aW9uXHJcblx0fCBVcHNlcnRSdWxlQWN0aW9uXHJcblx0fCBHZXRSdWxlQWN0aW9uXHJcblx0fCBSdWxlRmVjaGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3J1bGUubW9kZWxcIjtcclxuaW1wb3J0IHsgUnVsZXNMaXN0QWN0aW9uVHlwZXMsIFJ1bGVzTGlzdEFjdGlvbnMgfSBmcm9tIFwiLi9ydWxlLWRiLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxuXHRkYXRhOiBSdWxlTW9kZWxbXTtcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzdGF0dXM6IFwicHJpc3RpbmVcIixcclxuXHRkYXRhOiBbXVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBSdWxlc0xpc3RBY3Rpb25zKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJkaXJ0eVwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1RfU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwicGVuZGluZ1wiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1RfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9GQUlMRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZmFpbGVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRV9VUFNFUlQ6IHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdHZhciBlbnRpdHlJZHggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleChmb3JtID0+IGZvcm0uX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdGlmIChlbnRpdHlJZHggPiAtMSkge1xyXG5cdFx0XHRcdGRhdGFbZW50aXR5SWR4XSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGFbZW50aXR5SWR4XSwgYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRhdGEucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBkYXRhXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVfRkVUQ0hFRDoge1xyXG5cdFx0XHRjb25zdCBkYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0dmFyIGVudGl0eUlkeCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KGZvcm0gPT4gZm9ybS5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKTtcclxuXHRcdFx0aWYgKGVudGl0eUlkeCA+IC0xKSB7XHJcblx0XHRcdFx0ZGF0YVtlbnRpdHlJZHhdID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YVtlbnRpdHlJZHhdLCBhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGF0YS5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGFcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0U3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc3RhdHVzO1xyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEd3dFNjZW5hcmlvTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zY2VuYXJpby5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzIHtcclxuXHRTQ0VOQVJJT1NfTElTVCA9IFwiW0dXVF1bU0NFTkFSSU9dW0RCXVtMSVNUXSBTQ0VOQVJJT1NfTElTVFwiLFxyXG5cdFNDRU5BUklPU19MSVNUX1NUQVJUID0gXCJbU0NFTkFSSU9dW0RCXSBTQ0VOQVJJT1NfTElTVF9TVEFSVFwiLFxyXG5cdFNDRU5BUklPU19MSVNUX1NVQ0NFRUQgPSBcIltTQ0VOQVJJT11bREJdIFNDRU5BUklPU19MSVNUX1NVQ0NFRURcIixcclxuXHRTQ0VOQVJJT1NfTElTVF9GQUlMRUQgPSBcIltTQ0VOQVJJT11bREJdIFNDRU5BUklPU19MSVNUX0ZBSUxFRFwiLFxyXG5cdFVQU0VSVCA9IFwiW0dXVF1bU0NFTkFSSU9dW0RCXVtVUFNFUlRdIFNDRU5BUklPX1VQU0VSVFwiLFxyXG5cdEdFVF9TQ0VOQVJJTyA9IFwiW1NDRU5BUklPXVtEQl0gR0VUX1NDRU5BUklPXCIsXHJcblx0U0NFTkFSSU9fRkVUQ0hFRCA9IFwiW1NDRU5BUklPXVtEQl0gU0NFTkFSSU9fRkVUQ0hFRFwiLFxyXG5cdC8vLyBuZXcgdmlzaW9uXHJcblx0VVBEQVRFX0RCID0gXCJbR1dUXVtTQ0VOQVJJT11bREJdIFVQREFURV9EQlwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb3NMaXN0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb3NMaXN0U3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvc0xpc3RTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEd3dFNjZW5hcmlvTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9zTGlzdEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVF9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydFNjZW5hcmlvQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlVQU0VSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3d0U2NlbmFyaW9Nb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0U2NlbmFyaW9BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuR0VUX1NDRU5BUklPO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvRmVjaGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPX0ZFVENIRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEd3dFNjZW5hcmlvTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwZGF0ZURiQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlVQREFURV9EQjtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3d0U2NlbmFyaW9Nb2RlbFtdKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTY2VuYXJpb3NMaXN0QWN0aW9ucyA9XHJcblx0fCBTY2VuYXJpb3NMaXN0QWN0aW9uXHJcblx0fCBTY2VuYXJpb3NMaXN0U3RhcnRBY3Rpb25cclxuXHR8IFNjZW5hcmlvc0xpc3RTdWNjZWVkQWN0aW9uXHJcblx0fCBTY2VuYXJpb3NMaXN0RmFpbGVkQWN0aW9uXHJcblx0fCBVcHNlcnRTY2VuYXJpb0FjdGlvblxyXG5cdHwgR2V0U2NlbmFyaW9BY3Rpb25cclxuXHR8IFNjZW5hcmlvRmVjaGVkQWN0aW9uXHJcblx0fCBVcGRhdGVEYkFjdGlvbjtcclxuIiwiaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgR3d0U2NlbmFyaW9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsXCI7XHJcbmltcG9ydCB7IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcywgU2NlbmFyaW9zTGlzdEFjdGlvbnMgfSBmcm9tIFwiLi9zY2VuYXJpby1kYi5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzVHlwZXM7XHJcblx0ZGF0YTogR3d0U2NlbmFyaW9Nb2RlbFtdO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHN0YXR1czogXCJwcmlzdGluZVwiLFxyXG5cdGRhdGE6IFtdXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFNjZW5hcmlvc0xpc3RBY3Rpb25zKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImRpcnR5XCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcInBlbmRpbmdcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuVVBTRVJUOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRpZiAoZW50aXR5SWR4ID4gLTEpIHtcclxuXHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9fRkVUQ0hFRDoge1xyXG5cdFx0XHRjb25zdCBkYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0dmFyIGVudGl0eUlkeCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KGZvcm0gPT4gZm9ybS5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKTtcclxuXHRcdFx0aWYgKGVudGl0eUlkeCA+IC0xKSB7XHJcblx0XHRcdFx0ZGF0YVtlbnRpdHlJZHhdID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YVtlbnRpdHlJZHhdLCBhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGF0YS5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGFcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlVQREFURV9EQjoge1xyXG5cdFx0XHRjb25zdCBkYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0Y29uc3Qgc2NlbmFyaW9zID0gYWN0aW9uLnBheWxvYWQ7XHJcblx0XHRcdHNjZW5hcmlvcy5mb3JFYWNoKHNjZW5hcmlvID0+IHtcclxuXHRcdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBzY2VuYXJpby5faWQpO1xyXG5cdFx0XHRcdGlmIChlbnRpdHlJZHggPiAtMSkge1xyXG5cdFx0XHRcdFx0ZGF0YVtlbnRpdHlJZHhdID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YVtlbnRpdHlJZHhdLCBzY2VuYXJpbyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGRhdGEucHVzaChzY2VuYXJpbyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBkYXRhXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdldFN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnN0YXR1cztcclxuIiwiaW1wb3J0ICogYXMgZnJvbVJ1bGVBbmNob3IgZnJvbSBcIi4vcnVsZS1hbmNob3IvcnVsZS1hbmNob3IucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBmcm9tUnVsZURiQW5jaG9yIGZyb20gXCIuL2RiL3J1bGUtZGIucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBmcm9tU2NlbmFyaW9EYkFuY2hvciBmcm9tIFwiLi9kYi9zY2VuYXJpby1kYi5yZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJ1bGVTdGF0ZSB7XHJcblx0cnVsZUFuY2hvcnM6IGZyb21SdWxlQW5jaG9yLlN0YXRlO1xyXG5cdHJ1bGVzOiBmcm9tUnVsZURiQW5jaG9yLlN0YXRlO1xyXG5cdHNjZW5hcmlvczogZnJvbVNjZW5hcmlvRGJBbmNob3IuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSdWxlUmVkdWNlcnMgPSB7XHJcblx0cnVsZUFuY2hvcnM6IGZyb21SdWxlQW5jaG9yLlJlZHVjZXIsXHJcblx0cnVsZXM6IGZyb21SdWxlRGJBbmNob3IucmVkdWNlcixcclxuXHRzY2VuYXJpb3M6IGZyb21TY2VuYXJpb0RiQW5jaG9yLnJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xyXG5cdFwicnVsZVwiOiBSdWxlU3RhdGU7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuLy8gaW1wb3J0IHsgZ2V0UnVsZU1vZHVsZUNvbmZpZyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBSdWxlTW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uL3J1bGUuY29uZmlnXCI7XHJcbmltcG9ydCB7IE1PRFVMRV9DT05GSUdfVE9LRU4sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRyB9IGZyb20gXCIuLi9ydWxlLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBSdWxlU3RhdGUgfSBmcm9tIFwiLi4vcnVsZS5yZWR1Y2Vyc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IFJ1bGVNb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KE1PRFVMRV9ERUZBVUxUX0NPTkZJRyk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlOiBSdWxlTW9kdWxlQ29uZmlnLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8UnVsZVN0YXRlPixcclxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXHJcblx0KSB7XHJcblx0XHQvLyBpbnN0YW50aWF0ZSBzdGVwcyBhbmQgdXNlZCB0aGVtXHJcblx0XHRjb25maWdGaWxlLnN0ZXBzID0gY29uZmlnRmlsZS5zdGVwQ2xhc3Nlcy5tYXAoc3RlcCA9PiBuZXcgc3RlcCh0aGlzLmluamVjdG9yKSk7XHJcblxyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWdGaWxlKTtcclxuXHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cclxuXHRcdC8vIHRoaXMuc3RvcmUuc2VsZWN0KGdldFJ1bGVNb2R1bGVDb25maWcpLnN1YnNjcmliZSh1c2VyQ29uZmlnID0+IHtcclxuXHRcdC8vIFx0aWYgKCF1c2VyQ29uZmlnKSByZXR1cm47XHJcblx0XHQvLyBcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgdXNlckNvbmZpZy5Db25maWcpO1xyXG5cdFx0Ly8gXHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEd3dFN0ZXAgfSBmcm9tIFwiLi9nd3Qtc3RlcC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEd3dFNjZW5hcmlvTW9kZWwge1xyXG5cdF9pZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRhbmNob3JJZDogc3RyaW5nO1xyXG5cdGZlYXR1cmVJZDogc3RyaW5nO1xyXG5cdHN0ZXBzOiBHd3RTdGVwW107XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHR7XHJcblx0XHRcdF9pZCxcclxuXHRcdFx0YW5jaG9ySWQsXHJcblx0XHRcdHN0ZXBzLFxyXG5cdFx0XHRuYW1lLFxyXG5cdFx0XHRmZWF0dXJlSWRcclxuXHRcdH06IHsgX2lkPzogc3RyaW5nOyBhbmNob3JJZD86IHN0cmluZzsgc3RlcHM/OiBHd3RTdGVwW107IG5hbWU/OiBzdHJpbmc7IGZlYXR1cmVJZD86IHN0cmluZyB9ID0ge31cclxuXHQpIHtcclxuXHRcdHRoaXMuX2lkID0gX2lkIHx8IFwiXCI7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lIHx8IFwiXCI7XHJcblx0XHR0aGlzLmZlYXR1cmVJZCA9IGZlYXR1cmVJZCB8fCBcIlwiO1xyXG5cdFx0dGhpcy5faWQgPSBfaWQgfHwgXCJcIjtcclxuXHRcdHRoaXMuYW5jaG9ySWQgPSBhbmNob3JJZCB8fCBcIlwiO1xyXG5cdFx0dGhpcy5zdGVwcyA9IHN0ZXBzIHx8IFtdO1xyXG5cdH1cclxuXHRnZXRSZXF1c2V0Qm9keSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdF9pZDogdGhpcy5faWQsXHJcblx0XHRcdGFuY2hvcklkOiB0aGlzLmFuY2hvcklkLFxyXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsXHJcblx0XHRcdGZlYXR1cmVJZDogdGhpcy5mZWF0dXJlSWQsXHJcblx0XHRcdHN0ZXBzOiB0aGlzLnN0ZXBzLm1hcCgoc3RlcCkgPT4gKHtcclxuXHRcdFx0XHRpZDogc3RlcC5pZCxcclxuXHRcdFx0XHRvcHBvc2l0ZTogc3RlcC5vcHBvc2l0ZSxcclxuXHRcdFx0XHRwYXJhbXM6IHN0ZXAucGFyYW1zXHJcblx0XHRcdH0pKVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdElucHV0LFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdENvbXBvbmVudFJlZixcclxuXHRWaWV3Q2hpbGQsXHJcblx0RGlyZWN0aXZlLFxyXG5cdE9uQ2hhbmdlc1xyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHd3RTdGVwIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc3RlcC5tb2RlbFwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IFwiW3J1bGUtc3RlcC1sb2FkZXJdXCJcclxuXHQvLyB0ZW1wbGF0ZVVybDogXCIuL3N0ZXAtbG9hZGVyLmNvbXBvbmVudC5odG1sXCIsXHJcblx0Ly8gc3R5bGVVcmxzOiBbIFwiLi9zdGVwLWxvYWRlci5jb21wb25lbnQuY3NzXCIgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RlcExvYWRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuXHRASW5wdXQoKSBzdGVwOiBHd3RTdGVwPGFueT47XHJcblx0QFZpZXdDaGlsZChcImNvbnRhaW5lclwiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcclxuXHQvLyBUT0RPOiBmaXggZ2VuZXJpYyB0eXBlXHJcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PjtcclxuXHRnZXQgcGFyYW1zKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLnBhcmFtcyB8fCB7fTtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikgeyB9XHJcblxyXG5cdG5nT25DaGFuZ2VzKCkge1xyXG5cdFx0aWYgKHRoaXMuY29tcG9uZW50KSB7XHJcblx0XHRcdC8vIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLmNvbmZpZyA9IHRoaXMuY29uZmlnO1xyXG5cdFx0XHQvLyB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5ncm91cCA9IHRoaXMuZ3JvdXA7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmICghdGhpcy5zdGVwLnN0ZXBDb21wb25lbnQpIHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHRgVHJ5aW5nIHRvIHVzZSBhbiB1bnN1cHBvcnRlZCB0eXBlICgpLlxyXG5cdFx0ICBTdXBwb3J0ZWQgdHlwZXM6IGBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdC8vIFRPRE86IGZpeCBnZW5lcmljIHR5cGVcclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLnN0ZXAuc3RlcENvbXBvbmVudCk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHR0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5wYXJhbXMgPSB0aGlzLnN0ZXAucGFyYW1zO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3RhcnRXaXRoLCBzaGFyZSB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3J1bGUtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEd3dFNjZW5hcmlvTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zY2VuYXJpby5tb2RlbFwiO1xyXG5pbXBvcnQgeyBSdWxlTW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uL3J1bGUuY29uZmlnXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3J1bGUucmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvU2VydmljZSB7XHJcblx0Y29uZmlnJDogT2JzZXJ2YWJsZTxSdWxlTW9kdWxlQ29uZmlnPjtcclxuXHRjb25maWc6IFJ1bGVNb2R1bGVDb25maWc7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy5jb25maWckID0gdGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyQ7XHJcblx0XHR0aGlzLmNvbmZpZyQuc3Vic2NyaWJlKGNvbmZpZyA9PiAodGhpcy5jb25maWcgPSBjb25maWcpKTtcclxuXHR9XHJcblxyXG5cdHVwc2VydChzY2VuYXJpbzogR3d0U2NlbmFyaW9Nb2RlbCk6IE9ic2VydmFibGU8R3d0U2NlbmFyaW9Nb2RlbD4ge1xyXG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgR3d0U2NlbmFyaW9Nb2RlbChzY2VuYXJpbyk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wb3N0KHRoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyB0aGlzLmNvbmZpZy5lbmRwb2ludHMudXBzZXJ0LCBtb2RlbC5nZXRSZXF1c2V0Qm9keSgpKVxyXG5cdFx0XHQucGlwZShtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UgYXMgR3d0U2NlbmFyaW9Nb2RlbCksIHNoYXJlKCkpO1xyXG5cdH1cclxuXHRnZXRBbmNob3JTY2VuYXJpb3MoYW5jaG9ySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3d0U2NlbmFyaW9Nb2RlbFtdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQ8YW55Pih0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgc3RyaW5nVGVtcGxhdGUodGhpcy5jb25maWcuZW5kcG9pbnRzLmdldCwgeyBhbmNob3JJZCB9KSlcclxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5SZXN1bHQgYXMgR3d0U2NlbmFyaW9Nb2RlbFtdKTtcclxuXHR9XHJcblx0c2VsZWN0U2NlbmFyaW9CeUlkKF9pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxHd3RTY2VuYXJpb01vZGVsPiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHd3RTY2VuYXJpb01vZGVsPih1bmRlZmluZWQpO1xyXG5cdFx0dGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnJ1bGUuc2NlbmFyaW9zLmRhdGEpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdGZpbHRlcihzY2VuYXJpb3MgPT4gc2NlbmFyaW9zICE9IG51bGwpLFxyXG5cdFx0XHRcdG1hcChzY2VuYXJpb3MgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHNjZW5hcmlvcy5maW5kKHNjZW5hcmlvID0+IHNjZW5hcmlvLl9pZCA9PSBfaWQpO1xyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdGZpbHRlcihzY2VuYXJpbyA9PiBzY2VuYXJpbyAhPSB1bmRlZmluZWQpXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZShzY2VuYXJpbyA9PiB7XHJcblx0XHRcdFx0c3ViamVjdC5uZXh0KHNjZW5hcmlvKTtcclxuXHRcdFx0fSk7XHJcblx0XHRyZXR1cm4gc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHR9XHJcblx0c2VsZWN0QW5jaG9yU2NlbmFyaW9zKGFuY2hvcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEd3dFNjZW5hcmlvTW9kZWxbXT4ge1xyXG5cdFx0Y29uc3Qgc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R3d0U2NlbmFyaW9Nb2RlbFtdPih1bmRlZmluZWQpO1xyXG5cdFx0dGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnJ1bGUuc2NlbmFyaW9zLmRhdGEpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdHN0YXJ0V2l0aChbXSksXHJcblx0XHRcdFx0ZmlsdGVyKHNjZW5hcmlvcyA9PiBzY2VuYXJpb3MgIT0gbnVsbCksXHJcblx0XHRcdFx0bWFwKHNjZW5hcmlvcyA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gc2NlbmFyaW9zLmZpbHRlcihzY2VuYXJpbyA9PiBzY2VuYXJpby5faWQgPT0gYW5jaG9ySWQpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZShzY2VuYXJpb3MgPT4ge1xyXG5cdFx0XHRcdHN1YmplY3QubmV4dChzY2VuYXJpb3MpO1xyXG5cdFx0XHR9KTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBUeXBlLCBJbmplY3RvciwgVmlld0NoaWxkcmVuLCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgd2l0aExhdGVzdEZyb20sIHRha2VVbnRpbCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBNQVRfQk9UVE9NX1NIRUVUX0RBVEEgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3J1bGUtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEd3dFN0ZXAgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zdGVwLm1vZGVsXCI7XHJcbmltcG9ydCB7IEd3dFNjZW5hcmlvTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zY2VuYXJpby5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ydWxlLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFVwc2VydFNjZW5hcmlvQWN0aW9uIH0gZnJvbSBcIi4uL2RiL3NjZW5hcmlvLWRiLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgU3RlcExvYWRlckRpcmVjdGl2ZSB9IGZyb20gXCIuLi9zdGVwLWxvYWRlci9zdGVwLWxvYWRlci5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjZW5hcmlvLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImFwcC1nd3Qtdmlld1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gIDxkaXYgZnhGbGV4PVwiNDAwcHhcIiBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0R2FwPVwiMTVweFwiPlxyXG4gICAgPCEtLSA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiIGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKBw5vCjMOZwoTDmMKqw5jCsVwiPlxyXG4gICAgICA8bWF0LWljb24gbWF0U3VmZml4PnNlYXJjaDwvbWF0LWljb24+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPG1hdC1jaGVja2JveCBmeEZsZXggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPsOZwoHDmMKxw5jCtiDDmsKpw5nChsObwozDmMKvPC9tYXQtY2hlY2tib3g+XHJcbiAgICA8bWF0LWNoZWNrYm94IGZ4RmxleCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+w5nCh8OZwobDmsKvw5jCp8OZwoXDm8KMIMOawqnDmcKHPC9tYXQtY2hlY2tib3g+XHJcbiAgICA8bWF0LWNoZWNrYm94IGZ4RmxleCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+w5jCosOZwobDmsKvw5jCp8OZwoc8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj4gLS0+XHJcbiAgICA8bWF0LWNhcmQgY2xhc3M9XCJzdGVwcy1pdGVtXCIgKm5nRm9yPVwibGV0IHN0ZXAgb2Ygc3RlcHMkIHwgYXN5bmNcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJzdGVwLXRleHRcIj5cclxuICAgICAgICB7e3N0ZXAuZGVzY3JpcHRpb259fVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiYWRkLWJ1dHRvblwiIChjbGljayk9XCJhZGRTdGVwVG9TY2VuYXJpbyhzdGVwKVwiPlxyXG4gICAgICAgIDxtYXQtaWNvbj5hcnJvd19iYWNrX2lvczwvbWF0LWljb24+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBmeEZsZXg9XCI3MDBweFwiPlxyXG4gICAgPGRpdiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiBjbGFzcz1cInNjZW5hcmlvLXRvb2xiYXJcIj5cclxuICAgICAgPGRpdiBmeEZsZXg+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZml0XCI+XHJcbiAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIsOZwojDmcKQw5vCjMOawpjDmsKvw5vCjFwiIChzZWxlY3Rpb25DaGFuZ2UpPVwiYWN0aXZlU2NlbmFyaW8oJGV2ZW50LnZhbHVlKVwiPlxyXG4gICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc2NlbmFyaW8gb2Ygc2NlbmFyaW9zJCB8IGFzeW5jXCIgW3ZhbHVlXT1cInNjZW5hcmlvXCI+XHJcbiAgICAgICAgICAgICAge3sgc2NlbmFyaW8uZmVhdHVyZUlkIH19IDoge3sgc2NlbmFyaW8ubmFtZSB9fVxyXG4gICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gZnhGbGV4PVwibm9ncm93XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZE5ld1NjZW5hcmlvKClcIj5cclxuICAgICAgICDDmMKrw5jCqMOYwqogw5jCs8OZwobDmMKnw5jCscObwozDmcKIIMOYwqzDmMKvw5vCjMOYwq9cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEdhcD1cIjE1cHhcIj5cclxuICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiMjVweFwiIFtmb3JtR3JvdXBdPVwic2NlbmFyaW9Gb3JtR3JvdXBcIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiNTBcIj5cclxuICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiw5nCiMObwozDmsKYw5rCr8ObwoxcIiBmb3JtQ29udHJvbE5hbWU9XCJmZWF0dXJlSWRcIj5cclxuICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGZlYXR1cmUgb2YgZmVhdHVyZXMkXCIgW3ZhbHVlXT1cImZlYXR1cmVcIj5cclxuICAgICAgICAgICAgICB7eyBmZWF0dXJlIH19XHJcbiAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCI1MFwiPlxyXG4gICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChsOYwqfDmcKFXCIgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzdGVwIG9mIChzY2VuYXJpbyQgfCBhc3luYykuc3RlcHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2NlbmFyaW8tc3RlcHMtaXRlbVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciBydWxlLXN0ZXAtbG9hZGVyIFtzdGVwXT1cInN0ZXBcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzY2VuYXJpby1zdGVwcy1hY3Rpb25cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImRlbGV0ZVN0ZXBGcm9tU2NlbmFyaW8oc3RlcClcIj5cclxuICAgICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJpbmNTY2VuYXJpb1N0ZXBQcmlvcml0eShzdGVwKVwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd191cDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiZGVjU2NlbmFyaW9TdGVwUHJpb3JpdHkoc3RlcClcIj5cclxuICAgICAgICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYXJyb3dfZG93bjwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJzYXZlKClcIj5cclxuICAgICAgICDDmMKrw5jCqMOYwqpcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwdnd9LnNjZW5hcmlvLXRvb2xiYXJ7aGVpZ2h0OjYwcHg7bWFyZ2luLWJvdHRvbToyMHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHd3RWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdHVuc3Vic2NyaWJlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHRzdGVwcyQ6IE9ic2VydmFibGU8R3d0U3RlcFtdPjtcclxuXHRzdGVwczogR3d0U3RlcFtdO1xyXG5cdHNjZW5hcmlvJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R3d0U2NlbmFyaW9Nb2RlbD4obmV3IEd3dFNjZW5hcmlvTW9kZWwoKSk7XHJcblx0c2NlbmFyaW9zJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R3d0U2NlbmFyaW9Nb2RlbFtdPihbXSk7XHJcblx0c2NlbmFyaW9Gb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRmZWF0dXJlcyQ6IHN0cmluZ1tdO1xyXG5cdEBWaWV3Q2hpbGRyZW4oU3RlcExvYWRlckRpcmVjdGl2ZSkgc3RlcExvYWRlcnM6IFN0ZXBMb2FkZXJEaXJlY3RpdmVbXTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBzY2VuYXJpb1NlcnZpY2U6IFNjZW5hcmlvU2VydmljZSxcclxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG5cdFx0QEluamVjdChNQVRfQk9UVE9NX1NIRUVUX0RBVEEpIHByaXZhdGUgZGF0YTogYW55XHJcblx0KSB7XHJcblx0XHR0aGlzLl9jcmVhdGVfc2NlbmFyaW9fZm9ybV9ncm91cCgpO1xyXG5cdFx0dGhpcy5faW5pdF9mZWF0dXJlc19saXN0KCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc3RlcHMkID0gdGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyQucGlwZShtYXAoY29uZmlnID0+IGNvbmZpZy5zdGVwcyksIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSk7XHJcblx0XHR0aGlzLnN0ZXBzJC5zdWJzY3JpYmUoc3RlcHMgPT4gKHRoaXMuc3RlcHMgPSBzdGVwcykpO1xyXG5cdFx0dGhpcy5fbG9hZF9zY2VuYXJpb19hbmRfbWFwX3NjZW5hcmlvX3N0ZXBfdG9fc3RlcHNfY2xhc3MoKTtcclxuXHRcdHRoaXMuc2NlbmFyaW8kLnN1YnNjcmliZShzID0+IHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLm5leHQoKTtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUuY29tcGxldGUoKTtcclxuXHR9XHJcblx0c2F2ZSgpIHtcclxuXHRcdGNvbnN0IHNjZW5hcmlvID0gdGhpcy5zY2VuYXJpbyQuZ2V0VmFsdWUoKTtcclxuXHRcdHRoaXMuc3RlcExvYWRlcnMuZm9yRWFjaChzdGVwTG9hZGVyID0+IHtcclxuXHRcdFx0c2NlbmFyaW8uc3RlcHMuZmluZChzdGVwID0+IHN0ZXAubmFtZSA9PT0gc3RlcExvYWRlci5zdGVwLm5hbWUpLnBhcmFtcyA9IHN0ZXBMb2FkZXIucGFyYW1zO1xyXG5cdFx0fSk7XHJcblx0XHRzY2VuYXJpby5mZWF0dXJlSWQgPSB0aGlzLnNjZW5hcmlvRm9ybUdyb3VwLnZhbHVlLmZlYXR1cmVJZDtcclxuXHRcdHNjZW5hcmlvLm5hbWUgPSB0aGlzLnNjZW5hcmlvRm9ybUdyb3VwLnZhbHVlLm5hbWU7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRTY2VuYXJpb0FjdGlvbihzY2VuYXJpbykpO1xyXG5cdH1cclxuXHRhZGRTdGVwVG9TY2VuYXJpbyhzdGVwOiBHd3RTdGVwKSB7XHJcblx0XHRjb25zdCBzY2VuYXJpbyA9IHRoaXMuc2NlbmFyaW8kLmdldFZhbHVlKCk7XHJcblx0XHRzY2VuYXJpby5zdGVwcy5wdXNoKHN0ZXApO1xyXG5cdFx0dGhpcy5zY2VuYXJpbyQubmV4dChzY2VuYXJpbyk7XHJcblx0fVxyXG5cdGRlbGV0ZVN0ZXBGcm9tU2NlbmFyaW8oc3RlcDogR3d0U3RlcCkge1xyXG5cdFx0Y29uc3Qgc2NlbmFyaW8gPSB0aGlzLnNjZW5hcmlvJC5nZXRWYWx1ZSgpO1xyXG5cdFx0c2NlbmFyaW8uc3RlcHMuc3BsaWNlKHNjZW5hcmlvLnN0ZXBzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gc3RlcC5uYW1lKSwgMSk7XHJcblx0XHR0aGlzLnNjZW5hcmlvJC5uZXh0KHNjZW5hcmlvKTtcclxuXHR9XHJcblx0ZGVjU2NlbmFyaW9TdGVwUHJpb3JpdHkoc3RlcDogR3d0U3RlcCkgeyB9XHJcblx0aW5jU2NlbmFyaW9TdGVwUHJpb3JpdHkoc3RlcDogR3d0U3RlcCkgeyB9XHJcblx0YWRkTmV3U2NlbmFyaW8oKSB7XHJcblx0XHRjb25zdCBzY2VuYXJpb3MgPSB0aGlzLnNjZW5hcmlvcyQuZ2V0VmFsdWUoKTtcclxuXHRcdHNjZW5hcmlvcy5wdXNoKFxyXG5cdFx0XHRuZXcgR3d0U2NlbmFyaW9Nb2RlbCh7XHJcblx0XHRcdFx0YW5jaG9ySWQ6IHRoaXMuZGF0YS5hbmNob3JJZFxyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHRcdHRoaXMuc2NlbmFyaW9zJC5uZXh0KHNjZW5hcmlvcyk7XHJcblx0fVxyXG5cdGFjdGl2ZVNjZW5hcmlvKHNjZW5hcmlvOiBHd3RTY2VuYXJpb01vZGVsKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHNjZW5hcmlvLnN0ZXBzID0gc2NlbmFyaW8uc3RlcHMubWFwKHNjZW5hcmlvU3RlcCA9PiB7XHJcblx0XHRcdGNvbnN0IF9zdGVwID0gdGhpcy5zdGVwcy5maW5kKHN0ZXAgPT4gc3RlcC5pZCA9PT0gc2NlbmFyaW9TdGVwLmlkKTtcclxuXHRcdFx0Y29uc3Qgc3RlcCA9IE9iamVjdC5jcmVhdGUoX3N0ZXApO1xyXG5cdFx0XHRzdGVwLnBhcmFtcyA9IHNjZW5hcmlvU3RlcC5wYXJhbXM7XHJcblx0XHRcdHJldHVybiBzdGVwO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnNjZW5hcmlvRm9ybUdyb3VwLnBhdGNoVmFsdWUoc2NlbmFyaW8pO1xyXG5cdFx0c2NlbmFyaW8uYW5jaG9ySWQgPSB0aGlzLmRhdGEuYW5jaG9ySWQ7XHJcblx0XHR0aGlzLnNjZW5hcmlvJC5uZXh0KHNjZW5hcmlvKTtcclxuXHR9XHJcblxyXG5cdF9sb2FkX3NjZW5hcmlvX2FuZF9tYXBfc2NlbmFyaW9fc3RlcF90b19zdGVwc19jbGFzcygpIHtcclxuXHRcdHRoaXMuc2NlbmFyaW9TZXJ2aWNlXHJcblx0XHRcdC5nZXRBbmNob3JTY2VuYXJpb3ModGhpcy5kYXRhLmFuY2hvcklkKVxyXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSkpXHJcblx0XHRcdC5zdWJzY3JpYmUoc2NlbmFyaW9zID0+IHtcclxuXHRcdFx0XHR0aGlzLnNjZW5hcmlvcyQubmV4dChzY2VuYXJpb3MpO1xyXG5cdFx0XHRcdHRoaXMuYWN0aXZlU2NlbmFyaW8oc2NlbmFyaW9zWzBdIHx8IG5ldyBHd3RTY2VuYXJpb01vZGVsKCkpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0X2NyZWF0ZV9zY2VuYXJpb19mb3JtX2dyb3VwKCkge1xyXG5cdFx0dGhpcy5zY2VuYXJpb0Zvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRmZWF0dXJlSWQ6IG5ldyBGb3JtQ29udHJvbCgpLFxyXG5cdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9yZXNldF9zY2VuYXJpb19mb3JtX2dyb3VwX2FuZF9wYXRjaF93aXRoX2FjdGl2ZV9zY2VuYXJpbygpIHtcclxuXHRcdHRoaXMuc2NlbmFyaW9Gb3JtR3JvdXAucmVzZXQoKTtcclxuXHRcdHRoaXMuc2NlbmFyaW9Gb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLnNjZW5hcmlvJC5nZXRWYWx1ZSgpKTtcclxuXHR9XHJcblx0X2luaXRfZmVhdHVyZXNfbGlzdCgpIHtcclxuXHRcdHRoaXMuZmVhdHVyZXMkID0gW1wiw5nChcOYwq/Dm8KMw5jCscObwozDmMKqIMOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqjDmMKxw5jCp8OYwrPDmMKnw5jCsyDDmMKvw5jCs8OYwqrDmMKxw5jCs8Obwowgw5nCh8OYwqfDm8KMIMOawqnDmMKnw5jCscOYwqjDmMKxXCJdO1xyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBHd3RTdGVwVHlwZXMge1xyXG5cdFwiR2l2ZW5cIiA9IFwiR2l2ZW5cIixcclxuXHRcIldoZW5cIiA9IFwiV2hlblwiLFxyXG5cdFwiVGhlblwiID0gXCJUaGVuXCIsXHJcblx0XCJBbmRcIiA9IFwiQW5kXCIsXHJcblx0XCJCdXRcIiA9IFwiQnV0XCJcclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBPbkluaXQsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgemlwLCBTdWJqZWN0LCBjb21iaW5lTGF0ZXN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgeyBHd3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4uL2d3dC12aWV3L2d3dC12aWV3LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ydWxlLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEd3dFNjZW5hcmlvTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zY2VuYXJpby5tb2RlbFwiO1xyXG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2NlbmFyaW8uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHd3RTdGVwVHlwZXMgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zdGVwLXR5cGVzLmVudW1cIjtcclxuaW1wb3J0IHsgR3d0U3RlcCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXN0ZXAubW9kZWxcIjtcclxuaW1wb3J0IHsgUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3J1bGUtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogXCJbcnVsZUFuY2hvcl1cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUnVsZUFuY2hvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHR1bnN1YnNjcmliZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblx0QElucHV0KFwicnVsZUFuY2hvclwiKSBhbmNob3JJZDtcclxuXHRzdGVwczogR3d0U3RlcFtdO1xyXG5cdGFjdGl2ZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0YWN0aXZlOiBib29sZWFuO1xyXG5cdGJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblx0YW5jaG9yU2NlbmFyaW9zJDogT2JzZXJ2YWJsZTxHd3RTY2VuYXJpb01vZGVsW10+O1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzY2VuYXJpb1NlcnZpY2U6IFNjZW5hcmlvU2VydmljZSxcclxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuXHRcdHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuXHRcdHByaXZhdGUgYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0XHJcblx0KSB7XHJcblx0XHR0aGlzLmFjdGl2ZSQgPSB0aGlzLnN0b3JlLnNlbGVjdChzID0+IHMucnVsZS5ydWxlQW5jaG9ycy5hY3RpdmUpLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpKTtcclxuXHRcdHRoaXMuYWN0aXZlJC5zdWJzY3JpYmUoYWN0aXZlID0+ICh0aGlzLmFjdGl2ZSA9IGFjdGl2ZSkpO1xyXG5cdFx0dGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJuZ3MtcnVsZS1hbmNob3JcIik7XHJcblx0XHR0aGlzLnN0ZXBzID0gdGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS5zdGVwcztcclxuXHR9XHJcblxyXG5cdEBIb3N0TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIpXHJcblx0b25Nb3VzZUVudGVyKCkge1xyXG5cdFx0aWYgKCF0aGlzLmFjdGl2ZSkgeyByZXR1cm47IH1cclxuXHRcdHRoaXMuc2hvd0FuY2hvcigpO1xyXG5cdH1cclxuXHJcblx0QEhvc3RMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIilcclxuXHRvbk1vdXNlTGVhdmUoKSB7XHJcblx0XHRpZiAoIXRoaXMuYWN0aXZlKSB7IHJldHVybjsgfVxyXG5cdFx0dGhpcy5oaWRlQW5jaG9yKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNob3dBbmNob3IoKSB7XHJcblx0XHR0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNob3ctYW5jaG9yXCIpO1xyXG5cdH1cclxuXHRwcml2YXRlIGhpZGVBbmNob3IoKSB7XHJcblx0XHR0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctYW5jaG9yXCIpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyBUT0RPOiByZW1vdmVcclxuXHRcdC8vIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNob3dBbmNob3JzQWN0aW9uKCkpO1xyXG5cclxuXHRcdHRoaXMuYW5jaG9yU2NlbmFyaW9zJCA9IHRoaXMuc2NlbmFyaW9TZXJ2aWNlXHJcblx0XHRcdC5nZXRBbmNob3JTY2VuYXJpb3ModGhpcy5hbmNob3JJZCkgLy8gVE9ETzogcmVwbGFjZSBzZXJ2aWNlIGNhbGwgd2l0aCBuZ3J4IGFjdGlvblxyXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSksIGZpbHRlcihzY2VuYXJpbyA9PiBzY2VuYXJpbyAhPT0gdW5kZWZpbmVkKSk7XHJcblx0XHR0aGlzLmFjdGl2ZSQuc3Vic2NyaWJlKGFjdGl2ZSA9PiB7XHJcblx0XHRcdGlmIChhY3RpdmUpIHsgdGhpcy5fYWN0aXZhdGVfYW5jaG9yKCk7IH0gZWxzZSB7IHRoaXMuX2RlYWN0aXZhdGVfYW5jaG9yKCk7IH1cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5hbmNob3JTY2VuYXJpb3MkLnN1YnNjcmliZShzY2VuYXJpb3MgPT4ge1xyXG5cdFx0XHRzY2VuYXJpb3MuZm9yRWFjaChzY2VuYXJpbyA9PiB7XHJcblx0XHRcdFx0c2NlbmFyaW8uc3RlcHMgPSBzY2VuYXJpby5zdGVwcy5tYXAoc2NlbmFyaW9TdGVwID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IHN0ZXAgPSB0aGlzLnN0ZXBzLmZpbmQoc3RlcCA9PiBzdGVwLmlkID09PSBzY2VuYXJpb1N0ZXAuaWQpO1xyXG5cdFx0XHRcdFx0Y29uc3QgX3N0ZXAgPSBPYmplY3QuY3JlYXRlKHN0ZXApO1xyXG5cdFx0XHRcdFx0X3N0ZXAucGFyYW1zID0gc2NlbmFyaW9TdGVwLnBhcmFtcztcclxuXHRcdFx0XHRcdHJldHVybiBfc3RlcDtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0dGhpcy5fZG9fc2NlbmFyaW8oc2NlbmFyaW8pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUubmV4dCgpO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xyXG5cdH1cclxuXHRfYWN0aXZhdGVfYW5jaG9yKCkge1xyXG5cdFx0dGhpcy5fY3JlYXRlX2FuY2hvcigpO1xyXG5cdFx0dGhpcy5fc2V0X2FjdGl2ZV9jbGFzc190b19ob3N0KCk7XHJcblx0fVxyXG5cdF9kZWFjdGl2YXRlX2FuY2hvcigpIHtcclxuXHRcdHRoaXMuX3JlbW92ZV9hbmNob3IoKTtcclxuXHRcdHRoaXMuX3JlbW92ZV9hY3RpdmVfY2xhc3NfdG9faG9zdCgpO1xyXG5cdH1cclxuXHRfc2V0X2FjdGl2ZV9jbGFzc190b19ob3N0KCkge1xyXG5cdFx0dGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhbmNob3ItYWN0aXZlXCIpO1xyXG5cdH1cclxuXHRfcmVtb3ZlX2FjdGl2ZV9jbGFzc190b19ob3N0KCkge1xyXG5cdFx0dGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhbmNob3ItYWN0aXZlXCIpO1xyXG5cdH1cclxuXHRfY3JlYXRlX2FuY2hvcigpIHtcclxuXHRcdHRoaXMuYnV0dG9uID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cdFx0dGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZChcIm5ncy1ydWxlLWFuY2hvci1idXR0b25cIiwgXCJtYXQtaWNvbi1idXR0b25cIik7XHJcblx0XHR0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJtYXQtaWNvbi1idXR0b25cIiwgXCJcIik7XHJcblx0XHR0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0dGhpcy5ib3R0b21TaGVldC5vcGVuKEd3dFZpZXdDb21wb25lbnQsIHtcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRhbmNob3JJZDogdGhpcy5hbmNob3JJZFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cGFuZWxDbGFzczogXCJtYWdlbnRhLXRoZW1lXCJcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IG1hdGljb24gPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoXCJtYXQtaWNvblwiKTtcclxuXHRcdG1hdGljb24uY2xhc3NMaXN0LmFkZChcIm1hdC1pY29uXCIsIFwibWF0ZXJpYWwtaWNvbnNcIik7XHJcblx0XHRjb25zdCBpY29uID0gdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KFwic2V0dGluZ3NcIik7XHJcblx0XHR0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKG1hdGljb24sIGljb24pO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbiwgbWF0aWNvbik7XHJcblx0XHR0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5idXR0b24pO1xyXG5cdH1cclxuXHRfcmVtb3ZlX2FuY2hvcigpIHtcclxuXHRcdGlmICghdGhpcy5idXR0b24pIHsgcmV0dXJuOyB9XHJcblx0XHR0aGlzLmJ1dHRvbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuYnV0dG9uKTtcclxuXHR9XHJcblx0X2RvX3NjZW5hcmlvKF9zY2VuYXJpbzogR3d0U2NlbmFyaW9Nb2RlbCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRjb25zdCBzY2VuYXJpbyA9IF9zY2VuYXJpbztcclxuXHRcdGNvbnN0IGdpdmVuU3RlcEludGVycHJldG9ycyA9IHNjZW5hcmlvLnN0ZXBzXHJcblx0XHRcdC5maWx0ZXIoc3RlcCA9PiBzdGVwLnR5cGUgPT09IEd3dFN0ZXBUeXBlcy5HaXZlbilcclxuXHRcdFx0Lm1hcChzdGVwID0+IHN0ZXAuaW50ZXJwZXJhdG9yKHN0ZXAucGFyYW1zKSk7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGNvbWJpbmVMYXRlc3QoZ2l2ZW5TdGVwSW50ZXJwcmV0b3JzKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSksXHJcblx0XHRcdFx0bWFwKCh2YWx1ZXM6IGJvb2xlYW5bXSkgPT4gdmFsdWVzLmV2ZXJ5KHZhbHVlID0+IHZhbHVlID09PSB0cnVlKSksXHJcblx0XHRcdFx0c3dpdGNoTWFwKGdpdmVuUmVzdWx0ID0+IHtcclxuXHRcdFx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRcdFx0aWYgKGdpdmVuUmVzdWx0KSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHRoZW5TdGVwSW50ZXJwcmV0b3JzID0gc2NlbmFyaW8uc3RlcHNcclxuXHRcdFx0XHRcdFx0XHQuZmlsdGVyKHN0ZXAgPT4gc3RlcC50eXBlID09PSBHd3RTdGVwVHlwZXMuVGhlbilcclxuXHRcdFx0XHRcdFx0XHQubWFwKHN0ZXAgPT4gc3RlcC5pbnRlcnBlcmF0b3Ioc3RlcC5wYXJhbXMsIHRoaXMuZWwpKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGNvbWJpbmVMYXRlc3RcclxuXHRcdFx0XHRcdFx0XHQuYXBwbHkobnVsbCwgdGhlblN0ZXBJbnRlcnByZXRvcnMpXHJcblx0XHRcdFx0XHRcdFx0LnBpcGUobWFwKCh2YWx1ZXM6IGJvb2xlYW5bXSkgPT4gdmFsdWVzLmV2ZXJ5KHZhbHVlID0+IHZhbHVlID09PSB0cnVlKSkpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHsgcmV0dXJuIG9mKGZhbHNlKTsgfVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7IH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMsIFNjZW5hcmlvc0xpc3RTdGFydEFjdGlvbiwgU2NlbmFyaW9GZWNoZWRBY3Rpb24gfSBmcm9tIFwiLi9zY2VuYXJpby1kYi5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFNjZW5hcmlvU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2VuYXJpby5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb3NEYkVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSBzZXJ2aWNlOiBTY2VuYXJpb1NlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEVkaXRQcm9maWxlUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVClcclxuXHRcdC5waXBlKG1hcCgoKSA9PiBuZXcgU2NlbmFyaW9zTGlzdFN0YXJ0QWN0aW9uKCkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0VXBzZXJ0U2NlbmFyaW8kID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuVVBTRVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoc2NlbmFyaW8gPT4gdGhpcy5zZXJ2aWNlLnVwc2VydChzY2VuYXJpbykpLFxyXG5cdFx0XHRtYXAoc2NlbmFyaW8gPT4gbmV3IFNjZW5hcmlvRmVjaGVkQWN0aW9uKHNjZW5hcmlvKSlcclxuXHRcdCk7XHJcblxyXG5cdC8vIEBFZmZlY3QoKVxyXG5cdC8vIEdldFNjZW5hcmlvJCA9IHRoaXMuYWN0aW9ucyRcclxuXHQvLyBcdC5vZlR5cGUoU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLkdFVF9TQ0VOQVJJTylcclxuXHQvLyBcdC5waXBlKFxyXG5cdC8vIFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHQvLyBcdFx0c3dpdGNoTWFwKGlkID0+IHRoaXMuc2VydmljZS5nZXQoaWQpKSxcclxuXHQvLyBcdFx0bWFwKHJ1bGUgPT4gbmV3IFNjZW5hcmlvRmVjaGVkQWN0aW9uKHJ1bGUpKVxyXG5cdC8vIFx0KTtcclxuXHJcblx0Ly8gQEVmZmVjdCgpXHJcblx0Ly8gZ2V0X3J1bGVzX2xpc3QkID0gdGhpcy5hY3Rpb25zJFxyXG5cdC8vIFx0Lm9mVHlwZShTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfU1RBUlQpXHJcblx0Ly8gXHQucGlwZShcclxuXHQvLyBcdFx0c3dpdGNoTWFwKChkYXRhOiBhbnkpID0+IHRoaXMuc2VydmljZS5nZXRMaXN0KCkpLFxyXG5cdC8vIFx0XHRtYXAocmVzID0+IG5ldyBTY2VuYXJpb3NMaXN0U3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHQvLyBcdFx0Y2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgU2NlbmFyaW9zTGlzdEZhaWxlZEFjdGlvbigpKSlcclxuXHQvLyBcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgUnVsZXNMaXN0QWN0aW9uVHlwZXMsIFJ1bGVzTGlzdFN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4vcnVsZS1kYi5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSdWxlc0xpc3RFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4pIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEVkaXRQcm9maWxlUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUKS5tYXAoKCkgPT4gbmV3IFJ1bGVzTGlzdFN0YXJ0QWN0aW9uKCkpO1xyXG5cclxuXHQvLyBARWZmZWN0KClcclxuXHQvLyBHZXRSdWxlJCA9IHRoaXMuYWN0aW9ucyRcclxuXHQvLyBcdC5vZlR5cGUoUnVsZXNMaXN0QWN0aW9uVHlwZXMuR0VUX1JVTEUpXHJcblx0Ly8gXHQucGlwZShcclxuXHQvLyBcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0Ly8gXHRcdHN3aXRjaE1hcChpZCA9PiB0aGlzLnNlcnZpY2UuZ2V0KGlkKSksXHJcblx0Ly8gXHRcdG1hcChydWxlID0+IG5ldyBSdWxlRmVjaGVkQWN0aW9uKHJ1bGUpKVxyXG5cdC8vIFx0KTtcclxuXHJcblx0Ly8gQEVmZmVjdCgpXHJcblx0Ly8gZ2V0X3J1bGVzX2xpc3QkID0gdGhpcy5hY3Rpb25zJFxyXG5cdC8vIFx0Lm9mVHlwZShSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX1NUQVJUKVxyXG5cdC8vIFx0LnBpcGUoXHJcblx0Ly8gXHRcdHN3aXRjaE1hcCgoZGF0YTogYW55KSA9PiB0aGlzLnNlcnZpY2UuZ2V0TGlzdCgpKSxcclxuXHQvLyBcdFx0bWFwKHJlcyA9PiBuZXcgUnVsZXNMaXN0U3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHQvLyBcdFx0Y2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgUnVsZXNMaXN0RmFpbGVkQWN0aW9uKCkpKVxyXG5cdC8vIFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHsgZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIjtcblxuaW1wb3J0IHsgU2hvd0FuY2hvcnNBY3Rpb24sIEhpZGVBbmNob3JzQWN0aW9uIH0gZnJvbSBcIi4uL3J1bGUtYW5jaG9yL3J1bGUtYW5jaG9yLmFjdGlvbnNcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImd3dC1tb2RlLWJ1dHRvblwiLFxuXHR0ZW1wbGF0ZTogYCAgICA8YnV0dG9uICpuZ0lmPVwiIShoYXZlUGVybWlzc2lvbiQgfCBhc3luYylcIiBjbGFzcz1cImJ0blwiIG1hdC1taW5pLWZhYiB0eXBlPVwiYnV0dG9uXCIgcm91dGVyTGluaz1cImF1dGgvZnJvbnRlbmQvc2lnbmluXCIgZnhGbGV4PVwibm9ncm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cbiAgICAgIDxtYXQtaWNvbj5maW5nZXJwcmludDwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG5cbiAgICA8YnV0dG9uICpuZ0lmPVwiaGF2ZVBlcm1pc3Npb24kIHwgYXN5bmNcIiBjbGFzcz1cImJ0blwiIG1hdC1taW5pLWZhYiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInRvZ2dsZUFuY2hvcnMoKVwiIGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XG4gICAgICA8bWF0LWljb24+c2V0dGluZ3M8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPmAsXG5cdHN0eWxlczogW2AuYnRue3Bvc2l0aW9uOmZpeGVkO2JvdHRvbToyNXB4O2xlZnQ6MjVweDt6LWluZGV4OjN9YF1cbn0pXG5leHBvcnQgY2xhc3MgR3d0TW9kZUJ1dHRvbkNvbXBvbmVudCB7XG5cdGFuY2hvcnNNb2RlOiBib29sZWFuO1xuXHRoYXZlUGVybWlzc2lvbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcblx0XHR0aGlzLmFuY2hvcnNNb2RlID0gZmFsc2U7XG5cdFx0dGhpcy5oYXZlUGVybWlzc2lvbiQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRGcm9udGVuZEF1dGhlbnRpY2F0aW9uU3RhdGUpO1xuXHR9XG5cblx0dG9nZ2xlQW5jaG9ycygpIHtcblx0XHRpZiAodGhpcy5hbmNob3JzTW9kZSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNob3dBbmNob3JzQWN0aW9uKCkpO1xuXHRcdFx0dGhpcy5hbmNob3JzTW9kZSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEhpZGVBbmNob3JzQWN0aW9uKCkpO1xuXHRcdFx0dGhpcy5hbmNob3JzTW9kZSA9IGZhbHNlO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9vZlwiO1xyXG5cclxuaW1wb3J0IHsgUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vcnVsZS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3J1bGUucmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJ1bGVTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge31cclxuXHJcblx0Ly8gYWRkKCk6IE9ic2VydmFibGU8VGVzdE1vZGVsPiB7XHJcblx0Ly8gXHQvLyBjb25zdCBtb2RlbCA9IG5ldyBBZGRSdWxlQXBpTW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHQvLyBcdC8vIHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHQvLyBcdC8vIFx0LmZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy5hZGRSdWxlICE9IFwiXCIpXHJcblx0Ly8gXHQvLyBcdC50YWtlKDEpXHJcblx0Ly8gXHQvLyBcdC5zd2l0Y2hNYXAoY29uZmlnID0+IHRoaXMuaHR0cC5wb3N0KGNvbmZpZy5lbmRwb2ludHMuYWRkUnVsZSwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSkpXHJcblx0Ly8gXHQvLyBcdC5tYXAoKHJlc3BvbnNlOiBBZGRSdWxlQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdCk7XHJcblx0Ly8gfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdFRhYnNNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRNYXRUYWJsZU1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVNb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi9ydWxlLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vcnVsZS1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBSdWxlUmVkdWNlcnMgfSBmcm9tIFwiLi9ydWxlLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFJ1bGVDb21wb25lbnQgfSBmcm9tIFwiLi9ydWxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSdWxlQW5jaG9yRGlyZWN0aXZlIH0gZnJvbSBcIi4vcnVsZS1hbmNob3IvcnVsZS1hbmNob3IuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IEd3dFZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9nd3Qtdmlldy9nd3Qtdmlldy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU3RlcExvYWRlckRpcmVjdGl2ZSB9IGZyb20gXCIuL3N0ZXAtbG9hZGVyL3N0ZXAtbG9hZGVyLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBTY2VuYXJpb3NEYkVmZmVjdHMgfSBmcm9tIFwiLi9kYi9zY2VuYXJpby1kYi5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFJ1bGVzTGlzdEVmZmVjdHMgfSBmcm9tIFwiLi9kYi9ydWxlLWRiLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgR3d0TW9kZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCIuL21vZGUtYnV0dG9uL21vZGUtYnV0dG9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSdWxlU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3J1bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9ydWxlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zY2VuYXJpby5zZXJ2aWNlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRcdE1hdFRhYmxlTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRUYWJzTW9kdWxlLFxyXG5cdFx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdEJyb3dzZXJBbmltYXRpb25zTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFsgUnVsZUNvbXBvbmVudCwgUnVsZUFuY2hvckRpcmVjdGl2ZSwgR3d0Vmlld0NvbXBvbmVudCwgU3RlcExvYWRlckRpcmVjdGl2ZSwgR3d0TW9kZUJ1dHRvbkNvbXBvbmVudCBdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogWyBHd3RWaWV3Q29tcG9uZW50IF0sXHJcblx0ZXhwb3J0czogWyBSdWxlQW5jaG9yRGlyZWN0aXZlLCBHd3RNb2RlQnV0dG9uQ29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJ1bGVNb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IFJ1bGVNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290UnVsZU1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbXHJcblx0XHRcdFx0eyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIHx8IHt9IH0sXHJcblx0XHRcdFx0UnVsZVNlcnZpY2UsXHJcblx0XHRcdFx0UnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0XHRcdFNjZW5hcmlvU2VydmljZVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRSdWxlTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcInJ1bGVcIiwgUnVsZVJlZHVjZXJzKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbIFJ1bGVzTGlzdEVmZmVjdHMsIFNjZW5hcmlvc0RiRWZmZWN0cyBdKSxcclxuXHRcdFJvdXRpbmdNb2R1bGVcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFsgUnVsZU1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290UnVsZU1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwicmVkdWNlciIsImZyb21SdWxlQW5jaG9yLlJlZHVjZXIiLCJmcm9tUnVsZURiQW5jaG9yLnJlZHVjZXIiLCJmcm9tU2NlbmFyaW9EYkFuY2hvci5yZWR1Y2VyIiwiQmVoYXZpb3JTdWJqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFnQkEsSUFBYSxxQkFBcUIsR0FBcUI7SUFDdEQsU0FBUyxFQUFFO1FBQ1YsTUFBTSxFQUFFLG1CQUFtQjtRQUMzQixHQUFHLEVBQUUsNkNBQTZDO0tBQ2xEO0lBQ0QsV0FBVyxFQUFFLEVBQUU7SUFDZixHQUFHLEVBQUU7UUFDSixVQUFVLEVBQUUsS0FBSztRQUNqQixlQUFlLEVBQUUsNkJBQTZCO0tBQzlDO0NBQ0QsQ0FBQzs7QUFDRixJQUFhLG1CQUFtQixHQUFHLElBQUksY0FBYyxDQUFtQixrQkFBa0IsQ0FBQzs7Ozs7O0FDM0IzRjtJQVNDO0tBQWdCOzs7O0lBRWhCLGdDQUFROzs7SUFBUixlQUFhOztnQkFUYixTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSxtR0FFSjtpQkFDTjs7Ozt3QkFQRDs7Ozs7OztBQ0NBO0FBSUEsSUFBTSxNQUFNLEdBQVc7SUFDdEI7UUFDQyxJQUFJLEVBQUUsTUFBTTtRQUNaLFNBQVMsRUFBRSxhQUFhO0tBRXhCO0NBQ0QsQ0FBQzs7QUFFRixJQUFhLGFBQWEsR0FBd0IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Ozs7Ozs7O0lDVjlFLGNBQWUsOEJBQThCO0lBQzdDLGNBQWUsOEJBQThCOztJQUc5Qzs7UUFDQyxZQUFnQixzQkFBc0IsQ0FBQyxZQUFZLENBQUM7OzRCQVJyRDtJQVNDLENBQUE7QUFGRCxJQUlBOztRQUNDLFlBQWdCLHNCQUFzQixDQUFDLFlBQVksQ0FBQzs7NEJBWnJEO0lBYUM7Ozs7Ozs7QUNQRCxJQUFhLFlBQVksR0FBVTtJQUNsQyxNQUFNLEVBQUUsS0FBSztDQUNiLENBQUM7Ozs7OztBQUVGLFNBQWdCLE9BQU8sQ0FBQyxLQUFvQixFQUFFLE1BQXlCO0lBQS9DLHNCQUFBLEVBQUEsb0JBQW9CO0lBQzNDLFFBQVEsTUFBTSxDQUFDLElBQUk7UUFDbEIsS0FBSyxzQkFBc0IsQ0FBQyxZQUFZLEVBQUU7WUFDekMsb0JBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxJQUFJLElBQ1g7U0FDRjtRQUVELEtBQUssc0JBQXNCLENBQUMsWUFBWSxFQUFFO1lBQ3pDLG9CQUNJLEtBQUssSUFDUixNQUFNLEVBQUUsS0FBSyxJQUNaO1NBQ0Y7UUFFRCxTQUFTO1lBQ1IsT0FBTyxLQUFLLENBQUM7U0FDYjtLQUNEO0NBQ0Q7Ozs7Ozs7OztJQ3pCQSxZQUFhLHVCQUF1QjtJQUNwQyxrQkFBbUIsNkJBQTZCO0lBQ2hELG9CQUFxQiwrQkFBK0I7SUFDcEQsbUJBQW9CLDhCQUE4QjtJQUNsRCxhQUFjLHdCQUF3QjtJQUN0QyxVQUFXLHFCQUFxQjtJQUNoQyxjQUFlLHlCQUF5Qjs7QUFNekMsSUFBQTs7UUFDQyxZQUFnQixvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQzs7K0JBbEJ2RDtJQW1CQyxDQUFBOzs7Ozs7O0FDVkQsSUFBYUEsY0FBWSxHQUFVO0lBQ2xDLE1BQU0sRUFBRSxVQUFVO0lBQ2xCLElBQUksRUFBRSxFQUFFO0NBQ1IsQ0FBQzs7Ozs7O0FBQ0YsU0FBZ0IsT0FBTyxDQUFDLEtBQW9CLEVBQUUsTUFBd0I7SUFBOUMsc0JBQUEsRUFBQSxzQkFBb0I7SUFDM0MsUUFBUSxNQUFNLENBQUMsSUFBSTtRQUNsQixLQUFLLG9CQUFvQixDQUFDLFVBQVUsRUFBRTtZQUNyQyxvQkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLE9BQU8sSUFDZDtTQUNGO1FBQ0QsS0FBSyxvQkFBb0IsQ0FBQyxnQkFBZ0IsRUFBRTtZQUMzQyxvQkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLFNBQVMsSUFDaEI7U0FDRjtRQUNELEtBQUssb0JBQW9CLENBQUMsa0JBQWtCLEVBQUU7WUFDN0Msb0JBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxFQUNwQixNQUFNLEVBQUUsU0FBUyxJQUNoQjtTQUNGO1FBQ0QsS0FBSyxvQkFBb0IsQ0FBQyxpQkFBaUIsRUFBRTtZQUM1QyxvQkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLFFBQVEsSUFDZjtTQUNGO1FBQ0QsS0FBSyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUU7O1lBQ3RDLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O1lBQ2pDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBQSxDQUFDLENBQUM7WUFDN0UsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JFO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzFCO1lBQ0Qsb0JBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxJQUFJLElBQ1Q7U0FDRjtRQUNELEtBQUssb0JBQW9CLENBQUMsWUFBWSxFQUFFOztZQUN2QyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztZQUNqQyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUEsQ0FBQyxDQUFDO1lBQzdFLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyRTtpQkFBTTtnQkFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMxQjtZQUNELG9CQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsSUFBSSxJQUNUO1NBQ0Y7UUFFRCxTQUFTO1lBQ1IsT0FBTyxLQUFLLENBQUM7U0FDYjtLQUNEO0NBQ0Q7Ozs7Ozs7O0lDbEVBLGdCQUFpQiwwQ0FBMEM7SUFDM0Qsc0JBQXVCLHFDQUFxQztJQUM1RCx3QkFBeUIsdUNBQXVDO0lBQ2hFLHVCQUF3QixzQ0FBc0M7SUFDOUQsUUFBUyw2Q0FBNkM7SUFDdEQsY0FBZSw2QkFBNkI7SUFDNUMsa0JBQW1CLGlDQUFpQztJQUVwRCxXQUFZLCtCQUErQjs7QUFNNUMsSUFBQTs7UUFDQyxZQUFnQix3QkFBd0IsQ0FBQyxvQkFBb0IsQ0FBQzs7bUNBcEIvRDtJQXFCQyxDQUFBO0FBRkQsQUFVQSxJQUFBO0lBRUMsOEJBQW1CLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBRDVDLFlBQWdCLHdCQUF3QixDQUFDLE1BQU0sQ0FBQztLQUNBOytCQS9CakQ7SUFnQ0MsQ0FBQTtBQUhELEFBUUEsSUFBQTtJQUVDLDhCQUFtQixPQUF5QjtRQUF6QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUQ1QyxZQUFnQix3QkFBd0IsQ0FBQyxnQkFBZ0IsQ0FBQztLQUNWOytCQXZDakQ7SUF3Q0MsQ0FBQTs7Ozs7OztBQy9CRCxJQUFhQSxjQUFZLEdBQVU7SUFDbEMsTUFBTSxFQUFFLFVBQVU7SUFDbEIsSUFBSSxFQUFFLEVBQUU7Q0FDUixDQUFDOzs7Ozs7QUFDRixTQUFnQkMsU0FBTyxDQUFDLEtBQW9CLEVBQUUsTUFBNEI7SUFBbEQsc0JBQUEsRUFBQSxzQkFBb0I7SUFDM0MsUUFBUSxNQUFNLENBQUMsSUFBSTtRQUNsQixLQUFLLHdCQUF3QixDQUFDLGNBQWMsRUFBRTtZQUM3QyxvQkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLE9BQU8sSUFDZDtTQUNGO1FBQ0QsS0FBSyx3QkFBd0IsQ0FBQyxvQkFBb0IsRUFBRTtZQUNuRCxvQkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLFNBQVMsSUFDaEI7U0FDRjtRQUNELEtBQUssd0JBQXdCLENBQUMsc0JBQXNCLEVBQUU7WUFDckQsb0JBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxFQUNwQixNQUFNLEVBQUUsU0FBUyxJQUNoQjtTQUNGO1FBQ0QsS0FBSyx3QkFBd0IsQ0FBQyxxQkFBcUIsRUFBRTtZQUNwRCxvQkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLFFBQVEsSUFDZjtTQUNGO1FBQ0QsS0FBSyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUU7O1lBQ3JDLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O1lBQ2pDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBQSxDQUFDLENBQUM7WUFDN0UsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JFO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzFCO1lBQ0Qsb0JBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxJQUFJLElBQ1Q7U0FDRjtRQUNELEtBQUssd0JBQXdCLENBQUMsZ0JBQWdCLEVBQUU7O1lBQy9DLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O1lBQ2pDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBQSxDQUFDLENBQUM7WUFDN0UsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JFO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzFCO1lBQ0Qsb0JBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxJQUFJLElBQ1Q7U0FDRjtRQUNELEtBQUssd0JBQXdCLENBQUMsU0FBUyxFQUFFOztZQUN4QyxJQUFNLE1BQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztZQUNqQyxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ2pDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFROztnQkFDekIsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEdBQUEsQ0FBQyxDQUFDO2dCQUN2RSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDbkIsTUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDL0Q7cUJBQU07b0JBQ04sTUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDcEI7YUFDRCxDQUFDLENBQUM7WUFDSCxvQkFDSSxLQUFLLElBQ1IsSUFBSSxFQUFFLE1BQUksSUFDVDtTQUNGO1FBRUQsU0FBUztZQUNSLE9BQU8sS0FBSyxDQUFDO1NBQ2I7S0FDRDtDQUNEOzs7Ozs7QUN2RkQ7QUFVQSxJQUFhLFlBQVksR0FBRztJQUMzQixXQUFXLEVBQUVDLE9BQXNCO0lBQ25DLEtBQUssRUFBRUMsT0FBd0I7SUFDL0IsU0FBUyxFQUFFQyxTQUE0QjtDQUN2Qzs7Ozs7O0FDZEQ7SUFrQkMsa0NBQzhCLFVBQTRCLEVBQ2pELE9BQ0E7UUFIVCxpQkFpQkM7UUFmUSxVQUFLLEdBQUwsS0FBSztRQUNMLGFBQVEsR0FBUixRQUFRO1FBTGpCLGVBQVUsSUFBSSxlQUFlLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7UUFRcEQsVUFBVSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBQSxDQUFDLENBQUM7UUFFL0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUVwRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7OztLQU9oQztJQXRCRCxzQkFBSSw0Q0FBTTs7OztRQUFWO1lBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3BCOzs7T0FBQTs7Z0JBTEQsVUFBVTs7OztnREFTUixNQUFNLFNBQUMsbUJBQW1CO2dCQWxCcEIsS0FBSztnQkFEZSxRQUFROzttQ0FBckM7Ozs7Ozs7QUNFQSxJQUFBO0lBTUMsMEJBQ0MsRUFNaUc7WUFOakcsNEJBTWlHLEVBTGhHLFlBQUcsRUFDSCxzQkFBUSxFQUNSLGdCQUFLLEVBQ0wsY0FBSSxFQUNKLHdCQUFTO1FBR1YsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7S0FDekI7Ozs7SUFDRCx5Q0FBYzs7O0lBQWQ7UUFDQyxPQUFPO1lBQ04sR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssUUFBQztnQkFDaEMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUNYLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ25CLElBQUMsQ0FBQztTQUNILENBQUM7S0FDRjsyQkFwQ0Y7SUFxQ0MsQ0FBQTs7Ozs7O0FDckNEO0lBMkJDLDZCQUFvQixRQUFrQyxFQUFVLFNBQTJCO1FBQXZFLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBa0I7S0FBSztJQUhoRyxzQkFBSSx1Q0FBTTs7OztRQUFWO1lBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO1NBQzVDOzs7T0FBQTs7OztJQUdELHlDQUFXOzs7SUFBWDtRQUNDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUduQjtLQUNEOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzdCLFNBQVM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUNkLGdFQUNrQixDQUNsQixDQUFDO1NBQ0Y7O1FBRUQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsU0FBUztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNsRDs7Z0JBbkNELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsb0JBQW9CO2lCQUc5Qjs7OztnQkFiQSx3QkFBd0I7Z0JBRHhCLGdCQUFnQjs7O3VCQWdCZixLQUFLOzRCQUNMLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7OzhCQXJCbkQ7Ozs7Ozs7QUNBQTtJQWlCQyx5QkFDUyxNQUNBLE9BQ0E7UUFIVCxpQkFPQztRQU5RLFNBQUksR0FBSixJQUFJO1FBQ0osVUFBSyxHQUFMLEtBQUs7UUFDTCxrQkFBYSxHQUFiLGFBQWE7UUFFckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxRQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxJQUFDLENBQUMsQ0FBQztLQUN6RDs7Ozs7SUFFRCxnQ0FBTTs7OztJQUFOLFVBQU8sUUFBMEI7O1FBQ2hDLElBQU0sS0FBSyxHQUFHLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUM1RixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUSxZQUFJLFFBQTRCLElBQUEsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDL0Q7Ozs7O0lBQ0QsNENBQWtCOzs7O0lBQWxCLFVBQW1CLFFBQWdCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDZCxHQUFHLENBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUM7YUFDbkcsR0FBRyxDQUFDLFVBQUEsUUFBUSxZQUFJLFFBQVEsQ0FBQyxNQUE0QixJQUFBLENBQUMsQ0FBQztLQUN6RDs7Ozs7SUFDRCw0Q0FBa0I7Ozs7SUFBbEIsVUFBbUIsR0FBVzs7UUFDN0IsSUFBTSxPQUFPLEdBQUcsSUFBSUMsaUJBQWUsQ0FBbUIsU0FBUyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLEtBQUs7YUFDUixNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUEsQ0FBQzthQUMxQyxJQUFJLENBQ0osTUFBTSxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsU0FBUyxJQUFJLElBQUksR0FBQSxDQUFDLEVBQ3RDLEdBQUcsQ0FBQyxVQUFBLFNBQVM7WUFDWixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBQSxDQUFDLENBQUM7U0FDdkQsQ0FBQyxFQUNGLE1BQU0sQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsSUFBSSxTQUFTLEdBQUEsQ0FBQyxDQUN6QzthQUNBLFNBQVMsQ0FBQyxVQUFBLFFBQVE7WUFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2QixDQUFDLENBQUM7UUFDSixPQUFPLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUM5Qjs7Ozs7SUFDRCwrQ0FBcUI7Ozs7SUFBckIsVUFBc0IsUUFBZ0I7O1FBQ3JDLElBQU0sT0FBTyxHQUFHLElBQUlBLGlCQUFlLENBQXFCLFNBQVMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxLQUFLO2FBQ1IsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFBLENBQUM7YUFDMUMsSUFBSSxDQUNKLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDYixNQUFNLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxTQUFTLElBQUksSUFBSSxHQUFBLENBQUMsRUFDdEMsR0FBRyxDQUFDLFVBQUEsU0FBUztZQUNaLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxHQUFHLElBQUksUUFBUSxHQUFBLENBQUMsQ0FBQztTQUM5RCxDQUFDLENBQ0Y7YUFDQSxTQUFTLENBQUMsVUFBQSxTQUFTO1lBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEIsQ0FBQyxDQUFDO1FBQ0osT0FBTyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDOUI7O2dCQXZERCxVQUFVOzs7O2dCQVhGLFVBQVU7Z0JBRVYsS0FBSztnQkFJTCx3QkFBd0I7OzBCQVJqQzs7Ozs7OztBQ0FBO0lBcUdDLDBCQUNTLE9BQ0EsZUFDQSxpQkFDQSxVQUMrQixJQUFTO1FBSnhDLFVBQUssR0FBTCxLQUFLO1FBQ0wsa0JBQWEsR0FBYixhQUFhO1FBQ2Isb0JBQWUsR0FBZixlQUFlO1FBQ2YsYUFBUSxHQUFSLFFBQVE7UUFDdUIsU0FBSSxHQUFKLElBQUksQ0FBSztRQWJqRCxtQkFBYyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBR2xDLGlCQUFZLElBQUlBLGlCQUFlLENBQW1CLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQzFFLGtCQUFhLElBQUlBLGlCQUFlLENBQXFCLEVBQUUsQ0FBQyxDQUFDO1FBV3hELElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0tBQzNCOzs7O0lBRUQsbUNBQVE7OztJQUFSO1FBQUEsaUJBT0M7UUFOQSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsS0FBSyxHQUFBLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDeEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLLElBQUksUUFBQyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLG1EQUFtRCxFQUFFLENBQUM7UUFDM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQ3pCLFNBQVM7U0FDVCxDQUFDLENBQUM7S0FDSDs7OztJQUNELHNDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUM1Qjs7OztJQUNELCtCQUFJOzs7SUFBSjs7UUFDQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUEsVUFBVTtZQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1NBQzNGLENBQUMsQ0FBQztRQUNILFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDNUQsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7S0FDeEQ7Ozs7O0lBQ0QsNENBQWlCOzs7O0lBQWpCLFVBQWtCLElBQWE7O1FBQzlCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDOUI7Ozs7O0lBQ0QsaURBQXNCOzs7O0lBQXRCLFVBQXVCLElBQWE7O1FBQ25DLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzlCOzs7OztJQUNELGtEQUF1Qjs7OztJQUF2QixVQUF3QixJQUFhLEtBQUs7Ozs7O0lBQzFDLGtEQUF1Qjs7OztJQUF2QixVQUF3QixJQUFhLEtBQUs7Ozs7SUFDMUMseUNBQWM7OztJQUFkOztRQUNDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0MsU0FBUyxDQUFDLElBQUksQ0FDYixJQUFJLGdCQUFnQixDQUFDO1lBQ3BCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7U0FDNUIsQ0FBQyxDQUNGLENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNoQzs7Ozs7SUFDRCx5Q0FBYzs7OztJQUFkLFVBQWUsUUFBMEI7UUFBekMsaUJBV0M7UUFWQSxTQUFTO1FBQ1QsUUFBUSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFlBQVk7O1lBQy9DLElBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEVBQUUsS0FBSyxZQUFZLENBQUMsRUFBRSxHQUFBLENBQUMsQ0FBQzs7WUFDbkUsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDbEMsT0FBTyxJQUFJLENBQUM7U0FDWixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDOUI7Ozs7SUFFRCw4RUFBbUQ7OztJQUFuRDtRQUFBLGlCQVFDO1FBUEEsSUFBSSxDQUFDLGVBQWU7YUFDbEIsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDakMsU0FBUyxDQUFDLFVBQUEsU0FBUztZQUNuQixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLGdCQUFnQixFQUFFLENBQUMsQ0FBQztTQUM1RCxDQUFDLENBQUM7S0FDSjs7OztJQUNELHNEQUEyQjs7O0lBQTNCO1FBQ0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3RDLFNBQVMsRUFBRSxJQUFJLFdBQVcsRUFBRTtZQUM1QixJQUFJLEVBQUUsSUFBSSxXQUFXLEVBQUU7U0FDdkIsQ0FBQyxDQUFDO0tBQ0g7Ozs7SUFDRCxvRkFBeUQ7OztJQUF6RDtRQUNDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztLQUM3RDs7OztJQUNELDhDQUFtQjs7O0lBQW5CO1FBQ0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7S0FDMUQ7O2dCQTNLRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSx1ekdBc0VKO29CQUNOLE1BQU0sRUFBRSxDQUFDLHFFQUFxRSxDQUFDO2lCQUMvRTs7OztnQkF6RlEsS0FBSztnQkFPTCx3QkFBd0I7Z0JBTXhCLGVBQWU7Z0JBZmtCLFFBQVE7Z0RBMEcvQyxNQUFNLFNBQUMscUJBQXFCOzs7OEJBTjdCLFlBQVksU0FBQyxtQkFBbUI7OzJCQXBHbEM7Ozs7Ozs7OztJQ0NDLFNBQVUsT0FBTztJQUNqQixRQUFTLE1BQU07SUFDZixRQUFTLE1BQU07SUFDZixPQUFRLEtBQUs7SUFDYixPQUFRLEtBQUs7Ozs7Ozs7QUNMZDtJQXlCQyw2QkFDUyxpQkFDQSxlQUNBLE9BQ0EsSUFDQSxVQUNBO1FBTlQsaUJBWUM7UUFYUSxvQkFBZSxHQUFmLGVBQWU7UUFDZixrQkFBYSxHQUFiLGFBQWE7UUFDYixVQUFLLEdBQUwsS0FBSztRQUNMLE9BQUUsR0FBRixFQUFFO1FBQ0YsYUFBUSxHQUFSLFFBQVE7UUFDUixnQkFBVyxHQUFYLFdBQVc7UUFicEIsbUJBQWMsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQWVqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ25HLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLFFBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLElBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQztLQUN6RDs7OztJQUdELDBDQUFZOzs7SUFEWjtRQUVDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUNsQjs7OztJQUdELDBDQUFZOzs7SUFEWjtRQUVDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUNsQjs7OztJQUVPLHdDQUFVOzs7O1FBQ2pCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7Ozs7O0lBRTVDLHdDQUFVOzs7O1FBQ2pCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7Ozs7O0lBR3ZELHNDQUFROzs7SUFBUjtRQUFBLGlCQXNCQzs7O1FBbEJBLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZUFBZTthQUMxQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsS0FBSyxTQUFTLEdBQUEsQ0FBQyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzVCLElBQUksTUFBTSxFQUFFO2dCQUFFLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQUU7aUJBQU07Z0JBQUUsS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7YUFBRTtTQUM1RSxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQUEsU0FBUztZQUN4QyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUTtnQkFDekIsUUFBUSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFlBQVk7O29CQUMvQyxJQUFNLElBQUksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLEtBQUssWUFBWSxDQUFDLEVBQUUsR0FBQSxDQUFDLENBQUM7O29CQUNsRSxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQyxLQUFLLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7b0JBQ25DLE9BQU8sS0FBSyxDQUFDO2lCQUNiLENBQUMsQ0FBQztnQkFFSCxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzVCLENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQztLQUNIOzs7O0lBQ0QseUNBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzVCOzs7O0lBQ0QsOENBQWdCOzs7SUFBaEI7UUFDQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7S0FDakM7Ozs7SUFDRCxnREFBa0I7OztJQUFsQjtRQUNDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztLQUNwQzs7OztJQUNELHVEQUF5Qjs7O0lBQXpCO1FBQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUNyRDs7OztJQUNELDBEQUE0Qjs7O0lBQTVCO1FBQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUN4RDs7OztJQUNELDRDQUFjOzs7SUFBZDtRQUFBLGlCQW9CQztRQW5CQSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUEsQ0FBQztZQUN0QyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUN2QyxJQUFJLEVBQUU7b0JBQ0wsUUFBUSxFQUFFLEtBQUksQ0FBQyxRQUFRO2lCQUN2QjtnQkFDRCxVQUFVLEVBQUUsZUFBZTthQUMzQixDQUFDLENBQUM7U0FDSCxDQUFDLENBQUM7O1FBQ0gsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUM7O1FBQ3BELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM5RDs7OztJQUNELDRDQUFjOzs7SUFBZDtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDaEQ7Ozs7O0lBQ0QsMENBQVk7Ozs7SUFBWixVQUFhLFNBQTJCO1FBQXhDLGlCQXdCQztRQXZCQSxTQUFTOztRQUNULElBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQzs7UUFDM0IsSUFBTSxxQkFBcUIsR0FBRyxRQUFRLENBQUMsS0FBSzthQUMxQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQyxLQUFLLEdBQUEsQ0FBQzthQUNoRCxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBQSxDQUFDLENBQUM7UUFDOUMsU0FBUztRQUNULGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQzthQUNsQyxJQUFJLENBQ0osU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDM0IsR0FBRyxDQUFDLFVBQUMsTUFBaUIsSUFBSyxPQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLEtBQUssSUFBSSxHQUFBLENBQUMsR0FBQSxDQUFDLEVBQ2pFLFNBQVMsQ0FBQyxVQUFBLFdBQVc7WUFDcEIsU0FBUztZQUNULElBQUksV0FBVyxFQUFFOztnQkFDaEIsSUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsS0FBSztxQkFDekMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLENBQUMsSUFBSSxHQUFBLENBQUM7cUJBQy9DLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsRUFBRSxDQUFDLEdBQUEsQ0FBQyxDQUFDO2dCQUN2RCxPQUFPLGFBQWE7cUJBQ2xCLEtBQUssQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLENBQUM7cUJBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFpQixJQUFLLE9BQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssS0FBSyxJQUFJLEdBQUEsQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO2FBQzFFO2lCQUFNO2dCQUFFLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQUU7U0FDNUIsQ0FBQyxDQUNGO2FBQ0EsU0FBUyxDQUFDLGVBQVMsQ0FBQyxDQUFDO0tBQ3ZCOztnQkF0SUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxjQUFjO2lCQUN4Qjs7OztnQkFQUSxlQUFlO2dCQUdmLHdCQUF3QjtnQkFYeEIsS0FBSztnQkFEb0IsVUFBVTtnQkFBRSxTQUFTO2dCQUk5QyxjQUFjOzs7MkJBZXJCLEtBQUssU0FBQyxZQUFZOytCQW9CbEIsWUFBWSxTQUFDLFlBQVk7K0JBTXpCLFlBQVksU0FBQyxZQUFZOzs4QkE3QzNCOzs7Ozs7OztJQ1VDLDRCQUFvQixRQUFzQixFQUFVLE9BQXdCO1FBQTVFLGlCQUFnRjtRQUE1RCxhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFFNUUsMkJBQ3NCLElBQUksQ0FBQyxRQUFRO2FBQ2pDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQUM7YUFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsSUFBSSx3QkFBd0IsRUFBRSxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBRWxELHVCQUNrQixJQUFJLENBQUMsUUFBUTthQUM3QixNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDO2FBQ3ZDLElBQUksQ0FDSixHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxHQUFBLENBQUMsRUFDN0IsU0FBUyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUEsQ0FBQyxFQUNwRCxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxJQUFJLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxHQUFBLENBQUMsQ0FDbkQsQ0FBQztLQWQ2RTs7Z0JBRmhGLFVBQVU7Ozs7Z0JBUEYsT0FBTztnQkFLUCxlQUFlOzs7UUFNdEIsTUFBTSxFQUFFOzs7O1FBS1IsTUFBTSxFQUFFOzs7NkJBakJWOzs7Ozs7OztJQ1FDLDBCQUFvQixRQUFzQjtRQUF0QixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBRTFDLDJCQUNzQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLElBQUksb0JBQW9CLEVBQUUsR0FBQSxDQUFDLENBQUM7S0FIcEU7O2dCQUY5QyxVQUFVOzs7O2dCQUxGLE9BQU87OztRQVNkLE1BQU0sRUFBRTs7OzJCQVZWOzs7Ozs7O0FDQUE7SUFzQkMsZ0NBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0tBQ3pFOzs7O0lBRUQsOENBQWE7OztJQUFiO1FBQ0MsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtZQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGlCQUFpQixFQUFFLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN4QjthQUFNO1lBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7U0FDekI7S0FDRDs7Z0JBM0JELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsMGNBTUc7b0JBQ2IsTUFBTSxFQUFFLENBQUMsc0RBQXNELENBQUM7aUJBQ2hFOzs7O2dCQWpCUSxLQUFLOztpQ0FEZDs7Ozs7OztBQ0FBO0lBWUMscUJBQ1MsTUFDQSxPQUNBO1FBRkEsU0FBSSxHQUFKLElBQUk7UUFDSixVQUFLLEdBQUwsS0FBSztRQUNMLHlCQUFvQixHQUFwQixvQkFBb0I7S0FDekI7O2dCQU5KLFVBQVU7Ozs7Z0JBVEYsVUFBVTtnQkFFVixLQUFLO2dCQUdMLHdCQUF3Qjs7c0JBTmpDOzs7Ozs7O0FDQUE7Ozs7Ozs7SUFxRVEsa0JBQU87Ozs7SUFBZCxVQUFlLE1BQXlCO1FBQ3ZDLE9BQU87WUFDTixRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLE1BQU0sSUFBSSxFQUFFLEVBQUU7Z0JBQ3hELFdBQVc7Z0JBQ1gsd0JBQXdCO2dCQUN4QixlQUFlO2FBQ2Y7U0FDRCxDQUFDO0tBQ0Y7O2dCQXZDRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGNBQWM7d0JBQ2Qsa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQix1QkFBdUI7cUJBQ3ZCO29CQUNELFlBQVksRUFBRSxDQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxzQkFBc0IsQ0FBRTtvQkFDbkgsZUFBZSxFQUFFLENBQUUsZ0JBQWdCLENBQUU7b0JBQ3JDLE9BQU8sRUFBRSxDQUFFLG1CQUFtQixFQUFFLHNCQUFzQixDQUFFO2lCQUN4RDs7cUJBbkVEOzs7Ozs7Z0JBa0ZDLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsVUFBVTt3QkFDVixXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUM7d0JBQzVDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBRSxDQUFDO3dCQUNsRSxhQUFhO3FCQUNiO29CQUNELE9BQU8sRUFBRSxDQUFFLFVBQVUsQ0FBRTtpQkFDdkI7O3lCQTFGRDs7Ozs7Ozs7Ozs7Ozs7OyJ9