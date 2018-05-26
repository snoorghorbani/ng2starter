import * as config from "../actions/config.action";
export interface State {
    data: any[];
}
export declare function Reducer(state: State, action: config.Actions): State;
export declare const getConfigs: (state: State) => any[];
export declare const getAppConfig: (state: State) => any;
export declare const getAuthenticationModuleConfig: (state: State) => any;
export declare const getUserModuleConfig: (state: State) => any;
export declare const getlayoutModuleConfig: (state: State) => any;
export declare const getConfigModuleConfig: (state: State) => any;
export declare const getFormModuleConfig: (state: State) => any;
export declare const getSocketModuleConfig: (state: State) => any;
