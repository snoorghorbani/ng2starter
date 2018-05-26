import { InjectionToken } from "@angular/core";

export interface DiagramModuleConfig {
	endpoints: {};
	env?: {
		production: boolean;
	};
}

export const MODULE_DEFAULT_CONFIG: DiagramModuleConfig = {
	endpoints: {},
	env: {
		production: false
	}
};

export const MODULE_CONFIG_TOKEN = new InjectionToken<DiagramModuleConfig>("DiagramModuleConfig");
