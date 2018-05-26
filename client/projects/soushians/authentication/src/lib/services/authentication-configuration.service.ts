import { Injectable, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs";

import { getAuthenticationModuleConfig } from "@soushians/config";

import { MODULE_CONFIG_TOKEN, AuthenticationModuleConfig, MODULE_DEFAULT_CONFIG } from "../authentication.config";
import { AuthenticationState } from "../reducers";

@Injectable()
export class AuthenticationConfigurationService {
	private _config: AuthenticationModuleConfig;
	get config() {
		return this._config;
	}
	config$ = new BehaviorSubject(this._config);

	constructor(@Inject(MODULE_CONFIG_TOKEN) configFile: any, private store: Store<AuthenticationState>) {
		this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
		this.config$.next(this._config);
		this.store.select(getAuthenticationModuleConfig).subscribe(storeConfig => {
			if (!storeConfig) return;
			this._config = Object.assign({}, this._config, storeConfig.Config);
			this.config$.next(this._config);
		});
	}
}
