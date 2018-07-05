import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { of } from "rxjs/internal/observable/of";

import { RuleConfigurationService } from "./rule-configuration.service";

import { AppState } from "../rule.reducers";

@Injectable()
export class RuleService {
	constructor(
		private http: HttpClient,
		private store: Store<AppState>,
		private configurationService: RuleConfigurationService
	) {}

	// add(): Observable<TestModel> {
	// 	// const model = new AddRuleApiModel.Request(data);
	// 	// return this.configurationService.config$
	// 	// 	.filter(config => config.endpoints.addRule != "")
	// 	// 	.take(1)
	// 	// 	.switchMap(config => this.http.post(config.endpoints.addRule, model.getRequestBody()))
	// 	// 	.map((response: AddRuleApiModel.Response) => response.Result);
	// }
}
