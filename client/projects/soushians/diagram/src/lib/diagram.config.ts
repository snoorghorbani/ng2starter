import { InjectionToken } from "@angular/core";

export interface DiagramModuleConfig {
	endpoints?: {};
	env?: {
		production: boolean;
		frontend_server: string;
	};
}

export const MODULE_DEFAULT_CONFIG: DiagramModuleConfig = {
	endpoints: {},
	env: {
		production: false,
		frontend_server: "frontend/server/did/not/set"
	}
};

export const MODULE_CONFIG_TOKEN = new InjectionToken<DiagramModuleConfig>("DiagramModuleConfig");
