import { InjectionToken } from "@angular/core";
export interface SocketModuleConfig {
    env?: {
        production: boolean;
        frontend_server: string;
    };
}
export declare const MODULE_DEFAULT_CONFIG: SocketModuleConfig;
export declare const MODULE_CONFIG_TOKEN: InjectionToken<SocketModuleConfig>;
