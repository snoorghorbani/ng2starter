import { InjectionToken } from "@angular/core";
export interface DiagramModuleConfig {
    endpoints: {};
    env?: {
        production: boolean;
    };
}
export declare const MODULE_DEFAULT_CONFIG: DiagramModuleConfig;
export declare const MODULE_CONFIG_TOKEN: InjectionToken<DiagramModuleConfig>;
