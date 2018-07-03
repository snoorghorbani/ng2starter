import { InjectionToken } from "@angular/core";
export interface IGridType {
    upsertComponet?: any;
    configComponent?: any;
    type?: "simple" | "complex";
    viewComponent: any;
}
export interface GridModuleConfig {
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
    types?: {
        [key: string]: IGridType;
    };
}
export declare const MODULE_DEFAULT_CONFIG: GridModuleConfig;
export declare const MODULE_CONFIG_TOKEN: InjectionToken<GridModuleConfig>;
