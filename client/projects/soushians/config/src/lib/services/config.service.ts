import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ConfigState } from "../reducers";
import { Store } from "@ngrx/store";

import { EditConfigApiModel, GetConfigsApiModel, ConfigModel } from "../models";

import { GetConfigAction } from "../actions";
import { ConfigurationService } from "./configuration.service";

@Injectable({
	providedIn: "root"
})
export class ConfigService {
	responseCache: any;

	constructor(
		private http: HttpClient,
		private store: Store<ConfigState>,
		private configurationService: ConfigurationService
	) {
		setTimeout(() => {
			this.store.dispatch(new GetConfigAction());
		}, 999);
	}

	getConfigs(): Observable<ConfigModel<any>[]> {
		return this.http
			.get(`${this.configurationService.config.env.frontend_server}/api/config`)
			.take(1)
			.map((response: GetConfigsApiModel.Response) => response.Result)
			.catch((err) => Observable.throw(err));
	}
	getConfigByName(name: string): Observable<any> {
		return this.http
			.get(`${this.configurationService.config.env.frontend_server}/api/config/${name}`)
			.map((response) => response)
			.catch((err) => {
				return Observable.throw(err);
			});
	}
	editConfig(body: EditConfigApiModel.Request): Observable<any> {
		const model = new EditConfigApiModel.Request(body);
		debugger;
		return this.http
			.put(
				`${this.configurationService.config.env.frontend_server}/api/config/${model.Name}`,
				model.getRequestBody()
			)
			.map((response) => response)
			.catch((err) => {
				return Observable.throw(err);
			});
	}

	getLayoutConfigs(): Observable<any> {
		return this.http
			.get(`${this.configurationService.config.env.frontend_server}/api/layout-config`)
			.map((response: any) => response)
			.catch((err) => {
				return Observable.throw(err);
			});
	}
}
