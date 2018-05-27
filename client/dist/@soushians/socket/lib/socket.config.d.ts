import { InjectionToken } from "@angular/core";
export interface SocketModuleConfig {
    development_uri: string;
    production_uri: string;
    env?: {
        production: boolean;
    };
}
export declare const MODULE_DEFAULT_CONFIG: SocketModuleConfig;
export declare const MODULE_CONFIG_TOKEN: InjectionToken<SocketModuleConfig>;
