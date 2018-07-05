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
    env: {
        production: boolean;
    };
    afterSignoutRedirectTo?: string;
}
export declare const MODULE_DEFAULT_CONFIG: FrontendAuthenticationModuleConfig;
export declare const MODULE_CONFIG_TOKEN: InjectionToken<FrontendAuthenticationModuleConfig>;
