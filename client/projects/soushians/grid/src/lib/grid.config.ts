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
	};
	types?: { [key: string]: IGridType };
}

export const MODULE_DEFAULT_CONFIG: GridModuleConfig = {
	env: {
		production: false,
		frontend_server: ""
	},
	endpoints: {
		upsert: "/api/grid",
		find: "/api/grid",
		get: "/api/grid/${model._id}"
	},
	types: {}
};

export const MODULE_CONFIG_TOKEN = new InjectionToken<GridModuleConfig>("GridModuleConfig");
