import { InjectionToken } from "@angular/core";

export interface PageModuleConfig {
	env?: {
		production: boolean;
		frontend_server: string;
	};
	endpoints?: {
		get: string;
		delete: string;
		find: string;
		upsert: string;
	};
}
export const MODULE_DEFAULT_CONFIG: PageModuleConfig = {
	env: {
		production: false,
		frontend_server: "frontend_server/did/not/set"
	},
	endpoints: {
		upsert: "/api/page",
		delete: "/api/page/${model._id}",
		find: "/api/page",
		get: "/api/page/${model.name}"
	}
};
export const MODULE_CONFIG_TOKEN = new InjectionToken<PageModuleConfig>("PageModuleConfig");
