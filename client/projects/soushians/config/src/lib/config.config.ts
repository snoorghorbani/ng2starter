import { InjectionToken } from "@angular/core";

export interface ConfigModuleConfig {
	env?: {
		production: boolean;
		frontend_server: string;
	};
}

export const MODULE_DEFAULT_CONFIG: ConfigModuleConfig = {
	env: {
		production: false,
		frontend_server: "config/module/front_end/did/not/set"
	}
};

export const MODULE_CONFIG_TOKEN = new InjectionToken<ConfigModuleConfig>("UserModuleConfig");
