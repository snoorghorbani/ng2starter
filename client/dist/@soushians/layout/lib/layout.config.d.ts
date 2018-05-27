import { InjectionToken } from "@angular/core";
import { LayoutConfigModel } from "@soushians/config";
export interface LayoutModuleConfig extends LayoutConfigModel {
}
export declare const MODULE_DEFAULT_CONFIG: LayoutModuleConfig;
export declare const MODULE_CONFIG_TOKEN: InjectionToken<LayoutModuleConfig>;
