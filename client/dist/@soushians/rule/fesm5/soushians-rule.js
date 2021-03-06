import { InjectionToken, Component, Injectable, Inject, Injector, Directive, ComponentFactoryResolver, ViewContainerRef, Input, ViewChild, ViewChildren, ElementRef, Renderer2, HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheet, MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatTableModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatDividerModule, MatRadioModule, MatSlideToggleModule } from '@angular/material';
import { Store, StoreModule } from '@ngrx/store';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { __assign, __decorate, __metadata } from 'tslib';
import { Subject, BehaviorSubject as BehaviorSubject$2, combineLatest, of } from 'rxjs';
import { map, share, filter, startWith, takeUntil, switchMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs/Rx';
import { stringTemplate } from '@soushians/shared';
import { getFrontendAuthenticationState } from '@soushians/frontend-authentication';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function RuleModuleConfig() { }
if (false) {
    /** @type {?|undefined} */
    RuleModuleConfig.prototype.endpoints;
    /** @type {?|undefined} */
    RuleModuleConfig.prototype.stepClasses;
    /** @type {?|undefined} */
    RuleModuleConfig.prototype.steps;
    /** @type {?|undefined} */
    RuleModuleConfig.prototype.env;
}
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                }] }
    ];
    /** @nocollapse */
    RuleComponent.ctorParameters = function () { return []; };
    return RuleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var routes = [
    {
        path: "rule",
        component: RuleComponent
        // children: [ {} ]
    }
];
/** @type {?} */
var RoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
if (false) {
    /** @type {?} */
    ShowAnchorsAction.prototype.type;
}
var HideAnchorsAction = /** @class */ (function () {
    function HideAnchorsAction() {
        this.type = RuleAnchorsActionTypes.HIDE_ANCHORS;
    }
    return HideAnchorsAction;
}());
if (false) {
    /** @type {?} */
    HideAnchorsAction.prototype.type;
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
    State.prototype.active;
}
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
//#region  selectors
/** @type {?} */
var getAnchorsActivityState = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.active; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
var RulesListAction = /** @class */ (function () {
    function RulesListAction() {
        this.type = RulesListActionTypes.RULES_LIST;
    }
    return RulesListAction;
}());
if (false) {
    /** @type {?} */
    RulesListAction.prototype.type;
}
var RulesListStartAction = /** @class */ (function () {
    function RulesListStartAction() {
        this.type = RulesListActionTypes.RULES_LIST_START;
    }
    return RulesListStartAction;
}());
if (false) {
    /** @type {?} */
    RulesListStartAction.prototype.type;
}
var RulesListSucceedAction = /** @class */ (function () {
    function RulesListSucceedAction(payload) {
        this.payload = payload;
        this.type = RulesListActionTypes.RULES_LIST_SUCCEED;
    }
    return RulesListSucceedAction;
}());
if (false) {
    /** @type {?} */
    RulesListSucceedAction.prototype.type;
    /** @type {?} */
    RulesListSucceedAction.prototype.payload;
}
var RulesListFailedAction = /** @class */ (function () {
    function RulesListFailedAction() {
        this.type = RulesListActionTypes.RULES_LIST_FAILED;
    }
    return RulesListFailedAction;
}());
if (false) {
    /** @type {?} */
    RulesListFailedAction.prototype.type;
}
var UpsertRuleAction = /** @class */ (function () {
    function UpsertRuleAction(payload) {
        this.payload = payload;
        this.type = RulesListActionTypes.RULE_UPSERT;
    }
    return UpsertRuleAction;
}());
if (false) {
    /** @type {?} */
    UpsertRuleAction.prototype.type;
    /** @type {?} */
    UpsertRuleAction.prototype.payload;
}
var GetRuleAction = /** @class */ (function () {
    function GetRuleAction(payload) {
        this.payload = payload;
        this.type = RulesListActionTypes.GET_RULE;
    }
    return GetRuleAction;
}());
if (false) {
    /** @type {?} */
    GetRuleAction.prototype.type;
    /** @type {?} */
    GetRuleAction.prototype.payload;
}
var RuleFechedAction = /** @class */ (function () {
    function RuleFechedAction(payload) {
        this.payload = payload;
        this.type = RulesListActionTypes.RULE_FETCHED;
    }
    return RuleFechedAction;
}());
if (false) {
    /** @type {?} */
    RuleFechedAction.prototype.type;
    /** @type {?} */
    RuleFechedAction.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function State$1() { }
if (false) {
    /** @type {?} */
    State$1.prototype.status;
    /** @type {?} */
    State$1.prototype.data;
}
var ɵ0 = [];
/** @type {?} */
var initialState$1 = {
    status: "pristine",
    data: ɵ0
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
            var entityIdx = state.data.findIndex((/**
             * @param {?} form
             * @return {?}
             */
            function (form) { return form._id == action.payload._id; }));
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
            var entityIdx = state.data.findIndex((/**
             * @param {?} form
             * @return {?}
             */
            function (form) { return form._id == action.payload._id; }));
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
/** @type {?} */
var getStatus = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.status; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /// new vision
    UPDATE_DB: "[GWT][SCENARIO][DB] UPDATE_DB",
};
var ScenariosListAction = /** @class */ (function () {
    function ScenariosListAction() {
        this.type = ScenariosListActionTypes.SCENARIOS_LIST;
    }
    return ScenariosListAction;
}());
if (false) {
    /** @type {?} */
    ScenariosListAction.prototype.type;
}
var ScenariosListStartAction = /** @class */ (function () {
    function ScenariosListStartAction() {
        this.type = ScenariosListActionTypes.SCENARIOS_LIST_START;
    }
    return ScenariosListStartAction;
}());
if (false) {
    /** @type {?} */
    ScenariosListStartAction.prototype.type;
}
var ScenariosListSucceedAction = /** @class */ (function () {
    function ScenariosListSucceedAction(payload) {
        this.payload = payload;
        this.type = ScenariosListActionTypes.SCENARIOS_LIST_SUCCEED;
    }
    return ScenariosListSucceedAction;
}());
if (false) {
    /** @type {?} */
    ScenariosListSucceedAction.prototype.type;
    /** @type {?} */
    ScenariosListSucceedAction.prototype.payload;
}
var ScenariosListFailedAction = /** @class */ (function () {
    function ScenariosListFailedAction() {
        this.type = ScenariosListActionTypes.SCENARIOS_LIST_FAILED;
    }
    return ScenariosListFailedAction;
}());
if (false) {
    /** @type {?} */
    ScenariosListFailedAction.prototype.type;
}
var UpsertScenarioAction = /** @class */ (function () {
    function UpsertScenarioAction(payload) {
        this.payload = payload;
        this.type = ScenariosListActionTypes.UPSERT;
    }
    return UpsertScenarioAction;
}());
if (false) {
    /** @type {?} */
    UpsertScenarioAction.prototype.type;
    /** @type {?} */
    UpsertScenarioAction.prototype.payload;
}
var GetScenarioAction = /** @class */ (function () {
    function GetScenarioAction(payload) {
        this.payload = payload;
        this.type = ScenariosListActionTypes.GET_SCENARIO;
    }
    return GetScenarioAction;
}());
if (false) {
    /** @type {?} */
    GetScenarioAction.prototype.type;
    /** @type {?} */
    GetScenarioAction.prototype.payload;
}
var ScenarioFechedAction = /** @class */ (function () {
    function ScenarioFechedAction(payload) {
        this.payload = payload;
        this.type = ScenariosListActionTypes.SCENARIO_FETCHED;
    }
    return ScenarioFechedAction;
}());
if (false) {
    /** @type {?} */
    ScenarioFechedAction.prototype.type;
    /** @type {?} */
    ScenarioFechedAction.prototype.payload;
}
var UpdateDbAction = /** @class */ (function () {
    function UpdateDbAction(payload) {
        this.payload = payload;
        this.type = ScenariosListActionTypes.UPDATE_DB;
    }
    return UpdateDbAction;
}());
if (false) {
    /** @type {?} */
    UpdateDbAction.prototype.type;
    /** @type {?} */
    UpdateDbAction.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function State$2() { }
if (false) {
    /** @type {?} */
    State$2.prototype.status;
    /** @type {?} */
    State$2.prototype.data;
}
var ɵ0$1 = [];
/** @type {?} */
var initialState$2 = {
    status: "pristine",
    data: ɵ0$1
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
            var entityIdx = state.data.findIndex((/**
             * @param {?} form
             * @return {?}
             */
            function (form) { return form._id == action.payload._id; }));
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
            var entityIdx = state.data.findIndex((/**
             * @param {?} form
             * @return {?}
             */
            function (form) { return form._id == action.payload._id; }));
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
            scenarios.forEach((/**
             * @param {?} scenario
             * @return {?}
             */
            function (scenario) {
                /** @type {?} */
                var entityIdx = state.data.findIndex((/**
                 * @param {?} form
                 * @return {?}
                 */
                function (form) { return form._id == scenario._id; }));
                if (entityIdx > -1) {
                    data_1[entityIdx] = Object.assign({}, data_1[entityIdx], scenario);
                }
                else {
                    data_1.push(scenario);
                }
            }));
            return __assign({}, state, { data: data_1 });
        }
        default: {
            return state;
        }
    }
}
/** @type {?} */
var getStatus$1 = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.status; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function RuleState() { }
if (false) {
    /** @type {?} */
    RuleState.prototype.ruleAnchors;
    /** @type {?} */
    RuleState.prototype.rules;
    /** @type {?} */
    RuleState.prototype.scenarios;
}
/** @type {?} */
var RuleReducers = {
    ruleAnchors: Reducer,
    rules: reducer,
    scenarios: reducer$1
};
/**
 * @record
 */
function AppState() { }
if (false) {
    /** @type {?} */
    AppState.prototype.rule;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RuleConfigurationService = /** @class */ (function () {
    function RuleConfigurationService(configFile, store, injector) {
        var _this = this;
        this.store = store;
        this.injector = injector;
        this.config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);
        // instantiate steps and used them
        configFile.steps = configFile.stepClasses.map((/**
         * @param {?} step
         * @return {?}
         */
        function (step) { return new step(_this.injector); }));
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
        { type: Injectable }
    ];
    /** @nocollapse */
    RuleConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
        { type: Store },
        { type: Injector }
    ]; };
    return RuleConfigurationService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    RuleConfigurationService.prototype._config;
    /** @type {?} */
    RuleConfigurationService.prototype.config$;
    /**
     * @type {?}
     * @private
     */
    RuleConfigurationService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    RuleConfigurationService.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            steps: this.steps.map((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return ({
                id: step.id,
                opposite: step.opposite,
                params: step.params
            }); }))
        };
    };
    return GwtScenarioModel;
}());
if (false) {
    /** @type {?} */
    GwtScenarioModel.prototype._id;
    /** @type {?} */
    GwtScenarioModel.prototype.name;
    /** @type {?} */
    GwtScenarioModel.prototype.anchorId;
    /** @type {?} */
    GwtScenarioModel.prototype.featureId;
    /** @type {?} */
    GwtScenarioModel.prototype.steps;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        if (this.component) {
            // this.component.instance.config = this.config;
            // this.component.instance.group = this.group;
        }
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
        /** @type {?} */
        var component = this.resolver.resolveComponentFactory(this.step.stepComponent);
        this.component = this.container.createComponent(component);
        debugger;
        this.component.instance.params = this.step.params;
    };
    StepLoaderDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[rule-step-loader]"
                    // templateUrl: "./step-loader.component.html",
                    // styleUrls: [ "./step-loader.component.css" ]
                },] }
    ];
    /** @nocollapse */
    StepLoaderDirective.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    StepLoaderDirective.propDecorators = {
        step: [{ type: Input }],
        component: [{ type: ViewChild, args: ["container", { read: ViewContainerRef, static: false },] }]
    };
    return StepLoaderDirective;
}());
if (false) {
    /** @type {?} */
    StepLoaderDirective.prototype.step;
    /** @type {?} */
    StepLoaderDirective.prototype.component;
    /**
     * @type {?}
     * @private
     */
    StepLoaderDirective.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    StepLoaderDirective.prototype.container;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScenarioService = /** @class */ (function () {
    function ScenarioService(http, store, configService) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.configService = configService;
        this.scenarios = {};
        this.config$ = this.configService.config$;
        this.config$.subscribe((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return (_this.config = config); }));
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
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return (/** @type {?} */ (response)); })), share());
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
        var _this = this;
        if (!this.scenarios[anchorId]) {
            this.scenarios[anchorId] = new BehaviorSubject$1([]);
            this.http
                .get(this.config.env.frontend_server + stringTemplate(this.config.endpoints.get, { anchorId: anchorId }))
                .pipe(map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return (/** @type {?} */ (response.Result)); })))
                .subscribe((/**
             * @param {?} scenarios
             * @return {?}
             */
            function (scenarios) { return _this.scenarios[anchorId].next(scenarios); }));
        }
        return this.scenarios[anchorId];
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
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.rule.scenarios.data; }))
            .pipe(filter((/**
         * @param {?} scenarios
         * @return {?}
         */
        function (scenarios) { return scenarios != null; })), map((/**
         * @param {?} scenarios
         * @return {?}
         */
        function (scenarios) {
            return scenarios.find((/**
             * @param {?} scenario
             * @return {?}
             */
            function (scenario) { return scenario._id == _id; }));
        })), filter((/**
         * @param {?} scenario
         * @return {?}
         */
        function (scenario) { return scenario != undefined; })))
            .subscribe((/**
         * @param {?} scenario
         * @return {?}
         */
        function (scenario) {
            subject.next(scenario);
        }));
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
            .select((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.rule.scenarios.data; }))
            .pipe(startWith([]), filter((/**
         * @param {?} scenarios
         * @return {?}
         */
        function (scenarios) { return scenarios != null; })), map((/**
         * @param {?} scenarios
         * @return {?}
         */
        function (scenarios) {
            return scenarios.filter((/**
             * @param {?} scenario
             * @return {?}
             */
            function (scenario) { return scenario._id == anchorId; }));
        })))
            .subscribe((/**
         * @param {?} scenarios
         * @return {?}
         */
        function (scenarios) {
            subject.next(scenarios);
        }));
        return subject.asObservable();
    };
    ScenarioService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ScenarioService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: RuleConfigurationService }
    ]; };
    return ScenarioService;
}());
if (false) {
    /** @type {?} */
    ScenarioService.prototype.config$;
    /** @type {?} */
    ScenarioService.prototype.config;
    /** @type {?} */
    ScenarioService.prototype.scenarios;
    /**
     * @type {?}
     * @private
     */
    ScenarioService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    ScenarioService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    ScenarioService.prototype.configService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.steps$ = this.configService.config$.pipe(map((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return config.steps; })), takeUntil(this.unsubscribe));
        this.steps$.subscribe((/**
         * @param {?} steps
         * @return {?}
         */
        function (steps) { return (_this.steps = steps); }));
        this._load_scenario_and_map_scenario_step_to_steps_class();
        this.scenario$.subscribe((/**
         * @param {?} s
         * @return {?}
         */
        function (s) {
            debugger;
        }));
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
        this.stepLoaders.forEach((/**
         * @param {?} stepLoader
         * @return {?}
         */
        function (stepLoader) {
            scenario.steps.find((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return step.name === stepLoader.step.name; })).params = stepLoader.params;
        }));
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
        scenario.steps.splice(scenario.steps.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.name === step.name; })), 1);
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
        scenario.steps = scenario.steps.map((/**
         * @param {?} scenarioStep
         * @return {?}
         */
        function (scenarioStep) {
            /** @type {?} */
            var _step = _this.steps.find((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return step.id === scenarioStep.id; }));
            /** @type {?} */
            var step = Object.create(_step);
            step.params = scenarioStep.params;
            return step;
        }));
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
            .subscribe((/**
         * @param {?} scenarios
         * @return {?}
         */
        function (scenarios) {
            _this.scenarios$.next(scenarios);
            _this.activeScenario(scenarios[0] || new GwtScenarioModel());
        }));
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
                    template: "<div fxLayout=\"row\" fxLayoutGap=\"25px\">\r\n  <div fxFlex=\"400px\" fxLayout=\"column\" fxLayoutGap=\"15px\">\r\n    <!-- <div fxLayout=\"row wrap\">\r\n    <mat-form-field appearance=\"fill\" fxFlex=\"100\">\r\n      <input matInput placeholder=\"\u0641\u06CC\u0644\u062A\u0631\">\r\n      <mat-icon matSuffix>search</mat-icon>\r\n    </mat-form-field>\r\n    <mat-checkbox fxFlex class=\"example-margin\">\u0641\u0631\u0636 \u06A9\u0646\u06CC\u062F</mat-checkbox>\r\n    <mat-checkbox fxFlex class=\"example-margin\">\u0647\u0646\u06AF\u0627\u0645\u06CC \u06A9\u0647</mat-checkbox>\r\n    <mat-checkbox fxFlex class=\"example-margin\">\u0622\u0646\u06AF\u0627\u0647</mat-checkbox>\r\n  </div> -->\r\n    <mat-card class=\"steps-item\" *ngFor=\"let step of steps$ | async\">\r\n      <span class=\"step-text\">\r\n        {{step.description}}\r\n      </span>\r\n      <button mat-icon-button class=\"add-button\" (click)=\"addStepToScenario(step)\">\r\n        <mat-icon>arrow_back_ios</mat-icon>\r\n      </button>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div fxFlex=\"700px\">\r\n    <div fxLayout=\"row wrap\" fxLayoutGap=\"25px\" fxLayoutAlign=\"center center\" class=\"scenario-toolbar\">\r\n      <div fxFlex>\r\n        <mat-form-field class=\"fit\">\r\n          <mat-select placeholder=\"\u0648\u0650\u06CC\u0698\u06AF\u06CC\" (selectionChange)=\"activeScenario($event.value)\">\r\n            <mat-option *ngFor=\"let scenario of scenarios$ | async\" [value]=\"scenario\">\r\n              {{ scenario.featureId }} : {{ scenario.name }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <button fxFlex=\"nogrow\" mat-raised-button color=\"primary\" (click)=\"addNewScenario()\">\r\n        \u062B\u0628\u062A \u0633\u0646\u0627\u0631\u06CC\u0648 \u062C\u062F\u06CC\u062F\r\n      </button>\r\n    </div>\r\n    <div fxLayout=\"column\" fxLayoutGap=\"15px\">\r\n      <div fxFlex=\"100\" fxLayout=\"row\" fxLayoutGap=\"25px\" [formGroup]=\"scenarioFormGroup\">\r\n        <mat-form-field fxFlex=\"50\">\r\n          <mat-select placeholder=\"\u0648\u06CC\u0698\u06AF\u06CC\" formControlName=\"featureId\">\r\n            <mat-option *ngFor=\"let feature of features$\" [value]=\"feature\">\r\n              {{ feature }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex=\"50\">\r\n          <input matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\r\n        </mat-form-field>\r\n      </div>\r\n      <ng-container *ngFor=\"let step of (scenario$ | async).steps\">\r\n        <div class=\"scenario-steps-item\">\r\n          <ng-container rule-step-loader [step]=\"step\"></ng-container>\r\n          <div class=\"scenario-steps-action\">\r\n            <button mat-icon-button (click)=\"deleteStepFromScenario(step)\">\r\n              <mat-icon>delete</mat-icon>\r\n            </button>\r\n            <button mat-icon-button (click)=\"incScenarioStepPriority(step)\">\r\n              <mat-icon>keyboard_arrow_up</mat-icon>\r\n            </button>\r\n            <button mat-icon-button (click)=\"decScenarioStepPriority(step)\">\r\n              <mat-icon>keyboard_arrow_down</mat-icon>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <button fxFlex=\"nogrow\" mat-raised-button color=\"primary\" (click)=\"save()\">\r\n        \u062B\u0628\u062A\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [":host{width:100vw}.scenario-toolbar{height:60px;margin-bottom:20px}"]
                }] }
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
if (false) {
    /** @type {?} */
    GwtViewComponent.prototype.unsubscribe;
    /** @type {?} */
    GwtViewComponent.prototype.steps$;
    /** @type {?} */
    GwtViewComponent.prototype.steps;
    /** @type {?} */
    GwtViewComponent.prototype.scenario$;
    /** @type {?} */
    GwtViewComponent.prototype.scenarios$;
    /** @type {?} */
    GwtViewComponent.prototype.scenarioFormGroup;
    /** @type {?} */
    GwtViewComponent.prototype.features$;
    /** @type {?} */
    GwtViewComponent.prototype.stepLoaders;
    /**
     * @type {?}
     * @private
     */
    GwtViewComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    GwtViewComponent.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    GwtViewComponent.prototype.scenarioService;
    /**
     * @type {?}
     * @private
     */
    GwtViewComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    GwtViewComponent.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.active$ = this.store.select((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.rule.ruleAnchors.active; })).pipe(takeUntil(this.unsubscribe));
        this.active$.subscribe((/**
         * @param {?} active
         * @return {?}
         */
        function (active) { return (_this.active = active); }));
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
        debugger;
        this.el;
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
        var _this = this;
        if (!this.active) {
            return;
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.hideAnchor();
        }), 999);
    };
    /**
     * @private
     * @return {?}
     */
    RuleAnchorDirective.prototype.showAnchor = /**
     * @private
     * @return {?}
     */
    function () {
        this.el.nativeElement.classList.add("show-anchor");
    };
    /**
     * @private
     * @return {?}
     */
    RuleAnchorDirective.prototype.hideAnchor = /**
     * @private
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
        // TODO: remove
        // this.store.dispatch(new ShowAnchorsAction());
        var _this = this;
        this.anchorScenarios$ = this.scenarioService
            .getAnchorScenarios(this.anchorId) // TODO: replace service call with ngrx action
            .pipe(takeUntil(this.unsubscribe), filter((/**
         * @param {?} scenario
         * @return {?}
         */
        function (scenario) { return scenario !== undefined; })));
        this.active$.subscribe((/**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            if (active) {
                _this._activate_anchor();
            }
            else {
                _this._deactivate_anchor();
            }
        }));
        this.anchorScenarios$.subscribe((/**
         * @param {?} scenarios
         * @return {?}
         */
        function (scenarios) {
            scenarios.forEach((/**
             * @param {?} scenario
             * @return {?}
             */
            function (scenario) {
                scenario.steps = scenario.steps.map((/**
                 * @param {?} scenarioStep
                 * @return {?}
                 */
                function (scenarioStep) {
                    /** @type {?} */
                    var step = _this.steps.find((/**
                     * @param {?} step
                     * @return {?}
                     */
                    function (step) { return step.id === scenarioStep.id; }));
                    /** @type {?} */
                    var _step = Object.create(step);
                    _step.params = scenarioStep.params;
                    return _step;
                }));
                _this._do_scenario(scenario);
            }));
        }));
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
        this.button.addEventListener("click", (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.preventDefault();
            e.stopPropagation();
            _this.bottomSheet.open(GwtViewComponent, {
                data: {
                    anchorId: _this.anchorId
                },
                panelClass: "magenta-theme"
            });
        }));
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
            .filter((/**
         * @param {?} step
         * @return {?}
         */
        function (step) { return step.type === GwtStepTypes.Given; }))
            .map((/**
         * @param {?} step
         * @return {?}
         */
        function (step) { return step.interperator(step.params); }));
        debugger;
        combineLatest(givenStepInterpretors)
            .pipe(takeUntil(this.unsubscribe), map((/**
         * @param {?} values
         * @return {?}
         */
        function (values) { return values.every((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value === true; })); })), switchMap((/**
         * @param {?} givenResult
         * @return {?}
         */
        function (givenResult) {
            debugger;
            if (givenResult) {
                /** @type {?} */
                var thenStepInterpretors = scenario.steps
                    .filter((/**
                 * @param {?} step
                 * @return {?}
                 */
                function (step) { return step.type === GwtStepTypes.Then; }))
                    .map((/**
                 * @param {?} step
                 * @return {?}
                 */
                function (step) { return step.interperator(step.params, _this.el); }));
                return combineLatest
                    .apply(null, thenStepInterpretors)
                    .pipe(map((/**
                 * @param {?} values
                 * @return {?}
                 */
                function (values) { return values.every((/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) { return value === true; })); })));
            }
            else {
                return of(false);
            }
        })))
            .subscribe((/**
         * @return {?}
         */
        function () { }));
    };
    RuleAnchorDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[ruleAnchor]"
                },] }
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
if (false) {
    /** @type {?} */
    RuleAnchorDirective.prototype.unsubscribe;
    /** @type {?} */
    RuleAnchorDirective.prototype.anchorId;
    /** @type {?} */
    RuleAnchorDirective.prototype.steps;
    /** @type {?} */
    RuleAnchorDirective.prototype.active$;
    /** @type {?} */
    RuleAnchorDirective.prototype.active;
    /** @type {?} */
    RuleAnchorDirective.prototype.button;
    /** @type {?} */
    RuleAnchorDirective.prototype.anchorScenarios$;
    /**
     * @type {?}
     * @private
     */
    RuleAnchorDirective.prototype.scenarioService;
    /**
     * @type {?}
     * @private
     */
    RuleAnchorDirective.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    RuleAnchorDirective.prototype.store;
    /**
     * @type {?}
     * @private
     */
    RuleAnchorDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    RuleAnchorDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    RuleAnchorDirective.prototype.bottomSheet;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScenariosDbEffects = /** @class */ (function () {
    function ScenariosDbEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.EditProfileRequest$ = this.actions$.pipe(ofType(ScenariosListActionTypes.SCENARIOS_LIST), map((/**
         * @return {?}
         */
        function () { return new ScenariosListStartAction(); })));
        this.UpsertScenario$ = this.actions$.pipe(ofType(ScenariosListActionTypes.UPSERT), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} scenario
         * @return {?}
         */
        function (scenario) { return _this.service.upsert(scenario); })), map((/**
         * @param {?} scenario
         * @return {?}
         */
        function (scenario) { return new ScenarioFechedAction(scenario); })));
    }
    ScenariosDbEffects.decorators = [
        { type: Injectable }
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
if (false) {
    /** @type {?} */
    ScenariosDbEffects.prototype.EditProfileRequest$;
    /** @type {?} */
    ScenariosDbEffects.prototype.UpsertScenario$;
    /**
     * @type {?}
     * @private
     */
    ScenariosDbEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ScenariosDbEffects.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RulesListEffects = /** @class */ (function () {
    function RulesListEffects(actions$) {
        this.actions$ = actions$;
        this.EditProfileRequest$ = this.actions$.pipe(ofType(RulesListActionTypes.RULES_LIST), map((/**
         * @return {?}
         */
        function () { return new RulesListStartAction(); })));
    }
    RulesListEffects.decorators = [
        { type: Injectable }
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
if (false) {
    /** @type {?} */
    RulesListEffects.prototype.EditProfileRequest$;
    /**
     * @type {?}
     * @private
     */
    RulesListEffects.prototype.actions$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                }] }
    ];
    /** @nocollapse */
    GwtModeButtonComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return GwtModeButtonComponent;
}());
if (false) {
    /** @type {?} */
    GwtModeButtonComponent.prototype.anchorsMode;
    /** @type {?} */
    GwtModeButtonComponent.prototype.havePermission$;
    /**
     * @type {?}
     * @private
     */
    GwtModeButtonComponent.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RuleService = /** @class */ (function () {
    function RuleService(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
    }
    RuleService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RuleService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: RuleConfigurationService }
    ]; };
    return RuleService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    RuleService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    RuleService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    RuleService.prototype.configurationService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                },] }
    ];
    return RuleModule;
}());
var RootRuleModule = /** @class */ (function () {
    function RootRuleModule() {
        ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
        ((/** @type {?} */ (window))).___starter.rule = "8.0.10";
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
                },] }
    ];
    /** @nocollapse */
    RootRuleModule.ctorParameters = function () { return []; };
    return RootRuleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { GwtStepTypes, HideAnchorsAction, RuleModule, ShowAnchorsAction, RootRuleModule as ɵa, MODULE_CONFIG_TOKEN as ɵb, RuleComponent as ɵc, RuleAnchorDirective as ɵd, ScenarioService as ɵe, RuleReducers as ɵg, RuleConfigurationService as ɵi, GwtViewComponent as ɵj, StepLoaderDirective as ɵk, GwtModeButtonComponent as ɵl, Reducer as ɵm, reducer as ɵn, reducer$1 as ɵo, RulesListEffects as ɵp, ScenariosDbEffects as ɵq, RoutingModule as ɵr, RuleService as ɵs };
//# sourceMappingURL=soushians-rule.js.map
