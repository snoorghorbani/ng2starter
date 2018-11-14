import { Injectable, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs";

import {
	MODULE_CONFIG_TOKEN,
	FrontendAuthenticationModuleConfig,
	MODULE_DEFAULT_CONFIG
} from "../frontend-authentication.config";
import { FrontendAuthenticationState } from "../reducers";

@Injectable({
	providedIn: "root"
})
export class FrontendAuthenticationConfigurationService {
	private _config: FrontendAuthenticationModuleConfig;
	get config() {
		return this._config;
	}
	config$ = new BehaviorSubject(this._config);

	constructor(@Inject(MODULE_CONFIG_TOKEN) configFile: any, private store: Store<FrontendAuthenticationState>) {
		this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
		this.config$.next(this._config);
		// this.store.select(getFrontendAuthenticationModuleConfig).subscribe(storeConfig => {
		// 	if (!storeConfig) return;
		// 	this._config = Object.assign({}, this._config, storeConfig.Config);
		// 	this.config$.next(this._config);
		// });
	}
}
