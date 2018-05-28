import { Action } from '@ngrx/store';
import { ConfigModel } from '../models';
export declare enum ConfigActionTypes {
    GET_CONFIGS = "[CONFIG] get config",
    CONFIG_LOADED_SUCCEED = "[CONFIG] load config succeed",
    CONFIG_LOADED_FAILED = "[CONFIG] load config failed",
}
export declare class GetConfigAction implements Action {
    readonly type: ConfigActionTypes;
}
export declare class ConfigLoadedSucceedAction implements Action {
    payload: ConfigModel<any>[];
    readonly type: ConfigActionTypes;
    constructor(payload: ConfigModel<any>[]);
}
export declare class ConfigLoadedFailedAction implements Action {
    readonly type: ConfigActionTypes;
}
export declare type Actions = GetConfigAction | ConfigLoadedSucceedAction | ConfigLoadedFailedAction;
