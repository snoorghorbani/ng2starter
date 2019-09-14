import { MemoizedSelector } from "@ngrx/store";
import * as configList from "./config-list.reducer";
export interface ConfigState {
    list: configList.State;
}
export declare const ConfigReducers: {
    list: typeof configList.Reducer;
};
export interface FeatureState {
    "configs": ConfigState;
}
export declare const selectConfigState: MemoizedSelector<object, ConfigState, import("@ngrx/store").DefaultProjectorFn<ConfigState>>;
export declare const getConfigListState: MemoizedSelector<object, configList.State, import("@ngrx/store").DefaultProjectorFn<configList.State>>;
export declare const getConfigs: MemoizedSelector<object, any[], import("@ngrx/store").DefaultProjectorFn<any[]>>;
export declare const getAppConfig: MemoizedSelector<object, any, import("@ngrx/store").DefaultProjectorFn<any>>;
export declare const getAuthenticationModuleConfig: MemoizedSelector<object, any, import("@ngrx/store").DefaultProjectorFn<any>>;
export declare const getUserModuleConfig: MemoizedSelector<object, any, import("@ngrx/store").DefaultProjectorFn<any>>;
export declare const getConfigModuleConfig: MemoizedSelector<object, any, import("@ngrx/store").DefaultProjectorFn<any>>;
export declare const getFormModuleConfig: MemoizedSelector<object, any, import("@ngrx/store").DefaultProjectorFn<any>>;
export declare const getSocketModuleConfig: MemoizedSelector<object, any, import("@ngrx/store").DefaultProjectorFn<any>>;
