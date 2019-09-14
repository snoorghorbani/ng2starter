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
import { Subject, BehaviorSubject as BehaviorSubject$2, combineLatest, of } from 'rxjs';
import { map, share, filter, startWith, takeUntil, switchMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs/Rx';
import { stringTemplate } from '@soushians/shared';
import { __decorate, __metadata } from 'tslib';
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
const MODULE_DEFAULT_CONFIG = {
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
const MODULE_CONFIG_TOKEN = new InjectionToken("RuleModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RuleComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
RuleComponent.decorators = [
    { type: Component, args: [{
                selector: "app-rule",
                template: "<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <router-outlet></router-outlet>\n</div>"
            }] }
];
/** @nocollapse */
RuleComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [
    {
        path: "rule",
        component: RuleComponent
        // children: [ {} ]
    }
];
/** @type {?} */
const RoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const RuleAnchorsActionTypes = {
    SHOW_ANCHORS: "[RULE][ANCHORS] SHOW_ANCHORS",
    HIDE_ANCHORS: "[RULE][ANCHORS] HIDE_ANCHORS",
};
class ShowAnchorsAction {
    constructor() {
        this.type = RuleAnchorsActionTypes.SHOW_ANCHORS;
    }
}
if (false) {
    /** @type {?} */
    ShowAnchorsAction.prototype.type;
}
class HideAnchorsAction {
    constructor() {
        this.type = RuleAnchorsActionTypes.HIDE_ANCHORS;
    }
}
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
const initialState = {
    active: false
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer(state = initialState, action) {
    switch (action.type) {
        case RuleAnchorsActionTypes.SHOW_ANCHORS: {
            return Object.assign({}, state, { active: true });
        }
        case RuleAnchorsActionTypes.HIDE_ANCHORS: {
            return Object.assign({}, state, { active: false });
        }
        default: {
            return state;
        }
    }
}
//#region  selectors
/** @type {?} */
const getAnchorsActivityState = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.active);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const RulesListActionTypes = {
    RULES_LIST: "[RULE][DB] RULES_LIST",
    RULES_LIST_START: "[RULE][DB] RULES_LIST_START",
    RULES_LIST_SUCCEED: "[RULE][DB] RULES_LIST_SUCCEED",
    RULES_LIST_FAILED: "[RULE][DB] RULES_LIST_FAILED",
    RULE_UPSERT: "[RULE][DB] RULE_UPSERT",
    GET_RULE: "[RULE][DB] GET_RULE",
    RULE_FETCHED: "[RULE][DB] RULE_FETCHED",
};
class RulesListAction {
    constructor() {
        this.type = RulesListActionTypes.RULES_LIST;
    }
}
if (false) {
    /** @type {?} */
    RulesListAction.prototype.type;
}
class RulesListStartAction {
    constructor() {
        this.type = RulesListActionTypes.RULES_LIST_START;
    }
}
if (false) {
    /** @type {?} */
    RulesListStartAction.prototype.type;
}
class RulesListSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = RulesListActionTypes.RULES_LIST_SUCCEED;
    }
}
if (false) {
    /** @type {?} */
    RulesListSucceedAction.prototype.type;
    /** @type {?} */
    RulesListSucceedAction.prototype.payload;
}
class RulesListFailedAction {
    constructor() {
        this.type = RulesListActionTypes.RULES_LIST_FAILED;
    }
}
if (false) {
    /** @type {?} */
    RulesListFailedAction.prototype.type;
}
class UpsertRuleAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = RulesListActionTypes.RULE_UPSERT;
    }
}
if (false) {
    /** @type {?} */
    UpsertRuleAction.prototype.type;
    /** @type {?} */
    UpsertRuleAction.prototype.payload;
}
class GetRuleAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = RulesListActionTypes.GET_RULE;
    }
}
if (false) {
    /** @type {?} */
    GetRuleAction.prototype.type;
    /** @type {?} */
    GetRuleAction.prototype.payload;
}
class RuleFechedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = RulesListActionTypes.RULE_FETCHED;
    }
}
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
const ɵ0 = [];
/** @type {?} */
const initialState$1 = {
    status: "pristine",
    data: ɵ0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer(state = initialState$1, action) {
    switch (action.type) {
        case RulesListActionTypes.RULES_LIST: {
            return Object.assign({}, state, { status: "dirty" });
        }
        case RulesListActionTypes.RULES_LIST_START: {
            return Object.assign({}, state, { status: "pending" });
        }
        case RulesListActionTypes.RULES_LIST_SUCCEED: {
            return Object.assign({}, state, { data: action.payload, status: "succeed" });
        }
        case RulesListActionTypes.RULES_LIST_FAILED: {
            return Object.assign({}, state, { status: "failed" });
        }
        case RulesListActionTypes.RULE_UPSERT: {
            /** @type {?} */
            const data = state.data.concat();
            /** @type {?} */
            var entityIdx = state.data.findIndex((/**
             * @param {?} form
             * @return {?}
             */
            form => form._id == action.payload._id));
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return Object.assign({}, state, { data: data });
        }
        case RulesListActionTypes.RULE_FETCHED: {
            /** @type {?} */
            const data = state.data.concat();
            /** @type {?} */
            var entityIdx = state.data.findIndex((/**
             * @param {?} form
             * @return {?}
             */
            form => form._id == action.payload._id));
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return Object.assign({}, state, { data: data });
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
(state) => state.status);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ScenariosListActionTypes = {
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
class ScenariosListAction {
    constructor() {
        this.type = ScenariosListActionTypes.SCENARIOS_LIST;
    }
}
if (false) {
    /** @type {?} */
    ScenariosListAction.prototype.type;
}
class ScenariosListStartAction {
    constructor() {
        this.type = ScenariosListActionTypes.SCENARIOS_LIST_START;
    }
}
if (false) {
    /** @type {?} */
    ScenariosListStartAction.prototype.type;
}
class ScenariosListSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ScenariosListActionTypes.SCENARIOS_LIST_SUCCEED;
    }
}
if (false) {
    /** @type {?} */
    ScenariosListSucceedAction.prototype.type;
    /** @type {?} */
    ScenariosListSucceedAction.prototype.payload;
}
class ScenariosListFailedAction {
    constructor() {
        this.type = ScenariosListActionTypes.SCENARIOS_LIST_FAILED;
    }
}
if (false) {
    /** @type {?} */
    ScenariosListFailedAction.prototype.type;
}
class UpsertScenarioAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ScenariosListActionTypes.UPSERT;
    }
}
if (false) {
    /** @type {?} */
    UpsertScenarioAction.prototype.type;
    /** @type {?} */
    UpsertScenarioAction.prototype.payload;
}
class GetScenarioAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ScenariosListActionTypes.GET_SCENARIO;
    }
}
if (false) {
    /** @type {?} */
    GetScenarioAction.prototype.type;
    /** @type {?} */
    GetScenarioAction.prototype.payload;
}
class ScenarioFechedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ScenariosListActionTypes.SCENARIO_FETCHED;
    }
}
if (false) {
    /** @type {?} */
    ScenarioFechedAction.prototype.type;
    /** @type {?} */
    ScenarioFechedAction.prototype.payload;
}
class UpdateDbAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ScenariosListActionTypes.UPDATE_DB;
    }
}
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
const ɵ0$1 = [];
/** @type {?} */
const initialState$2 = {
    status: "pristine",
    data: ɵ0$1
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$1(state = initialState$2, action) {
    switch (action.type) {
        case ScenariosListActionTypes.SCENARIOS_LIST: {
            return Object.assign({}, state, { status: "dirty" });
        }
        case ScenariosListActionTypes.SCENARIOS_LIST_START: {
            return Object.assign({}, state, { status: "pending" });
        }
        case ScenariosListActionTypes.SCENARIOS_LIST_SUCCEED: {
            return Object.assign({}, state, { data: action.payload, status: "succeed" });
        }
        case ScenariosListActionTypes.SCENARIOS_LIST_FAILED: {
            return Object.assign({}, state, { status: "failed" });
        }
        case ScenariosListActionTypes.UPSERT: {
            /** @type {?} */
            const data = state.data.concat();
            /** @type {?} */
            var entityIdx = state.data.findIndex((/**
             * @param {?} form
             * @return {?}
             */
            form => form._id == action.payload._id));
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return Object.assign({}, state, { data: data });
        }
        case ScenariosListActionTypes.SCENARIO_FETCHED: {
            /** @type {?} */
            const data = state.data.concat();
            /** @type {?} */
            var entityIdx = state.data.findIndex((/**
             * @param {?} form
             * @return {?}
             */
            form => form._id == action.payload._id));
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return Object.assign({}, state, { data: data });
        }
        case ScenariosListActionTypes.UPDATE_DB: {
            /** @type {?} */
            const data = state.data.concat();
            /** @type {?} */
            const scenarios = action.payload;
            scenarios.forEach((/**
             * @param {?} scenario
             * @return {?}
             */
            scenario => {
                /** @type {?} */
                var entityIdx = state.data.findIndex((/**
                 * @param {?} form
                 * @return {?}
                 */
                form => form._id == scenario._id));
                if (entityIdx > -1) {
                    data[entityIdx] = Object.assign({}, data[entityIdx], scenario);
                }
                else {
                    data.push(scenario);
                }
            }));
            return Object.assign({}, state, { data: data });
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
(state) => state.status);

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
const RuleReducers = {
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
class RuleConfigurationService {
    /**
     * @param {?} configFile
     * @param {?} store
     * @param {?} injector
     */
    constructor(configFile, store, injector) {
        this.store = store;
        this.injector = injector;
        this.config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);
        // instantiate steps and used them
        configFile.steps = configFile.stepClasses.map((/**
         * @param {?} step
         * @return {?}
         */
        step => new step(this.injector)));
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        // this.store.select(getRuleModuleConfig).subscribe(userConfig => {
        // 	if (!userConfig) return;
        // 	this._config = Object.assign({}, this._config, userConfig.Config);
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
RuleConfigurationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RuleConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store },
    { type: Injector }
];
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
class GwtScenarioModel {
    /**
     * @param {?=} __0
     */
    constructor({ _id, anchorId, steps, name, featureId } = {}) {
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
    getRequsetBody() {
        return {
            _id: this._id,
            anchorId: this.anchorId,
            name: this.name,
            featureId: this.featureId,
            steps: this.steps.map((/**
             * @param {?} step
             * @return {?}
             */
            (step) => ({
                id: step.id,
                opposite: step.opposite,
                params: step.params
            })))
        };
    }
}
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
class StepLoaderDirective {
    /**
     * @param {?} resolver
     * @param {?} container
     */
    constructor(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    /**
     * @return {?}
     */
    get params() {
        return this.component.instance.params || {};
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.component) {
            // this.component.instance.config = this.config;
            // this.component.instance.group = this.group;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.step.stepComponent) {
            debugger;
            throw new Error(`Trying to use an unsupported type ().
		  Supported types: `);
        }
        // TODO: fix generic type
        /** @type {?} */
        const component = this.resolver.resolveComponentFactory(this.step.stepComponent);
        this.component = this.container.createComponent(component);
        debugger;
        this.component.instance.params = this.step.params;
    }
}
StepLoaderDirective.decorators = [
    { type: Directive, args: [{
                selector: "[rule-step-loader]"
                // templateUrl: "./step-loader.component.html",
                // styleUrls: [ "./step-loader.component.css" ]
            },] }
];
/** @nocollapse */
StepLoaderDirective.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
StepLoaderDirective.propDecorators = {
    step: [{ type: Input }],
    component: [{ type: ViewChild, args: ["container", { read: ViewContainerRef, static: false },] }]
};
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
class ScenarioService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configService
     */
    constructor(http, store, configService) {
        this.http = http;
        this.store = store;
        this.configService = configService;
        this.scenarios = {};
        this.config$ = this.configService.config$;
        this.config$.subscribe((/**
         * @param {?} config
         * @return {?}
         */
        config => (this.config = config)));
    }
    /**
     * @param {?} scenario
     * @return {?}
     */
    upsert(scenario) {
        /** @type {?} */
        const model = new GwtScenarioModel(scenario);
        return this.http
            .post(this.config.env.frontend_server + this.config.endpoints.upsert, model.getRequsetBody())
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => (/** @type {?} */ (response)))), share());
    }
    /**
     * @param {?} anchorId
     * @return {?}
     */
    getAnchorScenarios(anchorId) {
        if (!this.scenarios[anchorId]) {
            this.scenarios[anchorId] = new BehaviorSubject$1([]);
            this.http
                .get(this.config.env.frontend_server + stringTemplate(this.config.endpoints.get, { anchorId }))
                .pipe(map((/**
             * @param {?} response
             * @return {?}
             */
            response => (/** @type {?} */ (response.Result)))))
                .subscribe((/**
             * @param {?} scenarios
             * @return {?}
             */
            scenarios => this.scenarios[anchorId].next(scenarios)));
        }
        return this.scenarios[anchorId];
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    selectScenarioById(_id) {
        /** @type {?} */
        const subject = new BehaviorSubject$1(undefined);
        this.store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.rule.scenarios.data))
            .pipe(filter((/**
         * @param {?} scenarios
         * @return {?}
         */
        scenarios => scenarios != null)), map((/**
         * @param {?} scenarios
         * @return {?}
         */
        scenarios => {
            return scenarios.find((/**
             * @param {?} scenario
             * @return {?}
             */
            scenario => scenario._id == _id));
        })), filter((/**
         * @param {?} scenario
         * @return {?}
         */
        scenario => scenario != undefined)))
            .subscribe((/**
         * @param {?} scenario
         * @return {?}
         */
        scenario => {
            subject.next(scenario);
        }));
        return subject.asObservable();
    }
    /**
     * @param {?} anchorId
     * @return {?}
     */
    selectAnchorScenarios(anchorId) {
        /** @type {?} */
        const subject = new BehaviorSubject$1(undefined);
        this.store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.rule.scenarios.data))
            .pipe(startWith([]), filter((/**
         * @param {?} scenarios
         * @return {?}
         */
        scenarios => scenarios != null)), map((/**
         * @param {?} scenarios
         * @return {?}
         */
        scenarios => {
            return scenarios.filter((/**
             * @param {?} scenario
             * @return {?}
             */
            scenario => scenario._id == anchorId));
        })))
            .subscribe((/**
         * @param {?} scenarios
         * @return {?}
         */
        scenarios => {
            subject.next(scenarios);
        }));
        return subject.asObservable();
    }
}
ScenarioService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ScenarioService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: RuleConfigurationService }
];
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
class GwtViewComponent {
    /**
     * @param {?} store
     * @param {?} configService
     * @param {?} scenarioService
     * @param {?} injector
     * @param {?} data
     */
    constructor(store, configService, scenarioService, injector, data) {
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
    ngOnInit() {
        this.steps$ = this.configService.config$.pipe(map((/**
         * @param {?} config
         * @return {?}
         */
        config => config.steps)), takeUntil(this.unsubscribe));
        this.steps$.subscribe((/**
         * @param {?} steps
         * @return {?}
         */
        steps => (this.steps = steps)));
        this._load_scenario_and_map_scenario_step_to_steps_class();
        this.scenario$.subscribe((/**
         * @param {?} s
         * @return {?}
         */
        s => {
            debugger;
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    /**
     * @return {?}
     */
    save() {
        /** @type {?} */
        const scenario = this.scenario$.getValue();
        this.stepLoaders.forEach((/**
         * @param {?} stepLoader
         * @return {?}
         */
        stepLoader => {
            scenario.steps.find((/**
             * @param {?} step
             * @return {?}
             */
            step => step.name === stepLoader.step.name)).params = stepLoader.params;
        }));
        scenario.featureId = this.scenarioFormGroup.value.featureId;
        scenario.name = this.scenarioFormGroup.value.name;
        this.store.dispatch(new UpsertScenarioAction(scenario));
    }
    /**
     * @param {?} step
     * @return {?}
     */
    addStepToScenario(step) {
        /** @type {?} */
        const scenario = this.scenario$.getValue();
        scenario.steps.push(step);
        this.scenario$.next(scenario);
    }
    /**
     * @param {?} step
     * @return {?}
     */
    deleteStepFromScenario(step) {
        /** @type {?} */
        const scenario = this.scenario$.getValue();
        scenario.steps.splice(scenario.steps.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        item => item.name === step.name)), 1);
        this.scenario$.next(scenario);
    }
    /**
     * @param {?} step
     * @return {?}
     */
    decScenarioStepPriority(step) { }
    /**
     * @param {?} step
     * @return {?}
     */
    incScenarioStepPriority(step) { }
    /**
     * @return {?}
     */
    addNewScenario() {
        /** @type {?} */
        const scenarios = this.scenarios$.getValue();
        scenarios.push(new GwtScenarioModel({
            anchorId: this.data.anchorId
        }));
        this.scenarios$.next(scenarios);
    }
    /**
     * @param {?} scenario
     * @return {?}
     */
    activeScenario(scenario) {
        debugger;
        scenario.steps = scenario.steps.map((/**
         * @param {?} scenarioStep
         * @return {?}
         */
        scenarioStep => {
            /** @type {?} */
            const _step = this.steps.find((/**
             * @param {?} step
             * @return {?}
             */
            step => step.id === scenarioStep.id));
            /** @type {?} */
            const step = Object.create(_step);
            step.params = scenarioStep.params;
            return step;
        }));
        this.scenarioFormGroup.patchValue(scenario);
        scenario.anchorId = this.data.anchorId;
        this.scenario$.next(scenario);
    }
    /**
     * @return {?}
     */
    _load_scenario_and_map_scenario_step_to_steps_class() {
        this.scenarioService
            .getAnchorScenarios(this.data.anchorId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe((/**
         * @param {?} scenarios
         * @return {?}
         */
        scenarios => {
            this.scenarios$.next(scenarios);
            this.activeScenario(scenarios[0] || new GwtScenarioModel());
        }));
    }
    /**
     * @return {?}
     */
    _create_scenario_form_group() {
        this.scenarioFormGroup = new FormGroup({
            featureId: new FormControl(),
            name: new FormControl()
        });
    }
    /**
     * @return {?}
     */
    _reset_scenario_form_group_and_patch_with_active_scenario() {
        this.scenarioFormGroup.reset();
        this.scenarioFormGroup.patchValue(this.scenario$.getValue());
    }
    /**
     * @return {?}
     */
    _init_features_list() {
        this.features$ = ["مدیریت نمایش براساس دسترسی های کاربر"];
    }
}
GwtViewComponent.decorators = [
    { type: Component, args: [{
                selector: "app-gwt-view",
                template: "<div fxLayout=\"row\" fxLayoutGap=\"25px\">\r\n  <div fxFlex=\"400px\" fxLayout=\"column\" fxLayoutGap=\"15px\">\r\n    <!-- <div fxLayout=\"row wrap\">\r\n    <mat-form-field appearance=\"fill\" fxFlex=\"100\">\r\n      <input matInput placeholder=\"\u0641\u06CC\u0644\u062A\u0631\">\r\n      <mat-icon matSuffix>search</mat-icon>\r\n    </mat-form-field>\r\n    <mat-checkbox fxFlex class=\"example-margin\">\u0641\u0631\u0636 \u06A9\u0646\u06CC\u062F</mat-checkbox>\r\n    <mat-checkbox fxFlex class=\"example-margin\">\u0647\u0646\u06AF\u0627\u0645\u06CC \u06A9\u0647</mat-checkbox>\r\n    <mat-checkbox fxFlex class=\"example-margin\">\u0622\u0646\u06AF\u0627\u0647</mat-checkbox>\r\n  </div> -->\r\n    <mat-card class=\"steps-item\" *ngFor=\"let step of steps$ | async\">\r\n      <span class=\"step-text\">\r\n        {{step.description}}\r\n      </span>\r\n      <button mat-icon-button class=\"add-button\" (click)=\"addStepToScenario(step)\">\r\n        <mat-icon>arrow_back_ios</mat-icon>\r\n      </button>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div fxFlex=\"700px\">\r\n    <div fxLayout=\"row wrap\" fxLayoutGap=\"25px\" fxLayoutAlign=\"center center\" class=\"scenario-toolbar\">\r\n      <div fxFlex>\r\n        <mat-form-field class=\"fit\">\r\n          <mat-select placeholder=\"\u0648\u0650\u06CC\u0698\u06AF\u06CC\" (selectionChange)=\"activeScenario($event.value)\">\r\n            <mat-option *ngFor=\"let scenario of scenarios$ | async\" [value]=\"scenario\">\r\n              {{ scenario.featureId }} : {{ scenario.name }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <button fxFlex=\"nogrow\" mat-raised-button color=\"primary\" (click)=\"addNewScenario()\">\r\n        \u062B\u0628\u062A \u0633\u0646\u0627\u0631\u06CC\u0648 \u062C\u062F\u06CC\u062F\r\n      </button>\r\n    </div>\r\n    <div fxLayout=\"column\" fxLayoutGap=\"15px\">\r\n      <div fxFlex=\"100\" fxLayout=\"row\" fxLayoutGap=\"25px\" [formGroup]=\"scenarioFormGroup\">\r\n        <mat-form-field fxFlex=\"50\">\r\n          <mat-select placeholder=\"\u0648\u06CC\u0698\u06AF\u06CC\" formControlName=\"featureId\">\r\n            <mat-option *ngFor=\"let feature of features$\" [value]=\"feature\">\r\n              {{ feature }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex=\"50\">\r\n          <input matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\r\n        </mat-form-field>\r\n      </div>\r\n      <ng-container *ngFor=\"let step of (scenario$ | async).steps\">\r\n        <div class=\"scenario-steps-item\">\r\n          <ng-container rule-step-loader [step]=\"step\"></ng-container>\r\n          <div class=\"scenario-steps-action\">\r\n            <button mat-icon-button (click)=\"deleteStepFromScenario(step)\">\r\n              <mat-icon>delete</mat-icon>\r\n            </button>\r\n            <button mat-icon-button (click)=\"incScenarioStepPriority(step)\">\r\n              <mat-icon>keyboard_arrow_up</mat-icon>\r\n            </button>\r\n            <button mat-icon-button (click)=\"decScenarioStepPriority(step)\">\r\n              <mat-icon>keyboard_arrow_down</mat-icon>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <button fxFlex=\"nogrow\" mat-raised-button color=\"primary\" (click)=\"save()\">\r\n        \u062B\u0628\u062A\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: [":host{width:100vw}.scenario-toolbar{height:60px;margin-bottom:20px}"]
            }] }
];
/** @nocollapse */
GwtViewComponent.ctorParameters = () => [
    { type: Store },
    { type: RuleConfigurationService },
    { type: ScenarioService },
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_BOTTOM_SHEET_DATA,] }] }
];
GwtViewComponent.propDecorators = {
    stepLoaders: [{ type: ViewChildren, args: [StepLoaderDirective,] }]
};
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
const GwtStepTypes = {
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
class RuleAnchorDirective {
    /**
     * @param {?} scenarioService
     * @param {?} configService
     * @param {?} store
     * @param {?} el
     * @param {?} renderer
     * @param {?} bottomSheet
     */
    constructor(scenarioService, configService, store, el, renderer, bottomSheet) {
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
        s => s.rule.ruleAnchors.active)).pipe(takeUntil(this.unsubscribe));
        this.active$.subscribe((/**
         * @param {?} active
         * @return {?}
         */
        active => (this.active = active)));
        this.el.nativeElement.classList.add("ngs-rule-anchor");
        this.steps = this.configService.config$.getValue().steps;
    }
    /**
     * @return {?}
     */
    onMouseEnter() {
        debugger;
        this.el;
        if (!this.active) {
            return;
        }
        this.showAnchor();
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        if (!this.active) {
            return;
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.hideAnchor();
        }), 999);
    }
    /**
     * @private
     * @return {?}
     */
    showAnchor() {
        this.el.nativeElement.classList.add("show-anchor");
    }
    /**
     * @private
     * @return {?}
     */
    hideAnchor() {
        this.el.nativeElement.classList.remove("show-anchor");
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // TODO: remove
        // this.store.dispatch(new ShowAnchorsAction());
        this.anchorScenarios$ = this.scenarioService
            .getAnchorScenarios(this.anchorId) // TODO: replace service call with ngrx action
            .pipe(takeUntil(this.unsubscribe), filter((/**
         * @param {?} scenario
         * @return {?}
         */
        scenario => scenario !== undefined)));
        this.active$.subscribe((/**
         * @param {?} active
         * @return {?}
         */
        active => {
            if (active) {
                this._activate_anchor();
            }
            else {
                this._deactivate_anchor();
            }
        }));
        this.anchorScenarios$.subscribe((/**
         * @param {?} scenarios
         * @return {?}
         */
        scenarios => {
            scenarios.forEach((/**
             * @param {?} scenario
             * @return {?}
             */
            scenario => {
                scenario.steps = scenario.steps.map((/**
                 * @param {?} scenarioStep
                 * @return {?}
                 */
                scenarioStep => {
                    /** @type {?} */
                    const step = this.steps.find((/**
                     * @param {?} step
                     * @return {?}
                     */
                    step => step.id === scenarioStep.id));
                    /** @type {?} */
                    const _step = Object.create(step);
                    _step.params = scenarioStep.params;
                    return _step;
                }));
                this._do_scenario(scenario);
            }));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    /**
     * @return {?}
     */
    _activate_anchor() {
        this._create_anchor();
        this._set_active_class_to_host();
    }
    /**
     * @return {?}
     */
    _deactivate_anchor() {
        this._remove_anchor();
        this._remove_active_class_to_host();
    }
    /**
     * @return {?}
     */
    _set_active_class_to_host() {
        this.el.nativeElement.classList.add("anchor-active");
    }
    /**
     * @return {?}
     */
    _remove_active_class_to_host() {
        this.el.nativeElement.classList.remove("anchor-active");
    }
    /**
     * @return {?}
     */
    _create_anchor() {
        this.button = this.renderer.createElement("button");
        this.button.classList.add("ngs-rule-anchor-button", "mat-icon-button");
        this.button.setAttribute("mat-icon-button", "");
        this.button.addEventListener("click", (/**
         * @param {?} e
         * @return {?}
         */
        e => {
            e.preventDefault();
            e.stopPropagation();
            this.bottomSheet.open(GwtViewComponent, {
                data: {
                    anchorId: this.anchorId
                },
                panelClass: "magenta-theme"
            });
        }));
        /** @type {?} */
        const maticon = this.renderer.createElement("mat-icon");
        maticon.classList.add("mat-icon", "material-icons");
        /** @type {?} */
        const icon = this.renderer.createText("settings");
        this.renderer.appendChild(maticon, icon);
        this.renderer.appendChild(this.button, maticon);
        this.renderer.appendChild(this.el.nativeElement, this.button);
    }
    /**
     * @return {?}
     */
    _remove_anchor() {
        if (!this.button) {
            return;
        }
        this.button.parentNode.removeChild(this.button);
    }
    /**
     * @param {?} _scenario
     * @return {?}
     */
    _do_scenario(_scenario) {
        debugger;
        /** @type {?} */
        const scenario = _scenario;
        /** @type {?} */
        const givenStepInterpretors = scenario.steps
            .filter((/**
         * @param {?} step
         * @return {?}
         */
        step => step.type === GwtStepTypes.Given))
            .map((/**
         * @param {?} step
         * @return {?}
         */
        step => step.interperator(step.params)));
        debugger;
        combineLatest(givenStepInterpretors)
            .pipe(takeUntil(this.unsubscribe), map((/**
         * @param {?} values
         * @return {?}
         */
        (values) => values.every((/**
         * @param {?} value
         * @return {?}
         */
        value => value === true)))), switchMap((/**
         * @param {?} givenResult
         * @return {?}
         */
        givenResult => {
            debugger;
            if (givenResult) {
                /** @type {?} */
                const thenStepInterpretors = scenario.steps
                    .filter((/**
                 * @param {?} step
                 * @return {?}
                 */
                step => step.type === GwtStepTypes.Then))
                    .map((/**
                 * @param {?} step
                 * @return {?}
                 */
                step => step.interperator(step.params, this.el)));
                return combineLatest
                    .apply(null, thenStepInterpretors)
                    .pipe(map((/**
                 * @param {?} values
                 * @return {?}
                 */
                (values) => values.every((/**
                 * @param {?} value
                 * @return {?}
                 */
                value => value === true)))));
            }
            else {
                return of(false);
            }
        })))
            .subscribe((/**
         * @return {?}
         */
        () => { }));
    }
}
RuleAnchorDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ruleAnchor]"
            },] }
];
/** @nocollapse */
RuleAnchorDirective.ctorParameters = () => [
    { type: ScenarioService },
    { type: RuleConfigurationService },
    { type: Store },
    { type: ElementRef },
    { type: Renderer2 },
    { type: MatBottomSheet }
];
RuleAnchorDirective.propDecorators = {
    anchorId: [{ type: Input, args: ["ruleAnchor",] }],
    onMouseEnter: [{ type: HostListener, args: ["mouseenter",] }],
    onMouseLeave: [{ type: HostListener, args: ["mouseleave",] }]
};
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
class ScenariosDbEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.EditProfileRequest$ = this.actions$.pipe(ofType(ScenariosListActionTypes.SCENARIOS_LIST), map((/**
         * @return {?}
         */
        () => new ScenariosListStartAction())));
        this.UpsertScenario$ = this.actions$.pipe(ofType(ScenariosListActionTypes.UPSERT), map((/**
         * @param {?} action
         * @return {?}
         */
        action => action.payload)), switchMap((/**
         * @param {?} scenario
         * @return {?}
         */
        scenario => this.service.upsert(scenario))), map((/**
         * @param {?} scenario
         * @return {?}
         */
        scenario => new ScenarioFechedAction(scenario))));
    }
}
ScenariosDbEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ScenariosDbEffects.ctorParameters = () => [
    { type: Actions },
    { type: ScenarioService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], ScenariosDbEffects.prototype, "EditProfileRequest$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], ScenariosDbEffects.prototype, "UpsertScenario$", void 0);
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
class RulesListEffects {
    /**
     * @param {?} actions$
     */
    constructor(actions$) {
        this.actions$ = actions$;
        this.EditProfileRequest$ = this.actions$.pipe(ofType(RulesListActionTypes.RULES_LIST), map((/**
         * @return {?}
         */
        () => new RulesListStartAction())));
    }
}
RulesListEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RulesListEffects.ctorParameters = () => [
    { type: Actions }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], RulesListEffects.prototype, "EditProfileRequest$", void 0);
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
class GwtModeButtonComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.anchorsMode = false;
        this.havePermission$ = this.store.select(getFrontendAuthenticationState);
    }
    /**
     * @return {?}
     */
    toggleAnchors() {
        if (this.anchorsMode === false) {
            this.store.dispatch(new ShowAnchorsAction());
            this.anchorsMode = true;
        }
        else {
            this.store.dispatch(new HideAnchorsAction());
            this.anchorsMode = false;
        }
    }
}
GwtModeButtonComponent.decorators = [
    { type: Component, args: [{
                selector: "gwt-mode-button",
                template: "    <button *ngIf=\"!(havePermission$ | async)\" class=\"btn\" mat-mini-fab type=\"button\" routerLink=\"auth/frontend/signin\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>fingerprint</mat-icon>\n    </button>\n\n    <button *ngIf=\"havePermission$ | async\" class=\"btn\" mat-mini-fab type=\"button\" (click)=\"toggleAnchors()\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>settings</mat-icon>\n    </button>",
                styles: [".btn{position:fixed;bottom:25px;left:25px;z-index:3}"]
            }] }
];
/** @nocollapse */
GwtModeButtonComponent.ctorParameters = () => [
    { type: Store }
];
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
class RuleService {
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
}
RuleService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RuleService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: RuleConfigurationService }
];
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
class RuleModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: RootRuleModule,
            providers: [
                { provide: MODULE_CONFIG_TOKEN, useValue: config || {} },
                RuleService,
                RuleConfigurationService,
                ScenarioService
            ]
        };
    }
}
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
class RootRuleModule {
    constructor() {
        ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
        ((/** @type {?} */ (window))).___starter.rule = "8.0.10";
    }
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
RootRuleModule.ctorParameters = () => [];

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
