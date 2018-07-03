import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
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
	configsEndpoint: string;

	constructor(
		private http: HttpClient,
		private store: Store<ConfigState>,
		private configurationService: ConfigurationService
	) {
		this.configsEndpoint = this.configurationService.config.env.production
			? this.configurationService.config.prod_api_host
			: this.configurationService.config.dev_api_host;

		setTimeout(() => {
			this.store.dispatch(new GetConfigAction());
		}, 999);
	}

	getConfigs(): Observable<ConfigModel<any>[]> {
		return (
			this.http
				.get(`${this.configsEndpoint}/api/config`)
				// .filter(() => this.configurationService.config.dev_api_host != undefined)
				.take(1)
				.map((response: GetConfigsApiModel.Response) => {
					if (this.configurationService.config.env.production) {
						const dev_api_host = this.configurationService.config.dev_api_host;
						const prod_api_host = this.configurationService.config.prod_api_host;
						return JSON.parse(
							JSON.stringify(response).replace(new RegExp(dev_api_host, "g"), prod_api_host)
						).Result;
					} else {
						return response.Result;
					}
				})
				.catch(err => {
					return Observable.throw(err);
				})
		);
	}
	getConfigByName(name: string): Observable<any> {
		return this.http.get(`${this.configsEndpoint}/api/config/${name}`).map(response => response).catch(err => {
			return Observable.throw(err);
		});
	}
	editConfig(body: EditConfigApiModel.Request): Observable<any> {
		var model = new EditConfigApiModel.Request(body);

		return this.http
			.put(`${this.configsEndpoint}/api/config/${model.Name}`, model.getRequestBody())
			.map(response => response)
			.catch(err => {
				return Observable.throw(err);
			});
	}

	getLayoutConfigs(): Observable<any> {
		return this.http
			.get(`${this.configsEndpoint}/api/layout-config`)
			.map((response: any) => response)
			.catch(err => {
				return Observable.throw(err);
			});
	}
}
