import { InjectionToken } from "@angular/core";

export interface FormModuleConfig {}

export const MODULE_DEFAULT_CONFIG: FormModuleConfig = {};

export const MODULE_CONFIG_TOKEN = new InjectionToken<FormModuleConfig>("FormModuleConfig");
