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
export class GwtViewComponent {
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
        this.scenario$ = new BehaviorSubject(new GwtScenarioModel());
        this.scenarios$ = new BehaviorSubject([]);
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
        /** @type {?} */
        const scenario = this.scenario$.getValue();
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
        scenario.steps = scenario.steps.map(scenarioStep => {
            /** @type {?} */
            const _step = this.steps.find(step => step.id === scenarioStep.id);
            /** @type {?} */
            const step = Object.create(_step);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3d0LXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL2d3dC12aWV3L2d3dC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQVEsUUFBUSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsR0FBRyxFQUEwQixTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBYyxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTFELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFbEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTy9ELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7O0lBUzVCLFlBQ1MsT0FDQSxlQUNBLGlCQUNBLFVBQytCLElBQVM7UUFKeEMsVUFBSyxHQUFMLEtBQUs7UUFDTCxrQkFBYSxHQUFiLGFBQWE7UUFDYixvQkFBZSxHQUFmLGVBQWU7UUFDZixhQUFRLEdBQVIsUUFBUTtRQUN1QixTQUFJLEdBQUosSUFBSSxD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LENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLGdCQUFnQixFQUFFLENBQUMsQ0FBQztTQUM1RCxDQUFDLENBQUM7S0FDSjs7OztJQUNELDJCQUEyQjtRQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDdEMsU0FBUyxFQUFFLElBQUksV0FBVyxFQUFFO1lBQzVCLElBQUksRUFBRSxJQUFJLFdBQVcsRUFBRTtTQUN2QixDQUFDLENBQUM7S0FDSDs7OztJQUNELHlEQUF5RDtRQUN4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7S0FDN0Q7Ozs7SUFDRCxtQkFBbUI7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7S0FDMUQ7OztZQXJHRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLDY4R0FBd0M7O2FBRXhDOzs7O1lBbkJRLEtBQUs7WUFPTCx3QkFBd0I7WUFNeEIsZUFBZTtZQWZrQixRQUFROzRDQW9DL0MsTUFBTSxTQUFDLHFCQUFxQjs7OzBCQU43QixZQUFZLFNBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgVHlwZSwgSW5qZWN0b3IsIFZpZXdDaGlsZHJlbiwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHdpdGhMYXRlc3RGcm9tLCB0YWtlVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgTUFUX0JPVFRPTV9TSEVFVF9EQVRBIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ydWxlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHd3RTdGVwIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc3RlcC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHd3RTY2VuYXJpb01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWxcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcnVsZS5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBVcHNlcnRTY2VuYXJpb0FjdGlvbiB9IGZyb20gXCIuLi9kYi9zY2VuYXJpby1kYi5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFN0ZXBMb2FkZXJEaXJlY3RpdmUgfSBmcm9tIFwiLi4vc3RlcC1sb2FkZXIvc3RlcC1sb2FkZXIuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IFNjZW5hcmlvU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2VuYXJpby5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtZ3d0LXZpZXdcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2d3dC12aWV3LmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbXCIuL2d3dC12aWV3LmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEd3dFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0dW5zdWJzY3JpYmUgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cdHN0ZXBzJDogT2JzZXJ2YWJsZTxHd3RTdGVwW10+O1xyXG5cdHN0ZXBzOiBHd3RTdGVwW107XHJcblx0c2NlbmFyaW8kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHd3RTY2VuYXJpb01vZGVsPihuZXcgR3d0U2NlbmFyaW9Nb2RlbCgpKTtcclxuXHRzY2VuYXJpb3MkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHd3RTY2VuYXJpb01vZGVsW10+KFtdKTtcclxuXHRzY2VuYXJpb0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGZlYXR1cmVzJDogc3RyaW5nW107XHJcblx0QFZpZXdDaGlsZHJlbihTdGVwTG9hZGVyRGlyZWN0aXZlKSBzdGVwTG9hZGVyczogU3RlcExvYWRlckRpcmVjdGl2ZVtdO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHNjZW5hcmlvU2VydmljZTogU2NlbmFyaW9TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcblx0XHRASW5qZWN0KE1BVF9CT1RUT01fU0hFRVRfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnlcclxuXHQpIHtcclxuXHRcdHRoaXMuX2NyZWF0ZV9zY2VuYXJpb19mb3JtX2dyb3VwKCk7XHJcblx0XHR0aGlzLl9pbml0X2ZlYXR1cmVzX2xpc3QoKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdGVwcyQgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJC5waXBlKG1hcChjb25maWcgPT4gY29uZmlnLnN0ZXBzKSwgdGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpKTtcclxuXHRcdHRoaXMuc3RlcHMkLnN1YnNjcmliZShzdGVwcyA9PiAodGhpcy5zdGVwcyA9IHN0ZXBzKSk7XHJcblx0XHR0aGlzLl9sb2FkX3NjZW5hcmlvX2FuZF9tYXBfc2NlbmFyaW9fc3RlcF90b19zdGVwc19jbGFzcygpO1xyXG5cdFx0dGhpcy5zY2VuYXJpbyQuc3Vic2NyaWJlKHMgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUubmV4dCgpO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xyXG5cdH1cclxuXHRzYXZlKCkge1xyXG5cdFx0Y29uc3Qgc2NlbmFyaW8gPSB0aGlzLnNjZW5hcmlvJC5nZXRWYWx1ZSgpO1xyXG5cdFx0dGhpcy5zdGVwTG9hZGVycy5mb3JFYWNoKHN0ZXBMb2FkZXIgPT4ge1xyXG5cdFx0XHRzY2VuYXJpby5zdGVwcy5maW5kKHN0ZXAgPT4gc3RlcC5uYW1lID09PSBzdGVwTG9hZGVyLnN0ZXAubmFtZSkucGFyYW1zID0gc3RlcExvYWRlci5wYXJhbXM7XHJcblx0XHR9KTtcclxuXHRcdHNjZW5hcmlvLmZlYXR1cmVJZCA9IHRoaXMuc2NlbmFyaW9Gb3JtR3JvdXAudmFsdWUuZmVhdHVyZUlkO1xyXG5cdFx0c2NlbmFyaW8ubmFtZSA9IHRoaXMuc2NlbmFyaW9Gb3JtR3JvdXAudmFsdWUubmFtZTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwc2VydFNjZW5hcmlvQWN0aW9uKHNjZW5hcmlvKSk7XHJcblx0fVxyXG5cdGFkZFN0ZXBUb1NjZW5hcmlvKHN0ZXA6IEd3dFN0ZXApIHtcclxuXHRcdGNvbnN0IHNjZW5hcmlvID0gdGhpcy5zY2VuYXJpbyQuZ2V0VmFsdWUoKTtcclxuXHRcdHNjZW5hcmlvLnN0ZXBzLnB1c2goc3RlcCk7XHJcblx0XHR0aGlzLnNjZW5hcmlvJC5uZXh0KHNjZW5hcmlvKTtcclxuXHR9XHJcblx0ZGVsZXRlU3RlcEZyb21TY2VuYXJpbyhzdGVwOiBHd3RTdGVwKSB7XHJcblx0XHRjb25zdCBzY2VuYXJpbyA9IHRoaXMuc2NlbmFyaW8kLmdldFZhbHVlKCk7XHJcblx0XHRzY2VuYXJpby5zdGVwcy5zcGxpY2Uoc2NlbmFyaW8uc3RlcHMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5uYW1lID09PSBzdGVwLm5hbWUpLCAxKTtcclxuXHRcdHRoaXMuc2NlbmFyaW8kLm5leHQoc2NlbmFyaW8pO1xyXG5cdH1cclxuXHRkZWNTY2VuYXJpb1N0ZXBQcmlvcml0eShzdGVwOiBHd3RTdGVwKSB7IH1cclxuXHRpbmNTY2VuYXJpb1N0ZXBQcmlvcml0eShzdGVwOiBHd3RTdGVwKSB7IH1cclxuXHRhZGROZXdTY2VuYXJpbygpIHtcclxuXHRcdGNvbnN0IHNjZW5hcmlvcyA9IHRoaXMuc2NlbmFyaW9zJC5nZXRWYWx1ZSgpO1xyXG5cdFx0c2NlbmFyaW9zLnB1c2goXHJcblx0XHRcdG5ldyBHd3RTY2VuYXJpb01vZGVsKHtcclxuXHRcdFx0XHRhbmNob3JJZDogdGhpcy5kYXRhLmFuY2hvcklkXHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5zY2VuYXJpb3MkLm5leHQoc2NlbmFyaW9zKTtcclxuXHR9XHJcblx0YWN0aXZlU2NlbmFyaW8oc2NlbmFyaW86IEd3dFNjZW5hcmlvTW9kZWwpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0c2NlbmFyaW8uc3RlcHMgPSBzY2VuYXJpby5zdGVwcy5tYXAoc2NlbmFyaW9TdGVwID0+IHtcclxuXHRcdFx0Y29uc3QgX3N0ZXAgPSB0aGlzLnN0ZXBzLmZpbmQoc3RlcCA9PiBzdGVwLmlkID09PSBzY2VuYXJpb1N0ZXAuaWQpO1xyXG5cdFx0XHRjb25zdCBzdGVwID0gT2JqZWN0LmNyZWF0ZShfc3RlcCk7XHJcblx0XHRcdHN0ZXAucGFyYW1zID0gc2NlbmFyaW9TdGVwLnBhcmFtcztcclxuXHRcdFx0cmV0dXJuIHN0ZXA7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc2NlbmFyaW9Gb3JtR3JvdXAucGF0Y2hWYWx1ZShzY2VuYXJpbyk7XHJcblx0XHRzY2VuYXJpby5hbmNob3JJZCA9IHRoaXMuZGF0YS5hbmNob3JJZDtcclxuXHRcdHRoaXMuc2NlbmFyaW8kLm5leHQoc2NlbmFyaW8pO1xyXG5cdH1cclxuXHJcblx0X2xvYWRfc2NlbmFyaW9fYW5kX21hcF9zY2VuYXJpb19zdGVwX3RvX3N0ZXBzX2NsYXNzKCkge1xyXG5cdFx0dGhpcy5zY2VuYXJpb1NlcnZpY2VcclxuXHRcdFx0LmdldEFuY2hvclNjZW5hcmlvcyh0aGlzLmRhdGEuYW5jaG9ySWQpXHJcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSlcclxuXHRcdFx0LnN1YnNjcmliZShzY2VuYXJpb3MgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2NlbmFyaW9zJC5uZXh0KHNjZW5hcmlvcyk7XHJcblx0XHRcdFx0dGhpcy5hY3RpdmVTY2VuYXJpbyhzY2VuYXJpb3NbMF0gfHwgbmV3IEd3dFNjZW5hcmlvTW9kZWwoKSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRfY3JlYXRlX3NjZW5hcmlvX2Zvcm1fZ3JvdXAoKSB7XHJcblx0XHR0aGlzLnNjZW5hcmlvRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdGZlYXR1cmVJZDogbmV3IEZvcm1Db250cm9sKCksXHJcblx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbCgpXHJcblx0XHR9KTtcclxuXHR9XHJcblx0X3Jlc2V0X3NjZW5hcmlvX2Zvcm1fZ3JvdXBfYW5kX3BhdGNoX3dpdGhfYWN0aXZlX3NjZW5hcmlvKCkge1xyXG5cdFx0dGhpcy5zY2VuYXJpb0Zvcm1Hcm91cC5yZXNldCgpO1xyXG5cdFx0dGhpcy5zY2VuYXJpb0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMuc2NlbmFyaW8kLmdldFZhbHVlKCkpO1xyXG5cdH1cclxuXHRfaW5pdF9mZWF0dXJlc19saXN0KCkge1xyXG5cdFx0dGhpcy5mZWF0dXJlcyQgPSBbXCLZhdiv24zYsduM2Kog2YbZhdin24zYtCDYqNix2KfYs9in2LMg2K/Ys9iq2LHYs9uMINmH2KfbjCDaqdin2LHYqNixXCJdO1xyXG5cdH1cclxufVxyXG4iXX0=