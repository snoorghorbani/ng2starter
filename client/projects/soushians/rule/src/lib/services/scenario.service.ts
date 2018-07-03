import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { filter, map, startWith, share } from "rxjs/operators";

import { RuleConfigurationService } from "./rule-configuration.service";

import { AppState } from "../rule.reducers";
import { GwtScenarioModel } from "../models/gwt-scenario.model";

@Injectable({
	providedIn: "root"
})
export class ScenarioService {
	constructor(
		private http: HttpClient,
		private store: Store<AppState>,
		private configurationService: RuleConfigurationService
	) {}

	upsert(scenario: GwtScenarioModel): Observable<GwtScenarioModel> {
		const model = new GwtScenarioModel(scenario);
		return this.http
			.post("http://localhost:3000/api/gwt/scenario", model.getRequsetBody())
			.pipe(map(response => response as GwtScenarioModel), share());
	}
	getAnchorScenarios(anchorId: string): Observable<GwtScenarioModel[]> {
		return this.http
			.get<any>(`http://localhost:3000/api/gwt/anchor/${anchorId}/scenarios`)
			.map(response => response.Result as GwtScenarioModel[]);
	}
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
	selectAnchorScenarios(anchorId: string): Observable<GwtScenarioModel[]> {
		const subject = new BehaviorSubject<GwtScenarioModel[]>(undefined);
		this.store
			.select(state => state.rule.scenarios.data)
			.pipe(
				startWith([]),
				filter(scenarios => scenarios != null),
				map(scenarios => {
					return scenarios.filter(scenario => scenario._id == anchorId);
				})
			)
			.subscribe(scenarios => {
				subject.next(scenarios);
			});
		return subject.asObservable();
	}
}