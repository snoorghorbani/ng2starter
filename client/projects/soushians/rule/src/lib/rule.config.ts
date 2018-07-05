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
export const MODULE_DEFAULT_CONFIG: RuleModuleConfig = {
	endpoints: {
		upsert: "/api/gwt/scenario",
		get: "/api/gwt/anchor/${model.anchorId}/scenarios"
	},
	stepClasses: [],
	env: {
		production: false,
		frontend_server: "http://localhost:3000"
	}
};
export const MODULE_CONFIG_TOKEN = new InjectionToken<RuleModuleConfig>("RuleModuleConfig");
