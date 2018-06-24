import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { UserModel } from "./models";

export interface UserModuleConfig {
	endpoints?: {
		//resetPasswordRequest: string;
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
	responseToUserInfo: { (user: Observable<any>): Observable<UserModel> };
	mapUserDisplayName: { (user: Observable<any>): Observable<string> };
}

export const MODULE_DEFAULT_CONFIG: UserModuleConfig = {
	endpoints: {
		//resetPasswordRequest: '',
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
	responseToUserInfo: user$ => user$,
	mapUserDisplayName: user$ => user$.map(user => user.Username)
};

export const MODULE_CONFIG_TOKEN = new InjectionToken<UserModuleConfig>("UserModuleConfig");
