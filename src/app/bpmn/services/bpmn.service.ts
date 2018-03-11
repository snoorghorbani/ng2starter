import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";

import { stringTemplate } from "@soushians/infra";
import { UpsertApiModel, ProcessModel, GetApiModel, GetAllApiModel, EditApiModel } from "../models";
import { BpmnConfigurationService } from "./bpmn-configuration.service";

import { MainContainerState } from "../main-container/main-container.reducers";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class BpmnService {
	constructor(
		private http: HttpClient,
		private store: Store<MainContainerState>,
		private configurationService: BpmnConfigurationService
	) {}

	get(_id: string): Observable<ProcessModel> {
		return this.configurationService.config$
			.filter(config => config.endpoints.get != "")
			.take(1)
			.switchMap(config => this.http.get(stringTemplate(config.endpoints.get, { _id })))
			.map((response: GetApiModel.Response) => new ProcessModel(response.Result));
	}
	getList(): Observable<ProcessModel[]> {
		return this.configurationService.config$
			.filter(config => config.endpoints.getList != "")
			.switchMap(config => this.http.get(config.endpoints.getList))
			.map((response: GetAllApiModel.Response) => response.Result.map(i => new ProcessModel(i)));
	}
	upsert(data: UpsertApiModel.Request): Observable<ProcessModel> {
		debugger;
		const request = new UpsertApiModel.Request(data);
		return this.configurationService.config$
			.filter(config => config.endpoints.upsert != "")
			.take(1)
			.switchMap(config => this.http.post(config.endpoints.upsert, request.getRequestBody()))
			.map((response: UpsertApiModel.Response) => new ProcessModel(response.Result));
	}
	delete(_id: string) {
		return this.configurationService.config$
			.filter(config => config.endpoints.delete != "")
			.switchMap(config => this.http.get(config.endpoints.delete));
	}
	selectById(_id: string): Observable<ProcessModel> {
		const subject = new BehaviorSubject<ProcessModel>(undefined);
		if (!_id) subject.next(new ProcessModel());

		this.store
			.select(state => state.bpmn.list.data)
			.filter(entities => entities != null)
			.map(entities => entities.find(entity => entity._id == _id))
			.filter(entities => entities != null)
			.subscribe(enitity => subject.next(new ProcessModel(enitity)));
		return subject.asObservable().filter(flow => flow != null);
	}

	// add(data: AddBpmnApiModel.Request): Observable<BpmnSchemaModel> {
	// 	const model = new AddBpmnApiModel.Request(data);
	// 	return this.configurationService.config$
	// 		.filter(config => config.endpoints.addBpmn != "")
	// 		.take(1)
	// 		.switchMap(config => this.http.post(config.endpoints.addBpmn, model.getRequestBody()))
	// 		.map((response: AddBpmnApiModel.Response) => response.Result);
	// }

	// selectBpmnById(_id: string): Observable<BpmnSchemaModel> {
	// 	const subject = new BehaviorSubject<BpmnSchemaModel>(undefined);
	// 	this.store
	// 		.select(state => state.bpmn.list.data)
	// 		.filter(bpmns => bpmns != null)
	// 		.map(bpmns => bpmns.find(bpmn => bpmn._id == _id))
	// 		.subscribe(BpmnSchemaModel => subject.next(BpmnSchemaModel));
	// 	return subject.asObservable();
	// }
}
