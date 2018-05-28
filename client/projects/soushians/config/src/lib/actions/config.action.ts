import { Action } from "@ngrx/store";
import { ConfigModel, GetConfigsApiModel } from "../models";

export enum ConfigActionTypes {
	GET_CONFIGS = "[CONFIG] get config",
	CONFIG_LOADED_SUCCEED = "[CONFIG] load config succeed",
	UPDATE_CONFIG = "[CONFIG] update config",
	CONFIG_LOADED_FAILED = "[CONFIG] load config failed"
}

export class GetConfigAction implements Action {
	readonly type = ConfigActionTypes.GET_CONFIGS;
}

export class ConfigLoadedSucceedAction implements Action {
	readonly type = ConfigActionTypes.CONFIG_LOADED_SUCCEED;

	constructor(public payload: ConfigModel<any>[]) {}
}
export class UpdateConfigAction implements Action {
	readonly type = ConfigActionTypes.UPDATE_CONFIG;
	constructor(public payload: ConfigModel<any>) {}
}

export class ConfigLoadedFailedAction implements Action {
	readonly type = ConfigActionTypes.CONFIG_LOADED_FAILED;
}
export type Actions = GetConfigAction | ConfigLoadedSucceedAction | ConfigLoadedFailedAction | UpdateConfigAction;
