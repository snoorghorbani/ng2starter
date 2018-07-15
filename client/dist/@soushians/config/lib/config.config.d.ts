import { InjectionToken } from "@angular/core";
export interface ConfigModuleConfig {
    env?: {
        production: boolean;
        frontend_server: string;
    };
}
export declare const MODULE_DEFAULT_CONFIG: ConfigModuleConfig;
export declare const MODULE_CONFIG_TOKEN: InjectionToken<ConfigModuleConfig>;
