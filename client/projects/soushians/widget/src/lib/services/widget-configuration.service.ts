import { BehaviorSubject } from "rxjs";
import { Inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import { WidgetModuleConfig, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN } from "../widget.config";
import { AppState } from "../widget.reducer";

@Injectable()
export class WidgetConfigurationService {
	private _config: WidgetModuleConfig;
	get config() {
		return this._config;
	}
	config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);
	constructor(@Inject(MODULE_CONFIG_TOKEN) configFile, private store: Store<AppState>) {
		this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
		this.config$.next(this._config);
		// this.store.select(getWidgetModuleConfig).subscribe((widgetConfig) => {
		// 	if (!widgetConfig) {
		// 		return;
		// 	}
		// 	this._config = Object.assign({}, this._config, widgetConfig.Config);
		// 	this.config$.next(this._config);
		// });
	}
}
