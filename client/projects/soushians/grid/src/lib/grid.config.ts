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
	types?: { [key: string]: IGridType };
}
export const MODULE_DEFAULT_CONFIG: GridModuleConfig = {
	development_uri: "http://localhost:3000",
	production_uri: "",
	env: {
		production: false
	},
	endpoints: {
		upsert: "http://localhost:3000/api/grid",
		find: "http://localhost:3000/api/grid",
		get: "http://localhost:3000/api/grid/${model._id}"
	},
	types: {}
};
export const MODULE_CONFIG_TOKEN = new InjectionToken<GridModuleConfig>("GridModuleConfig");
