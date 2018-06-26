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

@Component({
	selector: "app-gwt-view",
	templateUrl: "./gwt-view.component.html",
	styleUrls: [ "./gwt-view.component.css" ]
})
export class GwtViewComponent implements OnInit {
	steps$: Observable<GwtStep[]>;
	scenario$ = new BehaviorSubject<GwtScenarioModel>(new GwtScenarioModel());
	@ViewChildren(StepLoaderDirective) stepLoaders: StepLoaderDirective[];
	constructor(
		private store: Store<AppState>,
		private configService: RuleConfigurationService,
		private scenarioService: ScenarioService,
		private injector: Injector,
		@Inject(MAT_BOTTOM_SHEET_DATA) private data: any
	) {}

	ngOnInit() {
		this.steps$ = this.configService.config$.pipe(map(config => config.steps));
		this._load_scenario_and_map_scenario_step_to_steps_class();
	}
	save() {
		debugger;
		const senario = this.scenario$.getValue();
		this.stepLoaders.forEach(stepLoader => {
			debugger;
			senario.steps.find(step => step.name == stepLoader.step.name).params = stepLoader.params;
		});
		this.store.dispatch(new UpsertScenarioAction(senario));
	}
	addStepToScenario(step: GwtStep) {
		debugger;
		const scenario = this.scenario$.getValue();
		scenario.steps.push(step);
		this.scenario$.next(scenario);
	}
	deleteStepFromScenario(step: GwtStep) {
		debugger;
		const scenario = this.scenario$.getValue();
		scenario.steps.splice(scenario.steps.findIndex(item => item.name == step.name), 1);
		this.scenario$.next(scenario);
	}
	decScenarioStepPriority(step: GwtStep) {}
	incScenarioStepPriority(step: GwtStep) {}
	_load_scenario_and_map_scenario_step_to_steps_class() {
		this.scenarioService
			.getAnchorScenarios(this.data.anchorId)
			.pipe(filter(scenarios => scenarios.length > 0), withLatestFrom(this.steps$))
			.subscribe(([ scenarios, steps ]) => {
				const scenario = scenarios[0];
				scenario.steps = scenario.steps.map(scenarioStep => {
					const step = steps.find(step => step.id == scenarioStep.id);
					step.params = scenarioStep.params;
					return step;
				});
				this.scenario$.next(scenarios[0]);
			});
	}
}
