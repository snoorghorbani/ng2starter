import { InjectionToken, Component, Injectable, Inject, Injector, Input, ViewContainerRef, ComponentFactoryResolver, ViewChild, Directive, ViewChildren, HostListener, ElementRef, Renderer2, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { filter, map, startWith, share, takeUntil, switchMap } from 'rxjs/operators';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs/Rx';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { stringTemplate } from '@soushians/shared';
import { BehaviorSubject as BehaviorSubject$2, Subject, of, combineLatest } from 'rxjs';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheet, MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule } from '@angular/material';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __decorate, __metadata } from 'tslib';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { getFrontendAuthenticationState } from '@soushians/frontend-authentication';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ MODULE_DEFAULT_CONFIG = {
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
const /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("RuleModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                template: `<div fxLayout="row" fxLayoutAlign="center center">
  <router-outlet></router-outlet>
</div>`
            },] },
];
/** @nocollapse */
RuleComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ routes = [
    {
        path: "rule",
        component: RuleComponent
    }
];
const /** @type {?} */ RoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
class HideAnchorsAction {
    constructor() {
        this.type = RuleAnchorsActionTypes.HIDE_ANCHORS;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ initialState = {
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
//#endregion

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
class RulesListStartAction {
    constructor() {
        this.type = RulesListActionTypes.RULES_LIST_START;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ initialState$1 = {
    status: "pristine",
    data: []
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
            const /** @type {?} */ data = state.data.concat();
            var /** @type {?} */ entityIdx = state.data.findIndex(form => form._id == action.payload._id);
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return Object.assign({}, state, { data: data });
        }
        case RulesListActionTypes.RULE_FETCHED: {
            const /** @type {?} */ data = state.data.concat();
            var /** @type {?} */ entityIdx = state.data.findIndex(form => form._id == action.payload._id);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    UPDATE_DB: "[GWT][SCENARIO][DB] UPDATE_DB",
};
class ScenariosListStartAction {
    constructor() {
        this.type = ScenariosListActionTypes.SCENARIOS_LIST_START;
    }
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
class ScenarioFechedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ScenariosListActionTypes.SCENARIO_FETCHED;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ initialState$2 = {
    status: "pristine",
    data: []
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
            const /** @type {?} */ data = state.data.concat();
            var /** @type {?} */ entityIdx = state.data.findIndex(form => form._id == action.payload._id);
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return Object.assign({}, state, { data: data });
        }
        case ScenariosListActionTypes.SCENARIO_FETCHED: {
            const /** @type {?} */ data = state.data.concat();
            var /** @type {?} */ entityIdx = state.data.findIndex(form => form._id == action.payload._id);
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return Object.assign({}, state, { data: data });
        }
        case ScenariosListActionTypes.UPDATE_DB: {
            const /** @type {?} */ data = state.data.concat();
            const /** @type {?} */ scenarios = action.payload;
            scenarios.forEach(scenario => {
                var /** @type {?} */ entityIdx = state.data.findIndex(form => form._id == scenario._id);
                if (entityIdx > -1) {
                    data[entityIdx] = Object.assign({}, data[entityIdx], scenario);
                }
                else {
                    data.push(scenario);
                }
            });
            return Object.assign({}, state, { data: data });
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
const /** @type {?} */ RuleReducers = {
    ruleAnchors: Reducer,
    rules: reducer,
    scenarios: reducer$1
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        configFile.steps = configFile.stepClasses.map(step => new step(this.injector));
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
    { type: Injectable },
];
/** @nocollapse */
RuleConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store },
    { type: Injector }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            steps: this.steps.map((step) => ({
                id: step.id,
                opposite: step.opposite,
                params: step.params
            }))
        };
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        if (this.component) ;
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
        const /** @type {?} */ component = this.resolver.resolveComponentFactory(this.step.stepComponent);
        this.component = this.container.createComponent(component);
        debugger;
        this.component.instance.params = this.step.params;
    }
}
StepLoaderDirective.decorators = [
    { type: Directive, args: [{
                selector: "[rule-step-loader]"
            },] },
];
/** @nocollapse */
StepLoaderDirective.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
StepLoaderDirective.propDecorators = {
    step: [{ type: Input }],
    component: [{ type: ViewChild, args: ["container", { read: ViewContainerRef },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        this.config$ = this.configService.config$;
        this.config$.subscribe(config => (this.config = config));
    }
    /**
     * @param {?} scenario
     * @return {?}
     */
    upsert(scenario) {
        const /** @type {?} */ model = new GwtScenarioModel(scenario);
        return this.http
            .post(this.config.env.frontend_server + this.config.endpoints.upsert, model.getRequsetBody())
            .pipe(map(response => /** @type {?} */ (response)), share());
    }
    /**
     * @param {?} anchorId
     * @return {?}
     */
    getAnchorScenarios(anchorId) {
        return this.http
            .get(this.config.env.frontend_server + stringTemplate(this.config.endpoints.get, { anchorId }))
            .map(response => /** @type {?} */ (response.Result));
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    selectScenarioById(_id) {
        const /** @type {?} */ subject = new BehaviorSubject$1(undefined);
        this.store
            .select(state => state.rule.scenarios.data)
            .pipe(filter(scenarios => scenarios != null), map(scenarios => {
            return scenarios.find(scenario => scenario._id == _id);
        }), filter(scenario => scenario != undefined))
            .subscribe(scenario => {
            subject.next(scenario);
        });
        return subject.asObservable();
    }
    /**
     * @param {?} anchorId
     * @return {?}
     */
    selectAnchorScenarios(anchorId) {
        const /** @type {?} */ subject = new BehaviorSubject$1(undefined);
        this.store
            .select(state => state.rule.scenarios.data)
            .pipe(startWith([]), filter(scenarios => scenarios != null), map(scenarios => {
            return scenarios.filter(scenario => scenario._id == anchorId);
        }))
            .subscribe(scenarios => {
            subject.next(scenarios);
        });
        return subject.asObservable();
    }
}
ScenarioService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ScenarioService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: RuleConfigurationService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        this.steps$ = this.configService.config$.pipe(map(config => config.steps), takeUntil(this.unsubscribe));
        this.steps$.subscribe(steps => (this.steps = steps));
        this._load_scenario_and_map_scenario_step_to_steps_class();
        this.scenario$.subscribe(s => {
            debugger;
        });
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
        const /** @type {?} */ scenario = this.scenario$.getValue();
        this.stepLoaders.forEach(stepLoader => {
            scenario.steps.find(step => step.name === stepLoader.step.name).params = stepLoader.params;
        });
        scenario.featureId = this.scenarioFormGroup.value.featureId;
        scenario.name = this.scenarioFormGroup.value.name;
        this.store.dispatch(new UpsertScenarioAction(scenario));
    }
    /**
     * @param {?} step
     * @return {?}
     */
    addStepToScenario(step) {
        const /** @type {?} */ scenario = this.scenario$.getValue();
        scenario.steps.push(step);
        this.scenario$.next(scenario);
    }
    /**
     * @param {?} step
     * @return {?}
     */
    deleteStepFromScenario(step) {
        const /** @type {?} */ scenario = this.scenario$.getValue();
        scenario.steps.splice(scenario.steps.findIndex(item => item.name === step.name), 1);
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
        const /** @type {?} */ scenarios = this.scenarios$.getValue();
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
        scenario.steps = scenario.steps.map(scenarioStep => {
            const /** @type {?} */ _step = this.steps.find(step => step.id === scenarioStep.id);
            const /** @type {?} */ step = Object.create(_step);
            step.params = scenarioStep.params;
            return step;
        });
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
            .subscribe(scenarios => {
            this.scenarios$.next(scenarios);
            this.activeScenario(scenarios[0] || new GwtScenarioModel());
        });
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
                template: `<div fxLayout="row" fxLayoutGap="25px">
  <div fxFlex="400px" fxLayout="column" fxLayoutGap="15px">
    <!-- <div fxLayout="row wrap">
    <mat-form-field appearance="fill" fxFlex="100">
      <input matInput placeholder="فیلتر">
      <mat-icon matSuffix>search</mat-icon>
    </mat-form-field>
    <mat-checkbox fxFlex class="example-margin">فرض کنید</mat-checkbox>
    <mat-checkbox fxFlex class="example-margin">هنگامی که</mat-checkbox>
    <mat-checkbox fxFlex class="example-margin">آنگاه</mat-checkbox>
  </div> -->
    <mat-card class="steps-item" *ngFor="let step of steps$ | async">
      <span class="step-text">
        {{step.description}}
      </span>
      <button mat-icon-button class="add-button" (click)="addStepToScenario(step)">
        <mat-icon>arrow_back_ios</mat-icon>
      </button>
    </mat-card>
  </div>

  <div fxFlex="700px">
    <div fxLayout="row wrap" fxLayoutGap="25px" fxLayoutAlign="center center" class="scenario-toolbar">
      <div fxFlex>
        <mat-form-field class="fit">
          <mat-select placeholder="وِیژگی" (selectionChange)="activeScenario($event.value)">
            <mat-option *ngFor="let scenario of scenarios$ | async" [value]="scenario">
              {{ scenario.featureId }} : {{ scenario.name }}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <button fxFlex="nogrow" mat-raised-button color="primary" (click)="addNewScenario()">
        ثبت سناریو جدید
      </button>
    </div>
    <div fxLayout="column" fxLayoutGap="15px">
      <div fxFlex="100" fxLayout="row" fxLayoutGap="25px" [formGroup]="scenarioFormGroup">
        <mat-form-field fxFlex="50">
          <mat-select placeholder="ویژگی" formControlName="featureId">
            <mat-option *ngFor="let feature of features$" [value]="feature">
              {{ feature }}
            </mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field fxFlex="50">
          <input matInput placeholder="نام" formControlName="name">
        </mat-form-field>
      </div>
      <ng-container *ngFor="let step of (scenario$ | async).steps">
        <div class="scenario-steps-item">
          <ng-container rule-step-loader [step]="step"></ng-container>
          <div class="scenario-steps-action">
            <button mat-icon-button (click)="deleteStepFromScenario(step)">
              <mat-icon>delete</mat-icon>
            </button>
            <button mat-icon-button (click)="incScenarioStepPriority(step)">
              <mat-icon>keyboard_arrow_up</mat-icon>
            </button>
            <button mat-icon-button (click)="decScenarioStepPriority(step)">
              <mat-icon>keyboard_arrow_down</mat-icon>
            </button>
          </div>
        </div>
      </ng-container>
      <button fxFlex="nogrow" mat-raised-button color="primary" (click)="save()">
        ثبت
      </button>
    </div>
  </div>
</div>`,
                styles: [`:host{width:100vw}.scenario-toolbar{height:60px;margin-bottom:20px}`]
            },] },
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
        this.active$ = this.store.select(s => s.rule.ruleAnchors.active).pipe(takeUntil(this.unsubscribe));
        this.active$.subscribe(active => (this.active = active));
        this.el.nativeElement.classList.add("ngs-rule-anchor");
        this.steps = this.configService.config$.getValue().steps;
    }
    /**
     * @return {?}
     */
    onMouseEnter() {
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
        this.hideAnchor();
    }
    /**
     * @return {?}
     */
    showAnchor() {
        this.el.nativeElement.classList.add("show-anchor");
    }
    /**
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
            .pipe(takeUntil(this.unsubscribe), filter(scenario => scenario !== undefined));
        this.active$.subscribe(active => {
            if (active) {
                this._activate_anchor();
            }
            else {
                this._deactivate_anchor();
            }
        });
        this.anchorScenarios$.subscribe(scenarios => {
            scenarios.forEach(scenario => {
                scenario.steps = scenario.steps.map(scenarioStep => {
                    const /** @type {?} */ step = this.steps.find(step => step.id === scenarioStep.id);
                    const /** @type {?} */ _step = Object.create(step);
                    _step.params = scenarioStep.params;
                    return _step;
                });
                this._do_scenario(scenario);
            });
        });
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
        this.button.addEventListener("click", e => {
            e.preventDefault();
            e.stopPropagation();
            this.bottomSheet.open(GwtViewComponent, {
                data: {
                    anchorId: this.anchorId
                },
                panelClass: "magenta-theme"
            });
        });
        const /** @type {?} */ maticon = this.renderer.createElement("mat-icon");
        maticon.classList.add("mat-icon", "material-icons");
        const /** @type {?} */ icon = this.renderer.createText("settings");
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
        const /** @type {?} */ scenario = _scenario;
        const /** @type {?} */ givenStepInterpretors = scenario.steps
            .filter(step => step.type === GwtStepTypes.Given)
            .map(step => step.interperator(step.params));
        debugger;
        combineLatest(givenStepInterpretors)
            .pipe(takeUntil(this.unsubscribe), map((values) => values.every(value => value === true)), switchMap(givenResult => {
            debugger;
            if (givenResult) {
                const /** @type {?} */ thenStepInterpretors = scenario.steps
                    .filter(step => step.type === GwtStepTypes.Then)
                    .map(step => step.interperator(step.params, this.el));
                return combineLatest
                    .apply(null, thenStepInterpretors)
                    .pipe(map((values) => values.every(value => value === true)));
            }
            else {
                return of(false);
            }
        }))
            .subscribe(() => { });
    }
}
RuleAnchorDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ruleAnchor]"
            },] },
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ScenariosDbEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.EditProfileRequest$ = this.actions$
            .ofType(ScenariosListActionTypes.SCENARIOS_LIST)
            .pipe(map(() => new ScenariosListStartAction()));
        this.UpsertScenario$ = this.actions$
            .ofType(ScenariosListActionTypes.UPSERT)
            .pipe(map((action) => action.payload), switchMap((scenario) => this.service.upsert(scenario)), map((scenario) => new ScenarioFechedAction(scenario)));
    }
}
ScenariosDbEffects.decorators = [
    { type: Injectable },
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RulesListEffects {
    /**
     * @param {?} actions$
     */
    constructor(actions$) {
        this.actions$ = actions$;
        this.EditProfileRequest$ = this.actions$.ofType(RulesListActionTypes.RULES_LIST).map(() => new RulesListStartAction());
    }
}
RulesListEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
RulesListEffects.ctorParameters = () => [
    { type: Actions }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], RulesListEffects.prototype, "EditProfileRequest$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                template: `    <button *ngIf="!(havePermission$ | async)" class="btn" mat-mini-fab type="button" routerLink="auth/frontend/signin" fxFlex="nogrow" fxLayoutAlign="center center">
      <mat-icon>fingerprint</mat-icon>
    </button>

    <button *ngIf="havePermission$ | async" class="btn" mat-mini-fab type="button" (click)="toggleAnchors()" fxFlex="nogrow" fxLayoutAlign="center center">
      <mat-icon>settings</mat-icon>
    </button>`,
                styles: [`.btn{position:fixed;bottom:25px;left:25px;z-index:3}`]
            },] },
];
/** @nocollapse */
GwtModeButtonComponent.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    { type: Injectable },
];
/** @nocollapse */
RuleService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: RuleConfigurationService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            },] },
];
class RootRuleModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { GwtStepTypes, ShowAnchorsAction, HideAnchorsAction, RuleModule, RootRuleModule, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, RulesListEffects as ɵn, reducer as ɵl, ScenariosDbEffects as ɵo, reducer$1 as ɵm, GwtViewComponent as ɵh, GwtModeButtonComponent as ɵj, RuleAnchorDirective as ɵb, Reducer as ɵk, RoutingModule as ɵp, RuleComponent as ɵa, RuleReducers as ɵe, RuleConfigurationService as ɵg, RuleService as ɵq, ScenarioService as ɵc, StepLoaderDirective as ɵi };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXJ1bGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvcnVsZS5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvcnVsZS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvcnVsZS1yb3V0aW5nLm1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3J1bGUtYW5jaG9yL3J1bGUtYW5jaG9yLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvZGIvcnVsZS1kYi5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL2RiL3J1bGUtZGIucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9kYi9zY2VuYXJpby1kYi5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL2RiL3NjZW5hcmlvLWRiLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvcnVsZS5yZWR1Y2Vycy50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9zZXJ2aWNlcy9ydWxlLWNvbmZpZ3VyYXRpb24uc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3N0ZXAtbG9hZGVyL3N0ZXAtbG9hZGVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9zZXJ2aWNlcy9zY2VuYXJpby5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL2d3dC12aWV3L2d3dC12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9tb2RlbHMvZ3d0LXN0ZXAtdHlwZXMuZW51bS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5kaXJlY3RpdmUudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvZGIvc2NlbmFyaW8tZGIuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9kYi9ydWxlLWRiLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvbW9kZS1idXR0b24vbW9kZS1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3NlcnZpY2VzL3J1bGUuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9ydWxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHd3RTdGVwIH0gZnJvbSBcIi4vbW9kZWxzL2d3dC1zdGVwLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJ1bGVNb2R1bGVDb25maWcge1xyXG5cdGVuZHBvaW50cz86IHtcclxuXHRcdHVwc2VydD86IHN0cmluZztcclxuXHRcdGdldD86IHN0cmluZztcclxuXHR9O1xyXG5cdHN0ZXBDbGFzc2VzPzogVHlwZTxHd3RTdGVwPltdO1xyXG5cdHN0ZXBzPzogR3d0U3RlcFtdO1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuXHR9O1xyXG59XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IFJ1bGVNb2R1bGVDb25maWcgPSB7XHJcblx0ZW5kcG9pbnRzOiB7XHJcblx0XHR1cHNlcnQ6IFwiL2FwaS9nd3Qvc2NlbmFyaW9cIixcclxuXHRcdGdldDogXCIvYXBpL2d3dC9hbmNob3IvJHttb2RlbC5hbmNob3JJZH0vc2NlbmFyaW9zXCJcclxuXHR9LFxyXG5cdHN0ZXBDbGFzc2VzOiBbXSxcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlLFxyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBcImZyb250ZW5kX3NlcnZlci9kaWQvbm90L3NldFwiXHJcblx0fVxyXG59O1xyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxSdWxlTW9kdWxlQ29uZmlnPihcIlJ1bGVNb2R1bGVDb25maWdcIik7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImFwcC1ydWxlXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFJ1bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVDb21wb25lbnQgfSBmcm9tIFwiLi9ydWxlLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogXCJydWxlXCIsXHJcblx0XHRjb21wb25lbnQ6IFJ1bGVDb21wb25lbnRcclxuXHRcdC8vIGNoaWxkcmVuOiBbIHt9IF1cclxuXHR9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFJ1bGVBbmNob3JzQWN0aW9uVHlwZXMge1xyXG5cdFNIT1dfQU5DSE9SUyA9IFwiW1JVTEVdW0FOQ0hPUlNdIFNIT1dfQU5DSE9SU1wiLFxyXG5cdEhJREVfQU5DSE9SUyA9IFwiW1JVTEVdW0FOQ0hPUlNdIEhJREVfQU5DSE9SU1wiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaG93QW5jaG9yc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVBbmNob3JzQWN0aW9uVHlwZXMuU0hPV19BTkNIT1JTO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSGlkZUFuY2hvcnNBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlQW5jaG9yc0FjdGlvblR5cGVzLkhJREVfQU5DSE9SUztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUnVsZUFuY2hvcnNBY3Rpb24gPSBTaG93QW5jaG9yc0FjdGlvbiB8IEhpZGVBbmNob3JzQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBSdWxlQW5jaG9yc0FjdGlvbiwgUnVsZUFuY2hvcnNBY3Rpb25UeXBlcyB9IGZyb20gXCIuL3J1bGUtYW5jaG9yLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGFjdGl2ZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0YWN0aXZlOiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogUnVsZUFuY2hvcnNBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBSdWxlQW5jaG9yc0FjdGlvblR5cGVzLlNIT1dfQU5DSE9SUzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFjdGl2ZTogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGNhc2UgUnVsZUFuY2hvcnNBY3Rpb25UeXBlcy5ISURFX0FOQ0hPUlM6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhY3RpdmU6IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyNyZWdpb24gIHNlbGVjdG9yc1xyXG5leHBvcnQgY29uc3QgZ2V0QW5jaG9yc0FjdGl2aXR5U3RhdGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5hY3RpdmU7XHJcbi8vI2VuZHJlZ2lvblxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcnVsZS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gUnVsZXNMaXN0QWN0aW9uVHlwZXMge1xyXG5cdFJVTEVTX0xJU1QgPSBcIltSVUxFXVtEQl0gUlVMRVNfTElTVFwiLFxyXG5cdFJVTEVTX0xJU1RfU1RBUlQgPSBcIltSVUxFXVtEQl0gUlVMRVNfTElTVF9TVEFSVFwiLFxyXG5cdFJVTEVTX0xJU1RfU1VDQ0VFRCA9IFwiW1JVTEVdW0RCXSBSVUxFU19MSVNUX1NVQ0NFRURcIixcclxuXHRSVUxFU19MSVNUX0ZBSUxFRCA9IFwiW1JVTEVdW0RCXSBSVUxFU19MSVNUX0ZBSUxFRFwiLFxyXG5cdFJVTEVfVVBTRVJUID0gXCJbUlVMRV1bREJdIFJVTEVfVVBTRVJUXCIsXHJcblx0R0VUX1JVTEUgPSBcIltSVUxFXVtEQl0gR0VUX1JVTEVcIixcclxuXHRSVUxFX0ZFVENIRUQgPSBcIltSVUxFXVtEQl0gUlVMRV9GRVRDSEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJ1bGVzTGlzdEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1Q7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJ1bGVzTGlzdFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgUnVsZXNMaXN0U3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1RfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUnVsZU1vZGVsW10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJ1bGVzTGlzdEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1RfRkFJTEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRSdWxlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRV9VUFNFUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJ1bGVNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UnVsZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLkdFVF9SVUxFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJ1bGVGZWNoZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFX0ZFVENIRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJ1bGVNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUnVsZXNMaXN0QWN0aW9ucyA9XHJcblx0fCBSdWxlc0xpc3RBY3Rpb25cclxuXHR8IFJ1bGVzTGlzdFN0YXJ0QWN0aW9uXHJcblx0fCBSdWxlc0xpc3RTdWNjZWVkQWN0aW9uXHJcblx0fCBSdWxlc0xpc3RGYWlsZWRBY3Rpb25cclxuXHR8IFVwc2VydFJ1bGVBY3Rpb25cclxuXHR8IEdldFJ1bGVBY3Rpb25cclxuXHR8IFJ1bGVGZWNoZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcnVsZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBSdWxlc0xpc3RBY3Rpb25UeXBlcywgUnVsZXNMaXN0QWN0aW9ucyB9IGZyb20gXCIuL3J1bGUtZGIuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG5cdGRhdGE6IFJ1bGVNb2RlbFtdO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHN0YXR1czogXCJwcmlzdGluZVwiLFxyXG5cdGRhdGE6IFtdXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFJ1bGVzTGlzdEFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImRpcnR5XCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJwZW5kaW5nXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdFx0c3RhdHVzOiBcInN1Y2NlZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFX1VQU0VSVDoge1xyXG5cdFx0XHRjb25zdCBkYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0dmFyIGVudGl0eUlkeCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KGZvcm0gPT4gZm9ybS5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKTtcclxuXHRcdFx0aWYgKGVudGl0eUlkeCA+IC0xKSB7XHJcblx0XHRcdFx0ZGF0YVtlbnRpdHlJZHhdID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YVtlbnRpdHlJZHhdLCBhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGF0YS5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGFcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRV9GRVRDSEVEOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRpZiAoZW50aXR5SWR4ID4gLTEpIHtcclxuXHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBnZXRTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zdGF0dXM7XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR3d0U2NlbmFyaW9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMge1xyXG5cdFNDRU5BUklPU19MSVNUID0gXCJbR1dUXVtTQ0VOQVJJT11bREJdW0xJU1RdIFNDRU5BUklPU19MSVNUXCIsXHJcblx0U0NFTkFSSU9TX0xJU1RfU1RBUlQgPSBcIltTQ0VOQVJJT11bREJdIFNDRU5BUklPU19MSVNUX1NUQVJUXCIsXHJcblx0U0NFTkFSSU9TX0xJU1RfU1VDQ0VFRCA9IFwiW1NDRU5BUklPXVtEQl0gU0NFTkFSSU9TX0xJU1RfU1VDQ0VFRFwiLFxyXG5cdFNDRU5BUklPU19MSVNUX0ZBSUxFRCA9IFwiW1NDRU5BUklPXVtEQl0gU0NFTkFSSU9TX0xJU1RfRkFJTEVEXCIsXHJcblx0VVBTRVJUID0gXCJbR1dUXVtTQ0VOQVJJT11bREJdW1VQU0VSVF0gU0NFTkFSSU9fVVBTRVJUXCIsXHJcblx0R0VUX1NDRU5BUklPID0gXCJbU0NFTkFSSU9dW0RCXSBHRVRfU0NFTkFSSU9cIixcclxuXHRTQ0VOQVJJT19GRVRDSEVEID0gXCJbU0NFTkFSSU9dW0RCXSBTQ0VOQVJJT19GRVRDSEVEXCIsXHJcblx0Ly8vIG5ldyB2aXNpb25cclxuXHRVUERBVEVfREIgPSBcIltHV1RdW1NDRU5BUklPXVtEQl0gVVBEQVRFX0RCXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvc0xpc3RBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1Q7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvc0xpc3RTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVF9TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9zTGlzdFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3d0U2NlbmFyaW9Nb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb3NMaXN0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0U2NlbmFyaW9BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuVVBTRVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHd3RTY2VuYXJpb01vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRTY2VuYXJpb0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5HRVRfU0NFTkFSSU87XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9GZWNoZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9fRkVUQ0hFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3d0U2NlbmFyaW9Nb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBkYXRlRGJBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuVVBEQVRFX0RCO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHd3RTY2VuYXJpb01vZGVsW10pIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNjZW5hcmlvc0xpc3RBY3Rpb25zID1cclxuXHR8IFNjZW5hcmlvc0xpc3RBY3Rpb25cclxuXHR8IFNjZW5hcmlvc0xpc3RTdGFydEFjdGlvblxyXG5cdHwgU2NlbmFyaW9zTGlzdFN1Y2NlZWRBY3Rpb25cclxuXHR8IFNjZW5hcmlvc0xpc3RGYWlsZWRBY3Rpb25cclxuXHR8IFVwc2VydFNjZW5hcmlvQWN0aW9uXHJcblx0fCBHZXRTY2VuYXJpb0FjdGlvblxyXG5cdHwgU2NlbmFyaW9GZWNoZWRBY3Rpb25cclxuXHR8IFVwZGF0ZURiQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBHd3RTY2VuYXJpb01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWxcIjtcclxuaW1wb3J0IHsgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLCBTY2VuYXJpb3NMaXN0QWN0aW9ucyB9IGZyb20gXCIuL3NjZW5hcmlvLWRiLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxuXHRkYXRhOiBHd3RTY2VuYXJpb01vZGVsW107XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiBcInByaXN0aW5lXCIsXHJcblx0ZGF0YTogW11cclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogU2NlbmFyaW9zTGlzdEFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1Q6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZGlydHlcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwicGVuZGluZ1wiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVF9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdFx0c3RhdHVzOiBcInN1Y2NlZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5VUFNFUlQ6IHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdHZhciBlbnRpdHlJZHggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleChmb3JtID0+IGZvcm0uX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdGlmIChlbnRpdHlJZHggPiAtMSkge1xyXG5cdFx0XHRcdGRhdGFbZW50aXR5SWR4XSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGFbZW50aXR5SWR4XSwgYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRhdGEucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBkYXRhXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT19GRVRDSEVEOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRpZiAoZW50aXR5SWR4ID4gLTEpIHtcclxuXHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuVVBEQVRFX0RCOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHRjb25zdCBzY2VuYXJpb3MgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHRcdFx0c2NlbmFyaW9zLmZvckVhY2goc2NlbmFyaW8gPT4ge1xyXG5cdFx0XHRcdHZhciBlbnRpdHlJZHggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleChmb3JtID0+IGZvcm0uX2lkID09IHNjZW5hcmlvLl9pZCk7XHJcblx0XHRcdFx0aWYgKGVudGl0eUlkeCA+IC0xKSB7XHJcblx0XHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIHNjZW5hcmlvKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZGF0YS5wdXNoKHNjZW5hcmlvKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGFcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0U3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc3RhdHVzO1xyXG4iLCJpbXBvcnQgKiBhcyBmcm9tUnVsZUFuY2hvciBmcm9tIFwiLi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIGZyb21SdWxlRGJBbmNob3IgZnJvbSBcIi4vZGIvcnVsZS1kYi5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIGZyb21TY2VuYXJpb0RiQW5jaG9yIGZyb20gXCIuL2RiL3NjZW5hcmlvLWRiLnJlZHVjZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUnVsZVN0YXRlIHtcclxuXHRydWxlQW5jaG9yczogZnJvbVJ1bGVBbmNob3IuU3RhdGU7XHJcblx0cnVsZXM6IGZyb21SdWxlRGJBbmNob3IuU3RhdGU7XHJcblx0c2NlbmFyaW9zOiBmcm9tU2NlbmFyaW9EYkFuY2hvci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFJ1bGVSZWR1Y2VycyA9IHtcclxuXHRydWxlQW5jaG9yczogZnJvbVJ1bGVBbmNob3IuUmVkdWNlcixcclxuXHRydWxlczogZnJvbVJ1bGVEYkFuY2hvci5yZWR1Y2VyLFxyXG5cdHNjZW5hcmlvczogZnJvbVNjZW5hcmlvRGJBbmNob3IucmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XHJcblx0XCJydWxlXCI6IFJ1bGVTdGF0ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG4vLyBpbXBvcnQgeyBnZXRSdWxlTW9kdWxlQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcbmltcG9ydCB7IFJ1bGVNb2R1bGVDb25maWcgfSBmcm9tIFwiLi4vcnVsZS5jb25maWdcIjtcclxuaW1wb3J0IHsgTU9EVUxFX0NPTkZJR19UT0tFTiwgTU9EVUxFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSBcIi4uL3J1bGUuY29uZmlnXCI7XHJcbmltcG9ydCB7IFJ1bGVTdGF0ZSB9IGZyb20gXCIuLi9ydWxlLnJlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogUnVsZU1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoTU9EVUxFX0RFRkFVTFRfQ09ORklHKTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZ0ZpbGU6IFJ1bGVNb2R1bGVDb25maWcsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxSdWxlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcclxuXHQpIHtcclxuXHRcdC8vIGluc3RhbnRpYXRlIHN0ZXBzIGFuZCB1c2VkIHRoZW1cclxuXHRcdGNvbmZpZ0ZpbGUuc3RlcHMgPSBjb25maWdGaWxlLnN0ZXBDbGFzc2VzLm1hcChzdGVwID0+IG5ldyBzdGVwKHRoaXMuaW5qZWN0b3IpKTtcclxuXHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cclxuXHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblxyXG5cdFx0Ly8gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0UnVsZU1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKHVzZXJDb25maWcgPT4ge1xyXG5cdFx0Ly8gXHRpZiAoIXVzZXJDb25maWcpIHJldHVybjtcclxuXHRcdC8vIFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCB1c2VyQ29uZmlnLkNvbmZpZyk7XHJcblx0XHQvLyBcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHQvLyB9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgR3d0U3RlcCB9IGZyb20gXCIuL2d3dC1zdGVwLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3d0U2NlbmFyaW9Nb2RlbCB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdGFuY2hvcklkOiBzdHJpbmc7XHJcblx0ZmVhdHVyZUlkOiBzdHJpbmc7XHJcblx0c3RlcHM6IEd3dFN0ZXBbXTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHtcclxuXHRcdFx0X2lkLFxyXG5cdFx0XHRhbmNob3JJZCxcclxuXHRcdFx0c3RlcHMsXHJcblx0XHRcdG5hbWUsXHJcblx0XHRcdGZlYXR1cmVJZFxyXG5cdFx0fTogeyBfaWQ/OiBzdHJpbmc7IGFuY2hvcklkPzogc3RyaW5nOyBzdGVwcz86IEd3dFN0ZXBbXTsgbmFtZT86IHN0cmluZzsgZmVhdHVyZUlkPzogc3RyaW5nIH0gPSB7fVxyXG5cdCkge1xyXG5cdFx0dGhpcy5faWQgPSBfaWQgfHwgXCJcIjtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWUgfHwgXCJcIjtcclxuXHRcdHRoaXMuZmVhdHVyZUlkID0gZmVhdHVyZUlkIHx8IFwiXCI7XHJcblx0XHR0aGlzLl9pZCA9IF9pZCB8fCBcIlwiO1xyXG5cdFx0dGhpcy5hbmNob3JJZCA9IGFuY2hvcklkIHx8IFwiXCI7XHJcblx0XHR0aGlzLnN0ZXBzID0gc3RlcHMgfHwgW107XHJcblx0fVxyXG5cdGdldFJlcXVzZXRCb2R5KCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0X2lkOiB0aGlzLl9pZCxcclxuXHRcdFx0YW5jaG9ySWQ6IHRoaXMuYW5jaG9ySWQsXHJcblx0XHRcdG5hbWU6IHRoaXMubmFtZSxcclxuXHRcdFx0ZmVhdHVyZUlkOiB0aGlzLmZlYXR1cmVJZCxcclxuXHRcdFx0c3RlcHM6IHRoaXMuc3RlcHMubWFwKChzdGVwKSA9PiAoe1xyXG5cdFx0XHRcdGlkOiBzdGVwLmlkLFxyXG5cdFx0XHRcdG9wcG9zaXRlOiBzdGVwLm9wcG9zaXRlLFxyXG5cdFx0XHRcdHBhcmFtczogc3RlcC5wYXJhbXNcclxuXHRcdFx0fSkpXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0SW5wdXQsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Q29tcG9uZW50UmVmLFxyXG5cdFZpZXdDaGlsZCxcclxuXHREaXJlY3RpdmUsXHJcblx0T25DaGFuZ2VzXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEd3dFN0ZXAgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zdGVwLm1vZGVsXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogXCJbcnVsZS1zdGVwLWxvYWRlcl1cIlxyXG5cdC8vIHRlbXBsYXRlVXJsOiBcIi4vc3RlcC1sb2FkZXIuY29tcG9uZW50Lmh0bWxcIixcclxuXHQvLyBzdHlsZVVybHM6IFsgXCIuL3N0ZXAtbG9hZGVyLmNvbXBvbmVudC5jc3NcIiBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGVwTG9hZGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG5cdEBJbnB1dCgpIHN0ZXA6IEd3dFN0ZXA8YW55PjtcclxuXHRAVmlld0NoaWxkKFwiY29udGFpbmVyXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxyXG5cdC8vIFRPRE86IGZpeCBnZW5lcmljIHR5cGVcclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cdGdldCBwYXJhbXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wb25lbnQuaW5zdGFuY2UucGFyYW1zIHx8IHt9O1xyXG5cdH1cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cclxuXHJcblx0bmdPbkNoYW5nZXMoKSB7XHJcblx0XHRpZiAodGhpcy5jb21wb25lbnQpIHtcclxuXHRcdFx0Ly8gdGhpcy5jb21wb25lbnQuaW5zdGFuY2UuY29uZmlnID0gdGhpcy5jb25maWc7XHJcblx0XHRcdC8vIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLmdyb3VwID0gdGhpcy5ncm91cDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0aWYgKCF0aGlzLnN0ZXAuc3RlcENvbXBvbmVudCkge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdGBUcnlpbmcgdG8gdXNlIGFuIHVuc3VwcG9ydGVkIHR5cGUgKCkuXHJcblx0XHQgIFN1cHBvcnRlZCB0eXBlczogYFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0Ly8gVE9ETzogZml4IGdlbmVyaWMgdHlwZVxyXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KHRoaXMuc3RlcC5zdGVwQ29tcG9uZW50KTtcclxuXHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLnBhcmFtcyA9IHRoaXMuc3RlcC5wYXJhbXM7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IGZpbHRlciwgbWFwLCBzdGFydFdpdGgsIHNoYXJlIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBzdHJpbmdUZW1wbGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vcnVsZS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3d0U2NlbmFyaW9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsXCI7XHJcbmltcG9ydCB7IFJ1bGVNb2R1bGVDb25maWcgfSBmcm9tIFwiLi4vcnVsZS5jb25maWdcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcnVsZS5yZWR1Y2Vyc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9TZXJ2aWNlIHtcclxuXHRjb25maWckOiBPYnNlcnZhYmxlPFJ1bGVNb2R1bGVDb25maWc+O1xyXG5cdGNvbmZpZzogUnVsZU1vZHVsZUNvbmZpZztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLmNvbmZpZyQgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJDtcclxuXHRcdHRoaXMuY29uZmlnJC5zdWJzY3JpYmUoY29uZmlnID0+ICh0aGlzLmNvbmZpZyA9IGNvbmZpZykpO1xyXG5cdH1cclxuXHJcblx0dXBzZXJ0KHNjZW5hcmlvOiBHd3RTY2VuYXJpb01vZGVsKTogT2JzZXJ2YWJsZTxHd3RTY2VuYXJpb01vZGVsPiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBHd3RTY2VuYXJpb01vZGVsKHNjZW5hcmlvKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnBvc3QodGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIHRoaXMuY29uZmlnLmVuZHBvaW50cy51cHNlcnQsIG1vZGVsLmdldFJlcXVzZXRCb2R5KCkpXHJcblx0XHRcdC5waXBlKG1hcChyZXNwb25zZSA9PiByZXNwb25zZSBhcyBHd3RTY2VuYXJpb01vZGVsKSwgc2hhcmUoKSk7XHJcblx0fVxyXG5cdGdldEFuY2hvclNjZW5hcmlvcyhhbmNob3JJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxHd3RTY2VuYXJpb01vZGVsW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldDxhbnk+KHRoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBzdHJpbmdUZW1wbGF0ZSh0aGlzLmNvbmZpZy5lbmRwb2ludHMuZ2V0LCB7IGFuY2hvcklkIH0pKVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLlJlc3VsdCBhcyBHd3RTY2VuYXJpb01vZGVsW10pO1xyXG5cdH1cclxuXHRzZWxlY3RTY2VuYXJpb0J5SWQoX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEd3dFNjZW5hcmlvTW9kZWw+IHtcclxuXHRcdGNvbnN0IHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEd3dFNjZW5hcmlvTW9kZWw+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUucnVsZS5zY2VuYXJpb3MuZGF0YSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0ZmlsdGVyKHNjZW5hcmlvcyA9PiBzY2VuYXJpb3MgIT0gbnVsbCksXHJcblx0XHRcdFx0bWFwKHNjZW5hcmlvcyA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gc2NlbmFyaW9zLmZpbmQoc2NlbmFyaW8gPT4gc2NlbmFyaW8uX2lkID09IF9pZCk7XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0ZmlsdGVyKHNjZW5hcmlvID0+IHNjZW5hcmlvICE9IHVuZGVmaW5lZClcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKHNjZW5hcmlvID0+IHtcclxuXHRcdFx0XHRzdWJqZWN0Lm5leHQoc2NlbmFyaW8pO1xyXG5cdFx0XHR9KTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxuXHRzZWxlY3RBbmNob3JTY2VuYXJpb3MoYW5jaG9ySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3d0U2NlbmFyaW9Nb2RlbFtdPiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHd3RTY2VuYXJpb01vZGVsW10+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUucnVsZS5zY2VuYXJpb3MuZGF0YSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0c3RhcnRXaXRoKFtdKSxcclxuXHRcdFx0XHRmaWx0ZXIoc2NlbmFyaW9zID0+IHNjZW5hcmlvcyAhPSBudWxsKSxcclxuXHRcdFx0XHRtYXAoc2NlbmFyaW9zID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBzY2VuYXJpb3MuZmlsdGVyKHNjZW5hcmlvID0+IHNjZW5hcmlvLl9pZCA9PSBhbmNob3JJZCk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKHNjZW5hcmlvcyA9PiB7XHJcblx0XHRcdFx0c3ViamVjdC5uZXh0KHNjZW5hcmlvcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIFR5cGUsIEluamVjdG9yLCBWaWV3Q2hpbGRyZW4sIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IG1hcCwgZmlsdGVyLCB3aXRoTGF0ZXN0RnJvbSwgdGFrZVVudGlsIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IE1BVF9CT1RUT01fU0hFRVRfREFUQSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcnVsZS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3d0U3RlcCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXN0ZXAubW9kZWxcIjtcclxuaW1wb3J0IHsgR3d0U2NlbmFyaW9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3J1bGUucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgVXBzZXJ0U2NlbmFyaW9BY3Rpb24gfSBmcm9tIFwiLi4vZGIvc2NlbmFyaW8tZGIuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBTdGVwTG9hZGVyRGlyZWN0aXZlIH0gZnJvbSBcIi4uL3N0ZXAtbG9hZGVyL3N0ZXAtbG9hZGVyLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2NlbmFyaW8uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLWd3dC12aWV3XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgPGRpdiBmeEZsZXg9XCI0MDBweFwiIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRHYXA9XCIxNXB4XCI+XHJcbiAgICA8IS0tIDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOZwoHDm8KMw5nChMOYwqrDmMKxXCI+XHJcbiAgICAgIDxtYXQtaWNvbiBtYXRTdWZmaXg+c2VhcmNoPC9tYXQtaWNvbj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8bWF0LWNoZWNrYm94IGZ4RmxleCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+w5nCgcOYwrHDmMK2IMOawqnDmcKGw5vCjMOYwq88L21hdC1jaGVja2JveD5cclxuICAgIDxtYXQtY2hlY2tib3ggZnhGbGV4IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj7DmcKHw5nChsOawq/DmMKnw5nChcObwowgw5rCqcOZwoc8L21hdC1jaGVja2JveD5cclxuICAgIDxtYXQtY2hlY2tib3ggZnhGbGV4IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj7DmMKiw5nChsOawq/DmMKnw5nChzwvbWF0LWNoZWNrYm94PlxyXG4gIDwvZGl2PiAtLT5cclxuICAgIDxtYXQtY2FyZCBjbGFzcz1cInN0ZXBzLWl0ZW1cIiAqbmdGb3I9XCJsZXQgc3RlcCBvZiBzdGVwcyQgfCBhc3luY1wiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInN0ZXAtdGV4dFwiPlxyXG4gICAgICAgIHt7c3RlcC5kZXNjcmlwdGlvbn19XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJhZGQtYnV0dG9uXCIgKGNsaWNrKT1cImFkZFN0ZXBUb1NjZW5hcmlvKHN0ZXApXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPmFycm93X2JhY2tfaW9zPC9tYXQtaWNvbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGZ4RmxleD1cIjcwMHB4XCI+XHJcbiAgICA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwic2NlbmFyaW8tdG9vbGJhclwiPlxyXG4gICAgICA8ZGl2IGZ4RmxleD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmaXRcIj5cclxuICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiw5nCiMOZwpDDm8KMw5rCmMOawq/Dm8KMXCIgKHNlbGVjdGlvbkNoYW5nZSk9XCJhY3RpdmVTY2VuYXJpbygkZXZlbnQudmFsdWUpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBzY2VuYXJpbyBvZiBzY2VuYXJpb3MkIHwgYXN5bmNcIiBbdmFsdWVdPVwic2NlbmFyaW9cIj5cclxuICAgICAgICAgICAgICB7eyBzY2VuYXJpby5mZWF0dXJlSWQgfX0gOiB7eyBzY2VuYXJpby5uYW1lIH19XHJcbiAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkTmV3U2NlbmFyaW8oKVwiPlxyXG4gICAgICAgIMOYwqvDmMKow5jCqiDDmMKzw5nChsOYwqfDmMKxw5vCjMOZwoggw5jCrMOYwq/Dm8KMw5jCr1xyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0R2FwPVwiMTVweFwiPlxyXG4gICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCIyNXB4XCIgW2Zvcm1Hcm91cF09XCJzY2VuYXJpb0Zvcm1Hcm91cFwiPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCI1MFwiPlxyXG4gICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCLDmcKIw5vCjMOawpjDmsKvw5vCjFwiIGZvcm1Db250cm9sTmFtZT1cImZlYXR1cmVJZFwiPlxyXG4gICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZmVhdHVyZSBvZiBmZWF0dXJlcyRcIiBbdmFsdWVdPVwiZmVhdHVyZVwiPlxyXG4gICAgICAgICAgICAgIHt7IGZlYXR1cmUgfX1cclxuICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cIjUwXCI+XHJcbiAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoVcIiBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHN0ZXAgb2YgKHNjZW5hcmlvJCB8IGFzeW5jKS5zdGVwc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzY2VuYXJpby1zdGVwcy1pdGVtXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyIHJ1bGUtc3RlcC1sb2FkZXIgW3N0ZXBdPVwic3RlcFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNjZW5hcmlvLXN0ZXBzLWFjdGlvblwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiZGVsZXRlU3RlcEZyb21TY2VuYXJpbyhzdGVwKVwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImluY1NjZW5hcmlvU3RlcFByaW9yaXR5KHN0ZXApXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X3VwPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJkZWNTY2VuYXJpb1N0ZXBQcmlvcml0eShzdGVwKVwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19kb3duPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxidXR0b24gZnhGbGV4PVwibm9ncm93XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInNhdmUoKVwiPlxyXG4gICAgICAgIMOYwqvDmMKow5jCqlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDB2d30uc2NlbmFyaW8tdG9vbGJhcntoZWlnaHQ6NjBweDttYXJnaW4tYm90dG9tOjIwcHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEd3dFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0dW5zdWJzY3JpYmUgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cdHN0ZXBzJDogT2JzZXJ2YWJsZTxHd3RTdGVwW10+O1xyXG5cdHN0ZXBzOiBHd3RTdGVwW107XHJcblx0c2NlbmFyaW8kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHd3RTY2VuYXJpb01vZGVsPihuZXcgR3d0U2NlbmFyaW9Nb2RlbCgpKTtcclxuXHRzY2VuYXJpb3MkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHd3RTY2VuYXJpb01vZGVsW10+KFtdKTtcclxuXHRzY2VuYXJpb0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGZlYXR1cmVzJDogc3RyaW5nW107XHJcblx0QFZpZXdDaGlsZHJlbihTdGVwTG9hZGVyRGlyZWN0aXZlKSBzdGVwTG9hZGVyczogU3RlcExvYWRlckRpcmVjdGl2ZVtdO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHNjZW5hcmlvU2VydmljZTogU2NlbmFyaW9TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcblx0XHRASW5qZWN0KE1BVF9CT1RUT01fU0hFRVRfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnlcclxuXHQpIHtcclxuXHRcdHRoaXMuX2NyZWF0ZV9zY2VuYXJpb19mb3JtX2dyb3VwKCk7XHJcblx0XHR0aGlzLl9pbml0X2ZlYXR1cmVzX2xpc3QoKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdGVwcyQgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJC5waXBlKG1hcChjb25maWcgPT4gY29uZmlnLnN0ZXBzKSwgdGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpKTtcclxuXHRcdHRoaXMuc3RlcHMkLnN1YnNjcmliZShzdGVwcyA9PiAodGhpcy5zdGVwcyA9IHN0ZXBzKSk7XHJcblx0XHR0aGlzLl9sb2FkX3NjZW5hcmlvX2FuZF9tYXBfc2NlbmFyaW9fc3RlcF90b19zdGVwc19jbGFzcygpO1xyXG5cdFx0dGhpcy5zY2VuYXJpbyQuc3Vic2NyaWJlKHMgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUubmV4dCgpO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xyXG5cdH1cclxuXHRzYXZlKCkge1xyXG5cdFx0Y29uc3Qgc2NlbmFyaW8gPSB0aGlzLnNjZW5hcmlvJC5nZXRWYWx1ZSgpO1xyXG5cdFx0dGhpcy5zdGVwTG9hZGVycy5mb3JFYWNoKHN0ZXBMb2FkZXIgPT4ge1xyXG5cdFx0XHRzY2VuYXJpby5zdGVwcy5maW5kKHN0ZXAgPT4gc3RlcC5uYW1lID09PSBzdGVwTG9hZGVyLnN0ZXAubmFtZSkucGFyYW1zID0gc3RlcExvYWRlci5wYXJhbXM7XHJcblx0XHR9KTtcclxuXHRcdHNjZW5hcmlvLmZlYXR1cmVJZCA9IHRoaXMuc2NlbmFyaW9Gb3JtR3JvdXAudmFsdWUuZmVhdHVyZUlkO1xyXG5cdFx0c2NlbmFyaW8ubmFtZSA9IHRoaXMuc2NlbmFyaW9Gb3JtR3JvdXAudmFsdWUubmFtZTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwc2VydFNjZW5hcmlvQWN0aW9uKHNjZW5hcmlvKSk7XHJcblx0fVxyXG5cdGFkZFN0ZXBUb1NjZW5hcmlvKHN0ZXA6IEd3dFN0ZXApIHtcclxuXHRcdGNvbnN0IHNjZW5hcmlvID0gdGhpcy5zY2VuYXJpbyQuZ2V0VmFsdWUoKTtcclxuXHRcdHNjZW5hcmlvLnN0ZXBzLnB1c2goc3RlcCk7XHJcblx0XHR0aGlzLnNjZW5hcmlvJC5uZXh0KHNjZW5hcmlvKTtcclxuXHR9XHJcblx0ZGVsZXRlU3RlcEZyb21TY2VuYXJpbyhzdGVwOiBHd3RTdGVwKSB7XHJcblx0XHRjb25zdCBzY2VuYXJpbyA9IHRoaXMuc2NlbmFyaW8kLmdldFZhbHVlKCk7XHJcblx0XHRzY2VuYXJpby5zdGVwcy5zcGxpY2Uoc2NlbmFyaW8uc3RlcHMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5uYW1lID09PSBzdGVwLm5hbWUpLCAxKTtcclxuXHRcdHRoaXMuc2NlbmFyaW8kLm5leHQoc2NlbmFyaW8pO1xyXG5cdH1cclxuXHRkZWNTY2VuYXJpb1N0ZXBQcmlvcml0eShzdGVwOiBHd3RTdGVwKSB7IH1cclxuXHRpbmNTY2VuYXJpb1N0ZXBQcmlvcml0eShzdGVwOiBHd3RTdGVwKSB7IH1cclxuXHRhZGROZXdTY2VuYXJpbygpIHtcclxuXHRcdGNvbnN0IHNjZW5hcmlvcyA9IHRoaXMuc2NlbmFyaW9zJC5nZXRWYWx1ZSgpO1xyXG5cdFx0c2NlbmFyaW9zLnB1c2goXHJcblx0XHRcdG5ldyBHd3RTY2VuYXJpb01vZGVsKHtcclxuXHRcdFx0XHRhbmNob3JJZDogdGhpcy5kYXRhLmFuY2hvcklkXHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5zY2VuYXJpb3MkLm5leHQoc2NlbmFyaW9zKTtcclxuXHR9XHJcblx0YWN0aXZlU2NlbmFyaW8oc2NlbmFyaW86IEd3dFNjZW5hcmlvTW9kZWwpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0c2NlbmFyaW8uc3RlcHMgPSBzY2VuYXJpby5zdGVwcy5tYXAoc2NlbmFyaW9TdGVwID0+IHtcclxuXHRcdFx0Y29uc3QgX3N0ZXAgPSB0aGlzLnN0ZXBzLmZpbmQoc3RlcCA9PiBzdGVwLmlkID09PSBzY2VuYXJpb1N0ZXAuaWQpO1xyXG5cdFx0XHRjb25zdCBzdGVwID0gT2JqZWN0LmNyZWF0ZShfc3RlcCk7XHJcblx0XHRcdHN0ZXAucGFyYW1zID0gc2NlbmFyaW9TdGVwLnBhcmFtcztcclxuXHRcdFx0cmV0dXJuIHN0ZXA7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc2NlbmFyaW9Gb3JtR3JvdXAucGF0Y2hWYWx1ZShzY2VuYXJpbyk7XHJcblx0XHRzY2VuYXJpby5hbmNob3JJZCA9IHRoaXMuZGF0YS5hbmNob3JJZDtcclxuXHRcdHRoaXMuc2NlbmFyaW8kLm5leHQoc2NlbmFyaW8pO1xyXG5cdH1cclxuXHJcblx0X2xvYWRfc2NlbmFyaW9fYW5kX21hcF9zY2VuYXJpb19zdGVwX3RvX3N0ZXBzX2NsYXNzKCkge1xyXG5cdFx0dGhpcy5zY2VuYXJpb1NlcnZpY2VcclxuXHRcdFx0LmdldEFuY2hvclNjZW5hcmlvcyh0aGlzLmRhdGEuYW5jaG9ySWQpXHJcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSlcclxuXHRcdFx0LnN1YnNjcmliZShzY2VuYXJpb3MgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2NlbmFyaW9zJC5uZXh0KHNjZW5hcmlvcyk7XHJcblx0XHRcdFx0dGhpcy5hY3RpdmVTY2VuYXJpbyhzY2VuYXJpb3NbMF0gfHwgbmV3IEd3dFNjZW5hcmlvTW9kZWwoKSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRfY3JlYXRlX3NjZW5hcmlvX2Zvcm1fZ3JvdXAoKSB7XHJcblx0XHR0aGlzLnNjZW5hcmlvRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdGZlYXR1cmVJZDogbmV3IEZvcm1Db250cm9sKCksXHJcblx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbCgpXHJcblx0XHR9KTtcclxuXHR9XHJcblx0X3Jlc2V0X3NjZW5hcmlvX2Zvcm1fZ3JvdXBfYW5kX3BhdGNoX3dpdGhfYWN0aXZlX3NjZW5hcmlvKCkge1xyXG5cdFx0dGhpcy5zY2VuYXJpb0Zvcm1Hcm91cC5yZXNldCgpO1xyXG5cdFx0dGhpcy5zY2VuYXJpb0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMuc2NlbmFyaW8kLmdldFZhbHVlKCkpO1xyXG5cdH1cclxuXHRfaW5pdF9mZWF0dXJlc19saXN0KCkge1xyXG5cdFx0dGhpcy5mZWF0dXJlcyQgPSBbXCLDmcKFw5jCr8ObwozDmMKxw5vCjMOYwqogw5nChsOZwoXDmMKnw5vCjMOYwrQgw5jCqMOYwrHDmMKnw5jCs8OYwqfDmMKzIMOYwq/DmMKzw5jCqsOYwrHDmMKzw5vCjCDDmcKHw5jCp8Obwowgw5rCqcOYwqfDmMKxw5jCqMOYwrFcIl07XHJcblx0fVxyXG59XHJcbiIsImV4cG9ydCBlbnVtIEd3dFN0ZXBUeXBlcyB7XHJcblx0XCJHaXZlblwiID0gXCJHaXZlblwiLFxyXG5cdFwiV2hlblwiID0gXCJXaGVuXCIsXHJcblx0XCJUaGVuXCIgPSBcIlRoZW5cIixcclxuXHRcIkFuZFwiID0gXCJBbmRcIixcclxuXHRcIkJ1dFwiID0gXCJCdXRcIlxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uSW5pdCwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCB6aXAsIFN1YmplY3QsIGNvbWJpbmVMYXRlc3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuXHJcbmltcG9ydCB7IEd3dFZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi4vZ3d0LXZpZXcvZ3d0LXZpZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3J1bGUucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgR3d0U2NlbmFyaW9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsXCI7XHJcbmltcG9ydCB7IFNjZW5hcmlvU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2VuYXJpby5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEd3dFN0ZXBUeXBlcyB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXN0ZXAtdHlwZXMuZW51bVwiO1xyXG5pbXBvcnQgeyBHd3RTdGVwIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc3RlcC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcnVsZS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiBcIltydWxlQW5jaG9yXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSdWxlQW5jaG9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdHVuc3Vic2NyaWJlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHRASW5wdXQoXCJydWxlQW5jaG9yXCIpIGFuY2hvcklkO1xyXG5cdHN0ZXBzOiBHd3RTdGVwW107XHJcblx0YWN0aXZlJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRhY3RpdmU6IGJvb2xlYW47XHJcblx0YnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHRhbmNob3JTY2VuYXJpb3MkOiBPYnNlcnZhYmxlPEd3dFNjZW5hcmlvTW9kZWxbXT47XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHNjZW5hcmlvU2VydmljZTogU2NlbmFyaW9TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG5cdFx0cHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG5cdFx0cHJpdmF0ZSBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXRcclxuXHQpIHtcclxuXHRcdHRoaXMuYWN0aXZlJCA9IHRoaXMuc3RvcmUuc2VsZWN0KHMgPT4gcy5ydWxlLnJ1bGVBbmNob3JzLmFjdGl2ZSkucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSkpO1xyXG5cdFx0dGhpcy5hY3RpdmUkLnN1YnNjcmliZShhY3RpdmUgPT4gKHRoaXMuYWN0aXZlID0gYWN0aXZlKSk7XHJcblx0XHR0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5ncy1ydWxlLWFuY2hvclwiKTtcclxuXHRcdHRoaXMuc3RlcHMgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLnN0ZXBzO1xyXG5cdH1cclxuXHJcblx0QEhvc3RMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIilcclxuXHRvbk1vdXNlRW50ZXIoKSB7XHJcblx0XHRpZiAoIXRoaXMuYWN0aXZlKSB7IHJldHVybjsgfVxyXG5cdFx0dGhpcy5zaG93QW5jaG9yKCk7XHJcblx0fVxyXG5cclxuXHRASG9zdExpc3RlbmVyKFwibW91c2VsZWF2ZVwiKVxyXG5cdG9uTW91c2VMZWF2ZSgpIHtcclxuXHRcdGlmICghdGhpcy5hY3RpdmUpIHsgcmV0dXJuOyB9XHJcblx0XHR0aGlzLmhpZGVBbmNob3IoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2hvd0FuY2hvcigpIHtcclxuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2hvdy1hbmNob3JcIik7XHJcblx0fVxyXG5cdHByaXZhdGUgaGlkZUFuY2hvcigpIHtcclxuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1hbmNob3JcIik7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIFRPRE86IHJlbW92ZVxyXG5cdFx0Ly8gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2hvd0FuY2hvcnNBY3Rpb24oKSk7XHJcblxyXG5cdFx0dGhpcy5hbmNob3JTY2VuYXJpb3MkID0gdGhpcy5zY2VuYXJpb1NlcnZpY2VcclxuXHRcdFx0LmdldEFuY2hvclNjZW5hcmlvcyh0aGlzLmFuY2hvcklkKSAvLyBUT0RPOiByZXBsYWNlIHNlcnZpY2UgY2FsbCB3aXRoIG5ncnggYWN0aW9uXHJcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSwgZmlsdGVyKHNjZW5hcmlvID0+IHNjZW5hcmlvICE9PSB1bmRlZmluZWQpKTtcclxuXHRcdHRoaXMuYWN0aXZlJC5zdWJzY3JpYmUoYWN0aXZlID0+IHtcclxuXHRcdFx0aWYgKGFjdGl2ZSkgeyB0aGlzLl9hY3RpdmF0ZV9hbmNob3IoKTsgfSBlbHNlIHsgdGhpcy5fZGVhY3RpdmF0ZV9hbmNob3IoKTsgfVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmFuY2hvclNjZW5hcmlvcyQuc3Vic2NyaWJlKHNjZW5hcmlvcyA9PiB7XHJcblx0XHRcdHNjZW5hcmlvcy5mb3JFYWNoKHNjZW5hcmlvID0+IHtcclxuXHRcdFx0XHRzY2VuYXJpby5zdGVwcyA9IHNjZW5hcmlvLnN0ZXBzLm1hcChzY2VuYXJpb1N0ZXAgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3Qgc3RlcCA9IHRoaXMuc3RlcHMuZmluZChzdGVwID0+IHN0ZXAuaWQgPT09IHNjZW5hcmlvU3RlcC5pZCk7XHJcblx0XHRcdFx0XHRjb25zdCBfc3RlcCA9IE9iamVjdC5jcmVhdGUoc3RlcCk7XHJcblx0XHRcdFx0XHRfc3RlcC5wYXJhbXMgPSBzY2VuYXJpb1N0ZXAucGFyYW1zO1xyXG5cdFx0XHRcdFx0cmV0dXJuIF9zdGVwO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR0aGlzLl9kb19zY2VuYXJpbyhzY2VuYXJpbyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5uZXh0KCk7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XHJcblx0fVxyXG5cdF9hY3RpdmF0ZV9hbmNob3IoKSB7XHJcblx0XHR0aGlzLl9jcmVhdGVfYW5jaG9yKCk7XHJcblx0XHR0aGlzLl9zZXRfYWN0aXZlX2NsYXNzX3RvX2hvc3QoKTtcclxuXHR9XHJcblx0X2RlYWN0aXZhdGVfYW5jaG9yKCkge1xyXG5cdFx0dGhpcy5fcmVtb3ZlX2FuY2hvcigpO1xyXG5cdFx0dGhpcy5fcmVtb3ZlX2FjdGl2ZV9jbGFzc190b19ob3N0KCk7XHJcblx0fVxyXG5cdF9zZXRfYWN0aXZlX2NsYXNzX3RvX2hvc3QoKSB7XHJcblx0XHR0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFuY2hvci1hY3RpdmVcIik7XHJcblx0fVxyXG5cdF9yZW1vdmVfYWN0aXZlX2NsYXNzX3RvX2hvc3QoKSB7XHJcblx0XHR0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFuY2hvci1hY3RpdmVcIik7XHJcblx0fVxyXG5cdF9jcmVhdGVfYW5jaG9yKCkge1xyXG5cdFx0dGhpcy5idXR0b24gPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblx0XHR0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmdzLXJ1bGUtYW5jaG9yLWJ1dHRvblwiLCBcIm1hdC1pY29uLWJ1dHRvblwiKTtcclxuXHRcdHRoaXMuYnV0dG9uLnNldEF0dHJpYnV0ZShcIm1hdC1pY29uLWJ1dHRvblwiLCBcIlwiKTtcclxuXHRcdHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oR3d0Vmlld0NvbXBvbmVudCwge1xyXG5cdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdGFuY2hvcklkOiB0aGlzLmFuY2hvcklkXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRwYW5lbENsYXNzOiBcIm1hZ2VudGEtdGhlbWVcIlxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgbWF0aWNvbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudChcIm1hdC1pY29uXCIpO1xyXG5cdFx0bWF0aWNvbi5jbGFzc0xpc3QuYWRkKFwibWF0LWljb25cIiwgXCJtYXRlcmlhbC1pY29uc1wiKTtcclxuXHRcdGNvbnN0IGljb24gPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQoXCJzZXR0aW5nc1wiKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQobWF0aWNvbiwgaWNvbik7XHJcblx0XHR0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uLCBtYXRpY29uKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmJ1dHRvbik7XHJcblx0fVxyXG5cdF9yZW1vdmVfYW5jaG9yKCkge1xyXG5cdFx0aWYgKCF0aGlzLmJ1dHRvbikgeyByZXR1cm47IH1cclxuXHRcdHRoaXMuYnV0dG9uLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5idXR0b24pO1xyXG5cdH1cclxuXHRfZG9fc2NlbmFyaW8oX3NjZW5hcmlvOiBHd3RTY2VuYXJpb01vZGVsKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGNvbnN0IHNjZW5hcmlvID0gX3NjZW5hcmlvO1xyXG5cdFx0Y29uc3QgZ2l2ZW5TdGVwSW50ZXJwcmV0b3JzID0gc2NlbmFyaW8uc3RlcHNcclxuXHRcdFx0LmZpbHRlcihzdGVwID0+IHN0ZXAudHlwZSA9PT0gR3d0U3RlcFR5cGVzLkdpdmVuKVxyXG5cdFx0XHQubWFwKHN0ZXAgPT4gc3RlcC5pbnRlcnBlcmF0b3Ioc3RlcC5wYXJhbXMpKTtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0Y29tYmluZUxhdGVzdChnaXZlblN0ZXBJbnRlcnByZXRvcnMpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSxcclxuXHRcdFx0XHRtYXAoKHZhbHVlczogYm9vbGVhbltdKSA9PiB2YWx1ZXMuZXZlcnkodmFsdWUgPT4gdmFsdWUgPT09IHRydWUpKSxcclxuXHRcdFx0XHRzd2l0Y2hNYXAoZ2l2ZW5SZXN1bHQgPT4ge1xyXG5cdFx0XHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdFx0XHRpZiAoZ2l2ZW5SZXN1bHQpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgdGhlblN0ZXBJbnRlcnByZXRvcnMgPSBzY2VuYXJpby5zdGVwc1xyXG5cdFx0XHRcdFx0XHRcdC5maWx0ZXIoc3RlcCA9PiBzdGVwLnR5cGUgPT09IEd3dFN0ZXBUeXBlcy5UaGVuKVxyXG5cdFx0XHRcdFx0XHRcdC5tYXAoc3RlcCA9PiBzdGVwLmludGVycGVyYXRvcihzdGVwLnBhcmFtcywgdGhpcy5lbCkpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gY29tYmluZUxhdGVzdFxyXG5cdFx0XHRcdFx0XHRcdC5hcHBseShudWxsLCB0aGVuU3RlcEludGVycHJldG9ycylcclxuXHRcdFx0XHRcdFx0XHQucGlwZShtYXAoKHZhbHVlczogYm9vbGVhbltdKSA9PiB2YWx1ZXMuZXZlcnkodmFsdWUgPT4gdmFsdWUgPT09IHRydWUpKSk7XHJcblx0XHRcdFx0XHR9IGVsc2UgeyByZXR1cm4gb2YoZmFsc2UpOyB9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHsgfSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcywgU2NlbmFyaW9zTGlzdFN0YXJ0QWN0aW9uLCBTY2VuYXJpb0ZlY2hlZEFjdGlvbiB9IGZyb20gXCIuL3NjZW5hcmlvLWRiLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjZW5hcmlvLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvc0RiRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHNlcnZpY2U6IFNjZW5hcmlvU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RWRpdFByb2ZpbGVSZXF1ZXN0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUKVxyXG5cdFx0LnBpcGUobWFwKCgpID0+IG5ldyBTY2VuYXJpb3NMaXN0U3RhcnRBY3Rpb24oKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnRTY2VuYXJpbyQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5VUFNFUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKChhY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChzY2VuYXJpbykgPT4gdGhpcy5zZXJ2aWNlLnVwc2VydChzY2VuYXJpbykpLFxyXG5cdFx0XHRtYXAoKHNjZW5hcmlvKSA9PiBuZXcgU2NlbmFyaW9GZWNoZWRBY3Rpb24oc2NlbmFyaW8pKVxyXG5cdFx0KTtcclxuXHJcblx0Ly8gQEVmZmVjdCgpXHJcblx0Ly8gR2V0U2NlbmFyaW8kID0gdGhpcy5hY3Rpb25zJFxyXG5cdC8vIFx0Lm9mVHlwZShTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuR0VUX1NDRU5BUklPKVxyXG5cdC8vIFx0LnBpcGUoXHJcblx0Ly8gXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdC8vIFx0XHRzd2l0Y2hNYXAoaWQgPT4gdGhpcy5zZXJ2aWNlLmdldChpZCkpLFxyXG5cdC8vIFx0XHRtYXAocnVsZSA9PiBuZXcgU2NlbmFyaW9GZWNoZWRBY3Rpb24ocnVsZSkpXHJcblx0Ly8gXHQpO1xyXG5cclxuXHQvLyBARWZmZWN0KClcclxuXHQvLyBnZXRfcnVsZXNfbGlzdCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0Ly8gXHQub2ZUeXBlKFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVF9TVEFSVClcclxuXHQvLyBcdC5waXBlKFxyXG5cdC8vIFx0XHRzd2l0Y2hNYXAoKGRhdGE6IGFueSkgPT4gdGhpcy5zZXJ2aWNlLmdldExpc3QoKSksXHJcblx0Ly8gXHRcdG1hcChyZXMgPT4gbmV3IFNjZW5hcmlvc0xpc3RTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdC8vIFx0XHRjYXRjaEVycm9yKCgpID0+IE9ic2VydmFibGUub2YobmV3IFNjZW5hcmlvc0xpc3RGYWlsZWRBY3Rpb24oKSkpXHJcblx0Ly8gXHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVzTGlzdEFjdGlvblR5cGVzLCBSdWxlc0xpc3RTdGFydEFjdGlvbiB9IGZyb20gXCIuL3J1bGUtZGIuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUnVsZXNMaXN0RWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+KSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRFZGl0UHJvZmlsZVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVCkubWFwKCgpID0+IG5ldyBSdWxlc0xpc3RTdGFydEFjdGlvbigpKTtcclxuXHJcblx0Ly8gQEVmZmVjdCgpXHJcblx0Ly8gR2V0UnVsZSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0Ly8gXHQub2ZUeXBlKFJ1bGVzTGlzdEFjdGlvblR5cGVzLkdFVF9SVUxFKVxyXG5cdC8vIFx0LnBpcGUoXHJcblx0Ly8gXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdC8vIFx0XHRzd2l0Y2hNYXAoaWQgPT4gdGhpcy5zZXJ2aWNlLmdldChpZCkpLFxyXG5cdC8vIFx0XHRtYXAocnVsZSA9PiBuZXcgUnVsZUZlY2hlZEFjdGlvbihydWxlKSlcclxuXHQvLyBcdCk7XHJcblxyXG5cdC8vIEBFZmZlY3QoKVxyXG5cdC8vIGdldF9ydWxlc19saXN0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHQvLyBcdC5vZlR5cGUoUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9TVEFSVClcclxuXHQvLyBcdC5waXBlKFxyXG5cdC8vIFx0XHRzd2l0Y2hNYXAoKGRhdGE6IGFueSkgPT4gdGhpcy5zZXJ2aWNlLmdldExpc3QoKSksXHJcblx0Ly8gXHRcdG1hcChyZXMgPT4gbmV3IFJ1bGVzTGlzdFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0Ly8gXHRcdGNhdGNoRXJyb3IoKCkgPT4gT2JzZXJ2YWJsZS5vZihuZXcgUnVsZXNMaXN0RmFpbGVkQWN0aW9uKCkpKVxyXG5cdC8vIFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRGcm9udGVuZEF1dGhlbnRpY2F0aW9uU3RhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgU2hvd0FuY2hvcnNBY3Rpb24sIEhpZGVBbmNob3JzQWN0aW9uIH0gZnJvbSBcIi4uL3J1bGUtYW5jaG9yL3J1bGUtYW5jaG9yLmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImd3dC1tb2RlLWJ1dHRvblwiLFxyXG5cdHRlbXBsYXRlOiBgICAgIDxidXR0b24gKm5nSWY9XCIhKGhhdmVQZXJtaXNzaW9uJCB8IGFzeW5jKVwiIGNsYXNzPVwiYnRuXCIgbWF0LW1pbmktZmFiIHR5cGU9XCJidXR0b25cIiByb3V0ZXJMaW5rPVwiYXV0aC9mcm9udGVuZC9zaWduaW5cIiBmeEZsZXg9XCJub2dyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgICA8bWF0LWljb24+ZmluZ2VycHJpbnQ8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiAqbmdJZj1cImhhdmVQZXJtaXNzaW9uJCB8IGFzeW5jXCIgY2xhc3M9XCJidG5cIiBtYXQtbWluaS1mYWIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVBbmNob3JzKClcIiBmeEZsZXg9XCJub2dyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgICA8bWF0LWljb24+c2V0dGluZ3M8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+YCxcclxuXHRzdHlsZXM6IFtgLmJ0bntwb3NpdGlvbjpmaXhlZDtib3R0b206MjVweDtsZWZ0OjI1cHg7ei1pbmRleDozfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHd3RNb2RlQnV0dG9uQ29tcG9uZW50IHtcclxuXHRhbmNob3JzTW9kZTogYm9vbGVhbjtcclxuXHRoYXZlUGVybWlzc2lvbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xyXG5cdFx0dGhpcy5hbmNob3JzTW9kZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5oYXZlUGVybWlzc2lvbiQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRGcm9udGVuZEF1dGhlbnRpY2F0aW9uU3RhdGUpO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlQW5jaG9ycygpIHtcclxuXHRcdGlmICh0aGlzLmFuY2hvcnNNb2RlID09PSBmYWxzZSkge1xyXG5cdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTaG93QW5jaG9yc0FjdGlvbigpKTtcclxuXHRcdFx0dGhpcy5hbmNob3JzTW9kZSA9IHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBIaWRlQW5jaG9yc0FjdGlvbigpKTtcclxuXHRcdFx0dGhpcy5hbmNob3JzTW9kZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL29mXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9ydWxlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcnVsZS5yZWR1Y2Vyc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUnVsZVNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7fVxyXG5cclxuXHQvLyBhZGQoKTogT2JzZXJ2YWJsZTxUZXN0TW9kZWw+IHtcclxuXHQvLyBcdC8vIGNvbnN0IG1vZGVsID0gbmV3IEFkZFJ1bGVBcGlNb2RlbC5SZXF1ZXN0KGRhdGEpO1xyXG5cdC8vIFx0Ly8gcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJFxyXG5cdC8vIFx0Ly8gXHQuZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLmFkZFJ1bGUgIT0gXCJcIilcclxuXHQvLyBcdC8vIFx0LnRha2UoMSlcclxuXHQvLyBcdC8vIFx0LnN3aXRjaE1hcChjb25maWcgPT4gdGhpcy5odHRwLnBvc3QoY29uZmlnLmVuZHBvaW50cy5hZGRSdWxlLCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpKSlcclxuXHQvLyBcdC8vIFx0Lm1hcCgocmVzcG9uc2U6IEFkZFJ1bGVBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KTtcclxuXHQvLyB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0VGFic01vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdE1hdFRhYmxlTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgUnVsZU1vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuL3J1bGUuY29uZmlnXCI7XHJcbmltcG9ydCB7IFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ydWxlLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IFJ1bGVSZWR1Y2VycyB9IGZyb20gXCIuL3J1bGUucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgUnVsZUNvbXBvbmVudCB9IGZyb20gXCIuL3J1bGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJ1bGVBbmNob3JEaXJlY3RpdmUgfSBmcm9tIFwiLi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgR3d0Vmlld0NvbXBvbmVudCB9IGZyb20gXCIuL2d3dC12aWV3L2d3dC12aWV3LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTdGVwTG9hZGVyRGlyZWN0aXZlIH0gZnJvbSBcIi4vc3RlcC1sb2FkZXIvc3RlcC1sb2FkZXIuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IFNjZW5hcmlvc0RiRWZmZWN0cyB9IGZyb20gXCIuL2RiL3NjZW5hcmlvLWRiLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgUnVsZXNMaXN0RWZmZWN0cyB9IGZyb20gXCIuL2RiL3J1bGUtZGIuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBHd3RNb2RlQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4vbW9kZS1idXR0b24vbW9kZS1idXR0b24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJ1bGVTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvcnVsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3J1bGUtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNjZW5hcmlvU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3NjZW5hcmlvLnNlcnZpY2VcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdFx0TWF0VGFibGVNb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdFRhYnNNb2R1bGUsXHJcblx0XHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0QnJvd3NlckFuaW1hdGlvbnNNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogWyBSdWxlQ29tcG9uZW50LCBSdWxlQW5jaG9yRGlyZWN0aXZlLCBHd3RWaWV3Q29tcG9uZW50LCBTdGVwTG9hZGVyRGlyZWN0aXZlLCBHd3RNb2RlQnV0dG9uQ29tcG9uZW50IF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbIEd3dFZpZXdDb21wb25lbnQgXSxcclxuXHRleHBvcnRzOiBbIFJ1bGVBbmNob3JEaXJlY3RpdmUsIEd3dE1vZGVCdXR0b25Db21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUnVsZU1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogUnVsZU1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IFJvb3RSdWxlTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFtcclxuXHRcdFx0XHR7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfHwge30gfSxcclxuXHRcdFx0XHRSdWxlU2VydmljZSxcclxuXHRcdFx0XHRSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRcdFx0U2NlbmFyaW9TZXJ2aWNlXHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdFJ1bGVNb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwicnVsZVwiLCBSdWxlUmVkdWNlcnMpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFsgUnVsZXNMaXN0RWZmZWN0cywgU2NlbmFyaW9zRGJFZmZlY3RzIF0pLFxyXG5cdFx0Um91dGluZ01vZHVsZVxyXG5cdF0sXHJcblx0ZXhwb3J0czogWyBSdWxlTW9kdWxlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3RSdWxlTW9kdWxlIHt9XHJcbiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJmcm9tUnVsZUFuY2hvci5SZWR1Y2VyIiwiZnJvbVJ1bGVEYkFuY2hvci5yZWR1Y2VyIiwiZnJvbVNjZW5hcmlvRGJBbmNob3IucmVkdWNlciIsIkJlaGF2aW9yU3ViamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVCQWdCYSxxQkFBcUIsR0FBcUI7SUFDdEQsU0FBUyxFQUFFO1FBQ1YsTUFBTSxFQUFFLG1CQUFtQjtRQUMzQixHQUFHLEVBQUUsNkNBQTZDO0tBQ2xEO0lBQ0QsV0FBVyxFQUFFLEVBQUU7SUFDZixHQUFHLEVBQUU7UUFDSixVQUFVLEVBQUUsS0FBSztRQUNqQixlQUFlLEVBQUUsNkJBQTZCO0tBQzlDO0NBQ0QsQ0FBQztBQUNGLHVCQUFhLG1CQUFtQixHQUFHLElBQUksY0FBYyxDQUFtQixrQkFBa0IsQ0FBQzs7Ozs7O0FDM0IzRjtJQVNDLGlCQUFnQjs7OztJQUVoQixRQUFRLE1BQUs7OztZQVRiLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFOztPQUVKO2FBQ047Ozs7Ozs7OztBQ05ELEFBSUEsdUJBQU0sTUFBTSxHQUFXO0lBQ3RCO1FBQ0MsSUFBSSxFQUFFLE1BQU07UUFDWixTQUFTLEVBQUUsYUFBYTtLQUV4QjtDQUNELENBQUM7QUFFRix1QkFBYSxhQUFhLEdBQXdCLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDOzs7Ozs7OztrQkNWL0QsOEJBQThCO2tCQUM5Qiw4QkFBOEI7Ozs7b0JBSTdCLHNCQUFzQixDQUFDLFlBQVk7O0NBQ25EOzs7b0JBR2dCLHNCQUFzQixDQUFDLFlBQVk7O0NBQ25EOzs7Ozs7QUNiRCxBQU1PLHVCQUFNLFlBQVksR0FBVTtJQUNsQyxNQUFNLEVBQUUsS0FBSztDQUNiLENBQUM7Ozs7OztBQUVGLGlCQUF3QixLQUFLLEdBQUcsWUFBWSxFQUFFLE1BQXlCO0lBQ3RFLFFBQVEsTUFBTSxDQUFDLElBQUk7UUFDbEIsS0FBSyxzQkFBc0IsQ0FBQyxZQUFZLEVBQUU7WUFDekMseUJBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxJQUFJLElBQ1g7U0FDRjtRQUVELEtBQUssc0JBQXNCLENBQUMsWUFBWSxFQUFFO1lBQ3pDLHlCQUNJLEtBQUssSUFDUixNQUFNLEVBQUUsS0FBSyxJQUNaO1NBQ0Y7UUFFRCxTQUFTO1lBQ1IsT0FBTyxLQUFLLENBQUM7U0FDYjtLQUNEO0NBQ0Q7Ozs7Ozs7OztnQkN6QmEsdUJBQXVCO3NCQUNqQiw2QkFBNkI7d0JBQzNCLCtCQUErQjt1QkFDaEMsOEJBQThCO2lCQUNwQyx3QkFBd0I7Y0FDM0IscUJBQXFCO2tCQUNqQix5QkFBeUI7Ozs7b0JBT3hCLG9CQUFvQixDQUFDLGdCQUFnQjs7Q0FDckQ7Ozs7OztBQ2hCRCxBQU1PLHVCQUFNQSxjQUFZLEdBQVU7SUFDbEMsTUFBTSxFQUFFLFVBQVU7SUFDbEIsSUFBSSxFQUFFLEVBQUU7Q0FDUixDQUFDOzs7Ozs7QUFDRixpQkFBd0IsS0FBSyxHQUFHQSxjQUFZLEVBQUUsTUFBd0I7SUFDckUsUUFBUSxNQUFNLENBQUMsSUFBSTtRQUNsQixLQUFLLG9CQUFvQixDQUFDLFVBQVUsRUFBRTtZQUNyQyx5QkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLE9BQU8sSUFDZDtTQUNGO1FBQ0QsS0FBSyxvQkFBb0IsQ0FBQyxnQkFBZ0IsRUFBRTtZQUMzQyx5QkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLFNBQVMsSUFDaEI7U0FDRjtRQUNELEtBQUssb0JBQW9CLENBQUMsa0JBQWtCLEVBQUU7WUFDN0MseUJBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxFQUNwQixNQUFNLEVBQUUsU0FBUyxJQUNoQjtTQUNGO1FBQ0QsS0FBSyxvQkFBb0IsQ0FBQyxpQkFBaUIsRUFBRTtZQUM1Qyx5QkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLFFBQVEsSUFDZjtTQUNGO1FBQ0QsS0FBSyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUU7WUFDdEMsdUJBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDakMscUJBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0UsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JFO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzFCO1lBQ0QseUJBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxJQUFJLElBQ1Q7U0FDRjtRQUNELEtBQUssb0JBQW9CLENBQUMsWUFBWSxFQUFFO1lBQ3ZDLHVCQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2pDLHFCQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzdFLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyRTtpQkFBTTtnQkFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMxQjtZQUNELHlCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsSUFBSSxJQUNUO1NBQ0Y7UUFFRCxTQUFTO1lBQ1IsT0FBTyxLQUFLLENBQUM7U0FDYjtLQUNEO0NBQ0Q7Ozs7Ozs7O29CQ2xFaUIsMENBQTBDOzBCQUNwQyxxQ0FBcUM7NEJBQ25DLHVDQUF1QzsyQkFDeEMsc0NBQXNDO1lBQ3JELDZDQUE2QztrQkFDdkMsNkJBQTZCO3NCQUN6QixpQ0FBaUM7ZUFFeEMsK0JBQStCOzs7O29CQU8zQix3QkFBd0IsQ0FBQyxvQkFBb0I7O0NBQzdEOzs7OztJQVVBLFlBQW1CLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO29CQUQ1Qix3QkFBd0IsQ0FBQyxNQUFNO0tBQ0M7Q0FDaEQ7Ozs7O0lBT0EsWUFBbUIsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7b0JBRDVCLHdCQUF3QixDQUFDLGdCQUFnQjtLQUNUO0NBQ2hEOzs7Ozs7QUNyQ0QsQUFNTyx1QkFBTUEsY0FBWSxHQUFVO0lBQ2xDLE1BQU0sRUFBRSxVQUFVO0lBQ2xCLElBQUksRUFBRSxFQUFFO0NBQ1IsQ0FBQzs7Ozs7O0FBQ0YsbUJBQXdCLEtBQUssR0FBR0EsY0FBWSxFQUFFLE1BQTRCO0lBQ3pFLFFBQVEsTUFBTSxDQUFDLElBQUk7UUFDbEIsS0FBSyx3QkFBd0IsQ0FBQyxjQUFjLEVBQUU7WUFDN0MseUJBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxPQUFPLElBQ2Q7U0FDRjtRQUNELEtBQUssd0JBQXdCLENBQUMsb0JBQW9CLEVBQUU7WUFDbkQseUJBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxTQUFTLElBQ2hCO1NBQ0Y7UUFDRCxLQUFLLHdCQUF3QixDQUFDLHNCQUFzQixFQUFFO1lBQ3JELHlCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFDcEIsTUFBTSxFQUFFLFNBQVMsSUFDaEI7U0FDRjtRQUNELEtBQUssd0JBQXdCLENBQUMscUJBQXFCLEVBQUU7WUFDcEQseUJBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxRQUFRLElBQ2Y7U0FDRjtRQUNELEtBQUssd0JBQXdCLENBQUMsTUFBTSxFQUFFO1lBQ3JDLHVCQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2pDLHFCQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzdFLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyRTtpQkFBTTtnQkFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMxQjtZQUNELHlCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsSUFBSSxJQUNUO1NBQ0Y7UUFDRCxLQUFLLHdCQUF3QixDQUFDLGdCQUFnQixFQUFFO1lBQy9DLHVCQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2pDLHFCQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzdFLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyRTtpQkFBTTtnQkFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMxQjtZQUNELHlCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsSUFBSSxJQUNUO1NBQ0Y7UUFDRCxLQUFLLHdCQUF3QixDQUFDLFNBQVMsRUFBRTtZQUN4Qyx1QkFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNqQyx1QkFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNqQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVE7Z0JBQ3pCLHFCQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZFLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2lCQUMvRDtxQkFBTTtvQkFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNwQjthQUNELENBQUMsQ0FBQztZQUNILHlCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsSUFBSSxJQUNUO1NBQ0Y7UUFFRCxTQUFTO1lBQ1IsT0FBTyxLQUFLLENBQUM7U0FDYjtLQUNEO0NBQ0Q7Ozs7OztBQ3ZGRCx1QkFVYSxZQUFZLEdBQUc7SUFDM0IsV0FBVyxFQUFFQyxPQUFzQjtJQUNuQyxLQUFLLEVBQUVDLE9BQXdCO0lBQy9CLFNBQVMsRUFBRUMsU0FBNEI7Q0FDdkM7Ozs7OztBQ2REOzs7Ozs7SUFrQkMsWUFDOEIsVUFBNEIsRUFDakQsT0FDQTtRQURBLFVBQUssR0FBTCxLQUFLO1FBQ0wsYUFBUSxHQUFSLFFBQVE7dUJBTFAsSUFBSSxlQUFlLENBQUMscUJBQXFCLENBQUM7O1FBUW5ELFVBQVUsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRS9FLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7S0FPaEM7Ozs7SUF0QkQsSUFBSSxNQUFNO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3BCOzs7WUFMRCxVQUFVOzs7OzRDQVNSLE1BQU0sU0FBQyxtQkFBbUI7WUFsQnBCLEtBQUs7WUFEZSxRQUFROzs7Ozs7O0FDRXJDOzs7O0lBTUMsWUFDQyxFQUNDLEdBQUcsRUFDSCxRQUFRLEVBQ1IsS0FBSyxFQUNMLElBQUksRUFDSixTQUFTLEtBQ3FGLEVBQUU7UUFFakcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7S0FDekI7Ozs7SUFDRCxjQUFjO1FBQ2IsT0FBTztZQUNOLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFNO2dCQUNoQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDbkIsQ0FBQyxDQUFDO1NBQ0gsQ0FBQztLQUNGO0NBQ0Q7Ozs7OztBQ3JDRDs7Ozs7SUEyQkMsWUFBb0IsUUFBa0MsRUFBVSxTQUEyQjtRQUF2RSxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWtCO0tBQUs7Ozs7SUFIaEcsSUFBSSxNQUFNO1FBQ1QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO0tBQzVDOzs7O0lBR0QsV0FBVztRQUNWLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUduQjtLQUNEOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM3QixTQUFTO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FDZDtzQkFDa0IsQ0FDbEIsQ0FBQztTQUNGOztRQUVELHVCQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzRCxTQUFTO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ2xEOzs7WUFuQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxvQkFBb0I7YUFHOUI7Ozs7WUFiQSx3QkFBd0I7WUFEeEIsZ0JBQWdCOzs7bUJBZ0JmLEtBQUs7d0JBQ0wsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7Ozs7OztBQ3JCbkQ7Ozs7OztJQWlCQyxZQUNTLE1BQ0EsT0FDQTtRQUZBLFNBQUksR0FBSixJQUFJO1FBQ0osVUFBSyxHQUFMLEtBQUs7UUFDTCxrQkFBYSxHQUFiLGFBQWE7UUFFckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQ3pEOzs7OztJQUVELE1BQU0sQ0FBQyxRQUEwQjtRQUNoQyx1QkFBTSxLQUFLLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQzVGLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxzQkFBSSxRQUE0QixDQUFBLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQy9EOzs7OztJQUNELGtCQUFrQixDQUFDLFFBQWdCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDZCxHQUFHLENBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ25HLEdBQUcsQ0FBQyxRQUFRLHNCQUFJLFFBQVEsQ0FBQyxNQUE0QixDQUFBLENBQUMsQ0FBQztLQUN6RDs7Ozs7SUFDRCxrQkFBa0IsQ0FBQyxHQUFXO1FBQzdCLHVCQUFNLE9BQU8sR0FBRyxJQUFJQyxpQkFBZSxDQUFtQixTQUFTLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsS0FBSzthQUNSLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2FBQzFDLElBQUksQ0FDSixNQUFNLENBQUMsU0FBUyxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsRUFDdEMsR0FBRyxDQUFDLFNBQVM7WUFDWixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7U0FDdkQsQ0FBQyxFQUNGLE1BQU0sQ0FBQyxRQUFRLElBQUksUUFBUSxJQUFJLFNBQVMsQ0FBQyxDQUN6QzthQUNBLFNBQVMsQ0FBQyxRQUFRO1lBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkIsQ0FBQyxDQUFDO1FBQ0osT0FBTyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDOUI7Ozs7O0lBQ0QscUJBQXFCLENBQUMsUUFBZ0I7UUFDckMsdUJBQU0sT0FBTyxHQUFHLElBQUlBLGlCQUFlLENBQXFCLFNBQVMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxLQUFLO2FBQ1IsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7YUFDMUMsSUFBSSxDQUNKLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDYixNQUFNLENBQUMsU0FBUyxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsRUFDdEMsR0FBRyxDQUFDLFNBQVM7WUFDWixPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxHQUFHLElBQUksUUFBUSxDQUFDLENBQUM7U0FDOUQsQ0FBQyxDQUNGO2FBQ0EsU0FBUyxDQUFDLFNBQVM7WUFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN4QixDQUFDLENBQUM7UUFDSixPQUFPLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUM5Qjs7O1lBdkRELFVBQVU7Ozs7WUFYRixVQUFVO1lBRVYsS0FBSztZQUlMLHdCQUF3Qjs7Ozs7OztBQ1JqQzs7Ozs7Ozs7SUFxR0MsWUFDUyxPQUNBLGVBQ0EsaUJBQ0EsVUFDK0IsSUFBUztRQUp4QyxVQUFLLEdBQUwsS0FBSztRQUNMLGtCQUFhLEdBQWIsYUFBYTtRQUNiLG9CQUFlLEdBQWYsZUFBZTtRQUNmLGFBQVEsR0FBUixRQUFRO1FBQ3VCLFNBQUksR0FBSixJQUFJLENBQUs7MkJBYm5DLElBQUksT0FBTyxFQUFRO3lCQUdyQixJQUFJQSxpQkFBZSxDQUFtQixJQUFJLGdCQUFnQixFQUFFLENBQUM7MEJBQzVELElBQUlBLGlCQUFlLENBQXFCLEVBQUUsQ0FBQztRQVd2RCxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztLQUMzQjs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDeEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsbURBQW1ELEVBQUUsQ0FBQztRQUMzRCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pCLFNBQVM7U0FDVCxDQUFDLENBQUM7S0FDSDs7OztJQUNELFdBQVc7UUFDVixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDNUI7Ozs7SUFDRCxJQUFJO1FBQ0gsdUJBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVTtZQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1NBQzNGLENBQUMsQ0FBQztRQUNILFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDNUQsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7S0FDeEQ7Ozs7O0lBQ0QsaUJBQWlCLENBQUMsSUFBYTtRQUM5Qix1QkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUM5Qjs7Ozs7SUFDRCxzQkFBc0IsQ0FBQyxJQUFhO1FBQ25DLHVCQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUM5Qjs7Ozs7SUFDRCx1QkFBdUIsQ0FBQyxJQUFhLEtBQUs7Ozs7O0lBQzFDLHVCQUF1QixDQUFDLElBQWEsS0FBSzs7OztJQUMxQyxjQUFjO1FBQ2IsdUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0MsU0FBUyxDQUFDLElBQUksQ0FDYixJQUFJLGdCQUFnQixDQUFDO1lBQ3BCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7U0FDNUIsQ0FBQyxDQUNGLENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNoQzs7Ozs7SUFDRCxjQUFjLENBQUMsUUFBMEI7UUFDeEMsU0FBUztRQUNULFFBQVEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsWUFBWTtZQUMvQyx1QkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ25FLHVCQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUNsQyxPQUFPLElBQUksQ0FBQztTQUNaLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUM5Qjs7OztJQUVELG1EQUFtRDtRQUNsRCxJQUFJLENBQUMsZUFBZTthQUNsQixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNqQyxTQUFTLENBQUMsU0FBUztZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLGdCQUFnQixFQUFFLENBQUMsQ0FBQztTQUM1RCxDQUFDLENBQUM7S0FDSjs7OztJQUNELDJCQUEyQjtRQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDdEMsU0FBUyxFQUFFLElBQUksV0FBVyxFQUFFO1lBQzVCLElBQUksRUFBRSxJQUFJLFdBQVcsRUFBRTtTQUN2QixDQUFDLENBQUM7S0FDSDs7OztJQUNELHlEQUF5RDtRQUN4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7S0FDN0Q7Ozs7SUFDRCxtQkFBbUI7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7S0FDMUQ7OztZQTNLRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXNFSjtnQkFDTixNQUFNLEVBQUUsQ0FBQyxxRUFBcUUsQ0FBQzthQUMvRTs7OztZQXpGUSxLQUFLO1lBT0wsd0JBQXdCO1lBTXhCLGVBQWU7WUFma0IsUUFBUTs0Q0EwRy9DLE1BQU0sU0FBQyxxQkFBcUI7OzswQkFON0IsWUFBWSxTQUFDLG1CQUFtQjs7Ozs7Ozs7O2FDbkd2QixPQUFPO1lBQ1IsTUFBTTtZQUNOLE1BQU07V0FDUCxLQUFLO1dBQ0wsS0FBSzs7Ozs7OztBQ0xkOzs7Ozs7Ozs7SUF5QkMsWUFDUyxpQkFDQSxlQUNBLE9BQ0EsSUFDQSxVQUNBO1FBTEEsb0JBQWUsR0FBZixlQUFlO1FBQ2Ysa0JBQWEsR0FBYixhQUFhO1FBQ2IsVUFBSyxHQUFMLEtBQUs7UUFDTCxPQUFFLEdBQUYsRUFBRTtRQUNGLGFBQVEsR0FBUixRQUFRO1FBQ1IsZ0JBQVcsR0FBWCxXQUFXOzJCQWJOLElBQUksT0FBTyxFQUFRO1FBZWhDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUM7S0FDekQ7Ozs7SUFHRCxZQUFZO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDN0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQ2xCOzs7O0lBR0QsWUFBWTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUNsQjs7OztJQUVPLFVBQVU7UUFDakIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7Ozs7SUFFNUMsVUFBVTtRQUNqQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzs7OztJQUd2RCxRQUFROzs7UUFJUCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGVBQWU7YUFDMUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxNQUFNLENBQUMsUUFBUSxJQUFJLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07WUFDNUIsSUFBSSxNQUFNLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFBRTtpQkFBTTtnQkFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUFFO1NBQzVFLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsU0FBUztZQUN4QyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVE7Z0JBQ3pCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsWUFBWTtvQkFDL0MsdUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDbEUsdUJBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xDLEtBQUssQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztvQkFDbkMsT0FBTyxLQUFLLENBQUM7aUJBQ2IsQ0FBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDNUIsQ0FBQyxDQUFDO1NBQ0gsQ0FBQyxDQUFDO0tBQ0g7Ozs7SUFDRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzVCOzs7O0lBQ0QsZ0JBQWdCO1FBQ2YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0tBQ2pDOzs7O0lBQ0Qsa0JBQWtCO1FBQ2pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztLQUNwQzs7OztJQUNELHlCQUF5QjtRQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQ3JEOzs7O0lBQ0QsNEJBQTRCO1FBQzNCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDeEQ7Ozs7SUFDRCxjQUFjO1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3ZDLElBQUksRUFBRTtvQkFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7aUJBQ3ZCO2dCQUNELFVBQVUsRUFBRSxlQUFlO2FBQzNCLENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQztRQUNILHVCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4RCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUNwRCx1QkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzlEOzs7O0lBQ0QsY0FBYztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDaEQ7Ozs7O0lBQ0QsWUFBWSxDQUFDLFNBQTJCO1FBQ3ZDLFNBQVM7UUFDVCx1QkFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQzNCLHVCQUFNLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxLQUFLO2FBQzFDLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLENBQUMsS0FBSyxDQUFDO2FBQ2hELEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM5QyxTQUFTO1FBQ1QsYUFBYSxDQUFDLHFCQUFxQixDQUFDO2FBQ2xDLElBQUksQ0FDSixTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUMzQixHQUFHLENBQUMsQ0FBQyxNQUFpQixLQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUNqRSxTQUFTLENBQUMsV0FBVztZQUNwQixTQUFTO1lBQ1QsSUFBSSxXQUFXLEVBQUU7Z0JBQ2hCLHVCQUFNLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxLQUFLO3FCQUN6QyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLElBQUksQ0FBQztxQkFDL0MsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZELE9BQU8sYUFBYTtxQkFDbEIsS0FBSyxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQztxQkFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQWlCLEtBQUssTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMxRTtpQkFBTTtnQkFBRSxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUFFO1NBQzVCLENBQUMsQ0FDRjthQUNBLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN2Qjs7O1lBdElELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsY0FBYzthQUN4Qjs7OztZQVBRLGVBQWU7WUFHZix3QkFBd0I7WUFYeEIsS0FBSztZQURvQixVQUFVO1lBQUUsU0FBUztZQUk5QyxjQUFjOzs7dUJBZXJCLEtBQUssU0FBQyxZQUFZOzJCQW9CbEIsWUFBWSxTQUFDLFlBQVk7MkJBTXpCLFlBQVksU0FBQyxZQUFZOzs7Ozs7Ozs7Ozs7SUNuQzFCLFlBQW9CLFFBQXNCLEVBQVUsT0FBd0I7UUFBeEQsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlCO21DQUd0RCxJQUFJLENBQUMsUUFBUTthQUNqQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsY0FBYyxDQUFDO2FBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLHdCQUF3QixFQUFFLENBQUMsQ0FBQzsrQkFHL0IsSUFBSSxDQUFDLFFBQVE7YUFDN0IsTUFBTSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQzthQUN2QyxJQUFJLENBQ0osR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDL0IsU0FBUyxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ3RELEdBQUcsQ0FBQyxDQUFDLFFBQVEsS0FBSyxJQUFJLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQ3JEO0tBZDhFOzs7WUFGaEYsVUFBVTs7OztZQVBGLE9BQU87WUFLUCxlQUFlOzs7SUFNdEIsTUFBTSxFQUFFOzs7O0lBS1IsTUFBTSxFQUFFOzs7Ozs7Ozs7Ozs7SUNUVCxZQUFvQixRQUFzQjtRQUF0QixhQUFRLEdBQVIsUUFBUSxDQUFjO21DQUdwQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLG9CQUFvQixFQUFFLENBQUM7S0FIbkU7OztZQUY5QyxVQUFVOzs7O1lBTEYsT0FBTzs7O0lBU2QsTUFBTSxFQUFFOzs7Ozs7OztBQ1ZWOzs7O0lBc0JDLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0tBQ3pFOzs7O0lBRUQsYUFBYTtRQUNaLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxLQUFLLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDeEI7YUFBTTtZQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO0tBQ0Q7OztZQTNCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Y0FNRztnQkFDYixNQUFNLEVBQUUsQ0FBQyxzREFBc0QsQ0FBQzthQUNoRTs7OztZQWpCUSxLQUFLOzs7Ozs7O0FDRGQ7Ozs7OztJQVlDLFlBQ1MsTUFDQSxPQUNBO1FBRkEsU0FBSSxHQUFKLElBQUk7UUFDSixVQUFLLEdBQUwsS0FBSztRQUNMLHlCQUFvQixHQUFwQixvQkFBb0I7S0FDekI7OztZQU5KLFVBQVU7Ozs7WUFURixVQUFVO1lBRVYsS0FBSztZQUdMLHdCQUF3Qjs7Ozs7OztBQ05qQzs7Ozs7SUFxRUMsT0FBTyxPQUFPLENBQUMsTUFBeUI7UUFDdkMsT0FBTztZQUNOLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVixFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxJQUFJLEVBQUUsRUFBRTtnQkFDeEQsV0FBVztnQkFDWCx3QkFBd0I7Z0JBQ3hCLGVBQWU7YUFDZjtTQUNELENBQUM7S0FDRjs7O1lBdkNELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsZ0JBQWdCO29CQUNoQixXQUFXO29CQUNYLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixrQkFBa0I7b0JBQ2xCLGlCQUFpQjtvQkFDakIsYUFBYTtvQkFDYixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLGNBQWM7b0JBQ2Qsb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLHVCQUF1QjtpQkFDdkI7Z0JBQ0QsWUFBWSxFQUFFLENBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLHNCQUFzQixDQUFFO2dCQUNuSCxlQUFlLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRTtnQkFDckMsT0FBTyxFQUFFLENBQUUsbUJBQW1CLEVBQUUsc0JBQXNCLENBQUU7YUFDeEQ7O0FBd0JEOzs7WUFUQyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFVBQVU7b0JBQ1YsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDO29CQUM1QyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUUsQ0FBQztvQkFDbEUsYUFBYTtpQkFDYjtnQkFDRCxPQUFPLEVBQUUsQ0FBRSxVQUFVLENBQUU7YUFDdkI7Ozs7Ozs7Ozs7Ozs7OzsifQ==