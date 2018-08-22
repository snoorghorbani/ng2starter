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
	env?: {
		production: boolean;
		frontend_server: string;
		server: string;
	};
	afterSignoutRedirectTo?: string;
}

export const MODULE_DEFAULT_CONFIG: FrontendAuthenticationModuleConfig = {
	endpoints: {
		signIn: "/api/user/signin",
		signOut: "/api/user/signout",
		whoAmI: "/api/user/account/profile"
	},
	forms: {
		signIn: "5a951cfbfd791632a09b3bc6"
	},
	env: {
		production: false,
		frontend_server: "auth/module/frontend/server/not/set",
		server: "auth/module/server/not/set"
	},
	afterSignoutRedirectTo: "/"
};

export const MODULE_CONFIG_TOKEN = new InjectionToken<FrontendAuthenticationModuleConfig>("ModuleConfig");
