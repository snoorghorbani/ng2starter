import { ResetPasswordRequestAction, ResetPasswordRequestActionTypes } from "./reset-password-request.actions";

export interface State {
	numberOfRequested: number;
	lastRequestedTime: string;
	disable: boolean;
}
export const initialState: State = {
	numberOfRequested: 0,
	lastRequestedTime: null,
	disable: false
};
export function reducer(state = initialState, action: ResetPasswordRequestAction): State {
	switch (action.type) {
		case ResetPasswordRequestActionTypes.GET_RESET_PASSWORD_LINK: {
			return {
				...state
			};
		}
		case ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START: {
			return {
				...state,
				numberOfRequested: state.numberOfRequested + 1,
				lastRequestedTime: Date.now().toString()
			};
		}
		case ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_SUCCEED: {
			return {
				...state
			};
		}
		case ResetPasswordRequestActionTypes.DISABLE_GET_LINK: {
			return {
				...state,
				disable: true
			};
		}
		case ResetPasswordRequestActionTypes.ENABLE_GET_LINK: {
			return {
				...state,
				disable: false
			};
		}

		default: {
			return state;
		}
	}
}

export var getNumberOfRequeseted = (state: State) => state.numberOfRequested;
export var getStatus = (state: State) => state.disable;
