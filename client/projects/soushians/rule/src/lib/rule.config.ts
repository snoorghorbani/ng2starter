import { InjectionToken, Type } from "@angular/core";
import { GwtStep } from "./models/gwt-step.model";

export interface RuleModuleConfig {
	endpoints?: {};
	stepClasses?: Type<GwtStep>[];
	steps?: GwtStep[];
}
export const MODULE_DEFAULT_CONFIG: RuleModuleConfig = {
	endpoints: {},
	stepClasses: []
};
export const MODULE_CONFIG_TOKEN = new InjectionToken<RuleModuleConfig>("RuleModuleConfig");
