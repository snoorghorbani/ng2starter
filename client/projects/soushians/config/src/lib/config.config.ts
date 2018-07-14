import { InjectionToken } from "@angular/core";

export interface ConfigModuleConfig {
	dev_api_host?: string;
	prod_api_host?: string;
	env?: {
		production: boolean;
	};
}

export const MODULE_DEFAULT_CONFIG: ConfigModuleConfig = {
	dev_api_host: "dev_api_host/did/not/set",
	prod_api_host: "config/module/config/not/set",
	env: {
		production: false
	}
};

export const MODULE_CONFIG_TOKEN = new InjectionToken<ConfigModuleConfig>("UserModuleConfig");
