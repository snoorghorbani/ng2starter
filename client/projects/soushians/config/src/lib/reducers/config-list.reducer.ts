﻿import * as config from "../actions/config.action";
import { ConfigModel, LayoutConfigModel } from "../models";

export interface State {
	data: any[];
}

const initialState: State = {
	data: []
};

export function Reducer(state = initialState, action: config.Actions): State {
	switch (action.type) {
		case config.ConfigActionTypes.CONFIG_LOADED_SUCCEED:
			return {
				...state,
				data: action.payload
			};
		case config.ConfigActionTypes.UPDATE_CONFIG:
			return {
				...state,
				data: state.data.map(config => {
					if (config._id == action.payload._id) config.Config = action.payload.Config;
					return config;
				})
			};
		default:
			return state;
	}
}

export const getConfigs = (state: State) => state.data;
export const getAppConfig = (state: State) => state.data.find(config => config.Name == "app_config");
export const getAuthenticationModuleConfig = (state: State) =>
	state.data.find(config => config.Name == "authentication_module_config");
export const getUserModuleConfig = (state: State) => state.data.find(config => config.Name == "user_module_config");
export const getlayoutModuleConfig = (state: State) => state.data.find(config => config.Name == "layout_config") as any;
export const getConfigModuleConfig = (state: State) =>
	state.data.find(config => config.Name == "config_module_config") as any;
export const getFormModuleConfig = (state: State) =>
	state.data.find(config => config.Name == "form_module_config") as any;
export const getSocketModuleConfig = (state: State) =>
	state.data.find(config => config.Name == "socket_module_config") as any;
