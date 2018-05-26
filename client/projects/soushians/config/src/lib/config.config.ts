import { InjectionToken } from '@angular/core';

export interface ConfigModuleConfig {
	dev_api_host?: string;
	prod_api_host?: string;
	env?: {
		production: boolean;
	};
}

export const MODULE_DEFAULT_CONFIG: ConfigModuleConfig = {
	dev_api_host: 'http://localhost:3000',
	prod_api_host: 'http://5.196.149.107:3000',
	env: {
		production: false
	}
};

export const MODULE_CONFIG_TOKEN = new InjectionToken<ConfigModuleConfig>('UserModuleConfig');
