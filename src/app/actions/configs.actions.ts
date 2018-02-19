import { Action } from "@ngrx/store";

import { GetConfigsApiModel, ConfigModel } from "@soushians/config";

export enum ConfigsActionTypes {
	GET_CONFIGS = "[Config] GET_CONFIGS",
	GET_CONFIGS_START = "[Config] GET_CONFIGS_START",
	GET_CONFIGS_SUCCEED = "[Config] GET_CONFIGS_SUCCEED",
	GET_CONFIGS_FAILED = "[Config] GET_CONFIGS_FAILED"
}

export class GetConfigs implements Action {
	readonly type = ConfigsActionTypes.GET_CONFIGS;
}
export class GetConfigsStart implements Action {
	readonly type = ConfigsActionTypes.GET_CONFIGS_START;
}
export class GetConfigsSucceed implements Action {
	readonly type = ConfigsActionTypes.GET_CONFIGS_SUCCEED;
	constructor(public payload: ConfigModel<any>[]) {}
}
export class GetConfigsFailed implements Action {
	readonly type = ConfigsActionTypes.GET_CONFIGS_FAILED;
}

export type ConfigsAction = GetConfigs | GetConfigsStart | GetConfigsSucceed | GetConfigsFailed;
