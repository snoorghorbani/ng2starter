import { ConfigsActionTypes, ConfigsAction } from "../actions";
import { GetConfigsApiModel } from "@soushians/config";

export interface State {
	loaded: boolean;
	config: GetConfigsApiModel.Response;
}
export const initialState: State = {
	loaded: false,
	config: new GetConfigsApiModel.Response()
};

export function configReducer(state = initialState, action: ConfigsAction): State {
	switch (action.type) {
		case ConfigsActionTypes.GET_CONFIGS: {
			return {
				...state,
				loaded: true
				// config: action.payload,
			};
		}
		case ConfigsActionTypes.GET_CONFIGS_START: {
			return {
				...state,
				loaded: true
				//  config: action.payload,
			};
		}

		default: {
			return state;
		}
	}
}

export const ConfigInfo = (state: State) => state.config;
