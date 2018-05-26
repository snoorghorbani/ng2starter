import { responseStatusTypes } from "@soushians/shared";
import { ProfileViewModel } from "../models";
import { SearchActionTypes, SearchAction } from "./search.actions";

export interface State {
	status: responseStatusTypes;
	data: ProfileViewModel.Response;
}
export const initialState: State = {
	status: "pristine",
	data: new ProfileViewModel.Response()
};
export function reducer(state = initialState, action: SearchAction): State {
	switch (action.type) {
		case SearchActionTypes.SEARCH: {
			return {
				...state,
				status: "dirty",
				data: new ProfileViewModel.Response()
			};
		}
		case SearchActionTypes.SEARCH_START: {
			return {
				...state,
				status: "pending"
			};
		}
		case SearchActionTypes.SEARCH_SUCCEED: {
			return {
				...state,
				status: "succeed",
				data: action.payload
			};
		}
		case SearchActionTypes.SEARCH_FAILED: {
			return {
				...state,
				status: "failed"
			};
		}
		case SearchActionTypes.CLEAR_SEARCHED_USER: {
			return initialState;
		}

		default: {
			return state;
		}
	}
}

export var getStatus = (state: State) => state.status;
export var getUserInfo = (state: State) => state.data;
