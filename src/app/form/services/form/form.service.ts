import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";

import { FormModel, AddFormApiModel, EditFormApiModel } from "app/models/form";
import { FormConfigurationService } from "app/form/services/form-module-configuration";
import { Store } from "@ngrx/store";

import * as mainContainerReducers from "../../main-container/main-container.reducers";
import { stringTemplate } from "app/infra";
import { FormListApiModel } from "app/models/form/form-list.api-model";

@Injectable()
export class FormService {
	responseCache: AddFormApiModel.Response;
	constructor(
		private http: HttpClient,
		private store: Store<mainContainerReducers.FormState>,
		private configurationService: FormConfigurationService
	) {}

	add(data: AddFormApiModel.Request): Observable<FormModel> {
		const model = new AddFormApiModel.Request(data);

		return this.configurationService.config$
			.filter((config) => config.endpoints.addForm != "")
			.take(1)
			.switchMap((config) => this.http.post(config.endpoints.addForm, model.getRequestBody()))
			.map((response: AddFormApiModel.Response) => response.Result);
	}

	get(name: string): Observable<FormModel> {
		return this.configurationService.config$
			.filter((config) => config.endpoints.editForm != "")
			.take(1)
			.switchMap((config) => this.http.get(config.endpoints.getForm))
			.map((response: EditFormApiModel.Response) => response.Result);
	}

	getList(): Observable<FormModel[]> {
		return this.configurationService.config$
			.filter((config) => config.endpoints.getList != "")
			.switchMap((config) => this.http.get(config.endpoints.getList))
			.map((response: FormListApiModel.Response) => response.Result);
	}

	update(data: AddFormApiModel.Request): Observable<FormModel> {
		const model = new AddFormApiModel.Request(data);
		return this.configurationService.config$
			.filter((config) => config.endpoints.editForm != "")
			.take(1)
			.switchMap((config) => this.http.post(config.endpoints.editForm, model.getRequestBody()))
			.map((response: EditFormApiModel.Response) => response.Result);
	}
}
