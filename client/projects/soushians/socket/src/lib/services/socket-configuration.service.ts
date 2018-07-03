import { BehaviorSubject } from "rxjs";
import { Inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import { getSocketModuleConfig } from "@soushians/config";

import { SocketModuleConfig, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN } from "../socket.config";
import { AppState } from "../socket.reducer";

@Injectable()
export class SocketConfigurationService {
	private _config: SocketModuleConfig;
	get config() {
		return this._config;
	}
	config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);

	constructor(@Inject(MODULE_CONFIG_TOKEN) configFile, private store: Store<AppState>) {
		this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
		this.config$.next(this._config);
		this.store.select(getSocketModuleConfig).subscribe(userConfig => {
			if (!userConfig) {
				return;
			}
			this._config = Object.assign({}, this._config, userConfig.Config);
			this.config$.next(this._config);
		});
	}
}
