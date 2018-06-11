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
	env: {
		production: boolean;
	};
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
		production: false
	}
};

export const MODULE_CONFIG_TOKEN = new InjectionToken<AuthenticationModuleConfig>("ModuleConfig");
