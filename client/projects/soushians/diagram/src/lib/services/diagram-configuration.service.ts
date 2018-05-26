import { Injectable, Inject } from "@angular/core";

import { MODULE_CONFIG_TOKEN, DiagramModuleConfig, MODULE_DEFAULT_CONFIG } from "../diagram.config";

@Injectable()
export class DiagramConfigurationService {
	private _config: DiagramModuleConfig;
	get config() {
		return this._config;
	}

	constructor(@Inject(MODULE_CONFIG_TOKEN) config) {
		this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, config);
	}
}
