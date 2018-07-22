import { BehaviorSubject } from "rxjs";
import { Inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import { PageModuleConfig, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN } from "../page.config";
import { AppState } from "../page.reducer";

@Injectable()
export class PageConfigurationService {
	private _config: PageModuleConfig;
	get config() {
		return this._config;
	}
	config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);
	constructor(@Inject(MODULE_CONFIG_TOKEN) configFile, private store: Store<AppState>) {
		this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
		this.config$.next(this._config);
		// this.store.select(getPageModuleConfig).subscribe((pageConfig) => {
		// 	if (!pageConfig) {
		// 		return;
		// 	}
		// 	this._config = Object.assign({}, this._config, pageConfig.Config);
		// 	this.config$.next(this._config);
		// });
	}
}
