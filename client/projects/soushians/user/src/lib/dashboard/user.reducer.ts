import { UserModel } from "../models";
import { UserAction, UserActionTypes } from "./user.actions";

export interface State {
	loaded: boolean;
	data: UserModel;
}
export const initialState: State = {
	loaded: false,
	data: new UserModel()
};

export function userReducer(state = initialState, action: UserAction): State {
	switch (action.type) {
		case UserActionTypes.USER_SELECTED: {
			return {
				...state,
				loaded: true,
				data: action.payload
			};
		}
		case UserActionTypes.REFRESH_USER_INFO: {
			return {
				...state,
				loaded: true,
				data: action.payload
			};
		}

		default: {
			return state;
		}
	}
}

export const getUser = (state: State) => state.data;
