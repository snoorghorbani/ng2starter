import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";

import { stringTemplate } from "@soushians/infra";
import { DashboardConfigurationService } from "./dashboard-configuration.service";

import { MainContainerState } from "../../main-container/main-container.reducers";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { WidgetModel, WidgetListApiModel, AddWidgetApiModel } from "../models";
import { IResponse } from "app/dashboard/models/IResponse";

@Injectable()
export class WidgetService {
	// responseCache: AddFormApiModel.Response;
	constructor(
		private http: HttpClient,
		private store: Store<MainContainerState>,
		private configurationService: DashboardConfigurationService //
	) {}

	//FETCH
	getList(): Observable<WidgetModel[]> {
		return this.configurationService.config$
			.filter(config => config.endpoints.getWidgetList != "")
			.switchMap(config => this.http.get(config.endpoints.getWidgetList))
			.map((response: WidgetListApiModel.Response) => response.Result);
	}

	//ADD
	add(data: AddWidgetApiModel.Request): Observable<WidgetModel> {
		const model = new AddWidgetApiModel.Request(data);
		return this.configurationService.config$
			.filter(config => config.endpoints.addWidget != "")
			.switchMap(config => this.http.post(config.endpoints.addWidget, model.getRequestBody()))
			.map((response: AddWidgetApiModel.Response) => response.Result);
	}

	//EDIT
	editWidget(data: WidgetModel): any {
		debugger;
		return this.configurationService.config$
			.filter(config => config.endpoints.editWidget != "")
			.switchMap(config =>
				this.http.put<IResponse<WidgetModel>>(
					stringTemplate(config.endpoints.editWidget, { _id: data._id }),
					data
				)
			)
			.map(response => response.Result);
	}

	//BULK EDIT
	bulkEditWidgets(data: WidgetListApiModel.Request): Observable<WidgetModel[]> {
		const model = new WidgetListApiModel.Request(data);
		return this.configurationService.config$
			.filter(config => config.endpoints.bulkEditWidgets != "")
			.switchMap(config => this.http.put(config.endpoints.bulkEditWidgets, model.getRequestBody()))
			.map((response: WidgetListApiModel.Response) => response.Result);
	}

	//DELETE
	delete(_id: string): any {
		return this.configurationService.config$
			.filter(config => config.endpoints.deleteWidget != "")
			.switchMap(config =>
				this.http.delete<{ Result: WidgetModel }>(stringTemplate(config.endpoints.deleteWidget, { _id }))
			)
			.map(response => response.Result);
	}
}
