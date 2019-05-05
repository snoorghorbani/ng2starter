import { InjectionToken } from "@angular/core";
import { Observable, of } from "rxjs";

export interface AuthenticationModuleConfig {
	mode?: string; // "token-base" | "cookie-base";
	token?: {
		time: number;
	};
	server?: string;
	endpoints?: {
		signOut?: string;
		signOutMethod?: string;
		signIn?: string;
		signUp?: string;
		whoAmI?: string;
	};
	forms?: {
		signIn: string;
		signUp: string;
	};
	env?: {
		production: boolean;
		frontend_server: string;
		server: string;
	};
	afterSignoutRedirectTo?: string;
	signupValidator?: (value: any) => Observable<boolean>;
	afterSignin?: (user: any) => void;
	responseToUser?: (user: any) => any;
}

export const MODULE_DEFAULT_CONFIG: AuthenticationModuleConfig = {
	mode: "cookie-base",
	token: {
		time: 24 * 12 * 60 * 60
	},
	server: "frontend_server",
	endpoints: {
		signOut: "",
		signOutMethod: "get",
		signIn: "",
		signUp: "",
		whoAmI: ""
	},
	forms: {
		signIn: "",
		signUp: ""
	},
	env: {
		production: false,
		frontend_server: "auth/module/frontend_server/did/not/set",
		server: "auth/module/server/did/not/set"
	},
	afterSignoutRedirectTo: "/",
	signupValidator: value => of(true),
	afterSignin: user => {},
	responseToUser: user => user
};

export const MODULE_CONFIG_TOKEN = new InjectionToken<AuthenticationModuleConfig>("ModuleConfig");
