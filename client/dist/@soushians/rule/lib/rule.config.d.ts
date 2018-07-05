import { InjectionToken, Type } from "@angular/core";
import { GwtStep } from "./models/gwt-step.model";
export interface RuleModuleConfig {
    endpoints?: {
        upsert?: string;
        get?: string;
    };
    stepClasses?: Type<GwtStep>[];
    steps?: GwtStep[];
    env?: {
        production: boolean;
        frontend_server: string;
    };
}
export declare const MODULE_DEFAULT_CONFIG: RuleModuleConfig;
export declare const MODULE_CONFIG_TOKEN: InjectionToken<RuleModuleConfig>;
