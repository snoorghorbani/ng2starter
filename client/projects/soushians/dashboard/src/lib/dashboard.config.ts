import { InjectionToken } from "@angular/core";

export interface DashboardModuleConfig {
	endpoints: {
		addWidget: string;
		getWidget: string;
		getWidgetList: string;
		deleteWidget: string;
		editWidget: string;
		bulkEditWidgets: string;
	};
}
export const MODULE_DEFAULT_CONFIG: DashboardModuleConfig = {
	endpoints: {
		addWidget: "http://localhost:3000/api/widget",
		getWidget: "http://localhost:3000/api/widget/${model._id}",
		getWidgetList: "http://localhost:3000/api/widget",
		deleteWidget: "http://localhost:3000/api/widget/${model._id}",
		bulkEditWidgets: "http://localhost:3000/api/widget",
		editWidget: "http://localhost:3000/api/widget/${model._id}"
	}
};
export const MODULE_CONFIG_TOKEN = new InjectionToken<DashboardModuleConfig>("DashboardModuleConfig");
