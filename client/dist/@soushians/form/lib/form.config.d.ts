import { InjectionToken } from "@angular/core";
export interface FormModuleConfig {
    env?: {
        production: boolean;
        frontend_server: string;
        server: string;
    };
    endpoints?: {
        addForm: string;
        editForm: string;
        getForm: string;
        getList: string;
        deleteForm: string;
        captchaUrl: string;
    };
}
export declare const MODULE_DEFAULT_CONFIG: FormModuleConfig;
export declare const MODULE_CONFIG_TOKEN: InjectionToken<FormModuleConfig>;
