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
export const MODULE_DEFAULT_CONFIG: WidgetModuleConfig = {
	development_uri: "http://localhost:3000",
	production_uri: "",
	env: {
		production: false
	},
	endpoints: {
		upsert: "http://localhost:3000/api/uiwidget",
		find: "http://localhost:3000/api/uiwidget",
		get: "http://localhost:3000/api/uiwidget/${model._id}"
	},
	types: {}
};
export const MODULE_CONFIG_TOKEN = new InjectionToken<WidgetModuleConfig>("WidgetModuleConfig");
