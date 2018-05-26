import { InjectionToken } from "@angular/core";
export interface UserModuleConfig {
    endpoints: {
        changePassword: string;
        editProfile: string;
        getUserInfo: string;
        profileInformation: string;
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
export declare const MODULE_DEFAULT_CONFIG: UserModuleConfig;
export declare const MODULE_CONFIG_TOKEN: InjectionToken<UserModuleConfig>;
