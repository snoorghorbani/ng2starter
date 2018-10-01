import { InjectionToken } from "@angular/core";

import { IModuleConfigMapTypes } from "./models/module-config-map-types.interfce";

export interface WidgetModuleConfig {
	development_uri?: string;
	production_uri?: string;
	env?: {
		production: boolean;
		frontend_server: string;
	};
	endpoints?: {
		get: string;
		find: string;
		upsert: string;
		deleteItem: string;
	};
	types?: IModuleConfigMapTypes;
}
export const MODULE_DEFAULT_CONFIG: WidgetModuleConfig = {
	env: {
		production: false,
		frontend_server: "frontend_server/did/not/set"
	},
	endpoints: {
		upsert: "/api/uiwidget",
		find: "/api/uiwidget",
		get: "/api/uiwidget/${model._id}",
		deleteItem: "/api/uiwidget/${model.widgetId}"
	},
	types: {}
};
export const MODULE_CONFIG_TOKEN = new InjectionToken<WidgetModuleConfig>("WidgetModuleConfig");
