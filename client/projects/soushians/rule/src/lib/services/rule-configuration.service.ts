import { Injectable, Inject, Injector } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

// import { getRuleModuleConfig } from "@soushians/config";
import { RuleModuleConfig } from "../rule.config";
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../rule.config";
import { RuleState } from "../rule.reducers";

@Injectable()
export class RuleConfigurationService {
	private _config: RuleModuleConfig;
	get config() {
		return this._config;
	}
	config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);

	constructor(
		@Inject(MODULE_CONFIG_TOKEN) configFile: RuleModuleConfig,
		private store: Store<RuleState>,
		private injector: Injector
	) {
		// instantiate steps and used them
		configFile.steps = configFile.stepClasses.map(step => new step(this.injector));

		this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);

		this.config$.next(this._config);

		// this.store.select(getRuleModuleConfig).subscribe(userConfig => {
		// 	if (!userConfig) return;
		// 	this._config = Object.assign({}, this._config, userConfig.Config);
		// 	this.config$.next(this._config);
		// });
	}
}
