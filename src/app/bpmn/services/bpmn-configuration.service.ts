import { Injectable, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

// import { getBpmnModuleConfig } from "@soushians/config";
import { BpmnModuleConfig } from "../bpmn.config";
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../bpmn.config";
import { BpmnState } from "../main-container";

@Injectable()
export class BpmnConfigurationService {
	private _config: BpmnModuleConfig;
	get config() {
		return this._config;
	}
	config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);

	constructor(@Inject(MODULE_CONFIG_TOKEN) configFile, private store: Store<BpmnState>) {
		this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
		this.config$.next(this._config);
		// this.store.select(getBpmnModuleConfig).subscribe(userConfig => {
		// 	if (!userConfig) return;
		// 	this._config = Object.assign({}, this._config, userConfig.Config);
		// 	this.config$.next(this._config);
		// });
	}
}
