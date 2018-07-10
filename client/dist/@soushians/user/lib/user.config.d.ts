import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { UserModel } from "./models";
export interface UserModuleConfig {
    endpoints?: {
        changePassword?: string;
        editProfile?: string;
        getAccountInfo?: string;
        profileInformation?: string;
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
export declare const MODULE_DEFAULT_CONFIG: UserModuleConfig;
export declare const MODULE_CONFIG_TOKEN: InjectionToken<UserModuleConfig>;
