import { Component, OnInit, Inject, Type, Injector, ViewChildren } from "@angular/core";
import { RuleConfigurationService } from "../services";
import { map, filter, withLatestFrom } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { Observable, BehaviorSubject } from "rxjs";
import { MAT_BOTTOM_SHEET_DATA } from "@angular/material";

import { GwtStep } from "../models/gwt-step.model";
import { GwtScenarioModel } from "../models/gwt-scenario.model";
import { AppState } from "../rule.reducers";
import { UpsertScenarioAction } from "../db/scenario-db.actions";
import { StepLoaderDirective } from "../step-loader/step-loader.directive";
import { ScenarioService } from "../services/scenario.service";
import { FormGroup } from "@angular/forms";
import { FormControl } from "@angular/forms";

@Component({
	selector: "app-gwt-view",
	templateUrl: "./gwt-view.component.html",
	styleUrls: [ "./gwt-view.component.css" ]
})
export class GwtViewComponent implements OnInit {
	steps$: Observable<GwtStep[]>;
	steps: GwtStep[];
	scenario$ = new BehaviorSubject<GwtScenarioModel>(new GwtScenarioModel());
	scenarios$ = new BehaviorSubject<GwtScenarioModel[]>([]);
	scenarioFormGroup: FormGroup;
	@ViewChildren(StepLoaderDirective) stepLoaders: StepLoaderDirective[];
	constructor(
		private store: Store<AppState>,
		private configService: RuleConfigurationService,
		private scenarioService: ScenarioService,
		private injector: Injector,
		@Inject(MAT_BOTTOM_SHEET_DATA) private data: any
	) {
		this._create_scenario_form_group();
	}

	ngOnInit() {
		this.steps$ = this.configService.config$.pipe(map(config => config.steps));
		this.steps$.subscribe(steps => (this.steps = steps));
		this._load_scenario_and_map_scenario_step_to_steps_class();
	}
	save() {
		const scenario = this.scenario$.getValue();
		this.stepLoaders.forEach(stepLoader => {
			scenario.steps.find(step => step.name == stepLoader.step.name).params = stepLoader.params;
		});
		scenario.featureId = this.scenarioFormGroup.value.featureId;
		scenario.name = this.scenarioFormGroup.value.name;
		this.store.dispatch(new UpsertScenarioAction(scenario));
	}
	addStepToScenario(step: GwtStep) {
		const scenario = this.scenario$.getValue();
		scenario.steps.push(step);
		this.scenario$.next(scenario);
	}
	deleteStepFromScenario(step: GwtStep) {
		const scenario = this.scenario$.getValue();
		scenario.steps.splice(scenario.steps.findIndex(item => item.name == step.name), 1);
		this.scenario$.next(scenario);
	}
	decScenarioStepPriority(step: GwtStep) {}
	incScenarioStepPriority(step: GwtStep) {}
	addNewScenario() {
		const scenarios = this.scenarios$.getValue();
		scenarios.push(
			new GwtScenarioModel({
				anchorId: this.data.anchorId
			})
		);
		this.scenarios$.next(scenarios);
	}
	activeScenario(scenario: GwtScenarioModel) {
		scenario.steps = scenario.steps.map(scenarioStep => {
			const step = this.steps.find(step => step.id == scenarioStep.id);
			step.params = scenarioStep.params;
			return step;
		});

		this.scenarioFormGroup.patchValue(scenario);
		scenario.anchorId = this.data.anchorId;
		this.scenario$.next(scenario);
	}

	_load_scenario_and_map_scenario_step_to_steps_class() {
		this.scenarioService.getAnchorScenarios(this.data.anchorId).subscribe(scenarios => {
			debugger;
			this.scenarios$.next(scenarios);
			this.activeScenario(scenarios[0] || new GwtScenarioModel());
		});
	}
	_create_scenario_form_group() {
		this.scenarioFormGroup = new FormGroup({
			featureId: new FormControl(),
			name: new FormControl()
		});
	}
	_reset_scenario_form_group_and_patch_with_active_scenario() {
		this.scenarioFormGroup.reset();
		this.scenarioFormGroup.patchValue(this.scenario$.getValue());
	}
}
