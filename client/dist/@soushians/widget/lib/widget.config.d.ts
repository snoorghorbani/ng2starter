import { InjectionToken } from "@angular/core";
import { IModuleConfigMapTypes } from "./models/module-config-map-types.interfce";
export interface WidgetModuleConfig {
    development_uri?: string;
    production_uri?: string;
    env?: {
        production: boolean;
    };
    endpoints?: {
        get: string;
        find: string;
        upsert: string;
    };
    types?: IModuleConfigMapTypes;
}
export declare const MODULE_DEFAULT_CONFIG: WidgetModuleConfig;
export declare const MODULE_CONFIG_TOKEN: InjectionToken<WidgetModuleConfig>;
