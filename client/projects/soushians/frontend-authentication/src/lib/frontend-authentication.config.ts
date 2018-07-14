import { InjectionToken } from "@angular/core";

export interface FrontendAuthenticationModuleConfig {
	endpoints?: {
		signOut?: string;
		signIn?: string;
		whoAmI?: string;
	};
	forms?: {
		signIn: string;
	};
	env: {
		production: boolean;
		frontend_server: string;
	};
	afterSignoutRedirectTo?: string;
}

export const MODULE_DEFAULT_CONFIG: FrontendAuthenticationModuleConfig = {
	endpoints: {
		signOut: "",
		signIn: "",
		whoAmI: ""
	},
	forms: {
		signIn: ""
	},
	env: {
		production: false,
		frontend_server: "frontend/server/not/set"
	},
	afterSignoutRedirectTo: "/"
};

export const MODULE_CONFIG_TOKEN = new InjectionToken<FrontendAuthenticationModuleConfig>("ModuleConfig");
