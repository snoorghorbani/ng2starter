/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Inject, Injector, ViewChildren } from "@angular/core";
import { map, takeUntil } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { BehaviorSubject, Subject } from "rxjs";
import { MAT_BOTTOM_SHEET_DATA } from "@angular/material";
import { FormGroup } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { RuleConfigurationService } from "../services/rule-configuration.service";
import { GwtScenarioModel } from "../models/gwt-scenario.model";
import { UpsertScenarioAction } from "../db/scenario-db.actions";
import { StepLoaderDirective } from "../step-loader/step-loader.directive";
import { ScenarioService } from "../services/scenario.service";
var GwtViewComponent = /** @class */ (function () {
    function GwtViewComponent(store, configService, scenarioService, injector, data) {
        this.store = store;
        this.configService = configService;
        this.scenarioService = scenarioService;
        this.injector = injector;
        this.data = data;
        this.unsubscribe = new Subject();
        this.scenario$ = new BehaviorSubject(new GwtScenarioModel());
        this.scenarios$ = new BehaviorSubject([]);
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
export { GwtViewComponent };
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
    /** @type {?} */
    GwtViewComponent.prototype.store;
    /** @type {?} */
    GwtViewComponent.prototype.configService;
    /** @type {?} */
    GwtViewComponent.prototype.scenarioService;
    /** @type {?} */
    GwtViewComponent.prototype.injector;
    /** @type {?} */
    GwtViewComponent.prototype.data;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3d0LXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL2d3dC12aWV3L2d3dC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQVEsUUFBUSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsR0FBRyxFQUEwQixTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBYyxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTFELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFbEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztJQWdCOUQsMEJBQ1MsT0FDQSxlQUNBLGlCQUNBLFVBQytCLElBQVM7UUFKeEMsVUFBSyxHQUFMLEtBQUs7UUFDTCxrQkFBYSxHQUFiLGFBQWE7UUFDYixvQkFBZSxHQUFmLGVBQWU7UUFDZixhQUFRLEdBQVIsUUFBUTtRQUN1QixTQUFJLEdBQUosSUFBSSxDQUFLO1FBYmpELG1CQUFjLElBQUksT0FBTyxF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Q0FBQyxRQUFRLENBQUM7YUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDakMsU0FBUyxDQUFDLFVBQUEsU0FBUztZQUNuQixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLGdCQUFnQixFQUFFLENBQUMsQ0FBQztTQUM1RCxDQUFDLENBQUM7S0FDSjs7OztJQUNELHNEQUEyQjs7O0lBQTNCO1FBQ0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3RDLFNBQVMsRUFBRSxJQUFJLFdBQVcsRUFBRTtZQUM1QixJQUFJLEVBQUUsSUFBSSxXQUFXLEVBQUU7U0FDdkIsQ0FBQyxDQUFDO0tBQ0g7Ozs7SUFDRCxvRkFBeUQ7OztJQUF6RDtRQUNDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztLQUM3RDs7OztJQUNELDhDQUFtQjs7O0lBQW5CO1FBQ0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7S0FDMUQ7O2dCQXJHRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLDY4R0FBd0M7O2lCQUV4Qzs7OztnQkFuQlEsS0FBSztnQkFPTCx3QkFBd0I7Z0JBTXhCLGVBQWU7Z0JBZmtCLFFBQVE7Z0RBb0MvQyxNQUFNLFNBQUMscUJBQXFCOzs7OEJBTjdCLFlBQVksU0FBQyxtQkFBbUI7OzJCQTlCbEM7O1NBc0JhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIFR5cGUsIEluamVjdG9yLCBWaWV3Q2hpbGRyZW4sIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IG1hcCwgZmlsdGVyLCB3aXRoTGF0ZXN0RnJvbSwgdGFrZVVudGlsIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IE1BVF9CT1RUT01fU0hFRVRfREFUQSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcnVsZS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3d0U3RlcCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXN0ZXAubW9kZWxcIjtcclxuaW1wb3J0IHsgR3d0U2NlbmFyaW9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3J1bGUucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgVXBzZXJ0U2NlbmFyaW9BY3Rpb24gfSBmcm9tIFwiLi4vZGIvc2NlbmFyaW8tZGIuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBTdGVwTG9hZGVyRGlyZWN0aXZlIH0gZnJvbSBcIi4uL3N0ZXAtbG9hZGVyL3N0ZXAtbG9hZGVyLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2NlbmFyaW8uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLWd3dC12aWV3XCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9nd3Qtdmlldy5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogW1wiLi9nd3Qtdmlldy5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHd3RWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdHVuc3Vic2NyaWJlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHRzdGVwcyQ6IE9ic2VydmFibGU8R3d0U3RlcFtdPjtcclxuXHRzdGVwczogR3d0U3RlcFtdO1xyXG5cdHNjZW5hcmlvJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R3d0U2NlbmFyaW9Nb2RlbD4obmV3IEd3dFNjZW5hcmlvTW9kZWwoKSk7XHJcblx0c2NlbmFyaW9zJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R3d0U2NlbmFyaW9Nb2RlbFtdPihbXSk7XHJcblx0c2NlbmFyaW9Gb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRmZWF0dXJlcyQ6IHN0cmluZ1tdO1xyXG5cdEBWaWV3Q2hpbGRyZW4oU3RlcExvYWRlckRpcmVjdGl2ZSkgc3RlcExvYWRlcnM6IFN0ZXBMb2FkZXJEaXJlY3RpdmVbXTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBzY2VuYXJpb1NlcnZpY2U6IFNjZW5hcmlvU2VydmljZSxcclxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG5cdFx0QEluamVjdChNQVRfQk9UVE9NX1NIRUVUX0RBVEEpIHByaXZhdGUgZGF0YTogYW55XHJcblx0KSB7XHJcblx0XHR0aGlzLl9jcmVhdGVfc2NlbmFyaW9fZm9ybV9ncm91cCgpO1xyXG5cdFx0dGhpcy5faW5pdF9mZWF0dXJlc19saXN0KCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc3RlcHMkID0gdGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyQucGlwZShtYXAoY29uZmlnID0+IGNvbmZpZy5zdGVwcyksIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSk7XHJcblx0XHR0aGlzLnN0ZXBzJC5zdWJzY3JpYmUoc3RlcHMgPT4gKHRoaXMuc3RlcHMgPSBzdGVwcykpO1xyXG5cdFx0dGhpcy5fbG9hZF9zY2VuYXJpb19hbmRfbWFwX3NjZW5hcmlvX3N0ZXBfdG9fc3RlcHNfY2xhc3MoKTtcclxuXHRcdHRoaXMuc2NlbmFyaW8kLnN1YnNjcmliZShzID0+IHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLm5leHQoKTtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUuY29tcGxldGUoKTtcclxuXHR9XHJcblx0c2F2ZSgpIHtcclxuXHRcdGNvbnN0IHNjZW5hcmlvID0gdGhpcy5zY2VuYXJpbyQuZ2V0VmFsdWUoKTtcclxuXHRcdHRoaXMuc3RlcExvYWRlcnMuZm9yRWFjaChzdGVwTG9hZGVyID0+IHtcclxuXHRcdFx0c2NlbmFyaW8uc3RlcHMuZmluZChzdGVwID0+IHN0ZXAubmFtZSA9PT0gc3RlcExvYWRlci5zdGVwLm5hbWUpLnBhcmFtcyA9IHN0ZXBMb2FkZXIucGFyYW1zO1xyXG5cdFx0fSk7XHJcblx0XHRzY2VuYXJpby5mZWF0dXJlSWQgPSB0aGlzLnNjZW5hcmlvRm9ybUdyb3VwLnZhbHVlLmZlYXR1cmVJZDtcclxuXHRcdHNjZW5hcmlvLm5hbWUgPSB0aGlzLnNjZW5hcmlvRm9ybUdyb3VwLnZhbHVlLm5hbWU7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRTY2VuYXJpb0FjdGlvbihzY2VuYXJpbykpO1xyXG5cdH1cclxuXHRhZGRTdGVwVG9TY2VuYXJpbyhzdGVwOiBHd3RTdGVwKSB7XHJcblx0XHRjb25zdCBzY2VuYXJpbyA9IHRoaXMuc2NlbmFyaW8kLmdldFZhbHVlKCk7XHJcblx0XHRzY2VuYXJpby5zdGVwcy5wdXNoKHN0ZXApO1xyXG5cdFx0dGhpcy5zY2VuYXJpbyQubmV4dChzY2VuYXJpbyk7XHJcblx0fVxyXG5cdGRlbGV0ZVN0ZXBGcm9tU2NlbmFyaW8oc3RlcDogR3d0U3RlcCkge1xyXG5cdFx0Y29uc3Qgc2NlbmFyaW8gPSB0aGlzLnNjZW5hcmlvJC5nZXRWYWx1ZSgpO1xyXG5cdFx0c2NlbmFyaW8uc3RlcHMuc3BsaWNlKHNjZW5hcmlvLnN0ZXBzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gc3RlcC5uYW1lKSwgMSk7XHJcblx0XHR0aGlzLnNjZW5hcmlvJC5uZXh0KHNjZW5hcmlvKTtcclxuXHR9XHJcblx0ZGVjU2NlbmFyaW9TdGVwUHJpb3JpdHkoc3RlcDogR3d0U3RlcCkgeyB9XHJcblx0aW5jU2NlbmFyaW9TdGVwUHJpb3JpdHkoc3RlcDogR3d0U3RlcCkgeyB9XHJcblx0YWRkTmV3U2NlbmFyaW8oKSB7XHJcblx0XHRjb25zdCBzY2VuYXJpb3MgPSB0aGlzLnNjZW5hcmlvcyQuZ2V0VmFsdWUoKTtcclxuXHRcdHNjZW5hcmlvcy5wdXNoKFxyXG5cdFx0XHRuZXcgR3d0U2NlbmFyaW9Nb2RlbCh7XHJcblx0XHRcdFx0YW5jaG9ySWQ6IHRoaXMuZGF0YS5hbmNob3JJZFxyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHRcdHRoaXMuc2NlbmFyaW9zJC5uZXh0KHNjZW5hcmlvcyk7XHJcblx0fVxyXG5cdGFjdGl2ZVNjZW5hcmlvKHNjZW5hcmlvOiBHd3RTY2VuYXJpb01vZGVsKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHNjZW5hcmlvLnN0ZXBzID0gc2NlbmFyaW8uc3RlcHMubWFwKHNjZW5hcmlvU3RlcCA9PiB7XHJcblx0XHRcdGNvbnN0IF9zdGVwID0gdGhpcy5zdGVwcy5maW5kKHN0ZXAgPT4gc3RlcC5pZCA9PT0gc2NlbmFyaW9TdGVwLmlkKTtcclxuXHRcdFx0Y29uc3Qgc3RlcCA9IE9iamVjdC5jcmVhdGUoX3N0ZXApO1xyXG5cdFx0XHRzdGVwLnBhcmFtcyA9IHNjZW5hcmlvU3RlcC5wYXJhbXM7XHJcblx0XHRcdHJldHVybiBzdGVwO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnNjZW5hcmlvRm9ybUdyb3VwLnBhdGNoVmFsdWUoc2NlbmFyaW8pO1xyXG5cdFx0c2NlbmFyaW8uYW5jaG9ySWQgPSB0aGlzLmRhdGEuYW5jaG9ySWQ7XHJcblx0XHR0aGlzLnNjZW5hcmlvJC5uZXh0KHNjZW5hcmlvKTtcclxuXHR9XHJcblxyXG5cdF9sb2FkX3NjZW5hcmlvX2FuZF9tYXBfc2NlbmFyaW9fc3RlcF90b19zdGVwc19jbGFzcygpIHtcclxuXHRcdHRoaXMuc2NlbmFyaW9TZXJ2aWNlXHJcblx0XHRcdC5nZXRBbmNob3JTY2VuYXJpb3ModGhpcy5kYXRhLmFuY2hvcklkKVxyXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSkpXHJcblx0XHRcdC5zdWJzY3JpYmUoc2NlbmFyaW9zID0+IHtcclxuXHRcdFx0XHR0aGlzLnNjZW5hcmlvcyQubmV4dChzY2VuYXJpb3MpO1xyXG5cdFx0XHRcdHRoaXMuYWN0aXZlU2NlbmFyaW8oc2NlbmFyaW9zWzBdIHx8IG5ldyBHd3RTY2VuYXJpb01vZGVsKCkpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0X2NyZWF0ZV9zY2VuYXJpb19mb3JtX2dyb3VwKCkge1xyXG5cdFx0dGhpcy5zY2VuYXJpb0Zvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRmZWF0dXJlSWQ6IG5ldyBGb3JtQ29udHJvbCgpLFxyXG5cdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9yZXNldF9zY2VuYXJpb19mb3JtX2dyb3VwX2FuZF9wYXRjaF93aXRoX2FjdGl2ZV9zY2VuYXJpbygpIHtcclxuXHRcdHRoaXMuc2NlbmFyaW9Gb3JtR3JvdXAucmVzZXQoKTtcclxuXHRcdHRoaXMuc2NlbmFyaW9Gb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLnNjZW5hcmlvJC5nZXRWYWx1ZSgpKTtcclxuXHR9XHJcblx0X2luaXRfZmVhdHVyZXNfbGlzdCgpIHtcclxuXHRcdHRoaXMuZmVhdHVyZXMkID0gW1wi2YXYr9uM2LHbjNiqINmG2YXYp9uM2LQg2KjYsdin2LPYp9izINiv2LPYqtix2LPbjCDZh9in24wg2qnYp9ix2KjYsVwiXTtcclxuXHR9XHJcbn1cclxuIl19