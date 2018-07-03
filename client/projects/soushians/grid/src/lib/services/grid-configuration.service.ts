import { BehaviorSubject } from "rxjs";
import { Inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import { GridModuleConfig, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN } from "../grid.config";
import { AppState } from "../grid.reducer";

@Injectable()
export class GridConfigurationService {
	private _config: GridModuleConfig;
	get config() {
		return this._config;
	}
	config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);
	constructor(@Inject(MODULE_CONFIG_TOKEN) configFile, private store: Store<AppState>) {
		this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
		this.config$.next(this._config);
		// this.store.select(getGridModuleConfig).subscribe((gridConfig) => {
		// 	if (!gridConfig) {
		// 		return;
		// 	}
		// 	this._config = Object.assign({}, this._config, gridConfig.Config);
		// 	this.config$.next(this._config);
		// });
	}
}
