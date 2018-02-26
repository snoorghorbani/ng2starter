import { Injectable, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { FormModuleConfig } from "../form.config";
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../form.config";
import { getFormModuleConfig } from "@soushians/config";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FormState } from "app/form/main-container/main-container.reducers";

@Injectable()
export class FormConfigurationService {
	private _config: FormModuleConfig;
	get config() {
		return this._config;
	}
	config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);

	constructor(@Inject(MODULE_CONFIG_TOKEN) configFile, private store: Store<FormState>) {
		this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
		this.config$.next(this._config);
		this.store.select(getFormModuleConfig).subscribe((userConfig) => {
			if (!userConfig) return;
			this._config = Object.assign({}, this._config, userConfig.Config);
			this.config$.next(this._config);
		});
	}
}
