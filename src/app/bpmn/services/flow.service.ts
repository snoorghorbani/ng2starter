import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";

import { stringTemplate } from "@soushians/infra";
import { UpsertApiModel, BpmnModel, GetApiModel, GetAllApiModel, EditApiModel } from "../models";
import { BpmnConfigurationService } from "./bpmn-configuration.service";

import { MainContainerState } from "../main-container/main-container.reducers";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class FlowService {
	constructor(
		private http: HttpClient,
		private store: Store<MainContainerState>,
		private configurationService: BpmnConfigurationService
	) {}

	get(_id: string): Observable<BpmnModel> {
		return this.configurationService.config$
			.filter(config => config.endpoints.get != "")
			.take(1)
			.switchMap(config => this.http.get(stringTemplate(config.endpoints.get, { _id })))
			.map((response: GetApiModel.Response) => new BpmnModel(response.Result));
	}
}
