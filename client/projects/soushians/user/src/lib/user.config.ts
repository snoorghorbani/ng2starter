import { InjectionToken } from "@angular/core";

export interface UserModuleConfig {
	endpoints: {
		//resetPasswordRequest: string;
		changePassword: string;
		editProfile: string;
		getUserInfo: string;
		profileInformation: string;
		// resetPassword: string;
	};
	forms: {
		profile_edit: string;
	};
	dashboardLinks: {
		route: string;
		icon: string;
		title: string;
	}[];
}

export const MODULE_DEFAULT_CONFIG: UserModuleConfig = {
	endpoints: {
		//resetPasswordRequest: '',
		changePassword: "",
		editProfile: "",
		getUserInfo: "",
		profileInformation: ""
		// resetPassword: '',
	},
	forms: {
		profile_edit: ""
	},
	dashboardLinks: []
};

export const MODULE_CONFIG_TOKEN = new InjectionToken<UserModuleConfig>("UserModuleConfig");
