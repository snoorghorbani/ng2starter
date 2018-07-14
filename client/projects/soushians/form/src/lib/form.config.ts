import { InjectionToken } from "@angular/core";

export interface FormModuleConfig {
	env?: {
		production: boolean;
		frontend_server: string;
	};
	endpoints?: {
		addForm: string;
		editForm: string;
		getForm: string;
		getList: string;
		deleteForm: string;
	};
}
export const MODULE_DEFAULT_CONFIG: FormModuleConfig = {
	env: {
		production: false,
		frontend_server: "frontend/server/did/not/set"
	},
	endpoints: {
		addForm: "",
		editForm: "",
		getForm: "",
		getList: "",
		deleteForm: ""
	}
};
export const MODULE_CONFIG_TOKEN = new InjectionToken<FormModuleConfig>("FormModuleConfig");
