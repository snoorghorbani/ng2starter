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
    afterSignoutRedirectTo?: string;
}
export declare const MODULE_DEFAULT_CONFIG: AuthenticationModuleConfig;
export declare const MODULE_CONFIG_TOKEN: InjectionToken<AuthenticationModuleConfig>;
