import { InjectionToken } from "@angular/core";

export interface SocketModuleConfig {
	env?: {
		production: boolean;
		frontend_server: string;
	};
}
export const MODULE_DEFAULT_CONFIG: SocketModuleConfig = {
	env: {
		production: false,
		frontend_server: "http://localhost:3000"
	}
};
export const MODULE_CONFIG_TOKEN = new InjectionToken<SocketModuleConfig>("SocketModuleConfig");
