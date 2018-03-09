import { InjectionToken } from "@angular/core";

export interface BpmnModuleConfig {
	endpoints: {
		upsert: string;
		get: string;
		getList: string;
		delete: string;
	};
}
export const MODULE_DEFAULT_CONFIG: BpmnModuleConfig = {
	endpoints: {
		upsert: "http://localhost:3000/api/bpmn",
		get: "http://localhost:3000/api/bpmn/${model._id}",
		getList: "http://localhost:3000/api/bpmn",
		delete: "http://localhost:3000/api/bpmn"
	}
};
export const MODULE_CONFIG_TOKEN = new InjectionToken<BpmnModuleConfig>("BpmnModuleConfig");
