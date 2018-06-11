import { Injectable, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { getlayoutModuleConfig } from "@soushians/config";

import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../layout.config";
import { UpdateLayoutConfigAction } from "../actions";
import { LayoutModuleConfig } from "../layout.config";
import { FeatureState } from "../reducers";

@Injectable({
	providedIn: "root"
})
export class LayoutConfigurationService {
	// private _config: LayoutConfigModel;
	private _config: any;
	get config() {
		return this._config;
	}
	config$ = new BehaviorSubject<LayoutModuleConfig>(this._config);

	constructor(@Inject(MODULE_CONFIG_TOKEN) configFile, private store: Store<FeatureState>) {
		this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
		this.config$.next(this._config);

		this.store.select(getlayoutModuleConfig).subscribe(config => {
			if (!config) return;
			this.store.dispatch(new UpdateLayoutConfigAction(config.Config));
			this._config = Object.assign({}, this._config, config.Config);
			this.config$.next(this._config);
		});
	}
}
