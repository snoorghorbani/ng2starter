(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@ngrx/store'), require('rxjs/BehaviorSubject'), require('@angular/common/http'), require('rxjs/Rx'), require('rxjs/operators'), require('rxjs'), require('@angular/material'), require('@angular/forms'), require('@ngrx/effects'), require('@angular/common'), require('@angular/flex-layout'), require('@angular/platform-browser/animations')) :
    typeof define === 'function' && define.amd ? define('@soushians/rule', ['exports', '@angular/core', '@angular/router', '@ngrx/store', 'rxjs/BehaviorSubject', '@angular/common/http', 'rxjs/Rx', 'rxjs/operators', 'rxjs', '@angular/material', '@angular/forms', '@ngrx/effects', '@angular/common', '@angular/flex-layout', '@angular/platform-browser/animations'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.rule = {}),global.ng.core,global.ng.router,null,global.rxjs.BehaviorSubject,global.ng.common.http,global.rxjs.Rx,global.rxjs.operators,global.rxjs,global.ng.material,global.ng.forms,null,global.ng.common,global.ng['flex-layout'],global.ng.platformBrowser.animations));
}(this, (function (exports,i0,router,i2,BehaviorSubject,i1,Rx,operators,rxjs,material,forms,effects,common,flexLayout,animations) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
        endpoints: {},
        stepClasses: []
    };
    var /** @type {?} */ MODULE_CONFIG_TOKEN = new i0.InjectionToken("RuleModuleConfig");

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
            { type: i0.Component, args: [{
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
    var RuleConfigurationService = (function () {
        function RuleConfigurationService(configFile, store, injector) {
            var _this = this;
            this.store = store;
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
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        RuleConfigurationService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
                { type: i2.Store },
                { type: i0.Injector }
            ];
        };
        return RuleConfigurationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RuleService = (function () {
        function RuleService(http, store, configurationService) {
            this.http = http;
            this.store = store;
            this.configurationService = configurationService;
        }
        RuleService.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        RuleService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i2.Store },
                { type: RuleConfigurationService }
            ];
        };
        return RuleService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

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
            { type: i0.Directive, args: [{
                        selector: "[rule-step-loader]"
                    },] },
        ];
        /** @nocollapse */
        StepLoaderDirective.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver },
                { type: i0.ViewContainerRef }
            ];
        };
        StepLoaderDirective.propDecorators = {
            step: [{ type: i0.Input }],
            component: [{ type: i0.ViewChild, args: ["container", { read: i0.ViewContainerRef },] }]
        };
        return StepLoaderDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ScenarioService = (function () {
        function ScenarioService(http, store, configurationService) {
            this.http = http;
            this.store = store;
            this.configurationService = configurationService;
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
                    .post("http://localhost:3000/api/gwt/scenario", model.getRequsetBody())
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
                    .get("http://localhost:3000/api/gwt/anchor/" + anchorId + "/scenarios")
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
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        ScenarioService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i2.Store },
                { type: RuleConfigurationService }
            ];
        };
        /** @nocollapse */ ScenarioService.ngInjectableDef = i0.defineInjectable({ factory: function ScenarioService_Factory() { return new ScenarioService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(RuleConfigurationService)); }, token: ScenarioService, providedIn: "root" });
        return ScenarioService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GwtViewComponent = (function () {
        function GwtViewComponent(store, configService, scenarioService, injector, data) {
            this.store = store;
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
            { type: i0.Component, args: [{
                        selector: "app-gwt-view",
                        template: "<div fxLayout=\"row\" fxLayoutGap=\"25px\">\n<div fxFlex=\"400px\" fxLayout=\"column\" fxLayoutGap=\"15px\">\n  <div fxLayout=\"row wrap\">\n    <mat-form-field appearance=\"fill\" fxFlex=\"100\">\n      <input matInput placeholder=\"\u0641\u06CC\u0644\u062A\u0631\">\n      <mat-icon matSuffix>search</mat-icon>\n    </mat-form-field>\n    <mat-checkbox fxFlex class=\"example-margin\">\u0641\u0631\u0636 \u06A9\u0646\u06CC\u062F</mat-checkbox>\n    <mat-checkbox fxFlex class=\"example-margin\">\u0647\u0646\u06AF\u0627\u0645\u06CC \u06A9\u0647</mat-checkbox>\n    <mat-checkbox fxFlex class=\"example-margin\">\u0622\u0646\u06AF\u0627\u0647</mat-checkbox>\n  </div>\n    <mat-card class=\"steps-item\" *ngFor=\"let step of steps$ | async\">\n      <span class=\"step-text\">\n        {{step.description}}\n      </span>\n      <button mat-icon-button class=\"add-button\" (click)=\"addStepToScenario(step)\">\n        <mat-icon>arrow_back_ios</mat-icon>\n      </button>\n    </mat-card>\n</div>\n\n<div fxFlex=\"700px\">\n  <div fxLayout=\"row wrap\" fxLayoutGap=\"25px\" fxLayoutAlign=\"center center\" class=\"scenario-toolbar\">\n    <div fxFlex>\n        <mat-form-field class=\"fit\">\n            <mat-select placeholder=\"\u0648\u0650\u06CC\u0698\u06AF\u06CC\" (selectionChange)=\"activeScenario($event.value)\">\n                  <mat-option *ngFor=\"let scenario of scenarios$ | async\" [value]=\"scenario\">\n                {{ scenario.featureId }} : {{ scenario.name }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n    </div>\n    <button fxFlex=\"nogrow\" mat-raised-button color=\"primary\" (click)=\"addNewScenario()\">\n       \u062B\u0628\u062A \u0633\u0646\u0627\u0631\u06CC\u0648 \u062C\u062F\u06CC\u062F\n    </button>\n  </div>\n  <div fxLayout=\"column\" fxLayoutGap=\"15px\">\n    <div fxFlex=\"100\" fxLayout=\"row\" fxLayoutGap=\"25px\" [formGroup]=\"scenarioFormGroup\">\n      <mat-form-field fxFlex=\"50\">\n        <mat-select placeholder=\"\u0648\u06CC\u0698\u06AF\u06CC\" formControlName=\"featureId\">\n          <mat-option *ngFor=\"let feature of features$\" [value]=\"feature\">\n            {{ feature }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field fxFlex=\"50\">\n        <input matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\n      </mat-form-field>\n    </div>\n    <ng-container *ngFor=\"let step of (scenario$ | async).steps\">\n      <div class=\"scenario-steps-item\">\n        <ng-container rule-step-loader [step]=\"step\"></ng-container>\n        <div class=\"scenario-steps-action\">\n          <button mat-icon-button (click)=\"deleteStepFromScenario(step)\">\n            <mat-icon>delete</mat-icon>\n          </button>\n          <button mat-icon-button (click)=\"incScenarioStepPriority(step)\">\n            <mat-icon>keyboard_arrow_up</mat-icon>\n          </button>\n          <button mat-icon-button (click)=\"decScenarioStepPriority(step)\">\n            <mat-icon>keyboard_arrow_down</mat-icon>\n          </button>\n        </div>\n      </div>\n    </ng-container>\n      <button fxFlex=\"nogrow\" mat-raised-button color=\"primary\" (click)=\"save()\">\n        \u062B\u0628\u062A\n      </button>\n    </div>\n  </div>\n</div>",
                        styles: [":host{width:100vw}.scenario-toolbar{height:60px;margin-bottom:20px}"]
                    },] },
        ];
        /** @nocollapse */
        GwtViewComponent.ctorParameters = function () {
            return [
                { type: i2.Store },
                { type: RuleConfigurationService },
                { type: ScenarioService },
                { type: i0.Injector },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_BOTTOM_SHEET_DATA,] }] }
            ];
        };
        GwtViewComponent.propDecorators = {
            stepLoaders: [{ type: i0.ViewChildren, args: [StepLoaderDirective,] }]
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
        function RuleAnchorDirective(scenarioService, configService, store, el, renderer, bottomSheet) {
            var _this = this;
            this.scenarioService = scenarioService;
            this.configService = configService;
            this.store = store;
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
                rxjs.zip
                    .apply(null, givenStepInterpretors)
                    .pipe(operators.takeUntil(this.unsubscribe), operators.map(function (values) { return values.every(function (value) { return value === true; }); }), operators.switchMap(function (givenResult) {
                    if (givenResult) {
                        var /** @type {?} */ thenStepInterpretors = scenario.steps
                            .filter(function (step) { return step.type == GwtStepTypes.Then; })
                            .map(function (step) { return step.interperator(step.params, _this.el); });
                        return rxjs.zip
                            .apply(null, thenStepInterpretors)
                            .pipe(operators.map(function (values) { return values.every(function (value) { return value === true; }); }));
                    }
                    else
                        rxjs.of(false);
                }))
                    .subscribe(function () { });
            };
        RuleAnchorDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: "[ruleAnchor]"
                    },] },
        ];
        /** @nocollapse */
        RuleAnchorDirective.ctorParameters = function () {
            return [
                { type: ScenarioService },
                { type: RuleConfigurationService },
                { type: i2.Store },
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: material.MatBottomSheet }
            ];
        };
        RuleAnchorDirective.propDecorators = {
            anchorId: [{ type: i0.Input, args: ["ruleAnchor",] }],
            onMouseEnter: [{ type: i0.HostListener, args: ["mouseenter",] }],
            onMouseLeave: [{ type: i0.HostListener, args: ["mouseleave",] }]
        };
        return RuleAnchorDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

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
            { type: i0.Injectable },
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
            { type: i0.Injectable },
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
        function GwtModeButtonComponent(store) {
            this.store = store;
            this.anchorsMode = false;
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
            { type: i0.Component, args: [{
                        selector: "gwt-mode-button",
                        template: "\n    <button class=\"btn\" mat-fab type=\"button\" (click)=\"toggleAnchors()\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>settings</mat-icon>\n    </button>",
                        styles: [".btn{position:fixed;bottom:25px;right:25px;z-index:3}"]
                    },] },
        ];
        /** @nocollapse */
        GwtModeButtonComponent.ctorParameters = function () {
            return [
                { type: i2.Store }
            ];
        };
        return GwtModeButtonComponent;
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
                        RuleConfigurationService
                    ]
                };
            };
        RuleModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.HttpClientModule,
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
            { type: i0.NgModule, args: [{
                        imports: [
                            RuleModule,
                            i2.StoreModule.forFeature("rule", RuleReducers),
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

    exports.GwtStepTypes = GwtStepTypes;
    exports.ShowAnchorsAction = ShowAnchorsAction;
    exports.HideAnchorsAction = HideAnchorsAction;
    exports.RuleModule = RuleModule;
    exports.RootRuleModule = RootRuleModule;
    exports.MODULE_DEFAULT_CONFIG = MODULE_DEFAULT_CONFIG;
    exports.MODULE_CONFIG_TOKEN = MODULE_CONFIG_TOKEN;
    exports.ɵo = RulesListEffects;
    exports.ɵm = reducer;
    exports.ɵp = ScenariosDbEffects;
    exports.ɵn = reducer$1;
    exports.ɵi = GwtViewComponent;
    exports.ɵk = GwtModeButtonComponent;
    exports.ɵl = Reducer;
    exports.ɵb = RuleAnchorDirective;
    exports.ɵq = RoutingModule;
    exports.ɵa = RuleComponent;
    exports.ɵe = RuleReducers;
    exports.ɵh = RuleConfigurationService;
    exports.ɵr = RuleService;
    exports.ɵg = RuleConfigurationService;
    exports.ɵc = ScenarioService;
    exports.ɵj = StepLoaderDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXJ1bGUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3J1bGUuY29uZmlnLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3J1bGUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3J1bGUtcm91dGluZy5tb2R1bGUudHMiLG51bGwsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL3J1bGUtYW5jaG9yL3J1bGUtYW5jaG9yLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvc2VydmljZXMvcnVsZS1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvc2VydmljZXMvcnVsZS5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvZGIvc2NlbmFyaW8tZGIuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9zdGVwLWxvYWRlci9zdGVwLWxvYWRlci5kaXJlY3RpdmUudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvc2VydmljZXMvc2NlbmFyaW8uc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9nd3Qtdmlldy9nd3Qtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvbW9kZWxzL2d3dC1zdGVwLXR5cGVzLmVudW0udHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvcnVsZS1hbmNob3IvcnVsZS1hbmNob3IuZGlyZWN0aXZlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL2RiL3J1bGUtZGIuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9kYi9ydWxlLWRiLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvZGIvc2NlbmFyaW8tZGIucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9ydWxlLnJlZHVjZXJzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL2RiL3NjZW5hcmlvLWRiLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvcnVsZS9saWIvZGIvcnVsZS1kYi5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3J1bGUvbGliL21vZGUtYnV0dG9uL21vZGUtYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9ydWxlL2xpYi9ydWxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEd3dFN0ZXAgfSBmcm9tIFwiLi9tb2RlbHMvZ3d0LXN0ZXAubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUnVsZU1vZHVsZUNvbmZpZyB7XHJcblx0ZW5kcG9pbnRzPzoge307XHJcblx0c3RlcENsYXNzZXM/OiBUeXBlPEd3dFN0ZXA+W107XHJcblx0c3RlcHM/OiBHd3RTdGVwW107XHJcbn1cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogUnVsZU1vZHVsZUNvbmZpZyA9IHtcclxuXHRlbmRwb2ludHM6IHt9LFxyXG5cdHN0ZXBDbGFzc2VzOiBbXVxyXG59O1xyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxSdWxlTW9kdWxlQ29uZmlnPihcIlJ1bGVNb2R1bGVDb25maWdcIik7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImFwcC1ydWxlXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFJ1bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVDb21wb25lbnQgfSBmcm9tIFwiLi9ydWxlLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogXCJydWxlXCIsXHJcblx0XHRjb21wb25lbnQ6IFJ1bGVDb21wb25lbnRcclxuXHRcdC8vIGNoaWxkcmVuOiBbIHt9IF1cclxuXHR9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IHlbb3BbMF0gJiAyID8gXCJyZXR1cm5cIiA6IG9wWzBdID8gXCJ0aHJvd1wiIDogXCJuZXh0XCJdKSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFswLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gUnVsZUFuY2hvcnNBY3Rpb25UeXBlcyB7XHJcblx0U0hPV19BTkNIT1JTID0gXCJbUlVMRV1bQU5DSE9SU10gU0hPV19BTkNIT1JTXCIsXHJcblx0SElERV9BTkNIT1JTID0gXCJbUlVMRV1bQU5DSE9SU10gSElERV9BTkNIT1JTXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNob3dBbmNob3JzQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZUFuY2hvcnNBY3Rpb25UeXBlcy5TSE9XX0FOQ0hPUlM7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIaWRlQW5jaG9yc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVBbmNob3JzQWN0aW9uVHlwZXMuSElERV9BTkNIT1JTO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBSdWxlQW5jaG9yc0FjdGlvbiA9IFNob3dBbmNob3JzQWN0aW9uIHwgSGlkZUFuY2hvcnNBY3Rpb247XHJcbiIsImltcG9ydCB7IFJ1bGVBbmNob3JzQWN0aW9uLCBSdWxlQW5jaG9yc0FjdGlvblR5cGVzIH0gZnJvbSBcIi4vcnVsZS1hbmNob3IuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0YWN0aXZlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRhY3RpdmU6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBSdWxlQW5jaG9yc0FjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFJ1bGVBbmNob3JzQWN0aW9uVHlwZXMuU0hPV19BTkNIT1JTOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWN0aXZlOiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0Y2FzZSBSdWxlQW5jaG9yc0FjdGlvblR5cGVzLkhJREVfQU5DSE9SUzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFjdGl2ZTogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiAgc2VsZWN0b3JzXHJcbmV4cG9ydCBjb25zdCBnZXRBbmNob3JzQWN0aXZpdHlTdGF0ZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmFjdGl2ZTtcclxuLy8jZW5kcmVnaW9uXHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuXHJcbi8vIGltcG9ydCB7IGdldFJ1bGVNb2R1bGVDb25maWcgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuaW1wb3J0IHsgUnVsZU1vZHVsZUNvbmZpZyB9IGZyb20gXCIuLi9ydWxlLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBNT0RVTEVfQ09ORklHX1RPS0VOLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vcnVsZS5jb25maWdcIjtcclxuaW1wb3J0IHsgUnVsZVN0YXRlIH0gZnJvbSBcIi4uL3J1bGUucmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBSdWxlTW9kdWxlQ29uZmlnO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cdH1cclxuXHRjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdChNT0RVTEVfREVGQVVMVF9DT05GSUcpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZTogUnVsZU1vZHVsZUNvbmZpZyxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPFJ1bGVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxyXG5cdCkge1xyXG5cdFx0Ly8gaW5zdGFudGlhdGUgc3RlcHMgYW5kIHVzZWQgdGhlbVxyXG5cdFx0Y29uZmlnRmlsZS5zdGVwcyA9IGNvbmZpZ0ZpbGUuc3RlcENsYXNzZXMubWFwKHN0ZXAgPT4gbmV3IHN0ZXAodGhpcy5pbmplY3RvcikpO1xyXG5cclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblxyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHJcblx0XHQvLyB0aGlzLnN0b3JlLnNlbGVjdChnZXRSdWxlTW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUodXNlckNvbmZpZyA9PiB7XHJcblx0XHQvLyBcdGlmICghdXNlckNvbmZpZykgcmV0dXJuO1xyXG5cdFx0Ly8gXHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHVzZXJDb25maWcuQ29uZmlnKTtcclxuXHRcdC8vIFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL29mXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3J1bGUtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ydWxlLnJlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSdWxlU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHt9XHJcblxyXG5cdC8vIGFkZCgpOiBPYnNlcnZhYmxlPFRlc3RNb2RlbD4ge1xyXG5cdC8vIFx0Ly8gY29uc3QgbW9kZWwgPSBuZXcgQWRkUnVsZUFwaU1vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblx0Ly8gXHQvLyByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0Ly8gXHQvLyBcdC5maWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMuYWRkUnVsZSAhPSBcIlwiKVxyXG5cdC8vIFx0Ly8gXHQudGFrZSgxKVxyXG5cdC8vIFx0Ly8gXHQuc3dpdGNoTWFwKGNvbmZpZyA9PiB0aGlzLmh0dHAucG9zdChjb25maWcuZW5kcG9pbnRzLmFkZFJ1bGUsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpKVxyXG5cdC8vIFx0Ly8gXHQubWFwKChyZXNwb25zZTogQWRkUnVsZUFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpO1xyXG5cdC8vIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHd3RTdGVwIH0gZnJvbSBcIi4vZ3d0LXN0ZXAubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHd3RTY2VuYXJpb01vZGVsIHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0YW5jaG9ySWQ6IHN0cmluZztcclxuXHRmZWF0dXJlSWQ6IHN0cmluZztcclxuXHRzdGVwczogR3d0U3RlcFtdO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0e1xyXG5cdFx0XHRfaWQsXHJcblx0XHRcdGFuY2hvcklkLFxyXG5cdFx0XHRzdGVwcyxcclxuXHRcdFx0bmFtZSxcclxuXHRcdFx0ZmVhdHVyZUlkXHJcblx0XHR9OiB7IF9pZD86IHN0cmluZzsgYW5jaG9ySWQ/OiBzdHJpbmc7IHN0ZXBzPzogR3d0U3RlcFtdOyBuYW1lPzogc3RyaW5nOyBmZWF0dXJlSWQ/OiBzdHJpbmcgfSA9IHt9XHJcblx0KSB7XHJcblx0XHR0aGlzLl9pZCA9IF9pZCB8fCBcIlwiO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZSB8fCBcIlwiO1xyXG5cdFx0dGhpcy5mZWF0dXJlSWQgPSBmZWF0dXJlSWQgfHwgXCJcIjtcclxuXHRcdHRoaXMuX2lkID0gX2lkIHx8IFwiXCI7XHJcblx0XHR0aGlzLmFuY2hvcklkID0gYW5jaG9ySWQgfHwgXCJcIjtcclxuXHRcdHRoaXMuc3RlcHMgPSBzdGVwcyB8fCBbXTtcclxuXHR9XHJcblx0Z2V0UmVxdXNldEJvZHkoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRfaWQ6IHRoaXMuX2lkLFxyXG5cdFx0XHRhbmNob3JJZDogdGhpcy5hbmNob3JJZCxcclxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLFxyXG5cdFx0XHRmZWF0dXJlSWQ6IHRoaXMuZmVhdHVyZUlkLFxyXG5cdFx0XHRzdGVwczogdGhpcy5zdGVwcy5tYXAoKHN0ZXApID0+ICh7XHJcblx0XHRcdFx0aWQ6IHN0ZXAuaWQsXHJcblx0XHRcdFx0b3Bwb3NpdGU6IHN0ZXAub3Bwb3NpdGUsXHJcblx0XHRcdFx0cGFyYW1zOiBzdGVwLnBhcmFtc1xyXG5cdFx0XHR9KSlcclxuXHRcdH07XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR3d0U2NlbmFyaW9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMge1xyXG5cdFNDRU5BUklPU19MSVNUID0gXCJbR1dUXVtTQ0VOQVJJT11bREJdW0xJU1RdIFNDRU5BUklPU19MSVNUXCIsXHJcblx0U0NFTkFSSU9TX0xJU1RfU1RBUlQgPSBcIltTQ0VOQVJJT11bREJdIFNDRU5BUklPU19MSVNUX1NUQVJUXCIsXHJcblx0U0NFTkFSSU9TX0xJU1RfU1VDQ0VFRCA9IFwiW1NDRU5BUklPXVtEQl0gU0NFTkFSSU9TX0xJU1RfU1VDQ0VFRFwiLFxyXG5cdFNDRU5BUklPU19MSVNUX0ZBSUxFRCA9IFwiW1NDRU5BUklPXVtEQl0gU0NFTkFSSU9TX0xJU1RfRkFJTEVEXCIsXHJcblx0VVBTRVJUID0gXCJbR1dUXVtTQ0VOQVJJT11bREJdW1VQU0VSVF0gU0NFTkFSSU9fVVBTRVJUXCIsXHJcblx0R0VUX1NDRU5BUklPID0gXCJbU0NFTkFSSU9dW0RCXSBHRVRfU0NFTkFSSU9cIixcclxuXHRTQ0VOQVJJT19GRVRDSEVEID0gXCJbU0NFTkFSSU9dW0RCXSBTQ0VOQVJJT19GRVRDSEVEXCIsXHJcblx0Ly8vIG5ldyB2aXNpb25cclxuXHRVUERBVEVfREIgPSBcIltHV1RdW1NDRU5BUklPXVtEQl0gVVBEQVRFX0RCXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvc0xpc3RBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1Q7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvc0xpc3RTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVF9TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9zTGlzdFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3d0U2NlbmFyaW9Nb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb3NMaXN0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0U2NlbmFyaW9BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuVVBTRVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHd3RTY2VuYXJpb01vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRTY2VuYXJpb0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5HRVRfU0NFTkFSSU87XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9GZWNoZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9fRkVUQ0hFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3d0U2NlbmFyaW9Nb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBkYXRlRGJBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuVVBEQVRFX0RCO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHd3RTY2VuYXJpb01vZGVsW10pIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNjZW5hcmlvc0xpc3RBY3Rpb25zID1cclxuXHR8IFNjZW5hcmlvc0xpc3RBY3Rpb25cclxuXHR8IFNjZW5hcmlvc0xpc3RTdGFydEFjdGlvblxyXG5cdHwgU2NlbmFyaW9zTGlzdFN1Y2NlZWRBY3Rpb25cclxuXHR8IFNjZW5hcmlvc0xpc3RGYWlsZWRBY3Rpb25cclxuXHR8IFVwc2VydFNjZW5hcmlvQWN0aW9uXHJcblx0fCBHZXRTY2VuYXJpb0FjdGlvblxyXG5cdHwgU2NlbmFyaW9GZWNoZWRBY3Rpb25cclxuXHR8IFVwZGF0ZURiQWN0aW9uO1xyXG4iLCJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0SW5wdXQsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Q29tcG9uZW50UmVmLFxyXG5cdFZpZXdDaGlsZCxcclxuXHREaXJlY3RpdmUsXHJcblx0T25DaGFuZ2VzXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEd3dFN0ZXAgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zdGVwLm1vZGVsXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogXCJbcnVsZS1zdGVwLWxvYWRlcl1cIlxyXG5cdC8vIHRlbXBsYXRlVXJsOiBcIi4vc3RlcC1sb2FkZXIuY29tcG9uZW50Lmh0bWxcIixcclxuXHQvLyBzdHlsZVVybHM6IFsgXCIuL3N0ZXAtbG9hZGVyLmNvbXBvbmVudC5jc3NcIiBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGVwTG9hZGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG5cdEBJbnB1dCgpIHN0ZXA6IEd3dFN0ZXA8YW55PjtcclxuXHRAVmlld0NoaWxkKFwiY29udGFpbmVyXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxyXG5cdC8vIFRPRE86IGZpeCBnZW5lcmljIHR5cGVcclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cdGdldCBwYXJhbXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wb25lbnQuaW5zdGFuY2UucGFyYW1zIHx8IHt9O1xyXG5cdH1cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxyXG5cclxuXHRuZ09uQ2hhbmdlcygpIHtcclxuXHRcdGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG5cdFx0XHQvLyB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5jb25maWcgPSB0aGlzLmNvbmZpZztcclxuXHRcdFx0Ly8gdGhpcy5jb21wb25lbnQuaW5zdGFuY2UuZ3JvdXAgPSB0aGlzLmdyb3VwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRpZiAoIXRoaXMuc3RlcC5zdGVwQ29tcG9uZW50KSB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoKS5cclxuXHRcdCAgU3VwcG9ydGVkIHR5cGVzOiBgXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHQvLyBUT0RPOiBmaXggZ2VuZXJpYyB0eXBlXHJcblx0XHRjb25zdCBjb21wb25lbnQgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PGFueT4odGhpcy5zdGVwLnN0ZXBDb21wb25lbnQpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLnBhcmFtcyA9IHRoaXMuc3RlcC5wYXJhbXM7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzdGFydFdpdGgsIHNoYXJlIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9ydWxlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcnVsZS5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBHd3RTY2VuYXJpb01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9TZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge31cclxuXHJcblx0dXBzZXJ0KHNjZW5hcmlvOiBHd3RTY2VuYXJpb01vZGVsKTogT2JzZXJ2YWJsZTxHd3RTY2VuYXJpb01vZGVsPiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBHd3RTY2VuYXJpb01vZGVsKHNjZW5hcmlvKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2d3dC9zY2VuYXJpb1wiLCBtb2RlbC5nZXRSZXF1c2V0Qm9keSgpKVxyXG5cdFx0XHQucGlwZShtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UgYXMgR3d0U2NlbmFyaW9Nb2RlbCksIHNoYXJlKCkpO1xyXG5cdH1cclxuXHRnZXRBbmNob3JTY2VuYXJpb3MoYW5jaG9ySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3d0U2NlbmFyaW9Nb2RlbFtdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQ8YW55PihgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9nd3QvYW5jaG9yLyR7YW5jaG9ySWR9L3NjZW5hcmlvc2ApXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuUmVzdWx0IGFzIEd3dFNjZW5hcmlvTW9kZWxbXSk7XHJcblx0fVxyXG5cdHNlbGVjdFNjZW5hcmlvQnlJZChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3d0U2NlbmFyaW9Nb2RlbD4ge1xyXG5cdFx0Y29uc3Qgc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R3d0U2NlbmFyaW9Nb2RlbD4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5ydWxlLnNjZW5hcmlvcy5kYXRhKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRmaWx0ZXIoc2NlbmFyaW9zID0+IHNjZW5hcmlvcyAhPSBudWxsKSxcclxuXHRcdFx0XHRtYXAoc2NlbmFyaW9zID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBzY2VuYXJpb3MuZmluZChzY2VuYXJpbyA9PiBzY2VuYXJpby5faWQgPT0gX2lkKTtcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRmaWx0ZXIoc2NlbmFyaW8gPT4gc2NlbmFyaW8gIT0gdW5kZWZpbmVkKVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoc2NlbmFyaW8gPT4ge1xyXG5cdFx0XHRcdHN1YmplY3QubmV4dChzY2VuYXJpbyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG5cdHNlbGVjdEFuY2hvclNjZW5hcmlvcyhhbmNob3JJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxHd3RTY2VuYXJpb01vZGVsW10+IHtcclxuXHRcdGNvbnN0IHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEd3dFNjZW5hcmlvTW9kZWxbXT4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5ydWxlLnNjZW5hcmlvcy5kYXRhKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRzdGFydFdpdGgoW10pLFxyXG5cdFx0XHRcdGZpbHRlcihzY2VuYXJpb3MgPT4gc2NlbmFyaW9zICE9IG51bGwpLFxyXG5cdFx0XHRcdG1hcChzY2VuYXJpb3MgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHNjZW5hcmlvcy5maWx0ZXIoc2NlbmFyaW8gPT4gc2NlbmFyaW8uX2lkID09IGFuY2hvcklkKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoc2NlbmFyaW9zID0+IHtcclxuXHRcdFx0XHRzdWJqZWN0Lm5leHQoc2NlbmFyaW9zKTtcclxuXHRcdFx0fSk7XHJcblx0XHRyZXR1cm4gc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgVHlwZSwgSW5qZWN0b3IsIFZpZXdDaGlsZHJlbiwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IG1hcCwgZmlsdGVyLCB3aXRoTGF0ZXN0RnJvbSwgdGFrZVVudGlsIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IE1BVF9CT1RUT01fU0hFRVRfREFUQSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEd3dFN0ZXAgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zdGVwLm1vZGVsXCI7XHJcbmltcG9ydCB7IEd3dFNjZW5hcmlvTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zY2VuYXJpby5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ydWxlLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFVwc2VydFNjZW5hcmlvQWN0aW9uIH0gZnJvbSBcIi4uL2RiL3NjZW5hcmlvLWRiLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgU3RlcExvYWRlckRpcmVjdGl2ZSB9IGZyb20gXCIuLi9zdGVwLWxvYWRlci9zdGVwLWxvYWRlci5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjZW5hcmlvLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImFwcC1nd3Qtdmlld1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG48ZGl2IGZ4RmxleD1cIjQwMHB4XCIgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEdhcD1cIjE1cHhcIj5cclxuICA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiIGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKBw5vCjMOZwoTDmMKqw5jCsVwiPlxyXG4gICAgICA8bWF0LWljb24gbWF0U3VmZml4PnNlYXJjaDwvbWF0LWljb24+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPG1hdC1jaGVja2JveCBmeEZsZXggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPsOZwoHDmMKxw5jCtiDDmsKpw5nChsObwozDmMKvPC9tYXQtY2hlY2tib3g+XHJcbiAgICA8bWF0LWNoZWNrYm94IGZ4RmxleCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+w5nCh8OZwobDmsKvw5jCp8OZwoXDm8KMIMOawqnDmcKHPC9tYXQtY2hlY2tib3g+XHJcbiAgICA8bWF0LWNoZWNrYm94IGZ4RmxleCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+w5jCosOZwobDmsKvw5jCp8OZwoc8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuICAgIDxtYXQtY2FyZCBjbGFzcz1cInN0ZXBzLWl0ZW1cIiAqbmdGb3I9XCJsZXQgc3RlcCBvZiBzdGVwcyQgfCBhc3luY1wiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInN0ZXAtdGV4dFwiPlxyXG4gICAgICAgIHt7c3RlcC5kZXNjcmlwdGlvbn19XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJhZGQtYnV0dG9uXCIgKGNsaWNrKT1cImFkZFN0ZXBUb1NjZW5hcmlvKHN0ZXApXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPmFycm93X2JhY2tfaW9zPC9tYXQtaWNvbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L21hdC1jYXJkPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgZnhGbGV4PVwiNzAwcHhcIj5cclxuICA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwic2NlbmFyaW8tdG9vbGJhclwiPlxyXG4gICAgPGRpdiBmeEZsZXg+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZml0XCI+XHJcbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiw5nCiMOZwpDDm8KMw5rCmMOawq/Dm8KMXCIgKHNlbGVjdGlvbkNoYW5nZSk9XCJhY3RpdmVTY2VuYXJpbygkZXZlbnQudmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBzY2VuYXJpbyBvZiBzY2VuYXJpb3MkIHwgYXN5bmNcIiBbdmFsdWVdPVwic2NlbmFyaW9cIj5cclxuICAgICAgICAgICAgICAgIHt7IHNjZW5hcmlvLmZlYXR1cmVJZCB9fSA6IHt7IHNjZW5hcmlvLm5hbWUgfX1cclxuICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxidXR0b24gZnhGbGV4PVwibm9ncm93XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZE5ld1NjZW5hcmlvKClcIj5cclxuICAgICAgIMOYwqvDmMKow5jCqiDDmMKzw5nChsOYwqfDmMKxw5vCjMOZwoggw5jCrMOYwq/Dm8KMw5jCr1xyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0R2FwPVwiMTVweFwiPlxyXG4gICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiMjVweFwiIFtmb3JtR3JvdXBdPVwic2NlbmFyaW9Gb3JtR3JvdXBcIj5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cIjUwXCI+XHJcbiAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCLDmcKIw5vCjMOawpjDmsKvw5vCjFwiIGZvcm1Db250cm9sTmFtZT1cImZlYXR1cmVJZFwiPlxyXG4gICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGZlYXR1cmUgb2YgZmVhdHVyZXMkXCIgW3ZhbHVlXT1cImZlYXR1cmVcIj5cclxuICAgICAgICAgICAge3sgZmVhdHVyZSB9fVxyXG4gICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cIjUwXCI+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChsOYwqfDmcKFXCIgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzdGVwIG9mIChzY2VuYXJpbyQgfCBhc3luYykuc3RlcHNcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNjZW5hcmlvLXN0ZXBzLWl0ZW1cIj5cclxuICAgICAgICA8bmctY29udGFpbmVyIHJ1bGUtc3RlcC1sb2FkZXIgW3N0ZXBdPVwic3RlcFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzY2VuYXJpby1zdGVwcy1hY3Rpb25cIj5cclxuICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJkZWxldGVTdGVwRnJvbVNjZW5hcmlvKHN0ZXApXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiaW5jU2NlbmFyaW9TdGVwUHJpb3JpdHkoc3RlcClcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X3VwPC9tYXQtaWNvbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImRlY1NjZW5hcmlvU3RlcFByaW9yaXR5KHN0ZXApXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19kb3duPC9tYXQtaWNvbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJzYXZlKClcIj5cclxuICAgICAgICDDmMKrw5jCqMOYwqpcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwdnd9LnNjZW5hcmlvLXRvb2xiYXJ7aGVpZ2h0OjYwcHg7bWFyZ2luLWJvdHRvbToyMHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHd3RWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdHVuc3Vic2NyaWJlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHRzdGVwcyQ6IE9ic2VydmFibGU8R3d0U3RlcFtdPjtcclxuXHRzdGVwczogR3d0U3RlcFtdO1xyXG5cdHNjZW5hcmlvJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R3d0U2NlbmFyaW9Nb2RlbD4obmV3IEd3dFNjZW5hcmlvTW9kZWwoKSk7XHJcblx0c2NlbmFyaW9zJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R3d0U2NlbmFyaW9Nb2RlbFtdPihbXSk7XHJcblx0c2NlbmFyaW9Gb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRmZWF0dXJlcyQ6IHN0cmluZ1tdO1xyXG5cdEBWaWV3Q2hpbGRyZW4oU3RlcExvYWRlckRpcmVjdGl2ZSkgc3RlcExvYWRlcnM6IFN0ZXBMb2FkZXJEaXJlY3RpdmVbXTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBzY2VuYXJpb1NlcnZpY2U6IFNjZW5hcmlvU2VydmljZSxcclxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG5cdFx0QEluamVjdChNQVRfQk9UVE9NX1NIRUVUX0RBVEEpIHByaXZhdGUgZGF0YTogYW55XHJcblx0KSB7XHJcblx0XHR0aGlzLl9jcmVhdGVfc2NlbmFyaW9fZm9ybV9ncm91cCgpO1xyXG5cdFx0dGhpcy5faW5pdF9mZWF0dXJlc19saXN0KCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc3RlcHMkID0gdGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyQucGlwZShtYXAoY29uZmlnID0+IGNvbmZpZy5zdGVwcyksIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSk7XHJcblx0XHR0aGlzLnN0ZXBzJC5zdWJzY3JpYmUoc3RlcHMgPT4gKHRoaXMuc3RlcHMgPSBzdGVwcykpO1xyXG5cdFx0dGhpcy5fbG9hZF9zY2VuYXJpb19hbmRfbWFwX3NjZW5hcmlvX3N0ZXBfdG9fc3RlcHNfY2xhc3MoKTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLm5leHQoKTtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUuY29tcGxldGUoKTtcclxuXHR9XHJcblx0c2F2ZSgpIHtcclxuXHRcdGNvbnN0IHNjZW5hcmlvID0gdGhpcy5zY2VuYXJpbyQuZ2V0VmFsdWUoKTtcclxuXHRcdHRoaXMuc3RlcExvYWRlcnMuZm9yRWFjaChzdGVwTG9hZGVyID0+IHtcclxuXHRcdFx0c2NlbmFyaW8uc3RlcHMuZmluZChzdGVwID0+IHN0ZXAubmFtZSA9PSBzdGVwTG9hZGVyLnN0ZXAubmFtZSkucGFyYW1zID0gc3RlcExvYWRlci5wYXJhbXM7XHJcblx0XHR9KTtcclxuXHRcdHNjZW5hcmlvLmZlYXR1cmVJZCA9IHRoaXMuc2NlbmFyaW9Gb3JtR3JvdXAudmFsdWUuZmVhdHVyZUlkO1xyXG5cdFx0c2NlbmFyaW8ubmFtZSA9IHRoaXMuc2NlbmFyaW9Gb3JtR3JvdXAudmFsdWUubmFtZTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwc2VydFNjZW5hcmlvQWN0aW9uKHNjZW5hcmlvKSk7XHJcblx0fVxyXG5cdGFkZFN0ZXBUb1NjZW5hcmlvKHN0ZXA6IEd3dFN0ZXApIHtcclxuXHRcdGNvbnN0IHNjZW5hcmlvID0gdGhpcy5zY2VuYXJpbyQuZ2V0VmFsdWUoKTtcclxuXHRcdHNjZW5hcmlvLnN0ZXBzLnB1c2goc3RlcCk7XHJcblx0XHR0aGlzLnNjZW5hcmlvJC5uZXh0KHNjZW5hcmlvKTtcclxuXHR9XHJcblx0ZGVsZXRlU3RlcEZyb21TY2VuYXJpbyhzdGVwOiBHd3RTdGVwKSB7XHJcblx0XHRjb25zdCBzY2VuYXJpbyA9IHRoaXMuc2NlbmFyaW8kLmdldFZhbHVlKCk7XHJcblx0XHRzY2VuYXJpby5zdGVwcy5zcGxpY2Uoc2NlbmFyaW8uc3RlcHMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5uYW1lID09IHN0ZXAubmFtZSksIDEpO1xyXG5cdFx0dGhpcy5zY2VuYXJpbyQubmV4dChzY2VuYXJpbyk7XHJcblx0fVxyXG5cdGRlY1NjZW5hcmlvU3RlcFByaW9yaXR5KHN0ZXA6IEd3dFN0ZXApIHt9XHJcblx0aW5jU2NlbmFyaW9TdGVwUHJpb3JpdHkoc3RlcDogR3d0U3RlcCkge31cclxuXHRhZGROZXdTY2VuYXJpbygpIHtcclxuXHRcdGNvbnN0IHNjZW5hcmlvcyA9IHRoaXMuc2NlbmFyaW9zJC5nZXRWYWx1ZSgpO1xyXG5cdFx0c2NlbmFyaW9zLnB1c2goXHJcblx0XHRcdG5ldyBHd3RTY2VuYXJpb01vZGVsKHtcclxuXHRcdFx0XHRhbmNob3JJZDogdGhpcy5kYXRhLmFuY2hvcklkXHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5zY2VuYXJpb3MkLm5leHQoc2NlbmFyaW9zKTtcclxuXHR9XHJcblx0YWN0aXZlU2NlbmFyaW8oc2NlbmFyaW86IEd3dFNjZW5hcmlvTW9kZWwpIHtcclxuXHRcdHNjZW5hcmlvLnN0ZXBzID0gc2NlbmFyaW8uc3RlcHMubWFwKHNjZW5hcmlvU3RlcCA9PiB7XHJcblx0XHRcdGNvbnN0IHN0ZXAgPSB0aGlzLnN0ZXBzLmZpbmQoc3RlcCA9PiBzdGVwLmlkID09IHNjZW5hcmlvU3RlcC5pZCk7XHJcblx0XHRcdHN0ZXAucGFyYW1zID0gc2NlbmFyaW9TdGVwLnBhcmFtcztcclxuXHRcdFx0cmV0dXJuIHN0ZXA7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc2NlbmFyaW9Gb3JtR3JvdXAucGF0Y2hWYWx1ZShzY2VuYXJpbyk7XHJcblx0XHRzY2VuYXJpby5hbmNob3JJZCA9IHRoaXMuZGF0YS5hbmNob3JJZDtcclxuXHRcdHRoaXMuc2NlbmFyaW8kLm5leHQoc2NlbmFyaW8pO1xyXG5cdH1cclxuXHJcblx0X2xvYWRfc2NlbmFyaW9fYW5kX21hcF9zY2VuYXJpb19zdGVwX3RvX3N0ZXBzX2NsYXNzKCkge1xyXG5cdFx0dGhpcy5zY2VuYXJpb1NlcnZpY2VcclxuXHRcdFx0LmdldEFuY2hvclNjZW5hcmlvcyh0aGlzLmRhdGEuYW5jaG9ySWQpXHJcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSlcclxuXHRcdFx0LnN1YnNjcmliZShzY2VuYXJpb3MgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2NlbmFyaW9zJC5uZXh0KHNjZW5hcmlvcyk7XHJcblx0XHRcdFx0dGhpcy5hY3RpdmVTY2VuYXJpbyhzY2VuYXJpb3NbMF0gfHwgbmV3IEd3dFNjZW5hcmlvTW9kZWwoKSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRfY3JlYXRlX3NjZW5hcmlvX2Zvcm1fZ3JvdXAoKSB7XHJcblx0XHR0aGlzLnNjZW5hcmlvRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdGZlYXR1cmVJZDogbmV3IEZvcm1Db250cm9sKCksXHJcblx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbCgpXHJcblx0XHR9KTtcclxuXHR9XHJcblx0X3Jlc2V0X3NjZW5hcmlvX2Zvcm1fZ3JvdXBfYW5kX3BhdGNoX3dpdGhfYWN0aXZlX3NjZW5hcmlvKCkge1xyXG5cdFx0dGhpcy5zY2VuYXJpb0Zvcm1Hcm91cC5yZXNldCgpO1xyXG5cdFx0dGhpcy5zY2VuYXJpb0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMuc2NlbmFyaW8kLmdldFZhbHVlKCkpO1xyXG5cdH1cclxuXHRfaW5pdF9mZWF0dXJlc19saXN0KCkge1xyXG5cdFx0dGhpcy5mZWF0dXJlcyQgPSBbIFwiw5nChcOYwq/Dm8KMw5jCscObwozDmMKqIMOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqjDmMKxw5jCp8OYwrPDmMKnw5jCsyDDmMKvw5jCs8OYwqrDmMKxw5jCs8Obwowgw5nCh8OYwqfDm8KMIMOawqnDmMKnw5jCscOYwqjDmMKxXCIgXTtcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gR3d0U3RlcFR5cGVzIHtcclxuXHRcIkdpdmVuXCIgPSBcIkdpdmVuXCIsXHJcblx0XCJXaGVuXCIgPSBcIldoZW5cIixcclxuXHRcIlRoZW5cIiA9IFwiVGhlblwiLFxyXG5cdFwiQW5kXCIgPSBcIkFuZFwiLFxyXG5cdFwiQnV0XCIgPSBcIkJ1dFwiXHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgT25Jbml0LCBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIHppcCwgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBNYXRCb3R0b21TaGVldCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5cclxuaW1wb3J0IHsgR3d0Vmlld0NvbXBvbmVudCB9IGZyb20gXCIuLi9nd3Qtdmlldy9nd3Qtdmlldy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcnVsZS5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBHd3RTY2VuYXJpb01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWxcIjtcclxuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjZW5hcmlvLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3d0U3RlcFR5cGVzIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc3RlcC10eXBlcy5lbnVtXCI7XHJcbmltcG9ydCB7IEd3dFN0ZXAgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IFwiW3J1bGVBbmNob3JdXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFJ1bGVBbmNob3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0dW5zdWJzY3JpYmUgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cdEBJbnB1dChcInJ1bGVBbmNob3JcIikgYW5jaG9ySWQ7XHJcblx0c3RlcHM6IEd3dFN0ZXBbXTtcclxuXHRhY3RpdmUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdGFjdGl2ZTogYm9vbGVhbjtcclxuXHRidXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG5cdGFuY2hvclNjZW5hcmlvcyQ6IE9ic2VydmFibGU8R3d0U2NlbmFyaW9Nb2RlbFtdPjtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc2NlbmFyaW9TZXJ2aWNlOiBTY2VuYXJpb1NlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcblx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcblx0XHRwcml2YXRlIGJvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldFxyXG5cdCkge1xyXG5cdFx0dGhpcy5hY3RpdmUkID0gdGhpcy5zdG9yZS5zZWxlY3QocyA9PiBzLnJ1bGUucnVsZUFuY2hvcnMuYWN0aXZlKS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSk7XHJcblx0XHR0aGlzLmFjdGl2ZSQuc3Vic2NyaWJlKGFjdGl2ZSA9PiAodGhpcy5hY3RpdmUgPSBhY3RpdmUpKTtcclxuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibmdzLXJ1bGUtYW5jaG9yXCIpO1xyXG5cdFx0dGhpcy5zdGVwcyA9IHRoaXMuY29uZmlnU2VydmljZS5jb25maWckLmdldFZhbHVlKCkuc3RlcHM7XHJcblx0fVxyXG5cclxuXHRASG9zdExpc3RlbmVyKFwibW91c2VlbnRlclwiKVxyXG5cdG9uTW91c2VFbnRlcigpIHtcclxuXHRcdGlmICghdGhpcy5hY3RpdmUpIHJldHVybjtcclxuXHRcdHRoaXMuc2hvd0FuY2hvcigpO1xyXG5cdH1cclxuXHJcblx0QEhvc3RMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIilcclxuXHRvbk1vdXNlTGVhdmUoKSB7XHJcblx0XHRpZiAoIXRoaXMuYWN0aXZlKSByZXR1cm47XHJcblx0XHR0aGlzLmhpZGVBbmNob3IoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2hvd0FuY2hvcigpIHtcclxuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2hvdy1hbmNob3JcIik7XHJcblx0fVxyXG5cdHByaXZhdGUgaGlkZUFuY2hvcigpIHtcclxuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1hbmNob3JcIik7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIFRPRE86IHJlbW92ZVxyXG5cdFx0Ly8gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2hvd0FuY2hvcnNBY3Rpb24oKSk7XHJcblxyXG5cdFx0dGhpcy5hbmNob3JTY2VuYXJpb3MkID0gdGhpcy5zY2VuYXJpb1NlcnZpY2VcclxuXHRcdFx0LmdldEFuY2hvclNjZW5hcmlvcyh0aGlzLmFuY2hvcklkKSAvL1RPRE86IHJlcGxhY2Ugc2VydmljZSBjYWxsIHdpdGggbmdyeCBhY3Rpb25cclxuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpLCBmaWx0ZXIoc2NlbmFyaW8gPT4gc2NlbmFyaW8gIT0gdW5kZWZpbmVkKSk7XHJcblx0XHR0aGlzLmFjdGl2ZSQuc3Vic2NyaWJlKGFjdGl2ZSA9PiB7XHJcblx0XHRcdGlmIChhY3RpdmUpIHRoaXMuX2FjdGl2YXRlX2FuY2hvcigpO1xyXG5cdFx0XHRlbHNlIHRoaXMuX2RlYWN0aXZhdGVfYW5jaG9yKCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuYW5jaG9yU2NlbmFyaW9zJC5zdWJzY3JpYmUoc2NlbmFyaW9zID0+IHtcclxuXHRcdFx0c2NlbmFyaW9zLmZvckVhY2goc2NlbmFyaW8gPT4ge1xyXG5cdFx0XHRcdHNjZW5hcmlvLnN0ZXBzID0gc2NlbmFyaW8uc3RlcHMubWFwKHNjZW5hcmlvU3RlcCA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBzdGVwID0gdGhpcy5zdGVwcy5maW5kKHN0ZXAgPT4gc3RlcC5pZCA9PSBzY2VuYXJpb1N0ZXAuaWQpO1xyXG5cdFx0XHRcdFx0c3RlcC5wYXJhbXMgPSBzY2VuYXJpb1N0ZXAucGFyYW1zO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHN0ZXA7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRoaXMuX2RvX3NjZW5hcmlvKHNjZW5hcmlvKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLm5leHQoKTtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUuY29tcGxldGUoKTtcclxuXHR9XHJcblx0X2FjdGl2YXRlX2FuY2hvcigpIHtcclxuXHRcdHRoaXMuX2NyZWF0ZV9hbmNob3IoKTtcclxuXHRcdHRoaXMuX3NldF9hY3RpdmVfY2xhc3NfdG9faG9zdCgpO1xyXG5cdH1cclxuXHRfZGVhY3RpdmF0ZV9hbmNob3IoKSB7XHJcblx0XHR0aGlzLl9yZW1vdmVfYW5jaG9yKCk7XHJcblx0XHR0aGlzLl9yZW1vdmVfYWN0aXZlX2NsYXNzX3RvX2hvc3QoKTtcclxuXHR9XHJcblx0X3NldF9hY3RpdmVfY2xhc3NfdG9faG9zdCgpIHtcclxuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYW5jaG9yLWFjdGl2ZVwiKTtcclxuXHR9XHJcblx0X3JlbW92ZV9hY3RpdmVfY2xhc3NfdG9faG9zdCgpIHtcclxuXHRcdHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYW5jaG9yLWFjdGl2ZVwiKTtcclxuXHR9XHJcblx0X2NyZWF0ZV9hbmNob3IoKSB7XHJcblx0XHR0aGlzLmJ1dHRvbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHRcdHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuZ3MtcnVsZS1hbmNob3ItYnV0dG9uXCIsIFwibWF0LWljb24tYnV0dG9uXCIpO1xyXG5cdFx0dGhpcy5idXR0b24uc2V0QXR0cmlidXRlKFwibWF0LWljb24tYnV0dG9uXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdHRoaXMuYm90dG9tU2hlZXQub3BlbihHd3RWaWV3Q29tcG9uZW50LCB7XHJcblx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0YW5jaG9ySWQ6IHRoaXMuYW5jaG9ySWRcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHBhbmVsQ2xhc3M6IFwibWFnZW50YS10aGVtZVwiXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRjb25zdCBtYXRpY29uID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KFwibWF0LWljb25cIik7XHJcblx0XHRtYXRpY29uLmNsYXNzTGlzdC5hZGQoXCJtYXQtaWNvblwiLCBcIm1hdGVyaWFsLWljb25zXCIpO1xyXG5cdFx0Y29uc3QgaWNvbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dChcInNldHRpbmdzXCIpO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChtYXRpY29uLCBpY29uKTtcclxuXHRcdHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5idXR0b24sIG1hdGljb24pO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYnV0dG9uKTtcclxuXHR9XHJcblx0X3JlbW92ZV9hbmNob3IoKSB7XHJcblx0XHRpZiAoIXRoaXMuYnV0dG9uKSByZXR1cm47XHJcblx0XHR0aGlzLmJ1dHRvbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuYnV0dG9uKTtcclxuXHR9XHJcblx0X2RvX3NjZW5hcmlvKHNjZW5hcmlvOiBHd3RTY2VuYXJpb01vZGVsKSB7XHJcblx0XHRjb25zdCBnaXZlblN0ZXBJbnRlcnByZXRvcnMgPSBzY2VuYXJpby5zdGVwc1xyXG5cdFx0XHQuZmlsdGVyKHN0ZXAgPT4gc3RlcC50eXBlID09IEd3dFN0ZXBUeXBlcy5HaXZlbilcclxuXHRcdFx0Lm1hcChzdGVwID0+IHN0ZXAuaW50ZXJwZXJhdG9yKHN0ZXAucGFyYW1zKSk7XHJcblxyXG5cdFx0emlwXHJcblx0XHRcdC5hcHBseShudWxsLCBnaXZlblN0ZXBJbnRlcnByZXRvcnMpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSxcclxuXHRcdFx0XHRtYXAoKHZhbHVlczogYm9vbGVhbltdKSA9PiB2YWx1ZXMuZXZlcnkodmFsdWUgPT4gdmFsdWUgPT09IHRydWUpKSxcclxuXHRcdFx0XHRzd2l0Y2hNYXAoZ2l2ZW5SZXN1bHQgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGdpdmVuUmVzdWx0KSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHRoZW5TdGVwSW50ZXJwcmV0b3JzID0gc2NlbmFyaW8uc3RlcHNcclxuXHRcdFx0XHRcdFx0XHQuZmlsdGVyKHN0ZXAgPT4gc3RlcC50eXBlID09IEd3dFN0ZXBUeXBlcy5UaGVuKVxyXG5cdFx0XHRcdFx0XHRcdC5tYXAoc3RlcCA9PiBzdGVwLmludGVycGVyYXRvcihzdGVwLnBhcmFtcywgdGhpcy5lbCkpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gemlwXHJcblx0XHRcdFx0XHRcdFx0LmFwcGx5KG51bGwsIHRoZW5TdGVwSW50ZXJwcmV0b3JzKVxyXG5cdFx0XHRcdFx0XHRcdC5waXBlKG1hcCgodmFsdWVzOiBib29sZWFuW10pID0+IHZhbHVlcy5ldmVyeSh2YWx1ZSA9PiB2YWx1ZSA9PT0gdHJ1ZSkpKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBvZihmYWxzZSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHt9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBSdWxlc0xpc3RBY3Rpb25UeXBlcyB7XHJcblx0UlVMRVNfTElTVCA9IFwiW1JVTEVdW0RCXSBSVUxFU19MSVNUXCIsXHJcblx0UlVMRVNfTElTVF9TVEFSVCA9IFwiW1JVTEVdW0RCXSBSVUxFU19MSVNUX1NUQVJUXCIsXHJcblx0UlVMRVNfTElTVF9TVUNDRUVEID0gXCJbUlVMRV1bREJdIFJVTEVTX0xJU1RfU1VDQ0VFRFwiLFxyXG5cdFJVTEVTX0xJU1RfRkFJTEVEID0gXCJbUlVMRV1bREJdIFJVTEVTX0xJU1RfRkFJTEVEXCIsXHJcblx0UlVMRV9VUFNFUlQgPSBcIltSVUxFXVtEQl0gUlVMRV9VUFNFUlRcIixcclxuXHRHRVRfUlVMRSA9IFwiW1JVTEVdW0RCXSBHRVRfUlVMRVwiLFxyXG5cdFJVTEVfRkVUQ0hFRCA9IFwiW1JVTEVdW0RCXSBSVUxFX0ZFVENIRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUnVsZXNMaXN0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVDtcclxufVxyXG5leHBvcnQgY2xhc3MgUnVsZXNMaXN0U3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX1NUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBSdWxlc0xpc3RTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSdWxlTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgUnVsZXNMaXN0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydFJ1bGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFX1VQU0VSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUnVsZU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRSdWxlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUnVsZXNMaXN0QWN0aW9uVHlwZXMuR0VUX1JVTEU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgUnVsZUZlY2hlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVfRkVUQ0hFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUnVsZU1vZGVsKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBSdWxlc0xpc3RBY3Rpb25zID1cclxuXHR8IFJ1bGVzTGlzdEFjdGlvblxyXG5cdHwgUnVsZXNMaXN0U3RhcnRBY3Rpb25cclxuXHR8IFJ1bGVzTGlzdFN1Y2NlZWRBY3Rpb25cclxuXHR8IFJ1bGVzTGlzdEZhaWxlZEFjdGlvblxyXG5cdHwgVXBzZXJ0UnVsZUFjdGlvblxyXG5cdHwgR2V0UnVsZUFjdGlvblxyXG5cdHwgUnVsZUZlY2hlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBSdWxlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFJ1bGVzTGlzdEFjdGlvblR5cGVzLCBSdWxlc0xpc3RBY3Rpb25zIH0gZnJvbSBcIi4vcnVsZS1kYi5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzVHlwZXM7XHJcblx0ZGF0YTogUnVsZU1vZGVsW107XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiBcInByaXN0aW5lXCIsXHJcblx0ZGF0YTogW11cclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogUnVsZXNMaXN0QWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1Q6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZGlydHlcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcInBlbmRpbmdcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBhY3Rpb24ucGF5bG9hZCxcclxuXHRcdFx0XHRzdGF0dXM6IFwic3VjY2VlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVTX0xJU1RfRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFJ1bGVzTGlzdEFjdGlvblR5cGVzLlJVTEVfVVBTRVJUOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRpZiAoZW50aXR5SWR4ID4gLTEpIHtcclxuXHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFX0ZFVENIRUQ6IHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdHZhciBlbnRpdHlJZHggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleChmb3JtID0+IGZvcm0uX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdGlmIChlbnRpdHlJZHggPiAtMSkge1xyXG5cdFx0XHRcdGRhdGFbZW50aXR5SWR4XSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGFbZW50aXR5SWR4XSwgYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRhdGEucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBkYXRhXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdldFN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnN0YXR1cztcclxuIiwiaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBHd3RTY2VuYXJpb01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWxcIjtcclxuaW1wb3J0IHsgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLCBTY2VuYXJpb3NMaXN0QWN0aW9ucyB9IGZyb20gXCIuL3NjZW5hcmlvLWRiLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxuXHRkYXRhOiBHd3RTY2VuYXJpb01vZGVsW107XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiBcInByaXN0aW5lXCIsXHJcblx0ZGF0YTogW11cclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogU2NlbmFyaW9zTGlzdEFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1Q6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZGlydHlcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwicGVuZGluZ1wiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT1NfTElTVF9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdFx0c3RhdHVzOiBcInN1Y2NlZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5VUFNFUlQ6IHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdHZhciBlbnRpdHlJZHggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleChmb3JtID0+IGZvcm0uX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdGlmIChlbnRpdHlJZHggPiAtMSkge1xyXG5cdFx0XHRcdGRhdGFbZW50aXR5SWR4XSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGFbZW50aXR5SWR4XSwgYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRhdGEucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBkYXRhXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5TQ0VOQVJJT19GRVRDSEVEOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRpZiAoZW50aXR5SWR4ID4gLTEpIHtcclxuXHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuVVBEQVRFX0RCOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHRjb25zdCBzY2VuYXJpb3MgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHRcdFx0c2NlbmFyaW9zLmZvckVhY2goc2NlbmFyaW8gPT4ge1xyXG5cdFx0XHRcdHZhciBlbnRpdHlJZHggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleChmb3JtID0+IGZvcm0uX2lkID09IHNjZW5hcmlvLl9pZCk7XHJcblx0XHRcdFx0aWYgKGVudGl0eUlkeCA+IC0xKSB7XHJcblx0XHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIHNjZW5hcmlvKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZGF0YS5wdXNoKHNjZW5hcmlvKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGFcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0U3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc3RhdHVzO1xyXG4iLCJpbXBvcnQgKiBhcyBmcm9tUnVsZUFuY2hvciBmcm9tIFwiLi9ydWxlLWFuY2hvclwiO1xyXG5pbXBvcnQgKiBhcyBmcm9tUnVsZURiQW5jaG9yIGZyb20gXCIuL2RiL3J1bGUtZGIucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBmcm9tU2NlbmFyaW9EYkFuY2hvciBmcm9tIFwiLi9kYi9zY2VuYXJpby1kYi5yZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJ1bGVTdGF0ZSB7XHJcblx0cnVsZUFuY2hvcnM6IGZyb21SdWxlQW5jaG9yLlN0YXRlO1xyXG5cdHJ1bGVzOiBmcm9tUnVsZURiQW5jaG9yLlN0YXRlO1xyXG5cdHNjZW5hcmlvczogZnJvbVNjZW5hcmlvRGJBbmNob3IuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSdWxlUmVkdWNlcnMgPSB7XHJcblx0cnVsZUFuY2hvcnM6IGZyb21SdWxlQW5jaG9yLlJlZHVjZXIsXHJcblx0cnVsZXM6IGZyb21SdWxlRGJBbmNob3IucmVkdWNlcixcclxuXHRzY2VuYXJpb3M6IGZyb21TY2VuYXJpb0RiQW5jaG9yLnJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xyXG5cdFwicnVsZVwiOiBSdWxlU3RhdGU7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLCBTY2VuYXJpb3NMaXN0U3RhcnRBY3Rpb24sIFNjZW5hcmlvRmVjaGVkQWN0aW9uIH0gZnJvbSBcIi4vc2NlbmFyaW8tZGIuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2NlbmFyaW8uc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9zRGJFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgc2VydmljZTogU2NlbmFyaW9TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRFZGl0UHJvZmlsZVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1QpXHJcblx0XHQucGlwZShtYXAoKCkgPT4gbmV3IFNjZW5hcmlvc0xpc3RTdGFydEFjdGlvbigpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydFNjZW5hcmlvJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlVQU0VSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoKGFjdGlvbikgPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKHNjZW5hcmlvKSA9PiB0aGlzLnNlcnZpY2UudXBzZXJ0KHNjZW5hcmlvKSksXHJcblx0XHRcdG1hcCgoc2NlbmFyaW8pID0+IG5ldyBTY2VuYXJpb0ZlY2hlZEFjdGlvbihzY2VuYXJpbykpXHJcblx0XHQpO1xyXG5cclxuXHQvLyBARWZmZWN0KClcclxuXHQvLyBHZXRTY2VuYXJpbyQgPSB0aGlzLmFjdGlvbnMkXHJcblx0Ly8gXHQub2ZUeXBlKFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcy5HRVRfU0NFTkFSSU8pXHJcblx0Ly8gXHQucGlwZShcclxuXHQvLyBcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0Ly8gXHRcdHN3aXRjaE1hcChpZCA9PiB0aGlzLnNlcnZpY2UuZ2V0KGlkKSksXHJcblx0Ly8gXHRcdG1hcChydWxlID0+IG5ldyBTY2VuYXJpb0ZlY2hlZEFjdGlvbihydWxlKSlcclxuXHQvLyBcdCk7XHJcblxyXG5cdC8vIEBFZmZlY3QoKVxyXG5cdC8vIGdldF9ydWxlc19saXN0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHQvLyBcdC5vZlR5cGUoU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUX1NUQVJUKVxyXG5cdC8vIFx0LnBpcGUoXHJcblx0Ly8gXHRcdHN3aXRjaE1hcCgoZGF0YTogYW55KSA9PiB0aGlzLnNlcnZpY2UuZ2V0TGlzdCgpKSxcclxuXHQvLyBcdFx0bWFwKHJlcyA9PiBuZXcgU2NlbmFyaW9zTGlzdFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0Ly8gXHRcdGNhdGNoRXJyb3IoKCkgPT4gT2JzZXJ2YWJsZS5vZihuZXcgU2NlbmFyaW9zTGlzdEZhaWxlZEFjdGlvbigpKSlcclxuXHQvLyBcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgUnVsZXNMaXN0QWN0aW9uVHlwZXMsIFJ1bGVzTGlzdFN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4vcnVsZS1kYi5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSdWxlc0xpc3RFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4pIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEVkaXRQcm9maWxlUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUKS5tYXAoKCkgPT4gbmV3IFJ1bGVzTGlzdFN0YXJ0QWN0aW9uKCkpO1xyXG5cclxuXHQvLyBARWZmZWN0KClcclxuXHQvLyBHZXRSdWxlJCA9IHRoaXMuYWN0aW9ucyRcclxuXHQvLyBcdC5vZlR5cGUoUnVsZXNMaXN0QWN0aW9uVHlwZXMuR0VUX1JVTEUpXHJcblx0Ly8gXHQucGlwZShcclxuXHQvLyBcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0Ly8gXHRcdHN3aXRjaE1hcChpZCA9PiB0aGlzLnNlcnZpY2UuZ2V0KGlkKSksXHJcblx0Ly8gXHRcdG1hcChydWxlID0+IG5ldyBSdWxlRmVjaGVkQWN0aW9uKHJ1bGUpKVxyXG5cdC8vIFx0KTtcclxuXHJcblx0Ly8gQEVmZmVjdCgpXHJcblx0Ly8gZ2V0X3J1bGVzX2xpc3QkID0gdGhpcy5hY3Rpb25zJFxyXG5cdC8vIFx0Lm9mVHlwZShSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX1NUQVJUKVxyXG5cdC8vIFx0LnBpcGUoXHJcblx0Ly8gXHRcdHN3aXRjaE1hcCgoZGF0YTogYW55KSA9PiB0aGlzLnNlcnZpY2UuZ2V0TGlzdCgpKSxcclxuXHQvLyBcdFx0bWFwKHJlcyA9PiBuZXcgUnVsZXNMaXN0U3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHQvLyBcdFx0Y2F0Y2hFcnJvcigoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBSdWxlc0xpc3RGYWlsZWRBY3Rpb24oKSkpXHJcblx0Ly8gXHQpO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3J1bGUucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgU2hvd0FuY2hvcnNBY3Rpb24sIEhpZGVBbmNob3JzQWN0aW9uIH0gZnJvbSBcIi4uL3J1bGUtYW5jaG9yXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJnd3QtbW9kZS1idXR0b25cIixcclxuXHR0ZW1wbGF0ZTogYFxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIG1hdC1mYWIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVBbmNob3JzKClcIiBmeEZsZXg9XCJub2dyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgICA8bWF0LWljb24+c2V0dGluZ3M8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+YCxcclxuXHRzdHlsZXM6IFtgLmJ0bntwb3NpdGlvbjpmaXhlZDtib3R0b206MjVweDtyaWdodDoyNXB4O3otaW5kZXg6M31gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3d0TW9kZUJ1dHRvbkNvbXBvbmVudCB7XHJcblx0YW5jaG9yc01vZGU6IGJvb2xlYW47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xyXG5cdFx0dGhpcy5hbmNob3JzTW9kZSA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlQW5jaG9ycygpIHtcclxuXHRcdGlmICh0aGlzLmFuY2hvcnNNb2RlID09PSBmYWxzZSkge1xyXG5cdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTaG93QW5jaG9yc0FjdGlvbigpKTtcclxuXHRcdFx0dGhpcy5hbmNob3JzTW9kZSA9IHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBIaWRlQW5jaG9yc0FjdGlvbigpKTtcclxuXHRcdFx0dGhpcy5hbmNob3JzTW9kZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdFRhYnNNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRNYXRUYWJsZU1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlLCBtZXJnZUVmZmVjdHMgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgUnVsZU1vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuL3J1bGUuY29uZmlnXCI7XHJcbmltcG9ydCB7IFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ydWxlLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IFJ1bGVSZWR1Y2VycyB9IGZyb20gXCIuL3J1bGUucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgUnVsZVNlcnZpY2UsIFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlQ29tcG9uZW50IH0gZnJvbSBcIi4vcnVsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUnVsZUFuY2hvckRpcmVjdGl2ZSB9IGZyb20gXCIuL3J1bGUtYW5jaG9yL3J1bGUtYW5jaG9yLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBHd3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vZ3d0LXZpZXcvZ3d0LXZpZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFN0ZXBMb2FkZXJEaXJlY3RpdmUgfSBmcm9tIFwiLi9zdGVwLWxvYWRlci9zdGVwLWxvYWRlci5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgU2NlbmFyaW9zRGJFZmZlY3RzIH0gZnJvbSBcIi4vZGIvc2NlbmFyaW8tZGIuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBSdWxlc0xpc3RFZmZlY3RzIH0gZnJvbSBcIi4vZGIvcnVsZS1kYi5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEd3dE1vZGVCdXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi9tb2RlLWJ1dHRvbi9tb2RlLWJ1dHRvbi5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdFx0TWF0VGFibGVNb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdFRhYnNNb2R1bGUsXHJcblx0XHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0QnJvd3NlckFuaW1hdGlvbnNNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogWyBSdWxlQ29tcG9uZW50LCBSdWxlQW5jaG9yRGlyZWN0aXZlLCBHd3RWaWV3Q29tcG9uZW50LCBTdGVwTG9hZGVyRGlyZWN0aXZlLCBHd3RNb2RlQnV0dG9uQ29tcG9uZW50IF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbIEd3dFZpZXdDb21wb25lbnQgXSxcclxuXHRleHBvcnRzOiBbIFJ1bGVBbmNob3JEaXJlY3RpdmUsIEd3dE1vZGVCdXR0b25Db21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUnVsZU1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogUnVsZU1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IFJvb3RSdWxlTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFtcclxuXHRcdFx0XHR7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfHwge30gfSxcclxuXHRcdFx0XHRSdWxlU2VydmljZSxcclxuXHRcdFx0XHRSdWxlQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0UnVsZU1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJydWxlXCIsIFJ1bGVSZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBSdWxlc0xpc3RFZmZlY3RzLCBTY2VuYXJpb3NEYkVmZmVjdHMgXSksXHJcblx0XHRSb3V0aW5nTW9kdWxlXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIFJ1bGVNb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdFJ1bGVNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbIkluamVjdGlvblRva2VuIiwiQ29tcG9uZW50IiwiUm91dGVyTW9kdWxlIiwiQmVoYXZpb3JTdWJqZWN0IiwiSW5qZWN0YWJsZSIsIkluamVjdCIsIlN0b3JlIiwiSW5qZWN0b3IiLCJIdHRwQ2xpZW50IiwiRGlyZWN0aXZlIiwiQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIiwiVmlld0NvbnRhaW5lclJlZiIsIklucHV0IiwiVmlld0NoaWxkIiwibWFwIiwic2hhcmUiLCJmaWx0ZXIiLCJzdGFydFdpdGgiLCJTdWJqZWN0IiwidGFrZVVudGlsIiwiRm9ybUdyb3VwIiwiRm9ybUNvbnRyb2wiLCJNQVRfQk9UVE9NX1NIRUVUX0RBVEEiLCJWaWV3Q2hpbGRyZW4iLCJ6aXAiLCJzd2l0Y2hNYXAiLCJvZiIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJNYXRCb3R0b21TaGVldCIsIkhvc3RMaXN0ZW5lciIsImluaXRpYWxTdGF0ZSIsImZyb21SdWxlQW5jaG9yLlJlZHVjZXIiLCJmcm9tUnVsZURiQW5jaG9yLnJlZHVjZXIiLCJmcm9tU2NlbmFyaW9EYkFuY2hvci5yZWR1Y2VyIiwiQWN0aW9ucyIsIkVmZmVjdCIsIk5nTW9kdWxlIiwiSHR0cENsaWVudE1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTWF0RXhwYW5zaW9uTW9kdWxlIiwiTWF0U25hY2tCYXJNb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0Q2FyZE1vZHVsZSIsIk1hdENoZWNrYm94TW9kdWxlIiwiTWF0VGFibGVNb2R1bGUiLCJNYXRTZWxlY3RNb2R1bGUiLCJNYXRJbnB1dE1vZHVsZSIsIk1hdEZvcm1GaWVsZE1vZHVsZSIsIk1hdFRhYnNNb2R1bGUiLCJNYXREaXZpZGVyTW9kdWxlIiwiRmxleExheW91dE1vZHVsZSIsIk1hdFJhZGlvTW9kdWxlIiwiTWF0U2xpZGVUb2dnbGVNb2R1bGUiLCJSZWFjdGl2ZUZvcm1zTW9kdWxlIiwiQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUiLCJTdG9yZU1vZHVsZSIsIkVmZmVjdHNNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx5QkFRYSxxQkFBcUIsR0FBcUI7UUFDdEQsU0FBUyxFQUFFLEVBQUU7UUFDYixXQUFXLEVBQUUsRUFBRTtLQUNmLENBQUM7QUFDRix5QkFBYSxtQkFBbUIsR0FBRyxJQUFJQSxpQkFBYyxDQUFtQixrQkFBa0IsQ0FBQzs7Ozs7O0FDWjNGO1FBU0M7U0FBZ0I7Ozs7UUFFaEIsZ0NBQVE7OztZQUFSLGVBQWE7O29CQVRiQyxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFFBQVEsRUFBRSxtR0FFSjtxQkFDTjs7Ozs0QkFQRDs7Ozs7OztBQ0NBLElBSUEscUJBQU0sTUFBTSxHQUFXO1FBQ3RCO1lBQ0MsSUFBSSxFQUFFLE1BQU07WUFDWixTQUFTLEVBQUUsYUFBYTtTQUV4QjtLQUNELENBQUM7QUFFRix5QkFBYSxhQUFhLEdBQXdCQyxtQkFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7O0lDYi9FOzs7Ozs7Ozs7Ozs7OztBQWNBLElBWU8sSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxrQkFBa0IsQ0FBQztRQUN0RCxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqRCxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztnQkFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FB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