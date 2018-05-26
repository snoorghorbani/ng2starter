import { InjectionToken } from "@angular/core";

export interface FormModuleConfig {
	endpoints: {
		addForm: string;
		editForm: string;
		getForm: string;
		getList: string;
		deleteForm: string;
	};
}
export const MODULE_DEFAULT_CONFIG: FormModuleConfig = {
	endpoints: {
		addForm: "",
		editForm: "",
		getForm: "",
		getList: "",
		deleteForm: ""
	}
};
export const MODULE_CONFIG_TOKEN = new InjectionToken<FormModuleConfig>("FormModuleConfig");
