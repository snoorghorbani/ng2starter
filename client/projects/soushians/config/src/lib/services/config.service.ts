import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { take, map, catchError } from "rxjs/operators";

import { EditConfigApiModel, GetConfigsApiModel, ConfigModel } from "../models";

import { ConfigState } from "../reducers";
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
			.pipe(
				take(1),
				map((response: GetConfigsApiModel.Response) => response.Result),
				catchError(err => Observable.throw(err))
			);
	}
	getConfigByName(name: string): Observable<any> {
		return this.http.get(`${this.configurationService.config.env.frontend_server}/api/config/${name}`).pipe(
			map(response => response),
			catchError(err => {
				return Observable.throw(err);
			})
		);
	}
	editConfig(body: EditConfigApiModel.Request): Observable<any> {
		const model = new EditConfigApiModel.Request(body);

		return this.http
			.put(
				`${this.configurationService.config.env.frontend_server}/api/config/${model.Name}`,
				model.getRequestBody()
			)
			.pipe(
				map(response => response),
				catchError(err => {
					return Observable.throw(err);
				})
			);
	}

	getLayoutConfigs(): Observable<any> {
		return this.http.get(`${this.configurationService.config.env.frontend_server}/api/layout-config`).pipe(
			map((response: any) => response),
			catchError(err => {
				return Observable.throw(err);
			})
		);
	}
}
