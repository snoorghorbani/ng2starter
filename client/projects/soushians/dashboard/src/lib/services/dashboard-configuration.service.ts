import { Injectable, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { DashboardModuleConfig } from "../dashboard.config";
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../dashboard.config";
import { MainContainerState } from "../../main-container/main-container.reducers";

@Injectable()
export class DashboardConfigurationService {
	private _config: DashboardModuleConfig;
	get config() {
		return this._config;
	}
	config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);

	constructor(@Inject(MODULE_CONFIG_TOKEN) configFile, private store: Store<MainContainerState>) {
		this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
		this.config$.next(this._config);
		// this.store.select(getFormModuleConfig).subscribe(userConfig => {
		// 	debugger;
		// 	if (!userConfig) return;
		// 	this._config = Object.assign({}, this._config, userConfig.Config);
		// 	this.config$.next(this._config);
		// });
	}
}
