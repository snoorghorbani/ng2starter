import { InjectionToken } from "@angular/core";
export interface PageModuleConfig {
    env?: {
        production: boolean;
        frontend_server: string;
    };
    endpoints?: {
        get: string;
        find: string;
        upsert: string;
    };
}
export declare const MODULE_DEFAULT_CONFIG: PageModuleConfig;
export declare const MODULE_CONFIG_TOKEN: InjectionToken<PageModuleConfig>;
