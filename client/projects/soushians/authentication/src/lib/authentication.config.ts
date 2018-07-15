import { InjectionToken } from "@angular/core";

export interface AuthenticationModuleConfig {
	endpoints?: {
		signOut?: string;
		signIn?: string;
		whoAmI?: string;
	};
	forms?: {
		signIn: string;
	};
	env?: {
		production: boolean;
		frontend_server: string;
		server: string;
	};
	afterSignoutRedirectTo?: string;
}

export const MODULE_DEFAULT_CONFIG: AuthenticationModuleConfig = {
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
		frontend_server: "auth/module/frontend_server/did/not/set",
		server: "auth/module/server/did/not/set"
	},
	afterSignoutRedirectTo: "/"
};

export const MODULE_CONFIG_TOKEN = new InjectionToken<AuthenticationModuleConfig>("ModuleConfig");
