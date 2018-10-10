(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@ngrx/store'), require('rxjs/BehaviorSubject'), require('rxjs/operators'), require('rxjs/Rx'), require('@angular/common/http'), require('@soushians/shared'), require('rxjs'), require('@angular/material'), require('@angular/forms'), require('@ngrx/effects'), require('@soushians/frontend-authentication'), require('@angular/common'), require('@angular/flex-layout'), require('@angular/platform-browser/animations')) :
    typeof define === 'function' && define.amd ? define('@soushians/rule', ['exports', '@angular/core', '@angular/router', '@ngrx/store', 'rxjs/BehaviorSubject', 'rxjs/operators', 'rxjs/Rx', '@angular/common/http', '@soushians/shared', 'rxjs', '@angular/material', '@angular/forms', '@ngrx/effects', '@soushians/frontend-authentication', '@angular/common', '@angular/flex-layout', '@angular/platform-browser/animations'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.rule = {}),global.ng.core,global.ng.router,null,global.rxjs.BehaviorSubject,global.rxjs.operators,global.rxjs.Rx,global.ng.common.http,null,global.rxjs,global.ng.material,global.ng.forms,null,null,global.ng.common,global.ng['flex-layout'],global.ng.platformBrowser.animations));
}(this, (function (exports,core,router,store,BehaviorSubject,operators,Rx,http,shared,rxjs,material,forms,effects,frontendAuthentication,common,flexLayout,animations) { 'use strict';

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
    var MODULE_CONFIG_TOKEN = new core.InjectionToken("RuleModuleConfig");

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
    var RoutingModule = router.RouterModule.forChild(routes);

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
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
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
                /** @type {?} */
                var component = this.resolver.resolveComponentFactory(this.step.stepComponent);
                this.component = this.container.createComponent(component);
                debugger;
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ScenarioService = /** @class */ (function () {
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
                /** @type {?} */
                var model = new GwtScenarioModel(scenario);
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
                /** @type {?} */
                var subject = new Rx.BehaviorSubject(undefined);
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
                /** @type {?} */
                var subject = new Rx.BehaviorSubject(undefined);
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GwtViewComponent = /** @class */ (function () {
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
                        template: "<div fxLayout=\"row\" fxLayoutGap=\"25px\">\n  <div fxFlex=\"400px\" fxLayout=\"column\" fxLayoutGap=\"15px\">\n    <!-- <div fxLayout=\"row wrap\">\n    <mat-form-field appearance=\"fill\" fxFlex=\"100\">\n      <input matInput placeholder=\"\u0641\u06CC\u0644\u062A\u0631\">\n      <mat-icon matSuffix>search</mat-icon>\n    </mat-form-field>\n    <mat-checkbox fxFlex class=\"example-margin\">\u0641\u0631\u0636 \u06A9\u0646\u06CC\u062F</mat-checkbox>\n    <mat-checkbox fxFlex class=\"example-margin\">\u0647\u0646\u06AF\u0627\u0645\u06CC \u06A9\u0647</mat-checkbox>\n    <mat-checkbox fxFlex class=\"example-margin\">\u0622\u0646\u06AF\u0627\u0647</mat-checkbox>\n  </div> -->\n    <mat-card class=\"steps-item\" *ngFor=\"let step of steps$ | async\">\n      <span class=\"step-text\">\n        {{step.description}}\n      </span>\n      <button mat-icon-button class=\"add-button\" (click)=\"addStepToScenario(step)\">\n        <mat-icon>arrow_back_ios</mat-icon>\n      </button>\n    </mat-card>\n  </div>\n\n  <div fxFlex=\"700px\">\n    <div fxLayout=\"row wrap\" fxLayoutGap=\"25px\" fxLayoutAlign=\"center center\" class=\"scenario-toolbar\">\n      <div fxFlex>\n        <mat-form-field class=\"fit\">\n          <mat-select placeholder=\"\u0648\u0650\u06CC\u0698\u06AF\u06CC\" (selectionChange)=\"activeScenario($event.value)\">\n            <mat-option *ngFor=\"let scenario of scenarios$ | async\" [value]=\"scenario\">\n              {{ scenario.featureId }} : {{ scenario.name }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <button fxFlex=\"nogrow\" mat-raised-button color=\"primary\" (click)=\"addNewScenario()\">\n        \u062B\u0628\u062A \u0633\u0646\u0627\u0631\u06CC\u0648 \u062C\u062F\u06CC\u062F\n      </button>\n    </div>\n    <div fxLayout=\"column\" fxLayoutGap=\"15px\">\n      <div fxFlex=\"100\" fxLayout=\"row\" fxLayoutGap=\"25px\" [formGroup]=\"scenarioFormGroup\">\n        <mat-form-field fxFlex=\"50\">\n          <mat-select placeholder=\"\u0648\u06CC\u0698\u06AF\u06CC\" formControlName=\"featureId\">\n            <mat-option *ngFor=\"let feature of features$\" [value]=\"feature\">\n              {{ feature }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field fxFlex=\"50\">\n          <input matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\n        </mat-form-field>\n      </div>\n      <ng-container *ngFor=\"let step of (scenario$ | async).steps\">\n        <div class=\"scenario-steps-item\">\n          <ng-container rule-step-loader [step]=\"step\"></ng-container>\n          <div class=\"scenario-steps-action\">\n            <button mat-icon-button (click)=\"deleteStepFromScenario(step)\">\n              <mat-icon>delete</mat-icon>\n            </button>\n            <button mat-icon-button (click)=\"incScenarioStepPriority(step)\">\n              <mat-icon>keyboard_arrow_up</mat-icon>\n            </button>\n            <button mat-icon-button (click)=\"decScenarioStepPriority(step)\">\n              <mat-icon>keyboard_arrow_down</mat-icon>\n            </button>\n          </div>\n        </div>\n      </ng-container>\n      <button fxFlex=\"nogrow\" mat-raised-button color=\"primary\" (click)=\"save()\">\n        \u062B\u0628\u062A\n      </button>\n    </div>\n  </div>\n</div>",
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
                    .pipe(operators.takeUntil(this.unsubscribe), operators.filter(function (scenario) { return scenario !== undefined; }));
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
                rxjs.combineLatest(givenStepInterpretors)
                    .pipe(operators.takeUntil(this.unsubscribe), operators.map(function (values) { return values.every(function (value) { return value === true; }); }), operators.switchMap(function (givenResult) {
                    debugger;
                    if (givenResult) {
                        /** @type {?} */
                        var thenStepInterpretors = scenario.steps
                            .filter(function (step) { return step.type === GwtStepTypes.Then; })
                            .map(function (step) { return step.interperator(step.params, _this.el); });
                        return rxjs.combineLatest
                            .apply(null, thenStepInterpretors)
                            .pipe(operators.map(function (values) { return values.every(function (value) { return value === true; }); }));
                    }
                    else {
                        return rxjs.of(false);
                    }
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ScenariosDbEffects = /** @class */ (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var RulesListEffects = /** @class */ (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GwtModeButtonComponent = /** @class */ (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var RuleService = /** @class */ (function () {
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
    var RootRuleModule = /** @class */ (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.RuleModule = RuleModule;
    exports.GwtStepTypes = GwtStepTypes;
    exports.ShowAnchorsAction = ShowAnchorsAction;
    exports.HideAnchorsAction = HideAnchorsAction;
    exports.ɵp = RulesListEffects;
    exports.ɵn = reducer;
    exports.ɵq = ScenariosDbEffects;
    exports.ɵo = reducer$1;
    exports.ɵj = GwtViewComponent;
    exports.ɵl = GwtModeButtonComponent;
    exports.ɵd = RuleAnchorDirective;
    exports.ɵm = Reducer;
    exports.ɵr = RoutingModule;
    exports.ɵc = RuleComponent;
    exports.ɵb = MODULE_CONFIG_TOKEN;
    exports.ɵa = RootRuleModule;
    exports.ɵg = RuleReducers;
    exports.ɵi = RuleConfigurationService;
    exports.ɵs = RuleService;
    exports.ɵe = ScenarioService;
    exports.ɵk = StepLoaderDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXJ1bGUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3J1bGUuY29uZmlnLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3J1bGUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3J1bGUtcm91dGluZy5tb2R1bGUudHMiLG51bGwsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3J1bGUtYW5jaG9yL3J1bGUtYW5jaG9yLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvZGIvcnVsZS1kYi5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL2RiL3J1bGUtZGIucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9kYi9zY2VuYXJpby1kYi5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL2RiL3NjZW5hcmlvLWRiLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvcnVsZS5yZWR1Y2Vycy50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9zZXJ2aWNlcy9ydWxlLWNvbmZpZ3VyYXRpb24uc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3N0ZXAtbG9hZGVyL3N0ZXAtbG9hZGVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9zZXJ2aWNlcy9zY2VuYXJpby5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL2d3dC12aWV3L2d3dC12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9tb2RlbHMvZ3d0LXN0ZXAtdHlwZXMuZW51bS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5kaXJlY3RpdmUudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvZGIvc2NlbmFyaW8tZGIuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9kYi9ydWxlLWRiLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvbW9kZS1idXR0b24vbW9kZS1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3NlcnZpY2VzL3J1bGUuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9ydWxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHd3RTdGVwIH0gZnJvbSBcIi4vbW9kZWxzL2d3dC1zdGVwLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJ1bGVNb2R1bGVDb25maWcge1xyXG5cdGVuZHBvaW50cz86IHtcclxuXHRcdHVwc2VydD86IHN0cmluZztcclxuXHRcdGdldD86IHN0cmluZztcclxuXHR9O1xyXG5cdHN0ZXBDbGFzc2VzPzogVHlwZTxHd3RTdGVwPltdO1xyXG5cdHN0ZXBzPzogR3d0U3RlcFtdO1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuXHR9O1xyXG59XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IFJ1bGVNb2R1bGVDb25maWcgPSB7XHJcblx0ZW5kcG9pbnRzOiB7XHJcblx0XHR1cHNlcnQ6IFwiL2FwaS9nd3Qvc2NlbmFyaW9cIixcclxuXHRcdGdldDogXCIvYXBpL2d3dC9hbmNob3IvJHttb2RlbC5hbmNob3JJZH0vc2NlbmFyaW9zXCJcclxuXHR9LFxyXG5cdHN0ZXBDbGFzc2VzOiBbXSxcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlLFxyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBcImZyb250ZW5kX3NlcnZlci9kaWQvbm90L3NldFwiXHJcblx0fVxyXG59O1xyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxSdWxlTW9kdWxlQ29uZmlnPihcIlJ1bGVNb2R1bGVDb25maWdcIik7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImFwcC1ydWxlXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFJ1bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVDb21wb25lbnQgfSBmcm9tIFwiLi9ydWxlLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogXCJydWxlXCIsXHJcblx0XHRjb21wb25lbnQ6IFJ1bGVDb21wb25lbnRcclxuXHRcdC8vIGNoaWxkcmVuOiBbIHt9IF1cclxuXHR9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gUnVsZUFuY2hvcnNBY3Rpb25UeXBlcyB7XHJcblx0U0hPV19BTkNIT1JTID0gXCJbUlVMRV1bQU5DSE9SU10gU0hPV19BTkNIT1JTXCIsXHJcblx0SElERV9BTkNIT1JTID0gXCJbUlVMRV1bQU5DSE9SU10gSElERV9BTkNIT1JTXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNob3dBbmNob3JzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZUFuY2hvcnNBY3Rpb25UeXBlcy5TSE9XX0FOQ0hPUlM7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIaWRlQW5jaG9yc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVBbmNob3JzQWN0aW9uVHlwZXMuSElERV9BTkNIT1JTO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBSdWxlQW5jaG9yc0FjdGlvbiA9IFNob3dBbmNob3JzQWN0aW9uIHwgSGlkZUFuY2hvcnNBY3Rpb247XHJcbiIsImltcG9ydCB7IFJ1bGVBbmNob3JzQWN0aW9uLCBSdWxlQW5jaG9yc0FjdGlvblR5cGVzIH0gZnJvbSBcIi4vcnVsZS1hbmNob3IuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0YWN0aXZlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRhY3RpdmU6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBSdWxlQW5jaG9yc0FjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFJ1bGVBbmNob3JzQWN0aW9uVHlwZXMuU0hPV19BTkNIT1JTOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWN0aXZlOiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0Y2FzZSBSdWxlQW5jaG9yc0FjdGlvblR5cGVzLkhJREVfQU5DSE9SUzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFjdGl2ZTogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiAgc2VsZWN0b3JzXHJcbmV4cG9ydCBjb25zdCBnZXRBbmNob3JzQWN0aXZpdHlTdGF0ZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmFjdGl2ZTtcclxuLy8jZW5kcmVnaW9uXHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUnVsZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9ydWxlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBSdWxlc0xpc3RBY3Rpb25UeXBlcyB7XHJcblx0UlVMRVNfTElTVCA9IFwiW1JVTEVdW0RCXSBSVUxFU19MSVNUXCIsXHJcblx0UlVMRVNfTElTVF9TVEFSVCA9IFwiW1JVTEVdW0RCXSBSVUxFU19MSVNUX1NUQVJUXCIsXHJcblx0UlVMRVNfTElTVF9TVUNDRUVEID0gXCJbUlVMRV1bREJdIFJVTEVTX0xJU1RfU1VDQ0VFRFwiLFxyXG5cdFJVTEVTX0xJU1RfRkFJTEVEID0gXCJbUlVMRV1bREJdIFJVTEVTX0xJU1RfRkFJTEVEXCIsXHJcblx0UlVMRV9VUFNFUlQgPSBcIltSVUxFXVtEQl0gUlVMRV9VUFNFUlRcIixcclxuXHRHRVRfUlVMRSA9IFwiW1JVTEVdW0RCXSBHRVRfUlVMRVwiLFxyXG5cdFJVTEVfRkVUQ0hFRCA9IFwiW1JVTEVdW0RCXSBSVUxFX0ZFVENIRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUnVsZXNMaXN0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVDtcclxufVxyXG5leHBvcnQgY2xhc3MgUnVsZXNMaXN0U3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX1NUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBSdWxlc0xpc3RTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSdWxlTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgUnVsZXNMaXN0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydFJ1bGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFX1VQU0VSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUnVsZU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRSdWxlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuR0VUX1JVTEU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgUnVsZUZlY2hlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVfRkVUQ0hFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUnVsZU1vZGVsKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBSdWxlc0xpc3RBY3Rpb25zID1cclxuXHR8IFJ1bGVzTGlzdEFjdGlvblxyXG5cdHwgUnVsZXNMaXN0U3RhcnRBY3Rpb25cclxuXHR8IFJ1bGVzTGlzdFN1Y2NlZWRBY3Rpb25cclxuXHR8IFJ1bGVzTGlzdEZhaWxlZEFjdGlvblxyXG5cdHwgVXBzZXJ0UnVsZUFjdGlvblxyXG5cdHwgR2V0UnVsZUFjdGlvblxyXG5cdHwgUnVsZUZlY2hlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgUnVsZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9ydWxlLm1vZGVsXCI7XHJcbmltcG9ydCB7IFJ1bGVzTGlzdEFjdGlvblR5cGVzLCBSdWxlc0xpc3RBY3Rpb25zIH0gZnJvbSBcIi4vcnVsZS1kYi5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzVHlwZXM7XHJcblx0ZGF0YTogUnVsZU1vZGVsW107XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiBcInByaXN0aW5lXCIsXHJcblx0ZGF0YTogW11cclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogUnVsZXNMaXN0QWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1Q6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZGlydHlcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcInBlbmRpbmdcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBhY3Rpb24ucGF5bG9hZCxcclxuXHRcdFx0XHRzdGF0dXM6IFwic3VjY2VlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1RfRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVfVVBTRVJUOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRpZiAoZW50aXR5SWR4ID4gLTEpIHtcclxuXHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFX0ZFVENIRUQ6IHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdHZhciBlbnRpdHlJZHggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleChmb3JtID0+IGZvcm0uX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdGlmIChlbnRpdHlJZHggPiAtMSkge1xyXG5cdFx0XHRcdGRhdGFbZW50aXR5SWR4XSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGFbZW50aXR5SWR4XSwgYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRhdGEucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBkYXRhXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdldFN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnN0YXR1cztcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHd3RTY2VuYXJpb01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcyB7XHJcblx0U0NFTkFSSU9TX0xJU1QgPSBcIltHV1RdW1NDRU5BUklPXVtEQl1bTElTVF0gU0NFTkFSSU9TX0xJU1RcIixcclxuXHRTQ0VOQVJJT1NfTElTVF9TVEFSVCA9IFwiW1NDRU5BUklPXVtEQl0gU0NFTkFSSU9TX0xJU1RfU1RBUlRcIixcclxuXHRTQ0VOQVJJT1NfTElTVF9TVUNDRUVEID0gXCJbU0NFTkFSSU9dW0RCXSBTQ0VOQVJJT1NfTElTVF9TVUNDRUVEXCIsXHJcblx0U0NFTkFSSU9TX0xJU1RfRkFJTEVEID0gXCJbU0NFTkFSSU9dW0RCXSBTQ0VOQVJJT1NfTElTVF9GQUlMRURcIixcclxuXHRVUFNFUlQgPSBcIltHV1RdW1NDRU5BUklPXVtEQl1bVVBTRVJUXSBTQ0VOQVJJT19VUFNFUlRcIixcclxuXHRHRVRfU0NFTkFSSU8gPSBcIltTQ0VOQVJJT11bREJdIEdFVF9TQ0VOQVJJT1wiLFxyXG5cdFNDRU5BUklPX0ZFVENIRUQgPSBcIltTQ0VOQVJJT11bREJdIFNDRU5BUklPX0ZFVENIRURcIixcclxuXHQvLy8gbmV3IHZpc2lvblxyXG5cdFVQREFURV9EQiA9IFwiW0dXVF1bU0NFTkFSSU9dW0RCXSBVUERBVEVfREJcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9zTGlzdEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVDtcclxufVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9zTGlzdFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUX1NUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb3NMaXN0U3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVF9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHd3RTY2VuYXJpb01vZGVsW10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvc0xpc3RGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfRkFJTEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRTY2VuYXJpb0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5VUFNFUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEd3dFNjZW5hcmlvTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFNjZW5hcmlvQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLkdFVF9TQ0VOQVJJTztcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb0ZlY2hlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT19GRVRDSEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHd3RTY2VuYXJpb01vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVEYkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5VUERBVEVfREI7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEd3dFNjZW5hcmlvTW9kZWxbXSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU2NlbmFyaW9zTGlzdEFjdGlvbnMgPVxyXG5cdHwgU2NlbmFyaW9zTGlzdEFjdGlvblxyXG5cdHwgU2NlbmFyaW9zTGlzdFN0YXJ0QWN0aW9uXHJcblx0fCBTY2VuYXJpb3NMaXN0U3VjY2VlZEFjdGlvblxyXG5cdHwgU2NlbmFyaW9zTGlzdEZhaWxlZEFjdGlvblxyXG5cdHwgVXBzZXJ0U2NlbmFyaW9BY3Rpb25cclxuXHR8IEdldFNjZW5hcmlvQWN0aW9uXHJcblx0fCBTY2VuYXJpb0ZlY2hlZEFjdGlvblxyXG5cdHwgVXBkYXRlRGJBY3Rpb247XHJcbiIsImltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IEd3dFNjZW5hcmlvTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zY2VuYXJpby5tb2RlbFwiO1xyXG5pbXBvcnQgeyBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMsIFNjZW5hcmlvc0xpc3RBY3Rpb25zIH0gZnJvbSBcIi4vc2NlbmFyaW8tZGIuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG5cdGRhdGE6IEd3dFNjZW5hcmlvTW9kZWxbXTtcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzdGF0dXM6IFwicHJpc3RpbmVcIixcclxuXHRkYXRhOiBbXVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBTY2VuYXJpb3NMaXN0QWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJkaXJ0eVwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVF9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJwZW5kaW5nXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBhY3Rpb24ucGF5bG9hZCxcclxuXHRcdFx0XHRzdGF0dXM6IFwic3VjY2VlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVF9GQUlMRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZmFpbGVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlVQU0VSVDoge1xyXG5cdFx0XHRjb25zdCBkYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0dmFyIGVudGl0eUlkeCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KGZvcm0gPT4gZm9ybS5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKTtcclxuXHRcdFx0aWYgKGVudGl0eUlkeCA+IC0xKSB7XHJcblx0XHRcdFx0ZGF0YVtlbnRpdHlJZHhdID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YVtlbnRpdHlJZHhdLCBhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGF0YS5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGFcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPX0ZFVENIRUQ6IHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdHZhciBlbnRpdHlJZHggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleChmb3JtID0+IGZvcm0uX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdGlmIChlbnRpdHlJZHggPiAtMSkge1xyXG5cdFx0XHRcdGRhdGFbZW50aXR5SWR4XSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGFbZW50aXR5SWR4XSwgYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRhdGEucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBkYXRhXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5VUERBVEVfREI6IHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdGNvbnN0IHNjZW5hcmlvcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cdFx0XHRzY2VuYXJpb3MuZm9yRWFjaChzY2VuYXJpbyA9PiB7XHJcblx0XHRcdFx0dmFyIGVudGl0eUlkeCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KGZvcm0gPT4gZm9ybS5faWQgPT0gc2NlbmFyaW8uX2lkKTtcclxuXHRcdFx0XHRpZiAoZW50aXR5SWR4ID4gLTEpIHtcclxuXHRcdFx0XHRcdGRhdGFbZW50aXR5SWR4XSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGFbZW50aXR5SWR4XSwgc2NlbmFyaW8pO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRkYXRhLnB1c2goc2NlbmFyaW8pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBnZXRTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zdGF0dXM7XHJcbiIsImltcG9ydCAqIGFzIGZyb21SdWxlQW5jaG9yIGZyb20gXCIuL3J1bGUtYW5jaG9yL3J1bGUtYW5jaG9yLnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgZnJvbVJ1bGVEYkFuY2hvciBmcm9tIFwiLi9kYi9ydWxlLWRiLnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgZnJvbVNjZW5hcmlvRGJBbmNob3IgZnJvbSBcIi4vZGIvc2NlbmFyaW8tZGIucmVkdWNlclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSdWxlU3RhdGUge1xyXG5cdHJ1bGVBbmNob3JzOiBmcm9tUnVsZUFuY2hvci5TdGF0ZTtcclxuXHRydWxlczogZnJvbVJ1bGVEYkFuY2hvci5TdGF0ZTtcclxuXHRzY2VuYXJpb3M6IGZyb21TY2VuYXJpb0RiQW5jaG9yLlN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUnVsZVJlZHVjZXJzID0ge1xyXG5cdHJ1bGVBbmNob3JzOiBmcm9tUnVsZUFuY2hvci5SZWR1Y2VyLFxyXG5cdHJ1bGVzOiBmcm9tUnVsZURiQW5jaG9yLnJlZHVjZXIsXHJcblx0c2NlbmFyaW9zOiBmcm9tU2NlbmFyaW9EYkFuY2hvci5yZWR1Y2VyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFN0YXRlIHtcclxuXHRcInJ1bGVcIjogUnVsZVN0YXRlO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuXHJcbi8vIGltcG9ydCB7IGdldFJ1bGVNb2R1bGVDb25maWcgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuaW1wb3J0IHsgUnVsZU1vZHVsZUNvbmZpZyB9IGZyb20gXCIuLi9ydWxlLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBNT0RVTEVfQ09ORklHX1RPS0VOLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vcnVsZS5jb25maWdcIjtcclxuaW1wb3J0IHsgUnVsZVN0YXRlIH0gZnJvbSBcIi4uL3J1bGUucmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBSdWxlTW9kdWxlQ29uZmlnO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cdH1cclxuXHRjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdChNT0RVTEVfREVGQVVMVF9DT05GSUcpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZTogUnVsZU1vZHVsZUNvbmZpZyxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPFJ1bGVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxyXG5cdCkge1xyXG5cdFx0Ly8gaW5zdGFudGlhdGUgc3RlcHMgYW5kIHVzZWQgdGhlbVxyXG5cdFx0Y29uZmlnRmlsZS5zdGVwcyA9IGNvbmZpZ0ZpbGUuc3RlcENsYXNzZXMubWFwKHN0ZXAgPT4gbmV3IHN0ZXAodGhpcy5pbmplY3RvcikpO1xyXG5cclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblxyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHJcblx0XHQvLyB0aGlzLnN0b3JlLnNlbGVjdChnZXRSdWxlTW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUodXNlckNvbmZpZyA9PiB7XHJcblx0XHQvLyBcdGlmICghdXNlckNvbmZpZykgcmV0dXJuO1xyXG5cdFx0Ly8gXHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHVzZXJDb25maWcuQ29uZmlnKTtcclxuXHRcdC8vIFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBHd3RTdGVwIH0gZnJvbSBcIi4vZ3d0LXN0ZXAubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHd3RTY2VuYXJpb01vZGVsIHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0YW5jaG9ySWQ6IHN0cmluZztcclxuXHRmZWF0dXJlSWQ6IHN0cmluZztcclxuXHRzdGVwczogR3d0U3RlcFtdO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0e1xyXG5cdFx0XHRfaWQsXHJcblx0XHRcdGFuY2hvcklkLFxyXG5cdFx0XHRzdGVwcyxcclxuXHRcdFx0bmFtZSxcclxuXHRcdFx0ZmVhdHVyZUlkXHJcblx0XHR9OiB7IF9pZD86IHN0cmluZzsgYW5jaG9ySWQ/OiBzdHJpbmc7IHN0ZXBzPzogR3d0U3RlcFtdOyBuYW1lPzogc3RyaW5nOyBmZWF0dXJlSWQ/OiBzdHJpbmcgfSA9IHt9XHJcblx0KSB7XHJcblx0XHR0aGlzLl9pZCA9IF9pZCB8fCBcIlwiO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZSB8fCBcIlwiO1xyXG5cdFx0dGhpcy5mZWF0dXJlSWQgPSBmZWF0dXJlSWQgfHwgXCJcIjtcclxuXHRcdHRoaXMuX2lkID0gX2lkIHx8IFwiXCI7XHJcblx0XHR0aGlzLmFuY2hvcklkID0gYW5jaG9ySWQgfHwgXCJcIjtcclxuXHRcdHRoaXMuc3RlcHMgPSBzdGVwcyB8fCBbXTtcclxuXHR9XHJcblx0Z2V0UmVxdXNldEJvZHkoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRfaWQ6IHRoaXMuX2lkLFxyXG5cdFx0XHRhbmNob3JJZDogdGhpcy5hbmNob3JJZCxcclxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLFxyXG5cdFx0XHRmZWF0dXJlSWQ6IHRoaXMuZmVhdHVyZUlkLFxyXG5cdFx0XHRzdGVwczogdGhpcy5zdGVwcy5tYXAoKHN0ZXApID0+ICh7XHJcblx0XHRcdFx0aWQ6IHN0ZXAuaWQsXHJcblx0XHRcdFx0b3Bwb3NpdGU6IHN0ZXAub3Bwb3NpdGUsXHJcblx0XHRcdFx0cGFyYW1zOiBzdGVwLnBhcmFtc1xyXG5cdFx0XHR9KSlcclxuXHRcdH07XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRJbnB1dCxcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRDb21wb25lbnRSZWYsXHJcblx0Vmlld0NoaWxkLFxyXG5cdERpcmVjdGl2ZSxcclxuXHRPbkNoYW5nZXNcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgR3d0U3RlcCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXN0ZXAubW9kZWxcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiBcIltydWxlLXN0ZXAtbG9hZGVyXVwiXHJcblx0Ly8gdGVtcGxhdGVVcmw6IFwiLi9zdGVwLWxvYWRlci5jb21wb25lbnQuaHRtbFwiLFxyXG5cdC8vIHN0eWxlVXJsczogWyBcIi4vc3RlcC1sb2FkZXIuY29tcG9uZW50LmNzc1wiIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN0ZXBMb2FkZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcblx0QElucHV0KCkgc3RlcDogR3d0U3RlcDxhbnk+O1xyXG5cdEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXHJcblx0Ly8gVE9ETzogZml4IGdlbmVyaWMgdHlwZVxyXG5cdGNvbXBvbmVudDogQ29tcG9uZW50UmVmPGFueT47XHJcblx0Z2V0IHBhcmFtcygpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5wYXJhbXMgfHwge307XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgcHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHsgfVxyXG5cclxuXHRuZ09uQ2hhbmdlcygpIHtcclxuXHRcdGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG5cdFx0XHQvLyB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5jb25maWcgPSB0aGlzLmNvbmZpZztcclxuXHRcdFx0Ly8gdGhpcy5jb21wb25lbnQuaW5zdGFuY2UuZ3JvdXAgPSB0aGlzLmdyb3VwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRpZiAoIXRoaXMuc3RlcC5zdGVwQ29tcG9uZW50KSB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoKS5cclxuXHRcdCAgU3VwcG9ydGVkIHR5cGVzOiBgXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHQvLyBUT0RPOiBmaXggZ2VuZXJpYyB0eXBlXHJcblx0XHRjb25zdCBjb21wb25lbnQgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PGFueT4odGhpcy5zdGVwLnN0ZXBDb21wb25lbnQpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0dGhpcy5jb21wb25lbnQuaW5zdGFuY2UucGFyYW1zID0gdGhpcy5zdGVwLnBhcmFtcztcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN0YXJ0V2l0aCwgc2hhcmUgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IHN0cmluZ1RlbXBsYXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9ydWxlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHd3RTY2VuYXJpb01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWxcIjtcclxuaW1wb3J0IHsgUnVsZU1vZHVsZUNvbmZpZyB9IGZyb20gXCIuLi9ydWxlLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ydWxlLnJlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb1NlcnZpY2Uge1xyXG5cdGNvbmZpZyQ6IE9ic2VydmFibGU8UnVsZU1vZHVsZUNvbmZpZz47XHJcblx0Y29uZmlnOiBSdWxlTW9kdWxlQ29uZmlnO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMuY29uZmlnJCA9IHRoaXMuY29uZmlnU2VydmljZS5jb25maWckO1xyXG5cdFx0dGhpcy5jb25maWckLnN1YnNjcmliZShjb25maWcgPT4gKHRoaXMuY29uZmlnID0gY29uZmlnKSk7XHJcblx0fVxyXG5cclxuXHR1cHNlcnQoc2NlbmFyaW86IEd3dFNjZW5hcmlvTW9kZWwpOiBPYnNlcnZhYmxlPEd3dFNjZW5hcmlvTW9kZWw+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IEd3dFNjZW5hcmlvTW9kZWwoc2NlbmFyaW8pO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQucG9zdCh0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgdGhpcy5jb25maWcuZW5kcG9pbnRzLnVwc2VydCwgbW9kZWwuZ2V0UmVxdXNldEJvZHkoKSlcclxuXHRcdFx0LnBpcGUobWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlIGFzIEd3dFNjZW5hcmlvTW9kZWwpLCBzaGFyZSgpKTtcclxuXHR9XHJcblx0Z2V0QW5jaG9yU2NlbmFyaW9zKGFuY2hvcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEd3dFNjZW5hcmlvTW9kZWxbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0PGFueT4odGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIHN0cmluZ1RlbXBsYXRlKHRoaXMuY29uZmlnLmVuZHBvaW50cy5nZXQsIHsgYW5jaG9ySWQgfSkpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuUmVzdWx0IGFzIEd3dFNjZW5hcmlvTW9kZWxbXSk7XHJcblx0fVxyXG5cdHNlbGVjdFNjZW5hcmlvQnlJZChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3d0U2NlbmFyaW9Nb2RlbD4ge1xyXG5cdFx0Y29uc3Qgc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R3d0U2NlbmFyaW9Nb2RlbD4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5ydWxlLnNjZW5hcmlvcy5kYXRhKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRmaWx0ZXIoc2NlbmFyaW9zID0+IHNjZW5hcmlvcyAhPSBudWxsKSxcclxuXHRcdFx0XHRtYXAoc2NlbmFyaW9zID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBzY2VuYXJpb3MuZmluZChzY2VuYXJpbyA9PiBzY2VuYXJpby5faWQgPT0gX2lkKTtcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRmaWx0ZXIoc2NlbmFyaW8gPT4gc2NlbmFyaW8gIT0gdW5kZWZpbmVkKVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoc2NlbmFyaW8gPT4ge1xyXG5cdFx0XHRcdHN1YmplY3QubmV4dChzY2VuYXJpbyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG5cdHNlbGVjdEFuY2hvclNjZW5hcmlvcyhhbmNob3JJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxHd3RTY2VuYXJpb01vZGVsW10+IHtcclxuXHRcdGNvbnN0IHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEd3dFNjZW5hcmlvTW9kZWxbXT4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5ydWxlLnNjZW5hcmlvcy5kYXRhKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRzdGFydFdpdGgoW10pLFxyXG5cdFx0XHRcdGZpbHRlcihzY2VuYXJpb3MgPT4gc2NlbmFyaW9zICE9IG51bGwpLFxyXG5cdFx0XHRcdG1hcChzY2VuYXJpb3MgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHNjZW5hcmlvcy5maWx0ZXIoc2NlbmFyaW8gPT4gc2NlbmFyaW8uX2lkID09IGFuY2hvcklkKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoc2NlbmFyaW9zID0+IHtcclxuXHRcdFx0XHRzdWJqZWN0Lm5leHQoc2NlbmFyaW9zKTtcclxuXHRcdFx0fSk7XHJcblx0XHRyZXR1cm4gc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgVHlwZSwgSW5qZWN0b3IsIFZpZXdDaGlsZHJlbiwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHdpdGhMYXRlc3RGcm9tLCB0YWtlVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgTUFUX0JPVFRPTV9TSEVFVF9EQVRBIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ydWxlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHd3RTdGVwIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc3RlcC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHd3RTY2VuYXJpb01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWxcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcnVsZS5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBVcHNlcnRTY2VuYXJpb0FjdGlvbiB9IGZyb20gXCIuLi9kYi9zY2VuYXJpby1kYi5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFN0ZXBMb2FkZXJEaXJlY3RpdmUgfSBmcm9tIFwiLi4vc3RlcC1sb2FkZXIvc3RlcC1sb2FkZXIuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IFNjZW5hcmlvU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2VuYXJpby5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtZ3d0LXZpZXdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICA8ZGl2IGZ4RmxleD1cIjQwMHB4XCIgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEdhcD1cIjE1cHhcIj5cclxuICAgIDwhLS0gPGRpdiBmeExheW91dD1cInJvdyB3cmFwXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIiBmeEZsZXg9XCIxMDBcIj5cclxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nCgcObwozDmcKEw5jCqsOYwrFcIj5cclxuICAgICAgPG1hdC1pY29uIG1hdFN1ZmZpeD5zZWFyY2g8L21hdC1pY29uPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDxtYXQtY2hlY2tib3ggZnhGbGV4IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj7DmcKBw5jCscOYwrYgw5rCqcOZwobDm8KMw5jCrzwvbWF0LWNoZWNrYm94PlxyXG4gICAgPG1hdC1jaGVja2JveCBmeEZsZXggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPsOZwofDmcKGw5rCr8OYwqfDmcKFw5vCjCDDmsKpw5nChzwvbWF0LWNoZWNrYm94PlxyXG4gICAgPG1hdC1jaGVja2JveCBmeEZsZXggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPsOYwqLDmcKGw5rCr8OYwqfDmcKHPC9tYXQtY2hlY2tib3g+XHJcbiAgPC9kaXY+IC0tPlxyXG4gICAgPG1hdC1jYXJkIGNsYXNzPVwic3RlcHMtaXRlbVwiICpuZ0Zvcj1cImxldCBzdGVwIG9mIHN0ZXBzJCB8IGFzeW5jXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwic3RlcC10ZXh0XCI+XHJcbiAgICAgICAge3tzdGVwLmRlc2NyaXB0aW9ufX1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImFkZC1idXR0b25cIiAoY2xpY2spPVwiYWRkU3RlcFRvU2NlbmFyaW8oc3RlcClcIj5cclxuICAgICAgICA8bWF0LWljb24+YXJyb3dfYmFja19pb3M8L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgZnhGbGV4PVwiNzAwcHhcIj5cclxuICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJzY2VuYXJpby10b29sYmFyXCI+XHJcbiAgICAgIDxkaXYgZnhGbGV4PlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZpdFwiPlxyXG4gICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCLDmcKIw5nCkMObwozDmsKYw5rCr8ObwoxcIiAoc2VsZWN0aW9uQ2hhbmdlKT1cImFjdGl2ZVNjZW5hcmlvKCRldmVudC52YWx1ZSlcIj5cclxuICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHNjZW5hcmlvIG9mIHNjZW5hcmlvcyQgfCBhc3luY1wiIFt2YWx1ZV09XCJzY2VuYXJpb1wiPlxyXG4gICAgICAgICAgICAgIHt7IHNjZW5hcmlvLmZlYXR1cmVJZCB9fSA6IHt7IHNjZW5hcmlvLm5hbWUgfX1cclxuICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGROZXdTY2VuYXJpbygpXCI+XHJcbiAgICAgICAgw5jCq8OYwqjDmMKqIMOYwrPDmcKGw5jCp8OYwrHDm8KMw5nCiCDDmMKsw5jCr8ObwozDmMKvXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRHYXA9XCIxNXB4XCI+XHJcbiAgICAgIDxkaXYgZnhGbGV4PVwiMTAwXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjI1cHhcIiBbZm9ybUdyb3VwXT1cInNjZW5hcmlvRm9ybUdyb3VwXCI+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cIjUwXCI+XHJcbiAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIsOZwojDm8KMw5rCmMOawq/Dm8KMXCIgZm9ybUNvbnRyb2xOYW1lPVwiZmVhdHVyZUlkXCI+XHJcbiAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBmZWF0dXJlIG9mIGZlYXR1cmVzJFwiIFt2YWx1ZV09XCJmZWF0dXJlXCI+XHJcbiAgICAgICAgICAgICAge3sgZmVhdHVyZSB9fVxyXG4gICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiNTBcIj5cclxuICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOZwobDmMKnw5nChVwiIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3RlcCBvZiAoc2NlbmFyaW8kIHwgYXN5bmMpLnN0ZXBzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNjZW5hcmlvLXN0ZXBzLWl0ZW1cIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgcnVsZS1zdGVwLWxvYWRlciBbc3RlcF09XCJzdGVwXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2NlbmFyaW8tc3RlcHMtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJkZWxldGVTdGVwRnJvbVNjZW5hcmlvKHN0ZXApXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiaW5jU2NlbmFyaW9TdGVwUHJpb3JpdHkoc3RlcClcIj5cclxuICAgICAgICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYXJyb3dfdXA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImRlY1NjZW5hcmlvU3RlcFByaW9yaXR5KHN0ZXApXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X2Rvd248L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPGJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwic2F2ZSgpXCI+XHJcbiAgICAgICAgw5jCq8OYwqjDmMKqXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMHZ3fS5zY2VuYXJpby10b29sYmFye2hlaWdodDo2MHB4O21hcmdpbi1ib3R0b206MjBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3d0Vmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHR1bnN1YnNjcmliZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblx0c3RlcHMkOiBPYnNlcnZhYmxlPEd3dFN0ZXBbXT47XHJcblx0c3RlcHM6IEd3dFN0ZXBbXTtcclxuXHRzY2VuYXJpbyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEd3dFNjZW5hcmlvTW9kZWw+KG5ldyBHd3RTY2VuYXJpb01vZGVsKCkpO1xyXG5cdHNjZW5hcmlvcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEd3dFNjZW5hcmlvTW9kZWxbXT4oW10pO1xyXG5cdHNjZW5hcmlvRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0ZmVhdHVyZXMkOiBzdHJpbmdbXTtcclxuXHRAVmlld0NoaWxkcmVuKFN0ZXBMb2FkZXJEaXJlY3RpdmUpIHN0ZXBMb2FkZXJzOiBTdGVwTG9hZGVyRGlyZWN0aXZlW107XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgc2NlbmFyaW9TZXJ2aWNlOiBTY2VuYXJpb1NlcnZpY2UsXHJcblx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuXHRcdEBJbmplY3QoTUFUX0JPVFRPTV9TSEVFVF9EQVRBKSBwcml2YXRlIGRhdGE6IGFueVxyXG5cdCkge1xyXG5cdFx0dGhpcy5fY3JlYXRlX3NjZW5hcmlvX2Zvcm1fZ3JvdXAoKTtcclxuXHRcdHRoaXMuX2luaXRfZmVhdHVyZXNfbGlzdCgpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnN0ZXBzJCA9IHRoaXMuY29uZmlnU2VydmljZS5jb25maWckLnBpcGUobWFwKGNvbmZpZyA9PiBjb25maWcuc3RlcHMpLCB0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSkpO1xyXG5cdFx0dGhpcy5zdGVwcyQuc3Vic2NyaWJlKHN0ZXBzID0+ICh0aGlzLnN0ZXBzID0gc3RlcHMpKTtcclxuXHRcdHRoaXMuX2xvYWRfc2NlbmFyaW9fYW5kX21hcF9zY2VuYXJpb19zdGVwX3RvX3N0ZXBzX2NsYXNzKCk7XHJcblx0XHR0aGlzLnNjZW5hcmlvJC5zdWJzY3JpYmUocyA9PiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5uZXh0KCk7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XHJcblx0fVxyXG5cdHNhdmUoKSB7XHJcblx0XHRjb25zdCBzY2VuYXJpbyA9IHRoaXMuc2NlbmFyaW8kLmdldFZhbHVlKCk7XHJcblx0XHR0aGlzLnN0ZXBMb2FkZXJzLmZvckVhY2goc3RlcExvYWRlciA9PiB7XHJcblx0XHRcdHNjZW5hcmlvLnN0ZXBzLmZpbmQoc3RlcCA9PiBzdGVwLm5hbWUgPT09IHN0ZXBMb2FkZXIuc3RlcC5uYW1lKS5wYXJhbXMgPSBzdGVwTG9hZGVyLnBhcmFtcztcclxuXHRcdH0pO1xyXG5cdFx0c2NlbmFyaW8uZmVhdHVyZUlkID0gdGhpcy5zY2VuYXJpb0Zvcm1Hcm91cC52YWx1ZS5mZWF0dXJlSWQ7XHJcblx0XHRzY2VuYXJpby5uYW1lID0gdGhpcy5zY2VuYXJpb0Zvcm1Hcm91cC52YWx1ZS5uYW1lO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBzZXJ0U2NlbmFyaW9BY3Rpb24oc2NlbmFyaW8pKTtcclxuXHR9XHJcblx0YWRkU3RlcFRvU2NlbmFyaW8oc3RlcDogR3d0U3RlcCkge1xyXG5cdFx0Y29uc3Qgc2NlbmFyaW8gPSB0aGlzLnNjZW5hcmlvJC5nZXRWYWx1ZSgpO1xyXG5cdFx0c2NlbmFyaW8uc3RlcHMucHVzaChzdGVwKTtcclxuXHRcdHRoaXMuc2NlbmFyaW8kLm5leHQoc2NlbmFyaW8pO1xyXG5cdH1cclxuXHRkZWxldGVTdGVwRnJvbVNjZW5hcmlvKHN0ZXA6IEd3dFN0ZXApIHtcclxuXHRcdGNvbnN0IHNjZW5hcmlvID0gdGhpcy5zY2VuYXJpbyQuZ2V0VmFsdWUoKTtcclxuXHRcdHNjZW5hcmlvLnN0ZXBzLnNwbGljZShzY2VuYXJpby5zdGVwcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLm5hbWUgPT09IHN0ZXAubmFtZSksIDEpO1xyXG5cdFx0dGhpcy5zY2VuYXJpbyQubmV4dChzY2VuYXJpbyk7XHJcblx0fVxyXG5cdGRlY1NjZW5hcmlvU3RlcFByaW9yaXR5KHN0ZXA6IEd3dFN0ZXApIHsgfVxyXG5cdGluY1NjZW5hcmlvU3RlcFByaW9yaXR5KHN0ZXA6IEd3dFN0ZXApIHsgfVxyXG5cdGFkZE5ld1NjZW5hcmlvKCkge1xyXG5cdFx0Y29uc3Qgc2NlbmFyaW9zID0gdGhpcy5zY2VuYXJpb3MkLmdldFZhbHVlKCk7XHJcblx0XHRzY2VuYXJpb3MucHVzaChcclxuXHRcdFx0bmV3IEd3dFNjZW5hcmlvTW9kZWwoe1xyXG5cdFx0XHRcdGFuY2hvcklkOiB0aGlzLmRhdGEuYW5jaG9ySWRcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0XHR0aGlzLnNjZW5hcmlvcyQubmV4dChzY2VuYXJpb3MpO1xyXG5cdH1cclxuXHRhY3RpdmVTY2VuYXJpbyhzY2VuYXJpbzogR3d0U2NlbmFyaW9Nb2RlbCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRzY2VuYXJpby5zdGVwcyA9IHNjZW5hcmlvLnN0ZXBzLm1hcChzY2VuYXJpb1N0ZXAgPT4ge1xyXG5cdFx0XHRjb25zdCBfc3RlcCA9IHRoaXMuc3RlcHMuZmluZChzdGVwID0+IHN0ZXAuaWQgPT09IHNjZW5hcmlvU3RlcC5pZCk7XHJcblx0XHRcdGNvbnN0IHN0ZXAgPSBPYmplY3QuY3JlYXRlKF9zdGVwKTtcclxuXHRcdFx0c3RlcC5wYXJhbXMgPSBzY2VuYXJpb1N0ZXAucGFyYW1zO1xyXG5cdFx0XHRyZXR1cm4gc3RlcDtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zY2VuYXJpb0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHNjZW5hcmlvKTtcclxuXHRcdHNjZW5hcmlvLmFuY2hvcklkID0gdGhpcy5kYXRhLmFuY2hvcklkO1xyXG5cdFx0dGhpcy5zY2VuYXJpbyQubmV4dChzY2VuYXJpbyk7XHJcblx0fVxyXG5cclxuXHRfbG9hZF9zY2VuYXJpb19hbmRfbWFwX3NjZW5hcmlvX3N0ZXBfdG9fc3RlcHNfY2xhc3MoKSB7XHJcblx0XHR0aGlzLnNjZW5hcmlvU2VydmljZVxyXG5cdFx0XHQuZ2V0QW5jaG9yU2NlbmFyaW9zKHRoaXMuZGF0YS5hbmNob3JJZClcclxuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpKVxyXG5cdFx0XHQuc3Vic2NyaWJlKHNjZW5hcmlvcyA9PiB7XHJcblx0XHRcdFx0dGhpcy5zY2VuYXJpb3MkLm5leHQoc2NlbmFyaW9zKTtcclxuXHRcdFx0XHR0aGlzLmFjdGl2ZVNjZW5hcmlvKHNjZW5hcmlvc1swXSB8fCBuZXcgR3d0U2NlbmFyaW9Nb2RlbCgpKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdF9jcmVhdGVfc2NlbmFyaW9fZm9ybV9ncm91cCgpIHtcclxuXHRcdHRoaXMuc2NlbmFyaW9Gb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0ZmVhdHVyZUlkOiBuZXcgRm9ybUNvbnRyb2woKSxcclxuXHRcdFx0bmFtZTogbmV3IEZvcm1Db250cm9sKClcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfcmVzZXRfc2NlbmFyaW9fZm9ybV9ncm91cF9hbmRfcGF0Y2hfd2l0aF9hY3RpdmVfc2NlbmFyaW8oKSB7XHJcblx0XHR0aGlzLnNjZW5hcmlvRm9ybUdyb3VwLnJlc2V0KCk7XHJcblx0XHR0aGlzLnNjZW5hcmlvRm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy5zY2VuYXJpbyQuZ2V0VmFsdWUoKSk7XHJcblx0fVxyXG5cdF9pbml0X2ZlYXR1cmVzX2xpc3QoKSB7XHJcblx0XHR0aGlzLmZlYXR1cmVzJCA9IFtcIsOZwoXDmMKvw5vCjMOYwrHDm8KMw5jCqiDDmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKow5jCscOYwqfDmMKzw5jCp8OYwrMgw5jCr8OYwrPDmMKqw5jCscOYwrPDm8KMIMOZwofDmMKnw5vCjCDDmsKpw5jCp8OYwrHDmMKow5jCsVwiXTtcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gR3d0U3RlcFR5cGVzIHtcclxuXHRcIkdpdmVuXCIgPSBcIkdpdmVuXCIsXHJcblx0XCJXaGVuXCIgPSBcIldoZW5cIixcclxuXHRcIlRoZW5cIiA9IFwiVGhlblwiLFxyXG5cdFwiQW5kXCIgPSBcIkFuZFwiLFxyXG5cdFwiQnV0XCIgPSBcIkJ1dFwiXHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgT25Jbml0LCBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIHppcCwgU3ViamVjdCwgY29tYmluZUxhdGVzdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBNYXRCb3R0b21TaGVldCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5cclxuaW1wb3J0IHsgR3d0Vmlld0NvbXBvbmVudCB9IGZyb20gXCIuLi9nd3Qtdmlldy9nd3Qtdmlldy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcnVsZS5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBHd3RTY2VuYXJpb01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWxcIjtcclxuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjZW5hcmlvLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3d0U3RlcFR5cGVzIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc3RlcC10eXBlcy5lbnVtXCI7XHJcbmltcG9ydCB7IEd3dFN0ZXAgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zdGVwLm1vZGVsXCI7XHJcbmltcG9ydCB7IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ydWxlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IFwiW3J1bGVBbmNob3JdXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFJ1bGVBbmNob3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0dW5zdWJzY3JpYmUgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cdEBJbnB1dChcInJ1bGVBbmNob3JcIikgYW5jaG9ySWQ7XHJcblx0c3RlcHM6IEd3dFN0ZXBbXTtcclxuXHRhY3RpdmUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdGFjdGl2ZTogYm9vbGVhbjtcclxuXHRidXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG5cdGFuY2hvclNjZW5hcmlvcyQ6IE9ic2VydmFibGU8R3d0U2NlbmFyaW9Nb2RlbFtdPjtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc2NlbmFyaW9TZXJ2aWNlOiBTY2VuYXJpb1NlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcblx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcblx0XHRwcml2YXRlIGJvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldFxyXG5cdCkge1xyXG5cdFx0dGhpcy5hY3RpdmUkID0gdGhpcy5zdG9yZS5zZWxlY3QocyA9PiBzLnJ1bGUucnVsZUFuY2hvcnMuYWN0aXZlKS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSk7XHJcblx0XHR0aGlzLmFjdGl2ZSQuc3Vic2NyaWJlKGFjdGl2ZSA9PiAodGhpcy5hY3RpdmUgPSBhY3RpdmUpKTtcclxuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibmdzLXJ1bGUtYW5jaG9yXCIpO1xyXG5cdFx0dGhpcy5zdGVwcyA9IHRoaXMuY29uZmlnU2VydmljZS5jb25maWckLmdldFZhbHVlKCkuc3RlcHM7XHJcblx0fVxyXG5cclxuXHRASG9zdExpc3RlbmVyKFwibW91c2VlbnRlclwiKVxyXG5cdG9uTW91c2VFbnRlcigpIHtcclxuXHRcdGlmICghdGhpcy5hY3RpdmUpIHsgcmV0dXJuOyB9XHJcblx0XHR0aGlzLnNob3dBbmNob3IoKTtcclxuXHR9XHJcblxyXG5cdEBIb3N0TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIpXHJcblx0b25Nb3VzZUxlYXZlKCkge1xyXG5cdFx0aWYgKCF0aGlzLmFjdGl2ZSkgeyByZXR1cm47IH1cclxuXHRcdHRoaXMuaGlkZUFuY2hvcigpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzaG93QW5jaG9yKCkge1xyXG5cdFx0dGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaG93LWFuY2hvclwiKTtcclxuXHR9XHJcblx0cHJpdmF0ZSBoaWRlQW5jaG9yKCkge1xyXG5cdFx0dGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWFuY2hvclwiKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gVE9ETzogcmVtb3ZlXHJcblx0XHQvLyB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTaG93QW5jaG9yc0FjdGlvbigpKTtcclxuXHJcblx0XHR0aGlzLmFuY2hvclNjZW5hcmlvcyQgPSB0aGlzLnNjZW5hcmlvU2VydmljZVxyXG5cdFx0XHQuZ2V0QW5jaG9yU2NlbmFyaW9zKHRoaXMuYW5jaG9ySWQpIC8vIFRPRE86IHJlcGxhY2Ugc2VydmljZSBjYWxsIHdpdGggbmdyeCBhY3Rpb25cclxuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpLCBmaWx0ZXIoc2NlbmFyaW8gPT4gc2NlbmFyaW8gIT09IHVuZGVmaW5lZCkpO1xyXG5cdFx0dGhpcy5hY3RpdmUkLnN1YnNjcmliZShhY3RpdmUgPT4ge1xyXG5cdFx0XHRpZiAoYWN0aXZlKSB7IHRoaXMuX2FjdGl2YXRlX2FuY2hvcigpOyB9IGVsc2UgeyB0aGlzLl9kZWFjdGl2YXRlX2FuY2hvcigpOyB9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuYW5jaG9yU2NlbmFyaW9zJC5zdWJzY3JpYmUoc2NlbmFyaW9zID0+IHtcclxuXHRcdFx0c2NlbmFyaW9zLmZvckVhY2goc2NlbmFyaW8gPT4ge1xyXG5cdFx0XHRcdHNjZW5hcmlvLnN0ZXBzID0gc2NlbmFyaW8uc3RlcHMubWFwKHNjZW5hcmlvU3RlcCA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBzdGVwID0gdGhpcy5zdGVwcy5maW5kKHN0ZXAgPT4gc3RlcC5pZCA9PT0gc2NlbmFyaW9TdGVwLmlkKTtcclxuXHRcdFx0XHRcdGNvbnN0IF9zdGVwID0gT2JqZWN0LmNyZWF0ZShzdGVwKTtcclxuXHRcdFx0XHRcdF9zdGVwLnBhcmFtcyA9IHNjZW5hcmlvU3RlcC5wYXJhbXM7XHJcblx0XHRcdFx0XHRyZXR1cm4gX3N0ZXA7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRoaXMuX2RvX3NjZW5hcmlvKHNjZW5hcmlvKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLm5leHQoKTtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUuY29tcGxldGUoKTtcclxuXHR9XHJcblx0X2FjdGl2YXRlX2FuY2hvcigpIHtcclxuXHRcdHRoaXMuX2NyZWF0ZV9hbmNob3IoKTtcclxuXHRcdHRoaXMuX3NldF9hY3RpdmVfY2xhc3NfdG9faG9zdCgpO1xyXG5cdH1cclxuXHRfZGVhY3RpdmF0ZV9hbmNob3IoKSB7XHJcblx0XHR0aGlzLl9yZW1vdmVfYW5jaG9yKCk7XHJcblx0XHR0aGlzLl9yZW1vdmVfYWN0aXZlX2NsYXNzX3RvX2hvc3QoKTtcclxuXHR9XHJcblx0X3NldF9hY3RpdmVfY2xhc3NfdG9faG9zdCgpIHtcclxuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYW5jaG9yLWFjdGl2ZVwiKTtcclxuXHR9XHJcblx0X3JlbW92ZV9hY3RpdmVfY2xhc3NfdG9faG9zdCgpIHtcclxuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYW5jaG9yLWFjdGl2ZVwiKTtcclxuXHR9XHJcblx0X2NyZWF0ZV9hbmNob3IoKSB7XHJcblx0XHR0aGlzLmJ1dHRvbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHRcdHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuZ3MtcnVsZS1hbmNob3ItYnV0dG9uXCIsIFwibWF0LWljb24tYnV0dG9uXCIpO1xyXG5cdFx0dGhpcy5idXR0b24uc2V0QXR0cmlidXRlKFwibWF0LWljb24tYnV0dG9uXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdHRoaXMuYm90dG9tU2hlZXQub3BlbihHd3RWaWV3Q29tcG9uZW50LCB7XHJcblx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0YW5jaG9ySWQ6IHRoaXMuYW5jaG9ySWRcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHBhbmVsQ2xhc3M6IFwibWFnZW50YS10aGVtZVwiXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRjb25zdCBtYXRpY29uID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KFwibWF0LWljb25cIik7XHJcblx0XHRtYXRpY29uLmNsYXNzTGlzdC5hZGQoXCJtYXQtaWNvblwiLCBcIm1hdGVyaWFsLWljb25zXCIpO1xyXG5cdFx0Y29uc3QgaWNvbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dChcInNldHRpbmdzXCIpO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChtYXRpY29uLCBpY29uKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5idXR0b24sIG1hdGljb24pO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYnV0dG9uKTtcclxuXHR9XHJcblx0X3JlbW92ZV9hbmNob3IoKSB7XHJcblx0XHRpZiAoIXRoaXMuYnV0dG9uKSB7IHJldHVybjsgfVxyXG5cdFx0dGhpcy5idXR0b24ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmJ1dHRvbik7XHJcblx0fVxyXG5cdF9kb19zY2VuYXJpbyhfc2NlbmFyaW86IEd3dFNjZW5hcmlvTW9kZWwpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0Y29uc3Qgc2NlbmFyaW8gPSBfc2NlbmFyaW87XHJcblx0XHRjb25zdCBnaXZlblN0ZXBJbnRlcnByZXRvcnMgPSBzY2VuYXJpby5zdGVwc1xyXG5cdFx0XHQuZmlsdGVyKHN0ZXAgPT4gc3RlcC50eXBlID09PSBHd3RTdGVwVHlwZXMuR2l2ZW4pXHJcblx0XHRcdC5tYXAoc3RlcCA9PiBzdGVwLmludGVycGVyYXRvcihzdGVwLnBhcmFtcykpO1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRjb21iaW5lTGF0ZXN0KGdpdmVuU3RlcEludGVycHJldG9ycylcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpLFxyXG5cdFx0XHRcdG1hcCgodmFsdWVzOiBib29sZWFuW10pID0+IHZhbHVlcy5ldmVyeSh2YWx1ZSA9PiB2YWx1ZSA9PT0gdHJ1ZSkpLFxyXG5cdFx0XHRcdHN3aXRjaE1hcChnaXZlblJlc3VsdCA9PiB7XHJcblx0XHRcdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0XHRcdGlmIChnaXZlblJlc3VsdCkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCB0aGVuU3RlcEludGVycHJldG9ycyA9IHNjZW5hcmlvLnN0ZXBzXHJcblx0XHRcdFx0XHRcdFx0LmZpbHRlcihzdGVwID0+IHN0ZXAudHlwZSA9PT0gR3d0U3RlcFR5cGVzLlRoZW4pXHJcblx0XHRcdFx0XHRcdFx0Lm1hcChzdGVwID0+IHN0ZXAuaW50ZXJwZXJhdG9yKHN0ZXAucGFyYW1zLCB0aGlzLmVsKSk7XHJcblx0XHRcdFx0XHRcdHJldHVybiBjb21iaW5lTGF0ZXN0XHJcblx0XHRcdFx0XHRcdFx0LmFwcGx5KG51bGwsIHRoZW5TdGVwSW50ZXJwcmV0b3JzKVxyXG5cdFx0XHRcdFx0XHRcdC5waXBlKG1hcCgodmFsdWVzOiBib29sZWFuW10pID0+IHZhbHVlcy5ldmVyeSh2YWx1ZSA9PiB2YWx1ZSA9PT0gdHJ1ZSkpKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7IHJldHVybiBvZihmYWxzZSk7IH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4geyB9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLCBTY2VuYXJpb3NMaXN0U3RhcnRBY3Rpb24sIFNjZW5hcmlvRmVjaGVkQWN0aW9uIH0gZnJvbSBcIi4vc2NlbmFyaW8tZGIuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2NlbmFyaW8uc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9zRGJFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgc2VydmljZTogU2NlbmFyaW9TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRFZGl0UHJvZmlsZVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1QpXHJcblx0XHQucGlwZShtYXAoKCkgPT4gbmV3IFNjZW5hcmlvc0xpc3RTdGFydEFjdGlvbigpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydFNjZW5hcmlvJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlVQU0VSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKHNjZW5hcmlvID0+IHRoaXMuc2VydmljZS51cHNlcnQoc2NlbmFyaW8pKSxcclxuXHRcdFx0bWFwKHNjZW5hcmlvID0+IG5ldyBTY2VuYXJpb0ZlY2hlZEFjdGlvbihzY2VuYXJpbykpXHJcblx0XHQpO1xyXG5cclxuXHQvLyBARWZmZWN0KClcclxuXHQvLyBHZXRTY2VuYXJpbyQgPSB0aGlzLmFjdGlvbnMkXHJcblx0Ly8gXHQub2ZUeXBlKFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5HRVRfU0NFTkFSSU8pXHJcblx0Ly8gXHQucGlwZShcclxuXHQvLyBcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0Ly8gXHRcdHN3aXRjaE1hcChpZCA9PiB0aGlzLnNlcnZpY2UuZ2V0KGlkKSksXHJcblx0Ly8gXHRcdG1hcChydWxlID0+IG5ldyBTY2VuYXJpb0ZlY2hlZEFjdGlvbihydWxlKSlcclxuXHQvLyBcdCk7XHJcblxyXG5cdC8vIEBFZmZlY3QoKVxyXG5cdC8vIGdldF9ydWxlc19saXN0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHQvLyBcdC5vZlR5cGUoU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUX1NUQVJUKVxyXG5cdC8vIFx0LnBpcGUoXHJcblx0Ly8gXHRcdHN3aXRjaE1hcCgoZGF0YTogYW55KSA9PiB0aGlzLnNlcnZpY2UuZ2V0TGlzdCgpKSxcclxuXHQvLyBcdFx0bWFwKHJlcyA9PiBuZXcgU2NlbmFyaW9zTGlzdFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0Ly8gXHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IFNjZW5hcmlvc0xpc3RGYWlsZWRBY3Rpb24oKSkpXHJcblx0Ly8gXHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVzTGlzdEFjdGlvblR5cGVzLCBSdWxlc0xpc3RTdGFydEFjdGlvbiB9IGZyb20gXCIuL3J1bGUtZGIuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUnVsZXNMaXN0RWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+KSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRFZGl0UHJvZmlsZVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVCkubWFwKCgpID0+IG5ldyBSdWxlc0xpc3RTdGFydEFjdGlvbigpKTtcclxuXHJcblx0Ly8gQEVmZmVjdCgpXHJcblx0Ly8gR2V0UnVsZSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0Ly8gXHQub2ZUeXBlKFJ1bGVzTGlzdEFjdGlvblR5cGVzLkdFVF9SVUxFKVxyXG5cdC8vIFx0LnBpcGUoXHJcblx0Ly8gXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdC8vIFx0XHRzd2l0Y2hNYXAoaWQgPT4gdGhpcy5zZXJ2aWNlLmdldChpZCkpLFxyXG5cdC8vIFx0XHRtYXAocnVsZSA9PiBuZXcgUnVsZUZlY2hlZEFjdGlvbihydWxlKSlcclxuXHQvLyBcdCk7XHJcblxyXG5cdC8vIEBFZmZlY3QoKVxyXG5cdC8vIGdldF9ydWxlc19saXN0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHQvLyBcdC5vZlR5cGUoUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9TVEFSVClcclxuXHQvLyBcdC5waXBlKFxyXG5cdC8vIFx0XHRzd2l0Y2hNYXAoKGRhdGE6IGFueSkgPT4gdGhpcy5zZXJ2aWNlLmdldExpc3QoKSksXHJcblx0Ly8gXHRcdG1hcChyZXMgPT4gbmV3IFJ1bGVzTGlzdFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0Ly8gXHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IFJ1bGVzTGlzdEZhaWxlZEFjdGlvbigpKSlcclxuXHQvLyBcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IFNob3dBbmNob3JzQWN0aW9uLCBIaWRlQW5jaG9yc0FjdGlvbiB9IGZyb20gXCIuLi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJnd3QtbW9kZS1idXR0b25cIixcclxuXHR0ZW1wbGF0ZTogYCAgICA8YnV0dG9uICpuZ0lmPVwiIShoYXZlUGVybWlzc2lvbiQgfCBhc3luYylcIiBjbGFzcz1cImJ0blwiIG1hdC1taW5pLWZhYiB0eXBlPVwiYnV0dG9uXCIgcm91dGVyTGluaz1cImF1dGgvZnJvbnRlbmQvc2lnbmluXCIgZnhGbGV4PVwibm9ncm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgPG1hdC1pY29uPmZpbmdlcnByaW50PC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDxidXR0b24gKm5nSWY9XCJoYXZlUGVybWlzc2lvbiQgfCBhc3luY1wiIGNsYXNzPVwiYnRuXCIgbWF0LW1pbmktZmFiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidG9nZ2xlQW5jaG9ycygpXCIgZnhGbGV4PVwibm9ncm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgPG1hdC1pY29uPnNldHRpbmdzPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPmAsXHJcblx0c3R5bGVzOiBbYC5idG57cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjI1cHg7bGVmdDoyNXB4O3otaW5kZXg6M31gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3d0TW9kZUJ1dHRvbkNvbXBvbmVudCB7XHJcblx0YW5jaG9yc01vZGU6IGJvb2xlYW47XHJcblx0aGF2ZVBlcm1pc3Npb24kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcclxuXHRcdHRoaXMuYW5jaG9yc01vZGUgPSBmYWxzZTtcclxuXHRcdHRoaXMuaGF2ZVBlcm1pc3Npb24kID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlKTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZUFuY2hvcnMoKSB7XHJcblx0XHRpZiAodGhpcy5hbmNob3JzTW9kZSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2hvd0FuY2hvcnNBY3Rpb24oKSk7XHJcblx0XHRcdHRoaXMuYW5jaG9yc01vZGUgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgSGlkZUFuY2hvcnNBY3Rpb24oKSk7XHJcblx0XHRcdHRoaXMuYW5jaG9yc01vZGUgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9vZlwiO1xyXG5cclxuaW1wb3J0IHsgUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vcnVsZS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3J1bGUucmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJ1bGVTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge31cclxuXHJcblx0Ly8gYWRkKCk6IE9ic2VydmFibGU8VGVzdE1vZGVsPiB7XHJcblx0Ly8gXHQvLyBjb25zdCBtb2RlbCA9IG5ldyBBZGRSdWxlQXBpTW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHQvLyBcdC8vIHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHQvLyBcdC8vIFx0LmZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy5hZGRSdWxlICE9IFwiXCIpXHJcblx0Ly8gXHQvLyBcdC50YWtlKDEpXHJcblx0Ly8gXHQvLyBcdC5zd2l0Y2hNYXAoY29uZmlnID0+IHRoaXMuaHR0cC5wb3N0KGNvbmZpZy5lbmRwb2ludHMuYWRkUnVsZSwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSkpXHJcblx0Ly8gXHQvLyBcdC5tYXAoKHJlc3BvbnNlOiBBZGRSdWxlQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdCk7XHJcblx0Ly8gfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdFRhYnNNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRNYXRUYWJsZU1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVNb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi9ydWxlLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vcnVsZS1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBSdWxlUmVkdWNlcnMgfSBmcm9tIFwiLi9ydWxlLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFJ1bGVDb21wb25lbnQgfSBmcm9tIFwiLi9ydWxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSdWxlQW5jaG9yRGlyZWN0aXZlIH0gZnJvbSBcIi4vcnVsZS1hbmNob3IvcnVsZS1hbmNob3IuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IEd3dFZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9nd3Qtdmlldy9nd3Qtdmlldy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU3RlcExvYWRlckRpcmVjdGl2ZSB9IGZyb20gXCIuL3N0ZXAtbG9hZGVyL3N0ZXAtbG9hZGVyLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBTY2VuYXJpb3NEYkVmZmVjdHMgfSBmcm9tIFwiLi9kYi9zY2VuYXJpby1kYi5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFJ1bGVzTGlzdEVmZmVjdHMgfSBmcm9tIFwiLi9kYi9ydWxlLWRiLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgR3d0TW9kZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCIuL21vZGUtYnV0dG9uL21vZGUtYnV0dG9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSdWxlU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3J1bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9ydWxlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zY2VuYXJpby5zZXJ2aWNlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRcdE1hdFRhYmxlTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRUYWJzTW9kdWxlLFxyXG5cdFx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdEJyb3dzZXJBbmltYXRpb25zTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFsgUnVsZUNvbXBvbmVudCwgUnVsZUFuY2hvckRpcmVjdGl2ZSwgR3d0Vmlld0NvbXBvbmVudCwgU3RlcExvYWRlckRpcmVjdGl2ZSwgR3d0TW9kZUJ1dHRvbkNvbXBvbmVudCBdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogWyBHd3RWaWV3Q29tcG9uZW50IF0sXHJcblx0ZXhwb3J0czogWyBSdWxlQW5jaG9yRGlyZWN0aXZlLCBHd3RNb2RlQnV0dG9uQ29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJ1bGVNb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IFJ1bGVNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290UnVsZU1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbXHJcblx0XHRcdFx0eyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIHx8IHt9IH0sXHJcblx0XHRcdFx0UnVsZVNlcnZpY2UsXHJcblx0XHRcdFx0UnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0XHRcdFNjZW5hcmlvU2VydmljZVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRSdWxlTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcInJ1bGVcIiwgUnVsZVJlZHVjZXJzKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbIFJ1bGVzTGlzdEVmZmVjdHMsIFNjZW5hcmlvc0RiRWZmZWN0cyBdKSxcclxuXHRcdFJvdXRpbmdNb2R1bGVcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFsgUnVsZU1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290UnVsZU1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJDb21wb25lbnQiLCJSb3V0ZXJNb2R1bGUiLCJpbml0aWFsU3RhdGUiLCJmcm9tUnVsZUFuY2hvci5SZWR1Y2VyIiwiZnJvbVJ1bGVEYkFuY2hvci5yZWR1Y2VyIiwiZnJvbVNjZW5hcmlvRGJBbmNob3IucmVkdWNlciIsInN0b3JlIiwiQmVoYXZpb3JTdWJqZWN0IiwiSW5qZWN0YWJsZSIsIkluamVjdCIsIlN0b3JlIiwiSW5qZWN0b3IiLCJEaXJlY3RpdmUiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJWaWV3Q29udGFpbmVyUmVmIiwiSW5wdXQiLCJWaWV3Q2hpbGQiLCJodHRwIiwibWFwIiwic2hhcmUiLCJzdHJpbmdUZW1wbGF0ZSIsImZpbHRlciIsInN0YXJ0V2l0aCIsIkh0dHBDbGllbnQiLCJTdWJqZWN0IiwidGFrZVVudGlsIiwiRm9ybUdyb3VwIiwiRm9ybUNvbnRyb2wiLCJNQVRfQk9UVE9NX1NIRUVUX0RBVEEiLCJWaWV3Q2hpbGRyZW4iLCJjb21iaW5lTGF0ZXN0Iiwic3dpdGNoTWFwIiwib2YiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiTWF0Qm90dG9tU2hlZXQiLCJIb3N0TGlzdGVuZXIiLCJBY3Rpb25zIiwiRWZmZWN0IiwiZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIiwiTmdNb2R1bGUiLCJIdHRwQ2xpZW50TW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJNYXRFeHBhbnNpb25Nb2R1bGUiLCJNYXRTbmFja0Jhck1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiLCJNYXRDYXJkTW9kdWxlIiwiTWF0Q2hlY2tib3hNb2R1bGUiLCJNYXRUYWJsZU1vZHVsZSIsIk1hdFNlbGVjdE1vZHVsZSIsIk1hdElucHV0TW9kdWxlIiwiTWF0Rm9ybUZpZWxkTW9kdWxlIiwiTWF0VGFic01vZHVsZSIsIk1hdERpdmlkZXJNb2R1bGUiLCJGbGV4TGF5b3V0TW9kdWxlIiwiTWF0UmFkaW9Nb2R1bGUiLCJNYXRTbGlkZVRvZ2dsZU1vZHVsZSIsIlJlYWN0aXZlRm9ybXNNb2R1bGUiLCJCcm93c2VyQW5pbWF0aW9uc01vZHVsZSIsIlN0b3JlTW9kdWxlIiwiRWZmZWN0c01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBZ0JBLFFBQWEscUJBQXFCLEdBQXFCO1FBQ3RELFNBQVMsRUFBRTtZQUNWLE1BQU0sRUFBRSxtQkFBbUI7WUFDM0IsR0FBRyxFQUFFLDZDQUE2QztTQUNsRDtRQUNELFdBQVcsRUFBRSxFQUFFO1FBQ2YsR0FBRyxFQUFFO1lBQ0osVUFBVSxFQUFFLEtBQUs7WUFDakIsZUFBZSxFQUFFLDZCQUE2QjtTQUM5QztLQUNELENBQUM7O0FBQ0YsUUFBYSxtQkFBbUIsR0FBRyxJQUFJQSxtQkFBYyxDQUFtQixrQkFBa0IsQ0FBQzs7Ozs7O0FDM0IzRjtRQVNDO1NBQWdCOzs7O1FBRWhCLGdDQUFROzs7WUFBUixlQUFhOztvQkFUYkMsY0FBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUUsbUdBRUo7cUJBQ047Ozs7NEJBUEQ7Ozs7Ozs7QUNDQTtJQUlBLElBQU0sTUFBTSxHQUFXO1FBQ3RCO1lBQ0MsSUFBSSxFQUFFLE1BQU07WUFDWixTQUFTLEVBQUUsYUFBYTtTQUV4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