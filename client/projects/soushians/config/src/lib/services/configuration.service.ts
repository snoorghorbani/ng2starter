import { Injectable, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { ConfigModuleConfig, MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../config.config";
import { getConfigModuleConfig } from "../reducers";

@Injectable({
	providedIn: "root"
})
export class ConfigurationService {
	private _config: ConfigModuleConfig;
	get config() {
		return this._config;
	}
	config$ = new BehaviorSubject(this._config);

	constructor(@Inject(MODULE_CONFIG_TOKEN) configFile: ConfigModuleConfig, private store: Store<any>) {
		this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
		this.config$.next(this._config);
		this.store.select(getConfigModuleConfig).subscribe(configConfig => {
			if (!configConfig) return;
			this._config = Object.assign({}, this._config, configConfig.Config);
			this.config$.next(this._config);
		});
	}
}
