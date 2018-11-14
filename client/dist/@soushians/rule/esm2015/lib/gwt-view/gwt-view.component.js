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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3d0LXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL2d3dC12aWV3L2d3dC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQVEsUUFBUSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsR0FBRyxFQUEwQixTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBYyxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTFELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFbEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBNkUvRCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7OztJQVM1QixZQUNTLE9BQ0EsZUFDQSxpQkFDQSxVQUMrQixJQUFTO1FBSnhDLFVBQUssR0FBTCxLQUFLO1FBQ0wsa0JBQWEsR0FBYixhQUFhO1FBQ2Isb0JBQWUsR0FBZixlQUFlO1FBQ2YsYUFBUSxHQUFSLFFBQVE7UUFDdUIsU0FBSSxHQUFKLElBQUks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UyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7U0FDNUQsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFDRCwyQkFBMkI7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3RDLFNBQVMsRUFBRSxJQUFJLFdBQVcsRUFBRTtZQUM1QixJQUFJLEVBQUUsSUFBSSxXQUFXLEVBQUU7U0FDdkIsQ0FBQyxDQUFDO0tBQ0g7Ozs7SUFDRCx5REFBeUQ7UUFDeEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0tBQzdEOzs7O0lBQ0QsbUJBQW1CO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0tBQzFEOzs7WUEzS0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FzRUo7Z0JBQ04sTUFBTSxFQUFFLENBQUMscUVBQXFFLENBQUM7YUFDL0U7Ozs7WUF6RlEsS0FBSztZQU9MLHdCQUF3QjtZQU14QixlQUFlO1lBZmtCLFFBQVE7NENBMEcvQyxNQUFNLFNBQUMscUJBQXFCOzs7MEJBTjdCLFlBQVksU0FBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBUeXBlLCBJbmplY3RvciwgVmlld0NoaWxkcmVuLCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgd2l0aExhdGVzdEZyb20sIHRha2VVbnRpbCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBNQVRfQk9UVE9NX1NIRUVUX0RBVEEgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3J1bGUtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEd3dFN0ZXAgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zdGVwLm1vZGVsXCI7XHJcbmltcG9ydCB7IEd3dFNjZW5hcmlvTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2d3dC1zY2VuYXJpby5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ydWxlLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFVwc2VydFNjZW5hcmlvQWN0aW9uIH0gZnJvbSBcIi4uL2RiL3NjZW5hcmlvLWRiLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgU3RlcExvYWRlckRpcmVjdGl2ZSB9IGZyb20gXCIuLi9zdGVwLWxvYWRlci9zdGVwLWxvYWRlci5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjZW5hcmlvLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImFwcC1nd3Qtdmlld1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gIDxkaXYgZnhGbGV4PVwiNDAwcHhcIiBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0R2FwPVwiMTVweFwiPlxyXG4gICAgPCEtLSA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiIGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLZgduM2YTYqtixXCI+XHJcbiAgICAgIDxtYXQtaWNvbiBtYXRTdWZmaXg+c2VhcmNoPC9tYXQtaWNvbj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8bWF0LWNoZWNrYm94IGZ4RmxleCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+2YHYsdi2INqp2YbbjNivPC9tYXQtY2hlY2tib3g+XHJcbiAgICA8bWF0LWNoZWNrYm94IGZ4RmxleCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+2YfZhtqv2KfZhduMINqp2Yc8L21hdC1jaGVja2JveD5cclxuICAgIDxtYXQtY2hlY2tib3ggZnhGbGV4IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj7YotmG2q/Yp9mHPC9tYXQtY2hlY2tib3g+XHJcbiAgPC9kaXY+IC0tPlxyXG4gICAgPG1hdC1jYXJkIGNsYXNzPVwic3RlcHMtaXRlbVwiICpuZ0Zvcj1cImxldCBzdGVwIG9mIHN0ZXBzJCB8IGFzeW5jXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwic3RlcC10ZXh0XCI+XHJcbiAgICAgICAge3tzdGVwLmRlc2NyaXB0aW9ufX1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImFkZC1idXR0b25cIiAoY2xpY2spPVwiYWRkU3RlcFRvU2NlbmFyaW8oc3RlcClcIj5cclxuICAgICAgICA8bWF0LWljb24+YXJyb3dfYmFja19pb3M8L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgZnhGbGV4PVwiNzAwcHhcIj5cclxuICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJzY2VuYXJpby10b29sYmFyXCI+XHJcbiAgICAgIDxkaXYgZnhGbGV4PlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZpdFwiPlxyXG4gICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCLZiNmQ24zamNqv24xcIiAoc2VsZWN0aW9uQ2hhbmdlKT1cImFjdGl2ZVNjZW5hcmlvKCRldmVudC52YWx1ZSlcIj5cclxuICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHNjZW5hcmlvIG9mIHNjZW5hcmlvcyQgfCBhc3luY1wiIFt2YWx1ZV09XCJzY2VuYXJpb1wiPlxyXG4gICAgICAgICAgICAgIHt7IHNjZW5hcmlvLmZlYXR1cmVJZCB9fSA6IHt7IHNjZW5hcmlvLm5hbWUgfX1cclxuICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGROZXdTY2VuYXJpbygpXCI+XHJcbiAgICAgICAg2KvYqNiqINiz2YbYp9ix24zZiCDYrNiv24zYr1xyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0R2FwPVwiMTVweFwiPlxyXG4gICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCIyNXB4XCIgW2Zvcm1Hcm91cF09XCJzY2VuYXJpb0Zvcm1Hcm91cFwiPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCI1MFwiPlxyXG4gICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCLZiNuM2pjar9uMXCIgZm9ybUNvbnRyb2xOYW1lPVwiZmVhdHVyZUlkXCI+XHJcbiAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBmZWF0dXJlIG9mIGZlYXR1cmVzJFwiIFt2YWx1ZV09XCJmZWF0dXJlXCI+XHJcbiAgICAgICAgICAgICAge3sgZmVhdHVyZSB9fVxyXG4gICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiNTBcIj5cclxuICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cItmG2KfZhVwiIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3RlcCBvZiAoc2NlbmFyaW8kIHwgYXN5bmMpLnN0ZXBzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNjZW5hcmlvLXN0ZXBzLWl0ZW1cIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgcnVsZS1zdGVwLWxvYWRlciBbc3RlcF09XCJzdGVwXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2NlbmFyaW8tc3RlcHMtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJkZWxldGVTdGVwRnJvbVNjZW5hcmlvKHN0ZXApXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiaW5jU2NlbmFyaW9TdGVwUHJpb3JpdHkoc3RlcClcIj5cclxuICAgICAgICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYXJyb3dfdXA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImRlY1NjZW5hcmlvU3RlcFByaW9yaXR5KHN0ZXApXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X2Rvd248L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPGJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwic2F2ZSgpXCI+XHJcbiAgICAgICAg2KvYqNiqXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMHZ3fS5zY2VuYXJpby10b29sYmFye2hlaWdodDo2MHB4O21hcmdpbi1ib3R0b206MjBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3d0Vmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHR1bnN1YnNjcmliZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblx0c3RlcHMkOiBPYnNlcnZhYmxlPEd3dFN0ZXBbXT47XHJcblx0c3RlcHM6IEd3dFN0ZXBbXTtcclxuXHRzY2VuYXJpbyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEd3dFNjZW5hcmlvTW9kZWw+KG5ldyBHd3RTY2VuYXJpb01vZGVsKCkpO1xyXG5cdHNjZW5hcmlvcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEd3dFNjZW5hcmlvTW9kZWxbXT4oW10pO1xyXG5cdHNjZW5hcmlvRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0ZmVhdHVyZXMkOiBzdHJpbmdbXTtcclxuXHRAVmlld0NoaWxkcmVuKFN0ZXBMb2FkZXJEaXJlY3RpdmUpIHN0ZXBMb2FkZXJzOiBTdGVwTG9hZGVyRGlyZWN0aXZlW107XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgc2NlbmFyaW9TZXJ2aWNlOiBTY2VuYXJpb1NlcnZpY2UsXHJcblx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuXHRcdEBJbmplY3QoTUFUX0JPVFRPTV9TSEVFVF9EQVRBKSBwcml2YXRlIGRhdGE6IGFueVxyXG5cdCkge1xyXG5cdFx0dGhpcy5fY3JlYXRlX3NjZW5hcmlvX2Zvcm1fZ3JvdXAoKTtcclxuXHRcdHRoaXMuX2luaXRfZmVhdHVyZXNfbGlzdCgpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnN0ZXBzJCA9IHRoaXMuY29uZmlnU2VydmljZS5jb25maWckLnBpcGUobWFwKGNvbmZpZyA9PiBjb25maWcuc3RlcHMpLCB0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSkpO1xyXG5cdFx0dGhpcy5zdGVwcyQuc3Vic2NyaWJlKHN0ZXBzID0+ICh0aGlzLnN0ZXBzID0gc3RlcHMpKTtcclxuXHRcdHRoaXMuX2xvYWRfc2NlbmFyaW9fYW5kX21hcF9zY2VuYXJpb19zdGVwX3RvX3N0ZXBzX2NsYXNzKCk7XHJcblx0XHR0aGlzLnNjZW5hcmlvJC5zdWJzY3JpYmUocyA9PiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5uZXh0KCk7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XHJcblx0fVxyXG5cdHNhdmUoKSB7XHJcblx0XHRjb25zdCBzY2VuYXJpbyA9IHRoaXMuc2NlbmFyaW8kLmdldFZhbHVlKCk7XHJcblx0XHR0aGlzLnN0ZXBMb2FkZXJzLmZvckVhY2goc3RlcExvYWRlciA9PiB7XHJcblx0XHRcdHNjZW5hcmlvLnN0ZXBzLmZpbmQoc3RlcCA9PiBzdGVwLm5hbWUgPT09IHN0ZXBMb2FkZXIuc3RlcC5uYW1lKS5wYXJhbXMgPSBzdGVwTG9hZGVyLnBhcmFtcztcclxuXHRcdH0pO1xyXG5cdFx0c2NlbmFyaW8uZmVhdHVyZUlkID0gdGhpcy5zY2VuYXJpb0Zvcm1Hcm91cC52YWx1ZS5mZWF0dXJlSWQ7XHJcblx0XHRzY2VuYXJpby5uYW1lID0gdGhpcy5zY2VuYXJpb0Zvcm1Hcm91cC52YWx1ZS5uYW1lO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBzZXJ0U2NlbmFyaW9BY3Rpb24oc2NlbmFyaW8pKTtcclxuXHR9XHJcblx0YWRkU3RlcFRvU2NlbmFyaW8oc3RlcDogR3d0U3RlcCkge1xyXG5cdFx0Y29uc3Qgc2NlbmFyaW8gPSB0aGlzLnNjZW5hcmlvJC5nZXRWYWx1ZSgpO1xyXG5cdFx0c2NlbmFyaW8uc3RlcHMucHVzaChzdGVwKTtcclxuXHRcdHRoaXMuc2NlbmFyaW8kLm5leHQoc2NlbmFyaW8pO1xyXG5cdH1cclxuXHRkZWxldGVTdGVwRnJvbVNjZW5hcmlvKHN0ZXA6IEd3dFN0ZXApIHtcclxuXHRcdGNvbnN0IHNjZW5hcmlvID0gdGhpcy5zY2VuYXJpbyQuZ2V0VmFsdWUoKTtcclxuXHRcdHNjZW5hcmlvLnN0ZXBzLnNwbGljZShzY2VuYXJpby5zdGVwcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLm5hbWUgPT09IHN0ZXAubmFtZSksIDEpO1xyXG5cdFx0dGhpcy5zY2VuYXJpbyQubmV4dChzY2VuYXJpbyk7XHJcblx0fVxyXG5cdGRlY1NjZW5hcmlvU3RlcFByaW9yaXR5KHN0ZXA6IEd3dFN0ZXApIHsgfVxyXG5cdGluY1NjZW5hcmlvU3RlcFByaW9yaXR5KHN0ZXA6IEd3dFN0ZXApIHsgfVxyXG5cdGFkZE5ld1NjZW5hcmlvKCkge1xyXG5cdFx0Y29uc3Qgc2NlbmFyaW9zID0gdGhpcy5zY2VuYXJpb3MkLmdldFZhbHVlKCk7XHJcblx0XHRzY2VuYXJpb3MucHVzaChcclxuXHRcdFx0bmV3IEd3dFNjZW5hcmlvTW9kZWwoe1xyXG5cdFx0XHRcdGFuY2hvcklkOiB0aGlzLmRhdGEuYW5jaG9ySWRcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0XHR0aGlzLnNjZW5hcmlvcyQubmV4dChzY2VuYXJpb3MpO1xyXG5cdH1cclxuXHRhY3RpdmVTY2VuYXJpbyhzY2VuYXJpbzogR3d0U2NlbmFyaW9Nb2RlbCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRzY2VuYXJpby5zdGVwcyA9IHNjZW5hcmlvLnN0ZXBzLm1hcChzY2VuYXJpb1N0ZXAgPT4ge1xyXG5cdFx0XHRjb25zdCBfc3RlcCA9IHRoaXMuc3RlcHMuZmluZChzdGVwID0+IHN0ZXAuaWQgPT09IHNjZW5hcmlvU3RlcC5pZCk7XHJcblx0XHRcdGNvbnN0IHN0ZXAgPSBPYmplY3QuY3JlYXRlKF9zdGVwKTtcclxuXHRcdFx0c3RlcC5wYXJhbXMgPSBzY2VuYXJpb1N0ZXAucGFyYW1zO1xyXG5cdFx0XHRyZXR1cm4gc3RlcDtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zY2VuYXJpb0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHNjZW5hcmlvKTtcclxuXHRcdHNjZW5hcmlvLmFuY2hvcklkID0gdGhpcy5kYXRhLmFuY2hvcklkO1xyXG5cdFx0dGhpcy5zY2VuYXJpbyQubmV4dChzY2VuYXJpbyk7XHJcblx0fVxyXG5cclxuXHRfbG9hZF9zY2VuYXJpb19hbmRfbWFwX3NjZW5hcmlvX3N0ZXBfdG9fc3RlcHNfY2xhc3MoKSB7XHJcblx0XHR0aGlzLnNjZW5hcmlvU2VydmljZVxyXG5cdFx0XHQuZ2V0QW5jaG9yU2NlbmFyaW9zKHRoaXMuZGF0YS5hbmNob3JJZClcclxuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpKVxyXG5cdFx0XHQuc3Vic2NyaWJlKHNjZW5hcmlvcyA9PiB7XHJcblx0XHRcdFx0dGhpcy5zY2VuYXJpb3MkLm5leHQoc2NlbmFyaW9zKTtcclxuXHRcdFx0XHR0aGlzLmFjdGl2ZVNjZW5hcmlvKHNjZW5hcmlvc1swXSB8fCBuZXcgR3d0U2NlbmFyaW9Nb2RlbCgpKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdF9jcmVhdGVfc2NlbmFyaW9fZm9ybV9ncm91cCgpIHtcclxuXHRcdHRoaXMuc2NlbmFyaW9Gb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0ZmVhdHVyZUlkOiBuZXcgRm9ybUNvbnRyb2woKSxcclxuXHRcdFx0bmFtZTogbmV3IEZvcm1Db250cm9sKClcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfcmVzZXRfc2NlbmFyaW9fZm9ybV9ncm91cF9hbmRfcGF0Y2hfd2l0aF9hY3RpdmVfc2NlbmFyaW8oKSB7XHJcblx0XHR0aGlzLnNjZW5hcmlvRm9ybUdyb3VwLnJlc2V0KCk7XHJcblx0XHR0aGlzLnNjZW5hcmlvRm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy5zY2VuYXJpbyQuZ2V0VmFsdWUoKSk7XHJcblx0fVxyXG5cdF9pbml0X2ZlYXR1cmVzX2xpc3QoKSB7XHJcblx0XHR0aGlzLmZlYXR1cmVzJCA9IFtcItmF2K/bjNix24zYqiDZhtmF2KfbjNi0INio2LHYp9iz2KfYsyDYr9iz2KrYsdiz24wg2YfYp9uMINqp2KfYsdio2LFcIl07XHJcblx0fVxyXG59XHJcbiJdfQ==