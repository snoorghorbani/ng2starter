import { filter, map, startWith, share, tap } from "rxjs/operators";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import { stringTemplate } from "@soushians/shared";

import { RuleConfigurationService } from "./rule-configuration.service";
import { GwtScenarioModel } from "../models/gwt-scenario.model";
import { RuleModuleConfig } from "../rule.config";
import { AppState } from "../rule.reducers";
import { of } from "rxjs";

@Injectable()
export class ScenarioService {
	config$: Observable<RuleModuleConfig>;
	config: RuleModuleConfig;
	scenarios = {};
	constructor(
		private http: HttpClient,
		private store: Store<AppState>,
		private configService: RuleConfigurationService
	) {
		this.config$ = this.configService.config$;
		this.config$.subscribe(config => (this.config = config));
	}

	upsert(scenario: GwtScenarioModel): Observable<GwtScenarioModel> {
		const model = new GwtScenarioModel(scenario);
		return this.http
			.post(this.config.env.frontend_server + this.config.endpoints.upsert, model.getRequsetBody())
			.pipe(map(response => response as GwtScenarioModel), share());
	}

	getAnchorScenarios(anchorId: string): Observable<GwtScenarioModel[]> {
		if (!this.scenarios[anchorId]) {
			this.scenarios[anchorId] = new BehaviorSubject<GwtScenarioModel[]>([]);

			this.http
				.get<any>(this.config.env.frontend_server + stringTemplate(this.config.endpoints.get, { anchorId }))
				.pipe(map(response => response.Result as GwtScenarioModel[]))
				.subscribe(scenarios => this.scenarios[anchorId].next(scenarios));
		}

		return this.scenarios[anchorId];
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
