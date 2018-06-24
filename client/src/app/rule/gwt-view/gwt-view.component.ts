import { Component, OnInit, Inject, Type, Injector } from "@angular/core";
import { RuleConfigurationService } from "../services";
import { map } from "rxjs/operators";
import { Observable, BehaviorSubject } from "rxjs";
import { GwtStep } from "../models/gwt-step.model";
import { MAT_BOTTOM_SHEET_DATA } from "@angular/material";
import { GwtScenarioModel } from "../models/gwt-scenario.model";
import { AppState } from "../rule.reducers";
import { Store } from "@ngrx/store";
import { UpsertScenarioAction } from "../db/scenario-db.actions";

@Component({
	selector: "app-gwt-view",
	templateUrl: "./gwt-view.component.html",
	styleUrls: [ "./gwt-view.component.css" ]
})
export class GwtViewComponent implements OnInit {
	steps$: Observable<GwtStep[]>;
	scenario$ = new BehaviorSubject<GwtScenarioModel>(new GwtScenarioModel());

	constructor(
		private store: Store<AppState>,
		private configService: RuleConfigurationService,
		private injector: Injector,
		@Inject(MAT_BOTTOM_SHEET_DATA) private data: string
	) {
		console.log(this.data);
	}

	ngOnInit() {
		this.steps$ = this.configService.config$.pipe(map(config => config.steps));

		this.steps$.subscribe(steps =>
			this.scenario$.next({
				_id: this.data["ruleId"],
				ruleId: this.data["ruleId"],
				steps
			})
		);
	}
	save() {
		debugger;
		this.store.dispatch(new UpsertScenarioAction(this.scenario$.getValue()));
	}
}
