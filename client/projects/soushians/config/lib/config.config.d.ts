import { InjectionToken } from '@angular/core';
export interface ConfigModuleConfig {
    dev_api_host?: string;
    prod_api_host?: string;
    env?: {
        production: boolean;
    };
}
export declare const MODULE_DEFAULT_CONFIG: ConfigModuleConfig;
export declare const MODULE_CONFIG_TOKEN: InjectionToken<ConfigModuleConfig>;
