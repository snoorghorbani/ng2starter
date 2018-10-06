import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { UserModel } from "./models";

export interface UserModuleConfig {
	server?: string;
	env?: {
		production: boolean;
		frontend_server: string;
		server: string;
	};
	endpoints?: {
		// resetPasswordRequest: string;
		changePassword?: string;
		editProfile?: string;
		getAccountInfo?: string;
		profileInformation?: string;
		// resetPassword: string;
	};
	forms?: {
		profile_edit: string;
	};
	dashboardLinks?: {
		route: string;
		icon: string;
		title: string;
	}[];
	responseToUserInfo?: (user: Observable<any>) => Observable<UserModel>;
	mapUserDisplayName?: (user: Observable<any>) => Observable<string>;
}

export const MODULE_DEFAULT_CONFIG: UserModuleConfig = {
	server: "frontend_server",
	env: {
		production: false,
		frontend_server: "user/module/frontend/server/did/not/set",
		server: "user/module/server/did/not/set"
	},
	endpoints: {
		// resetPasswordRequest: '',
		changePassword: "",
		editProfile: "",
		getAccountInfo: "",
		profileInformation: ""
		// resetPassword: '',
	},
	forms: {
		profile_edit: ""
	},
	dashboardLinks: [],
	responseToUserInfo: (user$) => user$,
	mapUserDisplayName: (user$) =>
		user$.map((user) => {
			debugger;
			return user.Username;
		})
};

export const MODULE_CONFIG_TOKEN = new InjectionToken<UserModuleConfig>("UserModuleConfig");
