import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { of } from "rxjs/internal/observable/of";

import { RuleModel } from "../models";
import { RuleConfigurationService } from "./rule-configuration.service";

import { AppState } from "../rule.reducers";
import { GwtScenarioModel } from "../models/gwt-scenario.model";
import { filter, map } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class ScenarioService {
	constructor(
		private http: HttpClient,
		private store: Store<AppState>,
		private configurationService: RuleConfigurationService
	) {}

	selectScenarioById(_id: string): Observable<GwtScenarioModel> {
		const subject = new BehaviorSubject<GwtScenarioModel>(undefined);
		this.store
			.select(state => state.rule.scenarios.data)
			.pipe(
				filter(scenarios => scenarios != null),
				map(scenarios => {
					return scenarios.find(scenario => scenario._id == _id);
				}),
				filter(scenario => scenario != undefined)
			)
			.subscribe(scenario => {
				subject.next(scenario);
			});
		return subject.asObservable();
	}
}
