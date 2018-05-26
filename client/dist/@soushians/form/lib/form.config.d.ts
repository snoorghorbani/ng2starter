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
export declare const MODULE_DEFAULT_CONFIG: FormModuleConfig;
export declare const MODULE_CONFIG_TOKEN: InjectionToken<FormModuleConfig>;
