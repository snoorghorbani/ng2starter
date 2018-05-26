import { InjectionToken } from "@angular/core";

export interface SocketModuleConfig {
	development_uri: string;
	production_uri: string;
	env?: {
		production: boolean;
	};
}
export const MODULE_DEFAULT_CONFIG: SocketModuleConfig = {
	development_uri: "http://localhost:3000",
	production_uri: "",
	env: {
		production: false
	}
};
export const MODULE_CONFIG_TOKEN = new InjectionToken<SocketModuleConfig>("SocketModuleConfig");
