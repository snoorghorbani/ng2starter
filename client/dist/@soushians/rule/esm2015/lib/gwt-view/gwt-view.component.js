/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
function GwtViewComponent_tsickle_Closure_declarations() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3d0LXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL2d3dC12aWV3L2d3dC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQVEsUUFBUSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsR0FBRyxFQUEwQixTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBYyxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTFELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFbEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBNkUvRCxNQUFNOzs7Ozs7OztJQVNMLFlBQ1MsT0FDQSxlQUNBLGlCQUNBLFVBQytCLElBQVM7UUFKeEMsVUFBSyxHQUFMLEtBQUs7UUFDTCxrQkFBYSxHQUFiLGFBQWE7UUFDYixvQkFBZSxHQUFmLGVBQWU7UUFDZixhQUFRLEdBQVIsUUFBUTtRQUN1QixTQUFJLEdBQUosSUFBSSxDQUFLOzJCQWJuQyxJ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U0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1NBQzVELENBQUMsQ0FBQztLQUNKOzs7O0lBQ0QsMkJBQTJCO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUN0QyxTQUFTLEVBQUUsSUFBSSxXQUFXLEVBQUU7WUFDNUIsSUFBSSxFQUFFLElBQUksV0FBVyxFQUFFO1NBQ3ZCLENBQUMsQ0FBQztLQUNIOzs7O0lBQ0QseURBQXlEO1FBQ3hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztLQUM3RDs7OztJQUNELG1CQUFtQjtRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztLQUMxRDs7O1lBM0tELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bc0VKO2dCQUNOLE1BQU0sRUFBRSxDQUFDLHFFQUFxRSxDQUFDO2FBQy9FOzs7O1lBekZRLEtBQUs7WUFPTCx3QkFBd0I7WUFNeEIsZUFBZTtZQWZrQixRQUFROzRDQTBHL0MsTUFBTSxTQUFDLHFCQUFxQjs7OzBCQU43QixZQUFZLFNBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgVHlwZSwgSW5qZWN0b3IsIFZpZXdDaGlsZHJlbiwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHdpdGhMYXRlc3RGcm9tLCB0YWtlVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgTUFUX0JPVFRPTV9TSEVFVF9EQVRBIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ydWxlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHd3RTdGVwIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc3RlcC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHd3RTY2VuYXJpb01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWxcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcnVsZS5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBVcHNlcnRTY2VuYXJpb0FjdGlvbiB9IGZyb20gXCIuLi9kYi9zY2VuYXJpby1kYi5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFN0ZXBMb2FkZXJEaXJlY3RpdmUgfSBmcm9tIFwiLi4vc3RlcC1sb2FkZXIvc3RlcC1sb2FkZXIuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IFNjZW5hcmlvU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2VuYXJpby5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtZ3d0LXZpZXdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICA8ZGl2IGZ4RmxleD1cIjQwMHB4XCIgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEdhcD1cIjE1cHhcIj5cclxuICAgIDwhLS0gPGRpdiBmeExheW91dD1cInJvdyB3cmFwXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIiBmeEZsZXg9XCIxMDBcIj5cclxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2YHbjNmE2KrYsVwiPlxyXG4gICAgICA8bWF0LWljb24gbWF0U3VmZml4PnNlYXJjaDwvbWF0LWljb24+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPG1hdC1jaGVja2JveCBmeEZsZXggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPtmB2LHYtiDaqdmG24zYrzwvbWF0LWNoZWNrYm94PlxyXG4gICAgPG1hdC1jaGVja2JveCBmeEZsZXggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPtmH2Ybar9in2YXbjCDaqdmHPC9tYXQtY2hlY2tib3g+XHJcbiAgICA8bWF0LWNoZWNrYm94IGZ4RmxleCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+2KLZhtqv2KfZhzwvbWF0LWNoZWNrYm94PlxyXG4gIDwvZGl2PiAtLT5cclxuICAgIDxtYXQtY2FyZCBjbGFzcz1cInN0ZXBzLWl0ZW1cIiAqbmdGb3I9XCJsZXQgc3RlcCBvZiBzdGVwcyQgfCBhc3luY1wiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInN0ZXAtdGV4dFwiPlxyXG4gICAgICAgIHt7c3RlcC5kZXNjcmlwdGlvbn19XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJhZGQtYnV0dG9uXCIgKGNsaWNrKT1cImFkZFN0ZXBUb1NjZW5hcmlvKHN0ZXApXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPmFycm93X2JhY2tfaW9zPC9tYXQtaWNvbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGZ4RmxleD1cIjcwMHB4XCI+XHJcbiAgICA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwic2NlbmFyaW8tdG9vbGJhclwiPlxyXG4gICAgICA8ZGl2IGZ4RmxleD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmaXRcIj5cclxuICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwi2YjZkNuM2pjar9uMXCIgKHNlbGVjdGlvbkNoYW5nZSk9XCJhY3RpdmVTY2VuYXJpbygkZXZlbnQudmFsdWUpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBzY2VuYXJpbyBvZiBzY2VuYXJpb3MkIHwgYXN5bmNcIiBbdmFsdWVdPVwic2NlbmFyaW9cIj5cclxuICAgICAgICAgICAgICB7eyBzY2VuYXJpby5mZWF0dXJlSWQgfX0gOiB7eyBzY2VuYXJpby5uYW1lIH19XHJcbiAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkTmV3U2NlbmFyaW8oKVwiPlxyXG4gICAgICAgINir2KjYqiDYs9mG2KfYsduM2Ygg2KzYr9uM2K9cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEdhcD1cIjE1cHhcIj5cclxuICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiMjVweFwiIFtmb3JtR3JvdXBdPVwic2NlbmFyaW9Gb3JtR3JvdXBcIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiNTBcIj5cclxuICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwi2YjbjNqY2q/bjFwiIGZvcm1Db250cm9sTmFtZT1cImZlYXR1cmVJZFwiPlxyXG4gICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZmVhdHVyZSBvZiBmZWF0dXJlcyRcIiBbdmFsdWVdPVwiZmVhdHVyZVwiPlxyXG4gICAgICAgICAgICAgIHt7IGZlYXR1cmUgfX1cclxuICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cIjUwXCI+XHJcbiAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLZhtin2YVcIiBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHN0ZXAgb2YgKHNjZW5hcmlvJCB8IGFzeW5jKS5zdGVwc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzY2VuYXJpby1zdGVwcy1pdGVtXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyIHJ1bGUtc3RlcC1sb2FkZXIgW3N0ZXBdPVwic3RlcFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNjZW5hcmlvLXN0ZXBzLWFjdGlvblwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiZGVsZXRlU3RlcEZyb21TY2VuYXJpbyhzdGVwKVwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImluY1NjZW5hcmlvU3RlcFByaW9yaXR5KHN0ZXApXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X3VwPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJkZWNTY2VuYXJpb1N0ZXBQcmlvcml0eShzdGVwKVwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19kb3duPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxidXR0b24gZnhGbGV4PVwibm9ncm93XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInNhdmUoKVwiPlxyXG4gICAgICAgINir2KjYqlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDB2d30uc2NlbmFyaW8tdG9vbGJhcntoZWlnaHQ6NjBweDttYXJnaW4tYm90dG9tOjIwcHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEd3dFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0dW5zdWJzY3JpYmUgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cdHN0ZXBzJDogT2JzZXJ2YWJsZTxHd3RTdGVwW10+O1xyXG5cdHN0ZXBzOiBHd3RTdGVwW107XHJcblx0c2NlbmFyaW8kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHd3RTY2VuYXJpb01vZGVsPihuZXcgR3d0U2NlbmFyaW9Nb2RlbCgpKTtcclxuXHRzY2VuYXJpb3MkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHd3RTY2VuYXJpb01vZGVsW10+KFtdKTtcclxuXHRzY2VuYXJpb0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGZlYXR1cmVzJDogc3RyaW5nW107XHJcblx0QFZpZXdDaGlsZHJlbihTdGVwTG9hZGVyRGlyZWN0aXZlKSBzdGVwTG9hZGVyczogU3RlcExvYWRlckRpcmVjdGl2ZVtdO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHNjZW5hcmlvU2VydmljZTogU2NlbmFyaW9TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcblx0XHRASW5qZWN0KE1BVF9CT1RUT01fU0hFRVRfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnlcclxuXHQpIHtcclxuXHRcdHRoaXMuX2NyZWF0ZV9zY2VuYXJpb19mb3JtX2dyb3VwKCk7XHJcblx0XHR0aGlzLl9pbml0X2ZlYXR1cmVzX2xpc3QoKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdGVwcyQgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJC5waXBlKG1hcChjb25maWcgPT4gY29uZmlnLnN0ZXBzKSwgdGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpKTtcclxuXHRcdHRoaXMuc3RlcHMkLnN1YnNjcmliZShzdGVwcyA9PiAodGhpcy5zdGVwcyA9IHN0ZXBzKSk7XHJcblx0XHR0aGlzLl9sb2FkX3NjZW5hcmlvX2FuZF9tYXBfc2NlbmFyaW9fc3RlcF90b19zdGVwc19jbGFzcygpO1xyXG5cdFx0dGhpcy5zY2VuYXJpbyQuc3Vic2NyaWJlKHMgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUubmV4dCgpO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xyXG5cdH1cclxuXHRzYXZlKCkge1xyXG5cdFx0Y29uc3Qgc2NlbmFyaW8gPSB0aGlzLnNjZW5hcmlvJC5nZXRWYWx1ZSgpO1xyXG5cdFx0dGhpcy5zdGVwTG9hZGVycy5mb3JFYWNoKHN0ZXBMb2FkZXIgPT4ge1xyXG5cdFx0XHRzY2VuYXJpby5zdGVwcy5maW5kKHN0ZXAgPT4gc3RlcC5uYW1lID09PSBzdGVwTG9hZGVyLnN0ZXAubmFtZSkucGFyYW1zID0gc3RlcExvYWRlci5wYXJhbXM7XHJcblx0XHR9KTtcclxuXHRcdHNjZW5hcmlvLmZlYXR1cmVJZCA9IHRoaXMuc2NlbmFyaW9Gb3JtR3JvdXAudmFsdWUuZmVhdHVyZUlkO1xyXG5cdFx0c2NlbmFyaW8ubmFtZSA9IHRoaXMuc2NlbmFyaW9Gb3JtR3JvdXAudmFsdWUubmFtZTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwc2VydFNjZW5hcmlvQWN0aW9uKHNjZW5hcmlvKSk7XHJcblx0fVxyXG5cdGFkZFN0ZXBUb1NjZW5hcmlvKHN0ZXA6IEd3dFN0ZXApIHtcclxuXHRcdGNvbnN0IHNjZW5hcmlvID0gdGhpcy5zY2VuYXJpbyQuZ2V0VmFsdWUoKTtcclxuXHRcdHNjZW5hcmlvLnN0ZXBzLnB1c2goc3RlcCk7XHJcblx0XHR0aGlzLnNjZW5hcmlvJC5uZXh0KHNjZW5hcmlvKTtcclxuXHR9XHJcblx0ZGVsZXRlU3RlcEZyb21TY2VuYXJpbyhzdGVwOiBHd3RTdGVwKSB7XHJcblx0XHRjb25zdCBzY2VuYXJpbyA9IHRoaXMuc2NlbmFyaW8kLmdldFZhbHVlKCk7XHJcblx0XHRzY2VuYXJpby5zdGVwcy5zcGxpY2Uoc2NlbmFyaW8uc3RlcHMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5uYW1lID09PSBzdGVwLm5hbWUpLCAxKTtcclxuXHRcdHRoaXMuc2NlbmFyaW8kLm5leHQoc2NlbmFyaW8pO1xyXG5cdH1cclxuXHRkZWNTY2VuYXJpb1N0ZXBQcmlvcml0eShzdGVwOiBHd3RTdGVwKSB7IH1cclxuXHRpbmNTY2VuYXJpb1N0ZXBQcmlvcml0eShzdGVwOiBHd3RTdGVwKSB7IH1cclxuXHRhZGROZXdTY2VuYXJpbygpIHtcclxuXHRcdGNvbnN0IHNjZW5hcmlvcyA9IHRoaXMuc2NlbmFyaW9zJC5nZXRWYWx1ZSgpO1xyXG5cdFx0c2NlbmFyaW9zLnB1c2goXHJcblx0XHRcdG5ldyBHd3RTY2VuYXJpb01vZGVsKHtcclxuXHRcdFx0XHRhbmNob3JJZDogdGhpcy5kYXRhLmFuY2hvcklkXHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5zY2VuYXJpb3MkLm5leHQoc2NlbmFyaW9zKTtcclxuXHR9XHJcblx0YWN0aXZlU2NlbmFyaW8oc2NlbmFyaW86IEd3dFNjZW5hcmlvTW9kZWwpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0c2NlbmFyaW8uc3RlcHMgPSBzY2VuYXJpby5zdGVwcy5tYXAoc2NlbmFyaW9TdGVwID0+IHtcclxuXHRcdFx0Y29uc3QgX3N0ZXAgPSB0aGlzLnN0ZXBzLmZpbmQoc3RlcCA9PiBzdGVwLmlkID09PSBzY2VuYXJpb1N0ZXAuaWQpO1xyXG5cdFx0XHRjb25zdCBzdGVwID0gT2JqZWN0LmNyZWF0ZShfc3RlcCk7XHJcblx0XHRcdHN0ZXAucGFyYW1zID0gc2NlbmFyaW9TdGVwLnBhcmFtcztcclxuXHRcdFx0cmV0dXJuIHN0ZXA7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc2NlbmFyaW9Gb3JtR3JvdXAucGF0Y2hWYWx1ZShzY2VuYXJpbyk7XHJcblx0XHRzY2VuYXJpby5hbmNob3JJZCA9IHRoaXMuZGF0YS5hbmNob3JJZDtcclxuXHRcdHRoaXMuc2NlbmFyaW8kLm5leHQoc2NlbmFyaW8pO1xyXG5cdH1cclxuXHJcblx0X2xvYWRfc2NlbmFyaW9fYW5kX21hcF9zY2VuYXJpb19zdGVwX3RvX3N0ZXBzX2NsYXNzKCkge1xyXG5cdFx0dGhpcy5zY2VuYXJpb1NlcnZpY2VcclxuXHRcdFx0LmdldEFuY2hvclNjZW5hcmlvcyh0aGlzLmRhdGEuYW5jaG9ySWQpXHJcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSlcclxuXHRcdFx0LnN1YnNjcmliZShzY2VuYXJpb3MgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2NlbmFyaW9zJC5uZXh0KHNjZW5hcmlvcyk7XHJcblx0XHRcdFx0dGhpcy5hY3RpdmVTY2VuYXJpbyhzY2VuYXJpb3NbMF0gfHwgbmV3IEd3dFNjZW5hcmlvTW9kZWwoKSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRfY3JlYXRlX3NjZW5hcmlvX2Zvcm1fZ3JvdXAoKSB7XHJcblx0XHR0aGlzLnNjZW5hcmlvRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdGZlYXR1cmVJZDogbmV3IEZvcm1Db250cm9sKCksXHJcblx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbCgpXHJcblx0XHR9KTtcclxuXHR9XHJcblx0X3Jlc2V0X3NjZW5hcmlvX2Zvcm1fZ3JvdXBfYW5kX3BhdGNoX3dpdGhfYWN0aXZlX3NjZW5hcmlvKCkge1xyXG5cdFx0dGhpcy5zY2VuYXJpb0Zvcm1Hcm91cC5yZXNldCgpO1xyXG5cdFx0dGhpcy5zY2VuYXJpb0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMuc2NlbmFyaW8kLmdldFZhbHVlKCkpO1xyXG5cdH1cclxuXHRfaW5pdF9mZWF0dXJlc19saXN0KCkge1xyXG5cdFx0dGhpcy5mZWF0dXJlcyQgPSBbXCLZhdiv24zYsduM2Kog2YbZhdin24zYtCDYqNix2KfYs9in2LMg2K/Ys9iq2LHYs9uMINmH2KfbjCDaqdin2LHYqNixXCJdO1xyXG5cdH1cclxufVxyXG4iXX0=