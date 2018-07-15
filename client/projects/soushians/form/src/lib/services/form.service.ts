import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { filter, map } from "rxjs/operators";

import { stringTemplate } from "@soushians/shared";

import { FormSchemaModel, AddFormApiModel, EditFormApiModel, FormListApiModel } from "../models";
import { FormConfigurationService } from "./form-configuration.service";

import { MainContainerState } from "../main-container/main-container.reducers";

@Injectable({
	providedIn: "root"
})
export class FormService {
	constructor(
		private http: HttpClient,
		private store: Store<MainContainerState>,
		private configurationService: FormConfigurationService
	) {}

	add(data: AddFormApiModel.Request): Observable<FormSchemaModel> {
		const model = new AddFormApiModel.Request(data);
		return this.configurationService.config$
			.filter((config) => config.endpoints.addForm != "")
			.take(1)
			.switchMap((config) =>
				this.http.post(config.env.frontend_server + config.endpoints.addForm, model.getRequestBody())
			)
			.map((response: AddFormApiModel.Response) => response.Result);
	}
	get(_id: string): Observable<FormSchemaModel> {
		return this.configurationService.config$
			.filter((config) => config.endpoints.getForm != "")
			.take(1)
			.switchMap((config) =>
				this.http.get(stringTemplate(config.env.frontend_server + config.endpoints.getForm, { _id }))
			)
			.map((response: EditFormApiModel.Response) => response.Result);
	}
	getList(): Observable<FormSchemaModel[]> {
		return this.configurationService.config$
			.filter((config) => config.endpoints.getList != "")
			.switchMap((config) => this.http.get(config.env.frontend_server + config.endpoints.getList))
			.map((response: FormListApiModel.Response) => response.Result);
	}
	update(data: EditFormApiModel.Request): Observable<FormSchemaModel> {
		const model = new EditFormApiModel.Request(data);
		return this.configurationService.config$
			.filter((config) => config.endpoints.editForm != "")
			.take(1)
			.switchMap((config) =>
				this.http.put(config.env.frontend_server + config.endpoints.editForm, model.getRequestBody())
			)
			.map((response: EditFormApiModel.Response) => response.Result);
	}
	delete(_id: string) {
		return this.configurationService.config$
			.filter((config) => config.endpoints.deleteForm != "")
			.switchMap((config) => this.http.get(config.env.frontend_server + config.endpoints.deleteForm));
	}
	selectFormById(_id: string): Observable<FormSchemaModel> {
		const subject = new BehaviorSubject<FormSchemaModel>(undefined);
		this.store
			.select((state) => state.form.list.data)
			.pipe(filter((forms) => forms != null), map((forms) => forms.find((form) => form._id == _id)))
			.subscribe((formSchemaModel) => subject.next(formSchemaModel));
		return subject.asObservable();
	}
}
