import { Injectable, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { getUserModuleConfig } from "@soushians/config";

import { UserModuleConfig, MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../user.config";
// import { UserState } from "../../feature/feature.reducers";

@Injectable({
	providedIn: "root"
})
export class UserConfigurationService {
	private _config: UserModuleConfig;
	get config() {
		return this._config;
	}
	config$ = new BehaviorSubject(this._config);

	constructor(@Inject(MODULE_CONFIG_TOKEN) configFile, private store: Store<any>) {
		this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
		this.config$.next(this._config);
		this.store.select(getUserModuleConfig).subscribe(userConfig => {
			if (!userConfig) return;
			this._config = Object.assign({}, this._config, userConfig.Config);
			this.config$.next(this._config);
		});
	}
}
