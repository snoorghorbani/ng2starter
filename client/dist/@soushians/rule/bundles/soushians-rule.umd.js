(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@ngrx/store'), require('rxjs/BehaviorSubject'), require('rxjs/operators'), require('rxjs/Rx'), require('@angular/common/http'), require('@soushians/shared'), require('rxjs'), require('@angular/material'), require('@angular/forms'), require('@ngrx/effects'), require('@soushians/frontend-authentication'), require('@angular/common'), require('@angular/flex-layout'), require('@angular/platform-browser/animations')) :
    typeof define === 'function' && define.amd ? define('@soushians/rule', ['exports', '@angular/core', '@angular/router', '@ngrx/store', 'rxjs/BehaviorSubject', 'rxjs/operators', 'rxjs/Rx', '@angular/common/http', '@soushians/shared', 'rxjs', '@angular/material', '@angular/forms', '@ngrx/effects', '@soushians/frontend-authentication', '@angular/common', '@angular/flex-layout', '@angular/platform-browser/animations'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.rule = {}),global.ng.core,global.ng.router,null,global.rxjs.BehaviorSubject,global.rxjs.operators,global.rxjs.Rx,global.ng.common.http,null,global.rxjs,global.ng.material,global.ng.forms,null,null,global.ng.common,global.ng['flex-layout'],global.ng.platformBrowser.animations));
}(this, (function (exports,core,router,store,BehaviorSubject,operators,Rx,http,shared,rxjs,material,forms,effects,frontendAuthentication,common,flexLayout,animations) { 'use strict';

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
    var /** @type {?} */ MODULE_CONFIG_TOKEN = new core.InjectionToken("RuleModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RuleComponent = (function () {
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
            { type: core.Component, args: [{
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
    var /** @type {?} */ RoutingModule = router.RouterModule.forChild(routes);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {string} */
    var RuleAnchorsActionTypes = {
        SHOW_ANCHORS: "[RULE][ANCHORS] SHOW_ANCHORS",
        HIDE_ANCHORS: "[RULE][ANCHORS] HIDE_ANCHORS",
    };
    var ShowAnchorsAction = (function () {
        function ShowAnchorsAction() {
            this.type = RuleAnchorsActionTypes.SHOW_ANCHORS;
        }
        return ShowAnchorsAction;
    }());
    var HideAnchorsAction = (function () {
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
        if (state === void 0) {
            state = initialState;
        }
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
    var RulesListStartAction = (function () {
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
        if (state === void 0) {
            state = initialState$1;
        }
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
    var ScenariosListStartAction = (function () {
        function ScenariosListStartAction() {
            this.type = ScenariosListActionTypes.SCENARIOS_LIST_START;
        }
        return ScenariosListStartAction;
    }());
    var UpsertScenarioAction = (function () {
        function UpsertScenarioAction(payload) {
            this.payload = payload;
            this.type = ScenariosListActionTypes.UPSERT;
        }
        return UpsertScenarioAction;
    }());
    var ScenarioFechedAction = (function () {
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
        if (state === void 0) {
            state = initialState$2;
        }
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
    var RuleConfigurationService = (function () {
        function RuleConfigurationService(configFile, store$$1, injector) {
            var _this = this;
            this.store = store$$1;
            this.injector = injector;
            this.config$ = new BehaviorSubject.BehaviorSubject(MODULE_DEFAULT_CONFIG);
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
             */ function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        RuleConfigurationService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        RuleConfigurationService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
                { type: store.Store },
                { type: core.Injector }
            ];
        };
        return RuleConfigurationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GwtScenarioModel = (function () {
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
                    steps: this.steps.map(function (step) {
                        return ({
                            id: step.id,
                            opposite: step.opposite,
                            params: step.params
                        });
                    })
                };
            };
        return GwtScenarioModel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var StepLoaderDirective = (function () {
        function StepLoaderDirective(resolver, container) {
            this.resolver = resolver;
            this.container = container;
        }
        Object.defineProperty(StepLoaderDirective.prototype, "params", {
            get: /**
             * @return {?}
             */ function () {
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
            { type: core.Directive, args: [{
                        selector: "[rule-step-loader]"
                    },] },
        ];
        /** @nocollapse */
        StepLoaderDirective.ctorParameters = function () {
            return [
                { type: core.ComponentFactoryResolver },
                { type: core.ViewContainerRef }
            ];
        };
        StepLoaderDirective.propDecorators = {
            step: [{ type: core.Input }],
            component: [{ type: core.ViewChild, args: ["container", { read: core.ViewContainerRef },] }]
        };
        return StepLoaderDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ScenarioService = (function () {
        function ScenarioService(http$$1, store$$1, configService) {
            var _this = this;
            this.http = http$$1;
            this.store = store$$1;
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
                    .pipe(operators.map(function (response) { return (response); }), operators.share());
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
                    .get(this.config.env.frontend_server + shared.stringTemplate(this.config.endpoints.get, { anchorId: anchorId }))
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
                var /** @type {?} */ subject = new Rx.BehaviorSubject(undefined);
                this.store
                    .select(function (state) { return state.rule.scenarios.data; })
                    .pipe(operators.filter(function (scenarios) { return scenarios != null; }), operators.map(function (scenarios) {
                    return scenarios.find(function (scenario) { return scenario._id == _id; });
                }), operators.filter(function (scenario) { return scenario != undefined; }))
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
                var /** @type {?} */ subject = new Rx.BehaviorSubject(undefined);
                this.store
                    .select(function (state) { return state.rule.scenarios.data; })
                    .pipe(operators.startWith([]), operators.filter(function (scenarios) { return scenarios != null; }), operators.map(function (scenarios) {
                    return scenarios.filter(function (scenario) { return scenario._id == anchorId; });
                }))
                    .subscribe(function (scenarios) {
                    subject.next(scenarios);
                });
                return subject.asObservable();
            };
        ScenarioService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        ScenarioService.ctorParameters = function () {
            return [
                { type: http.HttpClient },
                { type: store.Store },
                { type: RuleConfigurationService }
            ];
        };
        return ScenarioService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GwtViewComponent = (function () {
        function GwtViewComponent(store$$1, configService, scenarioService, injector, data) {
            this.store = store$$1;
            this.configService = configService;
            this.scenarioService = scenarioService;
            this.injector = injector;
            this.data = data;
            this.unsubscribe = new rxjs.Subject();
            this.scenario$ = new rxjs.BehaviorSubject(new GwtScenarioModel());
            this.scenarios$ = new rxjs.BehaviorSubject([]);
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
                this.steps$ = this.configService.config$.pipe(operators.map(function (config) { return config.steps; }), operators.takeUntil(this.unsubscribe));
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
                    .pipe(operators.takeUntil(this.unsubscribe))
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
                this.scenarioFormGroup = new forms.FormGroup({
                    featureId: new forms.FormControl(),
                    name: new forms.FormControl()
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
            { type: core.Component, args: [{
                        selector: "app-gwt-view",
                        template: "<div fxLayout=\"row\" fxLayoutGap=\"25px\">\n<div fxFlex=\"400px\" fxLayout=\"column\" fxLayoutGap=\"15px\">\n  <div fxLayout=\"row wrap\">\n    <mat-form-field appearance=\"fill\" fxFlex=\"100\">\n      <input matInput placeholder=\"\u0641\u06CC\u0644\u062A\u0631\">\n      <mat-icon matSuffix>search</mat-icon>\n    </mat-form-field>\n    <mat-checkbox fxFlex class=\"example-margin\">\u0641\u0631\u0636 \u06A9\u0646\u06CC\u062F</mat-checkbox>\n    <mat-checkbox fxFlex class=\"example-margin\">\u0647\u0646\u06AF\u0627\u0645\u06CC \u06A9\u0647</mat-checkbox>\n    <mat-checkbox fxFlex class=\"example-margin\">\u0622\u0646\u06AF\u0627\u0647</mat-checkbox>\n  </div>\n    <mat-card class=\"steps-item\" *ngFor=\"let step of steps$ | async\">\n      <span class=\"step-text\">\n        {{step.description}}\n      </span>\n      <button mat-icon-button class=\"add-button\" (click)=\"addStepToScenario(step)\">\n        <mat-icon>arrow_back_ios</mat-icon>\n      </button>\n    </mat-card>\n</div>\n\n<div fxFlex=\"700px\">\n  <div fxLayout=\"row wrap\" fxLayoutGap=\"25px\" fxLayoutAlign=\"center center\" class=\"scenario-toolbar\">\n    <div fxFlex>\n        <mat-form-field class=\"fit\">\n            <mat-select placeholder=\"\u0648\u0650\u06CC\u0698\u06AF\u06CC\" (selectionChange)=\"activeScenario($event.value)\">\n                  <mat-option *ngFor=\"let scenario of scenarios$ | async\" [value]=\"scenario\">\n                {{ scenario.featureId }} : {{ scenario.name }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n    </div>\n    <button fxFlex=\"nogrow\" mat-raised-button color=\"primary\" (click)=\"addNewScenario()\">\n       \u062B\u0628\u062A \u0633\u0646\u0627\u0631\u06CC\u0648 \u062C\u062F\u06CC\u062F\n    </button>\n  </div>\n  <div fxLayout=\"column\" fxLayoutGap=\"15px\">\n    <div fxFlex=\"100\" fxLayout=\"row\" fxLayoutGap=\"25px\" [formGroup]=\"scenarioFormGroup\">\n      <mat-form-field fxFlex=\"50\">\n        <mat-select placeholder=\"\u0648\u06CC\u0698\u06AF\u06CC\" formControlName=\"featureId\">\n          <mat-option *ngFor=\"let feature of features$\" [value]=\"feature\">\n            {{ feature }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field fxFlex=\"50\">\n        <input matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\n      </mat-form-field>\n    </div>\n    <ng-container *ngFor=\"let step of (scenario$ | async).steps\">\n      <div class=\"scenario-steps-item\">\n        <ng-container rule-step-loader [step]=\"step\"></ng-container>\n        <div class=\"scenario-steps-action\">\n          <button mat-icon-button (click)=\"deleteStepFromScenario(step)\">\n            <mat-icon>delete</mat-icon>\n          </button>\n          <button mat-icon-button (click)=\"incScenarioStepPriority(step)\">\n            <mat-icon>keyboard_arrow_up</mat-icon>\n          </button>\n          <button mat-icon-button (click)=\"decScenarioStepPriority(step)\">\n            <mat-icon>keyboard_arrow_down</mat-icon>\n          </button>\n        </div>\n      </div>\n    </ng-container>\n      <button fxFlex=\"nogrow\" mat-raised-button color=\"primary\" (click)=\"save()\">\n        \u062B\u0628\u062A\n      </button>\n    </div>\n  </div>\n</div>",
                        styles: [":host{width:100vw}.scenario-toolbar{height:60px;margin-bottom:20px}"]
                    },] },
        ];
        /** @nocollapse */
        GwtViewComponent.ctorParameters = function () {
            return [
                { type: store.Store },
                { type: RuleConfigurationService },
                { type: ScenarioService },
                { type: core.Injector },
                { type: undefined, decorators: [{ type: core.Inject, args: [material.MAT_BOTTOM_SHEET_DATA,] }] }
            ];
        };
        GwtViewComponent.propDecorators = {
            stepLoaders: [{ type: core.ViewChildren, args: [StepLoaderDirective,] }]
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
    var RuleAnchorDirective = (function () {
        function RuleAnchorDirective(scenarioService, configService, store$$1, el, renderer, bottomSheet) {
            var _this = this;
            this.scenarioService = scenarioService;
            this.configService = configService;
            this.store = store$$1;
            this.el = el;
            this.renderer = renderer;
            this.bottomSheet = bottomSheet;
            this.unsubscribe = new rxjs.Subject();
            this.active$ = this.store.select(function (s) { return s.rule.ruleAnchors.active; }).pipe(operators.takeUntil(this.unsubscribe));
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
                    .pipe(operators.takeUntil(this.unsubscribe), operators.filter(function (scenario) { return scenario != undefined; }));
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
                rxjs.combineLatest(givenStepInterpretors)
                    .pipe(operators.takeUntil(this.unsubscribe), operators.map(function (values) { return values.every(function (value) { return value === true; }); }), operators.switchMap(function (givenResult) {
                    debugger;
                    if (givenResult) {
                        var /** @type {?} */ thenStepInterpretors = scenario.steps
                            .filter(function (step) { return step.type == GwtStepTypes.Then; })
                            .map(function (step) { return step.interperator(step.params, _this.el); });
                        return rxjs.combineLatest
                            .apply(null, thenStepInterpretors)
                            .pipe(operators.map(function (values) { return values.every(function (value) { return value === true; }); }));
                    }
                    else
                        return rxjs.of(false);
                }))
                    .subscribe(function () { });
            };
        RuleAnchorDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "[ruleAnchor]"
                    },] },
        ];
        /** @nocollapse */
        RuleAnchorDirective.ctorParameters = function () {
            return [
                { type: ScenarioService },
                { type: RuleConfigurationService },
                { type: store.Store },
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: material.MatBottomSheet }
            ];
        };
        RuleAnchorDirective.propDecorators = {
            anchorId: [{ type: core.Input, args: ["ruleAnchor",] }],
            onMouseEnter: [{ type: core.HostListener, args: ["mouseenter",] }],
            onMouseLeave: [{ type: core.HostListener, args: ["mouseleave",] }]
        };
        return RuleAnchorDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ScenariosDbEffects = (function () {
        function ScenariosDbEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.EditProfileRequest$ = this.actions$
                .ofType(ScenariosListActionTypes.SCENARIOS_LIST)
                .pipe(operators.map(function () { return new ScenariosListStartAction(); }));
            this.UpsertScenario$ = this.actions$
                .ofType(ScenariosListActionTypes.UPSERT)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (scenario) { return _this.service.upsert(scenario); }), operators.map(function (scenario) { return new ScenarioFechedAction(scenario); }));
        }
        ScenariosDbEffects.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        ScenariosDbEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: ScenarioService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], ScenariosDbEffects.prototype, "EditProfileRequest$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], ScenariosDbEffects.prototype, "UpsertScenario$", void 0);
        return ScenariosDbEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RulesListEffects = (function () {
        function RulesListEffects(actions$) {
            this.actions$ = actions$;
            this.EditProfileRequest$ = this.actions$.ofType(RulesListActionTypes.RULES_LIST).map(function () { return new RulesListStartAction(); });
        }
        RulesListEffects.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        RulesListEffects.ctorParameters = function () {
            return [
                { type: effects.Actions }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], RulesListEffects.prototype, "EditProfileRequest$", void 0);
        return RulesListEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GwtModeButtonComponent = (function () {
        function GwtModeButtonComponent(store$$1) {
            this.store = store$$1;
            this.anchorsMode = false;
            this.havePermission$ = this.store.select(frontendAuthentication.getFrontendAuthenticationState);
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
            { type: core.Component, args: [{
                        selector: "gwt-mode-button",
                        template: "    <button *ngIf=\"!(havePermission$ | async)\" class=\"btn\" mat-mini-fab type=\"button\" routerLink=\"auth/frontend/signin\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>fingerprint</mat-icon>\n    </button>\n\n    <button *ngIf=\"havePermission$ | async\" class=\"btn\" mat-mini-fab type=\"button\" (click)=\"toggleAnchors()\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>settings</mat-icon>\n    </button>",
                        styles: [".btn{position:fixed;bottom:25px;left:25px;z-index:3}"]
                    },] },
        ];
        /** @nocollapse */
        GwtModeButtonComponent.ctorParameters = function () {
            return [
                { type: store.Store }
            ];
        };
        return GwtModeButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RuleService = (function () {
        function RuleService(http$$1, store$$1, configurationService) {
            this.http = http$$1;
            this.store = store$$1;
            this.configurationService = configurationService;
        }
        RuleService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        RuleService.ctorParameters = function () {
            return [
                { type: http.HttpClient },
                { type: store.Store },
                { type: RuleConfigurationService }
            ];
        };
        return RuleService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RuleModule = (function () {
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
            { type: core.NgModule, args: [{
                        imports: [
                            http.HttpClientModule,
                            forms.FormsModule,
                            router.RouterModule,
                            common.CommonModule,
                            material.MatExpansionModule,
                            material.MatSnackBarModule,
                            material.MatIconModule,
                            material.MatButtonModule,
                            material.MatCardModule,
                            material.MatCheckboxModule,
                            material.MatTableModule,
                            material.MatSelectModule,
                            material.MatInputModule,
                            material.MatFormFieldModule,
                            material.MatTabsModule,
                            material.MatDividerModule,
                            flexLayout.FlexLayoutModule,
                            material.MatRadioModule,
                            material.MatSlideToggleModule,
                            forms.ReactiveFormsModule,
                            animations.BrowserAnimationsModule
                        ],
                        declarations: [RuleComponent, RuleAnchorDirective, GwtViewComponent, StepLoaderDirective, GwtModeButtonComponent],
                        entryComponents: [GwtViewComponent],
                        exports: [RuleAnchorDirective, GwtModeButtonComponent]
                    },] },
        ];
        return RuleModule;
    }());
    var RootRuleModule = (function () {
        function RootRuleModule() {
        }
        RootRuleModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            RuleModule,
                            store.StoreModule.forFeature("rule", RuleReducers),
                            effects.EffectsModule.forFeature([RulesListEffects, ScenariosDbEffects]),
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

    exports.GwtStepTypes = GwtStepTypes;
    exports.ShowAnchorsAction = ShowAnchorsAction;
    exports.HideAnchorsAction = HideAnchorsAction;
    exports.RuleModule = RuleModule;
    exports.RootRuleModule = RootRuleModule;
    exports.MODULE_DEFAULT_CONFIG = MODULE_DEFAULT_CONFIG;
    exports.MODULE_CONFIG_TOKEN = MODULE_CONFIG_TOKEN;
    exports.ɵn = RulesListEffects;
    exports.ɵl = reducer;
    exports.ɵo = ScenariosDbEffects;
    exports.ɵm = reducer$1;
    exports.ɵh = GwtViewComponent;
    exports.ɵj = GwtModeButtonComponent;
    exports.ɵb = RuleAnchorDirective;
    exports.ɵk = Reducer;
    exports.ɵp = RoutingModule;
    exports.ɵa = RuleComponent;
    exports.ɵe = RuleReducers;
    exports.ɵg = RuleConfigurationService;
    exports.ɵq = RuleService;
    exports.ɵc = ScenarioService;
    exports.ɵi = StepLoaderDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXJ1bGUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3J1bGUuY29uZmlnLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3J1bGUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3J1bGUtcm91dGluZy5tb2R1bGUudHMiLG51bGwsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3J1bGUtYW5jaG9yL3J1bGUtYW5jaG9yLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvZGIvcnVsZS1kYi5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL2RiL3J1bGUtZGIucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9kYi9zY2VuYXJpby1kYi5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL2RiL3NjZW5hcmlvLWRiLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvcnVsZS5yZWR1Y2Vycy50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9zZXJ2aWNlcy9ydWxlLWNvbmZpZ3VyYXRpb24uc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3N0ZXAtbG9hZGVyL3N0ZXAtbG9hZGVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9zZXJ2aWNlcy9zY2VuYXJpby5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL2d3dC12aWV3L2d3dC12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9tb2RlbHMvZ3d0LXN0ZXAtdHlwZXMuZW51bS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5kaXJlY3RpdmUudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvZGIvc2NlbmFyaW8tZGIuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9kYi9ydWxlLWRiLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvbW9kZS1idXR0b24vbW9kZS1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3NlcnZpY2VzL3J1bGUuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9ydWxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHd3RTdGVwIH0gZnJvbSBcIi4vbW9kZWxzL2d3dC1zdGVwLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJ1bGVNb2R1bGVDb25maWcge1xyXG5cdGVuZHBvaW50cz86IHtcclxuXHRcdHVwc2VydD86IHN0cmluZztcclxuXHRcdGdldD86IHN0cmluZztcclxuXHR9O1xyXG5cdHN0ZXBDbGFzc2VzPzogVHlwZTxHd3RTdGVwPltdO1xyXG5cdHN0ZXBzPzogR3d0U3RlcFtdO1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuXHR9O1xyXG59XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IFJ1bGVNb2R1bGVDb25maWcgPSB7XHJcblx0ZW5kcG9pbnRzOiB7XHJcblx0XHR1cHNlcnQ6IFwiL2FwaS9nd3Qvc2NlbmFyaW9cIixcclxuXHRcdGdldDogXCIvYXBpL2d3dC9hbmNob3IvJHttb2RlbC5hbmNob3JJZH0vc2NlbmFyaW9zXCJcclxuXHR9LFxyXG5cdHN0ZXBDbGFzc2VzOiBbXSxcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlLFxyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBcImZyb250ZW5kX3NlcnZlci9kaWQvbm90L3NldFwiXHJcblx0fVxyXG59O1xyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxSdWxlTW9kdWxlQ29uZmlnPihcIlJ1bGVNb2R1bGVDb25maWdcIik7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImFwcC1ydWxlXCIsXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XG4gIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgUnVsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHRuZ09uSW5pdCgpIHt9XG59XG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlQ29tcG9uZW50IH0gZnJvbSBcIi4vcnVsZS5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwicnVsZVwiLFxyXG5cdFx0Y29tcG9uZW50OiBSdWxlQ29tcG9uZW50XHJcblx0XHQvLyBjaGlsZHJlbjogWyB7fSBdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvdXRpbmdNb2R1bGU6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKTtcclxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSB5W29wWzBdICYgMiA/IFwicmV0dXJuXCIgOiBvcFswXSA/IFwidGhyb3dcIiA6IFwibmV4dFwiXSkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbMCwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFJ1bGVBbmNob3JzQWN0aW9uVHlwZXMge1xyXG5cdFNIT1dfQU5DSE9SUyA9IFwiW1JVTEVdW0FOQ0hPUlNdIFNIT1dfQU5DSE9SU1wiLFxyXG5cdEhJREVfQU5DSE9SUyA9IFwiW1JVTEVdW0FOQ0hPUlNdIEhJREVfQU5DSE9SU1wiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaG93QW5jaG9yc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVBbmNob3JzQWN0aW9uVHlwZXMuU0hPV19BTkNIT1JTO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSGlkZUFuY2hvcnNBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlQW5jaG9yc0FjdGlvblR5cGVzLkhJREVfQU5DSE9SUztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUnVsZUFuY2hvcnNBY3Rpb24gPSBTaG93QW5jaG9yc0FjdGlvbiB8IEhpZGVBbmNob3JzQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBSdWxlQW5jaG9yc0FjdGlvbiwgUnVsZUFuY2hvcnNBY3Rpb25UeXBlcyB9IGZyb20gXCIuL3J1bGUtYW5jaG9yLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGFjdGl2ZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0YWN0aXZlOiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogUnVsZUFuY2hvcnNBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBSdWxlQW5jaG9yc0FjdGlvblR5cGVzLlNIT1dfQU5DSE9SUzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFjdGl2ZTogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGNhc2UgUnVsZUFuY2hvcnNBY3Rpb25UeXBlcy5ISURFX0FOQ0hPUlM6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhY3RpdmU6IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyNyZWdpb24gIHNlbGVjdG9yc1xyXG5leHBvcnQgY29uc3QgZ2V0QW5jaG9yc0FjdGl2aXR5U3RhdGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5hY3RpdmU7XHJcbi8vI2VuZHJlZ2lvblxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcnVsZS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gUnVsZXNMaXN0QWN0aW9uVHlwZXMge1xyXG5cdFJVTEVTX0xJU1QgPSBcIltSVUxFXVtEQl0gUlVMRVNfTElTVFwiLFxyXG5cdFJVTEVTX0xJU1RfU1RBUlQgPSBcIltSVUxFXVtEQl0gUlVMRVNfTElTVF9TVEFSVFwiLFxyXG5cdFJVTEVTX0xJU1RfU1VDQ0VFRCA9IFwiW1JVTEVdW0RCXSBSVUxFU19MSVNUX1NVQ0NFRURcIixcclxuXHRSVUxFU19MSVNUX0ZBSUxFRCA9IFwiW1JVTEVdW0RCXSBSVUxFU19MSVNUX0ZBSUxFRFwiLFxyXG5cdFJVTEVfVVBTRVJUID0gXCJbUlVMRV1bREJdIFJVTEVfVVBTRVJUXCIsXHJcblx0R0VUX1JVTEUgPSBcIltSVUxFXVtEQl0gR0VUX1JVTEVcIixcclxuXHRSVUxFX0ZFVENIRUQgPSBcIltSVUxFXVtEQl0gUlVMRV9GRVRDSEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJ1bGVzTGlzdEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1Q7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJ1bGVzTGlzdFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgUnVsZXNMaXN0U3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1RfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUnVsZU1vZGVsW10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJ1bGVzTGlzdEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1RfRkFJTEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRSdWxlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRV9VUFNFUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJ1bGVNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UnVsZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLkdFVF9SVUxFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJ1bGVGZWNoZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFX0ZFVENIRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJ1bGVNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUnVsZXNMaXN0QWN0aW9ucyA9XHJcblx0fCBSdWxlc0xpc3RBY3Rpb25cclxuXHR8IFJ1bGVzTGlzdFN0YXJ0QWN0aW9uXHJcblx0fCBSdWxlc0xpc3RTdWNjZWVkQWN0aW9uXHJcblx0fCBSdWxlc0xpc3RGYWlsZWRBY3Rpb25cclxuXHR8IFVwc2VydFJ1bGVBY3Rpb25cclxuXHR8IEdldFJ1bGVBY3Rpb25cclxuXHR8IFJ1bGVGZWNoZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcnVsZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBSdWxlc0xpc3RBY3Rpb25UeXBlcywgUnVsZXNMaXN0QWN0aW9ucyB9IGZyb20gXCIuL3J1bGUtZGIuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG5cdGRhdGE6IFJ1bGVNb2RlbFtdO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHN0YXR1czogXCJwcmlzdGluZVwiLFxyXG5cdGRhdGE6IFtdXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFJ1bGVzTGlzdEFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImRpcnR5XCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJwZW5kaW5nXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdFx0c3RhdHVzOiBcInN1Y2NlZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFX1VQU0VSVDoge1xyXG5cdFx0XHRjb25zdCBkYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0dmFyIGVudGl0eUlkeCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KGZvcm0gPT4gZm9ybS5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKTtcclxuXHRcdFx0aWYgKGVudGl0eUlkeCA+IC0xKSB7XHJcblx0XHRcdFx0ZGF0YVtlbnRpdHlJZHhdID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YVtlbnRpdHlJZHhdLCBhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGF0YS5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGFcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRV9GRVRDSEVEOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRpZiAoZW50aXR5SWR4ID4gLTEpIHtcclxuXHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBnZXRTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zdGF0dXM7XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR3d0U2NlbmFyaW9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMge1xyXG5cdFNDRU5BUklPU19MSVNUID0gXCJbR1dUXVtTQ0VOQVJJT11bREJdW0xJU1RdIFNDRU5BUklPU19MSVNUXCIsXHJcblx0U0NFTkFSSU9TX0xJU1RfU1RBUlQgPSBcIltTQ0VOQVJJT11bREJdIFNDRU5BUklPU19MSVNUX1NUQVJUXCIsXHJcblx0U0NFTkFSSU9TX0xJU1RfU1VDQ0VFRCA9IFwiW1NDRU5BUklPXVtEQl0gU0NFTkFSSU9TX0xJU1RfU1VDQ0VFRFwiLFxyXG5cdFNDRU5BUklPU19MSVNUX0ZBSUxFRCA9IFwiW1NDRU5BUklPXVtEQl0gU0NFTkFSSU9TX0xJU1RfRkFJTEVEXCIsXHJcblx0VVBTRVJUID0gXCJbR1dUXVtTQ0VOQVJJT11bREJdW1VQU0VSVF0gU0NFTkFSSU9fVVBTRVJUXCIsXHJcblx0R0VUX1NDRU5BUklPID0gXCJbU0NFTkFSSU9dW0RCXSBHRVRfU0NFTkFSSU9cIixcclxuXHRTQ0VOQVJJT19GRVRDSEVEID0gXCJbU0NFTkFSSU9dW0RCXSBTQ0VOQVJJT19GRVRDSEVEXCIsXHJcblx0Ly8vIG5ldyB2aXNpb25cclxuXHRVUERBVEVfREIgPSBcIltHV1RdW1NDRU5BUklPXVtEQl0gVVBEQVRFX0RCXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvc0xpc3RBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1Q7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvc0xpc3RTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVF9TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9zTGlzdFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3d0U2NlbmFyaW9Nb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb3NMaXN0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0U2NlbmFyaW9BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuVVBTRVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHd3RTY2VuYXJpb01vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRTY2VuYXJpb0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5HRVRfU0NFTkFSSU87XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9GZWNoZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9fRkVUQ0hFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3d0U2NlbmFyaW9Nb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBkYXRlRGJBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuVVBEQVRFX0RCO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHd3RTY2VuYXJpb01vZGVsW10pIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNjZW5hcmlvc0xpc3RBY3Rpb25zID1cclxuXHR8IFNjZW5hcmlvc0xpc3RBY3Rpb25cclxuXHR8IFNjZW5hcmlvc0xpc3RTdGFydEFjdGlvblxyXG5cdHwgU2NlbmFyaW9zTGlzdFN1Y2NlZWRBY3Rpb25cclxuXHR8IFNjZW5hcmlvc0xpc3RGYWlsZWRBY3Rpb25cclxuXHR8IFVwc2VydFNjZW5hcmlvQWN0aW9uXHJcblx0fCBHZXRTY2VuYXJpb0FjdGlvblxyXG5cdHwgU2NlbmFyaW9GZWNoZWRBY3Rpb25cclxuXHR8IFVwZGF0ZURiQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBHd3RTY2VuYXJpb01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWxcIjtcclxuaW1wb3J0IHsgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLCBTY2VuYXJpb3NMaXN0QWN0aW9ucyB9IGZyb20gXCIuL3NjZW5hcmlvLWRiLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxuXHRkYXRhOiBHd3RTY2VuYXJpb01vZGVsW107XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiBcInByaXN0aW5lXCIsXHJcblx0ZGF0YTogW11cclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogU2NlbmFyaW9zTGlzdEFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1Q6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZGlydHlcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwicGVuZGluZ1wiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVF9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdFx0c3RhdHVzOiBcInN1Y2NlZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5VUFNFUlQ6IHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdHZhciBlbnRpdHlJZHggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleChmb3JtID0+IGZvcm0uX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdGlmIChlbnRpdHlJZHggPiAtMSkge1xyXG5cdFx0XHRcdGRhdGFbZW50aXR5SWR4XSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGFbZW50aXR5SWR4XSwgYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRhdGEucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBkYXRhXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT19GRVRDSEVEOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRpZiAoZW50aXR5SWR4ID4gLTEpIHtcclxuXHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuVVBEQVRFX0RCOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHRjb25zdCBzY2VuYXJpb3MgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHRcdFx0c2NlbmFyaW9zLmZvckVhY2goc2NlbmFyaW8gPT4ge1xyXG5cdFx0XHRcdHZhciBlbnRpdHlJZHggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleChmb3JtID0+IGZvcm0uX2lkID09IHNjZW5hcmlvLl9pZCk7XHJcblx0XHRcdFx0aWYgKGVudGl0eUlkeCA+IC0xKSB7XHJcblx0XHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIHNjZW5hcmlvKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZGF0YS5wdXNoKHNjZW5hcmlvKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGFcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0U3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc3RhdHVzO1xyXG4iLCJpbXBvcnQgKiBhcyBmcm9tUnVsZUFuY2hvciBmcm9tIFwiLi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIGZyb21SdWxlRGJBbmNob3IgZnJvbSBcIi4vZGIvcnVsZS1kYi5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIGZyb21TY2VuYXJpb0RiQW5jaG9yIGZyb20gXCIuL2RiL3NjZW5hcmlvLWRiLnJlZHVjZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUnVsZVN0YXRlIHtcclxuXHRydWxlQW5jaG9yczogZnJvbVJ1bGVBbmNob3IuU3RhdGU7XHJcblx0cnVsZXM6IGZyb21SdWxlRGJBbmNob3IuU3RhdGU7XHJcblx0c2NlbmFyaW9zOiBmcm9tU2NlbmFyaW9EYkFuY2hvci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFJ1bGVSZWR1Y2VycyA9IHtcclxuXHRydWxlQW5jaG9yczogZnJvbVJ1bGVBbmNob3IuUmVkdWNlcixcclxuXHRydWxlczogZnJvbVJ1bGVEYkFuY2hvci5yZWR1Y2VyLFxyXG5cdHNjZW5hcmlvczogZnJvbVNjZW5hcmlvRGJBbmNob3IucmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XHJcblx0XCJydWxlXCI6IFJ1bGVTdGF0ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG4vLyBpbXBvcnQgeyBnZXRSdWxlTW9kdWxlQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcbmltcG9ydCB7IFJ1bGVNb2R1bGVDb25maWcgfSBmcm9tIFwiLi4vcnVsZS5jb25maWdcIjtcclxuaW1wb3J0IHsgTU9EVUxFX0NPTkZJR19UT0tFTiwgTU9EVUxFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSBcIi4uL3J1bGUuY29uZmlnXCI7XHJcbmltcG9ydCB7IFJ1bGVTdGF0ZSB9IGZyb20gXCIuLi9ydWxlLnJlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogUnVsZU1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoTU9EVUxFX0RFRkFVTFRfQ09ORklHKTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZ0ZpbGU6IFJ1bGVNb2R1bGVDb25maWcsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxSdWxlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcclxuXHQpIHtcclxuXHRcdC8vIGluc3RhbnRpYXRlIHN0ZXBzIGFuZCB1c2VkIHRoZW1cclxuXHRcdGNvbmZpZ0ZpbGUuc3RlcHMgPSBjb25maWdGaWxlLnN0ZXBDbGFzc2VzLm1hcChzdGVwID0+IG5ldyBzdGVwKHRoaXMuaW5qZWN0b3IpKTtcclxuXHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cclxuXHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblxyXG5cdFx0Ly8gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0UnVsZU1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKHVzZXJDb25maWcgPT4ge1xyXG5cdFx0Ly8gXHRpZiAoIXVzZXJDb25maWcpIHJldHVybjtcclxuXHRcdC8vIFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCB1c2VyQ29uZmlnLkNvbmZpZyk7XHJcblx0XHQvLyBcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHQvLyB9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgR3d0U3RlcCB9IGZyb20gXCIuL2d3dC1zdGVwLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3d0U2NlbmFyaW9Nb2RlbCB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdGFuY2hvcklkOiBzdHJpbmc7XHJcblx0ZmVhdHVyZUlkOiBzdHJpbmc7XHJcblx0c3RlcHM6IEd3dFN0ZXBbXTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHtcclxuXHRcdFx0X2lkLFxyXG5cdFx0XHRhbmNob3JJZCxcclxuXHRcdFx0c3RlcHMsXHJcblx0XHRcdG5hbWUsXHJcblx0XHRcdGZlYXR1cmVJZFxyXG5cdFx0fTogeyBfaWQ/OiBzdHJpbmc7IGFuY2hvcklkPzogc3RyaW5nOyBzdGVwcz86IEd3dFN0ZXBbXTsgbmFtZT86IHN0cmluZzsgZmVhdHVyZUlkPzogc3RyaW5nIH0gPSB7fVxyXG5cdCkge1xyXG5cdFx0dGhpcy5faWQgPSBfaWQgfHwgXCJcIjtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWUgfHwgXCJcIjtcclxuXHRcdHRoaXMuZmVhdHVyZUlkID0gZmVhdHVyZUlkIHx8IFwiXCI7XHJcblx0XHR0aGlzLl9pZCA9IF9pZCB8fCBcIlwiO1xyXG5cdFx0dGhpcy5hbmNob3JJZCA9IGFuY2hvcklkIHx8IFwiXCI7XHJcblx0XHR0aGlzLnN0ZXBzID0gc3RlcHMgfHwgW107XHJcblx0fVxyXG5cdGdldFJlcXVzZXRCb2R5KCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0X2lkOiB0aGlzLl9pZCxcclxuXHRcdFx0YW5jaG9ySWQ6IHRoaXMuYW5jaG9ySWQsXHJcblx0XHRcdG5hbWU6IHRoaXMubmFtZSxcclxuXHRcdFx0ZmVhdHVyZUlkOiB0aGlzLmZlYXR1cmVJZCxcclxuXHRcdFx0c3RlcHM6IHRoaXMuc3RlcHMubWFwKChzdGVwKSA9PiAoe1xyXG5cdFx0XHRcdGlkOiBzdGVwLmlkLFxyXG5cdFx0XHRcdG9wcG9zaXRlOiBzdGVwLm9wcG9zaXRlLFxyXG5cdFx0XHRcdHBhcmFtczogc3RlcC5wYXJhbXNcclxuXHRcdFx0fSkpXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdE9uSW5pdCxcblx0SW5wdXQsXG5cdFZpZXdDb250YWluZXJSZWYsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0Q29tcG9uZW50UmVmLFxuXHRWaWV3Q2hpbGQsXG5cdERpcmVjdGl2ZSxcblx0T25DaGFuZ2VzXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEd3dFN0ZXAgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zdGVwLm1vZGVsXCI7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogXCJbcnVsZS1zdGVwLWxvYWRlcl1cIlxuXHQvLyB0ZW1wbGF0ZVVybDogXCIuL3N0ZXAtbG9hZGVyLmNvbXBvbmVudC5odG1sXCIsXG5cdC8vIHN0eWxlVXJsczogWyBcIi4vc3RlcC1sb2FkZXIuY29tcG9uZW50LmNzc1wiIF1cbn0pXG5leHBvcnQgY2xhc3MgU3RlcExvYWRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblx0QElucHV0KCkgc3RlcDogR3d0U3RlcDxhbnk+O1xuXHRAVmlld0NoaWxkKFwiY29udGFpbmVyXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuXHQvLyBUT0RPOiBmaXggZ2VuZXJpYyB0eXBlXG5cdGNvbXBvbmVudDogQ29tcG9uZW50UmVmPGFueT47XG5cdGdldCBwYXJhbXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLnBhcmFtcyB8fCB7fTtcblx0fVxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxuXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdGlmICh0aGlzLmNvbXBvbmVudCkge1xuXHRcdFx0Ly8gdGhpcy5jb21wb25lbnQuaW5zdGFuY2UuY29uZmlnID0gdGhpcy5jb25maWc7XG5cdFx0XHQvLyB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5ncm91cCA9IHRoaXMuZ3JvdXA7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0aWYgKCF0aGlzLnN0ZXAuc3RlcENvbXBvbmVudCkge1xuXHRcdFx0ZGVidWdnZXI7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdGBUcnlpbmcgdG8gdXNlIGFuIHVuc3VwcG9ydGVkIHR5cGUgKCkuXG5cdFx0ICBTdXBwb3J0ZWQgdHlwZXM6IGBcblx0XHRcdCk7XG5cdFx0fVxuXHRcdC8vIFRPRE86IGZpeCBnZW5lcmljIHR5cGVcblx0XHRjb25zdCBjb21wb25lbnQgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PGFueT4odGhpcy5zdGVwLnN0ZXBDb21wb25lbnQpO1xuXHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG5cdFx0dGhpcy5jb21wb25lbnQuaW5zdGFuY2UucGFyYW1zID0gdGhpcy5zdGVwLnBhcmFtcztcblx0fVxufVxuIiwiaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN0YXJ0V2l0aCwgc2hhcmUgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IHN0cmluZ1RlbXBsYXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9ydWxlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHd3RTY2VuYXJpb01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWxcIjtcclxuaW1wb3J0IHsgUnVsZU1vZHVsZUNvbmZpZyB9IGZyb20gXCIuLi9ydWxlLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ydWxlLnJlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb1NlcnZpY2Uge1xyXG5cdGNvbmZpZyQ6IE9ic2VydmFibGU8UnVsZU1vZHVsZUNvbmZpZz47XHJcblx0Y29uZmlnOiBSdWxlTW9kdWxlQ29uZmlnO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMuY29uZmlnJCA9IHRoaXMuY29uZmlnU2VydmljZS5jb25maWckO1xyXG5cdFx0dGhpcy5jb25maWckLnN1YnNjcmliZShjb25maWcgPT4gKHRoaXMuY29uZmlnID0gY29uZmlnKSk7XHJcblx0fVxyXG5cclxuXHR1cHNlcnQoc2NlbmFyaW86IEd3dFNjZW5hcmlvTW9kZWwpOiBPYnNlcnZhYmxlPEd3dFNjZW5hcmlvTW9kZWw+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IEd3dFNjZW5hcmlvTW9kZWwoc2NlbmFyaW8pO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQucG9zdCh0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgdGhpcy5jb25maWcuZW5kcG9pbnRzLnVwc2VydCwgbW9kZWwuZ2V0UmVxdXNldEJvZHkoKSlcclxuXHRcdFx0LnBpcGUobWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlIGFzIEd3dFNjZW5hcmlvTW9kZWwpLCBzaGFyZSgpKTtcclxuXHR9XHJcblx0Z2V0QW5jaG9yU2NlbmFyaW9zKGFuY2hvcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEd3dFNjZW5hcmlvTW9kZWxbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0PGFueT4odGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIHN0cmluZ1RlbXBsYXRlKHRoaXMuY29uZmlnLmVuZHBvaW50cy5nZXQsIHsgYW5jaG9ySWQgfSkpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuUmVzdWx0IGFzIEd3dFNjZW5hcmlvTW9kZWxbXSk7XHJcblx0fVxyXG5cdHNlbGVjdFNjZW5hcmlvQnlJZChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3d0U2NlbmFyaW9Nb2RlbD4ge1xyXG5cdFx0Y29uc3Qgc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R3d0U2NlbmFyaW9Nb2RlbD4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5ydWxlLnNjZW5hcmlvcy5kYXRhKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRmaWx0ZXIoc2NlbmFyaW9zID0+IHNjZW5hcmlvcyAhPSBudWxsKSxcclxuXHRcdFx0XHRtYXAoc2NlbmFyaW9zID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBzY2VuYXJpb3MuZmluZChzY2VuYXJpbyA9PiBzY2VuYXJpby5faWQgPT0gX2lkKTtcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRmaWx0ZXIoc2NlbmFyaW8gPT4gc2NlbmFyaW8gIT0gdW5kZWZpbmVkKVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoc2NlbmFyaW8gPT4ge1xyXG5cdFx0XHRcdHN1YmplY3QubmV4dChzY2VuYXJpbyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG5cdHNlbGVjdEFuY2hvclNjZW5hcmlvcyhhbmNob3JJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxHd3RTY2VuYXJpb01vZGVsW10+IHtcclxuXHRcdGNvbnN0IHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEd3dFNjZW5hcmlvTW9kZWxbXT4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5ydWxlLnNjZW5hcmlvcy5kYXRhKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRzdGFydFdpdGgoW10pLFxyXG5cdFx0XHRcdGZpbHRlcihzY2VuYXJpb3MgPT4gc2NlbmFyaW9zICE9IG51bGwpLFxyXG5cdFx0XHRcdG1hcChzY2VuYXJpb3MgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHNjZW5hcmlvcy5maWx0ZXIoc2NlbmFyaW8gPT4gc2NlbmFyaW8uX2lkID09IGFuY2hvcklkKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoc2NlbmFyaW9zID0+IHtcclxuXHRcdFx0XHRzdWJqZWN0Lm5leHQoc2NlbmFyaW9zKTtcclxuXHRcdFx0fSk7XHJcblx0XHRyZXR1cm4gc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgVHlwZSwgSW5qZWN0b3IsIFZpZXdDaGlsZHJlbiwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IG1hcCwgZmlsdGVyLCB3aXRoTGF0ZXN0RnJvbSwgdGFrZVVudGlsIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IE1BVF9CT1RUT01fU0hFRVRfREFUQSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ydWxlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHsgR3d0U3RlcCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXN0ZXAubW9kZWxcIjtcbmltcG9ydCB7IEd3dFNjZW5hcmlvTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zY2VuYXJpby5tb2RlbFwiO1xuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcnVsZS5yZWR1Y2Vyc1wiO1xuaW1wb3J0IHsgVXBzZXJ0U2NlbmFyaW9BY3Rpb24gfSBmcm9tIFwiLi4vZGIvc2NlbmFyaW8tZGIuYWN0aW9uc1wiO1xuaW1wb3J0IHsgU3RlcExvYWRlckRpcmVjdGl2ZSB9IGZyb20gXCIuLi9zdGVwLWxvYWRlci9zdGVwLWxvYWRlci5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IFNjZW5hcmlvU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2VuYXJpby5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJhcHAtZ3d0LXZpZXdcIixcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XG48ZGl2IGZ4RmxleD1cIjQwMHB4XCIgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEdhcD1cIjE1cHhcIj5cbiAgPGRpdiBmeExheW91dD1cInJvdyB3cmFwXCI+XG4gICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCIgZnhGbGV4PVwiMTAwXCI+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKBw5vCjMOZwoTDmMKqw5jCsVwiPlxuICAgICAgPG1hdC1pY29uIG1hdFN1ZmZpeD5zZWFyY2g8L21hdC1pY29uPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1jaGVja2JveCBmeEZsZXggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPsOZwoHDmMKxw5jCtiDDmsKpw5nChsObwozDmMKvPC9tYXQtY2hlY2tib3g+XG4gICAgPG1hdC1jaGVja2JveCBmeEZsZXggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPsOZwofDmcKGw5rCr8OYwqfDmcKFw5vCjCDDmsKpw5nChzwvbWF0LWNoZWNrYm94PlxuICAgIDxtYXQtY2hlY2tib3ggZnhGbGV4IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj7DmMKiw5nChsOawq/DmMKnw5nChzwvbWF0LWNoZWNrYm94PlxuICA8L2Rpdj5cbiAgICA8bWF0LWNhcmQgY2xhc3M9XCJzdGVwcy1pdGVtXCIgKm5nRm9yPVwibGV0IHN0ZXAgb2Ygc3RlcHMkIHwgYXN5bmNcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwic3RlcC10ZXh0XCI+XG4gICAgICAgIHt7c3RlcC5kZXNjcmlwdGlvbn19XG4gICAgICA8L3NwYW4+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImFkZC1idXR0b25cIiAoY2xpY2spPVwiYWRkU3RlcFRvU2NlbmFyaW8oc3RlcClcIj5cbiAgICAgICAgPG1hdC1pY29uPmFycm93X2JhY2tfaW9zPC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbWF0LWNhcmQ+XG48L2Rpdj5cblxuPGRpdiBmeEZsZXg9XCI3MDBweFwiPlxuICA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwic2NlbmFyaW8tdG9vbGJhclwiPlxuICAgIDxkaXYgZnhGbGV4PlxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmaXRcIj5cbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiw5nCiMOZwpDDm8KMw5rCmMOawq/Dm8KMXCIgKHNlbGVjdGlvbkNoYW5nZSk9XCJhY3RpdmVTY2VuYXJpbygkZXZlbnQudmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc2NlbmFyaW8gb2Ygc2NlbmFyaW9zJCB8IGFzeW5jXCIgW3ZhbHVlXT1cInNjZW5hcmlvXCI+XG4gICAgICAgICAgICAgICAge3sgc2NlbmFyaW8uZmVhdHVyZUlkIH19IDoge3sgc2NlbmFyaW8ubmFtZSB9fVxuICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGROZXdTY2VuYXJpbygpXCI+XG4gICAgICAgw5jCq8OYwqjDmMKqIMOYwrPDmcKGw5jCp8OYwrHDm8KMw5nCiCDDmMKsw5jCr8ObwozDmMKvXG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRHYXA9XCIxNXB4XCI+XG4gICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiMjVweFwiIFtmb3JtR3JvdXBdPVwic2NlbmFyaW9Gb3JtR3JvdXBcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCI1MFwiPlxuICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIsOZwojDm8KMw5rCmMOawq/Dm8KMXCIgZm9ybUNvbnRyb2xOYW1lPVwiZmVhdHVyZUlkXCI+XG4gICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGZlYXR1cmUgb2YgZmVhdHVyZXMkXCIgW3ZhbHVlXT1cImZlYXR1cmVcIj5cbiAgICAgICAgICAgIHt7IGZlYXR1cmUgfX1cbiAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiNTBcIj5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChsOYwqfDmcKFXCIgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzdGVwIG9mIChzY2VuYXJpbyQgfCBhc3luYykuc3RlcHNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzY2VuYXJpby1zdGVwcy1pdGVtXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgcnVsZS1zdGVwLWxvYWRlciBbc3RlcF09XCJzdGVwXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzY2VuYXJpby1zdGVwcy1hY3Rpb25cIj5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiZGVsZXRlU3RlcEZyb21TY2VuYXJpbyhzdGVwKVwiPlxuICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImluY1NjZW5hcmlvU3RlcFByaW9yaXR5KHN0ZXApXCI+XG4gICAgICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYXJyb3dfdXA8L21hdC1pY29uPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJkZWNTY2VuYXJpb1N0ZXBQcmlvcml0eShzdGVwKVwiPlxuICAgICAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X2Rvd248L21hdC1pY29uPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPGJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwic2F2ZSgpXCI+XG4gICAgICAgIMOYwqvDmMKow5jCqlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+YCxcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMHZ3fS5zY2VuYXJpby10b29sYmFye2hlaWdodDo2MHB4O21hcmdpbi1ib3R0b206MjBweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBHd3RWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXHR1bnN1YnNjcmliZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cdHN0ZXBzJDogT2JzZXJ2YWJsZTxHd3RTdGVwW10+O1xuXHRzdGVwczogR3d0U3RlcFtdO1xuXHRzY2VuYXJpbyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEd3dFNjZW5hcmlvTW9kZWw+KG5ldyBHd3RTY2VuYXJpb01vZGVsKCkpO1xuXHRzY2VuYXJpb3MkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHd3RTY2VuYXJpb01vZGVsW10+KFtdKTtcblx0c2NlbmFyaW9Gb3JtR3JvdXA6IEZvcm1Hcm91cDtcblx0ZmVhdHVyZXMkOiBzdHJpbmdbXTtcblx0QFZpZXdDaGlsZHJlbihTdGVwTG9hZGVyRGlyZWN0aXZlKSBzdGVwTG9hZGVyczogU3RlcExvYWRlckRpcmVjdGl2ZVtdO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBzY2VuYXJpb1NlcnZpY2U6IFNjZW5hcmlvU2VydmljZSxcblx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRASW5qZWN0KE1BVF9CT1RUT01fU0hFRVRfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnlcblx0KSB7XG5cdFx0dGhpcy5fY3JlYXRlX3NjZW5hcmlvX2Zvcm1fZ3JvdXAoKTtcblx0XHR0aGlzLl9pbml0X2ZlYXR1cmVzX2xpc3QoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc3RlcHMkID0gdGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyQucGlwZShtYXAoY29uZmlnID0+IGNvbmZpZy5zdGVwcyksIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSk7XG5cdFx0dGhpcy5zdGVwcyQuc3Vic2NyaWJlKHN0ZXBzID0+ICh0aGlzLnN0ZXBzID0gc3RlcHMpKTtcblx0XHR0aGlzLl9sb2FkX3NjZW5hcmlvX2FuZF9tYXBfc2NlbmFyaW9fc3RlcF90b19zdGVwc19jbGFzcygpO1xuXHR9XG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5zdWJzY3JpYmUubmV4dCgpO1xuXHRcdHRoaXMudW5zdWJzY3JpYmUuY29tcGxldGUoKTtcblx0fVxuXHRzYXZlKCkge1xuXHRcdGNvbnN0IHNjZW5hcmlvID0gdGhpcy5zY2VuYXJpbyQuZ2V0VmFsdWUoKTtcblx0XHR0aGlzLnN0ZXBMb2FkZXJzLmZvckVhY2goc3RlcExvYWRlciA9PiB7XG5cdFx0XHRzY2VuYXJpby5zdGVwcy5maW5kKHN0ZXAgPT4gc3RlcC5uYW1lID09IHN0ZXBMb2FkZXIuc3RlcC5uYW1lKS5wYXJhbXMgPSBzdGVwTG9hZGVyLnBhcmFtcztcblx0XHR9KTtcblx0XHRzY2VuYXJpby5mZWF0dXJlSWQgPSB0aGlzLnNjZW5hcmlvRm9ybUdyb3VwLnZhbHVlLmZlYXR1cmVJZDtcblx0XHRzY2VuYXJpby5uYW1lID0gdGhpcy5zY2VuYXJpb0Zvcm1Hcm91cC52YWx1ZS5uYW1lO1xuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwc2VydFNjZW5hcmlvQWN0aW9uKHNjZW5hcmlvKSk7XG5cdH1cblx0YWRkU3RlcFRvU2NlbmFyaW8oc3RlcDogR3d0U3RlcCkge1xuXHRcdGNvbnN0IHNjZW5hcmlvID0gdGhpcy5zY2VuYXJpbyQuZ2V0VmFsdWUoKTtcblx0XHRzY2VuYXJpby5zdGVwcy5wdXNoKHN0ZXApO1xuXHRcdHRoaXMuc2NlbmFyaW8kLm5leHQoc2NlbmFyaW8pO1xuXHR9XG5cdGRlbGV0ZVN0ZXBGcm9tU2NlbmFyaW8oc3RlcDogR3d0U3RlcCkge1xuXHRcdGNvbnN0IHNjZW5hcmlvID0gdGhpcy5zY2VuYXJpbyQuZ2V0VmFsdWUoKTtcblx0XHRzY2VuYXJpby5zdGVwcy5zcGxpY2Uoc2NlbmFyaW8uc3RlcHMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5uYW1lID09IHN0ZXAubmFtZSksIDEpO1xuXHRcdHRoaXMuc2NlbmFyaW8kLm5leHQoc2NlbmFyaW8pO1xuXHR9XG5cdGRlY1NjZW5hcmlvU3RlcFByaW9yaXR5KHN0ZXA6IEd3dFN0ZXApIHt9XG5cdGluY1NjZW5hcmlvU3RlcFByaW9yaXR5KHN0ZXA6IEd3dFN0ZXApIHt9XG5cdGFkZE5ld1NjZW5hcmlvKCkge1xuXHRcdGNvbnN0IHNjZW5hcmlvcyA9IHRoaXMuc2NlbmFyaW9zJC5nZXRWYWx1ZSgpO1xuXHRcdHNjZW5hcmlvcy5wdXNoKFxuXHRcdFx0bmV3IEd3dFNjZW5hcmlvTW9kZWwoe1xuXHRcdFx0XHRhbmNob3JJZDogdGhpcy5kYXRhLmFuY2hvcklkXG5cdFx0XHR9KVxuXHRcdCk7XG5cdFx0dGhpcy5zY2VuYXJpb3MkLm5leHQoc2NlbmFyaW9zKTtcblx0fVxuXHRhY3RpdmVTY2VuYXJpbyhzY2VuYXJpbzogR3d0U2NlbmFyaW9Nb2RlbCkge1xuXHRcdHNjZW5hcmlvLnN0ZXBzID0gc2NlbmFyaW8uc3RlcHMubWFwKHNjZW5hcmlvU3RlcCA9PiB7XG5cdFx0XHRjb25zdCBzdGVwID0gdGhpcy5zdGVwcy5maW5kKHN0ZXAgPT4gc3RlcC5pZCA9PSBzY2VuYXJpb1N0ZXAuaWQpO1xuXHRcdFx0c3RlcC5wYXJhbXMgPSBzY2VuYXJpb1N0ZXAucGFyYW1zO1xuXHRcdFx0cmV0dXJuIHN0ZXA7XG5cdFx0fSk7XG5cdFx0dGhpcy5zY2VuYXJpb0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHNjZW5hcmlvKTtcblx0XHRzY2VuYXJpby5hbmNob3JJZCA9IHRoaXMuZGF0YS5hbmNob3JJZDtcblx0XHR0aGlzLnNjZW5hcmlvJC5uZXh0KHNjZW5hcmlvKTtcblx0fVxuXG5cdF9sb2FkX3NjZW5hcmlvX2FuZF9tYXBfc2NlbmFyaW9fc3RlcF90b19zdGVwc19jbGFzcygpIHtcblx0XHR0aGlzLnNjZW5hcmlvU2VydmljZVxuXHRcdFx0LmdldEFuY2hvclNjZW5hcmlvcyh0aGlzLmRhdGEuYW5jaG9ySWQpXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSkpXG5cdFx0XHQuc3Vic2NyaWJlKHNjZW5hcmlvcyA9PiB7XG5cdFx0XHRcdHRoaXMuc2NlbmFyaW9zJC5uZXh0KHNjZW5hcmlvcyk7XG5cdFx0XHRcdHRoaXMuYWN0aXZlU2NlbmFyaW8oc2NlbmFyaW9zWzBdIHx8IG5ldyBHd3RTY2VuYXJpb01vZGVsKCkpO1xuXHRcdFx0fSk7XG5cdH1cblx0X2NyZWF0ZV9zY2VuYXJpb19mb3JtX2dyb3VwKCkge1xuXHRcdHRoaXMuc2NlbmFyaW9Gb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcblx0XHRcdGZlYXR1cmVJZDogbmV3IEZvcm1Db250cm9sKCksXG5cdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woKVxuXHRcdH0pO1xuXHR9XG5cdF9yZXNldF9zY2VuYXJpb19mb3JtX2dyb3VwX2FuZF9wYXRjaF93aXRoX2FjdGl2ZV9zY2VuYXJpbygpIHtcblx0XHR0aGlzLnNjZW5hcmlvRm9ybUdyb3VwLnJlc2V0KCk7XG5cdFx0dGhpcy5zY2VuYXJpb0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMuc2NlbmFyaW8kLmdldFZhbHVlKCkpO1xuXHR9XG5cdF9pbml0X2ZlYXR1cmVzX2xpc3QoKSB7XG5cdFx0dGhpcy5mZWF0dXJlcyQgPSBbIFwiw5nChcOYwq/Dm8KMw5jCscObwozDmMKqIMOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqjDmMKxw5jCp8OYwrPDmMKnw5jCsyDDmMKvw5jCs8OYwqrDmMKxw5jCs8Obwowgw5nCh8OYwqfDm8KMIMOawqnDmMKnw5jCscOYwqjDmMKxXCIgXTtcblx0fVxufVxuIiwiZXhwb3J0IGVudW0gR3d0U3RlcFR5cGVzIHtcclxuXHRcIkdpdmVuXCIgPSBcIkdpdmVuXCIsXHJcblx0XCJXaGVuXCIgPSBcIldoZW5cIixcclxuXHRcIlRoZW5cIiA9IFwiVGhlblwiLFxyXG5cdFwiQW5kXCIgPSBcIkFuZFwiLFxyXG5cdFwiQnV0XCIgPSBcIkJ1dFwiXHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgT25Jbml0LCBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgemlwLCBTdWJqZWN0LCBjb21iaW5lTGF0ZXN0IH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcblxuaW1wb3J0IHsgR3d0Vmlld0NvbXBvbmVudCB9IGZyb20gXCIuLi9nd3Qtdmlldy9nd3Qtdmlldy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3J1bGUucmVkdWNlcnNcIjtcbmltcG9ydCB7IEd3dFNjZW5hcmlvTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zY2VuYXJpby5tb2RlbFwiO1xuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjZW5hcmlvLnNlcnZpY2VcIjtcbmltcG9ydCB7IEd3dFN0ZXBUeXBlcyB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXN0ZXAtdHlwZXMuZW51bVwiO1xuaW1wb3J0IHsgR3d0U3RlcCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXN0ZXAubW9kZWxcIjtcbmltcG9ydCB7IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ydWxlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6IFwiW3J1bGVBbmNob3JdXCJcbn0pXG5leHBvcnQgY2xhc3MgUnVsZUFuY2hvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblx0dW5zdWJzY3JpYmUgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXHRASW5wdXQoXCJydWxlQW5jaG9yXCIpIGFuY2hvcklkO1xuXHRzdGVwczogR3d0U3RlcFtdO1xuXHRhY3RpdmUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXHRhY3RpdmU6IGJvb2xlYW47XG5cdGJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cdGFuY2hvclNjZW5hcmlvcyQ6IE9ic2VydmFibGU8R3d0U2NlbmFyaW9Nb2RlbFtdPjtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBzY2VuYXJpb1NlcnZpY2U6IFNjZW5hcmlvU2VydmljZSxcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSxcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXG5cdFx0cHJpdmF0ZSBlbDogRWxlbWVudFJlZixcblx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0cHJpdmF0ZSBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXRcblx0KSB7XG5cdFx0dGhpcy5hY3RpdmUkID0gdGhpcy5zdG9yZS5zZWxlY3QocyA9PiBzLnJ1bGUucnVsZUFuY2hvcnMuYWN0aXZlKS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSk7XG5cdFx0dGhpcy5hY3RpdmUkLnN1YnNjcmliZShhY3RpdmUgPT4gKHRoaXMuYWN0aXZlID0gYWN0aXZlKSk7XG5cdFx0dGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJuZ3MtcnVsZS1hbmNob3JcIik7XG5cdFx0dGhpcy5zdGVwcyA9IHRoaXMuY29uZmlnU2VydmljZS5jb25maWckLmdldFZhbHVlKCkuc3RlcHM7XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKFwibW91c2VlbnRlclwiKVxuXHRvbk1vdXNlRW50ZXIoKSB7XG5cdFx0aWYgKCF0aGlzLmFjdGl2ZSkgcmV0dXJuO1xuXHRcdHRoaXMuc2hvd0FuY2hvcigpO1xuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIilcblx0b25Nb3VzZUxlYXZlKCkge1xuXHRcdGlmICghdGhpcy5hY3RpdmUpIHJldHVybjtcblx0XHR0aGlzLmhpZGVBbmNob3IoKTtcblx0fVxuXG5cdHByaXZhdGUgc2hvd0FuY2hvcigpIHtcblx0XHR0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNob3ctYW5jaG9yXCIpO1xuXHR9XG5cdHByaXZhdGUgaGlkZUFuY2hvcigpIHtcblx0XHR0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctYW5jaG9yXCIpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Ly8gVE9ETzogcmVtb3ZlXG5cdFx0Ly8gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2hvd0FuY2hvcnNBY3Rpb24oKSk7XG5cblx0XHR0aGlzLmFuY2hvclNjZW5hcmlvcyQgPSB0aGlzLnNjZW5hcmlvU2VydmljZVxuXHRcdFx0LmdldEFuY2hvclNjZW5hcmlvcyh0aGlzLmFuY2hvcklkKSAvL1RPRE86IHJlcGxhY2Ugc2VydmljZSBjYWxsIHdpdGggbmdyeCBhY3Rpb25cblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSwgZmlsdGVyKHNjZW5hcmlvID0+IHNjZW5hcmlvICE9IHVuZGVmaW5lZCkpO1xuXHRcdHRoaXMuYWN0aXZlJC5zdWJzY3JpYmUoYWN0aXZlID0+IHtcblx0XHRcdGlmIChhY3RpdmUpIHRoaXMuX2FjdGl2YXRlX2FuY2hvcigpO1xuXHRcdFx0ZWxzZSB0aGlzLl9kZWFjdGl2YXRlX2FuY2hvcigpO1xuXHRcdH0pO1xuXHRcdHRoaXMuYW5jaG9yU2NlbmFyaW9zJC5zdWJzY3JpYmUoc2NlbmFyaW9zID0+IHtcblx0XHRcdHNjZW5hcmlvcy5mb3JFYWNoKHNjZW5hcmlvID0+IHtcblx0XHRcdFx0c2NlbmFyaW8uc3RlcHMgPSBzY2VuYXJpby5zdGVwcy5tYXAoc2NlbmFyaW9TdGVwID0+IHtcblx0XHRcdFx0XHRjb25zdCBzdGVwID0gdGhpcy5zdGVwcy5maW5kKHN0ZXAgPT4gc3RlcC5pZCA9PSBzY2VuYXJpb1N0ZXAuaWQpO1xuXHRcdFx0XHRcdHN0ZXAucGFyYW1zID0gc2NlbmFyaW9TdGVwLnBhcmFtcztcblx0XHRcdFx0XHRyZXR1cm4gc3RlcDtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy5fZG9fc2NlbmFyaW8oc2NlbmFyaW8pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZS5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xuXHR9XG5cdF9hY3RpdmF0ZV9hbmNob3IoKSB7XG5cdFx0dGhpcy5fY3JlYXRlX2FuY2hvcigpO1xuXHRcdHRoaXMuX3NldF9hY3RpdmVfY2xhc3NfdG9faG9zdCgpO1xuXHR9XG5cdF9kZWFjdGl2YXRlX2FuY2hvcigpIHtcblx0XHR0aGlzLl9yZW1vdmVfYW5jaG9yKCk7XG5cdFx0dGhpcy5fcmVtb3ZlX2FjdGl2ZV9jbGFzc190b19ob3N0KCk7XG5cdH1cblx0X3NldF9hY3RpdmVfY2xhc3NfdG9faG9zdCgpIHtcblx0XHR0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFuY2hvci1hY3RpdmVcIik7XG5cdH1cblx0X3JlbW92ZV9hY3RpdmVfY2xhc3NfdG9faG9zdCgpIHtcblx0XHR0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFuY2hvci1hY3RpdmVcIik7XG5cdH1cblx0X2NyZWF0ZV9hbmNob3IoKSB7XG5cdFx0dGhpcy5idXR0b24gPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0dGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZChcIm5ncy1ydWxlLWFuY2hvci1idXR0b25cIiwgXCJtYXQtaWNvbi1idXR0b25cIik7XG5cdFx0dGhpcy5idXR0b24uc2V0QXR0cmlidXRlKFwibWF0LWljb24tYnV0dG9uXCIsIFwiXCIpO1xuXHRcdHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oR3d0Vmlld0NvbXBvbmVudCwge1xuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0YW5jaG9ySWQ6IHRoaXMuYW5jaG9ySWRcblx0XHRcdFx0fSxcblx0XHRcdFx0cGFuZWxDbGFzczogXCJtYWdlbnRhLXRoZW1lXCJcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdGNvbnN0IG1hdGljb24gPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoXCJtYXQtaWNvblwiKTtcblx0XHRtYXRpY29uLmNsYXNzTGlzdC5hZGQoXCJtYXQtaWNvblwiLCBcIm1hdGVyaWFsLWljb25zXCIpO1xuXHRcdGNvbnN0IGljb24gPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQoXCJzZXR0aW5nc1wiKTtcblx0XHR0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKG1hdGljb24sIGljb24pO1xuXHRcdHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5idXR0b24sIG1hdGljb24pO1xuXHRcdHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmJ1dHRvbik7XG5cdH1cblx0X3JlbW92ZV9hbmNob3IoKSB7XG5cdFx0aWYgKCF0aGlzLmJ1dHRvbikgcmV0dXJuO1xuXHRcdHRoaXMuYnV0dG9uLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5idXR0b24pO1xuXHR9XG5cdF9kb19zY2VuYXJpbyhzY2VuYXJpbzogR3d0U2NlbmFyaW9Nb2RlbCkge1xuXHRcdGNvbnN0IGdpdmVuU3RlcEludGVycHJldG9ycyA9IHNjZW5hcmlvLnN0ZXBzXG5cdFx0XHQuZmlsdGVyKHN0ZXAgPT4gc3RlcC50eXBlID09IEd3dFN0ZXBUeXBlcy5HaXZlbilcblx0XHRcdC5tYXAoc3RlcCA9PiBzdGVwLmludGVycGVyYXRvcihzdGVwLnBhcmFtcykpO1xuXG5cdFx0Y29tYmluZUxhdGVzdChnaXZlblN0ZXBJbnRlcnByZXRvcnMpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpLFxuXHRcdFx0XHRtYXAoKHZhbHVlczogYm9vbGVhbltdKSA9PiB2YWx1ZXMuZXZlcnkodmFsdWUgPT4gdmFsdWUgPT09IHRydWUpKSxcblx0XHRcdFx0c3dpdGNoTWFwKGdpdmVuUmVzdWx0ID0+IHtcblx0XHRcdFx0XHRkZWJ1Z2dlcjtcblx0XHRcdFx0XHRpZiAoZ2l2ZW5SZXN1bHQpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHRoZW5TdGVwSW50ZXJwcmV0b3JzID0gc2NlbmFyaW8uc3RlcHNcblx0XHRcdFx0XHRcdFx0LmZpbHRlcihzdGVwID0+IHN0ZXAudHlwZSA9PSBHd3RTdGVwVHlwZXMuVGhlbilcblx0XHRcdFx0XHRcdFx0Lm1hcChzdGVwID0+IHN0ZXAuaW50ZXJwZXJhdG9yKHN0ZXAucGFyYW1zLCB0aGlzLmVsKSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gY29tYmluZUxhdGVzdFxuXHRcdFx0XHRcdFx0XHQuYXBwbHkobnVsbCwgdGhlblN0ZXBJbnRlcnByZXRvcnMpXG5cdFx0XHRcdFx0XHRcdC5waXBlKG1hcCgodmFsdWVzOiBib29sZWFuW10pID0+IHZhbHVlcy5ldmVyeSh2YWx1ZSA9PiB2YWx1ZSA9PT0gdHJ1ZSkpKTtcblx0XHRcdFx0XHR9IGVsc2UgcmV0dXJuIG9mKGZhbHNlKTtcblx0XHRcdFx0fSlcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge30pO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMsIFNjZW5hcmlvc0xpc3RTdGFydEFjdGlvbiwgU2NlbmFyaW9GZWNoZWRBY3Rpb24gfSBmcm9tIFwiLi9zY2VuYXJpby1kYi5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFNjZW5hcmlvU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2VuYXJpby5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb3NEYkVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSBzZXJ2aWNlOiBTY2VuYXJpb1NlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEVkaXRQcm9maWxlUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVClcclxuXHRcdC5waXBlKG1hcCgoKSA9PiBuZXcgU2NlbmFyaW9zTGlzdFN0YXJ0QWN0aW9uKCkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0VXBzZXJ0U2NlbmFyaW8kID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuVVBTRVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcCgoYWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgoc2NlbmFyaW8pID0+IHRoaXMuc2VydmljZS51cHNlcnQoc2NlbmFyaW8pKSxcclxuXHRcdFx0bWFwKChzY2VuYXJpbykgPT4gbmV3IFNjZW5hcmlvRmVjaGVkQWN0aW9uKHNjZW5hcmlvKSlcclxuXHRcdCk7XHJcblxyXG5cdC8vIEBFZmZlY3QoKVxyXG5cdC8vIEdldFNjZW5hcmlvJCA9IHRoaXMuYWN0aW9ucyRcclxuXHQvLyBcdC5vZlR5cGUoU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLkdFVF9TQ0VOQVJJTylcclxuXHQvLyBcdC5waXBlKFxyXG5cdC8vIFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHQvLyBcdFx0c3dpdGNoTWFwKGlkID0+IHRoaXMuc2VydmljZS5nZXQoaWQpKSxcclxuXHQvLyBcdFx0bWFwKHJ1bGUgPT4gbmV3IFNjZW5hcmlvRmVjaGVkQWN0aW9uKHJ1bGUpKVxyXG5cdC8vIFx0KTtcclxuXHJcblx0Ly8gQEVmZmVjdCgpXHJcblx0Ly8gZ2V0X3J1bGVzX2xpc3QkID0gdGhpcy5hY3Rpb25zJFxyXG5cdC8vIFx0Lm9mVHlwZShTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfU1RBUlQpXHJcblx0Ly8gXHQucGlwZShcclxuXHQvLyBcdFx0c3dpdGNoTWFwKChkYXRhOiBhbnkpID0+IHRoaXMuc2VydmljZS5nZXRMaXN0KCkpLFxyXG5cdC8vIFx0XHRtYXAocmVzID0+IG5ldyBTY2VuYXJpb3NMaXN0U3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHQvLyBcdFx0Y2F0Y2hFcnJvcigoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBTY2VuYXJpb3NMaXN0RmFpbGVkQWN0aW9uKCkpKVxyXG5cdC8vIFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlc0xpc3RBY3Rpb25UeXBlcywgUnVsZXNMaXN0U3RhcnRBY3Rpb24gfSBmcm9tIFwiLi9ydWxlLWRiLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJ1bGVzTGlzdEVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55Pikge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RWRpdFByb2ZpbGVSZXF1ZXN0JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1QpLm1hcCgoKSA9PiBuZXcgUnVsZXNMaXN0U3RhcnRBY3Rpb24oKSk7XHJcblxyXG5cdC8vIEBFZmZlY3QoKVxyXG5cdC8vIEdldFJ1bGUkID0gdGhpcy5hY3Rpb25zJFxyXG5cdC8vIFx0Lm9mVHlwZShSdWxlc0xpc3RBY3Rpb25UeXBlcy5HRVRfUlVMRSlcclxuXHQvLyBcdC5waXBlKFxyXG5cdC8vIFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHQvLyBcdFx0c3dpdGNoTWFwKGlkID0+IHRoaXMuc2VydmljZS5nZXQoaWQpKSxcclxuXHQvLyBcdFx0bWFwKHJ1bGUgPT4gbmV3IFJ1bGVGZWNoZWRBY3Rpb24ocnVsZSkpXHJcblx0Ly8gXHQpO1xyXG5cclxuXHQvLyBARWZmZWN0KClcclxuXHQvLyBnZXRfcnVsZXNfbGlzdCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0Ly8gXHQub2ZUeXBlKFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1RfU1RBUlQpXHJcblx0Ly8gXHQucGlwZShcclxuXHQvLyBcdFx0c3dpdGNoTWFwKChkYXRhOiBhbnkpID0+IHRoaXMuc2VydmljZS5nZXRMaXN0KCkpLFxyXG5cdC8vIFx0XHRtYXAocmVzID0+IG5ldyBSdWxlc0xpc3RTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdC8vIFx0XHRjYXRjaEVycm9yKCgpID0+IE9ic2VydmFibGUub2YobmV3IFJ1bGVzTGlzdEZhaWxlZEFjdGlvbigpKSlcclxuXHQvLyBcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbmltcG9ydCB7IGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uXCI7XG5cbmltcG9ydCB7IFNob3dBbmNob3JzQWN0aW9uLCBIaWRlQW5jaG9yc0FjdGlvbiB9IGZyb20gXCIuLi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5hY3Rpb25zXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJnd3QtbW9kZS1idXR0b25cIixcblx0dGVtcGxhdGU6IGAgICAgPGJ1dHRvbiAqbmdJZj1cIiEoaGF2ZVBlcm1pc3Npb24kIHwgYXN5bmMpXCIgY2xhc3M9XCJidG5cIiBtYXQtbWluaS1mYWIgdHlwZT1cImJ1dHRvblwiIHJvdXRlckxpbms9XCJhdXRoL2Zyb250ZW5kL3NpZ25pblwiIGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XG4gICAgICA8bWF0LWljb24+ZmluZ2VycHJpbnQ8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPGJ1dHRvbiAqbmdJZj1cImhhdmVQZXJtaXNzaW9uJCB8IGFzeW5jXCIgY2xhc3M9XCJidG5cIiBtYXQtbWluaS1mYWIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVBbmNob3JzKClcIiBmeEZsZXg9XCJub2dyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxuICAgICAgPG1hdC1pY29uPnNldHRpbmdzPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5gLFxuXHRzdHlsZXM6IFtgLmJ0bntwb3NpdGlvbjpmaXhlZDtib3R0b206MjVweDtsZWZ0OjI1cHg7ei1pbmRleDozfWBdXG59KVxuZXhwb3J0IGNsYXNzIEd3dE1vZGVCdXR0b25Db21wb25lbnQge1xuXHRhbmNob3JzTW9kZTogYm9vbGVhbjtcblx0aGF2ZVBlcm1pc3Npb24kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XG5cdFx0dGhpcy5hbmNob3JzTW9kZSA9IGZhbHNlO1xuXHRcdHRoaXMuaGF2ZVBlcm1pc3Npb24kID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlKTtcblx0fVxuXG5cdHRvZ2dsZUFuY2hvcnMoKSB7XG5cdFx0aWYgKHRoaXMuYW5jaG9yc01vZGUgPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTaG93QW5jaG9yc0FjdGlvbigpKTtcblx0XHRcdHRoaXMuYW5jaG9yc01vZGUgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBIaWRlQW5jaG9yc0FjdGlvbigpKTtcblx0XHRcdHRoaXMuYW5jaG9yc01vZGUgPSBmYWxzZTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL2ludGVybmFsL29ic2VydmFibGUvb2ZcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3J1bGUtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ydWxlLnJlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSdWxlU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHt9XHJcblxyXG5cdC8vIGFkZCgpOiBPYnNlcnZhYmxlPFRlc3RNb2RlbD4ge1xyXG5cdC8vIFx0Ly8gY29uc3QgbW9kZWwgPSBuZXcgQWRkUnVsZUFwaU1vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblx0Ly8gXHQvLyByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0Ly8gXHQvLyBcdC5maWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMuYWRkUnVsZSAhPSBcIlwiKVxyXG5cdC8vIFx0Ly8gXHQudGFrZSgxKVxyXG5cdC8vIFx0Ly8gXHQuc3dpdGNoTWFwKGNvbmZpZyA9PiB0aGlzLmh0dHAucG9zdChjb25maWcuZW5kcG9pbnRzLmFkZFJ1bGUsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpKVxyXG5cdC8vIFx0Ly8gXHQubWFwKChyZXNwb25zZTogQWRkUnVsZUFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpO1xyXG5cdC8vIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0VGFibGVNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vcnVsZS5jb25maWdcIjtcclxuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3J1bGUtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgUnVsZVJlZHVjZXJzIH0gZnJvbSBcIi4vcnVsZS5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBSdWxlQ29tcG9uZW50IH0gZnJvbSBcIi4vcnVsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUnVsZUFuY2hvckRpcmVjdGl2ZSB9IGZyb20gXCIuL3J1bGUtYW5jaG9yL3J1bGUtYW5jaG9yLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBHd3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vZ3d0LXZpZXcvZ3d0LXZpZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFN0ZXBMb2FkZXJEaXJlY3RpdmUgfSBmcm9tIFwiLi9zdGVwLWxvYWRlci9zdGVwLWxvYWRlci5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgU2NlbmFyaW9zRGJFZmZlY3RzIH0gZnJvbSBcIi4vZGIvc2NlbmFyaW8tZGIuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBSdWxlc0xpc3RFZmZlY3RzIH0gZnJvbSBcIi4vZGIvcnVsZS1kYi5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEd3dE1vZGVCdXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi9tb2RlLWJ1dHRvbi9tb2RlLWJ1dHRvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUnVsZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9ydWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvcnVsZS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvc2NlbmFyaW8uc2VydmljZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0XHRNYXRUYWJsZU1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbIFJ1bGVDb21wb25lbnQsIFJ1bGVBbmNob3JEaXJlY3RpdmUsIEd3dFZpZXdDb21wb25lbnQsIFN0ZXBMb2FkZXJEaXJlY3RpdmUsIEd3dE1vZGVCdXR0b25Db21wb25lbnQgXSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFsgR3d0Vmlld0NvbXBvbmVudCBdLFxyXG5cdGV4cG9ydHM6IFsgUnVsZUFuY2hvckRpcmVjdGl2ZSwgR3d0TW9kZUJ1dHRvbkNvbXBvbmVudCBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSdWxlTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBSdWxlTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUm9vdFJ1bGVNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB8fCB7fSB9LFxyXG5cdFx0XHRcdFJ1bGVTZXJ2aWNlLFxyXG5cdFx0XHRcdFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdFx0XHRTY2VuYXJpb1NlcnZpY2VcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0UnVsZU1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJydWxlXCIsIFJ1bGVSZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBSdWxlc0xpc3RFZmZlY3RzLCBTY2VuYXJpb3NEYkVmZmVjdHMgXSksXHJcblx0XHRSb3V0aW5nTW9kdWxlXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIFJ1bGVNb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdFJ1bGVNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbIkluamVjdGlvblRva2VuIiwiQ29tcG9uZW50IiwiUm91dGVyTW9kdWxlIiwiaW5pdGlhbFN0YXRlIiwiZnJvbVJ1bGVBbmNob3IuUmVkdWNlciIsImZyb21SdWxlRGJBbmNob3IucmVkdWNlciIsImZyb21TY2VuYXJpb0RiQW5jaG9yLnJlZHVjZXIiLCJzdG9yZSIsIkJlaGF2aW9yU3ViamVjdCIsIkluamVjdGFibGUiLCJJbmplY3QiLCJTdG9yZSIsIkluamVjdG9yIiwiRGlyZWN0aXZlIiwiQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIiwiVmlld0NvbnRhaW5lclJlZiIsIklucHV0IiwiVmlld0NoaWxkIiwiaHR0cCIsIm1hcCIsInNoYXJlIiwic3RyaW5nVGVtcGxhdGUiLCJmaWx0ZXIiLCJzdGFydFdpdGgiLCJIdHRwQ2xpZW50IiwiU3ViamVjdCIsInRha2VVbnRpbCIsIkZvcm1Hcm91cCIsIkZvcm1Db250cm9sIiwiTUFUX0JPVFRPTV9TSEVFVF9EQVRBIiwiVmlld0NoaWxkcmVuIiwiY29tYmluZUxhdGVzdCIsInN3aXRjaE1hcCIsIm9mIiwiRWxlbWVudFJlZiIsIlJlbmRlcmVyMiIsIk1hdEJvdHRvbVNoZWV0IiwiSG9zdExpc3RlbmVyIiwiQWN0aW9ucyIsIkVmZmVjdCIsImdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSIsIk5nTW9kdWxlIiwiSHR0cENsaWVudE1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTWF0RXhwYW5zaW9uTW9kdWxlIiwiTWF0U25hY2tCYXJNb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0Q2FyZE1vZHVsZSIsIk1hdENoZWNrYm94TW9kdWxlIiwiTWF0VGFibGVNb2R1bGUiLCJNYXRTZWxlY3RNb2R1bGUiLCJNYXRJbnB1dE1vZHVsZSIsIk1hdEZvcm1GaWVsZE1vZHVsZSIsIk1hdFRhYnNNb2R1bGUiLCJNYXREaXZpZGVyTW9kdWxlIiwiRmxleExheW91dE1vZHVsZSIsIk1hdFJhZGlvTW9kdWxlIiwiTWF0U2xpZGVUb2dnbGVNb2R1bGUiLCJSZWFjdGl2ZUZvcm1zTW9kdWxlIiwiQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUiLCJTdG9yZU1vZHVsZSIsIkVmZmVjdHNNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx5QkFnQmEscUJBQXFCLEdBQXFCO1FBQ3RELFNBQVMsRUFBRTtZQUNWLE1BQU0sRUFBRSxtQkFBbUI7WUFDM0IsR0FBRyxFQUFFLDZDQUE2QztTQUNsRDtRQUNE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