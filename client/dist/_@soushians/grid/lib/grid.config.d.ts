import { InjectionToken } from "@angular/core";
export interface IGridType {
    upsertComponet?: any;
    configComponent?: any;
    type?: "simple" | "complex";
    viewComponent: any;
}
export interface GridModuleConfig {
    env?: {
        production: boolean;
        frontend_server: string;
    };
    endpoints?: {
        get: string;
        find: string;
        upsert: string;
        update_item: string;
        update_item_access: string;
    };
    types?: {
        [key: string]: IGridType;
    };
}
export declare const MODULE_DEFAULT_CONFIG: GridModuleConfig;
export declare const MODULE_CONFIG_TOKEN: InjectionToken<GridModuleConfig>;
